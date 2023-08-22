---
title: "Upload To Version Control Server"
url: /refguide7/upload-to-version-control-dialog/
aliases:
    - /refguide7/upload-to-team-server-dialog.html
    - /refguide7/upload-to-team-server-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 1 Introduction

With this dialog box you can upload an application that is not yet stored in a version control server.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/upload-to-version-control-dialog/upload-to-version-control-server-dialog.png" >}}

To open the **Upload to Version Control Server** dialog box, go to **Project > More Versioning > Upload to Version Control Server**.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/upload-to-version-control-dialog/project-more-versioning-upload-to-version-control-server.png" >}}

## 2 Where Should We Upload Your App?

Use this setting to select the location where you want to store your app. This can be the Team Server, a private server (an SVN server other than the Team Server), or a local disk.

### 2.1 New Mendix Team Server

In the **App name** field, enter the name for the new Team Server project and repository. After you click **OK**, the new repository will be created in the [Mendix Team Server](/refguide7/team-server/) to store your app. 

### 2.2 Existing Mendix Team Server

In the **Team Server App** list, select the corresponding Team Server app. After you click **OK**, you app will be uploaded to the selected repository.

{{% alert color="info" %}}

This only works when the existing repository is empty.

{{% /alert %}}

### 2.3 Private Server

In the **App repository address** field, enter the repository address you want to upload your app to. After you click **OK**, you app will be uploaded to this repository.

{{% alert color="info" %}}

This option is only available when support for other servers is enabled in the [Preferences](/refguide7/preferences-dialog/#enabled) dialog box.

{{% /alert %}}

## 3 Read more

* [Team Server](/refguide7/team-server/)
