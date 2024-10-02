---
title: "Upload to Version Control Server"
url: /refguide8/upload-to-version-control-dialog/
weight: 70
aliases:
    - /refguide8/upload-to-team-server-dialog.html
    - /refguide8/upload-to-team-server-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Use this dialog box to upload an app that is not yet stored in a version control server.

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/upload-to-version-control-dialog/upload-to-version-control-server.png" alt="Upload to Version Control Server menu option" class="no-border" >}}

## Location

Use this setting to select the location where you want to store your app. There are three options, which are described below.

### New Mendix Team Server

You can create a new app on [Mendix Team Server](/developerportal/general/team-server/).

* Select **New Mendix Team Server**
* Enter the name for the new Team Server project and repository in the **App name** field

    {{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/upload-to-version-control-dialog/new-team-server-app.png" alt="Enter App name for New Mendix Team Server" class="no-border" >}}

### Existing Mendix Team Server

{{% alert color="warning" %}}
You can only upload to an existing repository if the repository is currently empty
{{% /alert %}}

* Select **Existing Mendix Team Server**
* Select the **Team Server App** from the list

    {{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/upload-to-version-control-dialog/existing-team-server-app.png" alt="Select existing mendix Team Server" class="no-border" >}}

### Private Server

This option is only available when support for other servers is enabled in **Edit** > **Preferences** > **Advanced** > [Enable private version control](/refguide8/preferences-dialog/#enable)).

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/upload-to-version-control-dialog/enable-private-version-control.png" alt="Enable private version control in advanced preferences" class="no-border" >}}

<a id="private-server"></a>If you select **Private server**, enter the address of the repository to which you want to upload your app in the **App repository address** field.

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/upload-to-version-control-dialog/private-server-app.png" alt="Enable private version control in advanced preferences" class="no-border" >}}

## Read More

* [How to Work with an On-Premises Version Control Server](/howto8/collaboration-requirements-management/on-premises-svn-howto/)
