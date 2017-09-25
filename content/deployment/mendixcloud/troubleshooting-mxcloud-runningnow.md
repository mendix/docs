---
title: "Troubleshoot Your Application in the Mendix Cloud: Running Now"
parent: "troubleshoot-mendixcloud"
description: "This page describes how to troubleshoot the running now in your node."
tags: ["App","Troubleshoot","Developer Portal","Running now","Mendix Cloud"]
---

## 1 Introduction

The **Running now** tab can be found on the **Metrics** page of your Cloud node. It can be used to monitor all actions that are currently running in your environment.

## 2 The Running Now Tab in the Mendix Cloud

It looks like this:

![](attachments/troubleshooting-mxcloud-runningnow/troubleshooting-mxcloud-runningnow-img1.png)

This page shows all actions currently running the application. And some general information of each action.

The **Details** button allows you to zoom in on the selected action:

![](attachments/troubleshooting-mxcloud-runningnow/troubleshooting-mxcloud-runningnow-img2.png)

Finally, the **Kill request** allows you to try and stop the action which, if successful, will lead to an error for the user executing the action.

You can use the information displayed in the **Running now** tab for various purposes:

* To see if any actions are currently running in your application – this can be useful if you want to shutdown the application to perform maintenance
* If you fear two actions are blocking one another you might be able to prevent the deadlock by killing one of the two action using the **Kill request** button
* If you have a performance or memory problem the listed actions (and their **Details** page(s)) might help you pinpoint the most likely cause of the problem
* If the above alone is not enough, you can combine the information in this tab page with the information in the **Cache** tab page, the [Logs](/developerportal/operate/logs) page, and the **Trends** tab page to gather more information

## 3 Related Content

* [Alerts](/developerportal/operate/monitoring-application-health)
* [Application Trends in Mendix Cloud v3](/developerportal/operate/trends)
* [Application Trends in Mendix Cloud v4](/developerportal/operate/trends-v4)
* [Metrics](/developerportal/operate/metrics)
* [Security - Node Permissions](/developerportal/settings/node-permissions)
* [Troubleshooting your application in the Mendix Cloud: Cache](troubleshooting-mxcloud-cache)
