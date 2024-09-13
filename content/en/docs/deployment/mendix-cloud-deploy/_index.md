---
title: "Mendix Cloud"
url: /developerportal/deploy/mendix-cloud-deploy/
weight: 8
description: "Describes what Mendix Cloud is."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #plans, below, is mapped from Control Center within the Mendix Portal.
---

## Introduction

Mendix Cloud is the default deployment option for Mendix applications. It is a public cloud service for Mendix applications, with infrastructure built and maintained by Mendix and built on top of Amazon Web Services (AWS). Mendix Cloud is optimized to run Mendix applications, is available in multiple regions around the globe, and comes with high availability options.

There are several options for deployment with Mendix Cloud:

* [Mendix Free](https://www.mendix.com/pricing/start-for-free/) – If you are new to the Mendix community and would like to create, deploy, and share your own app, you can do so for free using Mendix's limited Free App environment. Note that Free Apps do not support complex or large applications, only run for a couple of hours before shutting down, cannot be scaled, and provide limited operational information.
* [Mendix Cloud with licensed nodes](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-features/) – With a license, you can take advantage of Mendix Cloud's full features, including deep insights, alerting, high availability, and backups.
* [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-overview/#mendix-cloud-vpc) – Organizations can also have their own Mendix Cloud. Mendix Cloud Dedicated is a single-tenant instance of the public Mendix Cloud, running the apps of only one organization.

### Free App {#free-app}

Free Apps make it possible to start creating and deploying apps with Mendix for free. Free Apps have several limitations compared to licensed apps. The main limitations are summarized in the table below:

| Feature | Free App | Licensed App |
| ------- | -------- | ------------ |
| Number of users | Unlimited users for regular Free Apps; six concurrent users for an unlicensed app running on another cloud platform (such as SAP BTP) | Depends on your [pricing plan](#plans) |
| Sleep mode | Goes into sleep mode after about an hour of inactivity and automatically resumes when a user accesses it; all your data is retained while the app is in sleep mode | Does not have a sleep mode |
| Disk storage | 0.5 GiB Database and 1 GiB Files | Depends on your pricing plan |
| App vCPUs | 0.5 | Depends on your pricing plan |
| Scheduled events | Are not run | Are run and can be configured from the Mendix Portal |
| Environments | Single environment in Mendix Cloud | A node in the cloud that has one or more environments, for example, production, acceptance, and test |
| Deployment | Can only be deployed to the cloud from Mendix Studio Pro | Can be deployed from Mendix Studio Pro, from the Mendix Portal, or through an API |
| Custom domains | Not available | Can be configured from the Mendix Portal |
| Access restriction profiles | Not available | Can be configured from the Mendix Portal |
| Client certificates | Not available | Can be configured from the Mendix Portal |
| Starting and stopping your app manually | Not available | Available in the Mendix Portal |
| Constants | Defined in Studio Pro | Configurable through environment variables in the Mendix Portal |
| Runtime settings | Not available | Configurable through runtime and settings in the Mendix Portal |
| Scalability | Only one instance and a fixed amount (1 GiB) of memory | Configurable in the Mendix Portal |
| Metrics, alerts, and log levels | Not available | Available |
| Historic app logs | Not available; only live logs are available | Available |
| Backups | Performed daily and cannot be triggered manually; stored for up to two weeks | Performed daily and can also be created manually; kept for up to one year, depending on your plan |
| Support | No support | Depends on your license option |

#### Sleep Mode

As noted in the table above, a Free App goes into sleep mode after about an hour of inactivity. If you access the app while it is inactive, it displays the following message: 

{{< figure src="/attachments/deployment/mendix-cloud-deploy/appresumed.png" alt="A Resuming app message" width=60% class="no-border" >}}

If, after a couple of minutes, your app does not wake up, contact [Mendix Support](https://support.mendix.com).

You can upgrade a Free App to a licensed app running on a node in Mendix Cloud. For more information, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/).

#### Free Apps Archiving {#free-apps-archival}

If a Free App has been in sleep mode for three months or longer, it may be archived. For Free Apps that are going to be archived, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) is informed two weeks beforehand. Upon archiving, the project and model are retained, but the running app, database, and files for the Free App are deleted.

There are two ways to prevent your Free App from being archived:

* Visit the Free App
* Deploy a new version of your app to your Free App environment

### Licensed App

A licensed app runs on a node with at least two environments: production and acceptance. If required, you can also add a test environment or use [Flexible Environments](#flexible-environments). Your licensed app is linked to a node and can be deployed to any of these environments. It is possible to specify different [resource packs](#resource-pack) for each of these environments, but Mendix recommends that you make your production and acceptance environments the same size.

{{% alert color="info" %}}
Each environment can only run a single version of an app. Additionally, all the environments of a node should be used to run versions of the same app that is linked to the node.
{{% /alert %}}

#### Flexible Environments {#flexible-environments}

If the standard environments that you get with a licensed app do not meet your requirements, you can request a Mendix Cloud node with Flexible Environments. With Flexible Environments, you can specify how many environments you want in your node. You can also decide what they should be called.

### Database

Apps deployed to Mendix Cloud are configured to use a PostgreSQL database. It is not possible to configure your app to use an alternative database if it is deployed to Mendix Cloud.

If you need to use a different database, consider deploying your app to a different platform. For more information, see [Deploying Apps](/deployment/).

### URLs and Ports

Apps that run on Mendix Cloud are automatically assigned their own URLs. The format of the URL depends on the license and environment type, and can be one of the following:

| License Type | Environment | URL Format | Example URL |
| ------------ | ----------- | ---------- | ----------- |
| Licensed app | Production  | Depends on the region:<br /> `{app-name}.mendixcloud.com`<br />or<br />`{app-name}.apps.{region}.mendixcloud.com` | `myappname.mendixcloud.com`, <br /> `myappname.apps.ap-3a.mendixcloud.com` |
| Licensed app | Test, acceptance, flexible environments | Depends on the region:<br /> `{app-name}-{environment-type}.mendixcloud.com`<br />or<br />`{app-name}-{environment-type}.apps.{region}.mendixcloud.com` | `myappname-accp.mendixcloud.com`, <br /> `myappname-accp.apps.ap-3a.mendixcloud.com` |
| Free App     | N/A         | `{app-name}-sandbox.mxapps.io`<br />or<br />`{app-name}.mxapps.io` | `myfreeappname.mxapps.io` |

{{% alert color="info" %}}Licensed apps run in Cloud Foundry clusters deployed on AWS. You can select the region for your app, but not for the cluster. Note that there can be multiple clusters in a region, and the URL of an app on some clusters in a region contains `apps.{region}`.{{% /alert %}}

For licensed apps, you can customize a URL by adding [custom domains](/developerportal/deploy/custom-domains/).

Mendix apps cannot use custom ports. They communicate on the standard HTTP and HTTPS ports (`80` and `443`); connections to HTTP (`80`) are redirected to HTTPS (`443`).

### Number of End-Users for Licensed Apps

The number of end-users supported for your licensed app depends on your [pricing plan](#plans). End-users of your app are classified as either internal or external. You need to report this for licensing purposes, using either the [USAGE_METRICS_EMAIL_FIELDS custom variable](/developerportal/deploy/environments-details/#custom-environment-variables) (if you are using email domains to distinguish between end-users) or by [populating the user type](/howto/monitoring-troubleshooting/populate-user-type/) for each end-user of your app. Only end-users whose Mendix accounts are marked as **Active** are counted towards the number of end-users of the app.

## Mendix Pricing Plans {#plans}

Mendix licenses are sold as part of plans. Plans consist of the following items:

* A subscription to a plan
* A cloud resource pack, which specifies the resources available to your app environment
* Additional resources, such as fallback environments

### Plans

The following plans are available:

* Free
* Basic
* Standard
* Premium
* Premium Plus

For more information, see [Pricing](https://www.mendix.com/pricing/).

### Cloud Resource Packs {#resource-pack}

Mendix environments are sized by reference to cloud resource packs. These resources are used for application runtime as well as anything else required to run your application, such as agents for any third-party integrations that you have added. The table below shows the current cloud resource packs for Standard, Premium, and Premium Plus plans. Resources for the Basic plan are fixed as described in [Mendix Basic Package](/developerportal/deploy/basic-package/).

If you have a Standard, Premium, or Premium Plus plan, you can redeem virtual credits known as cloud credits to purchase cloud resource packs on the Mendix Platform. For more information about how this works, see [Entitlements](/control-center/entitlements/).

The technical details for the cloud resource packs are listed below.

| Pack                                                 | App RAM | App vCPU | DB RAM  | DB vCPU | DB Storage | File Storage |
| ---------------------------------------------------- | ------- | -------- | ------- | ------- | ---------- | ------------ |
| XS21                                                 | 1 GiB   | 0.25     | 1 GiB   | 2       | 5 GiB      | 10 GiB       |
| S21,<br>S21 Premium                                  | 2 GiB   | 0.5      | 2 GiB   | 2       | 10 GiB     | 20 GiB       |
| M21,<br>M21 Premium                                  | 4 GiB   | 1        | 4 GiB   | 2       | 20 GiB     | 40 GiB       |
| L21,<br>L21 Premium                                  | 8 GiB   | 2        | 8 GiB   | 2       | 40 GiB     | 80 GiB       |
| XL21,<br>XL21 Premium,<br>XL21 Premium Plus          | 16 GiB  | 4        | 16 GiB  | 4       | 80 GiB     | 160 GiB      |
| XXL21,<br>XXL21 Premium,<br>XXL21 Premium Plus       | 32 GiB  | 8        | 32 GiB  | 4       | 160 GiB    | 320 GiB      |
| XXXL21,<br>XXXL21 Premium,<br>XXXL21 Premium Plus    | 64 GiB  | 16       | 64 GiB  | 8       | 320 GiB    | 640 GiB      |
| XXXXL21,<br>XXXXL21 Premium,<br>XXXXL21 Premium Plus | 128 GiB | 32       | 128 GiB | 16      | 640 GiB    | 1280 GiB     |

{{% alert color="info" %}}Premium plans provide multi-AZ fallback, and Premium Plus plans provide multi-region fallback. For more details, see [Additional Resources](#additional-resources), below.{{% /alert %}}

The legacy cloud resource packs listed below are still being used but are not available to new customers. 

| Legacy Pack | App RAM | App vCPU | DB RAM | DB vCPU | DB Storage | File Storage |
| ----------- | ------- | -------- | ------ | ------- | ---------- | ------------ |
| XS20        | 1 GiB   |          | 1 GiB  |         | 5 GiB      | 10 GiB       |
| S20         | 2 GiB   | 0.5      | 2 GiB  | 1       | 10 GiB     | 20 GiB       |
| M20         | 4 GiB   | 1        | 4 GiB  | 1       | 20 GiB     | 40 GiB       |
| L20         | 8 GiB   | 2        | 8 GiB  | 1       | 40 GiB     | 80 GiB       |
| XL20        | 16 GiB  | 4        | 16 GiB | 2       | 80 GiB     | 160 GiB      |
| XXL20       | 32 GiB  | 8        | 32 GiB | 2       | 160 GiB    | 320 GiB      |
| Strato      | 2 GiB   | 0.5      | 1 GiB  | 0.5     | 5 GiB      | 20 GiB       |
| Meso        | 2 GiB   | 0.5      | 8 GiB  | 2       | 20 GiB     | 20 GiB       |
| Iono        | 8 GiB   | 2        | 8 GiB  | 2       | 20 GiB     | 80 GiB       |
| Magneto     | 16 GiB  | 4        | 16 GiB | 4       | 80 GiB     | 320 GiB      |
| S           | 1 GiB   | 0.5      | 1 GiB  | 0.5     | 5 GiB      | 5 GiB        |
| M           | 2 GiB   | 0.5      | 2 GiB  | 1       | 10 GiB     | 10 GiB       |
| L           | 4 GiB   | 1        | 4 GiB  | 2       | 20 GiB     | 20 GiB       |
| XL          | 8 GiB   | 2        | 8 GiB  | 2       | 40 GiB     | 40 GiB       |
| XXL         | 16 GiB  | 4        | 16 GiB | 4       | 80 GiB     | 80 GiB       |

{{% alert color="info" %}}
You can have a pack using a fraction of a vCPU. This is because several environments can run, completely isolated from each other, on a single virtual machine.
{{% /alert %}}

### Additional Resources{#additional-resources}

For Premium customers using a Premium resource pack, there are additional features available for apps deployed to Mendix Cloud. There are also additional ways to deploy Mendix apps.

#### High Availability and Fallback {#fallback}

Premium plans come with High Availability and Fallback out of the box. This ensures that copies of your app are spread across multiple availability zones (AZs). If there is a problem with a specific AZ, copies of your app running on other AZs remain available.

With a Premium plan, your app can be [horizontally scaled](/developerportal/deploy/scale-environment/). To fully benefit from high availability, your app needs at least two instances so that it is running in more than one AZ. This is important for critical production apps, which cannot afford to have downtime during an AZ outage in the AWS data center.

Fallback ensures that the data in your database is automatically copied to a database in a second AZ. This ensures that all your data is still available to your app if there is an issue with the primary availability zone and app instances have to be started in the second AZ. 

The connections between AZs are low latency. However, the implementation of these features means that your monitoring may indicate that apps deployed to Mendix Cloud under a Premium plan suffer an additional latency of a few milliseconds compared with apps deployed using a Standard plan. For a well-designed app, this difference is not noticeable to end-users. 

#### Regional Fallback{#regional-fallback}

You can also purchase a Premium Plus plan, which provides all the features of the Premium plan, with the addition of Regional Fallback.

With Regional Fallback, a copy of your database and FileDocuments is maintained in a completely separate region. For example, if your app normally runs in us-east-1, a copy of your data is made in us-west-2. If all the AZs in the primary region become unavailable, you can then choose to run your app temporarily in the secondary region with the data that has been copied to that region. Once the primary region is back online, you can then revert your app to running in the primary region.

Because this is designed for a catastrophic regional failure, there are some limitations to your normal operations. For example, you cannot deploy a new version of the app while it is running in the secondary region. The decision to switch to the secondary region is completely under your control.

#### On-Premises and Private Cloud

If you want to deploy your Mendix apps to other environments, you can add these to your Mendix plan. For example, you can choose to deploy to [SAP BTP](/developerportal/deploy/sap-cloud-platform/). You can also choose to deploy to your own cloud using [Mendix for Private Cloud](/developerportal/deploy/private-cloud/).

## Read More

* [Deploying an App to Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/)
* [Custom Domains](/developerportal/deploy/custom-domains/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [App Roles](/developerportal/general/app-roles/)
