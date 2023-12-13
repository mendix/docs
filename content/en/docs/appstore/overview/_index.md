---
title: "Marketplace Overview"
url: /appstore/overview/
weight: 1
no_list: false
description_list: true
description: "Presents overview information on the Mendix Marketplace."
tags: ["marketplace",  "marketplace component", "marketplace content", "widget", "connector", "module", "partner", "support", "platform support", "community support", "deprecated"]
aliases:
    - /appstore/general/
    - /appstore/general/app-store-overview/
    - /appstore/general/use-content-support/
    - /appstore/general/app-store-content-support/
    - /community/app-store/
    - /community/app-store/app-store-overview/
    - /developerportal/app-store/app-store-overview/
    - /community/use-content-support/
    - /developerportal/app-store/use-content-support/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix delivers a robust platform for the rapid development of apps. To make your development move even more quickly, you can use content from the Marketplace. In addition to downloading content from the Marketplace, you can upload components you have developed to share and help the whole Mendix community.

The [Mendix Marketplace](https://marketplace.mendix.com/) is a vibrant marketplace containing complete sample apps that can be used right away as well as various components (connectors, modules, widgets, and more) that can be used to build your apps more quickly. In the Mendix Marketplace, you can browse all the content, get what you need, and share the content you have created.

This document describes the different sections of the Mendix Marketplace. More information in this category can be found in [My Marketplace](/appstore/overview/my-marketplace/) and [Using Marketplace Content](/appstore/overview/use-content/).

## 2 Marketplace Home Page {#home}

The [Marketplace home page](https://marketplace.mendix.com/)  is your entry point to the various parts of the Mendix Marketplace. Here you can perform actions such as the following:

* Search for content via the **Search Marketplace** box on the right side of the header
* Explore content via the **Content Types** and filters described below
* Click **My Marketplace** to go to pages presenting your [Marketplace activity](/appstore/overview/my-marketplace/) as well as your company's [private content](/appstore/overview/my-marketplace/#company-content)
* Click **Get Studio Pro** to get the latest version of [Studio Pro](/releasenotes/studio-pro/)
* Click **Add Content** to [share new Marketplace content](/appstore/sharing-content/) you have developed

{{< figure src="/attachments/appstore/overview/overview/home-page.png" >}}

<a id="types"></a>The Marketplace offers the following **Content Types**:

| Type | Description |
| --- | --- |
| [Module](/appstore/modules/) | Software functionality that can include a data model, logic, and UI with a portable security model. |
| [Widget](/appstore/widgets/) | Single user-interface elements like containers, drop-down menus, and buttons. Select a widget, configure it, and add it to pages and snippets in your app. |
| **Service** | Software functionality that can be re-used for different use cases. Services usually include APIs that you can interact with by configuring a connection in the app’s module. |
| <a id="industry"></a>**Solution** | Out-of-the-box solutions that are aimed at industry and domain problems, delivering instant value. These solutions are usually at least 80% ready for use and need minimal adaptation to make them work for a customer-specific use case. |
| **Sample** | A project that provides an overview of the capabilities a product can perform. The project can act as an example, sales play, demo, or template. |
| **Starter Template** | Sample projects that have certain capabilities in place to provide a basis for you to start developing your own app. You do not need to create an app from a blank template, as you can use a template that already has some features configured. In addition, a template can have a personalized style that can be shared and used to enrich other apps with a specific design. |
| **Industry Template** | Accelerators for implementing industry-specific processes. Industry templates increase speed-to-value and time-to-market, and they are great starting points for common use cases within the relevant industry. Contrary to solutions, industry templates are starter templates intended to provide inspiration for utilizing Mendix to create apps for industry-specific processes. They usually cover around 20% of the process. |

The following filter options are also available:

* **Category** – for specific domains in which components or services share characteristics, functions, or purposes
* **Support** – for details, see the [Marketplace Content Support](#support) section below
* **Industry** – for specific sectors or business domains in which components or services are used
* **Compatibility** – for Studio Pro major versions
* **Visibility** – for [Public](/appstore/sharing-content/#public) or [Private](/appstore/sharing-content/#private) content
* **Rating** – how the components have been rated in [reviews](/appstore/overview/my-marketplace/#my-reviews) by users

For details on finding and installing Marketplace content in Studio Pro, see the [Finding and Downloading Content in Studio Pro](/appstore/overview/use-content/#downloading) section of *Using Marketplace Content*.

## 3 Component Details Page {#details}

Clicking the tile of a Marketplace component will bring you to its details page with the sections described below.

{{< figure src="/attachments/appstore/overview/overview/component-details.png" >}}

### 3.1 Header

The header for a component presents the following details:

* The name of the component
* The review average (in stars) and the number of reviews
* The number of times the component has been downloaded
* <a id="saved"></a>**Save and Get Notified** – click this to add the component to your [My Marketplace](/appstore/overview/my-marketplace/) list
* Depending on the content type:
    * **Use in Studio Pro** for modules and widgets – click this to copy the content ID so that you can [search for and use the component in Studio Pro](/appstore/overview/use-content/#current-sp)
    * **Start with Template** for starter templates – click this to use the template
    * **Download** for other content types – click this to download the component
    * **Contact Us** – click this to contact Mendix or the community supplier
* <a id="partner-icon"></a>The partner icon is applied to components that are supported by a partner:

    {{< figure src="/attachments/appstore/overview/overview/partner.png"  width="25"  >}}

    * These components have a **Contact Us** button for setting up your subscription with the partner
    * If you already have an active subscription or trial, click **View status** to go to the [Company Subscriptions](/appstore/overview/my-marketplace/#company-subscriptions) page

<a id="usage"></a>The **Usage** section presents  the following information (depending on the type of component):

* The latest **Version** number of the component
* The Studio Pro version that the component **Requires** to work
* The type of [license](/appstore/sharing-content/#license) for the component

The **Publisher** section presents the name of the company who created the component as well as the **Date** when the component was first published.

The **Support** section presents the category of support Mendix offers for the component (for more details, see the [Marketplace Content Support](#support) section below).

A **GitHub** link will take you to the GitHub source files of the component.

### 3.2 Tabs

The component details page also presents the following tabs:

* **Overview** – contains a description and screenshots of the component
* **Documentation** – includes details on typical use cases, features and limitations, dependencies, installation and configuration, frequently asked questions, and screenshots
    * [Platform-supported components](/appstore/overview/#category) are documented according to content type or category in the [Marketplace Guide](/appstore/)
* **Releases** – lists all the versions of the component along with details like the **Framework version** and the **UUID**
    * The component versions can be downloaded by clicking **Download**
    * The **UUID** can be used in the [CreateNewApp operation](/apidocs-mxsdk/apidocs/projects-api/#createnewapp) in the *Projects API*
* **Reviews** – user reviews of the component
    * Click **Add Review** to open a section where you can add text, rate the component, and submit the review
    * Your reviews are listed on your [Reviews](/appstore/overview/my-marketplace/#my-reviews) page in **My Marketplace**
    * If you are a developer of the component, you can **Reply** to a review
* **Developers** – the names of the developers who most recently updated the component, with links to their [Mendix Profile](/developerportal/community-tools/mendix-profile/)

## 4 Marketplace Content Support {#support}

### 4.1 Content Support Categories {#category}

Support for Marketplace content is determined by the content support category and the service level agreement (SLA) the user possesses. We distinguish the following content support categories:

| Category | Description |
| --- | --- |
| **Platform** | Mendix supports all the content in this category as-is when you are equipped with an SLA (**Platform**, **Standard**, or **Premium**) with Mendix. Content in this category is proactively incorporated into Mendix R&D test cycles as part of our platform release management. Please note that this category replaces the former **Extended** category, which has been deprecated. |
| **Deprecated** | The content in this category is considered end-of-life and will be dropped to the **Community support** status in the next major release of Mendix. Content is provided as-is by Mendix R&D, and support depends on the severity of the reported issue and the effort required to resolve it. |
| **Community** | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. | 
| **Partner** | The content in this category is provided and supported by a partner. The partner supports this content as-is when you are equipped with an SLA with the partner. For more information, see [Mendix Component Partner Program](/appstore/partner-program/). | 
| **Siemens** | The content in this category is provided and supported by the Siemens team. Siemens supports this content as-is when you are equipped with an SLA with Siemens. | 

### 4.2 Feedback Process Details

We are always curious about and grateful for your feedback. The way you communicate your feedback to us depends on the support category of the content.

#### 4.2.1 Platform Category

The applicable level of service for Mendix-supported Marketplace content is equal to the Mendix SLA you have acquired. In other words, the same SLA conditions apply to support on Marketplace content. This means that equal response and resolve times are applicable, and the standard support process using the [Mendix Support Portal](https://support.mendix.com) has to be followed.

{{% alert color="warning" %}}
Content in this support category is supported as-is. When changing the content, the module will no longer be platform-supported.
{{% /alert %}}

#### 4.2.2 Deprecated Category {#deprecated}

Mendix moves platform-supported content into this category when the content is considered end-of-life. These decisions factor in popularity, the availability of improved alternative(s), and industry standards.

Support for content in this category is limited and is decided by Mendix on a case-by-case basis. You can still follow the standard support process using the [Mendix Support Portal](https://support.mendix.com). However, the Mendix SLA no longer applies. 

#### 4.2.3 Community Category {#community-category}

Support on content in this category is up to the user or organization providing the content. Mendix recommends contacting the owner of the content in case of questions or issues via the following methods:

* Open an issue on the GitHub repository associated with the content (for details on GitHub issues, see [Mastering Issues](https://guides.github.com/features/issues/))
* Contact the owner of the content via the contact details available on the Marketplace component's detail pages
* Ask a question on the [Mendix Forum](https://mxforum.mendix.com/)
* Contribute 

The level of support depends on the availability and effort of the developer and/or the Mendix community.

#### 4.2.4 Partner Category

Partner-supported content is created and maintained by partners as part of the [Mendix Component Partner program](/appstore/partner-program/). Partners in the program commit to providing support to paying customers under an SLA (meaning, under terms specified by the partner). Customers can rely on this SLA for support from the partner if something goes wrong. A partner-supported Marketplace [component details page](#details) contains a reference to the partner's support portal or the partner's support contact email.

### 4.3 Feedback Process Summary

#### 4.3.1 Mendix-Supplied Content

| Support Category  | Standard/Premium SLA | Platform SLA | No SLA | Notes |
| --- | --- | --- | --- | --- |
| **Platform** | [Mendix Support](https://support.mendix.com/)   | [Mendix Support](https://support.mendix.com/) | Mendix community supports | Mendix supports all the content in this category as-is when you are equipped with a Mendix SLA (Platform, Standard, or Premium). Content in this category is proactively incorporated into Mendix R&D test cycles as part of our platform release management. This category replaces the former Extended category, which has been deprecated. |
| **Deprecated** | [Mendix Support (limited)](https://support.mendix.com/) (for more information, see the [Deprecated Support Category](#deprecated) section above) | [Mendix Support (limited)](https://support.mendix.com/) (for more information, see the [Deprecated Support Category](#deprecated) section above) | Mendix community supports | Content in this category is considered end-of-life and will be dropped to the Community support category in the next major Mendix release. Content is provided as-is by Mendix R&D, and support depends on the severity of the reported issue and the effort required to resolve it. |
| **Community** | Mendix community supports | Mendix community supports | Mendix community supports | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. |

#### 4.3.2 Community-Supplied Content

| Support Category | Supplied by Individual Developer | Supplied by Partner Organization | Notes |
| --- | --- | --- | --- |
| **Community** | Mendix community supports | Options: No support from partner, or Mendix community supports | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. |
| **Partner**  | N/A | Partner supports premium customers (allowed after Mendix Component Partner agreement is signed) | Content in this category is provided and supported by a Mendix partner. The partner supports this content as-is when you are equipped with an SLA with the partner. For more information, see [Mendix Component Partner Program](/appstore/partner-program/). |

#### 4.3.3 Siemens-Supplied Content

| Support Category | Supplied by Individual Developer | Supplied by Segment Team or Other Org Level | Notes |
| --- | --- | --- | --- |
| **Siemens** | N/A  | Siemens supports. | Content in this category is provided and supported by the Siemens team. Siemens supports this content as-is when you are equipped with an SLA with Siemens. |
| **Community** | Mendix community supports | Options: No support from partner, or Mendix community supports | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. |

## 5 Documents in This Category 
