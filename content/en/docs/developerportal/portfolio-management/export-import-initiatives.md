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

In [Portfolio Management](/developerportal/portfolio-management/), you can import initiatives to a portfolio using an Excel file. This enables you to import already-defined initiatives and thus rapidly get started. You can also export a whole portfolio board or a subset of initiatives to an Excel file. This allows you to move initiatives from one board to another, or export initiatives to generate reports.

## 2 Prerequisites

* You need to have at least the [Contributor](/developerportal/portfolio-management/#access-management) role for the portfolio.

## 3 Procedure

### 3.1 Exporting Initiatives {#export-initiatives}

{{% alert color="info" %}}
Each time, you can only export initiatives from one portfolio. It is not possible to export all the portfolios in one go.

You can only export the active initiatives, not the archived ones.
{{% /alert %}}

1. In Portfolio Management, click the portfolio to open it. The portfolio opens. You can see the **Initiatives Overview** page.

2. If you only want to export a selection of initiatives, before you start exporting initiatives, use **Filters** on the upper-right corner of the **Initiatives Overview** page to filter the initiatives that you want to export.

3. Click the following icon on the upper-right corner to open a drop-down menu:

   {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/export-import-icon.png"  width="600"  >}}

4. On the drop-down menu, select **Export Initiatives**. The **Export Initiatives** dialog box opens:

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

1. In Portfolio Management, click the portfolio to open it. The portfolio opens. You can see the **Initiatives Overview** page.

2. On the **Initiatives Overview** page, click the following icon on the upper-right corner to open a drop-down menu:

   {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/export-import-icon.png"  width="600"    >}}

3. On the drop-down menu, select **Import Initiatives**. The **Import Initiatives** dialog box opens.

4. To prevent any errors, download the Excel file template from the **Import Initiatives** dialog box, and use it as the template to import your initiatives. When you prepare your Excel file, make sure it meets the following requirements:

   * There should be maximum 500 rows in the Excel file.

   * The Excel file should not contain any columns other than the ones listed in the table below. The data in the Excel file should meet the requirements specified in the table below.

     {{% alert color="info" %}}If you import initiatives using an Excel file [exported from a portfolio](#export-initiatives), the Excel file contains the following additional columns: **RICEScore**, **WSJFScore**, **ExpectedValue**,  and **CreationDate**. You can import this Excel file as it is, but the data from these columns will not be imported.{{% /alert %}}

   | Column | Required                                                     | Format                       | Additional Constraints | Remarks               | Example Value                          |
   | --------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |--| -------------------------------------- |
   | **Name**              | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/check-mark.svg" >}} | String                       |  Character limit: 200                                                           | If an initiative with the same name already exists in the portfolio, a duplicate will be created. |`My first initiative`|
   | **Stage**             | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/check-mark.svg" >}} | String                       |  Character limit: 200                                                             | If a stage does not exist in the portfolio, it will be created. |`Proposal`|
   | **Tags**              | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |  <ul><li>Character limit: 50 per tag.</li></ul> <ul><li>Multiple tags should be separated by commas.</li></ul>     | If a tag does not exist in the portfolio, it will be created. |`Important, Operational, Architecture`|
   | **Description**       | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |                                                              |                               |`A description of the initiative.`|
   | **Department**        | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |  Character limit: 200                                                              | If a department does not exist in the portfolio, it will be created. |`Finance`|
   | **Country**           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | Only countries that appear as options for **Countries** on the [Portfolio Settings](/developerportal/portfolio-management/#portfolio-settings) page can be filled in. |                           |`Netherlands`|
   | **UseCase**          | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       |  Character limit: 200                                                              |                            |`Innovation`|
   | **IntakeDate**       | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | The year must be between 1900 and 9999.                      |                           |`28/Jul/2022`|
   | **StartDate**        | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | <ul><li>The year must be between 1900 and 9999.</li></ul> <ul><li>Start Date has to be sooner than Go-Live Date.</li></ul> |                           |`30/Jul/2022`|
   | **GoLiveDate**      | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | <ul><li>The year must be between 1900 and 9999.</li></ul> <ul><li>Go-Live Date has to be later than Start Date.</li></ul> |                           |`30/Jul/2023`|
   | **RICEReach**        | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Integer                      | Only a positive number is allowed.                           |                                    |`50`|
   | **RICEImpact**       | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. |                                |`Medium`|
   | **RICEConfidence**   | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. |                                  |`High`|
   | **RICEEffort**       | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Integer                      | Only a positive number is allowed.                           |                                    |`12`|
   | **WSJFBusinessValue** | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                                |`Medium`|
   | **WSJFTimeCriticality** | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                               |`Highest`|
   | **WSJFRiskReduction** | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                                |`Medium`|
   | **WSJFJobSize**     | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                                    |`XS`|

5. When your Excel file is ready to be imported, drag it to the **Import Initiatives** dialog box, or click **Upload** and select the file.

6. Click **Import**.

All the initiatives in the Excel file are imported successfully. You can see the initiatives on the **Initiatives Overview** page. 
