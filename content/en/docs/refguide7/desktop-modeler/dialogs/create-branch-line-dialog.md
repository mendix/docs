---
title: "Create Branch Line Dialog"
url: /refguide7/create-branch-line-dialog/
---

## 1 Introduction

Use this dialog box to create a new [branch line](/refguide7/version-control/) in your application.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/create-branch-line-dialog/create-branch-line-dialog.png" >}}

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line:

* To do maintenance development in the branch line on a version of your app that is running in production, while still keeping on developing in the main line
* To start developing a very large feature that will take more than a day to develop in the branch line, without disturbing other development in the main line

To open the **Create Branch Line** dialog box, go to **Project > More Versioning > Manage Branch Lines**, and click **New** in the **Branch Lines Manager** dialog box.

## 2 Create Branch From

**Create branch from** allows you to choose where you want to create the branch line from.  You can choose one of the following options:

* **Main line** – generally if you want to develop a large feature independently of the main line
* **Branch line** – if you want to create a branch line from another branch line
* **Tagged version** – probably if you are doing maintenance on a deployed version

{{% alert color="warning" %}}

We do not recommend you to use the **Branch line** option unless you have good reasons.

{{% /alert %}}

## 3 Revision

For the **Revision** field, click **Select** to select from which revision of the main line you want to create a branch line. Often, you want to choose the most recent version. You then develop some functionality in the branch line and merge it back to the main line when you are done.

{{% alert color="info" %}}

This setting is only available when you select **Main line** or **Branch line** in the **Create branch from** field.

{{% /alert %}}

## 4 Branch Line

In the **Branch line** drop-down list, select from which branch line you want to create another branch line.

{{% alert color="info" %}}

This setting is only available when you select **Branch line** in the **Create branch from** field.

{{% /alert %}}

## 5 Tagged Version

In the **Tagged version** drop-down list, select from which tagged version you want to create a branch line. Every time you create a deployment archive a tag is created so that you can always refer back to that version of the app.

{{% alert color="info" %}}

This setting is only available when you select **Tagged version** in the **Create branch from** field.

{{% /alert %}}

## 6 Branch Name

Enter a name of the new **Branch line**.

{{% alert color="info" %}}

Branch names cannot include special characters (for example, `@`, `$`, `#`).

{{% /alert %}}

## 7 Existing Branch Name

Since branch line names must be unique, the **Existing branch lines** are shown so that you do not accidentally create a branch line twice.

## 8 Read More

* [Version Control](/refguide7/version-control/)
* [Collaborative Development](/refguide7/collaborative-development/)
