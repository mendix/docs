---
title: "Return Value Mapping"
url: /refguide/return-value-mapping/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

In Studio Pro 11.5 and above, pages and snippets can use [return values](/refguide/end-event/#return-value) when calling microflows or nanoflows by specifying a return value mapping. This feature enhances microflow and nanoflow reusability by allowing pages to decide how to use return values. In previous versions, modifying values on a page from a microflow or nanoflow require an additional entity passed as a parameter, resulting in many page-specific variations of the same logic.

Return values can be mapped to available variables on a page or snippet. Both primitive and object return value types are supported. By using an expression, the return value can be transformed as needed before assignment.

You can add more than one return value mapping to the same flow call. This is particularly useful when assigning multiple computed values to different variables from the same return value.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/return-value-mapping/return-value-mapping-list.png" max-width=80% >}}

## Supported Return Values

Return value mapping supports both primitive values and objects from the microflow or nanoflow return value.

### Supported Primitive Types

The following primitive types can be mapped directly:

* Boolean
* Date and time
* Decimal
* Enumeration
* Integer/Long
* String

### Object Attributes

When a microflow or nanoflow returns an object, you can select specific attributes from that object. This allows you to extract individual values from the returned object without needing to work with the entire object on the page.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/return-value-mapping/variable-return-value-mapping.png" max-width=80% >}}

### Lists Not Supported

Return value mapping does not support list return values. If your microflow or nanoflow returns a list, you cannot use return value mapping to capture it.

## Transforming Return Values

You can use expressions to transform return values before they are assigned. In the expression, the return value is available as `$ActionReturnValue`.

When the microflow or nanoflow returns an object, you can access attributes using `$ActionReturnValue/AttributeName`. This allows you to apply transformations to attributes, before assigning the value.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/return-value-mapping/expression-return-value-mapping.png" max-width=80% >}}

For example, if a microflow returns an **Order** object with a **TotalAmount** attribute (Decimal), you can format it as currency before assigning it to a string page variable:

```
formatDecimal($ActionReturnValue/TotalAmount, '$#,##0.00')
```

## Page Variable Assignment

Return values can be assigned to various targets available on the page or snippet.

### Available Targets

The following targets are available for return value mapping:

* **Page and snippet variables** – Variables defined on the current page or snippet
* **Page and snippet parameters** – Parameters of the current page or snippet
* **Attributes of objects on the page** – Attributes of objects available in data views or other data containers on the page

### Type Matching

The target variable or attribute must have a compatible data type with the return value. When using expressions, the result type of the expression must match the target type.

For example:

* A decimal return value can be assigned directly to a decimal page variable
* A decimal return value can be transformed with an expression like `formatDecimal($ActionReturnValue, '#,##0.00')` and assigned to a string page variable
* An object attribute can be extracted and assigned to a matching primitive variable
