---
title: "PDF Document Generation Installation and Configuration"
linktitle: "Installation and Configuration"
url: /appstore/modules/document-generation/installation-configuration/
weight: 2
---

## Installation {#installation}

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Documentation Generation module into your app.

## Configuration {#configuration}

1. In the **App Explorer**, open the **App** section, double-click **Settings**, then go to the **Runtime** tab, and configure the **ASu_DocumentGeneration_Initialize** microflow for the **After startup** property. If there is already an after startup microflow set, add the **ASu_DocumentGeneration_Initialize** microflow as an action in the existing microflow.
2. In the **App Explorer**, double-click **Security** in the **App** section, and then set the `Security level` to *Prototype/demo* or *Production*.
3. In the **App Explorer**, double-click **Security** in the **App** section again, then go to the **User roles** tab and perform the following steps:
    1. Add the module role **User** from the **DocumentGeneration** module to all app user roles that should be able to generate a document.
    2. Add the module role **Administrator** from the **DocumentGeneration** module to all app user roles that should be able to [register](#register-app) the app environments on Mendix Cloud.
4. To clean up old document requests, enable the scheduled event **SE_DocumentRequest_Cleanup** in the  **_UseMe** folder of the **DocumentGeneration** module. This will automatically remove expired **DocumentRequest** objects after a configured offset in days. The offset is configured using the constant **DocumentGeneration.RequestCleanupOffsetInDays** (the default value is 7 days). The scheduled event runs daily at 03:00 UTC.
5. To test the module locally, perform the procedure as described in the [Running locally from Studio Pro](#run-locally) section. 
6. When deploying your app, consider that we currently support two types of deployments:

    1. [Running on Mendix Cloud](#run-on-mendix-cloud) using the PDF Service in the Mendix Public Platform. This option is available for apps that are deployed to the following environments:
        * [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
        * [Mendix Cloud Dedicated](/developerportal/deploy/mendix-cloud-deploy/)
        * [Mendix on Kubernetes Connected](/developerportal/deploy/private-cloud/)

    2. [Running on self-hosted for airgapped and on-premises](#run-private-service-and-on-premises) using a self-hosted version of the PDF Service:
        * Using [Private PDF Document Generation Service](#run-private-service) (recommended)
        * Using a local version of the PDF Service, available for [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) and [Linux](/developerportal/deploy/linux/)

   {{% alert color="info" %}}The PDF Service in the Mendix Public Platform is also available for any other deployment type that allows bidirectional communication with the PDF Service. In this case, [submit a support request](/support/submit-support-request/) with the details of the app environment(s) to register your app.{{% /alert %}}

### Running Locally from Studio Pro {#run-locally}

To be able to test PDF document generation when using **Run Locally** inside Studio Pro, you need to have Chrome or Chromium installed on your local machine.

#### Chrome

The PDF Document Generation module automatically tries to find the Chrome executable (*chrome.exe*) in the default installation paths. 

If you have installed Chrome in a custom location, configure the path to the Chrome executable in the constant **CustomChromePath** in the **_UseMe** > **Configuration** folder. 

#### Chromium {#chromium}

If you use Chromium, only use stable releases. The currently supported stable release is [112.0.5615.0](https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1109252/). 

Download the *chrome-win.zip* package and extract the archive to a location of your choosing. 

Configure the path to the *chrome.exe* executable in the **CustomChromePath** constant in the **_UseMe** > **Configuration** folder.

### Running on Mendix Cloud {#run-on-mendix-cloud}

To allow the module to send and receive document generation requests on your Mendix Cloud environments, you need to perform the following steps:

1. If your app is deployed on Mendix Cloud or Mendix Cloud Dedicated, [enable the DocGen request handler](#enable-docgen).

   {{% alert color="info" %}}This step is required only for licensed apps on Mendix Cloud or Mendix Cloud Dedicated. If your app is deployed on [Mendix on Kubernetes Connected](/developerportal/deploy/private-cloud/), skip this step and make sure that the */docgen/* path is accessible.{{% /alert %}}

2. [Register your app environments.](#register-app)
3. If your app is configured to restrict access based on IP address, [add the IP addresses used by the DocGen service to the list of allowed addresses.](#allow-ip)

#### Enabling the DocGen Request Handler for Licensed Apps {#enable-docgen}

{{% alert color="info" %}}Skip this step if your app is [deployed as a Free app](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/#deploy-free-app) to Mendix Cloud. You can [register your app environment](#register-app) directly.{{% /alert %}}

1. Make sure that you have configured the **DocumentGeneration** module as described in the [Configuration](#configuration) section.

2. Make sure that you have the application [deployed to the desired Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).

3. If the app does not have any access restrictions, you can skip this step. If the app has a configured [access restriction profile](/developerportal/deploy/environments/#access-restriction-profiles) that disables communication with the internet, you need to make sure that the app can communicate with the Document Generation service in the Public Cloud. To allow the module to send and receive document generation requests in your Mendix Cloud environments, enable the DocGen request handler as follows:

    1. Go to the **Environments** page for the app as follows:

       * Go to the [Nodes](https://cloud.home.mendix.com/) page, then, in the **Public Cloud - Nodes** list, find the desired app, then click **Environments**.
       * Alternatively, go to [Apps](https://sprintr.home.mendix.com), then in the **My Apps** list, find the desired app, then click **Environments**.

        The app's **Environments** page opens. The **Overview** tab shows a list of available environments for your app.
    
    2. On the **Overview** tab, click **Details** for the respective environment.
    
    3. In the specific **Environment Details** page, select the **Network** tab.
    
    4. Scroll down to **Path Based Access Restrictions** and click **Add**. The **Edit Path Based Access Restriction** dialog box opens.
    
    5. Fill in the fields as follows:
        * In the **Path** field, enter */docgen/*.
        * From the **New Restriction Type** drop-down list, select one of the following options:

            * **Allow all access** – Allows unrestricted bidirectional access to the `/docgen/` path. This is less secure and gives full internet access to this path.
            * **Custom Profile for Client Certificates and/or IP ranges** – Applies a custom access restriction profile to the `/docgen/` path. When you select this option, choose your access restriction profile from the **New Restriction Profile** drop-down list. Ensure that the selected profile allows bidirectional access to the `/docgen/` path.     
            To configure the required IP addresses, follow the [Allowing the Document Generation Service IP Addresses](#allow-ip) section.     
            For more information on managing access restriction profiles, refer to [Access Restrictions](/developerportal/deploy/access-restrictions/).
    
    6. Click **Save**. The **/docgen/** path is added to the list.
    
    7. Restart your application for the new request handler to take effect.
    
    8. Now you can [register your app environments](#register-app).

#### Allowing the Document Generation Service IP Addresses {#allow-ip}

If your app is configured to [restrict access for incoming requests](/developerportal/deploy/access-restrictions/) using IP restrictions, you must add the [outbound IP addresses of the DocGen service](/developerportal/deploy/mendix-ip-addresses/#global-platform-ips-outbound) to the list of allowed addresses.    

#### Registering Your App Environments {#register-app}

1. Add the snippet **Snip_AppRegistration** to a page in your app that is accessible to users with the **Administrator** module role set in the **DocumentGeneration** module. The snippet can be found in the  **_UseMe** > **Admin** folder of the **DocumentGeneration** module.
2. Enable the scheduled event **SE_AccessToken_Refresh** to automatically refresh the access token that is used to secure access to the Document Generation cloud service. The scheduled event can be found in the  **_UseMe** > **Scheduled events** folder of the **DocumentGeneration** module.

    * In version 1.6.0 and above, for apps deployed on Mendix Free Cloud, a **Renew app registration** button will be visible in the **Snip_AppRegistration** snippet if your registration is going to expire within 24 hours or has already expired. You can use this button to manually refresh your token.

3. Make sure that your changes are [deployed to your Mendix Cloud environment](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).
4. Sign in to the app environment you want to register.
5. Navigate to the page that contains the **Snip_AppRegistration** snippet.
6. Follow the steps on the page to register your app environment.

{{% alert color="info" %}}Each of your app environments needs to be registered separately. A successful app registration is limited to the app URL that was provided during the registration. Note that a change in the app URL, or restoring a database backup from one environment to another, will require you to register the affected app environments again.{{% /alert %}}

### Running on self-hosted for airgapped and on-premises {#run-private-service-and-on-premises}

{{% alert color="info" %}} When self-hosting the Document Generation Service in an airgapped environment, the browser does not have access to the internet. As such, note that any external dependencies such as fonts, stylesheets, or images are not loaded. This could cause the document generation process to fail or result in incomplete documents. {{% /alert %}}

#### Running Private PDF Document Generation Service {#run-private-service}

When access to the public Mendix PDF generation Service is restricted, particularly in isolated or airgapped environments, Mendix offers a privately hosted, Docker containerized PDF Document Generation Service as an alternative. With this deployment type, you can host the document generation service on your own infrastructure and have full control over resources, availability and scalability. In addition, this option offers configurable limits, such as the maximum file size and maximum page rendering time.

It is available starting with module versions 1.11.0 for Studio Pro 9, and 2.1.0 for Studio Pro 10. For more detailed information, installation guide and configuration, refer to [Private PDF Document Generation Service](/appstore/services/private-document-generation-service/).

#### Running a local version of the PDF Service on Windows or Linux {#run-on-premises}

To configure the module to generate documents on your on-premises environments, you need to perform the following steps:

1. Make sure that you have the prerequisite software installed.
2. Configure the module to use the local service.
3. Enable the DocGen request handler.

##### Installing the Prerequisite Software {#install-prerequisites}

You should pre-install and actively maintain the following software. Mendix does not provide support for the installation, configuration, and maintenance of these packages.

**Chromium**

You should have installed a stable release of the Chromium browser. The currently supported stable release is 112.0.5615.0 ([Windows](https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1109252/). [Linux](https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Linux_x64/1109252/)).

{{% alert color="info" %}}Even though we advise using Chromium, you can also use Google Chrome instead. The configuration remains the same.{{% /alert %}}

**Node.js**

You should have installed a stable release of [Node.js](https://nodejs.org/).  Mendix recommends installing the same version that is shipped with the Studio Pro version that is used to build the project. You can find this version by locating and executing the `node` executable within the `modeler/tools/node` folder of your Studio Pro installation.

{{% alert color="info" %}}Make sure that the Mendix Runtime has the applicable permissions to run the *node* executable.{{% /alert %}}

##### Certificate Requirements

Both the Mendix and Node.js runtime need to trust the SSL/TLS certificate that is used to secure connections to the Mendix app. If you are using a custom Certificate Authority (CA), make sure that the Node.js runtime trusts the CA. If Node.js does not recognize the CA by default, set the `NODE_EXTRA_CA_CERTS` environment variable to point to the applicable certificate file, which should be in a `.cert` or `.pem` format. 

The user account that is used to execute the Mendix runtime needs read access to the certificate file.

##### Configuring the Module to use the Local Service {#configure-local-service}

1. Set the **OverrideServiceType** constant to *Local* in the **_UseMe** > **Configuration** folder. This enforces the use of the local service instead of the cloud service.

2. Configure the path to the *chrome* executable in the **CustomChromePath** constant in the **_UseMe** > **Configuration** folder.

3. Configure the path to the *node* executable in the **CustomNodePath** constant in the **_UseMe** > **Configuration** folder. 

##### Enabling the DocGen Request Handler {#setup-inbound-rules}

In case you deploy on [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/), you need to add the following rules when configuring the [reverse proxy inbound rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules):

Rule | Name | Pattern | Rewrite URL
---- | ---- | ------- | -----------
1 | p | `^(p/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
2 | docgen | `^(docgen/)(.*)` | `http://localhost:8080/{R:1}{R:2}`

{{% alert color="info" %}}Rule 1 is based on the default URL prefix (`p`) for page/microflow URLs. If you configured a different prefix in the runtime settings of your app, adjust the rule accordingly.{{% /alert %}}
