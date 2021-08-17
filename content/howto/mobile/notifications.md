---
title: "Use Notifications"
parent: "implementation"
menu_order: 50
description: Tutorials for configuring push and local notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction

These guides will teach you to configure both push notifications (also known as remote notifications) and local notifications for your Mendix apps:

Push Notifications:

* [Add Module Dependencies](LINKHERE)
* [Implement the Push Notifications Module](LINKHERE)
* [Configure Push Notifications](LINKHERE)
* [Native Push Notification Implementation](LINKHERE)
* [Build a Native Mobile App with Push Notifications](LINKHERE)
* [Send Your First Test Push Notification](LINKHERE)

For information on local notifications specifically, pay special attention to [DOC NAME HERE](LINKHERE).

For information on push notifications in hybrid apps, see [How to Include Push Notifications](LINKHERE).

To implement push notifications in your application there are a few steps depending on the types of push notifications you would like to use.

The following notification types are available:

* Push notifications: 
	* When you want to notify your users from the backend (server) part of your application you use push notifications, these may be targeted at single, specific grouped or all users. But they will always be triggered from the backend.
* Local notification:
	* When you want to show notifications directly on the device without the need for any server interaction you may use local notifications, they are always only targeted at that specific device running the app for a single user.

Notifications are currently supported for Native mobile apps. For Hybrid mobile apps please refer to Mendix 8 documentation.

This documentation will refer to other pages to explain adding required module dependencies, building your native mobile app, configuring the Push notification module and implementing notifications in your app.

Depending on your starting template you might already have a number of prerequisites taken care of for you.

Each documentation step will tell you at the beginning what your prerequisites are and what the goal of that step is. Based on this introduction you may determine if your use case requires this step or you could skip it. At the end of each step there will be a link to the next step.

Start by adding the [module dependencies](LINK HERE).