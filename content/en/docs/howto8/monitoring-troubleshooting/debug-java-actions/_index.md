---
title: "Debug Java Actions"
url: /howto8/monitoring-troubleshooting/debug-java-actions/
weight: 4
---

## 1 Introduction

Mendix Studio Pro has a built-in debugger to solve errors on the microflow level. A microflow can be extended with custom Java actions, but because these actions are text-based, they can only be checked on compile errors. If you run into an error in any of the Java actions, you can easily debug them by utilizing the debugger of Eclipse.

This how-to teaches you how to do the following:

* Set breakpoints
* Debug in Eclipse

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Eclipse](https://eclipse.org/)
* Add a Java action and open the project in Eclipse
* Read [How to Extend Your Application with Custom Java](/howto8/logic-business-rules/extending-your-application-with-custom-java/)
* Deploy the application for Eclipse by selecting **Deploy for Eclipse** from the project menu in Studio Pro (you should redo this every time you make changes in Studio Pro):
    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/18581045.png" class="no-border" >}}

## 3 Setting Breakpoints

1. Open Eclipse and locate the project in the **Package Explorer**.
2. Double-click **ReverseCustomerName.java**:
    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/18581041.png" class="no-border" >}}
3. Place the cursor on the line that needs debugging, hold down **Ctrl+Shift**, and press **B** to enable a breakpoint. A blue dot in front of the line will appear: 
    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/18580059.png" class="no-border" >}}

    {{% alert color="info" %}}You can also use Ctrl+Shift+B to disable a breakpoint.{{% /alert %}}

## 4 Debugging in Eclipse

1. Select the project root node in the package explorer and click the debug icon in the Eclipse toolbar:
    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/18580062.png" class="no-border" >}}

    The application will now be started with Eclipse attached as debugger.

2. As soon as the deployment process is ready, open the application in your browser and trigger the Java action:
    * As an end-user of the application, you will see a progress bar on your application
    * As a developer, you will see the Eclipse icon flashing on the Windows task bar
3. Open Eclipse. You should now see the "debug" perspective of Eclipse.
4. Click **Step into** (or press F5) or **Step over** (or press F6) to move on the next step in the microflow:
    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/18580056.png" class="no-border" >}}

    {{% alert color="warning" %}}With debugger options, the difference between "Step into" and "Step over" is only noticeable if you run into a function call. "Step into" means that the debugger steps into the function, and "Step over" just moves the debugger to the next line in the same Java action. With "Step Return" (pressing F7), you can instruct the debugger to leave the function; this is basically the opposite of "Step Into." Clicking "Resume" (pressing F8) instructs the debugger to continue until it reaches another breakpoint.{{% /alert %}}

5. Place your cursor on any of the variables in the Java action to see its value in a pop-up window:
    {{< figure src="/attachments/howto8/monitoring-troubleshooting/debug-java-actions/18580057.png" class="no-border" >}}

## 5 Read More

* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto8/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto8/integration/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto8/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Log Levels](/howto8/monitoring-troubleshooting/log-levels/)
* [Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)
* [Debug Microflows Remotely](/howto8/monitoring-troubleshooting/debug-microflows-remotely/)
* [Java Actions](/refguide8/java-actions/)
