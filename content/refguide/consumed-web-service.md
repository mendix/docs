---
title: "Consumed Web Service"
parent: "consumed-web-services"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}
This document describes the properties of an imported web service. If you want a general overview of imported web services, you can check the [Consumed Web Services](consumed-web-services) overview documentation.
{{% /alert %}}

## 2 WSDL Source

You can load the WSDL from a URL or from a WSDL file saved on your disk.

{{% alert type="warning" %}}

A dialog will ask for a username and password if you try to load a WSDL file from a URL that requires authentication.

{{% /alert %}}{{% alert type="warning" %}}

A WSDL file can contain multiple services. A service can contain multiple ports. Upon loading a WSDL, a dialog will ask you to select a port for each service that contains multiple ports.

{{% /alert %}}

## 3 Services

This part contains the services to be found in the WSDL.

* **Name** shows the name of the service.
* **Port** shows the selected port.
* **Location** is where the service is located.
* **Location constant** can be used to add additional locations for a service, for example because the URL of the SOAP service changes when moving from a development to a production environment. See also [Constants](constants).

If there is a multiple-port service defined in the WSDL, a dialog will pop up that allows you to select which of the ports to use.

## 4 Operations

This part shows all the operations found in the WSDL. You can expand the list and see additional information about individual operations in the right pane.

## 5 Advanced Settings

Check **Send binary data as attachment (MTOM)** to enable MTOM (_Message Transmission Optimization Mechanism_), a method of efficiently sending binary data to and from Web services. Read more about it at [w3.org](https://www.w3.org/TR/soap12-mtom/). Note that message optimization will only be applied when you use one or more export mappings to create the request body in the call web service action.

## 6 Calling consumed web services

For details on how to call a consumed web service, see [Call Web Service](call-web-service-action).
