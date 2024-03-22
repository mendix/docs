---
title: "Consumed REST Services (Beta)"
url: /refguide/consumed-rest-services-beta/
category: "Integration"
description: "Describes the configuration and usage of the new Consumed REST service document."
tags: ["Consumed REST service", "mendix 10", "studio pro 10", "GET", "POST", "new"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

Use the new Consumed REST Service document to send REST requests from Mendix Studio Pro. With this feature, you can build, test, and create data structures to store your requests. 

This feature is supported for [Mendix Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above.

### 1.1 Use Cases

You can use the Consumed REST Service document to do the following:

* Consume a REST service
* Configure `GET`, `POST`, `PUT`, and `PATCH` requests
* Create entities directly in the domain model
* Send REST requests through a microflow

### 1.2 Limitations

* This feature supports the following HTTP request methods:
    * `GET`
    * `POST`
    * `PUT`
    * `PATCH`

{{% alert color="info" %}} `PATCH` methods are only supported for [Mendix Studio Pro 10.7](/releasenotes/studio-pro/10.7/) and above. `PUT` methods are only supported for [Mendix Studio Pro 10.8](/releasenotes/studio-pro/10.8/) and above. {{% /alert %}} 

* To use the request response to create a data structure in your domain model, the response data should be in JSON format. Other formats, such as XML, are currently not supported. 
* If you are debugging a running Published REST service in the same app as your Consumed REST Service document, a deadlock could occur when sending the request. Wait until the timeout occurs (default: 300 seconds) for Studio Pro to respond again.

### 1.3 Prerequisites 

* [Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above
* Familiarity with [HTTP request methods]( https://www.w3schools.com/tags/ref_httpmethods.asp)

## 2 Installation {#installation}

Download [Studio Pro]( https://marketplace.mendix.com/link/studiopro/) and add the Consumed REST Service document to your app. To do this, 

1. Right-click the module you want to add the Consumed REST Service document to.
2. Select **Add other** > **Consumed REST service**. 
3. Name the service and click **OK**.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/add-service.png" >}}

## 3 Configuration {#configuration}

Use the Consumed REST service to configure a `GET`, `POST`, `PUT`, or `PATCH` request for your app. 

### 3.1 Basic Configuration {#configure-a-request}

Create a `GET`, `POST`, `PUT`, or `PATCH` request to send data to your server by doing the following:

1. In the **General** field, name your request. 
2. In the **Method & URL** field, use drop-down to select the HTTP method you want to use.
3. Add an endpoint and click **Send**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/general-section.png" >}}

4. Click **Configuration & authentication**.
5. Add a **Base URL** to use the same URL across all requests in this consumed REST service document.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/configuration-screen.png" >}}

6. Select an authentication method. For more information, see [Authentication methods](#authentication).
7. Click **Send**. 

You can visualize your request in the **Response data** tab, then use the response to [create an entity in the domain model](#create-entity). 

### 3.2 Authentication Methods {#authentication}

You can configure basic authentication to use for all requests in your document. Authentication is not required but can be added if needed. To add basic authentication, do the following:

1. Click **Configuration & authentication**.
2. Under **Authentication method**, click the drop-down and select **Basic authentication**. 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/authentication-setup.png" >}}

3. Select a constant or create a new one for your username and password. To create a new constant, follow these steps:
    1. Next to **Username** or **Password**, click **Select** > **New**.
    2. Name the constant and click **OK**.
4. Add any additional information needed, and then click **OK** > **OK**.

### 3.3 Adding Parameters {#add-parameters}

Parameters are fully supported in the path and query part of the URL and in the header value. You can define them by wrapping them in curly brackets. For example, to define `numbers` as a URL parameter, enter `http://numbersapi.com/{numbers}`. All parameters must be added to the **Parameters** grid and match what is present within the curly brackets.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/get-header.png" >}}

To add a parameter, follow these steps:

1. In the **Parameters** tab, click **Add**.
2. Enter a **Name** and a **Test value** for your parameter, and then click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/parameter.png" >}}

3. To test the parameters, click **Send**. 

{{% alert color="info" %}}
Parameters are not supported in the [configuration](#configuration), including authentication and Base URL.
{{% /alert %}} 

### 3.4 Adding Headers {#add-headers}

Starting in version [10.7](/releasenotes/studio-pro/10.7/) of Mendix Studio Pro, you can add a header for any HTTP request which you have specified in your document. To add a header, perform the following steps:

1. In the **Headers** tab, click **New**.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/header-example.png" >}}

2. In the **Key** field, click the drop-down and choose from the list of the most commonly used HTTP headers. You can also create a custom header by selecting **Custom** and adding in the value. 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/accept-header.png" >}}

3. Click **OK**. 
4. To test the header, click **Send**.  

### 3.5 Adding a Request Body (for POST, PUT and PATCH requests only) {#add-a-request-body}

`POST`, `PUT` and `PATCH` requests support JSON strings as a request body. Add the JSON body snippet to your request by performing the following steps:

1. In the **Body** tab, enter your JSON string.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/json-example.png" >}}

2. To validate the input, navigate to the **General** field and click **Send**.
3. To use the newly-created JSON string as an entity in your domain model, click **Use JSON Snippet**. You can view the body string in the **Body structure** tab.

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/json-body-structure.png" >}}

4. Optionally, you can specify a custom name for your entity. 
5. To create the entity, click **Create Entity** > **OK**. 
6. To view the entity in your domain model, click **Show**.

### 3.6 Creating an Entity from the Response {#create-entity}

You can check the response of your request in the **Response data** tab. 

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/response-data.png" >}}

If you want to use the response to create an entity in your domain model, navigate to the **Response structure** tab, which displays a preview of the response data. 

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/response-structure.png" >}}

The entity name is prefilled, but you can change it to a custom name. To create an entity, click **Create Entity** > **OK**. This creates an entity in your domain model, which you can see by clicking **Show**

### 3.7 Using a REST Request in a Microflow {#add-entity-to-microflow}

To select a request in the microflow, perform the following steps:

1. Create a new microflow and drag the [Send REST request](/refguide/send-rest-request/) activity into it.
2. Double-click the activity and click **Select** to choose the request you want to add. 
3. Click **Select** > **OK**.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services-beta/select-rest-request.png" >}}

If you have defined parameters in the request, they are added to the activity. Click **Edit** to change the parameter in the microflow. The parameter values in this activity are used by the runtime instead of the test value defined in the request.
