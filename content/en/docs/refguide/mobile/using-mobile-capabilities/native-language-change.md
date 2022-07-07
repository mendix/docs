---
title: "Internationalize Native Mobile Apps"
url: /refguide/mobile/using-mobile-capabilities/native-language-change
category: Mobile
weight: 30
description: "Allow your end-user to change the interface language on their mobile device within a Mendix native mobile app."
tags: ["studio pro", "translation", "language", "multi lingual", "native", "translatable text", "mobile"]
---


## 1 Introduction

This internationalization guide explains how to give your end-user an easy way to change their native application's language. The user can do so directly on their Android or iOS device.

## 2 Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Install Mendix Studio Pro version **9.14.0** or above
* Complete the [Prerequisites](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/#prerequisites) section of *Deploy Your First Mendix Native Mobile App*
* Make sure your [Nanoflow Commons](/appstore/modules/nanoflow-commons/) module is up to date
* Set up the required [languages](/refguide/language-settings/) in Studio Pro—this tutorial has been configured with three languages as below:

	{{< figure src="/attachments/refguide/mobile/native-mobile/native-language-change/01-language-settings.png" alt="language settings"  width= "400" >}}

## 3 Setting up Language Change Mechanism {#set-up}

Internationalization with Mendix's native apps is fairly simple. You will use two nanoflow actions to set up most of your language change mechanism.

{{% alert color="info" %}}
This guide requires the following JavaScript actions: 

* **Clear cached session data** – This action clears saved session data from the local storage for offline native app and PWAs. This nanoflow action is only compatible with Studio Pro v9.14 and above. Therefore, please use Studio Pro v9.14.0 or above.
* **Reload** – This action reloads web and native apps.
{{% /alert %}}

You can either add a new module to your existing app, or create a new Studio Pro app using a **Blank Native Mobile App** template and then adding a new module to it. Either way, your setup will begin with the same step and continue on accordingly:

1. Add a new module *ChangeLanguage* to your app.
1. Add a new microflow *ACT_Language_ChangeUserLangRuntime* to your **ChangeLanguage** module and configure it as such:
	1. Add a parameter called *LanguageCode* of data type `String`.
	1. Retrieve the language that was selected by the user on the app:
		1. This can be done by using a **Retrieve** object activity.
		1. Select the source as `Database` and entity `System.Language`.
		1. As you need only one language, select range as `First` and pass the XPath constraint as `[Code=$LanguageCode]`.
		1. Name this retrieved object *SelectedLanguage*.
		1. Your microflow should look like this:

		{{< figure src="/attachments/refguide/mobile/native-mobile/native-language-change/03-microflow-retrieve-object.png"  alt="microflow retrieve object" width= "650" >}}

	1. To set the selected language, you need to change the language for the current user: 
		1. Call a **Change** object activity.
		1. Select the **Input** as `currentUser (System.User)`. 
		1. In the **Action** section, **Commit** should be set to `Yes` and **Refresh to client** set to `No`. 
		1. Set the value of the member `System.User_Language` as the object retrieved earlier: **$SelectedLanguage**.
		1. Your microflow should look like this:
	
		{{< figure src="/attachments/refguide/mobile/native-mobile/native-language-change/04-microflow-language-change.png"  alt="microflow language change"  width= "650" >}}

Your microflow **ACT_Language_ChangeUserLangRuntime** is now ready to be called from a nanoflow **ACT_Language_ChangeUserLangDevice** which you will configure in the following steps:

1.  Add a new nanoflow *ACT_Language_ChangeUserLangDevice* and configure it like this:
	1. Add a parameter called **SelectedLanguage** of data type `Object` and entity `System.Language`. This parameter would be the new language of the app as selected by the user.
	1. Make a microflow call to **ACT_Language_ChangeUserLangRuntime** and configure it as described in *Step 2* above.
	1. In a microflow call, pass the parameter of the type **SelectedLanguage/Code** as the argument. This microflow would set the language as selected by the user.
	1. Now we just need to clear the cached session from the local storage. We can simply call a JavaScript action **Clear cached session data**.
	1. To load the new language, we need to refresh the application. This can be done by calling a JavaScript action **Reload**.
	1. Your nanoflow should look like this:

	{{< figure src="/attachments/refguide/mobile/native-mobile/native-language-change/02-nanoflow-language-change.png"  alt="nanoflow language change" width= "650" >}}

1.  Add a new native page **Language_Overview** to your module called **ChangeLanguage**.
	1.  Add a native **List View** by simply dragging from the toolbox to list all the available languages on the app. Configure it this way:
		1. In the **Data source** tab, **Type** should be `Database`, **Entity** should be `System.Language`.
		1. In the **General** tab, **On click** should be configured to call a nanoflow **ACT_Language_ChangeUserLangDevice**.
		1. Click on the **OK** button.
		*  You should get a dialog box asking **Do you want to automatically fill the contents of the list view?** Select `Yes`.
		1. **List View** should be populated with 2 fields `{Code}` and `{Description}`.
		1. We can delete the `{Code}` field.
	1. Add a title called **Select language** as the selected language in Studio Pro is **English**.
	1. Ensure the caption of the `{Description}` field in **ListView** is not empty. It should be mapped to the attribute `System.Language.Description` and be used as well.
	1. Change to the second language in Studio Pro by going to menu **Language > Current Language > <second_language>**.
	1. Add a translation of the title in a second language if not available.
	1. Ensure again the caption of the `{Description}` field in **ListView** is not empty. It should be mapped to the attribute `System.Language.Description` and be used as well.
	1. Repeat the above steps to add a translation for the third language as well.
	1. Set **Language_Overview** as the default home page of the navigation profile **Native mobile**.

## 4 Testing Language Switching {#testing}

Now it is time to see the app in action. To do this, locally deploy and view the app on the **Make It Native 9** app:

1. Follow the steps in [Downloading and Installing the Make It Native App](https://docs.mendix.com/refguide/mobile/getting-started-with-mobile/#32-downloading-and-installing-the-make-it-native-app) to view on **Make It Native** app. 
1. Once the app is running, you should be able to see the native **Language_Overview** page below on the **Make It Native 9** app.

	{{< figure src="/attachments/refguide/mobile/native-mobile/native-language-change/05-device-language-overview-en.png"  alt="language overview english" width= "250" >}}

1. To change the language:
	1. Click on **Dutch, Netherlands**.
	1. The app should be reloaded automatically.
	1. You should be able to see the title in the **Dutch** language:

	{{< figure src="/attachments/refguide/mobile/native-mobile/native-language-change/06-device-language-overview-nl.png"  alt="language overview dutch" width= "250" >}}


{{% alert color="info" %}}
This is just one of the ways to change the language on a native app. Please note that this mechanism does not change the localization of an application because it depends on the settings of the device.
{{% /alert %}}

## 5 Read more

* [How to Translate Your App Content](/howto/collaboration-requirements-management/translate-your-app-content/) – a worked example of adding a translation 
* [How To Use Translatable Validation Messages](/howto/logic-business-rules/translatable-validation-messages/)
* [Change language by clicking a link](https://forum.mendixcloud.com/link/questions/91821) – explanations and ideas on the Mendix forum for refreshing the page when the language is changed
* [Anonymous User Journey](https://forum.mendixcloud.com/link/questions/91676) – a discussion on the Mendix forum about switching languages for anonymous end-users