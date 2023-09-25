---
title: "Import and Export Initiatives"
url: /developerportal/portfolio-management/import-export-initiatives/
parent: "portfolio-management"
weight: 200
description: "Describes how to import and export the initiatives in the Mendix Portfolio Management app."
tags: ["initiatives", "import", "export", "Portfolio Management"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

You can import and export initiatives in the [Portfolio Management]() app.

## 2 Prerequisite

## 3 Procedure

### 3.1 Importing Initiatives

1. On the **Initiatives Overview** page, click the following icon on the upper-right corner:

   {{< figure src="/attachments/developerportal/portfolio-management/import-export-initiatives/import-export-icon.png"  width="600"    >}}

2. Select **Import Initiatives**. The **Import Initiatives** dialog box opens.

3. Drag your Excel file which contains the initiatives that you want to export to the **Import Initiatives** dialog box, or click **Upload** and select the file.

4. Click **Import**.

All the initiatives are imported successfully. You can see them on the **Initiatives Overview** page.

### 3.2 Exporting Initiatives

1. If you do not want to export all the initiatives in a portfolio, use **Filters** on the upper-right corner of the **Initiatives Overview** page to only select the initiatives that you want to export.

2. On the **Initiatives Overview** page, click the following icon on the upper-right corner:

   {{< figure src="/attachments/developerportal/portfolio-management/import-export-initiatives/import-export-icon.png"  width="600"  >}}

3. Select **Export Initiatives**. The **Export Initiatives** dialog box opens:

   * If you only export your selected initiatives, click **Export Selection**.
   * If you export all the initiatives in the portfolio, click **Export All**.

The initiatives are exported to an Excel file.

{{% alert color="info" %}}All the details of an initiative is exported, except the attachments, owners, linked apps, and comments.{{% /alert %}}
