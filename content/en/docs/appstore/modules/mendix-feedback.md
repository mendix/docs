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

{{% alert color="info" %}}
This document is for the Mendix Feedback Module, compatible with Studio Pro v.9.12.2 and above. If you are using the deprecated Mendix Feedback Widget (compatible with Studio Pro v.8.6.0 and above), see the [Legacy Mendix Feedback Widget Documentation](#legacy-feedback-docs) sections below. We recommend you use the newer Mendix Feedback Module, as the older Feedback Widget will no longer receive regular updates.
{{% /alert %}}

{{% alert color="warning" %}}

**This is the Mendix Feedback Module, formerly the Mendix Feedback Widget.**

All Mendix Feedback widgets with versions lower than 8.4.0 are disabled as of October 1st, 2022. If you are using one of these versions, download and replace your current [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget with the latest version of this module.

The feedback provided via a widget version lower than 8.4.0 is no longer sent to the [Feedback](/developerportal/collaborate/feedback/) section of the Developer Portal, but your app will keep working as usual.

If you are using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module (which includes another version of the Mendix Native Feedback widget), upgrade to version 3.5.1 or higher.

In case of any questions, contact [Mendix Support](https://support.mendix.com/hc/en-us).
{{% /alert %}}

## 1 Introduction

The [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) module allows end-users of your application to directly submit feedback into your app. The module contains a feedback widget along with other files. The feedback module is fully integrated with the [Feedback](/developerportal/collaborate/feedback/) page in the Developer Portal, where you can review feedback and convert it into [user stories](/developerportal/collaborate/stories/) to improve your app.

{{< figure src="/attachments/appstore/modules/mendix-feedback/feedback-in-app.png" >}}

The Mendix Feedback module is easy to set up and automatically attaches additional information to each submitted issue such as the user’s name, role, active form, browser version, and screen resolution.

### 1.1 Typical Usage Scenario

* Gathers feedback from end-users in an acceptance or production environment
* Reduces the length of the feedback loop

### 1.2 Features

* Gathers detailed information about the client state

### 1.3 Limitations

* This module can only be used in combination with Mendix apps
* Compatible with Studio Pro v.9.12.2 or higher
* [Atlas Core](https://marketplace.mendix.com/link/component/117187) is required to apply the styling 
* In native mobile apps, some of the feedback metadata such as username, email address, and document name will be hard-coded, as they cannot be retrieved dynamically (to address this you can use the [Native Feedback widget](/appstore/modules/native-mobile-resources/) instead, located in [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513))

## 2 Configuration {#configuration}

You can configure the module for certain actions in your app. All the configuration properties are explained on the various tabs of the properties dialog box for the module. The feedback feature requires the following properties to be set:

* **Project** tab     
    * **Submit successful image url** – changes the image to show on the last successfully submitted page
    * **Allow screenshots** – controls whether the end user can take a screenshot or not
* **Advanced** tab
    * * **App ID** – the unique identifier of your app, which you can find in your app’s [General Settings](/developerportal/collaborate/general-settings/) in the Developer Portal

        {{% alert color="info" %}}The original value of **App ID** is 1, but this value should automatically change to your correct app ID. If it does not change automatically, see [Updating App ID](#update-app-id) below.{{% /alert %}}
        
    * **Feedback server location** – the URL of the Developer Portal server (usually `https://feedback-api.mendix.com`), which you should only change when you are using a different environment
    * **Screenshot Foreign Rendering**
        * **No** (default)
        * **Yes** – only used when the page includes sensitive information
* **Authentication** tab

    {{% alert color="info" %}}For the best user experience, your are strongly encouraged to apply Mendix SSO to your app and connect the Mendix SSO module to the latest version of the Mendix Feedback module. The widget works without authentication. However, without authentication each users will be an **Anonymous User**. Choose either **MendixSSO** or **Custom Authentication** for your feedback widget. You need to enter the value of authentication items manually, as the widget does not support a drop-down menu for selecting a microflow or the attributes of an entity.{{% /alert %}}

    * **MendixSSO** – if Mendix SSO is applied and the following settings are configured correctly, the end-user can leave feedback without providing their name and email address
        * **ID token microflow** – recommended that you select the **DS_GetCurrentIdToken** microflow from the Mendix SSO module

            {{% alert color="info" %}}If you are using MendixSSO 3, please include and select the **DS_GetCurrentIdToken** microflow from the FeedbackModule and configure the module roles in the security.{{% /alert %}}

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
2. Configure the User roles in Security for the Feedback module.
3. If the Feedback widget has not been updated to the one from the Feedback module automatically, add it as follows: 
    1. In the **Toolbox**, find Feedback widget in the **Feedback** category
    1. Drop it into a position in the layout:

        {{< figure src="/attachments/appstore/modules/mendix-feedback/Toolbox-feedback.png" width="350px">}} 
        
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

### 3.3 Upgrading the Widget to the Module

Simply download the Mendix Feedback Module from the Marketplace. It will replace the old feedback widget in your folder. You can encounter the following error:

{{< figure src="/attachments/appstore/modules/mendix-feedback/install-error.png" >}}

When this happens, right-click the error message, and choose **Update widget** or **Update all widgets**. Then the name of the widget is changed to **Feedback**. The updated widget is ready for use.

If you are using MendixSSO3 for authentication, after upgrading to the module you can choose to continue using your Microflow to configure the MendixSSO authentication or include and use the **DS_GetCurrentIdToken** Microflow from the FeedbackModule.

## 4 Troubleshooting

### 4.1 Updating App ID on the Project Tab {#update-app-id}

The value of the **App ID** on the **Project** tab will be changed to your correct app ID automatically from the original value 1. 

If it did not change to your app ID because of an unexpected error, you can update the app ID manually. You can find the app ID in your app's [General Settings](/developerportal/collaborate/general-settings/) in the Developer Portal.

### 4.2 Feedback Item Does Not Show on the Developer portal

If you cannot see your feedback items on the Developer Portal's **Feedback** page, it is possible that you have configured a wrong **App ID** or **Feedback server location**. Please check if all the configurations are filled in per the [Configuration](#configuration) section above.

### 4.3 Widget Cannot Be Read 

If you see the following error, click **close** and then go to your widget folder to remove the duplicate old widget. 

{{< figure src="/attachments/appstore/modules/mendix-feedback/widget-error.png" >}}

## 5 Legacy Feedback Widget Docs {#legacy-feedback-docs}

{{% alert color="warning" %}}
**All Mendix Feedback widgets with versions lower than 8.4.0 are disabled as of October 1st, 2022. If you are using one of these versions, download and replace your current [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget with version 8.4.0 or higher.**

The feedback provided via a widget version lower than 8.4.0 is no longer sent to the [Feedback](/developerportal/collaborate/feedback/) section of the Developer Portal, but your app will keep working as usual.

If you are using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module (which includes another version of the Mendix Native Feedback widget), upgrade to version 3.5.1 or higher.

{{% /alert %}}

### 5.1 Introduction

The [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget allows end-users of your application to directly submit feedback into your app. The feedback widget is fully integrated with the [Feedback](/developerportal/collaborate/feedback/) page in the Developer Portal, where you can review feedback and convert it into [user stories](/developerportal/collaborate/stories/) to improve your app.

{{< figure src="/attachments/appstore/widgets/mendix-feedback/feedback-in-app.png" >}}

The Mendix Feedback widget is easy to set up and automatically attaches additional information to each submitted issue such as the user’s name, role, active form, browser version, and screen resolution.

#### 5.1.1 Typical Usage Scenario

* Gathers feedback from end-users in an acceptance or production environment
* Reduces the length of the feedback loop

#### 5.1.2 Features

* Gathers detailed information about the client state

#### 5.1.3 Limitations

* This widget can only be used in combination with Mendix apps
* In native mobile apps, some of the feedback metadata such as username, email address, and document name will be hard-coded, as they cannot be retrieved dynamically (to address this you can use the [Native Feedback widget](https://docs.mendix.com/appstore/modules/native-mobile-resources/) instead, located in [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513))

### 5.2 Configuration {#legacy-configuration}

You can configure the widget for certain actions in your app. All the configuration properties are explained on the various tabs of the properties dialog box for the widget. The feedback feature requires the following properties to be set:

* **Project** tab
    * **App ID** – the unique identifier of your app, which you can find in your app’s [General Settings](/developerportal/collaborate/general-settings/) in the Developer Portal

        {{% alert color="info" %}}The original value of **App ID** is 1, but this value should automatically change to your correct app ID. If it does not change automatically, see [Updating App ID](#legacy-update-app-id) below.
        {{% /alert %}}

        **Allow screenshots** – controls whether the app user can take a screenshot or not
* **Advanced** tab
    * **Feedback server location** – the URL of the Developer Portal server (usually `https://feedback-api.mendix.com`), which you should only change when you are using a different environment
    * **Screenshot Foreign Rendering**
        * **No** (default)
        * **Yes** – only used when the page includes sensitive information
* **Authentication** tab

    {{% alert color="info" %}}For the best user experience, your are strongly encouraged to apply Mendix SSO to your app and connect the Mendix SSO module to the Mendix Feedback widget version 8.2.1 or above. Choose only one of the authentication methods: either **MendixSSO** or **Custom Authentication**.</br></br>You need to enter the value of authentication items manually as currently the widget does not support a drop-down menu for selecting microflow or the attributes of an entity.{{% /alert %}}

    * **MendixSSO** – if Mendix SSO is applied and the following settings are configured correctly, the end-user can leave feedback without having to enter their name and email address
        * **ID token microflow** – recommended that you select the **DS_GetCurrentIdToken** microflow from the Mendix SSO module. 
        {{% alert color="info" %}}If you are using MendixSSO 3, please follow the [Create a New Microflow to Retrieve DecryptedToken](#create-a-new-microflow-to-retrieve-decryptedtoken) section below.{{% /alert %}}
        * **Decrypted Token Value** – recommended that you select the **Value** attribute from it (the default if **Value** in the MendixSSO module). 

        See the screenshot below for an example:

        {{< figure src="/attachments/appstore/widgets/mendix-feedback/mendixsso-authentication.png" >}}

    * **Custom Authentication** – if you are using an SSO solution other than the Mendix SSO module, you should configure the following settings. With these settings, you can provide a microflow that should return a valid username and email when the end-user is signed in with your authentication solution. If the end-user is not signed in (meaning the **User Object Provider** microflow returns an empty username or an invalid email address) the end-user will have to manually enter their name and email address when they leave feedback.
        * **User object microflow** – selects the microflow that returns **User** entity from your module
        * **User object** – selects the **User** entity
        * **User name attribute**– selects the attribute of **name** from the **User** entity
        * **Email attribute** – selects the attribute of **email** from the **User** entity

        See the screenshot below for an example:

        {{< figure src="/attachments/appstore/widgets/mendix-feedback/custom-authentication.png" >}}

### 5.3 Usage

#### 5.3.1 Adding the Widget to Your app

You should use the latest version of the Mendix Feedback widget, as it will provide the most up-to-date features for leaving feedback and communicating with the team. To ensure you have the latest version of the widget included in your app, follow these steps:

    1. Download the latest version of the Mendix Feedback widget from the Marketplace. You are strongly encouraged to use version 8.6.0 or above of the widget.
    1. When the widget is included in your app, ensure that it is added to all the layouts used in the application.

#### 5.3.2 Submitting Feedback on an App

When you click the **Feedback icon**, the Mendix Platform first checks if you are signed in. If you are not signed in, you will need to either **Sign in to Mendix** or **Continue as a guest** to enter feedback mode:

{{< figure src="/attachments/appstore/widgets/mendix-feedback/feedback-login.png" >}}

Once you are in feedback mode, you can click anywhere on the screen to **leave a comment**:

{{< figure src="/attachments/appstore/widgets/mendix-feedback/comment.png" >}}

And voila! A screenshot of the current page is created, which you can choose to attach to your feedback. After clicking **Submit**, your feedback will go straight to the [Feedback](/developerportal/collaborate/feedback/) page of the app in the Developer Portal.

When you have left your feedback, you need to exit the feedback mode by clicking **Exit Feedback Mode**:
{{< figure src="/attachments/appstore/widgets/mendix-feedback/exit-feedback-mode.png" >}}

#### 5.3.3 Upgrading the Widget 

To upgrade your Mendix Feedback widget, follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/#update-module). You can encounter the following error: 

{{< figure src="/attachments/appstore/widgets/mendix-feedback/install-error.png" >}}

When this happens, right-click the error message, and choose **Update widget** or **Update all widgets**. Then the name of the widget is changed to **Feedback**. The updated widget is ready for use.

{{< figure src="/attachments/appstore/widgets/mendix-feedback/new-name.png" >}}

### 5.4 Troubleshooting

#### 5.4.1 Updating App ID on the Project Tab {#legacy-update-app-id}

The value of the **App ID** on the **Project** tab will be changed to your correct app ID automatically from the original value 1. 

If it did not change to your app ID because of an unexpected error, you can update the app ID manually. You can find the app ID in your app's [General Settings](/developerportal/collaborate/general-settings/) in the Developer Portal.

#### 5.4.2 Page Does Not Scroll in the Screenshot Image

The Feedback widget uses the HTML2Canvas library which attempts to make an image of a web page based on the content currently loaded on the page. Since HTML2Canvas tries to repaint the current content, it can make mistakes while doing so. There are two solutions for the issue:

* Turn off **Screenshot foreign rendering**
* Change the **CSS selector** for a scrollable container - Some variations are difficult to spot for HTML2Canvas. This sometimes causes the image to render incorrectly. Fixing this requires significant CSS, HTML, and JS knowledge, but it is possible to fill in a CSS selector that will determine where the scrolling is happening.

#### 5.4.3 Feedback Item Does Not Show on the Developer portal

If you cannot see your feedback items on the Developer Portal's **Feedback** page, it is possible that you have configured a wrong **App ID** or **Feedback server location**. Please check if all the configurations are filled in per the [Configuration](#legacy-configuration) section above.

#### 5.4.4 Creating a New Microflow to Retrieve DecryptedToken {#create-a-new-microflow-to-retrieve-decryptedtoken}

In MendixSSO 3, the Microflow **DS_GetCurrentIdToken** is deprecated. You will need to create a new microflow in your own module to retrieve the **DecryptedToken**. Place **SUB_GetDecryptedTokenByTypeForCurrentSession** in this new microflow, and then use it in MendixSS authentication:

{{< figure src="/attachments/appstore/widgets/mendix-feedback/get-current-token.png" >}}
{{< figure src="/attachments/appstore/widgets/mendix-feedback/example.png" >}}

The **tokenType** argument is **MendixSSO.TokenType.ID_TOKEN**:

{{< figure src="/attachments/appstore/widgets/mendix-feedback/token-type.png" >}}

#### 5.4.5 Widget Cannot Be Read 

If you see the following error, click **close** and then go to your widget folder to remove the duplicate old widget. 

{{< figure src="/attachments/appstore/widgets/mendix-feedback/widget-error.png" >}}
