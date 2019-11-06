---
title: "Geolocation"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Geolocation](https://appstore.home.mendix.com/link/app/1380/) widget enables PhoneGap-native geolocation functionality within your Mendix mobile application.

## 2 Configuration

Place the widget in a data view where you want the button to be placed. Make sure this form is reachable from a mobile application.

### 2.1 Button Tab

* **Label** – the label text shown on the button
* **Class** – an optional class to be placed directly on the button DOM node

### 2.2 Data Source Tab

* **Latitude Attribute** – the attribute on the data view object to which the latitude should be set
* **Longitude Attribute** – the attribute on the data view object to which the longitude should be set

### 2.3 Events Tab

* **On change microflow** – an optional microflow that will be triggered once the location has been retrieved; using this with at least a refresh in the client call is advised, in order to make sure the UI is updated correctly
* **On change nanoflow** – an optional nanoflow that will be triggered once the location has been retrieved; using this with at least a refresh in the client call is advised, in order to make sure the UI is updated correctly