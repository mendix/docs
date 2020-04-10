---
title: "Mendix Runtime"
tags: ["studio pro", "runtime"]
---

## 1 Introduction

The runtime is effectively an interpreter which ‘runs’ a Mendix model and serves pages to the user.

Each patch version of Mendix comes with its own version of the runtime which implements the features which are available in that version of Mendix. For example, runtimes for Mendix 8.4.1 and 8.4.2 are different and can only run Mendix apps built for that version.

## 2 Runtime Overview

The Mendix runtime consists of two parts: the [Runtime Server](runtime-server) and the [Mendix Client](mendix-client). The relationship between the two is shown in the chart below.

The Runtime Server is launched on a cloud platform, executes microflows, and connects to files, the relational database, and any other required services. It waits to be contacted by the Mendix Client. The Runtime Server is described in more detail in [Runtime Server](runtime-server).

The Mendix Client is started by the end-user. This can be within a web browser, or on another supported device. If it is in online mode, it starts a session with the Runtime Server which may or may not require authentication. The Runtime Server records the session details in the database so that the Mendix Client can make requests. The Mendix Client is described in more detail in [Mendix Client](mendix-client).

The end-user interacts with the Mendix Client which then makes requests to the Runtime Server to process data or perform server-side functions (for example, microflows). At the end of the request, all state (including uncommitted data) is passed back to the Mendix Client. This enables the Runtime Server to be stateless, which means that any Runtime Server can respond to a request from the Mendix Client. A load balancer decides which Runtime Server instance will respond to a request. When an end-user session ends, the Runtime Server removes references to that session.

Where there is more than one instance or an app, one instance will be the *Cluster Leader*. The Runtime Server in that instance will be responsible for a number of activities which cannot easily be distributed. These include:

* Session cleanup handling
* Cluster node expiration handling
* Background job expiration handling
* Unblocking blocked users
* Executing scheduled events
* Performing database synchronization tasks
* Clearing persistent sessions after a new deploy

More information on multiple instances is in [Clustered Mendix Runtime](clustered-mendix-runtime).

![An overview of the Mendix Runtime](attachments/runtime/runtime-overview.png)

Each of the components of the chart is described below:

### 2.1 External Services

External services provide data and other functions from outside your Mendix app. These can be external data sources like SAP, external display widgets like Google maps, or external data processing like IBM Watson machine learning. The Runtime Server communicates with these over HTTP(S) connections.

### 2.2 Infrastructure

This is the hardware on which the Mendix app will be deployed. It is usually provided as Infrastructure as a Service (IaaS) which provides virtual machines in the public or private cloud. However, the infrastructure can also be physical machines running on-premises. Examples of infrastructure are Amazon Web Services (AWS), Microsoft Azure, or Windows Server machines.

### 2.3 Files

This is where files are stored which are part of the data used by the app. In particular it contains the value of *FileDocument* objects, including images, which are binary objects that are stored outside the database to avoid size and performance restrictions.

### 2.4 Relational Database

This is the database (or sometimes the schema of a shared database) which holds the objects as defined in the domain model(s) in the app.

### 2.5 Platform

This is the operating system on which the Mendix app is running plus additional services, such as a database, which have been bound to the app.

### 2.6 Instance

Also called the **App Container**. This launches and exposes the runtime server. There may be only one instance, but to provide high availability and better performance there can be many instances.

### 2.7 Runtime Server

This is the server side of the Mendix runtime. It is described below in Runtime Server.

### 2.8 Load Balancer

The load balancer takes incoming requests from the Mendix Client and forwards them to a runtime server instance. It balances the load by making sure that requests are distributed evenly to the different instances.
The Mendix Client communicates with the load balancer using HTTPS. Communication on the server side of the load balancer, to environment instances and CDN, is performed using HTTP.

### 2.9 CDN Static Config

The CDN (Content Delivery Network) contains static configuration information which is needed by the client. These include the files needed to start the Mendix Client from a browser, Cascading Style Sheets (css files) which define the app’s theme, and JavaScript files which define client-side logic.

### 2.10 Mendix Client

This is the browser or device which allows the end-user to interact with the app. This can be a web browser, such as Chrome, or a mobile device, such as an iPhone. It typically has a screen, pointer device, and input device to allow end-users to use the app.

## 3 Licensing

You need a license to run an application in production mode. Without a license, the Runtime Server stops operating after a couple of hours. A license can be obtained through your account manager at Mendix. Afterwards, you can activate your license by following the instructions in [How to Activate Your Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows).

## 4 APIs

You can extend the functionality of the Runtime Server by writing Java actions. For more information,  see the [Runtime API](/apidocs-mxsdk/apidocs/index#runtime) section of *API Documentation*.

{{% alert type="info" %}}
Links to available API documentation such as WSDLs for published web services are available on the URL path `/api-doc` (for example: `http://localhost:8080/api-doc/`).
{{% /alert %}}

## 5 Main Documents in This Category

* [Clustered Mendix Runtime](clustered-mendix-runtime) – describes the behavior and impact of running Mendix Runtime as a cluster
* [Runtime Customization](custom-settings) – presents advanced options for customizing Runtime server settings
* [Data Storage](data-storage) – presents information on data storage configuration options, such as the following:
	* [Uniqueness Constraint Migration](uniqueness-constraint-migration)
	* [MySQL/MariaDB](mysql)
	* [Oracle](oracle)
	* [SAP HANA](saphana)
* [Date & Time Handling](datetime-handling-faq) – presents details on how to configure Mendix Server operations for the user's date and time
* [Logging](logging) – discusses the various log levels for Runtime
* [Monitoring Mendix Runtime](monitoring-mendix-runtime) – describes the Mendix Runtime monitoring actions that are supported (such as [state statistics](monitoring-mendix-runtime#state) and [thread stack traces](monitoring-mendix-runtime#thread)).
* [Objects & Caching](objects-and-caching) – presents details on what happens when objects are loaded from the database, cached, retrieved, changed, and committed
* [Mendix Runtime & Java](runtime-java) – explains some of the basic concepts of Java in Mendix
