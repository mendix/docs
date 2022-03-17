---
title: "SAP Data Models"
url: /partners/sap/sap-data-models/
category: "SAP"
weight: 30
description: "Presents reference information on the use of SAP data models."
tags: ["SAP", "integration", "SAP services", "OData"]
---

## 1 Introduction

Mendix apps can consume OData services exposed by SAP back-end systems. To do this you need to use the OData Connector for SAP solutions.

The OData Connector for SAP solutions needs to know details of the OData service which has been exposed. This involves mapping the data structures exposed by the OData service (via the $metadata URL) to entities and attributes of the domain model. This information is created as a Mendix module (.mpk) file which can be imported into your Mendix app.

Any OData service can be used to generate a data model using the Model Creator for SAP solutions. See [How To Use the OData Model Creator for SAP Solutions](/partners/sap/use-sap-odata-model-creator/) for instructions on how to do this.

## 2 SAP Data Models

The Data Model module contains up to four resources which help to consume the OData Service:

* Domain Model
* Service Root
* Entity Set Names
* Function Names

### 2.1 Domain Model

Each Mendix SAP data model has a domain model that describes the information in the OData service. The domain model consists of entities and their relations represented by associations. For more information, see [Domain Model](/refguide/domain-model/).

{{< figure src="/attachments/partners/sap/sap-data-models/sap-service-example.png" >}}

{{% alert color="warning" %}}
Do not change the names of entities, attributes, or associations in the Domain Model; they need to match the names used by the SAP OData service for the OData Connector for SAP solutions to work correctly.
{{% /alert %}}

### 2.2 Service Root

The module contains a constant whose value is the service root of the OData service. For example, the **GWSAMPLE_BASIC** data model, generated from the SAP Catalog Service using the Model Creator for SAP solutions has a Service Root which is the constant GWSAMPLE_BASIC which has the value `https://sapes5.sapdevcenter.com:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC`.

### 2.3 Entity Set Names

The enumeration **EntitySetNames** contains a list of the collections in the service. These are entities which can be queried to produce a list of matching objects.

### 2.4 Function Names

The enumeration **FunctionNames** contains a list of functions which are exposed by the OData service. To assist in using these functions the domain model will also include an entity for each function, suffixed with the string *Parameters*, which is used to provide the required parameters to the function.

## 3 Read More

* [OData Connector for SAP Solutions](/partners/sap/sap-odata-connector/)
* [How To Use the OData Model Creator for SAP Solutions](/partners/sap/use-sap-odata-model-creator/)
