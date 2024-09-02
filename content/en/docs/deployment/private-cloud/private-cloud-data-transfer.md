---
title: "Migrating Data in Private Cloud Environments (Preview)"
linktitle: "Migrate Data (Preview)"
url: /developerportal/deploy/private-cloud-data-transfer/
description: "Describes how to migrate data between Private Cloud environments"
weight: 60
---
## Introduction

{{% alert color="warning" %}}This feature is currently in preview mode - to collect feedback about the UX and features which should be added to the final version.{{% /alert %}}

The Private Cloud data migration tool allows you to:

* export the database and files from a Private Cloud environment into a backup file
* import the database and files from a previously exported backup file into an environment

The Private Cloud data migration tool is compatible with [backup files](/developerportal/operate/restore-backup/#format-of-backup-file) from the Mendix Cloud, allowing you to transfer application data between the Mendix Cloud and Mendix for Private Cloud.

When exporting files from an environment, the export only includes files which are in use (that is, which are referenced by a `System.FileDocument` entity). Any files that are not used by the app are ignored.

{{% alert color="info" %}}
Although this tool can also be used to backup and restore your Mendix for Private Cloud databases and files regularly, Mendix recommends implementing your own backup and restore processes which take advantage of the tools provided by your database vendor or cloud provider.
{{% /alert %}}

## Prerequisites

### Database and File Storage Requirements

The following database is supported:

* PostgreSQL (any version [supported by Mendix for Private Cloud](/developerportal/deploy/private-cloud-supported-environments/))

{{% alert color="warning" %}}
To remain compatible with Mendix Cloud backups, other databases types (such as SQL Server) are not supported.

To convert a database to a different type, you would need to use a temporary, intermediate environment with a PostgreSQL database and use the [built-in](/howto/data-models/migrating-your-mendix-database/) Mendix Runtime `SourceDatabase` features to convert the database to or from PostgreSQL.
{{% /alert %}}

The following file storage options are supported:

* Amazon S3
* Minio

{{% alert color="warning" %}}
The data transfer tool only supports static and AWS IRSA authentication.
If the database or file storage uses CSI Secrets Storage to store credentials, the data transfer tool will fail to authenticate.
{{% /alert %}}

### Environment Requirements

The data transfer tool needs the following:

* [pg_dump](https://www.postgresql.org/docs/12/app-pgdump.html) and [pg_restore](https://www.postgresql.org/docs/12/app-pgrestore.html) binaries in a location listed in the system path
* Network access to the PostgreSQL server and S3/Minio storage
    * If the database is running inside the cluster or on a Virtual Private Cloud (VPC), it might not be reachable from outside the cluster
* Permissions to call the Kubernetes API
    * These calls are used to get the database and file storage credentials for an environment
* For environments using AWS IRSA, an IAM Role that can access the environment's bucket and database.

In most cases, this means the data transfer tool cannot run from a local machine and needs to run in a Kubernetes pod acting as a [jump server](https://en.wikipedia.org/wiki/Jump_server) (a [jump pod](#jump-pod)).

## Using the Data Transfer Tool

### Downloading the Data Transfer tool

Download and extract the tool for your operating system. If you are planning to run the data transfer tool in a Pod, download the Linux version.

* [Linux](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.4-linux-amd64.tar.gz)
* [macOS](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.4-macos-amd64.tar.gz)
* [Windows](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.4-windows-amd64.zip)

### Running the Data Transfer Tool Locally

If your local machine has network access to the database and file storage, you can run it directly on your machine.

{{% alert color="warning" %}}
The tools will only work if you have access to the cluster. Setting up the network to access your cluster is out of the scope of this document. If it is not possible to connect to the database or file storage directly, a [jump pod](#jump-pod) also can be use this tools inside your cluster.
{{% /alert %}}

The tool will use the current user’s kubeconfig and Kubernetes credentials (or the service account if it is running in the Pod) to retrieve database and file storage credentials from the environment.
For environments that use AWS IRSA for authentication, the current user's AWS credentials will be used to connect to the database and S3 storage.

To create a backup file, use the following command:

```shell
./mxpc-data-migration backup -n <namespace> -e <environment> -f <file>
```

* `-n <namespace>` - the namespace containing the environment
* `-e <environment>` - the environment to backup
* `-f <file>` - destination file where the backup should be saved

To restore a backup file into your environment, use the following command:

```shell
./mxpc-data-migration restore -n <namespace> -e <environment> -f <file>
```

* `-n <namespace>` - the namespace containing the environment
* `-e <environment>` - the environment where the data should be restored
* `-f <file>` - backup file (in a [Mendix Cloud format](/developerportal/operate/restore-backup/#format-of-backup-file)) that should be restored into the destination environment

If the database uses self-signed TLS certificates from a private CA, provide the path to the custom root CA `pem` file through the `PGSSLROOTCERT` environment variable.

If the file storage uses self-signed TLS certificates from a private CA, provide the path to the custom root CA `pem` file or directory through the `SSL_CERT_FILE` or `SSL_CERT_DIR` environment variable.

### Running the Data Transfer in a Jump Pod{#jump-pod}

If you cannot run the data transfer tool from a local machine, because of network access issues, you need to run it in a Kubernetes pod acting as a [jump server](https://en.wikipedia.org/wiki/Jump_server) (a jump pod). To do this, follow the instructions below.

Create a YAML file  (for example, `/tmp/mendix-backup-restore.yaml`) with the following contents - containing backup/restore pod configuration:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mendix-backup-restore
  annotations:
    # Optional, to access data from environments using IRSA:
    # specify an IAM role ARN to use for connecting to the database and S3 storage
    eks.amazonaws.com/role-arn: arn:aws:iam::<account_id>:role/<role-name>
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: mendix-backup-restore
rules:
- apiGroups:
  - ""
  resources:
  - secrets
  verbs:
  - get
- apiGroups:
  - privatecloud.mendix.com
  resources:
  - mendixapps
  - storageinstances
  verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: mendix-backup-restore
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: mendix-backup-restore
subjects:
- kind: ServiceAccount
  name: mendix-backup-restore
---
apiVersion: v1
kind: Pod
metadata:
  name: mendix-backup-restore
spec:
  serviceAccountName: mendix-backup-restore
  automountServiceAccountToken: true
  terminationGracePeriodSeconds: 0
  containers:
  - name: pgtools
    image: docker.io/bitnami/postgresql:12
    command: ["sleep", "infinity"]
    lifecycle:
      preStop:
        exec:
          command: ["/bin/sh","-c","killall -w sleep"]
```

If you need to export or import data from an environment that uses AWS IRSA authentication, you also need to do the following:

1. Create an **IAM Role** without any attached policies for that environment in the AWS console.
   
    {{% alert color="info" %}}Use the environment internal name as the service account name.{{% /alert %}}
   
2. In the IAM role, add an inline policy with the following JSON, where `<aws_region>` is the database's region, `<account_id>` is your AWS account number, `<database_id>` is the RDS database instance identifier, and `<bucket_name>` is the S3 bucket name:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "rds-db:connect"
                ],
                "Resource": [
                    "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/*"
                ]
            },
            {
                "Sid": "AllowAllS3ActionsInUserFolder",
                "Effect": "Allow",
                "Resource": [
                    "arn:aws:s3:::<bucket_name>/*"
                ],
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:DeleteObject",
                    "s3:GetObject",
                    "s3:ListMultipartUploadParts",
                    "s3:PutObject"
                ]
            }
        ]
    }
    ```
    
    {{% alert color="info" %}}The `<database_id>` parameter is not the database name (or ARN), but the uniquely generated AWS resource ID. For more information and instructions how to write this policy, see the [IAM policy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html) document.{{% /alert %}}

3. Allow a Kubernetes ServiceAccount (for example, `mendix-backup-restore`) to assume a role.

    1. Open the role for editing and add an entry for the ServiceAccount (or ServiceAccounts) to the list of conditions:

        {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" class="no-border" >}}

    2. For the second condition, copy and paste the `sts.amazonaws.com` line; replace `:aud` with `:sub` and set it to `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`.

        See [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough) for more details. The role ARN is required. You can use the **Copy** button next to the ARN name in the role details. After this, the specified service account in the specified namespace will be able to assume this role.

4. Add the `eks.amazonaws.com/role-arn` annotation to the `mendix-backup-restore` service account and set it to the role ARN value from the previous step.

This configuration creates a pod which includes `pgtools` (PostgreSQL tools such as `pg_dump` and `pg_restore`), and a Service Account that can get the database credentials from an environment.
If your database is using another PostgreSQL version (for example, PostgreSQL 13), change the `image: docker.io/bitnami/postgresql:12` to match the target PostgreSQL version (for example, `docker.io/bitnami/postgresql:13`).

{{% alert color="warning" %}}
Before importing a backup file into an environment, the environment should be stopped (scaled down to 0 replicas).
Importing data into a running environment might cause the environment to stop working.
{{% /alert %}}

{{% alert color="warning" %}}
Backing up a running app (that is, an app that has active users or other activity) could mean that some files might be deleted while the backup is in progress. For example, if an app generates PDF reports or deletes uploaded files after processing them, these files could exist for only a few seconds and be automatically deleted. Attempting to back up those files might fail if this happens after the file is deleted; this is expected behavior for temporary files. To prevent warnings when running a backup process, you must enable the [Prevent data deletion](/developerportal/deploy/private-cloud-storage-plans/#blob-storage) option in the Storage Plan.
{{% /alert %}}

{{% alert color="info" %}}
These instructions have been validated in Windows Subsystem for Linux and macOS, and might not work in the Windows commandline terminal, Git Bash or Powershell.
{{% /alert %}}

To export data from an environment into a backup file, run the following commands (replace `{namespace}` with the environment's namespace, and `{environment}` with the environment's internal name):

```shell
NAMESPACE={namespace}
ENVIRONMENT={environment}
# Create the resources required for the backup operation
kubectl -n $NAMESPACE apply -f /tmp/mendix-backup-restore.yaml
# Copy the Linux version of the data migration tool into the Pod
kubectl -n $NAMESPACE cp mxpc-data-migration mendix-backup-restore:/tmp/mxpc-data-migration
# Run the backup process
kubectl -n $NAMESPACE exec -it mendix-backup-restore -- /tmp/mxpc-data-migration backup -e $ENVIRONMENT -f /tmp/backup.tar.gz -n $NAMESPACE
# Copy the backup file from the Pod to a local file
kubectl -n $NAMESPACE cp mendix-backup-restore:/tmp/backup.tar.gz backup.tar.gz
```

To import data from a backup file into an environment, run the following commands (replace `{namespace}` with the environment's namespace, and `{environment}` with the environment's internal name):

```shell
NAMESPACE={namespace}
ENVIRONMENT={environment}
# Create the resources required for the restore operation
kubectl -n $NAMESPACE apply -f /tmp/mendix-backup-restore.yaml
# Copy the Linux version of the data migration tool into the Pod
kubectl -n $NAMESPACE cp mxpc-data-migration mendix-backup-restore:/tmp/mxpc-data-migration
# Copy the backup file to be restored into the Pod;
# replace files_and_database.tar.gz with the path to the backup file
kubectl -n $NAMESPACE cp files_and_database.tar.gz mendix-backup-restore:/tmp/restore.tar.gz
# Run the restore process
kubectl -n $NAMESPACE exec -it mendix-backup-restore -- /tmp/mxpc-data-migration restore -e $ENVIRONMENT -f /tmp/restore.tar.gz -n $NAMESPACE
```

After running the import or export operation, delete the backup pod and its dependencies (replace `{namespace}` with the previously used namespace name):

```shell
NAMESPACE={namespace}
# Delete the Pod and its Service account
kubectl -n $NAMESPACE delete -f /tmp/mendix-backup-restore.yaml
rm /tmp/mendix-backup-restore.yaml
```

{{% alert color="warning" %}}
The `kubectl cp` command can sometimes fail to copy files with a `.tar.gz` extension.
In that case, changing the file extension can fix the issue, for example by changing the file extension from `.tar.gz` to `.tar.gz.backup`.
{{% /alert %}}

## Known Limitations

* It is not possible to export/import only the database or only files. The import/export process will always export or import the database together with any files.
* In version 0.0.1 of the tool, when exporting data, all files from the bucket will be included. This may include:
    * files from other environments (in case of a shared bucket),
    * files deleted from the Mendix app, but which still exist in the bucket.
* The export/import tool needs access to the Kubernetes API to get credentials for a specific environment.
* If `pg_restore` fails for any reason, the data import process is terminated immediately with an error.
* It is not possible to enforce TLS options.
    * If *Strict TLS* was disabled in the Postgres storage plan, the tool will try to use SSL, but will trust any server certificate. If the database does not support SSL, the tool will switch to an unencrypted connection.
    * If the Postgres storage has the *Strict TLS* option enabled, the tool will use SSL and validate the server certificate. If the certificate is not valid, or database does not support SSL, the connection will fail.
    * For Minio and S3, TLS will be used if the environment's storage plan has an `https://` endpoint URL.
