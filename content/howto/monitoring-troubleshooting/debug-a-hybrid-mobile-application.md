---
title: "Debug a Hybrid Mobile Application"
category: "Monitoring & Troubleshooting"
menu_order: 5
tags: ["monitoring", "troubleshooting", "debug", "hybrid mobile"]
---

## 1 Introduction

This how-to explains the steps involved in debugging a Mendix application that is running in the Mendix Developer App on your mobile phone.

**This how-to will teach you how to do the following:**

* Debug a mobile application

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/)
* Install the Mendix Developer App on your mobile device

## 3 Start weinre

From your console, start weinre with the following parameters: `weinre --boundHost 1.2.3.4 --httpPort 9090`:

* `1.2.3.4` is your local IP, which will most probably match the address that you see in the history of your Mendix Developer App
* You can change `9090` to a different port as long as it doesn't clash with your application's port, which is usually 8080

## 4 Connect Your Mendix Developer App

Click the settings icon in the top-right corner of the screen to configure your debugger:

![](attachments/18448572/18580021.png)

On the configure screen, fill in the same settings that you used to start weinre, which should be `http://1.2.3.4:9090` (wherein `1.2.3.4` is your local IP).

You can now navigate to the same address on your local browser to start the debugging session.

## 5 Read More

* [Find the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
* [Clear Warning Messages in Mendix](clear-warning-messages)
* [Test Web Services Using SoapUI](/howto/testing/testing-web-services-using-soapui)
* [Monitor Mendix Using JMX](monitoring-mendix-using-jmx)
* [Debug Java Actions Remotely](debug-java-actions-remotely)
* [Log Levels](log-levels)
* [Debug Microflows and Nanoflows](debug-microflows-and-nanoflows)
* [Debug Java Actions](debug-java-actions)
* [Debug Microflows Remotely](debug-microflows-remotely)
