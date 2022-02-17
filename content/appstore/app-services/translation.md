---
title: "Translation"
category: "App Services"
description: " "
tags: ["translation", "service", "app store", "marketplace", "component", "platform support"]
---

## 1 Introduction

The [Translation](https://marketplace.mendix.com/link/component/118411) app service enables you to build web applications to work with state-of-the-art multi-language text translation. All you need to do is drag and drop items and configure them.

Here is an overview of what the Translation contains:

| Item                                        | Name                        |
| ------------------------------------------- | --------------------------- |
| [Predefined entities](#predefined-entities) | Language, Translator        |
| [Constants](#constants)                     | LicenseToken, TokenEndpoint |
| [Microflows](#microflows)                   | CreateTranslator            |
| [Nanoflows](#nanoflows)                     | TranslateText               |

In most cases, you will only need what is contained in the **Translation** > **USE_ME** folder. The content in the **Translation** > **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service on Mendix cloud that enables you to easily perform text translation with multi-language support in your Mendix applications.

### 1.2 Features

This app service enables doing the following:

* Customize text tranlation
* Switch different language options

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](/releasenotes/studio-pro/9.4).

## 2 Installation

1. Go to the [Translation](https://marketplace.mendix.com/link/component/118411) component page in the Marketplace, complete **Try for free** or **Subscribe**, then download the *Translation.mpk* file.

For more information about How to **Try for free** or **Subscribe**, see the [Obtaining the service mpk and License Token to use the service in Your App](#obtain) section below.

2.  To add the Translation app service to your app in Mendix Studio Pro, follow these steps:
    1.  In the **App Explorer**, right-click the app.
    2.  Click **Import module package** and then select the *Translation.mpk*. 

        In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your project.

        ![import-translation](attachments/translation/import-translation.png)

        {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard Marketplace content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

   3. In the **Import Module** dialog box, click **Import**. 
   4. Wait until a pop-up box states that the module was successfully imported. Click **OK**.
   5. Open the **App Explorer**  to view the **Translation** module. You can also find the app service in the **Cognitive AI widgets** category in the **Toolbox**.
3.  Map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

You have succesfully added the Translation resources to your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

The **Translator** entity is a conceptual entity that incorporates all the information of the translator object. It contains both input and output text strings. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module. 

![translator](attachments/translation/translator.png)

| Attribute | Description |
| --- | --- |
| **InputText** | The input text string. |
| **OutputText** | The output text string. |

The **Language** entity is an entity referenced from **Translator** that incorporates all the information of supported language object.

![language](attachments/translation/language.png)

| Attribute | Description |
| --- | --- |
| **Name** | The language name, equivalent to the locale name. |
| **Code** | The language code that assigns letters or numbers as identifiers or classifiers for languages. |

### 3.2 Constants {#constants}

The **LicenseToken** constant is used to provide a valid Translation license token for the app that uses Translation to be successfully deployed to [Mendix Licensed Cloud Node](/developerportal/deploy/mendix-cloud-deploy) or your own environment. As Translation is a commercial product, to be able to use the Translation functionality in a deployed app, you will need a long term valid license token, and you need to set the value of the **LicenseToken** constant to that license token in the deployment environment setting.

However, if you only plan to try how Translation works  (meaning, build and run an app that uses Translation locally in Studio Pro or deploy to a Mendix Free App environment), you need to subscribe a trial version, and set the value of the **LicenseToken** constant to that license token in the project environment setting.

For details on how to get and configure a license token, see the [Obtaining the service mpk and License Token to use the service in Your App](#obtain)section below.

The **TokenEndpoint** constant is used to provide a valid endpoint of security token service for the back-end authentication of the cognitive translation service. The constant comes with default value which point to the production environment of deployed security token service. The security token service issue security tokens that authenticate user's identity. 

### 3.3 Microflows {#microflows}

The **CreateTranslator** microflow takes **inputText**, **inputLanguageCode**, and **outputLanguageCode** as input parameters and creates translator actions in the back-end service. For instance, the **inputLanguageCode**, and **outputLanguageCode** can be set as `en-US`.

![createtranslator](attachments/translation/createtranslator.png)

### 3.4 Nanoflows {#nanoflows}

The **TranslatorText** microflow takes the **translator** object as an input parameter, performs text translation actions in the back-end service, and eventually updates the output text string of the **translator** object.

![translatortext](attachments/translation/translatortext.png)

## 4 Obtaining the service mpk and License Token to use the service in Your App {#obtain}

Translation is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this app service in an app, you need to complete either a trial order or a subscription order to get access to download the service mpk and get a valid **LicenseToken**. Then import the mpk and configure **LicenseToken** as an environment variable in the settings of your app. Follow below steps to get the mpk, license token, import the mpk and configure **LicenseToken** in your app.

### 4.1  Completing a Trial Order or Subscription Order & Download Mpk

On the [Translation](https://marketplace.mendix.com/link/component/118411) page, you can see **Try for free** and **Subscribe** button.  **Try for free** will lead you to create a trial order, it grants you one month free access to the service, it's a simple flow.  **Subscribe** button will lead you to create a subscription order, it is more complex as it requires you to select plans, fill in billing information and pay to complete subscription. Based on your use case, click either button to complete an order, then you will get access to the service mpk and **LicenseToken**. 

#### 4.1.1 Completing a trial order 

1. Click **Try for free** button, you will be directed to the confirmation page, by ticking "Agree to Terms & Conditions" and clicking **Enable trial**, you will see a page saying your Trial order is confirmed, meaning you have one month access to the service.

2. You will then be redirected to product page automatically, if not, go to product page again, you will see **Download** button is available for you to download the mpk. 

3. You will receive a Trial confirmation email with the trial details

#### 4.1.2 Completing a subscription order

1. Click click **Subscribe** to order a subscription. you will be direct to an order confirmation page.

2. Select a plan, fill in [Technical Contact](/developerportal/collaborate/app-roles#technical-contact) information (**First Name**, **Last Name**, **Email Address**), billing account information, and other required information, and then place the order. You will see a order confirmation page upon successful order placement. 

3. You will be then be redirected to product page automatically, if not, go to product page again, you will see **Download** button is available for you to download the mpk. 

4. The Technical Contact receives an order confirmation email.

### 4.2 Get a LicenseToken 

Now you have receive a Trial/Subscription confirmation email and can see the **Download** button download the mpk. Next step is to get a LicenseToken.

Upon successful trial/subscription order, it takes a few minutes to provision your service instance. When your service instance is ready, you or the technical contact will receive a second email that notifying your service is ready to be used. When you or the technical contact receive this email: 

1. Click the Subscription Management Overview link in the provisioning email to go to the Marketplace [Subscriptions](/appstore/general/app-store-overview#subscriptions) page and log in there. The **Subscriptions** page gives an overview of all the subscriptions of your organization.

2. Click **Translation** to open the [service management dashboard](/appstore/general/app-store-overview#service-management-dashboard).

3. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview#creating-binding-keys) section in the *Marketplace Overview* to create a license token.

Note: Binding Keys and LicenseToken are used interchangeably across different app services but they are the same thing.

### 4.3 Configuring the License Token 

#### 4.3.1 Configuring the License Token in Studio Pro when running locally 

1. In the App Explorer, go to **Settings** to open the [App Settings](/refguide/project-settings) dialog box.
2. On the **Configurations** tab, click **Edit** to open the **Edit Configuration** dialog box.
3. On the **Constants** tab, create a new constant with the predefined constant **Translation.LicenseToken**.
4. Fill in the **Value** with the license token that you obtained.
5. Click **OK** to save the settings.

    ![licensetoken-inmendix](attachments/translation/licensetoken-inmendix.png)

6. When you finish building the app, click **Run** to deploy your app to the cloud.

#### 4.3.2 Configuring the License Token in Developer Portal when deploying to cloud

Alternatively, you can add or update LicenseToken as a constant in the [Developer Portal](/developerportal/deploy/environments-details).

Before you deploy your app, configure the app **Constants** in the deployment package.

![licensetoken-cloudportal](attachments/translation/licensetoken-cloudportal.png)

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app:

![licensetoken-envdetails](attachments/translation/licensetoken-envdetails.png)

## 5 Using Translation

 When you start from a blank app template in Mendix Studio Pro, follow the steps below to set up translation quickly.

### 5.1 Performing Text Translation in Your Browser

Use the **CreateTranslator** microflow and the **TranslateText** nanoflow to perform text translation. Follow these steps to configure this text translation:

1.  Create a nanoflow as follows:
    1.  Name the nanoflow *CreateTranslator*.
    2.  Add the **CreateTranslator** microflow from the **Translation** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreateTranslator** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**. 

        ![call-createtranslator-microflow](attachments/translation/call-createtranslator-microflow.png)

        For instance, here we set **inputLanguageCode** as 'en' and **outputLanguageCode** as 'zh', so the default translation will translate from english to chinese. You can also set to other languages, refer to **CreateTranslator** microflow, [Microflows](#microflows).

    4.  Right-click the create object activity and select **Set $translator as return value** in the pop-up menu. 

        ![createtranslator-nanoflow](attachments/translation/createtranslator-nanoflow.png)

2.  Create a microflow as follows:
    1. Name the microflow *GetTranslatorSupportedLanguages*. 
    2. Right-click the canvas and select **Add** > **Parameter** from the pop-up menu.
    3. Double-click the parameter to open the **Parameter** dialog box.
    4. Set **Data type** to **Object** and select **Translator** entity from **Translation** module as target object.
    5. For **Name**, enter *translator*.
    6. Click **OK** to save the changes.
    7. Double-click the end event to open the **End Event** dialog box.
    8. Set **Type** to **List**.
    9. For **Entity**, select **Language** entity from **Translation** module 
    10. In the text box, enter *$translator/Translation.Translator_SupportedLanguages/Translation.Language*.
    11.  Click **OK** to save the settings.  

         ![gettranslatorsupportedlanguages-microflow](attachments/translation/gettranslatorsupportedlanguages-microflow.png)

3. Add a **Data view** widget to your page.
4. Set the **CreateTranslator** nanoflow as the data source of the **Data view** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreateTranslator** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings. 
5. Inside the **Data view** widget, add a **Group box** widget.
6. Change the settings of the **Group box** widget as follows:
   1. Double-click the **Group box** widget to open the **Edit Group Box** dialog box.
   2. For **Caption**, enter *Input*.
   3. Click **OK** to save the settings.
7. Inside the **Group box** widget, add a **Reference selector **widget.
8. Change the settings of the **Reference selector** widget as follows:
   1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
   2. Go to the **Selectable objects** tab.
   3. Set **Source** to **Microflow**.
   4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
   5. Go to the **General** tab.
   6. Set **Data source** to **Translation.Translator_InputLanguage/Translation.Language/Translation.Language.Name**.
   7. For **Label caption**, enter *Language*.
   8. Click **OK** to save the settings.
9. Inside the **Group box** widget, add a **Text area** widget below the **Reference selector** widget.
10. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, **Select** the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings. 
11. Inside the **Data view** widget, add a second **Group box** widget.
12. Change the settings of the **Group box** widget as follows:
    1. Double-click the **Group box** widget to open the **Edit Group Box** dialog box.
    2. For **Caption**, enter *Output*.
    3. Click **OK** to save the settings.
13. Inside the **Data view** widget, add a **Reference selector** widget.
14. Change the settings of the **Reference selector** widget as follows:
    1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
    2. Go to the **Selectable objects** tab.
    3. Set **Source** to **Microflow**.
    4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
    5. Go to the **General** tab.
    6. Set **Data source** to **Translation.Translator_OutputLanguage/Translation.Language/Translation.Language.Name**.
    7. For **Label caption**, enter *Language*.
    8. Click **OK** to save the settings.
15. Inside the **Group box** widget, add a **Text area** widget below the **Reference selector** widget .
16.  Change the settings of the **Text area** widget as follows:
     1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
     2. For **Data source**, Select the **OutputText** attribute from **Data view**.
     3. For **Label caption**, enter *Text*.
     4.  Click **OK** to save the settings. 

         ![data-view](attachments/translation/data-view.png)

17. Inside the **Data view** widget, add a **Button** widget below the **Text area** widget.

18. Change the settings of the **Button** widget as follows:
    1. Double-click the **Button** widget to open the **Action Button** dialog box.
    2. For **Caption**, enter *Translate*.
    3. In the **Event** section, set **On click** to **Call a nanoflow**.
    4. For **Nanoflow**, **Select** the **TranslateText** nanoflow from the **Translation** > **USE_ME** folder.
    5. Click **OK** to save the settings.  

19. Make sure your follow the section [Obtaining the service mpk and License Token to use the service in Your App](#obtain) get a valid license token and configure **TextToSpeech.LicenseToken** correctly.

20. Run your app locally. You can perform text translation directly in the browser:

     ![runlocally-translation](attachments/translation/runlocally-translation.png)
