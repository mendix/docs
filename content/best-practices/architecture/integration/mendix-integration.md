---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 2
draft: true
---

## 1 Introduction

Mendix makes it easy to build, update, and maintain an application or microservice that fulfils a business function. The best practice is to try and keep as much of a business function as possible in an app to minimize external integration and complexity. In turn, this will make your DevOps teams more independent while making development and maintenance even faster and more efficient. However, most apps will need some external integration with other apps, systems, API layers, things, and human workflows.

The Mendix Platform is very good at integrating with virually any other technology. This Best Practices section provides an overview of how Mendix integrates with different formats and how it does this so securely and easily, some organizations even build Mendix apps whose entire focus is entirely on integration.

![](attachments/mendix-integration/mi-intro.png)

## 2 Internal & External Integration with Mendix

The sections below summarize the basic approaches to internal and external integration in the Mendix Platform.

### 2.1 Internal Integration Within Each App for Free

This diagram presents how the Mendix Platform keeps everything together—from design to operations—and checks the consistency in the app model before allowing changes to be committed to the [Team Server](/refguide7/team-server):

![](attachments/mendix-integration/feature-requirements.png)

This means that you do not have to worry about the integration of internal app layers. The communication between an app's own UX layer, runtime server, database, and file store are all private and handled automatically by the Mendix Platform itself. Mendix strongly recommends not interferring with these mechanisms and always integrating via defined services or file contracts, as handled by the Mendix Runtime server.

### 2.1 External Integration by Contract & Secured

In Mendix, all external integration occurs via the app's runtime server, as presented in the diagram below. This internal Mendix architecture means that the Mendix model is in control of all integration, which also makes everything more secure and easy to maintain. 

![](attachments/mendix-integration/runtime.png)

Mendix handles a large array of formats and protocols out of the box (for more information, see the [Integration How-to's](/howto/integration/). If there is a format that is not immediateley supported (for example, with a specific old legacy system), then it is easy to extend Mendix with a new adapter using the [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/).

Mendix recommends using REST services, OData contracts, or SOAP for real-time integration; SFTP for files; and Kafka or a queue management system for distributed architectures. Mendix also recommends avoiding any direct database queries to the Mendix database. In fact, this option is disabled on Mendix Cloud, because the platform cannot check external SQL, which raises the risk of problems in production. Poor SQL can destroy things in an app, and when things change in the domain model, the platform cannot warn the developer of broken links.

The standard for security on external integration is to use encrypted channels, meaning, SSL for service calls and SFTP for files. This always allows an app to be on different clouds, with data centers will communicate safely.

