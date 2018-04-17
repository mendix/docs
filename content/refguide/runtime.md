---
title: "Runtime"
---

The Mendix Runtime executes the model created in the Modeler. It serves pages to the Client and executes microflows, calls web services, generates documents, communicates with the database and much more.

## Licensing

You need a license to run an application in production mode. Without a license the Mendix Runtime stops operating after a couple of hours. A license can be obtained through your account manager at Mendix. Afterwards, you can activate your license by following the instructions in [How to Activate Your Mendix License on Microsoft Windows](/deployment/on-premises/activate-a-mendix-license-on-microsoft-windows).

## API

You can extend the functionality of the runtime by writing Java actions. The API available for Java programmers is available at [API docs](https://apidocs.mendix.com/7/runtime/).

## Integration API documentation

{{% alert type="info" %}}
Links to available API documentation such as WSDLs for published web services are available on the URL path `/api-doc` (for example: `http://localhost:8080/api-doc/`).
{{% /alert %}}

## Logging

The runtime logs activity at different levels. You can read more about logging and log levels at the [Logging](logging) page.

## Main Documents in This Category

* [Clustered Mendix Runtime](clustered-mendix-runtime)
* [Customization](custom-settings)
* [Data Storage](data-storage)
* [DateTime Handling FAQ](datetime-handling-faq)
* [Logging](logging)
* [Transient Objects and Gabage Collecting](transient-objects-garbage-collecting)
