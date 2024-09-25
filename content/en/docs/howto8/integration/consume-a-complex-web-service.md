---
title: "Consume a Complex Web Service"
url: /howto8/integration/consume-a-complex-web-service/
weight: 8
---

## Introduction

This how-to explains how to consume a (third-party) web service with which you can integrate your Mendix application and re-use functionality and data from other applications. Web services are the preferred way of integrating a Mendix application with external systems. They can be used to retrieve data, send updates, and perform operations. In Mendix, calling a web service is done in a microflow using the call web service action.

This how-to teaches you how to do the following:

* Import a web service using the **Import Web Service** wizard
* Directly import a web service document into your project
* Configure a web service call

## Importing a Web Service Using the Wizard

This section describes the powerful wizard that enables integrating—in just a few clicks—the creation of an imported web service, the related data entities, the XML-mapping, and a microflow to trigger the web service.

### The Configuration

To import a web service using the wizard, follow these steps:

1. Open your domain model and click **Import web service/XML file** in the toolbar.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581788.png" class="no-border" >}}

    This opens the **Import Web Service or XML Schema** wizard that will guide you through importing the result of a web service (or an XML file). As a result, it will generate the following:
    * Domain model entities to store the results
    * An XML-to-domain mapping that maps the incoming XML to Mendix objects
    * An imported web service (or XML schema) document
    * A microflow that calls the web service (or imports an XML file) (optional)
2. On the **Import Web Service or XML Scheme** dialog box, select **Web service operation** and click **Next**:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581787.png" class="no-border" >}}

3. On the **Import Web Service** dialog box, select **Create new imported web service** and click **Next**.
4. For **WSDL source** in the **Web service Description** section of the **New Web Service Operation** dialog box, specify the WSDL to be used for this imported web service. For the **WSDL source** you can either provide a **URL** (for example, http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL) or load a **File** from your computer.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581785.png" class="no-border" >}}

5. Click **Next** to fetch the services and operations in the WSDL.
6. In the **Select Ports** pop-up window select a web service port and click **OK**. Studio Pro now imports the operations.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/port.png" class="no-border" >}}

7. On the **New Web Service Operation** dialog box, you can review the services and operations that are available to the imported web service. If you click on any of the operations, information about the operation will be displayed in the right pane. Select a web service operation and click **Next**.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581784.png" class="no-border" >}}

8. On the **Select Elements** dialog box, you can optionally select individual elements to map as return values of the web service. Click **Next**.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581783.png" class="no-border" >}}

9. In the final step of this wizard you can select icons that will be attached to the generated entities and create a microflow in which the imported web service is called: 

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581782.png" class="no-border" >}}

10. Click **Finish** to create the web service.

### The Outcome

When finished the wizard will add the following to your model based on the options selected:

* The imported service
* An XML to domain mapping
* A microflow in which the web service operation is called
* Domain model entities (by default, Studio Pro creates non-persistable entities)

{{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581781.png" class="no-border" >}}

## Importing a Web Service Directly

An alternative to using the wizard described above is to import a web service document directly into your project. For further information, see [Consumed Web Services](/refguide8/consumed-web-services/) in the *Studio Pro Guide*.

To import a web service directly, follow these steps:

1. Right-click a module and select **Add Other** > **Consumed web service**.
2. Specify a name for the new consumed web service and click **OK**.
3. In the **Consumed Web Service** box, specify the **WSDL Source** to be used for this consumed web service. You can specify a **URL** or load a **File** from your computer.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/enter-wsdl-url.png" class="no-border" >}}

4. Click **Import** to fetch the services and operations in the WSDL. If prompted, in the **WSDL Source** dialog box, select the ports you want to use and click **OK**.

5. In the **Consumed Web Services** box, review the **Services** and **Operations** available to the imported web service. If you click on any of the **Operations**, information about the operation will be displayed in the right pane. You can select individual web service operations from the list otherwise the whole service and operation will be imported:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581779.png" class="no-border" >}}
6. Click **OK**. The web service will be added to the model.  

## Configuring the Web Service Call

To configure the web service call, follow these steps:

1. If you did not use the web service wizard or did not use the option in the wizard to automatically create a microflow, you have to create a microflow that will call the imported web service:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581778.png" class="no-border" >}}

    {{% alert color="info" %}}Make sure the microflow either creates the variables required as arguments for the web service call or has them passed to it.{{% /alert %}}

2. If you are creating your own microflow, add the call web service activity to the microflow. For details on how to add activities to a microflow, see [Activities](/refguide8/activities/) in the *Studio Pro Guide*.
3. Double-click the activity to open the **Call Web Service** properties editor and in the **Operation** section, click **Select** for **Operation**.
4. In the **Select Web Service Operation** dialog box, you can select the operation for this web service call:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581777.png" class="no-border" >}}

5. In the **SOAP Request Body** tab of the **Call Web Service** properties editor, you can configure the SOAP body. This contains the parameters needed to execute the web service request. The **Simple**, **Export Mapping**, and **Custom** options enable you to select the type of SOAP body to use. Click **Edit value** and use one of the following to change the domain-to-XML mapping or the variables from the microflow used as input arguments:
    * **Simple expressions for each request parameter** — if the imported web service requires only primitive arguments:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581791.png" class="no-border" >}}

    * **Export mappings for each request parameter** or **Export mapping for the entire request**  — if the domain model entities need to be mapped to XML elements
    * **Custom request template** — for the definition of a custom XML body with parameters:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581792.png" class="no-border" >}}

6. In the **HTTP Headers** tab, if the Mendix Runtime should HTTP authentication before calling the web service, check **Use HTTP authentication** and enter the **User name** and **Password** using the **Edit** buttons:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581793.png" class="no-border" >}}

7. In the **SOAP Response** tab, you can configure the handling of the return from the web service call as follows:
    * If the return is a complex XML structure, select **Mapping** and use an XML-to-domain mapping to map the XML elements to the domain model entities:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581790.png" class="no-border" >}}

    * If the return is a primitive, you can store it in a variable by selecting **Store in variable** — **Yes**  and provide the **Type** and **Variable**:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581789.png" class="no-border" >}}

    * If you want to ignore the return, select **Ignore**
8. Your imported web service is now ready to be used in your application.

## Read More

* [Consume a Simple Web Service](/howto8/integration/consume-a-simple-web-service/)
* [Export XML Documents](/howto8/integration/export-xml-documents/)
* [Import Excel Documents](/howto8/integration/importing-excel-documents/)
* [Expose a Web Service](/howto8/integration/expose-a-web-service/)
* [Use Selenium Support](/howto8/integration/selenium-support/)
* [Import XML Documents](/howto8/integration/importing-xml-documents/)
* [Consume a REST Service](/howto8/integration/consume-a-rest-service/)
* [Expose Data to BI tools Using OData](/howto8/integration/exposing-data-to-bi-tools-using-odata/)
