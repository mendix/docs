---
title: "Integration"
category: "Architecture"
menu_order: 3
draft: true
---

## 1 Introduction

The Mendix Expert Best Practices for Integration will help Lead Developers, Designers, and Architects to see examples for integration solutions made with the Mendix Platform involved. They will also provide recommendations for when to choose one option over another.

### 1.1 What Questions Are Addressed?

These are the questions addressed in the Integration Best Practices:

* What are good business scenarios for using Mendix?
* How do you integrate Mendix in an enterprise landscape?
* What technical and functional options are there for integration?
* How do you move towards a more microservice-oriented architecture?

![](attachments/integration-overview/int-ov2.png)

### 1.2 Integration Guidelines

These Best Practices contain theoretical guidelines for the following areas:

* [Service Integration](service-integration)
* [UI Integration](ui-integration)
* [Event-Based Integration](event-integration)
* [Batch Integration](batch-integration)
* [Central Data](central-data)
* [Process Integration](process-integration)
* [Integration Layers](integration-layers)
* [Ops & CI/CD Integration](ops-cicd-integration)
* [Integration Recommendations](integration-recommendations)

### 1.3 Integration Examples

The Integration Best Practices also include [Integration Examples](integration-examples). In future versions, these documented examples will be accompanied by examples in the Mendix App Store.

Tthe typical examples that will be described are shown in the diagram below. At this time, only use cases for [Export, Import & Batch Processing](export-import-batch) and [Workflow Integration](workflow-integration) are available. 

![](attachments/integration-overview/int-ov4.png)

## 2 How to Use the Integration Best Practices

### 2.1 Enterprise Architecture, Positioning & Project Validation

Enterprise and Domain Architects can scan these Best Practices for typical examples of how the Mendidx Platform has been used for integration. This is useful for positioning Mendix within the enterprise and validating for which projects and roles Menidx apps may be useful. This diagram presents the basic steps of this process:

![](attachments/integration-overview/int-ov5.png)

### 2.2 Solution Architecture & Project Planning

Solution Architects and Lead Developers will gain an overview of the available options as well as recommendations for integration. This can lead to more realistic estimates, a better solution architecture, and hopefully more stable solutions. The diagram shows the basic steps expected:

![](attachments/integration-overview/solution-architecture.png)

### 2.3 Design & Architecture Reviews

The Best Practices will also help when conducting design reviews on existing solutions and evaluating ways to solve issues. This scenario could apply to a legacy solution or a larger Mendix solution. Reconsidering past decisions and refactoring is part of the Agile model for achieving value quickly and making gradual improvements.

![](attachments/integration-overview/int-ov6.png)

### 2.4 Services for Test & Operations

A new category of integration is growing important in the DevOps and microservices areas. This type of integration is related to building services used to automate testing or to drive a coherent operational overview and support the maintenance team.

![](attachments/integration-overview/int-ov7.png)

## 3 Related Documents

There is the following documentation and training material available around integration:

* [Integration](/refguide7/integration) in the *Mendix 7 Reference Guide*
* [Integration](/howto7/integration/) in the *Mendix 7 How-to's*
* [Integration](https://www.mendix.com/evaluation-guide/app-capabilities/integration) in the *Mendix Platform Evaluation Guide*
* [Integration Authentication](https://gettingstarted.mendixcloud.com/link/module/117/lecture/944) in the *Mendix Academy*
