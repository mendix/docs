---
title: "Advanced Translations Import"
url: /refguide/advanced-translations-import/
weight: 50
---

## Introduction

Use **Advanced Translations Import** to import translations from Microsoft Excel (*.xlsx*) or PO (*.po*) format files.

## Using Advanced Translations Import

To import languages, in the top-bar menu, go to **Language > Advanced Translations Import** and choose one of the following options:

* **From Excel (.xlsx) file** – imports translations from a Microsoft Excel (*.xlsx*) format file.
* **From PO (.po) files** – imports translations from PO (*.po*) format files.

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/advanced-translations-import.png" alt="Advanced Translations Import" >}}

When you select an option, a directory selector appears. Select the directory containing the files you want to import.

A confirmation pop-up window appears when the import starts.

### Import from Excel

Click **From Excel (.xlsx) file** and select a directory containing a Microsoft Excel (*.xlsx*) format file. The file must meet the following requirements:

* The file must be named in the format `{app-name}-translations.xlsx` (for example, *App-translations.xlsx*).
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

Click **From PO (.po) files** and select a directory containing PO (*.po*) format files. The files must be named in the format `{app-name}-{language}.po` (for example, *App-en_US.po*).

{{% alert color="warning" %}}
The formats of the PO files for **Advanced Translations Import** and [Advanced Translations Export](/refguide/advanced-translations-export/) are similar.
{{% /alert %}}

After the import completes, a confirmation pop-up window appears. If the operation fails, a failure pop-up window appears instead.

{{% alert color="warning" %}}
Do not close the app while the import is running.
{{% /alert %}}
