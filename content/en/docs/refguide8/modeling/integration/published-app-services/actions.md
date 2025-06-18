---
title: "Actions"
url: /refguide8/actions/
---

## Introduction

{{% alert color="info" %}}
App services are deprecated and were removed in Studio Pro 9. Use a [published web service](/refguide8/published-web-services/) or a [published REST service](/refguide8/published-rest-services/) instead.
{{% /alert %}}

Actions provide the actual microflow actions of the app service. Once an app service version is set to **Consumable**, its parameters and return type are no longer editable, as they are part of the app service contract.

In the **General** tab, you can set the microflow that corresponds to the action. When the microflow is set, the **Parameters** tab will be filled automatically.

An action page has the tabs below.

## General

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843926.png" class="no-border" >}}

### Name

This is the name of the action the consumer will see in their toolbox.

### Icon

This is the icon that belongs to the action. An icon can be selected from any image documents in the app. A new icon can be added to an image document if it is not available yet.

### Microflow

This defines which microflow will be executed when this action is called.

### Description

This describes the action. The consumer will see this description in their overview.

## Parameters

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843923.png" class="no-border" >}}

### Microflow Parameter

This defines the name of the parameter in the microflow.

### Type

This defines the type of the parameter.

### Can Be Empty

This defines whether a value can be empty as an input parameter.

### Action Parameter

This defines the name of the parameter in the app service action call. This is initially copied from the microflow parameter name, but it can be modified. There are three reserved parameter names that are not allowed to be used:

* *username*
* *password*
* *appservicelocation* (case insensitive)

### Exposed Attributes and Associations

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843922.png" class="no-border" >}}

A button is available for complex types (for example, an entity from your domain model) in order to define whether to include the attribute in an entity as well as to define whether an attribute can be empty as an input.

## Return Type

This defines what kind of object will be returned by the action. This can be a simple type (like an integer or string), or a complex type (for example, an entity from your entity model).

### Can Be Empty

This defines whether the return value can be empty.

For example, an **empty** ReturnObject is disallowed here:

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843921.png" class="no-border" >}}
