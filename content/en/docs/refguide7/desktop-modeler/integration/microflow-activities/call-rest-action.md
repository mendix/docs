---
title: "Call REST Service Action"
url: /refguide7/call-rest-action/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

The Call REST Service action can be used to call a REST endpoint. You can specify the location and how the response of the REST call should be handled.

## 2 General

{{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/call-rest-action/19399080.png" >}}

### 2.1 Location

The **Location** property defines the REST endpoint to be called. The location needs to be entered using a string template. The string template should result in a valid URL string. Parameters can be used by writing a number between braces (for example, `{1}`). For each parameter in the template, you can specify its value using a [microflow expression](/refguide7/expressions/) resulting in a string value. To escape the opening brace (`{`), a double opening brace should be used (`{{`).

The **HTTP method** property defines the HTTP method to use when calling a REST endpoint. The possible values are: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

### 2.2 Timeout

Set **Use timeout on request** to **Yes** to be able specify how long the Call REST activity should wait for the REST endpoint to respond. If the REST endpoint has not responded after the number of seconds in **Timeout (s)**, an exception will occur and the microflow will roll back or go into your custom error handler.

### 2.3 Proxy Configuration

{{% alert color="info" %}}

This feature was introduced in version 7.15.0.

{{% /alert %}}

In almost all cases, you can ignore this setting. **Use project settings** is a good default value.

If desired, you can configure whether to use a proxy for the request. These are the choices:

* **Use project settings** – use whatever settings are defined at the project level (default)
* **Override** – override the project-level settings for this action
* **No proxy** – do not use a proxy for this action, even if there is a proxy configured at the project level

When you select **Override**, you can configure dynamically whether to use a proxy. You then supply the host, port, username, and password settings for the proxy.

## 3 HTTP Headers

{{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/call-rest-action/19399093.png" >}}

### 3.1 Authentication

The **Use HTTP authentication** check box defines whether basic authentication should be used.

The **User name** property defines the user name that will be used to authenticate over HTTP. The user name needs to be entered using [microflow Expressions](/refguide7/expressions/). The microflow expression should result in a string.

The **Password** property defines the password that will be used to authenticate over HTTP. The password needs to be entered using [expressions](/refguide7/expressions/). The microflow expression should result in a string.

### 3.2 Custom HTTP Headers

These headers are added to the HTTP request header. Each custom header is a pair with a key and a value (a microflow expression).

## 4 Request

{{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/call-rest-action/19399114.png" >}}

The sections below describe the options in the drop-down menu for generating the request. Requests can only be generated for HTTP methods POST, PUT, PATCH, and OPTIONS.

### 4.1 Export Mapping for the Entire Request

This option allows you to use a single [export mapping](/refguide7/export-mappings/) for the body of the request. 

#### 4.1.1 Mapping

Select the mapping that you want to apply.

#### 4.1.2 Parameter Type

If the [export mapping](/refguide7/export-mappings/) requires an input, this field shows the type of the input.

#### 4.1.3 Parameter

If the [export mapping](/refguide7/export-mappings/) requires an input, you can select a variable of the correct type.

#### 4.1.4 Content Type

If the [export mapping](/refguide7/export-mappings/) is based on a message definition, it can export both XML and JSON. Choose the type of output you want. **Content-Type header** is not set by default. To set it, use the **Custom HTTP Headers** tab.

### 4.2 Binary for the Entire Request

This option allows you to send binary data (for example, the contents of a FileDocument).

### 4.3 Custom Request Template

This option allows you to generate the request using a string template. The template defines the structure of the request in plain text. Parameters can be used by writing a number between braces (for example, `{1}`). For each parameter in the template, you can specify its value using a [microflow expression](/refguide7/expressions/) resulting in a string value. To escape the opening brace (`{`), a double opening brace should be used (`{{`).

## 5 Response

{{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/call-rest-action/19399084.png" >}}

### 5.1 Response Handling

These are the options in the drop-down menu for handling the response:

* **Apply import mapping** – if the response is JSON or XML, it can be transformed directly into objects using an [import mapping](/refguide7/import-mappings/). The fields that you can choose here are described in the [Import Mapping action](/refguide7/import-mapping-action/)
* **Store in an HTTP response** – any successful HTTP response can be stored directly in an [HttpResponse](/refguide7/http-request-and-response-entities/#http-response) object, and the [$latestHttpResponse](#latesthttpresponse) variable is also updated
* **Store in a file document variable** – if the response is a binary content (for example, a PDF), it can be stored in an entity – this entity should inherit from `System.FileDocument`
* **Store in a string** – if the response is a string (for example, CSV), it can be stored directly in a string variable
* **Do not store in a variable** - use this option when the call does not return anything useful

### 5.2 Output

The **Type** field defines the type of the output variable.

The **Name** field defines the name for the variable that will hold the result of the operation.

### 5.3 Error Handling

This section is applicable when the HTTP response status code is not successful (for example, a redirection [3xx] or an error [4xx and 5xx]).

When the **Store message body in $latestHttpResponse variable** option is selected, `$latestHttpResponse/Content` will be set with the response body. It might contain some useful information provided by the server (for example, why the authentication is rejected).

### 5.4 $latestHttpResponse Variable<a name="latesthttpresponse"></a>

The `$latestHttpResponse` variable is of the [HttpResponse](/refguide7/http-request-and-response-entities/#http-response) type. It is available after a Call REST activity.

However, its `Content` attribute will be left empty in most cases to minimize memory usage.

This attribute is filled when one of the following scenarios occur:

* The **Response handling** is **Store in an HTTP response** and the call succeeded
* The **Store message body in $latestHttpResponse variable** option in the **Error handling** section is checked and the call failed

This variable can be accessed from any microflow action in the scope.
