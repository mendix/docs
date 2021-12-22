---
title: "Microsoft Teams Connector"
category: "App Services"
description: " "
tags: ["marketplace", "marketplace component", "app service", "microsoft", "microsoft teams", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

{{% todo %}}[**Verify Marketplace Docs tabs**]{{% /todo %}}

The [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391) app service enables sending messages to a Microsoft Teams channel automatically. You can add and configure the app service in a microflow. Once the microflow that uses the app service is triggered, your app asynchronously sends out the message to the Microsoft Teams channel. 

This app service is an add-on module. For more information, see [Add-ons]().

{{% todo %}}[**Add link to the Add-ons doc**]{{% /todo %}}


### 1.1 Typical Use Cases
* Send messages to pre-configured channels in Microsoft Teams

* Let your Mendix app send automated notifications to pre-configured channels, when events occur in your Mendix application (example : your Mendix app can automatically send a message to a pre-configured channel whenever a ticket is raised on the support portal application)

* Let your Mendix app send automated messages to a pre-configured channel to trigger users to perform an action (example: your Mendix app can automatically ask users to create a Jira ticket by sending them a message in a pre-configured channel)


### 1.2 Limitations

* Currently, only text messages are supported

### 1.3 Prerequisites

The app service can only be used with Studio Pro 9 versions starting from [9.8](https://docs.mendix.com/releasenotes/studio-pro/9.8).
 {{% alert type="warning" %}}If your organization restricts use of **Webhooks** in Microsoft Teams,the Microsoft Teams Connector would not work.{{% /alert %}}
 
## 2 Installation

1. Go to the Marketplace and download the file *MSTeamsConnectorModule.mxmodule* for the [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391).

2.  To add the Microsoft Teams Connector to your app in Mendix Studio Pro, follow these steps:
    1. On the menu bar, go to **App** > **Show App Directory in Explorer**.
    2.  Check if a folder with the name **modules** is present in the directory. If not present, create a new folder with this name.
        ![](attachments/ms-teams-connector/modules-folder-in-file-explorer.png)
        
    3.  Copy the downloaded file *MSTeamsConnectorModule.mxmodule* into the **modules** folder. 
       
        {{% alert type="warning" %}}The app cannot contain different versions of the Microsoft Teams Connector at the same time.{{% /alert %}}

    4. In Studio Pro, go to **App** > **Synchronize App Directory**. 
    

After the synchronization is finished, you can find the app service in the **Protected modules** folder in the **App Explorer** and in the **Communication Services** category in the **Toolbox**. 

![](attachments/ms-teams-connector/connector_in_protected_module.png)

## 3 Configuration

Microsoft Teams Connector is a premium Mendix product that is subject to a purchase and subscription fee. To successfully deploy an app that uses Microsoft Teams Connector, you need to get a valid combination of **LicenseSecret** and **LicenseKey** and configure them as environment variables in the deployment setting.

### 3.1  Subscribing to Get LicenseSecret and LicenseKey {#key-generation}

1. On the [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391) page, click **Subscribe** to start a subscription or click **Try for Free** to start a trial.
2.  To start a subscription, fill in [Technical Contact](https://docs.mendix.com/developerportal/collaborate/app-roles#technical-contact) information (**First Name**, **Last Name**, **Email Address**), billing account information, and other required information and then place the order. The Technical Contact receives an order confirmation email. 

    For the trial, you do not need to fill in this information.

3. Click the link in the order confirmation email to go to the Marketplace [Subscriptions](/appstore/general/app-store-overview#subscriptions) page and log in there. The **Subscriptions** page gives an overview of all the subscriptions of your organization.
4. Click **Microsoft Teams Connector** to open the [service management dashboard](/appstore/general/app-store-overview#service-management-dashboard).
5. Click **Create Binding Keys**.
6. Enter a meaningful name for the binding keys. Make sure that the name includes the name of the app which uses Microsoft Teams Connector.
7.  Click **Create Keys** to generate the **LicenseSecret** and **LicenseKey**. 
    ![](attachments/ms-teams-connector/binding-key-generation.png)

8. **Copy** the **LicenseSecret** and **LicenseKey**. You will use them later for app deployment.

### 3.2 Configuring LicenseSecret and LicenseKey for App Deployment

1. In the **App Explorer**, go to **Settings**. The **App Settings** dialog box opens. 
2. On the **Configurations**, click **Edit**. The **Edit Configuration** dialog box opens.
3. Go to the **Constants** tab.
4. Click **New**. The **Select Constant** dialog box opens.
5.  Go to **MSTeamsConnectorModule** > **Configurations**. You can see **LicenseSecret** and **LicenseKey** are defined as constants. 
    ![](attachments/ms-teams-connector/configuring-license-keys.png)
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
1. In Microsoft Teams, [create a Webhook URL for the channel](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/site-reliability-ops/task/create-webhook-url-channel-ms-teams.html) to which you want to send messages.
 
2. {% todo %}}How to navigate/link to the communication services console{{% /todo %}}     
    
3. Sign in to **Communication Services Console** using Mendix SSO.
    ![](attachments/ms-teams-connector/communication_console/console_login_view.png)
    
4. Once you login, you will able to view the Microsoft Teams Connector tab on top along with other communication services that you have subscribed.
    
5. Click on Microsoft Teams Connector tab.
    ![](attachments/ms-teams-connector/communication_console/console_after_login_view.png)
    
6. You can perform following activities here:    

    #### 6.1 Select an instance from **Developer Instance** dropdown.
        1. Select the instance in the drop down against which you want to configure **Webhook Urls**.        
        {{% todo %}}How the user can know about the instance he has subscribed is under discussion{{% /todo %}}
         
    #### 6.2 Add a **Webhook Url**
        1. After selecting an instance in dropdown, **Add Webhook** button would get enabled.
            ![](attachments/ms-teams-connector/communication_console/console_after_login_view.png)
        
        2. Click on **Add Webhook** button.
        
        3. A **Webhook Adder** popup will appear. 
            ![](attachments/ms-teams-connector/communication_console/webhook_adder_popup.png)
            
        4.  In the **Webhook Name** tab, enter a meaningful name for your Webhook Url.
        
        5.  In the **Webhook URL** tab, enter the **Webhook Url** which you configured for your Microsoft Teams Channel.

        6.  Click on **Save** to close the popup.
        
        7. You can now view the added Webhooks on the same console page.A unique **Webhook ID** for each **Webhook Url** you add will be automatically 
           generated by the system.
           
           ![](attachments/ms-teams-connector/communication_console/webhook_data_view.png)
           
           {{% alert type="info" %}}This **Webhook ID** needs to given as input to the Microsoft Teams Connector activity to send message {{% /alert %}}
        
        8.  If your license is invald or quota is exhausted, following popups will appear respectively to inform the same.
        
            8.1 License is Invalid.
                ![](attachments/ms-teams-connector/communication_console/license_invalid_popup.png)
                
            8.2 Quota is exhausted.    
                 ![](attachments/ms-teams-connector/communication_console/quota_exhausted_popup.png)

    
    #### 6.3 Edit and Delete a Webhook
        1. You can edit **Webhook Name** and **Webhook Url** for a Webhook.
        
            1.1 Hover over the three elipses in the action column corresponding to the Webhook row which you want to edit.
                ![](attachments/ms-teams-connector/communication_console/edit_webhook_popup.png)
                
            1.2 Click on **Edit** option to open the **Webhook Editor** popup.

            1.3 In the popup,you can update **Webhook Name** and **Webhook Url** and click on **Save**.
                
        2. You can delete a Webhook if you no longer need a Webhook Url.
        
            1.1 Hover over the three elipses in the action column corresponding to the Webhook row which you want to delete.                
                
            1.2 Click on **Delete** option.

            1.3 A confirmation popup will ask you for confirmation to delete the webhook.

            1.3 Click **Yes** to delete and **cancel ** to abort delete action.
                ![](attachments/ms-teams-connector/communication_console/delete_webhook_confirmation_popup.png)
    
    #### 6.4 Copy Webhook ID
            1.1 Hover over the three elipses in the action column corresponding to the Webhook ID which you want to copy.                
                
            1.2 Click on **Copy** option.

            1.3 A confirmation popup will appear stating the name of Webhook that was copied.
                ![](attachments/ms-teams-connector/communication_console/copied_popup.png)
            
    
    
### 4.2 Sending Message to a Teams Channel

#### 4.2.1 Using Microflow

1.  From the toolbox, drag and drop the **Microsoft Teams Connector** activity into your microflow. 
    ![](attachments/ms-teams-connector/connector_in_microflow.png)     
2.  Double-click the **Microsoft Teams Connector** activity to open the **Microsoft Teams Connector** dialog box.
3.  Specify the following settings with expression syntax:
    1.  Set the **webhookId** parameter to the **webhookId** generated when you configured the webhook URL in the Communication Services Console.
    2.  Set the text message parameter with the message you want to send to the Microsoft Teams channel.
        ![](attachments/ms-teams-connector/microflow_configure_parameters.png)
    3. Click **OK** to save the changes and close the dialog box.

{{% alert type="info" %}}If the message gets sent successfully, the activity returns a boolean value `true`; otherwise, the active returns `false`.{{% /alert %}}

After the **Microsoft Teams Connector** activity is configured, once the microflow that uses this activity is triggered, the app asynchronously sends out the message to the Microsoft Teams channel.

### 5 Checking Statistics Using the Usage Dashboard
The **Usage** dashboard shows the real-time statistics about the usage of an app service. For the Microsoft Teams connector, perform the following steps to check the number of Microsoft Teams webhooks usage:

1. Log into the Marketplace.
2. Go to **My Marketplace** and click [Subscriptions](/appstore/general/app-store-overview#subscriptions) on the left navigation menu. The **Subscriptions** page gives an overview of all the subscriptions of your organization.
3. Click on **Usage Dashboard** corresponding to **Microsoft Teams connector** to open the **Usage** dashboard. It shows the following statistics:
   * **This Month** – Shows usage statistics for the current month
   * **Last Month** – Shows usage statistics for last month
   * **Total** – Shows usage statistics from the start of the subscription date to today
