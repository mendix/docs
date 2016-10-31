---
title: "Find the Root Cause of Runtime Errors"
space: "Mendix 6 How-to's"
category: "Monitoring & Troubleshooting"
tags: []
---

## 1 Introduction

This how to will show how to find the information necessary to locate the root cause of a runtime error.  The message displayed in the application is often vague and non-descript.  Depending on the environment the error occurred in, there are two methods to find this information.

**This how-to will teach you how to do the following:**

* Create...
* Build...
* Configure...

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

## 3 In the Modeler

If the application is deployed from the modeler, the information is located in the console.

![](attachments/18448574/18580024.png)

When the error occurs a line with red font will appear in the console.  Double clicking on this line brings up the detailed information:

![](attachments/18448574/18580023.png)

There are three key pieces of information:

1.  The microflow and action where the error occurred
2.  The type of error that occurred
3.  The expression that the error occurred in

With these three pieces of information, the cause of the error should be able to be found.  If you cannot determine the cause from this information, you can put in a break point in the specified microflow and debug the situation. 

## 4 In the Application Logs

If the application is deployed from the service console or in the cloud, the information is available in the application logs.  NOTE: You will need to have the timestamp of the error when it occurred – the logs can contain a lot of information, and this timestamp will make searching through them much easier. Once you navigate to the log file, you can search for the error.

![](attachments/18448574/18580022.png)

Go to the section of the log which corresponds to the time of the error.  There will be a number of lines in that timeframe that have ‘ERROR – ‘ after the timestamp.  These are the lines of the log file which will contain the necessary information.  There are three key pieces of information:

1.  The microflow and action where the error occurred
2.  The type of error that occurred
3.  The expression that the error occurred in

With these three pieces of information, the cause of the error should be able to be found.  If you cannot determine the cause from this information, you can put in a break point in the specified microflow and debug the situation. 

## 5 Related content

*   [Finding the Root Cause of Runtime Errors](Finding+the+Root+Cause+of+Runtime+Errors)
*   [Clearing Warning Messages in Mendix](Clear+Warning+Messages)
*   [Testing web services using SoapUI](Testing+web+services+using+SoapUI)
*   [Monitoring Mendix using JMX](Monitoring+Mendix+using+JMX)
*   [Debugging Java actions remotely](Debug+Java+Actions+Remotely)
*   [Log Levels](Log+Levels)
*   [Debugging Microflows](Debug+Microflows)
*   [Debugging Java Actions](Debug+Java+Actions)
*   [Common Mendix SSO Errors](Handle+Common+Mendix+SSO+Errors)
*   [Debugging Microflows Remotely](Debug+Microflows+Remotely)



A blog post was written on this topic, which also provides some example errors and solutions, which is available [here](http://www.mendix.com/blog/the-root-cause-of-runtime-errors-and-resolving-the-2-most-common-issues/).