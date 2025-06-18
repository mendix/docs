---
title: "{CONNECTOR-NAME}"
url: /appstore/connectors/aws/{CONNECTOR-NAME}/
description: "Describes the configuration and usage of the {CONNECTOR NAME} connector from the Mendix Marketplace. {AWS SERVICE NAME} is {AWS SERVICE DESCRIBED IN 1 SENTENCE; PER CONFIRMATION FROM AWS, WE CAN USE THE SERVICE DESCRIPTION FROM THE AWS WEBSITE}."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

{BRIEFLY DESCRIBE WHAT YOU CAN ACHIEVE BY USING THE CONNECTOR. INCLUDE LINKS TO THE CONNECTOR PAGE ON MARKETPLACE, AND TO THE AWS SERVICE WEBSITE.}

### Typical Use Cases

{DESCRIBE WHAT THE AWS SERVICE DOES. PER CONFIRMATION FROM AWS, WE CAN USE THE SERVICE DESCRIPTION FROM THE AWS WEBSITE.}

### Prerequisites {#prerequisites}

#### VARIANT 1 - IF THE CONNECTOR ONLY REQUIRES THE AWS AUTHENTICATION CONNECTOR

The {CONNECTOR NAME} connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the {CONNECTOR NAME} connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

#### VARIANT 2 - IF THE CONNECTOR ALSO HAS OTHER DEPENDENCIES

The {CONNECTOR NAME} connector requires Mendix Studio Pro version 9.18.0 or above.

To use the {CONNECTOR NAME} connector, you must also install and configure the following modules:

* [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the {CONNECTOR NAME} connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
* {OTHER MODULES AS REQUIRED, WITH A SHORT DESCRIPTION OF THEIR PURPOSE AND A LINK TO THEIR PAGES ON MARKETPLACE.}

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the {CONNECTOR NAME} connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **{MODULENAME}** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to {AWS SERVICE NAME}. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

#### THIS SECTION HAS SCREENSHOTS FROM THE DYNAMODB CONNECTOR. REPLACE THEM WITH SIMILAR SCREENSHOTS FROM YOUR CONNECTOR.

In order to use the {AWS SERVICE NAME} service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](https://docs.mendix.com/appstore/connectors/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for {AWS SERVICE NAME}, you can implement the functions of the connector by using the provided activities in microflows. For example, to {DESCRIBE A TASK}, implement the {ACTIVITY NAME, WITH LINK TO THE RELEVANT SECTION IN TECHNICAL REFERENCE BELOW} activity by doing the following steps:

{A DETAILED STEP-BY-STEP CONFIGURATION PROCEDURE, WITH SCREENSHOTS. SEE THE DYNAMODB CONNECTOR DOC FOR THE LEVEL OF DETAIL THAT'S REQUIRED.}

## Technical Reference

To help you work with the {CONNECTOR NAME} connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

| Name | Description |
| --- | --- |
| {ENTITY NAME} | {ENTITY DESCRIPTION} |

### Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the {CONNECTOR NAME} connector, enumerations list values such as {AS REQUIRED}.

#### `{ENUMERATION NAME}`

| Name | Caption | Description |
| --- | --- | --- |
| {ENUMERATION ELEMENT NAME} | {ENUMERATION ELEMENT VALUE} | {ENUMERATION ELEMENT DESCRIPTION} |

### Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the {CONNECTOR NAME} connector, they {PURPOSE OF THE ACTIVITIES}.

#### {ACTIVITY NAME}

The `{ACTIVITYNAME}` {AWS SERVICE NAME} activity allows you to {ACTIVITY PURPOSE}. It requires {REQUIRED PARAMETERS}. {OPTIONAL, IF THE ACTIVITY HAS NO OUTPUT: "This activity has no return value.
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
