---
title: "Managing Marketplace Content"
linktitle: "Marketplace Content"
url: /private-mendix-platform/marketplace/
description: "Documents creating, managing, and sharing Marketplace content in Private Mendix Platform."
weight: 30
---

## Introduction

If your organization has enabled the Marketplace for your Private Mendix Platform, you can build your own connectors and modules, and then share them on the Marketplace, so that other teams from your organization can use the connector in their own apps.

## Creating Marketplace Content

For more information about building a connector for your Mendix app, see the following topics:

* [Build a Connector](/appstore/creating-content/connector-guide-build/)
* [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)

## Sharing Marketplace Content {#sharing}

To share the connector that you built, perform the following steps:

1. In Private Mendix Platform, click **My Content**.

    {{< figure src="/attachments/private-platform/pmp-ug7.png" class="no-border" >}}

2. Select a **Content type** for your component.
3. On the **General** page, enter a **Name** for your component.
4. Enter a **Description** of your component.
5. Select the **Studio Pro Version** for which the component is built.
6. Select the type of **License** you want applied to your app.
7. Select the **Cover Image** that will be displayed for your connector.
8. Click **Continue**.
9. On the **Package** page, in the **Upload MPK** field, click **Browse** and select the [.mpk file](/appstore/creating-content/connector-guide-build/#export-as-mpk) that you created for your component.
10. Click **Upload**.
11. Specify the **Version** of your component.
12. Provide a **Release Note** to describe the contents of the version you are uploading.

    {{< figure src="/attachments/private-platform/pmp-ug8.png" class="no-border" >}}

13. Click **Save & Continue**.
14. On the **Additional Info** page, provide instructions for users of your component.

    {{< figure src="/attachments/private-platform/pmp-ug9.png" class="no-border" >}}

15. Click **Save & Continue**.
16. Review and publish your changes. 

Depending on the process set up by your Private Mendix Platform administrator, your component may be subject to an approval process before it is shared with other users.

## Sharing Content with Groups

On the **Manage Group Content** page, you can share components with the user groups to which you belong.

1. In Private Mendix Platform, click **Group Content**.

    {{< figure src="/attachments/private-platform/pmp-ug10.png" class="no-border" >}}

2. Select a Content type for your component.
3. In the App Visibility section, select the group with which you want to share the component.

    {{< figure src="/attachments/private-platform/pmp-ug11.png" class="no-border" >}}

    If the group with which you want to share the content is not in the list, it means that you are not a member of that particular group. Contact your Private Mendix Platform administrator.

4. Follow the instructions in [Sharing Marketplace Content](#sharing).