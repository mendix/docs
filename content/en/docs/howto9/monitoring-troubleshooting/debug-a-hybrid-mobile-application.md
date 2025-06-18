---
title: "Debug a Hybrid Mobile Application"
url: /howto9/monitoring-troubleshooting/debug-a-hybrid-mobile-application/
weight: 5
description: "Describes how to debug a Mendix app that is running in the Mendix Developer App on your mobile phone."
---

## Introduction

This how-to explains the steps involved in debugging a Mendix application that is running in the Mendix Developer App on your mobile phone.

This how-to teaches you how to do the following:

* Debug a mobile application

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/)
* Install the Mendix Developer App on your mobile device

## Start weinre

From your console, start weinre with the following parameters: `weinre --boundHost 1.2.3.4 --httpPort 9090`:

* `1.2.3.4` is your local IP, which will most probably match the address that you see in the history of your Mendix Developer App
* You can change `9090` to a different port as long as it doesn't clash with your application's port, which is usually 8080

## Connect Your Mendix Developer App

Click **Settings** ({{% icon name="cog" %}}) on the upper-right corner of the screen to configure your debugger:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-a-hybrid-mobile-application/18580021.png" class="no-border" >}}

On the configure screen, fill in the same settings that you used to start weinre, which should be `http://1.2.3.4:9090` (wherein `1.2.3.4` is your local IP).

You can now navigate to the same address on your local browser to start the debugging session.

## Read More

* [Find the Root Cause of Runtime Errors](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto9/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto9/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Log Levels](/howto9/monitoring-troubleshooting/log-levels/)
* [Debugging Microflows and Nanoflows](/refguide9/debug-microflows-and-nanoflows/)
* [Debug Java Actions](/howto9/monitoring-troubleshooting/debug-java-actions/)
* [Debugging Microflows Remotely](/refguide9/debug-microflows-remotely/)
