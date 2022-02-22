---
title: "Sell Your App Service in the Marketplace"
category: "Creating Content"
menu_order: 1
description: "Describes how to start selling your app service in the Mendix Marketplace."
tags: ["marketplace", "vendor", "app service"]
aliases:
    - /appstore/general/sell.html
---

## 1 Introduction

Whether you are an established ISV, an ambitious startup, or a pioneering independent developer, by [sharing](/appstore/general/share-app-store-content) your [app service](/appstore/app-services/) in the Mendix Marketplace, you will create customer value by fueling the resource library for Mendix developers. The process is simple: sign up as a [Mendix Vendor](#vendor), design and build your app service, edit your listing, and submit it to the Marketplace today. In return, you will gain the following benefits:

![](attachments/as-sell/benefits.png)

**This how-to will teach you how to do the following:**

* Join the Mendix Vendor Program
* Make your app service ready to sell on the Marketplace
* Complete specific tasks before you submit, as you submit, and after you submit your app service to the Mendix Marketplace

## 2 Becoming a Mendix Vendor {#vendor}

The [Mendix Vendor Program](https://www.mendix.com/marketplace-vendor-program/) includes opportunities for a variety of types of partners (for example, App Service Vendors, Mendix Solution Vendors, and Startups). This guide focuses on selling app services, but if you are a startup or you want to sell a full Mendix solution, read on to learn more.

Whether you are supplying an app service as an individual with your own business or you are acting on behalf of your organization, you will be in great company by joining the Mendix Vendor Program.  We only need some key information from you before you are ready to offer your product through the Mendix Marketplace. Mendix will work with you throughout the application process to make your submission experience as simple as possible.

### 2.1 Prerequisites

Before you can create a Mendix Vendor account, there are a few prerequisites to take care of. For paid app services, whether you are an individual supplier with your own business or you are supplying on behalf of your company, you need a [Mendix Platform account](https://signup.mendix.com/) before you can create a Mendix Vendor account.

In addition to defining the business case for your app service (including how it will be licensed, priced, and supported), make sure you meet the export control requirements for your product. We know export control can be confusing, so if you are unclear on what you need to do, contact Mendix at *DIS_AppServices_Supplier_Team@mendix.com*.

### 2.2 Applying to the Mendix Vendor Program

Whether you are an individual supplier with your own business or you are supplying an app service on behalf of your company, you need to [apply to the Mendix Vendor Program](https://www.mendix.com/marketplace-vendor-program/#contactForm).

Since your Mendix Vendor account will be associated with your Mendix ID, make sure you have a [Mendix Platform account](https://signup.mendix.com/). 

When applying to the program, you will be asked for basic information, including your legal name and address. This information is used to check whether you want to sell your app service or offer it for free.

| Account Detail | Description |
| --- | --- |
| Account Owner | The account creator’s email address. |
| Logo | Your supplier logo. |
| Name | Supplier name (could be a company, brand, or individual). |
| Description | Describe your purpose, products, and services. |
| Company Name | The legal name of the entity that will sell or offer your free service. |
| Company Address | The legal address of the entity that will sell or offer your free service. |

As the owner of the Mendix Vendor account, you must have permission to legally bind your company to Mendix.

If you want to offer a paid service, you must also provide the following details:

| Account Detail | Description |
| --- | --- |
| Bank Name | The name of the branch where the account is held. |
| Bank Address | The address of the branch where the account is held. |
| Account Number | The account number for the legal entity or individual. |
| Account Holder Name | The name registered with the account. |

### 2.3 Mendix Vendor License Agreement {#vendor-license}

Whether you are offering a free or paid app service through the Marketplace, you need to accept our Mendix Vendor License Agreement, which is an agreement between Mendix and you as a Mendix Vendor within the Mendix Vendor Program.

For ease of reference, here are some of the main points of the license agreement you need to be aware of:

* App services must be free from any known security vulnerabilities
* App services must not contain default passwords, authorization keys, or any other credentials
* App services must not include software that collects and exports customer data without the customer's knowledge and express consent
* You must define the applicable laws, treaties, regulations for your app service, including, without limitation, those related to export control, data privacy, international communications, and the transmission of technical or personal data
* App services must be production-ready and must include a defined support policy
* Mendix reserves the right to reject app services that do not comply with these guidelines or the requirements described in the license agreement

### 2.4 Legal & Compliance Checks

The company registered with your account is the legal entity against which Mendix will be bound. For this reason, Mendix performs screening checks to ensure we are legally permitted to undertake business transactions together.

In addition, before your app service can be published in the Marketplace, it must be classified for export to the countries in which it will be sold and for how it will be used. For details, see the [Export Control](#export-control) section below.

For more information on what you need to do as a Mendix Vendor to submit an app service, see the sections below.

## 3 Making Your App Service Marketplace-Ready

The Marketplace provides a trustworthy experience for sharing and consuming app services.  This is achieved through proven curation and governance processes as well as compliance checks conducted at the point of consumption. To walk you through the process of submitting content to the Marketplace, the intuitive [Upload Content](/appstore/general/share-app-store-content#adding) wizard provides steps for adding and publishing your app service.

Mendix uses the industry-standard [Open Service Broker API (OSB API)](https://www.openservicebrokerapi.org/) to enable automatically provisioning, de-provisioning, updating, and connecting users to your app service.

![](attachments/as-sell/journey.png)

To help us maintain the high quality of content available on the Marketplace, we provide clear guidelines below for what is necessary when preparing and submitting your app service. Use these comprehensive resources to turn your idea into reality by learning how to design, develop, market, and monetize your app service and get support via best practices and success stories from like-minded Mendix Vendors.

## 4 Submission Prerequisites

### 4.1 OSB API Compatibility for App Services

To submit an app service to the Marketplace, it needs to be compatible to the OSB API.  This allows the service to be automatically provisioned, and it provides the connection details for users when they try or buy it.

Although OSB API supports endpoints for many operations (as specified in the [Open Service Broker API specification](https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md), these are the three main concepts to consider while implementing your service broker for your app service:

* **Service Catalog** (`GET /v2/catalog`) – for listing your services available to the broker
* **Provisioning** (`PUT /v2/service_instances/{instance_id}`) – for provisioning your service
* **Binding** (`PUT /v2/service_instances/{instance_id}/service_bindings/{binding_id}`)  – for creating the connection and connection details to connect your service to an application during provisioning

For additional assistance and an example of how to provision and bind an app to a logging service, contact *DIS_AppServices_Supplier_Team@mendix.com*.

### 4.2 Identity & Access Management (IAM)

When you submit your app service to the Marketplace, you can easily integrate its IAM system with the Mendix Platform.
Firstly, you need to register your app service’s service broker to allow it to be automatically provisioned when it is subscribed to. In this way, the service broker of the app service creates a tenant within the app service before creating a set of client credentials that are used to interact with the tenant.

Once a subscribing user has the credentials, their Mendix app can use them to request a token from the IAM system of your app service to enable it to interact with the tenant in the app service via APIs.

The Mendix Platform’s foundational IAM service is evolving quickly to support "consuming" authentication, authorization decisions, and user profiles. This allows you to focus on your domain logic while Mendix manages the identities and access policies. Additional IAM capabilities will include the following:

* Enabling Mendix developers and app end-users to use the app service supplier’s IAM system to have a single sign-on (SSO) experience between apps, app services, and the Mendix Platform
* Enabling Mendix developers and app end-users to use the Mendix IAM system to have an SSO experience between apps, app services, and the Mendix Platform
* Enabling end-user for access control to your app service from within an app

For more information about IAM integration, contact *DIS_AppServices_Supplier_Team@mendix.com*.

### 4.3 Metering

App service metering consists of the following:

* Usage-based metering (via the API gateway)
	* API (payload, count)
	* An asynchronous service 
* Active users (via Mendix Runtime)
	* Widget
* Metering (via the app service’s own solution) 

### 4.4 Product Documentation

Comprehensive product documentation can have a significant impact on the success of your app service product. This is why we check for its completeness as part of our review prior to your product being published in the Marketplace.

Document how your app service is used while the app service is being developed (for example, using API documentation, release notes, and technical reference documentation). You should also explain how your app service is designed to behave for users through typical use cases and best practices.

We recommend you look at examples of widget, connector, and module documentation in the [Marketplace Guide](/appstore/) when writing your documentation.

### 4.5 Export Control {#export-control}

Export control is an area of legislation that regulates and restricts the export of goods, information, software, and technology that could be potentially useful for purposes that are contrary the interest of the exporting country. These items are considered to be *controlled*. 

If your app service is a controlled item, Mendix needs to ensure it is prevented from being sent to destinations where it may be used in a harmful way. In these cases, you typically need to request an export control license from a local government department, and you need to confirm ownership of such a license before we can list your app service in the Marketplace.

If you are unclear what this means to you and your app service, there are useful resources online.  If you are stuck, contact *DIS_AppServices_Supplier_Team@mendix.com* for guidance.

### 4.6 Pricing & Free Trials {#pricing}

As a Mendix Vendor, it is important that you choose the pricing model that will maximize the business opportunity for your app service. Once you have decided on your preferred pricing model and whether you want to offer your app service as a free trial, you can apply these these options to your app service via steps in the Add Content wizard.

#### 4.6.1 Pricing Models

The Marketplace supports three pricing models:

* **Flat Fee** –  As you submit your app service, you specify the flat-fee price.
* **Per User**  – As you submit your app service, you specify price per user per month. 
* **Usage-Based** – In this model, users pay for what they consume. In this way, it directly relates the price your users pay for your app service to their usage. The more they use, the more they pay. You can determine the metrics on which the cost is based, along with the price per unit for each of the metrics.

Since you need to specify the plan in your service broker implementation before you submit your app service, contact *DIS_AppServices_Supplier_Team@mendix.com*.

#### 4.6.2 Free Trials

The benefits of a free trial are well know as a means to increase user adoption. Having offered trials for many of our own app services, Mendix recommends that you consider offering a trial for yours, too.

The Marketplace supports time-based trials, so you must clearly define the terms and conditions of your trial offering so users are aware of what they are signing up for.  As a minimum, you must clearly state the trial duration and what happens to data created during the trial period once the trial has ended. 

The Marketplace tracks trial usage and notifies service users that their trial is drawing to an end.

#### 4.6.3 Payments, Marketplace Operating Fees & Supported Regions

One of the biggest benefits provided by the Marketplace is that it removes the pain of managing billing and payments. A user pays a fee to use your app service according to the pricing model you specify for it. The Marketplace meters usage of your app service and sends a bill to the user.

The Mendix Marketplace is free to use unless you want to sell a paid app service through it. When you sell your app service via the Marketplace, Mendix charges a percentage of your gross revenue due to that service for the value-added services of purchasing, metering, and billing provided by the Marketplace.

The geographical regions supported by the Marketplace depend on the compliance requirements for your specific app service and the location of your company.

Since the terms of payment, Marketplace operating fees, and supported regions are highly dependent on your app service, please contact *DIS_AppServices_Supplier_Team@mendix.com* to discuss your requirements in more detail.

## 5 Submitting Your App Service

At this stage, you have signed up as a Mendix Vendor and confirmed the commercial feasibility of your app service, so you are technically ready to publish your app service in the Marketplace.

### 5.1 Preparing a Draft in the Marketplace

While you are developing your app service, it is a good practice to [create a draft version](/appstore/general/share-app-store-content#draft) in the Marketplace with basic information such as name, description, and keywords. Then you will be prepared to publish your app service to the Marketplace as soon as you finish creating it. 

Remember that your listing represents your company brand, so be sure to keep it updated, use quality images, and clearly explain the benefits of your app service. For more information, see the [Adding New Marketplace Content](/appstore/general/share-app-store-content#adding) section of *How to Share Marketplace Content*.

### 5.2 Completing the Final Checklist

As a helping hand, the checklist below presents the final items to consider when successfully publishing your app service.

**Dependencies**

* Provide a list of resources and dependencies from the Marketplace that might be needed to use your app service.
* Verify the listed dependencies are compatible with your app service.

**Technical Readiness**

* Make sure you have prepared your app service according to the [Marketplace content development guidelines](/appstore/general/share-app-store-content#guidelines).
* Verify  your app service for errors and warnings before submitting it to Marketplace. Warnings are accepted, but they are not recommended.
* While importing the app service, there might still be errors that exist, because it is expected that the user needs to hook up some information from their existing modules into the new app services. Make sure you explain how to set up the app service and how to address all errors in the [app service's documentation](/appstore/general/share-app-store-content#doc) when you are preparing for publication. There should be no errors displayed upon importing the app service that do not have an explanation.

**Accurate Metadata**

* Users should know what they are getting when they download or buy your app service, so make sure all of your app service's metadata (including privacy information, app service description, and screenshots) is complete and accurately reflects the app service's core experience. Remember to keep this up-to-date with new versions.
* Include detailed explanations of non-obvious features and include supporting documentation where appropriate.
* Select the **App Service** [type](/appstore/general/app-store-overview#types) for your app service.
* Make sure your [Mendix Profile](/developerportal/mendix-profile/) is up-to-date so that you can be contacted about your submission if necessary.
* By default, you will see a template for the app service's documentation, so make sure you update all the sections. If the template is not provided for any reason, make sure you provide all the details as described in the [Adding New Marketplace Content](/appstore/general/share-app-store-content#doc) section of *How to Share Marketplace Content*. In addition, ensure the styling (for example, font size, spacing, indentation) and headings for this documentation content are consistent.
* Spell-check the content you are about to submit

**Versioning**

* Verify the app service works well for the specified Studio Pro version it is marked as being compatible with.
* Keep the versioning pattern consistent in terms of naming and version numbers for your app service [releases](/appstore/general/share-app-store-content#updating).
* Provide [release notes](/appstore/general/share-app-store-content#version) for the app service release.
* Keep your app service up to date with new versions.

**Branding**

* Make sure [screenshots](/appstore/general/share-app-store-content#screenshot) show the app service in use (and not merely the name, login page, or splash screen). These can also include text and image overlays.
* Screenshots should be of a similar size (if possible).
* Do not upload any blurred or trimmed screenshots or other images.
* Ensure the logo and images of your app service always relates to its functionality. Images uploaded that do not relate to your app service's functionality will lead to the rejection of your app service during the submission review.

**General**

* Include a *README* snippet and *USEME* folders that will help with using the app service.
* Make sure there are no unnecessary dependencies bundled when exporting the module from Studio Pro. For example, if the module only mentions needing a *.jar* file named *fancystuff.jar* but the *userlib* folder includes 10 other *.jar* files, remove these unnecessary dependencies.
* If you try to manipulate the Mendix Marketplace system (for example, by stealing user data, copying another developer’s work, or manipulating ratings), your app services will be removed from the Marketplace.
* Update your app service regularly and support it as defined in its SLA. To ensure the quality of Marketplace content, Mendix monitors the status of app services, and we will contact you if our data suggests your app service is due for an update.

**Picking a license** 

* Ensure that as the supplier, you determine the appropriate license for your app service, which is an agreement between you, the supplying company, and the company of the user consuming it. We provide a default list of license types for you to choose from, or you can add a **License** bulletin on the [Documentation](/appstore/general/share-app-store-content#doc) tab if you need your users to accept your own commercial terms and conditions.

**Setting pricing plan**

* The [pricing model](#pricing) you choose for your app service determines what information you need to supply when publishing it. This specifies how the app service is provisioned so that the Marketplace can use that information to catalog, meter, and bill the users of your app service. 

## 6 After You Submit Your App Service

When your app service is submitted to the Marketplace, [Mendix reviews it for approval](/appstore/general/share-app-store-content#approval). This review is vital to maintaining high-quality Marketplace content and an improved overall user experience.

Mendix's mission in regards to the governance of Marketplace content is to manage quality while keeping the submission process as frictionless as possible. We achieve this by maintaining the comprehensive set of guidelines above, which when followed will maximize your chances of being approved for publication right away. The more complex your app service is, the more likely it will require multiple approval iterations to get it Marketplace-ready. We are on hand to advise you throughout the process.

You can keep track of your submission by subscribing to receive status notifications. If you need more help, contact *DIS_AppServices_Supplier_Team@mendix.com*.

Once your app service is available in the public Marketplace, you can gain insights into its usage through the **Subscriptions** overview in the [Marketplace](/appstore/general/app-store-overview#subscriptions). You can engage with your customers as they use your app service via [Reviews](/appstore/general/app-store-overview#my-reviews).
