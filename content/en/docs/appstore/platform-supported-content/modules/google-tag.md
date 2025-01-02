---
title: "Google Tag"
url: /appstore/modules/google-tag/
description: "Describes the configuration and usage of the Google Tag module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

With the [Google Tag](https://marketplace.mendix.com/link/component/207519/) module, you can add tags from various Google products and services like Google Ads, Campaign Manager, and Google Analytics (including version 4) in your Mendix application.

This module uses [Google Tag (gtag.js)](https://developers.google.com/tag-platform/gtagjs) and provides an easily configurable widget that can be placed on the pages or in a layout of your Mendix app. The module also provides a JavaScript action that uses advanced features of `gtag.js` and can send custom tracking events from within your nanoflows.

{{% alert color="info" %}}
Google Tag (gtag.js) should not be confused with Google Tag Manager, as those are two separate products.
{{% /alert %}}

### Features

* Easy event tracking with Google using `gtag.js`
* Versatile widget and JavaScript action for user activity tracking
* Two **Widget modes** for users of all levels: **Basic** and **Advanced**
* Simple page visit tracking with single-parameter configuration in **Basic** mode
* Highly customizable tracking events in **Advanced** mode

### Limitations

In **Basic** mode, the Google Tag widget sends a pre-configured `page_view` event as [suggested by Google](https://developers.google.com/tag-platform/gtagjs/reference/events#page_view). If this does not meet your needs, please use the **Advanced** mode of the widget.

### Compatibility {#compatibility}

The module is compatible with Studio Pro 9.18 and above.

{{% alert color="info" %}}
This module might not function correctly for users employing ad-blocking extensions in their browsers, as such extensions often block tracking activities.
{{% /alert %}}

## Google Tag Widget

### Basic Mode {#widget-basic-mode}

When the **Widget mode** is set to **Basic**, the widget only sends page-tracking events, which covers the majority of use cases. In this mode, only the **Tag ID** property needs to be filled in. Additionally, you can fill in the **Parameters** if you want to include specific information along with the page view events. For more information, see the [Parameters](#widget-advanced-parameters) section below.

Typically, the Google Tag widget in **Basic** mode is placed in the layout of your app. The widget automatically tracks when the end-user switches pages and sends page view events accordingly. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/google-tag/widget-basic-mode.png" class="no-border" >}}

{{% alert color="info" %}}
Placing two widgets in **Basic** mode on a page and/or its layout is not supported.
{{% /alert %}}

### Advanced Mode {#widget-advanced-mode}

Switching the **Widget mode** to **Advanced** gives you full control over the interaction with `gtag.js`. When using this mode, it is advised to have a basic understanding of [gtag.js](https://developers.google.com/tag-platform/gtagjs).

{{< figure src="/attachments/appstore/platform-supported-content/modules/google-tag/widget-advanced-event.png" class="no-border" >}}

#### Config Command {#widget-advanced-config}

When the **Command** setting is set to **Config**, the widget issues the `config` command to `gtag.js`. This command requires **Tag ID** and accepts additional parameters configured via the **Parameters** property.

{{% alert color="info" %}}
Google Tag widgets in **Basic** mode automatically issue a single `config` command. If you need to configure multiple targets with different **Tag IDs**, you can place additional Google Tag widgets in **Advanced** mode with **Command** set to **Config** for each additional target.
{{% /alert %}}

Typically, the Google Tag widget in **Advanced** mode with the **Command** setting set to **Config** is placed in a layout of your application. It is typically combined with Google Tag widgets in **Advanced** mode with the **Command** setting set to **Event** as well as with Google Tag Command JavaScript actions with the **Command** parameter set to **Event**.

#### Event Command {#widget-advanced-event}

When **Command** is set to **Event**, the widget issues an `event` command to `gtag.js`. This requires **Event name** and accepts additional parameters configured via the **Parameters** property. Additionally, if the **Track Page Changes** property is set to **Yes**, the widget re-issues the `event` command when a page change happens.

For this scenario, a widget in the **Advanced** mode must be combined with either a widget in **Basic** mode or with a widget in **Advanced** mode with the **Config** command.

One typical use case of the widget in this scenario is custom page view tracking (when **Basic** mode does not cover your needs). In this use case, the widget is placed in a layout and configured to track page changes. Another use case is to place the widget on individual pages and send specific events when the page opens.

#### Parameters {#widget-advanced-parameters}

The **Parameters** property allows for sending additional data along with the commands issued to `gtag.js`. Examples of parameters are **Page Name** and **Session ID** sent together with the page view event. The value of a parameter might be set as a custom value via an expression or chosen from a predefined set. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/google-tag/parameter-value-type.png" class="no-border" >}}

## Google Tag Command {#jsaction}

Google Tag Command is a JavaScript action that allows for making direct calls to `gtag.js`. When using this action, it is recommended to have a basic understanding of [gtag.js](https://developers.google.com/tag-platform/gtagjs).

The **Command** input can be set to **Config** or **Event**. When set to **Config**, only **Tag ID** and **Parameters** have to be passed. When set to **Event**, only **Event Name** and **Parameters** have to be passed.

The **Parameters** input accepts a list of **GoogleTagParameter** entities to represent arbitrary parameters to send along with a command to `gtag.js`. The entity includes two fields, `Name` and `Value`.
