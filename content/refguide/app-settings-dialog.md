---
title: "App Settings Dialog"
parent: "dialogs"
---
When creating a new app, the App Settings dialog lets you specify an app name, whether or not to enable the online services provided by the Mendix Platform, the default language, and the location on disk where the project files for your app are stored. These settings are optional. Clicking Create app will create your app with the default settings.

## Name

The name of your new app. This name is used as the name of the project directory and file on disk. If you enable the online services for this app, the name is also used for the Team Server repository and a corresponding project in the Project Dashboard.

## Enable Online Services

The Mendix Platform offers online services such as version control, cloud deployment and collaboration. When enabled, this will create a project in the Developer Portal and a corresponding version control repository.

If you choose No, you will create an app that is only stored on your local disk. At a later point you can still decide to upload this local app to a version control server and enjoy the benefits of version control.

## Default Language

The default language is the language of the user interface of your app. Choose the language that you will initially use in your forms and other user interface elements. You can always add additional languages to your app later.

## Disk Location

Specify the project directory in which the files for your app are stored. If you enable the online services for the new app, you will see that the suffix "-main" will be appended to the directory name automatically. This is to indicate that the directory contains the main branch line of your project. While working on your app, you can create new branches and download these to other directories.
