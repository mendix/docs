---
title: "Software Composition"
linktitle: "Software Composition"
url: /control-center/software-composition/
description: "Describes the Software Composition page in the Mendix Control Center."
weight: 20
---

## Introduction

A Mendix app can consist of the Mendix Model (which includes pages, domain model, microflows, etc.), custom Java, and JavaScript. Additionally, it can use reusable components such as standard marketplace modules, widgets, Java libraries, npm packages, and the runtime version. These reusable components are dependencies, namely, components you are dependent on for your Mendix app to run.  

Over time, these dependencies can become deprecated, outdated, or vulnerable. Enterprises also have policies on which of these reusable components can or cannot be used based on support, license, etc. It is important to have an easily accessible, clear view of component dependencies through the development lifecycle in order to address any security finding raised by your admins or security teams.

To enable this, the **Software Composition** page in Control Center provides visibility into the component dependencies in each app environment. The components displayed here will be based on the [Software Bill of Materials (SBOM)](/refguide/sbom-generation/).

{{% alert color="warning" %}}Advanced software composition capabilities are currently available to all. In the future, access to these capabilities will be subject to your license.{{% /alert %}}

## Prerequisites {#prerequisites}

To be able to see the software composition information, make sure that you meet the following prerequisites:

* Software Bill of Materials (SBOM) generation and the associated Software Composition capabilities are compatible with the following versions of Studio Pro: 9.24.26 and above, 10.6.12 and above, 10.12.3 and above. 

    {{% alert color="warning" %}}Make sure you upgrade to a compatible Studio Pro version to continue to use Software Composition. Previously supported Studio Pro versions (9.24.22 to 9.24.25, 10.6.9 to 10.6.11, 10.10.0 to 10.12.2, and 10.13) will no longer result in SBOM generation and visibility in Software Composition. Any historical data within Software Composition remains accessible regardless of the upgrade.{{% /alert %}}

* Software composition visibility is only possible for deployment packages created via the platform services. It is not available if you manually upload the locally-created deployment package. SBOMs are created behind the scenes for each deployment package. For more information, see [Create Deployment Package](/refguide/create-deployment-package-dialog/).

* You must be using free or licensed Mendix Cloud or Mendix Cloud Dedicated, or Mendix on Kubernetes. 

* If your deployment package was deployed before June 14, 2024, you must create and deploy a new deployment package in order to get the software composition information populated on this page.

## Software Composition Generation {#software-composition-generation}

A software bill of materials (SBOM) is generated in the following circumstances:

* When a new deployment package with the compatible Mendix Runtime version is created via the Mendix Portal
* Using the **App** > **Tools** > **Generate Bill of Materials** menu option in Studio Pro 10.18 and above

Click **View build output** in the deployment package details in the Mendix Portal to see the log details. For details of SBOM generation, see [SBOM Generation](/refguide/sbom-generation/).

You can find the component dependencies for each non-expired, deployment package in the [Software Composition](/developerportal/deploy/software-composition/) page of **Apps** in the Mendix Portal. 

After the creation of a deployment package, the **Software Composition** page usually becomes visible within a few minutes. However, in rare cases, it can take up to a day. Mendix is working to improve the performance on this front.

## Guidance

Click the **{{% icon name="book-closed" %}} Guidance** option in the upper right corner of the **Software Composition** page to find a video outlining the main features, as well as links to detailed information.

## Software Composition Tabs

The **Software Composition** page is made up of these tabs, which help view and manage findings:

* [The Overview tab](/control-center/overview-tab/)
* [The Components tab](/control-center/components-tab/)
* [The Scoring Criteria tab](/control-center/scoring-criteria-tab/)

Access the links to find out more about each of them.
