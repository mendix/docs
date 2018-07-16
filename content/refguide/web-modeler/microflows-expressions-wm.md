---
title: "Microflow Expressions in the Web Modeler"
parent: "microflows-wm"
description: "Describes the microflow expressions available in the Mendix Web Modeler."
tags: ["web modeler", "microflow", "set value", "variable"]
---

## 1 Introduction 

Expressions can be used to create or change an object or a variable based on logic. 

The **Expression** tab is opened when you configure the following activities in the microflow:

*  [End Event](../end-event)
*  [Exclusive Split](microflows-exclusive-split-wm)
*  [Create Object](../create-object)
*  [Change Object](../change-object)
*  [Create Variable](../create-variable) 
*  [Change Variable](../change-variable)

For more information, see [Setting and Changing a Value for Different Activities in the Microflows in the Web Modeler](microflows-setting-and-changing-value-wm).

## 2 Writing the Expression

There are two ways of writing an expression:

* Using suggestions
* Writing the expression manually

If some errors appear in the expression, hints with an explanation will be displayed. 

![](attachments/microflows-expressions-wm/wm-expression-error.png)

### 2.1 Writing the Expression Using Suggestions

When you start typing the expression, a list of suggestions with variables, [relational](../relational-expressions) and [boolean](../boolean-expressions)  expressions appears. For more information, see section [3 Expression Types](#expression-types).

![](attachments/microflows-expressions-wm/wm-expressions-list.png)

To write an expression using suggestions, do the following:

1. Browse though the list of suggestions and select the condition for your expression.
2. To add more conditions to the expression, press <kbd>Space</kbd>.
3. Select the condition from the list.
4. Click **Add** when the expression is completed.

{{% alert type="info" %}}

Each time you add a new condition to the expression, the list of suggestions is adjusted depending on the previous conditions. 

{{% /alert %}}

### 2.2 Writing the Expression Manually

If you want to write the expression manually, pay attention to the following:

* Variables in the microflow can be called in an expression by inserting the dollar sign followed by the name of the variable. E.g. *$Customer* refers to the variable *Customer*.  

* Attributes and associations of object variables are accessed using a slash, e.g., *$Customer/Name*, *$Customer/Grade* refer to the attributes Name and Grade of the entity Customer. 
* Unary, boolean, and relational types of expressions are available in the Web Modeler (for more information, see section [3 Expression Types](#expression-types))

### 2.3 Example of the Expression

Let us study an example that illustrates how the expression can be used. You have an exclusive split and you want to write an expression that checks whether the customer grade is gold and the price of the order is more than 100 (you can configure a discount after the split that is allowed if this expression is true). 

![](attachments/microflows-expressions-wm/wm-example-excl-split.png) 

The expression will look the following way:

![](attachments/microflows-expressions-wm/wm-expression-excl-split.png)

##3 Expression Types {#expression-types}

An overview of the possibilities with expressions can be found below:

### 3.1 Relational Expressions

* [Less than ( < )](../relational-expressions)
* [Greater than ( > )](../relational-expressions)
* [Less than or equal to ( <= )](../relational-expressions)
* [Greater than or equal to ( >= )](../relational-expressions)
* [Is equal to ( = )](../relational-expressions)
* [Is not equal to ( != )](../relational-expressions)

### 3.2 Boolean Expressions

* [and](../boolean-expressions)
* [or](../boolean-expressions)

## 4 Related Content

* [Microflows in the Web Modeler](microflows-wm)
* [Setting and Changing a Value for Different Activities in the Microflows in the Web Modeler](microflows-setting-and-changing-value-wm)