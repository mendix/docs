---
title: "Export and Import Initiatives"
url: /developerportal/portfolio-management/export-import-initiatives/
parent: "portfolio-management"
weight: 200
description: "Describes how to import and export the initiatives in the Mendix Portfolio Management app."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

In [Portfolio Management](/developerportal/portfolio-management/), you can import initiatives to a portfolio using an Excel file. This enables you to import already-defined initiatives and thus rapidly get started. You can also export a whole portfolio board or a subset of initiatives to an Excel file. This allows you to move initiatives from one board to another, or export initiatives to generate reports.

## Prerequisites

* You need to have at least the [Contributor](/developerportal/portfolio-management/access-management/#members) role for the portfolio.

## Procedure

### Exporting Initiatives {#export-initiatives}

{{% alert color="info" %}}
Each time, you can only export initiatives from one portfolio. It is not possible to export all the portfolios in one go.
{{% /alert %}}

1. In Portfolio Management, click the portfolio to open the portfolio.

2. Go to the page where the initiatives are listed:

   * To export active initiatives, go to the **Initiatives Overview** page.
   * To export archived initiatives, go to the **Archived** page.

3. To export only specific initiatives, use the **Filters** option on the upper-right corner of the page. This tool allows you to narrow down your selection and export only the initiatives you need.

4. Click the button on the upper-right corner to export initiatives:

   * On the **Initiatives Overview** page, click the {{% icon name="office-sheet" %}} icon and then select **Export Initiatives**. 
   * On the **Archive** page, click {{% icon name="office-sheet" %}} **Export Initiatives**.

   The **Export Initiatives** dialog box opens.

5. Select how you want to export initiatives:

   * To export all initiatives of the portfolio, click **Export All**. 
   * To only export the selection of your initiatives, click **Export Selection**.

The initiatives are exported to an Excel file.

{{% alert color="info" %}}
All the details of an initiative are exported, except the data of the following fields:

* **Linked Apps**
* **Linked Epics**
* **Owner**
* **Created By**
* **Comments**
* **Attachments**
* **Additional Information** of the **Expected Value**
* **Archived By**
  {{% /alert %}}

### Importing Initiatives {#import-initiatives}

1. In Portfolio Management, click the portfolio to open it. The portfolio opens. You can see the **Initiatives Overview** page.

2. On the **Initiatives Overview** page, click the {{% icon name="office-sheet" %}} icon on the upper-right corner and then select **Import Initiatives** in a drop-down menu. The **Import Initiatives** dialog box opens.

3. To prevent any errors, download the Excel file template from the **Import Initiatives** dialog box, and use it as the template to import your initiatives. When you prepare your Excel file, make sure it meets the following requirements:

   * There should be maximum 500 rows in the Excel file.

   * The Excel file should not contain any columns other than the ones listed in the table below. The data in the Excel file should meet the requirements specified in the table below.

    {{% alert color="info" %}}If you import initiatives using an Excel file [exported from a portfolio](#export-initiatives), the Excel file contains the following additional columns: **RICEScore**, **WSJFScore**, **ExpectedValue**, and **CreationDate**. You can import this Excel file as it is, but the data from these columns will not be imported.{{% /alert %}}

   | Column | Required                                                     | Format                       | Additional Constraints | Remarks               | Example Value                          |
   | --------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |--| -------------------------------------- |
   | **Name**              | {{< icon name="checkmark-circle-filled" color="green" >}} | String                       |  Character limit: 200                                                           | If an initiative with the same name already exists in the portfolio, a duplicate will be created. |`My first initiative`|
   | **Stage**             | {{< icon name="checkmark-circle-filled" color="green" >}} | String                       |  Character limit: 200                                                            | If a stage does not exist in the portfolio, it will be created. |`Proposal`|
   | **Status**             | {{< icon name="remove-circle-filled" color="red" >}} | String                      |  Only one of the three statuses can be filled in: `On Track`, `At Risk`, or `Off Track`.  |                                       |`On Track`|
   | **PercentageCompleted**             | {{< icon name="remove-circle-filled" color="red" >}} | Integer                      |  A number between 0–100  || `50`   |
   | **Tags**              | {{< icon name="remove-circle-filled" color="red" >}} | String                       |  <ul><li>Character limit: 50 per tag.</li></ul> <ul><li>Multiple tags should be separated by commas.</li></ul>     | If a tag does not exist in the portfolio, it will be created. |`Important, Operational, Architecture`|
   | **Description**       | {{< icon name="remove-circle-filled" color="red" >}} | String                       |                                                              |                               |`A description of the initiative.`|
   | **Department**        | {{< icon name="remove-circle-filled" color="red" >}} | String                       |  Character limit: 200                                                              | If a department does not exist in the portfolio, it will be created. |`Finance`|
   | **Location**        | {{< icon name="remove-circle-filled" color="red" >}} | String                       |  Character limit: 200                                                              | If a location does not exist in the portfolio, it will be created. |`Utrecht`|
   | **Country**           | {{< icon name="remove-circle-filled" color="red" >}} | String                       | Only countries that appear as options for **Countries** on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page can be filled in. |                           |`Netherlands`|
   | **UseCase**          | {{< icon name="remove-circle-filled" color="red" >}} | String                       |  Character limit: 200                                                              |                            |`Innovation`|
   | **IntakeDate**       | {{< icon name="remove-circle-filled" color="red" >}} | Date-Time                    | The year must be between 1900 and 9999.                      |                           |`28/Jul/2022`|
   | **StartDate**        | {{< icon name="remove-circle-filled" color="red" >}} | Date-Time                    | <ul><li>The year must be between 1900 and 9999.</li></ul> <ul><li>Start Date has to be sooner than Go-Live Date.</li></ul> |                           |`30/Jul/2022`|
   | **GoLiveDate**      | {{< icon name="remove-circle-filled" color="red" >}} | Date-Time                    | <ul><li>The year must be between 1900 and 9999.</li></ul> <ul><li>Go-Live Date has to be later than Start Date.</li></ul> |                           |`30/Jul/2023`|
   | **RICEReach**        | {{< icon name="remove-circle-filled" color="red" >}} | Integer                      | Only a positive number is allowed.                           |                                    |`50`|
   | **RICEImpact**       | {{< icon name="remove-circle-filled" color="red" >}} | String                       | The selectable options can be found in the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. |                                |`Medium`|
   | **RICEConfidence**   | {{< icon name="remove-circle-filled" color="red" >}} | String                       | The selectable options can be found in the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. |                                  |`High`|
   | **RICEEffort**       | {{< icon name="remove-circle-filled" color="red" >}} | Integer                      | Only a positive number is allowed.                           |                                    |`12`|
   | **WSJFBusinessValue** | {{< icon name="remove-circle-filled" color="red" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                                |`Medium`|
   | **WSJFTimeCriticality** | {{< icon name="remove-circle-filled" color="red" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                               |`Highest`|
   | **WSJFRiskReduction** | {{< icon name="remove-circle-filled" color="red" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                                |`Medium`|
   | **WSJFJobSize**     | {{< icon name="remove-circle-filled" color="red" >}} | String                       | The selectable options can be found in the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. |                                    |`XS`|

4. When your Excel file is ready to be imported, drag it to the **Import Initiatives** dialog box, or click **Upload** and select the file.

5. Click **Import**.

All the initiatives in the Excel file are imported successfully. You can see the initiatives on the **Initiatives Overview** page.
