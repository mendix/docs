---
title: "Publish a REST Service"
url: /refguide9/integration/publish-rest-service/
weight: 10
description: "Describes how to create a published REST service and return the results in JSON or XML."
aliases:
    - /howto9/integration/publish-rest-service/
---

## Introduction

Mendix allows you to publish REST web services natively from Studio Pro. This how-to will show you how to publish a REST service in an example project. This example will demonstrate the GET operation for a published REST service.

This how-to teaches you how to do the following:

* Create a published REST service and return the results in JSON or XML

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Studio Pro](https://marketplace.mendix.com/link/studiopro/)

## Setting Up the Example Project

To create the example project you will use in the next sections for publishing your REST service, follow these steps:

1. Create a new app and rename the **MyFirstModule** module to **RESTExample**.
2. Open the domain model of the RESTExample module.
3. Create entities with an association like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/domainmodel.png" class="no-border" >}}

4. You need pages for entering order data, so create an overview page for the **Order** entity In the RESTExample module.
5. Create a **NewEdit** page for the **OrderItem** entity, then add a data grid to the **Order_NewEdit** page that displays the **OrderItems** over an association.

Your page should now look like this:

{{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/order_NewEdit_Page.png" class="no-border" >}}

Add the overview page to your app navigation and run the application. Create a couple of orders and order lines by filling in the appropriate fields.

## Publishing the Service

To be able to use the data from your model in the REST service, you need to create a message definition.

### Creating the Mapping

1. In the **App Explorer**, right-click the **RESTExample** module and select **Add** > **Other** > **Message Definitions**.
2. In the **Add Message Definition** dialog box, enter *MD_Orders* as the name for this definition.
3. The message definition is now opened and you need to select the entity to use for the MD_Orders definition. To do this, select **Add** and in the dialog box, click **Select**, then choose the **Order** entity from the list.

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/MD_AddEntity.png" class="no-border" >}}

4. After selecting the **Order** entity, the **Structure** part of the dialog box is filled with only the **Order** object selected.
5. Select the **OrderID** and **Customer** attributes
6. Expand the **OrderItem_Order** association and select the **Product** and **Quantity** attributes:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/MD_SelectedAttributes.png" class="no-border" >}}

7. Click **OK** to close the dialog box.
8. Close the message definition, and make sure to save the definition if asked!

### Configuring the REST Service

1. In the **App Explorer**, right-click the **RESTExample** module and select **Add** > **Other** > **Published REST Service**.
2. Enter *PRS_OrderService*  for the **Name** of your REST service. The REST service is now opened.
3. Add a new resource to your service by clicking **Add**, and enter *GetOrderByID* for the **Resource name**:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/AddRestResource.png" class="no-border" >}}

    Click **OK** to close the dialog box.

4. Add an operation to your resource by clicking **Add** in the **Operations for resource** section.
5. In the **Operation** dialog box, enter`{OrderID}` in the **Operation path** field (make sure to include the braces). This will allow the REST service to be invoked with the OrderID in the URL shown in the **Example location** field of this same dialog box.

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/AddOperation.png" class="no-border" >}}

6. In the same dialog box, click **Select** next to the **Microflow** field. As you do not have a microflow for this operation, select the **RESTExample** module in the dialog box and then click **New** to create a new microflow. Enter *PRS_GetGetOrderByID* for the **Name** of this new microflow:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/AddOperationMicroflow.png" class="no-border" >}}

7. Click **Show** to start editing the newly created microflow.
8. Add two parameters: **httpRequest** and **OrderID**. 

    {{% alert color="info" %}}These parameters might be added automatically, along with an **httpResponse** paramter. If you create an **Export Mapping** in steps 11-19 below, you will need to remove the **httpResponse** parameter to avoid getting any errors.{{% /alert %}}

9. Add an action to the microflow to convert the **OrderID** variable (string) to an integer variable. This is needed to be able to search for the OrderID (autonumber).

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/ConvertOrderID.png" class="no-border" >}}

10. Add a second activity to the microflow to retrieve the **Order** based on the **OrderID**. This retrieve action from the database returns 1 order.

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/RetrieveOrder.png" class="no-border" >}}

11. <a id="eleven"></a>The next steps cover how you ensure that outputs are generated in JSON. You can do this using [Export Mappings](/refguide9/export-mappings/) or in a microflow. Steps 11-19 take you through the steps of building this Export Mapping. To start, right-click the RESTExample module on the App Explorer and select **Add other** > **Export Mapping** to add a new mapping named **EM_ExportOrder**.

    {{% alert color="info" %}}Creating an Export Mapping is not required because published REST services in Mendix support [content negotiation](https://nordicapis.com/content-negotiation/): the ability for clients to select the media type they want returned to the server. Follow the next steps in this document to learn how to set up Export Mapping in this case, but note that you can also return the list of objects from the microflow. The platform will export it in the format desired by the client, as indicated by the **Accept** header. The client can then specify if it wants to receive XML or JSON.{{% /alert %}}
    
12. In the **Select schema elements for export mapping** dialog box, select the **Message definition** option, and then select the **MD_Orders** mapping created earlier via the **Select** button:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/SelectSchemaForExport.png" class="no-border" >}}

    Make sure to select all the attributes a shown above, then click **OK**.

13. In the export mapping that is shown, map the objects to the same objects from the domain model (either by double-clicking or dragging from the **Connector** pane). Make sure to map the attributes with the same names. Your mapping should look like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/ExportMappingResult.png" class="no-border" >}}

14. Now go back to the **PRS_GetGetOrderByID** microflow and add an **Export with mapping** activity.
15. In the **Mapping** field of the dialog box, select the mapping created above in [step 11](#eleven). For the **Parameter** field, select the **Order** object retrieved with the database retrieve action in the microflow.
16. <a id="sixteen"></a>Select **JSON** for the result, and store the output in a **String variable**. Enter *Order_JSON* for the variable's **Name**.

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/MFExportWithMapping.png" class="no-border" >}}

17. Add an activity to the microflow to create an object of the type **HttpResponse**:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/httpResponse.png" class="no-border" >}}

    The **StatusCode** will return "OK" as a 200 message. The content of the message is mapped to the exported JSON from [step 16](#sixteen). And add the **HttpVersion** that you will be using (in this case, `HTTP/1.1`).

18. Add an activity to the microflow for adding a header to the response:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/httpResponseHeader.png" class="no-border" >}}

    Set the member **Key** to `'Content-Type'` and the **Value** to `'application/json'`(or `'application/xml'` if your response contains XML rather than JSON). Set the **System.HttpHeaders** association to your HTTP response.
19. Open the end activity in your microflow and select **$NewHttpResponse** as the return value. You should have no errors, and your microflow should look like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/CompleteMFNoErrorHandling.png" class="no-border" >}}
    
    If you have error CE0346, remove the **httpResponse** parameter that may have been automatically created in step 4.2.7.

### Viewing the App{#viewing}

To view and try out your app, follow these steps:

1. Run your app and open it in the browser via this URL: `http://localhost:8080/rest-doc/`.
2. You will see a page with the documentation of all your published REST services:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/RESTTestOverview.png" class="no-border" >}}

3. Click the **PRS_OrderService** link to view the details:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/RESTTestDetails.png" class="no-border" >}}

4. Click **GET** followed by **Try it out**.
5. Fill in a **OrderID** and click **Execute**:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/RESTTestExceute.png" class="no-border" >}}

    This will execute the request and return the result in the **Response body**:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/RESTTestResponse.png" class="no-border" >}}

Cool! You have published your first REST service from Mendix.

## Error Handling

In this new service, no error handling has been implemented. For example, if you now execute your service and enter a string in the **OrderID** parameter (or leave it out), you will see a 500 or a 404 generic error. So, error handling should be implemented to publish a robust service.

### Adding Error Handling

1. Open the **PRS_GetGetOrderByID** microflow, right-click the first activity, then select the option to **Set Error Handling** to **Custom with rollback**.
2. After the first activity, add an activity that creates a new HttpResponse object. Enter *NewHttpErrorResponse* for the **Name**, and map the attributes like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/ParsingErrorResponse.png" class="no-border" >}}

    For the **Content** member, the value is this JSON string: `'{"Error": "The OrderID can only be an integer"}'`.

3. Set the new activity as the custom error handler.
4. Below this activity, add a **Create object** activity that creates a new httpHeader object:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/ParsingErrorResponseHeader.png" class="no-border" >}}

    Make sure to associate the header to the **NewHttpErrorResponse**.

5. Add a new endpoint for the microflow and set **NewHttpErrorResponse** as the return value. Your microflow should now look like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/ParsingErrorMicroflow.png" class="no-border" >}}

6. Test your error handler as you did with the app in the [Viewing the App](#viewing) section. Enter some characters in the **OrderID** parameter and observe the response of the request, like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/ParsingErrorRESTResult.png" class="no-border" >}}

### Additional Error Handling

Now that you covered the error handling of the parameter parsing, it's time to handle empty responses. This is not really an error, but an indication of what happened when nothing was returned is always a good idea.

To add the error handling for those situations when the OrderID parameter is filled but no result is found, follow these steps:

1. After the activity for retrieving from the database, add a decision activity with the following statement: `$Order != empty`. The true exit is connected to the activity for exporting to JSON. For the false exit, add new create object activities that create a **NewhttpErrorNotFoundResponse** and a **NewhttpErrorNotFoundHeader**:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/OrderNotFoundResponse.png" class="no-border" >}}

    The **Content** is filled with the following string: `'{"Error": "No Order available for ID:'+$OrderID+'"}'`.

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/OrderNotFoundHeader.png" class="no-border" >}}

2. Configure the end activity to return the **NewHttpResponse**. The microflow should now look like this:

    {{< figure src="/attachments/refguide9/modeling/integration/publish-rest-service/CompleteMFWithErrorHandling.png" class="no-border" >}}

3. Test your new error responses as you did with the app in the [Viewing the App](#viewing) section.

## Read More

* For more information on creating published REST services in Mendix (including GET, POST, and DELETE operations), see [Published REST Services](/refguide9/published-rest-services/)
