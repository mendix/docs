---
title: "Product Naming Guide"
draft: true
---

## Main Mendix Product Terms

These are branded Mendix terms, but they do not always need  "Mendix" in front of them in the documentation.

### Mendix App Store

{{% alert type="info" %}}
Capitalize in all instances, even when just writing "App Store."
{{% /alert %}}

### Mendix Cloud

Mendix Cloud is our public cloud service and the default deployment option for Mendix applications. Cloud-Foundry-based and running globally on AWS, Mendix Cloud is the only low-code platform that offers customers out-of-the-box application resilience and scalability.

There are two versions of Mendix Cloud, v3 and v4. See version (Mendix Cloud)for how to refer to these.

Capitalize in all instances.

### Mendix Developer Portal

The platform for Mendix developers to use for collaborating, deploying, and managing their team, development process, apps, and settings. The Developer Portal is tightly integrated with the Mendix Modeler. This is the main portal, which has the Buzz and Apps menu items.

This term is used on the My Apps screen in Studio Pro.

Capitalize in all instances.

This replaces &quot;Sprintr,&quot;, &quot;Platform Portal,&quot; and &quot;Mendix App Platform.&quot; Do not use these terms.

The Developer Portal includes what is known internally as the &quot;Cloud Portal.&quot; But &quot;Cloud Portal&quot; is not an official term and is not used in the documentation. If wanting to refer to deployment facilities in the Developer Portal, avoid the use of any &quot;portal&quot; language and emphasize the action of &quot;deploying an app to the Mendix Cloud.&quot;

### Mendix Platform

Describes Mendix as a product and encompasses all products released by Mendix (as in, the Modelers, Developer Portal, etc.).

For the history of decisions on this name, see Terminology Decisions and Usage.

Capitalize &quot;Platform&quot; when used in &quot;Mendix Platform.&quot;

This is the power of the Mendix Platform.

The platform includes our Modelers and cloud hosting.

### Mendix Studio

The rebranded name for the Web Modeler as of Mendix 8.

Mendix Studio and Studio Pro are the main pieces of software you use to create, view, and edit your Mendix application.

&quot;Studio&quot; can be used where regular repetition is necessary in a doc. However, where possible, &quot;Mendix&quot; should be added to the product name.

Where you are describing a feature applicable to both Studio and Studio Pro, use &quot;Mendix Studio and Studio Pro.&quot; However, after you introduce the names of both products once and need to refer to both of them together again, you can use &quot;the Mendix Studios.&quot;

When you need to use one general product name in a diagram, it is okay to use just &quot;Studios.&quot;

Capitalize in all instances.

### Mendix Studio Pro

The rebranded name for the Desktop Modeler as of Mendix 8.

Mendix Studio and Studio Pro are the main pieces of software you use to create, view, and edit your Mendix application.

&quot;Studio Pro&quot; can be used where regular repetition is necessary in a doc. However, where possible, &quot;Mendix&quot; should be added to the product name.

Where you are describing a feature applicable to both Studio Pro and Studio, use &quot;Mendix Studio and Studio Pro.&quot; However, after you introduce the names of both products once and need to refer to both of them together again, you can use &quot;the Mendix Studios.&quot;

When you need to use one general product name in a diagram, it is okay to use just &quot;Studios.&quot;

Capitalize in all instances.

## Mendix Terms

This section contains the main Mendix terms that are used in the product UI and documentation.

### accepted feedback

Feedback that is accepted by the development team to resolve the issue, to build a new feature, or to answer a question.

### access restriction profile

This profile can combine IP range filters and client certificate verification. It can be applied to path-based access restrictions in specific environments of the application.

### action

An action defines what an activity does. For example, the action of an activity might be _Show page_.

### activity

A microflow consists of a series of activities. Each activity performs an action.

### alert

A notification.

### amount of database connections

The amount of connections to the PostgreSQL server. This should go up and down with the usage of the application. The amount of connections is limited to 50.

### amount of database queries being executed

The amount of database queries that are executed by your Mendix application, broken down in queries that modify data (insert, update, delete), queries that fetch data (select), and the number of transactions (like the microflows from which these queries originate).

### amount of handled external requests

The number of requests that are sent from the end-user&##39;s web browser or systems that integrate with your application using web services. The number of requests per second is split up by request handler.

### anonymous user

The user role that an end-user of your application has when they are not signed in.

### API

A set of functions and procedures that allow for the creation of applications that access the features or data of an operating system, application, or other service.

### API key

A key to enable API functions.

### app

An app can be one of the following:

- A local application
- A Free App
- A licensed application that can be hosted on the Mendix Cloud, another cloud such as AWS, SAP Cloud, or IBM Cloud Portal, r on the user&##39;s own server

Use &quot;app&quot; or &quot;application&quot; when referring to apps in general. Do not capitalize (meaning, do not write &quot;Mendix App&quot;).

The full word &quot;application&quot; has a more well-rounded meaning to it (as in, web and mobile apps), whereas &quot;app&quot; may connote just mobile app to the reader. Accordingly, it can be better to use &quot;application&quot; at the beginning of documents and then switch to &quot;app&quot; later on. We want to make it clear that Mendix is not just for building mobile apps, but all kinds of applications.

See also app project.

### App Contact

The contact person of the application.

### app container

A standardized configuration of resources required to run an app in an environment. An environment can have multiple app containers.

### App Engine

### app feedback

Feedback provided on an application by users via the Mendix Feedback Widget. This can be accessed in the Developer Portal.

### App ID

This is the Mendix app project identifier. This can be found in the Developer Portal in **Settings** \&gt; **General**.

Always capitalize.

### project

The Product Marketing guideline is to use &quot;app&quot; instead of &quot;project&quot; as of Mendix 7. However, be aware of the potential confusion here and the conflict between not using &quot;project&quot; and all the terms below that start with &quot;project.&quot;

Our understanding is that a &quot;project&quot; includes the app being developed itself as well as resources from the Developer Portal, deployment, and elsewhere. Thus, &quot;app&quot; cannot entirely replace &quot;project&quot; in the documentation.

Use &quot;app project&quot; for clarity.

Enter the email addresses of all the co-workers you want to invite to your app project.

### App Services

These are a way of sharing functionality between Mendix apps by publishing app content which can be dragged into microflows.

App services are deprecated and marked for removal. Use a [published web service](https://docs.mendix.com/refguide/published-web-services) or a [published REST service](https://docs.mendix.com/refguide/published-rest-services) instead.

### App Team

The people and roles invited to work on an app project.

Capitalized because **Team** is capitalized in the Developer Portal.

### AppCloud

This appears in some Mendix Cloud and Developer Portal documentation. It continues in the name of the [AppCloudServices](https://appstore.home.mendix.com/link/app/934/) module, which provides single sign-on. (The original idea of AppCloud can be found on [this blog post](https://www.mendix.com/press/new-mendix-appcloud/).) Identity Services has responsibility for this as part of their SSO roadmap.

For now use specific terminology (for example, SSO single sign-on) rather than AppCloud.

### application node CPU usage

The amount of CPU utilization in percentages, broken down in different types of CPU usage.

### application node disk IO/s

The amount of disk read-and-write operations that are done from and to the disk storage. This does not show the amount of data that was transferred.

#### application node disk latency

The average waiting times for disk operations to complete. Interpreting the values in this graph should be done in combination with the other disk stats graphs and while having insight in the type of requests that are done. Sequential or random reads and writes can create a different burden for disk storage.

### application node disk throughput

The amount of data being read from and written to disk. If there&##39;s more than one disk partition in the system, the /srv partition generally holds project files and uploaded files of the application, and /var generally holds the database storage.

### application node disk usage

The amount of data stored on disk in absolute amounts. If there&##39;s more than one disk partition in the system, the /srv partition generally holds the project files and uploaded files of the application, and /var generally holds the database storage.

### application node disk utilization

The percentage of time that the disk storage is busy processing requests. This graph should be interpreted in combination with other graphs like cpu iowait, disk iops, and the amount of running requests.

For example, a combination of a moderate amount of IO operations, low amount of disk throughput, visible cpu iowait, filled up memory disk cache, and reports of long running database queries in the application log could point to a shortage of system memory for disk cache that leads to repeated random reads from disk storage.

### application node load

This value is commonly used as a general indication for overall server load that can be monitored and alerted upon. The load value is a composite value, calculated from a range of other measurements, as shown in the other graphs on this page. When investigating high server load, this graph is not sufficient in itself.

### application node operating system memory

The distribution of operating system memory that is available for this server. The most important part of the graph is the application process, which is visible as the amount of memory that is continuously in use, labelled in the category &quot;Apps.&quot;

### application node statistics

Those statistics show the health of the node of the application.

### Application Operator

User role.

### association

Within the domain model, an association shows the relationship between two entities. In a relational database, these are created using foreign keys.

Multiplicity can be one-to-one, one-to-many, or many-to-many.

### Atlas UI

Describes the UI framework used by the Modeler (mostly by the Web Modeler).

Do not use just &quot;Atlas.&quot;

### attribute

Within the domain model, an attribute describes the properties or features of anentity. An attribute represents a small piece of information about an entity, such as the name or address of a location. The attributes are the database columns.

Also see entity.

### backup

A copy of your data to preserve it in case of equipment failure or catastrophes.

### branch line

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line. The first is to do maintenance development on a version that is running in production. You can keep on developing in the main line while you fix issues in the branch line. The second reason for creating a branch line is if you are starting the development of a large feature that will probably take more than a day to develop. By developing in a branch line, you can commit the half-implemented feature (possibly even with errors) without disturbing other development in the main line.

### build output

The log file of a build server. It shows the process of building of the deployment package.

### Build Server

Capitalize in all instances of the Mendix Build Server (to parallel &quot;Team Server&quot;). Appears in the [Mendix Platform Evaluation Guide](https://www.mendix.com/evaluation-guide/).

### buildpack

Buildpacks provide framework and runtime support for apps. Buildpacks typically examine your apps to determine what dependencies to download and how to configure the apps to communicate with bound services.

### burndown chart

A graphical representation of work left to do versus time.

### Business Engineer

By default, the Business Engineer role and the SCRUM Master role are allowed to access the Team Server. There are other access rights assigned to this role.

Capitalize in all instances.
The term &quot;business developer&quot; is used in the [Mendix Platform Evaluation Guide](https://www.mendix.com/evaluation-guide/) as a generic role and a persona term (to describe Solution Sam). Forrester also uses this term. However, &quot;business developer&quot; is not used as

### Buzz

Buzz is a &quot;wall&quot; in the Developer Portal where users post updates and share ideas.

There are two sorts of Buzz: _Company Buzz_ (a sort of private social network for all employees of a company), and _App Buzz_, which is for a single app team.

Use **Buzz** , not **The Buzz** (unless the context demands it).
Use **Buzz** on its own, unless you need to specify _Company_ or _App_ Buzz to clarify the context.

### cache

Stores recently used information so that it can be quickly accessed later. When an application is running, it may cache certain data in the system memory, or RAM.

### certificate

A digital certificate is an electronic &quot;passport&quot; that allows a person, computer, or organization to exchange information securely over the internet using the public key certificate.

### closed feedback

Feedback that is closed.

### Company Admin

The Company Admin can use the Developer Portal to manage the company&##39;s settings.

### Company Contact

The Company Contact is the internal contact person about Mendix. All company members can see the Company Contact. Only a Company Admin can change the Company Contact.

### completed feedback

### concurrent users

### conflicted domains

### constants

### consumed app services

App services are the preferred way of connecting Mendix applications to each other. An app service can be imported and its content can be used. App services provide microflow actions and domain model entities.

### Deployment Package Repository

Refers to the location in the Developer Portal that contains deployment packages.

Capitalize in all instances.

### Desktop Modeler

The Mendix Desktop Modeler was the main piece of software you used to create, view, and edit your Mendix application.

Capitalize in all instances.

Replaced by Mendix Studio Profor Mendix 8.

### developer documentation

### development database

### development environment

### development line

### document

The generic name for a functional item in a project module. A document can a page, microflow, nanoflow, image, layout, menu, snippet, building block, page template, Java action, rule, enumeration, dataset, constant, regular expression, scheduled event, document template, message definition, JSON structure, XML schema, export mapping, import mapping, consumed app service, consumed web service, published REST service, published web service, published OData service, published app service.

Not to be confused with a &quot;FileDocument,&quot; which is a generalized entity that holds the content of a file.

### domain model

A domain model is the abstract representation of the data structure of a Mendix app.

### entity

Within the domain model, an entity represents a class of real-world objects, such as locations, customers, invoices, etc. The entity is translated to the database tables.

Can also be defined as a collection of the properties of an object type.

### environments

An environment is a separate server where you can host your application. It is available for on-premises and cloud licenses. Depending on the terms of your license, there are production environments, acceptance environments, and test environments.

### fast deploy

This feature allows users to make changes to a model, continue working in a page or state, and then run the model without losing those changes.

Do not use &quot;insta-deploy&quot; or &quot;instant redeploy&quot; (some members of RnD use these terms internally).

### FileDocument

A FileDocument is a system module entity that holds the content of a file (for example, a text file or Excel sheet). It can be used as a generalization for any entity which needs to hold the content of a file.

### Free App

A Free App is one which can be deployed without a license and is therefore free.

There are restrictions on the resources available to a Free App, and a Free App environment is not the same thing as a cloud environment as it does not support complex or large applications.

Free Apps are part of our Mendix Community Edition for Mendix 5.18 and above.

Capitalize in all instances.

Also see Sandbox – a deprecated term for a Free App environment

### Free Edition

The package of offerings that users can employ without requiring a paid license.

Capitalize in all instances.

Use to refer to the whole package of Mendix free offerings (Studio Pro, Studio, and Free Apps), not individual parts of the offering

This replaced _Community Edition_ in 2015, but was made a focus of the announcements at [Mendix World 2019](https://www.mendix.com/blog/a-3-step-leap-into-your-digital-future-highlights-from-mendix-world/).

### guided product introduction tour

Used to describe the user guidance that is built into the Web Modeler. This is a generic term, so it can be applied as more user guidance is built. It should be qualified by the context/location. In the case of the Web Modeler, the generic term is qualified by the context/location in the Web Modeler Release Notes like this: &quot;A guided product introduction tour is now shown when you select **Start Your First App** from the **Introduction Tour** category when creating an app in the [Mendix Developer Portal](https://sprintr.home.mendix.com/).&quot;

### licenses

Mendix offers three types of licenses: Free App, on-premises license, and cloud license. Depending on the license, Mendix offers different features and functionalities.

### Make It Native app

This is the app available for Android and iOS for Mendix developers to test native mobile apps.

### Mendix Assist

Mendix Assist is a name of the AI-assisted development in the microflow editor of the Web Modeler.

Other names detected: Mx Assistant, Mx Assist, Mendix Assistant. Use Mendix Assist as this is an official term.

### Mendix mobile app

This is the app available for Android and iOS for Mendix developers to test hybrid mobile apps using PhoneGap.

Use this name as of 7.6 (do not use &quot;Mendix Developer app&quot; or &quot;Mendix Mobile app&quot;).

### Mendix Client

Capitalize in all instances.

### Mendix Cloud app

### Mendix Cloud application

### Mendix Cloud app environment

### Mendix Cloud database

### Mendix Cloud environment

### Mendix Cloud license

### Mendix Cloud location

### Mendix Cloud node

### Mendix Cloud server

### Mendix Cloud slot

### Mendix Cloud v3

### Mendix Cloud v4

### Mendix Deployment Archive

The name of the _.mda_ package that is stored in the Deployment Package Repository.

Capitalize in all instances.

### Mendix developer

### Mendix Developer site

### Mendix Feedback Widget

Available in the [App Store](https://appstore.home.mendix.com/link/app/199/).

Capitalize in all instances.

### Mendix Forum

The Mendix Forum is where the Mendix Community comes together to help each other out with questions and answers and to propose ideas for improving the Mendix platform. The forum is closely integrated with the Community Profile so that Mendix community members can see all the interesting and useful information about who is participating in the forum. It has two tabs:

Capitalize in all instances.

Write generally as &quot;the forum.&quot;

### Mendix level

### Mendix points

### Mendix Platform Evaluation Guide

Published [here](https://www.mendix.com/evaluation-guide/).

Use the full name in the documentation, not just &quot;Evaluation Guide.&quot;

### Mendix Profile

The profile of an individual Mendix community member.

Capitalize in all instances.

Use instead of &quot;Developer Profile.&quot;

### Mendix Runtime

Mendix Runtime = &quot;Mendix Business Server&quot; + &quot;Mendix Client.&quot;

Replaces &quot;Mendix Business Server&quot; and &quot;Mendix Business Engine&quot; as of Mendix 7.

The best practice is to use a definite article for additional clarity: &quot;the Mendix Runtime.&quot;

Capitalize in instances referring to Runtime as part of the Mendix product.

Do not capitalize when referring to the generic &quot;runtime&quot; concept.

See Terminology Decisions and Usagebelow for comments on this term under &quot;Mendix Business Server.&quot;

On the Mendix Runtime…

At runtime,…

### Mendix Server

Capitalize in all instances.

### Mendix Service Console

Capitalize in all instances.

### Mendix Support

The department within Mendix that deals with customer requests and processes tickets.

Do not use &quot;Customer Support,&quot; &quot;Mendix Customer Support,&quot; or simply &quot;Support.&quot;

Capitalize in all instances.

### Mendix UI Framework

Applicable to the Desktop Modeler.

Capitalize in all instances.

### Metamodel

Capitalize in all instances of referring to the Mendix Metamodel. Write as one word.

Preferably, write as &quot;Mendix Metamodel&quot; for added clarity.

### microflow

### model

The collection of artefacts that make up an app.

### model options

### Model Server

Capitalize in all instances of the Mendix Model Server (to parallel Team Server). Used in Evaluation Guide.

### Model Share

Capitalize in all instances.

### MxAdmin

### MxBuild

### MxClientSystem

### MxCloud

### MxID

### MXModel

### MxModelReflection

### mxruntime

### nanoflow

Nanoflows make it possible to visually model application logic that runs on your device or in the browser. You can model business logic, and manipulate, store, and retrieve data. Nanoflows are usually short-lived and triggered by a human.

### object

Within the domain model, an object refers to an instance of an entity.

For example, the **Location** _entity_ might contain the **Address** _attribute_. A **Location** _object_ would contain a specific address, for example, &quot;268 Summer Street, Boston, MA 0221&quot; or &quot;Gedempte Zalmhaven 4k, 3011 BT Rotterdam.&quot;

Also see entity.

### on-premises

When we talk about the physical location of hardware that contains Mendix software, we&##39;re referring to a location, or premises. &quot;Premises&quot; means the land and buildings owned by someone, especially by a company or organization.

&quot;Premise&quot; means an idea or theory on which a statement or action is based. For example, &quot;Your claim that Mendix can&##39;t build apps six times faster than traditional development is based on a false premise.&quot;

Do not use &quot;on-premise,&quot; &quot;on premise,&quot; &quot;on-prem,&quot; or &quot;on prem.&quot;

On-premises deployment is the process of…

### one-to-one, one-to-many

Types of association.

Write as &quot;one-to-one&quot; and &quot;one-to-many,&quot; not as &quot;1-1&quot; or &quot;1-to-many.&quot;

### open feedback

### OpenID

### Open Project dialog box

### outgoing connections certificates

### package

### Partner Profile

Capitalize in all instances.

### path

### perpetual license

### persistable &amp; non-persistable

Do not use &quot;persistent&quot; or &quot;non-persistent.&quot;

### planned maintenance

### planning

### platform APIs

Do not capitalize when using generally. Can also use &quot;Mendix Platform APIs.&quot;

### Platform SDK

Capitalize in all instances.

### poll

### preferred maintenance window

### private/public App Store

In the public App Store, content is available to every developer in the Mendix community. In the private App Store, content is available only to developers in the user&##39;s company (and will not be reviewed by Mendix).

Do not capitalize &quot;private&quot; and &quot;public&quot; as qualifiers.

### private cloud

The stateless architecture of the Mendix platform matches perfectly with the container and resource management services in Cloud Foundry. Mendix can be deployed to any Cloud Foundry environment.

### pro license

Does not appear in the documentation.

### Product Owner

This role is the owner of the product/application.

### production, acceptance, test

Types of environments.

Do not capitalize.

### production environment

In this environment of the server, the app is put into operation and is made available for intended use by end-users.

### productivity improvements

Describes features released as R&amp;D &quot;delighters&quot; and features based on community ideas from the Idea Forum.

Used mainly as a heading in the Desktop Modeler release notes.

Do not use &quot;delighters.&quot;

### project

The Product Marketing guideline is to use app instead of &quot;project&quot; as of Mendix 7. However, be aware of the potential confusion here and the conflict between not using &quot;project&quot; and all the terms below that start with &quot;project.&quot;

Our understanding is that a &quot;project&quot; includes the app being developed itself as well as resources from the Developer Portal, deployment, and elsewhere. Thus, &quot;app&quot; cannot entirely replace &quot;project&quot; in the documentation.

Use &quot;app project&quot; for clarity.

Enter the email addresses of all the co-workers you want to invite to your app project.

#### project management

The [Evaluation Guide](https://www.mendix.com/evaluation-guide/app-lifecycle/requirements-intro) specifies requirements management (or &quot;Agile requirements management&quot;) as embedded in the Mendix Platform and not &quot;project management.&quot;

### requirements management

The [Evaluation Guide](https://www.mendix.com/evaluation-guide/app-lifecycle/requirements-intro) specifies &quot;requirements management&quot; (or &quot;Agile requirements management&quot;) as embedded in the Mendix Platform and not &quot;project management.&quot;

### role

Be sure to differentiate between company roles, app roles, team member roles, module roles, and user roles.

### running now

Running requests are all requests that are currently in progress for this environment.

### runtime

Only use this for the general concept, as opposed to the specific Mendix Runtime.

Also see Mendix Runtime.

Spell as one word.

### Scrum

An implementation of an Agile framework. It is explained at [Scrum.org](https://www.scrum.org/resources/what-is-scrum).

Scrum should always be capitalized.

### SCRUM Master

This is how this role is written in the Developer Portal UI.

#### Sprint

A time-boxed event of one month or less, that serves as a container for the other Scrum events and activities. In Mendix, this is often a two-week event.

Sprint should always be capitalized.

#### sub-microflow

Spell with a hyphen (even though it is used without a hyphen on the UI).

### Support Portal

The application that is used to submit requests and track tickets. Used by both customers and Mendix employees.

Do not use &quot;Customer Portal&quot; or &quot;Customer Support Portal.&quot;

Capitalize in all instances.

### team

### Team Server

Written on top of Subversion and delivered as a plugin to the Developer Portal, the Mendix Team Server is designed to make the life of a Mendix developer easier. Mendix Studio Pro is tightly integrated with the Team Server and actions like creating a new project (including a versioned model repository), updating, committing changes, and merging model versions are all available from within Studio Pro as a single click action.

The Team Server is delivered as a plugin of Developer Portal for a reason: it enables you to manage Team Server access from the Developer Portal, and it enables Mendix to provide you with a revolutionary way to combine requirements, implementation, and feedback! When you commit application model changes to the Team Server from within the Modeler, you can select the user stories (reflecting requirements) that you have been working on. The Team Server will automatically create links between these user stories and the model changes you made, providing you with a way to navigate from commits to the associated requirements. Furthermore, with these links, Mendix creates a link from a user story to a changeset, which can include a link to a form (if you changed a form in the changeset). While feedback also refers to a form, Mendix can create links between feedback, forms, changesets, and user stories.

The Team Server also connects the capture-and-develop phase of the agile application lifecycle. When you start working on the next version of your application, you just open Studio Pro to see the user stories planned for the current sprint and start working on them. If a user story is based on user feedback, you can directly jump to the form mentioned in the metadata of the feedback and start implementing the requested change.

Capitalize in all instances.

### Team Server project

### Technical Contact

The Technical Contact role is responsible for license renewal and is the first point of contact for Mendix Support. A Mendix application will always be set up and delivered with a technical contact assigned to it. The Technical Contact needs an _MxID_ before Mendix can activate a license for an application.

Capitalize in all instances.

#### Theme Customizer

Capitalize in all instances, as this is a Mendix (Atlas UI) product and is capitalized in the UI.

### UI Resources package

When talking about the package that is used, write as &quot;UI Resources.&quot;

When talking about the contents of such a package, write &quot;resources.&quot;

#### version (Mendix Cloud)

Use lower-case except when beginning a sentence or heading.

Use _Mendix Cloud_ before the version, except where the context is clear.

**2 Differences Between Mendix Cloud v3 and v4**

V4 has much better security than v3.

### version (Studio Pro and Mendix Runtime)

Either use _Studio Pro 8.1.0_ or _Mendix 8.1.0_. Can also use _version 8.1.0 of Studio Pro_ writing &quot;version&quot; in full.

Do not use lower-case &quot;v&quot; to describe a Studio Pro or Mendix Runtime version – this is reserved for the Mendix Cloud version.

### virtual private cloud

If you&##39;re using a virtual private cloud to manage workloads at AWS or Azure, you can easily deploy Mendix in your VPC to leverage the services and resources from your enterprise account. You can buy Mendix from the AWS or Azure marketplace or bring your own license.

### Web Modeler

The Web Modeler was a standalone product on the same level as the Desktop Modeler.

Capitalize in all instances.

Replaced by Mendix Studiofor Mendix 8.

## Other Terms

### Add-on Terms

This section contains terms that do not apply to the general Mendix context.

#### ATS Helper

Capitalize in all instances (using full name with &quot;ATS&quot;).

#### ATS Recorder

Capitalize in all instances (using full name with &quot;ATS&quot;).

### Partner Terms

This section contains terms which are defined by our partners and should be used correctly.

#### SAP

##### SAP Cloud Platform Rapid Application Development by Mendix

The name of the Mendix product that SAP is selling.

Sometimes shortened to &quot;SAP Cloud Platform RAD by Mendix&quot; or &quot;SAP RAD by Mendix.&quot;

Use this full name in the SAP context.

##### Further Terminology

There is a separate document which contains terms defined by SAP. See [_Mendix &amp; SAP Terminology (Shared)_](https://www.dropbox.com/sh/9hsudc499xmpdlg/AACKhdx-5HlRwc3MwYc2Z-Yha?dl=0).

#### Siemens

##### MindSphere

Text and descriptions should be taken from [Siemens.com/MindSphere](https://siemens.com/mindsphere).

Description of MindSphere: &quot;MindSphere is the cloud-based, open IoT operating system from Siemens&quot;

## Outdated & Incorrect Terminology {#outdated}

This section contains terms that are not used or have had their name changed.

### Cloud Portal

This is an internal term and should not be used in the documentation or publicly, as it has not been agreed on or branded. It no longer appears in the documentation or Evaluation Guide.

This functionality should be described within the name/context of the Mendix Developer Portal(for example, &quot;deployment via the Developer Portal&quot;). If wanting to refer to deployment facilities in the Developer Portal, avoid the use of any &quot;portal&quot; language and emphasize the action of &quot;deploying an app to the Mendix Cloud.&quot;

### Community Edition

For Mendix 5.18 and above the Mendix Community Edition was introduced which included the ability to deploy a Free App. This was replaced by the [Mendix Free Edition (DX Release)](https://www.mendix.com/blog/powering-continuous-innovation-with-the-mendix-free-edition/) in 2015, a move which was reinforced by [announcements at Mendix World 2019](https://www.mendix.com/blog/a-3-step-leap-into-your-digital-future-highlights-from-mendix-world/).

Do not use. Replaced by Free Edition.

### delighters

This was the name of the R&amp;D development project in early 2018 and started to be used in the release notes to describe features released under this project (including features based on community ideas from the Idea Forum). In the release notes/documentation, this has been replaced by the term &quot;Productivity Improvements.&quot; However, this term is still used by Marketing.

### launchpad

The launchpad was part of the AppCloud release described in [this blog post](https://www.mendix.com/press/new-mendix-appcloud/). This was also the only place where Mendix single sign-on users could be managed.

Access to the launchpad has been removed from the Developer Portal.

Do not use.

### Mendix App Platform, App Platform

Do not use. Use &quot;Mendix Platform&quot; and &quot;Developer Portal.&quot;

### Mendix Business Modeler

Do not use as of Mendix 7. Use &quot;Desktop Modeler&quot; and &quot;Web Modeler.&quot;

### Mendix Business Server/Engine

Do not use as of Mendix 7. Use &quot;Mendix Runtime.&quot;

### Mendix Platform Portal, Mendix Online Platform

Do not use. Use &quot;Developer Portal&quot; instead.

### Run in Sandbox

This button no longer exists in the Modeler. Now it is just **Run**.

### Sandbox

This referred to free environments used to run a Free App in the Mendix Cloud.

Do not use. Use Free App or **Free App environment** instead.

### Sprintr

Do not use. Use Mendix Developer Portal.


