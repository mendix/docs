---
title: "Minimize the Number of In-Use Objects in Your Session"
category: "General"
menu_order: 8
tags: ["object", "session", "architecture", "stateless", "runtime"]
---

## 1 Introduction

In Mendix 7, we introduced a completely new stateless architecture. All the application state that was kept in the Mendix Runtime in earlier versions is now kept by the Mendix Client in the browser. By “state,” we mean non-persistable entities (NPEs) and persistable entities that have not yet been committed to the database.

This new approach has important advantages, such as the ability to easily scale the app horizontally. However, there are also some new things to keep in mind when developing for this new architecture, in order to prevent performance degradation of the Mendix Client.

## 2 Overview

The stateless architecture of Mendix 7 means that all temporary objects are stored in the Mendix Client (browser), instead of in the Mendix Runtime. However, since the objects are used in microflows, the Mendix Runtime will need them to be able to execute a microflow. For this reason, the state is transferred by the browser to the server when a request is sent.

The Mendix Client that runs in the browser determines which objects are relevant for the current page and microflows you want to execute. It does this based on the possibility of retrieving objects from the microflow parameters by following the relations from that object. Only objects that can be retrieved are transferred to the server to optimize performance. However, since there are many flexible ways to retrieve objects, Mendix must be conservative in this. There will often be more objects sent than are strictly necessary to be able to execute a microflow.

After a microflow has run, any new objects or updates to existing objects that were made are returned to the Mendix Client. The Mendix Client can then update its state and refresh any objects on the current page if necessary. This is only done for NPEs and for persistable objects that are on the current page.

The following diagram shows the flow of objects in the new architecture in detail:

![](attachments/minimize-number-of-objects-in-session/object_flow.png)

## 3 Minimizing the Number of In-Use Objects in Your Session

Because all the objects necessary for a microflow are transferred between the Mendix Client and server for each request, the network traffic will grow when more objects are used at the same time. This can become a bottleneck, especially on mobile devices.

That is why the primary best practice for app performance is to minimize the number of in-use objects in your session. By "in-use objects," we mean non-persistable objects and uncommitted persistable objects.

It is not possible to eliminate the need for in-use objects entirely, unless you want your app to be completely read-only. However, there are several common ways to inadvertently create more objects than necessary. The rest of this document presents wyas to reduce the number of in-use objects.

## 4 Changed Objects

### 4.1 Scenario

To the Mendix Runtime there is very little difference between a non-persistable object and a persistable object that is changed but not committed. Any changes that are not committed at the end of a browser request will be sent to the Mendix Client for use in future requests. 

### 4.2 Tip

To minimize the number of objects for which this is the case, committing or rolling back the changes to persistable objects before the end of the main microflow is recommended.

Any changes that are not committed when a main microflow ends will be sent to the Mendix Client and become part of the Mendix Client state which is stored there. In that case, they will also contribute to the size of future requests where they need to be sent back to the Mendix Runtime.

If you make sure to commit any changes to persistable objects, they do not need to be sent to the Mendix Client if they are not shown on a page. When they are subsequently needed in a microflow, they do not need to be sent by the Mendix Client, because the Mendix Runtime can just retrieve them from the database.

In other words, by reducing the number of requests during which objects are not committed, you reduce the network traffic necessary to use the app.

## 5 Workflow Objects

### 5.1 Scenario

If an object is used during a workflow that spans multiple pages but is not displayed on every one of those pages, the Mendix Client could incorrectly determine that the object is not necessary anymore. This situation can also happen if you allow users to navigate backwards through a workflow using the **Close** button or a browser's **Back** button. In that case, the objects on the page that was previously displayed might have been removed already.

### 5.2 Tip

To prevent this from occurring, you can link non-persistable objects that have long life spans to the current session object.

To do this, first create a reference between your entity and the **Session** entity in the **System** module:

![](attachments/minimize-number-of-objects-in-session/domain_model_npe.png)

Then link the object to the current session when you create it in a microflow:

![](attachments/minimize-number-of-objects-in-session/create_object_dialog.png)

Because it is always possible to look at the current **Session** object, any objects related to the current session can also always be retrieved. The Mendix Client must then always keep these objects around; they will never be removed.

{{% alert type="info" %}}
There is a drawback here as well: since the objects will never be removed, they will be in memory indefinitely. It is very important to remove these objects as soon as they are not necessary any more.
{{% /alert %}}

## 6 Integrations

### 6.1 Scenario

When dealing with web- or app-service integrations, you will often use non-persistable entities to model requests and responses. For more complex integrations, this can quickly become a complex domain model with a lot of entities. When calling the service, many objects can be created. There are often cases where developers map an entire web service response to a large domain model, only to use a small part of the message in a microflow.

Building an integration as described above will cause all objects that are created to be sent to the Mendix Client as well.

### 6.2 Tip 1

To deal with the above scenario, map only those parts of a web service integration that are necessary.

By minimizing the number and size of the objects that are created, you reduce the amount of objects that are necessary for the Mendix Client.

### 6.3 Tip 2

In some cases, there will be objects that are necessary for a microflow to function, but that are not shown on any page in the app. In that case, they will still be sent to the Mendix Client, since Mendix cannot always determine if they will not be used by widgets and such. For that reason, you shoulld delete non-persistable objects as soon as they are no longer necessary.

This goes especially for microflows related to integrations: as soon as the message has been sent, or the response has been processed, you should remove the objects related to the call. Of course, you should keep the objects that are subsequently displayed on a page. A useful way to easily remove everything related to a service call is to apply delete behavior in your domain model.

## 7 Layouts

### 7.1 Scenario

Be careful when using non-persistable objects in layouts. Since layouts can be used for many pages in your app, objects in layouts can be on the screen for a long time. If you use non-persistable objects here, they will be sent back and forth between the Mendix Client and Mendix Runtime very often, since they are always available.

### 7.2 Tip

To deal with the above scenario, do not use non-persistable objects in layouts.

This will reduce the number of in-use objects. The same goes for non-persistable objects that are not directly used in a layout, but have a reference to objects in a layout. Since they can be retrieved via the object in the layout, they will live as long as that object. This too should be avoided.

## 8 Summary

In the Mendix stateless architecture, the application is kept by the Mendix Client in the browser. All temporary objects are stored in the browser instead of the Mendix Runtime. State is transferred by the browser to the server when a request is sent, and back when the request finishes.

We have identified some tips for Mendix developers to take advantage of this architecture:

* Minimize the number of in-use objects in your session
* Commit or roll back all changes to persistable objects before the end of the main microflow
* Link non-persistable objects that have long life spans to the current **Session** object
* Map only those parts of a web service integration that are necessary
* Delete any non-persistable objects as soon as they are no longer necessary
* Do not use non-persistable objects in layouts
