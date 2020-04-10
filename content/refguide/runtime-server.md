# Runtime Description

# Introduction

This description of the runtime is based on an app running in the cloud. You can also run Mendix locally for testing, but this is conceptually the same.
The runtime is effectively an interpreter which ‘runs’ a Mendix model.
Each patch version of Mendix comes with its own version of the runtime which implements the features which are available in that version of Mendix. For example, runtimes for Mendix 8.4.1 and 8.4.2 are different and can only run Mendix apps built for that version.

# Top Level View

The Mendix runtime consists of two parts: the Runtime Server and the Mendix Client (see picture, below).
The Runtime Server is launched on a cloud platform and connects to the Files, Relational Database, and any other required services. It waits to be contacted by the Mendix Client.
The Mendix Client is started by the end user. This can be within a web browser, or on another supported device. If it is in online mode, it starts a session with the Runtime Server which may or may not require authentication. The Runtime Server records the session details in the database so that the Mendix Client can make requests.
The end user interacts with the Mendix Client which then makes requests to the Runtime Server to process data or perform server-side functions (for example, microflows). At the end of the request, all state (including uncommitted data) is passed back to the Mendix Client. This enables the Runtime Server to be stateless, which means that any Runtime Server can respond to a request from the Mendix Client. A load balancer decides which Runtime Server instance will respond to a request.
When an end user session ends, the Runtime Server removes references to that session.
Where there is more than one instance or an app, one instance will be the *Cluster Leader*. The Runtime Server in that instance will be responsible for a number of activities which cannot easily be distributed. These include:

- Session cleanup handling
- Cluster node expiration handling
- Background job expiration handling
- Unblocking blocked users
- Executing scheduled events
- Performing database synchronization tasks
- Clearing persistent sessions after a new deploy

More information on multiple instances is in [Clustered Mendix Runtime](https://docs.mendix.com/refguide/clustered-mendix-runtime).

![](https://paper-attachments.dropbox.com/s_1CF3B2795859DD5CF84255357EC8D13B10EB1C3E1D24EE85282E2D23095921B2_1585660168464_image.png)

## External Services

External services provide data and other functions from outside your Mendix app. These can be external data sources like SAP, external display widgets like Google maps, or external data processing like IBM Watson machine learning. The Runtime Server communicates with these over HTTP(S) connections.

## Infrastructure

This is the hardware on which the Mendix app will be deployed. It is usually provided as Infrastructure as a Service (IaaS) which provides virtual machines in the public or private cloud. However, the infrastructure can also be physical machines running on-premises. Examples of infrastructure are Amazon Web Services (AWS), Microsoft Azure, or Windows Server machines.

## Files

This is where files are stored which are part of the data used by the app. In particular it contains the value of *FileDocument* objects, including images, which are binary objects that are stored outside the database to avoid size and performance restrictions.

## Relational Database

This is the database (or sometimes the schema of a shared database) which holds the objects as defined in the domain model(s) in the app.

## Platform

This is the operating system on which the Mendix app is running plus additional services, such as a database, which have been bound to the app.

## Instance

Also called the **App Container**. This launches and exposes the runtime server. There may be only one instance, but to provide high availability and better performance there can be many instances.

## Runtime Server

This is the server side of the Mendix runtime. It is described below in Runtime Server.

## Load Balancer

The load balancer takes incoming requests from the Mendix Client and forwards them to a runtime server instance. It balances the load by making sure that requests are distributed evenly to the different instances.
The Mendix Client communicates with the load balancer using HTTPS. Communication on the server side of the load balancer, to environment instances and CDN, is performed using HTTP.

## CDN Static Config

The CDN (Content Delivery Network) contains static configuration information which is needed by the client. These include the files needed to start the Mendix Client from a browser, Cascading Style Sheets (css files) which define the app’s theme, and JavaScript files which define client-side logic.

## Mendix Client

This is the browser or device which allows the end user to interact with the app. This can be a web browser, such as Chrome, or a mobile device, such as an iPhone. It typically has a screen, pointer device, and input device to allow end users to use the app.

# Runtime Server

The Runtime Server is deployed to the cloud (see Mendix Runtime Deployment, below) and waits for requests from the Mendix Client or a call from another app or service. It processes the request and returns the requested data, plus any additional state information where appropriate. The Runtime Server itself is stateless, which enables it to be efficiently scaled to multiple instances.

![](https://paper-attachments.dropbox.com/s_1CF3B2795859DD5CF84255357EC8D13B10EB1C3E1D24EE85282E2D23095921B2_1585660248565_image.png)

## M2ee

M2ee is used to launch the runtime server when your app is deployed to the cloud. Once the Runtime Server is running, m2ee can be used to connect back to the Runtime Server, issuing commands like setting log levels, asking how many users are logged in, showing currently running actions inside the application, or even telling it to shut down itself.
M2ee communicates with the runtime server through authenticated POST requests, in JSON format, which are sent to the administration port of the runtime server.

## Runtime Core

This is an interpreter written in Java and Scala, which uses the project model to decide how to process a request from the Mendix Client or a request from an external service and controls the various processes which need to take place to service the request.

## Project Model

This contains the model which defines how the app behaves, including domain models, microflows, import mappings etc. This is what the runtime core interprets to run the app.

## Temporary Object Storage

This holds objects which are being used in the Runtime Server but which are not yet committed to the database. These might be committed in the future (for example, if they are new or changed objects), or may remain uncommitted (for example, if they are non-persistable objects).

## File Storage Manager

This controls retrieving and storing non-relational data. In particular it retrieves the data associated with FileDocument entities.

## File Storage

This is where files are stored which are part of the data used by the app. In particular it contains the value of *FileDocument* objects, including images, which are binary objects that need to be stored outside the database to avoid size and performance restrictions.

## Database Synchronization

Database Synchronization is initiated when an app is started. It manages changes to the database structure which need to be applied to the database when an app is deployed after the Domain Model in the app is updated. For example, if a new attribute is added to an entity, the database structure will need to be updated to support this.
This activity is carried out by the cluster leader instance if there is more than one instance of the Runtime Server. While this activity takes place, all other instances will pause until the database synchronization is complete.

## External Service Calls

This manages calls to external services to obtain data. An app can make calls to multiple external services, using a variety of different API formats, for example OData or REST.

## External Service

This is a service which provides data to the app. A service could be another Mendix app accepting external service requests, or a third-party service such as SAP or Google Maps.

## Relational Database

This is the database (or sometimes the schema of a shared database) which holds the objects as defined in the domain model(s) in the app.

## Query Executor

This manages the CRUD (create, read, update, and delete) operations for retrieving and storing data in the relational database which is bound to the app. The operations are performed using SQL which is tailored to the underlying database.
Where queries are not formatted in SQL, the query executor will convert them from their original format (XPath or OQL for example). It also applies the security which is set within the app.

## Object Manager

This manages the objects which are maintained in the Runtime Server (non-persistable, new, and changed objects) and ensures that they are passed back to the Mendix Client at the end of the request.

## Microflow Engine

This runs the logic which is defined in the microflows in the project model.

## Scheduler

The scheduler triggers microflow actions at preconfigured times, or intervals.

## License Server

This is a service which provides information about the license which is being used to run the app. The license being used defines how many named users can be added to the app, and how many users can use the app simultaneously.

## Custom Java

This runs custom Java which is held as Java actions in the project model.

## Mendix Client API

This receives requests from the Mendix Client, decodes them and passes them to the Runtime Core or the Object Manager, and formats a response to the Mendix Client once the request has been processed. The Mendix Client API is known as *xas*.

## Custom Request Handler

This is a request handler added to the app using the com.mendix.core.Core#addRequestHandler(…) API call.

## External Service Requests

This receives requests from other services, decodes them and passes them to the Runtime Core or Object Manager, and formats a response to the service once the request has been processed. These requests can be:

- Webservice – this exposes microflows via a SOAP interface
- REST – this exposes microflows via a REST endpoint
- OData – this exposes entity data as an OData endpoint
- Other – these are metadata interfaces including WSDL and Swagger
## HTTPS Server

This decodes HTTPS requests from Mendix Clients or other services and passes them to the Runtime Server.

## Mendix Client

This is the browser or device which allow the end user to interact with the app. This can be a web browser, such as Chrome, or a mobile device, such as an iPhone. It typically has a screen, pointer device, and input device to allow end users to use the app.
The Runtime Server communicates with the Mendix Client using a private API called *xas*.

# Mendix Client

The client is a single page application controlled by the client core. This means that all paging is handled by the Mendix Client, rather than being separate pages served to the browser using different URLs. The initial page on which code is bootstrapped is called "shell", and the code consists of the *Core* and *Widgets*.
Because the Mendix Client can run in a browser, everything in the Mendix Client is visible to the end-user. Security is carried out in the Runtime Server, which will only send information to the Mendix Client which the user is allowed to see.
The shell page is created in different ways, depending on the sort of client.

- For a **browser** client, the initial page is provided by a *theme*
- For a ***mobile app*** the initial page is packaged as an android or iOS app to be downloaded to the mobile device

 

![](https://paper-attachments.dropbox.com/s_1CF3B2795859DD5CF84255357EC8D13B10EB1C3E1D24EE85282E2D23095921B2_1585660279644_image.png)

## Client Core

This can be seen as the interpreter of the client. It uses the client config and client state to decide how to process a request from the end user.
The client core controls the various processes which need to take place to service the request. These processes include data fetching and manipulation, client-side expressions, and navigation.
The client core is written in JavaScript.
All Mendix apps run the client core unchanged, but each patch version of Mendix comes with its own client core.

## Widgets

These are the fundamental building blocks of the Mendix client. All the actions which the client takes are controlled by widgets. They are responsible for what is displayed on pages, and how user input is managed. There is a more detailed description of widgets in Widgets, below.

## Javascript Actions

This runs custom JavaScript, added by the app developer, which is held as JavaScript actions in the client config.

## UI Layer

The UI layer performs navigation, resource loading, and platform integration. accepts interactions from the end-user (for example, data input or button presses) and passes them to the client core. It is responsible for building the page which is presented to the end user in response to the actions of the Mendix Client, using the correct language and other locale settings.

## HTTPS Server

The HTTPS server serves pages, widgets, and javascript actions, held in the model, to the end-user of the app.

## Logic

This runs client-side logic which is defined in the nanoflows in the model.

## Platform APIs

These are functions of the device on which the Mendix Client is running. In most cases this will be a function of a mobile device such as the camera or GPS location, but it can also include browser functions such as accessing an image file or making calls to Mendix Native APIs.

## Client Config

This is the static data which is needed by the Mendix Client. For a browser-based client, this data is held online, with the Runtime Server. For native apps, this is held locally in a native bundle.
These include the shell page needed to start the Mendix Client, Cascading Style Sheets (css files) which define the app’s theme, and JavaScript files which define client-side logic.

## CodePush

This process allows the Mendix app to distribute updates to clients which are running react-native apps.

## Online Data

This manages the objects which are maintained in the Mendix Client (non-persistable, new, and changed objects) and ensures that they are passed to the Runtime Server when they are needed as part of a request.

## Object Cache

This holds objects which are being used by the Mendix Client in memory – for example a list of objects returned by the Runtime Server to be displayed on a page. State handling will perform garbage collection to ensure that memory is released when it is no longer needed.

## Offline Storage

This is permanent storage, usually on a mobile device, where data can be stored for apps which are running in offline mode. It differs from the temporary object storage in that data here is not lost at the end of a session, but is kept until it can be synced to the Runtime Server.

## State/Sync/Session

This manages requests to the Runtime Server. Note that some actions in the Mendix Client will not require access to the Runtime Server. For example, if the Object Manager already has access to the required data in the temporary object storage, or if the app is written as “offline first”.
**State Handling**
This holds the current state of the app and communicates it to the Runtime Server. As the state is held in the Mendix Client, the Runtime Server can be stateless. This ensures that it is easier to scale your app horizontally by adding more instances as any instance can handle any request.
The state includes the following

- which page is being displayed
- the state of objects which are maintained by the object manager:
    - newly created and not-yet-committed persistable objects
    - non-persistable objects
    - attribute and association changes made to the objects

To avoid performance issues, Mendix Client does not send the entire state to the runtime. State handling decides which parts of the state should be sent by analyzing the model during the deployment of the applications.
For more detailed information about state, see this blog: [https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/](https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/). This also includes a worked example where you can see, and duplicate for yourself, how state is passed to the Runtime Server.
State handling is also responsible for garbage collection. If you want to know more about this aspect, see this blog: [https://www.mendix.com/blog/the-art-of-state-part-2-garbage-collection/](https://www.mendix.com/blog/the-art-of-state-part-2-garbage-collection/).
**Synchronization**
Where an app is “Offline First”, data created and changed in the app is stored locally until it is synchronized with the Runtime Server. This job is carried out by the synchronization process. This synchronizes the offline storage and object cache with the Runtime Server.
For more information on offline first apps and synchronization, see [https://docs.mendix.com/refguide/offline-first](https://docs.mendix.com/refguide/offline-first).
**Session**
This ensures that any session with the runtime is kept alive and restored if necessary. It also acts as the authentication for all communications with the runtime which require it.

## Runtime Server

The Runtime Server waits for requests from the Mendix Client, processes the request, and returns the requested data, plus any additional state information where appropriate. This is done through a private API called *xas*.
It will also notify the Mendix Client when changes are made to the app, and allows developers to connect a debugger to the client to debug nanoflows.

# Widgets

Mendix pages are constructed from individual widgets. There are two types of widget which each run on a separate widget framework. Each widget framework provides APIs and controls the lifecycle of the widget.
The two types of widget are:

- Pluggable widgets
- Custom widgets

These are described in the sections below.
**Pluggable Widgets**
Pluggable widgets are reusable UI components written in react or react-native. This is a more powerful language than Dojo, which is used for Custom widgets, and is the recommended way of writing widgets. Pluggable widgets run on the native core framework using the pluggable widgets API which enables different pluggable widgets to communicate. They have limited access to web core widgets, but full access to the native core.
Pluggable widgets have many advantages over Custom widgets. For example, you can use conditional visibility and editability, and can place a Pluggable widget inside another Pluggable widget.
For more information, see [https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets](https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets).
**Custom Widgets**
Custom widgets are written using Dojo and run on the web core framework using a previous version of the client API. Custom widgets can have access to some of the web core widgets through the API. However, they cannot use pluggable widgets or native core widgets which means that they cannot be used in native apps, or in offline hybrid apps. Custom widgets should only be used if you cannot create the functionality in a Pluggable Widget.
For more information on Custom widgets, see [https://docs.mendix.com/howto/extensibility/widget-development](https://docs.mendix.com/howto/extensibility/widget-development).

# Mendix Client Startup

When an end-user wants to use a Mendix app, they need to start up the client on their device before they can connect to the Runtime Server.
The way this works depends on the method used to run the client. This can be one of the following:

- Browser
- Native App

How the Mendix Client is launched is described in the sections below.

## Launching Mendix Client in a Browser

**Launch Flow**
When the end-user launches an app in the browser, it triggers the following flow.

1. The end-user enters the URL of the app in the browser.
2. The browser loads the HTML web page in the browser.
3. The web page loads and starts the Mendix Client, together with the core widgets.
4. The Mendix Client loads any custom widgets.
5. The Mendix Client contacts the Runtime Server and authenticates the end-user.
6. The Mendix Client gets any additional configuration required from the Runtime Server.
    *The Mendix Client is now ready to start interacting with the end-user and will repeat the following steps for as long as the end-user’s session continues.*
7. The Mendix Client loads the page definition.
8. The Mendix Client loads pluggable widgets used on the page.
9. The Mendix Client retrieves any data required from the Runtime Server.
10. The Mendix Client builds the page.
11. The Mendix Client displays the page to the end-user.
12. The Mendix Client processes input from the end-user and repeats the steps above to show the correct page.

**Location of Mendix Client Resources**
When the app is deployed, the static resources are placed in a structure referred to as the CDN. This includes the following:

- index.html – the initial HTML page which is loaded when the end-user starts the Mendix Client — this contains the client configuration and other static non-Mendix content (for example if Google analytics is added to the app)
- mxui.js – the main Mendix Client code
- app styling/Atlas – the app-specific css styling and static visual elements which define how a page is displayed
- widgets – both custom and pluggable widgets which are used by this app
- page definitions – xml page definitions which tell the Mendix Client what the pages for this app look like
## Launching Native Mendix Client

The flow when launching a native app is different from launching in a browser. More information is stored locally as part of the app, and a native app can even be designed to run “offline first”, which means that it can still be run without any connection to the Runtime Server.
The flow described here is for production apps. During development, the flow is not the same. This enables you to do faster deployments and online debugging.

1. The end-user opens the app on their device. This is a project specific shell app, which runs natively on iOS or Android. It is released to the app store appropriate for the device. If a new version of the app is downloaded to the device, the app will behave as if the end-user has opened it, even if it was already open on their device.
2. The shell app loads a native bundle. This is the equivalent of the Mendix Client resources used by the Mendix Client running in a browser. It contains, for example, the Mendix Client code and page definitions. However, it is held locally on the device rather than centrally with the Runtime Server.
3. The Mendix Client contacts the Runtime Server and authenticates the end-user.
4. The Mendix Client gets any additional configuration required from the Runtime Server.
5. The Mendix Client performs a synchronization with the Runtime Server.
6. The Mendix Client checks the resources stored in Visual Studio App Center for updates to the native bundle. This enables the app to keep up-to-date without needing to download new versions of the app from the app store.
    *The Mendix Client is now ready to start interacting with the end-user and will repeat the following steps for as long as the continues to run.*
7. The Mendix Client prepares a page using either offline or online data.
8. The Mendix Client presents the page to the end-user.
9. The Mendix Client reacts to the end-user input.
# Mendix Runtime Deployment

When you have created a Mendix app with no structural errors, you need run it by deploying it.

![](https://paper-attachments.dropbox.com/s_1CF3B2795859DD5CF84255357EC8D13B10EB1C3E1D24EE85282E2D23095921B2_1585660310036_image.png)

## Deployer

This is initiated by the Mendix Cloud Portal to manage the deployment of an app.

## Docker Env

This is the docker environment specification which specifies the docker environment in a Cloud-Foundry-like way for the Buildpack to process

## Project MPK

This is the project model as created by Studio Pro or Studio. It cannot be directly interpreted by the Mendix runtime.

## MX Build

This converts an app in mpk format to the mda format which can be interpreted by the Mendix runtime.

## Cloud Foundry

This is the command line interpreter which allows Cloud Foundry environments to be created, and code to be pushed into the environments to be executed.

## Buildpack

The buildpack is the Mendix script which controls the deployment of Mendix models to a cloud environment. it performs the following tasks:

- identifies the target environment and bound services such as database and file storage
- if it receives a project in mpk format it initiates Mxbuild to convert it into mda format
- it identifies the correct version of the Java Runtime Environment and pushes it to the environment
- it identifies the correct version of the Mendix runtime and uses m2ee to push the Runtime Server to the environment, with a link to the project mda which defines the project
## Project MDA

This is the Mendix app in mda format, which defines the app in a way which can be interpreted by the Mendix Runtime.

## CDN

This data repository stores components of the deployment process such as versions of the Mendix Runtime and Mx Build.

## Java RE

This is the Java Runtime Environment (JRE) used to run the Runtime Server. The version of the JRE depends on the version of the Runtime Server. For example, Mendix 7 runs on JRE version 8, and Mendix 8 runs on JRE version 11.

## M2ee

M2ee is a collection of helper tools written in python which is used to deploy Mendix apps. It comes in two forms: m2ee-tools and m2ee-sidecar depending on the target platform.
It starts the Runtime Server by starting a Java RE and pointing it at the relevant version of the Runtime Server binary (jar) files. Once it has started, m2ee connects to the Runtime Server to tell it which Mendix application model to load.

## Runtime Server

This is the interpreter which runs the app. For more information see Runtime Server, above.

