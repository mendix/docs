---
title: "Migrating data in Private Cloud environments (preview)"
parent: "private-cloud"
description: "Describes how to migrate data between Private Cloud environments"
menu_order: 32
tags: ["Backup", "Restore", "Data transfer", "Migration", "Private Cloud", "Environment"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

{{% alert type="danger" %}}This feature is currently in preview mode - to collect feedback about UX and which features should be added to the final version.{{% /alert %}}

The Private Cloud data migration tool allows to

* export the database and files from a Private Cloud environment into a backup file
* import the database and files from previously exported backup file into an environment.

The Private Cloud data migration tool is compatible with [backup files](/developerportal/operate/restore-backup#5-format-of-a-backup-file) from Mendix Cloud V4,
allowing to transfer environment data between Mendix Cloud V4 and Mendix for Private Cloud.

## 2 Prerequisites

### 2.1 Database and file storage requirements

The following databases are supported:

* PostgreSQL (any version [supported](private-cloud-supported-environments) by Mendix for Private Cloud)  

{{% alert type="warning" %}}
To remain compatible with Mendix Cloud V4 backups, other databases types (such as SQL Server) are not supported.

To convert a database, you would need to use a temporary, intermediate environment with a PostgreSQL database and use the [built-in](/howto/data-models/migrating-your-mendix-database)
Mendix Runtime `SourceDatabase` features to convert the database to/from PostgreSQL.
{{% /alert %}}

The following file storage options are supported:

* Amazon S3
* Minio

### 2.2 Environment requirements

The data transfer tool needs the following:

* [pg_dump](https://www.postgresql.org/docs/9.6/app-pgdump.html) and [pg_restore](https://www.postgresql.org/docs/9.6/app-pgrestore.html) binaries in a location listed in the system path
* Network access to the PostgreSQL server and S3/Minio storage
  * If the database is running inside the cluster or a VPC, it might not be reachable from outside the cluster
* Permissions to call the Kubernetes API
  * Used to get the database and file storage credentials for an environment

In most cases, this means the data transfer tool cannot run from a local machine and needs to run in a Kubernetes Pod - a [jump pod](https://en.wikipedia.org/wiki/Jump_server).

## 3 Using the data transfer tool 

### 3.1 Downloading the data transfer tool

Download and extract the tool for your operating system. If you're planning to run the data transfer tool in a Pod, download the Linux version.

* [Linux](https://mendix-private-cloud-resources-prod.s3.eu-west-1.amazonaws.com/data-migration-tool/mxpc-backup-restore-cli-linux.tar.bz2)
* [macOS](https://mendix-private-cloud-resources-prod.s3.eu-west-1.amazonaws.com/data-migration-tool/mxpc-backup-restore-cli-macos.tar.bz2)
* [Windows](https://mendix-private-cloud-resources-prod.s3.eu-west-1.amazonaws.com/data-migration-tool/mxpc-backup-restore-cli-windows.zip)

### 3.2 Running the data transfer tool locally

If your local machine has network access to the database and file storage, you can run it directly on your machine.

{{% alert type="warning" %}}
The tools will only work if you have access to the cluster, setting up the network to access your cluster is out of scope. If it's not possible to connect to the database or file storage directly, a [jump pod](#jump-pod) also can be use this tools inside your cluster.
{{% /alert %}}

The tool will use the current user’s kubeconfig and Kubernetes credentials (or the service account if it’s running in the Pod) to retrieve database and file storage credentials from the environment.

```shell
./mxpc-backup-restore-cli backup -n <namespace> -e <environment> -f <file>
```

- `-n <namespace>` - the namespace containing the environment
- `-e <environment>` - the environment to backup
- `-f <file>` - destination file where the backup should be saved

```shell
./mxpc-backup-restore-cli restore -n <namespace> -e <environment> -f <file>
```

- `-n <namespace>` - the namespace containing the environment
- `-e <environment>` - the environment where the data should be restored
- `-f <file>` - backup file (in a [Mendix Cloud V4 format](/developerportal/operate/restore-backup#5-format-of-a-backup-file)) that should be restored into the destination environment

### 3.3 Running the data transfer in a jump pod{#jump-pod}

Create a YAML file with a backup/restore Pod configuration:

```shell
cat <<EOF > /tmp/mendix-backup-restore.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mendix-backup-restore
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
    image: docker.io/bitnami/postgresql:9.6
    command: ["sleep", "infinity"]
    lifecycle:
      preStop:
        exec:
          command: ["/bin/sh","-c","killall -w sleep"]
EOF
```

This Pod includes PostgreSQL tools such as `pg_dump` and `pg_restore`, and a Service Account that can get the database credentials from an environment.

{{% alert type="warning" %}}
Before importing a backup file into an environment, the environment should be stopped (scaled down to 0 replicas).
Importing data into a running environment might cause the environment to stop working.
{{% /alert %}}

To import data from a backup file into an environment, run the following commands (replace `{namespace}` with the environment's namespace, and `{environment}` with the environment's internal name):

```shell
NAMESPACE={namespace}
ENVIRONMENT={environment}
# Create the resources required for the restore operation
kubectl -n $NAMESPACE apply -f /tmp/mendix-backup-restore.yaml
# Copy the backup/restore tool into the Pod
kubectl -n $NAMESPACE cp mxpc-backup-restore-cli-linux mendix-backup-restore:/tmp/mxpc-backup-restore-cli-linux
# Copy the backup file to be restored into the Pod;
# replace files_and_database.tar.gz with the path to the backup file
kubectl -n $NAMESPACE cp files_and_database.tar.gz mendix-backup-restore:/tmp/restore.tar.gz
# Run the restore process
kubectl -n $NAMESPACE exec -it mendix-backup-restore -- /tmp/mxpc-backup-restore-cli-linux restore -e $ENVIRONMENT -f /tmp/restore.tar.gz -n $NAMESPACE
```

To export data from an environment into a backup file, run the following commands (replace `{namespace}` with the environment's namespace, and `{environment}` with the environment's internal name):

```shell
NAMESPACE={namespace}
ENVIRONMENT={environment}
# Create the resources required for the backup operation
kubectl -n $NAMESPACE apply -f /tmp/mendix-backup-restore.yaml
# Copy the backup/restore tool into the Pod
kubectl -n $NAMESPACE cp mxpc-backup-restore-cli-linux mendix-backup-restore:/tmp/mxpc-backup-restore-cli-linux
# Run the backup process
kubectl -n $NAMESPACE exec -it mendix-backup-restore -- /tmp/mxpc-backup-restore-cli-linux backup -e $ENVIRONMENT -f /tmp/backup.tar.gz -n $NAMESPACE
# Copy the backup file from the Pod to a local file
kubectl -n $NAMESPACE cp mendix-backup-restore:/tmp/backup.tar.gz backup.tar.gz
```

After running the import/export operation(s), delete the backup Pod and its dependencies (replace `{namespace}` with the previously used namespace name):

```shell
NAMESPACE={namespace}
# Delete the Pod and its Service account
kubectl -n $NAMESPACE delete -f /tmp/mendix-backup-restore.yaml
rm /tmp/mendix-backup-restore.yaml
```

## 3 Known limitations

* It's not possible to export/import only the database or only files. The import/export process will always export/import the database and files.
* When exporting data, all files from the bucket will be included. This may include
  * files from other environments (in case of a shared bucket),
  * files deleted from the Mendix app, but which still exist in the bucket.
* The export/import tool needs access to the Kubernetes API to get credentials for a specific environment.
* If `pg_restore` fails for any reason, the data import process is terminated immediately with an error.
* It's not possible to configure TLS trust settings.
  * For PostgreSQL, the tool will try to use SSL, but will trust any server certificate. If the database doesn't support SSL, the tool will switch to an unencrypted connection.
  * For Minio and S3, TLS will be used if the environment's storage plan has an `https://` endpoint URL.
