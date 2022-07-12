---
title: "Message Definitions"
url: /refguide/message-definitions/
weight: 50
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Message definitions define the structure of the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML, and it can be used for both single objects and lists of objects.

## 2 Adding a Message Definitions Document

Message Definitions is a type of document you can add to modules in your app.

To add a message definitions document do the following:

1. Right-click your module or a folder within a module.

2. Choose **Add other > Message definitions**.

3. Give your message definitions a name and click **OK**.

## 3 Managing Message Definitions

The message definition document shows a list of message definitions.

Here you can do the following:

* **Add** a new [message definition](#message-definition)
* **Edit** an existing message definition
* **Delete** an unwanted message definition
* **Find usages** of a message definition
* **Generate mapping(s)…** from a message definition (see below)

### 3.1 Generate Mapping(s)…

The **Generate mapping(s)…** button allows you to generate import and/or export mapping documents from the selected message definition. The mappings are added to your module.

To generate mappings, do the following:

1. Select the message definition you want to use.

2. Click **Generate mapping(s)…**.

3. Ensure that the required mapping(s) is selected.

4. Click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/message-definitions/generate-mappings.png" alt="General mappings dialog" >}}

## 4 Defining a Message Definition{#message-definition}

In the message definitions document, click **Add** to create a new message definition or **Edit** to edit an existing message definition.

### 4.1 General

The message definition is defined in the **General** tab.

{{< figure src="/attachments/refguide/modeling/integration/message-definitions/message-definition.png" alt="The Message Definition General tab" >}}

#### 4.1.1 Name

The name of the message definition.

#### 4.1.2 Entity

An entity in your app domain model(s) on which to base the message definition. Using this message definition, you will be able to export and import individual objects and lists of objects of this entity type.

#### 4.1.3 Structure

The structure tree shows the attributes and some of the associations of the entity. Use the **Filter** to find specific attributes.

| Column | Description | Can edit? | Notes |
| --- | --- | :---: | --- |
| Check box | Check if the attribute or association is part of the message. | y | |
| Name | The name of the item in the Domain Model. | n | |
| Type | The type of the item in the Domain Model. | n | |
| Occurrence | How many times this item can occur for each parent item. | n | |
| External Name | The name of the XML node or the JSON property. | y | By default, the name of the attribute or (for associations) entity.<br />For a `0..*` occurrence, a letter `s` is added. |
| External Single Item Name | The XML node that represents a single item. | y | Only relevant for XML when the occurrence is `0..*`<br /> By default, the entity name. |
| Example value | A typical value for an attribute. | y | For a published REST service, this value shows up in the [interactive documentation](/refguide/published-rest-services/#interactive-documentation).<br />A date/time value is specified in the format `year-month-day` or `year-month-day hour:minute:second`. |
| Public Documentation | Additional information to be displayed in the [interactive documentation](/refguide/published-rest-services/#interactive-documentation). | y | |

### 4.2 Documentation

Use the **Documentation** tab to describe what the message definition is used for.