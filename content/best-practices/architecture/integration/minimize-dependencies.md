---
title: "Minimizing & Managing Dependencies"
parent: "integration-intro"
menu_order: 1
draft: true
---

## 1 Introduction

While integration leads to automation and digitization, it also creates dependencies between systems. Dependencies need to be managed from design to production for different releases of apps going live at different times.

The target for a Solution Architect designing a larger solution will therefore be to design apps and systems of apps that do the following:

* Minimize integration
* Find a solution where integration dependencies are easy to build, change, and manage

There are two main steps to accomplish this:

1. Find the correct, right-sized, functional, and autonoumous microservices.
2. Find an integration solution that is easy to build and manage, which is where these best practices can help. 

The best solution varies from case to case and depends on organizational, technical, functional, and operational aspects. The optimal solution takes all of these factors into consideration.

## 2 Team Dependencies

Applying a microservices architecture along with DevOps means that team dependencies decrease. That is because every app is built and managed by one single DevOps team. That team completes the full business function contained in the microservice. The only dependencies are external integration, which ideally are defined as REST services in the beginning of the app project.

There are also often fewer dependencies between business units of an organization after defining functional microservices that align with a business process or the business organization itself. This leads to fewer comprimises on requirements, fewer prioritizations between different stakeholders, and often a more purpose-oriented app that is ideal for one specific area.

## 3 Functional Dependencies

When the right microservices have been chosen, there will still be some functional dependencies left, which should be automated by building good interfaces between the apps. These functional dependencies cannot be removed, so they just need to be minimized.

For example, if you have a feature request where two apps need a new field implemented (for example, GPS coordinates) and one app is the source of this data, it is inevitable that the service contract needs to change. You then need a good process for managing this through separate releases. The typical way to do this is by going-live with the source app first (with two endpoints), and then going-live with the consumer app afterwards, swapping from the first endpoint to the next one.

Using service versioning, it is possible for the two apps to go live at separate times. This diagram illustrates this case of managing functional dependencies:

![](attachments/integration-intro/intro-3.png)

To minimize functional dependencies, you should make service contracts that imitate a business event. Often data is from more than one table, but rarely does it include all the fields from one table. If the functional requirement for the business event changes, you have to change the service, but if other data in the same tables change, there is no impact.

It is also beneficial to make consumer-specific services when different consumers want different things. When one consumer wants additional functionality in the service, the other consumers are not impacted.

## 4 Operational Dependencies

Operational dependencies relate to the fact that one system must be up and running for a certain function in another app to work. For example, an end-user needs to search for products in another app when creating an order. If the products app is down, there is also no ordering possible. Therefore, in all synchronous services, both apps needs to be up and running for the integration to work. 

It is possible to minimize operational dependencies by copying data over to the service that needs it before it is needed. This is particularly common for slow-changing data (for example, product definitions). In the example above, you can remove the operational dependency by simply copying the important part of the product definition over to the ordering app. Then, you poll the product app for any changes.

The desire for autonomy in microservices architectures allows for copying data more often than in the SOA-architecture pattern, where the reuse of functions was more important and developers strived to retrieve data in real-time from the source system.

In high-volume automated situations, copying required data becomes even more important. This is because every outbound service call takes time and CPU resources, which leads to the risk of failed processing that may be difficult to manage manually.

Sometimes, when operational dependencies are required (for example, a source system needs to validate data in an input form), the best approach is to functionally build around this dependency in order to soften the impact on the end-user if the other system is down. This can be accomplished via awareness of the other system's status and then informing the end-user early or simply disabling the local function temporarily. 

Microservices theory also suggests using circuit breakers for high-volume situations. This means that the source app will stop bombarding the destination with requests when the service is already timing out the majority of requests. In turn, this will help both apps to operate better.

## 5 Technical Dependencies

In quite a few cases there is already a legacy system to integrate with, or you need to integrate with a SaaS solution via an already existing API. In such cases, there is often little choice in the format and protocol of the services we need to use.

In these cases, the Mendix app will typically adapt to the existing technical and functional format of services provided (for example, via an SaaS system such as SAP or SalesForce). The Mendix Platform is the more flexible side in most integration relations, as it can adapt to almost any format provided.

However, there are cases when it is better to change even old legacy systems. For example, when you cannot retrieve data without looping over a service call hundreds of times, then either a new service should be built, or you should switch to copying the data ahead of time (for example, with a file).

## 6 Scoping Integration Early & Implementing Late

Because integration is an external dependency, it makes sense to scope out the required integration early. This will give teams the maximum amount of time to provide updated services or files before the go-live date. While waiting, users can use mock services and/or files, and then connect to the final version towards the end of the app project.

## 7 Keeping It Simple!

As in all design, a simpler solution is always easier to build and maintain than a more complex one. If something can be done with fewer service calls, components, or technologies involved, that is usually better. 

The most frequently used and accepted service protocol at the moment is REST over Http(s). This allows the caller of the service to manage errors or issues, and within a single service call, there is both the request and reply.

However, there is an incredible amount of integration scenarios to take into account. This document will go through quite a few technical and functional scenarios where other formats and protocols are recommended.