---
title: "Marketplace Overview"
url: /appstore/overview/
weight: 10
no_list: false
description_list: true
description: "Presents overview information on the Mendix Marketplace."
tags: ["marketplace",  "marketplace component", "marketplace content", "widget", "connector", "module", "partner"]
aliases:
    - /appstore/overview/
    - /appstore/overview/app-store-overview/
    - /community/app-store/
    - /community/app-store/index.html
    - /community/app-store/app-store-overview/
    - /community/app-store/app-store-overview.html
    - /developerportal/app-store/app-store-overview/
    - /developerportal/app-store/app-store-overview.html
---

## 1 Introduction

Mendix delivers a robust platform for the rapid development of apps. To make your development move even more quickly, you can use content from the Marketplace. In addition to downloading content from the Marketplace, you can upload components you have developed to share and help the whole Mendix community.


The [Mendix Marketplace](https://marketplace.mendix.com/) is a vibrant marketplace containing complete sample apps that can be used right away as well as various components (connectors, modules, widgets, and more) that can be used to build your apps more quickly. In the Mendix Marketplace, you can browse all the content, get what you need, and share the content you have created.

This document describes the different sections of the Mendix Marketplace. More information in this category can be found in [My Marketplace]() and [Use Marketplace Content](/appstore/overview/app-store-content/).

## 2 Marketplace Home Page {#home}

The home page is your entry point to the various parts of the Mendix Marketplace. Here you can perform actions such as the following:

* Click **My Marketplace** to go to pages presenting your [Marketplace activity](#my-marketplace) as well as your company's [private content](#company-content)
* Click **Get Studio Pro** to get the latest version of [Studio Pro](/releasenotes/studio-pro/)
* Click **Add Content** to [share new Marketplace content](/appstore/overview/share-app-store-content/) you have developed
* Explore various [industry solutions](#industry) and [content types](#types).

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

* **Category**
* **Support** – **Platform**, **Partner**, **Siemens**, or **Community**
* **Industry**
* **Compatibility**
* **Visibility** – **Public** or **Private** content
* **Rating**

## 3 Component Details Page {#details}

Clicking the tile of a Marketplace component will bring you to its details page with the sections described below.

{{< figure src="/attachments/appstore/overview/overview/component-details.png" >}}

The header for a component presents the following details:

* The name of the component
* The review average (in stars) and the number of reviews
* The number of times the component has been downloaded
* <a id="saved"></a>**Save and Get Notified** – click this to add the component to your [My Marketplace](#my-marketplace) list
* Depending on the content type:
    * **Use in Studio Pro** for modules and widgets – click this to copy the content ID so that you can [search for and use the component in Studio Pro](/appstore/overview/app-store-content/#current-sp)
    * **Start with Template** for starter templates – click this to use the template
    * **Download** for all other content types – click this to download the component
* The partner icon is applied to components that are supported by a partner:

    {{< figure src="/attachments/appstore/overview/overview/partner.png"  width="25"  >}}

    * These components have a **Contact Us** button for setting up your subscription with the partner
    * If you already have an active subscription or trial, click **View status** to go to the [Company Subscriptions](#company-subscriptions) page

<a id="usage"></a>The **Usage** section presents  the following information (depending on the type of component):

* The latest **Version** number of the component
* The Studio Pro version that the component **Requires** to work
* The type of [license](/appstore/overview/share-app-store-content/#license) for the component

The **Publisher** section presents the name of the company who created the component as well as the **Date** when the component was first published.

The **Support** section presents the category of support Mendix offers for the component (for more details, see [Marketplace Content Support](/appstore/overview/app-store-content-support/)).

A **GitHub** link will take you to the GitHub source files of the component.

The component details page also presents the following tabs:

* **Overview** – contains a description and screenshot of the components
* **Documentation** – can include details on typical use cases, features and limitations, dependencies, installation and configuration, frequently asked questions, and screenshots [platform-supported](/appstore/overview/app-store-content-support/#category) components are documented in the various categories of this *Marketplace Guide*
* **Releases** – lists all the versions of the component (any of which can be downloaded by clicking **Download**) along with details like the **Framework version** and the **UUID** (which can be used in the [CreateNewApp operation](/apidocs-mxsdk/apidocs/projects-api/#createnewapp) in the *Projects API*)
* **Reviews** – user reviews of the component; to leave a review for the component, click **Add Review**, which opens a section where you can add text, rate the component, and submit the review (your reviews will be listed on your [Reviews](#my-reviews) page); if you are a developer of the component, you can **Reply** to a review
* **Developers** – the names of the developers who most recently updated the component, with links to their [Mendix Profile](/developerportal/community-tools/mendix-profile/)

## 4 Documents in This Category

