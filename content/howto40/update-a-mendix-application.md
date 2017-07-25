---
title: "Update a Mendix Application"
parent: "mendix-on-windows---service-console-3"
---
## Description

This section describes how to update a Mendix application.

## Instructions

There are three different updates:

*   Updating the application within the same Mendix version
*   Upgrading to a new Mendix version
*   Upgrading Mendix Windows Service

After you have updated the application, you must run the Mendix Service Console and start the application at least once manually (at the Console page). You see whether the application correctly starts or not and whether there are SQL commands to execute. If the application runs fine, you can stop them and start the Mendix Windows service.

### Updating the Application

Create a new Mendix Deployment Archive by the Modeler via menu Project, Create Deployment Archive... Start the Mendix Service Console and go to the Management panel. Click 'Update project...', select your deployment archive file (an .mda file) and press 'Update'.

The following steps will be automatically done:

*   the folders 'model' and 'web' in the project folder will be copied and compressed to a single file in the backup folder;
*   the whole content of the 'model' folder will be deleted, except the 'resources' subfolder and his content;
*   in the folder 'web', the subfolders 'forms', 'ui' and 'widgets' will be deleted;
*   the given .mda file will be extracted to the project folder and existing files will be overwritten.

### Upgrading to a New Mendix Version

If you have upgraded your application to a new Mendix version and wish to deploy this to the server, you must also add the new Mendix server version here. You can download a suitable server distribution in the Mendix Support Portal, under menu Releases. Click on Server distribution to download a distribution file (with extension .tar.gz). Start the Mendix Service Console and go to the Management panel. Click 'Add server...', select your distribution file and press 'Add'.

### Upgrading the Mendix Windows Service

Before you do this, you have to stop the Mendix service, so start the Mendix Service Console and click 'Stop Service'.

Now you can replace the Mendix\Services folder by a new version. Then start the Mendix Service Console, test the application and start the service again.
