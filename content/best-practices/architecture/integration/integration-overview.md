---
title: "Integration"
category: "Architecture"
menu_order: 3
draft: true
---
<<ADD Logo Figure 1 from email- Just to see if they like it?>>>

## 1 Introduction

Most solutions require integration with other apps and systems. Such integration is easy with Mendix, but there are many options to choose from. This should be the case, because integration is like the glue between components in a solution, and it needs to be adaptable for all possible functional scenarios. 

As more core systems are being built using Mendix microservices, integration is increasingly important, as is the use of a set of Microservices together performing a business funtion. We call that a Microservices "system".

Integration Best Practices positions Mendix Apps in a number of roles in a typical enteprise architecte. We consider typical integration options and recommend, where possible, the most easy and/or stable way to integratie Mendix apps or systems of Mendix microservices into a landscape. In the future there will be more and more concrete use-cases created, with example implementations available in the App Store.

The figure in the picture illustrates the question this section tries to address.

<< ADD Figure 2 from Email>>

Note: Internal integration of a business function, the GUI-logic-data integration within a Mendix app is handled out-of-the-box in the Mendix platform which means that a typical Mendix project has much less integration points than e.g. a SOA layered architecture project, where every user story typically passes 3-5 technical layers.

## 2 Integration Overview

Integration best practices are intended for Architects, Lead Developers, and other stakeholders to evaluate different integration options that will make solutions stable and easy to maintain.

The integration best practices will cover the following content areas:

<<ADD Logo Figure 3 from email- Just to see if they like it?>>>

These are the typical use cases we intend to describe in this section.

<<ADD Logo Figure 4 from email- Just to see if they like it?>>>

At this time only usecases for LINK <<Workflow Integration>> and LINK <<Export Import and Batch Processing>> are completed

### 2.1 Enterprise Architecture, Positioning, Project validation

Integration Best Practices do not focus on positioning, but since the figures show Mendix in a number of roles, integrated with other systems in the enterprise it has the potential to be useful in this area. 

So Enterprise and Domain architects can scan  these documents  for typical use cases and eaxmples of how Mendidx has been used, in order to position Mendix within the enterprise, or validate for which projects and which roles Menidx apps may be useful. 
The diagram shows the basic steps expected:

<<ADD Logo Figure 5 from email- Just to see if they like it?>>>

### 2.2 Solution Architecture & Project Planning

Solution Architects and Lead Developers will gain an overview of the available options as well as recommendations for integration. This can lead to more realistic estimates and a better solution architecture. The diagram shows the basic steps expected:

![](attachments/integration-overview/solution-architecture.png)

### 2.3 Design & Architecture Reviews

The best practices will also help when conducting design reviews on existing solutions and evaluating ways to solve issues. This scenario could apply to a legacy solution or a larger Mendix solution. Reconsidering past decisions and refactoring is part of the Agile model for achieving value quickly and making gradual improvements.


### 2.4 Services for Test & Operations

A new category of integration is growing important in the DevOps and microservices areas. This type of integration is related to building services used to automate testing or to drive a coherent operational overview and support the maintenance team.

## 3 Related Documents

The integration best practices include [integration use cases](integration-use-cases) and guidelines. 

These in turn relate to the Evaluation Guide, the developer training modules, how-to’s, and the Mendix Reference Guide.
<<Link to Evaluation Guide on Integration>>
<<LINK to Training module on Integration>>
<<Link to How To on Integration>>
<<Link to Reference Guide on INtegration>>
