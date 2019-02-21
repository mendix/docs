---
title: "Integration"
category: "Architecture"
menu_order: 3
draft: true
---

## 1 Introduction

Mendix is optimized for the easiest and fastest way to develop and maintain Apps
that fulfil a business function. Internal integration from GUI to Logic to Data
within a Mendix App is handled out of the box, in one Model and one deployable.

But most solutions also require integration with other Apps and systems.
Integration is easy in Mendix, but there are many options to choose from, as
should be the case, because integration is like the glue between components in a
solution and needs to be adaptable to all possible functional scenarios.

As more Core systems are being built using Mendix Microservices, the integration
part is increasingly important. This document discusses different types of
integration and when one way to solve the problem may be better than another.

## 2 Performance Overview

This document is intended for architects, stake-holders and lead developers to
evaluate different integration options that makes solutions stable and easy to
maintain.

### 2.1 Typical Use Cases

Some typical Integration Cases where this document is helpful are:

-   SSO, AD and Identity integration

-   UI and CMS Integration

-   Normal System Integration

-   Export, Import & Batch

-   Master Data Integration

-   Data Distribution

-   Ops, AI, IoT, BI, Reporting

### 2.2 Solution Architecture & Project Planning

The document can be used by Solution Architects and Lead Developers to get an
overview of the options available, and what is recommended within Integration,
leading to better estimates and a good solution architecture.

![](attachments/integration-overview/solution-architecture.png)

### 2.3 Design or Architecture Review

The document also helps for performing Design review on existing solutions and
evaluate options for how things could be solved. This could be for a Legacy
solution or a larger Mendix solution. Re-considering past decisions and
re-factoring is part of the Agile model for achieving quickly value, and gradual
improvements later.

### 2.4 Services for Test and Operations

A new category of integration is growing increasingly important in the DevOps
and Microservices area, that is related to building services that are used to
automate testing or to drive a good operational overview and support the
maintenance team.

### 2.5 IoT & AI

Other new areas are IoT, where event streams become important, and AI and
Machine learning, where Mendix Apps can use external AI engines to produce
intelligent Apps

## 3 Related Documents

This document is followed by Use Case specific guidelines, that in turn relate
to developer trainings and how-to’s and information in the Mendix 7 reference
guide.

![](attachments/integration-overview/integration-related-documents.png)
