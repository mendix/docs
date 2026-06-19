---
title: "Software Composition"
linktitle: "Software Composition"
url: /control-center/software-composition/
description: "Describes the Software Composition page in the Mendix Control Center."
weight: 20
---

## Introduction

A Mendix app can consist of the Mendix Model (which includes pages, domain model, microflows, and more), custom Java, and JavaScript. Additionally, it can use reusable components such as standard Marketplace modules, widgets, Java libraries, npm packages, and the runtime version. These reusable components are dependencies—components your Mendix app needs to run.  

Over time, these dependencies can become deprecated, outdated, or vulnerable. Enterprises also have policies on which reusable components can or cannot be used based on support, license, and other factors. You need an easily accessible, clear view of component dependencies through the development lifecycle to address any security finding raised by your admins or security teams.

The **Software Composition** page in Control Center provides visibility into the component dependencies in each app environment. The components displayed here are based on the [Software Bill of Materials (SBOM)](/refguide/sbom-generation/).

{{% alert color="warning" %}}Advanced software composition capabilities are currently available to all. In the future, access to these capabilities will be subject to your license.{{% /alert %}}

## Prerequisites

To access Software Composition information, make sure you meet the following prerequisites:

* SBOM generation and the associated Software Composition capabilities are compatible with the following versions of Studio Pro: 

    * 11.9.1 and above
    * 11.6.6
    * 10.24.18 and above 
    * 9.24.43 and above

   SBOMs created on older versions may contain inaccuracies. Software Composition flags SBOMs and findings created on older versions.    
   To make sure you have an SBOM without inaccuracies, upgrade to one of the supported versions. Upon upgrade, the model is checked and fixed, resulting in a corrected SBOM.    
   
   **Known limitation** – Some issues cannot be fixed automatically. The corresponding components remain flagged. To fix any flagged components that remain after the upgrade, take one of these actions:

    * Update the component in your project.
    * If the previous action does not work, remove the component and add it again.

* Software composition visibility is only available for deployment packages created via the platform services. It is not available if you manually upload a locally created deployment package. SBOMs are created for each deployment package. For more information, refer to [Create Deployment Package](/refguide/create-deployment-package-dialog/).

* You must be using free or licensed Mendix Cloud or Mendix Cloud Dedicated, or Mendix on Kubernetes. 

* If your deployment package was deployed before June 14, 2024, you must create and deploy a new deployment package to populate the software composition information on this page.

## Software Composition Generation {#software-composition-generation}

A software bill of materials (SBOM) is generated in the following circumstances:

* When a new deployment package with the compatible Mendix Runtime version is created via the Mendix Portal
* Using the **App** > **Tools** > **Generate Bill of Materials** menu option in Studio Pro 10.18 and above

Click **View build output** in the deployment package details in the Mendix Portal to open the log details. For more information on SBOM generation, refer to [SBOM Generation](/refguide/sbom-generation/).

You can find the component dependencies for each non-expired deployment package in the [Software Composition](/developerportal/deploy/software-composition/) page of **Apps** in the Mendix Portal. 

After you create a deployment package, the **Software Composition** page usually becomes visible within a few minutes. However, in rare cases, it can take up to a day. Mendix is working to improve performance.

## Guidance

Click **{{% icon name="book-closed" %}} Guidance** in the upper-right corner of the **Software Composition** page to find a video outlining the main features and links to detailed information.

## Software Composition Tabs

The **Software Composition** page is made up of these tabs, which help view and manage findings:

* [The Overview tab](/control-center/overview-tab/)
* [The Components tab](/control-center/components-tab/)
* [The Scoring Criteria tab](/control-center/scoring-criteria-tab/)

Access the links to find out more about each of them.
