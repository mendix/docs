---
title: "Software Composition"
url: /control-center/software-composition/
description: "Describes the Software Composition page in the Mendix Control Center."
tags: ["control center", "mendix admin", "software composition"]
weight: 80
no_list: true
---

## 1 Introduction

The **Software Composition** page provides you with an overview of the composition of your apps and helps you reduce the security vulnerabilities for your apps. On this page, you can see all the components that a deployed app contains and where a component is used.

{{% alert color="info" %}}Make sure you are on a compatible Mendix version. Component details and related actions are available for apps made with Mendix [10.5.0](/releasenotes/studio-pro/10.5/) and above or above when they are deployed to Mendix Cloud or Cloud Dedicated. Upgrade to one of these versions to see component information reflected here. {{% /alert %}}

The page contains two tabs: [Overview](#overview) and [All Components](#all-components).

## 2 Overview {#overview}

On the **Overview** tab, you can see a list of all the deployed app, with the following information:

* **App Name**: This is the name of the app.
* **Production**: This shows whether the app is deployed in the production environment.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Target Cloud**: This shows the type of the cloud where the app is deployed.
* **Technical Contact**: This shows the Technical Contact of the app.

Above the list, you can use the search box to search for an app. Next to the search box, you can filter apps by selecting the Mendix Runtime version. 

To export all the information in the list to an Excel file, click **Export All**  on the right side above the list.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

### 2.1 Component Summary {#component-summary}

On the **Overview** tab, if you click an item in the list, the **Component Summary** page opens. 

On the top of the page, you can find the app name, whether the app is deployed in the production environment, the environment name, the Mendix Runtime version, the name of the Technical Contact, the type of the cloud where the app is deployed, and the version of the app.

Below, the list shows all the components used in the app, with the following information: 

* **Component**: This is the component name.
* **Version**: This is the version of the component used in this app.
* **Type**: This shows the type of the component.
* {{% icon name="view" %}}:

Above the list, you can use the search box to search for a component. Next to the search box, you can filter components by selecting the component type.

To export all the information in the list to an Excel file, click **Export All**  on the right side above the list.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

## 3 All Components {#all-components}

The **All Components** tab gives an overview of all the components used in all the deployed apps. In the list, you can find the following information about the component:

* **Component**: This is the name of the component.
* **Type**: This shows the type of the component.
* **Version**: This is the component version.
* **Apps using component**: This shows the number of apps where the component is used.
* {{% icon name="view" %}}: Clicking **View details** opens the [Component Usage](#component-usage) page.

Above the list, you can use the search box to search for a component. Next to the search box, you can filter components by selecting the component type.

To export all the information in the list to an Excel file, click **Export All**  on the right side above the list.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

### 3.1 Component Usage {#component-usage}

On the **All Components** tab, if you click **View details** for an item or click the item directly, the **Component Usage** page opens.

On the top of the page, you can find the component name, the component type, the number of apps where the component is used, and the number of environments where apps containing this component are deployed.

Below, the list shows all the apps where the component is used, with the following information: 

* **App Name**: This is the name of the app.
* **Production**: This shows whether the app is deployed in the production environment.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Target Cloud**: This shows the type of the cloud where the app is deployed.
* **Technical Contact**: This shows the Technical Contact of the app.
* {{% icon name="view" %}}: 

Above the list, you can use the search box to search for an app. Next to the search box, you can filter apps by selecting the type of the cloud and the Mendix Runtime version. 

To export all the information in the list to an Excel file, click **Export All**  on the right side above the list.

To export the information of selected items in the list to an Excel file, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.