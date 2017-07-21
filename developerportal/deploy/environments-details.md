---
title: "Environment Details"
space: "Developer Portal"
category: "Deploy"
description: "This page describes the environmental details of your App."
tags: ["Deploy","App","Developer Portal"]
---

## 1 Introduction

To enter the **Environmen details** page, go to the [Developer Portal](http://home.mendix.com), select your licensed app and click **Environments**. Under **Environments** click **Details**, the view of the **Deatils** page will be depending on the Mendix Cloud version.

   ![](attachments/environment-details.png)   

This document will explain the view of the **Environment details** page of a Mendix Cloud v3 app.

## 2 General

   ![](attachments/.png)   

In **General**, you can find the following information about your environment:

* Status
   * White - the environment is stopped or was never deployed
   * Green - the environment is working correctly
   * Orange - the environment has warnings
   * Red - the environment is not working correctly
   
   ![](attachments/environment-status.png)   
   
* Running since date - the date that the app has been started
* Mode - type of environment: production/acceptance/test
* URL - the URL of the app
* Custom Domains - the custom domains of the app
* Java version - until Mendix Desktop Modeler 5.17 the version of java is 1.7. In Mendix Desktop Modeler 5.18 you can choose between java version 1.7 and 1.8. Starting from Mendix Desktop Modeler 6 you cannot choose the java version and it's always version 1.8.
* Runtime version - Mendix Desktop Modeler version
* Administrator user name
* Database status is by default running
* Database version - the PostgreSQL version that is supporting the database
* Region - the region where the app is hosted
* Mendix Cloud version - Mendix Cloud v3/Mendix Cloud v4

### 2.1 Actions

On the right side of the screen, you can find the following action buttons:

* **Start/Stop Application**
* **Show Logged in Users**
* **Change Admin Password**
* **View Current Log**

#### Debugger in Mendix Cloud v3

   ![](attachments/actions-v3.png)

In Mendix Cloud v3 environments you can click **Enable/Disable Debugging** to enable or disable the debugger option.
    * For more information about enabling the debugger, see [Debug Microflows Remotely](/howto7/monitoring-troubleshooting/debug-microflows-remotely)
    
#### Debugger in Mendix Cloud v4

![](attachments/actions-v4.png)

In Mendix Cloud v4 environments the debugger is always enabled. You can click **Show debugger information** to show settings to connect the debugger in your Mendix Desktop Modeler to your app.

## 2.2 Scaling

![](attachments/scale.png)

In **Scaling** there are two sliders that you can control:

* The **Instances** slider to increase or decrease the amount from one to four instances by sliding the slider. The instances are meant for spreading your memory out. You can spread the RAM memory among 4 instances if you have more than 1GB of RAM memory.
* The **Memory per instance** slider to increase or decrease the memory amount per instance by sliding the slider. 

The **Total Allocated Memory** is a process cirkle that shows how much memory is currently used for scaling. 

If you have 1GB RAM of the **Total Allocated Memory**, you have 1 **instance** available to store your memory. 
To scale your memory over multiple instances you need more memory.

### 2.3 Overviews

At the bottom of the page, there are two overview grids with information about the following:

#### License

The license overview contains the following information:

* Company owning the license
* License type
* Expiration date
* Runtime mode (Production/Acceptance/Test)
* Limitations
    * Limitation type
    * Amount type
    * Number of allowed users

The limitation types are:

* Concurrent – the amount of named users that are logged in simultaneously
* Concurrent anonymous – the amount of anonymous users that are logged in simultaneously
* Named – the amount of named users registered in the database that are allowed to use the application

#### Loaded Deployment Package

In this section, you can find information about the deployment package that is currently loaded into the environment:

* Size of the deployment package
* Upload date of the deployment package
* Version of the deployment package
* Name of the deployment package

## 3 Model Options

   ![](attachments/model-options.png)

On the **Model Options** tab of the **Environment details** page, you can edit the following model options:

### 3.1 Scheduled Events

In this section you can view your configured scheduled events.

If you select a scheduled event and click **Toggle**, you can switch the scheduled event off and on. 

<div class="alert alert-info">{% markdown %}

You have to restart your application before the changes will be made.

{% endmarkdown %}</div>

With scheduled events, you can let the Runtime execute a microflow at a specific moment in time. The event can also be repeated with a given interval (for example, every day).

For more information, see [Scheduled Events](../../refguide/scheduled-events).

### 3.2 Constants

In this section, you can view the configured constants. Constants are used to define configuration values that can differ per environment.

To fill in a new value, select the constant and click **Edit**.

<div class="alert alert-info">{% markdown %}

You have to restart your application before the changes will be made.

{% endmarkdown %}</div>

For more information, see [Constants](../../refguide/constants).

## 4 Network

   ![](attachments/network1.png)

On the **Network** tab of the **Environment details** page, you can manage the following elements:

### 4.1 Custom Domains

* Domain name
* Certificate
* Expire

You can perform the following actions:

* Create (here you have to provide the **domainname** and select the **certificate** from a drop-down menu)
* Edit
* Delete

For more information, see [Certificates](/refguide/certificates) and [Configure Custom Domains](/developerportal/howto/custom-domains).

### 4.2 Prevent Embedding Your App in an IFrame

Your application can be embedded in another site using an IFrame. To prevent this, you can deny embedding using the setting below. This will set an X-Frame-Options header for each HTTP response from your app. Please note that Chrome will ignore the **Allow from specific domain** option.

The embedding options are:

* Allow
* Never allow
* Allow on the same domain
* Allow from specific domain

### 4.3 Request Handlers

Configure custom request handlers for requests that will be sent to the runtime. If you enable `/ws/`, these requests will end up at the runtime. Everything not specified here (except for `/xas/` and `/file/`) will end up at the static file server which serves the web folder from disk.

*   Path
*   Match type
*   Enabled in the following:
    *   Environment: Production, Acceptance, Test
    *   N/A

<div class="alert alert-info">{% markdown %}

If you are configuring the request handlers in, for example, the acceptance environment, and the request handlers are only enabled in, for example, the production environment, select the request handler and click **Toggle** to enable it in the environment that you are configuring.

{% endmarkdown %}</div>

You can perform the following actions:

* Toggle
* New request handler — you must provide the path and choose the match type between `starts with` and `exact match`
* Delete the request handler

### 4.4 Access Restriction Profiles

You can restrict access to your application by means of Client Certificates or IP ranges. Here you can define the profiles that can be used on the full application or specific request handlers.

*   Description
*   Used for

You can take the following actions:

*   New 
    *   Demand that: 
        *   Certificates should match
        *   Certificate or IP should match
        *   IP should match
    *   Add an Description
    *   View in which environment it is active - Production/Acceptance/Test
    *   Add an Certificate authority 
*   Edit
*   Delete

### 4.5 Environment Access Restrictions

You can restrict access to your application by means of client certificates or IP ranges. To enable this, first create an access restriction profile before selecting it from the drop-down menu below.

### 4.6 Request Handler Access Restrictions

Advanced users can override access restrictions for specific request handlers. To do this, please specify an access restriction per request handler in the list.

### 4.7 Outgoing Connections Certificates

Add client certificates (in the PKCS12 format) or certificate authorites (in the PEM format). These will be used when your application initiates SSL/TLS connections.

## 5 Log Levels

   ![](attachments/loglevels-tab.png)   

Log levels are used to distinguish the log messages and to highlight the highest priority ones so that they can receive the immediate intervention they require.

On this tab of **Environment details**, you can perform the following actions:

* Retreive the current log levels by clicking the **Refresh** button
* Change the log level type by clicking the specific level
* Click the **Set all to INFO** button to revert all the changes

![](attachments/loglevels.jpg)

The log level types are:

* None
* Critical
* Error
* Warning
* Info
* Debug
* Trace

For more information about log levels, see [How to Set Log Levels](/howto/monitoring-troubleshooting/log-levels).

## 6 Runtime

   ![](attachments/runtime.png)   

On the **Runtime** tab of the **Environment details**, you can perform the following actions:

* **Add** a new runtime **setting** with a new **value**
* **Edit** the runtime setting
* **Delete** the runtime settings

For more information about runtime settings, read the [Custom Settings](/refguide/custom-settings) documentation.

## 7 Maintenance 

   ![](attachments/maintenance.png)   

There are two types of maintenance:

*  Regular weekly maintenance, which does not affect your app
    * Where you can change the preferred maintenance window
* Planned maintenance, which will affect your app in some ways
    * You will automatically receive an **email** about this and you can override the maintenance window

For more information about maintenance, see [How to Configure Maintenance Windows](/developerportal/howto/maintenance-windows).

### 7.1 Preferred Maintenance Window

You can view and change the preferred maintenance. 

### 7.2 Planned Maintenance

When a maintenance operation is planned, it will show up under **Planned Maintenance**. By default, this will be planned in your preferred maintenance window. You can override the maintenance window of a specific maintenance operation by clicking **Override**.

You will automatically receive **email notifications** about planned maintenance.
