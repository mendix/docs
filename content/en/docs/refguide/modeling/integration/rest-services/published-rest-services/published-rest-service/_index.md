---
title: "Published REST Service"
url: /refguide/published-rest-service/
weight: 10
description: "Configuration options for a published REST service"
---

## 1 Introduction

Use a published REST service to expose your entities and microflows to other apps using the REST standard.

This document describes the published REST service configuration options shown when the published REST service is opened in Studio Pro.

## 2 General

### 2.1 Service Name {#service-name}

The service name uniquely identifies the service in the app. It is also displayed in [OpenAPI (Swagger) documentation page](/refguide/open-api/).

When service is initially created, service name is used in the creation of the default location for the service. If the service name contains any spaces or special characters, they will be replaced with the `_` character in the service location.

### 2.2 Version

Version is used to display version information in [OpenAPI (Swagger) documentation page](/refguide/open-api/). You can set any string in the version field, but it is recommended to follow [semantic versioning](https://semver.org/) scheme.

By default, version is set to "1.0.0".

### 2.3 Location {#location}

Location shows URL on which a service can be reached.

By default, location is built up by appending service name and "v1" to the `rest/` prefix. Service name will be stripped off of any invalid URL characters, such as spaces and special characters.

Example:

```text {linenos=false}
http://localhost:8080/rest/my_service_name/v1
```

The URL prefixes `api-doc/`, `xas/`, `p/`, and `reload/` are reserved and cannot be used at the start of the location. Otherwise, you can change the location to any valid URL.

When your application is running, you can click the location to open the [interactive documentation page](/refguide/published-rest-services/#interactive-documentation).

### 2.3 Public Documentation {#public-documentation}

The public documentation is used in the service's [OpenAPI (Swagger) Documentation](/refguide/open-api/). You can use [GitHub-flavored markdown](/refguide/gfm-syntax/) for rich text.

### 2.4 Export OpenAPI Documentation {#export-openapi-documentation}

To save a service's [OpenAPI (Swagger) documentation](/refguide/open-api/) somewhere on your machine, right-click the service in the **App Explorer** and select **Export openapi.json** for the [OpenAPI 3.0 definition](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.1.md) of the REST service, or select **Export swagger.json** (or just click the **Export swagger.json** button, depending on your Studio Pro version) for the [OpenAPI 2.0 version](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md). These are machine-readable files according to the OpenAPI Specification format. Most API tools support this format.

When the app is running, these files are available under */rest-doc/{location}/openapi.json* and */rest-doc/{location}/swagger.json*, where *{location}* is the location of the REST service (for instance, *rest/myservice/v1*).

{{% alert color="info" %}}
Exporting OpenAPI documentation in version 3.0 of the specification was introduced in Studio Pro [10.1.0](/releasenotes/studio-pro/10.1/).
{{% /alert %}}

## 3 Security

### 3.1 Requires Authentication {#authentication}

Select whether clients need to authenticate or not.

### 3.2 Authentication Methods

If authentication is required, you can select which authentication methods to support.

* Select **Username and password** to allow clients to authenticate themselves using a username and a password in the **Authorization** header (this is called "basic authentication")
* Select **Active session** to allow access from JavaScript inside your current application
* Once a user has logged into the browser, the JavaScript in your app can access the REST service using the current user's session
* [Offline-first](/refguide/offline-first/) apps cannot use active session authentication, because they do not have sessions that stay active while the app is running
* To prevent cross-site request forgery, the `X-Csrf-Token` header needs to be set on each request, for example:

    ```javascript
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://mysite/rest/myservice/myresource", false);
    xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
    xmlHttp.send(null);
    ```

* Select **Custom** to authenticate using a microflow. This microflow is called every time a user want to access a resource.

Check more than one authentication method to have the service try each of them. It will first try **Custom** authentication, then **Username and password**, and then **Active session**. For more details, see [Published REST Routing](/refguide/published-rest-routing/).

### 3.3 Microflow {#authentication-microflow}

Specify which microflow to use for custom authentication.

Select **Parameters** to see the [list of parameters passed to the authentication microflow](/refguide/published-rest-authentication-parameter/). In that window, you can indicate whether the authentication microflow's parameters come from request headers or from the query string.

The microflow may take an [HttpRequest](/refguide/http-request-and-response-entities/#http-request) as a parameter, so it can inspect the incoming request.

The microflow may also take an [HttpResponse](/refguide/http-request-and-response-entities/#http-response) as a parameter. When the microflow sets the status code of this response to something other then **200**, this value is returned and the operation will not be executed. In that case, any headers set on the response are returned as well.

The authentication microflow should return a User.

There are three possible outcomes of the authentication microflow:

* When the status code of the HttpResponse parameter is set to something other then **200**, this value is returned and the operation will not be executed
* When the resulting User is not empty, the operation is executed in the context of that user
* When the resulting User is empty, the next authentication method is attempted; when there are no other authentication methods, the result is **404 Not Found**

### 3.4 Allowed Roles{#allowed-roles}

The allowed roles define which [module role](/refguide/module-security/#module-role) a user must have to be able to access the service. This option is only available when **Requires authentication** is set to **Yes**.

{{% alert color="warning" %}}
Web service users cannot access REST services.
{{% /alert %}}

## 4 Enable CORS

Check this box when your service needs to be available on websites other than your own.

Click [Settings](/refguide/cors-settings/) to specify this access in more detail (for instance, which websites are allowed to access the service).

## 5 Resources

A REST service exposes a number of [resources](/refguide/published-rest-resource/). On a resource, you can define `GET`, `PUT`, `POST`, `PATCH`, `DELETE`, `HEAD` and `OPTIONS` operations.

You can drag an entity or a message definition onto this list to [generate a complete resource](/refguide/generate-rest-resource/).

## 6 Operations

When you select a resource, you see the [operations](/refguide/published-rest-operation/) that are defined for that resource.

Resources and operations are appended to [Location](#location) to form a URL on which they can be accessed.

{{< figure src="/attachments/refguide/modeling/integration/published-rest-services/published-rest-service/example-location-url.png" class="no-border" >}}

## 8 Read More

For more information on which operation gets executed for a given request URL, see [Published REST Routing](/refguide/published-rest-routing/).
