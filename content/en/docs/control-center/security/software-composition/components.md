---
title: "Components Tab"
linktitle: "Components Tab"
url: /control-center/components-tab/
description: "Describes the Components tab on the Software Composition page of the Mendix Control Center."
weight: 2
---

## Introduction

The **Components** tab gives an overview of all the unique components used across your app landscape. 

{{< figure src="/attachments/control-center/security/software-composition/all_components.png" >}}

## Insights

The **Insights** cards display the following details:

* **Marketplace** — The number of private and public Marketplace components used throughout your apps. These can be:

    * Modules
    * Widgets
    * Framework

* **Support type** — The number of Marketplace components divided into content support categories.
* **Summary** — The number of findings in each severity category, along with a rolling average of how the number of findings has evolved over the past 30 days, expressed as a percentage.

## Component List

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
* **Apps using component** – The number of apps where the component is used.
* **Latest version** — The latest version of the component.
* **Publisher** — The name of the organization that published the component.
* **View details** — Clicking this opens the [Component Details](#component-details) page.
* Column customization ({{% icon name="view" %}}) – You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

To export the information corresponding to selected items in the list to an Excel file, select the checkboxes of the items in the list, then click **Selection Export** that appears at the bottom of the page.

## Component Details {#component-details}

If you click **View details** for a component on the **Components** tab, the **Component Details** page opens.

### Findings {#component-findings}

The **Findings** tab lists all the findings which impact that particular version of the component.

{{< figure src="/attachments/control-center/security/software-composition/components_findings.png" >}}

The following options are available above the list:

* A search box to search for information within the list.
* A filter to display list items according to the type of finding. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The finding list contains the following information:

* **Severity** — The severity of the finding related to that component.
* **Finding Type** — The type of finding, which can be **Outdated** or **Deprecated**.
* **App Name** — The app in which the component is identified as a vulnerability.
* **Environment** — The name of the environment where the app is running.
* **Target Cloud** — The type of cloud where the deployment package is deployed.
* **Age** — The number of days that the finding has been applicable, computed as follows:

    * Deprecated components: The current date - The date when the component was deprecated    
    * Outdated components: The current date - The publish date of the first higher runtime compatible version

* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

### Component Usage {#component-component-usage}

The **Component Usage** tab displays a detailed view of all apps and environments where the component is used.    
If there is a component with a critical vulnerability, you can use this page to find out which apps use that component.

{{< figure src="/attachments/control-center/security/software-composition/components_comp_usage.png" >}}

The following options are available above the list:

* A search box to search for information within the list.
* A filter to display apps based on the type of cloud. 
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The component usage list contains the following information:

* **App Name** — The name of the app where the component is used.
* **Environment** — The name of the environment where the app using the component is deployed.
* **Runtime** — The runtime version to which the component is compatible.
* **Target Cloud** — The type of cloud where the deployment package is deployed.
* **Technical Contact** — The Technical Contact of the app.
* Column customization ({{% icon name="view" %}}) — You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.
