---
title: "Mendix Product Naming Guide"
url: /community-tools/contribute-to-mendix-docs/style-guide/product-naming-guide/
weight: 100
description: "Guidelines on usage, capitalization, and spelling for Mendix product names and terms, including main products and other Mendix-specific terminology."
---

## Purpose of This Guide

This guide presents the main Mendix product names, other Mendix terms, and partner terms currently being used in the Mendix Platform UI, the [Mendix Documentation](/), and the [Mendix Platform Evaluation Guide](https://www.mendix.com/evaluation-guide/welcome).

The purpose of this guide is to provide guidelines on usage, capitalization, and spelling as well as notes on important details and terminology history where necessary. The goal of providing and applying these guidelines is to reach company-wide consensus on usage.

The purpose of this guide is not to provide a definition for each term. Terminology details are only given here for clarification where necessary. Product definitions are found throughout the Mendix Documentation and Mendix Platform Evaluation Guide, and for the sake of maintenance, they are not duplicated or summarized here.

For a term to be included in this guide, it should already appear in the Mendix Platform UI, Mendix Documentation, and/or Mendix Platform Evaluation Guide.

A term may not already be included in this guide for the following reasons:

* There are no specific usage guidelines or decisions on the term (at least not yet)
* It is a generic term, not branded by Mendix (for example, "domain model," "page," "template," or "layout")
* It is an internal-only term (for example, names of apps or technical terms only used on R&D teams)
* The term does not feature uniquely enough in the UI to require usage guidelines (for example, on capitalization in documentation)
* The term is outdated (meaning, usage of it has been decided against)
* The term should not be used in customer-facing resources

This is a useful guide to reference when communicating about the Mendix Platform and especially when you want to [contribute to the Mendix documentation](/community-tools/contribute-to-mendix-docs/).

This guide does not give insights into the product roadmap or internal company operations.

## Main Product Names

These are branded Mendix product names. However, they do not always need "Mendix" in front of them in the documentation.

### Apps

Refers to a section of the Mendix Portal. Capitalize in all instances (when used in this context rather than as the plural of "app").

This term replaces "Developer Portal", "Sprintr", "Platform Portal," and "Mendix App Platform." These terms are not to be used in the product UI or documentation.

### Mendix on Kubernetes

Capitalize in all instances.

Always use with "Mendix," so always use "Mendix on Kubernetes."

This term replaces "Mendix for Private Cloud", which is not to be used in the product UI or documentation.

### Mendix Cloud

Capitalize in all instances.

Always use with "Mendix," so always use "Mendix Cloud."

Do not use "the Mendix Cloud", and do not mention a version number when referring to Mendix Cloud.

### Mendix Cloud Dedicated

Capitalize in all instances.

Always use with "Mendix," so always use "Mendix Cloud Dedicated."

There is no separate documentation for this because it works as Mendix Cloud, but is dedicated to a single company.

### Mendix Catalog

Refer to only as "the Catalog", or "your organization's Catalog".

### Mendix Connect

This is not one product, but a grouping of functionalities within Studio Pro, the Catalog, and Marketplace Connectors and Modules that allow for integration with external data. For history, see Data Hub.

### Mendix Control Center

Always capitalize.

It is fine to use "Control Center."

### Mendix Marketplace

Capitalize in all instances, even when just writing "Marketplace."

It is fine to use "the Mendix Marketplace" or "the Marketplace."

### Mendix Platform

Describes Mendix as a product and encompasses all the products released by Mendix (as in, Studio Pro, Apps, etc.).

Capitalize "Platform" when used in "Mendix Platform."

It is fine to use "the Mendix Platform," but do not use "the Platform" (or "the platform").

> This is the power of the Mendix Platform.
>
> The platform includes Mendix Studio and our cloud hosting.

### Mendix Portal

The Mendix Portal includes Apps (which replaces "Developer Portal"), Control Center, the Mendix Community, Mendix Marketplace, Catalog, and Mendix Support.

### Mendix Studio Pro

"Studio Pro" can be used where regular repetition is necessary in a doc. However, where possible, "Mendix" should be added to the product name.

Capitalize in all instances.

Do not use "the Mendix Studio Pro" or "the Studio Pro."

When you need to also refer to the version of Mendix Runtime that is for a Studio Pro version, you can use the inclusive "Mendix {version number}." However, note that "Studio Pro {version number}" remains the preference for clearly expressing the Studio Pro version (as opposed to "Mendix," which refers to the whole platform and also a group of products released/updated around the same time as the GA release of a new Studio Pro major version, for example, "Mendix 9"). There are circumstances where "Mendix {version number}" can be used to avoid convoluted or confusing constructions, but be sure to maintain clarity.

### Private Mendix Platform

A solution for an air-gapped secure Mendix deployment.

* Product name: **Private Mendix Platform** (capitalized). Example: *"We are proud to introduce our innovative new offering: Private Mendix Platform."*
* Short form: **the Private Platform** (capitalized). Example: *"The Private Platform features key capabilities to support the full software development cycle for low-code applications."*
* Generic form: **the platform** (used in possessive cases). Example: *"For ease of deployment, the platform also features a dependency-free build and deploy pipeline over Kubernetes."* This should not be used out-of-context and must be preceded with use of the full product name, in order to establish the correct shorthand reference.
* Counted as: **an instance of Private Mendix Platform, several instances of Private Mendix Platform**
* Contracted as: **a single subscription or license to Private Mendix Platform**
* Delivered as: **a deployment of Private Mendix Platform**

## Other Mendix Terms

This section contains various Mendix terms that are used in the product UI and documentation.

### application & app

An "application" or "app" can be one of the following:

* A local application
* A Free App
* A licensed application hosted on Mendix Cloud; another cloud such as AWS, SAP Cloud, or IBM Cloud Portal; or on the user's own server

Do not capitalize (meaning, do not write "Mendix App").

Do not replace with "app project" (or "project") generically, even when referring to project management-like tasks. **Project** is still used in some UI text, but that usage is being phased out. Using "app" in all instances is prioritized.

The full word "application" has a more well-rounded meaning to it (as in, web and mobile apps), whereas "app" may suggest just mobile apps to the reader. Accordingly, it can be better to use "application" at the beginning of documents and then switch to "app" later on. We want to make it clear that Mendix is not just for building mobile apps, but all kinds of applications.

### App ID

Always capitalize.

### app team

Does not need to be capitalized, and "team" should be used without the qualifier "app" where possible.

### app template

This is the term to use to reflect the create-new-app flow UI in the Developer Portal.

Do not use "starter app."

### App User

For a definition of this term, see [Access Management](/developerportal/portfolio-management/access-management/).

Capitalize in all instances.

### Atlas UI

Capitalize in all instances.

Do not use just "Atlas."

### Basic package

Capitalize "Basic" but not package. Use "Basic package" rather than "Basic license".

### Build Server

Capitalize in all instances (to parallel "Team Server" and "Model Server").

### Builder

See [visual builder for XPath constraints](#visual-builder).

### Business Engineer

This is a team role. As such, it differs from the term "business developer," which is used in the Mendix Platform Evaluation Guide as a generic role and persona term.

Capitalize in all instances.

### Buzz

Use "Buzz" on its own, unless you need to specify "Company Buzz" or "App Buzz" for context.

Do not use "the Buzz" (unless the context demands it).

### Company Contact

Capitalize in all instances.

### custom developer app

For a definition of this term, see [Creating a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/).

Do not capitalize.

### Deployment Package Repository

Capitalize in all instances.

### Fallback

The name of the Mendix *high-availability* option which allows databases to be replicated via streaming between availability zones.

Capitalize in all instances.

### fast deploy & fast deployment

Do not use "insta-deploy" or "instant redeploy."

### Free App

A Free App is an app that can be deployed to the Mendix Cloud without purchasing a specific license and is therefore free. There are restrictions on the resources available to a Free App. A Free App environment is a cloud environment, but it does not support complex or large applications. Free Apps are part of the Free Edition.

This is different from an *Unlicensed App*, which is an app deployed to an unlicensed environment on another cloud platform, such as SAP or Private Cloud.

Capitalize in all instances.

Do not use "Sandbox."

### Free Edition

This is the package of offerings that users can employ without requiring a paid license.

Use to refer to the whole package of Mendix free offerings (Studio Pro, Studio, and Free Apps), not individual parts of the offering.

Capitalize in all instances.

### guided product introduction tour

This describes the user guidance that is built into Mendix Studio. This is a generic term, so it can be applied as more user guidance is built.

It should be qualified by the context/location. In the case of Studio, the generic term is qualified by the context/location in the Studio Release Notes like this: "A guided product introduction tour is now shown when you select **Start Your First App** from the **Introduction Tour** category when creating an app in the Mendix Developer Portal."

Do not capitalize.

### IdP

IdP refers to the Identity Provider and is mostly used in Identity and Access Management (IAM) documentation.

Do not use IDP.

### LTS (Long-Term Support)

As with any acronym the user may not recognize at first, write out the term "long-term support" in full for first usage and use the acronym "LTS" after that. If possible, link to [LTS, MTS & Monthly Releases](/releasenotes/studio-pro/lts-mts/) for more information.

### MTS (Medium-Term Support)

As with any acronym the user may not recognize at first, write out the term "medium-term support" in full for first usage and use the acronym "MTS" after that. If possible, link to [LTS, MTS & Monthly Releases](/releasenotes/studio-pro/lts-mts/) for more information.

### Maia (Mendix AI Assistance)

The rebranded name for "Mendix Assist (MxAssist)" as of Mendix version 10.12.0.

Use "Mendix AI Assistance (Maia)" for the whole product line when it is introduced for the first time. Use "Maia" subsequently for the whole product line. "Maia" is also the term that appears in the product UI.

For specific Maia features, use the feature name directly: Logic Recommender, Workflow Recommender, Translation Generator, for instance.

It is okay to include "Maia" as part of the feature name if it is introduced for the first time or if no near context about Maia is given: Maia Logic Recommender, Maia Workflow Recommender, Maia Translation Generator, for instance.

Maia Chat is an exception: use "Maia Chat" instead of "Chat". Only use "Chat" in very rare cases: as a page title in the left navigation menu under the [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/) category.

Capitalize in all instances.

### Make It Native app

Capitalize the name of the app ("Make It Native"), but do not capitalize "app."

### Marketplace component

This is the generic name of the individual add-on, widget, module, connector, app template, etc. available in the Mendix Marketplace.

Do not use "Marketplace item."

### Mendix Admin

Capitalize in all instances.

Do not use "Mendix Administrator."

### Mendix mobile app

"Mendix Developer App" is the name for the mobile app available for developers to test hybrid mobile apps.

This term replaces "Mendix" and "Mendix Mobile app" (which are not to be used in the product UI or documentation).

Always use "the Mendix Developer App" and cross-reference [Getting the Mendix Developer App](/refguide8/getting-the-mendix-app/) where possible.

### Mendix Client

Capitalize in all instances.

### Mendix Deployment Archive

Capitalize in all instances.

### Mendix Community

Capitalize in all instances.

This term replaces "Mendix Forum" (which is not to be used in the product UI or documentation).

### Mendix level

Do not capitalize "level."

### Mendix Metamodel

Capitalize in all instances.

### Mendix points

Do not capitalize "points."

### Mendix Platform Evaluation Guide

Published at [mendix.com/evaluation-guide](https://www.mendix.com/evaluation-guide/welcome).

Use the full name when referencing, not just "Evaluation Guide."

### Mendix Profile

This term replaces "Developer Profile" (which is not to be used in the product UI or documentation).

Capitalize in all instances.

### Mendix Runtime

This term replaces "Mendix Business Server" and "Business Engine" (which are not to be used in the product UI or documentation).

Capitalize in instances when referring to Runtime as part of the Mendix Platform. The best practice is to use a definite article for additional clarity: "the Mendix Runtime."

Do not capitalize when referring to the generic "runtime" concept.

> The Mendix Runtime executes the application model that is created in Studio Pro.
>
> This widget enables filtering a list view at runtime with various constraints.

### Mendix Server

Capitalize in all instances. Don't use "Mendix Business Server".

### Mendix Service Console

Capitalize in all instances.

### Mendix Support

Do not use "Customer Support," "Mendix Customer Support," or simply "Support."

Capitalize in all instances.

### Mendix Support Portal

Do not use "Customer Portal" or "Customer Support Portal."

Capitalize in all instances.

### Mendix UI Framework

Capitalize in all instances.

### microflow

Do not capitalize.

### Model Server

Capitalize in all instances (to parallel "Team Server" and "Build Server").

### MSV

This term refers to Mendix Solution Vendor (MSV), which is Independent Software Vendor (ISV) using Mendix low-code.

### MxAssure

Spell with "Mx" abbreviation as one word.

### Native Builder

Do not use "Native Oven".

Capitalize in all instances.

### on-premises

When we talk about the physical location of hardware that contains Mendix software, we are referring to a location, or premises. "Premises" means the land and buildings owned by someone, especially by a company or organization.

"Premise" means an idea or theory on which a statement or action is based. For example, "Your claim that you cannot build apps six times faster with Mendix than with traditional development is based on a false premise."

Do not use "on-premise," "on premise," "on-prem," or "on prem."

> On-premises deployment needs specific security considerations.

### one-to-one & one-to-many associations

For details on association properties, see [Association Properties](/refguide/association-properties/).

Write as "one-to-one" and "one-to-many," not as "1-1" or "1-to-many."

### Partner Profile

Capitalize in all instances.

### persistable & non-persistable

For details on the persistability of entities, see [Persistability](/refguide/persistability/).

Do not use "persistent" or "non-persistent."

Do not use "transient" as a synonym for "persistable."

### Platform APIs

Capitalize to refer to the collection of [Mendix APIs](/apidocs-mxsdk/apidocs/).

### Platform SDK

Capitalize in all instances.

### private/public Mendix Marketplace

Do not capitalize "private" and "public" as qualifiers.

### private cloud

This is a generic term, so do not capitalize.

### Product Owner

Capitalize in all instances of the [team role](/developerportal/general/app-roles/#team-roles).

### production, acceptance, and test environments

Do not capitalize.

### requirements management

The [Mendix Platform Evaluation Guide](https://www.mendix.com/evaluation-guide/app-lifecycle/requirements-intro) specifies "requirements management" (or "Agile requirements management") as embedded in the Mendix Platform and not "project management."

### Scrum

This implementation of the Agile framework is explained at [Scrum.org](https://www.scrum.org/resources/what-is-scrum).

Capitalize in all instances.

### Scrum Master

This is the correct capitalization for this team role.

### Software Bill of Materials

When abbreviating, use SBOM.

Do not use SBoM.

### Sprint

Capitalize in all instances.

### Studio Pro landing page

The Studio Pro landing page refers to the page that contains **My Apps**, **Marketplace**, and **Developer Portal** tabs.

Capitalize "Studio Pro".

### sub-microflow

Spell with a hyphen.

### Team Server

Capitalize in all instances. Use "the Team Server" or "Mendix Team Server".

### Technical Contact

Capitalize in all instances of this [role](/developerportal/general/app-roles/#technical-contact).

### Theme Customizer

Capitalize in all instances.

### UI resources package

Do not capitalize, as this is a generic term. **Atlas UI Resources** is an example of such a package, and the proper name of this package is capitalized in the Studio Pro UI.

### visual builder for XPath constraints {#visual-builder}

This is a new way of creating XPath expressions (or XPath constraints) and was introduced in Mendix version 10.5.0 in beta.

The UX term is "Builder" but in the documentation it is called "visual Builder for XPath constraints".

You can shorten this to "visual builder", but do not capitalize "visual builder" except when beginning a sentence.

### Workflow Engine

Capitalize.