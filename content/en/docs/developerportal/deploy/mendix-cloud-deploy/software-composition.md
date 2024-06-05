---
title: "Software Composition"
url: /developerportal/deploy/software-composition/
description: "Describes the Software Composition page in the Developer Portal."
tags: ["developer portal", "deployment", "software composition"]
weight: 9
beta: true
---

{{% alert color="warning" %}}
This feature is in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

A Mendix app can consist of the Mendix Model (i.e. pages, domain model, microflows, etc.), custom java, and JavaScript. Additionally, it can use reusable components such as standard marketplace modules, widgets, java libraries, npm packages, and the runtime version. These reusable components are dependencies, i.e. components you are dependent on for your Mendix app to run.  

Over time, these dependencies can become deprecated, outdated. or vulnerable. Enterprises also have policies on which of these reusable components can or cannot be used based on support, license, etc. Itm is important to have an easily accessible, clear view of component dependencies through the development lifecycle in order to address any security finding raised by your admins or security teams.  

To enable this, visibility into these component dependencies will be available on the **Software Composition** page in Mendidx Portal. The components displayed here will be based on the [Software Bill of Materials (SBOM)](/refguide/sbom-generation/) generated in Studio Pro.

From the **Software Composition** page in the Developer Portal, you can drill down and view the component dependencies of each deployment package. Besides, you can view the usage of components across your environments under [All Components](#all-components), where standard marketplace modules, widgets, java libraries, npm modules, and Mendix runtime version are available.

### 1.1 Prerequisites {#prerequisites}

To be able to see the software composition information, make sure that you meet the following prerequisites:

* Component details and related actions are available for apps made with Studio Pro versions [9.24.22](/releasenotes/studio-pro/9.24/#92422) and above, [10.6.9](/releasenotes/studio-pro/10.6#1069) and above and [10.10.0](/releasenotes/studio-pro/10.10/#10100) and above. 

  {{% alert color="info" %}}With Mendix versions 9.24.22 and above, only unmanaged java dependencies or jars are shown. With Mendix versions 10.6.9 and above, both managed and unmanaged java dependencies or jars will be shown.{{% /alert %}}

* You must be using free or licensed Mendix Cloud or Cloud Dedicated. It will be enabled for Private Cloud later. 

* You must create a deployment package via the team server. Software bill of materials are created behind the scenes for each deployment package. For more information, see [Create Deployment Package](/refguide/create-deployment-package-dialog/).

* If your deployment package was deployed before June 14, 2024, you must create and deploy a new deployment package in order to get the software composition information populated on this page. For more information, see the [How Components Are Identified](#how-components-are-identified) section.

### 1.2 Software Composition Generation {#how-components-are-identified}

Components are identified in the following manner:

First, when a new deployment package is created via the Developer Portal with the compatible Mendix Runtime version, a software bill of material (SBOM) is generated along with it. The log details can be viewed by clicking **View build output** in the deployment package details in the Developer Portal. For details on SBOM generation, see [SBOM Generation](/refguide/sbom-generation/).

The component dependencies for each non-expired, deployment package are available in the **Software Composition** page in the Developer Portal. 

## 2 Overview {#overview}

On the **Overview** tab, you can see a list of all the deployed packages and their environments, if applicable.

Above the list, you can use the search box to search for information in the list. Next to the search box, you can filter apps by selecting the environment type or the Mendix Runtime version. You can click {{% icon name="office-sheet" %}}**Export all** on the right side above the list to export all the information in the list to an Excel file.

The list contains the following information:

* **Deployment Package**: This is the name of the deployment package.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Version**: This shows the version of the deployment package on this app environment.
* Column customization ({{% icon name="view" %}}): You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.
* **View details**: Click this opens the [Component Summary](#component-summary) page, if it is available. The **View details** button will be grayed out if it is not applicable.

### 2.1 Component Summary {#component-summary}

On the **Overview** tab, if you click **View Details** for a deployment package in the list, the **Component Summary** page opens. 

On the top of the page, you can find the name of the deployment package, the environment name, the Mendix Runtime version, and the version of the deployment package.

For details on the information in the list and how to search, filter, and export information in the list, see the [All Components](#all-components) section.

#### 2.1.1 Downloading the Software Bill of Materials {#download-software-bill-of-materials}

A software bill of materials is a *.json* file in the CycloneDX format. It contains a description about the Mendix app and the components (dependencies) put into it. For more information, see [SBOM Generation](/refguide/sbom-generation/).

In the list on the **Overview** tab, you can click {{% icon name="download-bottom" %}} icon in the **Action** column to download the software bill of materials (SBOM). The current version of the SBOM contains standard marketplace modules, widgets, java libraries, and the Mendix runtime version. The SBOM is a *.json* file in the CycloneDX format.

Different versions of Studio Pro support different component dependencies. For details on component dependencies supported per version, see the [Supported Features](/refguide/sbom-generation/#5-supported-features) section in *SBOM Generation*.

## 3 All Components {#all-components}

The **All Components** tab gives an overview of all the components used across your environments.

{{% alert color="info" %}}To be able to see the software composition information, make sure that you meet the prerequisite. For more information, see the [Prerequisites](#prerequisites) section.{{% /alert %}}

Above the list, you can use the search box to search for a component. Next to the search box, you can filter components by selecting the component type. You can click {{% icon name="office-sheet" %}}**Export all to Excel** on the right side above the list to export all the information in the list to an Excel file.

The list shows the following information about the component:

* **Component**: This is the name of the component.
* **Version**: This is the component version.
* **Type**: This shows the type of the component.
* Column customization ({{% icon name="view" %}}): You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.
* **View details**: Click this opens the [Component Usage](#component-usage) page.

### 3.1 Component Usage {#component-usage}

On the **All Components** tab, if you click **View details** for an item, the **Component Usage** page opens. This page lists the environments where the selected component is being used. If a security vulnerabilities is found in one of the components, then the component usage tab can be used to assess the impact radius.

On the top of the page, you can find the component name, the component version, and the component type. 

For details on the information in the list and how to search, filter, and export information in the list, see the [Overview](#overview) section.