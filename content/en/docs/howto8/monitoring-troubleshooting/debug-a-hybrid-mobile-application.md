---
title: "Debug a Hybrid Mobile Application"
url: /howto8/monitoring-troubleshooting/debug-a-hybrid-mobile-application/
weight: 5
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

{{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-a-hybrid-mobile-application/18580021.png" class="no-border" >}}

On the configure screen, fill in the same settings that you used to start weinre, which should be `http://1.2.3.4:9090` (wherein `1.2.3.4` is your local IP).

You can now navigate to the same address on your local browser to start the debugging session.

## Read More

* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto8/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto8/integration/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto8/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Log Levels](/howto8/monitoring-troubleshooting/log-levels/)
* [Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)
* [Debug Java Actions](/howto8/monitoring-troubleshooting/debug-java-actions/)
* [Debug Microflows Remotely](/howto8/monitoring-troubleshooting/debug-microflows-remotely/)
