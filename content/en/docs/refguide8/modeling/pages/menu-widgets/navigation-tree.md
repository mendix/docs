---
title: "Navigation Tree"
url: /refguide8/navigation-tree/
weight: 3
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/navigation-tree.pdf).
{{% /alert %}}

{{% alert color="warning" %}}The navigation tree widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A navigation tree displays menu items of a [navigation profile](/refguide8/navigation/#profiles) or [menu](/refguide8/menu/) document in the form of a tree. These items are determined by the [Menu source](#menu-source) and are either configured in the [Navigation](/refguide8/navigation/) or a [Menu](/refguide8/menu/).

The menu structure of a navigation tree can have three levels, that means that menu items can have sub-items. For more information on menu items and their properties, see [Menu](/refguide8/menu/). 

{{< figure src="/attachments/refguide8/modeling/pages/menu-widgets/navigation-tree/navigation-tree.png" alt="Navigation Tree" >}}

## 2 Properties

An example of navigation tree properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/menu-widgets/navigation-tree/navigation-tree-properties.png" alt="Navigation Tree Properties"   width="250"  >}}

Navigation tree properties consist of the following sections:

* [Common](#common)
* [Design properties](#design)
* [General](#general)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Design Properties Section {#design}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}}

### 2.3 General Section {#general}

#### 2.3.1 Menu Source {#menu-source}

The items that are shown in the menu widget are determined by the **Menu source**. Possible menu sources are described in the table below:

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Project navigation *(default)*  | The menu items are taken from one of profiles defined in the [Navigation](/refguide8/navigation/). |
| Menu document      | The menu items are taken from a [menu](/refguide8/menu/) document.       |

#### 2.3.2 Profile 

Only available when the [menu source](#menu-source) is set to **Project navigation**. The **Profile** property specifies what [navigation profile](/refguide8/navigation/#profiles) is used for the widget. 

Default: *Responsive*

#### 2.3.3 Menu 

Only available when the [menu source](#menu-source) is set to **Menu document**. The **Menu** property specifies what [Menu](/refguide8/menu/) document is used for the widget.

## 3 Read More

* [Page](/refguide8/page/)
* [Menu Widgets](/refguide8/menu-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
