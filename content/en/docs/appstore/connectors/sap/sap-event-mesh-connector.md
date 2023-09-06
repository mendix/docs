---
title: "{CONNECTOR-NAME}"
url: /appstore/connectors/sap/{CONNECTOR-NAME}/
description: "Describes the configuration and usage of the {CONNECTOR NAME} connector from the Mendix Marketplace. {SAP SERVICE NAME} is {SAP SERVICE DESCRIBED IN 1 SENTENCE}."
weight: 20
tags: ["marketplace", "marketplace component", "SAP", "{CONNECTOR NAME}", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

{BRIEFLY DESCRIBE WHAT YOU CAN ACHIEVE BY USING THE CONNECTOR. INCLUDE LINKS TO THE CONNECTOR PAGE ON MARKETPLACE, AND TO THE SAP SERVICE WEBSITE.}

### 1.1 Typical Use Cases

{DESCRIBE WHAT THE SAP SERVICE DOES. MUST VERIFY WITH SAP IF WE CAN USE THE SERVICE DESCRIPTION FROM THE SAP WEBSITE.}

### 1.2 Prerequisites {#prerequisites}

#### VARIANT 1 - IF THE CONNECTOR ONLY REQUIRES THE SAP AUTHENTICATION CONNECTOR

{LIST PREREQUISITES}

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the SAP service to which is connects may incur a usage cost. For more information, refer to SAP documentation.

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the {CONNECTOR NAME} connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **{MODULENAME}** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to {SAP SERVICE NAME}. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the SAP service, you must also configure SAP authentication for the connector.

### 3.1 Configuring SAP Authentication

{DESCRIBE THE AUTHENTICATION}

### 3.2 Configuring a Microflow for an SAP Service

After you configure the authentication profile for {SAP SERVICE NAME}, you can implement the functions of the connector by using the provided activities in microflows. For example, to {DESCRIBE A TASK}, implement the {ACTIVITY NAME, WITH LINK TO THE RELEVANT SECTION IN TECHNICAL REFERENCE BELOW} activity by doing the following steps:

{A DETAILED STEP-BY-STEP CONFIGURATION PROCEDURE, WITH SCREENSHOTS. SEE THE DYNAMODB CONNECTOR DOC FOR THE LEVEL OF DETAIL THAT'S REQUIRED.}

## 4 Technical Reference

To help you work with the {CONNECTOR NAME} connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

| Name | Description |
| --- | --- |
| {ENTITY NAME} | {ENTITY DESCRIPTION} |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the {CONNECTOR NAME} connector, enumerations list values such as {USUALLY "the list of available SAP regions", POSSIBLY ALSO OTHERS AS REQUIRED}.

#### 4.2.1 `{ENUMERATION NAME}`

| Name | Caption | Description |
| --- | --- | --- |
| {ENUMERATION ELEMENT NAME} | {ENUMERATION ELEMENT VALUE} | {ENUMERATION ELEMENT DESCRIPTION} |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the {CONNECTOR NAME} connector, they {PURPOSE OF THE ACTIVITIES}.

#### 4.3.1 {ACTIVITY NAME}

The `{ACTIVITYNAME}` {SAP SERVICE NAME} activity allows you to {ACTIVITY PURPOSE}. It requires {REQUIRED PARAMETERS}. {OPTIONAL, IF THE ACTIVITY HAS NO OUTPUT: "This activity has no return value.
"}

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `{INPUT OBJECT}` | `{OUTPUT OBJECT}` |

##### OPTIONAL, INCLUDE ONLY IF THE ACTIVITY RETURNS AN OUTPUT:

This activity returns a `{OUTPUT OBJECT}` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `{ENTITY NAME}` | `{ENTITY GENERALIZATION}` | {ENTITY DESCRIPTION} |
