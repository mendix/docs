---
title: "Google Tag"
url: /appstore/modules/mendix-sso/
category: "Modules"
description: "Describes the configuration and usage of the Google Tag module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "google", "google tag", "google analytics", "google ads", "google tag manager", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With the [Google Tag](https://marketplace.mendix.com/link/component/207519/) module, you can add tags from various Google products and services like Google Ads, Campaign Manager, Google Analytics (including version 4) in your Mendix application.

This module uses [Google Tag (gtag.js)](https://developers.google.com/tag-platform/gtagjs) and provides easily configurable widget that could be placed on pages or in a layout of your Mendix application. The module also provides a JavaScript action that uses advanced features of gtag.js and could send custom tracking events from withing your nanoflows.

{{% alert color="info" %}}
Google Tag (gtag.js) shouldn't be confused with Google Tag Manager as those are two separate products.
{{% /alert %}}

### 1.2 Features

* Easy event tracking with Google using `gtag.js`.
* Versatile widget and JavaScript action for user activity tracking
* Basic and advanced modes for users of all levels
* Simple page visit tracking with single-parameter configuration in basic mode
* Highly customizable tracking events in advanced mode

### 1.3 Limitations

In basic mode, the Google Tag widget sends a pre-configured `page_view` event as [suggested by Google](https://developers.google.com/tag-platform/gtagjs/reference/events#page_view). If this doesn't meet your needs, please use the advanced mode of the widget.

### 1.4 Compatibility

The module is compatible with Mendix 8 and above.

{{% alert color="warning" %}}
When using the Google Tag widget with Mendix Studio Pro 8, there is a known issue where non-relevant properties are not hidden in the configuration window (for example, advanced properties are not hidden when selecting basic mode). This issue does not affect the functionality of the widget but makes it a bit harder to configure. Please refer to the documentation to determine which properties need to be configured depending on the mode the widget is set to.
{{% /alert %}}


## 2 Google Tag Widget

### 2.1 Basic mode {#widget-basic-mode}

"When the **Widget mode** is set to **Basic**, the widget only sends page tracking events, which covers the majority of use cases. In this mode, only the **Tag ID** property needs to be filled in. Additionally, you can fill in the **Parameters** if you want to include specific information along with the page view events. For information on how to configure Parameters, please refer to the [Parameters](#widget-advanced-parameters) section below."

Typically, the Google Tag widget in basic mode is expected to be placed in the layout of your application. The widget automatically tracks when the end user switches pages and sends page view events accordingly. Placing two widgets in basic mode on a page and/or its layout is not supported.

{{< figure src="/attachments/appstore/modules/google-tag/widget-basic-mode.png" >}}

### 2.2 Advanced mode {#widget-advanced-mode}

Switching the **Widget mode** to **Advanced** gives you the full control over the interaction with `gtag.js`. It is advised to have basic understanding of [gtag.js](https://developers.google.com/tag-platform/gtagjs).

{{< figure src="/attachments/appstore/modules/google-tag/widget-advanced-event.png" >}}

#### 2.2.1 Config Command {#widget-advanced-config}

When the **Command** setting is set to **Config**, the widget issues the `config` command to `gtag.js`. This command requires **Tag ID** and accepts additional parameters configured via the **Parameters** property.

`gtag.js` requires the `config` command to be issued exactly once. For this reason, only one Google Tag widget in advanced mode with **Command** set to **Config** should be placed on a page and/or its layout. Combining it with Google Tag widgets in basic mode is also not possible as those automatically issue `config` command as well.

Typically, Google Tag widget in advanced mode with **Command** setting set to *Config** is expected to be placed in a layout of your application and be combined with Google Tag widgets in advanced mode with **Command** setting set to **Event** as well as Google Tag Command JavaScript actions with **Command** parameter set to **Event**.

#### 2.2.2 Event Command {#widget-advanced-event}

When **Command** setting is set to **Config** the widget issues `event` command to `gtag.js`. This requires **Event name** and accepts additional parameters configured via **Parameters** property. Additionally, if **Track Page Changes** property is set to **Yes** widget re-issues the `event` command a page change happens.

Widget in this mode must be combined with either a widget in basic mode or a widget in advanced mode with **Config** command.

One typical use case of the widget in this mode is custom page view tracking, when basic mode doesn't cover your needs. In this use case, the widget is placed in a layout and configured to track page changes. Another use case is to place the widget on individual pages and send specific events when the page opens.

#### 2.2.3 Parameters {#widget-advanced-parameters}

**Parameters** property allows sending additional data along with commands issued to `gtag.js`. Examples of parameters are Page Name and Session ID sent together with page view event. The value of a parameter might be set as custom value via expression or chosen from a predefined set. 

{{< figure src="/attachments/appstore/modules/google-tag/parameter-value-type.png" >}}

## 3 Google Tag Command {#jsaction}

Google Tag Command is a JavaScript action that allows making direct calls to `gtag.js`. When using this action it is recommended to have basic understanding of [gtag.js](https://developers.google.com/tag-platform/gtagjs).

The **Command** input might be set to **Config** or **Event**. When set to **Config** only **Tag ID** and **Parameters** have to be passed. When set to **Event** only **Event Name** and **Parameters** have to be passed.

The **Parameters** input accepts a list of **GoogleTagParameter** entities to represent arbitrary parameters to send along with a command to `gtag.js`. The entity includes two fields, `Name` and `Value`.



