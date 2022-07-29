---
title: "Translating Your App to Multiple Languages"
url: /studio/language-support/
category: "General Info"
weight: 20
description: "Describes how you can translate your app to other languages."
tags: ["studio", "language", "translate", "translations"]
---

## 1 Introduction 

Delivering your Mendix app in multiple languages is an important capability when you want to provide the same app to people speaking different languages. Using the language features of Mendix, you can quickly make your app multilingual and translate your page content to all configured languages. This means that texts that are presented to end-users, such as button captions, screen titles, menu items, can be translated to other languages than the default language.  

{{% alert color="info" %}}

Translating your app to other languages is available in Mendix Studio if multiple languages were set up in your app in Mendix Studio Pro. For more information on language settings, see [Language Menu](/refguide/translatable-texts/) in *Studio Pro 9 Guide*.  

{{% /alert %}}

## 2 Switching the Currently Selected Language

You can switch the selected language in the top menu bar:

{{< figure src="/attachments/studio/general/language-support/selected-language.png" >}}

## 3 Translating Texts

When multiple languages are set up in your app, one language is set as the default language. All untranslated texts in other languages will be displayed in the default language when you run the app. When you change the text in the default language, all untranslated texts will fall back to the new text. 

When working in a language which is not the default, you can identify texts that have not been translated yet. They show the text in the default language between angle brackets. For example, `<Name>`. 

You can replace the text with the appropriate translation for the currently selected language. To replace the text, do the following:

1. Selected the element and navigate to its properties.

2. Depending on the element, find the **Content**, **Caption**, or **Template** property and click the **Translations** drop-down menu:

    {{< figure src="/attachments/studio/general/language-support/translations-drop-down.png" >}}

3. You will see a drop-down menu where you can scroll through languages available in your app and type in translations for the text. The order you see languages in depends on the currently selected language in the top menu bar and to the default language:

    {{< figure src="/attachments/studio/general/language-support/language-diagram.png" >}}   

If you add new widgets to your app while you are not in the default language, any new translatable texts for those widgets will be added to the currently selected language. The text in the default language will either be left blank or will have the placeholder text for the widget:

{{< figure src="/attachments/studio/general/language-support/current-language.png" >}}   

{{% alert color="info" %}}

To be able to switch between languages in the previewed or published app, ask your team members to implement the language toggling behavior in Studio Pro.

{{% /alert %}}

## 4 Widgets and Elements Available for Translation

You can translate the following widgets and elements in your app:

* [Button captions](/studio/page-editor-widgets-buttons/#general)
* [Text widget](/studio/page-editor-widgets-text/#content)
* [Data grid columns](/studio/page-editor-data-grid/#grid-columns)
* [Menu items](/studio/navigation/#properties-of-menu-items)
* Messages that are configured in **Show Message** actions of a microflow
* [Enumeration](/studio/domain-models-enumeration/) texts

## 5 Read More

* [General Info](/studio/general/)
* [Language Menu](/refguide/translatable-texts/)
