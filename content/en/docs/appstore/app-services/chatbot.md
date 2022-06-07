---
title: "Chatbot"
url: /appstore/app-services/chatbot/
category: "App Services"
description: "Describes the configuration and usage of the Chatbot app service, which is available in the Mendix Marketplace. "
tags: ["chatbot", "service", "app store", "marketplace", "component", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

{{% todo %}} Add the component page link{{% /todo %}}

The [Chatbot]() app service enables you to build a chatbot app that can make human-like conversations with users via text messages. This is a fully-managed artificial intelligence (AI) service that allows you to design, build, test, and deploy conversational interfaces with advanced natural language models.

Here is an overview of what Chatbot contains:

| Item                                        | Name                             |
| ------------------------------------------- | -------------------------------- |
| [Predefined entities](#predefined-entities) | BotContext, BotConfig, LanguageConfig, Slot Argument, TestBotContext |
| [Constants](#constants)                     | LicenseToken, TokenEndpoint      |
| [Microflows](#microflows)                   | GetSlotArgument, StartService |
| [Widgets](#widgets)                         | Chatbot, InputElement         |
| Pages                             | ChatbotConsole                |
| [Enumerations](#enumerations)               | BotStatus, BuiltinIntent, BuiltinSlotType,LanguageStatus, Locale, SlotConstraint, SlotValueResolutionStrategy    |

In most cases, you will only need what is contained in the **Chatbot** > **USE_ME** folder. The content in the **Chatbot** > **Internal** folder is for internal use only and you will not need it.

The Chatbot module contain the ChatbotConsole page, which could define a chatbot in conversational UI with local developer mode in Mendix Studio Pro. During the chatbot configuration, you need to use the provided template bot config or make a complete new design. The conversation bot design including elements like, Intent, Utterance, Prompt, Slot, Fulfillment, you could following the section 4.4 step by step to get to know how it works.

{{< figure src="/attachments/appstore/app-services/chatbot/chatbotconsole-page.png" >}}

### 1.1 Typical Use Cases

You can use this app service to build a chatbot app that can make human-like conversations with users via text messages or audio. You can also customize these chatbot intent actions in your Mendix app.

### 1.2 Features

This app service enables doing the following:

* Create a chatbot app to make human-like conversations with users via text messages in UI
* Support customizing chatbot intent actions
* Easily add AI that understands users' intents and automates actions across many languages
* Design and deploy omnichannel conversational AI with drag and drop

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.12.0](/releasenotes/studio-pro/9.12/).

### 1.4 Dependencies

* [Dropdown Container](https://marketplace.mendix.com/link/component/111568) widget

## 2 Installation

### 2.1 Obtaining a License Token {#obtain-license-token}

Chatbot is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this app service in your app, first you need to start a subscription or a trial to get a license token.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company one-month access to the app service. The trial has a limitation with [data usage](#check-usage) up to 300 minutes. To start a trial, perform the following steps:

{{% todo %}}Add the component page link{{% /todo %}}

1. Go to the [Chatbot]() page in the marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the app service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the app service is ready to be used. 
6. Click the link in the email to go to the [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) page and log in there. This page shows all the products that you have trials for.
7. Click **Chatbot** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create a license token. Save the license token somewhere safe. Later you will need to [configure the license token](#configure-license-token) in your app.

#### 2.1.2 Subscribing to the App Service

{{% todo %}}Add the component page link{{% /todo %}}

1. Go to the [Chatbot]() page in the marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in [Technical Contact](https://docs.mendix.com/developerportal/collaborate/app-roles#technical-contact) information (**First Name**, **Last Name**, **Email Address**), billing account information, payments and other required information and then place the order. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Contact will receive an email that says the app service is ready to be used. 
6. Click the link in the email to go to the [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **Chatbot** to open the [service management dashboard](https://docs.mendix.com/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create a license token.Save the license token somewhere safe. Later you will need to [configure the license token](#configure-license-token) in your app.

### 2.2 Installing the Component in Your App

{{% todo %}}Add the component page link{{% /todo %}}

1. To download and install the Chatbot app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **App Explorer** and also in the **Cognitive AI widgets** category in the **Toolbox**.
2. Map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

#### 3.1.1 BotContext

The **BotContext** is a context entity which captures all input and output info for the Chatbot widget. The context is uniquely identified by the bot name defined in the [Create Bot Context](#createbotcontext) activity .

{{< figure src="/attachments/appstore/app-services/chatbot/botcontext.png" >}}

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `Uid`   | String | The unique identifier of the bot context.  |
| `LocaleId` | Enumeration | The enumeration to get or set the bot locale. |

#### 3.1.2 BotConfig

The **BotConfig** is a read-only entity that shows the context of a bot which performs automated tasks such as ordering a pizza, booking a hotel, ordering flowers, and so on.

{{< figure src="/attachments/appstore/app-services/chatbot/botconfig.png" >}}

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `Name`   | String | The name of the bot.  |
| `Status` | Enumeration | The status of the bot. |
| `Tag`    | String | The underlying cloud identifier, internal-use only. |
| `Hash`   | String | The hash string to identify if bot configuration has been modified. |

#### 3.1.3 LanguageConfig

The **LanguageConfig** is a read-only entity that shows the language configuration of bot.

{{< figure src="/attachments/appstore/app-services/chatbot/languageconfig.png" >}}

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `LocaleId`   | Enumeration | The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale.   |
| `VoiceId` | String | The UUID of the voice object. |
| `Status` | Enumeration | The status of the bot. |
| `Tag`    | String | The underlying cloud identifier, internal-use only. |
| `Hash`   | String | The hash string to identify if bot configuration has been modified. |

#### 3.1.4 SlotArgument

The **SlotArgument** is the entity that captures the user input value of slots for current fullfilled intent.

{{< figure src="/attachments/appstore/app-services/chatbot/slotargument.png" >}}

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `Name`   | String | The name of the slot.    |
| `Value` | String | The value of slot. |

#### 3.1.5 TestBotContext

The **TestBotContext** is the entity that shows the configuration of the test bot context.

{{< figure src="/attachments/appstore/app-services/chatbot/testbotcontext.png" >}}

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `IsReady`   | Boolean | Whether the test bot is ready. |

#### 3.1.6 ClientConfig

The **ClientConfig** is the entity that shows the user data configurations.

{{< figure src="/attachments/appstore/app-services/chatbot/clientconfig.png" >}}

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `BotName`   | String | The name of the bot.    |
| `SelectedLanguageLocale` | Enumeration | The selected language locale of the target bot. |


### 3.2 Constants {#constants}

#### 3.2.1 LicenseToken

The **LicenseToken** constant provides a valid license token for an app that uses this app service. As Chatbot is a commercial product, no matter your app is deployed in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), your own environment, or locally in Studio Pro, you need to have a valid license token and configure it correctly. For details on how to get and configure a license token, see the [Obtaining a License Token](#obtain-license-token) section and [Configuring the License Token](#configure-license-token) section.

#### 3.2.2 TokenEndpoint

The **TokenEndpoint** constant provides a valid endpoint of security token service for the back-end authentication of the app service. The constant comes with a default value which points to the deployed security token service. The security token service issues security tokens that authenticate user's identity. 

### 3.3 Microflows{#microflows}

#### 3.3.1 StartService

The **StartService** microflow is a Java action which starts the Chatbot service. It is used to set up a cognitive chatbot back-end server infrastructure, which is critical for realizing all the features that Chatbot provides.

{{< figure src="/attachments/appstore/app-services/chatbot/startservice.png" >}}

#### 3.3.2 GetSlotArgument {#getslotargument}

The **GetSlotArgument** microflow takes **botContext** object and **slotName** as the input parameters to extract the slot argument from the provided **botContext**.

{{< figure src="/attachments/appstore/app-services/chatbot/getslotargument.png" >}}

### 3.4 Java actions {#java-actions}

#### 3.4.1 CreateBotContext {#createbotcontext}

The **CreateBotContext** Java action takes **entityType** and **botName** as the input parameters. It creates bot and its associated context given the bot name and bot description. You could pass a microflow to initialize the context. {{% todo %}}Check the description{{% /todo %}}

### 3.5 Enumerations {#enumerations}

#### 3.5.1 BotStatus

The **BotStatus** is an enumeration that incorporates all the status of your bot.

| Caption | Name |
| --- | --- |
| Creating | Creating |
| Initializing | Initializing |
| Available | Available |
| Failed | Failed |

#### 3.5.2 BuiltinIntent

The **BuiltinIntent** is an enumeration that incorporates all kinds of built-in intent.

| Caption | Name |
| --- | --- |
| CancelIntent | Cancel |
| FallbackIntent | Fallback |
| HelpIntent | Help |
| PauseIntent | Pause |
| RepeatIntent | Repeat |
| ResumeIntent | Resume |
| StartOverIntent | StartOver |
| StopIntent | Stop |

#### 3.5.3 BuiltinSlotType

The **BuiltinSlotType** is an enumeration that incorporates all kinds of built-in slot type.

| Caption | Name |
| --- | --- |
| AlphaNumeric | AlphaNumeric |
| City | City |
| Country | Country |
| Date | Date |
| Duration | Duration |
| EmailAddress | EmailAddress |
| FirstName | FirstName |
| LastName | LastName |
| Number | Number |
| Percentage | Percentage |
| PhoneNumber | PhoneNumber |
| State | State |
| StreetName | StreetName |
| Time | Time |

#### 3.5.4 LanguageStatus

The **LanguageStatus** is an enumeration that incorporates all the language status of your bot.

| Caption | Name |
| --- | --- |
| Creating | Creating |
| Initializing | Initializing |
| Available | Available |
| Failed | Failed |

#### 3.5.5 Locale

The **Locale** is an enumeration that incorporates all the language options of your bot.

| Caption              | Name  |
| --------------------- | ----- |
| German(German)                | de_DE    |
| English(Australia)            | en_AU    |
| English(British)              | en_GB    |
| English(US)                   | en_US    |
| Spanish(Latin America)        | es_419   |
| Spanish(Spain)                | es_ES    |
| Spanish(US)                   | es_US    |
| French(Canada)                | fr_CA    |
| French(France)                | fr_FR    |
| Italian(Italy)                | it_IT    |
| Japanese(Japan)               | ja_JP    |

#### 3.5.6 SlotConstraint

The **SlotConstraint** is an enumeration that incorporates all the informations of your slot constraint.

| Caption | Name |
| --- | --- |
| Required | Required |
| Optional | Optional |

#### 3.5.7 SlotValueResolutionStrategy

The **SlotValueResolutionStrategy** is an enumeration that incorporates all the options of your slot value resolution.

| Caption | Name |
| --- | --- |
| OriginalValue | OriginalValue |
| TopResolution | TopResolution |

#### 3.5.8 AddLanguageMethod

The **AddLanguageMethod** is an enumeration that incorporates all the options to add language method

| Caption | Name |
| --- | --- |
| Add a language from scratch | FromScratch |
| Start with an example | FromExample |

### 3.5 Widgets {#widgets}

#### 3.5.1 Chatbot {#chatbot}

The core widget required is the **Chatbot** widget. You can configure the following settings for the **Chatbot** widget:

* **Context** tab
  * **Bot Context** – the current position of the bot that defines its possibilities and options, which changes every time the bot moves along the story and opens newly possible interactions as well as closes the previous ones
    * **Bot Context Uid** – the unique identifier for bot context
     * **Locale** – the active locale constant of the bot
     * **Chatbot Mode** – the working mode for chatbot, which works in either text or audio
    
  * **Intents** – the intention behind each message that the chatbot receives, namely, what the user wants to get out of the interaction (for example, when a user says "I need new shoes", their intent is to order new shoes)
    * **Intent actions** – the action lists of user intent
         * **New** – creates a new intent action with the following settings:
             * **Name** – the name of intent
             * **Dialog action** – the action that is executed at every turn of the conversations; used to initialize values or validate user input
             * **Fulfillment action** – the action that is invoked after slot elicitation and confirmation; used to fullfill your intent
             * **Failure** – the action that is invoked in case of an intent failure
         * **Delete** – deletes the selected intent action
         * **Edit** – edits the selected intent action
         * **Move up** – moves the selected intent action up in the list
         * **Move down** – moves the selected intent action down in the list
     * **Fallback** – the action that is invoked when the built-in fallback intent is fulfilled
    
  * **Options** – the setting options for chatbot conversational UI/UX
    * **Chatbot Mode**
        * **Text **(default) – users can interact with the chatbot in text
    
        * **Audio** – users can interact with the chatbot in audio
    
     * **Use toggle button**
        * **Yes** (default) – a toggle button is available to show or hide chat panel
    
        * **No** (default) – no toggle button is available; the chat panel always available
    
     * **Show inspection panel**
       * **True** – a flag is available to toggle the display of the inspection panel
       * **False** (default) – no flag is available to toggle the display of the inspection panel
    
  
* **Events** tab
  * **On ready** – By binding a String attribute to the **Is ready** property, you can set this property to verify if the current bot is ready for conversing.
     * **Is ready** – a flag indicating if the current bot is ready for conversing
     * **Action** – the action triggered when bot is ready
  * **On error** – By binding a String attribute to the **Error** property, you can obtain the error message raised by the back-end service and set a custom action that is executed when an error occurs.
     * **Error** – sets a String attribute as the error message
     * **Action** – sets which action is executed when an error occurs

### 3.6 Configuring the License Token {#configure-license-token}

#### 3.6.1 For an App Run Locally or Deployed as a Mendix Free App

If you run your app locally or deploy it as a Mendix Free App, configure the license token in Studio Pro. Perform the following steps:

1. In the App Explorer, go to **Settings** to open the [App Settings](/refguide/project-settings/) dialog box.
2. On the **Configurations** tab, click **Edit** to open the **Edit Configuration** dialog box.
3. On the **Constants** tab, create a new constant with the predefined constant **Chatbot.LicenseToken**.
4. Fill in the **Value** with the license token that you [obtained](#obtain-license-token).
5.  Click **OK** to save the settings.

    {{< figure src="/attachments/appstore/app-services/chatbot/licensetoken-inmendix.png" >}}

6. When you finish building the app, click **Run Locally** to run your app locally or click **Run** to deploy it as a Mendix Free App. Then you can see the app service in your app.

#### 3.6.2 For an App Deployed in the Mendix Cloud

If you deploy your app in the Mendix Cloud, configure the license token in the [Developer Portal](/developerportal/deploy/environments-details/).

Before you deploy your app, configure the app **Constants** in the deployment package.

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app.

#### 3.6.3 For an App Deployed in Your Own Environment

If you deploy your app in your own environment, you need to configure the license token in your own environment. For more information, see [Deployment](/developerportal/deploy/).

## 4 Usage

### 4.1 Initializing Chatbot When App Starts

It can be useful to run the Chatbot service automatically when your app starts. The app service contains a Java action – the **StartService** microflow, which can start the Chatbot service for you. You can use the [After startup](/refguide/project-settings//#after-startup) setting in your app to call the **StartService** microflow.

1. In the **App Explorer**, click **Settings**. The [App Settings](/refguide/project-settings/) dialog box opens.
2. Go to the **Runtime** tab. 
3. Set **After startup** to the **StartService** microflow from the **Chatbot** > **USE_ME** folder, or to a microflow that calls the **StartService** microflow.

### 4.2 Configuring Chatbot Design Time in Your Browser {#configure-chatbot-design-time}

You can use the **ChatbotConsole** page in a module to design bot context. To let the **ChatbotConsole** page work, you need to take a few steps as follows:

1. In the **App Explorer**, click **Navigation**. 
2. Add the **ChatbotConsole** page as a new item in your [navigation profile](/refguide/navigation/#profiles).
3. Make sure that you have [configured the license token](#configure-license-token).
4. Run your app locally.
5. Navigate to **Chatbot Console** page. You can start designing chatbot context in your browser.

### 4.3 Designing Chatbot Context From Template in Your Browser {#design-chatbot-context}

1. Go to the **Chatbot Console** page in your browser as the administrator.
2. Click **Create bot** on the page to start designing your own chatbot.
3. Configure the bot settings with a bot name and a description.
4. Configure **Add methods** as start with an example.
5. Configure the bot languages settings with **Language details**, **Voice** and **Confidence score threshold**.
6. Add **Language details** and **Voice**.
7. On the lower-right corner, click **Test**.
8. Navigate to the **Bot Conversation** page to see if the whole bot workflow works.  

### 4.4 Designing Chatbot Context From Scratch in Your Browser {#design-chatbot-context}

1. Go to the **ChatbotConsole** page in your browser as the administrator.
2. Click **Create bot** on the page to start designing your own chatbot.

{{< figure src="/attachments/appstore/app-services/chatbot/create-bot.png" >}}

3. Configure the bot settings with a bot name and a description.

{{< figure src="/attachments/appstore/app-services/chatbot/bot-configuration.png" >}}

4. Configure the bot languages settings with **Language details**, **Voice** and **Confidence score threshold**.

{{< figure src="/attachments/appstore/app-services/chatbot/add-language.png" >}}

6. Configure the user intent with **Intent name** and **Description** in **Add intent** page to fullfill your goals during the design, you can also check the intent design in **Conversation flow** block.

{{< figure src="/attachments/appstore/app-services/chatbot/add-intent.png" >}}

7. In order to design a complete conversation flow, you need to add **Sample utterance**, **Confirmation prompt**, and **Closing response** in the current page.
8. Fill **Intent details** with Intent name and Description.
9. Add **Sample utterances** as initial request, you can add more than one options in here.
10. Add **Slots** with **Name**, **Slot type** and **Prompts** to define the values that users can supply for your intent variables.
11. Add **Confirmation prompt** with **Message** and **Variations** in **Message group** to confirm the user intent.
12. Add **Declination response** with **Message** and **Variations** in **Message group** to confirm the user intent when say No to the confirmation prompt.
13. Add **Closing response** with **Message** and **Variations** in **Message group** to sent response to the user after the intent is fulfilled.
14. Click **Test** to run chatbot and navigate to the **Bot Conversation** page to see if the whole bot workflow works.  

### 4.5 Adding Intent Actions to Your Defined Chatbot

1. In your app module's domain model, create an entity and name it *BotContext*, with the following attributes:
   * `OrderFlowerIntent` (String)
   * `Error` (String)

2. Create a microflow as follows:

    1. Name the microflow *CreateBotContext*.

    2. Add a **Java action call** activity to the microflow, and configure the settings as follows:

       1. Double-click the **Java action call** activity  and set the **Java action** to **CreateBotContext** from the **Chatbot** > **USE_ME** folder.
       2. For the **Entity type**, select **BotContext** from the **Chatbot** module.
       3. For **Bot name**, select **MendixSampleBot** from the bot designed in the **Chatbot Console** page.
       4. Click **OK** to save the changes.

    3. Add a **Change object** activity to the microflow, and configure the settings as follows:

       1. Set  **Object** as **botContext** from the Java action call activity.
       2. Set the member **OrderFlowerIntent** to **OrderFlowers**.
       3. Set the member **LocaleId** to **Chatbot.Locale.en_US**.
       4. Click **OK** to save the changes.
       5. Right-click the activity and select **Set $botContext as return value** in the pop-up menu.

       {{< figure src="/attachments/appstore/app-services/chatbot/createbotcontext-microflow.png" >}}

3. Create another microflow as follows:

    1. Name the microflow *OrderFlower*.

    2. Right click to add a **Parameter**.

    3. Double-click the **Parameter** to set **BotContext** as **Data type** of output.

    4. Add a **Microflow call** activity, and configure the settings as follows:

       1. Set **Microflow** to **GetSlotArgument** from **Chatbot** module.
       2. Change the parameter **botContext** to **$botContext**, and **slotName** to **FlowerType**.
       3. Click **OK** to save the changes.

    5. Add the second **Microflow call** activity, and configure the settings as follows:

       1. Set **Microflow** to **GetSlotArgument** from Chatbot module.
       2. Change the parameter **botContext** to **$botContext**, and **slotName** to **PickupTime**.
       3. Click **OK** to save the changes.

    6. Add the third **Microflow call** activity, and configure the settings as follows:

       1. Set **Microflow** to **GetSlotArgument** from **Chatbot** module.
       2. Change the parameter **botContext** to **$botContext**, and **slotName** as **PickupDate**.
       3. Click **OK** to save the changes.

    7. Add a **Log message** activity to print all the informations.

       {{< figure src="/attachments/appstore/app-services/chatbot/orderflower-microflow.png" >}}

4. Create a new blank page and name it **Chatbot**.

5. Add a **Data View** widget in the page, and configure the settings as follows:

    1. Double-click the **Data View** widget to open the **Edit Data View** dialog box.

    2. Set the **Type** of **Data source** to **Microflow**.

    3. Set the **Microflow** to **CreateBotContext** that you just created.

6. Inside the **Data View** widget, add a **Chatbot** widget, and configure the settings as follows:

    1. Double-click the **Chatbot** widget to open the **Edit Chatbot** dialog box:
    2. On the **Context** tab, click **New** to add a new intent action.
    3. In the **Edit Intent Actions Item** dialog box, set **Name** to **OrderFlowerIntent**, which was created in the **Chatbot Console** page. 
    4. Set **Fulfilment action** to **Call a microflow**.
    5. Set the **Microflow** to the **Orderflow** microflow that you created.
    6. Click **OK** to save the changes.
    7. For **Bot Context Uid**, select **Uid** from the object created by data view.
    8. For **Locale**, select **LocaleId** from the object created by data view. 
    9. Click **OK** to save the changes.

7. Run your app locally. 

8. Navigate to the bot conversation page and you can start your conversation with chatbot.

### 4.6 Handling Chatbot Events

Multiple events can be picked up by the [Chatbot](#chatbot) widget and can be used to build your customized event handling logic.

There are two main types of events that can be picked up by the **Chatbot** widget, which are described in the sections below.

#### 4.6.1 On Error {#on-error}

By binding an attribute to the **Error** event, the app can pick up an error raised by the back-end service.

**Error** takes a String attribute. You can define an attribute and bind this attribute to **Error**. In a running app, when chatbot transcription fails, an error event will be triggered, and the error information will be populated to this **Error** attribute. The app can obtain this error message and trigger a custom action. You can select the custom **Action** from a list of actions.

{{< figure src="/attachments/appstore/app-services/chatbot/chatbot-onerror-sample.png" >}} 

For example, you can set up the **Action** to make the app show a pop-up window to show error details to users.

{{< figure src="/attachments/appstore/app-services/chatbot/chatbot-event-onerror.jpg" >}}

#### 4.6.2 On Ready {#on-ready}

By binding an attribute to the **Is ready** event, the app will trigger an action event when the bot is ready.

**Is ready** takes a String attribute. You can define an attribute and bind this attribute to **Is ready**. In an app, when chatbot is running, a flag indicates if the current bot is ready for conversing. The app can trigger an action when the bot is ready. You can select the custom **Action** from a list of actions.

### 4.7 Checking Statistics on the Usage Dashboard {#check-usage}

The **Usage** dashboard shows the real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and then do as follows:
   * If you have a trial, click [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) on the left navigation menu. This page shows all the products that you have trials for.
   * If you have a subscription, click [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Click **Chatbot** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard). On the **Overview** tab, the **Usage** dashboard shows the real-time statistics.
