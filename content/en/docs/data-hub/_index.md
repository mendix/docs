---
title: "Data Hub Guide"
url: /data-hub/
description: "Describes Mendix Data Hub for finding and sharing enterprise data assets."
weight: 40
no_list: false
description_list: true
cascade:
    - space: "Data Hub Guide"
    - mendix_version: ""
tags: ["data hub", "data hub catalog", "data hub landscape", "external entities", "external users"]
aliases:
    - /data-hub/data-catalog/index.html
---

## 1 Introduction

Studio Pro [8.14](/releasenotes/studio-pro/8.14/) supports integration with the data available from the many applications in an organization. Collectively called *Data Hub*, this functionality enables reliable data sources to be located centrally from one point and for users to connect to them through it. 

## 2 Overview of Mendix Data Hub

Mendix Data Hub has components to enable the flexible sharing of datasets:

1. Apps and other software expose datasets in REST OData services. These are used with [external entities](/refguide/external-entities/). The data is stored in the respective source apps.
2. In Studio Pro, exposed OData services (or entity sets as they are named in Studio Pro) are automatically registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/) when your app is deployed. OData services from other applications can also be manually registered in the Data Hub Catalog.
3. Search in the Data Hub Catalog or **Data Hub** pane in Studio Pro to find shared data assets to use.
4. Drag and drop to consume datasets in Studio Pro.  
5. The consuming application directly connects to the source system (as defined in the published service metadata) to use the data associated with the consumed dataset.

## 3 Roles in Data Hub {#data-hub-roles}

Data Hub can be used by anyone with a Mendix license and a Data Hub license. See [User Roles](/data-hub/data-hub-catalog/manage-data-sources/user-roles/) for detailed information on user roles in the Data Hub Catalog.

## 4 Data Hub Licenses {#data-hub-licences}

There are two types of licenses for Mendix Data Hub: Data Hub Free and Data Hub Premium.

Contact your [Mendix Admin](/developerportal/control-center/#company) to find out what type of Data Hub license your organization has.

### 4.1 Data Hub Free Edition {#dh-free}

All Mendix users have access to the Data Hub Free edition. With this, you can discover datasets provided by apps in your organization through OData REST services. You can retrieve or edit up to a 1000 objects per application per day for each runtime instance when deployed.

#### 4.1.1 Limitations {#dh-free-limitations}

If users with a Data Hub Free license retrieve or edit more than 1000 objects per application per day for each runtime instance when deployed, you will get a [limitation error](#limitation-errors) when your applications tries to retrieve more data. The number of consumed objects per day is reset at midnight in the time zone of the Mendix Runtime scheduler (which can be defined in the [Scheduled Event Time Zone](/refguide/app-settings/#scheduled) of the **App Settings**).

{{% alert color="info" %}}
Apps running in development environments do not have this limitation.
{{% /alert %}}

#### 4.1.2 Limitation Errors {#limitation-errors}

Once the limit of a 1000 objects has been reached, two different statements are logged.

* On the `info` level, the following statement is logged when the limit is reached: `"Exceeded the daily limit. Retrieved $delta objects, which would increase the counter to $newCount (of max $max per day)."`
* On the `error` level, the following statement is logged when the limit is reached: `"The limit of $max objects has been reached."`

{{% alert color="warning" %}}
It is up to the application to communicate to its end-users that the daily limit has been reached. If this is not done, the end-user gets a message that an error occurred.
{{% /alert %}}

### 4.2 Data Hub Premium Edition {#dh-premium}

With the Data Hub Premium license, apps are not limited. Apps can retrieve and edit an unlimited number of objects using [external entities](/refguide/external-entities/).

### 4.3 Data Hub for Private Cloud or On-Premises {#dh-pc}

Licensed users of Mendix for [Private Cloud](/developerportal/deploy/private-cloud/) can use a Data Hub license to work with external entities. To learn more about working with Data Hub external entities on a private cloud, on-premises setup, or for local deployments, see [External Entities without Mendix Cloud](/data-hub/data-hub-without-mendix-cloud/).

## 5 Guide Categories
