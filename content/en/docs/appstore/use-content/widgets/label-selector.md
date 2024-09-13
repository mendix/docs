---
title: "Label Selector"
url: /appstore/widgets/label-selector/
description: "Describes the configuration and usage of the Label Selector widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Label Selector](https://marketplace.mendix.com/link/component/292/) widget enables easily creating objects, assigning objects to other objects, and removing objects (for example, labels) from other objects.

It features both an input box for searching and creating objects and a drop-down menu for selecting objects that already exist. The implementation is based on the [Tag-it library](https://aehlke.github.io/tag-it/).

You configure background colors for labels and how the text contrasts with a label background via the `text-normal` or `text-contrast` class.

### Typical Usage Scenario

* Quickly adjust reference sets
* Easily create new objects to add

## Properties

* **Label Object** – the entity used for the labels combined with the reference set from the context object
* **Caption Attribute** – the attribute of the label entity to be used as the caption
* **Color Attribute** – the attribute of the label color (optional)
* **Label constraint** – the constraint for the labels
* **After create label** – the microflow to be triggered after a new label is created and committed; this microflow receives the data view object
* **On change microflow** – the microflow to be triggered for every add and remove

## Implementation

To implement this widget, follow these steps:

1. Download the Label Selector widget into your app via the Marketplace in Studio Pro.
2. Create a [persistable](/refguide/persistability/) entity named **Label**.
3. Add two [attributes](/refguide/attributes/) to the entity named **Caption** and **Color**.
4. Add a [many-to-many association with dual ownership](/refguide/associations/#many-to-many-both) between this new entity and the entity that you want to label. 
5. Add any necessary [access rules](/refguide/access-rules/) to the new entity.
6. On a page with a data view of the entity that you want to label, add the widget to this data view.
7. On the widget properties **Data Source** tab, set **Label object** to the **Label** entity, **Caption attribute** to the **Caption** attribute, and **Color Attribute** to the **Color** attribute.
8. On the **Behavior** tab, set **Show Labels** to **Yes**.

The label functionality is now operational. To more fully use the widget, do the following:

* Create overview pages for the **Label** entity so that you can maintain the label, modify the colors, delete duplicates, and perform other tasks
* Improve the interaction by creating microflows for the **After create label** and **On change microflow** widget properties
