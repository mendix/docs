---
title: "Button Widgets"
url: /refguide8/button-widgets/
weight: 40
tags: ["studio pro", "button widgets", "buttons", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/button-widgets.pdf).
{{% /alert %}}

## 1 Introduction

Button widgets perform an action when clicked. They can be rendered as a button or as a hyperlink. Button widgets can be divided into the following ones:

* **Action Button** – a general name for a button that performs a certain action. You can assign an action yourself or you can select a button with a preconfigured action, such as: 
  * Call microflow button
  * Call nanoflow button
  * Open page button
  * Save button
  * Cancel button
  * Link button
  * Close page button
  * Delete button
  * Synchronize button
	{{< figure src="/attachments/refguide8/modeling/pages/button-widgets/preconfigured-action-button.png" alt="Preconfigured Buttons" >}}
  
* **Drop-Down Button** – shows a list of items, an action is performed when one of the items is clicked. A pop-up window with a list of possible actions appears when an end-user clicks a drop-down button:

	{{< figure src="/attachments/refguide8/modeling/pages/button-widgets/drop-down-example.png" alt="Drop-Down Button Example" >}}

  Different items can perform different actions. For more information on items and actions that can be assigned to them, see the [Item Section](/refguide8/button-properties/#items) in *Button Properties*.  

## 2 Performing Basic Functions

{{% snippet file="/static/_includes/refguide8/performing-basic-functions-widgets.md" %}}

## 3 Read More

* [Page](/refguide8/page/)
* [Pages](/refguide8/pages/)
