---
title: "Software Composition"
url: /developerportal/deploy/software-composition/
description: "Describes the Software Composition page in the Developer Portal."
tags: ["developer portal", "deployment", "software composition"]
weight: 80
no_list: true
---

{{% alert color="warning" %}}This feature is in beta. For more information, see [Beta Releases](/releasenotes/beta-features). {{% /alert %}}

## 1 Introduction

The **Software Composition** page provides you with an overview of the composition of your deployment packages and helps you reduce the security vulnerabilities for your deployment packages. On this page, you can see all the components that a deployment package contains and where a component is used.

{{% alert color="info" %}}Make sure you are on a compatible Mendix version. Component details and related actions are only available for deployment packages made with Mendix [10.5.0](/releasenotes/studio-pro/10.5/) or above when they are deployed to Mendix Cloud or Cloud Dedicated. Upgrade to one of these versions to see component information reflected on this page. {{% /alert %}}

The page contains two tabs: [Overview](#overview) and [All Components](#all-components).

## 2 Overview {#overview}

The **Overview** tab shows a list of all the deployment packages.

Above the list, you can use the search box to search for a deployment package. Next to the search box, you can filter deployment packages by selecting the Mendix Runtime version. You can click **Export All** on the right side above the list to export all the information in the list to an Excel file.

The list contains the following information:

* **Deployment Package**: This is the name of the deployment package.
* **Production**: This shows whether the deployment package is deployed in the production environment.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Target Cloud**: This shows the type of the cloud where the deployment package is deployed.
* **Technical Contact**: This shows the Technical Contact of the app.
* {{% icon name="view" %}}: You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.
* **View details**: Click this opens the [Deployment Package Summary](#deployment-package-summary) page.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

### 2.1 Deployment Package Summary {#deployment-package-summary}

On the **Overview** tab, if you click **View Details** for a deployment package in the list, the **Deployment Package Summary** page opens. 

On the top of the page, you can find the name of the deployment package, whether the deployment package is deployed in the production environment, the environment name, the Mendix Runtime version, the name of the Technical Contact, the type of the cloud where the deployment package is deployed, and the version of the deployment package.

On the upper-right corner of the page, you can click {{% icon name="download-bottom" %}}**SBOM** to download the software bill of materials (SBOM).

Above the list, you can use the search box to search for a component. Next to the search box, you can filter components by selecting the component type. You can click **Export All** on the right side above the list to export all the information in the list to an Excel file.

The list shows all the components used in the deployment package, with the following information: 

* **Component**: This is the component name.
* **Version**: This is the version of the component used in the deployment package.
* **Type**: This shows the type of the component.
* {{% icon name="view" %}}: You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

## 3 All Components {#all-components}

The **All Components** tab gives an overview of all the components used across your deployment packages. 

Above the list, you can use the search box to search for a component. Next to the search box, you can filter components by selecting the component type. You can click **Export All** on the right side above the list to export all the information in the list to an Excel file.

The list shows the following information about the component:

* **Component**: This is the name of the component.
* **Type**: This shows the type of the component.
* **Version**: This is the component version.
* {{% icon name="view" %}}: You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.
* **View details**: Click this opens the [Component Usage](#component-usage) page.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

### 3.1 Component Usage {#component-usage}

On the **All Components** tab, if you click **View details** for an item, the **Component Usage** page opens.

On the top of the page, you can find the component name, the component version, and the component type. 

Above the list, you can use the search box to search for an environment. You can click **Export All** on the right side above the list to export all the information in the list to an Excel file.

The list shows all the environment where the deployment package containing the component is used, with the following information: 

* **Environment**: This is the name of the environment.
* **Production**: This shows whether the deployment package is deployed in the production environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Version**: This shows the version of the component that is used.
* {{% icon name="view" %}}:  You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and adjusting the selection of the check boxes.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.