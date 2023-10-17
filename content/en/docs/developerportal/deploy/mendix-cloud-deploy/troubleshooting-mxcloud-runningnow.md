---
title: "Running Now"
url: /developerportal/deploy/mxcloud-runningnow/
weight: 20
description: "Explains how to access, navigate, and troubleshoot Running Now in your node."
tags: ["App","Troubleshoot","Developer Portal","Running now","Mendix Cloud"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

The **Running Now** dialog box can be accessed by clicking the **Show Running Now** button on the **General** tab of the [Environment Details](/developerportal/deploy/environments-details/) page. You can use it to monitor all actions that are currently running in your environment.

## 2 Running Now Navigation

This dialog box shows all actions currently running in the environment. It also shows some general information about each action.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/troubleshooting-mxcloud-runningnow/dialog-box.png" >}}

The **Details** button lets you zoom in on a selected action:

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/troubleshooting-mxcloud-runningnow/running-request-details.png" >}}

{{% alert color="warning" %}}
The text shown in the screenshot above has an error and will be updated shortly. The current action is actually the top action, which was triggered by the action below it, and so forth.
{{% /alert %}}

You can also zoom in on a stack: 

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/troubleshooting-mxcloud-runningnow/stack.png" >}}

**Kill request** lets you try to stop the action. If successful, that leads to an error for the user executing the action.

## 3 Troubleshooting

You can use the information displayed in the **Running Now** dialog box for various purposes:

* If you want to shut down the application to perform maintenance, you can check **Running Now** to see if any actions are currently running in your application.
* If you fear two actions are blocking one another, you might be able to prevent the deadlock by stopping one of the two actions using the **Kill request** button.
* If you have a performance or memory problem, the listed actions (and their **Details** pages) might help you pinpoint the cause of the problem.
* If the above alone is not enough, you can combine the information on this page with the information on the **Cache** page, the [Logs](/developerportal/operate/logs/) page, and the [Metrics](/developerportal/operate/metrics/) page.

## 4 Read More

* [Alerts](/developerportal/operate/monitoring-application-health/)
* [Node Permissions](/developerportal/deploy/node-permissions/)
