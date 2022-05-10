---
title: "Mendix Feedback"
url: /appstore/widgets/mendix-feedback/
category: "Widgets"
description: "Describes the configuration and usage of the Mendix Feedback widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "feedback", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Mendix Feedback](https://marketplace.mendix.com/link/component/199/) widget allows end-users of your application to directly submit feedback into your app. The feedback widget is fully integrated with the [Feedback](/developerportal/collaborate/feedback/) page in the Developer Portal, where you can review feedback and convert it into [user stories](/developerportal/collaborate/stories/) to improve your app.

![image](https://user-images.githubusercontent.com/56417930/167600745-dec15562-1388-4a98-9d0a-9d2628d15bfd.png)

![image](https://user-images.githubusercontent.com/56417930/167600769-f0048704-5bed-477c-9aee-c4dc4b3a195e.png)



The Mendix Feedback widget is easy to set up and automatically attaches additional information to each submitted issue such as the user’s name, role, active form, browser version, and screen resolution.
### 1.1 Typical Usage Scenario

* Gathering feedback from end-users in an acceptance or production environment
* Reducing the length of the feedback loop

### 1.2 Features

* Gathers detailed information about the client state

### 1.3 Limitations

* Only usable in combination with Mendix apps
* In Native Mobile apps, some of the feedback metadata, such as username, email address and document name, will be hard-coded, as they can't be retrieved dynamically. The [Native Feeback widget](https://docs.mendix.com/appstore/modules/native-mobile-resources/) can be found in [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513).


## 2 Using the Widget

### 2.1 Submitting Feedback on an App
When you click the **Feedback icon**, the Mendix Platform first checks if you are signed in. If you are not signed in, you will need to either **Sign in to Mendix** or **Continue as a guest** to enter feedback mode:

![image](https://user-images.githubusercontent.com/56417930/167600687-91be143b-68c0-432b-9344-d1ff2ce2b729.png)



Once you are in feedback mode, you can click anywhere on the screen to **leave a comment**:

![image](https://user-images.githubusercontent.com/56417930/167600653-2a2a1545-2e61-4215-beca-559174516aed.png)



And voila! A screenshot of the current page is created, which you can choose to attach to your feedback. After clicking **Submit**, your feedback will go straight to the [Feedback](/developerportal/collaborate/feedback/) page of the app in the Developer Portal.

When you have left your feedback, you need to exit the feedback mode by clicking this button:
![image](https://user-images.githubusercontent.com/56417930/167600624-e0251361-59af-443a-8897-2eb3bcff5575.png)



For details on how to see all the [Feedback](/developerportal/collaborate/feedback/) you have submitted, see the Feedback section of Mendix Profile.

## 3 Adding & Configuring the Widget

You should use the latest version of the Mendix Feedback widget, as it will provide the most up-to-date features for leaving feedback and communicating with the Team.
### 3.1 Adding the Widget to Your app
To ensure you have the latest version of the widget included in your app, follow these steps:

1. Download the latest version of the Mendix Feedback widget from the Marketplace. You are strongly encouraged to use version 8.6.0 or above of the widget.
2. When the widget is included in your app, ensure that it is added to the homepage of the application. Open the homepage from your app’s **App** > **Navigation**:
![image](https://user-images.githubusercontent.com/56417930/167600590-8f6296d7-67b1-4112-97c9-c6d8cd973b0c.png)


* If the widget has not been added automatically, add it to the desired page or layout by selecting **Add widget** > **Add-on widgets** > **Feedback** and dropping it into a position in the page:
![image](https://user-images.githubusercontent.com/56417930/167600517-2e18a6ab-65fb-4876-bf1d-991314077a57.png)

![image](https://user-images.githubusercontent.com/56417930/167600553-b5c14959-77ba-4bc9-8d81-7ba27c117971.png)



You can place the widget on any form in your app, but it needs to be placed on only one form. When the end-user accesses that form, the widget will remain in the browser until the session is expired. This means you only need to place the widget on the home form. You can use this mechanism to limit the feedback to certain user roles as well. To do that, just place the widget on their home forms but not on the home form of other users.

### 3.2 Configuring the Widget
You can configure the widget for certain actions in your app. All the configuration properties are explained on the various tabs of the properties dialog box for the widget.
The feedback feature requires the following properties to be set:

* **Project** tab > **App ID** – the unique identifier of your app available in your app’s General Settings in the Developer Portal. It should be set automatically, if it didn’t please follow trouble shooting 5.1 below to manually set it.
    ![image](https://user-images.githubusercontent.com/56417930/167600462-004b9cca-6738-40a4-bd32-1eb4b33df666.png)


* **Advanced** tab > **Feedback server location** – the URL of the Developer Portal server (usually `https://feedback-api.mendix.com`)
* **Advanced** tab > **Screenshot Foreign Rendering** – It is set to No by default. Only set this to Yes when you need it.

For the best user experience, your are strongly encouraged to apply Mendix SSO to your app and connect the Mendix SSO module to version 8.2.1 or above of the Mendix Feedback widget. 
Choose only **one** authentication method from MendixSSO or Custom Authentication.


* **Authentication** tab > **ID token microflow** – select the **DS_GetCurrentIdToken** microflow from the Mendix SSO module
* **Authentication** tab > **Decrypted Token Value** –  select the **Value** attribute from it
    **MendixSSO example:**
    ![image](https://user-images.githubusercontent.com/56417930/167600327-8889e07a-cefe-41bb-9aa3-4cec7d14eea7.png)


* **Authentication** tab > **User object microflow** – select the microflow that returns **User** entity from your module
* **Authentication** tab > **User object** – select the **User** entity
* **Authentication** tab > **User name attribute**– select the attribute of **name** from the User entity
* **Authentication** tab > **Email attribute** – select the attribute of **email** from the User entity
    **Custom Authentication example:**
    ![image](https://user-images.githubusercontent.com/56417930/167600243-568bbc65-e00d-4c58-bba1-d85817c35f98.png)


The result should look like this:
If Mendix SSO is applied and the above **MendixSSO Authentication** settings are configured correctly, the end-user can leave feedback without having to enter their name and email address. If you are not using the Mendix SSO module and are using other SSO solutions instead, you should configure the settings in the **Custom Authentication**. In this section, you can provide a microflow that should return a valid user name and email when the end-user is signed in with your authentication solution. If the end-user is not signed in (meaning, the User Object Provider microflow returns an empty user name or an invalid email address), the end-user will have to manually enter their name and email address when they leave feedback.

You can also configure the widget for certain actions in your app, for example:

* **Project** tab > **Allow screenshots**


## 4 Migration

### 4.1 Upgrading the Widget 
If you are trying to upgrade your Mendix Feedback widget, Studio Pro will not recognize the current configuration of this widget. Add the Mendix Feedback widget into your page again and configure it accordingly. Then remove the old feedback widget(SprintrFeedbackWidget.mpk) from your widget folder.


## 5 Trouble shooting

### 5.1 App ID Update
The app id will be updated automatically. If it didn’t change from 1 to your app Id because of an unexpected error, the App Id can be updated manually. App Id can be found at General Settings > App ID.

![image](https://user-images.githubusercontent.com/56417930/167600168-5fa1d3cc-74c5-4d39-aa02-27a2c384d59f.png)

