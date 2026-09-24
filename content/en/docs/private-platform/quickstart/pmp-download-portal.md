---
title: "Private Mendix Platform Download Portal"
linktitle: "Download Portal"
url: /private-mendix-platform/download-portal/
description: "Provides information about the Download Portal used by Private Mendix Platform."
weight: 15
---

## Introduction

The Private Mendix Platform Download Portal is a centralized hub for accessing and managing Private Mendix Platform installer files, Marketplace bundles, and container images. The portal provides secure, role-based access to Platform releases, enabling users to download the necessary components for their Private Mendix Platform installation and use.

Refer to the following sections for information about accessing the portal, managing your downloads, and using the available features.

## Prerequisites

Before using the Download Portal, ensure that you have the following prerequisites:

* A valid Mendix account with a work email address
* Access permissions; to gain them, contact your Mendix Partner or Mendix Support
* Network access to the Download Portal URL
* Appropriate permissions for the features you need:

    * **Installer** access for downloading platform releases
    * **Marketplace Bundles** access for managing component bundles
    * **Artifact Management** access for viewing and exporting container images

## Accessing the Download Portal

To access the Download Portal, go to [https://privateplatform.mendix.com/](https://privateplatform.mendix.com/) and log in with your Mendix account.

If your account is associated with multiple organizations, you must then select which company context to use. 

### Selecting a Company at Login

After logging in, the **Select Your Company** page displays all organizations you have access to.

Each company card shows the following information:

* Company name
* Your email address
* Access types granted (Installer, Bundles, Images)

To select a company, perform the following steps:

1. Review the list of available companies.
2. Click on the company card which you want to access.

The portal loads with the selected company context.

### Switching Companies During Your Session

To switch to a different company while using the portal, perform the following steps:

1. In the left navigation menu, click **Switch Company Profile**.
2. Select a different company on the **Select Your Company** page.

The portal refreshes and displays data for the newly selected company.

{{% alert color="info" %}}
The **Switch Company Profile** option is only available if you have access to more than one organization. You can switch company context at any time during your session.
{{% /alert %}}

## Viewing and Downloading Releases

The **Releases** page displays a table with all available Private Mendix Platform releases.

To access the **Releases** page, click **Releases** in the left navigation menu.

### Understanding the Releases Table

The **Releases** table contains the following columns:

* **Version** - The release version number (for example, *4.8.2*, *5.1.0*)
* **Release Type** - The type of release:

    * **LTS** (Long Term Support) - Receives extended support and updates
    * **MTS** (Medium Term Support) - Receives standard support duration
    * **Regular Release** - Standard release without extended support

* **Status** - The current release status:

    * **Latest** - The most recent available release
    * **Published** - Generally available release
    * **Deprecated** - No longer recommended for new installations

* **Downloads** - The number of times this release has been downloaded
* **Release Date** - When the release was published

The latest release is highlighted at the top of the page in an information box. The information box displays information about the release version number and date, as well as a **Download** button. You can download the latest release by clicking the button and selecting your operating system (Mac, Windows, or Linux).

### Searching and Filtering the Releases Table

To search for a specific release, enter a version number (for example, **4.8**) or a keyword into the **Search by [something]** field.

You can also filter the table by using the **Filter by Status** and **Filter by Release Type** fields.

Applied filters can be combined. The table updates immediately when filters are applied.

### Downloading a Specific Release

To download a release from the table, perform the following steps:

1. Find the release that you want to download.
2. Click the three-dot menu (**•••**) by the selected release.
3. Click **Download**.
4. Select your platform (Mac, Windows, or Linux).

The installer file downloads to your default download location.

{{< figure src="/attachments/private-platform/pmp-downloadportal1.png" class="no-border" >}}

#### Understanding the Contents of the Tools Folder

The *Tools* folder included in the installer file contains the following tools:

* **Helmfile** - A declarative spec for deploying Helm charts.
* **Helm** - A tool that streamlines installing and managing Kubernetes applications.
* **mx-pclm-cli** - A tool used to manage Private Mendix Cloud License Manager (PCLM).
* **mxpc-cli** - A configuration tool used to install the Mendix Operator.

{{< figure src="/attachments/private-platform/pmp-downloadportal2.png" class="no-border" >}}

#### Pulling Images and Charts

All images and charts are now available in an OCI registry. In order to pull them, you first need to export the images and charts by performing the following steps:

1. Export the image and charts list.

    1. In the [https://privateplatform.mendix.com/](https://privateplatform.mendix.com/), go to **Artifact Management** and select a Private Mendix Platform version.
    2. Filter by **Category** and select the images
    3. Click **Export Selection** to export the list to a file named *export-images-vx.x.x.json*, where `x.x.x` corresponds to a Private Mendix Platform version.

2. In the Mendix Portal, create a Personal Access Token (PAT) for private images that require a PAT for authentication. 

    1. Sign in to Mendix and go to **User Settings > Developer Settings > Personal Access Token**
    2. Click **New Token**.
    3. Under **OCI registry**, select the **mx:registry:access** as scope.
 
3. Fetch the images.

    1. Log in to the OCI registry for Oras by using the following command: `oras login -u pat -p <token>  registry.mendix.com`.
    2. Use the `oras pull` command to download the Helmfile from the OCI registry, for example, ` oras pull registry.mendix.com/private-platform/installer-helmfile:0.2.1`.
    3. Unzip the downloaded file by using the following command: `tar -xvf helmfile-config.tar.gz`.
    4. Test it by using the following command: `helmfile --file helmfile.d/helmfile.yaml --state-values-file <valuefile> apply`.

4. Pull the charts.

    1. Log in to the OCI registry for Helm by using the following command: `helm registry login -u pat -p ${YOUR_PAT} registry.mendix.com`.
    2. Use the `helm pull` command to download the Helmfile from the OCI registry, for example:

    ```text
    helm pull oci://registry.mendix.com/private-cloud/charts/mx-privatecloud-operator-installer --version 0.2.36
    helm install operator mx-privatecloud-operator-installer-0.2.36.tgz -f ./Downloads/20260916T113717Z-pmp-test-oci-generated-values.yaml --namespace pmp-oci-test
    ```

    where `/Downloads/20260916T113717Z-pmp-test-oci-generated-values.yaml` is the yaml file for Operator configuration. You can find this yaml file among the example files in the installer package.

#### Download Package API {#download-api}

The following Download Portal APIs enable automating package downloads.

##### Get Private Mendix Platform Release Version List

```text
GET https://privateplatform.mendix.com/rest/pmpreleaseservice/v1/versions
```

##### Get the Manifest of a Specific Private Mendix Platform Version

```text
GET https://privateplatform.mendix.com/rest/pmpreleaseservice/v1/versions/{version}/manifest
```

### Viewing Release Notes

Each release includes additional information accessible through the three-dot menu.

To view release details:

1. Click the three-dot menu (**•••**) for the desired release.
2. Click **View Release Note** to open the release documentation.

### Viewing Add-Ons

In versions of Private Mendix Platform older than 2.8.1, the three-dot menu also shows the images and charts required for Private Mendix Platform installation.

To view these add-ons:

1. Click the three-dot menu (•••) for the desired release.
2. Click **View Add-ons**.

Starting from Private Mendix Platform 2.8.1, the **View Add-ons** option has been removed. All images and charts are instead available on the **Artifact Management** page.

## Artifact Management

The **Artifact Management** page allows you to view, filter, and export container images, charts and custom artifact such as Helm file installer required for Private Mendix Platform installation and use.

To access the **Artifact Management** page, click **Artifact Management** in the left navigation menu.

### Selecting a Platform Version

Container images are organized by Private Mendix Platform version.

To select a version:

1. Click the **Private Mendix Platform Version** dropdown at the top of the page.
2. Select the version that you need (for example, **2.8.0 (MTS) (Latest)**).

The page refreshes to display images for the selected version.

### Understanding the Component Summary

At the top of the page, three summary cards display the following information:

* **Internal Components** - Number of Mendix-developed internal components
* **External Dependency** - Number of third-party dependencies
* **Mendix Backbone** - Number of core Mendix infrastructure components

These counts help you understand the composition of your selected Platform version.

### Viewing the Images, Charts, and Custom Artifacts Table

The images, charts, and custom artifacts table contains the following columns:

* **Name** - Shows the artifact or image name.
* **Artifact Type** - Shows the artifact type (image, chart, or custom artifact).
* **Category** - Shows the component type:

    * **Mendix Backbone** - Core Mendix platform components
    * **External Dependency** - Third-party dependencies
    * **Internal Component** - Mendix-developed components

* **Link** - Shows the container registry URL for the image. To copy an image registry URL, click the **copy icon** in the **Link** column. The URL is copied to your clipboard and can be pasted into your deployment configuration.

### Searching and Filtering the Images Table

To search for a specific image, enter an image name or part of a component name into the **Search by [something]** field.

You can also filter the table by clicking the **Category** and **Artifact Type** buttons next to the **Search by [something]** field, and selecting one or more filters. The table updates to show only images matching your criteria.

When you select the **Category** filter, additional dropdown fields appear for sub-type selection, for example:

* Selecting **Internal Component** reveals a dropdown for component types (such as operator, image builder, or storage provisioner)
* Selecting **External Dependency** reveals a dropdown for dependency types
* Selecting **Mendix Backbone** reveals a dropdown for backbone types

This hierarchical filtering allows for the precise selection of image categories.

### Exporting the Selections

You can export a manifest of selected artifacts for use in your deployment process.

To export artifacts, perform the following steps:

1. Select the checkboxes for the artifacts which you want to export.
2. Click the **Export Selection** button.
3. Select **Cancel** to deselect all, or proceed with the export.

A manifest file is generated containing your selected artifacts and their registry URLs.

## Bundle Management

The **Bundle Management** page allows you to create, view, and manage collections of Marketplace components for your Private Mendix Platform.

A bundle is a curated collection of Marketplace components with specific versions. Bundles allow you to perform the following actions:

* Group related components together
* Standardize component versions across deployments
* Simplify distribution of component sets

To access the **Bundle Management** page, click **Bundle Management** in the left navigation menu.

### Creating a New Bundle

To create a new bundle, perform the following steps:

1. On the Bundle Management page, click **Create New Bundle**.
2. Use the search and filter options to find components:

    * **Search by [something]** - Enter a component name or keyword.
    * **Filter by Type/Category** dropdown - Filter by category.
    * **Supported Mx Versions** dropdown - Filter by compatible Mendix version.

    Alternatively, you can directly select the components from the list.

3. Click **Save as Bundle**.
4. Enter a name for the bundle and click **Save**.

Your new bundle appears in the bundle list.

{{% alert color="info" %}}
If you see the message *Older Versions of The Components Are Available,* make sure to select the appropriate component version before saving your bundle.
{{% /alert %}}

### Viewing Bundle Contents

To view the components included in a bundle, click the name of the bundle on the **Bundle Management**.

A dialog then displays all components in the bundle with their current version, category, supported version, and type.

### Downloading Bundles

You can download existing bundles from the **Bundles Management** page or the **Bundle Details** page.

To filter by supported version, perform the following steps:

1. Click the **Supported Mx Versions** dropdown.
2. Select your target Mendix version.

Only components compatible with that version are displayed.

## Using Tools

The **Tools** page provides access to additional utilities for managing your Private Mendix Platform installation.

To access the **Tools** page, click **Tools** in the left navigation menu.

You can view and download the available tools based on your permissions and organizational configuration.
