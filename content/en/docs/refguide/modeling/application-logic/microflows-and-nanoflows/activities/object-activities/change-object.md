---
title: "Change Object"
url: /refguide/change-object/
weight: 20
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

The **Change object** activity can be used to change the members of an object. This can be done with or without committing and with or without events.

## Properties

An example of change object properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/change-object/change-properties.png" alt="change object properties" width="700px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The change object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Object

**Object** defines the object that is changed.

### Commit

**Commit** defines the way the object is committed. For more information on committing, see the section [How Commits Work](/refguide/committing-objects/#how-commits-work) in *Commit Object(s)*.

| Option | Description |
| --- | --- |
| **Yes with event handlers** | The object is saved in the database and the [event handlers](/refguide/event-handlers/) are triggered |
| **Yes without event handlers** | The object is saved in the database, but the [event handlers](/refguide/event-handlers/) are not triggered |
| **No** (default)| The object is changed without being saved in the database |

This option is not shown for [external entities](/refguide/external-entities/) because they cannot be committed. Use the [Send External Object](/refguide/send-external-object/) activity to save changes to external entities.

#### Use Cases for Setting Commit

If a flow is triggered from a data view (for example, by the 'on change' of an text field), you often do not want to commit the changes you make to the data view object yet. The end-user can press the **Save** or **Cancel** button to commit or roll back the changes.

However, if the flow is triggered from a data grid button that just performs an operation on a selection, you should commit the changes to avoid losing them.

#### Commits in Nanoflows

Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a change object activity is used in an offline app, the changes are committed to the offline database.

### Refresh in Client{#refresh-in-client}

This setting defines whether data sources are rerun after data is committed to the database.

Default: **No**

{{% alert color="info" %}}
To make pages of a Mendix app efficient, many widgets display values from an attribute of an object which is cached on the page. Attributes in widgets which use cached data are always reflected in the client even if they are not committed and irrespective of the value of **Refresh in client**.

If a widget is only updated when a [data source](/refguide/data-sources/) is loaded, then changes will only be seen if changes are committed and **Refresh in client** is set to **Yes**.

When testing your app, ensure that the desired data is being displayed by the widgets you have chosen.
{{% /alert %}}

#### Microflow is Called from the Client in an Online App

If **Refresh in client** is set to **No**, the change is not reflected in the client.

If set to **Yes**, the object is refreshed across the client, which includes reloading the relevant [data sources](/refguide/data-sources/).

#### Microflow is Called in an Offline or Native App

When inside a microflow that is called from an offline or native app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of Offline-First Data.

#### Action is in a Nanoflow

The **Refresh in client** option is not available when change object is used in a [nanoflow](/refguide/nanoflows/). In this case, the refresh behavior depends on the **Commit type** option. It always reflects the changed attribute values in the client, including [visibility](/refguide/common-widget-properties/#visibility-properties).

If **Commit type** is set to **Yes**, the object is refreshed across the client as if **Refresh in client** was set to **Yes**.

### Change Members

You can specify a list of changes to apply to the object. Values for members are specified with [expressions](/refguide/expressions/) and must be of the same type as the member.

For a reference set association, it is also possible to add and remove an association (instead of only setting the member). For **add**, an object or a list of objects can be added to the currently associated objects. For **remove**, an object or a list of objects can be removed from the currently associated objects.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
