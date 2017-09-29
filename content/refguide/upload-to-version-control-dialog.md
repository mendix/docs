---
title: "Upload To Version Control Server"
parent: "dialogs"
---
Use this dialog to upload an app that is not yet stored in a version control server.

## Location

Use this setting to select the location where you want to store your app. This can be either the Team Server or an SVN server other than the Team Server.

{{% alert type="warning" %}}

This option is only available when support for other SVN servers is enabled in the Preferences dialog.

{{% /alert %}}

### Mendix Team Server

When uploading the app to the Team Server, you can choose between creating a new repository, or uploading to an existing one. In the former case, a new Team Server project will also be created.

When creating a new repository, enter the name for the new Team Server project and repository in the 'App name' field.

Should you wish to use an existing repository, then select the corresponding Team Server app from the list. Note that this only works when the existing repository is empty.

For more information about the Mendix Team Server, see [Team Server](team-server).

### Other SVN server

In the 'SVN repository address' field, enter the address of the repository you want to upload your app to.
