---
title: "Mendix Feedback"
url: /appstore/modules/mendix-feedback/
description: "Describes the configuration and usage of the Mendix Feedback module, which is available in the Mendix Marketplace."
aliases:
    - /appstore/widgets/mendix-feedback/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This document is for the Mendix Feedback module, compatible with Studio Pro 9.18.6 and above.
{{% /alert %}}

{{% alert color="warning" %}}
If you are using the deprecated Mendix Feedback widget (compatible with Studio Pro 8.6.0 and above), see the [Legacy Mendix Feedback Widget Documentation](#legacy-feedback-docs) sections below. Mendix recommends using the newer Mendix Feedback module, as the deprecated Feedback widget will no longer receive regular updates.
{{% /alert %}}

{{% alert color="warning" %}}

**This is the Mendix Feedback module, formerly the Mendix Feedback widget.**

All [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widgets with versions lower than 8.4.0 are disabled as of October 1, 2022. If you are using one of these versions, [upgrade your current Mendix Feedback widget with the latest version of this module](#upgrade).

The feedback provided via a widget version lower than 8.4.0 is no longer sent to the [Feedback](/developerportal/app-insights/feedback/) section page for your app in [Apps](https://sprintr.home.mendix.com/), but your app will keep working as usual.

If you are using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module (which includes another version of the Mendix Native Feedback widget), upgrade to version 3.5.1 or higher. 

If you are using the old Mendix Native Feedback widget, you might face some issues to receive feedback. To make use of [Feedback](/developerportal/app-insights/feedback/) in [Apps](https://sprintr.home.mendix.com/), Mendix recommends removing the server location value within the widget and keep it empty.

In case of any questions, contact [Mendix Support](https://support.mendix.com/hc/en-us).
{{% /alert %}}

## Introduction

The [Mendix Feedback](https://marketplace.mendix.com/link/component/205506) module allows end-users of your application to directly submit feedback into your app. The module contains a feedback widget along with other files. The feedback module is fully integrated with the [Feedback](/developerportal/app-insights/feedback/) page for your app in [Apps](https://sprintr.home.mendix.com/), where you can review feedback and convert it into [user stories](/developerportal/project-management/epics/planning/) to improve your app.

{{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/feedback-in-app.png" class="no-border" >}}

{{% alert color="info" %}}
From 12 August, 2023 onwards, the way that feedback is presented in [Apps](https://sprintr.home.mendix.com/) will become part of **App Insights**. For details the [Feedback](/developerportal/app-insights/feedback/) documentation for details.

Existing and new feedback items will continue to be available and you will not need to change the Mendix Feedback module in your app.
{{% /alert %}}

The Mendix Feedback module is easy to set up and automatically attaches additional information to each submitted issue such as the user’s name, role, active form, browser version, and screen resolution.

### Typical Usage Scenario

* Gathers feedback from end-users in an acceptance or production environment
* Reduces the length of the feedback loop

### Features

* Gathers detailed information about the client state

### Limitations

* This module can only be used in combination with Mendix apps.
* This module is compatible with Studio Pro 9.18.6 or higher.
* [Atlas Core](https://marketplace.mendix.com/link/component/117187) is required to apply the styling.
* In native mobile apps, some of the feedback metadata such as username, email address, and document name will be hard-coded, as they cannot be retrieved dynamically (to address this you can use the [Native Feedback widget](/appstore/modules/native-mobile-resources/) instead, located in [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)).

## Installation

You should install the latest version of the Mendix Feedback module, as it will provide the most up-to-date features for leaving feedback and communicating with the team. To ensure you have the latest version of the module included in your app, follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the latest version of the module into your app.

## Usage

### Adding the Feedback Widget to Your App

1. Configure the **User roles** in the **App Security** for the Feedback module.
2. In the **Toolbox**, find the **Feedback** widget in the **Feedback** category.

    {{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/toolbox-feedback.png" width="250px" class="no-border" >}}

3. Drop the Feedback widget into a position in the layout:

    {{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/feedback-on-layout.png" >}} 

4. [Configure the Feedback widget](#configuration).

5. If your app allows anonymous users, do as follows:

   1. Drop an extra Feedback widget into a position in the layout:

       {{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/two-feedback-on-layout.png" class="no-border" >}} 

   2. Configure the visible roles of each Feedback widget. The Feedback widget for anonymous users should only be visible to the anonymous user role, while the Feedback widget for logged-in users should not be visible to the anonymous user role.

   3. [Configure the extra Feedback widget](#configuration).

### Configuring the Feedback Widget {#configuration}

To configure the Feedback widget, double-click it to open the **Edit Feedback** dialog box. To use the feedback feature, configure the following properties:

* **Configuration** tab
    * **Feedback button action** –This controls what happens once you click the **Feedback** button. By default, it opens the **Share Feedback** page. If you select **Custom**, you can select a different **On click** action.
    * **Project Settings** – This is the unique identifier of your app. You can find it in your app’s [General Settings](/developerportal/collaborate/general-settings/) in Apps.

        {{% alert color="info" %}}The original value of **App ID** is *1*, but this value should automatically change to your correct app ID. If it does not change automatically, see [Updating App ID](#update-app-id) below.
        {{% /alert %}}
    
    * **HTML2Canvas screenshot settings** – These options control the rendering of the screenshots. If you are experiencing problems with screenshots, turn the **Foreign rendering** on.
    
* **Customize Button** tab
    * **Button Labels** – These are the labels for the buttons on the feedback form. You can change the captions for those button here.
    * **Feedback Button Styling** – This controls how the **Feedback** button is rendered. There are three options:
        * **Side Tab** – If this option is selected, the **Feedback** button hovers vertically at the right side of the screen. This is the default option.
        * **Button** – If this option is selected, the **Feedback** button shows as a horizontal button on the location the widget is set
        * **Do not render** – If this option is selected, the **Feedback** button does not show. You can still trigger the feedback flow through a custom button action.

### Submitting Feedback on an App

When you click the **Feedback icon**, the Mendix Platform first checks if you are signed in. If you are not signed in, you will need to enter email address to continue as an **Anonymous User** to submit the feedback:

{{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/feedback-form.png" width="500px" class="no-border" >}} 

Click **Enter Screenshot Mode** to take a screenshot of your page or choose **Upload From Computer** to upload a selected image.

{{% alert color="info" %}}
The image is allowed up to 5MB in one of the following formats: JPG, JPEG, PNG, GIF.
{{% /alert %}}

{{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/feedback-submit-button.png" width="500px" class="no-border" >}} 

After clicking **Submit**, your feedback will go straight to the [Feedback](/developerportal/app-insights/feedback/) page of the app in [Apps](https://sprintr.home.mendix.com/). Once you see the final page, you have successfully submitted your feedback.

## Upgrading the Deprecated Feedback Widget to the Feedback Module {#upgrade}

To update the deprecated Feedback widget to the Feedback module, download the latest version of the Mendix Feedback Module from the Marketplace. It will replace the deprecated feedback widget in your folder. You can encounter the following error:

{{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/install-error.png" class="no-border" >}}

When this happens, right-click the error message, and choose **Update widget** or **Update all widgets**. Then the name of the widget is changed to **Feedback**. The updated widget is ready for use.

If you are using MendixSSO3 for authentication, after upgrading to the module you can choose to continue using your microflow to configure the MendixSSO authentication or include and use the **DS_GetCurrentIdToken** microflow from the **FeedbackModule** folder.

## Troubleshooting

### Updating App ID on the Project Tab {#update-app-id}

The value of the **App ID** on the **Project** tab will be changed to your correct app ID automatically from the original value 1. 

If it did not change to your app ID because of an unexpected error, you can update the app ID manually. You can find the app ID in your app's [Settings](/developerportal/collaborate/general-settings/) in [Apps](https://sprintr.home.mendix.com/).

### Feedback Item Does Not Show in Apps

If you cannot see your feedback items on the **Feedback** page after opening your app in [Apps](https://sprintr.home.mendix.com/), it is possible that you have configured a wrong **App ID** or **Feedback server location**. Check if all the configurations are filled in per the [Configuring the Feedback Widget](#configuration) section above.

### Widget Cannot Be Read 

If you see the following error, click **close** and then go to your widget folder to remove the duplicate old widget. 

{{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/widget-error.png" width="600px" class="no-border" >}}

## Legacy Feedback Widget Docs {#legacy-feedback-docs}

{{% alert color="warning" %}}
**All Mendix Feedback widgets with versions lower than 8.4.0 are disabled as of October 1, 2022. If you are using one of these versions, download and replace your current [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget with version 8.4.0 or higher.**

The feedback provided via a widget version lower than 8.4.0 is no longer sent to the [Feedback](/developerportal/app-insights/feedback/) page for your app in [Apps](https://sprintr.home.mendix.com/), but your app will keep working as usual.

If you are using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module (which includes another version of the Mendix Native Feedback widget), upgrade to version 3.5.1 or higher.
{{% /alert %}}

### Introduction

The [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget allows end-users of your application to directly submit feedback into your app. The feedback widget is fully integrated with the [Feedback](/developerportal/app-insights/feedback/) page in [Apps](https://sprintr.home.mendix.com/), where you can review feedback and convert it into [user stories](/developerportal/project-management/epics/planning/) to improve your app.

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/feedback-in-app.png" width="350px" class="no-border" >}}

The Mendix Feedback widget is easy to set up and automatically attaches additional information to each submitted issue such as the user’s name, role, active form, browser version, and screen resolution.

#### Typical Usage Scenario

* Gathers feedback from end-users in an acceptance or production environment
* Reduces the length of the feedback loop

#### Features

* Gathers detailed information about the client state

#### Limitations

* This widget can only be used in combination with Mendix apps
* In native mobile apps, some of the feedback metadata such as username, email address, and document name will be hard-coded, as they cannot be retrieved dynamically (to address this you can use the [Native Feedback widget](/appstore/modules/native-mobile-resources/) instead, located in [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513))

### Configuration {#legacy-configuration}

You can configure the widget for certain actions in your app. All the configuration properties are explained on the various tabs of the properties dialog box for the widget. The feedback feature requires the following properties to be set:

* **Project** tab
    * **App ID** – the unique identifier of your app, which you can find in your app’s [Settings](/developerportal/collaborate/general-settings/) in [Apps](https://sprintr.home.mendix.com/)l

        {{% alert color="info" %}}The original value of **App ID** is 1, but this value should automatically change to your correct app ID. If it does not change automatically, see [Updating App ID](#legacy-update-app-id) below.
        {{% /alert %}}

        **Allow screenshots** – controls whether the app user can take a screenshot or not
* **Advanced** tab
    * **Feedback server location** – the URL of the feedback server (usually `https://feedback-api.mendix.com`), which you should only change when you are using a different environment
    * **Screenshot Foreign Rendering**
        * **No** (default)
        * **Yes** – only used when the page includes sensitive information
    
* **Authentication** tab {#legacy-authentication}

    {{% alert color="info" %}}For the best user experience, your are strongly encouraged to apply Mendix SSO to your app and connect the Mendix SSO module to the Mendix Feedback widget version 8.2.1 or above. Choose only one of the authentication methods: either **MendixSSO** or **Custom Authentication**.</br></br>You need to enter the value of authentication items manually as currently the widget does not support a drop-down menu for selecting microflow or the attributes of an entity.{{% /alert %}}

    * **MendixSSO** – if Mendix SSO is applied and the following settings are configured correctly, the end-user can leave feedback without having to enter their name and email address
        * **ID token microflow** – recommended that you select the **DS_GetCurrentIdToken** microflow from the Mendix SSO module. 
        {{% alert color="info" %}}If you are using MendixSSO 3, follow the [Create a New Microflow to Retrieve DecryptedToken](#create-a-new-microflow-to-retrieve-decryptedtoken) section below.{{% /alert %}}
        * **Decrypted Token Value** – recommended that you select the **Value** attribute from it (the default if **Value** in the MendixSSO module). 

        See the screenshot below for an example:

        {{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/mendixsso-authentication.png" class="no-border" >}}

    * **Custom Authentication** – if you are using an SSO solution other than the Mendix SSO module, you should configure the following settings. With these settings, you can provide a microflow that should return a valid username and email when the end-user is signed in with your authentication solution. If the end-user is not signed in (meaning the **User Object Provider** microflow returns an empty username or an invalid email address) the end-user will have to manually enter their name and email address when they leave feedback.
        * **User object microflow** – selects the microflow that returns **User** entity from your module
        * **User object** – selects the **User** entity
        * **User name attribute**– selects the attribute of **name** from the **User** entity
        * **Email attribute** – selects the attribute of **email** from the **User** entity

        See the screenshot below for an example:

        {{< figure src="/attachments/appstore/use-content/modules/mendix-feedback/custom-authentication.png" class="no-border" >}}

### Usage

#### Adding the Widget to Your app

You should use the latest version of the Mendix Feedback widget, as it will provide the most up-to-date features for leaving feedback and communicating with the team. To ensure you have the latest version of the widget included in your app, follow these steps:

1. Download the latest version of the Mendix Feedback widget from the Marketplace. You are strongly encouraged to use version 8.6.0 or above of the widget.
2. When the widget is included in your app, ensure that it is added to all the layouts used in the application.

#### Submitting Feedback on an App

When you click the **Feedback icon**, the Mendix Platform first checks if you are signed in. If you are not signed in, you will need to either **Sign in to Mendix** or **Continue as a guest** to enter feedback mode:

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/feedback-login.png" width="600px" class="no-border" >}}

Once you are in feedback mode, you can click anywhere on the screen to **leave a comment**:

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/comment.png" width="600px" class="no-border" >}}

And voila! A screenshot of the current page is created, which you can choose to attach to your feedback. After clicking **Submit**, your feedback will go straight to the [Feedback](/developerportal/app-insights/feedback/) page of the app in [Apps](https://sprintr.home.mendix.com/).

When you have left your feedback, you need to exit the feedback mode by clicking **Exit Feedback Mode**:
{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/exit-feedback-mode.png" class="no-border" >}}

#### Upgrading the Widget 

To upgrade your Mendix Feedback widget, follow the instructions in [Using Marketplace Content](/appstore/use-content/#update-module). You can encounter the following error: 

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/install-error.png" class="no-border" >}}

When this happens, right-click the error message, and choose **Update widget** or **Update all widgets**. Then the name of the widget is changed to **Feedback**. The updated widget is ready for use.

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/new-name.png" class="no-border" >}}

### Troubleshooting

#### Updating App ID on the Project Tab {#legacy-update-app-id}

The value of the **App ID** on the **Project** tab will be changed to your correct app ID automatically from the original value 1. 

If it did not change to your app ID because of an unexpected error, you can update the app ID manually. You can find the app ID in your app's [Settings](/developerportal/collaborate/general-settings/) in [Apps](https://sprintr.home.mendix.com/).

#### Page Does Not Scroll in the Screenshot Image

The Feedback widget uses the HTML2Canvas library which attempts to make an image of a web page based on the content currently loaded on the page. Since HTML2Canvas tries to repaint the current content, it can make mistakes while doing so. There are two solutions for the issue:

* Turn off **Screenshot foreign rendering**
* Change the **CSS selector** for a scrollable container - Some variations are difficult to spot for HTML2Canvas. This sometimes causes the image to render incorrectly. Fixing this requires significant CSS, HTML, and JS knowledge, but it is possible to fill in a CSS selector that will determine where the scrolling is happening.

#### Feedback Item Does Not Show in Apps

If you cannot see your feedback items on the **Feedback** page after opening your app in [Apps](https://sprintr.home.mendix.com/), it is possible that you have configured a wrong **App ID** or **Feedback server location**. Check if all the configurations are filled in per the [Configuration](#legacy-configuration) section above.

#### Creating a New Microflow to Retrieve DecryptedToken {#create-a-new-microflow-to-retrieve-decryptedtoken}

⚠ In MendixSSO 3, the Microflow **DS_GetCurrentIdToken** is deprecated. You will need to create a new microflow in your own module to retrieve the **DecryptedToken**. Place **SUB_GetDecryptedTokenByTypeForCurrentSession** in this new microflow, and then use it in MendixSS authentication:

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/get-current-token.png" width="600px" class="no-border" >}}
{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/example.png" width="600px" class="no-border" >}}

The **tokenType** argument is **MendixSSO.TokenType.ID_TOKEN**:

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/token-type.png" width="600px" class="no-border" >}}

#### Widget Cannot Be Read 

If you see the following error, click **close** and then go to your widget folder to remove the duplicate old widget. 

{{< figure src="/attachments/appstore/use-content/widgets/mendix-feedback/widget-error.png" width="600px" class="no-border" >}}
