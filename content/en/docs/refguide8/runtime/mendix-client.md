---
title: "Mendix Client"
url: /refguide8/mendix-client/
description: "A description of the Mendix Client part of the runtime and how it functions"
weight: 20
---

## Introduction

The Mendix Client runs on the end-user's device and handles the interface between the end-user and the app. Sometimes it can run completely independently of the Runtime Server and perform all processing locally. Mostly, it interacts with the Runtime Server to get or update shared data, or perform additional application logic.

This description of the Mendix Client is based on using the Runtime Server of an app running in the cloud. You can also run Mendix locally for testing, but this is conceptually the same.

## Description

The Mendix Client is used for all applications built with Mendix: web, mobile, and hybrid.

For **web applications**, Mendix Client acts as a single page application. This means that all paging is handled by the Mendix Client, rather than being separate pages served using different URLs. Mendix Client is bootstrapped by loading a `mxui.js` script from an HTML page provided by the *theme*.

For **mobile applications** Mendix Client acts as a React Native application. This means that apps created by Mendix consist of two parts: a *wrapper* and a *bundle*. The wrapper is a native iOS or Android application that loads the bundle and exposes platform functionality to it. The bundle includes Client Core, Pluggable Widgets, and application-specific resources like nanoflows and pages.

The three supported types of wrappers for mobile applications are as follows:

* [Make It Native app](/refguide8/getting-the-make-it-native-app/)
* [Custom Developer apps](/howto8/mobile/how-to-devapps/)
* [Native apps](/howto8/mobile/deploying-native-app/)

The first two of these load a bundle dynamically, while the last one includes a pre-packaged bundle that can be [updated](/howto8/mobile/how-to-ota/) later.

A **Hybrid application**, for most purposes, can be treated as an app running in a browser. In this case, however, the browser is embedded in a mobile application and has access to some features of a mobile device through [Cordova](https://cordova.apache.org/) plugins. Mendix recommends using a native mobile app rather than a hybrid app if you want to make Mendix apps which run on mobile devices.

Below is a chart showing the components of the Mendix Client. Each of the components is described below the chart.

{{< figure src="/attachments/refguide8/runtime/mendix-client/mendix-client.png" alt="The makeup of the Mendix Client" class="no-border" >}}

### Client Core

This can be seen as the interpreter of the client. It uses the client config and client state to decide how to process a request from the end-user.
The client core controls the various processes which need to take place to service the request. These processes include data fetching and manipulation, client-side expressions, and navigation.

The client core is written in JavaScript.

Mendix apps do not modify the client core, all logic is held in the model. However, each patch version of Mendix comes with its own version of the client core.

### Widgets

These are the fundamental building blocks of the Mendix Client. All the actions which the client takes are controlled by widgets. They are responsible for what is displayed on pages, and how user input is managed. There is a more detailed description of widgets in [Widgets](#widgets), below.

### JavaScript Actions

This runs custom JavaScript, added by the app developer, which is held as JavaScript actions in the client config.

### UI Layer

The UI layer performs navigation, resource loading, and platform integration. It is responsible for building the page which is presented to the end-user in response to the actions of the Mendix Client, using the correct language and other locale settings.

### HTTPS Server

The HTTPS server serves pages, widgets, and JavaScript actions, held in the model, to the end-user of the app.

### Logic

This runs client-side logic which is defined in the nanoflows in the model.

### Platform APIs

These are functions of the environment in which the Mendix Client is running. In most cases this will be a function of a mobile device such as the camera or GPS location, but it can also include making calls to Mendix Native APIs or browser functions such as accessing an image file.

### Client Config

This is the static data which is needed by the Mendix Client. For a browser-based client, this data is held online, with the Runtime Server. For native mobile apps, this is held locally on the device.

These include the initial environment (for example, the browser shell page) needed to start the Mendix Client, Cascading Style Sheets (css files) which define the app’s theme, and JavaScript files which define client-side logic.

### Data API

This allows the Mendix Client to fetch and manipulate data in offline storage or the Mendix Runtime.

### Object Cache

This holds and manages objects which are being used by the Mendix Client in memory – for example non-persistable objects, new objects, and objects returned by the Runtime Server to be displayed on a page. It also holds changes to attributes and associations for these objects.

State handling will perform garbage collection to ensure that memory is released when it is no longer needed.

### Offline Storage

This is permanent storage, usually on a mobile device, where data can be stored for apps which are running in offline mode. It differs from the temporary object storage in that data here is not lost at the end of a session, but is kept until it can be synced to the Runtime Server.

### State/Sync/Session

This manages requests to the Runtime Server. Note that some actions in the Mendix Client will not require access to the Runtime Server. For example, if the Object Cache already has access to the required data in the temporary object storage, or if the app is written as “offline-first”.

For more information about the communication between the Mendix Client and the Runtime Server, see [Communication Patterns in the Mendix Runtime](/refguide8/communication-patterns/).

#### State Handling

This communicates the current state of the app (held in the object cache) to the Runtime Server. As the state is held in the Mendix Client, the Runtime Server can be stateless. This ensures that it is easier to scale your app horizontally by adding more instances as any instance can handle any request.

To avoid performance issues, the Mendix Client does not send the entire state to the runtime. State handling decides which parts of the state should be sent by analyzing the model during the deployment of the applications.

For more detailed information about state, see this blog: [https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/](https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/). This also includes a worked example where you can see, and duplicate for yourself, how state is passed to the Runtime Server.

State handling is also responsible for garbage collection. If you want to know more about this aspect, see this blog: [https://www.mendix.com/blog/the-art-of-state-part-2-garbage-collection/](https://www.mendix.com/blog/the-art-of-state-part-2-garbage-collection/).

#### Synchronization

Where an app is “offline-first”, data created and changed in the app is stored locally until it is synchronized with the Runtime Server. This job is carried out by the synchronization process. This synchronizes the offline storage and object cache with the Runtime Server. For more information on offline-first apps and synchronization, see [Offline-First](/refguide8/offline-first/).

#### Session

This ensures that any session with the runtime is kept alive and restored if necessary. It also acts as the authentication for all communications with the runtime which require it.

### Runtime Server

The Runtime Server waits for requests from the Mendix Client, processes the request, and returns the requested data, plus any additional state information where appropriate. This is done through a private API called *xas*.

It will also notify the Mendix Client when changes are made to the app, and allows developers to connect a debugger to the client to debug nanoflows.

Because all information is sent to the Mendix Client to build pages, everything in the Mendix Client is visible to the end-user. Security is carried out in the Runtime Server, which will only send information to the Mendix Client which the user is allowed to see.

For a description of the Runtime Server, see [Runtime Server](/refguide8/runtime-server/).

## Widgets{#widgets}

Mendix pages are constructed from individual widgets. A widget can be of one of the following types:

* Core widget – part of the Mendix Client
* Pluggable widget – based on React or React Native, written by the user or downloaded from the Marketplace
* Custom widget – based on Dojo, written by the user or downloaded from the Marketplace

These are described in the sections below.

### Core Widgets

Mendix has a number of core widgets which support the standard functions of Mendix pages. Core widgets are part of the core client. Most of these widgets have native and web implementations, though some are limited only to one platform.

In native mobile applications an implementation based on React Native framework is used. In web applications, implementation is based on either React or Dojo. Widgets that use Dojo have some limitations, for example they cannot be used inside a [pluggable widget](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#widgets). These Dojo implementations are gradually being replaced.

### Pluggable Widgets

You can also write your own widgets, called **Pluggable widgets**, in cases where Core widgets do not suffice. Pluggable widgets can be downloaded through the Marketplace. They are based on React (in web applications) or React Native (in native mobile applications) and are the recommended way of writing widgets. They replace Custom widgets, described below.

For more information, see [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/).

### Custom Widgets

You can also write **Custom widgets**. These are based on Dojo framework and run only in web applications. They have access to a different, more low-level, API than pluggable widgets. Custom widgets should only be used if you cannot create the functionality in a Pluggable widget.

For more information on Custom widgets, see [How To Build Custom Widgets](/howto8/extensibility/widget-development/).

## Mendix Client Startup

When an end-user wants to use a Mendix app, they need to start up the client on their device before they can connect to the Runtime Server. The way this works depends on the method used to run the client. This can be one of the following:

* Browser
* Native Mobile App

How the Mendix Client is launched is described in the sections below.

### Launching Mendix Client in a Browser

In a browser, the environment is built on an initial page, the "shell", on which code is bootstrapped.

#### Launch Flow

When the end-user launches an app in the browser, it triggers the following flow.

1. The end-user enters the URL of the app in the browser.
2. The browser loads the HTML web page ("shell").
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

#### Location of Mendix Client Resources

When the app is deployed, the static resources are placed in a separate structure. This includes the following:

* index.html – the initial HTML page which is loaded when the end-user starts the Mendix Client — this contains the client configuration and other static non-Mendix content (for example if Google analytics is added to the app)
* mxui.js – the main Mendix Client code
* app styling/Atlas – the app-specific css styling and static visual elements which define how a page is displayed
* widgets – both native and web core widgets which are used by this app
* page definitions – xml page definitions which tell the Mendix Client what the pages for this app look like

### Launching Native Mendix Client

The flow when launching a native mobile app is different from launching in a browser. More information is stored locally as part of the app, and a native mobile app can even be designed to run “offline-first”, which means that it can still be run without any connection to the Runtime Server.

The flow described here is for production apps. During development, the flow is not the same. This enables you to do faster deployments and online debugging.

1. The end-user opens the app on their device. This is a project specific shell app, which runs natively on iOS or Android. It is released to the app store appropriate for the device. If a new version of the app is downloaded to the device, the app will behave as if the end-user has opened it for the first time, even if it was already open on their device.
2. The shell app loads a native bundle. This is the equivalent of the Mendix Client resources used by the Mendix Client running in a browser. It contains, for example, the Mendix Client code and page definitions. However, it is held locally on the device rather than centrally with the Runtime Server.
3. If there is not a valid authentication token on the device, the Mendix Client contacts the Runtime Server and authenticates the end-user and gets any additional configuration required from the Runtime Server.
4. If this is the first time the app has been started, or the first time after an update to the app, the Mendix Client performs a synchronization with the Runtime Server.
5. The Mendix Client checks the resources stored in Visual Studio App Center for updates to the native bundle. This enables the app to keep up-to-date without needing to download new versions of the app from the app store.

    *The Mendix Client is now ready to start interacting with the end-user and will repeat the following steps for as long as the continues to run.*

6. The Mendix Client prepares a page using the data on the device.
7. The Mendix Client presents the page to the end-user.
8. The Mendix Client reacts to the end-user input.
