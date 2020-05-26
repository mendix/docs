---
title: "Batch Replace"
parent: "translatable-texts"
menu_order: 20
tags: ["studio pro", "translation", "languages", "translatable text"]
---

## 1 Introduction

### 4.1 Consolidating Labels & Perform Batch Replace

There may be some text in your app that occurs in more than one place, so before you translate, it is best to consolidate similar labels so that they stay the same after the translation. The language in your app will be more consistent if you have a high occurrence/text ration, as that means you reuse existing text across your app, which will increase the user experience.

To search for phrases that look similar and replace them as a batch, follow these steps:

1. Go to **Language** > **Batch Replace**.
2. In the **Source text contains** field of the **Batch replace** dialog box, enter the word you want to search for.
3.  The results will appear in the table with the column headers **Text** and **Replace with** (as in the example image below, in which "Schedule" is being searched).

	![](attachments/language/08_batch_replace_2.png)

4. Enter the new replacement text under **Replace with**, and then click **Replace**.

### 4.2 Translating Labels

To translate a label, follow these steps:

1. Select the desired development language from the language drop-down menu in Studio Pro toolbar (which displays "English, United States" by default). Words in your app project will be automatically translated if they are in the library.
2. Words that have not been automatically translated (that is, those words that are in angle brackets) must be manually translated one-by-one or through batch translation (see below).

## 5 Exporting & Importing Translations

If you want to translate a language outside Studio Pro, you can export the translatable texts to the Excel (*.xlsx*) format by clicking **Export to Excel** on the **Batch translate** dialog box. This produces an Excel file with two columns, one for each language. When you’re done, simply import the Excel file into your app project by clicking **Import from Excel** on the **Batch translate** dialog box.