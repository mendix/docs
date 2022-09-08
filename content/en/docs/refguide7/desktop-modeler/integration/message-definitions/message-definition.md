---
title: "Message Definition"
url: /refguide7/message-definition/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

Message definitions define the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML, and it can be used for both single objects and lists of objects.

## 2 General

### 2.1 Name

The name of the message definition.

### 2.2 Entity

Select an entity on which to base the message definition. Using this message definition, you will be able to export and import this entity type and lists of this entity type.

### 2.3 Structure

The structure tree shows the attributes and some of the associations of the entity. Check all the attributes and associations that are part of the message.

The **External name** is the name of the XML node or the JSON property. By default, it's the name of the attribute (for attributes) or entity (for associations). When the occurrence is `0..*`, it's the external item name plus the letter `s`.

The **External item name** is only relevant for XML, and only when the occurrence is `0..*`. It is used for the XML node that represents a single item. By default, it's the entity name.

As an **Example value**, you can specify a typical value for an attribute. When you use the message definition in a published REST service, this value shows up in the [interactive documentation](/refguide7/published-rest-services/#interactive-documentation). Note that you specify a date/time value in the format `year-month-day` or `year-month-day hour:minute:second`.

The **Documentation** of an entity, attribute, or association also shows up in the [interactive documentation](/refguide7/published-rest-services/#interactive-documentation).

## 3 Documentation

Use the **Documentation** to describe what the message definition is used for.
