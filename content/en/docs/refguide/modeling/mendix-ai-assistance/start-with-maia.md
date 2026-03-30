---
title: "Start with Maia"
url: /refguide/start-with-maia/
weight: 2
description: "Describes the features in Start with Maia."
---

## Introduction 

{{% alert color="info" %}}
To use the **Start with Maia** starting point, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

**Start with Maia** is a starting point in Studio Pro that helps you to start the app development process. Based on a required text description and an optional image or PDF, it generates an app that includes a domain model, data management overview pages, test data, and a tailored homepage. Once the app is generated, you can choose to either immediately run the app locally and preview the generated pages with randomly generated test data, or continue building in Studio Pro. It offers you a quick way to get started with your app development.

## Using Start with Maia

To create an app using **Start with Maia**, do the following:

1. Open Studio Pro and choose **Create New App**.
1. Choose the **Start with Maia** starting point.

    {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/start-with-maia/start-with-maia-starting-point.png" >}}

1. In the **App Settings** dialog box, click **Create app**.
1. A blank app is created and the **Start with Maia** dialog box appears:

    {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/start-with-maia/start-with-maia-dialog-box.png" max-width=80% >}}

1. In the **Start with Maia** dialog box, enter a description of the app you want to build. You may optionally attach either an image or a PDF to help Maia better understand your request (only one attachment is allowed. For more information. see the [Attachment Requirements](#attachment-requirements) section below).
1. Click **Start** and Maia will start generating the following for your app:
    * A domain model with entities, attributes, and associations
    * Data management overview pages
    * Test data
        {{% alert color="info" %}}In Studio Pro 11.1 and above, this step is optional, which allows you to continue without test data being successfully generated. {{% /alert %}}
    * A tailored homepage

1. When your app is ready, you can click **OK** to close the dialog box and continue building in Studio Pro. Or you can click **OK & run app** to run the app locally and preview the generated pages with the randomly generated test data.

{{% alert color="warning" %}}
If the generation fails, an error message will appear and you will get a blank app where you can continue building in Studio Pro.
{{% /alert %}}

### Attachment Requirements {#attachment-requirements}

You can attach a maximal of one image or one PDF and the attachment must meet the following requirements:

* The image format must be PNG or JPG.
* The image file size must not exceed 512 KB.
* The image resolution must be no greater than 3840 × 2400 pixels.
* The PDF file size must not exceed 1024 KB.

## Limitations

**Start with Maia** currently has the following limitations:

* **Start with Maia** supports the creation of one-to-one and many-to-many associations for a domain model. However, no test data will be generated for these types of associations.
* **Start with Maia** does not generate test data for binary attributes.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
