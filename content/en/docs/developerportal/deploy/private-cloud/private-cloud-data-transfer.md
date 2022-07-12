---
title: "Migrating data in Private Cloud environments (preview)"
url: /developerportal/deploy/private-cloud-data-transfer/
description: "Describes how to migrate data between Private Cloud environments"
weight: 32
tags: ["Backup", "Restore", "Data transfer", "Migration", "Private Cloud", "Environment"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

{{% alert color="warning" %}}This feature is currently in preview mode - to collect feedback about the UX and features which should be added to the final version.{{% /alert %}}

The Private Cloud data migration tool allows you to:

* export the database and files from a Private Cloud environment into a backup file
* import the database and files from a previously exported backup file into an environment

The Private Cloud data migration tool is compatible with [backup files](/developerportal/operate/restore-backup/#format-of-backup-file) from Mendix Cloud V4,
allowing you to transfer application data between Mendix Cloud V4 and Mendix for Private Cloud.

## 2 Prerequisites

### 2.1 Database and File Storage Requirements

The following database is supported:

* PostgreSQL (any version [supported by Mendix for Private Cloud](/developerportal/deploy/private-cloud-supported-environments/))  

{{% alert color="warning" %}}
To remain compatible with Mendix Cloud V4 backups, other databases types (such as SQL Server) are not supported.

To convert a database to a different type, you would need to use a temporary, intermediate environment with a PostgreSQL database and use the [built-in](/howto/data-models/migrating-your-mendix-database/) Mendix Runtime `SourceDatabase` features to convert the database to or from PostgreSQL.
{{% /alert %}}

The following file storage options are supported:

* Amazon S3
* Minio

### 2.2 Environment Requirements

The data transfer tool needs the following:

* [pg_dump](https://www.postgresql.org/docs/12/app-pgdump.html) and [pg_restore](https://www.postgresql.org/docs/12/app-pgrestore.html) binaries in a location listed in the system path
* Network access to the PostgreSQL server and S3/Minio storage
  * If the database is running inside the cluster or on a Virtual Private Cloud (VPC), it might not be reachable from outside the cluster
* Permissions to call the Kubernetes API
  * These calls are used to get the database and file storage credentials for an environment

In most cases, this means the data transfer tool cannot run from a local machine and needs to run in a Kubernetes pod acting as a [jump server](https://en.wikipedia.org/wiki/Jump_server) (a [jump pod(#jump-pod)).

## 3 Using the Data Transfer Tool 

### 3.1 Downloading the Data Transfer tool

Download and extract the tool for your operating system. If you are planning to run the data transfer tool in a Pod, download the Linux version.

* [Linux](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.1-linux-amd64.tar.gz)
* [macOS](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.1-macos-amd64.tar.gz)
* [Windows](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.1-windows-amd64.zip)

### 3.2 Running the Data Transfer Tool Locally

If your local machine has network access to the database and file storage, you can run it directly on your machine.

{{% alert color="warning" %}}
The tools will only work if you have access to the cluster. Setting up the network to access your cluster is out of the scope of this document. If it is not possible to connect to the database or file storage directly, a [jump pod](#jump-pod) also can be use this tools inside your cluster.
{{% /alert %}}

The tool will use the current user’s kubeconfig and Kubernetes credentials (or the service account if it is running in the Pod) to retrieve database and file storage credentials from the environment.

To create a backup file, use the following command:

```shell
./mxpc-data-migration backup -n <namespace> -e <environment> -f <file>
```

- `-n <namespace>` - the namespace containing the environment
- `-e <environment>` - the environment to backup
- `-f <file>` - destination file where the backup should be saved

To restore a backup file into your environment, use the following command:

```shell
./mxpc-data-migration restore -n <namespace> -e <environment> -f <file>
```

- `-n <namespace>` - the namespace containing the environment
- `-e <environment>` - the environment where the data should be restored
- `-f <file>` - backup file (in a [Mendix Cloud V4 format](/developerportal/operate/restore-backup/#format-of-backup-file)) that should be restored into the destination environment

### 3.3 Running the Data Transfer in a Jump Pod{#jump-pod}

If you cannot run the data transfer tool from a local machine, because of network access issues, you need to run it in a Kubernetes pod acting as a [jump server](https://en.wikipedia.org/wiki/Jump_server) (a jump pod). To do this, follow the instructions below.

Create a YAML file  (e.g. `/tmp/mendix-backup-restore.yaml`) with the following contents - containing backup/restore pod configuration:

```yaml
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
    image: docker.io/bitnami/postgresql:12
    command: ["sleep", "infinity"]
    lifecycle:
      preStop:
        exec:
          command: ["/bin/sh","-c","killall -w sleep"]
```

This configuration creates a pod which includes `pgtools` (PostgreSQL tools such as `pg_dump` and `pg_restore`), and a Service Account that can get the database credentials from an environment.
If your database is using another PostgreSQL version (for example, PostgreSQL 13), change the `image: docker.io/bitnami/postgresql:12` to match the target PostgreSQL version (for example, `docker.io/bitnami/postgresql:13`).

{{% alert color="warning" %}}
Before importing a backup file into an environment, the environment should be stopped (scaled down to 0 replicas).
Importing data into a running environment might cause the environment to stop working.
{{% /alert %}}

{{% alert color="warning" %}}
These instructions have been validated in Windows Subsystem for Linux and macOS and might not work in the Windows commandline terminal, Git Bash or Powershell. 
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

After running the import/export operation(s), delete the backup pod and its dependencies (replace `{namespace}` with the previously used namespace name):

```shell
NAMESPACE={namespace}
# Delete the Pod and its Service account
kubectl -n $NAMESPACE delete -f /tmp/mendix-backup-restore.yaml
rm /tmp/mendix-backup-restore.yaml
```

## 3 Known Limitations

* It is not possible to export/import only the database or only files. The import/export process will always export or import the database together with any files.
* When exporting data, all files from the bucket will be included. This may include:
  * files from other environments (in case of a shared bucket),
  * files deleted from the Mendix app, but which still exist in the bucket.
* The export/import tool needs access to the Kubernetes API to get credentials for a specific environment.
* If `pg_restore` fails for any reason, the data import process is terminated immediately with an error.
* It is not possible to configure TLS trust settings.
  * For PostgreSQL, the tool will try to use SSL, but will trust any server certificate. If the database doesn't support SSL, the tool will switch to an unencrypted connection.
  * For Minio and S3, TLS will be used if the environment's storage plan has an `https://` endpoint URL.
