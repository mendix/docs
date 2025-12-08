---
title: "Overview Tab"
linktitle: "Overview Tab"
url: /control-center/overview-tab/
description: "Describes the Overview tab on the Software Composition page of the Mendix Control Center."
weight: 1
---

## Introduction

On the **Overview** tab, you can see a list of all the deployed apps and their environments, if applicable. You can also see the number of findings for each severity level, as configured on the [Scoring Criteria](/control-center/scoring-criteria-tab/) tab.

{{< figure src="/attachments/control-center/security/software-composition/software_composition_overview.png" >}}

## Insights

The **Insights** cards display the number of findings across all environments, broken down by severity level. For example, if a build package contains one critical finding and is deployed to the test and production environments, two findings are added to **Insights**.    

Each card also displays a rolling average of how the number of findings has evolved over the past 30 days, expressed as a percentage.    

This is an example of how the evolution trend of **Critical** findings is calculated on January 1, 2025:

* January 1 rolling average for the last 30 days (average of **Critical** findings between December 1 and January 1) = 5
* December 1 rolling average for the last 30 days (average of **Critical** findings between November 1 and December 1) = 10
* Evolution trend = (5 - 10)/10, which results in a 50% decrease in **Critical** findings

The calculations are refreshed once a day.    
Changing the scoring criteria resets the trends.

For details on severity levels, refer to [Scoring Criteria](/control-center/scoring-criteria-tab/).

## Application Environment List

The following options are available above the list of application environments:

* A search box to search for information within the list.
* A filter to display apps based on the type of cloud. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The app list is sorted based on the number of findings and their severity, from highest to lowest. It contains the following information:

* **App Name** — The name of the app.
* **Environment** — The name of the environment.
* **Runtime** — The Mendix Runtime version.
* **Findings** — The number of findings of each type, color-coded according to severity level.
* **Technical Contact** — The Technical Contact of the app.
* **Target Cloud** — The type of cloud where the deployment package is deployed. Currently, the following types of cloud are supported:
    * Mendix Free Cloud
    * Mendix Cloud (including Mendix Cloud Dedicated)
    * Mendix on Kubernetes (connected)
* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.
* **View details** — Clicking this opens the [Application Environment Summary](#app-env-summary) page, if it is available. The **View details** button is grayed out when an SBOM is not available for the selected application environment. Ensure you are on a compatible runtime version and have created a new deployment package in order to have components visible here.

To export the information corresponding to selected items in the list to an Excel file, select the checkboxes of the items in the list, then click **Selection Export** that appears at the bottom of the page.

## Application Environment Summary {#app-env-summary}

If you click **View Details** for an app in the list on the **Overview** tab, the **Application Environment Summary** page opens. This displays details about the findings identified in all the components used by the selected app.

At the top of the page, you can find the following information:

* The app name
* A color-coded summary of the findings
* The environment name
* The Mendix Runtime version
* The Technical Contact
* The type of cloud where the deployment package is deployed

In the upper, right corner of the page, you can click {{% icon name="download-bottom" %}}**SBOM** to download the software bill of materials (SBOM).  

A software bill of materials (SBOM) is a *.json* file in the CycloneDX format. It contains a description about the Mendix app and the components (dependencies) put into it. For more information, see [SBOM Generation](/refguide/sbom-generation/).

Different versions of Studio Pro support different component dependencies. For details on component dependencies supported per version, refer to the [Supported Features](/refguide/sbom-generation/#supported-features) section in *SBOM Generation*.

The page is divided into two tabs: **Findings** and **Component Usage**.

### Findings {#overview-findings}

The **Findings** tab lists all the findings which impact that particular app environment.

{{< figure src="/attachments/control-center/security/software-composition/findings.png" >}}

The following options are available above the list:

* A search box to search for information within the list.
* A filter to display list items according to the type of finding. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The finding list contains the following information:

* **Severity** — The severity level of the finding related to that component.
* **Finding Type** — The type of finding, which can be **Outdated** or **Deprecated**.
* **Component** — The name of the component used in the app. Clicking this takes you to the corresponding Mendix Marketplace page.
* **Version** — The version of the component that is used in the app.
* **Type** — The type of component.
* **Support type** — This shows the support type of the Marketplace component. It can be **Mendix**, **Partner**, or **Community**. For more information, refer to [Content Support Categories](/appstore/marketplace-content-support/#category).
* **Age** — The number of days that the finding has been applicable, computed as follows:

    * Deprecated components: the current date - the date when the component was deprecated    
    * Outdated components: the current date - the publish date of the first higher runtime compatible version

* **Outdated since version** — The version that caused the currently used version to become outdated. This only applies to outdated components.
* **Outdated since version publish date** — The release date of the version that caused the currently used version to become outdated. This only applies to outdated components.
* **Deprecated since version** — The version when the component became deprecated.
* **Deprecated since version publish date** — The release date of the version when the component became deprecated.
* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

### Component Usage {#overviw-component-usage}

The **Component Usage** tab displays a detailed view of all components used within the app.

{{< figure src="/attachments/control-center/security/software-composition/component_usage.png" >}}

The following options are available above the list:

* A search box to search for information within the list.
* A filter to display apps based on the type of cloud. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The component usage list contains the following information:

* **Component** — The name of the component.
* **Version** – The version of the component that is being used.
* **Type** — The type of component, which can be one of the following:
  
    * **Module** — Standard marketplace module imported from the Marketplace, such as [Community Commons](https://marketplace.mendix.com/link/component/170).
    * **Widget** — User interface elements downloaded from the Marketplace, such as [Charts](https://marketplace.mendix.com/link/component/105695).
    * **Framework** — The Mendix Runtime version, for example 10.12.0
    * **Jar** — Java libraries imported into your app using [Managed Dependencies](/refguide/managed-dependencies/), or those manually added in the **userlib** folder depending on the Studio Pro version used, such as `org.apache.commons.io`.
    * **npms** — `npm` libraries that are used in your [JavaScript actions](/refguide/javascript-actions/).
    * **Unknown** — When the type of the component is none of the above and hence undetermined.
    
* **Support type** – The support type of the Marketplace component. This can be **Mendix**, **Partner**, or **Community**.    
  For more information, refer to [Content Support Categories](/appstore/marketplace-content-support/#category).
* **License** – For components derived from the Mendix Marketplace, this is the end-user license for the component.
* **Latest version** – The latest version of the component.
* **Marketplace** – Whether the component is **Public** or **Private**. A public component is available to the whole Mendix community in the Marketplace, while a private component is available only via your [Company Content](/appstore/home-page/#company-content) page.
* **Latest Runtime Compatible Version** — The most recent runtime version to which the component is compatible.
* **Publisher** – The name of the organization that published the component.
* Column customization ({{% icon name="view" %}}) – You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

To export the information corresponding to selected items in the list to an Excel file, select the checkboxes of the items in the list, then click **Selection Export** that appears at the bottom of the page.
