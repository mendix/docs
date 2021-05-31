---
title: "App Settings Dialog"
parent: "dialogs"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 1 Introduction
When creating a new app, you can do the following with this dialog box:

* Enter an app name
* Select whether to enable the online services provided by the Mendix Platform
* Select the default language
* Enter the location on disk where the project files for your app are stored

These settings are optional. You can click **Create app** to create your app with the default settings.
![](attachments/app-settings-dialog/app-settings-dialg-box.png)

## 2 App Name

The name of your new app. This name is used as the name of the project directory and file on disk. If you enable the online services for this app, the name is also used for the Team Server repository and a corresponding app in **My Apps**.

## 3 Enable Online Services

The Mendix Platform offers online services such as version control, cloud deployment and collaboration. When enabled, this will create a project in the Developer Portal and a corresponding version control repository.

If you choose **No** for **Enable online services**, you will create an app that is only stored on your local disk. At a later point you can still decide to upload this local app to a version control server and enjoy the benefits of version control.

## 4 Default Language

The default language is the language of the user interface of your app. Choose the language that you will initially use in your forms and other user interface elements. You can always add additional languages to your app later.

## 5 Project Directory

Specify the project directory in which the files for your app are stored. If you enable the online services for the new app, you will see that the suffix **-main** will be appended to the directory name automatically. This is to indicate that the directory contains the main branch line of your project. While working on your app, you can create new branches and download these to other directories.
