---
title: "Private Cloud License Manager"
linktitle: "PCLM – License Manager"
url: /developerportal/deploy/private-cloud/private-cloud-license-manager/
description: "Describes setting up a license server and applying licenses to your Mendix app namespaces in private cloud"
weight: 47
---

{{% alert color="warning" %}}
Private Cloud License Manager is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

When deploying your Mendix app for production use, it needs to be licensed. This removes the restrictions which are placed on unlicensed apps. For more information, see [Licensing Mendix for Private Cloud](/developerportal/deploy/private-cloud/#licensing) in the *Private Cloud* documentation.

Apps which are deployed to the Mendix Cloud have access to the internet and have licenses which work on a subscription basis, contacting the Mendix license server to validate the license. This method is not appropriate for apps which are deployed using Mendix for Private Cloud, and may even be in standalone mode and not connected to the internet (air-gapped).

Rather than having to apply and update licenses for each environment individually, the Mendix **Private Cloud License Manager** (PCLM) provides a repository of offline Mendix licenses to enable you to manage these centrally. This reduces the possibility of errors, and enables the production of license usage reports.

The PCLM runs as a Kubernetes service on your cluster. This means that it can be used by all your Mendix apps which run in namespaces within that cluster.

## Prerequisites{#prerequisites}

To install and use the PCLM, you need the following prerequisites:

* A Mendix for Private Cloud cluster
* Mendix Operator in version 2.11.0 or above
* Administrative rights to a Kubernetes namespace to install PCLM server (a dedicated namespace is recommended). This can be within your Mendix for Private Cloud cluster, or in another cluster which is accessible over HTTP
* A Postgres or SQLServer database server and within it:
    * A dedicated database with remote access which will be used to store your licenses, user authorization details, and usage information
        * The database server should be accessible to the cluster where the application is deployed.
        * The database server must allow inbound connections.
        * The database must be called *mxlicenses*.
    * A dedicated administrator user role with all grants over this database (including the `Create Table` server role, and `Select`, `Insert`, `Update`, `Delete`, and `Truncate` database roles for the tables that are created)
* Kubectl or the OpenShift CLI
* The mx-pclm-cli tool
* The default password for the PCLM server `administrator` account – you will receive this together with your copy of the PCLM server

{{% alert color="info" %}}
The PCLM server will not create the database for the licenses, you need to create this yourself using the guidance above.
{{% /alert %}}

## Installing the PCLM server

{{% alert color="info" %}}
To prevent unexpected issues, as a best practice, install the PCLM server in a separate namespace.
{{% /alert %}}

You install the PCLM server by applying a manifest using `kubectl` or `oc`. This manifest can be created for you by the mx-pclm-cli tool. The mx-pclm-cli tool is available for download in the **Installation** tab of the **Namespace Details** page.

### Creating the Manifest

The `installer-gen` option of mx-pclm-cli is used to create a yaml manifest file to apply to your Kubernetes namespace.
Use the following command:

```bash
mx-pclm-cli installer-gen --db-type <db-type> \
    --db-hostname <hostname> \ 
    --db-name <db-name> \
    --db-user <db-user> \
    --db-password <db-pass> \
    --db-port <port> \ 
    --db-strict-tls <tls-boolean> \
    --ssl-cert-file <ssl-root-certificate> \
    --image-repo <docker-repo> \
    --image-tag <docker-tag> \
    --out-file <out-file>
```

Where you need to supply the following parameters

* `<db-type>` – the sort of database, either `postgres` *(default)* or `sqlserver`
* `<hostname>` – the hostname of the database service
* `<db-name>` – the name of the database where you want to hold the PCLM data
* `<db-user>` – a database user with the rights described in the prerequisites section
* `<db-pass>` – the password for the database user
* `<port>` – the port used to access the database, default: *5432*
* `<tls-boolean>` – whether the database uses strict TLS, `true` or `false` *(default)*
* `<ssl-root-certificate>` – the location of the SSL Root certificate file, if `<tls-boolean>` is `true`
* `<docker-repo>` – location of the image repo, default: `private-cloud.registry.mendix.com/privatecloud-license-manager`
* `<docker-tag>` – the docker image tag, default: `0.4.0`
* `<out-file>` – the name of the file where the yaml is written, for example `manifest.yaml`

### Applying the Manifest

To apply the installation manifest to install the server in the Kubernetes namespace, use the following command:

`$ kubectl -n <namespace> apply -f <out-file>`

Where you need to supply the following parameters

* `<namespace>` – the namespace in which the PCLM server will run
* `<out-file>` – the name of the file which contains the yaml manifest, for example `manifest.yaml`

This creates the following resources:

* `mendix-pclm` – the deployment CR of the server
* `mendix-pclm` – a secret containing the credentials to access the Database
* `mx-private-cloud-mx-privatecloud-license-manager` – the service name of the PCLM server

## Reaching the HTTP REST API of the PCLM Server

You will now be able to communicate with the PCLM Server through an HTTP REST endpoint. The endpoint will be different depending on whether you are using a Kubernetes Service or Kubernetes Ingress.

### Using Kubernetes Ingress

In most cases, the PCLM server is installed in a separate cluster. This means you have to create an [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) for your Kubernetes cluster or a [Route](https://docs.openshift.com/enterprise/3.0/architecture/core_concepts/routes.html) for your OpenShift cluster in order to allow those HTTP connections.

You must also define a host domain in the DNS service (for example, AWS Route53).

The configuration to connect to the server running in the namespace `my-pclm-1` will look similar to this:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: pclm-ingress
  namespace: my-pclm-1 
spec:
  rules:
    - host: pclm.<domain> # for example, pclm.mydomain.io
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: mx-privatecloud-license-manager
                port:
                  number: 80
```

Given the many possible ingress controllers which depend on the cloud provider, you will need to follow the instructions for your ingress controller and cloud.

For production environments, in order to increase the security of your app, consider using an ingress with HTTPS/TLS enabled. Without HTTPS/TLS, all traffic may go unencrypted over the public internet.

To apply the manifest to configure the ingress in the Kubernetes namespace, use the following command:

`$ kubectl -n <namespace> apply -f <ingress-file>`

* `<namespace>` – the namespace in which the PCLM server will run
* `<ingress-file>` – the name of the file which contains the yaml manifest for the ingress configuration

You can confirm that you can connect to the PCLM server using the following URLs:

* `http<s>://pclm.<domain>/health` should return `HTTP 200 OK`
* `https<s>://pclm.<domain>/metrics` should return `HTTP 200 OK` together with the collected server metrics

### Using the Kubernetes Service

If PCLM is installed in the same Kubernetes cluster as the Private Cloud environments, the PCLM server can be reached at `http://mx-privatecloud-license-manager.<namespace>.svc.cluster.local`, where `<namespace>` is the namespace where the PCLM Server was installed.

You can confirm that you can connect to the PCLM server using the following URLs:

* `http://mx-privatecloud-license-manager.<namespace>.svc.cluster.local/health` should return `HTTP 200 OK`
* `http://mx-privatecloud-license-manager.<namespace>.svc.cluster.local/metrics` should return `HTTP 200 OK` together with the collected server metrics.

When using the CLI, use `kubectl port-forward` instead of an ingress, as in the following example:

```bash
kubectl port-forward -n <namespace> svc/<service name> 8080:8080
```

and use http://localhost:8080 as the PCLM address

## Setting Up Users

Once the PCLM server is running, you can set up users.
The PCLM server supports two **user types:**

* Admin – this user type has read-write permissions of users and licenses resources. It should only be used from the cli.
* Operator – this user type has only read-only permissions for license resources. This user is designed to allow the Mendix for Private Cloud Operator to obtain licenses.

### Administrator

When the PCLM server is set up, it contains one user `administrator` with a default password. This password should be modified immediately using the command:

```bash
mx-pclm-cli user update \
  -s <pclm-http-url> -u administrator -p <default-password> \
  --username administrator --password='<new-password>' --type admin
```

Where:

* `<pclm-http-url>` – is the HTTP REST endpoint of the PCLM server
* `<default-password>` – is the default password which is set for the `administrator` user – you can obtain this from [Mendix Support](https://support.mendix.com)
* `<new-password>` – is the new password for the `administrator` user

#### Authenticating Using a Config File

To avoid supplying the `<admin-user>`, `<admin-password>`, and `<pclm-http-url>` on every call, these can be set up once in a config file. The PCLM command line, mx-pclm-cli, will then pick up these values and use them for all commands.

The default location for the config file is `$HOME/.pclm/config`. Alternatively, you can use the flag `-c` (`--config-file`) on the mx-pclm-cli commands to specify an alternative location for the config file.

The format of the config file is:

```yaml
admin_user: <admin-user>
admin_pass: <admin-password>
server_url: <pclm-http-url>
```

Where:

* `<admin-user>` – is a user of type *admin* which can update users, default: `administrator`
* `<admin-password>` – is the password for the chosen *admin* user
* `<pclm-http-url>` – is the HTTP REST endpoint of the PCLM server

### Additional Users

You will want to set up *operator* users and (optionally) additional *admin* users. To do this, use the following command:

``` bash
mx-pclm-cli user create \
  -s <pclm-http-url> -u <admin-user> -p <admin-password> \
  --username=<new-user>  --password='<password>' --type=<user-type>
```

Where:

* `<pclm-http-url>` – is the HTTP REST endpoint of the PCLM server (overrides the config file)
* `<admin-user>` – is a user of type *admin* which can update users, default: `administrator` (overrides the config file)
* `<admin-password>` – is the password for the chosen *admin* user (overrides the config file)
* `<new-user>` – is the name of the new user you are creating
* `<password>` – is the password for the new user
* `<user-type>` – is the type of user you are creating, either `admin` or `operator`

## Installing Licenses

Licenses are supplied by Mendix as a **License Bundle**. A license bundle can contain both Mendix Runtime (app) licenses and a Mendix Operator license.
Runtime licenses are required for each Mendix runtime environment, and an Operator license is required for each namespace where the Operator runs.
To purchase a license bundle, please contact [Mendix Support](https://support.mendix.com/). You will receive your license (or licenses) as a .zip file.
The following command will import a license bundle into the PCLM server:

```bash
mx-pclm-cli license import \
    -s <pclm-http-url> \
    -u <admin-user> \
    -p <admin-password> \
    -f <bundle-zip-file-path>
```

Where:

* `<pclm-http-url>` – is the HTTP REST endpoint of the PCLM server (overrides the config file)
* `<admin-user>` – is a user of type *admin* which can update users, default: `administrator` (overrides the config file)
* `<admin-password>` – is the password for the chosen *admin* user (overrides the config file)
* `<bundle-zip-file-path>` – is the location of your license bundle file

You will get a report of the results of your import operation:

```text
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
```

If a license has previously been imported, you will be told that it is `[Duplicated]`.

### Listing the Runtime License

Once the license bundle is installed, you can see the list of Runtime license in the bundle using following command:

```bash
mx-pclm-cli license runtime list \
   -s <pclm-http-url> \
   -u <admin-user> \
   -p <admin-password>
```   

You will receive the result in the following format:

| LICENSE-ID                           | TYPE       | EXPIRATION-DATE      | CREATED-AT           | PRODUCTS |
|--------------------------------------|------------|----------------------|----------------------|----------|
| 5025defa-a442-47c3-ae2e-2ac6628926e3 | mx-runtime | 2024-05-02T14:38:39Z | 2023-05-02T14:38:39Z | standard |
| c823eeb1-7eb2-471c-a818-7be132c9cdb1 | mx-runtime | 2024-05-02T14:38:39Z | 2023-05-02T14:38:39Z | standard |

{{% alert color="info" %}}
The **PRODUCTS** field represents the product type requested for the runtime license. If the requested license is any value other than standard, then this product type needs to be specified in the Mendix app CR. For more information, see how *runtimeLicenseProduct* is configured in [Edit MendixApp CR](/developerportal/deploy/private-cloud-operator/#edit-cr).
In order to update the **product type** in the Mendix App CR, ensure that you are using Mendix Operator version 2.12 and newer.
{{% /alert %}}

### Listing the Operator License

Once the license bundle is installed, you can view the list of Runtime licenses in the bundle by using the following command:

```bash
mx-pclm-cli license operator list \
   -s <pclm-http-url> \
   -u <admin-user> \
   -p <admin-password>
```   

You will receive the result in the following format:

| LICENSE-ID                           | TYPE       | EXPIRATION-DATE      | CREATED-AT           | PRODUCTS |
|--------------------------------------|------------|----------------------|----------------------|----------|
| c97ecdae-0376-42ab-9d91-22a45a88a3e4 | mx-operator| 2024-05-02T14:38:39Z | 2023-05-02T14:38:39Z | standard |

## Applying Licenses to Your Operator and Apps

To use the licenses, you must add information to the operator configuration. For this, you need to have set up the operator in a namespace on your cluster. See [Installing and Configuring the Mendix Operator](/developerportal/deploy/private-cloud-cluster/#install-operator) in the *Private Cloud Cluster* documentation. Assume that the operator is running in the namespace `<operator-ns>`.

### Storing Operator User Credentials and Configuring the Mendix Operator

The credentials you have created for an operator or admin type user need to be stored in the repository. You also need to patch the Mendix Operator and Agent with the location of the PCLM server, and the credentials for accessing the PCLM server. To do this, you can use the below mx-pclm-cli command:
   
```bash
mx-pclm-cli config-namespace -n <operator-ns> \
   -s <pclm-http-url> \
   -u <admin-user> \
   -p <admin-password>
```   

The default secret name is `mendix-operator-pclm`. If PCLM was previously configured manually, the existing secret name is used. 

{{% alert color="info" %}}
For Global Operator installation, execute the above command in both the Global Operator namespace and its managed namespaces where the license is intended to be applied. Please make certain that identical PCLM license details are configured for both the managed and global operator namespaces to avoid unexpected outcomes. Global Operator is still in beta, and it does not currently fully supports PCLM.
{{% /alert %}}

#### Sample Yaml Files

Below are sample yaml files for the secrets, with the changes applied after running the above command. You do not need to make those changes manually; to configure the Mendix Operator and Agent, it is enough to run the above command.

##### Mendix Operator
   
```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: <secret-name>
data:
  username: <base64-encoded username>
  password: <base64-encoded password>
```

Where:

* `<secret-name>` – is the name of the secret where you want to store the credentials
* `<username>` – is a user of *operator* or *admin* type
* `<password>` – is the password for the chosen username

With the above command, the Mendix Operator Configuration will also be patched with below information.

```yaml
spec:
  licenseManager:
    credentialsSecretName: <secret-name>
    serverURL: http://<pclm-http-url>
```

Where:

* `<secret-name>` – the default secret name is `mendix-operator-pclm`
* `<pclm-http-url>` – is the HTTP REST endpoint of the PCLM server

##### Mendix Agent

```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: <secret-name>
data:
  username: <base64-encoded username>
  password: <base64-encoded password>
  server-url: <base64-encoded PCLM URL>
```

Where:

* `<secret-name>` – the default secret name is `mendix-agent-pclm`
* `<username>` – is a user of *operator* or *admin* type
* `<password>` – is the password for the chosen username
* `<server-url>` – is the URL of the PCLM server

### Applying Licenses

Once you have patched the Mendix Operator, restart your environment. All app environments which are controlled through the operator will have licenses applied automatically after the restart.

{{% alert color="info" %}}
You cannot choose which environments will be licensed. If you have more environments controlled through the operator than licenses, some environments will not be licensed. You can see which environments have been licensed using the instructions in [Verifying That the Licenses Are Applied](#verify), below.
{{% /alert %}}

If you delete a licensed app environment, the mx-runtime license will be marked as unused and will be applied to new app environments. This may take up to 30 minutes.

If you do not have any unused licenses, new app environments will not be licensed.

The Mendix Operator will also pick up a Mendix Operator license if one has been imported into the PCLM server.

### Verifying That the Licenses Are Applied{#verify}

There are multiple ways to verify whether the licenses (both Operator and MendixApp) are applied and where.

#### Using the PCLM CLI

You can see which licenses are currently used by which environments and operators, as well as unused licenses, using the following command.

```bash
mx-pclm-cli license list-usage -s <pclm-http-url> \
    -u <admin-user> \
    -p <admin-password>
```

Where:

* `<pclm-http-url>` – is the HTTP REST endpoint of the PCLM server (overrides the config file)
* `<admin-user>` – is a user of type *admin* which can update users, default: `administrator` (overrides the config file)
* `<admin-password>` – is the password for the chosen *admin* user (overrides the config file)

Which would reply with something similar to this:

| LICENSE-ID | NAMESPACE | APP-ID | TYPE | CREATED-AT |
| --- | --- | --- | --- | --- |
| `<license-id>` | `<namepace>` | `<app-ID>` | mx-operator | yyyy-mm-dd hh:mm:ss |
| `<license-id>` | `<namepace>` | `<app-ID>` | mx-runtime  | yyyy-mm-dd hh:mm:ss |

#### From Mendix Application Custom Resources Installed in the Namespace

This way of checking is more advanced, and should be used only for debugging.

##### Checking the Operator License

Use the following command to verify whether the Operator license was applied correctly:

`<oc|kubectl> -n <namespace> get MendixApp <app_id> -o yaml`

In the section `status.licenseStatus` you should see something similar to the following:

```yaml
status:
  licenseStatus:
    licenseID: 1ca080f8-c54e-4e24-b09c-14353505a65d
    mode: Licensed
```

##### Checking the Runtime License

Use the following command to verify whether the Runtime license was applied correctly:

`<oc|kubectl> -n <namespace> get Runtime <app_id> -o yaml`

In the section `spec.resources.runtimeLicense` you should see something similar to the following:

```yaml
spec:
  resources:
    runtimeLicense:
      id: c823eeb1-7eb2-471c-a818-7be132c9cdb1
      key: <base64-encoded-license-key>
      type: offline
```

## Migration

If you have manually configured static runtime licenses (offline licenses), PCLM will not replace those licenses. Only the runtime licenses applied through a Subscription secret will be replaced. If your namespace was never licensed, please ignore this section.

Once you have configured the Mendix Operator running in a specific `<namespace>` to use the PCLM (following steps 7.1 and 7.2) you need to restart the Mendix operator to remove the existing licenses. You can do this as follows:

```bash
kubectl -n <namespace> scale deployment mendix-operator --replicas=0
kubectl -n <namespace> scale deployment mendix-operator --replicas=1
kubectl -n <namespace> scale deployment mendix-agent --replicas=0
kubectl -n <namespace> scale deployment mendix-agent --replicas=1
```

This restarts the Mendix Operator, and associated Mendix App Runtimes, and configures both with licenses fetched from the PCLM server.

You can confirm this by running the following command:

```bash
mx-pclm-cli license list-usage -s <pclm-http-url> \
    -u <admin-user> \
    -p <admin-password>
```

This will indicate that licenses have been applied to the operator and apps in the selected namespace:

| License-ID                           | Namespace  | App-ID   | Type        |
| ------------------------------------ | ---------- | -------- | ----------- |
| `<license-id>` | `<namepace>` | `<app-ID>` | mx-operator |
| `<license-id>` | `<namepace>` | `<app-ID>` | mx-runtime  |

## Troubleshooting

### mx-pclm-cli Help

You can get help on using mx-pclm-cli and its individual commands at any time by using the help command.
For example, `mx-pclm-cli --help` or `mx-pclm-cli user --help`.
