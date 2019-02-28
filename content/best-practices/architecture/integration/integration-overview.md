---
title: "Integration"
category: "Architecture"
menu_order: 3
draft: true
---

{{% todo %}}[**COULD USE 1 MORE DIAGRAM**]{{% /todo %}}

## 1 Introduction

Internal integration—from GUI to logic to data—within a Mendix app is handled out-of-the-box in one model and one deployment.

Most solutions require integration with other apps and systems. Such integration is easy with Mendix, but there are many options to choose from. This should be the case, because integration is like the glue between components in a solution, and it needs to be adaptable for all possible functional scenarios.

As more core systems are being built using Mendix microservices, integration is increasingly important. This document discusses different types of integration and when one way to solve the problem may be better than another.

## 2 Integration Overview

These best practices are intended for Architects, Lead Developers, and other stakeholders to evaluate different integration options that will make solutions stable and easy to maintain.

The integration best practices will cover the following content areas:

{{% todo %}}[**ADD WHEN CHILD DOCS ADDED UNDER Mendix & Integration**]{{% /todo %}}

### 2.1 Typical Use Cases

These are the typical use cases when integration best practices will be helpful:

* Single sign-on, active directory, and identity integration
* UI and content management system integration
* Normal system integration
* [Export, import, and batch processing](export-import-batch)
* Master data integration
* Data distribution
* Operations, IoT, AI, business intelligence, and reporting

### 2.2 Solution Architecture & Project Planning

The best practices can be used by Solution Architects and Lead Developers to gain an overview of the available options as well as recommendations for integration. This can lead to more realistic estimates and a better solution architecture.

{{% todo %}}[**UPDATE DIAGRAM; EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/integration-overview/solution-architecture.png)

### 2.3 Design & Architecture Reviews

The best practices will also help when conducting design reviews on existing solutions and evaluating ways to solve issues. This scenario could apply to a legacy solution or a larger Mendix solution. Reconsidering past decisions and refactoring is part of the Agile model for achieving value quickly and making gradual improvements.

{{% todo %}}[**IT IS NOT CLEAR HOW SECTIONS 2.4 AND 2.5 RELATE TO USING THESE BEST PRACTICES - THEY JUST TALK ABOUT DIFFERENT TYPES OF INTEGRATION, NOT WHAT IS SPECIFICALLY IN THESE DOCUMENTS OR USE CASES**]{{% /todo %}}

### 2.4 Services for Test & Operations

A new category of integration is growing important in the DevOps and microservices areas. This type of integration is related to building services used to automate testing or to drive a coherent operational overview and support the maintenance team.

### 2.5 IoT & AI

Other new areas for integration are IoT—where event streams become important—and AI and
machine learning, where Mendix apps can use external AI engines to produce intelligent apps.

## 3 Related Documents

The integration best practices include [integration use cases](integration-use-cases) and guidelines. 

{{% todo %}}[**ADD LINKS TO MODULES/DOCS BELOW**]{{% /todo %}}

These in turn relate to developer training modules, how-to’s, and information in the Mendix Reference Guide.

{{% todo %}}[**UPDATE DIAGRAM; EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/integration-overview/integration-related-documents.png)
