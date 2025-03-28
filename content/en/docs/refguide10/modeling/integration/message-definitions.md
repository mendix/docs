---
title: "Message Definitions"
url: /refguide/message-definitions/
weight: 5
description: "Describes how to use a message definition for JSON and XML to use on both single objects and lists of objects."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Message definitions define the structure of the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML and can be used for both single objects and lists of objects.

## Adding a Message Definitions Document

Message Definitions is a type of document you can add to modules in your app.

To add a message definitions document, do the following:

1. Right-click your module or a folder within a module.
2. Choose **Add other > Message definitions**.
3. Give your message definitions a name and click **OK**.

## Managing Message Definitions

The message definition document shows a list of message definitions.

Here you can do the following:

* **Add** a new [message definition](#message-definition)
* **Edit** an existing message definition
* **Delete** an unwanted message definition
* **Find usages** of a message definition
* **Generate mapping(s)…** from a message definition (see below)

### Generate Mapping(s)…

The **Generate mapping(s)…** button allows you to generate import and/or export mapping documents from the selected message definition. The mappings are added to your module.

To generate mappings, do the following:

1. Select the message definition you want to use.
2. Click **Generate mapping(s)…**.
3. Ensure that the required mapping (or mappings) is selected.
4. Click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/message-definitions/generate-mappings.png" alt="General mappings dialog" class="no-border" width="400" >}}

## Defining a Message Definition{#message-definition}

In the message definitions document, click **Add** to create a new message definition or **Edit** to edit an existing message definition.

### General

The message definition is defined in the **General** tab.

{{< figure src="/attachments/refguide/modeling/integration/message-definitions/message-definition.png" alt="The Message Definition General tab" class="no-border" width="750" >}}

#### Name

The name of the message definition.

#### Entity

An entity in your app domain model (or models) on which to base the message definition. Using this message definition, you can export and import individual objects and lists of objects of this entity type.Ω

#### Structure

The structure tree shows the attributes and some of the associations of the entity. Use the **Filter** to find specific attributes.

| Column | Description | Can edit? | Notes |
| --- | --- | :---: | --- |
| Checkbox | Check if the attribute or association is part of the message. | y | |
| Name | The name of the item in the domain model. | n | |
| Type | The type of the item in the domain model. | n | |
| Occurrence | How many times this item can occur for each parent item. | n | |
| External Name | The name of the XML node or the JSON property. | y | By default, the name of the attribute or (for associations) entity.<br />For a `0..*` occurrence, a letter `s` is added. |
| External Single Item Name | The XML node that represents a single item. | y | Only relevant for XML when the occurrence is `0..*`<br /> By default, the entity name. |
| Example value | A typical value for an attribute. | y | For a published REST service, this value shows up in the [interactive documentation](/refguide/published-rest-services/#interactive-documentation).<br />A date/time value is specified in the format `year-month-day` or `year-month-day hour:minute:second`. |
| Public Documentation | Additional information to be displayed in the [interactive documentation](/refguide/published-rest-services/#interactive-documentation). | y | |

### Documentation

Use the **Documentation** tab to describe what the message definition is used for.
