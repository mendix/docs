---
title: "Version Pinning"
linktitle: "Version Pinning"
url: /developerportal/deploy/version-pinning/
weight: 80
description: "Version Pinning guarantees consistent platform configurations across environments. Deploy your app on the exact same tested versions for predictable, secure, and stable results."

# The anchors in this document are referenced from other documents. Do NOT remove!
---

{{% alert color="warning" %}}
This feature is in Limited Availability. For more information, see [Release Status](/releasenotes/release-status/#limited-availability).
{{% /alert %}}

## Introduction

Mendix Cloud(Kubernetes) provides version pinning to guarantee consistent and predictable application behavior across all environments. For example, when you promote a Mendix application from acceptance to production, version pinning ensures that the same underlying platform configuration is reused across both environments. This configuration includes components critical to how your application runs in Mendix Cloud, such as runtime images, buildpacks, and supporting services, all of which remain identical across environments.

By maintaining a consistent runtime stack, version pinning effectively eliminates subtle environmental differences, leading to more reliable and predictable application behavior throughout your development and deployment landscape.

{{% alert color="warning" %}}
This feature is only applicable to promotions between environments on Mendix Cloud (Kubernetes).
{{% /alert %}}

## Prerequisites

You must meet the following conditions to use version pinning:

* **Company-level enablement** – Version Pinning must first be enabled at the company-level.
* **Mendix Cloud (Kubernetes) environment** – Your Mendix applications must be deployed to and running within environments hosted on Mendix Cloud (Kubernetes)
* **Environment promotion** – You must be promoting an application from one environment to another (for example from test to acceptance, or acceptance to production).
* **Same application, same company** – Both the source and target environments must belong to the same application within the same company.

## Understanding Version Pinning

Version pinning ensures that the platform configuration used for your application remains consistent across different stages of your deployment pipeline. This includes:

* **Initial deployment** – When you deploy a new application build (or perform a first-time deployment), Mendix Cloud automatically uses the latest validated platform configuration available for that deployment.
* **Environment promotion** – When you promote an application from a source environment (e.g., acceptance) to a target or higher environment (e.g., production), version pinning automatically reuses the exact same platform configuration that was active in the source environment. This ensures that the combination of runtime images, buildpacks, and supporting components you tested in your source environment is precisely what runs in the target environment.

### Key Advantages

Using version pinning provides the following benefits for your Mendix application lifecycle:

* **Environments consistency** – Guarantees that what you test and validate in one environment is precisely what runs in higher-level environments.
* **Improved stability** – Eliminates unexpected differences in runtime behavior that can arise from environmental variations.
* **Enhanced security and compliance** – Ensures your applications consistently run on the latest, patched components, as managed by Mendix Cloud.
* **Zero manual setup** – The pinning process is automatically handled by Mendix Cloud, requiring no additional manual configuration steps.

## Version Pinning Workflow

Version pinning integrates seamlessly into your deployment workflow, whether you're using the Mendix Cloud Portal or the Mendix Cloud API. The diagram below illustrates these two primary methods:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/version-pinning/version-pinning-workflow.png" alt="Sequence diagram showing version pinning workflows via Cloud Portal and API.">}}

### Option 1 – Promote via Mendix Cloud Portal

{{< figure src="/attachments/deployment/mendix-cloud-deploy/version-pinning/version-pinning-via-cloud-portal.png" >}}

Initiate a promotion directly through the Mendix Cloud Portal:

1. **Action** – Click **Promote** by following the steps in [Deploying a Package](/developerportal/deploy/environments/#deploy-wizard).
2. **Configuration reading** – The Mendix Cloud Portal reads the current platform configuration details from your source environment.
3. **Deployment with pinning** – The application is then deployed to the target environment, using this pinned configuration.
4. **Confirmation** – The Cloud Portal displays a banner or confirmation message indicating that the runtime stack configuration has been successfully pinned from the source to the target environment, guaranteeing a consistent deployment outcome. 
    {{< figure src="/attachments/deployment/mendix-cloud-deploy/version-pinning/version-pinning-banner.png" >}}

### Option 2 – Deployment via API

For automated or programmatic deployments, use the Mendix Cloud API:

1. **API call** – Call the Mendix Cloud Start API, specifying the target environment and including the `pinEnvironment` parameter to indicate the source environment from which to pin the configuration.

    ```http
    POST /api/1/apps/{AppID}/environments/{Environment}/start?pinEnvironment={SourceEnvironmentId}
    ```

2. **Configuration fetching** – The Start API fetches the platform configuration.
3. **Deployment with pinning** – The application is deployed to the target environment, using these fetched, identical configuration versions.
4. **Job ID return** – The API returns a success response, typically including a `JobId`, confirming the initiation of the pinned deployment.

## Expected Behavior Scenarios

The following table summarizes the expected behavior of version pinning in different deployment scenarios:

| Scenario                                    | Behavior                                                      |
| :------------------------------------------ | :------------------------------------------------------------ |
| Deploying a new MDA or first-time deployment | Uses the latest Mendix Cloud platform configuration           |
| Promoting between environments              | Uses the same platform configuration as the source environment |
