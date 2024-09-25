---
title: "Mendix Support"
url: /support/
description: "Provides information on how to obtain support for your Mendix apps."
weight: 47
no_list: false 
description_list: true
cascade:
    - content_type: "Mendix Support"
    - mendix_version: 10
aliases:
    - /howtogeneral/support/index.html
    - /howtogeneral/support/
    - /developerportal/support/
    - /community-tools/support/
---

{{% alert color="info" %}}
The Mendix Portal is the online platform of Mendix. It includes [Apps](/developerportal/), [Marketplace](/appstore/), [Control Center](/control-center/), [Community](/community-tools/), [Catalog](/catalog/), and Mendix Support.
{{% /alert %}}

## What You Can Expect from Mendix Support

Mendix Support is here to answer any questions and solve any issues that you might have. We try to make your journey as frictionless as possible.

### Service Level Agreements {#sla}

We are available for all users of the Mendix Platform, and we are bound by service-level agreements (SLAs) with our licensed customers. Licensed customers can select their SLA level: **Standard** or **Premium**. The SLA level determines the specific agreement in the following areas:

* Support availability
* Platform availability
* Maintenance
* Incident response time
* Incident resolution time
* Recovery time objective (RTO)
* Recovery point objective (RPO)

You can check the Mendix SLA [here](https://mendix.com/sla).

### Extended Support {#extended-support}

Extended Support may be offered in cases where the support of a major Mendix version is discontinued in line with its [end of Support date](/releasenotes/studio-pro/lts-mts/#end). Extended Support incurs an additional cost and covers support within one year following the GA release of the latest Mendix major version. 

There are 6-month and 12-month packages available for Extended Support.

For example, support for Mendix 8 will end upon the release of Mendix 11 GA. However, if you have purchased Extended Support, version 8 will be supported for either six months or one year from the release date of Mendix 11 GA.

Please contact your Customer Success Manager or [Mendix Support](https://support.mendix.com/hc/en-us) if you want to know more.

## Finding Your Answers

We expect that many questions and issues can be solved by reading the [Mendix Documentation](/) and by exploring the [Mendix Community](https://community.mendix.com/). If you cannot find the answer to your question in one of these locations, you can submit a question, incident, or change request to Mendix Support. We will act as the focal point for issues on Mendix Studio Pro, your applications, and the Mendix Portal. We will forward the issue to the second- and third-line if necessary.

### Mendix Academy

If you have questions about [Mendix Academy](https://academy.mendix.com/) these will normally be handled by the Academy team.

You can contact Mendix Academy directly at [academy@mendix.com](mailto:academy@mendix.com). Mendix Academy may take 3-5 business days to reply to your inquiry.

If you have passed a Mendix certification, Mendix Academy will need 3-5 business days to prepare your certificate. You do not need to raise a support ticket as it will only be forwarded to the Academy team.

## Feature Requests

We would like to invite you to an important channel where you can provide feature requests to Mendix: the [Mendix Community](https://community.mendix.com/link/ideas). Any customer can post a feature request that can be reviewed, expanded on, and voted on by other members of the Mendix community. Based on this feedback, every quarter we will determine which features have the most value according to our customers, and we will implement them.

For more details, see [Mendix Community](/community-tools/mendix-community/).

## Accessing Mendix Support

You can access the Mendix Support team through the [Mendix Support Portal](https://support.mendix.com/), via email (`support@mendix.com`), or by phone (phone numbers are listed in the Support Portal). Please note that critical tickets always need to be accompanied by a phone call to speed up the triage of the issue. In the Support Portal, you can check the status of your personal tickets, check all the submitted tickets for your applications, and provide updates on them.

## What We Expect from You

Mendix supports the Mendix Platform, and we expect you to support the applications that you build on the platform. The standard SLA does not include the following:

* Developing code on your behalf
* Debugging or troubleshooting your applications
* Analyzing and troubleshooting the health and performance of your applications or your infrastructure, except when we suspect an underlying issue exists in the Mendix Platform
* Troubleshooting Mendix community-developed components from the Mendix Marketplace

For more information, see the [Support for Different Deployment Strategies](#support-by-strategy) section below.

During the start phase, and through part of the scale phase, of your digital transformation journey, it might be best to let your development team (DevOps) handle the support of the applications. As the number of applications grows, it is best to let an expert service desk handle the support of your applications. You can involve your existing service desk team or outsource support to one of our support partners which you can find listed on the [Meet Our Partners](https://www.mendix.com/partners/find-a-partner/) page.

### Mendix Admins

To manage your company account and the users, projects, and licensed cloud nodes of your company, you can appoint [Mendix Admins](/control-center/company-settings/).

Please read more about this in [Control Center](/control-center/).

### Technical Contacts

You need to appoint a [Technical Contact](/developerportal/general/app-roles/#technical-contact) for each of your applications running in Mendix Cloud or Mendix Cloud Dedicated. The Technical Contact checks the performance of the applications in the Mendix Portal and receives alerts from the Mendix Portal based on errors and warnings in the application. It is possible to have other team members receive these alerts as well.
Reading these alerts carefully and acting upon them is important, as they can affect the performance of your app. For more information on alerts, see [Alerts](/developerportal/operate/monitoring-application-health/).

### Training

We expect your support team to be trained and certified on Studio Pro and the Mendix Portal so that they can interpret and analyze alerts, graphs, and logs in the Mendix Portal. For more information, please check our available [classroom courses](https://academy.mendix.com/link/classroom) and [expert webinars](https://academy.mendix.com/link/webinar) or contact the Mendix Academy ([academy@mendix.com](mailto:academy@mendix.com)).

## Platform Status

If there is an issue with the Mendix Platform that affects multiple customers, or if there is planned maintenance, we will communicate this through our [status page](https://status.mendix.com/) and send updates on the progress through email if you have subscribed to this service. It is recommended that your service desk team subscribes to updates from this page.

## Reach Out to Mendix Support

### Reporting Issues

If, after your analysis, you suspect there is an issue with the Mendix Platform (or if you have questions about your analysis), you can reach out to Mendix Support. We will provide pointers on how to solve the issues yourself or redirect you to Expert Services for further assistance. If we suspect a platform issue, we will involve second- and third-line support for confirmation and, if it is a platform issue, we will fix it. If the issue is commercial (for example, because your app requires a larger app container or more file storage), we may refer you to your Customer Success Manager directly.

### Large-Scale Testing

You may sometimes want to perform testing on your app which could impact cloud operations. This might include the following:

* Load test
* Performance test
* Penetration (PEN) test 

Your SLA contains the following clause:

> Without first obtaining the prior written consent of Mendix, Customer may not intentionally perform any actions, such as load tests, performance tests, or similar tests that might interfere with or disrupt the integrity or performance of the App Platform or Cloud Services.

If you are planning this sort of testing you must raise a ticket with Mendix Support and include as much information as possible, including:

* type of test
* IP addresses
* environment IDs
* exact timings
* contact details of parties directly involved – including any third parties who are assisting

Please provide this information as early as possible, at least two weeks in advance of the test date. Mendix may refuse permission to do some kinds of test if they break local laws or pose too high a risk to the Mendix infrastructure or other customers.

If you want to perform penetration tests, your Customer Service Manager (CSM) can provide you with an indemnification agreement. This should be signed by all parties, confirming the information above, and agreeing that your tests are legal and do not impact other customers. If you don't know who your CSM is, Mendix Support can provide you with their contact details. 

If Mendix is not aware of your tests, you may find that they are interrupted if they cause unexpected alerts to be generated for our Cloud Operations or Security teams. You may also be breaking your agreement with Mendix.

## Product Support Period

Mendix supports the current major release and the two prior major releases (and we support each major release for a minimum of 24 months). Because of this, Mendix recommends upgrading your apps to the latest version of Studio Pro at least once a year. We will reach out to you in time if you are running on a version that will become unsupported so that you have ample time to perform an upgrade.

## Support for Different Deployment Strategies {#support-by-strategy}

With our Multi-Cloud strategy, Mendix allows the apps that you build to be deployed in any Cloud. This can be in [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), Mendix Cloud Dedicated, [Mendix for Private Cloud](/developerportal/deploy/private-cloud/), [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/), or in other on-premises and Cloud architectures.

The full stack is depicted in the table below. This indicates which components are **Mendix** supported, or supported by a **Mendix Partner** or a third party. If no support is indicated, then you will need to arrange support of this component yourself. Each of the components is described in more detail in [Components of the Mendix Stack](#components), below.

| Stack (see [below](#components) for more information) | Mendix Cloud | Cloud Dedi&shy;cated | Private Cloud - Con&shy;nected | Private Cloud - Stand&shy;alone | Private Mendix Platform | SAP BTP | Cloud Foundry/ Docker & Kuber&shy;netes | Tradi&shy;tional³ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Appli&shy;cation** | | | | | | | | |
| **Platform Support&shy;ed Marketplace content** | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix |
| **Commun&shy;ity Support&shy;ed Marketplace content** | | | | | | | | |
| **Runtime** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | Mendix |
| **Deploy&shy;ment Pipe&shy;line** | Mendix | Mendix | Mendix | | Certified Mendix Partner²  | | | |
| **Logs/ Metrics** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
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

### Mendix Public and Dedicated Cloud

The Mendix Public and Dedicated Clouds are an integrated part of the Mendix Platform and are therefore fully supported as described in the SLA.
Mendix Support has access to app health, logs, graphs and monitoring.

{{< figure src="/attachments/support/mendix-cloud.png"   width="75%"  class="no-border" >}}

### Mendix for Private Cloud

Mendix for Private Cloud is based on the Kubernetes-Native Operator Framework. You can check the supported Kubernetes platforms in our [Private Cloud](/developerportal/deploy/private-cloud/) documentation. Check our [System Requirements](/refguide/system-requirements/) for other supported components like database and storage. The Mendix Gateway Agent and Mendix Operator are supported by Mendix.
Mendix Support does not have access to app health, logs, graphs and monitoring. If you run into issues or want to ask a question on these supported components, please always provide relevant logs, data, and your own analysis that explains why you suspect the issue is caused by one of our supported components.

{{< figure src="/attachments/support/private-cloud.png"   width="75%"  class="no-border" >}}

### Private Mendix Platform

Private Mendix Platform provides a platform experience in on-premises or (virtual) private cloud environments. It is dependent on Mendix for Private Cloud and Kubernetes, and integrates with tooling in the customer's landscape. Please refer to [Private Mendix Platform](/private-mendix-platform/) documentation for [prerequisites](/private-mendix-platform-prerequisites/) to install the platform and set up [configurations](/private-mendix-platform-configuration/), as well as [Mendix for Private Cloud](/developerportal/deploy/private-cloud/) documentation for [supported environments](/developerportal/deploy/private-cloud-supported-environments/). 

This offering is delivered, managed and supported by Certified Partners (or Certified Customers). If you run into issues regarding your private platform, please contact your Certified Partner for support.

### SAP Business Technology Platform

Mendix provides an integration with the SAP Cloud Foundry environment of SAP Business Technology Platform (SAP BTP). Mendix applications are built to run on SAP BTP using the Mendix Cloud Foundry buildpack. Please check out the supported components in [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/).
Mendix Support does not have access to app health, logs, graphs and monitoring – for support on these components, please contact [SAP Support](https://launchpad.support.sap.com/#/incident/create/prefilled/comp_name=XX-PART-MDX-RAD). If you run into issues or want to ask a question on the supported components, please always provide relevant logs, data, and your own analysis that explains why you suspect the issue is caused by one of our supported components

{{< figure src="/attachments/support/sap-cloud-platform.png"   width="40%"  class="no-border" >}}

### Cloud Foundry / Docker and Kubernetes / Traditional Architectures

Mendix is compatible with all the well-known cloud providers: IBM Cloud, Microsoft Azure, Amazon Web Services (AWS), Red Hat OpenShift, and Google Cloud Platform.
Depending on the Cloud architecture a Mendix application is built using the [Mendix Cloud Foundry buildpack](https://github.com/mendix/cf-mendix-buildpack), the [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack) or to a Unix-like or Windows server.
Check our [System Requirements](/refguide/system-requirements/) for the supported components of any Cloud Foundry / Docker and Kubernetes / traditional architecture.

Mendix Support does not have access to app health, logs, graphs and monitoring. If you run into issues or want to ask a question on these supported components, please always provide relevant logs, data and your own analysis that explains why you suspect the issue is caused by one of our supported components.

{{< figure src="/attachments/support/on-premises.png"   width="75%"  class="no-border" >}}

## Components of the Mendix Stack {#components}

These are the components of the Mendix stack described in the section above. Please read an extensive description of the [Mendix architecture](https://www.mendix.com/evaluation-guide/enterprise-capabilities/architecture-intro) in the Evaluation Guide.

### Database, File Storage, and Network

The database component includes the database service and the creating, storing, downloading, uploading, and restoring of backups.
The file storage component refers to the file storage service and the creating, storing, downloading, uploading, and restoring of backups.
The network component consists of the connection between the front-facing web server and the application, between the application and an external end point.

Mendix Support can analyze this component if your app is running on Mendix Cloud or Mendix Cloud Dedicated.

### Infrastructure

The infrastructure component includes all web servers, runtime servers, and database servers, with their Operating Systems and configuration.

Mendix Support can analyze this component if your app is running on Mendix Cloud or Mendix Cloud Dedicated.

### Container Runtime Platform

The container runtime platform refers to the platform for managing, creating, destroying, and scaling of runtime containers. In Mendix Cloud and Mendix Cloud Dedicated, Cloud Foundry is used.

Mendix Support can analyze this component if your app is running on Mendix Cloud or Mendix Cloud Dedicated. If it is running on SAP BTP instead, the selected third party can analyze this component.

### Buildpack, m2ee, and Service Console

The Mendix buildpacks for [Cloud Foundry](https://github.com/mendix/cf-mendix-buildpack) and [Docker](https://github.com/mendix/docker-mendix-buildpack) are available in GitHub repositories. The documentation for the buildpacks and m2ee tools is contained within these GitHub repositories and, because they are released under an Open Source license, the code can be inspected and the functionality and options can be understood by customers who wish to use these buildpacks.

If you want to run Mendix apps on a Unix-like server you will need the [m2ee tools](https://github.com/mendix/m2ee-tools), available on GitHub. Read more about installing on systems running Unix-like operating systems in [Unix-Like Deployment](/developerportal/deploy/unix-like/).

Mendix Support can analyze these components if your app is running on Mendix Cloud or Mendix Cloud Dedicated. Because Mendix has no control over the context in which the buildpack or m2ee tools are run outside of Mendix Cloud and Mendix Cloud Dedicated, you will have to demonstrate that the bug is in the supported component by showing the behavior independently from the context in which you are using it.

If you want additional features or some other change in a buildpack or m2ee tools, you can make a Pull Request, create an Issue in the GitHub repository, or contact [Mendix Support](https://support.mendix.com/).

If you wan to run Mendix apps on Windows server you will need the [Windows Service](/releasenotes/studio-pro/windows-service/). The release notes and installation manual can be found in the [Windows Service](/releasenotes/studio-pro/windows-service/) release notes. Read more about installing on systems running Windows operating systems in [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/).

If you want additional features or some other change in the Windows Service, you can contact [Mendix Support](https://support.mendix.com/).

### Application Operation

The application operation component is used for stopping and starting environments and configuring constants, scheduled events, and runtime settings.

Mendix Support can analyze this component if your app is running on Mendix Cloud, Mendix Cloud Dedicated, Private Cloud Connected, or SAP BTP through the Mendix Portal.

### Logs and Metrics

The logs component takes care of viewing and downloading application log files.
The metrics component refers to viewing application metrics.

Mendix Support can analyze these components if your app is running on Mendix Cloud or Mendix Cloud Dedicated.

### Deployment Pipeline

The deployment pipeline takes care of creating and deploying deployment packages. Read more about deployment options in [Deploying Apps](/deployment/).

Mendix Support can analyze this component if your app is running on Mendix Cloud, Mendix Cloud Dedicated, Private Cloud Connected, or SAP BTP through the Mendix Portal.

### Runtime

The runtime component includes the Mendix Runtime, and all of its supported features.
Please read all about the Mendix Runtime in [Mendix Runtime](/refguide/runtime/).

Mendix Support needs application logs to analyze this component. Because Mendix has no control over the context in which the runtime is run, outside of Mendix Cloud and Mendix Cloud Dedicated, you will have to demonstrate that the bug is in the supported component by showing the behavior independently from the context in which you are using it.

### Marketplace Components

Platform-supported Marketplace content refers to all Marketplace content marked as platform-supported in the Mendix Marketplace. Community-supported Marketplace content includes all Marketplace content not marked as platform-supported in the Mendix Marketplace

For details about the levels of Support for Marketplace components, see the [Marketplace Content Support](/appstore/marketplace-content-support/) section in *Marketplace Overview*.

Mendix Support needs application logs to analyze these components. Because Mendix has no control over the context in which the Marketplace content is run outside of Mendix Cloud and Mendix Cloud Dedicated, you will have to demonstrate that the bug is in the supported component by showing the behavior independently from the context in which you are using it.

### Application

This includes the implementation and configuration of features, as well as the data and files in the Mendix app itself.

These components are not accessible for Mendix Support and issues in the application are out of the scope of Mendix Support, although we will gladly assist in case of questions.

## Documents in This Category
