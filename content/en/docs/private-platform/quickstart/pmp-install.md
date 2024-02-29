---
title: "Install the Private Mendix Platform"
url: /private-mendix-platform-quickstart/install/
description: "Documents the installation of the Private Mendix Platform."
weight: 20
tags: ["private mendix platform",  "private platform", "svix", "installation"]
---

## 1 Introduction

This document provides a guide for installing the Private Mendix Platform, and optionally also the Svix component.

## 2 Installing the Private Mendix Platform

Install the Private Mendix Platform by doing the following steps:

1. Run the command `./installer platform -n=<namespace name>`, where `-n` is the same namespace as the one where you installed Svix and PCLM.
2. Click **Configure Namespace**.

    {{< figure src="/attachments/private-platform/pmp-install6.png" >}}

3. Click **Configure**, and then specify the following parameters:

    * **AppName** - The default app name is `mxplatform`. You can change it as required.
    * **DatabasePlan/StoragePlan** - The name of the plan that you created previously.
    * **AppUrl** - The endpoint where you can connect to your running app. It must be a URL which is supported by your platform. If you leave it blank, Mendix Operator will create it.
    * **EnableTLS** - Allows you to enable or disable TLS for the Mendix app's Ingress or OpenShift Router. The default value is use the default settings.
    * **TLS option** - Allows you to use an existing `kubernetes.io/tls` secret containing the TLS certificate, or to provide the `tls.crt` and `tls.key` values directly.
    * **TLS Secret** - An existing `kubernetes.io/tls` secret containing the TLS certificate. Cannot be used together with certificate and key. If you leave it blank, the default TLS certificate from the Ingress Controller or OpenShift Router will be used.
    * **TLS certificate** and **TLS key** – Allows you to provide the `tls.crt` and `tls.key` values directly (not recommended for production environments). Cannot be used together with secretName.
    * **SourceUrl** - The location of the deployment package, in the format `oci-image://<your image location>`. This location must be accessible from your cluster.
    * **Replicas** – By default one replica will be started when you deploy your app.

    {{< figure src="/attachments/private-platform/pmp-install7.png" >}}

4. Click **Runtime**, and then specify the following parameters:

    * **MxAdminPassword** - The password for the admin user. It must have at least one number, one upper case letter, one lower case letter and one symbol, with a minimum length of 12 characters.
    * **dtapmode** - For the development of the app, for example acceptance testing, select **D**. For production deployments, select **P**. If integrated with PCLM, you can keep the value as **D**.
    * **License Id/Secret** - Offline LicenseId (**UUID**) value provided by Mendix Support.

    {{< figure src="/attachments/private-platform/pmp-install8.png" >}}

5. In the **Enabled Functions** section, select or clear the functions that you want to enable or disable:
 
    * **Persist Config** - When enabled, this setting locks the Private Mendix Platform configuration, so that it can no longer be modified from the user interface.
    * **Project Management** - Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.
    * **Marketplace** - Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.
    * **Marketplace Approvals** - Optional. If enabled, contents that users publish to the private Marketplace require administrator approval before publishing.
    * **Marketplace Import** - Optional. Enables content import with an external source.
    * **IDP** - Optional. Enable users to login using SSO by configuring your IdP integration.
    * **Webhook** - Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.

6. Click **Review and Apply** > **Evaluate Configuration**.
7. Make any required changes or click **Run Test App**.

    {{< figure src="/attachments/private-platform/pmp-install9.png" >}}

8. After the test installation is completed, keep the installer open so you can reuse the settings and apply them to the installation later.
9. Open the endpoint URL that you configured as the **AppURL** in step 3 above and verify that you can upload a test file.
10. In the Private Mendix Platform installer, click **Apply Configuration**.
11. Click **OK** to remove the test installation and install Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-install10.png" >}}

## 3 Optional: Installing the Svix Component {#install-svix}

Svix is required if you want to use webhooks. Install the Svix component by doing the following steps:

1. Run the command `./installer component -n=<namespace name>`, where `-n` indicates a namespace. The namespace must be the same as the namespace that you used for Private Mendix Platform.
2. Select **Svix** and specify the following parameters:

    * **POSTGRES_DSN** - A Postgres DSN, for example, `postgresql://postgres:postgres@pgbouncer/postgres`
    * **REDIS_DSN** - A Redis DSN, for example, `redis://redis:6379`
    * **Image** - Svix server docker images which can access your cluster. The default value is set to the public registry `svix/svix-server:v0.75.0`. You can change it to your private image in a private cluster.

3. Click **Install Svix**.

{{% alert color="info" %}}
The installer does not catch your pod's running status. In case of issues, verify that the pod is running correctly.
{{% /alert %}}