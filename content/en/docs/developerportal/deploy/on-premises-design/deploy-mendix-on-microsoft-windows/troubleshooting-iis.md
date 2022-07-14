---
title: "Troubleshooting IIS (Internet Information Services) "
url: /developerportal/deploy/troubleshooting-iis/
description: "Help on fixing issues with Microsoft IIS, including the use of application logs and other troubleshooting features"
weight: 40
tags: ["IIS", "Windows", "Internet Information Services", "Mendix Service Console", "errors"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/troubleshooting-iis.pdf).
{{% /alert %}}

## 1 Introduction

This page will help you troubleshoot issues you come across when setting up Microsoft Internet Information Services (IIS) as a webserver in front of Mendix.

It is broken into three sections:

* [Troubleshooting the Mendix Installation](#mendix)
* [Troubleshooting IIS](#iis)
* [Troubleshooting Mendix Service Console Errors](#msc-errors)

## 2 Troubleshooting the Mendix Installation{#mendix}

Firstly, make sure that your Mendix app is working before looking for issues in your IIS configuration.

### 2.1 Bypassing IIS to Run Your Mendix App

When you open the application normally it will attempt to access it via IIS. To test Mendix without IIS, you need to access it directly.

Open the browser on your server and go to the app at [http://localhost:8080/](http://localhost:8080/) (or the port that you have configured, if different). If the app is working you will find it here.

If the app is working, then the issue is with your IIS configuration.

If there are issues with the Mendix app you should see error messages in the Mendix Service Console and/or in the browser.

### 2.2 Critical Files Not Found

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/troubleshooting-iis/18580723.png" >}}

You can get this sort of error in two circumstances:

1. The files are missing, or in the wrong place

    Search for the correct platform version, and the file referred to in the error message.

    If the files are missing, you should re-install the server distribution (*tar.gz* file) and confirm that the files are now in the right place.

2.  The Mendix service cannot access the files

    If the files are there, ensure that the user running the Mendix service has read and execute access to the `mxclientsystem` folder.

## 3 Troubleshooting IIS{#iis}

This section describes a few common problems that people have run into when setting up IIS.

We cannot provide a solution here for all the problems you may find. Use the techniques below to isolate the cause of your problem. If the solution is not clear, there are many resources on the internet which can help you to solve your specific issue.

You can also ask for help on the [Mendix Forum](https://forum.mendixcloud.com/p/questions).

If you have some useful tips, please feel free to add them to this document.

### 3.1 IIS Access Permission Error

When opening the website in the browser, an IIS error page regarding access permission is displayed.

Validate your security settings. The user that runs the IIS service must be able to access the full directory path. (This is probably user: IIS_IUSRS, but confirm this in your service list). If your Mendix application is installed on "E:\Mendix\projects\MyApp" the IIS user must be able to read **all** the folders in the hierarchy (Mendix, projects, MyApp, and the web folder inside MyApp).

### 3.2 Login Process Fails: 404 - Server Not Found

You can see the login page in the browser, but when triggering an action you get a 404 or "server not found message".

* Did you have to enable or install additional plugins?
	
	If so, make sure to restart the entire IIS service. You can configure the newly installed settings, but they won't have any effect until you restart the full IIS service.
	
* Did you add new configuration settings, like the rewrite rule?
	
	Of course you did, but did you also restart the website? After adding new configuration options like the rewrite URL you need to restart the website. You can do this by right clicking on your newly created site and you should see a restart option.

### 3.3 Incorrect Response When Using Invalid Credentials

You can sign in, but when entering an invalid password the login page shows 'server not found' instead of invalid login.

Some IIS installations hide the content of any response that isn't HTTP status code 200-OK. If you enter invalid credentials during a Mendix login, Mendix returns a status code in the 400-range to indicate unauthorized access. This response also contains a JSON string with the response we want to show to the user.
	
Mendix cannot work if IIS is hiding detailed error messages. You need to turn on 'Detailed Error Messages'. The instructions on how to change this setting for your website can be found on the Microsoft website here: [IIS7 : HOW TO enable the detailed error messages for the website while browsed from for the client browsers](https://blogs.msdn.microsoft.com/rakkimk/2007/05/25/iis7-how-to-enable-the-detailed-error-messages-for-the-website-while-browsed-from-for-the-client-browsers/)

### 3.4 Reviewing the Mendix App Log

First assess whether you are hitting the Mendix application. If IIS forwards anything to the running Mendix app you can see that in the log. The log nodes 'Connector' and 'Jetty' can be most helpful. The Connector log node is able to print information about any incoming request. If you enable Trace logging you can see if the request comes in to the right request handler.
	
If the 'Connector' doesn't print anything you can also enable trace logging on 'Jetty'. The 'Jetty' log node will print a message for every connection that is established with Mendix. If Jetty doesn't print a trace message the IIS rewrite rules are definitely not setup correctly. 
	
If you do have information in the 'Connector' log node you can see where the requests are being forwarded to. This should help you understand where the rewrite rules are directing traffic and how to change it.

### 3.5 Reviewing the IIS Log

If you conclude that no messages are arriving at Mendix, you can enable IIS trace logging. This prints every rewrite rule to an IIS trace log file; you can see exactly how IIS changes the request and where it is forwarded to. This should provide you with the information needed to correct the configuration of the rewrite rules. See this Microsoft page for more information: [Using Failed Request Tracing to Trace Rewrite Rules](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/using-failed-request-tracing-to-trace-rewrite-rules).

### 3.6 Using Browser Developer Tools

Open the application and inspect the requests with your browser's developers tools. If the application isn't working you will see requests that are not successfully executed. Examine these requests to see if there is a pattern.

1.  All the /xas/ requests fail with an error.

    The rewrite is probably incorrectly configured. Open the /xas/ folder in the browser. You may then be presented with a more detailed explanation about the cause of your problem.
  
2.  Some JavaScript files cannot be opened.

    Try opening the files directly from your browser. If there is an issue in your IIS configuration you will get more information when opening that URL.
    
    If you still receive the error, it is most likely a security problem. The user under which your website is executed does not have sufficient privileges to access the required files.
    
## 4 Troubleshooting Mendix Service Console Errors{#msc-errors}

### 4.1 Security Errors While Starting Service

When the system gives security errors while starting the service, make sure that the configured service user has sufficient rights to the folders of the Mendix application. Sometimes you have to prefix the user name with the domain name; that is, use DOMAIN_NAME\user_name instead of just user_name.

### 4.2 Type Initialization

Sometimes the Event Viewer shows a message like this:

```
EventType clr20r3, P1 mendixservice.exe, P2 1.0.3810.25652, P3 4c0cf0d8, P4 mendixservice, P5 1.0.3810.25652, P6 4c0cf0d8, P7 2, P8 6, P9 system.typeinitialization, P10 NIL.
```

Make sure that the user account used to run the service has enough rights to the folders containing the Mendix Service executables.

## 5 Read More

*   [Finding the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
*   [Clearing Warning Messages in Mendix](/howto/monitoring-troubleshooting/clear-warning-messages/)
*   [Testing web services using SoapUI](/howto/testing/testing-web-services-using-soapui/)
*   [Monitoring Mendix using JMX](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
*   [Debugging Java actions remotely](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
*   [Log Levels](/howto/monitoring-troubleshooting/log-levels/)
*   [Debugging Java Actions](/howto/monitoring-troubleshooting/debug-java-actions/)
*   [Debugging Microflows and Nanoflows](/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/)
