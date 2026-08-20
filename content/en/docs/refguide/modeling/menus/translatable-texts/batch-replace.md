---
title: "Batch Replace"
url: /refguide/batch-replace/
weight: 20
---

## Introduction

Use **Batch Replace** to replace existing text in the currently selected language.

This feature is useful when you need to do the following:

* Standardize inconsistent text that appears in multiple places (for example, text that sometimes uses capital letters and sometimes does not) — reusing text improves the user experience
* Consolidate identical text so you only need to enter the translation once — this saves time and improves consistency
* Update all occurrences of common labels or text with better wording in a single operation

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/batch-replace/batch-replace.png" class="no-border" width="600" >}}

## Using Batch Replace

Batch Replace works on the currently selected language. First, select the language you want to work on. For more information, see [Working in the Currently Selected Language](/refguide/translatable-texts/#selected-language) in *Language Menu*.

### Documents/Modules

You can select one or more modules to use for Batch Replace. For example, you may want to ignore text from imported and system modules in the default language, or concentrate on replacing only the system messages in your chosen language.

Click **Select** and select the modules you want to work on.

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/batch-replace/batch-replace-modules.png" alt="Module selection screen" class="no-border" width="400" >}}

By default, all modules in the app are included.

### Search

To search for similar phrases, type what you want to search for.

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/batch-replace/batch-replace-search.png" alt="Batch translate search" class="no-border" width="600" >}}

By default, all translatable text from the selected modules is shown.

Each found text is displayed in the **Text** column.
The **#** column shows the number of times it occurs in the selected modules.

If you select a line, you can view the **Show occurrence** section to see the **Object** containing the text and the **Document** where it appears. Double-clicking the line or clicking **Show occurrence** opens the document and selects the object so you can easily see the context.

{{% alert color="success" %}}
Move the dialog box to one side to get a better view of the document.
{{% /alert %}}

### Replace With

In **Replace with**, type new text to use instead of the existing text. Click **Replace** to confirm the replacement.

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/batch-replace/batch-replace-replace.png" class="no-border" width="600" >}}

Identical replacement and original text are combined into a single entry.

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/batch-replace/batch-replace-replaced.png" alt="Show combined entries" class="no-border" width="600" >}}

## Exporting and Importing Text

If you want to replace text outside Studio Pro, you can export the translatable text to Microsoft Excel (*.xlsx*) format, make changes, and then import the changes from the updated Excel file.

This is particularly useful if you are working on multiple apps and already have text for the system modules that you want to reuse.

### Export to Excel

Click **Export to Excel** to export the currently displayed text items to a Microsoft Excel (*.xlsx*) format file.

The file has the format shown below:

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/batch-replace/batch-replace-excel.png" alt="Sample Excel file" class="no-border" width="600" >}}

**Row 1** – *Filter:* indicates the modules included in the exported file

**Row 2** – indicates the language. The first column represents the current text, and the second column represents the *replace with* text

**Rows 3+** – show the current text

You can make changes in column B, which are processed when the file is imported.

### Import from Excel

Click **Import from Excel** to import a correctly constructed Microsoft Excel (*.xlsx*) format file.

This does the following:

* The selected modules are set to the ones in the *Filter:* line of the file
* Any text that is empty in column B is ignored
* Any text in column A that does not match translatable text in the selected modules is ignored
* Any text in column B that is not ignored is entered into the **Replace with** column

Changes are only made when you click **Replace**.

{{% alert color="warning" %}}
The formats of the Excel files for Batch Replace and Batch Translate are similar. You receive a warning if you try to import a Batch Translate file or a Batch Replace file with the wrong language, but you can still import it if you ignore the warning.
{{% /alert %}}
