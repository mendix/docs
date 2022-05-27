---
title: "Microsoft Teams Connector"
url: /appstore/app-services/ms-teams-connector/
category: "App Services"
description: "This document describes the configuration and usage of the Microsoft Teams Connector app service, which enables sending messages and actionable message cards to a Microsoft Teams channel automatically."
tags: ["marketplace", "marketplace component", "app service", "microsoft", "microsoft teams", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction
The [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391) app service enables sending messages and actionable message cards to a Microsoft Teams channel automatically. You can add and configure the app service in a microflow. Once the microflow that uses the app service is triggered, your app asynchronously sends out the message to the Microsoft Teams channel. 

This app service is an [add-on module](/refguide/consume-add-on-modules-and-solutions/).


### 1.1 Typical Use Cases

* Send messages to pre-configured channels in Microsoft Teams
* Let your Mendix app send an automated notification to a pre-configured channel, when an event occurs in your Mendix application (for example, your Mendix app can automatically send a message to a pre-configured channel whenever a ticket is raised on the support portal application)
* Let your Mendix app send an automated message to a pre-configured channel to trigger users to perform an action (for example, your Mendix app can automatically ask users to create a Jira ticket by sending them a message in a pre-configured channel)

### 1.2 Features

* Send HTML, markdown, or plain text messages
* Send Microsoft Teams actionable message cards
* Send message using microsoft credentials

### 1.3 Limitation

* Supports only custom-made cards designed using HTML and plain text

### 1.4 Prerequisites

* Your organization should allow you to use Webhooks in Microsoft Teams.
* The app service can only be used with Studio Pro 9 versions starting from [9.12.1](/releasenotes/studio-pro/9.12/).
* You have installed the [Deep link](https://marketplace.mendix.com/link/component/43) module in your app.
* You have a Microsoft Account in Azure Active Directory.

## 2 Installation

### 2.1  Obtaining the LicenseSecret and the LicenseKey {#obtain-keys}

Microsoft Teams Connector is a premium Mendix product that is subject to a purchase and subscription. To successfully deploy an app that uses Microsoft Teams Connector, you need to start a trial or a subscription to get a valid combination of **LicenseSecret** and **LicenseKey**.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company one-month access to the app service. To start a trial, perform the following steps:

1. Go to the [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391) page in the Marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the app service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the app service is ready to be used.
6. Click the link in the email to go to the [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) page and log in there. This page shows all the products that you have trials for.
7. Click **Microsoft Teams Connector** to open the service management dashboard.
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create the **LicenseSecret** and the **LicenseKey**. Save them somewhere safe. Later you will need to [configure the LicenseSecret and the LicenseKey](/appstore/app-services/intelligent-document-service/#configure-keys) in your app.
   
    {{< figure src="/attachments/appstore/app-services/ms-teams-connector/binding-key-generation.png" >}}

#### 2.1.2 Starting a Subscription

1. Go to the [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391) page in the marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in **Technical Owner** information (**First Name**, **Last Name**, **Email Address**), billing account information, payments and other required information and then place the order. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Owner will receive an email that says the app service is ready to be used.
6. Click the link in the email to go to the [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **Microsoft Teams Connector** to open the service management dashboard.
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create the **LicenseSecret** and the **LicenseKey**. Save them somewhere safe. Later you will need to [configure the LicenseSecret and the LicenseKey](/appstore/app-services/intelligent-document-service/#configure-keys) in your app.

{{% alert type="info" %}}We recommend that you **Edit Instance Name** for your subscription on the service management dashboard. This is a good practice if you have purchased multiple subscriptions of a service. See the image below.{{% /alert %}}

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/edit-instance-name.png" >}}

### 2.2 Installing the Component in Your App

To download and install the Microsoft Teams Connector app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **Add-ons** folder in the **App Explorer** and in the **Microsoft Teams Connector** category in the **Toolbox**.

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/connector-in-protected-module.png" >}}

{{% alert type="warning" %}}The app cannot contain different versions of the Microsoft Teams Connector at the same time.{{% /alert %}}        

## 3 Configuring the LicenseSecret and the LicenseKey {#configure-keys}

Before you deploy an app, you should configure the binding keys in your app as follows:

1. In the **App Explorer**, go to **Settings**. The **App Settings** dialog box opens. 
2. On the **Configurations**, click **Edit**. The **Edit Configuration** dialog box opens.
3. Go to the **Constants** tab.
4. Click **New**. The **Select Constant** dialog box opens.
5.  Go to **MicrosoftTeamsConnectorModule** > **Configurations**. You can see **LicenseSecret** and **LicenseKey** are defined as constants. 

    {{< figure src="/attachments/appstore/app-services/ms-teams-connector/configuring-license-keys.png" >}}
    
6. Select **LicenseSecret**.
7. In the **New Constant Value** dialog box, enter the **Value** of the LicenseSecret you got.
8. Click **OK** to save the settings and closes the dialog box.
9. Perform steps 4 and 5 again.
10. Select **LicenseKey**.
11. In the **New Constant Value** dialog box, enter the **Value** of the LicenseKey you got.
12. Click **OK** to save the settings and closes the dialog box.
13. After you finish building the app, click **Run** to deploy your app to the cloud.

## 4 Usage

### 4.1 Configuring Webhooks in the Communication Services Console

1. In Microsoft Teams, [create a Webhook URL for the channel](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) to which you want to send messages. 
2. Log into the Marketplace.
3. Go to **My Marketplace** and then do as follows:

   * If you have a trial, click [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) on the left navigation menu. This page shows all the products that you have trials for.
   * If you have a subscription, click [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.

4. Click **Microsoft Teams Connector** to open the service management dashboard.
5. Click **Manage Instances**. You are redirected to the [Communication Services Console](https://communication-appservices.mendixcloud.com/login.html) login page.

6. Sign in to Communication Services Console using Mendix SSO.

   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/console-login-view.png" >}}

   The **Communication Services Console** shows all the communication services that you have subscribed.

7. Go to the **Microsoft Teams Connector** tab. 
8. Select the **Developer Instance** from the drop-down list against which you want to configure **Webhook URLs**. The **Add Webhook** button gets enabled.

   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/add-webhook-button-enabled.png" >}}

9. Click **Add Webhook**. The **Webhook Adder** dialog box opens. 

   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/webhook-adder-popup.png" >}}

10. Enter a **Webhook Name** for the Webhook.
11. Enter the **Webhook URL** which you configured for your Microsoft Teams Channel.
12. **Save** the changes. The Webhook is added to the list.

    {{< figure src="/attachments/appstore/app-services/ms-teams-connector/webhook-data-view.png" >}}

    The system automatically generates a unique **Webhook ID** for each **Webhook URL** you add. You will need to give **Webhook ID** as input to the **Microsoft Teams Connector** activity to send messages. 

    {{% alert type="info" %}}Each **Webhook URL** you add is counted as utilization towards the allocated app service quota. If a **Webhook URL** is incorrect, you can click the **...** icon and then edit or delete the Webhook.{{% /alert %}}     

13. Copy the **Webhook ID** as follows:
    1.  Hover over the **...** icon in the **Action** column to open the pop-up menu.
       
        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/edit-webhook-popup.png" >}}
        
    2.  Click **Copy**. A pop-up window opens and shows the name of the Webhook that you have copied.
       
        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/copied-popup.png" >}}
       
        {{% alert type="note" %}}You can select **Edit** or **Delete** to edit or delete a Webhook.{{% /alert %}}

### 4.2 Sending Message to a Teams Channel

#### 4.2.1 Configuring the end Message to Webhook Activity

You can use the **Send Message to Webhook** activity in a microflow to send messages to a Teams channel:

1. From the toolbox, drag the **Send Message to Webhook** activity into your microflow.

   The following representative microflow contains activities with the required attributes, the **Send Message to Webhook** activity, and a placeholder to capture the returned object.

   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/connector-in-microflow.png" >}}

2. Double-click the **Send Message to Webhook** activity to open the **Send Message to Webhook** dialog box.
3.  Specify the following settings with expression syntax:

    {{% alert type="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

    1. Set the **webhookId** parameter to the **Webhook ID** generated in the Communication Services Console.
    2.  For **Message type**, select **Text** or **Card** from the drop-down list:
       
        *  If you want to send a message as plain text or in HTML or markdown formatting, select **Text**.

            {{% alert type="info" %}}Fore more information about HTML and markdown tags supported by Microsoft Teams, see [Format Cards in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format).{{% /alert %}}
        
        * If you want to use an actionable message card as a message, select **Card**.
        
            {{% alert type="info" %}}Fore more information about message cards, see [Building a Message Card](#build-message-card).{{% /alert %}}
      
    3.  For the **Message** parameter, set up the message content in the String format. Below is an example:
      
        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/html-message.png" >}}

         The example above will render in the Microsoft Teams channel like this:

        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/html-output.png" >}}

    4.  Click **OK** to save the changes and close the dialog box.

After the **Send Message to Webhook** activity is configured, once the microflow that uses this activity is triggered, the app asynchronously sends out the message to the Microsoft Teams channel. When the message is sent successfully, the activity returns a **SendMessageReponse** object. The **SendMessageReponse** entity for this object comes with the module and is pre-defined:

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/send-message-response-entity.png" >}}

* If the message is successfully sent, the value of the **SentMessage** attribute is `true`.
* If the message could not be sent, the value of the **SentMessage** attribute is `false`.
* The **Message** attribute contains the respective response message.

#### 4.2.2 Building a Message Card {#build-message-card}

Microsoft Teams supports [actionable message cards](https://docs.microsoft.com/en-us/outlook/actionable-messages/message-card-reference). You can build a message card and send it to a Microsoft Teams channel using the Microsoft Teams connector. To build a message card, perform the following steps:

1. Go to the [Card Playground](https://messagecardplayground.azurewebsites.net/). This playground contains sample message cards. You can modify the JSON for any sample message card and view the corresponding generated message card on the fly.
2.  Edit a message card sample as follows:

    1. At the upper-right corner of the page, click **Select Sample** to open the drop-down list. 
    2. Below the **Legacy MesssageCard samples** category, select a sample message card.
    
       {{< figure src="/attachments/appstore/app-services/ms-teams-connector/sample-message-cards.png" >}}
    
       {{% alert type="info" %}}Do not select any sample card above the **Legacy MessageCard samples**. They are adaptive cards, which do not work with the Microsoft Teams connector.{{% /alert %}}
    
    3. Edit the sample message card. The preview of your message card is on the right side of the page. 

       Below is the basic structure of a message card and the corresponding fields in JSON:
    
       {{< figure src="/attachments/appstore/app-services/ms-teams-connector/card-json-structure.png" >}}
    
       The example above with **Add a comment action** expanded looks like this:

       {{< figure src="/attachments/appstore/app-services/ms-teams-connector/add-a-comment-expanded.png" >}}
    
       {{% alert type="info" %}}For more information about the design of a message card, see [Design guidelines](https://docs.microsoft.com/en-us/outlook/actionable-messages/message-card-reference#design-guidelines). {{% /alert %}}
       
### 4.3 Sending Message Using Microsoft Credentials

Alongside **Send Message to Webhook**, you can also find another activity with name **Send Message** in the microflow toolbox. You can use this activity to send messages with Microflow credentials.

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/activities-in-toolbox.png" >}}

#### 4.3.1 Registering Your Application on the Microsoft Azure Portal{#register-application-on-azure-portal}

1. Log in to the  [MicrosoftAzurel](https://portal.azure.com/#home) portal with your company account.
2. If your account gives you access to more than one tenant, select your account on the upper-right corner, and set your portal session to the Azure AD tenant of your company.

    {{% alert type="info" %}}If your access is denied, contact your IT team.{{% /alert %}}

3. On the left-hand navigation pane, select **Azure Active Directory**, and then select **App registrations**. The **App registrations** page opens.
4. Click **New registration**.
5. When the **Register an application** page opens, do as follows:

    1. For **Name**, enter a meaningful application name for the app.
    2. For **Supported account types**, select **Accounts in this organizational directory only**.
    3. For **Redirect URI**, select **Web** in the drop-down list first, and then enter the redirect URI (or reply URL) for your application in the text box. Use this format: `[base URL of your app]/link/[deeplink name]`, for example, https://contosoapp1/link/auth. This link must be set as per deep link configuration.
    4. Make a note of the URI that you entered in the step above, as you will need it later for configuration.
    5.  Select **Register** to register the new registration.

        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/register-an-application.png" >}}

     Azure AD assigns a unique application (client) ID to your app. An overview page for your application opens.

     {{< figure src="/attachments/appstore/app-services/ms-teams-connector/app-overview.png" >}}

6. Make a note of the **Application (client) ID** and the **Directory (tenant) ID** on this page.
7. Under the **Manage** section, Click **Certificates and secrets** . 
8. To configure a new client secret, click **New client secret**.
9. Make a note of the client secret that you created before you leave the page. Once you leave the page, you cannot view the client secret anymore. You will need this value for configuration later.

{{% alert type="info" %}}For more information bout registering an application in Azure portal, see [Register an application with the Microsoft identity platform](https://docs.microsoft.com/en-us/graph/auth-register-app-v2)).{{% /alert %}}

#### 4.3.2 Configuring Constants

1.  If you have not configured the LicenseSecret and the LicenseKey, [configure](#configure-keys) them.

    {{% alert type="info" %}}You only need to configure LicenseSecret and LicenseKey once. Once they are configured, you can use both the **Send Message** and Send **MessagetoWebhook** activities.{{% /alert %}}

2. Navigate to **Azure App** folder inside the **Configurations** folder.
3. Configure the values of constants **AzureClientId**, **AzureClientSecret**, **AzureTenantId** and **RedirectURI** with the values used and generated when you [register the application on the Microsoft Azure portal](#register-application-on-azure-portal).
4. Make sure that the constant **DeepLinkName** contains the text after the last slash in the **RedirectURI** value. For example, if your **RedirectURI** is  `https://contosoapp1/link/auth`, then the **DeepLinkName** should be `auth`.

#### 4.3.3 Configuring the Microflows

1. Go to the Marketplace and log in with your Mendix account.
2. Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to install the [Deep link](https://marketplace.mendix.com/link/component/43) module to your app.

3. Give your user role access to the deep link module roles.

4. In the **App Explorer**, click **Settings** to open the **App Settings** dialog box.

5.  Go to the **Runtime** tab, and set **After startup** to the **StartupMicroflow** provided in the **MicrosoftTeamsConnector** module.

    {{< figure src="/attachments/appstore/app-services/ms-teams-connector/after-startup.png" >}}

6. In the **App Explorer**, click **Navigation** to open the **Navigation** page.
7.  Configure the **Default home page** option to execute a microflow that will display your application's home page. The activity that shows the home page must be preceded by a microflow call named **Configure_HomePage_Prerequisite**, which is available in the **MicrosoftTeamsConnector** module.

    {{< figure src="/attachments/appstore/app-services/ms-teams-connector/configure-home-page-microflow.png" >}}

#### 4.3.4 Obtaining the Channel Link on Microsoft Teams{#obtain-channel-link}
One of the input items required for the **Send Message** activity is the channel link. 

To get this link for your channel, do as follows:

1. Open Microsoft Teams.
2. Right click **...** on the channel name.
3. Click **Get link to channel**. 

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/get-channel-link.png" >}}

A pop-up window opens and shows containing the channel link.

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/linkPopup.png" >}}

#### 4.3.5 Configuring the Send Message and SignInMicroflow Activities

1. From the microflow toolbox, drag the **Send Message** activity into your microflow.

2. Double-click the **Send Message** activity to open the **Send Message** dialog box.

3. Specify the following settings with expression syntax:

   {{% alert type="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

   1. Set the **channelLink** parameter with the [channel link that you obtained](#obtain-channel-link) from Microsoft Teams.
   2.  For **Message type**, select **Text** or **Card** using the **Message_Types** enumeration provided in the module.

       {{< figure src="/attachments/appstore/app-services/ms-teams-connector/message-type.png" >}}  

       *  If you want to send a message as plain text or in HTML or markdown formatting, select **Text**.

           {{% alert type="info" %}}Fore more information about HTML and markdown tags supported by Microsoft Teams, see [Format Cards in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format).{{% /alert %}}
       
       *  If you want to send a card designed using HTML and text, select **Card**.

           {{% alert type="info" %}}Fore more information on designing message cards, see [Building a Message Card using HTML](https://docs.microsoft.com/en-us/graph/api/chatmessage-post?view=graph-rest-beta&tabs=http#example-3-send-message-that-contains-cards).{{% /alert %}}

   3. For the **Message** parameter, set up the message content as a String value. 
   4.  Click **OK** to save the changes and close the dialog box.

       {{% alert type="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

After the **Send Message** activity is configured, once it is triggered, it checks whether the user is logged in. If the user is already logged in, the activity returns a **SendMessageReponse** object. The **SendMessageReponse** entity for this object comes with the module and is pre-defined:

* If the message is successfully sent, the value of the **SendMessageReponse** attribute is `true`.

* If the message could not be sent, the value of the **SendMessageReponse** attribute is `false`.  Then you should execute the **SignIn Microflow** to log in using your credentials. The microflow below shows one of the approaches to use the **SignIn Microflow** effectively. Introduce a decision activity after **SendMessage** activity that would check the **SentMessage** attribute value. If the value is false, then execute the **SignIn Microflow** activity.

  {{< figure src="/attachments/appstore/app-services/ms-teams-connector/sign-in-microflow.png" >}}

  {{% alert type="info" %}}Once you are logged in by using the **SignInMicroflow** activity, you need to call this microflow again to send the message.{{% /alert %}}

* The **Message** attribute contains the respective response message.

## 5 Checking Statistics Using the Usage Dashboard {#statistics}

The **Usage Dashboard** shows the real-time statistics about the usage of an app service. For the Microsoft Teams connector, perform the following steps to check the number of Microsoft Teams Webhooks usage:

1. Log into the Marketplace.
2. Go to **My Marketplace** and then do as follows:

   * If you have a trial, click [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) on the left navigation menu. This page shows all the products that you have trials for.
   * If you have a subscription, click [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Find **Microsoft Teams connector** in the list.
4. Click **Usage Dashboard** to see the following statistics:
   * **This Month** – shows usage statistics for the current month
   * **Last Month** – shows usage statistics for last month
   * **Total** – shows usage statistics from the start of the subscription date to today

## 6 Troubleshooting

### 6.1 License

When you get the following pop-up window, then your license is invalid. Check if the configuration of your [LicenseSecret and LicenseKey](#obtain-keys) is correct.

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/license-invalid-popup.png" >}}

### 6.2 Quota

When you get the following pop-up window, then your quota is used up. You can check your usage statistics on the [Usage dashboard](#statistics).

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/quota-exhausted-popup.png" >}}

### 6.3 Waiting Time for Using Webhook URLs

If the app deployed in the sandbox goes into the sleep mode, after the app resumes, you may have to wait up to five minutes before you can use the latest-configured Webhook URL.

Although an app deployed to the licensed node would never go into the sleep node, you still need to wait for five minutes before you can use each newly-configured Webhook URL for the first time.
