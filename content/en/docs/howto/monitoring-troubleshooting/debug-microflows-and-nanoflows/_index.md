---
title: "Debug Microflows and Nanoflows"
url: /howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/
category: "Monitoring & Troubleshooting"
weight: 2
tags: ["monitoring", "troubleshooting", "debug", "microflow", "nanoflow"]
---

## 1 Introduction

Mendix Studio Pro has a built-in consistency checker that validates if the application you are building contains any obvious errors. This dramatically reduces the amount of technical errors during run-time, but Studio Pro isn't able to check if your app contains functional errors. This is mainly a manual practice, but Mendix does support enough tools to make this easier. If you run into a functional error in any of the microflows or nanoflows, you can easily debug them with the debugger.

**This how-to will teach you how to do the following:**

* Use breakpoints
* Debug microflows and nanoflows

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Read [How to Create a Basic Data Layer](/howto/data-models/create-a-basic-data-layer/)
* Read [How to Create Your First Two Overview & Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/)

## 3 Debugging Overview

There are three debugging panes: **Breakpoints**, **Debugger**, and **Variables**:

{{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580004.png" >}}

The **Breakpoints** pane shows all the microflows/nanoflows that contain breakpoints, which makes it easier to find your breakpoints. The best practice is to remove any breakpoints after you are done troubleshooting your microflows/nanoflows. You can always delete them from the **Breakpoints** pane.

{{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580017.png" >}}

The **Debugger** pane is useful when you are debugging your microflow/nanoflow, as it will walk you through the microflow/nanoflow:

{{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580008.png" >}}

The **Variables** pane shows the variables, objects, and lists involved in your microflow/nanoflow and how they change as you step through the microflow/nanoflow via the **Debugger** pane:

{{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580005.png" >}}

The best practice is to have the **Debugger** and **Variables** panes in different docks. The **Debugger** pane should usually be at the bottom of your development dock, and the **Variables** pane can be either in the left dock or the side dock. You want to be aware of how the values are being changed in the microflow/nanoflow, and it is difficult to see those changes if both panes are tabs within the same dock.

## 4 Using Breakpoints

Breakpoints are points in a microflow/nanoflow where the application will halt execution. This is useful to analyze the application execution and data up to that point. You can add breakpoints at any point in your microflow/nanoflow by following these steps:

1. Run your application locally.
2. Open the microflow/nanoflow that needs debugging in Studio Pro.
3. Right-click any of the activities or decisions in the microflow/nanoflow and select **Add breakpoint**. This sets a breakpoint on the selected step in the microflow/nanoflow, which is visually represented by a red dot:
    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580020.png" >}}

    You can open an overview of all the breakpoints by going to **View** > **Breakpoints**:
    
    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/breakpoints.png" >}}

    In the **Breakpoints** pane, you can enable, disable, and delete breakpoints. You can also configure a breakpoint condition and open the microflow/nanoflow that contains that breakpoint:
    
    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580017.png" >}}

## 5 Debugging

1. Run the application and open it in your browser.
2. Do whatever is needed to trigger the microflow/nanoflow that you want to debug:
    * As an end-user of the application, you will see a progress bar on the application
    * As a developer of the application, you will see the Mendix icon flashing on the panes task bar
3. Click the icon on the panes task bar to open Studio Pro. The element with the breakpoint that interrupts this microflow/nanoflow should be highlighted with a red border:

    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580010.png" >}}

4.  Open the **Debugger** pane from the **View** menu:

    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580009.png" >}}

    The debugger can be used to go through the microflow/nanoflow step by step:

    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580008.png" >}}
    
5. You have the following options on this pane:
    * Click **Step into** or **Step over** to move to the next step in the microflow/nanoflow (note that the difference between **Step into** and **Step over** is only noticeable if you run into a microflow/nanoflow call activity or a loop)
        * **Step into** means that the debugger steps into the sub microflow/nanoflow or loop
        * **Step over** moves the debugger to the next step in the same microflow/nanoflow
    * Click **Step out** to instruct the debugger to leave the sub microflow/nanoflow or loop (this is basically the opposite of **Step Into**)
    * Click **Continue** to instruct the debugger to continue until it reaches another breakpoint

To debug a microflow from a nanoflow you need to add a separate breakpoint to the microflow. Stepping into the microflow won't work in this situation.
    
For details on available shortcut keys, see the [Debugger Shortcut Keys](/refguide/studio-pro-overview/#debugger-shortcuts) section of *Studio Pro Overview*.

## 6 Variables Viewer

As you are stepping through a microflow/nanoflow, the variables pane will start to change. This overview will show you all the variables, objects, and lists involved in the application, that is all the variables, entities, references, current-user information, and device-type information. It can be used as you are stepping through the microflow/nanoflow to review the values and see if they match your expectations.

You can open the **Variables** pane from the **View** menu:
{{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580006.png" >}}

The **Variables** viewer can be used to inspect values accessible to the microflow/nanoflow. The values are updated with every step you make in the **Debugger**:
{{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580005.png" >}}

## 7 Breakpoint Conditions

Sometimes it is necessary to configure a breakpoint so that the microflow/nanoflow only breaks on a certain condition. This is achieved with breakpoint conditions and is configured by use of microflow/nanoflow expressions. Setting a breakpoint condition can be very useful if you are debugging a batch process and you only want to break at a certain value. Using breakpoint conditions is strongly advised if you are debugging an application that is running in production, as this will prevent the application from stopping for users other than yourself.

To use breakpoint conditions, follow these steps:

1. Right-click the activity or decision in the microflow/nanoflow with a breakpoint and select **Edit breakpoint condition**:
    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580018.png" >}}
2.  Use the expression below to make sure this breakpoint only interrupts the microflow/nanoflow if you are executing it yourself (replace `YourUserName` with your own user name):

    ```java
    $currentUser/name = 'YourUserName'
    ```

    The expression should look like this:
    {{< figure src="/attachments/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/18580012.png" >}}

3. Click **OK** to save the breakpoint condition.

## 8 Read More

* [Find the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Log Levels](/howto/monitoring-troubleshooting/log-levels/)
* [Debug Java Actions](/howto/monitoring-troubleshooting/debug-java-actions/)
* [Debug Microflows Remotely](/howto/monitoring-troubleshooting/debug-microflows-remotely/)
* [Common Properties](/refguide/microflow-element-common-properties/)
