---
title: "Download From Version Control Server Dialog"
parent: "dialogs"
---
Use this dialog to download an app from an SVN version control server. Note that you can use the [Open App Dialog](open-app-dialog) for this, too. You only need to use this form in the specialized case that you want a second download of an app (and development line) you already have on disk.

## Location

Use this setting to select the location where your app is stored. This can be either the Team Server or an SVN server other than the Team Server.

{{% alert type="warning" %}}

This option is only available when support for other SVN servers is enabled in the Preferences dialog.

{{% /alert %}}

### Mendix Team Server

From the list select the Team Server app you wish to open, then choose the development line that you want to download.

For more information about the Mendix Team Server, see [Team Server](team-server).

For more information about development lines, see [Version Control Concepts](version-control-concepts).

### Other SVN server

In the *SVN repository address* field, enter the address of the app you want to open and click *Connect* to load the development lines from the repository. Then choose the development line that you want to download.

## Disk location

Choose the directory where you want to download the app to. The suggested name includes the name of the development line (*main* or the name of the branch line).
