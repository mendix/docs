---
title: "Submit a Support Request"
url: /developerportal/support/submit-support-request/
category: "Mendix Support"
menu_order: 2
description: "Describes submitting a request with Mendix Support."
tags: ["support", "incident", "standard change", "URL", "change URL", "license", "change" ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor request-priority below is mapped, so it should not be removed or changed.
---

## 1 Introduction

In order for Mendix Support to pick up and process your support request, it is important to provide the right information. This will speed up the processing of your request and minimize back-and-forth communication between you and Mendix Support. The details below are what Mendix Support needs and uses to process an incident ticket.

{{% alert color="warning" %}}
For critical production incidents, please contact Mendix Support by [phone](https://support.mendix.com).
{{% /alert %}}

## 2 Checking Useful Links Before Submitting a Request

Before submitting a new Menix Support request, check these resources to make sure your question has not already been answered:

* [Mendix Forum](https://forum.mendix.com)
* [Mendix Documentation](https://docs.mendix.com/)
* [Mendix Platform status](https://status.mendix.com)

If you cannot find the answer to your question on the Mendix Forum or in the Mendix documentation, you can submit a support request. The Mendix Support Portal will walk you through the ticket creation by asking for relevant information based on the type of request. 

## 3 Submitting a New Request {#submitting}

You can access the Mendix Support Portal at [support.mendix.com](https://support.mendix.com).

This is the basic information required for a ticket:

* A detailed description of the exact error
* A detailed description of the action that was performed when the error was received
* A description of the desired goal (optional)
* The affected app (for more information, see [How to Prepare Your App for Support](/developerportal/support/prepare-your-project/))

To submit a request with Mendix Support, follow these steps:

1. Click **Submit a request** in the upper-right corner of the portal.
2.  Select an issue from the drop-down menu:

	![](/attachments/developerportal/support/submit-support-request/issue.png)

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

	* **Standard Change: Assign Mendix Admin** – make an existing Mendix user the [Mendix Admin](/developerportal/control-center/#company)
	* **Standard Change: Request ATS License** – obtain a license to use ATS (for more information on this product, see [ATS](/addons/ats-addon/))
	* **Standard Change: Request APD License** – obtain a license to use APD (for more information on this product, see [APD](/addons/apd-addon/))
	* **Standard Change: Reset Google authenticator** – reset the Google authenticator if you are using it for [2FA](/developerportal/deploy/two-factor-authentication/) (for example, when you get a new phone)
	* **Standard Change** – other changes which can be made on the platform, but for which you do not have access
	* **Non-Standard Change** – any other changes not covered by other issues above

3. Fill in the fields for the issue type you selected, including [Priority](#request-priority).
4.  When you select **Request for Information** or **Incident**, you then have to select the **Related Component** for the issue. The correct component will allow Mendix Support to help you more effectively. In some cases, you can also select the **Related Sub-Component** for your issue. Selecting the related sub-component is not required, but it will allow Mendix Support to help you more quickly and accurately. There are two main options for the related component:
	* **App** – select one of these components when you have issues with designing, developing, building, deploying, or operating one of your own apps built on the Mendix Platform:
		* **App - Development** – issues/questions regarding developing your app (for example, with your [domain model](/refguide/domain-model/), [widgets](/refguide/data-widgets/), or [logic](/refguide/application-logic/))
		* **App - Deployment** – issues/questions regarding deploying your app (for example, when the app cannot be [deployed](/developerportal/deploy/) or will not start)
		* **App - Operations** – issues/questions regarding running a deployed app (for example, when the app crashes or shows errors in the [log](/developerportal/operate/logs/))
		* **App - Add-on** – issues/questions regarding one of the Mendix add-ons (such as [ATS](/addons/ats-addon/), [APD](/addons/apd-addon/), or [AQM](/addons/aqm-addon/))
		* **App - Security** - issues/questions regarding the security of your Mendix app
		* **App - Other** – any other issues/questions regarding your own app that you are developing on the Mendix Platform
	* **Developer Platform** – select one of these components when you have issues with the Mendix Platform itself:
		* **Developer Platform - Account** – issues/questions regarding your Mendix account (for example, when you have difficulties creating an account or signing in)
		* **Developer Platform - Marketplace** - issues/questions regarding the [Mendix Marketplace](/appstore/) (for example, when you have difficulties uploading new modules to the Marketplace)
		* **Developer Platform - Sprintr** – issues/questions regarding the [Developer Portal](/developerportal/) (for example, when you cannot create a [story](/developerportal/collaborate/stories/) or start a Sprint)
		* **Developer Platform - Academy** – issues/questions regarding the [Mendix Academy](https://academy.mendix.com/link/home) (for example, when you cannot open a learning path or you cannot find the attachments required for a module)
		* **Developer Platform - Forum** – issues/questions regarding the [Mendix Forum](https://forum.mendixcloud.com/index3.html) (for example, when you cannot create a new question or add an answer)
		* **Developer Platform - Cloud Portal** – issues/questions regarding [deploying in the Developer Portal](/developerportal/deploy/) (for example, when you cannot view your [log](/developerportal/operate/logs/) files or [scale](/developerportal/deploy/scale-environment/) your environment)
		* **Developer Platform - Data Hub** – issues/questions regarding [Data Hub](/data-hub/) (for example, when you have difficulties accessing the Data Hub Catalog)
		* **Developer Platform - Control Center** - issues/questions regarding [Control Center](/developerportal/control-center/index) (for example, when you have difficulties deactivating applications from the Control Center) 
		* **Developer Platform - Studio** - issues/questions regarding [Mendix Studio](/studio/) (for example, when you have difficulties opening Mendix Studio)
		* **Developer Platform - Support Portal** - issues/questions regarding the [Support Portal](https://support.mendix.com/hc) (for example, when you have difficulties creating Support tickets)
		* **Developer Platform - Other** – any other issues/questions regarding the Mendix Platform itself
	* **Licensing** – select this component when you have issues/questions regarding your Mendix licenses

5. Make sure all your attachments have finished uploading before clicking **Next**.

The Mendix Support Portal will first suggest relevant documentation for you to read before you submit a request. Based on a complexity check, recommendations might be skipped to improve your experience. This complexity check takes your request priority and other factors into consideration.

![](/attachments/developerportal/support/submit-support-request/recommendations.png)

If investigating the documentation and searching the [Mendix Forum](https://forum.mendixcloud.com/index4.html) does not help you solve your issue, you can submit the Mendix Support request.	

## 4 Request Priority {#request-priority}

You can select the priority that you feel the request should have. Please note the [SLA regulations](/developerportal/support/#sla) for this priority.

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

The [ticket priority](/developerportal/support/ticket-priority/) that Mendix Support validates is based on this matrix:

![](/attachments/developerportal/support/submit-support-request/204371729-pic5.png)

## 5 Providing Attachments & Additional Information

Depending on the type of request, providing attachments and additional information may be helpful. The scenarios below list what additional information should be provided.

### 5.1 Attachments

You can add large attachments such as project files to the request. Please note that Mendix recommends not attaching any files that contain personal identifiable data, credit card information, or other sensitive data.

### 5.2 Cloud Problems & Deployment Issues

* Log file (*.txt*)
* Date and time of the incident

### 5.3 Team Server Problems & Project Issues

* [App ID](/developerportal/settings/general-settings/)

### 5.4 Studio & Studio Pro Problems

* Mendix Studio type (Studio or Studio Pro)
* Mendix version
* Test project (for details, see [How To Export A Mendix App Package](/refguide/export-project-package-dialog/))
* Reproducible steps

### 5.5 Marketplace Content Problems & Module, Widget & Theme Issues

* Name of the Marketplace component
* Mendix version
* Test project (for details, see [How To Export A Mendix App Package](/refguide/export-project-package-dialog/))
* Reproducible steps

{{% alert color="info" %}}
Not all Marketplace content is compatible with every version of Studio Pro, and not all Marketplace content is supported by Mendix. For more information, see [Marketplace Content Support](/appstore/general/app-store-content-support/).
{{% /alert %}}

### 5.6 Mobile Problems

* Operating system and version (Android x.x or iOS x.x; for example, Android 6.1)

{{% alert color="info" %}}
For Windows Phone, please contact Mendix Support for the current support conditions.
{{% /alert %}}

### 5.7 Browser Problems

* Operating System (Windows x or iOS x; for example, Windows 10)
* Browser name and version (Chrome x.x, Firefox x.x, IE x.x, or Safari x.x; for example, Chrome 54.0.2840.99)

## 6 Overview of Requests

By clicking your name on the upper-right side of the screen, you can select **My activities** and see all the requests that you have submitted (**My requests**) as well as all the requests that have been submitted on the apps to which you have access:

![](/attachments/developerportal/support/submit-support-request/activities.png)

On the **All requests** tab, you can click **Follow** for an app to be informed of all the changes on requests on that specific app:

![](/attachments/developerportal/support/submit-support-request/follow.png)

## 7 Viewing & Updating Tickets

From the overview, you can easily open a specific request, or you can search for a request by using the **Search** option. Once you have opened a ticket, you can add comments to the ticket assignee or add new attachments.

The ticket can have the following statuses:

* **Open** – the ticket is in the Mendix Support department
*  **Pending** – the ticket is awaiting your reply
	* You will receive one reminder email before the Mendix Support Portal automatically closes the ticket
	* If you reply, the ticket will be automatically set to **Open** again
* **On-hold** – the ticket has been forwarded to the Mendix second-line support
	* You will be informed on the R&D status and the planned version once a response has been received from the second-line
* **Solved** – the ticket has been solved
	* If you reply, the ticket will be automatically opened again
	* You can close the ticket yourself by checking the box **Please consider this request solved**
	* The ticket will be closed for comments automatically after a set number of days, after which you can create a follow-up ticket

![](/attachments/developerportal/support/submit-support-request/request.png)

## 8 Submitting a Feature Request

On the [Mendix Idea Forum](https://forum.mendix.com/ideaforum/), Mendix captures ideas and requests from customers and developers in the Mendix community. Each quarter, the Mendix Idea Forum is treated as a short-list of the top features that the Mendix community supports via topics with the most upvotes.

## 9 Read More

* [Ticket Priority](/developerportal/support/ticket-priority/)
* [Escalation Management Process](/developerportal/support/escalation-management-process/)
