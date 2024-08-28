---
title: "PDF Document Generation"
url: /appstore/modules/document-generation/
description: "Describes the configuration and usage of the PDF Document Generation module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [PDF Document Generation](https://marketplace.mendix.com/link/component/211553) module allows you to generate pixel-perfect PDF documents based on regular pages in your app. 

### Features

* Generate pixel-perfect PDF documents based on regular pages in your app.
* Make use of the full capabilities of the page editor, including the use of snippets, text templates, conditional visibility based on expressions, dynamic classes, etc.
* Support adding any existing web widget to your document, or creating your own widgets and using them in your documents.
* Use “Instant Update” during local development, which allows you to see changes to your documents immediately without having to do a full restart of your app.
* Generate documents using a synchronous or asynchronous approach. In the asynchronous action, the result object is available instantly, the content is added at a later stage.

### Limitations {#limitations}

* Currently, PDF is the only supported document export format.
* For deployment, currently we support [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), [Mendix Cloud Dedicated](/developerportal/deploy/mendix-cloud-deploy/), [Mendix for Private Cloud Connected](/developerportal/deploy/private-cloud/), and [On-Premises](/developerportal/deploy/on-premises-design/). Other deployment scenarios will be supported at a later stage.

    {{% alert color="info" %}}For all deployment types except for on-premises, we only support apps that allow bi-directional communication with the PDF Service in the Mendix Cloud.{{% /alert %}}

* The maximum file size is 25 MB per document. If your document exceeds this limit, the action will result in an exception. We recommend compressing high-resolution images to reduce their file size.
* When you deploy your app, it needs to be accessible to our cloud service. This requires the restriction type in the Cloud Portal to be set to *Allow all access* for the top-level path (`/`) and the DocGen request handler (`/docgen/`). If your app is configured to [restrict access for incoming requests](/developerportal/deploy/access-restrictions/), for example using IP whitelisting and/or client certificates, our cloud service will not be able to reach your app and the module will not work properly.
* We use a fixed 30 second timeout for the page to finish loading and rendering. A timeout exception is thrown if the page content did not finish loading within 30 seconds.
* Widgets or add-ons for your `index.html` file that perform long polling network requests are not supported. The document generation service waits until there are no more pending network requests.
* Some widgets, such as the [Charts](/appstore/widgets/charts/) widget, might be rendered inconsistently in the generated PDF due to factors like animation.
* Complex documents (for example, large tables) may run into memory limitations, separate from the file size limitation. Try to reduce the number of widgets inside repeatable widgets as much as possible.
* We currently do not enforce strict rate limits. However, take into account the following guidelines:
    * Only set the `Wait for result` parameter to *true* for direct user actions. Do not set it to *true* for batch processing. Under heavy load, requests that wait for the result may fail due to strict timeout limitations.
    * Do not exceed 250 documents per day.
    * Do not exceed 5 documents per minute for actions that have the `Wait for result` parameter set to *true*. If your app requires more requests, consider setting the `Wait for result` parameter to *false*.
    * Contact support if these guidelines do not fit your specific use case.
* The `Generate PDF from page` microflow action does not support multiple page parameters.
* Objects that are created in microflows that contain the `Generate PDF from page` action are not available to use in your PDF document. This is also applicable for changes made to existing objects. The reason is that those changes are not persisted to the database until the whole microflow has finished. The document generation service will access your document in its own context, and therefore have no access to the non-persisted changes.
* Setting the microflow property **Apply entity access** to *Yes* does not have any effect on the `Generate PDF from page` action. Regardless of the **Apply entity access** setting, the action does not require *Create* or *Write* access rights for the `FileDocument` object that gets created.
* The `System.Owner` association is currently not set to the user which has run the microflow. Instead, the user that is configured for the `Generate as user` property of the `Generate PDF from page` action is used to set the association.
* For local development, we use the Chrome or Chromium executable that is available on the development machine. Even though we have not observed these yet, there might be minor differences in PDF output locally vs. when using the cloud service.
* The access (and refresh) tokens used to secure requests to the cloud service are stored unencrypted in the app database. No user roles have read access to these tokens and all communication with the cloud service is encrypted by requiring HTTPS. However, do consider this when sharing a backup of the database with other developers. We will introduce encryption at a later stage.
* If you have the [Application Performance Monitor (APM)](/appstore/partner-solutions/apd/) or [Application Performance Diagnostics (APD)](/appstore/partner-solutions/apd/) add-on enabled in your app, or set the log level of the **Services** log node to *Trace*, the PDF Document Generation module will not be able to generate documents when used in Mendix Cloud. 

    {{% alert color="info" %}}This is only applicable for apps built in Mendix 9.24.5 and below and Mendix 10.0.0.{{% /alert %}}

### Dependencies

* [Combo Box](https://marketplace.mendix.com/link/component/219304) widget

## Installation {#installation}

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Documentation Generation module into your app.

## Configuration {#configuration}

1. In the **App Explorer**, open the **App** section, double-click **Settings**, then go to the **Runtime** tab, and configure the **ASu_DocumentGeneration_Initialize** microflow for the **After startup** property. If there is already an after startup microflow set, add the **ASu_DocumentGeneration_Initialize** microflow as an action in the existing microflow.
2. In the **App Explorer**, double-click **Security** in the **App** section, and then set the `Security level` to *Prototype/demo* or *Production*.
3. In the **App Explorer**, double-click **Security** in the **App** section again, then go to the **User roles** tab and perform the following steps:
    1. Add the module role **User** from the **DocumentGeneration** module to all app user roles that should be able to generate a document.
    2. Add the module role **Administrator** from the **DocumentGeneration** module to all app user roles that should be able to [register](#register-app) the app environments on Mendix Cloud.
4. To clean up old document requests, enable the scheduled event **SE_DocumentRequest_Cleanup** in the  **_UseMe** folder of the **DocumentGeneration** module. This will automatically remove expired **DocumentRequest** objects after a configured offset in days. The offset is configured using the constant **DocumentGeneration.RequestCleanupOffsetInDays** (the default value is 7 days). The scheduled event runs daily at 03:00 UTC.
5. To test the module locally, perform the procedure as described in the [Running locally from Studio Pro](#run-locally) section. 
6. When deploying your app, consider that we currently support two types of deployments:

    1. [Running on Mendix Cloud](#run-on-mendix-cloud) using the PDF service in the Mendix Public Platform. This option is available for apps that are deployed to the following environments:
        * [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
        * [Mendix Cloud Dedicated](/developerportal/deploy/mendix-cloud-deploy/)
        * [Mendix for Private Cloud Connected](/developerportal/deploy/private-cloud/)

    2. [Running On-Premises](#run-on-premises) using a local version of the PDF service. This option is available for apps that are deployed to the following environments:
        * [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
        * [Linux](/developerportal/deploy/unix-like/)

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

1. Enable the DocGen request handler.

   {{% alert color="info" %}}This step is only for licensed apps on the Mendix Cloud or Mendix Cloud Dedicated. If your app is deployed on [Mendix for Private Cloud Connected](/developerportal/deploy/private-cloud/), skip this step and make sure that the */docgen/* path is accessible.{{% /alert %}}

2. Register your app environments.

The steps for each procedure are described in the sections below. 

#### Enabling the DocGen Request Handler for Licensed Apps {#enable-docgen}

{{% alert color="info" %}}Skip this step if your app is [deployed as a Free app](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/#deploy-free-app) to Mendix Cloud. You can [register your app environment](#register-app) directly.{{% /alert %}}

1. Make sure that you have configured the **DocumentGeneration** module as described in the [Configuration](#configuration) section.

2. Make sure that you have the application [deployed to the desired Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).

3. To allow the module to send and receive document generation requests in your Mendix Cloud environments, enable the DocGen request handler as follows:

    1. Go to the **Environments** page for the app as follows:

       * Go to the [Nodes](https://cloud.home.mendix.com/) page, then in the **My Nodes** list, find the desired app, and then click **Environments**.
       * Alternatively, go to [Apps](https://sprintr.home.mendix.com), then in the **My Apps** list, find the desired app, and then click **Environments**.

        The app’s environments page opens. The **Deploy** tab shows a list of available environments for your app.
    
    2. On the **Deploy** tab, click **Details** for the respective environment.
    
    3. In the specific **Environment Details** page, select the **Network** tab.
    
    4. Scroll down to **Path Based Access Restrictions** and click **Add**. The **Edit Path Based Access Restriction** dialog box opens.
    
    5. Fill in the fields as follows:
        * In the **Path** field, enter */docgen/*.
        * From the **New Restriction Type** drop-down list, select *Allow all access*.
    
    6. Click **Save**. The **/docgen/** path is added to the list.
    
    7. Restart your application for the new request handler to take effect.
    
    8. Now you can [register your app environments](#register-app).

#### Registering Your App Environments {#register-app}

1. Add the snippet **Snip_AppRegistration** to a page in your app that is accessible to users with the **Administrator** module role set in the **DocumentGeneration** module. The snippet can be found in the  **_UseMe** > **Admin** folder of the **DocumentGeneration** module.
2. Enable the scheduled event **SE_AccessToken_Refresh** to automatically refresh the access token that is used to secure access to the Document Generation cloud service. The scheduled event can be found in the  **_UseMe** > **Scheduled events** folder of the **DocumentGeneration** module.

    * In version 1.6.0 and above, for apps deployed on Mendix Free Cloud, a **Renew app registration** button will be visible in the **Snip_AppRegistration** snippet if your registration is going to expire within 24 hours or has already expired. You can use this button to manually refresh your token.

3. Make sure that your changes are [deployed to your Mendix Cloud environment](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).
4. Sign in to the app environment you want to register.
5. Navigate to the page that contains the **Snip_AppRegistration** snippet.
6. Follow the steps on the page to register your app environment.

{{% alert color="info" %}}Each of your app environments needs to be registered separately. A successful app registration is limited to the app URL that was provided during the registration. Note that a change in the app URL, or restoring a database backup from one environment to another, will require you to register the affected app environments again.{{% /alert %}}

### Running On-Premises {#run-on-premises}

To configure the module to generate documents on your on-premises environments, you need to perform the following steps:

1. Make sure that you have the prerequisite software installed.
2. Configure the module to use the local service.
3. Enable the DocGen request handler.

#### Installing the Prerequisite Software {#install-prerequisites}

You should pre-install and actively maintain the following software. Mendix does not provide support for the installation, configuration, and maintenance of these packages.

##### Chromium

You should have installed a stable release of the Chromium browser. The currently supported stable release is 112.0.5615.0 ([Windows](https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1109252/). [Linux](https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Linux_x64/1109252/)).

{{% alert color="info" %}}Even though we advise using Chromium, you can also use Google Chrome instead. The configuration remains the same.{{% /alert %}}

##### Node.js

You should have installed a stable release of [Node.js](https://nodejs.org/).  Mendix recommends installing the same version that is shipped with the Studio Pro version that is used to build the project. You can find this version by locating and executing the `node` executable within the `modeler/tools/node` folder of your Studio Pro installation.

{{% alert color="info" %}}Make sure that the Mendix Runtime has the applicable permissions to run the *node* executable.{{% /alert %}}

#### Configuring the Module to use the Local Service {#configure-local-service}

1. Set the **OverrideServiceType** constant to *Local* in the **_UseMe** > **Configuration** folder. This enforces the use of the local service instead of the cloud service.

2. Configure the path to the *chrome* executable in the **CustomChromePath** constant in the **_UseMe** > **Configuration** folder.

3. Configure the path to the *node* executable in the **CustomNodePath** constant in the **_UseMe** > **Configuration** folder. 

#### Enabling the DocGen Request Handler {#setup-inbound-rules}

In case you deploy on [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/), you need to add the following rules when configuring the [reverse proxy inbound rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules):

Rule | Name | Pattern | Rewrite URL
---- | ---- | ------- | -----------
1 | p | `^(p/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
2 | docgen | `^(docgen/)(.*)` | `http://localhost:8080/{R:1}{R:2}`

{{% alert color="info" %}}Rule 1 is based on the default URL prefix (`p`) for page/microflow URLs. If you configured a different prefix in the runtime settings of your app, adjust the rule accordingly.{{% /alert %}}

## Usage

### Generating Documents for the Current User

1. Add an entity in your domain model for storing the generated documents. Use **System.FileDocument** as its generalization. When app security was set to *Production*, you need to assign *Read* access rights to the user roles which should be able to download the document.

2. Create a page that you want to export as a document. In the properties of the page, set the design property **Enable PDF export** to *Yes*. As the layout of the page, you can use your own layout or the **DocumentGeneration_Default** layout from the **_UseMe** > **Layouts** folder. If you want, you can duplicate the **ExampleDocument** in the **Examples** folder to get started. Make sure to move and include the new page in your own module.

    {{% alert color="info" %}}Setting the **Enable PDF export** design property to *Yes* is required. Otherwise, the PDF document generation action will result in a timeout.{{% /alert %}}

    {{% alert color="info" %}}Using the **DocumentGeneration_Default** layout is not required. You can use any layout of layout type **Responsive**, or create your own layout, as long as the layout does not include a scroll container. Layouts that do include a scroll container, such as **Atlas_Default**, will not work properly. {{% /alert %}}

3. Create a microflow that contains a **Show page** activity that opens the page you created in the previous step.

    {{% alert color="info" %}}If you want, you can copy **DOC_ExampleDocument_Print** microflow from the **Examples** folder to get started.{{% /alert %}}

4. Create a microflow with the **Generate PDF from page** action to render this page as a PDF document. Configure the **Generate PDF from page** action as follows:
    1. Select the microflow you created in the previous step for the **Page microflow** property.

    2. Select the context object that you want to pass to the page as an input parameter. If the page does not require an input object, select *empty*.

       {{% alert color="info" %}}To pass the context object to the page, you should configure this object as the input parameter in the microflow created in the previous step.{{% /alert %}}

    3. Select the entity that you created in step 1 as the `Result entity`.

    4. Fill in the **File name** property. The Java action will append **.pdf** to the generated documents.

    5. Use **$currentUser** for the **Generate as user** property. This will generate the document in the context and using the access rights of the user which runs the microflow. To generate the document in a system context, see the section [Generating Documents as a System Task](#system-task) below.

    6. Set the value for the **Wait for result** property. If you set it to *false*, the result object will be available instantly, while the content will be added at a later stage. Set the **Wait for result** property to *true* only for direct user actions. Do not set the value to *true* for batch processing.

        {{% alert color="info" %}}Whenever there are multiple document requests for the same app environment, the document generation service will prioritize requests that have the **Wait for result** property set to *true* above requests that have the property set to *false*.{{% /alert %}}

5. Verify that the user which you configured in the **Generate document as** property has access to the page microflow created in step 3, as well as access to all relevant data used in the page to be exported.

{{% alert color="info" %}}
To see the generated document in the browser or download it, you can use the **Download file** microflow action. This will only work if you set the **Wait for result** property of the **Generate PDF from page** action to *true*.
{{% /alert %}}

### Generating Documents as a System Task {#system-task}

For scenarios where you want to generate documents as a system task (for example in a scheduled event), the recommended approach is to set up one or more service users for document generation.

1. Add a specific app role for service users to your app, for example **DocGenServiceUser** or **ReadOnly**. 
2. Assign the **User** module role from the **DocumentGeneration** module to the new app role.
3. Assign or add the required module roles to allow read access to the relevant data in your app’s modules. 
   
    As a good practice, let Studio Pro generate separate module roles and set strict entity access that only allows read access to the applicable data. In this case, the service user needs to have the **DocumentGeneration.User** module role, while the user who runs the microflow to generate a document does not.

   {{% alert color="info" %}}Do not use regular user accounts for the **Generate as user** parameter, since this could have side effects, for example, changes in the last login date, or failures when multiple sessions are disabled and the applicable user logs in at the same time.{{% /alert %}}

4. Run the app and create a new local user as the service user. Give the service user the app role that you created above and use a strong password. The service user will be used to generate documents.

   {{% alert color="info" %}}
   When starting with a blank app, you can use the **Administration.Account_Overview** page from the [Administration module](/appstore/modules/administration/) to manage and create new users.

   You could also add a **Find or create** microflow to your after startup logic that performs this step automatically.
   {{% /alert %}}

5. Create a microflow to retrieve and return the configured service user object.
6. In the microflow where you call the **Generate PDF from page** action, add a microflow call to the microflow you created in the previous step, and use the return value (the service user object) as input for the **Generate as user** parameter of the action.

{{% alert color="info" %}}
We recommend that you log in manually as the service user at least once, to verify if the service user has the required module roles to log in. Depending on your app’s implementation, it might for example be required to assign the `Administration.Account` module role.
{{% /alert %}}

### Language and Date/Time Handling

#### Language

For the language of the document, the document generation service uses the language of the user that is passed in the `Generate as user` property.

{{% alert color="info" %}}
If no language is configured for the user that is passed in the `Generate as user` property, the default language as set in the [App Settings](/refguide/app-settings/) in Studio Pro is used.
{{% /alert %}}

#### Date/Time Handling

For the localization of dates and times, the document generation service uses the time zone of the user that is passed in the `Generate as user` property.

{{% alert color="info" %}}
If no time zone is configured for the user that is passed in the `Generate as user` property, and the default time zone in the [App Settings](/refguide/app-settings/) in Studio Pro is set to *(none)*, all dates and times will be displayed using UTC.
{{% /alert %}}

### Styling Documents

#### Page settings

The following page-related design properties are available in the **Styling** tab of the properties panel.

| Design property | Description |
|-----------------|-------------|
| **Page orientation** | This design property enables you to set the page orientation for your documents. |
| **Page size** | This design property enables you to set the page size for your documents. |
| **Show page numbers** | This design property enables you to show page numbers in your documents. <br>{{% alert color="info" %}}At the moment, we only support basic page numbers. We will extend and add support for custom headers and footers at a later stage{{% /alert %}} |

#### Page breaks

You can use the **Page break** widget that is included in this module to structure your documents. This widget enables you to force a page break at a specific position in your document. In addition, you can use the **Add page break** design property that is available for **Container** widgets.

The following **Container** widget related design properties are available in the **Styling** tab of the properties panel.

| Design property | Description |
|-----------------|-------------|
| **Add page break** | This design property enables you to force a page break before or after the specific container widget. |
| **Avoid break inside** | This design property allows you to prevent page breaks within a specific container. This can be useful to keep widgets grouped together on the same page. |

#### Applying Custom Fonts {#applying-custom-fonts}

For extended font support, Mendix recommends using custom fonts. To apply a custom font, follow the steps below:

The procedure uses the `Noto Sans SC` font as an example. You can visit [Google fonts](https://fonts.google.com) for more font options or use a font of your choice.

1. Download the font [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC).
2. Copy the font file *NotoSansSC-Regular.ttf* from the *static* folder of the downloaded font package into the *theme\web\fonts* folder of the app.
3. In Studio Pro, go to **Styling** > **Web** > **main.scss** in **App Explorer**, and add the lines below to the *main.scss* file in the built-in styling editor:

    ```css
    @font-face {
        font-family: 'Noto Sans SC';
        src: url(fonts/NotoSansSC-Regular.ttf);
    }

    .font-noto-sans-sc {
        font-family: 'Noto Sans SC', sans-serif;
    }
    ```

4. Add the class `font-noto-sans-sc` to all applicable text and widgets.

#### Advanced Styling

For advanced styling, you can use the styling editor in Studio Pro to style your documents. The module stylesheet includes several theme variables, such as *$document-background-color*, to customize your documents.

{{% alert color="info" %}}
We recommend you do not use the viewport width (`vw`) and viewport height (`vh`) units when styling your document. These units are related to the browser viewport, not to the page size of your document. Use absolute units (such as `px`, `mm`, etc.) or other relative units (such as `%`, `em`, or `rem`) instead.
{{% /alert %}}

## Architecture

### Overview

The Document Generation module uses the PDF document generation service running in the Mendix Public Platform to convert any regular web page in your app into a PDF document. The result is similar to what you would get when using the "Save as PDF" feature in the print dialog box of your browser.

When using **Run locally** in Studio Pro, a local service is used to run the headless browser next to your app. The service and browser run only at the moment of generating a document, and are terminated when the document is finished.

When running on Mendix Cloud, the PDF document generation service on Mendix Public Platform (EU instance) is used, which is developed and maintained by Mendix. The cloud service opens the page in a headless browser and sends the resulting PDF back to the module. The diagram below illustrates this process.

{{< figure src="/attachments/appstore/use-content/modules/document-generation/request-flow.png"  alt="architecture-overview-diagram" >}}

### Security

When deployed to Mendix Cloud, the cloud service uses the user which was provided in the `Generate as user` parameter to access the requested page. A short-lived security token is used to authenticate each request. The lifetime of this token can be configured using the constant `TokenLifetimeInSeconds`.

The architecture is set up to process every request in a fully isolated context. The cloud service creates a request-specific worker instance for every PDF that is generated and sends the result back to the runtime when finished. After this, the worker instance is destroyed.

The PDF document generation service does not store pages or documents at any time in the process.

## Troubleshooting

### App Environment Registration Issues

If you encounter any issues while [registering your app environment](#register-app), refer to the table below for more details and suggestions on how to resolve them.

| Error | Error message | Description | Suggestion |
|-------|------------------|-------------|------------|
| **Invalid Developer Credentials** | "Invalid developer credentials" | The developer information as provided in the **Email** and **API key** fields is incorrect. | Verify that the provided email address in the **Email** field matches the username in your Mendix developer profile, and also that the API key that is being used is correct and still active. |
| **Invalid App** | <ul><li>"Invalid app"</li></ul><ul><li>"App not found for the given user"</li></ul> | The provided apple ID is either incorrect or the developer (based on the **Email** and **API key** fields) does not have access to this app. | Verify that the **App ID** field is correct, and also that the developer account corresponding to the details entered in the **Email** and **API key** fields has access to the given app. |
| **Invalid Application URL** | "Application URL does not match any of the environment URLs" | The app corresponding to the **App ID** field does not contain any environment that matches the URL given in the **Application URL** field. | Verify that the **App ID** and **Application URL** fields are correct. |
| **Invalid Deployment Type** | <ul><li>"Application should be deployed on Mendix Cloud"</li></ul><ul><li>"Deployment type should be Mendix Cloud"</li></ul> | The provided **Application URL** is either incorrect or the chosen **Deployment type** is incorrect for this app. | Verify that the entered **Application URL** is correct and that you have chosen the correct **Deployment type**. |
| **Unable to Reach App** | <ul><li>"Domain verification failed, unable to reach app"</li></ul><ul><li>"Domain verification failed, unable to reach verification endpoint"</li></ul><ul><li>"Domain verification failed, verification endpoint inactive" </li></ul>| The cloud service was unable to reach your app. | Verify that you enabled the `ASu_DocumentGeneration_Initialize` after startup microflow and also allowed access to the DocGen request handler. For more information, see [Enabling the DocGen Request Handler](#enable-docgen). |
| **Invalid Token** | "Domain verification failed, invalid token" | The cloud service was able to reach your app, but could not verify that this app is currently trying to register. | Verify that the application URL matches the current environment. |
| **Other Errors** |<ul><li>"Project verification failed"</li></ul><ul><li>"Domain verification failed, invalid response from verification endpoint"</li></ul><ul><li>"Domain verification failed for unknown reason"</li></ul> | An unexpected error occurred. | Verify that your app was not restarted by someone else during the registration process. If not, submit a ticket in the Mendix Support Portal. |

### Module Usage and Runtime Issues {#module-usage-runtime-issues}

In general, we recommend that you perform the following steps if you get any issues during runtime:

1. Temporarily set the log level of `DocumentGeneration` log node to [trace](/howto/monitoring-troubleshooting/log-levels/#level). This should give more insight at what stage the action fails.
2. Temporarily add the page microflow that is configured in the action to the app navigation, or make it accessible via a button. This can help to verify that the page itself loads correctly, and can for example outline misconfiguration of entity access, widgets, etc. Make sure that you access the page with the same user you provided to the `Generate as user` parameter in the action.

#### Exceptions

{{% alert color="info" %}}For module version 1.8.0 and above, errors that occur during the document generation process in the cloud and local service are now sent back to the module. If any error is received, this will cause the module to throw Document Generation specific exceptions.{{% /alert %}}

The sections below contain the exceptions that can possibly occur during the document generation process and the suggested steps to verify the reason.

##### Wait for Content Exception

If you encounter a `DocGenWaitForContentException` exception with error code `DOCGEN_WAIT_FOR_CONTENT_ERROR` while generating a document, refer to the table below for more details and suggestions on how to resolve them.

| Error message                            | Potential reasons                                            |
| ---------------------------------------- | ------------------------------------------------------------ |
| "Failed while waiting for page content." | <ul><li>The required `Enable PDF export` design property is not set to *Yes* for the page you are trying to export to PDF.</li></ul><ul><li>Loading the page failed or took too much time. When this occurs, verify that the page loads successfully within the fixed timeout of 30 seconds and does not trigger any client errors. To verify this, we recommend temporarily adding the page to, for example, the app navigation.</li></ul><ul><li>A widget or add-on is being used in the `index.html` file that performs long polling network requests. This is not supported, since the document generation service waits until there are no more pending network requests.</li></ul> |

##### Navigation Exception

If you encounter a `DocGenNavigationException` exception with error code `DOCGEN_NAVIGATION_ERROR` while generating a document, refer to the table below for more details and suggestions on how to resolve them.

| Error message                                                | Potential reasons                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| "Failed to generate document due to an external redirect to: `https://example.com`." | An external redirect implemented in the `index.html` or a redirect widget, for example, for SSO purposes. Verify and change your implementation accordingly. |
| "Failed to generate document. Access denied and redirected to login page." | A failure occurred when a user logs into the application. Make sure that the module role `User` is assigned to the user who is passed in the `Generate as user` property of the `Generate PDF from page` action. |
| "Failed to generate document. Page microflow could not be executed, check if the configured document user has the applicable access rights." | The configured document user does not have the applicable access rights to run the page microflow. In this case, you can find a warning in the logs mentioning User `<username>` attempted to run the microflow with action name `<page microflow>`, but does not have the required permissions. |
| "Failed to navigate to page due to an error: `<error message>`." | The service was unable to reach the app, for example due to the following reasons: <ul><li>Your app is configured to [restrict access for incoming requests](/developerportal/deploy/access-restrictions/). This is not supported. Also refer to the [limitations](#limitations) section.</li><li>A timeout or network error occurred. Try again.</li></ul> |
| "Failed to navigate to page due to an invalid response code: `<code>`." | The module rejected the request from the service. Verify the application logs. |

##### Runtime Exception

If you encounter a `DocGenRuntimeException` exception with error code `DOCGEN_RUNTIME_ERROR` while generating a document, refer to the table below for more details and suggestions on how to resolve them.

| Error message                                                | Potential reasons                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| "Failed to export to PDF due to an error: `<error message>`." | The service was unable to export the PDF due to a timeout or memory limitation. This can happen for large or complex documents. Try to reduce the number of widgets inside repeatable widgets as much as possible. |
| "Failed to send result back: `<error message>`."             | The service was unable to send the resulting PDF. This can happen if your document exceeds the maximum file size limit. If this is the case, we recommend compressing high-resolution images to reduce their file size. |

If you encounter a `DocGenRuntimeException` exception with a message that is not mentioned in the table above, we recommend you [submit a support request](/support/submit-support-request/).

##### Polling Exception

If you encounter a `DocGenPollingException` exception while generating a document, this means that the module timed out while waiting for the service to send the resulting PDF. Verify if the application logs contain any other errors and try again.

##### Default Exception

If you encounter a `DocGenException` exception with error code `DOCGEN_UNKNOWN_ERROR` while generating a document, we recommend you [submit a support request](/support/submit-support-request/).

#### Rendering/Styling Issues

In case of issues regarding styling, Mendix recommends temporarily adding the page microflow to your app navigation (for details, see step 2 in the [Module Usage and Runtime Issues](#module-usage-runtime-issues) section). This allows you to preview the page in your browser and inspect the applied styles. Mendix recommends using Chrome or Chromium and the [Chrome DevTools](https://developer.chrome.com/docs/devtools/css/) for this, since Chromium is the browser that is used by the document generation service.

If the resulting PDF document only contains a part of the expected content, verify that the layout used for the page does not include a scroll container. Layouts that do include a scroll container, such as **Atlas_Default**, will not work properly.

If the resulting PDF document contains an additional blank page at the end of the document, try to wrap the content in a layout grid.

{{% alert color="warning" %}}
When testing the PDF Document Generation module locally using Chrome or Chromium version 117 or 118, the scaling of your PDF document might be different compared to the document generated from the PDF document generation service in Mendix Cloud. This issue has been fixed in Chrome version 119, we recommend that you update your Chrome version to the latest release if you run into this issue. To guarantee the same result locally as when using our PDF document generation service, we advise using the Chromium version cited in the [Chromium](#chromium) section above.
{{% /alert %}}

#### Local Service Errors

If you encounter the message "Local service exited with error" in your runtime logs, for example:

```
com.mendix.modules.microflowengine.MicroflowException: com.mendix.systemwideinterfaces.MendixRuntimeException: java.lang.RuntimeException: Local service exited with error
	at DocumentGenerationTest.ACT_TestDocument_WrongLayout (JavaAction : 'Generate PDF from page')
```

We recommend that you temporarily set the log level of the `DocumentGeneration` log node to [trace](/howto/monitoring-troubleshooting/log-levels/#level). This should give more insight at what stage the action fails.

#### Cloud Service Errors

If you encounter the message "Unable to generate document for request `<requestId>`, service response code: 401" in the logs of your cloud environment, the request was rejected by the document generation service. This could be caused by the following reasons:

* The scheduled event **SE_AccessToken_Refresh** is not enabled, which caused the registration to expire. Enable the scheduled event and [register](#register-app) the affected app environment again.
* The URL of the app environment does not match the URL that was provided during registration. This could be the case when you requested a change to the URL of your app, or after restoring a database backup from one environment to another. [Register](#register-app) the affected app environment (or environments) again.

If you encounter the message "Unable to generate PDF document. Failed to refresh expired access token", the app registration expired and the automatic attempt to refresh the tokens failed. Verify that the scheduled event **SE_AccessToken_Refresh** is enabled and make sure to [register](#register-app) the affected app environment(s) again.

If you encounter the message "No configuration object available. For use in Mendix cloud, your app environment needs to be registered first" or "Unable to generate PDF document. For use in Mendix Cloud, your app environment needs to be registered first", follow the steps for [registering your app environments](#register-app).

#### Timeout Errors

If you encounter the message "Failed to load page: TimeoutError: waiting for selector `#content .document-content` failed: timeout 30000ms exceeded" in your runtime logs, this means that a timeout occurred while the browser was waiting for the configured page to finish loading. This could be caused by the following reasons:

* The required **Enable PDF export** design property is not set to **Yes** for the page you are trying to export to PDF.
* Loading the page failed or took too much time. When this occurs, verify that the page loads successfully within the fixed timeout of 30 seconds and does not trigger any client errors. To verify this, we recommend temporarily adding the page to, for example, the app navigation.
* A widget or add-on is being used in the `index.html` file that performs long polling network requests. This is not supported, since the document generation service waits until there are no more pending network requests.
* The configured service user does not have the applicable access rights to run the page microflow. In this case, there should be a warning in the logs mentioning User `<username>` attempted to run the microflow with action name `<page microflow>`, but does not have the required permissions.
* Make sure that the module role `User` is assigned to the user who is passed in the `Generate as user` property of the `Generate PDF from page` action.
