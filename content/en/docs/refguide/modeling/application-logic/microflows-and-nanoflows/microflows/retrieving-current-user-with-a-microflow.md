---
title: "Retrieving the Current User with a Microflow"
linktitle: "Retrieving Current User with a Microflow"
url: /refguide/retrieving-current-user-with-a-microflow/
weight: 6
description: "Describes how to retrieve the current user of your application in Studio Pro with a microflow."
---

## Introduction

In order to implement a certain logic, you often need to identify the user who is currently logged in. The following are facts about user management in a Mendix app:

* The currently logged-in user is always available in [microflow calls](/refguide/microflows/) and [XPath constraints](/refguide/xpath-constraints/), and it can be retrieved in a microflow for subsequent querying or manipulation.
* All application users/accounts are a specialization of `System.User`, and very often and by default, it is `Administration.Account`.
* In Studio Pro, the [Administration](/appstore/modules/administration/) module is added by default. It allows you to manage local accounts and view app statistics.

This document teaches you how to do the following:

* Retrieve the currently logged-in user in a microflow using the **Account** entity from the **Administration** module in Mendix

## Prerequisites

Before you continue, make sure you have completed the following:

* Install the latest version of Studio Pro
* Read about the [Administration](/appstore/modules/administration/) module in the *Studio Pro Guide*
* Understand the basics about [microflows](/refguide/microflows/)

## Retrieving the Current User

To retrieve the currently logged-in user using the **Account** entity from the **Administration** module, do the following:

1. Open an existing microflow or create a new one.
2. Navigate to the **Toolbox** and search for the **Retrieve** activity.
3. Drag the **Retrieve** activity into your microflow.
4. Double-click the **Retrieve** activity to open its properties.
5. Choose **From database** as the **Source**.
6. Click **Select...** for **Entity**.
7. In the **Select Entity** dialog box, go to **Marketplace modules** > **Administration**, and select **Account**.
8. Choose **First** as the **Range**. This is because what you are looking for is the currently logged-in user, which is always only one object.
9. In the **XPath Constraint** box, type in `[id = $currentUser]` and click **OK**.

    For Mendix version 10.5 and above, click **Edit…** next to **XPath constraint** to open a dialog box where you can enter your constraint in **XPath expression** mode.

Now you have the microflow that retrieves the current user!

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/retrieving-current-user/retrieving-current-user.png" width="600px" class="no-border" >}}

## Read More

* [XPath Constraints](/refguide/xpath-constraints/)
* [XPath Keywords and System Variables](/refguide/xpath-keywords-and-system-variables/)
