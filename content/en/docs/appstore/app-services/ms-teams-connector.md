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

### 1.3 Prerequisites

* Your organization should allow you to use Webhooks in Microsoft Teams.
* The app service can only be used with Studio Pro 9 versions starting from [9.12.1](/releasenotes/studio-pro/9.12/).

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

{{% alert type="info" %}}We recommend that you **Edit Instance Name** for your subscription on the service management dashboard. This is a good practice if you have purchased multiple subscriptions of a service.{{% /alert %}}

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

#### 4.2.1 Using Microflow

You can use the **Send Message to Webhook** activity in a microflow to send messages to a Teams channel:

1.  From the toolbox, drag and drop the **Send Message to Webhook** activity into your microflow.
    
    The following representative microflow contains activities with the required attributes, the **Send Message to Webhook** activity, and a placeholder to capture the returned object.
    
    {{< figure src="/attachments/appstore/app-services/ms-teams-connector/connector-in-microflow.png" >}}
    
2. Double-click the **Send Message to Webhook** activity to open the **Send Message to Webhook** dialog box.

3.  Specify the following settings with expression syntax:
    1. Set the **webhookId** parameter to the **Webhook ID** generated in the Communication Services Console.
    2.  For **Message type**, select **Text** or **Card** from the drop-down list:
        
        *  If you want to send a message as plain text or in HTML or markdown formatting, select **Text**.
        
            {{% alert type="info" %}}Fore more information about HTML and markdown tags supported by Microsoft Teams, see [*Format Cards in Microsoft Teams*](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format).{{% /alert %}}
          
        * If you want to use an actionable message card as a message, select **Card**.
        
            {{% alert type="info" %}}Fore more information about message cards, see [Building a Message Card](#build-message-card).{{% /alert %}}
       
    3.  For the **Message** parameter, set up the message content in the String format. Below is an example:
       
        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/html-message.png" >}}
        The example above will render in the Microsoft Teams channel like this:

        {{< figure src="/attachments/appstore/app-services/ms-teams-connector/html-output.png" >}}
       
    4. Click **OK** to save the changes and close the dialog box.

{{% alert type="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

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
    
       {{% alert type="info" %}}For more information about the design of a message card, see [*Design guidelines*](https://docs.microsoft.com/en-us/outlook/actionable-messages/message-card-reference#design-guidelines). {{% /alert %}}
       
### 4.2 Sending Message using Microsoft credentials
 
   Alongside **Send Message to Webhook**,a drag-and-drop activity with name **Send Message** will be present in the microflow toolbox.
   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/activitiesInToolbox.png" >}}
   

Prerequisite :
   1) Deeplink (Available in the Mendix app store)
   2) Microsoft Account in Azure Active Directory 

Limitation:
    1) Supports cards designed using HTML and plain text

There are few configurations required to be performed which are explained in the following sections.

#### 4.2.1 Registering your application in the Azure Portal

1. Login to [Azure Portal](https://portal.azure.com/#home) with your company account.    
2. If your account gives you access to more than one tenant, select your account in the top right corner, and set your portal session to the Azure AD tenant of your company.
{{% alert type="info" %}} Note : If you get Access Denied, contact your IT team.{{% /alert %}}

3. In the left-hand navigation pane, select the Azure Active Directory service, and then select App registrations > New registration.                                   

4. When the Register an application page appears, enter your application's registration information:

    i) Name - Enter a meaningful application name for the app.

   ii) Supported account types : Select Accounts in this organizational directory only.

   iii) Redirect URI : Select the type of app to Web  and then enter the redirect URI (or reply URL) for your application.
         
         Note: Link must be set as per deep link configuration. Format: (base URL of your app)/link/(deeplink_name)
         Example : https://contosoapp1/link/auth
   
         {{% alert type="info" %}} Make sure you make a note of this URI as it will be needed as a configuration to use the activtiy{{% /alert %}}       

 5. When finished, select Register.
   
   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/clickOnRegisterButton.png" >}}
   
 6. Azure AD assigns a unique application (client) ID to your app, and you're taken to your application's Overview page.
   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/overviewPage.png" >}}
   
   {{% alert type="info" %}} Make note of the client Id and tenant Id visible in above overview page.{{% /alert %}}
   
 7. In the overview page, click on **Certificates and secrets** under the Manage section. 
 8. To configure a new clinet secret, click on **New client secret**.
 
         {{% alert type="info" %}}Client secret values cannot be viewed after leaving the page, except for immediately after creation. Be sure to save the secret when created before leaving the page. This value will be required as a configuration item.{{% /alert %}}
         
      To know more about registering an application in Azure portal, you can go through [Register an application with the Microsoft identity platform](https://docs.microsoft.com/en-us/graph/auth-register-app-v2))
   
         
#### 4.2.2 Configuring Constants
 1) Inside the configurations folder, configure the LicenseSecret and LicenseKey following the same steps as in section 3 if not already done.

         {{% alert type="info" %}} The keys needs to be configured only once. You can use both the activities using the these keys {{% /alert %}}
         
 2) Navigate to **Azure App** folder inside the **Configurations folder**.
 3) Configure the values of constants AzureClientId,AzureClientSecret,AzureTenantId and RedirectURI with the values used and generated while registering application on Azure portal.
 4) The constant **DeepLinkName** must contain the text after last slash in the RedirectURI value.
    Example : If your RedirectURI is  https://contosoapp1/link/auth then the **DeepLinkName** will be **auth**


#### 4.2.3 Configuring Microflows

 1. Download the deeplink module from markeplace.
 2. Configure the **After startup** in settings -> Runtime to the **StartupMicroflow** provided in the MicrosoftTeamsConnector module.
      {{< figure src="/attachments/appstore/app-services/ms-teams-connector/configureStartupMicroflow.png" >}}
 3. Go to the App's Navigation settings. Configure the **Default home page** option to execute a microflow that will display your application's home page.
 4. The activity that shows the home page must be preceded by a microflow call to **Configure_HomePage_Prerequisite** available in the connector module.
 {{< figure src="/attachments/appstore/app-services/ms-teams-connector/BeforeHomepageMicroflow.png" >}}
 
 #### 4.2.4 Getting the channel link
   1. One of the inputs required for the **Send Message** actvity is the channelLink.
   2. To get this link for your channel, right cick on the three ellipses on the channel name and click on **Get link to channel**. 
   {{< figure src="/attachments/appstore/app-services/ms-teams-connector/channelLink.png" >}}   
   3. This will popup a window containing the channelLink.
 {{< figure src="/attachments/appstore/app-services/ms-teams-connector/linkPopup.png" >}}

#### 4.2.5 Configuring Send Message Activity and SignInMicroflow

1.  From the toolbox, drag and drop the **Send Message** activity into your microflow.
    
2. Double-click the **Send Message** activity to open the **Send Message** dialog box.

3.  Specify the following settings with expression syntax:
    1. Set the **channelLink** parameter with the channelLink obtained from Microsoft Teams.
    2.  For **Message type**, select **Text** or **Card** using the **Message_Types** enumeration provided in the module.
         {{< figure src="/attachments/appstore/app-services/ms-teams-connector/selectingMessageType.png" >}}
              
        *  If you want to send a message as plain text or in HTML or markdown formatting, select **Text**.
        
            {{% alert type="info" %}}Fore more information about HTML and markdown tags supported by Microsoft Teams, see [*Format Cards in Microsoft Teams*](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format).{{% /alert %}}
          
        *  If you want to send a card designed using HTML nd text, select **Card**.
        
            {{% alert type="info" %}}Fore more information on designing message cards , see [Building a Message Card using HTML](https://docs.microsoft.com/en-us/graph/api/chatmessage-post?view=graph-rest-beta&tabs=http#example-3-send-message-that-contains-cards).{{% /alert %}}
       
    3.  For the **Message** parameter, set up the message content as a String value. 
     
    4. Click **OK** to save the changes and close the dialog box.

{{% alert type="warning" %}}All parameters are mandatory. Setting any value to be empty or **none** will cause an error.{{% /alert %}}

4. Once this activity is triggered, it checks whether the user is logged in. If already logged in, the activity return a true in the MessageSent attribute of 
   **SendMessageReponse** object which means the message was successfully sent else it returns false. If false is returned, you need to execute the **SignIn     Microflow** to log in using your credentials.

{{% alert type="info" %}} The **Message** attribute of **SendMessageReponse** object will contain the respective response message. {{% /alert %}}

Below microflow describes one of the approach to use the **SignIn Microflow** effectively. Introduce a decision activity after SendMessage activity that would check the SentMessage value. If false, then execute the **SignIn Microflow**.

{{< figure src="/attachments/appstore/app-services/ms-teams-connector/usingSignInMicroflow.png" >}}

{{% alert type="info" %}} Once you are logged in by using the **SignIn Microflow**, you need to call this  microflow again to send the message.{{% /alert %}}




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
