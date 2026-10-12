---
title: "PDF Document Generation Usage"
linktitle: "Usage"
url: /appstore/modules/document-generation/usage/
weight: 3
---

## Generating Documents for the Current User

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

    5. Use **$currentUser** for the **Generate as user** property. This will generate the document in the context and using the access rights of the user which runs the microflow. To generate the document in a system context, refer to the [Generating Documents as a System Task](#system-task) section.

    6. Set the value for the **Wait for result** property. If you set it to *false*, the result object will be available instantly, while the content will be added at a later stage. Set the **Wait for result** property to *true* only for direct user actions. Do not set the value to *true* for batch processing.

        {{% alert color="info" %}}Whenever there are multiple document requests for the same app environment, the document generation service will prioritize requests that have the **Wait for result** property set to *true* above requests that have the property set to *false*.{{% /alert %}}

5. Verify that the user that you configured in the **Generate document as** property has access to all relevant data used in the page. This ensure that the page is exported correctly.    
    For all module versions below 1.11.1 for Studio Pro 9, and 2.1.1 for Studio Pro 10, the user configured in the **Generate document as** property must be assigned access to the page microflow.

{{% alert color="info" %}}
To see the generated document in the browser or download it, you can use the **Download file** microflow action. This will only work if you set the **Wait for result** property of the **Generate PDF from page** action to *true*.
{{% /alert %}}

## Generating Documents as a System Task {#system-task}

For scenarios where you want to generate documents as a system task (for example in a scheduled event), the recommended approach is to set up one or more service users for document generation.

1. Add a specific user role for service users to your app, for example **DocGenServiceUser** or **ReadOnly**. 
2. Assign the **User** module role from the **DocumentGeneration** module to the new user role.
3. Assign or add the required module roles to allow read access to the relevant data in your app’s modules. 
   
    As a good practice, let Studio Pro generate separate module roles and set strict entity access that only allows read access to the applicable data. In this case, the service user needs to have the **DocumentGeneration.User** module role, while the user who runs the microflow to generate a document does not.

   {{% alert color="info" %}}Do not use regular user accounts for the **Generate as user** parameter, since this could have side effects, for example, changes in the last login date, or failures when multiple sessions are disabled and the applicable user logs in at the same time.{{% /alert %}}

4. Run the app and create a new local user as the service user. Give the service user the user role that you have just created, and use a strong password. The service user will be used to generate documents.

   {{% alert color="info" %}}
   When starting with a blank app, you can use the **Administration.Account_Overview** page from the [Administration module](/appstore/modules/administration/) to manage and create new users.

   You could also add a **Find or create** microflow to your after startup logic that performs this step automatically.
   {{% /alert %}}

5. Create a microflow to retrieve and return the configured service user object.
6. In the microflow where you call the **Generate PDF from page** action, add a microflow call to the microflow you created in the previous step, and use the return value (the service user object) as input for the **Generate as user** parameter of the action.

{{% alert color="info" %}}
We recommend that you log in manually as the service user at least once, to verify if the service user has the required module roles to log in. Depending on your app’s implementation, it might for example be required to assign the `Administration.Account` module role.
{{% /alert %}}

## Language and Date/Time Handling

### Language

For the language of the document, the document generation service uses the language of the user that is passed in the `Generate as user` property.

{{% alert color="info" %}}
If no language is configured for the user that is passed in the `Generate as user` property, the default language as set in the [App Settings](/refguide/app-settings/) in Studio Pro is used.
{{% /alert %}}

### Date/Time Handling

For the localization of dates and times, the document generation service uses the time zone of the user that is passed in the `Generate as user` property.

{{% alert color="info" %}}
If no time zone is configured for the user that is passed in the `Generate as user` property, and the default time zone in the [App Settings](/refguide/app-settings/) in Studio Pro is set to *(none)*, all dates and times will be displayed using UTC.
{{% /alert %}}

## Styling Documents

### Page settings

The following page-related design properties are available in the **Styling** tab of the properties panel.

| Design property | Description |
|-----------------|-------------|
| **Page orientation** | This design property enables you to set the page orientation for your documents. |
| **Page size** | This design property enables you to set the page size for your documents. |
| **Show page numbers** | This design property enables you to show page numbers in your documents. <br>{{% alert color="info" %}}At the moment, we only support basic page numbers. We will extend and add support for custom headers and footers at a later stage{{% /alert %}} |

### Page breaks

You can use the **Page break** widget that is included in this module to structure your documents. This widget enables you to force a page break at a specific position in your document. In addition, you can use the **Add page break** design property that is available for **Container** widgets.

The following **Container** widget related design properties are available in the **Styling** tab of the properties panel.

| Design property | Description |
|-----------------|-------------|
| **Add page break** | This design property enables you to force a page break before or after the specific container widget. |
| **Avoid break inside** | This design property allows you to prevent page breaks within a specific container. This can be useful to keep widgets grouped together on the same page. |

### Applying Custom Fonts {#applying-custom-fonts}

For extended font support, Mendix recommends using custom fonts. To apply a custom font, follow these steps:

The procedure uses the `Noto Sans SC` font as an example. You can visit [Google fonts](https://fonts.google.com) for more font options or use a font of your choice.

1. Download the font [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC).
2. Copy the font file *NotoSansSC-Regular.ttf* from the *static* folder of the downloaded font package into the *theme\web\fonts* folder of the app.
3. In Studio Pro, go to **Styling** > **Web** > **main.scss** in **App Explorer**, and add the following lines to the *main.scss* file in the built-in styling editor:

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

### Advanced Styling

For advanced styling, you can use the styling editor in Studio Pro to style your documents. The module stylesheet includes several theme variables, such as *$document-background-color*, to customize your documents.

{{% alert color="info" %}}
We recommend you do not use the viewport width (`vw`) and viewport height (`vh`) units when styling your document. These units are related to the browser viewport, not to the page size of your document. Use absolute units (such as `px`, `mm`, etc.) or other relative units (such as `%`, `em`, or `rem`) instead.
{{% /alert %}}
