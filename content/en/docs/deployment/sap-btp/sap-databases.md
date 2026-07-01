---
title: "Databases in SAP BTP"
linktitle: "Databases in SAP BTP"
url: /developerportal/deploy/sap-cloud-platform/databases
weight: 20
description: "Describes different types of databases for SAP Business Technology Platform."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Mendix needs access to a relational database back end and can run using different types of database. For deployment to SAP BTP, you have the choice of PostgreSQL, Hyperscaler Option, or SAP HANA.

### Running Mendix on PostgreSQL, Hyperscaler Option {#sap-hyperscaler}

{{% alert color="info" %}}
SAP has removed some of the PostgreSQL databases available in their Marketplace. If you need a PostgreSQL database, you will have to use PostgreSQL, Hyperscaler Option as your database. This requires some extra configuration which is described below. Alternatively, you can use [SAP HANA](#sap-hana).
{{% /alert %}}

Select the **postgresql-db** (PostgreSQL, Hyperscaler Option) database service from the **Available Services**.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/postgresql-service.png" alt="" >}}

Upload a file which contains the configuration for this database. Click **Browse** to select your configuration file. You can use the [SAP Hyperscaler PostgreSQL Configurator](#postgresql-configurator) to help you create the configuration file. For more information, refer to the [Parameters](https://help.sap.com/viewer/b3fe3621fa4a4ed28d7bbe3d6d88f036/Cloud/en-US/0630e03aa45d479eaf806c564dc2447a.html) section of *PostgreSQL on SAP Business Technology Platform, Hyperscaler Option*.

During the creation of the environment, the selected PostgreSQL, Hyperscaler Option service is added to your space. When you deploy your app, the app is bound to it.

This database service should not be unbound from your environment. For more information on required services, see the [Services Tab](/developerportal/deploy/sap-cloud-platform/environments/#binding-services).

#### SAP Hyperscaler PostgreSQL Configurator {#postgresql-configurator}

To get help to create the configuration file, click **Configurator**.

You can set the required values for your **SAP Hyperscaler PostgreSQL** database. Tooltips describe the values which you need to provide. 

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/postgresql-configurator.png" alt="" >}}

{{% alert color="warning" %}}
There is no validation on the value of the **Source Instance ID** or **Restore Time** you enter for Standard or Premium plans. If you have issues, check that you entered the correct value here.
{{% /alert %}}

Click **Upload Configuration To Service** to automatically apply the generated configuration to the PostgreSQL, Hyperscaler Option database service. Alternatively, click **Download Configuration File** to create the file which you can then use on the **Services** tab to configure your PostgreSQL, Hyperscaler Option database.

### Running Mendix on SAP HANA {#sap-hana}

{{% alert color="info" %}}
You can only use SAP HANA as the Mendix database for Mendix V7.23.3 and above.

There are also some differences in the way that Mendix can be used with SAP HANA compared to a PostgreSQL, Hyperscaler Option database. For more information, see [SAP HANA – Known Issues](/refguide/saphana/).
{{% /alert %}}

#### SAP HANA Configuration for Full Accounts

To run a Mendix application on SAP BTP using SAP HANA as the database, there are two options. Both options need to be set up in the SAP BTP cockpit. You can choose one of the following options:

* Provision the SAP HANA DB Service and make it available in your application space.
* Provision SAP HANA Cloud and make this service available to your application space.

Once one of these services is available, you can use the SAP Cloud deployment functions of the Mendix Portal to deploy your app and use the **HANA_SCHEMA** service to bind your application to the provisioned service. The HANA_SCHEMA creates a separate schema on the SAP HANA Database which isolates your application's data from other applications. In this way, the SAP HANA DB/Cloud Service is shared across applications.

{{% alert color="warning" %}}

* Do not attempt to add the SAP HANA *service* to your app. It is the SAP HANA *schema* which needs to be bound to your app.

* Do not use the **Services** tab or the SAP BTP Marketplace to add both a PostgreSQL, Hyperscaler Option database and an SAP HANA schema to your app. If you do this, it is not possible to predict which database your Mendix app will choose to bind.
{{% /alert %}}

If you have issues with your app running on SAP HANA, use the SAP BTP cockpit to investigate. The Mendix Portal does not have information on the status or configuration of the SAP HANA service.

#### SAP HANA Configuration for Trial Accounts

For new trial accounts, you can bind your Mendix app to a trial SAP HANA database. Choose **hanatrial-securestore** from the drop-down of supported databases.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/hanatrial.png" alt="" >}}

Some older trial accounts do not include `hanatrial-securestore`. In this case, you can get an error when you try to deploy your Mendix app saying that *provisioning has failed because service hanatrial with plan securestore is not found*.

#### SAP HANA Performance Tuning

If your SAP HANA database has performance issues, you can improve it by performing the following tuning:

1. Obtain the following service binding credentials from the **Environment Variables** of SAP BTP cockpit, or via the CLI:

    * Host
    * Url
    * Schema
    * Password
    * User

1. Go to the [Runtime tab](/developerportal/deploy/sap-cloud-platform/environments/#runtime-tab) of your app environment.
1. Enter the following unsupported environment variables with the associated values, using the values taken from the service binding credentials:

    | Variable | Value |
    | --- | --- |
    | MXRUNTIME_DatabaseHost | {host} |
    | MXRUNTIME_DatabaseJdbcUrl | {url} + `&nonBlockingIO=false&timeZonePerObject=false&packetSize=130000&closeHandlesByCleaner=false&transactionalLobs=false&maxLazyDroppedStatements=100&statementCacheSize=500&deferredPrepared=true` |
    | MXRUNTIME_DatabaseName | {schema} |
    | MXRUNTIME_DatabasePassword | {password} |
    | MXRUNTIME_DatabaseUserName | {user} |
    | MXRUNTIME_DatabaseType | `SAPHANA` |

1. Go to the [General tab](/developerportal/deploy/sap-cloud-platform/environments/#general-tab) and restart your app to apply the changes.

The additional parameters that you added to the URL in the `MXRUNTIME_DatabaseJdbcUrl` set the following tuning parameters:

| Parameter | Value |
| --- | --- |
| closeHandlesByCleaner | false |
| deferredPrepare | true |
| maxLazyDroppedStatements | 100 |
| nonBlockingIO | false |
| packetSize | 130000 |
| statementCacheSize | 500 |
| timeZonePerObject | false |
| transactionalLobs | false |
