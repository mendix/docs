---
title: "App Settings Dialog"
parent: "dialogs"
---
When creating a new app, the App Settings dialog lets you specify its name, whether or not to enable the online services provided by the Mendix platform, the default language, and the location on disk where the project files for your app are stored. These settings are optional; clicking the 'Create app' button will create your app with proper default settings.

## Name

The name of your new app. This name is used as the name of the project directory and file on disk. If you enable the online services for this app, the name is also used for the Team Server repository and a corresponding project in the Project Dashboard.

## Enable online services

The Mendix platform offers online services such as version control, cloud deployment and collaboration. When enabled, this will create a project in the Project Dashboard and a corresponding version control repository.

If you choose 'No' here, you will create an app that is only stored on your local disk. At a later point in time you can still decide to upload this local app to a version control server and enjoy the benefits of version control.

## Default language

The default language is the language of the end-user interface of your app. Choose the language that you will initially use in your forms and other user interface elements. You can always add additional languages to your app later on.

## Disk location

Here you may specify the project directory in which the files for your app are stored. If you enable the online services for the new app, you will see that the suffix "-main" will be appended to the directory name automatically. This is to indicate that the directory contains the main branch line of your project. When working on your app, you can always create new branches and download these to other directories.
