---
title: "Enumerations"
parent: "resources"
menu_order: 40
tags: ["studio pro", "enumeration", "enumeration values", "enumeration value"]
aliases:
    - /refguide/enumeration-values.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor <enum-value-properties> below is mapped, so it should not be removed or changed.
---

## 1 Introduction

An enumeration defines a list of predefined values. Enumerations are used for the enumeration attribute type. For example, the status of an order can be *Open*, *Closed*, or *In Progress*. So, the enumeration for the order status will consist of three values: *Open*, *Closed*, and *In_Progress*. 

An enumeration consists of one or more [enumeration values](enumerations#enum-properties). Each value represents one option. An attribute of the enumeration type can also represent an uninitialized state: for example, if you do not assign any status to an order, the order status will be *empty*. 

## 2 Creating an Enumeration  

To create a new enumeration, do the following: 

1.  In the [App Explorer](project-explorer), right-click the module or a folder you want to add enumeration to and in the list of actions, select **Add other** > **Enumeration**.

2. In the **Add Enumeration** dialog box, fill out the name of the enumeration.

3.  In the **Enumeration** dialog box, click **New** to create enumeration values:

    a.  Fill out **Name** and **Caption** for an enumeration value. You can set **Image** for it if necessary. For more information on enumeration properties, see the [Enumeration Properties](#enum-properties) section. <br />

    ![](attachments/enumerations/add-enum-value.png)

    b.  Click **OK** to save the enumeration value.

4. Repeat step 3 for every enumeration value that you want to create.

5. Click **OK** to save the enumeration. 

You have added a new enumeration to your app. You can use the same enumeration for different attributes of the enumeration type in your app. 

## 3 Enumeration Properties {#enum-properties}

An enumeration has the following properties:

* **Name** – The name of the enumeration.

*  **Export level** – allows you to hide the content of a certain document/element from a consumer (customer) when developing an add-on module or a solution. 
    {{% alert type="info" %}}This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](modules#module-type) section in *Modules*. {{% /alert %}}
    **Export level** has the following values:   

    * **Hidden** *(default)* – The document/element content is hidden from a consumer. 
    * **Usable** – Consumers can see the content of the document/element and use and change it in their app. 
    
* **Enumeration values** – An enumeration has one or more enumeration values. Each value represents one of the options. For more information on enumeration values and their properties, see the [Enumeration Value Properties](#enum-value-properties) section.

    ![](attachments/enumerations/enumeration-properties.png)

### 3.1 Enumeration Value Properties {#enum-value-properties}

Enumeration value properties are described below:

* **Caption** – the caption of an enumeration value is the text that the end-user sees for this enumeration value. This is a translatable text. For more information, see [Language Menu](translatable-texts). 

* **Name** – the name of an enumeration value is a technical name of the value which is used to refer to the enumeration value in your app.

    {{% alert type="warning" %}}The name of an enumeration value is also used for storing the enumeration value in the database. That is why changing the **Name** of an enumeration value is not allowed; it would invalidate the data in your database. The **Caption**, however, can be changed and this is the text that is displayed to the end-users.<br />The name of an enumeration value must be a technical name without spaces and special characters. The caption of an enumeration value can any character. For example, an enumeration value can have *In_Progress* as its name and *In Progress* as its caption.  
    {{% /alert %}}
  
* **Image** –  an image selected for an enumeration value can be displayed in a data grid column. In this case, the enumeration format of the column should be *Image*. For more information on data grid columns, see [Grid Columns](columns).

## 4 Read More

* [Attributes](attributes)
* [Entities](entities)

