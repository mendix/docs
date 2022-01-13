---
title: "Mendix Runtime"
weight: 40
---

## 1 Introduction

The Mendix Runtime executes the application model that is created in the Modeler. It serves pages to the Mendix Client, executes microflows, calls web services, generates documents, communicates with the database, and much more.

## 2 Licensing

You need a license to run an application in production mode. Without a license, the Mendix Runtime stops operating after a couple of hours. A license can be obtained through your account manager at Mendix. Afterwards, you can activate your license by following the instructions in [How to Activate Your Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows).

## 3 APIs

You can extend the functionality of the Runtime by writing Java actions. For more information,  see the [Runtime API](/apidocs-mxsdk/apidocs/#runtime) section of *API Documentation*.

{{% alert type="info" %}}
Links to available API documentation such as WSDLs for published web services are available on the URL path `/api-doc` (for example: `http://localhost:8080/api-doc/`).
{{% /alert %}}

## 4 Main Documents in This Category

* [Clustered Mendix Runtime](clustered-mendix-runtime)
* [Customization](custom-settings)
* [Data Storage](data-storage)
* [Date & Time Handling](datetime-handling-faq)
* [Logging](logging)
* [Monitoring Mendix Runtime](monitoring-mendix-runtime)
* [Objects & Caching](objects-and-caching)
* [Transient Objects & Garbage Collecting](transient-objects-garbage-collecting)
