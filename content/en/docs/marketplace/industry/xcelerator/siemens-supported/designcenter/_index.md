---
title: "Designcenter X Cloud Services Connector"
url: /appstore/industry/siemens/designcenter/
weight: 40
description: "Describes how to install and configure the Designcenter X Cloud Services Connector in a Mendix application."
---
## Introduction

Designcenter X Cloud Services are scalable, cloud-hosted services that harness the power of Siemens Designcenter in the cloud. They expose design intelligence and high-compute analysis capabilities on-demand. Enterprise applications, dashboards, and automated workflows can consume these capabilities.

## Key Capabilities

The Designcenter X Cloud Services focus on two high-value capabilities:

1. Visual reporting data – Generated from Designcenter part files in Teamcenter and is available through APIs to build rich, design-aware experiences for customers.
2. High-compute design analysis – Executes an assembly clearance (clash) detection in the cloud so that users can offload large assembly analysis to the cloud.

The [Designcenter X Cloud Services connector](placeholder) available on Mendix Marketplace makes these services consumable from any Mendix application through a set of ready-to-use microflows. The Connector handles authentication, session management, and data exchange, allowing developers to focus on delivering high business value instead of managing underlying infrastructure. 

## Typical Use Cases

The Designcenter X Cloud Services connector unlocks scenarios such as:

* An enterprise dashboards that correlate design data (parts, assemblies, BOM structure) with enterprise data such as cost, supplier, quality, or program status.
* Historical clash result management – store, search, and trend clearance analysis results over time across releases, programs, or product lines.
* Design analytics – run analytics over visual report data and clash history to show design quality KPIs, regression detection, and rework hotspots.
* Engineering automation – trigger high-compute analyses, such as clash detection, on entire assemblies directly from Mendix workflows, with execution governed by business rules.
* Cross-discipline collaboration –  Make Designcenter intelligence accessible to non-CAD users, such as program managers, quality, and manufacturing teams, within the applications they already use.

{{% alert color="info" %}}
The Connector is licensed under the Apache V2.0 License.
{{% /alert %}}

## Prerequisites

* Studio Pro version 10.24 or above
* A valid Siemens Enterprise Cloud Account (ECA) with an entitlement to a Designcenter X X product tier and value based licensing tokens
* Access to the [Siemens Admin Console](https://cloud.sws.siemens.com/admin/) to provision server users and credentials
* Adopt Built-in Data Management (Teamcenter X Essentials) or any higher Teamcenter X tier (Standard/Advanced/Premium)

## Dependencies {#dependencies}

You must have the following Marketplace modules installed:

* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Mx Model Reflection](https://marketplace.mendix.com/link/component/69)
* [Events (widget)](https://marketplace.mendix.com/link/component/224259)
* [User Commons V2.3.0 or above](https://marketplace.mendix.com/link/component/223053)
* [OIDC SSO V4.5.0 or above](https://marketplace.mendix.com/link/component/120371)

## Installing the Connector

Follow the steps below to install the Designcenter X Cloud Services Conector in your Mendix app:

1. Install the modules listed in the [Dependencies](#dependencies) section above.
2. Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the [Designcenter X Cloud Services Connector](placeholder) into your app.
3. Configure the connector in your application by following the steps mentioned in the [Configuring the Connector](#configuration) section below.

## Configuring the Connector{#configuration}

To integrate the Designcenter X Cloud Services Connector into your Mendix Studio Pro application, you must configure it using the steps below:

1. Create a server user in the Siemens Admin Console and obtain client credentials.
2. Configure the Mendix application (modules, security, navigation, constants).
3. Configure the OIDC SSO in your Mendix application.

For more information, refer to [Configuring the connector for single sign-on]().

## Read More

* [Using Designcenter X Cloud Services Connector]()