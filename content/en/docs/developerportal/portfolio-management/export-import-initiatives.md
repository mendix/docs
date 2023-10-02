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

You can import and export initiatives as an Excel file in the [Portfolio Management]() app.

## 2 Prerequisite

* You need to have at least the Contributor role for the portfolio.

## 3 Procedure

### 3.1 Exporting Initiatives {#export-initiatives}

1. If you only want to export a selection of initiatives, before you start, use **Filters** on the upper-right corner of the **Initiatives Overview** page to select the initiatives that you want to export.

2. Click the following icon on the upper-right corner to open a drop-down menu:

   {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/export-import-icon.png"  width="600"  >}}

3. On the drop-down menu, select **Export Initiatives**. The **Export Initiatives** dialog box opens:

   * If you only export a selection of initiatives in the portfolio, click **Export Selection**.
   * If you export all the initiatives in the portfolio, click **Export All**.

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

3. To prevent any errors, download the Excel file template from the **Import Initiatives** dialog box, and use it as the template to import your initiatives. If you prepare your Excel file by yourself, make sure it meets the following requirements:

   * There should be maximum 500 rows in your Excel file. 
   * The data and headers in your Excel file should meet the requirements as shown in the table below:

   |                       | Required                                                     | Format                       | Char Limit | Additional Constraints                                       | Example Value                          |
   | --------------------- | ------------------------------------------------------------ | ---------------------------- | ---------- | ------------------------------------------------------------ | -------------------------------------- |
   | Name                  | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/check-mark.svg" >}} | String                       | 200        |                                                              | `My first initiative`                  |
   | Stage                 | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/check-mark.svg" >}} | String                       | 200        |                                                              | `Proposal`                             |
   | Tags                  | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String (separated by commas) | 50 per tag |                                                              | `Important, Operational, Architecture` |
   | Description           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | No limit   |                                                              | `A description of the initiative`      |
   | Department            | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        |                                                              | `Finance`                              |
   | Country               | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | Only countries that appear as options for **Countries** on the [Portfolio Settings](/developerportal/portfolio-management/#portfolio-settings) page can be filled in. | `Netherlands`                          |
   | Use Case              | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        |                                                              | `Innovation`                           |
   | Intake Date           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | N/A        | The year must be between 1900 and 9999.                      | `28/Jul/2022`                          |
   | Start Date            | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | N/A        | The year must be between 1900 and 9999.<br>Start Date has to be sooner than Go-Live Date. | `30/Jul/2022`                          |
   | Go-Live Date          | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Date-Time                    | N/A        | The year must be between 1900 and 9999.<br>Go-Live Date has to be later than Start Date. | `30/Jul/2023`                          |
   | RICE Reach            | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Integer                      | N/A        | Only a positive number is allowed.                           | `50`                                   |
   | RICE Impact           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | For more information, check the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. | `Medium`                               |
   | RICE Confidence       | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | For more information, check the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models*. | `High`                                 |
   | RICE Effort           | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | Integer                      | N/A        | Only a positive number is allowed.                           | `12`                                   |
   | WSJF Business Value   | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | For more information, check the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `Medium`                               |
   | WSJF Time Criticality | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | For more information, check the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `Highest`                              |
   | WSJF Risk Reduction   | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | For more information, check the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `Medium`                               |
   | WSJF Job Size         | {{< figure src="/attachments/developerportal/portfolio-management/export-import-initiatives/cross-mark.svg" >}} | String                       | 200        | For more information, check the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models*. | `XS`                                   |

4. When your Excel file is ready to be imported, drag it to the **Import Initiatives** dialog box, or click **Upload** and select the file.

5. Click **Import**.

All the initiatives in the Excel file are imported successfully. You can see the initiatives on the **Initiatives Overview** page. 

{{% alert color="info" %}}
If you import initiatives using an Excel file [exported from a portfolio](#export-initiatives), the data from the following columns are not imported:

*  **RICEScore**
*  **WSJF Score**
*  **ExpectedValue**
*  **CreationDate**
{{% /alert %}}

