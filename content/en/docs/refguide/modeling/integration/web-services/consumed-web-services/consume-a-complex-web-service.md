---
title: "Consume a Complex Web Service"
url: /refguide/integration/consume-a-complex-web-service/
weight: 8
description: "Describes how to import a web service both directly and using the wizard as well as how to configure a web service call."
aliases:
    - /howto/integration/consume-a-complex-web-service/
---

## Introduction

This how-to explains how to consume a (third-party) web service with which you can integrate your Mendix application and reuse functionality and data from other applications. Web services are the preferred way of integrating a Mendix application with external systems. They can be used to retrieve data, send updates, and perform operations. In Studio Pro, calling a web service is done in a microflow using the call web service action.

This how-to teaches you how to do the following:

* Directly import a web service document into your app
* Configure a web service call

## Importing a Web Service

You can import a web service document into your app. For more information, see [Consumed Web Services](/refguide/consumed-web-services/).

To import a web service directly, follow these steps:

1. Right-click a module and select **Add Other** > **Consumed web service**.
2. Specify a name for the new consumed web service and click **OK**.
3. In the **Consumed Web Service** box, specify the **WSDL Source** to be use this consumed web service. Click **Edit**, and in the **WSDL Source** dialog box, specify a **URL** or load a **File** from your computer.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/enter-wsdl-url.png" class="no-border" width="700" >}}

4. Click **Import** to fetch the services and operations in the WSDL. If prompted, in the **WSDL Source** dialog box, select the ports you want to use and click **OK**.

5. In the **Consumed web service** screen, review the **Services** and **Operations** available to the imported web service. If you click on any of the operations, information about the operation will be displayed in the right pane. You can select individual web service operations from the list, otherwise the whole service and operation will be imported:

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/consumed-web-service-doc.png" class="no-border" width="700" >}}  

## Configuring the Web Service Call

To configure the web service call, follow these steps:

1. If you did not use the web service wizard or did not use the option in the wizard to automatically create a microflow, create a microflow that will call the imported web service:

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/import-microflow.png" class="no-border" width="500" >}}

    {{% alert color="info" %}}Make sure the microflow either creates the variables required as arguments for the web service call or has them passed to it.{{% /alert %}}

2. If you are creating your own microflow, add the [Call web service](/refguide/call-web-service-action/) activity to the microflow. For details on how to add activities to a microflow, see [Activities](/refguide/activities/).
3. Double-click the activity to open the **Call Web Service** properties editor and in the **Operation** field, click **Select**.
4. In the **Select Web Service Operation** dialog box, you can select the operation for this web service call:

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/select-web-service-op.png" alt="select web service op" class="no-border" width="700" >}}

5. In the **SOAP Request Body** tab of the **Call Web Service** properties editor, you can configure the SOAP body. This contains the parameters needed to execute the web service request. The **Simple**, **Export Mapping**, and **Custom** options enable you to select the type of SOAP body to use. Click **Edit value** and use one of the following to change the domain-to-XML mapping or the variables from the microflow used as input arguments:
    * **Simple expressions for each request parameter** — if the imported web service requires only primitive arguments:

        {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/simple-expression-param.png" class="no-border" width="700" >}}

    * **Export mappings for each request parameter** or **Export mapping for the entire request**  — if the domain model entities need to be mapped to XML elements
    * **Custom request template** — for the definition of a custom XML body with parameters:

        {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/custom-request-temp.png" alt="custom-request-temp" class="no-border" width="700" >}}

6. In the **HTTP Headers** tab, if the Mendix Runtime should use HTTP authentication before calling the web service, check **Use HTTP authentication** and enter the **User name** and **Password** using the **Edit** buttons:

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/http-authentication.png" alt="http-authentication" class="no-border" width="700" >}}

7. In the **SOAP Response** tab, you can configure the handling of the return from the web service call as follows:
    * If the return is a complex XML structure, select **Mapping** and use an XML-to-domain mapping to map the XML elements to the domain model entities:

        {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/18581790.png" class="no-border" width="700" >}}

    * If the return is a primitive, you can store it in a variable by selecting **Store in variable** — **Yes**  and provide the **Type** and **Variable**:

        {{< figure src="/attachments/refguide/modeling/integration/consume-a-complex-web-service/18581789.png" class="no-border" width="700" >}}

    * If you want to ignore the return, select **Ignore**

Your imported web service is now ready to be used in your application.

## Read More

* [Consume a Simple Web Service](/howto/integration/consume-a-simple-web-service/)
* [Export XML Documents](/howto/integration/export-xml-documents/)
* [Import Excel Documents](/howto/integration/importing-excel-documents/)
* [Expose a Web Service](/howto/integration/expose-a-web-service/)
* [Use Selenium Support](/howto/integration/selenium-support/)
* [Import XML Documents](/howto/integration/importing-xml-documents/)
* [Consume a REST Service](/howto/integration/consume-a-rest-service/)
* [Expose Data to BI tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/)
