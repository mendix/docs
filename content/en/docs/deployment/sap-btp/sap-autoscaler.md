---
title: "Application Autoscaler for SAP Business Technology Platform"
linktitle: "Application Autoscaler for SAP BTP"
url: /developerportal/deploy/sap-cloud-platform/sap-autoscaler/
weight: 47
description: "How to set up the SAP Autoscaler"
aliases:
    - /partners/sap/sap-autoscaler/
---

## Introduction

The application autoscaler service for [SAP Business Technology Platform (SAP BTP)](/developerportal/deploy/sap-cloud-platform/) enables applications to automatically increase or decrease the number of instances of your app. These changes can be based on a schedule, or based on the value of a metric.

For more information on the application autoscaler, see [Application Autoscaler Service](https://help.sap.com/docs/CSI/b651ed9a533d41339f05b12549d8d706/c5d349a5ea354971839b7922d13c04e4.html?q=application%20autoscaler%20service) document on the SAP Help Portal.

## Binding the Application Autoscaler{#binding}

The **autoscaler** service can be found on the [Services Tab](/developerportal/deploy/sap-cloud-platform/#binding-services) of the environment details page of your app's environment.

Selecting the **autoscaler** service expands the entry to allow you to enter more details about the service you wish to bind, namely the **Plan** and the **File** which contains the configuration.

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/autoscaler-service.png" alt="Autoscaler service on the environment details page" class="no-border" >}}

You need to specify the following:

* **Plan** – the plan you wish to use for the autoscaler, either *Lite* or *Standard*
* **File** – the file which contains the JSON to configure the autoscaler — more information, including the contents of the configuration file can be found in [Application Autoscaler Service](https://help.sap.com/docs/application-autoscaler/application-autoscaler/defining-scaling-policy) on the SAP Help Portal

Having provided this information, you can click **Connect Services** to connect the autoscaler to your app.

The structure of the configuration file can get quite complex, as described in the documentation of SAP website. Mendix therefore provides you with a tool to help you create the correct configuration.

Click **Configurator** to start the **Autoscaler Configurator**.

## Using the Autoscaler Configurator

The **Autoscaler Configurator** provides a user-friendly interface to create the JSON file required to configure the application autoscaler.

{{% alert color="info" %}}
The **Configurator** only creates a JSON file from scratch. It does not have access to your existing autoscaler settings on [SAP BTP](/developerportal/deploy/sap-cloud-platform/), and you cannot import an existing JSON files.
{{% /alert %}}

There are three options available:

* Scheduled Scaling – the app is scaled according to a fixed schedule
* Dynamic Scaling – the app is scaled depending on the value of a metric
* Custom – a combination of both scheduled and dynamic scaling

The metrics you can use to trigger dynamic scaling are as follows:

* Memory consumed – monitors memory consumption in megabytes (memoryconsumed) or in percentage (memoryutil)
* CPU utilization in percentage
* Response time – monitors response time in milliseconds
* Throughput – monitors requests per seconds (RPS)

{{% alert color="info" %}}
The **Configurator** does not support adding custom metrics as triggers.
{{% /alert %}}

Open the **Autoscaler Configurator** by clicking the **Configurator** next to the autoscaler service in the [Services tab](/developerportal/deploy/sap-cloud-platform/) of the Environment Details.

You first need to decide the sort of scaling you want to apply.

For **Scaling**, select one of the following:

* Schedule-based scaling – scaling based on a schedule, see the [Scheduled Scaling](#schedule) section below
* Dynamic scaling – scaling based on the values of metrics, see [Dynamic Scaling](#dynamic) section below
* Custom – you need to set up both [Dynamic Scaling](#dynamic) and [Scheduled Scaling](#schedule) as described in the sections below

You then need to set up the requested type of scaling. The sections below show a summary of the required information. For more information, see the [Application Autoscaler Service](https://help.sap.com/docs/CSI/b651ed9a533d41339f05b12549d8d706/c5d349a5ea354971839b7922d13c04e4.html?q=application%20autoscaler%20service) documentation on the SAP Help Portal.

When you have added all the rules, you can do one of the following:

* Click **Upload Configuration To Service** to upload your autoscaler configuration directly to the autoscaler service.
* Click **Download Configuration File** to create a file containing the correct JSON for your autoscaler configuration; you can then upload this file as the configuration of your autoscaler service.

### Scheduled Scaling{#schedule}

{{% alert color="warning" %}}
Do not attempt to enter overlapping schedules as it causes the scaling to fail.
{{% /alert %}}

First, you need to choose whether to set up a [Recurring Schedule](#recurring) or a schedule based on a [Specific Date](#specific). You can also choose to set up a **Custom** combination of the two.

For all the types of schedule you need to set the following:

* **Min Instances** – minimum number of application instances that always run
* **Max Instances** – maximum number of application instances that can be provisioned as a part of the application scaling
* **Timezone** – the time zone in which to run the schedule

{{% alert color="info" %}}
For custom schedules, you can see these values on the screen more than once, but changing them in one place will automatically set them in the others.
{{% /alert %}}

Other information will depend on the type of schedule you are making. You can add multiple rules and all the rules you have already set up in the **Configurator** will be displayed. For more information, see the sections below.

#### Specific Date{#specific}

Click **Add rule** or **Add another rule** (if rules already exist) to add a new rule.

You need to enter the information requested on the following screen. A tooltip explains what needs to be entered for each value:

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/add-specific-date.png" alt="Add specific date rule dialog" class="no-border" >}}

Click **Add Rule** to add this rule.

The new rule, and any existing rules will be shown in the **Configurator** as shown below.

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/specific-date.png" alt="Existing specific date rule" class="no-border" >}}

You can collapse the view of existing rule by clicking **-** and expand it again with the **+**.
You can also edit an existing rule by clicking **Edit** and delete an existing rule by clicking **Delete**.

#### Recurring Schedule{#recurring}

Click **Add rule** or **Add another rule** (if rules already exist) to add a new rule.

Select whether you want to add a rule for days of the week (for example, every Monday) or days of the month (for example, on the fourth day of every month). You can change this **Schedule Type** on the next screen if necessary.

You need to enter the information requested on the following screen. A tooltip explains what needs to be entered for each value:

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/add-recurring-date.png" alt="Add recurring date rule dialog" class="no-border" >}}

Click **Add Day** to add the days to which this recurring schedule applies. If it is a rule for days of the week, day one is always Monday irrespective of any local conventions. You can add several days by using **Add Day** multiple times.

Click **Add Rule** to add this rule.

The new rule and any existing rules are shown in the configurator as shown below.

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/recurring-date.png" alt="Existing recurring date rule" class="no-border" >}}

You can collapse the view of existing rule by clicking **-** and expand it again with the **+**.
You can also edit an existing rule by clicking **Edit** and delete an existing rule by clicking **Delete**.

### Dynamic Scaling{#dynamic}

First, you need to set the following:

* **Min Instances** – minimum number of the application instances that always run
* **Max Instances** – maximum number of the application instances that can be provisioned as a part of the application scaling

{{% alert color="info" %}}
For custom schedules, you can see these values on the screen more than once, but changing them in one place will automatically set them in the others.
{{% /alert %}}

Click **Add rule** or **Add another rule** (if rules already exist) to add a new rule.

You need to enter the information requested on the following screen. A tooltip explains what needs to be entered for each value:

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/add-dynamic.png" alt="Add recurring date rule dialog" class="no-border" >}}

Click **Add Rule** to add this rule.

The new rule, and any existing rules are shown in the configurator as shown below.

{{< figure src="/attachments/deployment/sap-btp/sap-autoscaler/dynamic.png" alt="Existing recurring date rule" class="no-border" >}}

You can collapse the view of existing rule by clicking **-** and expand it again with the **+**.
You can also edit an existing rule by clicking **Edit** and delete an existing rule by clicking **Delete**.
