---
title: "SAP BTP의 Mendix 앱 환경 모니터링"
url: /developerportal/deploy/sap-cloud-platform/sap-monitoring/
weight: 19
description: "SAP BTP에서 실행되는 Mendix 앱의 로깅 및 모니터링에 대한 참조 정보를 제공합니다."
---

## 소개

For apps deployed to SAP Business Technology Platform (SAP BTP), you can see the logs using Kibana.

{{% alert color="info" %}}
To make full use of Kibana and see proper mapping of the log level, multi-line log messages, and stack traces, you need to configure the *SAP Logger Connector* in your app. For more information, see [SAP Logger Connector](/appstore/modules/sap/sap-logger/).
{{% /alert %}}

## Configuring Kibana

For information about configuring and using Kibana, see the [Kibana User Guide](https://www.elastic.co/guide/en/kibana/current/index.html). For more details on how Kibana is integrated with SAP BTP, see [Application Logging for the Cloud Foundry Environment](https://help.sap.com/viewer/ee8e8a203e024bbb8c8c2d03fce527dc/Cloud/en-US/68454d44ad41458788959485a24305e2.html).

## Viewing the Logs

The **Logs** page in your Mendix app shows all the environments for this app. Click the **Logs** button to open the log in Kibana.

{{< figure src="/attachments/deployment/sap-btp/sap-monitoring/logs.png" alt="Logs Page SAP" >}}

You may be asked to provide your SAP credentials before you can see the log in Kibana.

To view the logs of an environment using the SAP Cloud Logging service, click **Show Credentials**, copy the credentials, then click **Logs** and paste them to open the environment's logs in a new window. 

## 문제 해결

If you encounter any issues while using the configuring the logging service, use the following troubleshooting tips to help you solve them.

### Application Logging Service Not Bound to App

The **Application Logging (application-logs)** service is not bound to your app automatically.

#### Cause

This issue may occur if your app is deployed to an environment created before October 22, 2018.

#### 해결 방법

To resolve this issue, perform one of the following actions:

* Create a new environment and deploy your app there.
* Bind the service to your existing app by doing the following steps:

    1. Go to the SAP BTP cockpit.
    2. Go to the space for your environment.
    3. Find **Application Logging** in the Service Marketplace.
    4. Go to **Instances**.
    5. Create a **New Instance** and follow the instructions, ensuring that you bind it to your app.
    6. Restart the app.
