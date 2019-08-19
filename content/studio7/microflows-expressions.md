---
title: "Microflow Expressions"
category: "Microflows"
menu_order: 40
description: "Describes the microflow expressions available in Mendix Studio."
tags: ["studio", "microflow", "set value", "variable"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

This document describes microflow expressions in Mendix Studio. Expressions can be used to create or change an object or a variable based on logic. 

The **Expression** tab is available for the following activities in a microflow:

*  [End Event](/refguide/end-event)
*  [Decision](microflows-decision)
*  [Create Object](/refguide/create-object)
*  [Change Object](/refguide/change-object)
*  [Create Variable](/refguide/create-variable) 
*  [Change Variable](/refguide/change-variable)

![](attachments/microflows-expressions/expression-tab.png)

For more information on setting and changing values for microflow activities, see [How to Set & Change a Value for Different Activities in the Microflows](microflows-setting-and-changing-value).

## 2 Writing an Expression

There are two ways of writing an expression:

* Using suggestions
* Writing expressions manually

If an error appears in the expression, hints with an explanation will be displayed. 

{{% image_container width="350" %}}![](attachments/microflows-expressions/expression-error.png)
{{% /image_container %}}

### 2.1 Writing an Expression Using Suggestions

When you start typing your expression, a list of suggestions appears divided into the following categories:

* **Suggestions from your microflow** – variables or attributes that you have created or retrieved in your microflow
* **Enumeration values** – values of [enumeration type of attributes](domain-models-enumeration) that can be used in an expression
* **Keywords** – key phrases or words that you can use in an expression
* **Booleans** – true or false expressions
* **Operators** – code elements that perform logical or mathematical operations. You can use Boolean or relational expressions (for more information, see the [Expression Types](#expression-types) section below)

![](attachments/microflows-expressions/expressions-list.png)

To write an expression using suggestions, do the following:

1. Browse through the list of suggestions and select the element for your expression with a mouse or a keyboard.
2. Select an element from the list.
4. Click **Add** when the expression is completed.

{{% alert type="info" %}}

To call the list of suggestions, press <kbd>Ctrl</kbd> + <kbd>Space</kbd>

{{% /alert %}}

### 2.2 Writing an Expression Manually

If you want to write the expression manually, pay attention to the following:

* Variables in the microflow can be called in an expression by inserting the dollar sign followed by the name of the variable. For example, *$Customer* refers to the variable *Customer*  
* Attributes and associations of object variables are accessed using a slash. For example, *$Customer/Name*, *$Customer/Grade* refer to the attributes Name and Grade of the entity Customer 
* Unary, Boolean, and relational types of expressions are available in Studio (for more information, see the [Expression Types](#expression-types) section)

## 3 Expression Examples

Below are two examples that illustrate how expressions can be used. 

### 3.1 Example 1

You have a **[Decision](microflows-decision)** and you want to write an expression that checks whether the customer grade is gold and the price of the order is more than 100 (you can configure a discount after the **Decision** that is allowed if this expression is true):

![](attachments/microflows-expressions/example-decision.png) 

The expression will look the following way:

![](attachments/microflows-expressions/expression-decision.png)

### 3.2 Example 2

You add a **[Decision](microflows-decision)** to check if an object (in the example below the object is *Customer*) exists. And you also check if the Customer's name matches a particular one (in the example below Customer's name is *Mendix*). The expression will look the following way:

![](attachments/microflows-expressions/customer-empty-and-name-example.png)

## 4 Expression Types {#expression-types}

A list of the operators you can use in expressions in Studio can be found below:

### 4.1 Relational Expressions

* [Less than ( < )](/refguide/relational-expressions)
* [Greater than ( > )](/refguide/relational-expressions)
* [Less than or equal to ( <= )](/refguide/relational-expressions)
* [Greater than or equal to ( >= )](/refguide/relational-expressions)
* [Is equal to ( = )](/refguide/relational-expressions)
* [Is not equal to ( != )](/refguide/relational-expressions)

### 4.2 Boolean Expressions

* [and](/refguide/boolean-expressions)
* [or](/refguide/boolean-expressions)

## 5 Read More

* [Microflows](microflows)
* [Set & Change a Value for Different Activities in the Microflows](microflows-setting-and-changing-value)
