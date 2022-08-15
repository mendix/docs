---
title: "Cache Metrics (Runtime Version 6)"
url: /developerportal/operate/troubleshooting-mxcloud-cache/
weight: 90
description: "How to troubleshoot the cache in your node."
tags: ["App","Troubleshoot","Developer Portal","Cache","Mendix Cloud"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

{{% alert color="info" %}}

This information is only relevant for apps built using Mendix Studio Pro/Runtime version 6.

Runtime versions 7.0 and above are stateless and do not cache Mendix objects on the server. See the [Mendix Desktop Modeler Release Notes 7.0](/releasenotes/studio-pro/7.0/) for more information.

{{% /alert %}}

The "Cache" tab can be found on the **Metrics** page of your Cloud node. It can be used to monitor all Mendix objects that are currently being held in the memory of your environment.

## 2 About the "Cache" tab in the Mendix Cloud

It looks something like this (entity names are normally not obfuscated):

{{< figure src="/attachments/developerportal/operate/metrics/troubleshooting-mxcloud-cache/troubleshooting-mxcloud-cache-img1.png" >}}

The **Totals** data grid will show the current number of Mendix objects in cache and list them by entity type. For example: MyModule.MyEntity (Count: 79)

The **User Sessions** data grid will show the entities per session, you can press the **Details** button to zoom in on the specific user.

{{< figure src="/attachments/developerportal/operate/metrics/troubleshooting-mxcloud-cache/troubleshooting-mxcloud-cache-img2.png" >}}

The **unknown** user means the entities are part of a system session, for example a [scheduled event](/refguide/scheduled-events/).

{{< figure src="/attachments/developerportal/operate/metrics/troubleshooting-mxcloud-cache/troubleshooting-mxcloud-cache-img3.png" >}}

If you fear your application might contain a memory leak you should always check this graph to see if an abnormally large amount of objects stay in cache. Especially a graph with the following shape over a long period of time should be worrisome:

{{< figure src="/attachments/developerportal/operate/metrics/troubleshooting-mxcloud-cache/troubleshooting-mxcloud-cache-img4.png" >}}

In this case, you can refer back to the **Cache** tab. And see how many of each entity type are in cache and what session is keeping them in cache. You might be able to deduce the most likely source of the memory leak this way. 
For example, if you have 50500 entities in cache and 50000 are of type Car.Tire, you might want to look into all places where you process a lot of Car.Tire entities to see if you made a mistake somewhere that could explain the memory leak.

The cache statistics might also help you identify the most commonly used entities in your application.

## 3 Read More

* [Metrics](/developerportal/operate/metrics/)
* [Node Permissions](/developerportal/deploy/node-permissions/)
* [Running Now Metrics](/developerportal/operate/troubleshooting-mxcloud-runningnow/)
