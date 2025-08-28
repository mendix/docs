---
title: "Debug Java Actions Remotely"
url: /refguide10/debug-java-actions-remotely/
aliases:
    - /howto10/monitoring-troubleshooting/debug-java-actions-remotely/
---

## Introduction

{{% alert color = "warning" %}}
It is not possible to debug Java actions remotely in Eclipse for applications that are hosted by Mendix Cloud.
{{% /alert %}}

To debug the Java actions used in a Mendix microflow, you need to make some configuration changes to the way you start the Mendix Runtime. This how-to will explain how to manage this.

This how-to teaches you how to do the following:

* Edit the server configuration
* Configure remote debugging

## Editing the Server Configuration with Extra JVM Parameters

To edit the server configuration with extra JVM parameters, follow these steps:

1. Open the [App Settings](/refguide10/app-settings/).
2. Edit the configuration on the **Configurations** tab.
3. Go to the **Server** tab of the configuration, add the following line to the **Extra JVM parameters** field:

    `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005`

    {{< figure src="/attachments/refguide10/java-programming/debug-java-actions/debug-java-actions-remotely/18580063.png" class="no-border" >}}

4. Run your application.

## Configuring Remote Debugging

In your Java IDE, you need to configure remote debugging.

{{< figure src="/attachments/refguide10/java-programming/debug-java-actions/debug-java-actions-remotely/eclipse-debug.png" class="no-border" >}}

To configure Eclipse, follow these steps:

1. Open the app in Eclipse.
2. Open the menu with the bug icon or the **Run** menu.
3. Select **Debug Configurations**.
4. In the left menu bar, select **Remote Java Application**.
5. Right-click **New**.
6. Be sure your current app is under **App**, and change the port to 5005 (view the JVM parameters).
7. Click **Debug**.

## Read More

* [Find the Root Cause of Runtime Errors](/howto10/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto10/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto10/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/developerportal/deploy/monitoring-mendix-using-jmx/)
* [Debug Java Actions](/howto10/monitoring-troubleshooting/debug-java-actions/)
