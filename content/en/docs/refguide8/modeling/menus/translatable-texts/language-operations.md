---
title: "Language Operations"
url: /refguide8/language-operations/
weight: 40
tags: ["studio pro", "translation", "languages", "translatable text"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/language-operations.pdf).
{{% /alert %}}

## 1 Introduction

When creating an app in multiple languages, there are a number of tasks which you may want to carry out on all the texts in the app, or in a specific module.

**Language Operations** enable you to perform the following operations for a language dictionary. You can decide which modules the operation applies to:

* **Move** texts from one language dictionary to another
* **Copy** texts from one language dictionary to another
* **Swap** texts between two language dictionaries
* **Delete** texts from one language dictionary

{{< figure src="/attachments/refguide8/modeling/menus/translatable-texts/language-operations/language_operations.png" >}}

## 2 Selecting Modules

In the **Selection** section of the dialog box, you can select the modules that you want to manage.

For each module, you can see the number of translatable texts which have been entered in each language which contains items. The gray columns indicate languages which are not selected in the project, but which contain translated texts. This enables you to remove a language from the project but still have access to the existing texts.

## 3 Performing Operations

Select an **Operation** to carry out on the selected module(s).

There are four language operation options, described below. These can be carried out for any language which has been selected in the app, plus any other languages which have translated texts.

Click **Apply** to apply the selected language operation.

### 3.1 Move

**Move** moves the source language to the destination language, which overwrites all the texts in the destination language with those in the source language and removes the texts in the source.

Select the **Source language** and the **Destination language** from the  drop-down menus.

{{% alert color="info" %}}
* Texts that are absent in the source language will be absent in the destination language – any original text will be removed
* All the texts in the source language will be deleted
{{% /alert %}}

### 3.2 Copy

**Copy** copies the source language to the destination language, which overwrites all the texts in the destination language with those in the source language. Texts are not deleted from the source language.

Select the **Source language** and the **Destination language** from the  drop-down menus.

{{% alert color="info" %}}

Texts that are absent in the source language will be absent in the destination language – any original text will be removed
{{% /alert %}}

### 3.3 Swap

**Swap** replaces the source language with the destination language, and the destination language with the source language.

Select the **Source language** and the **Destination language** from the  drop-down menus.

### 3.4 Delete

**Delete** deletes all the texts in a selected language. 

Select the language from the **Language** drop-down menu.
