---
title: "Authentication (Beta)"
url: /refguide/authentication-action/
weight: 30
description: "Describes the configuration items of the Authentication microflow activity in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

{{% alert color="info" %}}
This activity is currently in beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

The **Authentication** activity allows you to run the authentication that is configured in an [authentication document](/refguide/authentication/) from a microflow, and to get the result in a variable.

## Properties

The **Authentication** activity properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

The dialog box consists of the following sections:

* [Authentication document](#authentication-document)
* [Output](#output)

### Authentication Document {#authentication-document}

The **Authentication document** section contains the **Document** property. Click the selector to choose the [authentication document](/refguide/authentication/) that the activity uses. You can clear the selection by choosing **None**, but a document must be selected for the activity to work.

### Output {#output}

The **Output** section configures the result of the activity.

#### Type

The type of the result. This is `System.Credentials` when an authentication document is selected, and `Nothing` when no document is selected. This property is read-only.

#### Variable Name

The name of the variable that stores the result. The name must be a valid name.

By default, the variable name is `Credentials` when you select an authentication document, and `None` when no document is selected. The name updates automatically until you edit it manually. After that, it keeps the name you entered.

When you change the variable name and click **OK**, Studio Pro renames the variable everywhere it is used in the microflow.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Authentication](/refguide/authentication/)
* [Integration Activities](/refguide/integration-activities/)
