---
title: "Enumerations"
url: /refguide9/enumerations/
weight: 40
aliases:
    - /refguide9/enumeration-values.html
    - /refguide9/enumeration-values
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor <enum-value-properties> below is mapped, so it should not be removed or changed.
---

## Introduction

An enumeration defines a list of predefined values. Enumerations are used for the enumeration attribute type. For example, the status of an order can be *Open*, *Closed*, or *In Progress*. So, the enumeration for the order status will consist of three values: *Open*, *Closed*, and *In_Progress*. 

An enumeration consists of one or more [enumeration values](/refguide9/enumerations/#enum-properties). Each value represents one option. An attribute of the enumeration type can also represent an uninitialized state: for example, if you do not assign any status to an order, the order status will be *empty*. 

## Creating an Enumeration  

To create a new enumeration, do the following: 

1. In the [App Explorer](/refguide9/app-explorer/), right-click the module or a folder you want to add enumeration to and in the list of actions, select **Add other** > **Enumeration**.
2. In the **Add Enumeration** dialog box, fill out the name of the enumeration.
3. In the **Enumeration** dialog box, click **New** to create enumeration values:

    1. Fill out **Name** and **Caption** for an enumeration value. You can set **Image** for it if necessary. For more information on enumeration properties, see the [Enumeration Properties](#enum-properties) section. <br />

        {{< figure src="/attachments/refguide9/modeling/resources/enumerations/add-enum-value.png" class="no-border" >}}

    1. Click **OK** to save the enumeration value.

4. Repeat step 3 for every enumeration value that you want to create.
5. Click **OK** to save the enumeration. 

You have added a new enumeration to your app. You can use the same enumeration for different attributes of the enumeration type in your app. 

## Enumeration Properties {#enum-properties}

An enumeration has the following properties:

* **Name** – The name of the enumeration.
* **Export level** – allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution. 

    {{% alert color="info" %}}This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide9/modules/#module-types) section in *Modules*.{{% /alert %}}

    **Export level** has the following values:   

    * **Hidden** *(default)* – The document/element content is hidden from a consumer. 
    * **Usable** – Consumers can use the enumeration in their apps. 

* **Enumeration values** – an enumeration has one or more enumeration values. Each value represents one of the options. For more information on enumeration values and their properties, see the [Enumeration Value Properties](#enum-value-properties) section.

    {{< figure src="/attachments/refguide9/modeling/resources/enumerations/enumeration-properties.png" class="no-border" >}}

### Enumeration Value Properties {#enum-value-properties}

Enumeration value properties are described below:

#### Caption 

This is the caption of an enumeration value is the text that the end-user sees for this enumeration value.

The caption can be changed and can contain any character. For example, *In Progress* is a valid caption even though it contains a space.  

This is a translatable text. For more information, see [Language Menu](/refguide9/translatable-texts/). 

#### Name{#name}

This is the name of an enumeration value. It is a technical name of the value which is used to refer to the enumeration value in your app.

The name of an enumeration value must be a technical name, starting with a letter and only containing letters, digits, and underscores.

<details><summary>It cannot be a reserved word (click to see a list of reserved words)</summary>

* `abstract`
* `assert`
* `boolean`
* `break`
* `byte`
* `case`
* `catch`
* `changedby`
* `changeddate`
* `char`
* `class`
* `con`
* `const`
* `context`
* `continue`
* `createddate`
* `currentUser`
* `default`
* `do`
* `double`
* `else`
* `empty`
* `enum`
* `extends`
* `false`
* `final`
* `finally`
* `float`
* `for`
* `goto`
* `guid`
* `id`
* `if`
* `implements`
* `import`
* `instanceof`
* `int`
* `interface`
* `long`
* `MendixObject`
* `native`
* `new`
* `null`
* `object`
* `owner`
* `package`
* `private`
* `protected`
* `public`
* `return`
* `short`
* `static`
* `strictfp`
* `submetaobjectname`
* `super`
* `switch`
* `synchronized`
* `this`
* `throw`
* `throws`
* `transient`
* `true`
* `try`
* `type`
* `void`
* `volatile`
* `while`

</details>

{{% alert color="warning" %}}
The name of an enumeration value is also used for storing the enumeration value in the database. Therefore, changing the **Name** of an enumeration value is not allowed; it would invalidate the data in your database.
{{% /alert %}}
  
#### Image

This is an image selected for an enumeration value to be displayed in a data grid column.

To use the image in a data grid, set the enumeration format of the column to *Image*. For more information on data grid columns, see [Grid Columns](/refguide9/columns/).

## Read More

* [Attributes](/refguide9/attributes/)
* [Entities](/refguide9/entities/)
