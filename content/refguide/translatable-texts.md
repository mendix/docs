---
title: "Language Menu"
parent: "menus"
menu_order: 50
tags: ["studio pro", "translation", "languages", "translatable text"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix is designed so that it is easy to present the same information to users who have different language requirements. To support this, all texts that are presented to the end-user can be translated to different languages.

These *translatable texts* include the following:

* [button](button-widgets) captions
* [data grid](data-grid) columns
* [labels](label)
* [menu items](menu#menu-item)
* [messages](show-message) that are sent from a [microflow](microflows)
* [text](text)

## 2 Working in the Currently Selected Language{#selected-language}

You can see the language you are currently working in at the bottom right of the screen.

![Language Status](attachments/language/language-status.png)

When you have multiple languages set up in your app, you can choose a language to work in by doing one of the following:

* selecting it from the **Language > Current Language** menu
* using the drop-down in the lower-right corner of Studio Pro's main window
* using the <kbd>Ctrl</kbd>+<kbd>L</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> keyboard shortcut combinations, which cycle through the configured languages

When working in a language which is not the default, you can identify texts that have not been translated yet. These show the text in the default language between angle brackets. For example, `<Name>`. You can replace the text with the appropriate translation, and it will be replaced for the currently selected language.

If you edit your app to add new widgets while not in the default language, any new translatable texts for those widgets will be added to the current language. The text in the default language will either be left blank or will have the placeholder text for the widget.

All untranslated texts will be displayed in the default language when you run the application.

{{% alert type="info" %}}
If there is no text in the default language, the end-user will see `[no translation]`. If you want the text to be blank, set the default language text to be a space rather than empty.
{{% /alert %}}

## 3 The Language Menu

The **Language** menu allows you to manage additional languages and translations for your app. This includes features to help you to translate a text in all places where it appears with a single change instead of having to change each occurrence individually:

{{% image_container width="300" %}}![Language Menu](attachments/language/language-menu.png)
{{% /image_container %}}

### 3.1 Menu Items Overview

The **Language** menu items are described in the table below:

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Current Language** | Choose the current language from one of the languages set up in **Language Settings…**. | *None* |
| **Select Previous Language** | Choose the previous language in the list of languages chosen in **Language Settings…**. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> |
| **Select Next Language** | Choose the next language in the list of languages chosen in **Language Settings…**. | <kbd>Ctrl</kbd> + <kbd>L</kbd> |
| [Language Settings…](language-settings) | Choose which languages are supported by the app and configure date and time settings. | *None* |
| [Batch Replace…](batch-replace) | Change all occurrences of chosen translatable texts in the current language where they are identical. | *None* |
| [Batch Translate…](batch-translate) | Add and edit translations from a selected source language to a selected target language | *None* |
| [Language Operations…](language-operations) | Manipulate (for example, copy) translations between languages. | *None* |

## 4 Setting the End-User's Language

The language which is displayed to the end-user is determined by the **Language** object which is associated with the **User** object for the current end-user via the association **User_Language**. If the end-user is not associated with a language, or if the associated language is not one of those set in the app, then the end-user will see pages in the default language.

![System Domain Model for User and Language](attachments/language/user-language-domain-model.png)

If you allow end-users to change their display language within the app, the changes will not be applied immediately. This is because the translatable texts for the app are already set to the end-users original language.

There are two options to ensure that the language is changed:

1. Ask the end-user to do something manually
    * sign out and sign in again
    * use their browser's refresh command
2. Force Mendix to reload the page – for example by doing the following:
    1. Add the platform supported widget [HTML / JavaScript Snippet](https://appstore.home.mendix.com/link/app/56/) to your app.
    2. Create a pop-up page.
    3. Place the HTMLSnippet widget on the pop-up page.
    4. Add the **JavaScript** content `mx.reloadWithState();` to the widget.
    5. Open your new pop-up page from a microflow when you want to switch the user's language.

    ![System Domain Model for User and Language](attachments/language/reload-with-state.png)

## 5 Read More

There is a worked example of adding a translation in [How to Translate Your App Content](/howto/collaboration-requirements-management/translate-your-app-content)

See also [How To Use Translatable Validation Messages](/howto/logic-business-rules/translatable-validation-messages) for information on translating validation messages.

For more explanations and ideas for refreshing the page when the language is changed see the Mendix forum question [Change language by clicking a link](https://forum.mendixcloud.com/link/questions/91821).

Switching languages for anonymous users is also discussed in the Mendix Forum. For example in this question: [Anonymous User Journey](https://forum.mendixcloud.com/link/questions/91676).
