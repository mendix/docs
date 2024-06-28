---
title: "Datasets"
url: /refguide7/data-sets/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A dataset can be used to define the data shown in [reporting widgets](/refguide7/report-widgets/) in [pages](/refguide7/pages/).

A dataset is defined using either an [OQL query](/refguide7/oql/) or a custom [Java action](/refguide7/java-actions/). To constrain a dataset, parameters can be defined which can be used in the OQL query or Java action.

Datasets have the following fields:

## General

* *Description*: The description of the dataset, this is only relevant as documentation.

## Source

* *OQL query*: The [OQL query](/refguide7/oql/) which defines the dataset.

* *Java action*: The interface of the Java action which returns a dataset. The columns and [data types](/refguide7/data-types/) of the columns need to be specified in the Desktop Modeler. Based on this specification the Desktop Modeler will create a template for this action.

The following shows an example OQL query that calculates the aggregated total order amount for all orders of a customer for a specific group of customers:

```java
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

* *Name*: The name of the parameter

* *Type*: The type of the parameter: Object, Enumeration or a primitive (for example, DateTime, Float, Integer, Boolean, etc). See [Data Types](/refguide7/data-types/) for the possible parameter types.

* *Constraints*: The constraints on a parameter. These constraints influence which values can be selected for parameter input values by the end user. Constraints can be associated with user roles in the dataset security. There are two type of constraints: ranges which apply to numeric and date parameters and XPath constraints which apply to object parameters.

* *Ranges*: When a parameter is defined as a range the drop-down box in the report shows each range instead of all values within the ranges. Currency (deprecated), float (deprecated) and decimal parameters are always ranges.

**XPath constraints**

An XPath constraint can be defined using [XPath](/refguide7/xpath/). Multiple constraints can be defined on a parameter and each constraint can be associated with a [user role](/refguide7/user-roles/).
