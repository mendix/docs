---
title: "Advanced Translations Import"
url: /refguide/advanced-translations-import/
weight: 50
---

## Introduction

**Advanced Translations Import** allows you to import translations from Microsoft Excel (*.xlsx*) or PO (*.po*) format files.

## Using Advanced Translations Import

To import languages, from the top-bar menu, select **Language > Advanced Translations Import** and choose one of the following options:

* **From Excel (.xlsx) file** – import translations from a Microsoft Excel (*.xlsx*) format file
* **From PO (.po) files** – import translations from PO (*.po*) format files

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/advanced-translations-import.png" alt="Advanced Translations Import" >}}

When you select an option, a directory selector appears. Select the directory containing the files you want to import. 

A pop-up will appear confirming the start of the import.

### Import from Excel

Click **From Excel (.xlsx) file** and select a directory containing a Microsoft Excel (*.xlsx*) format file. The file needs to meet the following requirements:

* The file must be named in the format `{app-name}-translations.xlsx` (e.g. *App-translations.xlsx*)
* The file must have the following columns: 
    * `Mendix Reference`
    * `Module`
    * `Document`
    * `Path to element`
    * `Element`
    * `Source Text ({source_language})`
    * `{translation_language 1}`
    * ...
    * `{translation_language_n}`

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/advanced-translations-excel.png" alt="Advanced Translations Import Excel" >}}

{{% alert color="warning" %}}
The formats of the Excel file for **Advanced Translations Import** and [Advanced Translations Export](/refguide/advanced-translations-export/) are similar. However, the files are incompatible with import from Excel and export to Excel in [Batch Replace](/refguide/batch-replace/) and [Batch Translate](/refguide/batch-translate/).
{{% /alert %}}

### Import from PO

Click **From PO (.po) files** and select a directory containing PO (*.po*) format files. The files must be named in the format `{app-name}-{language}.po` (e.g. *App-en_US.po*).

{{% alert color="warning" %}}
The formats of the PO files for **Advanced Translations Import** and [Advanced Translations Export](/refguide/advanced-translations-export/) are similar.
{{% /alert %}}

After completion, a confirmation pop-up appears. If the operation fails, a failure pop-up is displayed instead.

{{% alert color="warning" %}}
Do not close the app while the import is running.
{{% /alert %}}
