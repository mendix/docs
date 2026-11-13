---
title: "Siemens Insights Hub"
url: /developerportal/deploy/deploying-to-mindsphere/
weight: 42
description: "Describes how to deploy to Siemens Insights Hub by registering it with the Insights Hub Gateway and integrating it into the Insights Hub Launchpad."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #launchpad below is mapped from the Insights Hub themepack in the Marketplace, so it should not be removed or changed.
---

## Introduction

Insights Hub is the cloud-based, open IoT operating system from Siemens that lets you connect your machines and physical infrastructure to the digital world. It lets you harness big data from billions of intelligent devices, enabling you to uncover transformational insights across your entire business.

This documentation is meant for Mendix developers who want to deploy, register and run a Mendix app on Insights Hub.

{{% alert color="warning" %}}
There are some limitations to what you can do in your Mendix app if it is deployed to Insights Hub. See the [Limitations](/appstore/industry/mindsphere/mindsphere-development-considerations/#limitations) section of *Insights Hub Development Considerations* for more information.
{{% /alert %}}

{{% alert color="info" %}}
You can easily copy code examples shown within grey blocks into the clipboard. Hover the cursor over the code block and click the copy button which appears.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/copy-from-documentation.png" class="no-border" >}}

{{% /alert %}}

To help you with your first Insights Hub apps, there is also an example app which contains modules which call the Insights Hub APIs. See [How to Use the Siemens Insights Hub Monitor Example App](/appstore/industry/mindsphere/mindsphere-example-app/) for more information.

## Prerequisites{#prerequisites}

To deploy and register your app within Insights Hub you need the following prerequisites.

* An Insights Hub user account on a **Developer** tenant
* An Insights Hub developer role: either `mdsp:core:Developer` or `mdsp:core:DeveloperAdmin`.
* [Mendix Studio Pro](https://marketplace.mendix.com/)

## Including Required Insights Hub Modules

You must customize your app to allow it to be deployed, registered, and shown in the launchpad. This is done through Insights Hub customization modules. There are two ways to include the customization you need in your app.

### Option A: Using the Siemens Insights Hub Starter Application

The **Siemens Insights Hub Starter Application** in the Mendix Marketplace contains all the modules and styling which you need to create an app you want to deploy to Insights Hub.

{{% alert color="info" %}}
This is the recommended approach if you are building a new application, as it will provide all the necessary building blocks to get started.
{{% /alert %}}

Open Studio Pro and select the follow these steps:

1. Start your browser and open the [Mendix Marketplace](https://marketplace.mendix.com/).

2. Enter *Insights Hub* in the search box, and press <kbd>Enter</kbd>.
3. Select **Siemens Insights Hub Starter Application** in the search results.
4. Click **Start with Template** to create a new app using this app as the template.  
5. To start the new app, confirm where to store the app, the app name, and the app directory, then click **OK**.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/app-store-download-project.png" class="no-border" >}}

### Option B: Customizing an Existing App{#existingapp}

If you have an existing app which was not based on the Insights Hub app template, you must import the required customization. The three modules which must be imported are:

* **Siemens Insights Hub SSO** from the Mendix Marketplace here: [Siemens Insights Hub SSO](https://marketplace.mendix.com/link/component/108805/)

    This module enables users who are logged in to Insights Hub to use your app without having to sign in again. It also enables you to test your app locally. For more information, see the [Single Sign-On](/appstore/industry/mindsphere/mindsphere-module-details/#mssso) section of *Insights Hub Module Details*.

* **Siemens Insights Hub OS Bar Connector** from the Mendix Marketplace here: [Siemens Insights Hub OS Bar Connector](https://marketplace.mendix.com/link/component/108804/)

    This integrates the mandatory Insights Hub OS Bar with your app. For more information, see the [Siemens Insights Hub OS Bar](/appstore/industry/mindsphere/mindsphere-module-details/#msosbar) section of *Insights Hub Module Details*.

## Configuring the Modules{#configure-modules}

Now that you have your new app, or have imported the Insights Hub modules into an existing app, you need to configure the modules to allow your app to work with Insights Hub.

### Configuring Single Sign-On (SiemensInsightsHubSingleSignOn)

The following items in the SiemensInsightsHubSingleSignOn module need to be configured.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image2.png" alt="Folder structure of the SiemensInsightsHubSingleSignOn module" class="no-border" >}}

#### CockpitApplicationName

Enter the name of your app as registered in the Insights Hub Mendix Portal as the value of *CockpitApplicationName*.

These two values must be identical and must, therefore, fit the constraints listed in the [App Name](/appstore/industry/mindsphere/mindsphere-development-considerations/#appname) section of *Insights Hub Development Considerations*.

#### RegisterSingleSignOn

Add the *RegisterSingleSignOn* microflow as the **After startup** microflow or added as a sub-microflow of an existing *after startup* microflow.

{{% alert color="info" %}}
If you are using the Siemens Insights Hub Starter Application, this will already be set up as the *After startup* microflow.
{{% /alert %}}

If you are modifying an existing app, you can do this on the *Runtime* tab of the **App** > **Settings** dialog box accessed through the **App Explorer**.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image4.png" alt="App settings dialog" class="no-border" >}}

### Configuring the Insights Hub OS Bar (SiemensInsightsHubOSBarConnector)

Change the OS Bar to show information about the app you are running.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image10.png" alt="Example of the information in the OS Bar" class="no-border" >}}

This is configured as a JSON object held as the default value of the string constant **Config** in the *SiemensOSBarConfig* module. The imported module has a correctly formatted set of example values.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image11.png" alt="Dialog for setting the Config constant for the OS Bar" class="no-border" >}}

Change the JSON to contain appropriate values for the following information:

* displayName – the display name of your app
* appVersion – the version number of your app
* appCopyright – app owner’s name and year of publication
* links – links to additional information about the app

More information on the structure and content of this JSON object, together with sample JSON, can be found in [App Information](https://design.mindsphere.io/osbar/get-started.html#app-information), on the Insights Hub developer site.

## Deploying Your App{#deploying-your-app}

A Mendix based application for Insights Hub can be deployed to Mendix. Deploying to Mendix is quite easy and is the preferred option.

### Deploy with Mendix Studio Pro to Mendix Cloud

Just click the Publish Button in Mendix Studio Pro.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/runMendixApp.png" alt="Deploy to Mendix" class="no-border" >}}

Once your app is deployed you have to register the app in your Insights Hub tenant.

### Setting up Insights Hub Launchpad{#launchpad}

You have to register your application for it to work and appear on the Insights Hub Launchpad.

#### Configuring the Mendix App in the Developer Cockpit

##### Creating a New Application

To create a new app manually in the Insights Hub launchpad, do the following:

1. Go to the **Developer Cockpit > Dashboard**.
2. Click **Create new application**.
3. Set the **Type** to *Standard*.
4. Set the **Infrastructure** to *Cloud Foundry*.
5. Fill in the **Display Name** of your app, as you want it shown in the Launchpad.
6. Fill in the **Internal Name** of your app. This must be identical to the value of *CockpitApplicationName* which you set in the SSO module of your app.
7. Fill in a **Version** for your app.
8. Fill in a **Description** of your app, if required.
9. Click **Edit icon** to upload an **App Icon** for your app.
10. Fill in the **Component > Name**. This must be identical to the {app_name} you set in the *manifest.yml* file.
11. Click the **+** next to the component to add **Endpoints**.
12. Specify `/**` as the endpoint to allow you to access all endpoints relevant to your application, and click **Save**.
13. Fill in the **Cloud Foundry Direct URL**. This can be found using the Cloud Foundry command `cf app {app_name}`.
14. Set the **Configurations > content-security-policy** *Value* to the following (hover your mouse over the text and you will be able to copy the contents to your clipboard):

    If your app is running on Insights Hub on **AWS** use Region `eu1`:

    ```text
    default-src 'self' 'unsafe-inline' 'unsafe-eval' static.eu1.mindsphere.io feedback-static.mendix.com home.mendix.com;
    font-src 'self' static.eu1.mindsphere.io fonts.gstatic.com;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' static.eu1.mindsphere.io feedback-static.mendix.com home.mendix.com;
    style-src 'self' 'unsafe-inline' static.eu1.mindsphere.io feedback-static.mendix.com home.mendix.com fonts.googleapis.com;
    img-src * data:;
    connect-src 'self' 'unsafe-inline'  *;
    ```

    {{% alert color="info" %}}These content security policy (CSP) settings are needed to ensure that the Insights Hub OS Bar and the [Mendix Feedback](/appstore/modules/mendix-feedback/) widget are loaded correctly. You may need to set additional CSP settings if you make additional calls to other domains (for example, if you use Google maps from maps.googleapi.com).{{% /alert %}}

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image14.png" class="no-border" >}}

15. Click **Save** to save these details.
16. Click **Register** to register your app with the Insights Hub launchpad.

    {{% alert color="info" %}}If the app has not been pushed yet, there will be no route set up for the app and you will get an error message. This will be resolved once you have pushed your app to Cloud Foundry.{{% /alert %}}

##### Setting Application Scopes in Developer Cockpit{#scopes}

To set up the appropriate scopes in Insights Hub, do the following:

1. Go to **Developer Cockpit > Authorization Management > App Roles** from the Insights Hub launchpad.
2. Enter the **Scope Name**.
3. Associate it with the Insights Hub default roles **user** and/or **admin**. Or associate it with one of your self created Insights Hub roles. Insights Hub supports up to five application roles.
4. Click **Save**.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image15.png" class="no-border" >}}

{{% alert color="info" %}}
If you are using the app template, you should create two scopes, *user* and *admin*.
{{% /alert %}}

For an explanation of the relationship between Mendix roles and Insights Hub roles, see section [Roles and Scopes](/appstore/industry/mindsphere/mindsphere-module-details/#rolesscopes) in *Insights Hub Module Details*.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image8.png" class="no-border" >}}

{{% alert color="info" %}}
You will also need to use the **Add Core Role** option to add *Core Roles* to your app if it makes calls to Insights Hub. The ones you need to add will depend on which features of Insights Hub you are using.
{{% /alert %}}

##### Assigning User Roles

Once you have created the scopes for your app, you will need to assign them to the users who you want to have access to the app.

1. Go to **Settings > Roles** from the Insights Hub launchpad.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image16.png"   width="50%"  class="no-border" >}}

2. Choose the app role (scope) you want to assign from the list of **Roles**.
3. Click **Edit assignment**.
4. Select the user you like to assign the role
5. Click **Next** and **Save**.

{{% alert color="info" %}}
The user will have to sign out and sign in again for this assignment to take effect.
{{% /alert %}}

{{% alert color="success" %}}
Your app is now set up and users can run it from within the Insights Hub Developer Cockpit.
{{% /alert %}}

## Development Considerations

See [Insights Hub Development Considerations](/appstore/industry/mindsphere/mindsphere-development-considerations/) for additional help on such things as:

* local testing
* multi-tenancy
* limitations
