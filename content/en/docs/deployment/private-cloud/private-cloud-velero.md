---
title: "Use Velero to Back Up Private Cloud Namespaces"
linktitle: "Use Velero to Back Up Namespaces"
url: /developerportal/deploy/private-cloud-velero/
description: "Describes the process for using Velero to create and restore backups of your Mendix app namespaces in private cloud"
weight: 25
---

## Introduction

[Velero](https://velero.io/docs/) is a tool that you can use to back up your Kubernetes namespaces as an additional disaster recovery measure. It does not back up your database or S3 resources, so it cannot serve as your main backup method, but it can supplement the default [backup process](/developerportal/operate/backups/) for your Mendix app.

Velero enables you to back up and restore the following Mendix objects:

* `storageinstances.privatecloud.mendix.com`
* `storageplans.privatecloud.mendix.com`
* `builds.privatecloud.mendix.com`
* `mendixapps.privatecloud.mendix.com`

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Ensure that the [Mendix Operator](/developerportal/deploy/private-cloud-technical-appendix-01/) for your private cloud cluster is in version 2.7.0 or above.
* Install the Velero client and server in version 1.9 or above. For more information, see [Velero documentation](https://velero.io/docs/).
* Create a recovery cluster.
    {{% alert color="info" %}}The process of creating a recovery cluster may vary depending on the platform that you use to host your private cloud. For more information, refer to the documentation supplied by your cloud provider.{{% /alert %}}

## Creating a Velero Backup

To create a backup with Velero, follow these steps:

1. Stop the Mendix Operator and Mendix agent by scaling them to 0:

    ```text
    kubectl scale deployment mendix-agent --replicas=0
    kubectl scale deployment mendix-operator --replicas=0
    ```

     {{% alert color="info" %}} For Global Operator, this needs to be done for the Global Operator namespace.{{% /alert %}}   

2. Create the backup by entering the following command:

    ```text
    velero create backup mendix-velero-bkp
    ``` 

    {{% alert color="info" %}}The above command creates a backup of all your namespaces with the name *mendix-velero-bkp*. If you only want to back up a specific namespace, use the `include-namespace` flag.{{% /alert %}}
    
    {{% alert color="info" %}}In case of Global Operator, the `include-namespace` flag should be used for both the Global Operator namespace and the managed namespace.{{% /alert %}}

3. Verify that the backup is complete by entering the following command:

    ```text
    velero backup describe mendix-velero-bkp
    ```

4. Restart the Mendix Operator and Mendix agent by entering the following command:

    ```text
    kubectl scale deployment mendix-agent --replicas=1
    kubectl scale deployment mendix-operator --replicas=1
    ```

## Restoring a Velero Backup

To restore a backup that you created with Velero, follow these steps:

1. Restore the backup by entering the following command:

    ```text
    velero restore create --from-backup mendix-velero-bkp --status-include-resources=storageinstances.privatecloud.mendix.com,storageplans.privatecloud.mendix.com,builds.privatecloud.mendix.com,mendixapps.privatecloud.mendix.com
    ```

    {{% alert color="warning" %}}As a best practice, it is recommended to restore all resources, as in the above example. Restoring only specific resources can result in unpredictable behavior. However, if you only want to restore a specific Kubernetes resource, use the `--status-include-resources flag`, for example, `--status-include-resources=storageinstances.privatecloud.mendix.com`.{{% /alert %}}

2. After the app has started and created the database, [restore a backup](/developerportal/deploy/private-cloud-data-transfer/) of your database and S3 files.
3. Optional: After restoring the backup, add finalizers to `StorageInstances` by entering the following command:

    ```text
    kubectl patch storageinstances $(kubectl get storageinstances --no-headers -o custom-columns=":metadata.name") -p '{"metadata":{"finalizers":["finalizer.privatecloud.mendix.com"]}}' --type=merge
    ```

    {{% alert color="info" %}}Adding finalizers is not required, but it is recommended as a best practice. It ensures that the Kubernetes garbage collection cleans up the storage from deleted environments.{{% /alert %}}
