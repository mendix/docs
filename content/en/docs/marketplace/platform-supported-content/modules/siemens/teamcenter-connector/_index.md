---
title: "Teamcenter Connector"
url: /appstore/modules/siemens-plm/teamcenter-connector/
description: "Describes the configuration and usage of the Teamcenter Connector, which allows the digital management of product and manufacturing data in the context of a product lifecycle."
---

## Introduction

Teamcenter is a virtual gateway to your company’s product information, connecting all who need to collaborate with product and process knowledge. Teamcenter enables you to digitally manage your product and manufacturing data in the context of the product life cycle.

Teamcenter Connector for Mendix enables Mendix developers to access product data from Teamcenter or create and modify product data in Teamcenter.

This documentation provides guidance on using Teamcenter Connector for Mendix. It assumes that you are familiar with Mendix concepts, processes, and terminology for application development.

## Prerequisites

To use Teamcenter Connector for Mendix, you need the following:

* Appropriate Teamcenter licenses
* A running and accessible Teamcenter instance. The minimum Teamcenter version supported is version 2406.
* The minimum Teamcenter X version supported is version 2506.
* The minimum Teamcenter Security Services version supported is version 2406 and above.

## Downloading Teamcenter Connector, the Sample Application, and Dependencies

You must download the Teamcenter Connector for Mendixapp, the sample application, and the dependencies. 

Teamcenter Connector for Mendix is available on the [Mendix Marketplace](https://marketplace.mendix.com/link/component/111627). To add the connector to your project:

1. Open your Mendix Modeler project.
2. Click the Marketplace icon on the menu bar to access the Mendix Marketplace.
3. Search for or navigate to the Teamcenter Connector and click the link.
4. On the Teamcenter Connector page, click **Download**.
5. In the **Import Module** dialog box, click **Import**.    
    The connector is imported in your project in the App Store Modules folder.
6. Similarly, download the following applications from the Mendix Marketplace: 

    * (Optional) Siemens PLM Software UI Resources. This application should be in the project that contains the Teamcenter Connector.
    * (Optional) Teamcenter Connector Sample Application. The Sample Application contains sample microflows. You do not require to download the Sample Application in the same project that also contains the Teamcenter Connector.

