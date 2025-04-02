---
title: "Page Generator"
url: /refguide/page-generator/
weight: 60
description: "Describes the features in Page Generator."
---

## Introduction

{{% alert color="info" %}}
Page Generator is currently an experimental feature introduced in Studio Pro 10.21.0. For more information on experimental features, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

{{% alert color="info" %}}
To use Page Generator, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Page Generator is an AI-powered tool that you can use for generating a [page](/refguide/page/). It helps you add and configure widgets based on a text input and an optional image. As an experimental feature, Page Generator has certain limitations. For example, it is currently intended only for use with empty pages, and any existing widgets on a page will be removed. For more details, see the [Limitations](#limitation) section below.

## Using Page Generator

To enable Page Generator, go to **Edit** > **Preferences** > the **New Features** tab > the **Maia** section.

Once enabled, you can find it in the the toolbar of a page:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/page-generator/page-generator.png" max-width=80% >}}

{{% alert color="info" %}}
Page Generator is available in both the **Structure mode** and **Design mode**.
{{% /alert %}}

After clicking **Generate page**, a dedicated chat interface appears at the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/page-generator/chat-interface.png" max-width=42% >}}

Describe your page or its main goals in the chat. Maia uses this information to add relevant widgets to the page and configure them for you. When generating a page, Maia knows about the domain model of the module you are currently working on. For example, it might include a [Data View](/refguide/data-view/) with some [Text Box](/refguide/text-box/) widgets for an attribute of an entity.

You can also supplement text input with an image. Maia uses the image to interpret your request better. For example, it can recognize the layout of a page from the image and replicate it. The image can be a screenshot, photo, wireframe, or drawing. With text input, you can also specify differences between the provided image and how you would like the generated page to appear. For example, you might write: *Generate a page based on this image, but change the header to Welcome.*

{{% alert color="info" %}}
In this dedicated chat, only requests related to Page Generation will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

### Best Practices for Text Input

To achieve optimal results, provide context about your page by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your page, the more tailored and accurate the generated page will be.

Below are some examples you can use as a starting point:

* The page will be used to ...
* I need a page to be able to edit my entity ...
* Create a page like the image.
* Base the page on the image, but change ... to ...

### Best Practices for Image Input

The image size is limited to 512 KB. Make sure to select a clear image to help Maia better understand your request. For example, you can provide a screenshot, a photo, a design mock-up, or a close-up picture of a drawing. Avoid heavily compressed or low quality images, as these may result in the loss of important details.

Keep in mind that Maia analyzes only the structure of the image. The theming of your app, such as the color scheme, will not be changed. This can cause some differences between the provided image and the generated page.

## Limitations {#limitation}

As an experimental feature, Page Generator has some limitations.

### Empty Pages Only

Page Generator is currently intended only for use with empty pages. Any existing widgets on a page will be removed.

### Supported Widgets

Not all widgets are supported. Currently the following widgets are supported:

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

## Read More

* [Pages](/refguide/page/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
