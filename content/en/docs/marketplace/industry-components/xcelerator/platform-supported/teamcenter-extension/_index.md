---
title: "Teamcenter Extension"
url: /appstore/modules/siemens-plm/teamcenter-extension/
description: "Describes Teamcenter Extension from the Mendix Marketplace. Teamcenter Extension facilitates a low-code approach to integrating with Siemens Teamcenter."
aliases:
    - /appstore/modules/teamcenter-extension/
---

## Introduction {#introduction}

[Teamcenter Extension](https://marketplace.mendix.com/link/component/225544) is a Mendix extension built using the Mendix Extensibility Framework. Its aim is to provide you with an effortless means to harness the capabilities of [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627) for Mendix. Teamcenter Extension is built on Teamcenter Connector. It provides a low-code experience by making it easier to visualize and access Siemens Teamcenter data models and automating creation of Mendix domain models and microflows.

{{% alert color="info" %}}Teamcenter Extension V 3.0.0 and above is also supported on macOS.{{% /alert %}}

### Typical Use Cases {#typical-use-cases}

Teamcenter Extension offers a list of use cases for which domain models and microflows can be created. After you select a use case, it uses an import mapping approach similar to Mendix [import mapping](/refguide/import-mappings/). Here, Teamcenter Extension allows you to select data from the business model of your Teamcenter instance. Teamcenter Extension uses the selected use case, the import mapping, and, in some use cases, additional configurations to generate and update the domain model for your integration and generate one or more ready-to-use microflows that you can drag and drop into your application logic.

Teamcenter Extension offers the following integration options:

* Search item revisions
* Create item and item revision
* Update item and item revision
* Revise item revision
* Search datasets
* Get datasets for item revision
* Attach dataset to item revision
* Search workspace objects
* Relate workspace objects
* Get structure
* Get properties

### License {#license}

Teamcenter Extension is free to download and use. You may, however, require a Teamcenter (Author or Consumer) license to connect to Teamcenter.

### Dependencies {#dependencies}

You must have these Marketplace modules installed:

* [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627): needed for all versions of Teamcenter Extension
* [Community Commons](https://marketplace.mendix.com/link/component/170): only needed for Teamcenter Extension V 1.0.0

Compatibility among Teamcenter Extension, Teamcenter Connector, and Studio Pro is as follows:

| Teamcenter Extension Version | Teamcenter Connector Version | Studio Pro Version |
| ------------- | ------------- | ------------- |
| 1.0.0 | 3.6.1, V 3.6.0, V 3.5.0 | 10.6.5 thru 10.7 |
| 2.0.0 | 2406.0.0 | 10.12, patch versions 1 and above and 10.16.0 and above |
| 3.0.0 thru 4.1.0 | 2406.3.0 and above | 10.12 patch version 6 and above and 10.16.0 and above |
| 4.1.1 | 2406.3.0 and above | 10.24.0 and above |
| 4.2.0 | 2406.3.0 and above |  10.24.8 and above |

{{% alert color="info" %}}
Teamcenter Extension is not compatible with Studio Pro versions between 10.8 and 10.11, as well as 10.13.x, 10.14.x, and 10.15.x. If you use one of these Studio Pro versions, a possible workaround is to use Teamcenter Extension in one of the compatible versions of Studio Pro first, create the necessary artifacts, and then import them into your version. However, Mendix always recommends using the latest MTS or LTS Studio Pro version.
{{% /alert %}}

{{% alert color="info" %}}
If you use Teamcenter Extension V 1.0.0 with Teamcenter Connector V 3.6.1 or below and want to upgrade to Teamcenter Extension V 3.0.0 and Teamcenter Connector V 2406.3.0, refer to the [Upgrading Teamcenter Extension V 1.0.0 to V 3.0.0](/appstore/modules/siemens-plm/teamcenter-extension/upgrading-teamcenter-extension/#upgrade) section in *Upgrading Teamcenter Extension*.
{{% /alert %}}

### Demo App {#demo-app}

To see Teamcenter Extension in action, download and play with the [Teamcenter Extension Sample App](https://marketplace.mendix.com/link/component/225910).

## Extension Installation {#extension-installation}

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Teamcenter Extension into your app.
