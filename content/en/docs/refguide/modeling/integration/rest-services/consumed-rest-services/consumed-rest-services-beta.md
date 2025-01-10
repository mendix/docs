---
title: "Consumed REST Services"
url: /refguide/consumed-rest-services-beta/
description: "Describes the configuration and usage of the new Consumed REST service document."
weight: 5
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Use the Consumed REST Service document to send REST requests from Mendix Studio Pro. With this feature, you can build, test, and create data structures to store your requests. 

This feature is supported for [Mendix Studio Pro 10.17](/releasenotes/studio-pro/10.17/) and above.

{{% alert color="info" %}}

The Consumed REST Service document is released for general availability (GA) for Windows only. This feature is still in beta for macOS and will be released for GA at a later date.

{{% /alert %}}

### Use Cases

Use the Consumed REST Service document to do the following:

* Consume a REST Service
* Configure `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` requests
* Create entities directly in the domain model
* Send REST requests through a microflow

### Limitations

* To use the request response to create a data structure automatically in your domain model, the response data should be in JSON format. It is possible to process other formats, such as XML or raw text, but you will need to extract the data you are looking for in a microflow.
* For macOS, it is currently not possible to copy and paste in the URL or body fields. You may also experience issues while tabbing in the text field. 

### Prerequisites 

* [Studio Pro 10.17](/releasenotes/studio-pro/10.17/) and above
* Familiarity with [HTTP request methods](https://www.w3schools.com/tags/ref_httpmethods.asp)

## Add the Consumed REST Service Document {#installation}

Download [Studio Pro](https://marketplace.mendix.com/link/studiopro/) and add the Consumed REST Service document to your app. To do this, follow these steps:  

1. Right-click the module you want to add the Consumed REST Service document to.
2. Select **Add other** > **Consumed REST service**. 
3. Name the service and click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/add-service.png" width="500" class="no-border" >}}

## Configuration {#configuration}

Use the Consumed REST Service to configure a `GET`, `POST`, `PUT`, `PATCH`, or `DELETE` request for your app. 

### Basic Configuration {#configure-a-request}

Create a `GET`, `POST`, `PUT`, `PATCH`, or `DELETE` request to send data to your server by doing the following:

1. In the **Method & URL** field, use the drop-down to select the HTTP method you want to use.
2. Add an endpoint and click **Send**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/general-section.png" class="no-border" width="500" >}}

3. Click **Base URL**.
4. Add a base URL to use the same URL across all requests in this consumed REST Service document. 
   
   {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/base-url.png" class="no-border"  width="500" >}}

   To make the base URL dynamic, see the [Dynamic Base URL](#dynamic-base-url) section below.

5. Click **Authentication**.
6. Select an authentication method, then click **OK**. For more information, see [Authentication methods](#authentication).

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/configuration-screen.png" class="no-border" width="500" >}}

7. Click **Send**. 

You can visualize your request in the **Response** tab, then use the response to [create an entity in the domain model](#create-entity). 

### Authentication Methods {#authentication}

You can configure basic authentication to use for all requests in your document. Authentication is not required, but can be added if needed. To add basic authentication, do the following:

1. Click **Authentication**.
2. In the **Authentication method** field, click the drop-down and select **Basic authentication**. 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/authentication-setup.png" class="no-border" >}}

3. Select a constant or create a new one for your username and password. To create a new constant, follow these steps:
   1. Next to **Username** or **Password**, click **Select** > **New**.
   2. Name the constant and click **OK**.
4. Add any additional information you may need, then click **OK**.

### Adding Parameters {#add-parameters}

{{% alert color="info" %}}

Parameters are not supported in the Authentication section.

{{% /alert %}}

Parameters are fully supported in the path and query part of the URL, in the header value, and in the body. They are defined within curly brackets. For example, in the URL, defining `number` as parameter would be `http://numbersapi.com/{number}`. The parameters that are configured for the URL, headers, or body within curly brackets are automatically added to the parameters grid.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/get-header.png" class="no-border" >}}

You can manually add new parameters to the parameters grid directly. To do so, follow these steps:

1. Open the **Parameters** tab and click **Add parameter**.
2. Name your parameter and add a test value.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/adding-parameters.png" class="no-border" width="600" >}}

3. To test the parameters, click **Send**. 

#### Dynamic Base URL {#dynamic-base-url}

You can add a Base URL as a parameter. To do this, follow these steps:

1. Click **Base URL**.
2. In the Dynamic field, select **Yes**.
3. Click **OK**

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/dynamic-base-url.png" class="no-border" width="600" >}}

Your base URL is now considered as a parameter. You can change its value in the [Send REST Request](/refguide/send-rest-request/) microflow activity. 

### Adding Headers {#add-headers}

You can add a header for any HTTP request you have specified in your document. To add a header, do the following:

1. Open the **Headers** tab and click **Add header**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/header-example.png" class="no-border"  width="300" >}}

2. In the **Key** field, click the drop-down and choose from the list of the most commonly used HTTP headers. You can also create a custom header by typing directly in the key field and adding a value in the **Value** field.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/accept-header.png" class="no-border"  width="500" >}}

3. Click **OK**. To test the header, click **Send**.

You can also add a parameter as the test value of a header, as seen below. For example, you can define an Authorization header where the authentication token is dynamic.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/parameters-for-header.png" class="no-border" width="300" >}}

### Adding a Request Body (for POST, PUT, and PATCH requests only) {#add-a-request-body}

`POST`, `PUT`, and `PATCH` requests support sending text as as a request body. Multiple formats are supported. 

#### Request Body That Sends Static Text

If the request body content is static, paste the text into the **Body** tab. This text will be included as the body content when you send the request.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/json-example.png" class="no-border" width="300" >}}

#### Adding a Request Body Using Parameters

When the text in the Body tab contains a parameter name surrounded by curly braces, it is interpreted as a parameter. These parameters can be used to change the body content dynamically. 

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/body-structure-example.png" class="no-border"  width="500" >}}

For example, if your body content is `product_curr={currency}&product_price={price}`, the parameters `currency` and `price` can be used to change the body content.

#### Request Body Where Content Comes From Multiple Entities

When you have a body in JSON format, you can create entities in the domain model that will provide the body content. This allows you to easily send a body with dynamic data.

Create body entities from a JSON snippet to your request by doing the following:

1. Click the **Body** tab and add your JSON string.

2. To validate the input, click **Send**.

3. If you want to use the newly-created JSON string as an entity in your domain model, click **Use JSON Snippet**. The body string can be viewed in the **Body structure** tab.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/body-structure-tab.png" class="no-border"  width="400" >}}

   The entity name is prefilled, but you can change it to a custom name. 

4. To create an entity, click **Create Entity** > **OK**. Click **Show** to view the entity in your domain model.

### Processing Response Data

You can check the response of your request in the **Response data** tab. 

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/response-tab.png" class="no-border"  width="500" >}}

#### Response is in JSON Format {#create-entity}

If the response is in JSON format and you want to use the response to create an entity, open the **Response structure** tab, which displays a preview of the response data:

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/response-structure-tab.png" class="no-border"  width="500" >}}

The entity name is prefilled, but you can change it to a custom name. To create an entity, do the following:

1. Click **Create Entity** > **OK**. 
2. To view the entity in your domain model, click **Show**.

You can also add a parameter in the request body by generating a data structure (entities) as input. If only a small part of the request is dynamic, you can use parameters directly in the JSON snippet.

You can choose to flatten and simplify the structure of your response. Enable this feature by selecting **Flatten and simplify structure**. For more information, see the [Simplifying and Flattening Response Data](#simplify-and-flatten) section below.

#### Response is Not in JSON Format {#processing-non-json}

When the response is not in JSON format, it cannot be converted automatically into entities. Instead, you can extract the data in a microflow.

When the [Send REST request](/refguide/send-rest-request/) action is executed in a microflow, it places the result into the variable `latestHttpResponse`. In `latestHttpResponse`, you can find the `StatusCode` and `Content` of the request that was made. From here, you can use microflow logic to extract the information. For example, if the response has XML formatting, you can use [Import Mapping](/refguide/import-mappings/) to read the data.

### Simplifying and Flattening Response Data {#simplify-and-flatten}

When you receive JSON data, the structure of the response is simplified and flattened where possible. This can be seen in the **Response structure** tab.   

For example, the URL `https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json` returns vehicle information. It returns a JSON object that contains the property `Results` with a list of objects. Without simplification, when you click **Create entity**, you will get 3 entities. With simplification, only 2 entities are created that still contain all vehicle information.

By default, simplification and flattening is enabled. To change this, uncheck the box **Flatten and simplify structure** on the **Response structure** tab before clicking the **Create entity** button.

### Using a REST Request in a Microflow {#add-entity-to-microflow}

To select a request in the microflow, complete the following steps:

1. Create a new microflow and drag the [Send REST request](/refguide/send-rest-request/) activity into it.
2. Double-click the activity and click **Select** to choose the request you want to add, then click **Select** > **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/send-request-activity.png" class="no-border" width="500" >}}

If you have defined parameters in the request, they will be added to the activity. Click **Edit** to change the parameter in the microflow. The parameter values in this activity are used by the runtime instead of the test value defined in the request.
