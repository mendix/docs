---
title: "Splunk for Mendix Cloud"
url: /developerportal/operate/splunk-metrics/
parent: "metrics"
weight: 30
description: "How to configure Mendix Cloud to send your runtime application logs Splunk Cloud Platform."
tags: ["Splunk Cloud Platform", "Mendix Cloud", "monitoring", "analysis", "logs"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

[Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) is a monitoring and analysis tool for cloud applications. This document explains how to configure your Mendix Cloud app to send the runtime application logs to Splunk Cloud Platform to provide additional search, analysis, and visualization of your runtime application logs.

Mendix provides integration with Splunk Cloud Platform; it does not currently integrate with other Splunk monitoring products. Mendix sends only the runtime application logs to Splunk.

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their dedicated documentation. For Private Cloud deployment, for example, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

## 2 Prerequisites

To use the Splunk Cloud Platform and send data to Splunk Cloud Platform from your Mendix app, you need the following:

* Access to Splunk Cloud Platform
* An access token for your Splunk Cloud Platform account, obtained from the Splunk Cloud Platform dashboard
* A licensed Mendix app of which you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact)

## 3 Connecting Your Node to Splunk Cloud Platform{#connect-node}

### 3.1 Set up Splunk Integration on the Developer Portal

To send your runtime information to Splunk Cloud Platform, you need to set it up using environment variables in the Developer Portal.

1. Go to the **Environments** page of your app in the Developer Portal.
2. Click **Details** on the environment you wish to monitor with Splunk Cloud Platform. 
3. Switch to the [**Runtime** tab](/developerportal/deploy/environments-details/#runtime-tab).
4. Add the following **Custom Environment Variables**.
    | Variable | Description | Default |
    | --- | --- | --- |
    | `SPLUNK_HOST` | The hostname or the IP address of the Splunk Cloud Platform Controller without the scheme (protocol). An example is `test.splunkcloud.com`. |
    | `SPLUNK_PORT` | The HTTP(or HTTPS) port of the Splunk Cloud Platform Controller. | `8088` |
    | `SPLUNK_TOKEN` | An access token to the Splunk Cloud Platform. To create a new token on the Splunk Cloud dashboard, open the Splunk Cloud dashboard in a browser, go to **Settings** > **Data Input** > **HTTP Event Collector**, and click **New Token** (on the upper-right corner of the page). |
    | `LOGS_REDACTION` | Email addresses are automatically redacted before log entries are sent to Splunk Cloud Platform. To disable this redaction, set `LOGS_REDACTION` to `false`. The environment variable `SPLUNK_LOGS_REDACTION` is still supported, but it is now deprecated and will be removed in a later version. Its use is not recommended. | `true` |

5. Return to the **Environments** page for your app and **Deploy** or **Transport** your app into the selected environment.

    {{% alert color="warning" %}}The first time you set up the Splunk Cloud Platform integration, you must redeploy your app and then restart it. Just restarting the app is not sufficient because additional dependencies need to be included.{{% /alert %}}

### 3.2 Metadata

In addition to the runtime application logs, the following JSON-formatted metadata is automatically sent to the Splunk Cloud Platform:

* `environment_id` – unique identifier of the environment
* `instance_index` – number of the application instance
* `hostname` – name of the application host
* `application_name` – default application name, retrieved from domain name
* `model_version` – model version of the Mendix runtime
* `runtime_version` – version of the Mendix runtime

You can filter the data by these fields.

### 3.3 Custom tags

You can also set up custom tags in the format `key:value`. Mendix recommends adding the following custom tags:

* `app:{app_name}` (for example, `app:customermanagement`) – this enables you to identify all logs sent from your app
* `env:{environment_name}` (for example, `env:accp`) – this enables you to identify logs sent from a particular environment so you can separate out production logs from test logs

To set these tags, do the following:

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** on an environment you are monitoring with Splunk. 
3. Switch to the **Tags** tab.
4. Click **Add** and type in the string to be sent to Splunk as a tag.
5. Restart the application.

## 4 Additional Information{#additional-info}

### 4.1 Location of Logs

Once the Mendix application is redeployed and restarted, the runtime application logs will appear on Splunk Cloud Platform under **Search & Reporting**.

In the search line, specify `source="http:your_token_name"` and click the search button.

### 4.2 Splunk Cloud Platform Issues

If you have any issues related to accessing Splunk Cloud Platform, contact their support using the links on the [Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) site. You will need a Splunk Cloud Platform account to request support.

## 5 Read More

* [Metrics](/developerportal/operate/metrics/)
