---
title: "Published web service"
category: "refguide4"
space: "Reference Guide 4"
---
<div class="alert alert-warning">{% markdown %}

This document describes the properties of a published web service. If you want a general overview of how mendix publishes microflows as webservices, you can check the [Published web services](Published+Web+Services) overview documentation.

{% endmarkdown %}</div>

## General

### Name

The name of the webservice. Note that this does not correspond to one particular Microflow, but encompasses a number of them (operations).

### Target namespace

This is the value of the targetNamespace attribute in the published WSDL file for this service. In Mendix, a target namespace must be a valid Uniform Resource Identifier (URI). For more information on XML namespaces, see [Wikipedia](http://en.wikipedia.org/wiki/XML_namespace).

<div class="alert alert-warning">{% markdown %}

It is important to correctly configure the target namespace before publishing your WSDL to third parties. Changing it later might break the third-party applications that call your published web services.

{% endmarkdown %}</div>

### Documentation

Can be used to describe what the webservice is used for.

## Operations

Provide the actual operations of which the webservice is composed. Each of these operations is a Microflow.

See [Operations](Operations).