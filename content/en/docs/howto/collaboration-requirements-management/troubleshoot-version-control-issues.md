---
title: "Solve Known Version Control Issues"
url: /howto/collaboration-requirements-management/troubleshoot-version-control-issues/
category: "Collaboration"
weight: 7
description: "This document presents a list of problems and fixes for version control issues."
tags: ["version control", "troubleshoot", "Studio Pro", "Subversion", "TortoiseSVN"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix Studio Pro contains a version control system that supports collaborating with team members. This document presents fixes that can be used when version control problems arise.

For more information and general help on version control, see the following documents:

* [Version Control](/refguide/version-control/)
* [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/)

## 2 Errors & Fixes

Below is a list of known errors and the steps to fix them.

### 2.1 Getting an Error Containing `SharpSvn.SvnAuthenticationException: Proxy authentication failed`

{{< figure src="/attachments/howto/collaboration-requirements-management/troubleshoot-version-control-issues/oopsproxy.png" alt="Error dialog with proxy authentication failed" >}}

This error means that Studio Pro has problems reaching the version control server because of a proxy server.

Follow these steps:

1. Go to **Edit** > **Preferences**.
2. Go to the **Advanced** tab. 
3.  In the **Proxy server** section, change the **Proxy server** settings. Fill in the correct **User name** and **Password**.

    {{< figure src="/attachments/howto/collaboration-requirements-management/troubleshoot-version-control-issues/proxysettings.png" alt="Proxy settings" >}}

### 2.2 Getting an Error Containing Another `SharpSvn.SvnAuthenticationException`

When this error occurs, sign out of Studio Pro and then log back in to resolve it.

### 2.3 Getting an Error with the Message `Connection timed out`

To solve this issue, follow these steps:

1. Open the *\Users\<username>\AppData\Roaming\Subversion\servers* file with any text editor.
2. Add the text `http-timeout = 5000` under the section `[global]`.
3. Save the file.

### 2.4 Getting an Error with the Message `<app folder> is already locked`

To solve this issue, follow these steps:

1. Install [TortoiseSVN](https://tortoisesvn.net/), as suggested in [System Requirements](/refguide/system-requirements/).

	{{% alert color="warning" %}}Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are *not* compatible. Always use the version of TortoiseSVN that matches your app model. If you open a local model from Mendix version 7.x or 6.x with the latest version of TortoiseSVN, you will no longer be able to open it in Mendix.{{% /alert %}}

2. Go to the parent directory (folder) of your app (this is the folder with the **<folder_name>** from the error message).
3. Right-click to open the folder's context menu and select **TortoiseSVN** > **Clean up**.

### 2.5 Getting an Error with the Message `System.Security.Cryptography.CryptographicException: Key not valid for use in specified state`

Follow these steps to remove your user settings and restart Studio Pro:

1. Rename *\Users\<username>\AppData\Local\Mendix\Settings.sqlite* to *Settings.sqlite.old*.
2. Restart Studio Pro.

### 2.6 Getting an Error with the Message `SharpSvn.SvnRepositoryIOException: At least one property change failed; repository is unchanged` {#error-with-message}

To solve this issue, follow the steps below:

1. Install [TortoiseSVN](https://tortoisesvn.net/), as suggested in [System Requirements](/refguide/system-requirements/).

   {{% alert color="warning" %}}Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are *not* compatible. Always use the version of TortoiseSVN that matches your app model. If you open a local model from Mendix version 7.x or 6.x with the latest version of TortoiseSVN, you will no longer be able to open it in Mendix.{{% /alert %}}

2. Open the app folder via Studio Pro by selecting **App** > **Show App Directory in Explorer**.

3. Right-click the background of the app folder and select **TortoiseSVN** > **Properties**. The **Properties** dialog box opens.

4. Double-click the `svn:ignore` property. The **Edit Properties** dialog box opens.

5. Copy all text of the **Property value** via <kbd>Ctrl</kbd>+<kbd>A</kbd> followed by <kbd>Ctrl</kbd>+<kbd>C</kbd>.

6. Paste the text into a new document in Notepad++ (or another editor that understands newline conventions).

7. In the lower right, double-click **Windows (CR LF)** and select **Unix (LF)** instead. This will change the newline type from CRLF to LF.

8. Copy all text again.

9. Go back to the **Edit Properties** dialog box.

10. Replace the current content by pasting from the clipboard via <kbd>Ctrl</kbd>+<kbd>A</kbd> followed by <kbd>Ctrl</kbd>+<kbd>V</kbd>.

11. Click **OK** to close the **Edit Properties** dialog box.

12. Click **OK** to close the **Properties** dialog box.

13. Restart Studio Pro.

You can now commit your app.

### 2.7 Resolving Conflicts on the `svn:ignore` Property {#svn-ignore}

When you merge or update branches, a conflict is sometimes reported on the app folder rather than on an individual file. This usually means there is a conflict on the `svn:ignore` property.

In the `svn:ignore` property, Subversion records which files should be ignored. These are files that are on disk but should not be on Team Server.

For example, the **deployment** directory is necessary for running your app, but it should not be on the Team Server. Each user has their own version of the **deployment** folder on their hard disk.

You will need to resolve the conflict before you can commit your app to Team Server.

#### 2.7.1 Example

In this example, we will focus on merging a branch into the main line. On the main line, the list of ignored files looks like this:

[//]: # "modeler-merge-marker has not yet been renamed for Studio Pro"

```
modeler-merge-marker
.mendix-cache
ResolveIgnoreConflict.mpr.lock
*.launch
ResolveIgnoreConflict.mpr.bak
node_modules
```

On the branch, the list looks like this:

```
modeler-merge-marker
.mendix-cache
ResolveIgnoreConflict.mpr.lock
*.launch
ResolveIgnoreConflict.mpr.bak
.project
.classpath
deployment
```

{{% alert color="info" %}}
The first five lines are the same, and after that the lines in your list can be different.
{{% /alert %}}

Merging the branch to the main line will result in the following information message: 

{{< figure src="/attachments/howto/collaboration-requirements-management/troubleshoot-version-control-issues/mergesuccessfuldialog.png" >}}

{{% alert color="info" %}}
A conflict is reported on the app *folder*. This usually means that there is a conflict on the `svn:ignore` property.
{{% /alert %}}

To resolve a conflict on the `svn:ignore` property, follow these steps:

1.   Install [TortoiseSVN](https://tortoisesvn.net/), as suggested in [System Requirements](/refguide/system-requirements/).
	
	{{% alert color="warning" %}}Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are *not* compatible. Always use the version of TortoiseSVN that matches your app model. If you open a local model from Mendix version 7.x or 6.x with the latest version of TortoiseSVN, you will no longer be able to open it in Mendix.{{% /alert %}}
	
2. Open the app directory in Windows File Explorer.

3.  Right-click the background of the app folder and choose **TortoiseSVN** > **Edit Conflicts**. The following pop-up window will be shown (resize the window to display all the information):

	{{< figure src="/attachments/howto/collaboration-requirements-management/troubleshoot-version-control-issues/editconflictsdialog.png" >}}

4. Copy all the lines starting with `modeler-merge-marker` to the clipboard. 

5. Click **Manually edit property**.

6. Double-click the `svn:ignore` line in the grid.

7. Paste the previously copied lines via <kbd>Ctrl</kbd>+<kbd>A</kbd> followed by <kbd>Ctrl</kbd>+<kbd>V</kbd>.

8.  Remove the special lines that start with `<<<<<<<`, `=======`, and `>>>>>>>`. For this example, we end up with the following combined ignore list:

	{{< figure src="/attachments/howto/collaboration-requirements-management/troubleshoot-version-control-issues/combinedignorelist.png" >}}

	{{% alert color="info" %}}
	This includes both the lines from the main line and from the branch. The order is not important.
	{{% /alert %}}

9. Click **OK** and then **OK** again to confirm the change.

10. Right-click the background of the app directory and choose **TortoiseSVN** > **Edit Conflicts** again.

11. Click **Resolve using local property**.

You have resolved the conflict and can commit from Studio Pro.

### 2.8 Getting an Error with the Message `SharpSvn.SvnRepositoryIOForbiddenException: Access to '/.../!svn/rvr/1/trunk' forbidden`

If you get this error, try the following options:

* In the [Developer Portal](/developerportal/collaborate/team/), check whether the user has access to the app:
	* If they do not have access, invite them to the app
	* If they do have access, remove them from the app and add them back – this will re-sync the access rules
* If the above does not work, make sure the [WebDAV protocol](http://www.webdav.org/) is not blocked within your network. This protocol is [required](/refguide/system-requirements/) by Studio Pro for [version control](/refguide/version-control/) to work, but it might be blocked by your proxy server or other software like a firewall.

## 3 Other Problems

If the solutions here do not work for your version control problems, please submit a request to [Mendix Support](https://support.mendix.com/).

## 4 Read More

* [Submit Support Requests](/developerportal/support/submit-support-request/)
