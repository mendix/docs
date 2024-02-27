---
title: "Software Composition"
url: /control-center/software-composition/
description: "Describes the Software Composition page in the Mendix Control Center."
tags: ["control center", "mendix admin", "software composition"]
weight: 80
no_list: true
---

## 1 Introduction

On the **Software Composition** page, you can see all the component details of all deployed apps and their components.

{{% alert color="info" %}}Make sure you are on a compatible Mendix version. Component details and related actions are available for apps made with the LTS version of Mendix 9 (9.24.XX) or Mendix version 10.X.0 and above when they are deployed to Mendix Cloud or Cloud Dedicated. Upgrade to one of these versions to see component information reflected here. {{% /alert %}}

The page contains two tabs: [Overview](#overview) and [All Components](#all-components).

## 2 Overview {#overview}

On the **Overview** tab, you can see a list of all deployed app, which shows the following information:

* **App Name**: This is the name of the app.
* **Production**: This shows whether the app is deployed in the production environment.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Target Cloud**: This shows the type of the cloud where the app is deployed.
* **Technical Contact**: This shows the Technical Contact of the app.

You can use the search box and filters above the list to search and filter components.

To export all the information on the list with one click, click **Export All**  on the right side above the list. You can also export the information of selected items to an Excel file. To do so, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

### 2.1 Component Summary {#component-summary}

On the **Overview** tab, if you click any item, the **Component Summary** page opens. 

On the top of the page, you can find the app name, whether the app is deployed in the production environment, the environment name, the Mendix Runtime version, the name of the Technical Contact, the type of the where the app is deployed, and the version of the app.

The list below shows all the all components used in the app, with the following information: 

* **Component**: This is the component name.
* **Version**: This shows the version of the component used in this app.
* **Type**: This is the component type.
* {{% icon name="view" %}}:

You can use the search box to search for an app, and select the target cloud and the Mendix Runtime version to filter apps.

To export all the information on the list with one click, click **Export All**  on the right side above the list. You can also export the information of selected items to an Excel file. To do so, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

## 3 All Components {#all-components}

The **All Components** tab gives an overview of all components in all the deployed apps. In the list, you can find the following information about the component:

* **Component**: This is the name of the component.
* **Type**: This shows the component type.
* **Version**: This shows the component version.
* **Apps using component**: This shows the number of apps where the component is used.
* {{% icon name="view" %}}: Clicking **View details** opens the [Component Usage](#component-usage) page.

You can use the search box to search for a component, and select the component type to filter components.

To export all the information on the list with one click, click **Export All**  on the right side above the list. You can also export the information of selected items to an Excel file. To do so, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.

### 3.1 Component Usage {#component-usage}

On the **All Components** tab, if you click **View details** for an item or click the item directly, the **Component Usage** page opens.

On the top of the page, you can find the component name, whether component type, the number of apps where the component is used, and the number of environments where apps containing the component are deployed.

The list below shows all the all apps where the component is used, with the following information: 

* **App Name**: This is the name of the app.
* **Production**: This shows whether the app is deployed in the production environment.
* **Environment**: This is the name of the environment.
* **Runtime**: This shows the Mendix Runtime version.
* **Target Cloud**: This shows the type of the cloud where the app is deployed.
* **Technical Contact**: This shows the Technical Contact of the app.
* {{% icon name="view" %}}: 

You can use the search box to search for an app, and select the target cloud and the Mendix Runtime version to filter apps.

To export all the information on the list with one click, click **Export All**  on the right side above the list. You can also export the information of selected items to an Excel file. To do so, select the check boxes of the items in the list, and then click **Selection Export to Excel** that appears at the bottom of the page.