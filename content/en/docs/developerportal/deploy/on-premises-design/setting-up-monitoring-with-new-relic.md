---
title: "Monitoring with New Relic"
url: /developerportal/deploy/setting-up-monitoring-with-new-relic/
description: "How to install Mendix behind a load balancer for high availability"
weight: 30
tags: ["new relic", "on-premises", "monitoring", "setup"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/setting-up-monitoring-with-new-relic.pdf).
{{% /alert %}}

## 1 Introduction

When setting up a Mendix application on premises, you can set up advanced monitoring with New Relic. This works with both Windows and Linux deployments.

{{% alert color="warning" %}}
New Relic is currently in private beta, and thus not supported. We plan to offer full support for New Relic during 2022.
{{% /alert %}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

1. Set up a trial account with [New Relic](https://newrelic.com/).
2. Follow the steps in [Install the Java Agent](https://docs.newrelic.com/docs/agents/java-agent/installation/java-agent-manual-installation).
3. As noted in step 2, unzip the *newrelic.zip* file into a directory that the user of the Mendix process has access to (meaning, the user home directory).
4. Check the *newrelic.yml* file in the unzipped directory, and make sure you read through the settings and understand the security implications.
5. Follow the [Linux-](#linux) or [Windows](#windows)-specific steps below to complete the installation.

## 3 Linux-Specific Steps {#linux}

Add `-javaagent:/PATH/TO/NEWRELIC.JAR` to your java options in the *m2ee.yaml* file. Make sure to replace the path to the actual path of the *newrelic.jar*.

The configuration section in *m2ee.yaml* should look like this:

```
 javaopts: [
 "-Dfile.encoding=UTF-8", "-XX:MaxPermSize=64M", "-Xmx256M", "-Xms256M",
 "-Djava.io.tmpdir=/path/to/project/data/tmp",
 "-javaagent:/home/mendix-user/newrelic/newrelic.jar",
 ]
```

## 4 Windows-Specific Steps {#windows}

Add `-javaagent:/PATH/TO/NEWRELIC.JAR` to your Java arguments in the Windows Service Console:

{{< figure src="/attachments/developerportal/deploy/on-premises-design/setting-up-monitoring-with-new-relic/18580677.png" >}}

{{% alert color="info" %}}
After you restart the application, your data should show up in New Relic. This requires the application to send data to New Relic servers, so your firewalls should be configured to allow for this traffic.
{{% /alert %}}

## 5 Read More

* [Finding the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clearing Warning Messages in Mendix](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [Testing Web Services Using SoapUI](/howto/testing/testing-web-services-using-soapui/)
* [New Relic](https://github.com/mendix/cf-mendix-buildpack#new-relic) in the *cf-mendix-buildpack* repo on GitHub
