---
title: "Consumed REST Services (Beta)"
url: /refguide/consumed-rest-services-beta/
description: "Describes the configuration and usage of the new Consumed REST service document."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

Use the new Consumed REST Service document to send REST requests from Mendix Studio Pro. With this feature, you can build, test, and create data structures to store your requests. 

This feature is supported for [Mendix Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above.

### Use Cases

You can use this Consumed REST Service document to do the following:

* Consume a REST Service
* Configure `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` requests
* Create entities directly in the domain model
* Send REST requests through a microflow

### Limitations

* `PATCH` methods are only supported for [Mendix Studio Pro 10.7](/releasenotes/studio-pro/10.7/) and above. 
* `PUT` methods are only supported for [Mendix Studio Pro 10.8](/releasenotes/studio-pro/10.8/) and above. 
* `DELETE` methods are only supported for [Mendix Studio Pro 10.9](/releasenotes/studio-pro/10.9/) and above.

* To use the request response to create a data structure in your domain model, the response data should be in JSON format. Other formats, such as XML, are currently not supported. 
* If you are debugging a running Published REST Service in the same app as your Consumed REST Service document, a deadlock could occur when sending the request. Wait until the timeout occurs (default: 300 seconds) for Studio Pro to respond again.

### Prerequisites 

* [Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above
* Familiarity with [HTTP request methods](https://www.w3schools.com/tags/ref_httpmethods.asp)

## Add the Consumed REST Service Document {#installation}

Download [Studio Pro](https://marketplace.mendix.com/link/studiopro/) and add the Consumed REST Service document to your app. To do this, 

1. Right-click the module you want to add the Consumed REST Service document to.
2. Select **Add other** > **Consumed REST service**. 
3. Name the service and click **OK**.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/add-service.png" class="no-border" >}}

## Configuration {#configuration}

Use the Consumed REST Service to configure a `GET`, `POST`, `PUT`, `PATCH`, or `DELETE` request for your app. 

### Basic Configuration {#configure-a-request}

Create a `GET`, `POST`, `PUT`, `PATCH`, or `DELETE` request to send data to your server by doing the following:

1. In the **General** field, name your request. 
2. In the **Method & URL** field, use drop-down to select the HTTP method you want to use.
3. Add an endpoint and click **Send**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/general-section.png" class="no-border" >}}

4. Click **Configuration & authentication**.
5. Add a **Base URL** to use the same URL across all requests in this consumed REST Service document.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/configuration-screen.png" class="no-border" >}}

6. Select an authentication method. For more information, see [Authentication methods](#authentication).
7. Click **Send**. 

You can visualize your request in the **Response data** tab, then use the response to [create an entity in the domain model](#create-entity). 

### Authentication Methods {#authentication}

You can configure basic authentication to use for all requests in your document. Authentication is not required but can be added if needed. To add basic authentication, do the following:

1. Click **Configuration & authentication**.
2. Under **Authentication method**, click the drop-down and select **Basic authentication**. 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/authentication-setup.png" class="no-border" >}}

3. Select a constant or create a new one for your username and password. To create a new constant, follow these steps:
   1. Next to **Username** or **Password**, click **Select** > **New**.
   2. Name the constant and click **OK**.
4. Add any additional information needed and click **OK** > **OK**.

### Adding Parameters {#add-parameters}

Parameters are fully supported in the path and query part of the URL and in the header value. They are defined within curly brackets. For example, in the URL, defining `numbers` as parameter would be `http://numbersapi.com/{numbers}`. All parameters must be added to the **Parameters** grid and match what is present within the curly brackets.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/get-header.png" class="no-border" >}}

To add a parameter, follow these steps:

1. Open the **Parameters** tab and click **Add**.
2. Name your parameter, add a test value, and click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/parameter.png" class="no-border" >}}

3. To test the parameters, click **Send**. 

{{% alert color="info" %}}
Parameters are not supported in the [configuration](#configuration), including authentication and Base URL.
{{% /alert %}} 

### Adding Headers {#add-headers}

{{% alert color="info" %}}
The support for parameter in the header value was introduced in Mendix [10.7](/releasenotes/studio-pro/10.7/).
{{% /alert %}}

You can add a header for any HTTP request you have specified in your document. To add a header, do the following:

1. Open the **Headers** tab and click **New**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/header-example.png" class="no-border" >}}

2. In the **Key** field, click the drop-down and choose from the list of the most commonly used HTTP headers. You can also create a custom header by selecting **Custom** and adding in the value. 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/accept-header.png" class="no-border" >}}

3. Click **OK**. To test the header, click **Send**.  

### Adding a Request Body (for POST, PUT and PATCH requests only) {#add-a-request-body}

`POST`, `PUT` and `PATCH` requests support JSON strings as a request body. Add the JSON body snippet to your request by doing the following:

1. Click the **Body** tab and add your JSON string.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/json-example.png" class="no-border" >}}

2. To validate the input, click **Send**.

3. If you want to use the newly-created JSON string as an entity in your domain model, click **Use JSON Snippet**. The body string can be viewed in the **Body structure** tab.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/json-body-structure.png" class="no-border" >}}

4. The entity name is prefilled, but you can change it to a custom name. To create an entity, click **Create Entity** > **OK**. Click **Show** to view the entity in your domain model.

### Creating an Entity from the Response {#create-entity}

You can check the response of your request in the **Response data** tab. 

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/response-data.png" class="no-border" >}}

If you want to use the response to create an entity in your domain model, navigate to the **Response structure** tab, which displays a preview of the response data. 

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/response-structure.png" class="no-border" >}}

The entity name is prefilled, but you can change it to a custom name. To create an entity, do the following:

1. Click **Create Entity** > **OK**. 
2. To view the entity in your domain model, click **Show**.

### Using a REST Request in a Microflow {#add-entity-to-microflow}

To select a request in the microflow, complete the following steps:

1. Create a new microflow and drag the [Send REST request](/refguide/send-rest-request/) activity into it.
2. Double-click the activity and click **Select** to choose the request you want to add, then click **Select** > **OK**.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/select-rest-request.png" class="no-border" >}}

If you have defined parameters in the request, they will be added to the activity. Click **Edit** to change the parameter in the microflow. The parameter values in this activity are used by the runtime instead of the test value defined in the request.
