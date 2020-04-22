---
title: "Application Autoscaler for SAP Cloud Platform"
category: "SAP"
menu_order: 47
description: "How to set up the SAP Autoscaler"
tags: ["SAP", "Autoscaler"]
---

## 1 Introduction

The **Application Autoscaler** service for SAP Cloud Platform enables applications to automatically increase or decrease the number of instances of your app. This can be based on a schedule, or based on the value of a metric.

For more information on the Application AutoScaler see [Application Autoscaler Service](https://help.sap.com/viewer/7472b7d13d5d4862b2b06a730a2df086/Cloud/en-US/4ad999a0be664160a08514ba4ce6430c.html) on the *SAP Help Portal*.

## 2 Binding the Application Autoscaler

The autoscaler service can be found on the [services tab](/developerportal/deploy-sap-cloud-platform#binding-services) of the environment details page of your app's environment.

Selecting the autoscaler service will expand the entry to allow you to enter more details about the service you wish to bind, namely the **Plan** and the **File** which contains the configuration.

![Autoscaler service on the environment details page](attachments/sap-autoscaler/autoscaler-service.png)

You will need to specify the following:

* **Plan** – the plan you wish to use for the autoscaler, either *Lite* or *Standard*
* **File** – the file which contains the JSON to configure the autoscaler — more information, including the contents of the configuration file can be found in [Application Autoscaler Service](https://help.sap.com/viewer/7472b7d13d5d4862b2b06a730a2df086/Cloud/en-US/4ad999a0be664160a08514ba4ce6430c.html) on the *SAP Help Portal*

Having provided this information, you can click **Connect Services** to connect the autoscaler to your app.

{{% alert type="info" %}}
You must restart your app to bind the autoscaler to your app.
{{% /alert %}}

You will see from the documentation on the SAP website that the structure of the configuration file can get quite complex. Mendix therefore provides you with a tool to help you create the correct configuration.

Click **Configurator** to start the **Autoscaler Configurator**.

## 3 Using the Autoscaler Configurator

The **autoscaler configurator** provide a user friendly interface to create the JSON required to configure the application autoscaler. There three options available:

* Scheduled Scaling – the app is scaled according to a fixed schedule
* Dynamic Scaling – the app is scaled depending on the value of a metric
* Custom – a combination of both scheduled and dynamic scaling

Open the autoscaler configurator by clicking **Configurator** next to the autoscaler service in the Services tab of Environment Details.

You will first need to decide the sort of scaling you want to apply.

For **Scaling** select one of:

* Schedule-based scaling – scaling based on a schedule, see [Scheduled Scaling](#schedule), below
* Dynamic scaling – scaling based on the values of metrics, see [Dynamic Scaling](#dynamic), below
* Custom – you will need to set up both [Dynamic Scaling](#dynamic) and [Scheduled Scaling](#schedule) as described in the sections below

## 3.2 Scheduled Scaling{#schedule}

{{% alert type="warning" %}}
Do not attempt to enter overlapping schedules as this will cause the scaling to fail.
{{% /alert %}}

Firstly you need to choose whether to set up a [Recurring Schedule](#recurring) or a schedule based on a [Specific Date](#specific). You can also choose to set up a **Custom** combination of the two.

For all the types of schedule you will need to set the following:

* **Min Instances** – minimum number of application instances that always run
* **Max Instances** – maximum number of application instances that can be provisioned as part of application scaling

{{% alert type="info" %}}
For custom schedules you will see these values on the screen twice, but changing them in one place will automatically set them in the other.
{{% /alert %}}

### 3.2.1 Recurring Schedule{#recurring}




### 3.2.2 Specific Date{#specific}



## 3.3 Dynamic Scaling{#dynamic}
