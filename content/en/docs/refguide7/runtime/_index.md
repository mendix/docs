---
title: "Mendix Runtime"
url: /refguide7/runtime/
weight: 40
---

## 1 Introduction

The Mendix Runtime executes the application model that is created in the Modeler. It serves pages to the Mendix Client, executes microflows, calls web services, generates documents, communicates with the database, and much more.

## 2 Licensing

You need a license to run an application in production mode. Without a license, the Mendix Runtime stops operating after a couple of hours. A license can be obtained through your account manager at Mendix. Afterwards, you can activate your license by following the instructions in [How to Activate Your Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/).

## 3 APIs

You can extend the functionality of the Runtime by writing Java actions. For more information,  see the [Runtime API](/apidocs-mxsdk/apidocs/#runtime) section of *API Documentation*.

{{% alert color="info" %}}
Links to available API documentation such as WSDLs for published web services are available on the URL path `/api-doc` (for example: `http://localhost:8080/api-doc/`).
{{% /alert %}}

## 4 Main Documents in This Category

* [Clustered Mendix Runtime](/refguide7/clustered-mendix-runtime/)
* [Customization](/refguide7/custom-settings/)
* [Data Storage](/refguide7/data-storage/)
* [Date & Time Handling](/refguide7/datetime-handling-faq/)
* [Logging](/refguide7/logging/)
* [Monitoring Mendix Runtime](/refguide7/monitoring-mendix-runtime/)
* [Objects & Caching](/refguide7/objects-and-caching/)
* [Transient Objects & Garbage Collecting](/refguide7/transient-objects-garbage-collecting/)
