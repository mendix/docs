---
title: "OData Services"
url: /refguide/integration/odata-services/
weight: 40
description: "Introduces OData services."
---

## Introduction

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide filtering, sorting, and pagination on your entities, as well as how you should provide nested data structures. Using OData best practices ensures your APIs are compatible with tools like Excel and PowerBI out of the box (see [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/)), and ensures that API clients can optimize payload size and minimize roundtrips for the best possible usage performance. 

Published OData services are registered automatically in the [Catalog](/catalog/), making them usable in other Mendix apps. Discovering and using them in [external entities](/refguide/external-entities/) is made easy for users deploying to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), as [published OData Services](/refguide/published-odata-services/) are registered automatically in the [Catalog](/catalog/) and made available in the Studio Pro [Integration pane](/refguide/integration-pane/).

To publish OData services, see:

* [Published OData Services](/refguide/published-odata-services/), an overview in the Studio Pro guide
* [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/), step-by-step instructions for a specific use case

To consume OData services, see:

* [Consumed OData Services](/refguide/consumed-odata-services/), an overview in the Studio Pro guide

To learn about using OData to implement REST best practices, see

* [Build OData APIs with REST Best Practices](/refguide/build-odata-apis/)

To wrap services, APIs, or databases in OData, see:

* [Register Non-OData Resources in the Catalog
](/catalog/register/register-non-odata-resources/)
