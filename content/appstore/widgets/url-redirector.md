---
title: "URL Redirector"
category: "Widgets"
description: "Describes the configuration and usage of the URL Redirector widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "url redirector", "url", "static", "dynamic", "platform support"]
draft: true
---

## 1 Introduction

The [URL Redirector](https://appstore.home.mendix.com/link/app/113/) widget enables configuring redirects to other web pages.

### 1.1 Typical Usage Scenario

* Redirect to a static URL
* Redirect to a URL stored as a value in an object

### 1.2 Features

* Open a redirect URL in a new browser window or in the current window
* Combine a prefix URL with a dynamic URL part

## 2 Properties

### 2.1 Data Source

* **URL(prefix)** – the URL to redirect to (for example, `http://www.mendix.com`)
* **URL Attribute** – the attribute containing a URL value to redirect to (for example, ` http://www.mendix.com`; you can also combine with the prefix value and add a value to it like `/learn`)
* **Target** – the window where the redirect URL should be opened
