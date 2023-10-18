---
title: "Environments"
url: /developerportal/deploy/environments/
weight: 5
description: "Lists the environments in which your app is deployed. Also the starting point for managing existing environments and further deployments."
tags: ["Deploy","App","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

You can use the **Environments** page to access information about your environments, deploy packages, manage certificates and access restrictions, and more.

The **Environments** page has the following tabs:

* **Deploy**
* **Custom Domains**
* **Access Restriction Profiles**
* **Permissions**
* **Services**
    
## 2 Deploy

In the **Deploy** tab, you can view information about your environments. You can also create, upload, delete, and deploy packages.

### 2.1 Deployment Package Repository{#package-repository}

The **Deployment Package Repository** section has an overview of all the available deployment packages, with the following details:

* **Deployment Package** name
* **Version** of the deployment package
* **Date** that the deployment package was created
* **Uploaded by** account
* **Expiry date** of the deployment package, if one is set

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments/deployment-package.png" alt="The Deployment Package Repository section" >}}

You can perform the following actions in this section:

* **Create Package From Teamserver** – select a branch to build the revision that it contains
* **Upload** – upload a deployment package from your local device
* **Delete**
* **Details**:
    * View the package size, description, build output, and an overview of the environments that are running the package
    * **Delete Package**
    * **Download** the package
* **Deploy** – transport the package from the Team Server to the selected environment

### 2.2 Environments

The **Environments** section has an overview of all the available environments. The contents of the **Environments** section differ based on whether or not your node supports flexible environments.

#### 2.2.1 Standard Environments

For standard plans, your node has production and acceptance environments. It can also include a test environment.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments/deploy-environments.png" alt="The Environments section for standard environments" >}}

The **Environments** section shows the following details:

* Environment name (for example, **Acceptance**)
* Environment status, indicated by the icon next to the environment name:
    * Green check mark – there are no alerts
    * Orange exclamation mark – there is at least one warning alert, but no critical alerts
    * Red cross – there is at least one critical alert
    
    {{% alert color="info" %}}The environment status is cached; there can be a delay of up to five minutes before the status icon displays a change of status. To see the details of the alerts, click **Alerts**. For more information, see [Alerts](/developerportal/operate/monitoring-application-health/).{{% /alert %}}
    
* **Name** of the deployment package (for example, Main line-1.0.0.20.mda)
* **Version** of the deployment package (for example, 1.0.0.20)
* **Runtime**, the Studio Pro version with which the app is built (for example, 7.6.0)
* **URL** of the app (for example, `https://mytestapp.mendixcloud.com`)

You can perform the following actions in this section:

* [Details](/developerportal/deploy/environments-details/) – view details of the environment
* **Transport to** – stage an environment to acceptance or production
* **Setup Studio Pro Deployment** – the [Technical Contact](/developerportal/general/app-roles/#technical-contact) can set the target environment to which apps are deployed from Studio Pro; for more information, see [Studio Pro Deployment Settings](/developerportal/deploy/studio-deployment-settings/)

#### 2.2.2 Flexible Environments {#flexible-environments}

If your Mendix license supports flexible environments, you can define the number and type of environments that you have. You must define at least two environments, one of which must be a production environment. The other environment (or environments) may be designated according to your requirements. For example, you can have a production environment and multiple staging environments if your deployment process requires it.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments/deploy-flex-environments.png" alt="The Environments section with flexible environments" >}}

For flexible environments, the **Environments** section shows the following details:

* Environment name (for example, **Acceptance**)
* **Prod** indicates whether the environment is a production environment; this is set when the environment is created
* Environment status, indicated by the icon next to the environment name:
    * Green check mark – there are no alerts
    * Orange exclamation mark – there is at least one warning alert, but no critical alerts
    * Red cross – there is at least one critical alert
    
    {{% alert color="info" %}}The environment status is cached; there can be a delay of up to five minutes before the status icon displays a change of status. To see the details of the alerts, click **Alerts**. For more information, see [Alerts](/developerportal/operate/monitoring-application-health/).{{% /alert %}}
    
* **Name** of the deployment package (for example, Main line-1.0.0.20.mda)
* **Version** of the deployment package (for example, 1.0.0.20)
* **Runtime**, the Studio Pro version with which the app is built (for example, 7.6.0)
* **Plan** for the environment; for more information, see [Environment Details](/developerportal/deploy/environments-details/)
* **URL** of the app (for example, `https://mytestapp.mendixcloud.com`)

You can perform the following actions in this section:

* [Details](/developerportal/deploy/environments-details/) – view the environment's details
* **Setup Studio Pro Deployment** – the [Technical Contact](/developerportal/general/app-roles/#technical-contact) can set the target environment to which apps will be deployed from Studio Pro; for more information, see [Studio Pro Deployment Settings](/developerportal/deploy/studio-deployment-settings/)
* **Search** – find a specific environment using the **Search** field
* Reorder environments - the [Technical Contact](/developerportal/general/app-roles/#technical-contact) can reorder the environments by dragging them in the list (for example, to group environments of the same type together):

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments/reorder-environments.gif" alt="Reordering environments in a list" >}}

    {{% alert color="info" %}}The **Transport to** button is not available when flexible environments are enabled. This is because you must choose your deployment target each time you deploy when you have flexible environments. To deploy, click **Deploy** in the [Deployment Package Repository](https://docs.mendix.com/developerportal/deploy/environments/#package-repository) section.{{% /alert %}}

### 2.3 Activity

In the **Activity** section, you can view a log of deployment activities performed on your environments.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments/activity.png" alt="Sample activity log" >}}

If you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can download a copy of the activity log by following these steps:

1. Click **Download to CSV**.
2. Select the period for which you want to download log entries. For **Custom Period**, you must enter a valid period using **Start Date** and **End Date**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments/download-activity-log.png" alt="Sample custom period with a validation error" >}}

3. Click **Download**.

{{% alert color="info" %}}
Operations performed on a customer's behalf through an authorized Mendix support ticket are not logged in the activity log.
{{% /alert %}}

## 3 Custom Domains

In the **Custom Domains** tab, you can manage your custom domain certificates at the application level. You can also see an overview of linked custom domains.

When you need your Mendix app to be accessible via your own URL (for example, `https://myapp.mycompany.com/`), you must provide a custom SSL/TLS certificate for your domain. This enables your Mendix app to be accessible via a secure connection. For more information, see [Custom Domains](/developerportal/deploy/custom-domains/).

## 4 Access Restriction Profiles{#asp}

In the **Access Restriction Profiles** tab, you can manage custom access restriction profiles. These profiles can combine IP range filters and client certificate verification, so that any match on either the IP range or the client certificate will grant access. You can apply access restriction profiles to path-based access restrictions in specific environments of the application.

For details on setting up access restriction profiles, see [Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

## 5 Permissions{#permissions}

In the **Permissions** tab, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) and other team members who have the **Manage Permissions** permission can manage various permissions to the environments for each team member. Team members who have a role with **Cloud Access** can view the permissions.

For details on managing node permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).

## 6 Services{#services}

In the **Services** tab, the Technical Contact can determine which custom services can be used in the app's environments.

### 6.1 Available Services

The custom services that are available on the app level, or the **Environments** page, are as follows:

* **Mendix Event Broker** – required to use [Mendix Business Events](/appstore/modules/business-events/) on Production apps

### 6.2 Enabling Custom Services

The Technical Contact can only see services that have been licensed for their company. If the Technical Contact cannot enable the service, this means that the service has previously been licensed, but the license has expired.

Team members who have a role with **Cloud Access** can see which services are enabled or disabled.

Once a service has been enabled for an app, Technical Contacts can selectively enable it for each environment. For more information, see the [Services](/developerportal/deploy/environments-details/#services) section of the *Environment Details* page.

## 7 Read More

* [Deploy and Manage](/developerportal/deploy/)
* [Environment Details](/developerportal/deploy/environments-details/)
* [How to Receive Environment Status Alerts](/developerportal/operate/receive-alerts/)
* [How to Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/)
