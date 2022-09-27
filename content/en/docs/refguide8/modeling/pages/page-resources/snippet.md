---
title: "Snippet"
url: /refguide8/snippet/
weight: 30
tags: ["studio pro", "snippet", "page resources"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/snippet.pdf).
{{% /alert %}}

## 1 Introduction

Snippets define reusable interface parts. They can be used on both [pages](/refguide8/page/) and [layouts](/refguide8/layout/). By using snippets you can make changes in fewer places when you modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you change something in the snippet, that change will show up in both places.

A snippet is indicated by a blue bar above a drop-zone. The blue bar has the snippet icon at the left and the name of an entity, if the snippet is in the context of an entity. If the snippet has no context, the bar says `(none)`.

In the example below, the snippet is used in the context of the **Orders.Order** entity.

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/snippet/snippet.png" alt="Example of a snippet"   width="400"  >}}

## 2 Properties

An example of snippet properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/snippet/snippet-properties.png" alt="Example of the snippet properties pane"   width="250"  >}}

Snippet properties consist of the following sections:

* [Common](#common)
* [Designer](#designer)
* [General](#general)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Designer Section{#designer}

#### 2.2.1 Canvas Width

**Canvas width** defines the width in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the width of the page in the actual application.

Default value: *800*

#### 2.2.2 Canvas Height

**Canvas height** defines the preferred minimum height in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the height of the page in the actual application.

Default value: *600*

### 2.3 General Properties{#general}

#### 2.3.1 Platform

The values for the platform property are:

* Web *(default)* – these snippets are used for pages which are going to be displayed in a browser or hybrid mobile app
* Native – these snippets are used for pages which are going to be displayed in a native mobile app

#### 2.3.2 Entity

This property defines the entity that is used as context for the widgets placed on this snippet.

Entity optionally specifies an [entity](/refguide8/entities/) that serves as the context for the widgets placed on it. When an entity is defined on a snippet, any usages of the snippet need to be placed inside a context for that entity or a specialization: a data view, for example.

For example, if you wanted to use an attribute of a Customer entity in a snippet, you could place a text box that shows the customer's name in the snippet without having to define a data view first.
