---
title: "Mx Model Reflection"
url: /appstore/modules/model-reflection/
description: "Describes the configuration and usage of the Mx Model Reflection module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Mx Model Reflection](https://marketplace.mendix.com/link/component/69/) module allows you to access information about the domain model and about microflows of your app from your app. For example, you can loop through all the attribute names of an entity type in a microflow.

{{% alert color="info" %}}
To use MxModel Reflection with the React client, remove the folder **_USE_ME/_DEPRECATED**. The assets in this folder are there only for backwards compatiblity, and are not necessary to make full use of MxModel Reflection.
{{% /alert %}}

### Dependencies

The Mx Model Reflection module has the following dependencies:

* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Combo Box](https://marketplace.mendix.com/link/component/219304)
* [Data Widgets](https://marketplace.mendix.com/link/component/116540)

{{% alert color="info" %}}
Before importing the Mx Model Reflection module, import the latest versions of the [Data Widgets](https://marketplace.mendix.com/link/component/116540) and
[Combo Box](https://marketplace.mendix.com/link/component/219304) modules.
{{% /alert %}}

### React Readiness

Versions 8.0.3 and above of the module are compatible with the [Mendix React Client](/refguide/mendix-client/react/). For backwards compatibility, the select pages are still available inside the **\_USE_ME** > **\_DEPRECATED** > **ModelInformationSelectPages** folder. Those select pages are not used by the module anymore. When the React client is enabled, these pages should be removed.

### Typical Use Cases

The typical usage scenario is selecting and showing entities from your domain model to use for another configuration. 

## Configuration {#configuration}

After importing the module, add **\_USE_ME** > **MxObjects** to one of your pages (you can directly use **\_USE_ME** > **MxObjects_Overview** which contains **MxObjects**, and add the page to the navigation of your app). Run your application for the synchronization. You are able to enable synchronization for each module. For both security and performance purposes, you do not want your entire domain model structure available in your app.

{{% alert color="info" %}}
If you have a large app, the synchronization will take much longer.
{{% /alert %}}

If you want the synchronization to get triggered automatically after your app starts up, use the microflow **ASu_CheckMetamodel** from the **Private** > **Event flows** folder as your after startup microflow, or make sure this microflow gets triggered from your own after startup microflow.

### Token Configuration

The display pattern in the token is optional. If you do not specify a value, the module will use the original behavior. 

For attributes of the decimal type, the display pattern `DecimalFormat` is used (for more information, see [Class DecimalFormat](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html)).

For dates, the `SimpleDateFormat` is used (for more information, see [Class SimpleDateFormat](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html)).

For all other attributes, the functions from *java.util.Formatter* are used (for details on the patterns, see [Class Formatter](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html)).

All the patterns use the locale from the context. Based on the user's language, the pattern will change its behavior if necessary.

### Display Pattern Example (Using En_US Language)

* Long attribute with a thousand separator:
    * Pattern:  `%,8d%n`
    * Value: `12345678`
    * Result: `12,345,678` with a newline character at the end of the string
* Date attribute:
    * Pattern: `MM/dd/yyyy`
    * Value: `2nd of July 2016`
    * Result: `07/02/2016`
* Decimal attribute with a thousand separator and one decimal place:
    * Pattern: `#,##0.0`
    * Value: `12345.678`
    * Result: `12,345.7`

## Troubleshooting

### Error Message: Set On Click Action to "Do Nothing"

You get the following error:

* "On click action must be set to "Do nothing" when "Selection" is enabled"

#### Cause

You have an older version of the Data Widgets module.

#### Solution

Update the "Data Widgets" module to latest version then re-import Mx Model Reflection.

## Read More

* [How to Export to Excel](/howto/integration/using-the-excel-exporter/)
* [How to Import Excel Documents](/howto/integration/importing-excel-documents/)
