---
title: "Dynamic Case Management"
url: /appstore/partner-solutions/dcm/
linktitle: "DCM"
description: "Introduces Mendix Dynamic Case Management for complex processes."
beta: true
---
{{% alert color="warning" %}} This feature is in Private Beta. For more information, refer to [Release Status](/releasenotes/release-status/). {{% /alert %}}

## Introduction

[Mendix Dynamic Case Management](https://marketplace.mendix.com/link/component/242816) (Mendix DCM) is an add-on module developed by Mendix in collaboration with CaseFabric.
Mendix DCM enables complex process management, orchestration, and dynamic case management directly within Mendix apps using the CaseFabric case engine.    

Dynamic case management (DCM) is the process of using technology to facilitate complex cases. It helps organizations:

* Act upon insights by managing dynamic business processes.
* Eliminate inefficiencies caused by legacy systems.
* Model and automate complex workflows.
* Streamline operations and improve goal achievement.

For more information, refer to [DCM for Mendix](https://www.casefabric.com/#mendix) in the CaseFabric documentation.

## Mendix DCM Module

CaseFabric’s DCM solution brings powerful case modeling capabilities to Studio Pro, using the [CMMN (Case Management Model and Notation)](https://www.omg.org/spec/CMMN/1.1) standard. This means you can build flexible, event-driven case models that work seamlessly with Mendix elements like your domain model, entities, pages, and microflows, making your app smarter and more responsive.
The Mendix DCM module provides Studio Pro with a modeler specifically for case models. This lets you:

* Map your domain model to the case file model.
* Use existing entities directly within your case model.
* Trigger your case model based on entity changes. This currently requires explicit modeling.
* Perform hot deployment during development, i.e. deploy your model directly to the app which is running in development.
Refer to [DCM for Mendix](https://guide.casefabric.com/docs/mendix/overview.html) in CaseFabric's *Case Management Guide* for details on how to start building DCM-based apps.

### Architecture

The Mendix DCM module is fully embedded in the Mendix runtime. Refer to the [Architecture](https://guide.casefabric.com/docs/mendix/architecture.html)
page in CaseFabric's documentation for details.

## Roles and Security

The Mendix DCM module leverages the Mendix built-in user and role management system. Users and roles are combined into a case team, which is mapped to a specific case instance.
You can reuse the same case model across different teams by assigning distinct users and roles.
The Mendix DCM module is fully embedded into the Mendix application and runtime. By default, it does not expose any external endpoints.

## Licensing and Availability

* To obtain or renew a Mendix DCM license, contact your Mendix account manager.
* Mendix DCM is available for projects based on Studio Pro 10.24 and above.
* Mendix DCM is part of the Mendix price list. For more information or activation, contact your Mendix Customer Success Manager or your Sales representative.

## CaseFabric DCM Release Notes

CaseFabric's DCM is continuously improved and expanded. For an overview of recently released major features, refer to the [DCM documentation](https://guide.casefabric.com/docs/mendix/releases.html).
