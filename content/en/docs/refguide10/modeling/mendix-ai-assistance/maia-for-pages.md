---
title: "Maia for Pages"
url: /refguide10/maia-for-pages/
weight: 60
description: "Describes the features in Maia for Pages."
aliases:
    - /refguide10/page-generator/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
Maia for Pages was introduced in Studio Pro 10.21.0. In Studio Pro 10.21, it was called Page Generator.
{{% /alert %}}

{{% alert color="info" %}}
To use Maia for Pages, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia for Pages is an AI-powered tool that you can use for generating a [page](/refguide10/page/) as well as explaining and providing further improvements. It helps you add and configure widgets based on text input and optional image input. In Studio Pro 10.23 and above, Maia for Pages is supported for existing pages and can be used to edit or remove existing widgets. 

For information on the current limitations of Maia for Pages, see the [Limitations](#limitation) section below.

## Using Maia for Pages

To enable Maia for Pages, go to **Edit** > **Preferences** > the **New Features** tab > the **Maia** section.

Once enabled, you can find it in the the toolbar of a page:

{{< figure src="/attachments/refguide10/modeling/mendix-ai-assistance/maia-for-pages/maia-for-pages.png" max-width=80% >}}

{{% alert color="info" %}}
Maia for Pages is available in both the **Structure mode** and **Design mode**.
{{% /alert %}}

After clicking **Maia for Pages**, a dedicated chat interface appears at the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide10/modeling/mendix-ai-assistance/maia-for-pages/chat-interface.png" max-width=42% >}}

Describe your page or its main goals in the chat. Maia uses this information to add relevant widgets to the page and configure them for you. When generating a page, Maia knows about the domain model of the module you are currently working on. For example, it might include a [Data View](/refguide10/data-view/) with some [Text Box](/refguide10/text-box/) widgets for an attribute of an entity.

You can also supplement text input with an image. Maia uses the image to interpret your request better. For example, it can recognize the layout of a page from the image and replicate it. The image can be a screenshot, photo, wireframe, or drawing. With text input, you can also specify differences between the provided image and how you would like the generated page to appear. For example, you might write: *Generate a page based on this image, but change the header to Welcome.*

After a page is generated, you can continue asking Maia in the same session to further improve the page and provide explanations. 

In Studio Pro 10.23 and above, Maia for Pages is supported for existing pages. For example, you can add extra widgets, edit widgets by changing their properties, or remove widgets.

{{% alert color="info" %}}
In this dedicated chat, only requests related to Pages will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide10/maia-chat/) interface.
{{% /alert %}}

### Best Practices for Text Input

To achieve optimal results, provide context about your page by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your page, the more tailored and accurate the generated page will be.

Below are examples of prompts you can use as a starting point:

* The page will be used to ...
* I need a page to be able to edit my entity ...
* Create a page like the image.
* Base the page on the image, but change ... to ...

Below are examples of prompts you can use to ask Maia to make further edits or request suggestions for improving a page:

* Can you add a button called `BUTTON_NAME` to the page?
* I want an area on the page where users can ...
* Make the save button a primary button.
* Change the page header to use Heading 1.
* Remove the ... widget.
* Delete all widgets on the page.
* How can I make this page more user-friendly or visually appealing?
* Could you suggest ways to optimize the performance of this page?

{{% alert color="warning" %}}
In Studio Pro 10.22 and below, requests for improvements or explanations only work within the same session where the page is generated. If you close the session and start a new session on that page, any attempts to make changes to the page will result in the removal of existing widgets.
{{% /alert %}}

### Best Practices for Image Input

The image size is limited to 512 KB. Make sure to select a clear image to help Maia better understand your request. For example, you can provide a screenshot, a photo, a design mock-up, or a close-up picture of a drawing. Avoid heavily compressed or low quality images, as these may result in the loss of important details.

Keep in mind that Maia analyzes only the structure of the image. The theming of your app, such as the color scheme, will not be changed. This can cause some differences between the provided image and the generated page.

## Limitations {#limitation}

Maia for Pages has some limitations.

### Supported Widgets

Not all widgets are supported. Currently the following widgets are supported:

* [Container](/refguide10/container/)
* [Layout Grid](/refguide10/layout-grid/)
* [Data View](/refguide10/data-view/)
* [Text](/refguide10/text/)
* [Button](/refguide10/button-widgets/)
* [Text Box](/refguide10/text-box/)
* [Text Area](/refguide10/text-area/)
* [Checkbox](/refguide10/check-box/)
* [Radio Buttons](/refguide10/radio-buttons/)
* [Date Picker](/refguide10/date-picker/)

## Read More

* [Pages](/refguide10/page/)
* [Mendix AI Assistance (Maia)](/refguide10/mendix-ai-assistance/)
* [Maia Chat](/refguide10/maia-chat/)
