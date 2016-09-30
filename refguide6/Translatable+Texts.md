---
title: "Translatable Texts"
space: "Reference Guide 6"
category: "Modeler"
---


All texts that are presented to the end user can be translated to different languages. Examples include [labels](Label), the captions of [buttons](Button+Widgets) and [data grid](Data+grid) columns, [menu items](Menu+Item) and [messages](Show+Message) that are sent from a [microflow](Microflows).

The Modeler makes it really easy to translate your application to another language. You can add a language in the [project settings](Project+Settings) and then you can switch to that language using the drop-down in the toolbar. For texts that have not been translated yet the text in the default language is shown between pointy brackets. For example, a caption can be shown as '<Name>'. This means that the caption has not been translated yet and was 'Name' in the default language. By simply typing the text in the currently selected language (e.g. 'Naam' in Dutch) the caption has been translated.

<div class="alert alert-success">{% markdown %}

To ease the translation of many texts a Batch Translate feature can be found in the Tools menu. By using this feature you can quickly translate all occurrences of a word to a word in another language. It is even possible to export all texts to Excel and later import the translations again.

{% endmarkdown %}</div>

If a text has not been translated when you run the application the text in the default language will be used. In this way, you can translate parts of the application and see the results immediately.

(visible to Mendix employees only)

 Improve documentation

*   Add examples and screenshots
*   How do you control which language is displayed to end users?
*   Mention that you can't test languages using the MxAdmin default admin. You need a proper (demo)user.
