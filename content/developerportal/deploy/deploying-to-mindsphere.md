---
title: "Siemens MindSphere"
category: "Deployment"
menu_order: 45
description: "Describes how to register a Mendix app at the MindSphere Gateway and integrate it into the MindSphere Launchpad"
tags: ["MindSphere", "deploy", "cloud foundry", "launchpad", "scopes", "roles", "sso", "XSRF", "limitations", "Gateway"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

MindSphere is the cloud-based, open IoT operating system from Siemens that lets you connect your machines and physical infrastructure to the digital world. It lets you harness big data from billions of intelligent devices, enabling you to uncover transformational insights across your entire business.

This documentation is meant for Mendix developers who want to deploy a Mendix app to the MindSphere Platform.

{{% alert type="info" %}}
You can create Mendix apps which make MindSphere API calls, but which are deployed to a cloud outside MindSphere. However, you will then need to handle user credentials yourself.
{{% /alert %}}

{{% alert type="warning" %}}
There are some limitations to what you can do in your Mendix app if it is deployed to MindSphere. See the [Limitations](/refguide/mindsphere/mindsphere-development-considerations#limitations) section of *MindSphere Development Considerations* for more information.
{{% /alert %}}

{{% alert type="info" %}}
You can easily copy code examples shown within grey blocks into the clipboard. Hover the cursor over the code block and click the copy button which appears.

![](attachments/deploying-to-mindsphere/copy-from-documentation.png)

{{% /alert %}}

To help you with your first MindSphere apps, there is also an example app which contains modules which call the MindSphere APIs. See [How to Use the Siemens MindSphere Pump Asset Example App](/howto/mindsphere/mindsphere-example-app) for more information.

## 2 Prerequisites{#prerequisites}

To deploy your app to MindSphere you need the following prerequisites.

* A MindSphere user account on a developer tenant
* The Cloud Foundry Command Line Interface (CF CLI) – this can be downloaded from [https://github.com/cloudfoundry/cli](https://github.com/cloudfoundry/cli)
* A Cloud Foundry role which allows you to push applications, such as `SpaceDeveloper` (help in setting up Cloud Foundry users can be found in the MindSphere [Cloud Foundry How Tos](https://developer.mindsphere.io/paas/paas-cloudfoundry-howtos.html))
* A MindSphere developer role: either `mdsp:core:Developer` or `mdsp:core:DeveloperAdmin`

## 3 Including Required MindSphere Modules

You must customize your app to allow it to be deployed to MindSphere, registered via the MindSphere Developer Cockpit, and shown in the launchpad. This is done through MindSphere customization modules. There are two ways to include the customization you need in your app.

### 3.1 Using the MindSphere Starter App

The **MindSphere Starter Application** in the Mendix App Store contains all the modules and styling which you need to create an app you want to deploy to MindSphere.

{{% alert type="info" %}}
This is the recommended approach if you are building a new application, as it will provide all the necessary building blocks to get started.
{{% /alert %}}

Open the Desktop Modeler (version 7.22.2 or above) and follow these steps:

1. Click the icon in the top-right of the menu bar to open the Mendix App Store.

	![](attachments/deploying-to-mindsphere/app-store-icon.png)

2. Enter *MindSphere* in the search box, and press <kbd>Enter</kbd>.

3. Select **MindSphere Starter Application** in the search results.

	![](attachments/deploying-to-mindsphere/app-store-search.png)
  
4. Click **Download** to create a new app project using this app.

	![](attachments/deploying-to-mindsphere/app-store-download.png)
  
5. To start the new app project, confirm where to store the app, the app name, and the project directory, then click **OK**.

	![](attachments/deploying-to-mindsphere/app-store-download-project.png)

### 3.2 Customizing an Existing App{#existingapp}

If you have an existing app which was not based on the MindSphere starter app, you must import the required customization. The three modules which must be imported are:

* MindSphere SSO from the Mendix App Store here: [Siemens MindSphere SSO](https://appstore.home.mendix.com/link/app/108805/)

  This module enables users who are logged in to MindSphere to use your app without having to log in again. It also enables you to test your app locally. For more information, see the [Single Sign-On](/refguide/mindsphere/mindsphere-module-details#mssso) section of *MindSphere Module Details*.

* MindSphere OS Bar Connector from the Mendix App Store here: [Siemens MindSphere OS Bar Connector](https://appstore.home.mendix.com/link/app/108804/)

  This integrates the mandatory MindSphere OS Bar with your app. For more information, see the [MindSphere OS Bar](/refguide/mindsphere/mindsphere-module-details#msosbar) section of *MindSphere Module Details*.

* MindSphere Theme Pack (MindSphere_UI_Resources) from the Mendix App Store here: [Siemens MindSphere Theme Pack](https://appstore.home.mendix.com/link/app/108803/)

  This applies MindSphere styling to your app and includes some additional custom files which are required for the correct operation of your app. For more information, see the [MindSphere Theme Pack](/refguide/mindsphere/mindsphere-module-details#msthemepack) section of *MindSphere Module Details*.

## 4 Configuring the Modules

Now that you have your new app, or have imported the MindSphere modules into an existing app, you need to configure the modules to allow your app to work with MindSphere.

### 4.1 Configuring Single Sign-On (MindSphereSingleSignOn)

The following items in the MindSphereSingleSignOn module need to be configured.

![Folder structure of the MindSphereSingleSignOn module](attachments/deploying-to-mindsphere/image2.png)

#### 4.1.1 CockpitApplicationName

The value of *CockpitApplicationName* must be identical to the name of your app as registered in the MindSphere developer portal. It must, therefore, fit the constraints listed in the [App Name](/refguide/mindsphere/mindsphere-development-considerations#appname) section of *MindSphere Development Considerations*.

[//]: # (MindGateURL and PublicKeyURL do not need to be changed until there are more MindSphere environments)

#### 4.1.2 RegisterSingleSignOn

The *RegisterSingleSignOn* microflow must be added as the **After startup** microflow or added as a sub-microflow of an existing *after startup* microflow.

{{% alert type="info" %}}
If you are using the MindSphere Starter Application, this will already be set up as the *After startup* microflow.
{{% /alert %}}

If you are are modifying an existing app, you can do this on the *Runtime* tab of the *Project > Settings* dialog, accessed through the *Project Explorer*.

![Project settings dialog](attachments/deploying-to-mindsphere/image4.png)

### 4.2 Configuring the MindSphere OS Bar (MindSphereOSBarConfig)

The OS Bar shows information about the app you are running.

![Example of the information in the OS Bar](attachments/deploying-to-mindsphere/image10.png)

This is configured as a JSON object held as the default value of the string constant **Config** in the *MindSphereOSBarConfig* module. The imported module has a correctly formatted set of example values.

![Dialog for setting the Config constant for the OS Bar](attachments/deploying-to-mindsphere/image11.png)

Change the JSON to contain appropriate values for the following information:

* displayName – the display name of your app
* appVersion – the version number of your app
* appCopyright – app owner’s name and year of publication
* links – links to additional information about the app

More information on the structure and content of this JSON object, together with sample JSON, can be found in [App Information](https://developer.mindsphere.io/resources/osbar/resources-osbar-getting-started.html#app-information), on the MindSphere developer site.

## 5 Deploying Your App to MindSphere

### 5.1 Pushing to Cloud Foundry

Before you continue, ensure you have fulfilled the prerequisites described in the section [Prerequisites](#prerequisites), above.

#### 5.1.1 Creating a Mendix Deployment Package

To create a Mendix deployment package from your app, do the following:

1.  Open your app in the Desktop Modeler.
2.  Select **Project** > **Create Deployment Package...**.

    {{% image_container width="355" %}}![](attachments/deploying-to-mindsphere/image13.png){{% /image_container %}}

3.  Select the correct **Development line** and **Revision**.
4.  Set the **New version** number and add a **Description** if required.
5.  Change the path and **File name** if necessary.

Your deployment package will be created, and its location displayed in an information message.

{{% alert type="info" %}}
By default, the deployment package will be created in the *releases* folder of your project.
{{% /alert %}}

#### 5.1.2 Deploying the Application to Cloud Foundry using CF CLI

To deploy your deployment package, do the following:

1. Log in to MindSphere CF CLI using a one-time code:

    * Enter `cf login -a https://api.cf.{region}.{mindsphere-domain} --sso`
    * Open the URL printed by the CLI and log in using your WebKey credentials to get a One Time Code
    * Enter the One Time Code in the CLI

      {{% alert type="info" %}}If you need to configure proxies for Cloud Foundry, use the Windows `set` command. For example, `set http_proxy=http://my.proxy.ip:1234`.{{% /alert %}}

2.  Select your org and space using the command:

    ```bash
    cf target –o {org_name} -s {space_name}
    ```

    {{% alert type="info" %}}If you cannot target your org or space, you probably need to be added to your org. See [Cloud Foundry How Tos](https://developer.mindsphere.io/paas/paas-cloudfoundry-howtos.html) in the MindSphere documentation.{{% /alert %}}

3.  Create a PostgreSQL instance using the command:

    ```bash
    cf create-service postgresql10 {plan} {service_instance} [-c {parameters_as_JSON}] [-t {tags}]
    ```

    For example: `cf create-service postgresql10 postgresql-xs myapp-db`  

    For more information see [Using the a9s PostgreSQL](https://developer.mindsphere.io/paas/a9s-postgresql/using.html) on the MindSphere developers site.

4.  Depending on your infrastructure and service broker usage, it may take several minutes to create the service instance. Check if your PostgreSQL service has been created successfully using the following command:  
    `cf services`  
    Your service should be listed, and the last operation should be ‘create succeeded’.

5.  Ensure you are in the same folder as the package you wish to deploy.

6. Create a `manifest.yml` file with at least the following content:

    ```yml
    applications:
    - name: {app_name}
      disk_quota: 512M
      memory: 512M
    services:
      - {service_instance}
    ```

    {{% alert type="info" %}}The `disk_quota` and `memory` must be at least **512M** to enable a Mendix app to run.{{% /alert %}}

    For more information on the configuration of manifest files, see [Configuring the manifest file](https://developer.mindsphere.io/howto/howto-cf-single-manifest.html#configuring-the-manifest-file) on the MindSphere developers site.

7.  Push your app to MindSphere using the command:

    ```bash
    cf push -p "{deployment_package_name}"
    ```

    For example: `cf push -p "myapp.mda"`

#### 5.1.3 Troubleshooting

If you have issues with deploying your app to Cloud Foundry, you can find additional information in [Running a Cloud Foundry-Hosted Application – for Java Developers](https://developer.mindsphere.io/howto/howto-cf-running-app.html). Note that this is not written from the point of view of a Mendix developer, so some information may not be relevant.

Ensure that you have configured your proxy settings if these are required.

### 5.2 Setting up MindSphere Launchpad{#launchpad}

#### 5.2.1 Creating a New Application

To create a new app in the MindSphere launchpad, do the following:

1.  Go to the **Developer Cockpit > Dashboard**.

2.  Click **Create new application**.

3.  Set the **Type** to *Standard*.

4.  Set the **Infrastructure** to *MindSphere Cloud Foundry*.

5. Fill in the **Display Name** of your app, as you want it shown in the Launchpad.

6.  Fill in the **Internal Name** of your app. This must be identical to the value of *CockpitApplicationName* which you set in the SSO module of your app.

7. Fill in a **Version** for your app.

8. Fill in a **Description** of your app, if required.

9. Click **Edit icon** to upload an **App Icon** for your app.

10. Fill in the **Component > Name**. This must be identical to the {app_name} you set in the *manifest.yml* file.

11.  Click the **+** next to the component to add **Endpoints**.

12.  Specify `/**` as the endpoint to allow you to access all endpoints relevant to your application, and click **Save**.

13. Fill in the **Cloud Foundry Direct URL**. This can be found using the cloud foundry command `cf app {app_name}`.

14.  Set the **Configurations > content-security-policy** *Value* to the following (hover your mouse over the text and you will be able to copy the contents to your clipboard):

      ```http
      default-src 'self' 'unsafe-inline' 'unsafe-eval' static.eu1.mindsphere.io sprintr.home.mendix.com; font-src 'self' static.eu1.mindsphere.io fonts.gstatic.com; style-src * 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' static.eu1.mindsphere.io sprintr.home.mendix.com; img-src * data:;
      ```

      {{% alert type="info" %}}These content security policy (CSP) settings are needed to ensure that the MindSphere OS Bar and the [Mendix Feedback Widget](https://appstore.home.mendix.com/link/app/199/) are loaded correctly. You may need to set additional CSP settings if you make additional calls to other domains (for example, if you use Google maps from maps.googleapi.com).{{% /alert %}}

      ![](attachments/deploying-to-mindsphere/image14.png)

15.  Click **Save** to save these details.

16.  Click **Register** to register your app with the MindSphere launchpad.

    	{{% alert type="info" %}}If the app has not been pushed yet, there will be no route set up for the app and you will get an error message. This will be resolved once you have pushed your app to Cloud Foundry.{{% /alert %}}
    
#### 5.2.2 Setting Application Scopes in Developer Cockpit{#scopes}

To set up the appropriate scopes in MindSphere, do the following:

1.  Go to **Developer Cockpit > Authorization Management > App Roles** from the MindSphere launchpad.
2.  Enter the **Scope Name**.
3.  Associate it with the MindSphere roles **USER** and/or **ADMIN**.
4.  Click **Save**.

    ![](attachments/deploying-to-mindsphere/image15.png)

{{% alert type="info" %}}
If you are using the starter app, you should create two scopes, *user* and *admin*.
{{% /alert %}}

For an explanation of the relationship between Mendix roles and MindSphere roles, see section [Roles & Scopes](/refguide/mindsphere/mindsphere-module-details#rolesscopes) in *MindSphere Module Details*.

![](attachments/deploying-to-mindsphere/image8.png)

{{% alert type="info" %}}
You will also need to use the **Add Core Role** option to add *Core Roles* to your app if it makes calls to MindSphere. The ones you need to add will depend on which features of MindSphere you are using.
{{% /alert %}}

#### 5.2.3 Assigning User Roles

Once you have created the scopes for your app, you will need to assign them to the users who you want to have access to the app.

1.  Go to **Settings > Roles** from the MindSphere launchpad.

    {{% image_container width="50%" %}}![](attachments/deploying-to-mindsphere/image16.png){{% /image_container %}}

2.  Choose the app role (scope) you want to assign from the list of **Roles**.
3.  Click **Edit user assignment**.
4.  Assign **Available users** to **Assigned users** using the assignment symbols (for example `>` to assign a user).
5.  Click **Close**.

    ![](attachments/deploying-to-mindsphere/image17.png)

{{% alert type="info" %}}
The user will have to log out and log in again for this assignment to take effect.
{{% /alert %}}

{{% alert type="success" %}}
Your app is now set up and users can run it from within the MindSphere Developer Cockpit.
{{% /alert %}}

## 6 Development Considerations

See [MindSphere Development Considerations](/refguide/mindsphere/mindsphere-development-considerations) for additional help on such things as:

* local testing
* multi-tenancy
* limitations
