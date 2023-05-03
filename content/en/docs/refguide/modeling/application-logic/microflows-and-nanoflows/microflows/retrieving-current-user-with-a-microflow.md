---
title: "Retrieving the Current User with a Microflow"
url: /refguide/retrieving-current-user-with-a-microflow/
weight: 6
description: "Describes how to retrieve the current user of your application in Studio Pro with a microflow."
tags: ["microflow", "current user", "retrieve"]
---

## 1 Introduction

In order to implement a certain logic, You often need to identify who the current user using the application is.

The following are facts about user management in a Mendix app:

* The currently logged-in user is always available in microflow calls and XPath constraints, and it can be retrieved in a microflow for subsequent querying or manipulation.
* All application users/accounts are a specialization of `System.User`, and very often and by default, it is `Administration.Account`.
* In Mendix Studio Pro 10, the [Administration](/appstore/modules/administration/) module is added by default . It allows you to manage local accounts and view app statistics.

This document teaches you how to do the following:

* Retrieve the current user in a microflow through the **Administration** module in Mendix

## 2 Prerequisites

Before you continue, make sure you have done the following:

* Install the latest version of Studio Pro
* Read about the [Administration](/appstore/modules/administration/) module in the *Studio Pro Guide*.
* Understand the basics about [microflows](/refguide/microflows/).

## 3 Retrieving the Current User

To retrieve the current user through the **Administration** module, do the following:

1. Open your microflow editor.
2. Navigate to the **Toolbox** and search for the **Retrieve** activity.
3. Drag the **Retrieve** activity into your microflow.
4. Double-click the **Retrieve** activity to open its properties.
5. Choose **From database** as the **Source**.
6. Click **Select** for **Entity** and do the following:
    * In the **Select Entity** dialog box, go to **Marketplace modules** > **Administration** > **Account**, and select **Account** as the **Entity**.
7. Choose **First** as the **Range**.
8. In the **XPath Constraint** box, type in `[id = $currentUser]`, and click **OK**.

Now you have the microflow that retrieves the current user!

## 4 Read More

* [XPath Constraints](/refguide/xpath-constraints/)
