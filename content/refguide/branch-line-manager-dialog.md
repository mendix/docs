---
title: "Branch Line Manager Dialog"
parent: "dialogs"
---
Use this dialog to manage the branch lines of an app that's stored in a version control server. From this dialog new [branch lines](version-control-concepts) can be created and existing branch lines can be deleted.

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line.
1. The first is to do maintenance development on a version of your app that is running in production. You can keep on developing in the main line while you fix issues in the branch line.
2. The second reason for creating a branch line is if you are starting the development of a very large feature, a feature that will probably take more than a day to develop. By doing this in a branch line you can commit the half implemented feature (possibly even with errors) without disturbing other development in the main line.

## Location

Use this setting to select the location where your app is stored. This can be either the Team Server or an SVN server other than the Team Server.

{{% alert type="warning" %}}

This option is only available when support for other SVN servers is enabled in the Preferences dialog.

{{% /alert %}}

### Mendix Team Server

Select the Team Server app of which you want to manage the branch lines. If you have an app opened in the Modeler it will be selected automatically. However, you can also manage branch lines without opening an app first, in which case no app will be selected.

For more information about the Mendix Team Server, see [Team Server](team-server).

### Other SVN server

In the 'SVN repository address' field, enter the address of the app you want to manage and the press the 'Connect' button to load the available branches from the repository.

## Creating branch lines
You can create a new branch line by clicking the 'New' button above the list of branch lines. This will show a new dialog allowing you to specify the properties of the new branch.

See [Create Branch Line Dialog](create-branch-line-dialog) for a description of this dialog.

## Deleting branch lines
Existing branch lines can be removed by selecting them and then pressing the 'Delete' button. Note that this operation cannot be undone.
