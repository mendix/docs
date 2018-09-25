---
title: "Debugging Microflows Remotely"
category: 'Monitoring & Troubleshooting'
---

You can also debug applications that are already in the cloud, either in acceptance or production environment. In this how-to article you will learn how to connect your debugger to your cloud environment. 

## 1\. Preparation

Before you start with this how-to please complete the following prerequisites:

*   You need a Basic, Professional or Enterprise Mendix edition to use these features: [http://www.mendix.com/editions/](http://www.mendix.com/editions/)

## 2\. The Basics

To enable the cloud debugging you need to get a URL and password from the cloud and add that information to the modeler. The steps below will explain where to gather all the necessary information. 

It is not recommended to debug in production. However, if you are debugging in the cloud, be aware of the other end users in the system. The debugger will stop processes from moving on for other users.

### 2.1 Enabling Debugging in the Cloud

1.  Open a browser and go to [http://home.mendix.com](http://home.mendix.com).
2.  Login with your **Mendix ID**.
3.  Click on the **Dev Portal** and navigate to the project that you want to debug.
    ![](attachments/8782780/10682377.png) 
4.  Open the **Deploy** tab in your project.
5.  Go to **Details**.
    ![](attachments/8782780/8946041.png)
6.  Click **Enable Debugging**.
    ![](attachments/8782780/8946042.png)![](attachments/8782780/8946043.png)

The debugging settings will show up. Usually, it will be a URL such as `http://yourapp.mendixcloud.com` and a secure password that changes each time you enable and disable the debugger.

If you want to disable the debugger, simply click on Disable Debugging.

{{% alert type="warning" %}}

If you do not see an overview similar to the one below, then you do not have sufficient cloud permissions to deploy packages into the cloud or be able to debug in the cloud. Contact the technical contact or the project SCRUM Master in your organization and project to get sufficient permissions.

{{% /alert %}}

### 2.2 How to enable cloud debugging in your modeler

Once you have the unique URL and password, there are two ways to connect the modeler to the cloud environment. 

#### First Method

1\. Go to **Run.**

![](attachments/8782780/8946044.png)

2\. Click on **Connect debugger**...

![](attachments/8782780/8946045.png)

3\. Enter the URL and password that you got from the cloud environment.

#### Second Method

1\. Go to the Debugger dock window.
2\. Click on the Connect button and enter the URL and password information in the pop up prompt.

## 3\. Related content

*   [Finding the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
*   [Clearing Warning Messages in Mendix](clearing-warning-messages-in-mendix)
*   [Testing web services using SoapUI](testing-web-services-using-soapui)
*   [Debugging Microflows](debugging-microflows)
*   [Common Mendix SSO Errors](common-mendix-sso-errors)
*   [Monitoring Mendix using JMX](monitoring-mendix-using-jmx)
*   [Debugging Java Actions](debugging-java-actions)



*   [Blog post on debugging](http://www.mendix.com/tech-blog/the-ultimate-debugger/) 
*   [Blog post on cloud debugging](http://www.mendix.com/tech-blog/new-goodies-for-mendix-app-platform-users-mendix-business-modeler-4-3-release-today/)
