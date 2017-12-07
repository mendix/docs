---
title: "Message Definition"
parent: "message-definitions"
---

{{% alert type="info" %}}

The 'Message Definitions' was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

Message definitions define the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML, and can be used for both single objects and a list of objects.

## 2 General

### 2.1 Source Entity

Select an entity on which to base the message definition. Using this message definition, you will be able to export and import this entity type and lists of this entity type.

### 2.2 Structure

The structure tree shows the attributes of the entity. Check all the attributes that are part of the message.

The **External name** is the name of the XML node or the JSON property for that attribute. You may leave it empty; the default value is the name in the first column.

The **Plural name** only applies to XML, and only applies to the root entity. When dealing with a list, this XML node name will be used as the root. You may leave it empty; the default value is the entity name + `s`.

## 3 Documentation

Use the **Documentation** to describe what the message definition is used for.
