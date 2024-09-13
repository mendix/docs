---
title: "Submit a Support Request"
url: /support/submit-support-request/
weight: 20
description: "Describes the details necessary for Mendix Support to process your request."
aliases:
    - /developerportal/support/submit-support-request/
    - /community-tools/support/submit-support-request/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor request-priority below is mapped, so it should not be removed or changed.
---

## Introduction

In order for Mendix Support to pick up and process your support request, it is important to provide the right information. This will speed up the processing of your request and minimize back-and-forth communication between you and Mendix Support. The details below are what Mendix Support needs and uses to process an incident ticket.

{{% alert color="warning" %}}
For critical production incidents, please contact Mendix Support by [phone](https://support.mendix.com).
{{% /alert %}}

## Checking Useful Links Before Submitting a Request

Before submitting a new Mendix Support request, check these resources to make sure your question has not already been answered:

* [Mendix Community](https://community.mendix.com/)
* [Mendix Documentation](/)
* [Mendix Platform status](https://status.mendix.com)

If you cannot find the answer to your question in the Mendix Community or in the Mendix documentation, you can submit a support request. The Mendix Support Portal will walk you through the ticket creation by asking for relevant information based on the type of request. 

## Submitting a New Request {#submitting}

You can access the Mendix Support Portal at [support.mendix.com](https://support.mendix.com).

This is the basic information required for a ticket:

* A detailed description of the exact error
* A detailed description of the action that was performed when the error was received
* A description of the desired goal (optional)
* The affected app (for more information, see [How to Prepare Your App for Support](/support/prepare-your-app/))

To submit a request with Mendix Support, follow these steps:

1. Click **Submit a request** in the upper-right corner of the portal.
2. Select an issue from the drop-down menu:

    {{< figure src="/attachments/support/submit-support-request/issue.png" class="no-border" >}}

    You can select from the following issues:

    * **Request for Information** – general questions about Mendix
    * **Incident** – if your app is down, or you are experiencing another platform issue
    * **Standard Change: Request New Licensed Node** – please use the [Request New App Node](https://newnode.mendix.com) app unless you are requesting an SAP Subscription Secret
    * **Standard Change: Change On-Prem Licensed Node** – request a new license key for an *existing* app (for example, if you have new hardware configuration)
    * **Standard Change: Off-Board Licensed Node** – remove a licensed node or app that you no longer need (applies to all platforms) by creating a request [here](https://offboard.mendix.com/index.html)
    * **Standard Change: Change Mendix Cloud Container Size** – all vertical scaling changes for a container that require downtime (for example, changing memory or database size) can be requested [here](https://resize.mendix.com/index.html)
    * **Standard Change: Change Mendix Cloud File Storage** – increase or decrease the file storage size
    * **Standard Change: Change Mendix Cloud URL** – change a *non-custom* Mendix URL (for example, *something.mendixcloud.com*)

        {{% alert color="info" %}}This URL change will apply to *all* your environments for this app. For example, the production environment will be *something.mendixcloud.com* and the acceptance environment will be *something-accp.mendixcloud.com*.{{% /alert %}}

    * **Standard Change: Assign Mendix Admin** – make an existing Mendix user the [Mendix Admin](/control-center/company-settings/)
    * **Standard Change: Request ATS License** – obtain a license to use ATS (for more information on this product, see [ATS](/appstore/partner-solutions/ats/))
    * **Standard Change: Request APD License** – obtain a license to use APD (for more information on this product, see [APD](/appstore/partner-solutions/apd/))
    * **Standard Change: Reset Google authenticator** – reset the Google authenticator if you are using it for [2FA](/developerportal/deploy/two-factor-authentication/) (for example, when you get a new phone)
    * **Standard Change** – other changes which can be made on the platform, but for which you do not have access
    * **Non-Standard Change** – any other changes not covered by other issues above

3. Fill in the fields for the issue type you selected, including [Priority](#request-priority).
4. When you select **Request for Information** or **Incident**, you then have to select the **Related Component** for the issue. The correct component will allow Mendix Support to help you more effectively. In some cases, you can also select the **Related Sub-Component** for your issue. Selecting the related sub-component is not required, but it will allow Mendix Support to help you more quickly and accurately. There are two main options for the related component:
    * **App** – select one of these components when you have issues with designing, developing, building, deploying, or operating one of your own apps built on the Mendix Platform:
        * **App - Development** – issues/questions regarding developing your app (for example, with your [domain model](/refguide/domain-model/), [widgets](/refguide/data-widgets/), or [logic](/refguide/application-logic/))
        * **App - Deployment** – issues/questions regarding deploying your app (for example, when the app cannot be [deployed](/deployment/) or will not start)
        * **App - Operations** – issues/questions regarding running a deployed app (for example, when the app crashes or shows errors in the [log](/developerportal/operate/logs/))
        * **App - Add-on** – issues/questions regarding one of the Mendix add-ons (such as [ATS](/appstore/partner-solutions/ats/), [APD](/appstore/partner-solutions/apd/), or [AQM](/addons/aqm-addon/))
        * **App - Security** - issues/questions regarding the security of your Mendix app
            Please read the section [Requirements for Security Support Tickets](#security-tickets) before raising an app security ticket. Following these guidelines ensures that your ticket can be progressed as efficiently as possible.
        * **App - Other** – any other issues/questions regarding your own app that you are developing on the Mendix Platform
    * **Developer Platform** – select one of these components when you have issues with the Mendix Platform itself:
        * **Developer Platform - Account** – issues/questions regarding your Mendix account (for example, when you have difficulties creating an account or signing in)
        * **Developer Platform - Marketplace** - issues/questions regarding the [Mendix Marketplace](/appstore/) (for example, when you have difficulties uploading new modules to the Marketplace)
        * **Developer Platform - Sprintr** – issues/questions regarding [Apps](/developerportal/) (for example, when you cannot create a [story](/developerportal/project-management/epics/) or start a Sprint)
        * **Developer Platform - Academy** – issues/questions regarding the [Mendix Academy](https://academy.mendix.com/) (for example, when you cannot open a learning path or you cannot find the attachments required for a module)
        * **Developer Platform - Forum** – issues/questions regarding the [Mendix Community](https://community.mendix.com/) (for example, when you cannot create a new question or add an answer)
        * **Developer Platform - Cloud Portal** – issues/questions regarding [deploying in the Mendix Portal](/developerportal/deploy/) (for example, when you cannot view your [log](/developerportal/operate/logs/) files or [scale](/developerportal/deploy/scale-environment/) your environment)
        * **Developer Platform - Catalog** – issues/questions regarding the [Catalog](/catalog/) (for example, when you have difficulties accessing the Catalog)
        * **Developer Platform - Control Center** - issues/questions regarding [Control Center](/control-center/) (for example, when you have difficulties deactivating applications from Control Center) 
        * **Developer Platform - Support Portal** - issues/questions regarding the [Support Portal](https://support.mendix.com/) (for example, when you have difficulties creating Support tickets)
        * **Developer Platform - Other** – any other issues/questions regarding the Mendix Platform itself
    * **Licensing** – select this component when you have issues/questions regarding your Mendix licenses

5. Make sure all your attachments have finished uploading before clicking **Next**.

If investigating the documentation and searching the [Mendix Community](https://community.mendix.com/) does not help you solve your issue, you can submit the Mendix Support request.    

## Request Priority {#request-priority}

You can select the priority that you feel the request should have. Please note the [SLA regulations](/support/#sla) for this priority.

The priority is based on the combination of impact and urgency: 

| Impact  | Description |
| ------- | ------- |
| High    | A high-priority production issue with a high impact on the customer’s business, impacting (almost) all users. |
| Medium  | A production issue with intermediate impact on the customer’s business, impacting a group of users. |
| Low     | A trivial production issue with no impact on the customer’s business. |

| Urgency | Description |
| ------- | ------- |
| High    | The operational functionality is severely disrupted. |
| Medium  | The operational functionality is fairly disrupted. |
| Low     | The operational functionality is hardly disrupted. |

You can set the priority to the following levels:

* **Critical**
* **High**
* **Medium**
* **Low**

The [ticket priority](/support/ticket-priority/) that Mendix Support validates is based on this matrix:

{{< figure src="/attachments/support/submit-support-request/204371729-pic5.png" class="no-border" >}}

## Providing Attachments and Additional Information

Depending on the type of request, providing attachments and additional information may be helpful. The scenarios below list what additional information should be provided.

### Attachments

You can add large attachments such as app files to the request. Please note that Mendix recommends not attaching any files that contain personal identifiable data, credit card information, or other sensitive data.

{{% alert color="info" %}}
Attachments added to Mendix Support requests will be automatically deleted after 365 days.
{{% /alert %}}

### Requirements for Security Support Tickets{#security-tickets}

If you are reporting a security finding or other security-related issue, for example a warning issued by a scanning tool, please follow these steps to ensure your ticket is dealt with as efficiently as possible.

1. Ensure you are using one of:
    * the current major version of Mendix, preferably an [MTS](/releasenotes/studio-pro/lts-mts/#mts) minor version as these continue to get security updates. 
    * the [LTS](/releasenotes/studio-pro/lts-mts/#lts) version of a previous major version which has not reached end of support.
1. If the security finding is in a marketplace component
    1. check that it is platform supported — community-supported components are not supported by Mendix support.
    1. ensure the component is up to date.
1. Review the [Frequently Asked Questions - Security](/support/security-findings-faq/) document so see if your finding is described there. Follow instructions there for mitigating your finding, including updating and cleaning up Java libraries. If the finding is addressed there as not having any security implications for your app it is unlikely that raising a ticket will give you more information.
1. If the issue has been reported by a scanning tool, please check that the results are not caused by factors outside the Mendix app (for example, tool settings or network traffic routing issues).
1. Include the following information:
    * A description of the issue found — please submit only one finding per support ticket.
    * Where the issue was found — for example, which URL, which Mendix version, the App ID?
    * How the issue was found — for example, was it from scanning an app and, if so, which tool was used?
    * A copy of an app containing the reported issue — see [How To Export A Mendix App Package](/refguide/export-app-package-dialog/) for instructions on creating an app package.
    * An actual exploitation scenario, if possible, including steps showing how to reproduce and exploit a vulnerability.

{{% alert color="info" %}}
Mendix Support will only accept security findings for the Mendix platform. This includes the Mendix runtime, any platform-supported components, and Mendix applications provided to support you to design, develop, deploy, and monitor your apps and Mendix applications used for managing your users and resources. Mendix Support will not look into security findings related to our marketing websites.
{{% /alert %}}

### Cloud Problems and Deployment Issues

* Log file (*.txt*)
* Date and time of the incident

### Team Server Problems and App Issues

* [App ID](/developerportal/settings/general-settings/)

### Studio Pro Problems

* Mendix version
* Test app (for details, see [How To Export A Mendix App Package](/refguide/export-app-package-dialog/))
* Reproducible steps

### Marketplace Content Problems and Module, Widget, and Theme Issues

* Name of the Marketplace component
* Mendix version
* Test app (for details, see [How To Export A Mendix App Package](/refguide/export-app-package-dialog/))
* Reproducible steps

{{% alert color="info" %}}
Not all Marketplace content is compatible with every version of Studio Pro, and not all Marketplace content is supported by Mendix. For more information, see the [Marketplace Content Support](/appstore/marketplace-content-support/) section in *Marketplace Overview*.
{{% /alert %}}

### Mobile Problems

* Operating system and version (Android x.x or iOS x.x; for example, Android 6.1)

### Browser Problems

* Operating System (Windows x or iOS x; for example, Windows 10)
* Browser name and version (Chrome x.x, Firefox x.x, IE x.x, or Safari x.x; for example, Chrome 54.0.2840.99)

## Overview of Requests

By clicking your name on the upper-right side of the screen, you can select **My activities** and see all the requests that you have submitted (**My requests**) as well as all the requests that have been submitted on the apps to which you have access:

{{< figure src="/attachments/support/submit-support-request/activities.png" class="no-border" >}}

On the **All requests** tab, you can click **Follow** for an app to be informed of all the changes on requests on that specific app:

{{< figure src="/attachments/support/submit-support-request/follow.png" class="no-border" >}}

## Viewing and Updating Tickets

From the overview, you can easily open a specific request, or you can search for a request by using the **Search** option. Once you have opened a ticket, you can add comments to the ticket assignee or add new attachments.

The ticket can have the following statuses:

* **Open** – the ticket is in the Mendix Support department
* **Pending** – the ticket is awaiting your reply
    * You will receive one reminder email before the Mendix Support Portal automatically closes the ticket
    * If you reply, the ticket will be automatically set to **Open** again
* **On-hold** – the ticket has been forwarded to the Mendix second-line support
    * You will be informed on the R&D status and the planned version once a response has been received from the second-line
* **Solved** – the ticket has been solved
    * If you reply, the ticket will be automatically opened again
    * You can close the ticket yourself by checking the box **Please consider this request solved**
    * The ticket will be closed for comments automatically after a set number of days, after which you can create a follow-up ticket

{{< figure src="/attachments/support/submit-support-request/request.png" class="no-border" >}}

## Submitting a Feature Request

On the [Mendix Community](https://community.mendix.com/p/ideas), Mendix captures ideas and requests from customers and developers in the Mendix community. Each quarter, the Mendix Community is treated as a short-list of the top features that the Mendix community supports via topics with the most upvotes.

## Read More

* [Ticket Priority](/support/ticket-priority/)
* [Escalation Management Process](/support/escalation-management-process/)
