---
title: "Environments and Deployment"
url: /developerportal/deploy/environments/
weight: 7
description: "Describes the Environments page and deployment flow"
aliases:
    - /developerportal/deploy/environments-redesign/
---
## Introduction

You can use the **Environments** page to access information about your environments, deployment packages, manage certificates and access restrictions, and more.

To access your app's **Environments** page, go to [Apps](https://sprintr.home.mendix.com/) and click **Environments** on your app. You can also directly visit the **Environments** page using this link: `https://cloud.home.mendix.com/link/deploy/`*`APP_ID`*, with *`APP_ID`* replaced by your [project ID](/developerportal/deploy/environments-details/#general-tab).

## Available Tabs

The **Environments** page has the following tabs:

* **Overview**
* **Deployment Packages**
* **Permissions**
* **Activity**
* **Request Overview**
    
### Overview Tab{#overview-tab}

On the **Overview** tab, you can view the [environment information](#environment-information) and perform [actions](#environment-actions) on your environments.    

The most recent deployment package is shown in a banner at the top of the page, along with a button to deploy it.

#### Environment Information{#environment-information}

You can see the following details for each environment shown in the **Overview** tab:

* The environment's name
* The Studio Pro Target ({{< icon name="mendix-browser" >}}) – This is displayed if the environment is the designated Studio Pro target. For more information, see [Studio Pro Deployment Settings](/developerportal/deploy/studio-deployment-settings/).
* Licensed badge – This is displayed if the environment is licensed.
* The environment's status:
    * {{% icon name="checkmark-circle-filled" color="green" %}} – The application in this environment is running without any alerts.
    * {{% icon name="subtract-circle-filled" color="gray" %}} – No application has been started yet in this environment, or the application has been turned off.
    * {{% icon name="alert-circle-filled" color="yellow" %}} – The application in this environment is running, but has warning alerts, which might result in difficulties. For more information, refer to the [alerts page](/developerportal/operate/monitoring-application-health/#alerts-page) or [logs](/developerportal/operate/logs/).
    * {{% icon name="remove-circle-filled" color="red" %}} – The application in this environment is running, but has critical alerts, which might make it unstable and not usable anymore. Refer to the [alerts page](/developerportal/operate/monitoring-application-health/#alerts-page) or [logs](/developerportal/operate/logs/) for more information.
* The date and time the app was started, if it is running. This is set in the user's time zone.
* The version of the deployment package
* The name of the deployment package

##### Environment Actions{#environment-actions}

You can perform the following actions on your environments:

* **Deploy** ({{< icon name="deploy" >}}) – Launch the [Deploy wizard](#deploy-wizard), where you can configure and start a new deployment for the selected environment.
* **View Details** ({{< icon name="notes-paper-edit" >}}) – Access the [Environment Details](/developerportal/deploy/environments-details/) page.
* **View App** {{< icon name="external" >}} – Launch the app in a new browser tab.
* **More Options** ({{< icon name="three-dots-menu-horizontal" >}}):
    * **Restart** – Stop the running app and restart. Restarting your app is required for applying new constant values or scheduled events to the environment.
    * **Start** – Start a stopped app.
    * **Live Log** – Display a live log for your app. This option performs the same action as the **View Live Log** button on the [Logs](/developerportal/operate/logs/) page.
    * **Debugger Info** – Display the settings needed to connect the debugger in Studio Pro to your app. For more information on debugging in the cloud, see [How To Debug Microflows Remotely](/refguide/debug-microflows-remotely/).
    * **Running Now** – Monitor all actions that are currently running in your environment. For more information, see [Running Now](/developerportal/deploy/mxcloud-runningnow/).
    * **Logged In Users** – Display all users who are logged in to your app.
    * **Stop** – Stop the app.

To view more information about each environment such as its [environment resources](#environment-resources) and the [deployed package](#deployed-package), use the **Expand** ({{< icon name="chevron-down" >}}) toggle on the environment.

##### Environment Resources {#environment-resources}
 
In the environment resources section, you can view the following information:

* The **environment ID**
* The deployment **region**
* The [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack)

Additionally, you can perform the following actions:

* [Scale the environment](/developerportal/deploy/scale-environment/) by clicking **Scale**.
* Change the resource pack by clicking **Change Plan**. For more information on how to change plans on your Mendix Cloud, refer to [Changing Plans](/developerportal/deploy/change-plan/).

##### Deployed Package {#deployed-package}

These are the details you can view about the package currently deployed to the environment:

* The package name
* The package version
* The package runtime 
    
You can promote the package to another environment by clicking **Promote**.

#### Environment Settings

If you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can use **Environment Settings** ({{< icon name="cog" >}}) to choose the default target for the deployment package. If you do not select a target, the `.mda` packages is built and uploaded without being deployed.

### Deployment Packages Tab{#deployment-packages-tab}

On the **Deployment Packages** tab, you can view information about your deployment packages.

You can also perform the following actions on this tab:

* Use the **Search** field to search the deployment packages by name or version
* Click [Upload a Package](#upload-package) to upload a deployment package from your local device
* Click [Create a Package](#create-package-wizard) to create a deployment package based on a specific branch

#### Deployment Package Details

For each deployment package, the table contains the following details:

* Deployment status
* Deployment package name
* Deployment label, for packages that are deployed
* Version of the deployment package
* Date that the deployment package was uploaded
* Uploader account
* Expiry date of the deployment package. If an expiry date is set:
    * Currently deployed packages do not expire
    * Among any non-deployed packages, the five most recently deployed packages do not expire
    * Packages that do not meet either of the non-expiry criteria outlined above are assigned an expiry date and will be deleted within 15 days, unless deployed before that date

On a package:

* Launch the [Deploy wizard](#deploy-wizard) by clicking the **Deploy** ({{< icon name="deploy" >}}) icon
* Click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) to:
    * View details, including the package size, description, build output, and an overview of the environments that are running the package
    * Download the package
    * Delete the package

#### Creating a Package {#create-package-wizard}

The **Create a Package** wizard walks you through creating deployment packages. To use the wizard, follow these steps:

1. On the [Deployment Packages](#deployment-packages-tab) tab, click **Create a Package**. This launches the **Create Package** wizard.
2. On the **Select Branch** tab, select the branch on which to base the build.
3. On the **Select Revision** tab, select the branch revision on which to base the package.
4. On the **Choose a Tag** tab, specify the version tag. This includes the major, minor, and patch version numbers.
5. Click **Build this revision**.

#### Uploading a Package {#upload-package}

Click **Upload a Package** on the **Deployment Packages** tab to select an existing package from your computer.

#### Deploying a Package {#deploy-wizard}

Follow these steps to deploy packages to selected environments using the **Deploy** or **Promote** wizard:

1. Launch the wizard by choosing one of the following options:
    * Select an environment to which you want to deploy a package by clicking the **Deploy** ({{< icon name="deploy" >}}) icon on the **Overview** tab.
    * Select a package that you want to deploy by clicking the **Deploy** ({{< icon name="deploy" >}}) icon on the **Deployment Packages** tab, or by clicking **Promote** by a package name on the **Overview** tab.
2. Perform one of the following actions, depending on whether you selected the package or the environment first:
    * If you launched the wizard by selecting an environment, the first screen of the wizard is the **Select Package** tab. Use it to select a package from the repository.
    * If you launched the wizard by selecting a package, the first screen of the wizard is the **Select Environment** tab. Use it to select the target environment for your package.
3. On the **Configure Environment** tab, review the [constants](/refguide/constants/) and adjust them as required.
4. In the **Other Options** tab, choose whether to stage the package without deploying, and when to create the backup: either before or after deploying the new package. The app is unavailable while the backup runs.
5. On the **Deploy** tab, review the deployment settings:
    1. To see an overview of the configuration for this deployment, click **View Summary**. This summary displays the selected package, selected backup option, and any changed constants or [scheduled events](/refguide/scheduled-events/).
    2. Review this summary, then click **Deploy Now**.

### Permissions Tab{#permissions-tab}

On the **Permissions** tab, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) and other team members who have **Manage Permissions** enabled can manage various environment permissions for each team member. Team members who have a role with **Cloud Access** can view the permissions.

For details on managing node permissions, refer to [Node Permissions](/developerportal/deploy/node-permissions/).

### Activity Tab{#activity-tab}

On the **Activity** tab, you can view a log of deployment, backup, and permission activities performed on your environments.

{{% alert color="info" %}}
Operations performed on a customer's behalf through an authorized Mendix Support ticket are not logged in the activity log.
{{% /alert %}}

If you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can download a copy of the activity log by following these steps:

1. Click **Download to CSV**. This button is only visible if you are the Technical Contact.
2. Select the period for which you want to download log entries.
3. Click **Download**.

### Request Overview Tab {#request-overview}

On the **Request Overview** tab, the Technical Contact can view details of all past and current [Change Plan](/developerportal/deploy/change-plan/) requests and perform certain actions based on the current request status.

For each submitted plan change request you can see the following information:

* **Request Type** – Type of change requested
* **Environment** – The environment the plan change was requested for (such as, acceptance or production)
* **Current Plan** – The environment's existing plan
* **Requested Plan** – The plan requested for change
* **Submitted on** – Request submission date
* **Status** – Current request state. This can be:
    * **Pending approval** – Awaiting Mendix Admin review
    * **Pending schedule** – Approved by Mendix Admin, but plan change application not yet scheduled by the Technical Contact
    * **Scheduled** – Plan change scheduled for the next maintenance window
    * **In progress** – Plan change is being applied
    * **Completed** – Mendix Admin has approved the change, Technical Contact has scheduled and applied the changes, and the new plan has been successfully applied to the environment
    * **Rejected** – Request was denied
    * **Failed** – Plan change did not complete successfully
* **Action** – Shows more details of each plan request and provides options based on the request status. For more information, see [Request Overview Action](#request-overview-action)

#### Request Overview Action {#request-overview-action}

 Click **Details** on any request to view the **name** of the requester and the reviewer and other request details, including:

* Status of the request
* Current plan
* Requested plan
* Reasons for resizing
* Date of request creation
* Date the request was scheduled
* Request ID
* Request type
* App name
* Environment

For more information, refer to the [Available Actions by Status](/developerportal/deploy/change-plan/#available-actions-by-status) section in *Changing Your Plan in Mendix Cloud*.

## Cloud Settings{#cloud-settings}

If you click **Cloud Settings** ({{< icon name="settings-slider-1" >}}) from any tab, you can adjust the custom domains, access restriction profiles, and services.

### Custom Domains

On the **Custom Domains** tab, you can manage your custom domain certificates at the application level. You can also see an overview of linked custom domains.

When you need your Mendix app to be accessible via your own URL (for example, `https://myapp.mycompany.com/`), you must provide a custom SSL/TLS certificate for your domain. This ensures a secure connection to your Mendix app. For more information, refer to [Custom Domains](/developerportal/deploy/custom-domains/).

### Access Restriction Profiles

On the **Access Restriction Profiles** tab, you can manage custom access restriction profiles. These profiles can combine IP range filters and client certificate verification, so that any match on either the IP range or the client certificate will grant access. You can apply access restriction profiles to path-based access restrictions in specific environments of the application.

For details on setting up access restriction profiles, refer to [Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

### Services{#services}

On the **Services** tab, the Technical Contact can determine which custom services can be used in the app's environments.

#### Available Services

One custom service is available: **Mendix Event Broker**. This service is required to use [Mendix Business Events](/appstore/services/business-events/) on production apps.

#### Enabling Custom Services

The Technical Contact can only see services that have been licensed for their company. If the Technical Contact cannot enable the service, this means that the service has previously been licensed, but the license has expired.

Team members who have a role with **Cloud Access** can see which services are enabled or disabled.

Once a service has been enabled for an app, Technical Contacts can selectively enable it for each environment. For more information, refer to the [Services](/developerportal/deploy/environments-details/#services) section of the *Environment Details* page.
