---
title: "Dynamic Case Management"
url: /appstore/partner-solutions/dcm/
linktitle: "DCM"
description: "Introduces Mendix Dynamic Case Management, which is a cloud service developed by Mendix and the Software Improvement Group (SIG), and the implemented checks for best practices."
aliases:
    - /addons/dcm-addon/
    - /addons/dcm-addon/index.html
---

## Introduction

[Mendix Dynamic Case Management](https://www.casefabric.com/#mendix) is a mendix add-on module developed by Mendix and CaseFabric. 
Mendix DCM enables complex process management, orchestration and dynamic case management embedded in a Mendix solution and is based on the CaseFabric case engine.

By enabling dynamic case management, there are numerous of benefits like:

 * Dynamic Case Management enables users to truly manage business dynamics and ‘Act Upon Insight’
 * Businesses battle inefficiencies due to dispersed and legacy data systems. This makes crucial information invisible or difficult to access, slowing down businesses
 * Businesses can model their processes and build workflows that handle numerous cases daily
 * Such holistic case management solutions streamline operations, increase efficiency, and make it possible to achieve business goals


## Dynamic Case Management

Dynamic Case Management add a CMMN based Case Modeler to Studio pro. Creating models integrated with the other Mendix
elements like the domain model Entities, Pages and Microflows enhances the App with dynamic case management capabilities.

The Mendix section of the [Case Management Guide](https://guide.casefabric.com/docs/mendix/overview.html) will get you
started building DCM based Apps.

## Mendix DCM Module

The Mendix Dynamic Case Management module supports modeling CMMN based components in your Mendix application. 
In Studio Pro, an additional modeler for Case Models is available to add DCM functionality to your application.

  * Map the domain model to the case file model
  * Use entities within your case model
  * Trigger your case model based on entity changes (for now needs explicit modeling)
  * Hot deployment during development (you can deploy your model directly to your running in development application)

**TODO** ink to the marketplace module here

## Security

The DCM module makes use of the users and roles as registered in Mendix. These users and roles are combined into a case team mapping the
users and roles to a specific case instance. Its possible to run exactly the same model with a different set of users and roles. 
Next to that, the DCM module is fully embedded into the Mendix application and runtime. By default there are *no* exposed endpoints.

## Architecture

The DCM module is fully embedded in the Mendix runtime. Explanation of the [Architecture](https://guide.casefabric.com/docs/mendix/architecture.html)
gives more insight. 

## Additional Information

{{% alert color="info" %}}
To obtain or renew your purchased license, go to [this form](https://addon.mendix.com/index.html).
{{% /alert %}}

* Mendix DCM is available for projects based on Mendix 10.24 and above.
* Mendix DCM is part of our Mendix price list. For more information or activation, please contact your Mendix Customer Success Manager or Sales.
* Detailed documentation is available via the complementary CaseFabric training and guide.

## Release Notes

{{% alert color="info" %}}
DCM is continuously improved and expanded. For an overview of recently released major features, see [DCM documentation](https://guide.casefabric.com/docs/mendix/releases.html). 
{{% /alert %}}
