---
title: "Text"
url: /studio/page-editor-widgets-text/
description: "Describes typography widgets in Mendix Studio."
weight: 40
tags: ["studio", "page editor", "typography", "text widgets", "widgets"]
---

## 1 Introduction 

Text is a group of [widgets](/studio/page-editor-widgets/) that consists of [Text, Paragraph, Headings (H1-H6)](#text-widget), and the [Page Title](#page-title-widget). They are used to display textual information to the end-user. For example, you can display a text paragraph:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-text/paragraph-example.png"   width="350"  >}}

## 2 Text, Paragraph, and Headings General Properties {#text-widget}

You can use **Text**, **Paragraph**, or **Heading** widgets to display a text to the end-user. In **Properties** > **General**, you can type the text that will be displayed, define if it contains attribute values, and set the [render mode](#render-mode). 

### 2.1 Content {#content}

In **Content**, you define the text that is shown to end-users. You can also display dynamic data here: attribute values and expression outcomes. 

When add attributes, the attribute value is displayed to the user. Choose **Add** > **Attribute** or press <kbd>Ctrl</kbd> + <kbd>Space</kbd> to select an attribute.  For example, when the user logs in to the account, a greeting message can be shown, where *Name* and *NumberOfMessages* are attribute values: 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-text/content-example.png" >}}

You can also configure an expression and display the expression outcome (for more information on expressions, see [Expressions](/studio/expressions/)). Choose **Add** > **Expression Outcome** to write an expression. For example, you can show an price excluding VAT and including it:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-text/content-example-expression.png" alt="Content Example Expressions" >}}

To edit **Content**, double-click the widget on the page.

#### 2.1.1 Translations

{{% alert color="info" %}}

Only available if multiple languages are set up in your app in Mendix Studio Pro. 

{{% /alert %}}

This option allows you to add translations of the button caption to other languages. For more information on how to add translations, see [Translating Your App to Multiple Languages](/studio/language-support/).


### 2.2 Render Mode {#render-mode}

The render mode defines the way a text will be shown to the end-user. Basically, **Text**, **Paragraph**, and **Heading** widgets are different render modes of the same widget. Possible values of the render mode are described in the table below. 

| Value     | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Text      | The text will be rendered inline with the previous/next widgets on a page |
| Paragraph | The text will be rendered as a separate paragraph            |
| H1-H6     | The text will be rendered as a heading. H1 is the largest type of the heading, H6 is the smallest one. |

## 3 Page Title General Properties {#page-title-widget}

The page title widget sets the title of the current page and displays it. This title also appears as the page title in your browser tab.  The title will be displayed in the **H1** style of the **Theme Customizer**. For details, see [Theme Customizer](/studio/theme-customizer/).

If you want to change the name of the page, do the following:

1. Open **Properties** of the widget > the **General** section.
2. Change a name in the **Title** field. 

The page title is changed. 

The **Title** that you see in the page properties and in widget is one and the same. This means, if you make changes to the title in page properties, this change will be displayed in the widget, and vice versa.  

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-text/page-title-interrelation.png" >}}



{{% alert color="info" %}}

You can put several **Title** widgets on your page, but they will all display the same text and cannot be edited individually.

{{% /alert %}}

## 4 Conditional Visibility Section

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

## 5 Design Section {#input-elements-design}

For information on the **Design** section and its properties, see [Design Section](/studio/page-editor-widgets-design-section/).

## 6 Read More

* [Pages](/studio/page-editor/) 
* [Widgets](/studio/page-editor-widgets/)
