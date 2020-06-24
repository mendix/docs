---
title: "Box"
category: "Connectors"
description: "Describes the configuration and usage of the Box connector, which is available in the Mendix App Store."
tags: ["app store", "app store component", "box", "boxdev", "box platform"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Box](https://appstore.home.mendix.com/link/app/40977/) connector provides an easy to way to use [Box](https://www.box.com) inside your Mendix application.

## 2 Installation

1. Download this connector as well as the [Community Commons Function Library](../modules/community-commons-function-library) and [Deep Link](../modules/deep-link) modules into your app project.
2. In order to use this connector, you must have an acccount on the Box developer site of box, so go to [BoxDEV](https://developer.box.com/) and click **Log in** > **Sign up** in the upper-right corner of the page.
3. Fill in the form with your credentials and submit.
4. Validate your account via an email, which will then give you access to the dashboard of your Box account.
5. To allow the connector access to your account, you must enable the two-factor authentication via the **Security** tab.
6. Create a new Box application that  your Mendix application will interact with by clicking **Get Started**.
7. In the new Box app, you need to set the **redirect_URL** to the domain address of your Mendix application as `https://{mendix_application_address}/link/grantaccess`. This is so Box is able to return to your application once it is authenticated.

	![](attachments/box/redirect-url.jpg)

8.  Generate an RSA keypair. The following commands may change depending on your OS:

	```
	openssl genrsa -out boxmendixappdes.key 2048
	openssl rsa -in boxmendixappdes.key -pubout > boxmendixappdes.pub
	```

	For more information on generating an RSA keypair, see [JWT Auth](https://docs.box.com/docs/app-auth#section-1-generating-an-rsa-keypair).

9. Click **Add Public key** and then copy the contents of *boxmendixappdes.pub*.
10. Open and run the Mendix Box connector via your app project.
11. To connect your Box app to the connector, click **Box Applications** in the navigation bar on the left side of the connector: 

	![](attachments/box/navigation.jpg)

12. Click **New** and fill out the information according to your newly built Box app:

	![](attachments/box/new-details.jpg)

13. You need to make an account to associate the final token to, so click **Box Accounts** on the navigation layout and click **New** to make a new account.
14. After configuring the connector, you need to receive an authentication token to be able to have access to your Box account. To do that, navigate to the home page of your Mendix connector, select your Box application on the bottom of the page, and click **Log in to Box**:

	![](attachments/box/log-in-to-box.jpg)

15. Accept the request from Box asking you to give permission to the connector to access all the files and folders of your account.
16. After access is given, you will be navigated back to the connector, where you will find information regarding your token. Add your account to the **Box account** field and click **Save**:

	![](attachments/box/box-account.jpg)

Congrats! You are now able to use the different features in the connector to make your own personal app and control your Box account.



In the BoxConnector module, use the ```BoxApplication_Overview``` page as an admin user to configure your Box connectors in your application.

Use ```BoxAccounts_Overview``` page to associate Box accounts to Mendix
    accounts, using the  *token* provided by the corresponding type of
    Box account (user or service).

In the project, make sure that BoxApplication entity is set with the same      redirect url.

Configure the *DeepLink* module as follow:

![](documentation/resources/step08_mendix_deeplink_config.jpg)


## 3 Features

### Authentication
* Get token
* Get token service accounts
* Refresh token
* Revoke token

### Collaboration Management
* [Create collaboration](documentation/feature_documentation/Collaboration/CreateCollaboration.md)
* [Delete collaboration](documentation/feature_documentation/Collaboration/DeleteCollaboration.md)  
* [Get collaboration](documentation/feature_documentation/Collaboration/GetCollaboration.md)  
* [Pending collaborations](documentation/feature_documentation/Collaboration/PendingCollaborations.md)  
* [Update collaboration](documentation/feature_documentation/Collaboration/UpdateCollaboration.md)  

### File Management
* [Copy file](documentation/feature_documentation/File/CopyFile.md)  
* [Create file Shared Link](documentation/feature_documentation/File/CreateFileSharedLink.md)
* [Delete file](documentation/feature_documentation/File/DeleteFile.md)
* [Delete old version](documentation/feature_documentation/File/DeleteOldVersion.md)
* [Download file](documentation/feature_documentation/File/DownloadFile.md)
* [Get embed link](documentation/feature_documentation/File/GetEmbedLink.md)
* [Get file collaborations](documentation/feature_documentation/File/GetFileCollaborations.md)
* [Get file comments](documentation/feature_documentation/File/GetFileComments.md)
* [Get file info](documentation/feature_documentation/File/GetFileInfo.md)
* [Get file tasks](documentation/feature_documentation/File/GetFileTasks.md)
* [Get thumbnail](documentation/feature_documentation/File/GetThumbnail.md)
* [Get trashed file](documentation/feature_documentation/File/GetTrashedFile.md)
* [Lock and unlock](documentation/feature_documentation/File/LockAndUnlock.md)
* [Permanently delete file](documentation/feature_documentation/File/PermanentlyDeleteFile.md)
* [Preflight check](documentation/feature_documentation/File/PreflightCheck.md)
* [Promote version](documentation/feature_documentation/File/PromoteVersion.md)
* [Restore file](documentation/feature_documentation/File/RestoreFile.md)
* [Update file info](documentation/feature_documentation/File/UpdateFileInfo.md)
* [Upload file](documentation/feature_documentation/File/UploadFile.md)
* [Upload file version](documentation/feature_documentation/File/UploadFileVersion.md)
* [View versions](documentation/feature_documentation/File/ViewVersions.md)

### Folder Management
* [Copy folder](documentation/feature_documentation/Folder/CopyFolder.md)
* [Create folder](documentation/feature_documentation/Folder/CreateFolder.md)
* [Create folder shared link](documentation/feature_documentation/Folder/CreateFolderSharedLink.md)
* [Delete folder](documentation/feature_documentation/Folder/DeleteFolder.md)
* [Get folder collaborations](documentation/feature_documentation/Folder/GetFolderCollaborations.md)
* [Get folder info](documentation/feature_documentation/Folder/GetFolderInfo.md)
* [Get folder items](documentation/feature_documentation/Folder/GetFolderItems.md)
* [Get trashed folder](documentation/feature_documentation/Folder/GetTrashedFolder.md)
* [Get trashed items](documentation/feature_documentation/Folder/GetTrashedItems.md)
* [Permanently delete folder](documentation/feature_documentation/Folder/PermanentlyDeleteFolder.md)
* [Restore folder](documentation/feature_documentation/Folder/RestoreFolder.md)
* [Update folder](documentation/feature_documentation/Folder/UpdateFolder.md)

### Metadata Management
* [Create metadata on file](documentation/feature_documentation/Metadata/CreateMetadataOnFile.md)
* [Delete metadata on file](documentation/feature_documentation/Metadata/DeleteMetadataOnFile.md)
* [Get metadata on file](documentation/feature_documentation/Metadata/GetMetadataOnFile.md)
* [Update metadata on file](documentation/feature_documentation/Metadata/UpdateMetadataOnFile.md)

## 4 Developing This App Store Component

Contributions are welcomed:

1. open an issue about your topic
1. fork, make a branch named starting with the issue number you are resolving and make a pull request to the master branch
1. please add some tests for feature changes

### Build Details

This was built with the following:

* Mendix Modeler 6.10.3
* Eclipse IDE Neon

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mendix/IBM-Watson-Connector-Kit/tags).
