---
title: "Component Details Page"
url: /appstore/component-details/
weight: 2
no_list: false
description_list: true
description: "Presents information on the component details page."
---
## Introduction

Clicking the tile of a [Marketplace](https://marketplace.mendix.com/) component brings you to its details page with the sections described in this document.

{{< figure src="/attachments/appstore/component-details/marketplace_module.png">}}

## Component Header {#header}

The header for a component includes the following details:

* Labels (if there are any)

    * **Partner**: If the header contains this label, it means that the component is partner-supported.
    * **Platform Supported**: If the header contains this label, it means that the component is Mendix platform-supported. 
    * **Siemens**: If the header contains this label, it means that the component is Siemens-supported.
    * **Recommended**: If the header contains this label, it means that the component meets your company's policies and guidelines, and therefore is recommended by your Mendix Admins.
    
* The name of the component
* **Save** – Click this to add the component to your [Saved Content](/appstore/home-page/#personal) list.
* Depending on the content type:

    * **Use in Studio Pro** for modules and widgets – Click this to copy the content ID so that you can [search for and use the component in Studio Pro](/appstore/use-content/#current-sp).
    * **Start with Template** for starter templates – Click this to use the template.
    * **Download** for other content types – Click this to download the component.
    * **Contact Us** – Click this to contact Mendix or the community supplier.

The **Publisher** section includes the following information, depending on the type of component:

* The name of the company that created the component
* The date when the component was first published <!-- This is a bit confusing, since the UI is "Updated on", which hints towards an update, not an upload -->
* The latest version of the component
* The review average, in stars, and the number of reviews
* The number of times the component has been downloaded

The **Requirements** section includes the following:

* The Studio Pro version required for the component to work
* The type of [license](/appstore/submit-content/#license) for the component

The **Support** section presents the category of support Mendix offers for the component (for more details, see the [Marketplace Content Support](/appstore/marketplace-content-support/) section below).

A **GitHub** link will take you to the GitHub source files of the component.

## Component Tabs

The component details page also includes the following tabs:

* **Overview** – This tab contains a description and screenshots of the component.
* **Documentation** – This tab includes details on typical use cases, features and limitations, dependencies, installation and configuration, frequently asked questions, and screenshots.
    * [Platform-supported components](/appstore/marketplace-content-support/#category) are documented in the [Marketplace Guide](/appstore/) according to content type or category.
* **Releases** – This tab lists all the versions of the component along with details like the framework version and the UUID.
    * Each version can be downloaded by clicking **Download**.
    * If any version has the <text class="badge badge-pill badge-react" style="margin-left:0px">{{< icon name="react" color="blue" >}} REACT-CLIENT</text> label next to it, it means this version is optimized for React Client applications. This label is only used for widgets.
* **Reviews** – This tab shows user reviews of the component.
    * You can browse, sort by review date, and filter by ratings for insights on the component.
    * You can select the **Only show my reviews** checkbox to check your own reviews.
    * You can click **Write Review** to open a section where you can add text, rate the component, and submit the review.
        * Before you write a review, you can first read the **Tips for Sharing Your Review** on the right. 
        * You can now rate a component four or five stars without leaving a review. For three-, two-, and one-star ratings, a review is mandatory.
        * You can find all your reviews on your [My Reviews](/appstore/home-page/#my-reviews) page in the Marketplace home page.
    * If you are a developer of the component, you can reply to a review.
* **Developers** – This tab shows the names of the developers who most recently updated the component, with links to their [Mendix Profile](/mendix-profile/).
