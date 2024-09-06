---
title: "Software Composition"
linktitle: "Software Composition"
url: /developerportal/deploy/software-composition/
description: "Describes the Software Composition page in Apps."
weight: 3
beta: true
---

{{% alert color="warning" %}}
This feature is in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

A Mendix app can consist of the Mendix Model (which includes pages, domain model, microflows, etc.), custom Java, and JavaScript. Additionally, it can use reusable components such as standard marketplace modules, widgets, Java libraries, npm packages, and the runtime version. These reusable components are dependencies, namely, components you are dependent on for your Mendix app to run.  

Over time, these dependencies can become deprecated, outdated, or vulnerable. Enterprises also have policies on which of these reusable components can or cannot be used based on support, license, etc. It is important to have an easily accessible, clear view of component dependencies through the development lifecycle in order to address any security finding raised by your admins or security teams.  

To enable this, the **Software Composition** page in **Apps** provides visibility into the component dependencies of each deployment package. The components displayed here will be based on the [Software Bill of Materials (SBOM)](/refguide/sbom-generation/).

The **Software Composition** page is visible to all members of the Mendix app.

### Known Issues

After the creation of a deployment package, it may take up to a day for the **Software Composition** page to become visible. Mendix is working to improve the performance on this front.

### Prerequisites {#prerequisites}

To be able to see the software composition information, make sure that you meet the following prerequisites:

* Software Bill of Materials (SBOM) generation and the associated Software Composition capabilities are compatible with the following versions of Studio Pro: 9.24.26 and above, 10.6.12 and above, 10.12.3 and above, and 10.14.0 and above. 

    {{% alert color="warning" %}}Make sure you upgrade to a compatible Studio Pro version to continue to use Software Composition. Previously supported Studio Pro versions (9.24.22 to 9.24.25, 10.6.9 to 10.6.11, 10.10.0 to 10.12.2, and 10.13) will no longer result in SBOM generation and visibility in Software Composition. Any historical data within Software Composition remains accessible regardless of the upgrade.{{% /alert %}}

* Software composition visibility is only possible for deployment packages created via the platform services. It is not available if you manually upload the locally-created deployment package. SBOMs are created behind the scenes for each deployment package. For more information, see [Create Deployment Package](/refguide/create-deployment-package-dialog/).

* You must be using free or licensed Mendix Cloud or Mendix Cloud Dedicated, or Mendix for Private Cloud.

* If your deployment package was deployed before June 14, 2024, you must create and deploy a new deployment package in order to get the software composition information populated on this page.

### Software Composition Generation {#software-composition-generation}

Components are identified in the following manner:

First, when a new deployment package is created via the Mendix Portal with the compatible Mendix Runtime version, a software bill of material (SBOM) is generated along with it. The log details can be viewed by clicking **View build output** in the deployment package details in the Mendix Portal. For details on SBOM generation, see [SBOM Generation](/refguide/sbom-generation/).

The component dependencies for each non-expired deployment package are available in the **Software Composition** page in **Apps**. 

## Overview {#overview}

On the **Overview** tab, you can see a list of all the deployed packages and their environments, if applicable.

{{< figure src="/attachments/deployment/general/software-composition/overview.png" >}}

Above the list, you can use the search box to search for information in the list. Next to the search box, you can filter apps by selecting the environment type or the Mendix Runtime version. You can click {{% icon name="office-sheet" %}}**Export all** on the right side above the list to export all the information in the list to an Excel file.

The list contains the following information:

* **Deployment Package**: This is the name of the deployment package.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Version**: This shows the version of the deployment package on this app environment.
* Column customization ({{% icon name="view" %}}): You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.
* **View details**: Clicking this opens the [Component Summary](#component-summary) page, if it is available. The **View details** button is grayed out when an SBOM is not available for the selected deployment package. Ensure you are on a compatible runtime version and create a new deployment package in order to get component visibility here.

### Component Summary {#component-summary}

On the **Overview** tab, if you click **View Details** for a deployment package in the list, the **Component Summary** page opens.

{{< figure src="/attachments/deployment/general/software-composition/component-summary.png" >}}

On the top of the page, you can find the name of the deployment package, the environment name, the Mendix Runtime version, and the version of the deployment package.

For details on the information in the list and how to search, filter, and export information in the list, see the [All Components](#all-components) section.

#### Downloading the Software Bill of Materials {#download-software-bill-of-materials}

A software bill of materials (SBOM) is a *.json* file in the CycloneDX format. It contains a description of the Mendix app and the components (dependencies) put into it. For more information, see [SBOM Generation](/refguide/sbom-generation/).

In the list on the **Overview** tab, you can click the {{% icon name="download-bottom" %}} icon in the **Action** column to download the SBOM. Different versions of Studio Pro support different component dependencies. For details on component dependencies supported per version, see the [Supported Features](/refguide/sbom-generation/#supported-features) section in *SBOM Generation*.

## All Components {#all-components}

The **All Components** tab gives an overview of all the components used across your environments.

{{% alert color="info" %}}To be able to see the software composition information, make sure that you meet the prerequisites. For more information, see the [Prerequisites](#prerequisites) section.{{% /alert %}}

{{< figure src="/attachments/deployment/general/software-composition/all-components.png" >}}

Above the list, you can use the search box to search for a component. Next to the search box, you can filter components by selecting the component type. You can click {{% icon name="office-sheet" %}}**Export all to Excel** on the right side above the list to export all the information in the list to an Excel file.

The list shows the following information about the component:

* **Component**: This is the name of the component.
* **Version**: This is the component version.
* **Type**: This shows the type of the component. The type could be modules, widgets, framework, Java libraries (JAR), etc. The descriptions of each type are as follows:

    * **Modules** – Standard marketplace modules imported from the Marketplace, for example [Community Commons](https://marketplace.mendix.com/link/component/170)
    * **Widgets** – User interface elements downloaded from the Marketplace, for example [Charts](https://marketplace.mendix.com/link/component/105695)
    * **Framework** – The Mendix Runtime version, for example 10.12.0
    * **Jars** – Java libraries imported into your app using [Managed Dependencies](/refguide/managed-dependencies/), or those manually added in the **userlib** folder depending on the Studio Pro version used, for example `org.apache.commons.io`
    * **npms** – npm libraries that are used in your [JavaScript actions](/refguide/javascript-actions/)
    * **Unknown** – When the type of the component is none of the above and hence undetermined

  For more information, refer to [SBOM Generation](/refguide/sbom-generation/).
* Column customization ({{% icon name="view" %}}): You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the checkboxes.
* **View details**: Clicking this opens the [Component Usage](#component-usage) page.

### Component Usage {#component-usage}

On the **All Components** tab, if you click **View details** for an item, the **Component Usage** page opens. This page lists the environments where the selected component is being used. If a security vulnerability is found in one of the components, then the component usage tab can be used to assess the impact radius.

{{< figure src="/attachments/deployment/general/software-composition/component-usage.png" >}}

On the top of the page, you can find the component name, the component version, and the component type. 

For details on the information in the list and how to search, filter, and export information in the list, see the [Overview](#overview) section.
