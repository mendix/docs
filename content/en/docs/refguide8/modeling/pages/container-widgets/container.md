---
title: "Container"
url: /refguide8/container/
weight: 20
tags: ["studio pro", "container", "container widgets", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/container.pdf).
{{% /alert %}}

## 1 Introduction

A container is a layout element that can be used to simultaneously style, hide, drag, or delete a group of widgets placed in it:

{{< figure src="/attachments/refguide8/modeling/pages/container-widgets/container/container.png" alt="Container Example" >}}

In a browser, it is rendered as a simple `div` element by default. It is also possible to render a container as one of HTML5 semantic elements (for example, `section`, `main`, `article`, `nav`).

## 2 Properties

An example of container properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/container-widgets/container/container-properties.png" alt="Container Properties"   width="300"  >}}

Container properties consist of the following sections:

* [Accessibility](#accessibility)
* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Events](#events)
* [Visibility](#visibility)

### 2.1 Accessibility {#accessibility}

#### 2.1.1 Hide for Screen Readers 

This property specifies whether to hide the container from screen readers or not.

{{% alert color="info" %}} The container should not have any focusable elements inside such as input widgets, links, or buttons. These elements will cause the container to be announced by screen readers.
{{% /alert %}}

### 2.2 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### 2.4 General Section {#general}

#### 2.4.1 Render Mode

The **Render mode** determines which HTML5 tag will be used to show the container in the web browser. 

| Value     | HTML Tag    |
| --------- | ----------- |
| Div *(default)*      | `div`       |
| Section   | `section`   |
| Article   | `article`   |
| Header    | `header`    |
| Footer    | `footer`    |
| Main      | `main`      |
| Nav       | `nav`       |
| Aside     | `aside`     |
| Hgroup    | `hgroup`    |
| Address   | `address`   |

{{% alert color="info" %}}Render mode is not supported on native mobile pages.{{% /alert %}}

### 2.5 Events Section {#events}	

#### 2.5.1 On-Click {#on-click}	

The **On-click** property specifies the action that will be executed when the user clicks the container (either with their mouse pointer or by pressing the <kbd>Enter</kbd> or <kbd>Space</kbd> keys when the container is in focus).

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

### 2.6 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 4 Read More

* [Page](/refguide8/page/)
* [Container Widgets](/refguide8/container-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
