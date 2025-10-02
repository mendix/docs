---
title: "Capital Connector"
url: /appstore/modules/siemens-plm/capital-connector/
description: "Describes the configuration and usage of the Siemens Capital connector. Capital is a Siemens software suite used for creating and designing E/E systems."

---

## Introduction

The Siemens [Capital](https://plm.sw.siemens.com/en-US/capital/) electrical and electronics (E/E) software tools help design and develop electrical and electronic systems, including system architecture, communication networks, and embedded software. 

The Mendix [Capital connector](https://marketplace.mendix.com/link/component/247337) consists of microflows that help you authenticate with Capital, effortlessly get Capital data into your Mendix app, and build custom implementations tailored to your needs.    

### Licensing

The Capital connector is licensed under the [Apache V2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

### Prerequisites
 
* Studio Pro version 10.24.3 or above
* A Capital instance

### Dependencies {#dependencies}

You must have the following Marketplace modules installed:

* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Encryption](https://marketplace.mendix.com/link/component/1011)

## Installation

Follow these steps to install the Capital connector in your Mendix app:

1. Install the modules listed in the [Dependencies](#dependencies) section.
2. Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Capital connector into your app.

## Configuring the Connection to Capital

Follow these steps to configure a connection to your Capital instance:

1. Open your app in Studio Pro.
2. In the **App Explorer**, double-click **Settings**. The **App Settings** window is displayed.
3. On the **Configurations** tab, double-click your configuration. The **Edit Configuration** window is displayed.
4. On the **Constants** tab, fill in the following details:

   * In the `CapitalConnector.CONST_Username` field, enter your Capital username. For security reasons, make sure this is set to `private`.
   * In the `CapitalConnector.CONST_Password` field, enter your Capital password. For security reasons, make sure this is set to `private`.    
   * In the `CapitalConnector.CONST_AuthenticationBaseURL` field, enter the URL used to authenticate with the Capital Service.     
     This URL typically has the following format: `{protocol}://{host}:{port}/capital/login`.
   * In the `CapitalConnector.CONST_BaseURL` field, enter the base URL for retrieving data from the Capital Service.     
     This URL typically has the following format: `{protocol}://{host}:{port}/capital/rest/v1`.
   * Adjust the value in the `CapitalConnector.CONST_CapitalSession_ExpirationInSeconds` field if your Capital instance has a custom session timeout.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/capital-connector/constants2.png" width=80% >}}

## Using the Connector

You can find the available operations in the microflow toolbox or in the **_USE ME** folder.     
The operations are ready to be dragged into your implementation microflows once you have set up the necessary credentials for authentication.

{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/capital-connector/operations.png" width=90% >}}

### Building Filters

Some Capital REST operations support filtering capabilities. In the connector, these operations have an optional filter parameter of type `string`.     
In the **Filtering** category of the toolbox, you can find microflows that allow you to build a filter. For guidance on how to implement these microflows, go to the **App Explorer** and check the example microflow in the **Filtering** folder.

For details on defining a filter, refer to the REST API documentation of your Capital instance. This is available by accessing `{protocol}://{host}:{port}/restapidocs/`.

### Capital object IDs

Some operations take an object ID as parameter. Many Capital objects have a `BaseID` attribute. For those that do not have this attribute, please use the ID getter microflow available in the toolbox. This takes the link attribute available on the associated metadata object, and returns the ID of the parent object.

## Resources

For information about the Capital REST API, please refer to the REST API documentation of your Capital instance. This is available by accessing `{protocol}://{host}:{port}/restapidocs/`.

