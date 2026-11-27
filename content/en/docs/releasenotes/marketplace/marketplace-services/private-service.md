---
title: "Private PDF Document Generation Service Release Notes"
linktitle: "Private PDF Document Generation Service"
url: /releasenotes/marketplace/private-service/
description: "The release notes for the Private PDF Document Generation Service, with details on new features, bug fixes, and known issues."
weight: 20
numberless_headings: true
---

## 2.0.0 (`latest`)

**Release date: November 24, 2026**

{{% alert color="warning" %}}
This is a major release with breaking changes. Review the changes below before you upgrade.
{{% /alert %}}

### Breaking Changes

* We changed the base image of the service from Alpine Linux to Debian.
    * If you extend the service image, for example to [import a self-signed certificate](/appstore/services/private-document-generation-service/#importing-a-self-signed-certificate), you need to update your Docker file. Use `apt-get` instead of `apk` to install packages. For an updated Docker file, see [Version 2.0.0 and Above](/appstore/services/private-document-generation-service/#import-certificate-v2).
* We upgraded the browser that renders documents to Chromium 150. Documents can render slightly differently compared to previous versions, for example in font rendering or page layout. Mendix recommends that you verify your documents before you upgrade a production environment.
* We moved the Docker image to a new registry: `registry.mendix.com/docgen/document-generation-service`. The new registry contains version 1.0.2 and above. For more information, see [Installing through Docker](/appstore/services/private-document-generation-service/#installing-through-docker).

### Improvements

* When you import a self-signed certificate, the service now also trusts the certificate when it sends the generated document back to your app.

### Fixes

* We fixed an issue where the progress indicator of the Mendix client could be visible in the generated PDF.

### Security

* We upgraded Node.js to version 24.22.2, which includes the fixes from the Node.js 24.22.1 security release.
* We included routine security updates for third-party dependencies, which do not pose any apparent risk to Mendix customers.

## 1.0.5

**Release date: August 26, 2026**
This release includes routine security updates, which do not pose any apparent risk to Mendix customers.

## 1.0.4

**Release date: May 18, 2026**

This release includes routine security updates, which do not pose any apparent risk to Mendix customers.

## 1.0.3

**Release date: March 06, 2026**

This release includes routine security updates, which do not pose any apparent risk to Mendix customers.

## 1.0.2

**Release date: September 04, 2025**

We fixed an issue where document generation fails with a `wait for content` exception if any network request fails while opening the document page.

## 1.0.1

**Release date: August 08, 2025**

With this version of the private PDF Document Generation service, we have improved the following:

* Request validation
* Error handling

## 1.0.0

**Release date: June 27, 2025**

### Private PDF Document Generation Service

The [PDF Document Generation](/appstore/modules/document-generation/) module now supports the use of [private PDF document generation service instances](/appstore/services/private-document-generation-service/). This flexible solution is based on Docker, and is hosted and managed by you. It allows you to run your own version of the PDF Document Generation service with additional control and configuration options, and it specifically targets air-gapped apps, or tailored performance and data sharing requirements.
