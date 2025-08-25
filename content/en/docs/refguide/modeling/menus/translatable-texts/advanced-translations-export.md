---
title: "Advanced Translations Export"
url: /refguide/advanced-translations-export/
weight: 60
---

## Introduction

**Advanced Translations Export** allows you to export translations to Microsoft Excel (*.xlsx*) or PO (*.po*) format files.

## Using Advanced Translations Export

To export languages, from the top-bar menu, select **Language > Advanced Translations Export** and choose one of the following options:

* **As Excel (.xlsx) file** – export translations to a Microsoft Excel (*.xlsx*) format file
* **As PO (.po) files** – export translations to PO (*.po*) format files

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/advanced-translations-export.png" alt="Advanced Translations Export" >}}

When you select an option, a directory selector appears. Select the directory containing the files you want to export.

A pop-up will appear confirming the start of the export.

### Export as Excel

Click **As Excel (*.xlsx) file** and select a directory for the export. Studio Pro will create a subdirectory named in the format `Export_{app-name}_Xlsx_{time-stamp}`. The translations will be saved as a Microsoft Excel (*.xlsx*) format file. The file will be named in the format `{app-name}-translations.xlsx` (e.g. *App-translations.xlsx*) and contain the following columns:

* `Mendix Reference`
* `Module`
* `Document`
* `Path to element`
* `Element`
* `Source Text ({source_language})`
* `{translation_language 1}`
* ...
* `{translation_language_n}`

{{< figure src="/attachments/refguide/modeling/menus/translatable-texts/advanced-translations-excel.png" alt="Advanced Translations Export Excel" >}}

{{% alert color="warning" %}}
The formats of the Excel file for **Advanced Translations Export** and [Advanced Translations Import](/refguide/advanced-translations-import/) are similar. However, the files are incompatible with export to Excel and import from Excel in [Batch Replace](/refguide/batch-replace/) and [Batch Translate](/refguide/batch-translate/).
{{% /alert %}}

### Export as PO

Click **As PO (`*.po*`) files** and select a directory for the export. Studio Pro will create a subdirectory named in the format `Export_{app-name}_Po_{time-stamp}`. The translations will be saved as PO (`*.po*`) format files. The files will be named in the format `{app-name}-{language}.po` (e.g. *App-en_US.po*).

{{% alert color="warning" %}}
The formats of the PO files for **Advanced Translations Export** and [Advanced Translations Import](/refguide/advanced-translations-import/) are similar.
{{% /alert %}}

After completion, a confirmation pop-up appears. If the operation fails, a failure pop-up is displayed instead.

{{% alert color="warning" %}}
Do not close the app while the export is running.
{{% /alert %}}
