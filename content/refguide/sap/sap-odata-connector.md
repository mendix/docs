---
title: "SAP OData Connector"
category: "SAP"
description: "Presents reference information on the use of the SAP OData connector."
tags: ["SAP", "integration", "OData", "BAPI"]
---

## 1 Introduction

The SAP OData Connector is a specific SAP connector for integrating with SAP back-end systems like SAP Business Suite (SAP ERP 6.0), SAP S/4HANA, SAP S/4HANA Cloud, and SAP SuccessFactors.

The SAP OData Connector allows you to quickly integrate with an SAP back-end system running both in the cloud and on-premises. When running the Mendix application in SAP Cloud Platform, the SAP Cloud Connector will automatically be utilized to gain access to your on-premises SAP instance. For more information, see the [SAP Cloud Connector](sap-cloud-connector) documentation and the [SAP OData Connector](https://appstore.home.mendix.com/link/app/74525/Mendix/SAP-OData-Connector) in the Mendix App Store.

![](attachments/sap-odata-connector/appstore-sapodata.png)

The SAP OData Connector module can be used in combination with an SAP Service Module. For more details, see [SAP Service Modules](sap-service-modules).

The connectors and the domain model of the **SAP OData Connector** module are described below.

## 2 Connectors

The SAP OData Connector module has five operations for performing five different types of actions.

All the operations can make use of a domain model representing the SAP Services data model. This data model can be retrieved by inspecting the metadata of the service. Pre-built service models can be downloaded in the Mendix App Store from the **SAP Business Suite** modules.

The connectors are described below.

### 2.1 Create

The Create operation creates a new entity from the SAP service. The entity is defined by the domain model described below (see [3 Domain Model](#DomainModel)).

For example, this connector can be used to create a task in the **My Tasks** app using the **Field Sales Representative** service.

### 2.2 Delete

The Delete operation deletes an existing entity from the SAP service. The entity is defined by the domain model described below.

For example, this connector can delete a task in the **My Tasks** app using the **Field Sales Representative** service.

### 2.3 Get List

The Get List operation gets an existing entity collection from the SAP service. The entity is defined by the domain model described below.

For example, this connector can get a list of tasks in the **My Tasks** app using the **Field Sales Representative** service.

### 2.4 Get Entity

The Get Entity operation gets an existing single entity from the SAP service. The entity is defined by the domain model described below.

For example, this connector can get a single task in the **My Tasks** app using the **Field Sales Representative** service.

### 2.5 Update

The Update operation changes an existing single entity from the SAP service. The entity is defined by the domain model described below.

For example, this connector can update a task in the **My Tasks** app using the **Field Sales Representative** service.

## 3 Domain Model<a name="DomainModel"></a>

The SAP OData Connector module has a domain model that describes the information in the connector's data in an abstract way. It is central to the architecture of the connector module. The domain model consists of entities and their relations represented by associations. For more information on domain models, see [Domain Model](/refguide/domain-model) in the Mendix Reference Guide.

Each entity has a list of attributes, which are described below.

### 3.1 Entities

An entity represents a class of real-world objects, such as customers, invoices, work items, etc. An instance of an entity is called an object. For example, the object representing the person "Bob Marley" could be an instance of the entity "Person". For more information, see [Entities](/refguide/entities) in the Mendix Reference Guide.

### 3.2 Attributes

Attributes are characteristics that describe and/or identify an entity. For example, a "customer" entity typically has attributes for the name of the customer, an e-mail address, and other personal information. For more information, see [Attributes](/refguide/attributes) in the Mendix Reference Guide.

### 3.3 Data

These are the entities with their attributes:

* **ODataObject** – represents the generic OData object
    * **ObjectURI** – the address of the OData object
* **OdataRoot** - contains the data and the metadata of the search result
* **Header** - additional information that specifies the HTTP request
    * **Name** - the name of the header
    * **Value** - the value of the header
* **Cookie** - the information required for handling the cookies of the session (handled internally by the OData Connector)
* **CSRFToken** - the required security token for modifying data on a line of business modules (handled internally by the OData Connector)
    * **csrfTokenValue**

## 4 Scenario

The SAP OData Connector can be used for all SAP back-end systems that have OData enabled. For ECC, SAP Gateway will be used to expose the traditional BAPI interface as an OData service.

For more information, see [How to Use the OData Connector](/howto/sap/use-sap-odata-connector).

## 5 Related Content

* [How to Use the OData Connector](/howto/sap/use-sap-odata-connector)
