---
title: "Datasets"
url: /refguide9/data-sets/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A dataset can be used to define the data shown in [reports](/refguide9/report-widgets/) in [pages](/refguide9/pages/).

A dataset is defined using either an [OQL query](/refguide9/oql/) or a custom [Java action](/refguide9/java-actions/). To constrain a dataset, parameters can be defined which can be used in the OQL query or Java action.

## General

Fields for datasets contain the following properties:

* **Name** – This is the name of the dataset.
* **Description** – This is the description of the dataset, it is only relevant as documentation.

## Source

* **OQL query** – This is the [OQL query](/refguide9/oql/) which defines the dataset.
* **Java action** – This is the interface of the Java action which returns a dataset. The columns and [data types](/refguide9/data-types/) of the columns need to be specified in Studio Pro. Based on this specification, Studio Pro will create a template for this action.

The following shows an example OQL query that calculates the aggregated total order amount for all orders of a customer for a specific group of customers:

```sql
FROM CRM.Customers As CustomerObj
INNER JOIN CustomerObj/CRM.Orders_Customer/CRM.Orders As OrderObj
WHERE CustomerObj/CRM.Customer_Group = $ParGroup
GROUP BY CustomerObj/Name
SELECT CustomerObj/Name As Name, SUM(OrderObj/TotalAmount) As TotalAmount
```

## Parameters

A dataset can have multiple parameters. Parameters are used to filter / manipulate datasets. Security on datasets is configured based on the parameters. In a Java action, the parameters are used in the generated template.

{{% alert color="info" %}}
In OQL, parameters can be called using a **$** symbol, for example: **$Month**.
{{% /alert %}}

A parameter has the following configurable properties:

* **Name** – This is the name of the parameter.
* **Type** – The type of the parameter can be: **Boolean**, **Date and time**, **Enumeration**, **Decimal**, **Integer/Long**, or **Object**.
* **Constraints** – The constraints on a parameter influence which values can be selected for parameter input values by the end-user. Constraints can be associated with [user roles](/refguide9/user-roles/) in dataset security. There are two types of constraints: 
    * Ranges which apply to numeric and date parameters
    * XPath constraints which apply to object parameters
* **Ranges** – When a parameter is defined as a range, the drop-down box in the report shows each range instead of all values within the ranges. Decimal parameters are always ranges.
* **XPath Constraints** – An XPath constraint can be defined using [XPath](/refguide9/xpath/). Multiple constraints can be defined on a parameter and each constraint can be associated with a user role.
