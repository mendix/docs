---
title: "Published REST Service"
url: /refguide7/published-rest-service/
weight: 10
description: "Configuration options for a published REST service"
tags: ["published REST", "service", "reserved URL prefixes", "swagger", "security", "CORS", "resources", "operation", "how-to"]
---

{{% alert color="info" %}}

The **published REST service** feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

Use a published REST service to expose your entities and microflows to other apps using the REST standard.

This document describes the published REST service configuration options shown when the published REST service is opened in the Desktop Modeler.

## 2 General

<a name="service-name"></a>

### 2.1 Service Name

Service name uniquely identifies the service in the app. It is also displayed in [OpenAPI (Swagger) documentation page](/refguide7/open-api/).

When service is initially created, service name is used in the creation of the default location for the service. If the service name contains any spaces or special characters, they will be replaced with the `_` character in the service location.

### 2.2 Version

{{% alert color="info" %}}

The **Version** feature was introduced in version 7.12.0.

{{% /alert %}}

Version is used to display version information in [OpenAPI (Swagger) documentation page](/refguide7/open-api/). You can set any string in the version field, but it is recomended to follow [semantic versioning](https://semver.org/) scheme.

By default, version is set to "1.0.0".

<a name="location"></a>
### 2.3 Location

{{% alert color="info" %}}

**Location** is editable in Mendix versions 7.12.0 and above.

{{% /alert %}}

Location shows URL on which a service can be reached.

By default, location is built up by appending service name and "v1" to the "rest/" prefix. Service name will be stripped off of any invalid URL characters; like spaces and special characters.

Example:
```
http//localhost:8080/rest/my_service_name/v1
```

You can change the the default location to almost any valid URL.

#### 2.3.1 Reserved Prefixes

Following URL prefixes are reserved and are not allowed to be used in location:

* `ws/`
* `ws-doc/`
* `rest-doc/`
* `odata/`
* `odata-doc/`
* `api-doc/`
* `xas/`
* `p/`
* `reload/`

When your application is running, you can click the location to open the [interactive documentation page](/refguide7/published-rest-services/#interactive-documentation).

<a name="public-documentation"></a>

### 2.3 Public Documentation

The public documentation is used in the service's [OpenAPI 2.0 (Swagger) Documentation](/refguide7/open-api/). You can use [GitHub-flavored markdown](/refguide7/gfm-syntax/) for rich text.

<a name="export-swagger-json"></a>
### 2.5 Export swagger.json

To save a service's [OpenAPI (Swagger) documentation](/refguide7/open-api/) somewhere on your machine, simply right-click the service in the **Project Explorer** and select **Export swagger.json** (or just click the **Export swagger.json** button, depending on your Modeler version). This is a machine-readable file in the [OpenAPI 2.0 file format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). Most API tools support this format.

When the app is running, this file is available under `/rest-doc/servicename/swagger.json`.

## 3 Security

<a name="authentication"></a>
### 3.1 Requires Authentication

{{% alert color="info" %}}

The **No Authentication** feature was introduced in version 7.11.0. In earlier versions, it was always **Username and password**.

The **Active Session** authentication was introduced in version 7.13.0

The **Custom** authentication was introduced in version 7.17.0

{{% /alert %}}

Select whether clients need to authenticate or not.

### 3.2 Authentication Methods

If authentication is required, you can select which authentication methods you would like to support

* Select **Username and password** to allow clients to authenticate themselves using a username and a password in the **Authorization** header (this is called "basic authentication")
* Select **Active session** to allow access from JavaScript inside your current application
  * Once a user has logged into the browser, the JavaScript in your app can access the REST service using the current user's session
  * To prevent cross-site request forgery, the `X-Csrf-Token` header needs to be set on each request, for example:

    ```var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://mysite/rest/myservice/myresource", false);
    xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
    xmlHttp.send(null);
    ```
* Select **Custom** to authenticate using a microflow. This microflow is called every time a user want to access a resource.

Check more than one authentication method to have the service try each of them. It will first try **Custom** authentication, then **Username and password**, and then **Active session**. For more details, see [Published REST Routing](/refguide7/published-rest-routing/).

<a name="authentication-microflow"></a>
### 3.3 Microflow

Specify which microflow to use for custom authentication.

Select **Parameters** to see the [list of parameters passed to the authentication microflow](/refguide7/published-rest-authentication-parameter/). In that window you can indicate whether the authentication microflow's parameters come from request headers or from the query string.

The microflow may take an [HttpRequest](/refguide7/http-request-and-response-entities/#http-request) as a parameter, so it can inspect the incoming request.

The microflow may also take an [HttpResponse](/refguide7/http-request-and-response-entities/#http-response) as a parameter. When the microflow sets the status code of this response to something other then **200**, this value is returned and the operation will not be executed. Any headers set on the response are returned (except when the microflow returns an empty user).

The authentication microflow should return a User.

There are three possible outcomes of the authentication microflow
  * When the status code of the HttpResponse parameter is set to something other then **200**, then this value is returned and the operation will not be executed
  * Otherwise, when the resulting User is not empty, the operation is executed in the context of that user
  * Otherwise, when the resulting User is empty, the next authentication method is attempted. When there are no other authentication methods, the result is **404 Not Found**.

### 3.4 Allowed Roles

The allowed roles define which [module role](/refguide7/module-role/) a user must have to be able to access the service. This option is only available when **Requires authentication** is set to **Yes**.

{{% alert color="warning" %}}
Web service users cannot access REST services.
{{% /alert %}}

## 4 Enable CORS

Check this box when your service needs to be available on websites other than your own.

Click the [Settings](/refguide7/cors-settings/) button to specify this access in more detail (for instance, which websites are allowed to access the service).

## 5 Resources

A REST service exposes a number of [resources](/refguide7/published-rest-resource/). On a resource you can define GET, PUT, POST, PATCH, DELETE, HEAD and OPTIONS operations.

You can drag an entity or a message definition onto this list to [generate a complete resource](/refguide7/generate-rest-resource/).

## 6 Operations

When you select a resource, you see the [operations](/refguide7/published-rest-operation/) that are defined for that resource.

Resources and Operations are appended to [Location](#location) to form a URL on which they can be accessed.

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-rest-services/published-rest-service/example-location-url.png" >}}

## 7 Example

**How to publish REST natively with Mendix**

{{% youtube HzrFkv0U4n8 %}}

## 8 Read More

For more information on which operation gets executed for a given request URL, see [Published REST Routing](/refguide7/published-rest-routing/).
