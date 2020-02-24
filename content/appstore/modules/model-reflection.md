---
title: "Mx Model Reflection"
category: "Modules"
description: "Describes the configuration and usage of the Mx Model Reflection module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "mx model reflection", "token configuration", "platform support"]
draft: true
---

## 1 Introduction

The [Mx Model Reflection](https://appstore.home.mendix.com/link/app/69/) module can be used to show the reflection of the configuration in your domain model. The module creates an object for each entity, attribute, and reference.

### 1.1 Typical Usage Scenarios

The typical usage scenario is selecting and showing entities from your domain model to use for another configuration. 

## 2 Configuration

After importing the module, add **USE ME** > **MxObjects_Overview** to the navigation of your app. Run your application for the synchronization. You are able to enable synchronization for each module. For both security and performance purposes, you do not want your entire domain model structure available in your app.

{{% alert type="info" %}}
If you have a large app project, the synchronization will take much longer.
{{% /alert %}}

### 2.1 Token Configuration

The token configuration used in the [E-mail Module with Templates](https://appstore.home.mendix.com/link/app/259/) now also allows you to specify the display pattern. This allows you to configure how the attributes are shown rather than relying on the defaults of the module.

The display pattern in the token is optional. If you do not specify a value, the module will use the original behavior. 

For attributes of the decimal type, the display pattern `DecimalFormat` is used (for more information, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)).

For dates, the `SimpleDateFormat` is used (for more information, see [Class SimpleDateFormat](http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)).

For all other attributes, the functions from *java.util.Formatter* are used (for details on the patterns, see [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)).

All the patterns use the locale from the context. Based on the user's language, the pattern will change its behavior if necessary.

### 2.2 Display Pattern Example (Using En_US Lanuage)

* Long attribute with a thousand separator:
	* Pattern:  `%,8d%n`
	* Value: `12345678`
	* Result: `12,345,678`
* Date attribute:
	* Pattern: `MM/dd/yyyy`
	* Value: `2nd of July 2016`
	* Result: `7/6/2016`
* Decimal attribute with a thousand separator of 2 decimals:
	* Pattern: `#,##0.0`
	* Value: `12345,678`
	* Result: `12,345.68`

## 3 Read More

* [How to Use the Excel Exporter](https://docs.mendix.com/howto/integration/using-the-excel-exporter)
* [How to Import Excel Documents](https://docs.mendix.com/howto/integration/importing-excel-documents)
