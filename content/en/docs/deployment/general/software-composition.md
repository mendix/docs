---
title: "Software Composition"
linktitle: "Software Composition"
url: /developerportal/deploy/software-composition/
description: "Describes the Software Composition page in Apps."
weight: 80
---

## Introduction

A Mendix app can consist of the Mendix Model (which includes pages, domain model, microflows, etc.), custom Java, and JavaScript. Additionally, it can use reusable components such as standard marketplace modules, widgets, Java libraries, npm packages, and the runtime version. These reusable components are dependencies, namely, components you are dependent on for your Mendix app to run.  

Over time, these dependencies can become deprecated, outdated, or vulnerable. Enterprises also have policies on which of these reusable components can or cannot be used based on support, license, etc. It is important to have an easily accessible, clear view of component dependencies through the development lifecycle in order to address any security finding raised by your admins or security teams.  

To enable this, the **Software Composition** page in **Apps** provides visibility into the component dependencies of each deployment package. The components displayed here will be based on the [Software Bill of Materials (SBOM)](/refguide/sbom-generation/).

The **Software Composition** page is visible to all members of the Mendix app.

{{% alert color="warning" %}}Advanced software composition capabilities are currently available to all. In the future, access to these capabilities will be subject to your license.{{% /alert %}}

## Prerequisites {#prerequisites}

To be able to see the software composition information, make sure that you meet the following prerequisites:

* Software Bill of Materials (SBOM) generation and the associated Software Composition capabilities are compatible with the following versions of Studio Pro: 9.24.26 and above, 10.6.12 and above, 10.12.3 and above.

    {{% alert color="warning" %}}Make sure you upgrade to a compatible Studio Pro version to continue to use Software Composition. Previously supported Studio Pro versions (9.24.22 to 9.24.25, 10.6.9 to 10.6.11, 10.10.0 to 10.12.2, and 10.13) will no longer result in SBOM generation and visibility in Software Composition. Any historical data within Software Composition remains accessible regardless of the upgrade.{{% /alert %}}
   
* Software composition visibility is only possible for deployment packages created via the platform services. It is not available if you manually upload the locally-created deployment package. SBOMs are created behind the scenes for each deployment package. For more information, see [Create Deployment Package](/refguide/create-deployment-package-dialog/).

* You must be using free or licensed Mendix Cloud or Mendix Cloud Dedicated, or Mendix on Kubernetes.

* If your deployment package was deployed before June 14, 2024, you must create and deploy a new deployment package in order to get the software composition information populated on this page.

## Software Composition Generation {#software-composition-generation}

Components are identified in the following manner:

First, when a new deployment package is created via the Mendix Portal with the compatible Mendix Runtime version, a software bill of materials (SBOM) is generated along with it. The log details can be viewed by clicking **View build output** in the deployment package details in the Mendix Portal. For details on SBOM generation, see [SBOM Generation](/refguide/sbom-generation/).

The component dependencies for each non-expired deployment package are available in the **Software Composition** page in **Apps**. 

After the creation of a deployment package, the **Software Composition** page usually becomes visible within a few minutes. However, in rare cases, it can take up to a day. Mendix is working to improve the performance on this front.

## Guidance

Click the **{{% icon name="book-closed" %}} Guidance** option in the upper right corner of the **Software Composition** page to find a video outlining the main features, as well as links to detailed information.

## Overview {#overview}

On the **Overview** tab, you can see a list of all deployment packages and, if applicable, their environments.

{{< figure src="/attachments/control-center/security/software-composition/deployment_sw_comp_overview2.png" >}}

### Insights

The **Insights** cards display the number of findings across all deployment packages, broken down by severity level. For example, if a build package contains one critical finding and is deployed to the test and production environments, two findings are added to **Insights**.    

Each card also displays a rolling average of how the number of findings has evolved over the past 30 days, expressed as a percentage.

This is an example of how the evolution trend of **Critical** findings is calculated on January 1, 2025:

* January 1 rolling average for the last 30 days (average of **Critical** findings between December 1 and January 1) = 5
* December 1 rolling average for the last 30 days (average of **Critical** findings between November 1 and December 1) = 10
* Evolution trend = (5 - 10)/10, which results in a 50% decrease in **Critical** findings

The calculations are refreshed once a day. As such, newly built packages do not trigger an immediate update of the numbers on the **Insights** cards.   
Changing the scoring criteria resets the trends.

For details on severity levels, refer to [Scoring Criteria](/control-center/scoring-criteria-tab/).

### Deployment Package List

The following options are available above the list of deployment packages:

* A search box to search for information within the list.
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The list contains the following information:

* **Deployment Package** — The name of the deployment package.
* **Environment** — The name of the environment where the package is deployed.
* **Runtime** — The Mendix Runtime version.
* **Findings** — The number of findings of each type, color-coded according to severity level.    
  {{% alert color="warning" %}}Findings are calculated for all software packages that are built. However, if a package is not deployed, we will stop updating its findings after 30 days. These findings will be grayed out and displayed as 0.{{% /alert %}}
* **Version** — The version of the deployment package on this app environment.
* **Technical Contact** — The Technical Contact of the app.
* **Target Cloud** —  The type of cloud where the deployment package is deployed. Currently, the following types of cloud are supported:
    * Mendix Free Cloud
    * Mendix Cloud (including Mendix Cloud Dedicated)
    * Mendix on Kubernetes (connected)
* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.
* **View details** — Clicking this opens the [Deployed Package Details](#deployed-package-details) page, if it is available. The **View details** button is grayed out when an SBOM is not available for the selected deployment package. Ensure you are on a compatible runtime version and create a new deployment package in order to get component visibility here.

### Deployment Package Details {#deployed-package-details}

If you click **View Details** for an app in the list on the **Overview** tab, the **Deployment Package Details** page opens. This displays details about the findings identified in all the components used by the selected app package.

At the top of the page, you can find the following information:

* A color-coded summary of the findings
* The environment name (if applicable)
* The Mendix Runtime version
* The Technical Contact
* The type of cloud where the deployment package is deployed (if applicable)
* The version of the deployment package

In the upper, right corner of the page, you can click {{% icon name="download-bottom" %}}**SBOM** to download the software bill of materials (SBOM).  

A software bill of materials (SBOM) is a *.json* file in the CycloneDX format. It contains a description about the Mendix app and the components (dependencies) put into it. For more information, see [SBOM Generation](/refguide/sbom-generation/).

Different versions of Studio Pro support different component dependencies. For details on component dependencies supported per version, refer to the [Supported Features](/refguide/sbom-generation/#supported-features) section in *SBOM Generation*.

The page is divided into two tabs: **Findings** and **Component Usage**. For details on the available fields, refer to the Control Center documentation:

* [Findings](/control-center/overview-tab/#overview-findings)
* [Component Usage](/control-center/overview-tab/#overviw-component-usage)

## Components {#all-components}

The **Components** tab gives an overview of all the unique components used in the selected package. 

{{< figure src="/attachments/control-center/security/software-composition/deployment_sw_comp_components.png" >}}

### Insights

The **Insights** cards display the following details:

* **Marketplace** — The number of private and public Marketplace components used throughout your apps.
* **Support type** — The number of Marketplace components divided into content support categories.
* **Summary** — The number of findings in each severity category, along with a rolling average of how the number of findings has evolved over the past 30 days, expressed as a percentage.

### Component List

The following options are available above the list of components:

* A search box to search for information within the list.
* A filter to display apps based on the type of cloud. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The component list contains the following information:

* **Component** — The name of the component.
* **Type** — The type of component, which can be one of the following:
  
    * **Module** — Standard marketplace module imported from the Marketplace, such as [Community Commons](https://marketplace.mendix.com/link/component/170), or a module created by the developer.
    * **Widget** — User interface elements downloaded from the Marketplace, such as [Charts](https://marketplace.mendix.com/link/component/105695), or a widget created by the developer.
    * **Framework** — The Mendix Runtime version, for example 10.12.0
    * **Jar** — Java libraries imported into your app using [Managed Dependencies](/refguide/managed-dependencies/), or those manually added in the **userlib** folder depending on the Studio Pro version used, such as `org.apache.commons.io`.
    * **npms** — `npm` libraries that are used in your [JavaScript actions](/refguide/javascript-actions/).
    * **Unknown** — When the type of the component is none of the above and hence undetermined.
    
* **Support type** — The support type of the Marketplace component. This can be **Mendix**, **Partner**, or **Community**.    
  For more information, refer to [Content Support Categories](/appstore/marketplace-content-support/#category).
* **Version** — The version of the component that is being used.
* **Findings** — This shows the number of findings of each type, color-coded according to severity level.
* **License** — For components derived from the Mendix Marketplace, this is the end-user license for the component.
* **Marketplace** – Whether the component is **Public** or **Private**. A public component is available to the whole Mendix community in the Marketplace, while a private component is available only via your [Company Content](/appstore/home-page/#company-content) page.
* **Latest version** — The latest version of the component.
* **Publisher** — The name of the organization that published the component.
* **View details** — Clicking this opens the [Component App Details](#component-usage) page.
* Column customization ({{% icon name="view" %}}) – You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

To export the information corresponding to selected items in the list to an Excel file, select the checkboxes of the items in the list, then click **Selection Export** that appears at the bottom of the page.

### Component App Details {#component-usage}

On the **Components** tab, if you click **View details** for an item, the **Component App Details** page opens. This page lists the environments where the selected component is being used. If a security vulnerability is found in one of the components, then the component usage tab can be used to assess the impact radius.

At the top of the page, you can find the following information:

* A color-coded summary of the findings
* The current version of the component
* The type of component
* The Marketplace support type of the component
* The component's publisher
* The type of Marketplace
* The component's license

The page is divided into two tabs: **Findings** and **Component Usage**. 

#### Findings {#component-findings}

The **Findings** tab lists all the findings which impact that particular version of the component.

The following options are available above the list:

* A search box to search for information within the list.
* A filter to display list items according to the type of finding. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The finding list contains the following information:

* **Severity** — The severity of the finding related to that component.
* **Finding Type** — The type of finding, which can be **Outdated** or **Deprecated**.
* **Deployment Package** — The deployment package in which the component is identified as a risk.
* **Environment** — The name of the environment where the app is running.
* **Target Cloud** — The type of cloud where the deployment package is deployed.
* **Age** — The number of days that the finding has been applicable, computed as follows:

    * Deprecated components: The current date - The date when the component was deprecated    
    * Outdated components: The current date - The publish date of the first higher runtime compatible version

* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

#### Component Usage {#component-component-usage}

The **Component Usage** tab displays a detailed view of all environments where the component is used.    

The following options are available above the list:

* A search box to search for information within the list.
* A filter to display apps based on the type of cloud. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The component usage list contains the following information:

* **Deployment Package** — The name of the deployment package where the component is used.
* **Environment** — The name of the environment where the app using the component is deployed.
* **Runtime** — The runtime version to which the component is compatible.
* **Version** — The version of the impacted deployment package.
* **Target Cloud** — The type of cloud where the deployment package is deployed.
* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.
