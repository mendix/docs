---
title: "Message definition"
parent: "message-definitions"
---

_Message definitions_ define the messages that are sent from and to your app. Defining your messages allows you to create import and export mappings for them.

A message definition can be used for both JSON and XML, and can be used for both a single objects and a list of objects.

## General

### Source Entity

Select an entity to base the message definition on. Using this message definition, you will be able to export and import this entity type, and lists of this entity type.

### Structure

The structure tree shows the attributes of the entity. Check all attributes that are part of the message.

The _External name_ is the name of the XML node or the JSON property for that attribute. You may leave it empty; the default value is the name in the first column.

The _Plural name_ only applies to XML, and only applies to the root entity. When dealing with a list, this XML node name will be used as the root. You may leave it empty; the default value is the entity name + 's'.

## Documentation

Use the _documentation_ to describe what the message definition is used for.
