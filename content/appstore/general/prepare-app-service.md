---
title: "Prepare Your App Service for the Marketplace"
category: "General Info"
menu_order: 30
tags: ["marketplace", "app service"]
description: "Describes how to make your app service Marketplace-ready."
---

## 1 Introduction

Whether you are an established ISV, an ambitious startup, or a pioneering independent developer, by [sharing](share-app-store-content) your app service in the Mendix Marketplace, you will create customer value by fueling the resource library for Mendix developers. The process is simple: sign up as a [Marketplace Vendor](#vendor), design and build your app service, edit your listing, and submit it to the Marketplace today. In return, you will gain the following benefits:

{{% todo %}}[**Verify slide to be included; need higher quality image; do not capitalize "app service"; add serial commas after "validation" in validation and maintenance" and after "legal" in "legal and compliance"**{{% /todo %}}

![](attachments/suppliers/benefits.png)

App services are domain-focused packaged business capabilities delivered as a collection of composable Mendix native UI components and APIs.  In other words, they are flexible building blocks with out-of-the-box integration into the Mendix development experience, enabling users to imagine new apps, extend the capability of existing apps, and significantly decrease time-to-value.

**This how-to will teach you how to do the following:**

* Join the Marketplace Vendor Program
* Make your app service Marketplace-ready

## 2 Becoming a Marketplace Vendor {#vendor}

The [Mendix Vendor Program](https://www.mendix.com/marketplace-vendor-program/) includes opportunities for a variety of types of partners (for example, ISVs, Strategic Alliance Partners, and Marketplace Partners). ISVs and Marketplace Partners are not mutually exclusive, because an ISV may also be a Marketplace Partner, and a Marketplace Partner may or may not be an ISV. If you have an app (or collection of apps) that solves a customer business problem, you should explore the Mendix ISV program for details on how to qualify to become an ISV and what solutions are relevant for the program. 

Whether you are supplying an app service as an individual with your own business or you are acting on behalf of your organization, you will be in great company by joining the Mendix Vendor Program.  We only need some key information from you before you are ready to offer your product through the Mendix Marketplace. Mendix will work with you throughout the application process to make your onboarding experience as simple as possible.


### 2.1 Prerequisites

Before you become a Marketplace Partner, there are a few prerequisites to take care of.  In addition to defining the business case for your app service (including how it will be licensed, priced, and supported), make sure you meet the export control requirements for your product.  We know export control can be confusing, so if you are still unclear on what you need to do, you can contact our Marketplace Compliance team.

{{% todo %}}[**How do they contact? Cannot include without direct contact info**{{% /todo %}}

## 3 App Service Guidelines

Mendix uses the industry-standard [Open Service Broker API](https://www.openservicebrokerapi.org/) to enable us to automatically provision, de-provision, update, and connect users to your app service. For more information on this method, see 


**(link to Technical Readiness section)**.

To walk you through the process of submitting content to the Marketplace, we’ve provided the Add Content wizard.  It’s an intuitive, step-by-step guide to adding and publishing your App Service.

Once you’ve submitted your App Service you can manage all business related to it, and you can access your commercial agreements and account information via the Partner Portal.  My Marketplace enables you to keep track of, and communicate with, Makers using your App Service. 

The Marketplace APIs [](http://)are also available for you to automate your workflow and access data about your App Service.


![](attachments/suppliers/3.png)




The Marketplace provides a trustworthy experience for sharing and consuming app services and other products.  This is achieved through proven curation and governance processes as well as compliance checks conducted at the point of consumption.

To help us maintain the high quality of content available on the Marketplace, we provide clear guidelines below for what is necessary when preparing and submitting your Marketplace-ready content. Use these comprehensive resources to turn your app service idea into reality by learning how to design, develop, market, and monetize your app service and get support via best practices and success stories from like-minded Marketplace Partners.

### Before You Submit

**Step 1: Pre-requisites**
**Technical**

**OSBAPI Compatibility**

To onboard an App Service to the Marketplace it needs to be compatible to OSBAPI.  This allows the service to be automatically provisioned and it provides the connection details for users when they try or buy it.
        
Although OSBAPI supports many endpoints for many operations as specified in the [OSBAPI specification](https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md), the three main concepts to consider while implementing your service broker for your App Service are:
        
1. **Service Catalog (GET /v2/catalog)** ****to list your services available to the broker
2. **Provisioning (PUT /v2/service_instances/{instance_id})** ****to provision your service
3. **Binding (PUT /v2/service_instances/{instance_id}/service_bindings/{binding_id})** ****this creates the connection and connection details to connect your service to an application during provisioning

For additional assistance, follow this link to see an example of how to provision and bind an application to a logging service [+Logging - As a App Service](https://paper.dropbox.com/doc/Logging-As-a-App-Service-5B6CSVzCohsUXj6tBrYYN)

**Identity and Access Management (IAM)**

When you onboard your App Service to the Marketplace you can choose how it integrates with the Mendix platform’s foundational IAM service.  In this way, you can ‘consume’ authentication, authorisation decisions and user profiles and focus on your domain logic, while we manage the identities and access policies. 

There are currently three models for integrating with Mendix IAM and it depends how your App Service is architected as to which model(s) is(are) most applicable.  Models 1 and 2 apply at an App/App Service level whereas model 3 applies at an individual user level:
        
- **Model 1 -** **Enable an App to communicate with your App Service via an API**
In this model Makers can use Mendix low code artefacts you supply within their Apps to invoke your API

- **Model 2 -** **Enable Makers and End Users to** **have** **a Single Sign-On (****SSO****)** ******e****xperience between Apps,** **App** **Services and** **the Mendix** **Platform**
This model is applicable when your App Service requires user identity.  For example, your App Service may support SSO when accessed by an end user from within an App, or when it’s being configured by a Maker at design time through a configuration user interface.

- **Model 3 -** **Enable end user a****ccess** **c****ontrol** **to your App S****ervice** **from within an** **App**
In this model, end user access to your App Service is managed centrally by the Mendix IAM service

For more information, follow this link [+Service provider - IAM requirements](https://paper.dropbox.com/doc/Service-provider-IAM-requirements-hooivk3hshSdZ1llrmxGm) 

**Metering**
- Usage based metering (via the API Gateway)
	- API (payload, count)
	- An asynchronous service 
- Active users (via the MX runtime)
	- Widget
- Metering (via service’s own solution) 
    
**Product Documentation**

**Commercial**

**Export Control** 

Export control is an area of legislation that regulates and restricts the export of goods, information, software and technology which could be potentially useful for purposes that are contrary the interest of the exporting country. These items are considered to be *controlled*. 
    
If your App Service is a controlled item we’ll need to ensure it is prevented from being sent to destinations where it may be used in a harmful way. In these cases you’ll typically need to request an export control license from a local government department, and you’ll need to confirm ownership of such a license before we can list your App Service on the Marketplace.
        
If you are unclear what this means to you and your App Service there are lots of useful resources online.  We recommend xyz.com and if you are still stuck you can contact our compliance team at compliance@mendix.com for guidance.

**App Service Pricing and Free Trials**

As a Marketplace Partner it’s important that you choose the pricing model that will maximise the business opportunity for your App Service. 

Once you’ve decided on your preferred pricing model and whether you want to offer it as a free trial, we’ve made the process of applying these options to your App Service simple by adding them as steps to the Add Content wizard.

**Pricing Models**
The Marketplace supports two pricing models, per-user subscription and usage based. It can be tricky to find a standard definition for these terms so we define them as:
    
- Per User
This is a model where a single user pays a fixed monthly price.  When a second user is added the monthly price doubles, and so on.
- Usage based
This is a model where users pay for what they consume. In this way it directly relates the price your users pay for your App Service to their usage; the more they use, the more they pay and conversely, the less they use, the less they pay.
        
When you onboard your App Service you can choose whether to have it metered by ‘payload size’ or ‘count’    
    
**Free Trials**
The benefits of a free trial are well documented as a means to increase user adoption, and having offered trials for many of our own App Services we recommend that you consider offering a trial for yours too.
    
The Marketplace supports time-based trials.  You must clearly define the Terms and Conditions of your trial offering so users are aware of what they are signing up to.  As a minimum you must clearly state the trial duration and what happens to data created during the trial period once the trial has ended. 
        
The Marketplace tracks trial usage and notifies service users that their trial is drawing to an end. Once their trial ends, your service will no longer be available to them until they subscribe to it.
        
**Payments**
One of the biggest benefits provided by the Marketplace is that it removes the pain of managing billing and payments.  A user pays a fee to use your App Service according to the pricing model you specify for it. The Marketplace meters usage of your App Service and sends a bill to the user.  You can see monthly billing reports in your Partner Portal and you’ll also be emailed them for completeness.
        
Under our standard Marketplace terms and conditions we support the following subscription/billing model:

| Subscription duration     | 12 months              |
| ------------------------- | ---------------------- |
| Subscription auto-renewal | Not Supported          |
| Billing period            | Monthly                |
| Billing day               | 15th day of each month |
| Billing timing            | In Arrears             |

**Marketplace Operating Fees**
The Mendix Marketplace is free to use unless you want to sell paid App Services through it. When you sell your App Service via the Marketplace, Mendix charges 20% of your gross revenue due to that service for the value-added services of purchasing, metering, and billing, and payment provided by the Marketplace.
    
See [+Mendix Ecosystem - The Composable Enterprise & PBC Monetization](https://paper.dropbox.com/doc/Mendix-Ecosystem-The-Composable-Enterprise-PBC-Monetization-SYmPTLdAc3p7NztBCqnMI) 
    
**Supported Regions**
Subject to the compliance requirements for your specific App Service, the Marketplace supports global access to free, and trials of paid, App Services.
        
To sell paid App Services you must be a permanent resident or a legal business entity in one of the following countries:

| Netherlands |
| ----------- |
| …           |
|             |

- Licensing Agreement
	- App Services must comply with all legal requirements in any location where you make them available…
- Support Agreement
- FOSS?

**Step 2: Create Account**

**Basic Account Information**
Whether you are an individual App Service supplier with your own business or you are supplying an App Service on behalf of your company, you’ll need to create a Marketplace Partner Account.

Since your Marketplace Partner Account is associated with your Mendix ID you first need to create a [Mendix Platform Account](https://signup.mendix.com/).  When creating your Marketplace Partner Account we ask for basic information including your legal name and address.  We will use this information to check whether you want to sell your App Service, or offer it for free.  As the creator of the account you must have permission to legally bind your company to Mendix.

| **Marketplace Partner Account** | --- |
| --- | --- |
| Account Owner | Account creator’s email address |
| Logo |  |
| Name | Supplier name (could be a company/brand/individual) |
| Description | Describe your (company’s) purpose, products and services |
| Company Name | The legal name of the entity which will sell or offer your free service |
| Company Address | The legal address of the entity which will sell or offer your free service |

**Legal and Compliance Checks**
The Company registered against your account is the legal entity against which Mendix will be bound.  For this reason we will perform screening checks to ensure we’re legally permitted to undertake business transactions together.

The checks involved are:

- SPS

**Step 3: Commercial Setup**

**Marketplace Partner License Agreement**
Whether you are offering a free or paid App Service through the Marketplace you’ll have to accept our Marketplace Partner License Agreement which is an agreement between Mendix and you as a Marketplace Partner within the Marketplace Partner Program.

For ease of reference, here are some of the salient points of the license agreement you need to be aware of:

- App Services must be free from any known security vulnerabilities
- App Services must not contain default passwords, authorization keys or any other credentials
- App Services must not include software that collects and exports customer data without the customer's knowledge and express consent
- App Services must be production-ready and must include a defined support policy
- Mendix reserves the right to reject App Services that do not comply with these guidelines or the requirements described in the license agreement

Similar concept to the Developer Program License Agreement within the [Apple Developer Program](https://help.apple.com/app-store-connect/#/devb6df5ee51) and the [Atlassian Marketplace Partner Agreement](https://www.atlassian.com/licensing/marketplace/partneragreement)   

**Seller License Agreement**
For paid App Services you’ll have to accept our Marketplace Seller Agreement and provide Seller Account Information including your bank name, address, account number, and tax ID.  ,

Similar concept to the Paid Applications agreement within the [Apple Developer Program](https://help.apple.com/app-store-connect/#/devb6df5ee51)

**Seller Account Information**

| **Seller Account Information** | --- |
| --- | --- |
| Bank Name | Name of branch where account is held |
| Bank Address | Address of branch where account is held |
| Account Number | Account number for the legal entity or individual who signed the Seller License Agreement |
| Account Holder Name | The name registered against the account                                                   |
### As You Submit

While you are developing your App Service, it’s good practice to create a draft version with basic information such as name, description, and keywords in preparation for publishing it to the Marketplace as soon as you’ve finished creating it. 

Remember your listing represents your brand so be sure to keep it updated, use quality images and clearly explain the benefits of your App Service. Refer to section 4 of https://docs.mendix.com/appstore/general/share-app-store-content for a complete list of supported metadata, and Brand Guidelines to learn more about our brand guidelines  

**Step 4:** **Add your App Service**
At this stage you’ve confirmed the commercial feasibility of your App Service, you’ve signed up as a Marketplace Partner, and you’re technically ready to onboard it to the Marketplace.

As a helping hand we’ve provided this checklist of items to consider as the final step to successfully listing your App Service:

- **Dependencies** -
    [ ] Provide a list of resources/dependencies from Marketplace that might be needed to use your component
    [ ] Make sure the dependency mentioned is compatible with your component
- **Technical Readiness** -
    [ ] While importing the component, there might still be errors that exist, because it is expected that the end-user needs to hook up some information from their existing modules into the new components. This should be fine, as long as there is an explanation in the Documentation section of “how to set-up” the component
    [ ] Errors existing with no explanation of how to address them should not exist, when importing the component
    [ ] Test your component for crashes and bugs
- **Accurate Metadata** - 
    [ ] Customers should know what they’re getting when they download or buy your app, so make sure all your app metadata, including privacy information, your component description, screenshots, and previews accurately reflect the components core experience and remember to keep them up-to-date with new versions
    [ ] Ensure that all app information and metadata is complete and accurate
    [ ] Include detailed explanations of non-obvious features and including supporting documentation where appropriate
    [ ] Select the most appropriate category for your app, and check out the [Marketplace Store Category Definitions](https://paper.dropbox.com/doc/App-Store-Quick-Reference-Card--BI1ABkUNXWwfPdO7~ND3lD4iAg-EvYnmdiq6zCsS2ZBe0jDM) if you need help. If you’re way off base, we may change the category for you
    [ ] [Update your contact information](https://sprintr.home.mendix.com/link/profilesettings/generalinfo) in case component Review needs to reach you
    [ ] Check the details on how to select the details while submitting a component follows [guidelines](https://docs.mendix.com/appstore/general/share-app-store-content#submission) as mentioned in the documentation
    [ ] Spell check the content you are about to submit
- **Versioning -**  
    [ ] Component should work fine for the specified Studio Pro version it was marked as being compatible with
    [ ] Keep versioning pattern consistent in terms of naming and version numbers for your component
    [ ] Also provide release notes
- **Branding** -
    [ ] Screenshots should show the app in use, and not merely the title art, log-in page, or splash screen. They may also include text and image overlays
- **Usability -**
    [ ] Make sure inclusion of README snippet and USEME folders which helps the user on how to use the component
    [ ] Make sure that there are no unnecessary dependencies bundled when exporting the module from the Desktop Modeler
        [ ] For instance, if the module only mentions needing a jar file `fancystuff.jar`, but the userlib includes 10 other jar files ← these are unnecessary dependencies
    [ ] If you attempt to cheat the system (for example, by trying to trick the review process, steal user data, copy another developer’s work, manipulate ratings) your components will be removed from the Marketplace.
    [ ] Keep updating your components on a timely basis or the components will be removed if not updated for longer period from Marketplace

**Setting pricing plan**

**Picking license** ****Customers using paid via Atlassian apps are subject the [Marketplace Terms of Use](https://www.atlassian.com/licensing/marketplace/termsofuse). Similarly, this agreement is between Atlassian and your app customers. Your customers agree to the terms when they purchase or use your app

We have enabled onboarding and publishing of a Component without License. We are planning to onboard FSM solution with this strategy.
i.e. Do no display License at all. Just add text under documentation mentioning “Commercial license terms applied” under ‘License’ Bullet Item.

**Step 5: Publish App Service**
When your App Service is ready to be published to the Marketplace it is submitted to the Marketplace Governance team for approval.  This is vital to maintaining high-quality Marketplace content and an improved overall user experience, and we’ve made it simple to trigger from within the Add Content wizard.

The Marketplace Governance team’s mission is to manage the quality of content while keeping the submission process as frictionless as possible.  They achieve this by maintaining this comprehensive set of guidelines, which when followed will maximise the chances of your submission being approved first time round. The more complex your App Service, the more likely it is to require multiple approval iterations to get it into great shape but the Marketplace Governance team are on hand to advise you throughout the process.

### After You Submit

Once you’ve submitted your App Service you can keep track of your submission by subscribing to receive status notifications and if you need more help you can contact the Marketplace Governance team.

**Step 6: Monitor Status and Usage**
Once your App Service is available on the public Marketplace you can gain insights into its usage through the Subscription Overview in the Control Centre, and you can engage with Makers at they use it via My Marketplace Reviews.

Marketplace Reviews - discipline of supplier comments  

## Brand Guidelines

Use of Mendix logo
Branded imagery sizes
Legal requirements. credit lines trademarks

## UX Design Guidelines

Atlas
Principles
Themes
Styles
Fonts
