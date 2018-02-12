---
title: "Import Project Package"
parent: "dialogs"
---
Use this dialog to create a new app from a Mendix project package (.mpk) file. The new app can either be stored in a version control server or locally on disk.

Project packages can be created using the [Export Project Package](export-project-package-dialog) dialog.

## Location

Use this setting to select the location where you want to store your app. This can be the Team Server, an SVN server other than the Team Server, or a local disk.

### Mendix Team Server

When uploading the app to the Team Server, you can choose between creating a new repository, or uploading to an existing one. In the former case, a new Team Server project will also be created.

When creating a new repository, enter the name for the new Team Server project and repository in the *App name* field.

Should you wish to use an existing repository, then select the corresponding Team Server app from the list. Note that this only works when the existing repository is empty.

For more information about the Mendix Team Server, see [Team Server](team-server).

### Other SVN server

In the *SVN repository address* field, enter the address of the repository you want to upload your app to.

{{% alert type="warning" %}}

The *Other SVN server* option is only available when support for other SVN servers is enabled in the Preferences dialog.

{{% /alert %}}

### Locally on disk

Select this option if you don't need to upload the new app to a version control server. In this case it will only be stored on the local disk of the computer that's running the Modeler.

## Disk location

Use this field to choose the directory where the project files of the app will be stored. If version control is enabled, the suggested name includes ends with `-main` to indicate this will be the main development line of the app.
