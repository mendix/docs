---
title: "Environments and Deployment (New UI)"
url: /developerportal/deploy/environments-redesign/
beta: true
weight: 8
description: "Describes the new Environments page and deployment flow"
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

{{% alert color="info" %}}
While this feature is in Beta, you can use the **New Theme** toggle to switch between the new UI and the [legacy UI](/developerportal/deploy/environments/). For apps running on Kubernetes, the new UI is displayed by default and cannot be toggled off. 
{{% /alert %}}

## Introduction

You can use the **Environments** page to access information about your environments, to deploy packages, to manage certificates and access restrictions, and more.  

To access this page, go to [Apps](https://sprintr.home.mendix.com/), and click **Environments** on your app. You can also directly visit the **Environments** page using `https://cloud.home.mendix.com/link/deploy/`*`APP_ID`*, with *`APP_ID`* replaced by your [project ID](/developerportal/deploy/environments-details/#general-tab).

## Available Tabs

The **Environments** page has the following tabs:

* **Overview**
* **Deployment Packages**
* **Permissions**
* **Activity**
    
### Overview Tab{#overview-tab}

On the **Overview** tab, you can view [information](#environment-information) about and perform [actions](#environment-actions) on your environments.    

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/overview-tab.png" alt="" >}}

#### Environment Information{#environment-information}

The most recent deployment package is shown in a banner at the top of the page, along with a button to deploy it.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/deploy_mda.png" alt="" >}}

These are the details you can see on the **Overview** tab for each environment:

* The environment's name
* Whether this is the Studio Pro Target ({{< icon name="mendix-browser" >}}) – This is displayed if the environment is the designated Studio Pro target. For more information, see [Studio Pro Deployment Settings](/developerportal/deploy/studio-deployment-settings/).
* Licensed badge – This is displayed if the environment is licensed.
* The environment's status:
    * {{< icon name="checkmark-circle-filled" color="green" >}} – The application in this environment is running.
    * {{< icon name="subtract-circle-filled" color="gray" >}} – No application has been started yet in this environment, or the application has been turned off.
    * {{< icon name="alert-circle-filled" color="yellow" >}} – The application in this environment is experiencing some difficulties. Check the alerts page or logs for more information.
    * {{< icon name="remove-circle-filled" color="red" >}} – The application in this environment is unstable and probably not usable anymore.
* The date and time the app was started, if it is running. This is set in the user's time zone.
* The version of the deployment package
* The name of the deployment package

##### Environment Details

To view more information about each environment and the deployment package it is running, use the **Expand** ({{< icon name="chevron-down" >}}) toggle on the environment. 

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/environment-expanded.png" alt="" >}}

These are the additional details you can see about each environment:

* The environment ID
* The deployment region
* The [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack)
* The scaling configuration.

These are the details you can see about the deployment package:

* The package name
* The package version
* The package runtime 

#### Environment Actions{#environment-actions}

These are the actions you can perform on your environments:

* **Deploy** ({{< icon name="deploy" >}}) – Launch the [Deploy wizard](#deploy-wizard), where you can configure and start a new deployment for the selected environment.
* **View Details** ({{< icon name="notes-paper-edit" >}}) – Access the [Environment Details](/developerportal/deploy/environments-details/) page.
* **View App** {{< icon name="external" >}} – Launch the app in a new browser tab.
* **More Options** ({{< icon name="three-dots-menu-horizontal" >}}):
    * **Restart** – Stop and restart the running app. Restarting your app is required for applying new constant values or scheduled events to the environment.
    * **Start** – Start a stopped app.
    * **Live Log** – Display a live log for your app. This option is identical to the **View Live Log** button on the [Logs](/developerportal/operate/logs/) page.
    * **Debugger Info** – Display the settings needed to connect the debugger in Studio Pro to your app. For more information on debugging in the cloud, see [How To Debug Microflows Remotely](/refguide/debug-microflows-remotely/).
    * **Running Now** – Monitor all actions that are currently running in your environment. For more information, see [Running Now](/developerportal/deploy/mxcloud-runningnow/).
    * **Logged in Users** – Display all users who are logged in to your app.
    * **Stop** – Stop the app.
* **Scale** – [Scale an environment](/developerportal/deploy/scale-environment/). When clicked, it opens the **Change Scaling** wizard.    
  
  {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/change-scaling.png" >}} 
* **Promote** – Promote a package to another environment. When clicked, it opens the **Promote** wizard.    
  
  {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/promote-dialog.png" >}}

### Deployment Packages Tab{#deployment-packages-tab}

On the **Deployment Packages** tab, you can view information about and perform actions on your deployment packages.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/deployment-packages-tab.png" alt="" >}}

#### Deployment Package Information

The table contains the following details for each deployment package:

* The deployment status
* The deployment package name
* The deployment label (only displayed for packages that are deployed)
* The version of the deployment package
* The date when the deployment package was uploaded
* The uploader account
* The expiry date of the deployment package, if one is set. Packages are set to expire and be deleted within 15 days, unless they are deployed before that date. Expiry dates apply only to packages that do not meet either of these criteria:
    * Deployed packages do not expire.  
    * Out of the non-deployed packages, the five most recently deployed packages do not expire. 

#### Deployment Package Actions

You can perform the following actions on this tab:

* Use the **Search** field to search the deployment packages by name or version.
* Click **Upload a Package** to upload a deployment package from your local device.
* Click **Create a Package** to create a deployment package based on a specific branch.
* See information and perform actions on the existing deployment packages. 
* Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) on a package to do the following:

    * View details, including the package size, description, build output, and an overview of the environments that are running the package.
    * Download the package.
    * Delete the package.

##### Creating a Package {#create-package-wizard}

The **Create a Package** wizard walks you through the steps for creating deployment packages:

1. On the [Deployment Packages tab](#deployment-packages-tab), click **Create a Package**. This launches the **Create a Package** wizard.
2. On the **Select Branch** tab, select the branch on which to base the build.
3. On the **Select Revision** tab, select the branch revision on which to base the package.
4. On the **Choose a Tag** tab, specify the version tag. This includes the major, minor, and patch version numbers.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/3-choose-tag.png" alt="" >}}

5. Click **Build this Revision**.

##### Uploading a Package

Click **Upload a Package** on the **Deployment Packages** tab to select an existing package from your computer.

##### Deploying a Package {#deploy-wizard}

Follow these steps to deploy packages to selected environments using the **Deploy** or **Promote** wizard:

1. Launch the wizard by choosing one of the following options:
    * Select an environment to which you want to deploy a package by clicking the **Deploy** ({{< icon name="deploy" >}}) icon on the **Overview** tab.
    * Select a package that you want to deploy by clicking the **Deploy** ({{< icon name="deploy" >}}) icon on the **Deployment Packages** tab, or by clicking **Promote** by a package name on the **Overview** tab.
2. Perform one of the following actions, depending on whether you selected the package or the environment first:
    * If you launched the wizard by selecting an environment, the first screen of the wizard is the **Select Package** tab. Use it to select a package from the repository.
    * If you launched the wizard by selecting a package, the first screen of the wizard is the **Select Environment** tab. Use it to select the target environment for your package.
3. On the **Configure Environment** tab, review the new constant values, and adjust them as required.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/2-configure-environment.png" alt="" >}}

4. On the **Backup** tab, choose if you want to back up your app before deploying the new package. The app is unavailable while the backup runs.
5. On the **Deploy** tab, review the deployment settings:
    1. To see an overview of the configuration for this deployment, click **View Summary**. This summary displays the selected package, selected backup option, and any changed constants or scheduled events.
    
        {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/deployment-summary.png" alt="" >}}

    2. Review this summary, then click **Deploy Now**.

### Permissions Tab{#permissions-tab}

On the **Permissions** tab, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) and other team members who have **Manage Permissions** enabled can manage various environment permissions for each team member. Team members who have a role with **Cloud Access** can view the permissions.

For details on managing node permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/permissions-tab.png" alt="" >}}

### Activity Tab{#activity-tab}

On the **Activity** tab, you can view a log of deployment, backup, and permission activities performed on your environments.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/activity-tab.png" alt="" >}}

{{% alert color="info" %}}
Operations performed on a customer's behalf through an authorized Mendix Support ticket are not logged in the activity log.
{{% /alert %}}

If you are the Technical Contact, you can download a copy of the activity log by following these steps:

1. Click **Download to CSV**. This button is only visible if you are the Technical Contact.
2. Select the period for which you want to download log entries.
3. Click **Download**.

## Cloud Settings{#cloud-settings}

If you click **Cloud Settings** ({{< icon name="settings-slider-1" >}}) from any tab, you can adjust custom domains, access restriction profiles, and services.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/manage-cloud-settings.png" alt="" >}}

### Custom Domains

On the **Custom Domains** tab, you can manage your custom domain certificates at the application level, and see an overview of linked custom domains.

When you need your Mendix app to be accessible via your own URL (for example, `https://myapp.mycompany.com/`), you must provide a custom SSL/TLS certificate for your domain. This enables your Mendix app to be accessible via a secure connection. For more information, see [Custom Domains](/developerportal/deploy/custom-domains/).

### Access Restriction Profiles

On the **Access Restriction Profiles** tab, you can manage custom access restriction profiles. These profiles can combine IP range filters and client certificate verification, so that any match on either the IP range or the client certificate will grant access. You can apply access restriction profiles to path-based access restrictions in specific environments of the application.

For details on setting up access restriction profiles, see [Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

### Services{#services}

On the **Services** tab, the Technical Contact can determine which custom services can be used in the app's environments.

#### Available Services

One custom service is available: **Mendix Event Broker**. This service is required to use [Mendix Business Events](/appstore/services/business-events/) on production apps.

#### Enabling Custom Services

The Technical Contact can only see services that have been licensed for their company. If the Technical Contact cannot enable the service, this means that the service has previously been licensed, but the license has expired.

Team members who have a role with **Cloud Access** can see which services are enabled or disabled.

Once a service has been enabled for an app, Technical Contacts can selectively enable it for each environment. For more information, see the [Services](/developerportal/deploy/environments-details/#services) section of the *Environment Details* page.

## Environment Settings

If you are the Technical Contact, you can use **Environment Settings** ({{< icon name="cog" >}}) to choose the default target for the deployment package. If you do not select a target, the .mda package is built and uploaded without being deployed.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-beta/manage-env-settings.png" alt="" >}}

