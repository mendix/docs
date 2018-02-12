---
title: "Branch Line Manager Dialog"
parent: "dialogs"
---

Use this dialog to create and delete [branch lines](version-control-concepts) of an app that's stored on a version control server.

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line:
1. To do maintenance development on a version of your app that is running in production. You can keep on developing in the main line while you fix issues in the branch line.
2. If you are starting the development of a very large feature that will take more than a day to develop. By doing this in a branch line you can commit the half-implemented feature (possibly even with errors) without disturbing other development in the main line.

## Location

Use this setting to select the location where your app is stored. This can be either the Team Server or another SVN server.

{{% alert type="warning" %}}

This option is only available when support for other SVN servers is enabled in the Preferences dialog.

{{% /alert %}}

### Mendix Team Server

Select the Team Server app of which you want to manage the branch lines. If you have an app open in the Modeler it will be selected automatically. However, you can also manage branch lines without opening an app first, in which case no app will be selected.

For more information about the Mendix Team Server, see [Team Server](team-server).

### Other SVN Server

In the *SVN repository address* field, enter the address of the app you want to manage and click *Connect* to load the available branches from the repository.

## Creating Branch Lines

You can create a new branch line by clicking *New* above the list of branch lines. This will show a new dialog where you can specify the properties of the new branch.

See [Create Branch Line Dialog](create-branch-line-dialog) for a description of this dialog.

## Deleting Branch Lines

Existing branch lines can be removed by selecting them and then clicking *Delete*. Note that this operation cannot be undone.
