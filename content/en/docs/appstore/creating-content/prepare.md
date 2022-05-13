---
title: "Prepare Your Commercial Content to Sell"
url: /appstore/creating-content/prepare/
category: "Creating Content"
weight: 2
linktitle: "Prepare Your Content to Sell"
description: "Describes how to prepare your your commercial content to sell in the Mendix Marketplace."
tags: ["marketplace", "vendor", "app service"]
aliases:
    - /appstore/general/sell.html
    - /appstore/creating-content/as-sell.html
    - /appstore/general/sell
    - /appstore/creating-content/as-sell
---

## 1 Introduction

To bring your commercial product to the Mendix Marketplace, you need to first sign up as a [Mendix Vendor](/appstore/creating-content/vendor-program/). Once that process is complete, you need to prepare your content to sell in the Marketplace.

{{% alert color="warning" %}}
The process for becoming a vendor is currently restricted to Beta suppliers, so you have to be part of the Mendix Vendor Beta program.
{{% /alert %}}

This how-to will teach you how to do the following:

* Make your commercial content ready to sell on the Marketplace
* Complete specific tasks before you submit, as you submit, and after you submit your content to the Marketplace

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Participate in the [Mendix Vendor Program](/appstore/creating-content/vendor-program/)

## 3 Making Your Content Marketplace-Ready

The Marketplace provides a trustworthy experience for sharing and consuming content.  This is achieved through proven curation and governance processes as well as compliance checks conducted at the point of consumption. To walk you through the process of submitting content to the Marketplace, the intuitive [Upload Content](/appstore/general/share-app-store-content/#adding) wizard provides steps for adding and publishing your content.

Mendix uses the industry-standard [Open Service Broker API (OSB API)](https://www.openservicebrokerapi.org/) to enable automatically provisioning, de-provisioning, updating, and connecting users to your content.

{{< figure src="/attachments/appstore/creating-content/prepare/journey.png" >}}

To help us maintain the high quality of content available on the Marketplace, we provide clear guidelines below for what is necessary when preparing and submitting your content. Use these comprehensive resources to turn your idea into reality by learning how to design, develop, market, and monetize your content and get support via best practices and success stories from like-minded Mendix Vendors.

## 4 Submission Prerequisites

### 4.1 OSB API Compatibility for Content

Prior to uploading your product in the public Mendix Marketplace, there are certain technical requirements that need to be considered in order to establish a successful end-to-end flow between end-users and you as a content provider.

For non-downloadable components (for example, app services), Mendix requires a service broker configuration during the service development. This configuration handles such processes as the following: 

* Mapping required pricing plans with service feature limits
* Allowing for the provisioning of your service to customers
* Granting access to your service to customers by generating and using access keys
* Getting the consumption usage details of your customers
* Providing usage insights to customers on their consumption
* Allowing for controlling the consumption as part of the defined plan

This section explains what the service broker is, what the technical requirements are, and how you as a service provider can configure the service broker.




#### 4.1.1 Creating the Service Broker

Service broker is set of API endpoints based on OSB specification, which can be used to provision, gain access to and manage service offerings.
The service broker will help service providers to expose their services and define plans to users.

All the service brokers should follow Open Service Broker API (v2.14) as a Standard HTTP(S) interface.
Below you can find the API’s that platforms consume from any Service Broker.

**Catalog Management Implementation**

* Catalog Management contains various Service Offerings and Service Plans with some additional parameters. For implementing Catalog Management, service broker should create catalog API for onboarding broker services and plans to platform. 
* Request details:  `GET /v2/catalog`
        Below is the sample catalog response
        
	
        {"services": [{
                                "id": "test-id",
                                "name": "test-name",
                                "description": "test-description",
                                "bindable": true,
                                "bindings_retrievable": false,
                                "plans": [{
                                                "id": "test-plan-id",
                                                "name": "test-plan-name",
                                                "description": "test-description",
                                                "free": false }],
                                "metadata": {
                                        "features": [{
                                                        "id": "test-feature-id",
                                                        "name": "test-feature-name",
                                                        "type": "number",
                                                        "metric_reported": true,
                                                        "unit_of_measure": "GB"
                                                }]}}]}

**Synchronous and Asynchronous Operation**

* Support for synchronous and asynchronous response operations may vary by Service Offering, even by Service Plan. 
* Synchronous: To execute a request synchronously, the Service Broker need only return the usual status codes: `201 Created` for provision and bind, and `200 OK` for update, unbind.
* Asynchronous: If the service should be in asynchronous, then the query parameter `accepts_incomplete=true` MUST be included the request.Service Broker request MUST return the asynchronous response with `202 Accepted`.

Note: Document for reference of Synchronous and Asynchronous. Resource Management Platform supports Asynchronous and Synchronous Operations for Provisioning Management, and only support Synchronous for Binding Creations.

**Provisioning Management**

Create Service Instance:
* Provisioning management is mainly helpful for Instance Provision. Instance provisioning will be done using Service Id and Plan Id. For every Instance Provision request the instance id should be generated uniquely. 
* As Provisioning request contains service and plan id, Instance provision can be synchronous or asynchronous call. 
* For all the asynchronous call, broker will send the status as In-progress, once completion of successful process, the status is updated at broker side. Platforms will connect with Service Brokers for last instance operation status using Last Operation API. 
* Request Details  `PUT /v2/``service_instances/:instance_id`  

Note: Sample Request, Route, parameters and Response for Instance Provisioning. 

Update of a Service Instance:
* Users can enable upgrade or downgrade their Service instance to other plans by modifying parameter (plan_updateable: true) in it’s service catalog.
* Request Details  `PATCH /v2/``service_instances/:instance_id`  

Note: Sample Request, Route, Parameters and Response for Updating Service Instance.

Fetch Service Instance:
* If service catalog endpoint response contains instance_retrievable as true, then brokers must support this endpoint for all plans of the services. If instance_retrievable is mentioned as false, then Platforms should not attempts to call the endpoint from broker.
* Request Details  `GET /v2/``service_instances/:instance_id`  

Note: Sample Request, Route, Parameters and Response for Fetching Service Instance.

**Binding Management**

Binding Creation:
* This End point is dependent on how the parameters are defined in Service catalog. If bindable is declared as true for a service or plan in catalog endpoint, then brokers must implement Service Bindings. 
* Binding creation API’s can be in synchronous or asynchronous calls based on services/plans set by the Service Brokers.
* Request Details  `PUT /v2/``service_instances/:instance_id/service_bindings/:binding_id`  

Note: Sample Request, Route, Parameters and Response for Binding Creation.

Fetching a Service Binding:
* Service brokers must support this end point if bindings_retrievable is declared as true in service catalog endpoint
* Request Details  `GET /v2/``service_instances/:instance_id/service_bindings/:binding_id`  

Note: Request, Route, Parameters and Response for Fetching a service Bindings.

**Deprovisioning**

Instance Delete:
* Deprovisioning API is helpful for deleting any Service instance from broker. it MUST delete any resources it created during the provision. Usually this means that all resources are immediately reclaimed for future provisions.
* Request Details  `DELETE /v2/``service_instances/:instance_id`  

Note: Sample Request, Route and Response for Deprovision of Instance.

**Unbinding**

Binding Delete:
* When a Service Broker receives an unbind request from a Platform, it MUST delete any resources associated with the binding. In the case where credentials were generated, this might result in requests to the Service Instance failing to authenticate.
* Service Brokers that do not provide any bindable services or plans do not need to implement this endpoint.
* Request Details  `DELETE /v2/``service_instances/:instance_id/service_bindings/:binding_id`  

Note: Sample Request, Route and Response for Unbinding

#### 4.1.2 Service Broker Template

To support you in Service Broker configuration, we have created a template, which you can use together with the learning material below. This information will help you understand the configuration requirements and allow you to implement the knowledge to your service development.

Template *provides skeleton* for following Service Broker API implementation:

* Advertising a catalog of their service offerings and plans
* Provisioning (creating or updating) service instances
* Creating bindings between a service instance and a client application
* Deleting bindings between a service instance and a client application
* Deprovisioning (deleting) service instances

**How to create Service broker using skeleton**

*Clone this repository*
* Use following command to clone this repository
    git@ssh.gitlab.rnd.mendix.com:appservices/appserviceresourcemanager/sample-service-broker/service-broker-skeleton.git

Note: For Service Specific Implementation user need to update code between `// BEGIN USER CODE` and `// END USER CODE`
*Catalog Management*

  Catalog management is about defining service and plan.
  Here update the service and plan details:

![](https://paper-attachments.dropbox.com/s_EE9C13CEAA495AEBCD14B970B275A2C1ACA57844CCA1E0AC2DF19A844D0F4DF0_1651059241742_image.png)

*Instance Service Implementation*

  Service instance is an instantiation of a Service Offering and Service Plan. There are several methods related to service instance.

  Navigate to InstanceService.java and notice method implementation for service instance lifecycle such as create instance, update instance, delete instance etc. For example, `createServiceInstance` method to provision service instance

![](https://paper-attachments.dropbox.com/s_EE9C13CEAA495AEBCD14B970B275A2C1ACA57844CCA1E0AC2DF19A844D0F4DF0_1651058770926_image.png)

  For mono details please refer Mono.
  Similarly, there are following methods to manage lifecycle on instance:
* updateServiceInstance - for asynchronous update of instance
* deleteServiceInstance - for asynchronous deletion of instance
* getServiceInstance - to  retrieve the details of the specified service instance
* getLastOperation - determine the status of the operation in progress respectively.

**Service Instance Binding Implementation**
Service Binding - Represents the request to use a Service Instance. Service Bindings will often contain the credentials that can then be used to communicate with the Service Instance.

Navigate to InstanceBindingService.java and notice method implementation for Service Bindings lifecycle such as create binding, delete bindings etc.

For example, `createServiceInstanceBinding` method to create a binding for provisioned service instance
        
![](https://paper-attachments.dropbox.com/s_EE9C13CEAA495AEBCD14B970B275A2C1ACA57844CCA1E0AC2DF19A844D0F4DF0_1651058902556_image.png)

Similarly, there are following methods related to service bindings such as
* deleteServiceInstanceBinding - delete any binding  credentials
* getServiceInstanceBinding - to retrieve the details of the specified service binding

For additional assistance and an example of how to provision and bind an app to a logging service, contact *AppServices_Supplier_Team@mendix.com*.






### 4.2 Identity & Access Management (IAM)

When you submit your content to the Marketplace, you can easily integrate its IAM system with the Mendix Platform.

Firstly, you need to register your content’s service broker to allow it to be automatically provisioned when it is subscribed to. In this way, the service broker of the content creates a tenant within the content before creating a set of client credentials that are used to interact with the tenant.

Once a subscribing user has the credentials, their Mendix app can use them to request a token from the IAM system of your content to enable it to interact with the tenant in the content via APIs.

The Mendix Platform’s foundational IAM service is evolving quickly to support "consuming" authentication, authorization decisions, and user profiles. This allows you to focus on your domain logic while Mendix manages the identities and access policies. Additional IAM capabilities will include the following:

* Enabling Mendix developers and app end-users to use the content supplier’s IAM system to have a single sign-on (SSO) experience between apps, content, and the Mendix Platform
* Enabling Mendix developers and app end-users to use the Mendix IAM system to have an SSO experience between apps, content, and the Mendix Platform
* Enabling end-user for access control to your content from within an app

For more information about IAM integration, contact *AppServices_Supplier_Team@mendix.com*.

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

If you are unclear what this means to you and your content, there are useful resources online.  If you are stuck, contact *AppServices_Supplier_Team@mendix.com* for guidance.

### 4.6 Pricing & Free Trials {#pricing}

As a Mendix Vendor, it is important that you choose the pricing model that will maximize the business opportunity for your content. Once you have decided on your preferred pricing model and whether you want to offer your content as a free trial, you can apply these these options to your content via steps in the Add Content wizard.

#### 4.6.1 Pricing Models

The Marketplace supports three pricing models:

* **Flat Fee** –  As you submit your content, you specify the flat-fee price.
* **Per User**  – As you submit your content, you specify price per user per month. 
* **Usage-Based** – In this model, users pay for what they consume. In this way, it directly relates the price your users pay for your content to their usage. The more they use, the more they pay. You can determine the metrics on which the cost is based, along with the price per unit for each of the metrics.

Since you need to specify the plan in your service broker implementation before you submit your content, contact *AppServices_Supplier_Team@mendix.com*.

#### 4.6.2 Free Trials

The benefits of a free trial are well know as a means to increase user adoption. Having offered trials for much of our own content, Mendix recommends that you consider offering a trial for yours, too.

The Marketplace supports time-based trials, so you must clearly define the terms and conditions of your trial offering so users are aware of what they are signing up for.  As a minimum, you must clearly state the trial duration and what happens to data created during the trial period once the trial has ended. 

The Marketplace tracks trial usage and notifies service users that their trial is drawing to an end.

#### 4.6.3 Payments, Marketplace Operating Fees & Supported Regions

One of the biggest benefits provided by the Marketplace is that it removes the pain of managing billing and payments. A user pays a fee to use your content according to the pricing model you specify for it. The Marketplace meters usage of your content and sends a bill to the user.

The Mendix Marketplace is free to use unless you want to sell a paid content through it. When you sell your content via the Marketplace, Mendix charges a percentage of your gross revenue due to that service for the value-added services of purchasing, metering, and billing provided by the Marketplace.

The geographical regions supported by the Marketplace depend on the compliance requirements for your specific content and the location of your company.

Since the terms of payment, Marketplace operating fees, and supported regions are highly dependent on your content, please contact *AppServices_Supplier_Team@mendix.com* to discuss your requirements in more detail.

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

You can keep track of your submission by subscribing to receive status notifications. If you need more help, contact *AppServices_Supplier_Team@mendix.com*.

Once your content is available in the public Marketplace, you can gain insights into its usage through the [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) and [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) pages. You can engage with your customers as they use your content via [Reviews](/appstore/general/app-store-overview/#my-reviews).
