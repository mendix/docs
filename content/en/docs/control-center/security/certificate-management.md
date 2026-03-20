---
title: "Certificate Management"
linktitle: "Certificate Management"
url: /control-center/certificate-management/
description: "Describes the Certificate Management page in Mendix Control Center."
weight: 40
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

In Mendix Cloud, SSL/TLS certificates enable secure HTTPS communication for incoming connections to applications that use custom domains.

The **Certificate Management** page provides Mendix Admins with a centralized view of all company-wide certificates. From this page, you can upload, replace, renew, and monitor certificates that can be reused across multiple applications and environments.

After a certificate is added:

* Technical Contacts can select it when [configuring custom domains](/developerportal/deploy/custom-domains/#Configuring) at the application level
* The certificate is shown as centrally managed in the [Custom Domains](/developerportal/deploy/environments/#custom-domains) tab of the environment’s **Cloud Settings**
* The same certificate can be reused across multiple applications and environments, provided the domain names are covered by the certificate

## Certificate Summary

The **Certificate Management** page displays a summary of all configured certificates, including:

* Certificates currently in use
* Certificates not in use
* Expired certificates
* Certificates that are about to expire

This overview helps you proactively manage certificate renewals and avoid service interruptions.

## Certificate Details

Each configured certificate is shown in a table with the following fields:

* **Description** – A descriptive name for the certificate. Use clear and meaningful names to make certificates easy to identify.
* **Certificate Expires** – The date and time the certificate expires
* **Number of custom domains** – The number of custom domains currently using the certificate
* **Status** – The current state of the certificate:
    * **Valid** – Currently valid and in use
    * **Expires soon** – Certificate expiring soon
    * **Expired** – Certificate has expired
    * **Upcoming** – Certificate is not valid; the start date is in the future

    You can filter certificates by these statuses to identify certificates that require renewal or deletion.

* **More options** – Actions available per certificate:
    * **Edit** 
    * **Replace** 
    * **Details**
    * **Delete** 
    {{% alert color="info" %}}You cannot delete a certificate that is currently in use.
    {{% /alert %}}

For detailed information about how Mendix Admins can use the **Certificate Management** page to upload, configure and manage centralized certificates, refer to [Centralized Certificates](/developerportal/deploy/certificates/centralized-certificates/).

## Read More

* [Certificates](/developerportal/deploy/certificates/)
* [Application-Level Certificates](/developerportal/deploy/application-level-certificates/)
* [Custom Domains](/developerportal/deploy/custom-domains/)
