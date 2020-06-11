---
title: "Browser Recorder Results"
parent: "rg-three-recorder"
---

## 1 Introduction

A browser session contains the recording of one browser instance of one user.

The **Actions** tab displays a list of all the recorded actions, which can be drilled down into to see detailed information on the action and any possible subsequent actions.

The **Browser information** tab provides some information regarding the browser, version, and installed plugins.

![](attachments/rg-three/Performance_browser_recording.png)

## 2 General

A browser recording records the following types of actions:

* Browser JavaScript console messages
* Client–server communication
* User actions

For all types except console messages, the detailed view displays a page holder with the **Tree** and **Actions** tabs. The tree view gives oversight on the duration of the action and subsequent actions. Just like the runtime recording results, it is possible to drill down in the tree by double-clicking a node.

![](attachments/rg-three/Performance_browser_recording_ActionsTree.png)

The **Actions** tab will display only direct subsequent actions within this action. It is possible to drill down to gain insight on those subsequent actions.

![](attachments/rg-three/Performance_browser_recording_ActionsActions.png)

For all types except client–server communication, the detailed view has a **Details** tab that shows a list of detailed information.

## 3 Browser JavaScript Console Messages

Recording the browser's JavaScript console messages can be enabled from the environment settings. The exception to this are errors thrown by JavaScript. These are always recorded as console errors.

![](attachments/rg-three/Performance_browser_recording_ConsoleMessage.png)

Console messages in JavaScript may contain variables, which are stringified if possible.

## 4 Client–Server Communication

In the case of a client–server communication action, all detailed information is divided over three tabs instead of one, due to the amount of details. These tabs are labeled **Request**, **Response**, and **Connection**.

The **Request** tab displays the request details. This is the request from the client (browser) to the Mendix Server. The details vary depending on the request. For example, in the case of retrieving data by XPath, the details will list the XPath, whether or not sorting is applied, which attribute(s) are used, possible offsets and limits, and more.

![](attachments/rg-three/Performance_browser_recording_ActionsRequest.png)

The **Response** tab displays the response details. This is the response from the server to the client (browser) request. As the request details vary depending on the type of request made (XPath retrieval or calling a microflow), the response details vary depending on the request made.

The response can include the number of objects retrieved, the count of an XPath, the size of the response to the browser, or instructions for the client as showing an INFO message or opening a page.

![](attachments/rg-three/Performance_browser_recording_ActionsResponse.png)

The **Connection** tab displays the header information and the timings of the request. The timing of a request includes the time needed to send the response to the server, the wait time due to server processing, and the time needed to download the response from the server. 

{{% alert type="warning" %}}
Request timing information is not yet available for [Mendix 7.6](/releasenotes/studio-pro/7.6) or above.
{{% /alert %}}

![](attachments/rg-three/Performance_browser_recording_ActionsConnection.png)

## 5 User Actions

A recorded user action has two details:

* **Event Target** – the location at which the user action took place
* **Widget path** – the path of the Mendix widget names from **Event Target** to the layout (inner to outer); this can be used to locate the exact widget in Mendix Studio Pro

![](attachments/rg-three/Performance_browser_recording_UserAction.png)
