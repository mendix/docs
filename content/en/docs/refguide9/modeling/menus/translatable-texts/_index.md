---
title: "Language Menu"
url: /refguide9/translatable-texts/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Mendix is designed so that it is easy to present the same information to users who have different language requirements. To support this, all texts that are presented to the end-user can be translated to different languages.

These *translatable texts* include the following:

* [button](/refguide9/button-widgets/) captions
* [data grid](/refguide9/data-grid/) columns
* [labels](/refguide9/label/)
* [menu items](/refguide9/menu/#menu-item)
* [messages](/refguide9/show-message/) that are sent from a [microflow](/refguide9/microflows/)
* [text](/refguide9/text/)

## Working in the Currently Selected Language{#selected-language}

You can see the language you are currently working in at the bottom right of the screen.

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/language-status.png" alt="Language Status"   width="350"  class="no-border" >}}

When you have multiple languages set up in your app, you can choose a language to work in by doing one of the following:

* selecting it from the **Language > Current Language** menu
* using the drop-down in the lower-right corner of Studio Pro's main window
* using the <kbd>Ctrl</kbd> + <kbd>L</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> keyboard shortcut combinations, which cycle through the configured languages

When working in a language which is not the default, you can identify texts that have not been translated yet. These show the text in the default language between angle brackets. For example, `<Name>`. You can replace the text with the appropriate translation, and it will be replaced for the currently selected language.

If you edit your app to add new widgets while not in the default language, any new translatable texts for those widgets will be added to the current language. The text in the default language will either be left blank or will have the placeholder text for the widget.

All untranslated texts will be displayed in the default language when you run the application.

English (US) and Dutch translations are added by default even if you do not use these languages in your app. When you add a new element (for example, a button), it will get an English and Dutch translation in the system, but you will not see it until you add those languages. You may want to delete all English and Dutch translations if you do not plan to have your app in these languages. Before deleting English (US), make sure you have another default language set up. For more information on how to delete translations, see the [Delete](/refguide9/language-operations/#delete) section in *Language Operations*.  

If you plan to export your module/app as an add-on/solution, the best practice is to remove default Dutch translations to avoid confusion for your customers in case they plan to translate their app to Dutch. For more information, see the [Exporting Add-on Modules and Solutions](/refguide9/configure-add-on-and-solution-modules/#export) section in *Configuring Add-on and Solution Modules for Publishing*.  

{{% alert color="info" %}}
If there is no text in the default language, the end-user will see `[no translation]`. If you want the text to be blank, set the default language text to be a space rather than empty.
{{% /alert %}}

## The Language Menu

The **Language** menu allows you to manage additional languages and translations for your app. This includes features to help you to translate a text in all places where it appears with a single change instead of having to change each occurrence individually:

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/language-menu.png" alt="Language Menu" class="no-border" >}}

### Menu Items Overview

The **Language** menu items are described in the table below:

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Current Language** | Choose the current language from one of the languages set up in **Language Settings…**. | *None* |
| **Select Previous Language** | Choose the previous language in the list of languages chosen in **Language Settings…**. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> |
| **Select Next Language** | Choose the next language in the list of languages chosen in **Language Settings…**. | <kbd>Ctrl</kbd> + <kbd>L</kbd> |
| [Language Settings…](/refguide9/language-settings/) | Choose which languages are supported by the app and configure date and time settings. | *None* |
| [Batch Replace…](/refguide9/batch-replace/) | Change all occurrences of chosen translatable texts in the current language where they are identical. | *None* |
| [Batch Translate…](/refguide9/batch-translate/) | Add and edit translations from a selected source language to a selected target language | *None* |
| [Language Operations…](/refguide9/language-operations/) | Manipulate (for example, copy) translations between languages. | *None* |

## Setting the End-User's Language

The language which is displayed to the end-user is determined by the **Language** object which is associated with the **User** object for the current end-user via the association **User_Language**.

If the associated language is not one of those set in the app, then the end-user will see pages in the default language.

If the end-user is not associated with a language, for example they are an anonymous user, the language used depends on the user's browser or operating system settings. If the language requested is not present up in the app, then the app's default language will be used. The requested language will be as follows:

* for web apps – the first language which matches a language set in the app based on the browser's preferred order of languages
* for mobile apps – the operating system language

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/user-language-domain-model.png" alt="System Domain Model for User and Language" class="no-border" >}}

If you allow end-users to change their display language within the app, the changes will not be applied immediately. This is because the translatable texts for the app are already set to the end-users original language.

There are two options to ensure that the language is changed:

1. Ask the end-user to do something manually
    * sign out and sign in again
    * use their browser's refresh command
2. Force Mendix to reload the page – for example by doing the following:
    1. Add the platform supported widget [HTML / JavaScript Snippet](https://marketplace.mendix.com/link/component/56/) to your app.
    2. Create a pop-up page.
    3. Place the HTMLSnippet widget on the pop-up page.
    4. Add the **JavaScript** content `mx.reloadWithState();` to the widget.
    5. Open your new pop-up page from a microflow when you want to switch the user's language.

    {{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/reload-with-state.png" alt="System Domain Model for User and Language" class="no-border" >}}

    {{% alert color="warning" %}}When reloading the page, the language change must be made for the `$currentUser` object of entity type `User`. It will not change the language immediately if you use an association to a specialization of the `User` entity, such as `Administration.Account`.{{% /alert %}}

{{% alert color="info" %}}
The above only applies to pages *within* your Mendix application (meaning, pages that are created in Studio Pro). The labels for static pages (such as the *index.html* and *login.html* pages in the **theme** folder of your app) are generated when you create a deployment package using the default language of your app. The labels on those pages will not change for different users, they will always be the same.
{{% /alert %}}

## Read More

* [Translating Your App Content](/refguide9/translate-your-app-content/) – a worked example of adding a translation 
* [Using Translatable Validation Messages](/refguide9/translatable-validation-messages/)
* [Change language by clicking a link](https://community.mendix.com/link/questions/91821) – explanations and ideas in the Mendix Community for refreshing the page when the language is changed
* [Anonymous User Journey](https://community.mendix.com/link/questions/91676) – a discussion in the Mendix Community about switching languages for anonymous end-users
