---
title: "YML Issue"
category: "Deployment"
#menu_order: 45
description: "Explore issue around displaying YML code block"
#tags: ["MindSphere", "deploy", "cloud foundry", "launchpad", "scopes", "roles", "sso", "XSRF", "limitations", "Gateway"]
# DO NOT PUBLISH THIS DOCUMENT
draft: true
---

## 5 ORIGINAL ISSUE SECTION 5.1.2 Step 6 Deploying Your App to MindSphere

### 5.1 Pushing to Cloud Foundry

Before you continue, ensure you have fulfilled the prerequisites described in the section [Prerequisites](#prerequisites) and configured the MindSphere modules as described in the section [Configuring the Modules](#configure-modules), above.

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
      disk_quota: {disk_quota_size}
      memory: {memory_size}
    services:
      - {service_instance}
    ```

    {{% alert type="info" %}}`disk_quota_size` and `memory_size` must be at least **512M** to enable a Mendix app to run.
    
    See the *Cloud Foundry* [App Manifest Attribute Reference](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest-attributes.html) for more information on valid specifications for memory and disk quota sizes.({{% /alert %}}

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
