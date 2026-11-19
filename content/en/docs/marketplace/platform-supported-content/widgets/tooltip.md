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

To make the tooltip available to keyboard and screen reader users, the trigger must contain at least one focusable widget, such as a button, link, or an input widget. For more information, see the [Keyboard and Screen Reader Support](#keyboard-screen-reader) section below.

### Limitations

This widget is affected by the following limitation:

- On Safari, the on-hover tooltip may not work properly when used on a disabled element. If this issue occurs, please use a different web browser.

## Configuration

Several options can be defined in the Tooltip widget. For more information, see the sections below.

### Render Method

For the sake of simplicity, there are two methods for creating a tooltip:

- **Text** (default) – this mode lets you can enter text with or without parameters to quickly implement a tooltip in your app
- **Custom** – enable this mode to freely design what will be shown in the tooltip such as the text, images, and widgets

If the tooltip has no content, it does not open. This happens, for example, when the text contains only spaces, or when all the widgets in the custom content are hidden.

{{% alert color="info" %}}
From version 1.6.0 and above, custom tooltip content loads together with the page instead of when the tooltip first opens. This allows screen readers to announce the content. Data sources inside custom content, such as a data view or a list view, run when the page loads even if the user never opens the tooltip. We recommend you avoid heavy data sources in tooltip content, because they can decrease page performance.
{{% /alert %}}

### Tooltip Position

You can define how to position the tooltip in relation to the trigger element.

**Tooltip Position** options are as follows:

- Top
- Left
- Bottom
- Right

### Arrow Position

With the new Tooltip widget you also can define how to position the tooltip arrow in relation to the tooltip. The arrow is the connection between the trigger element and the tooltip content.

**Arrow Position** options are as follows:

- Start
- Center
- End

### Open On

This option defines how the tooltip will be triggered.

**Open on** options are as follows:

- **Hover,focus** (default) – triggered when the user hovers the mouse over the trigger content, and when a widget in the trigger receives keyboard focus
- **Hover** – triggered when the user hovers the mouse over the trigger content; keyboard focus does not open the tooltip
- **Click** – triggered when the user clicks on the trigger content, or presses <kbd>Enter</kbd> or <kbd>Space</kbd> on a button or link in the trigger

From version 1.6.0, new Tooltip widgets use **Hover,focus** by default, so keyboard users can see the tooltip. Existing Tooltip widgets keep their current **Open on** setting when you update the widget. To make an existing tooltip available to keyboard users, change its **Open on** setting to **Hover,focus** or **Click**.

{{% alert color="warning" %}}
On mobile devices the **Hover** option will be triggered on touch.
{{% /alert %}}

## Keyboard and Screen Reader Support {#keyboard-screen-reader}

The sections below describe how the Tooltip widget works with the keyboard and with screen readers. This behavior applies from version 1.6.0 of the widget.

### Keyboard Support

How the tooltip responds to the keyboard depends on the **Open on** setting:

- **Hover,focus**
  - The tooltip opens when a widget in the trigger receives focus, for example when the user presses <kbd>Tab</kbd> to move to a button. Focus stays on the trigger.
  - With custom content, the user can press <kbd>Tab</kbd> to move focus from the trigger into the tooltip content. The tooltip stays open while focus is inside the trigger or the tooltip content.
  - The tooltip closes when focus moves out of both the trigger and the tooltip content.
- **Hover** – the tooltip does not open on keyboard focus.
- **Click**
  - Pressing <kbd>Enter</kbd> or <kbd>Space</kbd> on a button or link in the trigger opens the tooltip, and pressing it again closes the tooltip. This also works when the trigger is an action button, and the button's action still runs.
  - Clicking in a text box or on a checkbox in the trigger opens the tooltip but does not close it. Typing in a text box does not open or close the tooltip.
  - Moving focus to the trigger does not open the tooltip.

In every mode, pressing <kbd>Esc</kbd> closes the tooltip. If focus is inside the custom tooltip content, focus returns to the trigger.

### Screen Reader Support

The tooltip content is linked as the description of every focusable widget in the trigger. When a screen reader user moves focus to one of these widgets, the screen reader announces the widget followed by the tooltip content, whether or not the tooltip is open.

Keep the following in mind:

- A trigger without a focusable widget gets no description, so screen reader users cannot reach the tooltip. Place a focusable widget, such as a button, in the trigger.
- When the tooltip has no content, the trigger gets no description.
