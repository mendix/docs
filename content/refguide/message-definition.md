---
title: "Message Definition"
parent: "message-definitions"
---

{{% alert type="info" %}}

The 'Message Definitions' was introduced in version 7.8.0. This feature is still in private beta, and is subject to change before the final release.

{{% /alert %}}

## 1 Introduction

Message definitions define the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML, and can be used for both single objects and a list of objects.

## 2 General

### 2.1 Source Entity

Select an entity on which to base the message definition. Using this message definition, you will be able to export and import this entity type and lists of this entity type.

### 2.2 Structure

The structure tree shows the attributes of the entity. Check all the attributes that should be part of the message.

The **External name** is the name of the XML node or the JSON property. You may leave it empty to use the default value. When the occurrence is 0..1, the default value is the name in the first column. When the occurrence is 0..*, the default value is the name in the first column plus the letter 's'. 

The **External item name** only applies to XML, and only when the occurrence is 0..*. This is the name of the XML node of the items in the list. You may leave it empty; the default value is name in the first column.

## 3 Documentation

Use the **Documentation** to describe what the message definition is used for.
