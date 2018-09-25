---
title: "Data Sets"
category: "Desktop Modeler"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A data set can be used to define the data shown in [reporting widgets](report-widgets) in [pages](pages).

A data set is defined using either an [OQL query](oql) or a custom [Java action](java-actions). To constrain a data set parameters can be defined, which can be used in the OQL query or Java action.

Data sets have the following fields:

## General

*   _Description_: The description of the data set, this is only relevant as documentation.

## Source

*   _OQL query_: The [OQL query](oql) which defines the data set.
*   _Java action_: The interface of the Java action which returns a data set. The columns and [data types](data-types) of the columns needs to be specified in the modeler. Based on this specification the modeler will create a template for this action.

The following shows an example OQL query that calculates the aggregated total amount for all orders of a customer for a specific group of customers:

```java
FROM CRM.Customers As CustomerObj
INNER JOIN CustomerObj/CRM.Orders_Customer/CRM.Orders As OrderObj
WHERE CustomerObj/CRM.Customer_Group = $ParGroup
GROUP BY CustomerObj/Name
SELECT CustomerObj/Name As Name, SUM(OrderObj/TotalAmount) As TotalAmount
```

## Parameters

A dataset can have multiple parameters. Parameters are used to filter / manipulate data sets. Security on data sets is configured based on the parameters. In a Java action the parameters are used in the generated template.

{{% alert type="info" %}}

In OQL parameters can be called using a **$** symbol, for example: **$Month**.

{{% /alert %}}

A parameter has the following configurable properties:

*   _Name_: The name of the parameter
*   _Type_: The type of the parameter: Object, Enumeration or a primitive (e.g. DateTime, Float, Integer, Boolean, etc). See [Data Types](data-types) for the possible parameter types.
*   _Constraints_: The constraints on a parameter. These constraints influence which values can be selected for parameter input values by the end user. Constraints can be associated with user roles in the data set security. There are two type of constraints: ranges which apply to numeric and date parameters and XPath constraints which apply to object parameters.

_Ranges_

When a parameter is defined as a range the drop-down box in the report shows each range instead of all values within the ranges. Currency (deprecated), float (deprecated) and decimal parameters are always ranges.

_XPath constraints_

An XPath constraint can be defined using [XPath](xpath). Multiple constraints can be defined on a parameter and each constraint can be associated with a [user role](user-roles).
