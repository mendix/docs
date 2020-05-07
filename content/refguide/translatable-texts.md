---
title: "Translatable Texts"
category: "App Modeling"
menu_order: 80
tags: ["studio pro", "translation", "languages", "translatable text"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

All texts that are presented to the end-user can be translated to different languages. Examples include [labels](label), the captions of [buttons](button-widgets) and [data grid](data-grid) columns, [menu items](menu#menu-item) and [messages](show-message) that are sent from a [microflow](microflows).

Studio Pro makes it easy to translate your application into another language. You can add a language in the [Project Settings](project-settings) and then switch to that language by selecting it in the [Language](menus#language) menu, by using the drop-down in the lower-right corner of Studio Pro's main window, or with the <kbd>Ctrl</kbd>+<kbd>L</kbd> keyboard shortcut, which cycles through the languages of your app.

For texts that have not been translated yet, the text in the default language is shown between angle brackets. For example, a caption can be shown as `<Name>`. This means that the caption has not been translated yet and was `Name` in the default language. By simply typing the text in the currently selected language (for example, `Naam` in Dutch), the caption will be translated.

{{% alert type="info" %}}
To ease the translation if you have a lot of texts, a Batch Translate feature can be found in the Tools menu. By using this feature you can quickly translate all occurrences of a word to a word in another language. It is even possible to export all texts to Excel and later import the translations again.
{{% /alert %}}

If a text has not been translated when you run the application the text in the default language will be used. In this way, you can translate parts of the application and see the results immediately.

## 2 Read More

* [How to Translate Your App Content](/howto/collaboration-requirements-management/translate-your-app-content)
