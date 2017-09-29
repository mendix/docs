---
title: "Export Project Package"
parent: "dialogs"
---
Use this dialog to export the current app to a project package (.mpk) file. This is useful for example if you want to give someone the entire app, or if you need to provide a test app when submitting a ticket.

Project packages can be imported again into a new app using the [Import Project Package](import-project-package-dialog) dialog.

## Package destination

Use this field to choose the directory where the project package file will be created. The default location is a directory called 'packages' inside the project directory.

## Export data

When creating a project package from you app, it's possible to include a data snapshot. This snapshot contains the data from the local database, and any files you uploaded while running the app locally.

### Existing snapshot

Select this option when you want to include an existing snapshot in the package. This option is only available when a snapshot is already present. Snapshots can be created with the menu item 'Add snapshot of data' from the 'Team' menu.

### Existing snapshot

Select this option if you want to create a new snapshot to include in the package. This option is only available after you ran the app locally at least once, because the local database will created when running the app for the first time.
