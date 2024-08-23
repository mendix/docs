---
title: "Call REST Service"
url: /refguide/call-rest-action/
weight: 10
aliases:
    - /refguide/using-a-proxy-to-call-a-rest-service/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

The **Call REST service** activity can be used to call a REST endpoint. You can specify the location and how the response of the REST call should be handled.

## Properties

An example of the Call REST service activity's properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-rest-action/call-rest-action-properties.png" alt="Call REST service properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The Call REST service properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

The properties dialog box consists of four tabs:

* [General](#general)
* [HTTP Headers](#http-headers)
* [Request](#request)
* [Response](#response)

## General Tab {#general}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-rest-action/general-tab.png"   width="66%"  class="no-border" >}}

### Location

The **Location** property defines the REST endpoint to be called.

The location needs to be entered using a string template which must result in a valid URL string.

#### String Template{#string-template}

The template for the location can contain parameters that are written as a number between braces (for example, `{1}`). The first parameter has the number `1`, the second `2`, etc. You can escape the opening brace (`{`), by using a double opening brace (`{{`).

#### Parameters

For each parameter in the template, you can specify its value using a [microflow expression](/refguide/expressions/) resulting in a string value. This value will be inserted at the position of the parameter.

### HTTP Method

The **HTTP method** property defines the HTTP method to use when calling a REST endpoint. The possible values are: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

### Use Timeout on Request

Set **Use timeout on request** to **Yes** to be able specify how long the Call REST service activity should wait for the REST endpoint to respond. 

{{% alert color="warning" %}}
It is recommended that you keep this set to **Yes**. Most cloud infrastructure services (including those used by the Mendix Cloud) will close HTTP connections automatically if there is no traffic for a few minutes, even if your activity is still waiting for a response. This means that, if your activity calls a web service which takes a long time to respond, the connection may be closed without the activity being aware of this, and your activity will not receive a response. Under these circumstances, if **Use timeout on request** is set to **No**, your activity will get stuck waiting indefinitely for data to arrive.
{{% /alert %}}

Default value: *Yes*

### Timeout (s){#timeout}

If the REST endpoint has not responded after the number of seconds in **Timeout (s)**, an exception will occur and the microflow will roll back or go into your custom error handler.

Default value: *300 seconds*

### Proxy Configuration

In almost all cases, you can ignore this setting. **Use app settings** is a good default value. For more information about app settings, see the *Proxy Settings* section of [Runtime Customization](/refguide/custom-settings/#proxy-settings).

If desired, you can configure whether to use a proxy for the request. These are the choices:

* **Use app settings** – use whatever settings are defined at the app level (default)
* **Override** – override the app-level settings for this action
* **No proxy** – do not use a proxy for this action, even if there is a proxy configured at the app level

When you select **Override**, you can configure dynamically whether to use a proxy. You then supply the host, port, username, and password settings for the proxy.

### Client certificate{#client-certificate}

In most cases, the default **Use app settings** can be used.

However, you can specify a client certificate to use for the request by selecting **Override**.

The options are:

* **Use app settings**(default) – use the settings that are defined at the app level 
* **Override** – override the app-level settings for this action

When you select **Override**, you can configure which client certificate will be used. Click **Edit** to specify the **Client certificate identifier**. This identifier can be set in different places, depending on where you deploy the app:

* When you deploy the app in the Mendix cloud, set the **Client certificate identifier** to the desired **WEB SERVICE CALL NAME** when [pinning a client certificate](/developerportal/deploy/certificates/#outgoing-client-certificates).
* When you deploy the app elsewhere, the identifier is set in the custom setting [ClientCertificateUsages](/refguide/custom-settings/#CACertificates). For testing locally, this can be set as a custom server setting in a [Configuration](/refguide/configuration/#custom).

When this identifier is not set for the environment where your app is deployed (either not pinned or not present in *ClientCertificateUsages*), the default settings will be used (as if **Use app settings** were selected).

## HTTP Headers Tab {#http-headers}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-rest-action/http-headers-tab.png" width="400px" class="no-border" >}}

### Use HTTP Authentication

The **Use HTTP authentication** checkbox defines whether basic authentication (username and password) should be used.

### User Name

The **User name** property defines the user name that will be used to authenticate over HTTP. The user name needs to be entered using [microflow Expressions](/refguide/expressions/). The microflow expression should result in a string.

### Password

The **Password** property defines the password that will be used to authenticate over HTTP. The password needs to be entered using [expressions](/refguide/expressions/). The microflow expression should result in a string.

### Custom HTTP Headers {#custom-http-headers}

These headers are added to the HTTP request header. Each custom header is a pair with a key and a value (a microflow expression).

{{% alert color="warning" %}}
REST endpoints which are using NGINX as a webserver will ['silently drop'](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#missing-disappearing-http-headers) HTTP headers which contain an underscore `_`.
{{% /alert %}}

## Request Tab {#request}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-rest-action/request-tab.png" width="500px" class="no-border" >}}

The sections below describe the options in the drop-down menu for generating the request.

{{% alert color="info" %}}
Requests can only be generated for HTTP methods POST, PUT, PATCH, and OPTIONS.
{{% /alert %}}

### Export Mapping for the Entire Request

This option allows you to use a single [export mapping](/refguide/export-mappings/) for the body of the request. 

#### Mapping

Select the mapping that you want to apply.

#### Parameter Type

If the [export mapping](/refguide/export-mappings/) requires an input, this field shows the type of the input.

#### Parameter

If the [export mapping](/refguide/export-mappings/) requires an input, you can select a parameter of the correct type.

#### Content Type

If the [export mapping](/refguide/export-mappings/) is based on a message definition, it can export either XML or JSON. Choose the type of output you want.

{{% alert color="info" %}}
**Content-Type header** is not set by default. To set it, use the **Custom HTTP Headers** tab.
{{% /alert %}}

### Binary for the Entire Request

This option allows you to send binary data (for example, the contents of a FileDocument). See [Images and Files with REST](/refguide/send-receive-files-rest/) for detailed information working with files with REST).

### Form-Data

This option allows you to generate a multipart/form-data request for multiple parts. Each part is a pair with a key and a value (microflow expression). 

FileDocuments and images are also supported for this option when used as variables in microflow expressions.

For each part, you can specify the HTTP headers. For each part, by default, the **Content-Disposition**  (for file documents and images) and **Content-Type** (for all parts) headers are added. You can specify different values for these headers, or add other headers.

#### Content Type

Setting up a **Content-Type header** for a form-data request will result in a consistency error, as it will automatically be set to **multipart/form-data**. 

The content type for the FileDocument part is **application/octet-stream**.

### Custom Request Template

This option allows you to generate the request using a string template. The template defines the structure of the request in plain text. 

See [String Template](#string-template), above, for more information on constructing strings from templates.

## Response Tab {#response}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-rest-action/response-tab.png" width="500px" class="no-border" >}}

### Response Handling

These are the options in the drop-down menu for handling the response:

* **Apply import mapping** – if the response is JSON or XML, it can be transformed directly into objects using an [import mapping](/refguide/import-mappings/); the fields that you can choose here are described in the [Import Mapping action](/refguide/import-mapping-action/)
* **Store in an HTTP response** – any successful HTTP response can be stored directly in an [HttpResponse](/refguide/http-request-and-response-entities/#http-response) object, and the [$latestHttpResponse](#latesthttpresponse) variable is also updated
* **Store in a file document** – if the response contains binary content (for example, a PDF), it can be stored in an object of an entity type which inherits from `System.FileDocument` (see [Images and Files with REST](/refguide/send-receive-files-rest/)) for detailed information working with files with REST)
* **Store in a string** – if the response is a string (for example, CSV), it can be stored directly in a string variable
* **Do not store in a variable** - use this option when the call does not return anything useful

### Type

The **Type** field defines the type of the output.

### Variable

The **Variable** field defines the name for the result of the operation.

#### $latestHttpResponse Variable

The `$latestHttpResponse` variable is of the [HttpResponse](/refguide/http-request-and-response-entities/#http-response) type. It is available after a **Call REST service** activity. This variable can only be accessed in the microflow where the **Call REST service** activity is used.

However, its `Content` attribute will be left empty in most cases to minimize memory usage.

This attribute is filled when one of the following scenarios occur:

* The **Response handling** is **Store in an HTTP response** and the call succeeded
* The **Store message body in $latestHttpResponse variable** option in the **Error handling** section is checked and the call failed

#### Store Message Body in $latestHttpResponse Variable {#latesthttpresponse}

If HTTP response status code is not successful (for example, `[4xx]` or `[5xx]`), the flow will continue in an [error handler](/refguide/error-handling-in-microflows/#errorhandlers).

{{% alert color="warning" %}}
You should always add an error handler for a [Call REST service](/refguide/call-rest-action/) action.
{{% /alert %}}

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Troubleshooting{#troubleshooting}

### java.net.SocketException – Connection reset

This error occurs when your app's infrastructure closes the connection because it is inactive. Your app client does not know this and gets this error when it makes a new request.

There are two ways to resolve this:

1. Alter the value of the `http.client.CleanupAfterSeconds` [runtime setting](/refguide/custom-settings/) to be less than the connection timeout. This will ensure that the your app client will create a new HTTP client for the request.
2. Handle the error in your microflow and retry a number of times before returning the error. Your flow might look similar to the one below.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/call-rest-action/retry-rest-connection-timeout.png" class="no-border" >}}

## Security Considerations {#security}

The Call REST service activity allows your app to execute calls to any possible endpoint. This gives the developer a lot of power, but comes with risks, too. Mendix takes away some of the security concerns for the developer, but as it restricts you as little as possible in building your app, it is still possible to model an unsecure app. A common vulnerability that might be introduced in your app is the so-called SSRF attack vector.

### Preventing Server Side Request Forgery Attacks

Given that the **Location** property is provided by a string template, you can compose dynamic URLs that contain variable values. You could even model a microflow where (a part of) the URL is provided by the user. 

One possible vulnerability this could create is [Server Side Request Forgery (SSRF)](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery). In an SSRF attack, the user of your application is able to get access to resources that are otherwise not accessible. This is done by making the application do a call to a usually inaccessible resource and return its contents, instead of trying to access the resource directly. This can happen when the resource is an internal service running behind a firewall, accessible to other apps but not accessible to any other client on the web. The resource is accessible to your app and, depending on how your app is built, it could make the call and return data to the user.

*Example:* You have created two apps. Your first app is called *MySecretService* and has a published OData service that serves employee data to your other internal apps. It is deployed behind a firewall, can be accessed on `https://my.secret.ip.address/odata/employeeservice/v1`, and its access is restricted to make sure only your other apps can call it. Your second app is called *PDFService* and allows you to provide a URL and click Generate. This triggers a microflow with a Call REST service activity that has the provided URL as its Location; it passes the retrieved contents from that URL to a PDF generator, and returns the created PDF to the user. Now, a malicious user could provide the URL `https://my.secret.ip.address/odata/employeeservice/v1/Employee(11034)` to the *PDFService* app and press Generate. The user, who from his own device has no access to that internal service, will receive a PDF from the PDFService with all the data found for the employee with ID 11034.

To prevent this type of attack from happening, you can take the following precautions:

* Verify that your Call REST service activities never call a URL that is input by the user.

If that is not possible:

* Always validate and sanitize the user inputs
* Maintain a safe list of the domains that should be accessible and use it to validate URLs
* Do not allow the user to access an unprocessed response from the call (note that it might not be sufficient to make secret information invisible on a page. See also the section on [Communication Patterns](/refguide/communication-patterns/#security))
