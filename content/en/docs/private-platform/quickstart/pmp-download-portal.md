---
title: "Private Mendix Platform Download Portal"
linktitle: "Download Portal"
url: /private-mendix-platform/download-portal/
description: "Provides information about the Download Portal used by Private Mendix Platform."
weight: 15
---

## Introduction

The Private Mendix Platform Download Portal is a centralized hub for accessing and managing Private Mendix Platform installer files, marketplace bundles, and container images. The portal provides secure, role-based access to Platform releases, enabling users to download the necessary components for their Private Mendix Platform installation and use.

Refer to the following sections for information about accessing the portal, managing your downloads, and using the available features.

## Prerequisites

Before using the Download Portal, ensure that you have the following prerequisites:

* A valid Mendix account with a work email address
* Access permissions granted by your organization's admin
* Network access to the Download Portal URL
* Appropriate permissions for the features you need:

    * **Installer** access for downloading platform releases
    * **Marketplace Bundles** access for managing component bundles
    * **Image Management** access for viewing and exporting container images

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

### Viewing Release Notes and Add-ons

Each release includes additional information accessible through the three-dot menu.

To view release details:

1. Click the three-dot menu (**•••**) for the desired release.
2. Select one of the following options:

    * **View Release Note** - Opens the release documentation.
    * **View Add-ons** - Displays additional components included with the release.

## Image Management

The **Image Management** page allows you to view, filter, and export container images required for Private Mendix Platform installation and use.

To access the **Image Management** page, click **Image Management** in the left navigation menu.

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

### Viewing the Images Table

The images table contains the following columns:

* **Name** - Shows the component or image name.
* **Category** - Shows the component type:

    * **Mendix Backbone** - Core Mendix platform components
    * **External Dependency** - Third-party dependencies
    * **Internal Component** - Mendix-developed components

* **Link** - Shows the container registry URL for the image. To copy an image registry URL, click the **copy icon** in the **Link** column. The URL is copied to your clipboard and can be pasted into your deployment configuration.

### Searching and Filtering the Images Table

To search for a specific image, enter an image name or part of a component name into the **Search by [something]** field.

You can also filter the table by clicking the **Category** button next to the **Search by [something]** field and selecting one or more image categories. The table updates to show only images matching your criteria.

When you select a main category filter (for example, **Internal Component**), additional dropdown fields appear for sub-type selection, for example:

* Selecting **Internal Component** reveals a dropdown for component types (such as operator, image builder, or storage provisioner)
* Selecting **External Dependency** reveals a dropdown for dependency types
* Selecting **Mendix Backbone** reveals a dropdown for backbone types

This hierarchical filtering allows for the precise selection of image categories.

### Exporting Image Selections

You can export a manifest of selected images for use in your deployment process.

To export images, perform the following steps:

1. Select the checkboxes for the images which you want to export.
2. Click the **Export Selection** button.
3. Select **Cancel** to deselect all, or proceed with the export.

An image manifest file is generated containing your selected images and their registry URLs.

## Bundle Management

The **Bundle Management** page allows you to create, view, and manage collections of marketplace components for your Private Mendix Platform.

A bundle is a curated collection of marketplace components with specific versions. Bundles allow you to perform the following actions:

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