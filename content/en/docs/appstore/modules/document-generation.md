---
title: "PDF Document Generation"
url: /appstore/modules/document-generation/
category: "Modules"
description: "Describes the configuration and usage of the PDF Document Generation module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "document generation", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This module is currently in Public Beta and should be used for testing purposes only. For more information on Beta products, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

The [PDF Document Generation](https://marketplace.mendix.com/link/component/211553) module allows you to generate pixel-perfect PDF documents based on regular pages in your app.

This module uses the document generation service on Mendix Cloud to convert any regular web page in your app into a PDF document. The result is similar to what you would get when using the "Save as PDF" feature in the print dialog box of your browser. 

You can use the module locally or on Mendix Cloud.

When running locally, a local service is used to run the headless browser next to your app. The service and browser run only at the moment of generating a document, and are terminated when the document is finished.

When running on Mendix Cloud, the document generation service on Mendix Cloud is used, which is developed and maintained by Mendix. The cloud service opens the page in a headless browser and sends the resulting PDF back to the module. The diagram below illustrates this process.

{{< figure src="/attachments/appstore/modules/document-generation/request-flow.png" >}}

### 1.1 Features

* Generate pixel-perfect PDF documents based on regular pages in your app.
* Make use of the full capabilities of the page editor, including the use of snippets, text templates, conditional visibility based on expressions, dynamic classes, etc.
* Support adding any existing web widget to your document, or creating your own widgets and using them in your documents.
* Use “Instant Update” during local development, which allows you to see changes to your documents immediately without having to do a full restart of your app.
* Generate documents using a synchronous or asynchronous approach. In the asynchronous action, the result object is available instantly, the content is added at a later stage.

### 1.2 Security

When deployed to Mendix Cloud, the cloud service uses the user which was provided in the `Generate as user` parameter to access the requested page. A short-lived security token is used to authenticate each request. The lifetime of this token can be configured using the constant `TokenLifetimeInSeconds`.

The architecture is set up to process every request in a fully isolated context. The cloud service creates a request-specific worker instance for every PDF that is generated and sends the result back to the runtime when finished. After this, the worker instance is destroyed.

We do not store pages or documents at any time in the process.

### 1.3 Limitations

The document generation functionality is under active development. While we cannot guarantee that there will not be any breaking changes in future releases, we will clearly and timely communicate any breaking changes. We will build in backwards compatibility wherever possible.

* Currently, PDF is the only supported document export format.
* For deployment, currently only the public [Mendix Cloud](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/) is supported. Other deployment scenarios will be supported at a later stage.
* The `Generate PDF from page` action does not support multiple page parameters.
* We use a fixed 30 second timeout for the page to finish loading and rendering. A timeout exception is thrown if the page content did not finish loading within 30 seconds.
* We currently do not enforce strict rate limits. However, take into account the following guidelines:
    * Only set `Wait for result` parameter to *true* for direct user actions. Do not set it to *true* for batch processing. Under heavy load, requests that wait for the result may fail due to strict timeout limitations. 
    * For batch processing, do not exceed 25 documents per minute, to ensure stable performance.
* Objects that are created in the microflow that contains the `Generate PDF from page` action are not available to use in your document. This is also applicable for changes made to existing objects. The reason is that those changes are not persisted to the database until the whole microflow has finished. The document generation service will access your document in its own context, and therefore have no access to the non-persisted changes.
* For local development, we use the Chrome or Chromium executable that is available on the development machine. Even though we have not observed these yet, there might be minor differences in PDF output locally vs. when using the cloud service.
* When you deploy your app, it needs to be accessible to our cloud service. This requires access to the DocGen request handler which can be configured in the Cloud Portal. If your app is configured to restrict access, for example using IP whitelisting and/or client certificates, our cloud service will not be able to reach your app and the module will not work properly.
* The access (and refresh) tokens used to secure requests to the cloud service are stored unencrypted in the app database. No user roles have read access to these tokens and all communication with the cloud service is encrypted by requiring HTTPS. However, do consider this when sharing a backup of the database with other developers. We will introduce encryption at a later stage.

### 1.4 Known issues

* When styling your document, you might see conflicting styles introduced by Atlas Core. These styles are specific to the print media and use the `!important` property. This means you can only override them using `!important` property as well. You can find this property in the file *atlas_core/web/core/\_legacy/bootstrap/_bootstrap.scss*.
* The `System.Owner` association is currently not set to the user which has run the microflow.
* Some widgets, such as the [Charts](/appstore/widgets/charts/) widget, might not be fully loaded if they are rendered before all data is available. We check on pending network requests to prevent this, but this is not 100% reliable.
* If you have the [Application Performance Monitor (APM)](/appstore/partner-solutions/apd/) or [Application Performance Diagnostics (APD)](/appstore/partner-solutions/apd/) add-on enabled in your app, or set the log level of the **Services** log node to *Trace*, the PDF Document Generation module will not be able to generate documents when used in Mendix Cloud. Note: This is only applicable for apps built in Mendix versions below 9.24.5 and Mendix 10.0.0.

## 2 Installation {#installation}

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Documentation Generation module into your app.

## 3 Configuration {#configuration}

1. In the **App Explorer**, double-click **Settings**, then go to the **Runtime** tab, and add the **ASu_DocumentGeneration_Initialize** microflow to run after startup. If there is already an after startup microflow, add the **ASu_DocumentGeneration_Initialize** microflow as an action in the existing microflow.
2. In the **App Explorer**, double-click **Security**, and then set the **Security level** to *Prototype/demo* or *Production*.
3. In the **App Explorer**, double-click **Security** again, then go to the **User roles** tab and perform the following steps: 
    1. Add the module role **User** from the **DocumentGeneration** module to all app roles that should be able to generate a document.
    2. Add the module role **Administrator** from the **DocumentGeneration** module to all app roles that should be able to [register](#register-app) the app environments on Mendix Cloud.
4. To clean up document requests, enable the scheduled event **SE_DocumentRequest_Cleanup** to automatically remove expired **Document Request** objects after a configured offset in days. The offset is configured using the constant **DocumentGeneration.RequestCleanupOffsetInDays** (the default value is 7 days). The scheduled event runs daily at 03:00 UTC.
5. Depending on where you run the module, continue to perform the procedure in the [Running Locally](#run-locally) section or in the [Running on Mendix Cloud](#run-on-mendix-cloud) section.

### 3.1 Running Locally {#run-locally}

You need to have Chrome or Chromium installed on your local machine.

#### 3.1.1 Chrome

The PDF Document Generation module automatically tries to find the Chrome executable (*chrome.exe*) in the default installation paths. 

If you have installed Chrome in a custom location, configure the path to the Chrome executable in the constant **CustomChromePath** in the **_UseMe** > **Configuration** folder. 

#### 3.1.2 Chromium

If you use Chromium, only use stable releases. The currently supported stable release is [104.0.5109.0](https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1011831/). 

Download the *chrome-win.zip* package and extract the archive to a location of your choosing. 

Configure the path to the *chrome.exe* executable in the **CustomChromePath** constant in the **_UseMe** > **Configuration** folder.

### 3.2 Running on Mendix Cloud {#run-on-mendix-cloud}

To allow the module to send and receive document generation requests on your Mendix Cloud environments, you need to perform the following procedures:

1. Enable the DocGen request handler.
2. For applications using Mendix [custom domains](/developerportal/deploy/custom-domains/), configure custom domain support.
3. Register your app environment.

The steps for each procedure are described in the sections below. 

#### 3.2.1 Enabling the DocGen Request Handler {#enable-docgen}

1. Make sure that you have the **ASu_DocumentGeneration_Initialize** already configured in your app’s runtime settings. For more information, see the [Configuration](#configuration) section.

2. Make sure that you have the application deployed to Mendix Cloud.

3. To allow the module to send and receive document generation requests in your Mendix Cloud environments, enable the DocGen request handler as follows:

    1. Go to the **Environments** page for the app as follows:

       * Go to the [Nodes](https://cloud.home.mendix.com/) page, then in the **My Nodes** list, find the desired app, and then click **Environments**.
       * Alternatively, go to the [Developer Portal](https://sprintr.home.mendix.com), then in the **My Apps** list, find the desired app, and then click **Environments**.

        The app’s environments page opens. The **Deploy** tab shows a list of available environments for your app.
    
    2. On the **Deploy** tab, click **Details** for the respective environment.
    
    3. In the specific **Environment Details** page, select the **Network** tab.
    
    4. Scroll down to **Path Based Access Restrictions** and click **Add**. The **Edit Path Based Access Restriction** dialog box opens.
    
    5. Fill in the fields as follows:
        * In the **Path** field, enter */docgen/*.
        * From the **New Restriction Type** drop-down list, select *Allow all access*.
    
    6. Click **Save**. The **/docgen/** path is added to the list.
    
    7. Restart your application for the new request handler to take effect.
    
    8. Depending whether this app environment uses a Mendix [custom domain](/developerportal/deploy/custom-domains/), continue with one of the following procedures:
    
        * If it uses a Mendix custom domain, [set up your app to support the custom domain](#use-custom-domain).
        * If it does not use a Mendix custom domain, [register your app environment](#register-app).
    
#### 3.2.2 Setting up Mendix Custom Domain Support (Only for Apps Deployed with Mendix Custom Domains){#use-custom-domain}

If your app is deployed to Mendix Cloud and configured with a custom domain, the PDF Document Generation module needs to know the original Mendix Cloud URL in order to successfully generate your documents.

To set it up you need to set the values of the constants **DocumentGeneration.UseCustomApplicationUrl** and **DocumentGeneration.CustomApplicationUrl** to point to Mendix Cloud URL for the desired app environment:

1. Go to the **Environments** page for the app as follows:

    * Go to the [Nodes](https://cloud.home.mendix.com/) page, then in the **My Nodes** list, find the desired app, and then click **Environments**.
    * Alternatively, go to the [Developer Portal](https://sprintr.home.mendix.com), then in the **My Apps** list, find the desired app, and then click **Environments**.

    The app’s environments page opens. The **Deploy** tab shows a list of available environments for your app.

2. On the **Deploy** tab, click **Details** for the respective environment.

3. In the specific **Environment Details** page, select the **Model Options** tab.

4. In the **Constants** list, search for **DocumentGeneration.UseCustomApplicationUrl**.

5. Click **Edit**. The **Edit Constant** dialog box opens. 

6. Check the **New value** checkbox and click **Save**.

    {{< figure src="/attachments/appstore/modules/document-generation/use-custom-application-url.png" >}}

7. In the **Constants** list, search for **DocumentGeneration.CustomApplicationUrl**.

8. Click **Edit**. The **Edit Constant** dialog box opens. 

9. In the **New value** field, enter the URL for Mendix Cloud domain of your app without trailing slash, for example: *https://exampleapp-accp.mendixcloud.com*, and then click **Save**.

    {{< figure src="/attachments/appstore/modules/document-generation/custom-application-url.png" >}}

10. Restart your app for the new values to take effect.

Now you can [register your app environment](#register-app).

#### 3.2.3 Registering Your App Environment {#register-app}

1. Add the snippet **Snip_AppRegistration** to a page that is accessible to admin users in your app.
2. Enable the scheduled event **SE_AccessToken_Refresh** to automatically refresh the access token that is used to secure access to the Document Generation cloud service.
3. Make sure that your changes are deployed to Mendix Cloud.
4. Sign in to the app environment you want to register.
5. Navigate to the page that contains the **Snip_AppRegistration** snippet.
6. Follow the steps on the page to register your app environment.

## 4 Usage

### 4.1 Generating Documents for the Current User

1. Add an entity in your domain model for storing the generated documents. Use **System.FileDocument** as its generalization. Give read access rights for the user roles that should be able to download the document.

2. Create a page that you want to export as a document. Use the **DocumentLayout** layout from the **_UseMe** > **Layouts** folder as the layout for this page. If you want, you can duplicate the **ExampleDocument** in the **Examples** folder to get started. Make sure to move and include the new page in your own module.

    {{% alert color="info" %}}The **DocumentLayout** is required to determine if the page has finished loading. If you want to use your own layout, make sure that the document content is contained in a container or layout grid that has the class **document-content** configured, otherwise the action will wait until the configured timeout before exporting to PDF.{{% /alert %}}

3. Create a microflow that opens the page that you created in the previous step. If you want, you can use **DOC_ExampleDocument_Print** in the **Examples** folder to get started. 

4. Call the **Generate PDF from page** action from a microflow to render this page as a PDF document:
    1. Select the microflow you created in the previous step as the page microflow.

    2. Select the context object that you want to pass to the page. If the page does not require an input object, select *empty*. 

       {{% alert color="info" %}}To pass the context object to the page, you should add this object as an input parameter in the microflow created in the previous step.{{% /alert %}}

    3. Select the entity that you created in step 1 as the result entity.

    4. Add a file name. The Java action will append `.pdf` to the generated documents.

    5. Use **$currentUser** for the **Generate as user** parameter. This will generate the document in the context and using the access rights of the user which runs the microflow. To generate the document in a system context, see the section [Generating Documents as a System Task](#system-task) below.

    6. Set the value for the **Wait for result** parameter. If you set it to *false*, the result object will be available instantly, while the content will be added at a later stage. Set the **Wait for result** parameter to *true* only for direct user actions. Do not set the value to *true* for batch processing.

5. Verify that the user which you configured in the **Generate document as** parameter has access to the page microflow created in step 3, as well as access to all relevant data used in the page to be exported.

{{% alert color="info" %}}
To see the generated document in the browser or download it, you can use the **Download file** microflow action. This will only work if you set the **Wait for result** parameter of the **Generate PDF from page** action to *true*.
{{% /alert %}}

### 4.2 Generating Documents as a System Task {#system-task}

For scenarios where you want to generate documents using a system context (for example in a scheduled event), the recommended approach is to set up one or more service users for document generation.

1. Add a specific app role for service users to your app, for example **DocGenServiceUser** or **ReadOnly**. 
2. Assign the **User** module role from the **DocumentGeneration** module to the new app role.
3. Assign or add the required module roles to allow read access to the relevant data in your app’s modules. 
   
    As a good practice, let Studio Pro generate separate module roles and set strict entity access that only allows read access to the applicable data. In this case, the service user needs to have the **DocumentGeneration.User** module role, while the user who runs the microflow to generate a document does not.

   {{% alert color="info" %}}Do not use regular user accounts for the **Generate as user** parameter, since this could have side effects, for example, changes in the last login date, or failures when multiple sessions are disabled and the applicable user logs in at the same time.{{% /alert %}}

4. Run the app and create a new local user as the service user. Give the service user the app role that you created for document generation and use a strong password. The service user will be used to generate documents. When starting with a blank app, you can add the **Administration.Account_Overview** page to manage and create new users. 

   {{% alert color="info" %}}You could also add a **Find or create** microflow to your after startup logic that performs this step automatically.{{% /alert %}}

5. Create a microflow to retrieve and return the configured service user.

6. In the microflow where you call the **Generate PDF from page** action, add a microflow call to the microflow you created in the previous step, and use the return value (the service user) as input for the **Generate as user** parameter of the action.

{{% alert color="info" %}}
We recommend to try to log in as the service user at least once, to verify if the service user has the required module roles to login. Depending on your app’s implementation, it might for example be required to assign the `Administration.Account` module role.
{{% /alert %}}

### 4.3 Styling Documents

* You can use the **Page break** widget included in this module to structure your documents. The **Page break** widget enables you to add page breaks at any place in your document.
* You can use the **Page orientation** design property to set the page orientation for your documents. This property is available in the **Design properties** section in the properties for a page.
* You can use the **Page size** design property to set the page size for your documents. This property is available in the **Design properties** section in the properties for a page.
* You can use the **Show page numbers** design property to enable page numbers for your documents. At the moment, we only support basic page numbers. We will extend and add support for custom headers and footers at a later stage.
* For advanced styling, you can use the styling editor in Studio Pro to style your documents, for example by using the `@media print` and `@page` rules in your style sheet.

## 5 Troubleshooting

### 5.1 App Environment Registration Issues

#### 5.1.1 Invalid Developer Credentials

If you encounter the message "Invalid developer credentials",  then the developer information as provided in the **Email** and **API key** fields is incorrect. 

Verify that the provided email address in the **Email** field matches the username in your Mendix developer profile, and also that the API key that is being used is correct and still active.

#### 5.1.2 Invalid App

If you encounter any of the following error messages:

* "Invalid app"
* "App not found for the given user"

Then the provided App ID is either incorrect or that the developer (based on the **Email** and **API key** fields) does not have access to this app

Verify that the **App ID** field is correct, and also that the developer account corresponding to the details entered in the **Email** and **API key** fields has access to the given app.

#### 5.1.3 Invalid Application URL

If you encounter the message "Application URL does not match any of the environment URLs", then the app corresponding to the **App ID** field does not contain any environment that matches the URL given in the **Application URL** field. 

Verify that the **App ID** and **Application URL** fields are correct.

#### 5.1.4 Unable to Reach App

If you encounter any of the following error messages:

* "Domain verification failed, unable to reach app"
* "Domain verification failed, unable to reach verification endpoint"
* "Domain verification failed, verification endpoint inactive"

Then the cloud service was unable to reach your app.

Verify that you enabled the `ASu_DocumentGeneration_Initialize` after startup microflow and also allowed access to the DocGen request handler. For more information, see [Enabling the DocGen Request Handler](#enable-docgen).

#### 5.1.5 Invalid Token

If you encounter the message "Domain verification failed, invalid token", then the cloud service was able to reach your app, but could not verify that this app is currently trying to register.

Verify that the application URL matches the current environment.

#### 5.1.6 Other Errors

If you encounter any of the following error messages:

* "Project verification failed"
* "Domain verification failed, invalid response from verification endpoint"
* "Domain verification failed for unknown reason"

Then an unexpected error occurred.

Verify that your app was not restarted by someone else during the registration process. If not, submit a ticket in the Mendix Support Portal.

### 5.2 Module Usage and Runtime Issues {#module-usage-runtime-issues}

In general, we recommend you to perform the following steps in case of any issues during runtime:

1. Temporarily set the log level of `DocumentGeneration` log node to [trace](/howto/monitoring-troubleshooting/log-levels/#level). This should give more insight at what stage the action fails.
2. Temporarily add the page microflow that is configured in the action to the app navigation, or make it accessible via a button. This can help to verify that the page itself loads correctly, and can for example outline misconfiguration of entity access, widgets, etc. Make sure that you access the page with the same user you provided to the `Generate as user` parameter in the action.

#### 5.2.1 Rendering/Styling Issues

In case of issues regarding styling, we recommend you to temporarily add the page microflow to your app navigation (See step 2 in the [Module Usage and Runtime Issues](#module-usage-runtime-issues) section). Open the page using Chrome and verify if the print version of the page matches the expected page. You can do this as follows:

* Enable print media type emulation, see [Emulate CSS Media Type (Enable Print Preview)](https://developer.chrome.com/docs/devtools/rendering/emulate-css/#emulate-css-media-type-enable-print-preview) in *Chrome Developers Documentation*. This is the preferred option, as this allows you to inspect the page and styling,

* Alternatively, you can right-click the page and select **Print**.

#### 5.2.2 Local Service Errors

In case you encounter the message "Local service exited with error" in your runtime logs, for example:

```
com.mendix.modules.microflowengine.MicroflowException: com.mendix.systemwideinterfaces.MendixRuntimeException: java.lang.RuntimeException: Local service exited with error
	at DocumentGenerationTest.ACT_TestDocument_WrongLayout (JavaAction : 'Generate PDF from page')
```

We recommend you to temporarily set the log level of `DocumentGeneration` log node to [trace](/howto/monitoring-troubleshooting/log-levels/#level). This should give more insight at what stage the action fails.

#### 5.2.3 Timeout Errors

If you encounter the message "Failed to load page: TimeoutError: waiting for selector `#content .document-content` failed: timeout 30000ms exceeded" in your runtime logs, this means that a timeout occurred while the browser was waiting for the configured page to finish loading. This could be caused by the following reasons:

* Loading the page failed or took too much time. When this occurs, verify that the page loads successfully and does not trigger any client errors by temporarily adding the page to for example the app navigation.
* The required `DocumentLayout` or `document-content` class is not used on the page you try to export.
* The configured service user does not have the applicable access rights to run the page microflow. In this case, there should be a warning in the logs mentioning User `<username>` attempted to run the microflow with action name `<page microflow>`, but does not have the required permissions.
