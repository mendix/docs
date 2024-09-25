---
title: "Performance Recorder"
url: /appstore/partner-solutions/apd/rg-three-recorder/
---

## Introduction

The APD Performance Recorder enables recording each individual action within a Mendix application. There are two recording options:

* Recording the runtime records the server actions (microflows and client API)
    * Useful for investigating a slow microflow or pinpointing a time-consuming action
* Recording the browser (or browsers) records the user's connection to the application
    * Shows the performance from the user's perspective as well as subsequent actions that the browser performs as a result of the server responses

## Recording a New Session

Start a new recording session by clicking **Record runtime(s)**. You can provide a session name (optional) and check the box for all user browsers to be recorded. You can also choose to record the browser console.

It is possible to record an individual user's browser without recording the runtime by clearing the **Record all browsers** box and then clicking **Select browsers to record**. A pop-up window will show a list of the users logged in on the current day. You can select here the users whose browsers you want to record.

{{< figure src="/attachments/appstore/use-content/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/select-browsers.png" class="no-border" >}}

When recording a browser, the user has to confirm the following message:

{{< figure src="/attachments/appstore/use-content/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/Browser_agent_recording_notice.png" class="no-border" >}}

## Recorded Results

The results of a recording are found in the **Recorded sessions** overview. This tab displays the recordings of the runtime (or runtimes) separate from the browser recordings. 

When you click a recording of the **Browser** type, the [browser recorder results](/appstore/partner-solutions/apd/rg-three-browser-recorder-results/) screen opens. When you click a recording of the **Server** type, the [server recording results](/appstore/partner-solutions/apd/rg-three-runtime-recorder-results/) screen opens.

{{< figure src="/attachments/appstore/use-content/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/recorder.png" class="no-border" >}}

{{% alert color="info" %}}
A browser session is per browser window. If a user uses multiple browser instances to connect with the application, this results in a recorded session for each instance.
{{% /alert %}}

### Pinned Recording Sessions

Recordings are automatically cleaned after a week. If desired, it is possible to pin down a recorded session to prevent automatic removal (for example, when you wish to compare the difference in performance after a deployment, but a deployment is not scheduled within a week). 
