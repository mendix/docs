---
title: "Debug Java Actions Remotely"
url: /howto8/monitoring-troubleshooting/debug-java-actions-remotely/
tags: ["monitoring", "troubleshooting", "java action", "debug"]
---

## 1 Introduction

To debug the Java actions used in a Mendix microflow, you need to make some configuration changes to the way you start the Mendix Runtime. This how-to will explain how to manage this.

This how-to will teach you how to do the following:

* Edit the server configuration
* Configure remote debugging

## 2 Editing the Server Configuration with Extra JVM Parameters

In this section, you will learn how to configure the security at the [Prototype / demo](/howto8/security/create-a-secure-app/#prototype) level. Be aware that this level of security is only applicable for development/demo purposes. This level is available for the quick development of demo applications. It simulates security without the more complex configuration of data access. When deploying to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), setting [Production](/howto8/security/create-a-secure-app/#production) security is mandatory.

To edit the server configuration with extra JVM parameters, follow these steps:

1. Open the [Project Settings](/refguide8/project-settings/).
2. Edit the configuration on the **Configurations** tab.
3.  Go to the **Server** tab of the configuration, add the following line to the **Extra JVM parameters** field: `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005`

    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/debug-java-actions-remotely/18580063.png" >}}

4. Run your application.

## 3 Configuring Remote Debugging

In your Java IDE, you need to configure remote debugging.

To configure IntelliJ, follow these steps:

1. Start the **Debugger**.
2. Place some breakpoints in your Java code.
3. Start debugging.

{{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/debug-java-actions-remotely/intellij_rundebug_configurations.png" >}}

To configure Eclipse, follow these steps:

1. Open the project in Eclipse.
2. Open the menu with the bug icon or the **Run** menu.
3. Select **Debug Configurations**.
4. In the left menu bar, select **Remote Java Application**.
5. Right-click **New**.
6. Be sure your current project is under **Project**, and change the port to 5005 (view the JVM parameters).
7. Click **Debug**.

## 4 Read More

* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto8/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto8/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions](/howto8/monitoring-troubleshooting/debug-java-actions/)
