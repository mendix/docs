---
title: "Expose a Web Service"
url: /refguide9/integration/expose-a-web-service/
weight: 12
description: "Describes how Mendix supports exposing the functionality and data of your app using web services."
aliases:
    - /howto9/integration/expose-a-web-service/
---

## Introduction

Mendix supports many ways to expose the functionality and data of your application to others. The easiest way is to use web services. A web service can contain multiple operations.

This how-to teaches you how to do the following:

* Create a web service
* Publish a microflow as web service operation

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest version of [Mendix Studio Pro](https://marketplace.mendix.com/)

{{% alert color="warning" %}}
This how-to was written based on Studio Pro 9.24. All the images, names, and steps in this how-to are based on this version. When using other versions, the images and/or names on your screen may be different than the images and names used in this how-to.
{{% /alert %}}

## Data Structure and GUI

1. Create the following **Customer** entity in your domain model (for details on how to create an entity, see [Create a Basic Data Layer](/refguide9/create-a-basic-data-layer/)):

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/8945665.png" class="no-border" >}}

2. Create overview and detail pages to manage objects of the **Customer** type (for details on how to create overview and detail pages, see [How to Create Your First Two Overview and Detail Pages](/howto9/front-end/create-your-first-two-overview-and-detail-pages/).
3. Create a menu item to access the customer overview page (for details on how to create menu items, see [Setting Up Navigation](/refguide9/setting-up-the-navigation-structure/).
4. Run the application and add some data to expose in the web service.

## Creating a Published Web Service {#create-published-web-service}

To create a published web service, follow these steps:

1. Right-click the module in which you want to store the published web service and select **Add other** > **Published web service**.

2. In the **Add Published Web Service** window, enter *CustomerWebService* for the **Name** and then click **OK**:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581728.png" class="no-border" >}}

3. You should now see the **Published Web Service** properties window. Take note of the following tab details:
    * On the **Operations** tab, you can see the available operations of the web service (currently the list is empty, so we'll add an operation in section [Publishing a Microflow](#publish-a-microflow)):

        {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581713.png" class="no-border" >}}

    * On the **Settings** tab, you can configure the other settings. Do change them before publishing your web service, especially the **Target namespace** (for details on these settings, see [Published Web Service](/refguide9/published-web-service/) in the *Studio Pro Guide*):

        {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581712.png" class="no-border" >}}

4. Click **OK.**

## Creating the Functionality to Expose {#expose}

To create the functionality to expose, follow these steps:

1. Create a microflow that retrieves and returns a list of customers from the database (for details on how to create a microflow, see [Triggering a Microflow From a Menu Item](/refguide9/triggering-microflow-from-menu-item/)).
2. To make the microflow more exciting, add two input parameters to dynamically set the range settings of the retrieve action. Configure the range options of the retrieve action like this:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581709.png" class="no-border" >}}

    Reference this microflow:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/model.jpg" class="no-border" >}}

If you get any errors, you will need to mark the input parameters in the **Operations** > **Paremeters** section of the service document as **Optional** and **Nillable** (see the following section.)

## Publishing a Microflow {#publish-a-microflow}

To publish a microflow, follow these steps:

1. Right-click somewhere in the background of the microflow and select **Publish as Web service operation**:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581708.png" class="no-border" >}}

2. Locate the web service created in [Creating a Published Web Service](#create-published-web-service) and click **Select**:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581723.png" class="no-border" >}}

3. You should now see the **Operation Operation** properties editor. Take note of the following tab details:

    * On the **General** tab, you can change the **Name** and **Documentation**.
    * On the **Parameters** tab, you can mark the input parameters as **Optional** and **Nillable** (needed when adding [parameters](/refguide9/parameter/) during the [creating the functionality to expose](#expose) step)
    * On the **Return type** tab you can configure the return type.

4. Click **Select...** to select which attributes and associations of the return object **Customer** you want to expose:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581704.png" class="no-border" >}}

5. Select the members you want to expose and click **OK**. Only the selected members will be returned by the web service.
6. Click **OK** to save the operation.

## Getting a WSDL

You need a Web Services Description Language (WSDL) to allow others to interact with the web service you just created. The WSDL describes how to call the operations in the web service.

To get a WSDL, follow these steps:

1. Run the application locally or in a Free App environment.
2. View the application in your browser:
    * If you run the application locally, the application URL should look like this: `http://localhost:8080/index.html`
    * If you run the application in a Free App environment, the application URL should look like this: `https://myfirstapp.mendixcloud.com/index.html`
3. In both of the above cases, you can replace `/index.html` with `/ws-doc/` to open the web service documentation page:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581703.png" class="no-border" >}}

    You should see the name of your web service in the list.
4. Click the "WSDL schema" URL to open the WSDL. This WSDL can be given to others so that they can interact with your web service.

## Authentication and Users

To change the user authentication, follow these steps:

1. Double-click the published web service in the **App Explorer** to open it.
2. In the **Published Web Service** properties window, open the **Settings** tab. Because **No Authentication** is set, currently users of the web service do not need to authenticate:

    {{< figure src="/attachments/refguide9/modeling/integration/expose-a-web-service/18581702.png" class="no-border" >}}

3. Change **Authentication** to **Username and password**.

4. Click **OK** and re-run the application. Users now need to authenticate before they can use the web service.

Mendix enables creating your own user management functionality as long as your own user object inherits from `System.User`. The `User` entity in the `System` module contains the `WebServiceUser` Boolean attribute. This attribute determines if an user is able to interact with web services. If you want a certain user to be able to interact with web services, the value of this attribute must be *true*.

## Considerations

When exposing a web service, consider the following things:

* In Studio Pro some words are reserved for Mendix use (for example, type, Enumeration)
* Because you may not want to publish a "_type" attribute with an underscore ("`_`") in front of it, you can change the WSDL name by changing the last column in the selected attribute window
* If an attribute is renamed after it is published, the name in the WSDL does not automatically change (because that would break the customer's implementation)

## Read More

* [Consume a Complex Web Service](/howto9/integration/consume-a-complex-web-service/)
* [Consume a Simple Web Service](/howto9/integration/consume-a-simple-web-service/)
* [Export XML Documents](/howto9/integration/export-xml-documents/)
* [Import Excel Documents](/howto9/integration/importing-excel-documents/)
* [Enable Selenium Support](/howto9/integration/selenium-support/)
* [Import XML Documents](/howto9/integration/importing-xml-documents/)
* [Consume a REST Service](/howto9/integration/consume-a-rest-service/)
* [Expose Data to BI Tools Using OData](/howto9/integration/exposing-data-to-bi-tools-using-odata/)
