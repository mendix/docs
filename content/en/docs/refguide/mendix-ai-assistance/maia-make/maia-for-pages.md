---
title: "Maia for Pages"
url: /refguide/maia-for-pages/
weight: 60
description: "Describes the features in Maia for Pages."
aliases:
    - /refguide/page-generator/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
To use Maia for Pages, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia for Pages helps you generate a [page](/refguide/page/) by adding and configuring widgets based on text input and optional image input. You can also use it to edit or remove existing widgets or ask it to provide further improvements and explanations. For information on the current limitations of Maia for Pages, see the [Limitations](#limitation) section below.

## Using Maia for Pages

### In Studio Pro 11.8 and Above

In Studio Pro 11.8 and above, Maia for Pages is incorporated into the unified Maia Make capabilities, which are enabled by default. Maia for Pages does not have a dedicated interface. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

In Studio Pro 11.8, only overview pages can be generated.

In Studio Pro 11.9 and above, you can generate custom pages from scratch and modify existing pages. Local variables, additional data sources, client actions, XPath constraints, and expressions are also supported.

### In Studio Pro 11.7 and Below

In Studio Pro 11.7 and below, to enable Maia for Pages, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for Pages**.

Once enabled, you can find it in the the toolbar of a page:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-pages/maia-for-pages.png" max-width=80% >}}

{{% alert color="info" %}}
Maia for Pages is available in both the **Structure mode** and **Design mode**.
{{% /alert %}}

After clicking **Maia for Pages**, a dedicated chat interface appears on the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-pages/chat-interface.png" alt="" max-width=42% >}}

Describe your page or its main goals in the chat. Maia uses this information to add relevant widgets to the page and configure them for you. When generating a page, Maia knows about the domain model of the module you are currently working on. For example, it might include a [Data View](/refguide/data-view/) with some [Text Box](/refguide/text-box/) widgets for an attribute of an entity.

You can also supplement text input with an image. Maia uses the image to interpret your request better. For example, it can recognize the layout of a page from the image and replicate it. The image can be a screenshot, photo, wireframe, or drawing. With text input, you can also specify differences between the provided image and how you would like the generated page to appear. For example, you might write: *Generate a page based on this image, but change the header to Welcome.*

On pages that have already been created, either by Maia for Pages or manually, you can ask Maia to further improve the page and provide explanations. For example, you can add extra widgets, edit widgets by changing their properties, or remove widgets.

{{% alert color="info" %}}
In this dedicated chat, only requests related to Pages are handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

## Limitations {#limitation}

Maia for Pages does not support all widgets.

The following widgets are supported:

* [Container](/refguide/container/)
* [Layout Grid](/refguide/layout-grid/)
* [Data View](/refguide/data-view/)
* [Text](/refguide/text/)
* [Button](/refguide/button-widgets/)
* [Text Box](/refguide/text-box/)
* [Text Area](/refguide/text-area/)
* [Checkbox](/refguide/check-box/)
* [Radio Buttons](/refguide/radio-buttons/)
* [Date Picker](/refguide/date-picker/)

The following widgets are supported if they have been installed:

* [Data Grid 2](/appstore/modules/data-grid-2/)
* [Combo Box](/appstore/widgets/combobox/)
* [Image](/appstore/widgets/image/)
* [Charts](/appstore/widgets/charts/)
* [Progress Bar](/appstore/widgets/progress-bar/) (Studio Pro 11.1 and above)
* [Progress Circle](/appstore/widgets/progress-circle/) (Studio Pro 11.1 and above)

{{% alert color="info" %}}
In Studio Pro 11.6 and above, Maia can understand customized pluggable widgets when you enhance your widget definition XML file with the `<prompt>` element. For more information, see the [How to Enhance Your Pluggable Widget for Maia by Using `<prompt>`](/apidocs-mxsdk/apidocs/pluggable-widgets/#using-prompt-for-maia) section in *Pluggable Widgets API*.
{{% /alert %}}

## Read More

* [Pages](/refguide/page/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
