---
title: "Constants"
category: "Modeler"
---


Constants are used to define configuration values that can differ per environment. When running the application locally or in a sandbox, the values as defined in the Modeler are used. When running the application on a production environment such as the Mendix Cloud, the values should be configured separately in that environment.

{{% alert type="success" %}}
The value for a constant can be overridden in a [Configuration](configuration). This allows you to run locally using different values for one or more constants, without having to change the default value for the constant every time.
{{% /alert %}}

Constants can be used in:

*   [Microflow expressions](expressions): by prefixing the full name of the constant with @.
*   [Consumed Web Services](consumed-web-services): in this case the constant is a URL that specifies where the web service is located. This can vary based on the environment in which the application is running, so that you can for example use different web services for development and production.

## Common Properties

### Name

The name of the constant. This name is used to refer to it.

### Documentation

This field is for documentation purpose only: end users will never see it, and it doesn't influence the behavior of your application.

## Type Properties

### Type

The [data type](data-types) of the constant. This determines what kind of values a constant can hold. Supported data types are String, Boolean, Date and time, Float (deprecated), Decimal and Integer/Long.

## Value Properties

### Default value

The default value of the constant. This value is used when running locally or in a sandbox. When running locally, the value can be overridden in the currently selected [Configuration](configuration).
