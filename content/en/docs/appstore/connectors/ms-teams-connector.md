---
title: "Microsoft Teams"
url: /appstore/connectors/ms-teams-connector/
category: "Connectors"
description: "Describes the configuration and usage of the Microsoft Teams Connector, which enables sending messages and actionable message cards to a Microsoft Teams channel automatically."
tags: ["marketplace", "marketplace component", "connector", "microsoft", "microsoft teams", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert color="info" %}}This connector is deprecated.{{% /alert %}}

## 1 Introduction

The [Microsoft Teams](https://marketplace.mendix.com/link/component/118391) connector enables sending messages and actionable message cards to a Microsoft Teams channel automatically. You can add and configure the connector in a microflow. Once the microflow that uses the connector is triggered, your app sends out the message to the Microsoft Teams channel. 

This connector is an [add-on module](/refguide/consume-add-on-modules-and-solutions/).

### 1.1 Typical Use Cases

* Send messages to pre-configured channels in Microsoft Teams
* Let your Mendix app send an automated notification to a pre-configured channel, when an event occurs in your Mendix application (for example, your Mendix app can automatically send a message to a pre-configured channel whenever a ticket is raised on the support portal application)
* Let your Mendix app send an automated message to a pre-configured channel to trigger users to perform an action (for example, your Mendix app can automatically ask users to create a Jira ticket by sending them a message in a pre-configured channel)

### 1.2 Features

* Send HTML, markdown, or plain text messages
* Send Microsoft Teams actionable message cards
* Send message using Microsoft credentials

### 1.3 Limitation

* Supports only custom-made cards designed using HTML and plain text

### 1.4 Prerequisites

* Your organization should allow you to use Webhooks in Microsoft Teams.
* The connector can only be used with Studio Pro [9.16.0](/releasenotes/studio-pro/9.16/#9160) and above.
* You have installed the [Deep link](https://marketplace.mendix.com/link/component/43) module in your app.
* You have a Microsoft Account in Azure Active Directory.

## 2 Installation

Follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro* to import the Microsoft Teams Connector into your app. After the connector is installed, you can see it in the **Add-ons** folder in the **App Explorer** and in the **Microsoft Teams Connector** category in the **Toolbox**.

{{< figure src="/attachments/appstore/connectors/ms-teams-connector/connector-in-protected-module.png" >}}

{{% alert color="warning" %}}The app cannot contain different versions of the Microsoft Teams Connector at the same time.{{% /alert %}}        

## 3 Usage

### 3.1 Generating the Webhook URL {#generate-webhook-url}

1. In Microsoft Teams, go to your Teams channel.
2. Click the ellipsis (**...**) icon of your Teams channel to open the pop-up menu.
3. Click **Connectors** to open the **Incoming Webhook** page.

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/connectors.png" >}}

4. Enter the details for your Webhook and copy the connector URL as shown in the image below.

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/configure-connectors.png" >}}

5. Save the URL for later use.
6. Click **Save** to save the changes and close the page.

### 3.2 Sending Messages to a Teams Channel

#### 3.2.1 Configuring the Send Message to Webhook Activity

You can use the **Send Message to Webhook** activity in a microflow to send messages to a Teams channel:

1. From the toolbox, drag the **Send Message to Webhook** activity into your microflow.

    The following representative microflow contains activities with the required attributes, the **Send Message to Webhook** activity, and a placeholder to capture the returned object.

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/connector-in-microflow.png" >}}

2. Double-click the **Send Message to Webhook** activity to open the **Send Message to Webhook** dialog box.
3. Specify the following settings with expression syntax:

    {{% alert color="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/send-message-to-webhook.png" >}}

    1. Set the **Webhook URL** parameter to the Webhook URL that was [generated](#generate-webhook-url).
    2. For **Message type**, select **Text** or **Card** from the drop-down list:

        * If you want to send a message as plain text or in HTML or markdown formatting, select **Text**.

            {{% alert color="info" %}}For more information about HTML and markdown tags supported by Microsoft Teams, see [Format Cards in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format).{{% /alert %}}

        * If you want to use an actionable message card as a message, select **Card**.

            {{% alert color="info" %}}For more information about message cards, see [Building a Message Card](#build-message-card).{{% /alert %}}

    3. For the **Message** parameter, set up the message content in the String format. The image below shows an example:

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/html-message.png" >}}

        The example above will render in the Microsoft Teams channel like this:

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/html-output.png" >}}

    4. Click **OK** to save the changes and close the dialog box.

After the **Send Message to Webhook** activity is configured, once the microflow that uses this activity is triggered, the app sends out the message to the Microsoft Teams channel. When the message is sent successfully, the activity returns a **SendMessageReponse** object. The **SendMessageReponse** entity for this object comes with the module and is pre-defined:

{{< figure src="/attachments/appstore/connectors/ms-teams-connector/send-message-response-entity.png" >}}

* The **Message** attribute contains the respective response message.
* If the message is successfully sent, the value of the **SentMessage** attribute is `true`.
* If the message could not be sent, the value of the **SentMessage** attribute is `false`.

#### 3.2.2 Building a Message Card {#build-message-card}

Microsoft Teams supports [actionable message cards](https://docs.microsoft.com/en-us/outlook/actionable-messages/message-card-reference). You can build a message card and send it to a Microsoft Teams channel using the Microsoft Teams connector. To build a message card, perform the following steps:

1. Go to the [Card Playground](https://messagecardplayground.azurewebsites.net/). This playground contains sample message cards. You can modify the JSON for any sample message card and view the corresponding generated message card on the fly.
2. Edit a message card sample as follows:

    1. At the upper-left corner of the page, click **Select Sample** to open the drop-down list. 
    2. Below the **Legacy MesssageCard samples** category, select a sample message card.

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/sample-message-cards.png" >}}

        {{% alert color="info" %}}Do not select any sample card above the **Legacy MessageCard samples**. They are adaptive cards, which do not work with the Microsoft Teams connector.{{% /alert %}}

    3. Edit the sample message card. The preview of your message card is on the right side of the page. 

        Below is the basic structure of a message card and the corresponding fields in JSON:

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/card-json-structure.png" >}}

        The example above with **Add a comment action** expanded looks like this:

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/add-a-comment-expanded.png" >}}

        {{% alert color="info" %}}For more information about the design of a message card, see [Design guidelines](https://docs.microsoft.com/en-us/outlook/actionable-messages/message-card-reference#design-guidelines). {{% /alert %}}

### 3.3 Sending Messages Using Microsoft Credentials

Alongside the **Send Message to Webhook** activity, you can also find the **Send Message** activity in the microflow toolbox. You can use the **Send Message** activity to send messages with Microflow credentials.

{{< figure src="/attachments/appstore/connectors/ms-teams-connector/activities-in-toolbox.png" >}}

#### 3.3.1 Registering Your Application on the Microsoft Azure Portal{#register-application-on-azure-portal}

1. Log in to the [Microsoft Azure](https://portal.azure.com/#home) portal with your company account.
2. If your account gives you access to more than one tenant, select your account on the upper-right corner, and set your portal session to the Azure AD tenant of your company.

    {{% alert color="info" %}}If your access is denied, contact your IT team.{{% /alert %}}

3. On the left-hand navigation pane, select **Azure Active Directory**, and then select **App registrations**. The **App registrations** page opens.
4. Click **New registration**.
5. When the **Register an application** page opens, do as follows:

    1. For **Name**, enter a meaningful application name for the app.
    2. For **Supported account types**, select **Accounts in this organizational directory only**.
    3. For **Redirect URI**, select **Web** in the drop-down list first, and then enter the redirect URI (or reply URL) for your application in the text box. Use this format: `[base URL of your app]/link/[deeplink name]`, for example, https://contosoapp1/link/auth. This link must be set as per deep link configuration.
    4. Make a note of the URI that you entered in the step above, as you will need it later for configuration.
    5. Select **Register** to register the new registration.

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/register-an-application.png" >}}

        Azure AD assigns a unique application (client) ID to your app. An overview page for your application opens.

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/app-overview.png" >}}

6. Make a note of the **Application (client) ID** and the **Directory (tenant) ID** on the overview page.
7. On the left-side menu, click **Certificates and secrets** under the **Manage** section.
8. To configure a new client secret, click **New client secret**.
9. Make a note of the client secret that you created before you leave the page. 

    {{% alert color="warning" %}}Once you leave the page, you cannot view the client secret anymore. You will need this value for configuration later.{{% /alert %}}

    {{% alert color="info" %}}For more information bout registering an application in Azure portal, see [Register an application with the Microsoft identity platform](https://docs.microsoft.com/en-us/graph/auth-register-app-v2)).{{% /alert %}}

#### 3.3.2 Configuring Constants

1. Go to **Azure App** folder inside the **Configurations** folder.
2. Configure the values of constants **AzureClientId**, **AzureClientSecret**, **AzureTenantId** and **RedirectURI** with the values that were used and generated when you [register the application on the Microsoft Azure portal](#register-application-on-azure-portal).
3. Make sure that the constant **DeepLinkName** contains the text after the last slash in the **RedirectURI** value. For example, if your **RedirectURI** is  `https://contosoapp1/link/auth`, then the **DeepLinkName** should be `auth`.

#### 3.3.3 Configuring the Microflows

1. Go to the Marketplace and log in with your Mendix account.
2. Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to install the [Deep Link](https://marketplace.mendix.com/link/component/43) module to your app.
3. Give your user role access to the Deep Link module roles.
4. In the **App Explorer**, click **Settings** to open the **App Settings** dialog box.
5. Go to the **Runtime** tab, and set **After startup** to the **StartupMicroflow** from the **MicrosoftTeamsConnector** module.

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/after-startup.png" >}}

6. In the **App Explorer**, click **Navigation** to open the **Navigation** page.
7. Configure the **Default home page** option to execute a microflow that will display your application's home page. The activity that shows the home page must be preceded by a microflow call named **Configure_HomePage_Prerequisite**, which is available in the **MicrosoftTeamsConnector** module.

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/configure-home-page-microflow.png" >}}

#### 3.3.4 Obtaining the Channel Link on Microsoft Teams{#obtain-channel-link}

One of the input items required for the **Send Message** activity is the channel link. To get this link for your channel, do as follows:

1. Open Microsoft Teams.
2. Right click **...** on the channel name.
3. Click **Get link to channel**. 

{{< figure src="/attachments/appstore/connectors/ms-teams-connector/get-channel-link.png" >}}

A pop-up window opens and shows containing the channel link.

{{< figure src="/attachments/appstore/connectors/ms-teams-connector/channel-link.png" >}}

#### 3.3.5 Configuring the Send Message and SignInMicroflow Activities

1. From the microflow toolbox, drag the **Send Message** activity into your microflow.
2. Double-click the **Send Message** activity to open the **Send Message** dialog box.
3. Specify the following settings with expression syntax:

    {{% alert color="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

    1. Set the **channelLink** parameter with the [channel link that you obtained](#obtain-channel-link) from Microsoft Teams.
    2. For **Message type**, select **Text** or **Card** using the Enumeration **Message_Types** from the **MicrosoftTeamsConnector** module.

        {{< figure src="/attachments/appstore/connectors/ms-teams-connector/message-type.png" >}}  

        * If you want to send a message as plain text or in HTML or markdown formatting, select **Text**.

            {{% alert color="info" %}}For more information about HTML and markdown tags supported by Microsoft Teams, see [Format Cards in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format).{{% /alert %}}

        * If you want to send a card designed using HTML and text, select **Card**.

            {{% alert color="info" %}}For more information on designing message cards, see [Building a Message Card using HTML](https://docs.microsoft.com/en-us/graph/api/chatmessage-post?view=graph-rest-beta&tabs=http#example-3-send-message-that-contains-cards).{{% /alert %}}

    3. For the **Message** parameter, set up the message content as a String value. 
    4. Click **OK** to save the changes and close the dialog box.

        {{% alert color="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

After the **Send Message** activity is configured, once triggered, the activity checks whether the user is logged in. If the user is already logged in, the activity returns a **SendMessageReponse** object. The **SendMessageReponse** entity for this object comes with the module and is pre-defined:

* The **Message** attribute contains the respective response message.
* If the message is successfully sent, the value of the **SendMessageReponse** attribute is `true`.
* If the message could not be sent, the value of the **SendMessageReponse** attribute is `false`.  Then you should execute the **SignIn Microflow** to log in using your Microsoft credentials. The microflow below shows one of the approaches to use the **SignIn Microflow** effectively. Introduce a decision activity after **SendMessage** activity that checks the **SentMessage** attribute value. If the value is false, then execute the **SignIn Microflow** activity.

    {{< figure src="/attachments/appstore/connectors/ms-teams-connector/sign-in-microflow.png" >}}

    {{% alert color="info" %}}Once you are logged in by using the **SignInMicroflow** activity, you need to call this microflow again to send the message.{{% /alert %}}
