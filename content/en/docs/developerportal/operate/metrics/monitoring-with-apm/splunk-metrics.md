---
title: "Splunk for the Mendix Cloud"
url: /developerportal/operate/splunk-metrics/
parent: "metrics"
weight: 30
description: "How to configure the Mendix Cloud to send your runtime application logs Splunk Cloud Platform."
tags: ["Splunk Cloud Platform", "Mendix Cloud", "monitoring", "analysis", "logs"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

[Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) is a monitoring and analysis tool for cloud applications. This document explains how to configure your Mendix Cloud app to send the runtime application logs to Splunk Cloud Platform to provide additional search, analysis, and visualization of your runtime application logs.

{{% alert color="info" %}}
Mendix provides integration with [Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) – it does not currently integrate with other Splunk monitoring products.

Mendix currently sends only the runtime application logs to Splunk.

For support on other cloud deployment options, such as Private Cloud, refer to their dedicated [documentation pages](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

## 2 Prerequisites

To use Splunk Cloud Platform, and to send data to Splunk Cloud Platform from your Mendix app, you will need the following:

* Access to Splunk Cloud Platform
* An access token for your Splunk Cloud Platform account, obtained from the Splunk Cloud Platform dashboard
* A licensed Mendix app of which you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact)

## 3 Connect Node to Splunk Cloud Platform{#connect-node}

### 3.1 Set up Splunk integration on the Developer Portal

To send your runtime information to Splunk Cloud Platform, you need to set it up using environment variables in the Developer Portal.

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select the environment you wish to monitor with Splunk Cloud Platform. 
3. Open the [**Runtime** tab](/developerportal/deploy/environments-details/#runtime-tab).
4. Add the following **Custom Environment Variable**s.

    1. SPLUNK_HOST

        The hostname or the IP address of the Splunk Cloud Platform Controller without the *scheme* (protocol). An example is `test.splunkcloud.com`.

    2. SPLUNK_PORT

        The HTTP(S) port of the Splunk Cloud Platform Controller.

        *Default: `8088`*

    3. SPLUNK_TOKEN

        An access token to the Splunk Cloud Platform obtained from the Splunk Cloud dashboard

        To create a new token on the Splunk Cloud dashboard, open the Splunk Cloud dashboard in a browser and go to **Settings** > **Data Input** > **HTTP Event Collector** and click **New Token** (on the top-right corner of the page). 

    4. SPLUNK_LOGS_REDACTION

        Email addresses are automatically redacted before log entries are sent to Splunk Cloud Platform. To disable this redaction, set **SPLUNK_LOGS_REDACTION** to *false*.

        *Default: `true`*

5. Return to the **Environments** page for your app and *Deploy* or *Transport* your app into the selected environment.

    {{% alert color="warning" %}}Your app must be **redeployed** the first time you set up the Splunk Cloud Platform integration as additional dependencies need to be included.<br/><br/>Restarting the app is not sufficient to start sending data to Splunk Cloud Platform.{{% /alert %}}

### 3.2 Metadata

In addition to the runtime application logs, the following JSON-formatted metadata is automatically sent to the Splunk Cloud Platform:

* `environment_id` - unique identifier of the environment
* `instance_index` - number of the application instance
* `hostname` - name of the application host
* `application_name` - default application name, retrieved from domain name
* `model_version` - model version of the Mendix runtime
* `runtime_version` - version of the Mendix runtime

You can filter the data by these fields.

### 3.3 Custom tags

You can also set up custom tags in the following format `key:value`. We recommend that you add the following custom tags:

* `app:{app_name}` – this enables you to identify all logs sent from your app (for example, **app:customermanagement**)
* `env:{environment_name}` – this enables you to identify logs sent from a particular environment so you can separate out production logs from test logs (for example, **env:accp**)

To set these tags, do the following:

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select an environment you are monitoring with Splunk. 
3. Open the **Tags** tab.
4. Add a **Tag** – this is the string which is sent to Splunk as a tag.
5. **Restart** the application.

## 4 Additional Information{#additional-info}

### 4.1 Location of Logs

Once the Mendix application is redeployed/restarted, the runtime application logs will appear on Splunk Cloud Platform under **Search & Reporting**.
In the search line specify: `source="http:your_token_name"` and click the search button.

### 4.2 Splunk Cloud Platform Issues

If you have any issues related to accessing Splunk Cloud Platform, please contact their support using the links on the [Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) site. You will need an Splunk Cloud Platform account to request support.

## 5 Read More

* [Metrics](/developerportal/operate/metrics/)
