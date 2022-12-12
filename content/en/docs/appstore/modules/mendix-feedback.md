---
title: "Mendix Feedback"
url: /appstore/modules/mendix-feedback/
category: "Modules"
description: "Describes the configuration and usage of the Mendix Feedback module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "module", "feedback", "platform support"]
aliases:
    - /appstore/widgets/mendix-feedback/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}

**This is the Mendix Feedback Module, formerly the Mendix Feedback Widget.**

All Mendix Feedback widgets with versions lower than 8.4.0 are disabled as of October 1st, 2022. If you are using one of these versions, download and replace your current [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget with the latest version of this module.

The feedback provided via a widget version lower than 8.4.0 is no longer sent to the [Feedback](/developerportal/collaborate/feedback/) section of the Developer Portal, but your app will keep working as usual.

If you are using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module (which also includes a version of the Mendix Feedback widget), upgrade to version 3.5.1 or higher.

In case of any questions, contact [Mendix Support](https://support.mendix.com/hc/en-us).
{{% /alert %}}

## 1 Introduction

The [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) module allows end-users of your application to directly submit feedback into your app. The feedback module is fully integrated with the [Feedback](/developerportal/collaborate/feedback/) page in the Developer Portal, where you can review feedback and convert it into [user stories](/developerportal/collaborate/stories/) to improve your app.

{{< figure src="/attachments/appstore/modules/mendix-feedback/feedback-in-app.png" >}}

The Mendix Feedback module is easy to set up and automatically attaches additional information to each submitted issue such as the user’s name, role, active form, browser version, and screen resolution.

### 1.1 Typical Usage Scenario

* Gathers feedback from end-users in an acceptance or production environment
* Reduces the length of the feedback loop

### 1.2 Features

* Gathers detailed information about the client state

### 1.3 Limitations

* This module can only be used in combination with Mendix apps
* In native mobile apps, some of the feedback metadata such as username, email address, and document name will be hard-coded, as they cannot be retrieved dynamically (to address this you can use the [Native Feedback widget](/appstore/modules/native-mobile-resources/) instead, located in [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513))

## 2 Configuration {#configuration}

You can configure the module for certain actions in your app. All the configuration properties are explained on the various tabs of the properties dialog box for the module. The feedback feature requires the following properties to be set:

* **Project** tab     
    * **Submit successful image url** – changes the image to show on the last successfully submitted page
    * **Allow screenshots** – controls whether the end user can take a screenshot or not
* **Advanced** tab
    * * **App ID** – the unique identifier of your app, which you can find in your app’s [General Settings](/developerportal/collaborate/general-settings/) in the Developer Portal

        {{% alert color="info" %}}The original value of **App ID** is 1, but this value should automatically change to your correct app ID. If it does not change automatically, see [Updating App ID](#update-app-id) below.
        {{% /alert %}}
        
    * **Feedback server location** – the URL of the Developer Portal server (usually `https://feedback-api.mendix.com`), which you should only change when you are using a different environment
    * **Screenshot Foreign Rendering**
        * **No** (default)
        * **Yes** – only used when the page includes sensitive information
* **Authentication** tab

    {{% alert color="info" %}}
    For the best user experience, your are strongly encouraged to apply Mendix SSO to your app and connect the Mendix SSO module to the latest version of the Mendix Feedback module. The widget works without authentication. However, without authentication each users will be an **Anonymous User**. Choose either **MendixSSO** or **Custom Authentication** for your feedback widget. You need to enter the value of authentication items manually, as the widget does not support a drop-down menu for selecting a microflow or the attributes of an entity.
    {{% /alert %}}

    * **MendixSSO** – if Mendix SSO is applied and the following settings are configured correctly, the end-user can leave feedback without providing their name and email address
        * **ID token microflow** – recommended that you select the **DS_GetCurrentIdToken** microflow from the Mendix SSO module

        {{% alert color="info" %}}
        If you are using MendixSSO 3, please include and select the **DS_GetCurrentIdToken** microflow from the FeedbackModule.
        {{% /alert %}}

        * **Decrypted Token Value** – recommended that you select the **Value** attribute from it (the default if **Value** in the MendixSSO module). 

        See the screenshot below for an example:

        {{< figure src="/attachments/appstore/modules/mendix-feedback/mendixsso-authentication.png" >}}

    * **Custom Authentication** – if you are using an SSO solution other than the Mendix SSO module, you should configure the following settings. With these settings, you can provide a microflow that should return a valid username and email when the end-user is signed in with your authentication solution. If the end-user is not signed in (meaning the **User Object Provider** microflow returns an empty username or an invalid email address) the end-user will have to manually enter their name and email address when they leave feedback.
        * **User object microflow** – selects the microflow that returns **User** entity from your module
        * **User object** – selects the **User** entity
        * **User name attribute**– selects the attribute of **name** from the **User** entity
        * **Email attribute** – selects the attribute of **email** from the **User** entity

        See the screenshot below for an example:

        {{< figure src="/attachments/appstore/modules/mendix-feedback/custom-authentication.png" >}}

* **Authentication** tab
    The translation should be filled in automatically but you can still configure your own text and translation here.
    
    

## 3 Usage

### 3.1 Adding the Widget to Your App

You should use the latest version of the Mendix Feedback module, as it will provide the most up-to-date features for leaving feedback and communicating with the team. To ensure you have the latest version of the module included in your app, follow these steps:

1. Download the latest version of the Mendix Feedback module from the Marketplace. You are strongly encouraged to use the latest version of the module.
1. If the module has not been added automatically, add it as follows: 
    1. In the **Toolbox**, find Feedback widget in the **Feedback** category
    1. Drop it into a position in the layout:

        {{< figure src="/attachments/appstore/modules/mendix-feedback/Toolbox-feedback.png" >}} 
        
        {{< figure src="/attachments/appstore/modules/mendix-feedback/feedback-on-layout.png" >}} 

### 3.2 Submitting Feedback on an App

When you click the **Feedback icon**, the Mendix Platform first checks if you are signed in. If you are not signed in, you will need to either **Sign in to Mendix** or **Continue as a guest** to enter feedback mode:
When you click the **Feedback icon**, the Mendix Platform first checks if you are signed in. If you are not signed in, you will need to enter email address to continue as an **Anonymous User** to submit the feedback:

{{< figure src="/attachments/appstore/modules/mendix-feedback/feedback-form.png" >}} 

Click **Enter Screenshot Mode** to take a screenshot of your page or choose **Upload From Computer** to upload a selected image.

      {{% alert color="info" %}}
      The image is allowed up to 5MB in one of the following formats: jpg, jpeg, png, gif.
      {{% /alert %}}

{{< figure src="/attachments/appstore/modules/mendix-feedback/feedback-submit-button.png" >}} 

After clicking Submit, your feedback will go straight to the Feedback page of the app in the Developer Portal. 
Once you see the final page, you have successfully submitted your feedback.

After clicking **Submit**, your feedback will go straight to the [Feedback](/developerportal/collaborate/feedback/) page of the app in the Developer Portal. To be sure your feedback is successfully submmited, you should see a final page that informs your the feedback is received. 

### 3.3 Upgrading the Widget 

Simply download the module or widget from the Marketplace. It will replace the old feedback widget in your folder. You can encounter the following error:

{{< figure src="/attachments/appstore/modules/mendix-feedback/install-error.png" >}}

When this happens, right-click the error message, and choose **Update widget** or **Update all widgets**. Then the name of the widget is changed to **Feedback**. The updated widget is ready for use.


## 4 Troubleshooting

### 4.1 Updating App ID on the Project Tab {#update-app-id}

The value of the **App ID** on the **Project** tab will be changed to your correct app ID automatically from the original value 1. 

If it did not change to your app ID because of an unexpected error, you can update the app ID manually. You can find the app ID in your app's [General Settings](/developerportal/collaborate/general-settings/) in the Developer Portal.

### 4.2 Feedback Item Does Not Show on the Developer portal

If you cannot see your feedback items on the Developer Portal's **Feedback** page, it is possible that you have configured a wrong **App ID** or **Feedback server location**. Please check if all the configurations are filled in per the [Configuration](#configuration) section above.

### 4.3 Widget Cannot Be Read 

If you see the following error, click **close** and then go to your widget folder to remove the duplicate old widget. 

{{< figure src="/attachments/appstore/modules/mendix-feedback/widget-error.png" >}}
