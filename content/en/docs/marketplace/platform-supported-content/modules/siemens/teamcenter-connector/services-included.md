---
title: "Using Teamcenter Services Included with the Teamcenter Connector"
linktitle: "Using Included Teamcenter Services"
url: /appstore/modules/siemens-plm/using-included-services/
weight: 5
description: "Describes how to use Teamcenter services that are included in the connector."
---

## Introduction

Teamcenter services are provided through Java actions. You can see the available services in the **Teamcenter** section of the **Toolbox**.

{{< figure src="/attachments/partners/siemens/teamcenter/image019.png" alt="" class="no-border" >}}

## Using Teamcenter Services through the Teamcenter Connector: Process Workflow

{{< figure src="/attachments/partners/siemens/teamcenter/image018.png" alt="" class="no-border" >}}

## Using Teamcenter Services Available in the Teamcenter Connector

1. Design a microflow as per your business logic.
2. Drag a service from the Teamcenter category of the toolbox into the microflow.
3. Specify input parameters for the Teamcenter service.
4. Specify how data is retrieved.
5. Test your application.

## Example: Using the Available Teamcenter Services

The Sample Application has microflows that use the available services such as **CreateItem** and **Search**. Download the Teamcenter Connector Sample Application from the [Mendix Marketplace](https://appstore.mendix.com/link/component/111688), and import it into your project.

## Handling Errors

It is a good practice to set up error handling on all your Teamcenter services in a microflow.

Use the **HandleServiceErrors** microflow to handle errors. To handle errors:

1. In your microflow, right-click your Teamcenter service and choose **Set error handling**.
2. In the **Error handling** dialog box, choose the [error handling component](/refguide/error-handling-in-microflows/).

    {{< figure src="/attachments/partners/siemens/teamcenter/image020.png" alt="" class="no-border" >}}

3. Drag the **Microflow call** service from the **Toolbox** to your microflow.

    * Update the **Action** section of the microflow and select the **TcConnector.HandleServiceErrors** microflow.
    * Update the **ServiceExeption** parameter and specify the type of error.

       {{< figure src="/attachments/partners/siemens/teamcenter/image021.png" alt="" class="no-border" >}}

4. Connect the **Microflow call** service with the service from where the error will originate.

    {{< figure src="/attachments/partners/siemens/teamcenter/image022.png" alt="" class="no-border" >}}

5. Right-click the anchor point of the Teamcenter service and choose **Set as error handler**.

    {{< figure src="/attachments/partners/siemens/teamcenter/image023.png" alt="" class="no-border" >}}

6. Specify an end event for your **Handle Service Errors** service.

    {{< figure src="/attachments/partners/siemens/teamcenter/image024.png" alt="" class="no-border" >}}
