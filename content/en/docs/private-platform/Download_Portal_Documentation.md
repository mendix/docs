# Private Mendix Platform Download Portal

## Introduction

The Private Mendix Platform Download Portal is a centralized hub for accessing and managing Private Mendix Platform installer files, marketplace bundles, and container images. The portal provides secure, role-based access to platform releases, enabling users to download the necessary components for their Private Mendix Platform installation and use.

This documentation guides you through accessing the portal, managing your downloads, and using the available features.

**Last modified:** August 21, 2026

---

## Prerequisites

Before using the Download Portal, ensure you have:

* A valid Mendix account with work email address
* Access permissions granted by your organization's admin
* Network access to the Download Portal URL
* Appropriate permissions for the features you need:
    * **Installer** access for downloading platform releases
    * **Marketplace Bundles** access for managing component bundles
    * **Image Management** access for viewing and exporting container images

---


## Selecting Your Company

If your account is associated with multiple organizations, you must select which company context to use.

### Selecting a Company at Login

After logging in, the **Select Your Company** page displays all organizations you have access to.

Each company card shows:

* Company name
* Your email address
* Access types granted (Installer, Bundles, Images)

To select a company:

1. Review the list of available companies.
2. Click on the company card you want to access.

The portal loads with the selected company context.

### Switching Companies During Your Session

To switch to a different company while using the portal:

1. Select a different company from the **Selecting Your Company**

The portal refreshes and displays data for the newly selected company.

{{% alert color="info" %}}
The company switcher is only available if you have access to more than one organization. You can switch company context at any time during your session.
{{% /alert %}}

---

## Viewing and Downloading Releases

The **Releases** page provides access to all available Private Mendix Platform installer files and their dependencies.

### Navigating to Releases

To access the Releases page:

1. Click **Releases** in the left navigation menu.

The Releases page displays a table of all available releases.

### Understanding the Releases Table

The Releases table contains the following columns:

* **Version** – The release version number (e.g., 4.8.2, 5.1.0)
* **Release Type** – The type of release:
    * **LTS** (Long Term Support) – Receives extended support and updates
    * **MTS** (Medium Term Support) – Receives standard support duration
    * **Regular Release** – Standard release without extended support
* **Status** – The current release status:
    * **Latest** – The most recent available release
    * **Published** – Generally available release
    * **Deprecated** – No longer recommended for new installations
* **Downloads** – The number of times this release has been downloaded
* **Release Date** – When the release was published

### Viewing the Latest Release

The latest release is highlighted at the top of the page in an information box.

The latest release box displays:

* Release version number
* Release date
* Direct **Download** button

To download the latest release:

1. Click the **Download** button in the latest release information box.
2. In the pop-up, select your platform:
    * **Mac**
    * **Windows**
    * **Linux**

The download begins automatically.

### Searching for a Release

To search for a specific release:

1. In the **Search by [something]** field, enter:
    * A version number (e.g., "4.8")
    * Keywords related to the release
2. The table updates to show only matching releases.

### Filtering Releases

You can filter releases by Status and Release types.

**To filter by status:**

1. Click the **Filter by Status** dropdown.
2. Select a status:
    * Latest
    * Published
    * Deprecated

**To filter by release type:**

1. Click the **Filter by Release Type** dropdown.
2. Select a type:
    * LTS
    * MTS
    * Regular Release

Applied filters can be combined. The table updates immediately when filters are applied.

### Downloading a Specific Release

To download any release from the table:

1. Locate the release in the table.
2. Click the three-dot menu (**•••**) in the release row.
3. Select **Download**.
4. In the pop-up, select your platform (Mac, Windows, or Linux).

The installer file downloads to your default download location.

### Viewing Release Notes and Add-ons

Each release includes additional information accessible through the three-dot menu.

To view release details:

1. Click the three-dot menu (**•••**) for the desired release.
2. Select:
    * **View Release Note** – Opens the release documentation
    * **View Add-ons** – Displays additional components included with the release

---

## Image Management

The **Image Management** page allows you to view, filter, and export container images required for Private Mendix Platform installation and use.

### Navigating to Image Management

To access Image Management:

1. Click **Image Management** in the left navigation menu.

### Selecting a Platform Version

Container images are organized by Private Mendix Platform version.

To select a version:

1. Click the **Private Mendix Platform Version** dropdown at the top of the page.
2. Select the version you need (e.g., "2.8.0 (MTS) (Latest)").

The page refreshes to display images for the selected version.

### Understanding the Component Summary

At the top of the page, three summary cards display:

* **Internal Components** – Number of Mendix-developed internal components
* **External Dependency** – Number of third-party dependencies
* **Mendix Backbone** – Number of core Mendix infrastructure components

These counts help you understand the composition of your selected platform version.

### Viewing the Images Table

The images table contains the following columns:

* **Name** – The component or image name
* **Category** – The component type:
    * **Mendix Backbone** – Core Mendix platform components
    * **External Dependency** – Third-party dependencies
    * **Internal Component** – Mendix-developed components
* **Link** – The container registry URL for the image

### Copying Image Links

To copy an image registry URL:

1. Locate the image in the table.
2. Click the **copy icon** in the **Link** column.

The URL is copied to your clipboard and can be pasted into your deployment configuration.

### Searching for Images

To search for a specific image:

1. In the **Search by [something]** field, enter:
    * An image name
    * Part of a component name
2. The table updates to show only matching images.

### Filtering Images

The portal provides advanced filtering for images.

To apply filters:

1. Click the **Filters** button next to the search field.
2. In the filter panel, select your criteria:
    * **Category** – Select All Selected, or choose specific categories
    * **External Dependency Type** – If you selected External Dependency
    * **Backbone Type** – If you selected Mendix Backbone
    * **Internal Component Type** – If you selected Internal Component
3. Click **Apply Filters**.

The table updates to show only images matching your criteria.

### Understanding Filter Behavior

When you select a main category filter (e.g., Internal Component), additional dropdown fields appear for sub-type selection.

For example:
* Selecting **Internal Component** reveals a dropdown for component types (e.g., operator, image builder, storage provisioner)
* Selecting **External Dependency** reveals a dropdown for dependency types
* Selecting **Mendix Backbone** reveals a dropdown for backbone types

This hierarchical filtering allows precise selection of image categories.


### Exporting Image Selections

You can export a manifest of selected images for use in your deployment process.

To export images:

1. Select the checkboxes for the images you want to export.
2. Click the **Export Selection** button.
3. Select **Cancel** to deselect all, or proceed with the export.

An image manifest file is generated containing your selected images and their registry URLs.

---

## Bundle Management

The **Bundle Management** page allows you to create, view, and manage collections of marketplace components for your Private Mendix Platform.

### Navigating to Bundle Management

To access Bundle Management:

1. Click **Bundle Management** in the left navigation menu.

### Understanding Bundles

A bundle is a curated collection of marketplace components with specific versions. Bundles allow you to:

* Group related components together
* Standardize component versions across deployments
* Simplify distribution of component sets

### Creating a New Bundle

To create a new bundle:

1. On the Bundle Management page, click **Create New Bundle**.
2. Use the search and filter options to find components:
    * **Search [something]** – Enter a component name or keyword
    * **Filter by Type/Category** dropdown – Filter by category
    * **Supported Mx Versions** dropdown – Filter by compatible Mendix version
3. Or you can directly select the components from the list
4. Click **Save as Bundle**.
5. Provide the name of the bundle and click **Save**

Your new bundle is created and appears in the bundle list.

{{% alert color="info" %}}
If you see the message "Older Versions of The Components Are Available," make sure to select the appropriate component version before saving your bundle.
{{% /alert %}}

### Viewing Bundle Contents

To view the components included in a bundle:

1. On the Bundle Management page, locate the bundle.
2. Click the bundle name

A modal displays all components in the bundle with their Current Versions, Category, Supported version and Type


### Download bundles

You can also download existing bundles from the Bundles management page or bundle details page

To filter by supported version:

1. Click the **Supported Mx Versions** dropdown.
2. Select the Mendix version you're targeting.

Only components compatible with that version are displayed.

---

## Using Tools

The **Tools** section provides access to additional utilities for managing your Private Mendix Platform installation.

To access Tools:

1. Click **Tools** in the left navigation menu.

Available tools can be viewed and downloadable based on your permissions and organizational configuration.

---
