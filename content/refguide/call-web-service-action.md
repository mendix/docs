---
title: "Call Web Service"
parent: "integration-activities"
tags: ["studio pro", "integration activity", "call we service"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
 This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The call-web-service activity can be used to call one of the [imported web service](consumed-web-services) operations. You can specify whether or not to use authentication, what the request should look like and how the response of the web service should be handled.

## 2 Operation

![](attachments/19202819/19399020.png)

### 2.1 Operation

**Operation** defines which operation of the web service is called.

### 2.2 Override Location

**Override location** defines whether to override the location where the web service is called.

{{% alert type="info" %}}

When calling a web service using a call-web-service activity, the location of the web service is determined as follows.

1.  If the location is overridden in the call-web-service activity, the location specified in that action is used.
2.  If the service that defines the operation has a location constant defined, the value of that constant is used.
3.  Otherwise, the location as specified in the WSDL of the imported web service is used.

{{% /alert %}}

### 2.3 Location

**Location** defines the address of the web service if you override the location. The location needs to be entered using an [expression](expressions) which results in a valid URL string.

### 2.4 Use Timeout on Request

This can be used to throw an exception when the web service takes too long to respond after connecting. After a set amount of time, an exception will be thrown and the microflow will roll back or go into your custom error handler.

Default value: *Yes* (as of Studio Pro [8.5.0](/releasenotes/studio-pro/8.5#850); in earlier versions, the default value was No)

{{% alert type="warning" %}}
It is recommended that you keep this set this to **Yes**. Most cloud infrastructure services (including those used by the Mendix Cloud) will close HTTP connections automatically if there is no traffic for a few minutes, even if your activity is still waiting for a response. This means that, if your activity calls a web service which takes a long time to respond, the connection may be closed without the activity being aware of this, and your activity will not receive a response. Under these circumstances, if **Use timeout on request** is set to **No**, your activity will get stuck waiting indefinitely for data to arrive.
{{% /alert %}}

Default: *No*

### 2.5 Timeout

**Timeout** specifies the timeout value in seconds.

Default value: *300* (as of Studio Pro [8.5.0](/releasenotes/studio-pro/8.5#850); in earlier versions, the default value was 30)

### 2.6 Validate Against WSDL

**Validate against wsdl** specifies whether the call action should validate the incoming and outgoing XML against the WSDL. Note that Mendix generates correct XML but the application data can cause the XML to become incorrect (for example fields that cannot be empty are empty in the data you're sending).

Setting this setting to yes can greatly decrease performance!

{{% alert type="warning" %}}
When consuming a WSDL that uses encoding, turning on validation will lead to a consistency error, because it is not WS-I compliant.
{{% /alert %}}

Schema validation is not supported when you configure the [consumed web service](consumed-web-service) to send binary data as attachments.

Default: *No*

### 2.7 Proxy Configuration

{{% alert type="info" %}}
This feature is only available when you have configured web service calls to use the (optimized) implementation in the [project's runtime settings](project-settings).
{{% /alert %}}

In almost all cases, you can ignore this setting. **Use project settings** is a good default value.

If desired, you can configure whether to use a proxy for the request. These are the choices:

* **Use project settings** – use whatever settings are defined at the project level (default)
* **Override** – override the project-level settings for this action
* **No proxy** – do not use a proxy for this action, even if there is a proxy configured at the project level

When you select **Override**, you can configure dynamically whether to use a proxy. You then supply the host, port, username, and password settings for the proxy.

## 3 HTTP Headers

![](attachments/19202819/19399021.png)

### 3.1 Use HTTP Authentication

Use HTTP authentication defines whether the basic authentication should be used.

### 3.2 User Name

User name defines the user name that will be used to authenticate over HTTP. The user name needs to be entered using [expressions](expressions). The microflow expression should result in a string.

### 3.3 Password

Password defines the password that will be used to authenticate over HTTP. The password needs to be entered using [expressions](expressions). The microflow expression should result in a string.

### 3.4 Custom HTTP Headers

These custom headers are added to the HTTP request header. Each custom header is a pair of a key and a value (a microflow expression).

## 4 SOAP Request Header and SOAP Request Body

![](attachments/19202819/19399022.png)

The XML for the request parts (header and body) can be generated in several ways that are described in the following sections.

### 4.1 Export Mapping for Entire Request

Using this option, a single [Export Mapping](export-mappings) can be used to generate the XML for the request part. You can choose the export mapping to use for the request part and, if applicable, the object or list that you want to use as parameter for the mapping.

### 4.2 Simple Expressions for Each Request Parameter

This option for request parts can be used when all children of the XML element of the request part occur at most once and are primitive values. If that is not the case, this option is disabled and cannot be used.

Using this option you need to supply an argument value for all elements of a primitive type (parameters). Argument values need to be entered using [expressions](expressions) resulting in the same data type as the parameter.

![](attachments/19202819/requestParamOptNil.png)

For primitive parameters (both optional and nillable) that do not have an export mapping, you can now choose to send empty values as shown above in the image.

### 4.3 Export Mappings for Each Request Parameter

This option can be used when all children of the XML element of the request part occur at most once. You need to supply an argument value for all top-level elements of the request (parameters). For simple parameters you can enter a microflow expression, for complex parameters you define a mapping.

{{% alert type="warning" %}}

If a primitive request parameter is both optional and nillable, you need to select whether or not to send the empty values.

*Default value*::_ do not send the empty values.

{{% /alert %}}

### 4.4 Custom Request Template

This option allows you to generate the XML for the request part using a template. The template defines the XML structure of the request part in plain text. Parameters can be used by writing a number between braces, e.g. '{1}'. For each parameter in the template you can specify its value using a [microflow expression](expressions) resulting in a String value.

For the request header, Studio Pro provides some common XML structures in the drop-down menu.

## 5 SOAP Response

![](attachments/19202819/19399023.png)

If the data type is a complex XML structure it can be mapped to entities using a [Import Mapping](import-mappings). If it is primitive data, it can be stored in a variable immediately. The response does not have to be used though; it can also be ignored if you are not interested in it.

### 5.1 Import Mapping (for Complex XML Structures)

Here you can choose the [Import Mapping](import-mappings) that will be used to transform the XML into objects.

### 5.2 If No Object Was Found

You can indicate what should happen **if not object was found** when the import mapping has checked the box **decide this at the place where the mapping gets used**.

### 5.3 Parameter

If the selected mapping requires a parameter, you can choose it here.

### 5.4 Commit

Indicates whether the resulting objects should be committed to the database, and whether event handlers should be triggered.

| Option | Description |
| --- | --- |
| Yes | The objects are saved in the database and the [event handlers](event-handlers) are triggered. |
| Yes without events | The objects are saved in the database, but the [event handlers](event-handlers) are not triggered (default). |
| No | The objects are created without being saved in the database. You will need a [commit action](committing-objects) to save them. |

### 5.5 Range (If the Mapping Returns a List)

The range determines how many objects are mapped and returned.

| Range | Meaning |
| --- | --- |
| All | Map and return all objects. |
| First | Map and return only the first object. The result of the action will be a single object instead of a list. |
| Custom | Map and return a given number of objects (limit). The limit is a microflow expression that should result in a number. |

### 5.6 Store in Variable

Choose whether to store the result of the operation in a variable.

### 5.7 Type

The type of the output variable.

### 5.8 Name

The name for the variable that will hold the result of the operation.
