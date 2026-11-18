---
title: "Company Administrator Settings - Marketplace"
linktitle: "Marketplace"
url: /private-mendix-platform/admin-company/marketplace/
description: "Provides details on the Marketplace configuration settings that are available to company administrators."
weight: 20
---

## Introduction

In the **Marketplace** section, administrators can manage various settings related to the content available on the Private Platform Marketplace. The Private Platform Marketplace is a local version of [Mendix Marketplace](/appstore/), enclosed entirely within the Private Platform. Developers in your organization can also create their own modules, connectors, and sample apps, and share them on the Private Platform Marketplace to make them available to other users.

As the administrator, you can perform the following actions:

## Content Management {#content}

In the **Content Management** tab, you can view the Marketplace content that your users have already published, as well as any items which are pending approval, or which have been rejected.

{{< figure src="/attachments/private-platform/pmp-admin7.png" class="no-border" >}}

You can click on an item to view more information about it, download, approve, or delete it.

## Taxonomy Management

In the **Taxonomy Management** tab, you can configure the supported Studio Pro versions and sub-categories that your users can select when creating Marketplace content. You can also view and edit the available licenses.

{{< figure src="/attachments/private-platform/pmp-admin8.png" class="no-border" >}}

### Supported Versions

The versions listed on the **Supported Versions** page indicate the Mendix Studio Pro versions that a Marketplace content item is compatible with. Users can select these versions from a list when uploading new Marketplace content.

### Licenses

The **Licenses** tab allows administrators to specify the licenses that are available to their apps. To add a new license, click **New License** and specify the following values:

* **Name** - Name of the license
* **URL** - URL at which the license can be accessed
* **Contents** - Optional additional information about the license.

### App Categories

In the **App Categories** tab, you can view the predefined categories that users can specify for their Marketplace content items. You can also add custom categories, for example, for Marketplace contents related to a specific project.

Predefined app categories cannot be edited or deleted. To edit or delete a custom category, click the **Action** menu, and then select one of the available options.

## Import Content

You can populate your private Marketplace with contents by importing a zip file that contains the content packages along with a *package.json* file. You can upload the file from a Content Delivery Network, or manually from your local machine.

{{< figure src="/attachments/private-platform/pmp-admin9.png" class="no-border" >}}

## Upload Marketplace Bundle {#manual-upload}

To manually upload a content bundle from your own computer, perform the following steps:

1. Download the Marketplace Bundle with contents available in a zip file. If you do not have access to the bundle, contact your Mendix point of contact.
2. In the **Import Content** > **Upload Marketplace Bundle** tab, drag and drop the file that you want to upload.

    * The file must be in *zip* format.
    * The file must not be larger than 2048 MB.
    * Your infrastructure must support the upload of large files (up to 2048MB).
    * You should also have at least 40 GB available disk space to account for temporary files.
    
3. Click **Import Marketplace Bundle components**.

    {{< figure src="/attachments/private-platform/pmp-config1.png" class="no-border" >}}

4. To view the progress of your upload, click **View Task Queue**.

{{% alert color="info" %}}
If you are experiencing high latency during manual uploads, you can increase the timeouts. For example, for nginx, you can perform the following commands:

```text
nginx.ingress.kubernetes.io/client-header-timeout: "300"
nginx.ingress.kubernetes.io/proxy-connect-timeout: "300"
nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
```

{{% /alert %}}

## Import from CDN

To import content from a Content Delivery Network, follow these steps:

1. Ensure that your system administrator has [configured the Marketplace import bundle URL](/private-mendix-platform/reference-guide/admin/system/#configure-import).
2. In the **Import Content** > **Import from CDN** tab, view and download the available content items.
