---
title: "Consumed Web Service"
url: /refguide/consumed-web-service/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes the properties of an imported web service. For a general overview of imported web services, see the [Consumed Web Services](/refguide/consumed-web-services/) overview documentation.

## WSDL Source

You can load the WSDL from a URL or from a WSDL file saved on your disk.

{{% alert color="warning" %}}
If you try to load a WSDL file from a URL that requires authentication, you will be asked for a user name and password.

A WSDL file may contain multiple services and a service may contain multiple ports. Upon loading a WSDL, a dialog box will ask you to select a port for each service that contains multiple ports.
{{% /alert %}}

## Services

This part specifies the services to be found in the WSDL.

* **Name** – the name of the service
* **Port** – the selected port
* **Location** – where the service is located
* **Location constant** – can be used to add additional locations for a service in the case of, for example, when the URL of the SOAP service changes when moving from a development to a production environment; see also [Constants](/refguide/constants/)

If there is a multiple-port service defined in the WSDL, a pop-up dialog box will enable you to select which of the ports to use.

## Operations

This part shows all the operations found in the WSDL. You can expand the list and see additional information about individual operations in the right pane.

## Advanced Settings

Check **Send binary data as attachment (MTOM)** to enable MTOM (Message Transmission Optimization Mechanism), a method of efficiently sending binary data to and from Web services. Read more about it at [w3.org](https://www.w3.org/TR/soap12-mtom/). 

{{% alert color="warning" %}}
Message optimization will only be applied when you use one or more export mappings to create the request body in the **Call web service** action.
{{% /alert %}}

## Calling Consumed Web Services

For details on how to call a consumed web service, see [Call Web Service](/refguide/call-web-service-action/).
