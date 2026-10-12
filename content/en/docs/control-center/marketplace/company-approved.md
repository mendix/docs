---
title: "Company-Approved"
url: /control-center/company-approved/
description: "Describes the Company-Approved page in the Mendix Control Center."
weight: 10
no_list: true
aliases:
    - /control-center/marketplace-curation/
---

## Introduction

The **Company-Approved** page provides an overview of the approval status of Marketplace content, as well as governance capabilities for that content. It allows you to translate the company's policies and guidelines for public and private Marketplace content to curation settings. Marketplace components that meet these requirements get a company-approved badge: <text class="badge badge-pill badge-company-approved" style="margin-left:0px"> {{% icon name="checkmark-shield-filled" color="green" %}}COMPANY APPROVED</text>. This way, developers from your company can easily see which content is company-approved according to your company policies and guidelines. This functionality provides several key benefits:

* Developer guidance – Developers can easily identify Marketplace content suitable for their apps by filtering Marketplace content by the company-approved badge in Studio Pro's Marketplace section or on the Marketplace website. This helps developers find valuable and relevant content for app development in your company.     
    For more information, see [Displaying Company Approved Marketplace Content in Studio Pro](#display-company-approved-marketplace-content).
* Enhanced marketplace exploration – By specifying criteria for company-approved content, developers can explore a wider array of public content, enabling them to leverage resources for their apps.
* Governance control – Centralized curation allows Mendix Admins to translate offline policies and guidelines to an in-platform experience, establishing efficient communication and time-saving processes between developers and Mendix Admins.

The **Company-Approved** page contains the following tabs:

* [Components](#marketplace-content-list)
* [Settings](#curation-settings)

## Components {#marketplace-content-list}

{{< figure src="/attachments/control-center/marketplace/company-approved/company-approved.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}

The **Components** tab lists all company-approved Marketplace content, be it public or private. These are the details displayed in the list:

* **Component Name** – The name of the component.
* **Support Type** – The support type of the component.
* **Visibility** – The visibility of the component, which can be **Public** or **Private**.
* **Updated on** – The date when the component was most recently updated.
* **License** – The license of the component.
* **Authorized by** – This indicates the origin of the badge:

    * **Marked via Setting** – The company-approved badge is added automatically based on the curation settings.
    * **[Admin Name]** – The company-approved badge is added manually by a Mendix Admin.

### Managing the Company-Approved Badge

{{< figure src="/attachments/control-center/marketplace/company-approved/manage-company-approved.png" max-width=70% alt=''displaying-company-approved-mp-content'' >}}

For components that are not company-approved based on your [curation settings](#curation-settings), you can manually add the company-approved badge.    
The **Manage Company-Approved Badge** page allows you to manually add and remove the company-approved badge for your company's components. To access it, click **Manage Company-Approved Badge** in the top right of the component list.

The **Manage Company-Approved Badge** page includes the same fields as the component list, with the additional **Company Approval** field, which shows whether the component has been marked as company-approved or not. 

You can click the contextual actions menu next to each component to change its company approval status.     
Additionally, you can select multiple components to change their company approval status simultaneously.

{{% alert color="info" %}}If you manually add a company-approved badge to a Marketplace component, this Marketplace component will always keep the badge, even if the curation settings get changed later. The same thing is true if you manually remove a company-approved badge from a Marketplace component: it will not be added back even if the curation settings get changed later, and the Marketplace component meets the new requirements. {{% /alert %}}

## Settings {#curation-settings}

{{< figure src="/attachments/control-center/marketplace/company-approved/curation-settings.png" max-width=50% alt=''displaying-company-approved-mp-content'' >}}

On the **Settings** tab, you can configure company policies and guidelines for public and private Marketplace content.  

Select the support types and license types that you deem relevant. Marketplace components that meet your requirements will be automatically labeled as company-approved. 

For instance, if you select **Community** and **Platform** under **Based on Support Types**, and **MIT** under **Based on License**, then any component supported by the **Community** or **Platform** and licensed under **MIT** will be labeled as company-approved.

{{% alert color="info" %}}Partner License: this license covers all custom licenses generated by partner companies. {{% /alert %}}

## Displaying Company-Approved Marketplace Content in Studio Pro {#display-company-approved-marketplace-content}

In Studio Pro's Marketplace section, developers can view all Marketplace components, company approved content or not. To only see company approved content, select the **Show <text class="badge badge-pill badge-company-approved" style="margin-left:0px"> {{% icon name="checkmark-shield-filled" color="green" %}}COMPANY APPROVED</text>** check box.    

The company-approved badge is also visible on the details page in the main panel.

{{< figure src="/attachments/control-center/marketplace/company-approved/displaying-company-approved-content.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}
