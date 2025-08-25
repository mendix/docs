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
To use Maia for Pages, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia for Pages helps you generate a [page](/refguide/page/) by adding and configuring widgets based on text input and optional image input. It can also be used to edit or remove existing widgets. Moreover, you can ask it to provide further improvements and explanations. For information on the current limitations of Maia for Pages, see the [Limitations](#limitation) section below.

## Using Maia for Pages

To enable Maia for Pages, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for Pages**.

Once enabled, you can find it in the the toolbar of a page:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-for-pages/maia-for-pages.png" max-width=80% >}}

{{% alert color="info" %}}
Maia for Pages is available in both the **Structure mode** and **Design mode**.
{{% /alert %}}

After clicking **Maia for Pages**, a dedicated chat interface appears at the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-for-pages/chat-interface.png" max-width=42% >}}

Describe your page or its main goals in the chat. Maia uses this information to add relevant widgets to the page and configure them for you. When generating a page, Maia knows about the domain model of the module you are currently working on. For example, it might include a [Data View](/refguide/data-view/) with some [Text Box](/refguide/text-box/) widgets for an attribute of an entity.

You can also supplement text input with an image. Maia uses the image to interpret your request better. For example, it can recognize the layout of a page from the image and replicate it. The image can be a screenshot, photo, wireframe, or drawing. With text input, you can also specify differences between the provided image and how you would like the generated page to appear. For example, you might write: *Generate a page based on this image, but change the header to Welcome.*

On pages that have already been created, either by Maia for Pages or manually, you can ask Maia to further improve the page and provide explanations. For example, you can add extra widgets, edit widgets by changing their properties, or remove widgets.

{{% alert color="info" %}}
In this dedicated chat, only requests related to Pages will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

### Best Practices for Text Input

To achieve optimal results, provide context about your page by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your page, the more tailored and accurate the generated page will be.

Below are examples of prompts you can use as a starting point:

* The page will be used to ...
* I need a page to be able to edit my entity ...
* Create a page based on the image.
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

### Best Practices for Image Input

The image size is limited to 512 KB. Make sure to select a clear image to help Maia better understand your request. For example, you can provide a screenshot, a photo, a design mock-up, or a close-up picture of a drawing. Avoid heavily compressed or low quality images, as these may result in the loss of important details.

Keep in mind that Maia analyzes only the structure of the image. The theming of your app, such as the color scheme, will not be changed. This can cause some differences between the provided image and the generated page.

## Limitation {#limitation}

Maia for Pages does not support all widgets. 

Currently the following widgets are supported:

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

## Read More

* [Pages](/refguide/page/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
