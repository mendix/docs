---
title: "Snippet"
url: /refguide/snippet/
weight: 30
tags: ["studio pro", "snippet", "page resources"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Snippets define reusable interface parts. They can be used on both [pages](/refguide/page/) and [layouts](/refguide/layout/). By using snippets you can make changes in fewer places when you modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you change something in the snippet, that change will show up in both places.

A snippet expects zero or more parameters. To change the parameters of the snippet, click the **Parameters** button in the top bar. This opens a dialog box which allows you to add, modify, and remove parameters. The **Parameters** button shows the current number of parameters in its caption, while its tooltip shows the name and type of each parameter. For more information about snippet parameters, see the [Parameters](#parameters) section in snippet properties.

In the example below, the snippet defines a single parameter with name **Order** and type **MyFirstModule.Order**.

{{< figure src="/attachments/refguide/modeling/pages/page-resources/snippet/snippet.png" alt="Example of a snippet"   width="400"  >}}

## 2 Properties

An example of snippet properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/page-resources/snippet/snippet-properties.png" alt="Example of the snippet properties pane"   width="250"  >}}

Snippet properties consist of the following sections:

* [Common](#common)
* [Data](#data)
* [Designer](#designer)
* [General](#general)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 2.2 Data Section{#data}

#### 2.2.1 Parameters{#parameters}

**Snippet Parameters** works the same way as [Page Parameter](/studio/page-parameter/) with the difference that a snippet's parameter can be accessed at the top level, for example when creating expressions or selecting attributes.

### 2.3 Designer Section{#designer}

#### 2.3.1 Canvas Width

**Canvas width** defines the width in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the width of the page in the actual application.

Default value: *800*

#### 2.3.2 Canvas Height

**Canvas height** defines the preferred minimum height in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the height of the page in the actual application.

Default value: *600*

### 2.4 General Properties{#general}

#### 2.4.1 Platform

The values for the platform property are:

* Web *(default)* – these snippets are used for pages which are going to be displayed in a browser or hybrid mobile app
* Native – these snippets are used for pages which are going to be displayed in a native mobile app

## 3 Read More

* [Snippet Call](/refguide/snippet-call/)

