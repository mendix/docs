---
title: "Manage App Performance with AppDynamics"
url: /howto8/monitoring-troubleshooting/manage-app-performance-with-appdynamics/
parent: "manage-app-performance"
menu_order: 1
tags: ["monitoring", "troubleshooting", "performance", "appdynamics"]
---

## 1 Introduction

To ensure your applications run smoothly, they need to be actively monitored so that the information is available to do the following:

* Avoid performance problems
* Diagnose performance problems when they occur

AppDynamics is a flexible application performance management tool that provides information to help you achieve the above goals.

**This how-to will teach you how to do the following:**

* Set up application performance management for your Mendix application on AppDynamics

{{% alert color="warning" %}}
AppDynamics is currently in private beta, and thus not supported. We plan to offer full support for AppDynamics during 2022.
{{% /alert %}}

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Create an AppDynamics account by signing up [here](https://portal.appdynamics.com/account/signup/community/)
* AppDynamics provides two different options for hosting their environment: the SaaS or on-premises solution; if you want to install AppDynamics on-premises, see [Get Started with AppDynamics On-Premise](https://docs.appdynamics.com/display/PRO14S/Get+Started+with+AppDynamics+On-Premise)

## 3 Setting Up

In this section, we will walk through all the steps to configure AppDynamics so that it can be used for the [application performance diagnostics](/addons/apd-addon/) of your Mendix application.

## 3.1 Setting Up AppDynamics

To set up AppDynamics, follow these steps:

1.  Navigate to your AppDynamics controller, where you should see the following screen:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/home.png" >}}
    
2. Select **Java**.
3. This will open up the configuration screen for your AppDynamics application. 
4. Download the Agent Installer and extract it to any directory (but remember the path, as this will be used later for integrating the Java Agent with your Mendix application):

   {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/download-installer.png" >}}
   

## 3.2 Setting Up Your Mendix Deployment

### 3.2.1 Cloud Foundry

Follow the the buildpack instructions to set up AppDynamics for Cloud Foundry deployments that are described here: [https://github.com/mendix/cf-mendix-buildpack#appdynamics](https://github.com/mendix/cf-mendix-buildpack#appdynamics).

### 3.2.2 On-Premises Linux & Windows Service Console

To the `javaopts` list in your *m2ee.yaml* file, add "-javaagent:<path-to-javaagent>javaagent.jar". For example:

```java
 javaopts: [
   "-Dfile.encoding=UTF-8", "-XX:MaxPermSize=128M", "-Xmx512M", "-Xms512M",
   "-Djava.io.tmpdir=/srv/mendix/data/tmp",
   "-javaagent:/opt/AppDynamics/AppAgent/javaagent.jar"
 ]
```

### 3.2.3 Mendix Studio Pro (Development Mode Only)

1. Open your Mendix application, and then select **Settings** in the **Project Explorer**:
2. Open a configuration:

     {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/19398903.png" >}}

3. In the **Extra JVM parameters** field on the **Server** tab, add `-javaagent:<path-to-javaagent>javaagent.jar` and `-Dappagent.install.dir=<path-to-javaagent>` WITHOUT the `javaagent.jar`:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/edit-configuration-appagent-jar.png" >}}

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/edit-configuration-d-appagent.png" >}}

4. As the last step of setting up your Mendix application, set the following extra configuration values in the `AppServerAgent/ver4.x/conf/controller-info.xml` file (where `x` is the version of AppDynamics you downloaded):

    * `application-name` (for instance *MyMendixApp*; this will be the name that will be used within AppDynamics)
    * `tier-name` (for *instance tier-1*)
    * `node-name` (for *instance node-1*)

5. Run your Mendix application to generate data for AppDynamics. Sometimes AppDynamics does not automatically find your application in the configuration screen, so make sure to check the **Applications** tab for whether the application shows up there.

## 4 Configuring Business Transactions

Now that your Mendix application has been set up to provide its information using the Java agent, AppDynamics needs to be configured so that it can be displayed in a useful way. This information will be presented as business transactions that will show the requests handled by the request handlers and the Mendix actions that have been triggered. These business transactions will allow you to pinpoint the bottle necks and issues in your Mendix application.

To configure these business transactions, follow these steps:

1.  From the **Applications** page, select your application:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/select-applications.png" >}}

2.  Open the **Configuration** page (1) and click **Instrumentation** (2):

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/configuration-instrumentation.png" >}}

3.  On the **Instrumentation** page, navigate to the **Transaction Detection** tab (1), and add a new **Custom Match Rule** (2):

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/transaction-detection-add.png" >}}

### 4.1 Mendix Actions

To monitor your actions as business transactions, follow these steps:

1. From the **Add Rule** page, select **Java** for the **Agent Type** of the custom match rule and **POJO** as the **Entry Point Type**:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/add-rule-java-pojo.png" >}}

2. Fill in the **Summary** tab with **POJO** as the **Entry Point Type**, then enter *ExecutionAction* for the **Name**, click the **Enabled** check box, and set **Scope** to **Default Scope**:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/add-rule-summary-execution-action.png" >}}

3. Fill in the **Rule Configuration** tab with the information presented in this screenshot (the yellow highlighted field should be **com.mendix.core.actionmanagement.CoreAction**):

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/add-rule-configuration-execution-action.png" >}}

4. After saving, the Mendix actions will appear under **Business Transactions**:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/execution-action-business-transactions.png" >}}

### 4.2 Request Handlers

To set up monitoring on the request handlers, follow these steps:

1. From the **Add Rule** page, select **Java** for the **Agent Type** of the custom match rule and **POJO** as the **Entry Point Type**:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/add-rule-java-pojo.png" >}}

2. Fill in the **Summary** tab with **POJO** as **Entry Point Type**, then enter *RequestHandler* for the **Name**, click the **Enabled** check box, and set **Scope** to **Default Scope**:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/add-rule-request-handler.png" >}}

3. Fill in the **Rule Configuration** tab with the information presented in this screenshot (the yellow highlighted field should be **com.mendix.externalinterface.connector.RequestHandler**):

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/add-rule-configuration-request-handler.png" >}}

4. After saving, the requests will appear as **Business Transactions**:

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/request-handler-business-transactions.png" >}}

## 5 Web Services

AppDynamics can automatically detect web service calls. This feature is enabled by default and can be found in the **Service Endpoints** menu item:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/service-endpoints.png" >}}

## 6 Database

AppDynamics automatically detects database calls. These can be viewed by navigating to the **Database Calls** page:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/19398926.png" >}}

## 7 Application Topology

Once you have performed all of the steps above for your Mendix application, its topology should become visible by navigating to the **Application Dashboard** page. Here you can see an overview of your application and all of its integrations with external systems.

{{< figure src="/attachments/howto8/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-appdynamics/19398927.png" >}}

## 8 Further Documentation

For more information on AppDynamics, see the AppDynamics documentation here: [https://docs.appdynamics.com/](https://docs.appdynamics.com/).

## 9 Read More

* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages](/howto8/monitoring-troubleshooting/clear-warning-messages/)
* [Monitor Mendix Using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto8/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Set Log Levels](/howto8/monitoring-troubleshooting/log-levels/)
* [Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)
* [Debug Java Actions](/howto8/monitoring-troubleshooting/debug-java-actions/)
* [Solve Load & Import Errors](/howto8/monitoring-troubleshooting/solving-load-and-import-errors/)
* [Debug Microflows Remotely](/howto8/monitoring-troubleshooting/debug-microflows-remotely/)
