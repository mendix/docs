---
title: "HTML /  JavaScript Snippet"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Geolocation](https://appstore.home.mendix.com/link/app/1380/) widget enables PhoneGap native geolocation functionality within your Mendix mobile application.

Configuration

Place the widget in a dataview where you want the button to be placed. Make sure this form is reachable from a mobile application.
Button
Label

The label text that is shown on the button.
Class

An optional class to be placed directly on the button dom node.
Data source
Latitude Attribute

The attribute on the dataview object where the latitude should be set to.
Longitude Attribute

The attribute on the dataview object where the longitude should be set to.
Events
On change microflow

An optional microflow that will be triggered once the location has been retrieved. It is advised to use this at least with a Refresh in client call, to make sure the UI is updated correctly.
On change nanoflow

An optional nanoflow that will be triggered once the location has been retrieved. It is advised to use this at least with a Refresh in client call, to make sure the UI is updated correctly.
