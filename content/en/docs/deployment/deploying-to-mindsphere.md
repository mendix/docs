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
There are some limitations to what you can do in your Mendix app if it is deployed to Insights Hub. See the [Limitations](/partners/siemens/mindsphere-development-considerations/#limitations) section of *Insights Hub Development Considerations* for more information.
{{% /alert %}}

{{% alert color="info" %}}
You can easily copy code examples shown within grey blocks into the clipboard. Hover the cursor over the code block and click the copy button which appears.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/copy-from-documentation.png" class="no-border" >}}

{{% /alert %}}

To help you with your first Insights Hub apps, there is also an example app which contains modules which call the Insights Hub APIs. See [How to Use the Siemens Insights Hub Monitor Example App](/partners/siemens/mindsphere-example-app/) for more information.

## Prerequisites{#prerequisites}

To deploy and register your app within Insights Hub you need the following prerequisites.

* An Insights Hub user account on a **Developer** or a **Start for Free** tenant
* An Insights Hub developer role: either `mdsp:core:Developer` or `mdsp:core:DeveloperAdmin` — these are already granted on Start for Free tenants.
* [Mendix Studio Pro](https://marketplace.mendix.com/)

The following are also required if you want to deploy and run the Mendix app on Insights Hub Cloud Foundry:

* [Cloud Foundry Command Line Interface (CF CLI)](https://github.com/cloudfoundry/cli)
* A Cloud Foundry role which allows you to push apps, such as `SpaceDeveloper`

## Including Required Insights Hub Modules

You must customize your app to allow it to be deployed, registered, and shown in the launchpad. This is done through Insights Hub customization modules. There are two ways to include the customization you need in your app.

### Option A: Using the Insights Hub App Template

The **Siemens Insights Hub Starter Application** in the Mendix Marketplace contains all the modules and styling which you need to create an app you want to deploy to Insights Hub.

{{% alert color="info" %}}
This is the recommended approach if you are building a new application, as it will provide all the necessary building blocks to get started.
{{% /alert %}}

Open Studio Pro (version 7.22.2 or above) and follow these steps:

1. Start your browser and open the [Mendix Marketplace](https://marketplace.mendix.com/).

2. Enter *Insights Hub* in the search box, and press <kbd>Enter</kbd>.
3. Select **Siemens Insights Hub Starter Application** in the search results.
4. Click **Download** to create a new app using this app as the template.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/app-store-download.png" class="no-border" >}}

5. Open your Mendix Studio Pro and select the Import App Package on the **Open App** dialog.
    {{< figure src="/attachments/deployment/deploying-to-mindsphere/import-app-package.png" class="no-border" >}}

6. Select you just downloaded starter template package
7. To start the new app, confirm where to store the app, the app name, and the app directory, then click **OK**.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/app-store-download-project.png" class="no-border" >}}

### Option B: Customizing an Existing App{#existingapp}

If you have an existing app which was not based on the Insights Hub app template, you must import the required customization. The three modules which must be imported are:

* **Siemens Insights Hub SSO** from the Mendix Marketplace here: [Siemens Insights Hub SSO](https://marketplace.mendix.com/link/component/108805/)

    This module enables users who are logged in to Insights Hub to use your app without having to sign in again. It also enables you to test your app locally. For more information, see the [Single Sign-On](/partners/siemens/mindsphere-module-details/#mssso) section of *Insights Hub Module Details*.

* **Siemens Insights Hub OS Bar Connector** from the Mendix Marketplace here: [Siemens Insights Hub OS Bar Connector](https://marketplace.mendix.com/link/component/108804/)

    This integrates the mandatory Insights Hub OS Bar with your app. For more information, see the [Siemens Insights Hub OS Bar](/partners/siemens/mindsphere-module-details/#msosbar) section of *Insights Hub Module Details*.

* **Siemens Insights Hub Web Content** from the Mendix Marketplace here: [Siemens Insights Hub Web Content](https://marketplace.mendix.com/link/component/108803/)

    This applies Insights Hub styling to your app and includes some additional custom files which are required for the correct operation of your app. For more information, see the [Siemens Insights Hub Web Content](/partners/siemens/mindsphere-module-details/#msthemepack) section of *Insights Hub Module Details*.

## Configuring the Modules{#configure-modules}

Now that you have your new app, or have imported the Insights Hub modules into an existing app, you need to configure the modules to allow your app to work with Insights Hub.

### Configuring Single Sign-On (SiemensInsightsHubSingleSignOn)

The following items in the SiemensInsightsHubSingleSignOn module need to be configured.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image2.png" alt="Folder structure of the SiemensInsightsHubSingleSignOn module" class="no-border" >}}

#### CockpitApplicationName

Enter the name of your app as registered in the Insights Hub Mendix Portal as the value of *CockpitApplicationName*.

These two values must be identical and must, therefore, fit the constraints listed in the [App Name](/partners/siemens/mindsphere-development-considerations/#appname) section of *Insights Hub Development Considerations*.

#### GatewayURL

This is the URL of the Insights Hub gateway and is of the following format:

```http
https://gateway.{Region}.mindsphere.io
```

This needs to be changed depending on the `{Region}` your app is running. The default value is for Insights Hub running on **AWS**:

```http
https://gateway.eu1.mindsphere.io
```

#### PublicKeyURL

The value of this constant is shown below:

```http
https://core.piam.{Region}.eu1.mindsphere.io/token_keys
```

This needs to be changed depending on the `{Region}` your app is running. The default value is for Insights Hub running on **AWS**:

```http
https://core.piam.eu1.mindsphere.io/token_keys
```

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

A Mendix based application for Insights Hub can be deployed to Mendix or to Insights Hub. Deploying to Mendix is quite easy and is the preferred option as you than also can use the **Auto Registration** process.

{{% alert color="info" %}}
**Auto Registration** process is only available on region Europe 1.
{{% /alert %}}

### Option A: Deploy with Mendix Studio Pro to Mendix Cloud

Just click the Publish Button in Mendix Studio Pro.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/runMendixApp.png" alt="Deploy to Mendix" class="no-border" >}}

Once your app is deployed you can automatically register the app in your Insights Hub tenant.

### Option B: Creating a Mendix Deployment Package and deploy it to Insights Hub Cloud Foundry

{{% alert color="info" %}}
There is a limit of 1.5 GB on the size of the Mendix deployment package (MDA file) which can be deployed to Insights Hub.
{{% /alert %}}

#### Pushing to Cloud Foundry

Before you continue, ensure you have fulfilled the prerequisites described in the section [Prerequisites](#prerequisites) and configured the Insights Hub modules as described in the section [Configuring the Modules](#configure-modules), above.

##### Creating a Mendix Deployment Package

To create a Mendix deployment package from your app, do the following:

1. Open your app in Studio Pro.
2. Select **App** > **Create Deployment Package**.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image13.png" class="no-border" >}}

3. Select the correct **Development line** and **Revision**.
4. Set the **New version** number and add a **Description** if required.
5. Change the path and **File name** if necessary.

Your deployment package will be created, and its location displayed in an information message.

{{% alert color="info" %}}
By default, the deployment package will be created in the *releases* folder of your app.
{{% /alert %}}

##### Deploying the Application to Cloud Foundry using CF CLI

To deploy your deployment package, do the following:

1. Sign in to Insights Hub CF CLI using a one-time code:

    * Enter `cf login -a https://api.cf.{Region}.{mindsphere-domain} --sso`
    * Open the URL printed by the CLI and sign in using your WebKey credentials to get a One Time Code
    * Enter the One Time Code in the CLI

        {{% alert color="info" %}}If you need to configure proxies for Cloud Foundry, use the Windows `set` command. For example, `set http_proxy=http://my.proxy.ip:1234`.{{% /alert %}}

2. Select your org and space using the command:

    ```bash
    cf target –o {org_name} -s {space_name}
    ```

    {{% alert color="info" %}}If you cannot target your org or space, you probably need to be added to your org. See [Cloud Foundry How Tos](https://developer.mindsphere.io/paas/howtos/index.html) in the Insights Hub documentation.{{% /alert %}}

3. Create a PostgreSQL instance using the command:

    ```bash
    cf create-service postgresql10 {plan} {service_instance} [-c {parameters_as_JSON}] [-t {tags}]
    ```

    For example: `cf create-service postgresql10 postgresql-xs myapp-db`

    For more information see [Using the a9s PostgreSQL](https://developer.mindsphere.io/paas/a9s-postgresql/using.html) on the Insights Hub developers site.

    {{% alert color="warning" %}}Each Mendix app needs its own database. Do not bind more than one app to a database as both apps will not work properly. Create a new database instance instead.{{% /alert %}}

4. Depending on your infrastructure and service broker usage, it may take several minutes to create the service instance. Check if your PostgreSQL service has been created successfully using the following command:

    `cf services`
    Your service should be listed, and the last operation should be ‘create succeeded’.

5. Ensure you are in the same folder as the package you wish to deploy.
6. Create a `manifest.yml` file with at least the following content:

    ```yaml
        applications:
        - name: {app_name}
          disk_quota: {disk_quota_size}
          memory: {memory_size}
        services:
          - {service_instance}
    ```

    {{% alert color="info" %}}`disk_quota_size` and `memory_size` must be at least **512M** to enable a Mendix app to run.<br />See the *Cloud Foundry* [App Manifest Attribute Reference](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest-attributes.html) for more information on valid specifications for memory and disk quota sizes.{{% /alert %}}

    {{% alert color="warning" %}}Each Mendix app needs its own database. Do not bind more than one app to a database as both apps will not work properly. Create a new database instance instead.{{% /alert %}}

    For more information on the configuration of manifest files, see [Configuring the manifest file](https://developer.mindsphere.io/howto/howto-cf-single-manifest.html#configuring-the-manifest-file) on the Insights Hub developers site.

7. Push your app to Insights Hub using the command:

    ```bash
    cf push -p "{deployment_package_name}"
    ```

    For example: `cf push -p "myapp.mda"`

##### Cloud Foundry Stack

You should always use the latest available Cloud Foundry stack. The latest stack in Insights Hub is `cflinuxfs4`. Apps pushed to Insights Hub will use this stack.

You can specify that your app uses a specific stack using the following command line option when you push your app:

```bash
cf push -p "{deployment_package_name}" -s {stack_name}
```

For example: `cf push -p "myapp.mda" -s cflinuxfs4`

For more information about Cloud Foundry stacks on Insights Hub, see [How Can I Find the Stack my App is using?](https://developer.mindsphere.io/paas/howtos/howtos-stacks.html#find-out-which-stack-an-app-uses) in *Cloud Foundry How Tos* on the *Insights Hub Developer* site.

#### Troubleshooting

If you have issues with deploying your app to Cloud Foundry, you can find additional information in [Running a Cloud Foundry-Hosted Application – for Java Developers](https://developer.mindsphere.io/howto/howto-cf-running-app.html). Note that this is not written from the point of view of a Mendix developer, so some information may not be relevant.

Ensure that you have configured your proxy settings if these are required.

### Setting up Insights Hub Launchpad{#launchpad}

You have to register your application for it to work and appear on the Insights Hub Launchpad. If you have deployed your application to Mendix you can use either of the following two options (where Option A is preferred). Deployed to Insights Hub, you have to register manually via the Developer Cockpit (Option B).

#### Option A: Using the Auto Registration Process

{{% alert color="info" %}}
This method is recommended if your app is deployed to Mendix Cloud.

However, the Auto Registration process is only available on region Europe 1.
{{% /alert %}}

To start the **Auto Registration** process click the **View** Button in Mendix Studio Pro once your app is deployed to Mendix Cloud. Your default browser will open and your app will start the process.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/AutoRegistrationExplanation.png" alt="AutoRegistrationExplanation" class="no-border" >}}

Click **Start Auto Registration**. The process now tries to figure out on which tenant your app should be registered. Therefore you have to login:

{{< figure src="/attachments/deployment/deploying-to-mindsphere/WebKeyLogin.png" alt="Login to Siemens Digital Industry Software" class="no-border" >}}

{{% alert color="info" %}}
If you have more then one tenant on Insights Hub you will get a list of tenants. Choose the tenant where you want to register your app.

If you have only one tenant on Insights Hub, the process will automatically select this tenant for you.
{{% /alert %}}

Give a name, internal name, and, optionally, a description in order to register your app.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/AutoRegistrationNameAndDescription.png" alt="AutoRegistrationNameAndDescription" class="no-border" >}}

If you are on a **Developer** tenant you also have to select at least one application role which will be assigned to your account automatically.

On a **Start for Free** tenant the **admin** role will be assigned automatically to your account.

Click **Register** to start the registration process on your tenant. After a few seconds, a summary page is shown and you are able to navigate directly to your app.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/AutoRegistrationSummary.png" alt="AutoRegistrationSummary" class="no-border" >}}

{{% alert color="info" %}}
The **Auto Registration** process creates application roles and scopes for your app automatically.

If you are on a **Start for Free** tenant, additional Insights Hub API roles are assigned and your user is granted **admin** access to your app.

If you are on a **Developer** tenant, no additional Insights Hub API roles are assigned. The granted access to your app is shown in the registration summary page.
{{% /alert %}}

Please note, for further configuration of your registration, for example, CSPs or additional roles, please use the Developer Cockpit.

{{% alert color="info" %}}
You can have multiple versions of your app within the Developer Cockpit, for example, versions with different configurations or roles and scopes. 

The deployment registered via the **Auto Registration** process is *always mapped to the version created during the process*. If you want to create additional versions of your app, you can do this by manually creating a new version within the Developer Cockpit.
{{% /alert %}}

#### Option B: Configuring the Mendix App in the Developer Cockpit

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

For an explanation of the relationship between Mendix roles and Insights Hub roles, see section [Roles and Scopes](/partners/siemens/mindsphere-module-details/#rolesscopes) in *Insights Hub Module Details*.

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

See [Insights Hub Development Considerations](/partners/siemens/mindsphere-development-considerations/) for additional help on such things as:

* local testing
* multi-tenancy
* limitations
