---
title: "Consume a Complex Web Service"
category: "Integration"
menu_order: 8
tags: ["web service", "integration", "consume"]
---

## 1 Introduction

This how-to explains how to consume a (third-party) web service with which you can integrate your Mendix application and reuse functionality and data from other applications. Web services are the preferred way of integrating a Mendix application with external systems. They can be used to retrieve data, send updates, and perform operations. In Mendix, calling a web service is something you do in a microflow using the Call Web Service action.

**This how-to will teach you how to do the following:**

* Import a web service using the wizard and directly
* Configure a web service call

## 2 Importing a Web Service Using the Wizard

This section will describe the powerful wizard that enables integrating—in just a few clicks—the creation of an imported web service, the related data entities, the XML-mapping, and a microflow to trigger the web service.

### 2.1 The Configuration

To import a web service using the wizard, follow these steps:

1. Open your domain model and click **Import web service/XML file** in the toolbar.

    ![](attachments/18448730/18581788.png)

    This will open a straightforward wizard dialog that guides you through importing the result of a web service (or an XML file). As a result, it will generate the following items:
    * Domain model entities to store the results
    * An XML-to-domain mapping that maps the incoming XML to Mendix objects
    * An imported web service (or XML schema) document
    * A microflow that calls the web service (or imports an XML file) (optional)
2. On the **Import Web Service or XML Scheme** dialog box, select **Web service operation** and click **Next**:

    ![](attachments/18448730/18581787.png)

3. On the **Import Web Service** dialog box, select **Create new imported web service** and click **Next**:

    ![](attachments/18448730/18581786.png)

4.  For **WSDL source** in the **Web service Description** section of the **New Web Service Operation** dialog box, select the WSDL to be used for this imported web service. You can either use a URL (for example, http://www.webservicex.net/medicareSupplier.asmx?WSDL) or load a File from your computer.

    ![](attachments/18448730/18581785.png)

5.  Click **Next** to fetch the services and operations in the WSDL.

    ![](attachments/18448730/port.png)

6. This will bring up the **Select Ports** pop-up window asking you to select a web service port. Click **OK** to select the default. The Modeler now imports the operations.
7. On the **New Web Service Operation** dialog box, you can now review the services and operations available to the imported web service. Select a web service operation and click **Next**.

    ![](attachments/18448730/18581784.png)

8. On the **Select Elements** dialog box, you can optionally select the elements to map as return values of the web service, and then click **Next**.

    ![](attachments/18448730/18581783.png)

9. The final step in this wizard provides you with the options to add icons to the generated entities and to create a microflow in which the imported web service is called: 

    ![](attachments/18448730/18581782.png)

    Click **Finish** to create the web service.

### 2.1 The Outcome

When finished the wizard will add to your model based on the options selected:

* The imported service
* An XML to domain mapping
* A microflow in which the web service operation is called
* Domain model entities (by default, the Modeler creates non-persistent entities)

![](attachments/18448730/18581781.png)

## 3 Importing a Web Service Directly

An alternative to using the wizard described above is to import a web service document directly into your project. For more information, see [Consumed Web Services](/refguide7/consumed-web-services) in the Mendix Reference Guide.

To import a web service directly, follow these steps:

1. Right-click a module and select **Add** > **Consumed services** > **Consumed web service**.
2.  In the **Consumed Web Service** wizard, on the **General** tab, enter the WSDL to be used for this imported web service. You can use a **URL** or load a **File** from your computer.

    ![](attachments/18448730/18581780.png)


3. Click **Import** to fetch the services and operations in the WSDL.
4. Review the **Services** and **Operations** available to the imported web service:

    ![](attachments/18448730/18581779.png)

You can also describe the design purpose of the web service on the **Documentation** tab.

## 4 Configuring the Web Service Call

To configure the web service call, follow these steps:

1. If you did not use the web service wizard and/or did not use the option within the wizard to automatically create a microflow, you have to create a microflow that will call the imported web service:

    ![](attachments/18448730/18581778.png)

    {{% alert type="info" %}}

    Make sure the microflow either creates the variables required as arguments for the web service call or has those passed to it.

    {{% /alert %}}

2. If you are creating your own microflow, add the Call Web Service activity to the microflow. For details on how to add activities to microflows, see [Activities](/refguide7/activities) in the Mendix Reference Guide.
3. Double-click the activity to open the **Call Web Service** wizard and in the **Operation** section, click **Select...** for **Operation**.
4. This opens the **Select Web Service Operation** dialog box, where you can choose the operation for this web service call:

    ![](attachments/18448730/18581777.png)

5. On the **SOAP Request Body** tab of the **Call Web Service** wizard, you can configure the SOAP body, which contains the parameters needed to execute the web service request. The **Simple**, **Export Mapping**, and **Custom** options enable choosing the type of SOAP body to use. Click **Edit value** to change the domain-to-XML mapping or the variables from the microflow used as input arguments.
    * Use the **Simple** option if the imported web service requires only primitive arguments:

        ![](attachments/18448730/18581791.png)
    
    * Use the **Export mappings for each request parameter** or **Export mapping for the entire request** options if the domain model entities need to be mapped to XML elements
    * Use the **Custom** option for the definition of a custom XML body with parameters:

        ![](attachments/18448730/18581792.png)

6. On the **HTTP Headers** tab in the **Call Web Service** wizard, you can enter authentication information using the **Edit** button if the Mendix Runtime should use this before calling the web service:

    ![](attachments/18448730/18581793.png)

7. On the **SOAP Response** tab of the **Call Web Service** wizard, you can configure the handling of the return from the web service call:
    * If the return is a complex XML structure, you can select the **Mapping** and use an XML-to-domain mapping to map the XML elements to the domain model entities:

        ![](attachments/18448730/18581790.png)

    * If the return is a primitive, you can store it in a variable that you can name in the **Store in variable** field:

        ![](attachments/18448730/18581789.png)
        
    * If you want to ignore the return, select the **Ignore** option
8.  Your imported web service is now ready to be used in your application.

## 5 Related Content

* [How to Consume a Simple Web Service](consume-a-simple-web-service)
* [How to Export XML Documents](export-xml-documents)
* [How to Import Excel Documents](importing-excel-documents)
* [How to Expose a Web Service](expose-a-web-service)
* [How to Use Selenium Support](selenium-support)
* [How to Synchronize User Accounts Using the LDAP Mmodule](synchronizing-user-accounts-using-the-ldap-module)
* [How to Import XML Documents](importing-xml-documents)
* [How to Consume a REST Service](consume-a-rest-service)
* [How to Expose Data to BI tools Using OData](exposing-data-to-bi-tools-using-odata)
