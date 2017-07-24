---
title: "Imported web service"
parent: "imported-web-services"
---

This document describes the properties of an imported web service. If you want a general overview of imported web services, you can check the [Imported web services](imported-web-services) overview documentation.

## General

### Name

The name of the imported web service.

### Documentation

The documentation of the imported web service, this is so you can describe the purpose of the webservice.

## Web service Description

### WSDL

You can load the WSDL from an URL or from a File saved on your harddisk. After selecting an option and added the required url or file location, press import to fetch the services/operations in this WSDL.

### Services

This part contains the services that are found in the WSDL.

*   Name is the name of the service.
*   Location is where the service is located.
*   Location constant can be used to add additional locations for a service, for example: the URL of the soap service may change when moving from a development to a production environment. See also [Constants](constants).

### Operations

This part contains all the operations found in the WSDL. You can expand the list and see additional information of individual operations in the right pane.
