---
title: "Teamcenter BOM Component"
url: /partners/siemens/teamcenter-bom-widget/
weight: 20
description: "Describes the Teamcenter BOM component, which enables out-of-the-box visualization of large Bill Of Material (BOM) data sets similar to what is available in Teamcenter's Active Workspace."
---

## Introduction

The [Teamcenter BOM component](https://marketplace.mendix.com/link/component/259697) brings Teamcenter Bill of Materials (BOM) capabilities into Mendix apps. You can use it to view, edit, configure, and perform property updates on Teamcenter BOM structures directly in Mendix, thus reducing context switches and simplifying product structure tasks.

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/bom-widget-studio-pro.png">}}

## Key Capabilities

* Display Teamcenter BOMs – Render complex product structures within Mendix pages.
* Edit BOM properties – Update BOM line properties from Mendix.
* Apply a Teamcenter configuration – Use revision rules, effectivities (date/unit), and product variants.
* Augment with Mendix data – Inject custom client columns alongside Teamcenter properties.

## Prerequisites

* Teamcenter Connector version 2512.0.0 or above. The component depends on its request handler.
* Access to a Teamcenter environment in version 2512.0.0 or above with appropriate credentials and permissions. The component utilizes new APIs introduced in Teamcenter 2512.0.0, hence cannot be used with older versions of Teamcenter.
* Teamcenter base platform and Structure Management modules installed.
* Mendix Studio Pro 10.24.12 or above.
* A Mendix app with the `TcConnector` module added and configured.

## Persistence and Propagation

Edits made through the component invoke Teamcenter services via `TcConnector`. Changes to BOM line properties are propagated to Teamcenter when the operation is committed and accepted by the server. You must ensure that users have appropriate permissions, and consider requiring explicit save/commit actions through the user interface.

## Best Practices

Mendix recommends applying these best practices to ensure proper performance:

* Keep titles and headers concise and technical. Avoid marketing language in developer documentation.
* Use unique `WidgetIDs` per page to avoid collisions.
