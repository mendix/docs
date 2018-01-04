---
title: "Message Definition"
parent: "message-definitions"
---

{{% alert type="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

Message definitions define the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML, and it can be used for both single objects and lists of objects.

## 2 General

### 2.1 Source Entity

Select an entity on which to base the message definition. Using this message definition, you will be able to export and import this entity type and lists of this entity type.

### 2.2 Structure

The structure tree shows the attributes and some of the associations of the entity. Check all the attributes and associations that are part of the message.

The **External name** is the name of the XML node or the JSON property. By default, it's the name of the attribute (for attributes) or entity (for associations). When the occurrence is `0..*`, it's the external item name plus the letter `s`.

The **External item name** is only relevant for XML, and only when the occurrence is `0..*`. It is used for the XML node that represents a single item. By default, it's the entity name.

## 3 Documentation

Use the **Documentation** to describe what the message definition is used for.
