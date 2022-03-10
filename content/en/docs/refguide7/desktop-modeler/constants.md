---
title: "Constants"
url: /refguide7/constants/
category: "Desktop Modeler"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

Constants are used to define configuration values. These can differ per environment.

When running the application on SAP BTP, or a licensed Mendix Cloud environment, you can configure each environment separately using the *Model Options* tab of the *Environment Details* page to set your constants. See [Environment Details](/developerportal/deploy/environments-details/) for more information.

For other cloud environments, IBM Cloud Portal or MindSphere for example, the constants can be accessed as *Environment Variables* in, for instance, Cloud Foundry. The constant is exposed with the name **module** + **.** + **constant**. For example `mymodule.myconstant`.

When running the application locally or in a sandbox, the values defined in the Modeler are used.

{{% alert type="info" %}}
The value for a constant can also be overridden in a [Configuration](/refguide7/configuration/). This allows you to run locally using different values for one or more constants, without having to change the default value for the constant every time.
{{% /alert %}}

Constants can be used in:

*   [Microflow expressions](/refguide7/expressions/): by prefixing the full name of the constant with @.
*   [Consumed Web Services](/refguide7/consumed-web-services/): in this case the constant is a URL that specifies where the web service is located. This can vary based on the environment in which the application is running, so that you can for example use different web services for development and production.

## Common Properties

### Name

The name of the constant. This name is used to refer to it.

### Documentation

This field is for documentation purpose only: end users will never see it, and it doesn't influence the behavior of your application.

## Type Properties

### Type

The [data type](/refguide7/data-types/) of the constant. This determines what kind of values a constant can hold. Supported data types are String, Boolean, Date and time, Float (deprecated), Decimal and Integer/Long.

## Value Properties

### Default value

The default value of the constant. This value is used when running locally or in a sandbox. When running locally, the value can be overridden in the currently selected [Configuration](/refguide7/configuration/).
