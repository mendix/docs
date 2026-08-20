---
title: "Call External Action"
url: /refguide/call-external-action/
weight: 5
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

The **Call external action** activity allows you to call an external action that is defined by an OData service that your app consumes. You can pass parameters to the action and use its result.

## Properties

There are two sets of properties for this activity, those in the properties pane on the right, and those that are displayed when opening the activity dialog.
An example of call external action properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-external-action/properties.png" alt="call external action properties" width="400" class="no-border" >}}

The **Action** section of the properties pane shows the toolbox action associated with this activity. You can open a dialog box to select a different toolbox action clicking the ellipsis (**…**) next to **Action**.

You can open the **Call External Action** properties dialog by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

The properties dialog box consists of two tabs:

* [General](#general)
* [Documentation](#public-documentation)

## General Tab {#general}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-external-action/general.png" alt="call external action general tab" width="700" class="no-border" >}}

### Action

The **Action** property, allows you to select the external action of the OData service that will be called. Click **Select...** to select an action from an OData service that you have consumed in your app.

If a parameter or the return value has an enumeration type which is not yet consumed in your app, you will be asked if it can be created.

If a parameter or the return value is an object or a list of an external entity type that is not yet part of your domain model, it will ask you to confirm that this external entity can be added to the domain model.

Click **OK** to confirm that you want to add the necessary external entities and enumerations to the module which the consumed OData service document is part of. Click **Cancel** to prevent the entities and enumerations being added – in this case the action will not be selected.

### Parameters

In the table below the selected action, you will find the parameters that are defined by the external action, with their name, type, and the value passed to them.

Double-click a row in the table or select it and click **Edit parameter value**, to see the [Edit External Action Parameter Mapping Dialog](#edit-parameter-mapping). Here you can edit the value that will be passed when calling the external action.  

### Output

The **Output** section shows what the action returns and allows you to rename it. You can use this value in the microflow, or choose not to use it.

If the action returns an entity that has associations, you can select the associations that you want to have populated in the resulting variable. You can then use the **Retrieve object(s)** activity to retrieve the associated objects over the association. 

## Documentation Tab {#public-documentation}

In the **Documentation** tab, you can find a **Summary** and a **Description**. These fields contain public documentation provided by the author of the service.

## Edit External Action Parameter Mapping Dialog {#edit-parameter-mapping}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-external-action/edit-parameter-mapping.png" class="no-border" >}}

The **Edit External Action Parameter Mapping** dialog allows you to set the value of the parameter you pass to an external action. You can either select a **Variable** from the dropdown field, or write a custom [microflow expression](/refguide/expressions/) that returns a value of the expected type.

Every parameter must have a value specified unless the service indicates that the parameter is optional (with the `Org.OData.Core.V1.OptionalParameter` annotation).

When the service indicates that a value cannot be empty (with `Nullable="false"`), the microflow will throw an error if the value evaluates to `empty`.

{{% alert color="info" %}}
The ability to not specify a value for optional parameters was introduced in [Studio Pro 11.4.0](/releasenotes/studio-pro/11.4/).
{{% /alert %}}

### Additional Attributes

If you have selected a variable for an entity that is an open type (`OpenType="true"`), you can add additional attributes. The runtime adds these attributes to the attributes of the object when calling the action.

{{% alert color="info" %}}
The ability to add additional attributes was introduced in [Studio Pro 11.5.0](/releasenotes/studio-pro/11.5/).
{{% /alert %}}

#### Add/Edit Additional Attribute

An additional attribute can have one of the following types:

* Boolean
* Date and time
* Decimal
* Enumeration
* Integer/Long
* String
* List of Boolean
* List of Date and time
* List of Decimal
* List of Enumeration
* List of Integer/Long
* List of String

For types **Enumeration** and **List of Enumeration**, Studio Pro lets you choose the enumeration. This must be an external enumeration of the action's service.

For types that are not a list, you type an expression of the given type.

For list types, you:

1. Choose an entity.
2. Type an expression that is a list of that entity.
3. Choose an attribute of that entity with the given type.

{{% alert color="info" %}}
List-types were introduced in [Studio Pro 11.6.0](/releasenotes/studio-pro/11.6/).
{{% /alert %}}

### Associations to Include

If you have selected a variable for an entity that has associations, you can select the associations you want to include in the arguments that you call the external action with.
