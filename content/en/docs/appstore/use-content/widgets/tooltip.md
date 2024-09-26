---
title: "Tooltip"
url: /appstore/widgets/tooltip/
description: "Describes the Tooltip widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can use the [Tooltip](https://marketplace.mendix.com/link/component/119160) widget to add tooltip texts to any widget available in Mendix.

### Trigger

When placing the new Tooltip widget onto a page, use the composable region to place the content which will trigger the tooltip. You can freely model and combine widgets per your use case.

### Limitations

This widget is affected by the following limitation:

* On Safari, the on-hover tooltip may not work properly when used on a disabled element. If this issue occurs, please use a different web browser.

## Configuration

Several options can be defined in the Tooltip widget. For more information, see the sections below.

### Render Method

For the sake of simplicity, there are two methods for creating a tooltip:

* **Text** (default) – this mode lets you can enter text with or without parameters to quickly implement a tooltip in your app
* **Custom** – enable this mode to freely design what will be shown in the tooltip such as the text, images, and widgets

### Tooltip Position

You can define how to position the tooltip in relation to the trigger element.

**Tooltip Position** options are as follows:

* Top
* Left
* Bottom
* Right

### Arrow Position

With the new Tooltip widget you also can define how to position the tooltip arrow in relation to the tooltip. The arrow is the connection between the trigger element and the tooltip content.

**Arrow Position** options are as follows:

* Start
* Center
* End

### Open On

This option defines how the tooltip will be triggered.

**Open on** options are as follows:

* **Click** – triggered when the user clicks on the trigger content
* **Hover** – triggered when the user hovers the mouse over it
* **Hover and focus** – triggered in both cases described above

{{% alert color="warning" %}}
On mobile devices the **Hover** option will be triggered on touch.
{{% /alert %}}
