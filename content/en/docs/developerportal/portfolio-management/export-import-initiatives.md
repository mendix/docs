---
title: "Export and Import Initiatives"
url: /developerportal/portfolio-management/export-import-initiatives/
parent: "portfolio-management"
weight: 200
description: "Describes how to import and export the initiatives in the Mendix Portfolio Management app."
tags: ["initiatives", "import", "export", "Portfolio Management"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

In [Portfolio Management](/developerportal/portfolio-management/), sometimes you need to move initiatives from one board to another, or export initiatives to generate reports. In scenarios like this, you need to export or import the whole or a subset of a portfolio board. 

## 2 Prerequisites

* You need to have at least the Contributor role for the portfolio.

## 3 Procedure

### 3.1 Exporting Initiatives {#export-initiatives}

1. If you only want to export a selection of initiatives, before you start, use **Filters** on the upper-right corner of the **Initiatives Overview** page to filter the initiatives that you want to export.

2. You can only export the current portfolio initiatives. It is not possible to export all portfolios in one export.

3. Only the active initiatives will be exported, archived initiatives will not.

4. Click the following icon on the upper-right corner to open a drop-down menu:

   {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/export-import-icon.png"  width="600"  >}}

5. On the drop-down menu, select **Export Initiatives**. The **Export Initiatives** dialog box opens:

   * Click **Export All** to export all initiatives of the portfolio.
   * Click **Export Selection** to only export the selection of your currently-filtered initiatives.

The initiatives are exported to an Excel file.

{{% alert color="info" %}}
All the details of an initiative are exported, except the data of the following fields:

* **Linked App**
* **Owner**
* **Created By**
* **Comments**
* **Attachments**
* **Additional Information** of the **Expected Value**
  {{% /alert %}}

### 3.2 Importing Initiatives {#import-initiatives}

1. On the **Initiatives Overview** page, click the following icon on the upper-right corner to open a drop-down menu:

   {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/export-import-icon.png"  width="600"    >}}

2. On the drop-down menu, select **Import Initiatives**. The **Import Initiatives** dialog box opens.

3. To prevent any errors, download the Excel file template from the **Import Initiatives** dialog box, and use it as the template to import your initiatives. When you prepare your Excel file by yourself, make sure it meets the following requirements:

   * There should be maximum 500 rows in your Excel file.
   * The import file cannot contain any other columns than the ones that are allowed to be imported (with the exception of the ones from the export file that will not be imported).
   * You can use html tags for styling the **Description** field.
   * If a certain **Stage**, **Department**, **Tag** or **UseCase** does not exist in the portfolio, it will be created.
   * If an initiative with the same name already exists in the portfolio, a duplicate will be created.
   * The data and headers in your Excel file should meet the requirements as shown in the table below:

   |                       | Required                                                     | Format                       | Additional Constraints                                       | Example Value                          |
   | --------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ | -------------------------------------- |
   | Name                  | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/check-mark.svg" >}} | String                       |  Character limit: 200                                                           | `My first initiative`                  |
   | Stage                 | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/check-mark.svg" >}} | String                       |  Character limit: 200                                                             | `Proposal`                             |
   | Tags                  | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |  <ul><li>Character limit: 50 per tag.</li></ul> <ul><li>Multiple tags should be separated by commas.</li></ul>     | `Important, Operational, Architecture` |
   | Description           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |                                                              | `<h1>A description of the initiative<h1/>`      |
   | Department            | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |  Character limit: 200                                                              | `Finance`                              |
   | Country               | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | Only countries that appear as options for **Countries** on the [Portfolio Settings](/developerportal/portfolio-management/#portfolio-settings) page can be filled in. | `Netherlands`                          |
   | UseCase              | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |  Character limit: 200                                                              | `Innovation`                           |
   | IntakeDate           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | The year must be between 1900 and 9999.                      | `28/Jul/2022`                          |
   | StartDate            | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | <ul><li>The year must be between 1900 and 9999.</li></ul> <ul><li>Start Date has to be sooner than Go-Live Date.</li></ul> | `30/Jul/2022`                          |
   | GoLiveDate          | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | <ul><li>The year must be between 1900 and 9999.</li></ul> <ul><li>Go-Live Date has to be later than Start Date.</li></ul> | `30/Jul/2023`                          |
   | RICEReach            | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Integer                      | Only a positive number is allowed.                           | `50`                                   |
   | RICEImpact           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. | `Medium`                               |
   | RICEConfidence       | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. | `High`                                 |
   | RICEEffort           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Integer                      | Only a positive number is allowed.                           | `12`                                   |
   | WSJFBusinessValue   | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `Medium`                               |
   | WSJFTimeCriticality | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `Highest`                              |
   | WSJFRiskReduction   | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `Medium`                               |
   | WSJFJobSize         | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `XS`                                   |

4. When your Excel file is ready to be imported, drag it to the **Import Initiatives** dialog box, or click **Upload** and select the file.

5. Click **Import**.

All the initiatives in the Excel file are imported successfully. You can see the initiatives on the **Initiatives Overview** page. 

{{% alert color="info" %}}
If you import initiatives using an Excel file [exported from a portfolio](#export-initiatives), the data from the following columns are not imported:

*  **RICEScore**
*  **WSJFScore**
*  **ExpectedValue**
*  **CreationDate**
{{% /alert %}}

