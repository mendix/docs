---
title: "Status Summary and Root Cause Analysis"
url: /developerportal/maia-operate/status-summary-root-cause-analysis/
description: "Describes how to use Maia Operate to check the health of a Mendix Cloud environment and run a root cause analysis on the environment."
weight: 20
aliases:
    - /developerportal/maia-operate/ai-log-summary/
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

Status Summary and Root Cause Analysis is a feature of Maia Operate that reports on the health of a single Mendix Cloud environment in plain language. You open the Maia Operate assistant for an environment and request a status summary. The summary covers reachability, deployment state, runtime health, and recent activity. The status summary includes the log analysis that was previously available as AI Log Summary.

When an environment needs attention, you can run a root cause analysis. It identifies the most likely cause, shows the supporting evidence, and recommends a next step.

## Prerequisites

To use this feature, you need the following:

* A Mendix app deployed to a Mendix Cloud environment.
* **Monitoring Access** permission for the environment. For more information, refer to [Node Permissions](/developerportal/deploy/node-permissions/#access-to-monitoring).

## Checking Your Environment Status {#check-status}

To check the status of your environment, do the following:

1. Open your app in [Mendix Cloud](https://cloud.home.mendix.com).
2. In the **Overview** tab, locate the target environment.
3. Click **Explain**.
4. Click the **Summarize app status** suggestion.

The assistant checks the environment and returns a status summary.

{{% alert color="info" %}}
If you have not used the assistant for a while, your first request can take longer while the assistant starts up. Further requests in the same session respond more quickly.
{{% /alert %}}

The status summary always reports the same signals in the same order, so you can read it the same way each time. For details, see [Status Summary](#status-summary).

{{% alert color="info" %}}
The assistant runs one analysis at a time for your account. If you start a status summary or root cause analysis in another environment, browser tab, or window, any analysis already running for your account stops. Only the most recent analysis continues.

An analysis also stops if you close the assistant panel while it is running. A stopped analysis does not resume on its own. To continue, reopen the assistant and run the action again.
{{% /alert %}}

## Running a Root Cause Analysis {#run-rca}

When the status summary shows that your environment needs attention, the assistant offers a **Run root-cause analysis** action. This action runs a deeper analysis of the environment, so you start it yourself when you need it.

To run a root cause analysis, do the following:

1. In the assistant's status summary reply, click **Run root-cause analysis**.

    The assistant inspects the environment and returns a root cause analysis report, which usually describes a single issue.

2. Follow the recommended next step in the report. If the report indicates that the cause is on the Mendix platform side, click **Contact Mendix Support**.

To check the current state again at any time, click **Run status summary again**.

## Understanding the Results {#understand-results}

### Status Summary {#status-summary}

A status summary contains the following, in this order:

* **Overall** – a one-line verdict, such as "Your app is up and running normally" or "Your app needs attention"
* **Reachability** – the result for each web address of your app, listed separately so you can see which address is affected, such as `app.example.com: live and accepting traffic`
* **Deployment** – the deployment state, such as set to run or stopped after a failed start
* **App health** – the runtime state, such as running and responding or repeatedly failing to start
* **Recent activity** – a short note on recent errors, such as no errors recorded or a count of recent errors

The summary ends with a line that tells you what you can do next.

### Root Cause Analysis Report {#rca-report}

A root cause analysis report contains the following:

* A short summary of what was found
* One section for each issue, titled with the issue category, such as **Deployment**, **Startup**, **Reachability**, **Security certificate**, **Dependency**, or **Memory**
* A closing section that tells you whether you can resolve the issue yourself or should contact Mendix Support

Each issue section includes the following:

* **Most likely cause** – the cause, stated in plain language
* **Supporting evidence** – evidence where available, such as a relevant log line
* **Recommended action** – a step you can take
* **Learn more** – a link to Mendix documentation where further reading helps

Recommended actions are always steps that you can take yourself in Mendix Portal or Studio Pro, such as redeploying an environment. The assistant does not make changes for you, and it does not recommend destructive actions. Links in a reply point only to Mendix documentation and Mendix Support.

## Data Handling {#data-handling}

The status summary and root cause analysis are AI-generated. They help you understand and triage the state of your environment, but they are not an authoritative source. Confirm the findings against your environment and your logs before making important changes. The results might not capture every cause, especially for issues that occur rarely or originate outside the environment.

The assistant reports on operational data for the environment that you select, such as deployment state, runtime status, route reachability, metrics, alerts, platform events, and recent log activity. Log data follows your existing log retention policies, independent of this feature. For more information, see the [Rotation and Retention Schedule](/developerportal/operate/logs/#retention-schedule) section of *Logs*.