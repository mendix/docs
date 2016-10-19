---
title: "Constants"
category: "Modeler"
space: "Reference Guide 5"
---


Constants are used to define values that can be different in different configurations (development, test, acceptation and production).

Constants can be used in:

*   A microflow expression by prefixing the full name of the constant with @.
*   [Consumed Web Services](Consumed+Web+Services): in this case the constant is a URL that specifies where the web service is located. This can vary based on the configuration, so that you can use a different web service during development than in production.

## Common

### Name

The name of a constant is used to refer to it.

### Documentation

This field is for documentation purpose only: end users will never see it, and it doesn't influence the behavior of your application.

## Type

Here you can choose the type of the constant.

The chosen type influences what you can fill in under Value. The type of the value is one of the following [data types](Data+Types): String, Boolean, Date and time, Decimal, Float or Integer/Long.

## Value

Under value you can set the values of the constants for your development and test environment.

<div class="alert alert-info">{% markdown %}

You can specify values for development and test configurations in the Modeler. For the acceptance and production environment the values of constants need to be configured in the application.conf file.

{% endmarkdown %}</div>
