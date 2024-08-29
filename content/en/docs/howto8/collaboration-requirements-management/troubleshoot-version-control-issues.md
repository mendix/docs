---
title: "Solve Known Version Control Issues"
url: /howto8/collaboration-requirements-management/troubleshoot-version-control-issues/
weight: 7
description: "This document presents a list of problems and fixes for version control issues."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Mendix Studio Pro contains a version control system that supports collaborating with team members. This document presents fixes that can be used when version control problems arise.

For more information and general help on version control, see the following documents:

* [Version Control](/refguide8/version-control/)
* [Using Version Control in Studio Pro](/refguide8/using-version-control-in-studio-pro/)

## Errors and Fixes

Below is a list of known errors and the steps to fix them.

### Getting an Error Containing `SharpSvn.SvnAuthenticationException: Proxy authentication failed`

{{< figure src="/attachments/howto8/collaboration-requirements-management/troubleshoot-version-control-issues/oopsproxy.png" alt="Error dialog with proxy authentication failed" class="no-border" >}}

This error means that Studio Pro has problems reaching the version control server because of a proxy server.

The proxy settings can be changed in Studio Pro by selecting **Edit** > **Preferences** and then the **Advanced** tab. In the **Proxy server** section, you can change the proxy authentication settings. Fill in the correct **User name** and **Password** for the proxy server.

{{< figure src="/attachments/howto8/collaboration-requirements-management/troubleshoot-version-control-issues/proxysettings.png" alt="Proxy settings" class="no-border" >}}

### Getting an Error Containing Another `SharpSvn.SvnAuthenticationException`

This should be resolved if you sign out of Studio Pro and then log back in.

### Getting an Error with the Message `Connection timed out`

Follow these steps:

1. Open the *\Users\<username>\AppData\Roaming\Subversion\servers* file with any text editor.
2. Add the text `http-timeout = 5000` under the section `[global]`.
3. Save the file.

### Getting an Error with the Message `<project folder> is already locked`

Follow these steps:

1. Install [TortoiseSVN](https://tortoisesvn.net/), as suggested in [System Requirements](/refguide8/system-requirements/).

    {{% alert color="warning" %}}Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are NOT compatible.<br/>

    Always use the version of TortoiseSVN that matches your app model. If you open a local model from Mendix 7.x with the latest version of TortoiseSVN, you will no longer be able to open it in Mendix.{{% /alert %}}

2. Go to the parent directory (folder) of your app (this is the folder with the **<folder_name>** from the error message).
3. Right-click to open the folder's context menu and select **TortoiseSVN** > **Clean up**.

### Getting an Error with the Message `System.Security.Cryptography.CryptographicException: Key not valid for use in specified state`

Follow these steps to remove your user settings and restart Studio Pro.

1. Rename *\Users\<username>\AppData\Local\Mendix\Settings.sqlite* to *Settings.sqlite.old*.
2. Restart Studio Pro.

### Getting an Error with the Message `SharpSvn.SvnRepositoryIOException: At least one property change failed; repository is unchanged` {#error-with-message}

Follow these steps:

1. Install [TortoiseSVN](https://tortoisesvn.net/), as suggested in [System Requirements](/refguide8/system-requirements/).

    {{% alert color="warning" %}}Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are NOT compatible.<br/>

    Always use the version of TortoiseSVN that matches your app model. If you open a local model from Mendix 7.x with the latest version of TortoiseSVN, you will no longer be able to open it in Mendix.{{% /alert %}}

2. Open the project folder via Studio Pro by selecting **Project** > **Show Project Directory in Explorer**.
3. Right-click the white background of the project folder.
4. Select **TortoiseSVN** > **Properties**.
5. Double-click the `svn:ignore` property.
6. Copy all text via <kbd>Ctrl</kbd> + <kbd>A</kbd> followed by <kbd>Ctrl</kbd> + <kbd>C</kbd>.
7. Paste the text into a new document in Notepad++ (or another editor that understands newline conventions).
8. In the bottom right, click `CRLF` and select `LF` instead (this will replace `CRLF` with `LF`).
9. Copy all text again.
10. Go back to the window showing the `svn:ignore` property.
11. Replace the current content by pasting from the clipboard via <kbd>Ctrl</kbd> + <kbd>A</kbd> followed by <kbd>Ctrl</kbd> + <kbd>V</kbd>.
12. Click **OK** to close the `svn:ignore` property dialog box.
13. Click **OK** to close the `properties` dialog box.
14. Restart Studio Pro.

You can now commit your app.

### Resolving Conflicts on the 'svn:ignore' Property {#svn-ignore}

When merging or updating branches, a conflict is sometimes reported on the app folder rather than on an individual file. This usually means there is a conflict on the `svn:ignore` property.

In the `svn:ignore` property, Subversion records which files should be ignored. These are files that are on disk but should not be on Team Server.

For example, the `deployment` directory is necessary for running your project, but it should not be on the Team Server. Each user has their own version of the `deployment` folder on their hard disk.

You will need to resolve the conflict before you can commit your app to Team Server.

#### Example

In this example, we will focus on merging a branch into the main line. On the main line, the list of ignored files looks like this:

[//]: # "modeler-merge-marker has not yet been renamed for Studio Pro"

```text
modeler-merge-marker
.mendix-cache
ResolveIgnoreConflict.mpr.lock
*.launch
ResolveIgnoreConflict.mpr.bak
node_modules
```

On the branch, the list looks like this:

```text
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
The first five lines are the same and after that, the lists deviate.
{{% /alert %}}

Merging the branch to the main line will result in the following information message: 

{{< figure src="/attachments/howto8/collaboration-requirements-management/troubleshoot-version-control-issues/mergesuccessfuldialog.png" class="no-border" >}}

{{% alert color="info" %}}
A conflict is reported on the project *folder*. This usually means that there is a conflict on the `svn:ignore` property.
{{% /alert %}}

To resolve a conflict on the `svn:ignore` property, perform these steps:

1. Install [TortoiseSVN](https://tortoisesvn.net/), as suggested in [System Requirements](/refguide8/system-requirements/).

    {{% alert color="warning" %}}Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are NOT compatible.<br/>

    Always use the version of TortoiseSVN that matches your app model. If you open a local model from Mendix 7.x with the latest version of TortoiseSVN, you will no longer be able to open it in Mendix.{{% /alert %}}

2. Open the project directory in Windows File Explorer
3. Right-click the white background and choose **TortoiseSVN** > **Edit Conflicts**. The following pop-up window will be shown (resize the window to display all the information):

    {{< figure src="/attachments/howto8/collaboration-requirements-management/troubleshoot-version-control-issues/editconflictsdialog.png" class="no-border" >}}

4. Copy all the lines starting with `modeler-merge-marker` to the clipboard. 
5. Click **Manually edit property**.
6. Double-click the `svn:ignore` line in the grid.
7. Paste the previously copied lines via <kbd>Ctrl</kbd> + <kbd>A</kbd> followed by <kbd>Ctrl</kbd> + <kbd>V</kbd>.
8. Remove the special lines that start with `<<<<<<<`, `=======`, and `>>>>>>>`. For this example, we end up with the following combined ignore list:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/troubleshoot-version-control-issues/combinedignorelist.png" class="no-border" >}}

    {{% alert color="info" %}}This includes both the lines from the main line and from the branch. The order is not important.{{% /alert %}}

9. Click **OK** and then **OK** again to confirm the change.
10. Right-click the white background of the project directory and choose **TortoiseSVN** > **Edit Conflicts** again.
11. This time click **Resolve using local property**.

You have resolved the conflict and can commit from Studio Pro.

### Getting an Error with the Message `SharpSvn.SvnRepositoryIOForbiddenException: Access to '/.../!svn/rvr/1/trunk' forbidden`

If you get this error, try the following options:

* in [Apps](/developerportal/general/team/), check whether the user has access to the app:
    * If they do not have access, invite them to the app
    * If they do have access, remove them from the app and add them back – this will re-sync the access rules
* If the above does not work, make sure the [WebDAV protocol](https://en.wikipedia.org/wiki/WebDAV) is not blocked within your network – this protocol is [required](/refguide8/system-requirements/) by Studio Pro for [version control](/refguide8/version-control/) to work, but it might be blocked by your proxy server or other software like a firewall

## Other Problems

If the solutions here do not work for your version control problems, please submit a request to [Mendix Support](https://support.mendix.com/).

## Read More

* [Submit Support Requests](/support/submit-support-request/)
