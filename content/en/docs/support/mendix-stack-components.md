---
title: "Components of the Mendix Stack"
url: /support/mendix-stack-components/
description: "Describes the components that make up the Mendix stack."
weight: 10
---
## Introduction

These are the components of the Mendix stack.     
You can read an extensive description of the [Mendix architecture](https://www.mendix.com/evaluation-guide/enterprise-capabilities/architecture-intro) in the Evaluation Guide.

## Database, File Storage, and Network {#database-file-storage-and-network}

The database component includes the database service and the creation, storage, downloading, uploading, and restoration of backups.
The file storage component refers to the file storage service and the creation, storage, downloading, uploading, and restoration of backups.
The network component consists of the connection between the front-facing web server and the application, between the application and an external endpoint.

Mendix Support can analyze this component if your app is running on Mendix Cloud or Mendix Cloud Dedicated.

## Infrastructure {#infrastructure}

The infrastructure component includes all web servers, runtime servers, and database servers, with their Operating Systems and configurations.

Mendix Support can analyze this component if your app is running on Mendix Cloud or Mendix Cloud Dedicated.

Mendix is responsible for setting up and maintaining the component, as well as applying the default configuration. This component cannot be customized or optimized for individual customers or applications outside the supported configuration options available to our customers.

## Container Runtime Platform {#container-runtime-platform}

The container runtime platform refers to the platform for managing, creating, destroying, and scaling of runtime containers. In Mendix Cloud and Mendix Cloud Dedicated, Kubernetes is used.

Mendix Support can analyze this component if your app is running on Mendix Cloud or Mendix Cloud Dedicated.

Mendix is responsible for setting up and maintaining the component, as well as applying the default configuration. This component cannot be customized or optimized for individual customers or applications outside the supported configuration options available to our customers. If it is running on SAP BTP instead, the selected third party can analyze this component.

## Buildpack, m2ee, and Service Console {#buildpack-m2ee-and-service-console}

The Mendix buildpacks for [Cloud Foundry](https://github.com/mendix/cf-mendix-buildpack) and [Docker](https://github.com/mendix/docker-mendix-buildpack) are available in GitHub repositories. The documentation for the buildpacks and m2ee tools is contained within these GitHub repositories. Because they are released under an open-source license, the code can be inspected, and the functionality and options can be understood by customers who wish to use these buildpacks.

If you want to run Mendix apps on a Unix-like server, you will need the [m2ee tools](https://github.com/mendix/m2ee-tools), available on GitHub. Read more about installing on systems running Unix-like operating systems in [Linux Deployment](/developerportal/deploy/linux/).

Mendix Support can analyze these components if your app is running on Mendix Cloud or Mendix Cloud Dedicated. Mendix is responsible for setting up and maintaining the component, as well as applying the default configuration. This component cannot be customized or optimized for individual customers or applications outside the supported configuration options available to our customers.

Because Mendix has no control over the context in which the buildpack or m2ee tools are run outside of Mendix Cloud and Mendix Cloud Dedicated, you will have to demonstrate that the bug is in the supported component by showing the behavior independently from the context in which you are using it.

If you require additional features or other changes in a buildpack or m2ee tools, you can submit a Pull Request, create an Issue in the GitHub repository, or contact [Mendix Support](https://support.mendix.com/).

If you want to run Mendix apps on a Windows server, you will need the [Windows Service](/developerportal/deploy/deploy-mendix-on-microsoft-windows/). The release notes and installation manual can be found in the [Windows Service](https://marketplace.mendix.com/link/component/223425) release notes. Read more about installing on systems running Windows operating systems in [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/).

For additional features or other changes in the Windows Service, contact [Mendix Support](https://support.mendix.com/).

## Application Operation {#application-operation}

The application operation component is used for stopping and starting environments and configuring constants, scheduled events, and runtime settings.

Mendix Support can analyze this component if your app is running on Mendix Cloud, Mendix Cloud Dedicated, Mendix on Kubernetes Connected, or SAP BTP through the Mendix Portal. Mendix is responsible for setting up and maintaining the component, as well as applying default configuration. This component cannot be customized or optimized for individual customers or applications outside the supported configuration options available to our customers.

## Logs and Metrics {#logs-and-metrics}

The logs component handles viewing and downloading application log files.
The metrics component refers to viewing application metrics.

Mendix Support can analyze these components if your app is running on Mendix Cloud or Mendix Cloud Dedicated. Mendix is responsible for setting up and maintaining the component, as well as applying the default configuration. This component cannot be customized or optimized for individual customers or applications outside the supported configuration options available to our customers.

## Deployment Pipeline {#deployment-pipeline}

The deployment pipeline handles creating and deploying deployment packages. Read more about deployment options in [Deploying Apps](/deployment/).

Mendix Support can analyze this component if your app is running on Mendix Cloud, Mendix Cloud Dedicated, Mendix on Kubernetes Connected, or SAP BTP through the Mendix Portal.

## Runtime {#runtime}

The runtime component includes the Mendix Runtime and all of its supported features.
Please read all about the Mendix Runtime in [Mendix Runtime](/refguide/runtime/).

Mendix Support needs application logs to analyze this component. Because Mendix has no control over the context in which the runtime is run, outside of Mendix Cloud and Mendix Cloud Dedicated, you will have to demonstrate that the bug is in the supported component by showing the behavior independently from the context in which you are using it.

## Marketplace Components {#marketplace-components}

Platform-supported Marketplace content refers to all Marketplace content marked as platform-supported in the Mendix Marketplace. Community-supported Marketplace content includes all Marketplace content not marked as platform-supported in the Mendix Marketplace.

For details about the levels of Support for Marketplace components, refer to the [Marketplace Content Support](/appstore/marketplace-content-support/) section in *Marketplace Overview*.

Mendix Support needs application logs to analyze these components. Because Mendix has no control over the context in which the Marketplace content is run outside of Mendix Cloud and Mendix Cloud Dedicated, you will have to demonstrate that the bug is in the supported component by showing the behavior independently of the context in which you are using it.

## Application {#application}

This includes the implementation and configuration of features, as well as the data and files in the Mendix app itself.

These components are not accessible to Mendix Support, and issues in the application are outside the scope of Mendix Support, although we will gladly assist with any questions.
