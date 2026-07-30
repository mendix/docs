---
title: "Designcenter X Cloud Services Connector"
url: /appstore/industry/siemens/designcenter/
weight: 40
description: "Describes how to install and configure the Designcenter X Cloud Services Connector in a Mendix app."
---
## Introduction

Designcenter X Cloud Services are scalable, cloud-hosted services that expose Siemens Designcenter's design intelligence and high-compute analysis capabilities on demand. Enterprise apps, dashboards, and automated workflows can all consume these capabilities.

## Key Capabilities

The connector focuses on two high-value capabilities:

1. Visual reporting data – generated from Designcenter part files in Teamcenter and available through APIs to build rich, design-aware experiences for customers.
2. High-compute design analysis – runs assembly clearance (clash) detection in the cloud so that users can offload large assembly analysis to the cloud.

The [Designcenter X Cloud Services connector](placeholder) on Mendix Marketplace makes these services available in any Mendix app through ready-to-use microflows. The connector handles authentication, session management, and data exchange so developers can focus on delivering business value rather than managing infrastructure.

## Typical Use Cases

The connector supports scenarios such as:

* Enterprise dashboards that correlate design data (parts, assemblies, BOM structure) with enterprise data such as cost, supplier, quality, or program status.
* Historical clash result management – store, search, and trend clearance analysis results over time across releases, programs, or product lines.
* Design analytics – run analytics over visual report data and clash history to show design quality KPIs, regression detection, and rework hotspots.
* Engineering automation – trigger high-compute analyses, such as clash detection, on entire assemblies directly from Mendix workflows, with execution governed by business rules.
* Cross-discipline collaboration – make Designcenter intelligence accessible to non-CAD users, such as program managers, quality, and manufacturing teams, within the apps they already use.

{{% alert color="info" %}}
The connector is licensed under the Apache 2.0 License.
{{% /alert %}}

## Prerequisites

* Studio Pro 10.24 or above
* A valid Siemens Enterprise Cloud Account (ECA) with an entitlement to a Designcenter X product tier and value-based licensing tokens
* Access to the [Siemens Admin Console](https://cloud.sws.siemens.com/admin/) to provision server users and credentials
* Built-in Data Management (Teamcenter X Essentials) or a higher Teamcenter X tier (Standard, Advanced, or Premium)

## Dependencies {#dependencies}

You must have the following Marketplace modules installed:

* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Mx Model Reflection](https://marketplace.mendix.com/link/component/69)
* [Events (widget)](https://marketplace.mendix.com/link/component/224259)
* [User Commons V2.3.0 or above](https://marketplace.mendix.com/link/component/223053)
* [OIDC SSO V4.5.0 or above](https://marketplace.mendix.com/link/component/120371)

## Installing the Connector

To install the Designcenter X Cloud Services Connector in your Mendix app, follow these steps:

1. Install the modules listed in the [Dependencies](#dependencies) section.
2. Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the [Designcenter X Cloud Services Connector](placeholder) into your app.
3. Configure the connector as described in the [Configuring the Connector](#configuration) section.

## Configuring the Connector {#configuration}

To configure the Designcenter X Cloud Services Connector in your app, follow these steps:

1. Create a server user in the Siemens Admin Console and obtain client credentials.
2. Configure your Mendix app (modules, security, navigation, and constants).
3. Configure OIDC SSO in your Mendix app.

For more information, see [Configuring the Connector for Single Sign-On](/appstore/industry/siemens/designcenter/sso/).

## Read More

* [Using Designcenter X Cloud Services Connector](/appstore/industry/siemens/designcenter/using-designcenter/)
