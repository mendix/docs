---
title: "Private Cloud License Manager"
linktitle: "Private Cloud License Manager"
url: /developerportal/deploy/private-cloud-license-manager/
description: "Describes the process for using Velero to create and restore backups of your Mendix app namespaces in private cloud"
weight: 47
tags: ["Deploy", "Private Cloud", "Backup", "Velero", "Kubernetes"]
---

## 1 Introduction

When deploying your Mendix app for production use, it needs to be licensed. This removes the restrictions which are placed on unlicensed apps. For more information, see [Licensing Mendix for Private Cloud](https://docs.mendix.com/developerportal/deploy/private-cloud/#licensing) in the *Private Cloud* documentation.
Apps which have access to the internet have licenses which work on a subscription basis and contact the Mendix license server for validating the license. This method is not available to apps which are not connected to the internet (air-gapped), which need to use static, offline, licenses.
The Mendix **Private Cloud License Manager** (PCLM) provides a repository of your offline Mendix licenses to enable you to manage these centrally, rather than needing to apply these manually to each app. This reduces the possibility of errors, and enables the production of license usage reports.
The PCLM runs as a Kubernetes service on your cluster. This means that it can be used by all your Mendix apps which run in namespaces within that cluster.

## 2 Prerequisites

To install and use the PCLM, you need the following prerequisites:

- a standalone Mendix for Private Cloud cluster
- administrative rights to a Kubernetes namespace to install PCLM server (a dedicated namespace is recommended). This can be within your Mendix for Private Cloud cluster, or in another cluster which is accessible over HTTP
- a Postgres or SQLServer database server and within it:
    - a dedicated database to store your licences, user authorization details, and usage information
    - A dedicated administrator user role with all grants over this database (including the `C``reate` `Table` server role, and `Select`, `Insert`, `Update`, `Delete`, and `Truncate` database roles for the tables that are created)
- kubectl or the OpenShift CLI
- the mx-pclm-cli tool
- the default password for the PCLM server `administrator` account – you can obtain this from [Mendix Support](https://support.mendix.com)
## 3 Installing the PCLM server

You install the PCLM server by applying a manifest using `kubectl` or `oc. This manifest can be created for you by the mx-pclm-cli tool.
**3.1 Creating the Manifest**
The `installer-gen` option of mx-pclm-cli is used to create a yaml manifest file to apply to your Kubernetes namespace.
Use the following command:


    $ mx-pclm-cli installer-gen --db-type <postgres> \
        --db-hostname <hostname> \ 
        --db-name <db-name> \
        --db-user <db-user> \
        --db-password <db-pass> \
        --db-port <port> \ 
        --out-file <out-file>

Where you need to supply the following parameters

- <namespace> – the namespace in which the PCLM server will run
- <db-type> – the sort of database, either `postgres` or `sqlserver`
- <hostname> – the hostname of the database service
- <db-name> – the name of the database where you want to hold the PCLM data
- <db-user> – a database user with the rights described in the prerequisites section
- <db-pass> – the password for the database user
- <port> – the port used to access the database
- <out-file> – the name of the file where the yaml is written, for example `manifest.yaml`

**3.2 Applying the Manifest**
To apply the installation manifest to install the server in the Kuberbetes namespace, use the following command:

    $ kubectl -n <namespace> apply -f <out-file>

Where you need to supply the following parameters

- <namespace> – the namespace in which the PCLM server will run
- <out-file> – the name of the file which contains the yaml manifest, for example `manifest.yaml`

This creates the following resources:

- `m``endix-pclm` – the deployment CR of the server
- `mendix-pclm`  – a secret containing the credentials to access the Database
- `mx-private-cloud-mx-privatecloud-license-manager` – the service name of the PCLM server
## 4 Reaching the PCLM Server

You will now be able to communicate with the PCLM Server through an HTTP REST endpoint.
If PCLM is installed in the same Kubernetes cluster as the Private Cloud environments, the PCLM server can be reached at `http://mx-privatecloud-license-manager.<namespace>.svc.cluster.local`, where `<namespace>` is the namespace where the PCLM Server was installed.
If the PCLM server is installed in a separate cluster, you have to create an [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) for your Kubernetes cluster or a [Route](https://docs.openshift.com/enterprise/3.0/architecture/core_concepts/routes.html) for your OpenShift cluster in order to allow those HTTP connections. Given the many possible Ingress controllers which depend on the Cloud provider, you will need to follow the instructions for your Ingress controller and Cloud.

## 5 Setting Up Users

Once the PCLM server is running, you can set up users.
The PCLM server supports two types of **user types:**

- Admin: this user type has read-write permissions of users and licenses resources. It should only be used from the cli.
- Operator: this user type has only read-only permissions for license resources. This user is designed to allow the Mendix for Private Cloud Operator to obtain licenses.

**5.1 Administrator**
When the PCLM server is set up, it contains one user `administrator` with a default password. This password should be modified immediately using the command:

    $ mx-pclm-cli user update \
      -s <pclm-http-url> -u administrator -p <default-password> \
      --username administrator --password='<new-password>' --type admin

  Where:

- <pclm-http-url> – is the HTTP REST endpoint of the PCLM server
- <default-password> – is the default password which is set for the `administrator` user – you can obtain this from [Mendix Support](https://support.mendix.com)
- <new-password> – is the new password for the `administrator` user

**5.2 Additional Users**
You will want to set up *operator* users and (optionally) additional *admin* users. To do this, use the following command:

    $ mx-pclm-cli user create \
      -s <pclm-http-url> -u <admin-user> -p <admin-password> \
      --username=<new-user>  --password='<password>' --type=<user-type>

    Where:

- <pclm-http-url> – is the HTTP REST endpoint of the PCLM server
- <admin-user> – is a user of type *admin* which can update users – by default `administrator`
- <admin-password> – is the password for the chosen *admin* user
- <new-user> – is the name of the new user you are creating
- <password> – is the password for the new user
- <user-type> – is the type of user you are creating, either `admin` or `operator`
## 6 Installing Licenses

Licenses are supplied by Mendix as a **License Bundle**. A license bundle can contain both Mendix Runtime (app) licenses and Mendix Operator licenses.
Runtime licenses are required for each Mendix runtime environment, and Operator licenses are required for each namespace where the Operator runs.
To purchase a license bundle, please contact [Mendix Support](https://support.mendix.com/). You will receive your license(s) as a .zip file.
The following command will import a license bundle into the PCLM server:

    $ mx-pclm-cli license import  
        -s <pclm-http-url> \
        -u <admin-user> \
        -p <admin-password> \
        -f <bundle-zip-file-path>

Where:

- <pclm-http-url> – is the HTTP REST endpoint of the PCLM server
- <admin-user> – is a user of type *admin* which can update users – by default `administrator`
- <admin-password> – is the password for the chosen *admin* user
- <bundle-zip-file-path> – is the location of your license bundle file

You will get a report of the results of your import operation:

    -- Loading zip file...
    ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃ License Bundle Contents                            ┃
    ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┫
    ┃ LICENSE-ID                           ┃ TYPE        ┃
    ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━┫
    ┃ c97ecdae-0376-42ab-9d91-22a45a88a3e4 ┃ mx-operator ┃
    ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━┫
    ┃ 5025defa-a442-47c3-ae2e-2ac6628926e3 ┃ mx-runtime  ┃
    ┃ c823eeb1-7eb2-471c-a818-7be132c9cdb1 ┃ mx-runtime  ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━┛
    -- Importing License: 5025defa-a442-47c3-ae2e-2ac6628926e3 [Duplicated]
    -- Importing License: c823eeb1-7eb2-471c-a818-7be132c9cdb1 [OK]
    -- Importing License: c97ecdae-0376-42ab-9d91-22a45a88a3e4 [OK]
    -- Licenses imported successfully

If a license has previously been imported, you will be told that it is *[Duplicated]*.

## 7 Applying Licenses to Your Operator and Apps

To use the licenses, you have to add information to the operator configuration. For this, you need to have set up the operator in a namespace on your cluster. See [Installing and Configuring the Mendix Operator](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#4-installing-and-configuring-the-mendix-operator) in the *Mendix Cloud Cluster* documentation.
Assume that the operator is running in the namespace `<operator-ns>`.
**7.1** **Storing Operator User Credentials**
The credentials you have created for an operator type user need to be stored in the repository. To do this, create the following .yaml file:

    apiVersion: v1
    kind: Secret
    type: Opaque
    metadata:
      name: <secret-name>
    stringData:
      username: <operator-user>
      password: <operator-password>

      Where:

- <secret-name> – is the name of the secret where you want to store the credentials
- <operator-user> – is a user of type *operator*
- <operator-password> – is the password for the chosen *operator* user

You store this secret using the following command:

    $ kubectl apply -n <operator-ns> <yaml-file>

      Where:

- <operator-ns> – is the namespace where the Mendix Operator is running
- <yaml-file> – is the location of the file where you stored the instructions for creating the credentials secret

**7.2 Configuring the Mendix Operator**
You need to patch the Mendix Operator with the location and credentials for accessing the PCLM server. To do this, create the following .yaml file:

    spec:
      licenseManager:
        credentialsSecretName: <secret-name>
        serverURL: http://<pclm-http-url>

          Where:

- <secret-name> – is the name of the secret where you stored the credentials
- <pclm-http-url> – is the HTTP REST endpoint of the PCLM server

Patch the Mendix Operator using the following command:

    $ kubectl -n <operator-ns> patch OperatorConfiguration mendix-operator-configuration  --type=merge --patch="$(cat <yaml-file>)"

      Where:

- <operator-ns> – is the namespace where the Mendix Operator is running
- <yaml-file> – is the location of the file where you stored the instructions for patching the Mendix Operator

**7.3 Applying Licenses**
Once you have patched the Mendix Operator, all app environments which are controlled through the operator will have licenses applied automatically.
If you delete a licensed app environment, the mx-runtime license will be marked as unused and will be applied to new app environments. This may take up to 30 minutes.
If you do not have any unused licenses, new app environments will not be licensed.
The Mendix Operator will also pick up a Mendix Operator license if one has been imported into the PCLM server.
You can see which licenses are currently used by which environments and operators, as well as unused licenses, using the following command.

    mx-pclm-cli license list-usage -s <pclm-http-url> \
        -u <admin-user> \
        -p <admin-password>

Where:

- <pclm-http-url> – is the HTTP REST endpoint of the PCLM server
- <admin-user> – is a user of type *admin* which can update users – by default `administrator`
- <admin-password> – is the password for the chosen *admin* user

**7.4 Auditing Licenses**
You can retrieve an audit report showing a history of which apps had which licenses, and which license(s) were applied to which operator(s) using the following command:

    mx-pclm-cli report generate \
        --num-days <days> \
        --zip-file <file-name> \
        -s <pclm-http-url> \
        -u <admin-user> \
        -p <admin-password>

Where:

- <days> – is the number of past days to report (default 365)
- <file-name> – is the name of the file where a zipped version of the report is saved — if this is omitted, the report will be output to the console
- <pclm-http-url> – is the HTTP REST endpoint of the PCLM server
- <admin-user> – is a user of type *admin* which can update users – by default `administrator`
- <admin-password> – is the password for the chosen *admin* user

The report is presented as a CSV file containing a summary of the licenses at various times over the specified period.

| **License Report Summary**           |                      |                                      |              |         |           |
| ------------------------------------ | -------------------- | ------------------------------------ | ------------ | ------- | --------- |
| License-ID                           | License-Type         | App-ID                               | Namespace    | Counter |           |
| 11111111-1111-1111-1111-111111111111 | mx-runtime           | my-app                               | my-ns        | 12      |           |
| 11111111-1111-1111-1111-222222222222 | mx-operator          | my-app                               | my-ns        | 9       |           |
|                                      |                      |                                      |              |         |           |
| **License Raw Data Report**          |                      |                                      |              |         |           |
| Archive-ID                           | Archive-At           | License-ID                           | License-Type | App-ID  | Namespace |
| 22222222-2222-2222-2222-111111111111 | 2022-04-07T01:28:12Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-111111111111 | 2022-04-07T01:28:12Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-222222222222 | 2022-04-07T01:28:15Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-222222222222 | 2022-04-07T01:28:15Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-333333333333 | 2022-04-07T01:28:25Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-333333333333 | 2022-04-07T01:28:25Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-444444444444 | 2022-04-07T13:28:12Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-444444444444 | 2022-04-07T13:28:12Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-555555555555 | 2022-04-07T13:28:15Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-555555555555 | 2022-04-07T13:28:15Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-666666666666 | 2022-04-07T13:28:25Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-666666666666 | 2022-04-07T13:28:25Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-777777777777 | 2022-04-08T01:28:12Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-777777777777 | 2022-04-08T01:28:12Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-888888888888 | 2022-04-08T01:28:15Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-888888888888 | 2022-04-08T01:28:15Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-999999999999 | 2022-04-08T01:28:25Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-999999999999 | 2022-04-08T01:28:25Z | 11111111-1111-1111-1111-222222222222 | mx-operator  | my-app  | my-ns     |
| 22222222-2222-2222-2222-010010010010 | 2022-04-08T13:28:12Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-011011011011 | 2022-04-08T13:28:15Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |
| 22222222-2222-2222-2222-012012012012 | 2022-04-08T13:28:25Z | 11111111-1111-1111-1111-111111111111 | mx-runtime   | my-app  | my-ns     |

## 8. Migration

If you are migrating a Mendix Operator and Mendix apps which are already licensed to use the PCLM, you will need to remove the existing licenses. If your namespace was never licensed, please ignore this section.

Once you have configured the Mendix Operator running in a specific `<namespace>` to use the PCLM (following steps 7.1 and 7.2) you need to perform the following steps to remove the existing licenses:

**8.1 Static Runtime Licenses**
If you are using static Runtime licenses, simply restart the Mendix Operator, 

    kubectl -n <namespace> scale deployment mendix-operator --replicas=0
    kubectl -n <namespace> scale deployment mendix-operator --replicas=1

This restarts the Mendix Operator, and associated Mendix App Runtimes, and configures both with licenses fetched from the PCLM server.

You can confirm this by running the following command:

    mx-pclm-cli license list-usage -s <pclm-http-url> \
        -u <admin-user> \
        -p <admin-password>

This will indicate that licenses have been applied to the operator and apps in the selected namespace:

| License-ID                           | Namespace  | App-ID   | Type        |
| ------------------------------------ | ---------- | -------- | ----------- |
| 22222222-2222-2222-2222-777777777777 | <namepace> | <app-ID> | mx-operator |
| 22222222-2222-2222-2222-888888888888 | <namepace> | <app-ID> | mx-runtime  |

**8.2 Call-Home / Subscription Runtime Licenses**

For Call-home (subscription) runtime licenses, you will need to update the following resources **for each** `MendixApp` configured in the `<namespace>`:

Firstly, list all the `MendixApps` configured in the given `<namespace>`

    kubectl -n <namespace> get MendixApps

That returns something like:

    NAME       AGE
    my-app-1   1h
    my-app-2   2h

Edit each of the MendixApp CRs. For example, to edit “my-app-1”:

    kubectl -n <namespace> edit MendixApp my-app-1

Remove all the custom configuration properties that relate to the Call-home License server from the spec > runtime > customConfiguration section. These have the prefix `License.*`.

    spec: 
     runtime:
        customConfiguration: >-
          {"ScheduledEventExecution":"NONE","MicroflowConstants":"{\"MyFirstModule.MyConstant\":\"Awesome\",\"RestClient.RestServiceUrl\":\"https://go-dummy-app.privatecloud-storage-tls.svc.cluster.local\",\"Atlas_Core.Atlas_Core_Version\":\"3.0.3\"}","License.SubscriptionSecret":"28e25669-d69a-4e14-a5ee-849bacdb2bd6","License.UseLicenseServer":"true","License.LicenseServerURL":"https://subscription-api.test.mendix.com/activate","License.EnvironmentName":"b3406922-331d-4958-b5ee-bec1f1a04cd0"}

After all the `MendixApp` CRs are updated, restart the Mendix Operator:

    kubectl -n <namespace> scale deployment mendix-operator --replicas=0
    kubectl -n <namespace> scale deployment mendix-operator --replicas=1

Once all the MendixApps are running we can confirm that the licenses were assigned:

    mx-pclm-cli license list-usage -s <pclm-http-url> \
        -u <admin-user> \
        -p <admin-password>

This would return for the previous example: 

| License-ID                           | Namespace  | App-ID   | Type        |
| ------------------------------------ | ---------- | -------- | ----------- |
| 22222222-2222-2222-2222-777777777777 | <namepace> | my-app-1 | mx-operator |
| 22222222-2222-2222-2222-888888888888 | <namepace> | my-app-1 | mx-runtime  |
| 22222222-2222-2222-2222-777777777777 | <namepace> | my-app-2 | mx-operator |
| 22222222-2222-2222-2222-999999999999 | <namepace> | my-app-2 | mx-runtime  |



## 9 Troubleshooting

9**.1 mx-pclm-cli Help**
You can get help on using mx-pclm-cli and it’s individual commands at any time by using the help command.
For example, `mx-pclm-cli --help` or `mx-pclm-cli user --help`.

