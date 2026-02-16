---
title: "OData Services"
url: /refguide9/integration/odata-services/
weight: 50
description: "Introduces OData."
---

## Introduction

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide filtering, sorting, and pagination on your resources, as well as how you should provide nested data structures. Using OData best practices ensures that your APIs are compatible with tools like Excel and PowerBI out of the box (see [Expose Data to BI Tools Using OData](/howto9/integration/exposing-data-to-bi-tools-using-odata/)), and also ensures that API clients can optimize payload size and minimize roundtrips for the best possible usage performance. 

Published OData services are registered automatically in the [Catalog](/catalog/), making them easily usable in other Mendix apps. Discovering and using OData resources in [external entities](/refguide9/external-entities/) is made easy for users deploying to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), as [published OData Services](/refguide9/published-odata-services/) are registered automatically in the [Catalog](/catalog/) and made available in the Studio Pro [Data Hub pane](/refguide9/data-hub-pane/).

To publish OData services, see:

* [Published OData Services](/refguide9/published-odata-services/), an overview in the Studio Pro guide
* [Expose Data to BI Tools Using OData](/howto9/integration/exposing-data-to-bi-tools-using-odata/), step-by-step instructions for a specific use case

To consume OData services, see:

* [Consumed OData Services](/refguide9/consumed-odata-services/), an overview in the Studio Pro guide

To wrap services, APIs, or databases in OData, see:

* [Wrap Services, APIs, or Databases with OData](/refguide9/wrap-services-odata/).
