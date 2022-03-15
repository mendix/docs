---
title: "Prepare Your Commercial Content to Sell"
url: /appstore/creating-content/prepare/
category: "Creating Content"
menu_order: 2
description: "Describes how to prepare your your commercial content to sell in the Mendix Marketplace."
tags: ["marketplace", "vendor", "app service"]
aliases:
    - /appstore/general/sell.html
    - /appstore/creating-content/as-sell.html
---

## 1 Introduction

To bring your commercial product to the Mendix Marketplace, you need to first sign up as a [Mendix Vendor](/appstore/creating-content/vendor-program/). Once that process is complete, you need to prepare your content to sell in the Marketplace.

{{% alert type="warning" %}}
The process for becoming a vendor is currently restricted to Beta suppliers, so you have to be part of the Mendix Vendor Beta program.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Make your commercial content ready to sell on the Marketplace
* Complete specific tasks before you submit, as you submit, and after you submit your content to the Marketplace

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Participate in the [Mendix Vendor Program](/appstore/creating-content/vendor-program/)

## 3 Making Your Content Marketplace-Ready

The Marketplace provides a trustworthy experience for sharing and consuming content.  This is achieved through proven curation and governance processes as well as compliance checks conducted at the point of consumption. To walk you through the process of submitting content to the Marketplace, the intuitive [Upload Content](/appstore/general/share-app-store-content/#adding) wizard provides steps for adding and publishing your content.

Mendix uses the industry-standard [Open Service Broker API (OSB API)](https://www.openservicebrokerapi.org/) to enable automatically provisioning, de-provisioning, updating, and connecting users to your content.

![](/attachments/appstore/creating-content/prepare/journey.png)

To help us maintain the high quality of content available on the Marketplace, we provide clear guidelines below for what is necessary when preparing and submitting your content. Use these comprehensive resources to turn your idea into reality by learning how to design, develop, market, and monetize your content and get support via best practices and success stories from like-minded Mendix Vendors.

## 4 Submission Prerequisites

### 4.1 OSB API Compatibility for Content

To submit content to the Marketplace, it needs to be compatible to the OSB API.  This allows the service to be automatically provisioned, and it provides the connection details for users when they try or buy it.

Although OSB API supports endpoints for many operations (as specified in the [Open Service Broker API specification](https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md), these are the three main concepts to consider while implementing your service broker for your content:

* **Service Catalog** (`GET /v2/catalog`) – for listing your services available to the broker
* **Provisioning** (`PUT /v2/service_instances/{instance_id}`) – for provisioning your service
* **Binding** (`PUT /v2/service_instances/{instance_id}/service_bindings/{binding_id}`)  – for creating the connection and connection details to connect your service to an application during provisioning

For additional assistance and an example of how to provision and bind an app to a logging service, contact *DIS_AppServices_Supplier_Team@mendix.com*.

### 4.2 Identity & Access Management (IAM)

When you submit your content to the Marketplace, you can easily integrate its IAM system with the Mendix Platform.

Firstly, you need to register your content’s service broker to allow it to be automatically provisioned when it is subscribed to. In this way, the service broker of the content creates a tenant within the content before creating a set of client credentials that are used to interact with the tenant.

Once a subscribing user has the credentials, their Mendix app can use them to request a token from the IAM system of your content to enable it to interact with the tenant in the content via APIs.

The Mendix Platform’s foundational IAM service is evolving quickly to support "consuming" authentication, authorization decisions, and user profiles. This allows you to focus on your domain logic while Mendix manages the identities and access policies. Additional IAM capabilities will include the following:

* Enabling Mendix developers and app end-users to use the content supplier’s IAM system to have a single sign-on (SSO) experience between apps, content, and the Mendix Platform
* Enabling Mendix developers and app end-users to use the Mendix IAM system to have an SSO experience between apps, content, and the Mendix Platform
* Enabling end-user for access control to your content from within an app

For more information about IAM integration, contact *DIS_AppServices_Supplier_Team@mendix.com*.

### 4.3 Metering

Metering consists of the following:

* Usage-based metering (via the API gateway)
	* API (payload, count)
	* An asynchronous service 
* Active users (via Mendix Runtime)
	* Widget
* Metering (via the content’s own solution) 

### 4.4 Documentation

Comprehensive product documentation can have a significant impact on the success of your content. This is why we check for its completeness as part of our review prior to your product being published in the Marketplace.

Document how your content is used while the content is being developed (for example, using API documentation, release notes, and technical reference documentation). You should also explain how your content is designed to behave for users through typical use cases and best practices.

We recommend you look at examples of widget, connector, and module documentation in the [Marketplace Guide](/appstore/) when writing your documentation.

### 4.5 Export Control {#export-control}

Export control is an area of legislation that regulates and restricts the export of goods, information, software, and technology that could be potentially useful for purposes that are contrary the interest of the exporting country. These items are considered to be *controlled*. 

If your content is a controlled item, Mendix needs to ensure it is prevented from being sent to destinations where it may be used in a harmful way. In these cases, you typically need to request an export control license from a local government department, and you need to confirm ownership of such a license before we can list your content in the Marketplace.

If you are unclear what this means to you and your content, there are useful resources online.  If you are stuck, contact *DIS_AppServices_Supplier_Team@mendix.com* for guidance.

### 4.6 Pricing & Free Trials {#pricing}

As a Mendix Vendor, it is important that you choose the pricing model that will maximize the business opportunity for your content. Once you have decided on your preferred pricing model and whether you want to offer your content as a free trial, you can apply these these options to your content via steps in the Add Content wizard.

#### 4.6.1 Pricing Models

The Marketplace supports three pricing models:

* **Flat Fee** –  As you submit your content, you specify the flat-fee price.
* **Per User**  – As you submit your content, you specify price per user per month. 
* **Usage-Based** – In this model, users pay for what they consume. In this way, it directly relates the price your users pay for your content to their usage. The more they use, the more they pay. You can determine the metrics on which the cost is based, along with the price per unit for each of the metrics.

Since you need to specify the plan in your service broker implementation before you submit your content, contact *DIS_AppServices_Supplier_Team@mendix.com*.

#### 4.6.2 Free Trials

The benefits of a free trial are well know as a means to increase user adoption. Having offered trials for much of our own content, Mendix recommends that you consider offering a trial for yours, too.

The Marketplace supports time-based trials, so you must clearly define the terms and conditions of your trial offering so users are aware of what they are signing up for.  As a minimum, you must clearly state the trial duration and what happens to data created during the trial period once the trial has ended. 

The Marketplace tracks trial usage and notifies service users that their trial is drawing to an end.

#### 4.6.3 Payments, Marketplace Operating Fees & Supported Regions

One of the biggest benefits provided by the Marketplace is that it removes the pain of managing billing and payments. A user pays a fee to use your content according to the pricing model you specify for it. The Marketplace meters usage of your content and sends a bill to the user.

The Mendix Marketplace is free to use unless you want to sell a paid content through it. When you sell your content via the Marketplace, Mendix charges a percentage of your gross revenue due to that service for the value-added services of purchasing, metering, and billing provided by the Marketplace.

The geographical regions supported by the Marketplace depend on the compliance requirements for your specific content and the location of your company.

Since the terms of payment, Marketplace operating fees, and supported regions are highly dependent on your content, please contact *DIS_AppServices_Supplier_Team@mendix.com* to discuss your requirements in more detail.

## 5 Submitting Your Content

At this stage, you have signed up as a Mendix Vendor and confirmed the commercial feasibility of your content, so you are technically ready to publish your content in the Marketplace.

### 5.1 Preparing a Draft in the Marketplace

While you are developing your content, it is a good practice to [create a draft version](/appstore/general/share-app-store-content/#draft) in the Marketplace with basic information such as name, description, and keywords. Then you will be prepared to publish your content to the Marketplace as soon as you finish creating it. 

Remember that your listing represents your company brand, so be sure to keep it updated, use quality images, and clearly explain the benefits of your content. For more information, see the [Adding New Marketplace Content](/appstore/general/share-app-store-content/#adding) section of *How to Share Marketplace Content*.

### 5.2 Completing the Final Checklist

As a helping hand, the checklist below presents the final items to consider when successfully publishing your content.

**Dependencies**

* Provide a list of resources and dependencies from the Marketplace that might be needed to use your content.
* Verify the listed dependencies are compatible with your content.

**Technical Readiness**

* Make sure you have prepared your content according to the [Marketplace content development guidelines](/appstore/general/share-app-store-content/#guidelines).
* Verify  your content for errors and warnings before submitting it to Marketplace. Warnings are accepted, but they are not recommended.
* While importing the content, there might still be errors that exist, because it is expected that the user needs to hook up some information from their existing modules into the new content. Make sure you explain how to set up the content and how to address all errors in the [content's documentation](/appstore/general/share-app-store-content/#doc) when you are preparing for publication. There should be no errors displayed upon importing the content that do not have an explanation.

**Accurate Metadata**

* Users should know what they are getting when they download or buy your content, so make sure all of your content's metadata (including privacy information, content description, and screenshots) is complete and accurately reflects the content's core experience. Remember to keep this up-to-date with new versions.
* Include detailed explanations of non-obvious features and include supporting documentation where appropriate.
* Make sure your [Mendix Profile](/developerportal/mendix-profile/) is up-to-date so that you can be contacted about your submission if necessary.
* By default, you will see a template for the content's documentation, so make sure you update all the sections. If the template is not provided for any reason, make sure you provide all the details as described in the [Adding New Marketplace Content](/appstore/general/share-app-store-content/#doc) section of *How to Share Marketplace Content*. In addition, ensure the styling (for example, font size, spacing, indentation) and headings for this documentation content are consistent.
* Spell-check the content you are about to submit

**Versioning**

* Verify the content works well for the specified Studio Pro version it is marked as being compatible with.
* Keep the versioning pattern consistent in terms of naming and version numbers for your content [releases](/appstore/general/share-app-store-content/#updating).
* Provide [release notes](/appstore/general/share-app-store-content/#package) for the content release.
* Keep your content up to date with new versions.

**Branding**

* Make sure [screenshots](/appstore/general/share-app-store-content/#screenshot) show the content in use (and not merely the name, login page, or splash screen). These can also include text and image overlays.
* Screenshots should be of a similar size (if possible).
* Do not upload any blurred or trimmed screenshots or other images.
* Ensure the logo and images of your content always relates to its functionality. Images uploaded that do not relate to your content's functionality will lead to the rejection of your content during the submission review.

**General**

* Include a *README* snippet and *USEME* folders that will help with using the content.
* Make sure there are no unnecessary dependencies bundled when exporting the module from Studio Pro. For example, if the module only mentions needing a *.jar* file named *fancystuff.jar* but the *userlib* folder includes 10 other *.jar* files, remove these unnecessary dependencies.
* If you try to manipulate the Mendix Marketplace system (for example, by stealing user data, copying another developer’s work, or manipulating ratings), your content will be removed from the Marketplace.
* Update your content regularly and support it as defined in its SLA. To ensure the quality of Marketplace content, Mendix monitors the status of content, and we will contact you if our data suggests your content is due for an update.

**Picking a license** 

* Ensure that as the supplier, you determine the appropriate license for your content, which is an agreement between you, the supplying company, and the company of the user consuming it. We provide a default list of license types for you to choose from, or you can add a **License** bulletin on the [Documentation](/appstore/general/share-app-store-content/#doc) tab if you need your users to accept your own commercial terms and conditions.

**Setting pricing plan**

* The [pricing model](#pricing) you choose for your content determines what information you need to supply when publishing it. This specifies how the content is provisioned so that the Marketplace can use that information to catalog, meter, and bill the users of your content. 

## 6 After You Submit Your Content

When your content is submitted to the Marketplace, [Mendix reviews it for approval](/appstore/general/share-app-store-content/#approval). This review is vital to maintaining high-quality Marketplace content and an improved overall user experience.

Mendix's mission in regards to the governance of Marketplace content is to manage quality while keeping the submission process as frictionless as possible. We achieve this by maintaining the comprehensive set of guidelines above, which when followed will maximize your chances of being approved for publication right away. The more complex your content is, the more likely it will require multiple approval iterations to get it Marketplace-ready. We are on hand to advise you throughout the process.

You can keep track of your submission by subscribing to receive status notifications. If you need more help, contact *DIS_AppServices_Supplier_Team@mendix.com*.

Once your content is available in the public Marketplace, you can gain insights into its usage through the [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) and [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) pages. You can engage with your customers as they use your content via [Reviews](/appstore/general/app-store-overview/#my-reviews).
