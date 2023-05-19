---
title: "Document Generation"
url: /appstore/modules/document-generation/
category: "Modules"
description: "Describes the configuration and usage of the Document Generation module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "document generation", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Document Generation](#url-to-be-added) module allows you to generate PDF documents based on regular pages in your app.

The module uses the Document generation service in the Mendix Cloud to convert any regular web page in your app into a PDF document. The result is similar to what you would get when using "Save as PDF" in the print dialog of your browser. 

When running locally, a local service is used to execute the headless browser next to your app. The service and browser are executed only at the moment of generating a document, and are terminated when the document is finished.

When running in the cloud, the Document generation service in the Mendix Cloud is used that is developed and maintained by Mendix. The cloud service opens the page in a headless browser and sends the resulting PDF back to the module.

{{< figure src="/attachments/appstore/modules/document-generation/request-flow.png" >}}

### 1.1 Features

- Generate pixel-perfect PDF documents based on regular pages in your project.
- Make use of the full capabilities of the Page Editor, including the use of snippets, text templates, conditional visibility based on expressions, dynamic classes, etc.
- Add any existing web widget to your document, or create your own widgets and use them in your documents.
- Use “Instant Update” during local development, so that changes to your documents are reflected immediately without having to do a full restart of your app.
- Generate documents using a synchronous or asynchronous approach. In the asynchronous action, the result object is available instantly, the content is added at a later stage.

### 1.2 Security

When deployed to the Mendix Cloud, the cloud service uses the user that was provided in the `Generate as user` parameter to access the requested page. A short-lived security token is used to authenticate each request. The lifetime of this token can be configured using the constant ‘TokenLifetimeInSeconds’.

The architecture is set-up to process every request in a fully isolated context. The cloud service creates a request-specific worker instance for every PDF that is generated and sends the result back to the runtime when finished. After this, the worker instance is destroyed.

We do not store pages or documents at any time in the process.

### 1.3 Limitations

{{% alert color="warning" %}}
THIS IS A BETA VERSION AND SHOULD BE USED FOR TESTING PURPOSES ONLY.
{{% /alert %}}

The document generation functionality is under active development. While we cannot guarantee that there will not be any breaking changes in future releases, we will clearly and timely communicate any breaking changes. We will build in backwards compatibility wherever possible.

- Currently, PDF is the only supported document export format.
- The ‘Generate document from page’ action does not support multiple page parameters
- We use a fixed 30 second timeout for the page to finish loading and rendering. A timeout exception is thrown if the page content did not finish loading within 30 seconds
- Although we currently do not enforce strict rate limits, please take into account the following guidelines:
  - The ‘Wait for result’ parameter should only be set to true for direct user actions, and specifically not for batch processing. Under heavy load, requests that wait for the result may fail due to strict timeout limitations. 
  - For batch processing, do not exceed 25 documents per minute, to ensure stable performance.
- When you deploy your app, it needs to be accessible to our cloud service. This requires access to the docgen/ request handler; which can be configured in the Cloud Portal. If your app is configured to restrict access, for example using IP whitelisting and/or client certificates, our cloud service will not be able to reach your app and the module will not work properly.
- Objects that are created in the microflow that contains the ‘Generate document from page’ action are not available to use in your document. This is also applicable for changes made to existing objects. The reason for this is that those changes are not persisted to the database until the whole microflow has finished. The document generation service will access your document in its own context, and therefore have no access to the non-persisted changes.
- For local development, we use the Chrome or Chromium executable that is available on the development machine. Even though we have not observed these yet, there might be minor differences in PDF output locally vs. when using the cloud service.

### 1.4 Known issues

- When styling your document, there might be conflicting styles introduced by Atlas Core. These styles are specific to the print media and use the !important property. This means you can only override them using !important property as well. See atlas_core/web/core/_legacy/bootstrap/_bootstrap.scss.
- The System.Owner association is currently not set to the user that executed the microflow.
- Some widgets, such as the Charts widget, might not be fully loaded if they are rendered before all data is available. We check on pending network requests to prevent this, but this is not 100% reliable.

## 2 Installation

1. Import the module in an existing or new app.
2. Add the ‘ASu_DocumentGeneration_Initialize’ microflow to run after startup (App Settings > Runtime). If there is already an after startup microflow, you should not replace it, but rather add the ‘ASu_DocumentGeneration_Initialize’ microflow as an action in the existing microflow.
3. Enable either the Prototype/Demo or Production security level (App > Security).
4. Go to App > Security > User roles and add the module role ‘User’ from the DocumentGeneration module to all app roles that should be able to generate a document.
5. Token cleanup:  Enable the scheduled event 'SE_Token_Cleanup' to automatically remove expired Token objects after a configured offset in days (using constant @DocumentGeneration.TokenCleanupOffsetInDays, the default value is 7 days). The scheduled event runs daily at 03:00 UTC.

## 3 Setting up the Runtime

#### 3.1 Running locally

You need to have Chrome or Chromium installed on your local machine. 

##### 3.1.1 Chrome

The module will automatically try to find the Chrome executable (chrome.exe) in the default installation paths. 

If you installed Chrome in a custom location, you can specify a custom path to the Chrome executable in the constant 'CustomChromePath' (_UseMe > Configuration > CustomChromePath). 

##### 3.1.2 Chromium

If you want to make use of Chromium, only use stable releases. The currently supported stable release is 104.0.5109.0. You can download this release of Chromium here: https://storage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1011831

Download the chrome-win.zip package and extract the archive to a location of your choosing. 

Configure the path to the 'chrome.exe' executable in the 'CustomChromePath' constant (_UseMe > Configuration > CustomChomePath)

#### 3.2 Running in the Mendix Cloud

Configure the API key and API URL that you received in the API_KEY and API_URL constants respectively (_UseMe > Configuration > Cloud Service).

To allow the module to send and receive document generation requests on your Mendix Cloud environments, you need to enable the 'docgen' request handler.

At this point, we assume that you have the 'ASu_DocumentGeneration_Initialize' already configured in your project’s runtime settings (refer to point 2 of section '4. Installation' above) and that you have the application deployed to Mendix Cloud.

Now to enable the request handler on Mendix Cloud, follow steps below:

1. You first need to select the desired project environment on Mendix Cloud. To do so, you can reach your Mendix Cloud environments by:
   - Go to https://cloud.home.mendix.com then in 'My Nodes' list find the desired project then click on 'Environments'; or
   - Go to sprinter https://sprintr.home.mendix.com then in 'My Apps' list find the desired project then click on 'Environments'
2. The project’s environments page then opens where you will see a list of available environments for your project under 'Deploy' tab, click on 'Details' for the respective environment.
3. In the specific Environment Details page, select the 'Network' tab
4. Scroll down to ‘Path Based Access Restrictions’ and click the 'Add' button
5. A ‘Create Path Based Access Restriction' pop then opens, fill in the fields:
    - In ‘Path’ field type in '/docgen/’
    - In ‘New Restriction Type' field select 'Allow all access’ from the list
6. Click ‘Save’. Now you can see '/docgen/' path added to the list
7. Finally, you need to restart your application for the new request handler to take effect

## 4 Usage

#### 4.1 Running the generation for the current user

1. Add an entity in your domain model that you want to use for storing the generated documents, using ‘System.FileDocument' as its generalization. Give read rights for the user role(s) that should be able to download the document.
2. Create a page that you want to export as a document. Use the ‘DocumentLayout' layout that is included in _UseMe > Layouts as the layout for this page <sup>1</sup>. If you want, you can duplicate the 'ExampleDocument' in the Examples folder to get started. Make sure to move and include the page in your own module.
3. Create a microflow that opens the page that you created in the previous step. See 'DOC_ExampleDocument_Print' in the Examples folder to get started. 
4. Call the ‘Generate document from page' action from a microflow to render this page as a PDF document. 
    1. Select the microflow you created in the previous step as the page microflow.
    2. Select the context object that you want to pass to the page. If the page does not require an input object, select 'empty'. Note: To pass the context object to the page, you should add this object as an input parameter in the microflow created in step 3 above.
    3. Select the entity that you created in step 1 as the result entity.
    4. Add a file name. The Java action will append '.pdf' to the generated documents.
    5. We recommend to use ‘$currentUser’ for the ‘Generate as user’ parameter. This will generate the document in the context and using the access rights of the user that executes the microflow. If you want to generate the document in a system context, refer to the section on ‘B. Running the generation as system task’ below.
    6. Set the value for the ‘Wait for result’ parameter. If you set this parameter to ‘false’, the result object will be available instantly, however, the content will be added at a later stage. The ‘Wait for result’ parameter should only be set to true for direct user actions, and specifically not for batch processing.
5. Verify that the user that you configured in the ‘Generate document as’ parameter has access to the page microflow created in step 3, as well as access to all relevant data used in the page to be exported.

{{% alert color="info" %}}
To see the generated document in the browser or download it, you can use the 'Download file' microflow action; this will only work if you select 'true' for the settings parameter 'Wait for result' of the 'Generate document from page' action.
{{% /alert %}}

<small><sup>1</sup>The 'DocumentLayout' is required to determine if the page has finished loading. If you want to use your own layout, make sure that the document content is contained in a container or layout grid that has the class 'document-content' configured, otherwise the action will wait until the configured timeout before exporting to PDF.</small>

#### 4.2 Running the generation as system task

For scenarios where you want to generate document using a ‘system’ context (for example in a scheduled event), the recommended approach is to set-up one or more service user(s) for document generation. 

1. Add a specific app role for document generation to your app, for example ‘DocGenServiceUser’ or ‘ReadOnly’. In the settings for the newly created role, assign the ‘User’ module role from the DocumentGeneration module to the app role. Also, assign or add the required module roles to allow (read) access to the relevant data in your app’s modules. 

2. We recommend to let Studio Pro generate separate module roles and set strict entity access that only allow read access to the applicable data. In this case, the service user needs to have the ‘DocumentGeneration.User’ module role, instead of the user that executes the microflow to generate a document.

   {{% alert color="info" %}}
   Do not use regular user accounts for the 'Generate as user’ parameter since this could have side effects, for example changes in the last login date or failures when multiple sessions are disabled and the applicable user logs in at the same time.
   {{% /alert %}}

3. Run the app and create a new (local) user. Give it the role that you defined in the previous step and use a strong password. This user will be used to generate documents. When starting with a blank app, you can add the ‘Administration.Account_Overview' page to manage and create new users. Note: you could also add a ‘Find or create’ microflow to your after start-up logic that performs this step automatically.
4. Create a microflow to retrieve and return the configured service user
5. In the microflow where you call the ‘Generate document from page’ action, add a microflow call to the microflow you created in the previous step, and use the return value (the service user) as input for the ‘Generate as user’ parameter of the action.

{{% alert color="info" %}}
We recommend to try to login as the service user at least once, to verify if the service user has the required module roles to login. Depending on your app’s implementation, it might for example be required to assign the ‘Administration.Account’ module role.
{{% /alert %}}

#### 4.3 Styling

- You can use the ‘Page break’ widget to structure your document. The ‘Page break’ widget is included in this module and enables you to add page breaks at any place in your document.
- You can use the ‘Page orientation’ design property to set the page orientation for your document. This property is available in the ‘Design properties’ section in the properties for a Page.
- You can use the ‘Page size’ design property to set the page size for your document. This property is available in the ‘Design properties’ section in the properties for a Page.
- You can use the ‘Show page numbers’ design property to enable page numbers for your document. At the moment, we only support basic page numbers. We will extend and add custom header/footer support at a later stage.
- For advanced styling, you can use the styling editor in Studio Pro to style your documents, for example by using the @media print and @page rules in your style sheet.
