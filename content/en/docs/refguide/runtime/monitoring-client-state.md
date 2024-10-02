---
title: "Monitoring Client State"
url: /refguide/monitoring-client-state/
description: "Describes the supported client state monitoring actions."
---

## Introduction

The state is in the client (web browser). This allows the server to be scaled to multiple instances. As the state now resides in the client, it can be useful to monitor what's in the state and why at a given time.

To do this, use the <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> key combination to dump the state into the browser console. The state is displayed in a JSON object and is grouped by entity type. If the entity is not-persistable, this is indicated with the suffix `[NPE]`.

{{% alert color="info" %}}
The <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> key combination works in all browsers except Mozilla Firefox in [Parallels](/refguide/using-mendix-studio-pro-on-a-mac/).
{{% /alert %}}

## Details

For each entity type, the IDs of the object instances that are in the state are listed. Every object instance shows the following information:

* The suffix `(new)` after the object ID – whether the object is new (the object has not yet been committed)
* The suffix `(changed)` after the object ID – whether the object has uncommitted changes (the object has been committed before)
* The property `changes` – the changes that are present in the object
* The property `subscribedWidgets` – the widgets that are using the object
    * The widget name is in the form of `Module.PageName.widgetName` (for example, `MyFirstModule.Entity_NewEdit.dataView1`), which allows you to quickly find the referenced widget in Studio Pro
* The property `referencedBy` – the objects that reference this object

Both the `subscribedWidgets` and `referencedby` properties explain why the object is still in the state. If they are both empty, the text "Going to be garbage collected" is displayed.
