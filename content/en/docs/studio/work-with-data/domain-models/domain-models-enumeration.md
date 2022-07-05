---
title: "Enumeration"
url: /studio/domain-models-enumeration/
description: "Describes enumerations in Mendix Studio."
tags: ["studio", "domain model", "attributes", "enumeration"]
---

## 1 Introduction 

This document describes an enumeration in Mendix Studio. An enumeration is a list of one or more items (values). Each item represents one option. For example, a customer can be assigned a *Bronze*, *Silver*, and *Gold* grade. So, the *Customer Grade* is an enumeration, while *Bronze*, *Silver*, and *Gold* are enumeration items.  For more information on items, see the [Enumeration Items](#enumeration-items) section. 

When you create an attribute of *enumeration* type you either assign an existing enumeration to it or create a new one. For details on properties of attributes of the enumeration type, see the [Attribute Properties](/studio/domain-models-attributes/#attribute-properties) section in *Attributes*. 

## 2 Enumeration Items {#enumeration-items}

An enumeration consists of enumeration items or values. Each item represents one of the options. 

The enumeration can also represent an *uninitialized state*. For example, if you do not assign any grade to a customer, the grade status is *empty*.  

## 3 Basic Actions

An enumeration is configured when you add an attribute of the enumeration type to your domain model. You can either [create a new one](#create-new-enumeration) or [select an existing enumeration](#select-existing-enumeration). 

### 3.1 Creating a New Enumeration {#create-new-enumeration}

To create a new enumeration, do the following: 

1. Open your [domain model](/studio/domain-models/).

2. Select an entity you want to create the attribute for. For more information on how to create the entity, see the [Adding New Entities](/studio/domain-models/#adding-new-entities) section in *Domain Models Overview*.

3.  To create a new attribute of the enumeration type, click **New attribute** and do the following:<br />
    a. Set the attribute **Name**. In our example, the name of the attribute is *Grade*.<br />
    b. Set the [Type](/studio/domain-models-attributes/) to **Enumeration**.<br />
    c. Click **Select enumeration**.<br />d. In the **Select enumeration** dialog box, click the plus icon in the top right corner.<br/>
    e. In the **Create new enumeration** dialog box, click **Add Item** to add possible options of the enumeration (**Name** is filled out automatically and is the same as the attribute name).<br />

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/new-enumeration-add-item.png" >}}<br />

    f. Fill out the name for the **Caption** (**Name** is filled out automatically). In the example below, you need to fill out  *Bronze*, as one of three possible items of the enumeration: Bronze, Silver, and Gold. <br />

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/new-enumeration-add-item-bronze.png" >}}<br />

    g. Click **Add Item** and repeat the step above to create other enumeration items.<br />
    h. Click **Create** to close the dialog box and create the new attribute.

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/new-enumeration-bronze-silver-gold.png" >}}

The attribute and the enumeration items are created.

### 3.2 Selecting an Enumeration {#select-existing-enumeration}

You can also set an existing enumeration for attributes of the enumeration type. Do the following:

1. Open your [domain model](/studio/domain-models/).

2. Select an entity you want to create the attribute for. For more information on how to create the entity, see section [3 Adding New Entities](/studio/domain-models/#adding-new-entities) in *Domain Models Overview*.

3.  To create a new attribute of the enumeration type, click **New attribute** and do the following:<br />

    a. Set the attribute **Name**. In our example, the name of the attribute is *Grade*.<br />
    b. Set the [Type](/studio/domain-models-attributes/) to **Enumeration**.<br />
    c. Click **Select enumeration**.<br />

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/new-attribute-select-enumeration.png" >}} <br/>

    d. In the **Select enumeration** dialog box, the existing enumerations are displayed in the list. Click the one you want to use, then click **Select**.<br />

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/selecting-existing-enumeration.png" >}}

The existing enumeration is selected for the attribute of the enumeration type. 

### 3.3 Copying and Pasting an Enumeration

You can copy and paste an enumeration to another Studio app. Follow the steps below:

1. Open your [domain model](/studio/domain-models/).

2. Select the attribute of the enumeration type and click **Enumeration** in its properties.

3. In the **Select Enumeration** dialog box, select the enumeration you would like to copy and click the ellipsis icon.

4. Select the **Copy to clipboard** option in the drop-down menu. 
{{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/copy-to-clipboard.png" alt="Copy Enumeration" >}}

5. Open a different module or Studio app, navigate to a domain model and press <kbd>Ctrl</kbd> + <kbd>V</kbd>.

The enumeration is pasted. For more information on copy/paste function in Studio, see the [Copy/Paste Pages, Microflows, and Enumerations](/studio/general/#copy-paste-documents) section in *General Info*.

### 3.4 Duplicating an Enumeration 

To duplicate an enumeration, follow the steps below:

1. Open your [domain model](/studio/domain-models/).

2. Select the attribute of the enumeration type and click **Enumeration** in its properties.

3. In the **Select Enumeration** dialog box, select the enumeration you would like to duplicate and click the ellipsis icon.

4.  Select the **Duplicate** option in the drop-down menu. 

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/duplicate.png" alt="Duplicate Enumeration" >}}

5. Close the dialog box.

The enumeration is duplicated.

#### 3.5 Deleting an Enumeration

To delete an enumeration, follow the steps below:

1. Open your [domain model](/studio/domain-models/).

2. Select the attribute of the enumeration type and click **Enumeration** in its properties.

3. In the **Select Enumeration** dialog box, select the enumeration you would like to delete and click the ellipsis icon.

4. Select the **Delete** option in the drop-down menu:

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-enumeration/delete-enumeration.png" alt="Delete Enumeration" >}}

5. Confirm your choice and close the dialog box.

The enumeration is deleted.

## 4 Read More

* [Domain Model](/studio/domain-models/)
* [Attributes](/studio/domain-models-attributes/) 
