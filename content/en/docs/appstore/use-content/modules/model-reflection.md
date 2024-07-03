---
title: "Mx Model Reflection"
url: /appstore/modules/model-reflection/
description: "Describes the configuration and usage of the Mx Model Reflection module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Mx Model Reflection](https://marketplace.mendix.com/link/component/69/) module allows you to access information about the domain model and about microflows of your app from your app. For example, you can loop through all the attribute names of an entity type in a microflow.

### 1.1 Typical Use Cases

The typical usage scenario is selecting and showing entities from your domain model to use for another configuration. 

## 2 Configuration {#configuration}

After importing the module, add **\_USE_ME** > **MxObjects** to one of your pages (you can directly use **\_USE_ME** > **MxObjects_Overview** which contains **MxObjects**, and add the page to the navigation of your app). Run your application for the synchronization. You are able to enable synchronization for each module. For both security and performance purposes, you do not want your entire domain model structure available in your app.

{{% alert color="info" %}}
If you have a large app, the synchronization will take much longer.
{{% /alert %}}

If you want the synchronization to get triggered automatically after your app starts up, use the microflow **ASu_CheckMetamodel** from the **Private** > **Event flows** folder as your after startup microflow, or make sure this microflow gets triggered from your own after startup microflow.

### 2.1 Token Configuration

The display pattern in the token is optional. If you do not specify a value, the module will use the original behavior. 

For attributes of the decimal type, the display pattern `DecimalFormat` is used (for more information, see [Class DecimalFormat](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html)).

For dates, the `SimpleDateFormat` is used (for more information, see [Class SimpleDateFormat](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html)).

For all other attributes, the functions from *java.util.Formatter* are used (for details on the patterns, see [Class Formatter](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html)).

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

* [How to Export to Excel](/howto/integration/using-the-excel-exporter/)
* [How to Import Excel Documents](/howto/integration/importing-excel-documents/)
