---
title: "Actions"
parent: "published-app-services"
tags: ["studio pro"]
---

## 1 Introduction

{{% alert type="info" %}}
App services were deprecated in version 7.23.4 and are marked for removal. Use a [published web service](published-web-services) or a [published REST service](published-rest-services) instead.
{{% /alert %}}

Provides the actual microflow actions of the app service. Note that once an app service version is set to Consumable, its parameters and return type are no longer editable as they are part of the app service contract.

In the General tab, you can set the microflow that corresponds to the action. When the microflow is set, the Parameters tab will be filled automatically.

An action page has the following tabs:

## 2 General

![](attachments/16713720/16843926.png)

### 2.1 Name

This is the name of the action the consumer will see in their toolbox.

### 2.2 Icon

This is the icon that belongs to the action. An icon can be selected from any images document in the project. A new icon can be added to an images document if it is not available yet.

### 2.3 Microflow

Defines which microflow will be executed when this action is called.

### 2.4 Description

Describes the action. The consumer will see this description their overview.

## 3 Parameters

![](attachments/16713720/16843923.png)

### 3.1 Microflow Parameter

Defines the name of the parameter in the microflow

### 3.2 Type

Defines the type of the parameter.

### 3.3 Can Be Empty

Defines whether a value is can be empty as an input parameter.

### 3.4 Action Parameter

Defines the name of the parameter in the app service action call. This is initially copied from the microflow parameter name but can be modified. There are three reserved parameter names that are not allowed to be used: **username**, **password** and **appservicelocation** (case insensitive).

### 3.5 Exposed Attributes & Associations

![](attachments/16713720/16843922.png)

A button is available for complex types (e.g. an entity from your domain model), to define whether to include or exclude the attribute in an entity, as well as to define whether an attribute can be empty as input.

## 4 Return Type

Defines what kind of object will be returned by the action. This can be a simple type (like an integer or string), or a complex type (i.e. an entity from your entity model)

### 4.1 Can Be Empty

Defines whether the return value can be **empty**.

{{% alert type="info" %}}

![](attachments/16713720/16843921.png)

The Return Type tab of an app service action. An **empty** ReturnObject is disallowed here.

{{% /alert %}}
