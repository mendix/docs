---
title: "Support for Different Deployment Strategies"
url: /support/deployment-strategy-support/
weight: 50
description: "Describes which components are supported in the Mendix Support Portal."

#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

With our Multi-Cloud strategy, Mendix allows the apps that you build to be deployed in any Cloud. This can be in [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), Mendix Cloud Dedicated, [Mendix on Kubernetes](/developerportal/deploy/private-cloud/), [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/), or in other on-premises and Cloud architectures.

The full stack is depicted in the table below. This indicates which components are **Mendix** supported, or supported by a **Mendix Partner** or a third party. If no support is indicated, then you will need to arrange support of this component yourself. Each of the components is described in more detail in [Components of the Mendix Stack](/support/#components), in *Mendix Support*.

| Stack (see [Components of the Mendix Stack](/support/#components) for more information) | Mendix Cloud | Cloud Dedi&shy;cated | Mendix on Kubernetes - Con&shy;nected | Mendix on Kubernetes - Stand&shy;alone | Private Mendix Platform | SAP BTP | Cloud Foundry/ Docker & Kuber&shy;netes | Tradi&shy;tional³ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Appli&shy;cation** | | | | | | | | |
| **Platform Support&shy;ed Marketplace content** | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix |
| **Commun&shy;ity Support&shy;ed Marketplace content** | | | | | | | | |
| **Runtime** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | Mendix |
| **Deploy&shy;ment Pipe&shy;line** | Mendix | Mendix | Mendix | | Certified Mendix Partner²  | | | |
| **Backups/ Logs/ Metrics** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
| **Appli&shy;cation Opera&shy;tion** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | |
| **Buildpack** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | Mendix |
| **Contain&shy;er Platform/ OS/ Java/ Web Server** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
| **Infra&shy;structure** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
| **Database/ File Storage/ Network** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |

¹Support will go through [SAP Support](https://launchpad.support.sap.com/#/incident/create/prefilled/comp_name=XX-PART-MDX-RAD).

²Support will go through Private Mendix Platform Certified Partners.

³Traditional means deploying directly on Windows or Linux without using containerization.

In the diagrams below, the following colors are used:

{{< figure src="/attachments/support/legend.png"   width="50%"  class="no-border" >}}

## Mendix Public and Dedicated Cloud

The Mendix Public and Dedicated Clouds are an integrated part of the Mendix Platform and are therefore fully supported as described in the SLA.
Mendix Support has access to app health, logs, graphs and monitoring.

{{< figure src="/attachments/support/mendix-cloud.png"   width="75%"  class="no-border" >}}

## Mendix on Kubernetes

Mendix on Kubernetes is based on the Kubernetes-Native Operator Framework. You can check the supported Kubernetes platforms in our [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) documentation. Check our [System Requirements](/refguide/system-requirements/) for other supported components like database and storage. The Mendix Gateway Agent and Mendix Operator are supported by Mendix.
Mendix Support does not have access to app health, logs, graphs and monitoring. If you run into issues or want to ask a question on these supported components, please always provide relevant logs, data, and your own analysis that explains why you suspect the issue is caused by one of our supported components.

{{< figure src="/attachments/support/private-cloud.png"   width="75%"  class="no-border" >}}

## Mendix on Azure

[Mendix on Azure](/developerportal/deploy/mendix-on-azure/) is a deployment option that makes use of some of the features of Mendix on Kubernetes in an opinionated way. For detailed information about the support policy in place for Mendix on Azure, see [Support Policy for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/).

## Private Mendix Platform

Private Mendix Platform provides a platform experience in on-premises or (virtual) Mendix on Kubernetes environments. It is dependent on Mendix on Kubernetes and Kubernetes, and integrates with tooling in the customer's landscape. Please refer to [Private Mendix Platform](/private-mendix-platform/) documentation for [prerequisites](/private-mendix-platform-prerequisites/) to install the platform and set up [configurations](/private-mendix-platform-configuration/), as well as [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) documentation for [supported environments](/developerportal/deploy/private-cloud-supported-environments/). 

This offering is delivered, managed and supported by Certified Partners (or Certified Customers). If you run into issues regarding your private platform, please contact your Certified Partner for support.

## SAP Business Technology Platform

Mendix provides an integration with the SAP Cloud Foundry environment of SAP Business Technology Platform (SAP BTP). Mendix applications are built to run on SAP BTP using the Mendix Cloud Foundry buildpack. Please check out the supported components in [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/).
Mendix Support does not have access to app health, logs, graphs and monitoring – for support on these components, please contact [SAP Support](https://launchpad.support.sap.com/#/incident/create/prefilled/comp_name=XX-PART-MDX-RAD). If you run into issues or want to ask a question on the supported components, please always provide relevant logs, data, and your own analysis that explains why you suspect the issue is caused by one of our supported components

{{< figure src="/attachments/support/sap-cloud-platform.png"   width="40%"  class="no-border" >}}

## Cloud Foundry / Docker and Kubernetes / Traditional Architectures

Mendix is compatible with all the well-known cloud providers: IBM Cloud, Microsoft Azure, Amazon Web Services (AWS), Red Hat OpenShift, and Google Cloud Platform.
Depending on the Cloud architecture a Mendix application is built using the [Mendix Cloud Foundry buildpack](https://github.com/mendix/cf-mendix-buildpack), the [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack) or to a Unix-like or Windows server.
Check our [System Requirements](/refguide/system-requirements/) for the supported components of any Cloud Foundry / Docker and Kubernetes / traditional architecture.

Mendix Support does not have access to app health, logs, graphs and monitoring. If you run into issues or want to ask a question on these supported components, please always provide relevant logs, data and your own analysis that explains why you suspect the issue is caused by one of our supported components.

{{< figure src="/attachments/support/on-premises.png"   width="75%"  class="no-border" >}}
