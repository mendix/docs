---
title: "General Purpose OCR"
category: "App Services"
tags: ["Document Service", "AI", "ML", "OCR", "Industrial", "Manufacturing"]
---

## 1 Introduction

The [General Purpose Optical Character Recognition](https://marketplace.mendix.com/link/component/118392) app service can help you extract text from images or PDF documents and get output in JSON and XML formats in bulk.

## 2 Installation

1. Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the General Purpose OCR component into your application.

2. In the **Toolbox**, drag the **General Purpose OCR** activity from the **Document Data Capture Services** category into your microflow.


## 3 Configuration

1.  Double-click the **General Purpose OCR** activity to open the **General Purpose OCR** dialog window.

    {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/general-purpose-ocr-dialog-window.png" >}}

2. Select an **Image List** which inherits from `System.Image`. You can also click **Edit** to edit it.

3. From the **Output format** drop-down list, select the format of output: **JSON** or **XML**.

4. If you want to execute the extraction action in a task queue, select **Execute this Java action in a Task Queue**, then click **Select** and select a task queue.

   For more information, see [Task Queue](/refguide/task-queue/) (for Mendix version 9.0.3 and above) or [Process Queue](/appstore/modules/process-queue/) (for Mendix version below 9.0.3).

5. To use the **Return Value**, select **Yes** and enter a **Variable name**.

6. Click **OK** to save the changes and close the dialog window.

7. To configure credential for the **General Purpose OCR** activity, add the following constants with values in your Mendix app:

   * Access_Key
   * Encryption_Key
   * Secret_Key

    {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/configurations-keys.png" >}}
   
    {{% alert type="info" %}}Credentials are generated when you create binding keys on Marketplace. {{% /alert %}}