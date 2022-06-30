---
title: "Navigation list"
url: /refguide7/navigation-list/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

A navigation list can be used to attach an action to an entire row. Such a row is called a navigation list item.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/container-widgets/navigation-list/navigation-list.png" >}}
A navigation list with three empty rows.

{{% /alert %}}

## Common properties

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## Navigation list item

Each row in the navigation list is a navigation list item. A navigation list item can be associated with an action. Conditional visibility is available for list items.

## General

### Action

Action defines what action is performed when a navigation list item is 'clicked'. This can either be opening a page or calling a microflow. For opening a page see [Opening Pages](/refguide7/opening-pages/) and for calling a microflow see [Starting Microflows](/refguide7/starting-microflows/). Microflows attached to a navigation list item have no Confirmation or Advanced microflow settings.

## Visibility properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}
