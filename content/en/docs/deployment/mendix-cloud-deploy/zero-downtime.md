---
title: "Zero Downtime"
linktitle: "Zero Downtime"
url: /developerportal/deploy/zero-downtime/
weight: 80
description: ""

#Do NOT remove any of the anchors in this document as they are all referenced from other documents
---

## Introduction

Zero-Downtime Deployment (ZDT) is a deployment capability that enables Mendix applications to apply certain configuration updates without any service interruption. This feature ensures continuous application availability during configuration changes, allowing end users to remain connected throughout the deployment process.

With ZDT, Mendix Cloud intelligently manages the deployment process, ensuring your application remains online and fully functional throughout updates to reduce the impact of routine maintenance and configuration changes and enhance the overall reliability and user experience of your Mendix applications.

## Prerequisites

To leverage the benefits of zero-downtime deployment, your Mendix application and deployment environment must meet the following criteria:

* **Mendix runtime version** – Must be running on Mendix Runtime version 10.24 or higher.
* **Application instances** – The application must be configured to run with a single runtime instance.
* **Change type** – The deployment must involve only [configuration-level changes](/developerportal/deploy/zero-downtime/#zdt-application).
* **Deployment platform** – Must be deployed on Mendix Cloud(Kubernetes).

{{% alert color="info" %}}
No special setup is required to enable ZDT. When your application and deployment meet these prerequisites, ZDT is automatically applied for eligible changes and can be controlled directly by Technical Contacts through the [Environment Settings](/developerportal/deploy/environments/#environment-settings).
{{% /alert %}}

## How Zero-Downtime Deployment Works

{{< figure src="/attachments/deployment/mendix-cloud-deploy/zero-downtime/zdt-process.png" alt="Sequence diagram illustrating the Zero-Downtime Deployment process, showing user initiating deployment, Mendix Cloud starting a new app version in the background while the current version serves users, the new version preparing configuration and reporting ready, Mendix Cloud gracefully stopping the old version, and finally directing traffic to the new version without user interruption." >}}

When an eligible configuration change is deployed with ZDT enabled, Mendix Cloud orchestrates the following steps:

1. **Initiate deployment** – A user or automated process triggers a deployment in Mendix Cloud.
2. **Current version active** – The existing application version continues to serve all user traffic without interruption.
3. **New version spin-up** – Mendix Cloud starts a new instance of your application, adding the updated configuration, in the background. This new version prepares its configuration.
4. **Health check & readiness** – Once the new instance is fully operational and passes all internal health checks, it reports its readiness to Mendix Cloud.
5. **Graceful shutdown of old version** – Mendix Cloud then gracefully stops the old application version, ensuring any ongoing processes or sessions are handled appropriately.
6. **Traffic reroute** – Mendix Cloud directs all incoming user traffic to the newly deployed, healthy application version.
7. **Continuous user experience** – The end-user experiences no downtime or interruption, as they are continuously served by a running instance of the application throughout the entire deployment process.

## Managing Zero-Downtime Deployment

By default, this option is off. In this state, your app will use the standard restart process during deployment. This default setting ensures stability and compatibility with existing application behavior.

Technical Contacts can decide whether to attempt a zero-downtime deployment by selecting the **Deploy without downtime** option on the **Other Options** tab when [deploying a package](/developerportal/deploy/environments/#deploy-wizard). If you enable this option, Mendix Cloud will attempt a zero-downtime deployment, if your environment meets eligibility criteria.

When a technical contact enables ZDT, the Cloud Portal displays a reminder to review any custom **before-shutdown** or **after-startup** microflows. This is crucial to confirm they won't cause issues during the period when two versions of your application might be running concurrently.

### When ZDT Applies {#zdt-application}

Zero-downtime deployment is specifically designed for changes that do not require rebuilding or replacing your application package. These are typically configuration-only updates.

Examples of changes that qualify for ZDT include:

* Restarting the environment 
* Updating environment variables or constants
* Adjusting log-level settings
* Changing resource limits, such as CPU or memory allocation
* Rotating credentials or API keys
* Other configuration updates made directly through the Cloud Portal
During these types of updates, Mendix Cloud performs the deployment in a way that keeps your environment continuously available.

### When ZDT Does Not Apply

Zero-downtime deployment will not apply under the following conditions:

* Mendix Runtime version is less than 10.24
* Application runs with more than one runtime instance
* Upgrading to a new Mendix Runtime version
* Deploying a new MDA (application model update)
* Changes involve database structure updates
    {{< figure src="/attachments/deployment/mendix-cloud-deploy/zero-downtime/zdt-scaling-process.png" >}}

For these scenarios, the Cloud Portal will display the standard restart message before deployment:
{{< figure src="/attachments/deployment/mendix-cloud-deploy/zero-downtime/zdt-scaling-messages.png" >}}

## Expected ZDT Behavior

The table below illustrates the expected behavior for various types of deployment changes:

| Scenario                                        | Expected Behavior                                                    |
| :------------------------------------------------------ | :------------------------------------------------------------------- |
| Changing constants, environment variables, or log levels | Deployment completes without downtime.                              |
| Adjusting CPU or memory settings                        | App remains available while the update completes.                    |
| Uploading a new MDA or changing the data model          | Application restarts briefly (standard restart required).            |
| Upgrading to a new Mendix Runtime version               | Standard restart required.                                           |

### Before Deployment

When a deployment qualifies for zero-downtime, the **Deploy Wizard** clearly communicates this in the final step via a banner indicating that the environment will be updated with zero downtime, ensuring continuous availability during the update.

### During Deployment

{{< figure src="/attachments/deployment/mendix-cloud-deploy/zero-downtime/zdt-deployment.png" >}}
For eligible environments, the **Deploy Wizard** clearly indicates that the upcoming deployment will be performed without downtime. If a later deployment involves model or runtime changes, the standard restart flow will automatically be used, and the banner will update accordingly.

### First Deployment

When you deploy an application on Mendix Runtime 10.24 or higher for the very first time, the environment is automatically prepared for future zero-downtime deployments. This initial deployment behaves like a regular one, but from the next deployment onward, eligible configuration changes can be applied without downtime.

### During a Zero-Downtime Deployment Failure

{{< figure src="/attachments/deployment/mendix-cloud-deploy/zero-downtime/zdt-error.png" >}}

If a zero-downtime deployment fails, an error message appears in the **Deploy Wizard**. The application itself remains running and available, because the previous version of the app continues to serve traffic.
You can review the error details in the wizard and re-deploy once the issue is resolved.

## Summary

Zero-downtime deployment ensures that supported Mendix applications remain available during configuration updates.
If you see the **Zero-Downtime** badge in your Cloud Portal environment, you can safely deploy configuration changes knowing your app will stay online throughout the process.
