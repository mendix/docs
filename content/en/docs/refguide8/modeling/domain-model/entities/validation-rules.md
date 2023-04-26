---
title: "Validation Rules"
url: /refguide8/validation-rules/
weight: 40
tags: ["domain model", "entity", "validation rule"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/validation-rules.pdf).
{{% /alert %}}

## 1 Introduction

Validation rules are conditions that should be satisfied before an object is committed. If a condition defined by a validation rule is not satisfied when the object is committed, the runtime server generates a validation error.

If the object was committed using a form, this results in a validation message.

If the object was committed in a microflow, this results in an error that can be handled using custom error handling.

In all other cases, a validation error results in a Java exception being thrown.

For example, for entity 'Customer' the name and credit need to be filled in at all times, and the expenses cannot be higher than the credit. This is visualized in the domain model editor as follows:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/validation-rules/customer-validation-rules.png" >}}

{{% alert color="warning" %}}
You can only define validation rules for persistable entities as they are designed to ensure database integrity. Therefore, validation rules are disabled for non-persistable entities.
{{% /alert %}}

## 2 Properties

You can add and edit validation rules for an entity from the [entity dialog box](/refguide8/entities/#dialog-box).

An example of the validation rule properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/validation-rules/validation-rule-properties.png" >}}

Validation rule properties consist of the following sections:

* [General](#general)
* [Rule](#rule)

### 2.1 General Properties {#general}

#### 2.1.1 Attribute

**Attribute** specifies the attribute to which the validation rule applies. The validation rules apply to attributes of the entity and, if it has a generalization, the attributes of its generalization.

#### 2.1.2 Error Message

**Error message** defines the message that is displayed to the end-user when the attribute value does not satisfy the condition defined by the validation rule.

### 2.2 Rule Properties {#rule}

#### 2.2.1 Rule

The rule defines which condition an attribute should satisfy.

| Option | Description |
| --- | --- |
| Required *(default)*  | The attribute needs to have a value. It cannot be empty. |
| Unique | The value of this attribute must be different from the values of this attribute in all other objects of the same entity. |
| Equals | The attribute value needs to be equal to a specified value or equal to the value of another attribute of the same object. |
| Range | The attribute value needs to be greater than or equal to, less than or equal to, or between two values. The values are either specified fixed values or values of other attributes of the same object. |
| Regular expression | The attribute needs to match a regular expression stored in a [regular expression](/refguide8/regular-expressions/) resource. |
| Maximum length | The attribute may have no more than the specified number of characters. |

{{% alert color="info" %}}
Date values should be entered in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format, for example 2015-07-26.
{{% /alert %}}

#### 2.2.2 Rule Order

Validation rules can be ordered in Studio Pro. The order of the rules determines the order they are applied. If multiple rules are violated, all their error messages will be recorded (in the defined order) and shown in the page. Although the order can be set for all the validation rules in the entity, only the order per attribute will have an impact as all validation rules are executed for all attributes.

The `uniqueness` validations do not follow the defined order. This validation requires a database query and is executed only when the complete object satisfies to all the other validation rules.
