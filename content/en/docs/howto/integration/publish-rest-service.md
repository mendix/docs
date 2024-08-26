---
title: "Publish a REST Service"
url: /howto/integration/publish-rest-service/
weight: 10
description: "Describes how to create a published REST service and return the results in JSON or XML."
aliases:
    - /howto/integration/publish-rest-service/
---

## Introduction

Mendix allows you to publish REST web services natively from Studio Pro. This how-to explains how to publish a REST service in an example project and demonstrates the `GET` operation for a published REST service.

This how-to teaches you how to do the following:

* Create a published REST service and return the results in JSON or XML

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Studio Pro](https://marketplace.mendix.com/link/studiopro/)

## Setting Up the Example App

To set up the example app that you will use in the next sections for publishing your REST service, follow these steps:

1. Create a new app and rename the **MyFirstModule** module to **RESTExample**.
2. Open the domain model of the **RESTExample** module.
3. Create **OrderItem** and **Order** entities with a many-to-one association, like this:

    {{< figure src="/attachments/howto/integration/publish-rest-service/domainmodel.png" alt="Many-to-one association from OrderItem to Order" class="no-border" >}}

4. [Generate overview and detail pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/#create-automatically) for the **Order** and **OrderItem** entities.
5. [Add a data grid](/refguide/data-grid/) to the **Order_NewEdit** page. Set it to display the **OrderItem** objects from the database over an association, like this:
    
    {{< figure src="/attachments/howto/integration/publish-rest-service/DataGridSettings.png" alt="Data grid settings for the Order_NewEdit page" class="no-border" >}}

Your completed **Order_Overview** page should look like this:

{{< figure src="/attachments/howto/integration/publish-rest-service/order_NewEdit_Page.png" alt="Structure mode view of the Order_NewEdit page with data grid" class="no-border" >}}

Add the overview page to your app navigation. Then, run the application and create a couple of orders and order items.

## Publishing the Service

To use the data from your model in the REST service, you need to create a message definition.

### Creating the Mapping

To create the mapping, follow these steps:

1. In the **App Explorer**, right-click the **RESTExample** module and select **Add other** > **Message definitions**.
2. In the **Add Message Definitions** dialog box, enter *MD_Orders* in the **Name** field. Click **OK** to create and start editing the new message definition.
3. Select **Add** to open the **Message Definition** dialog box.
4. Click **Select** and choose the **Order** entity from the list. Selecting the entity fills in the **Structure** part of the **Message definition** dialog box. By default, only the **Order** checkbox is selected.
5. Select the **OrderID** and **Customer** attributes.
6. Select and expand the **OrderItem_Order** association, then select the **Product** and **Quantity** attributes:

    {{< figure src="/attachments/howto/integration/publish-rest-service/MD_SelectedAttributes.png" alt="Checkbox selections in the Message Definition 'Order' dialog box" class="no-border" >}}

7. Click **OK** to close the dialog box.
8. Save and close the **MD_Orders** message definition.

### Configuring the REST Service

1. In the **App Explorer**, right-click the **RESTExample** module and select **Add other** > **Published REST Service**.
2. Enter *PRS_OrderService* for the **Name** of your REST service. Then press **OK** to create and start editing the new REST service.
3. Add a new resource to your service by clicking **Add** in the **Resources** field. Enter **GetOrderByID** for the **Resource name**, then click **OK**.

    {{< figure src="/attachments/howto/integration/publish-rest-service/AddRestResource.png" alt="Adding a GetOrderByID resource" class="no-border" >}}

4. Add an operation to your resource by clicking **Add** in the **Operations for resource** field.
5. In the **Operation** dialog box, enter `{OrderID}` in the **Operation path** field, making sure to include the braces (`{}`). This allows the REST service to be invoked with the order ID in the URL shown in the **Example location** field of the dialog box.

    {{< figure src="/attachments/howto/integration/publish-rest-service/AddOperation.png" alt="{OrderID} in the Operation path field" class="no-border" >}}

6. In the same dialog box, click **Select** next to the **Microflow** field. You do not yet have a microflow for this operation, so select the **RESTExample** module in the dialog box and click **New** to create a new microflow. Enter *PRS_GetGetOrderByID* for the **Name** of this new microflow, then click **OK**.

7. In the **Parameters** field of the same **Operation** dialog box, click **Add** and add an **OrderID** path parameter.

    {{< figure src="/attachments/howto/integration/publish-rest-service/OperationsDialogSettings.png" alt="Operation path, microflow, and parameter settings" class="no-border" >}}

8. <a id="edit-microflow"></a>Click **OK** to close out the **Operation** dialog box, then click **Show** to start editing the newly created microflow. Add a **OrderID** parameter.

    {{% alert color="info" %}}This parameter might be added automatically, along with an **httpRequest** parameter. If an **httpRequest** parameter is added, remove it to avoid getting errors.<br/>
    An **httpResponse** parameter may also be automatically added. If this happens and you follow the steps below in [Building an Export Mapping](#export-mapping), you must remove the parameter to avoid getting errors.{{% /alert %}}

9. Add a **Create variable** activity to the microflow to convert the **OrderID** variable from data type **String** to **Integer/Long**. This makes it possible to search for the **OrderID** (an **AutoNumber** data type).

    {{< figure src="/attachments/howto/integration/publish-rest-service/ConvertOrderID.png" alt="Create Variable dialog box used to parse OrderID as an integer variable" class="no-border" >}}

10. Add a **Retrieve** activity to the microflow to retrieve the **Order** based on the **OrderID**. Set this activity to retrieve the first matching order from the database.

    {{< figure src="/attachments/howto/integration/publish-rest-service/RetrieveOrder.png" alt="Range and XPath constraint settings in the Retrieve Objects dialog box" class="no-border" >}}

#### Building an Export Mapping (optional){#export-mapping}

The next steps explain how to ensure that outputs are generated in JSON. You can do this using [Export Mappings](/refguide/export-mappings/) or in a microflow. Creating an export mapping is not required because published REST services in Studio Pro support [content negotiation](https://nordicapis.com/content-negotiation/), which means the REST services let you select which media type you want to be returned to the server.

{{% alert color="info" %}}You can follow the next steps in this document to learn how to set up export mapping, but note that you can also return the list of objects from the microflow. Studio Pro will export it in the desired format, as indicated by the `Accept` header. You can then specify if you want to receive XML or JSON. If you are using a microflow instead of export mappings, skip ahead to [Viewing the App](#viewing).{{% /alert %}}

To build an export mapping, follow these steps:

1. Right-click the **RESTExample** module on the **App Explorer** and select **Add other** > **Export mapping** to add a new export mapping named *EM_ExportOrder*.
    
2. In the **Select schema elements for export mapping** dialog box, select **Message definition**. Then, click **Select** to choose **Order** from the **MD_Orders** mapping you created earlier. Select all the attributes, as shown below, and click **OK**.

    {{< figure src="/attachments/howto/integration/publish-rest-service/SelectSchemaForExport.png" alt="All attribute checkboxes selected in the Select schema elements for export mapping dialog" class="no-border" >}}

3. In the export mapping that is shown, map the schema object elements to the matching entities from the domain model by either double-clicking the schema object elements or dragging the entities from the **Connector** pane. Make sure to map the attributes with the same names. Your mapping should look like this:

    {{< figure src="/attachments/howto/integration/publish-rest-service/ExportMappingResult.png" alt="Mapping Order to Order and OrderItem to OrderItem" class="no-border" >}}

4. Go back to the **PRS_GetGetOrderByID** microflow and add an **Export with mapping** activity.
5. In the **Mapping** field of the dialog box, select the **EM_ExportOrder** mapping. In the **Parameter** field, select the **Order** object that was retrieved with the **Retrieve** action in the microflow.
6. Select **JSON** for the result, and store the output in a **String Variable**. Enter *Order_JSON* for the **Variable name**.

    {{< figure src="/attachments/howto/integration/publish-rest-service/MFExportWithMapping.png" alt="Export With Mapping dialog box settings" class="no-border" >}}

7. Add a **Create object** activity to the microflow to create an object of type **HttpResponse**. Create three new members:
    * A **StatusCode** that returns the value `200` to indicate success
    * **Content** mapped to the exported JSON from the previous step
    * The **HttpVersion** that you will be using (`'HTTP/1.1'` in this case)

    {{< figure src="/attachments/howto/integration/publish-rest-service/httpResponse.png" alt="Create Object dialog box for HttpResponse object" class="no-border" >}}

8. Add a **Create object** activity to the microflow to create an object of type **HttpHeader**. Create three new members:
    * **Key**, set to `'Content-Type'`
    * **Value**, set to `'application/json'` (or `'application/xml'` if your response contains XML rather than JSON)
    * **System.HttpHeaders**, set to your HTTP response (`$NewHttpResponse`).

    {{< figure src="/attachments/howto/integration/publish-rest-service/httpResponseHeader.png" alt="Create Object dialog for HttpHeader" class="no-border" >}}

9. Open the **End Event** in your microflow and enter `$NewHttpResponse` as the return value. Your completed microflow should look like this:

    {{< figure src="/attachments/howto/integration/publish-rest-service/CompleteMFNoErrorHandling.png" alt="Completed PRS_GetGetOrderByID microflow" class="no-border" >}}

    {{% alert color="info" %}}You should have no errors. If you have error CE0346, check if an **httpResponse** parameter was automatically created when you [started editing the microflow](#edit-microflow). If there is one, remove it.{{% /alert %}}

### Viewing the App {#viewing}

To view and try out your app, follow these steps:

1. Run your app and open it in the browser using this URL: [http://localhost:8080/rest-doc/](http://localhost:8080/rest-doc/).
2. You will see a page with the documentation of all your published REST services. Click the **PRS_OrderService** link to view the details:

    {{< figure src="/attachments/howto/integration/publish-rest-service/RESTTestDetails.png" alt="Details for the PRS_OrderService" class="no-border" >}}

3. Click **GET**. Then, click **Try it out** and enter an **OrderID**.

    {{< figure src="/attachments/howto/integration/publish-rest-service/RESTTestExecute.png" alt="OrderID with Description input field" class="no-border" >}}

4. Click **Execute** to run the request and return the result in the **Response body**.

    {{< figure src="/attachments/howto/integration/publish-rest-service/RESTTestResponse.png" alt="Result in Response" class="no-border" >}}

Congratulations! You have published your first REST service from Mendix.

## Error Handling

You have not yet implemented error handling in this new service. For example, if you enter text instead of an integer in the **OrderID** parameter (or if you leave it blank) before clicking **Execute**, you will see a generic `500` or `404` error. To publish a more robust service, implement error handling.

### Adding Error Handling

1. Open the **PRS_GetGetOrderByID** microflow and right-click the first activity. Select **Set error handling** > **Custom with rollback** > **OK**.
2. Hover your mouse over the error handling flow. Click the blue circle and select **Create object**.
   
    {{< figure src="/attachments/howto/integration/publish-rest-service/create-object.png" class="no-border" >}}

3. Create a new **HttpResponse** object and enter *NewHttpErrorResponse* for the **Name**. Then, map the attributes as shown below:

    {{< figure src="/attachments/howto/integration/publish-rest-service/ParsingErrorResponse.png" alt="Create Object dialog box for NewHttpErrorResponse" class="no-border" >}}

    {{% alert color="info" %}}The **Content** value is the JSON string `'{"Error": "The OrderID can only be an integer"}'`.{{% /alert %}}

4. Hover your mouse over the next error handling flow, click the blue dot, and add another **Create object** activity to create a new **httpHeader** object. Map the attributes as shown below:

    {{< figure src="/attachments/howto/integration/publish-rest-service/ParsingErrorResponseHeader.png" alt="Create Object dialog box for NewHttpHeader_1" class="no-border" >}}

5. Add an **End Event** and set `$NewHttpErrorResponse` as its return value. Your microflow should look like this:

    {{< figure src="/attachments/howto/integration/publish-rest-service/ParsingErrorMicroflow.png" alt="Updated microflow with error handling" class="no-border" >}}

6. Test your error handler, as you did with the app in the [Viewing the App](#viewing) section. Enter some text in the **OrderID** parameter, click **Execute**, and observe the request's response:

    {{< figure src="/attachments/howto/integration/publish-rest-service/ParsingErrorRESTResult.png" alt="Error in server response" class="no-border" >}}

### Additional Error Handling

Now that you have covered the **OrderID** parameter error handling, it is time to handle empty responses. Empty responses are not technically errors, but it is good practice to indicate what happened when nothing is returned. To add error handling for the situations when the **OrderID** parameter is filled with a valid integer but no corresponding **Order** result is found in the database, follow these steps:

1. After the Retrieve order from database activity, add a decision activity with the following expression: `$Order != empty`. Connect the **true** exit to the activity for exporting to JSON. For the **false** exit, add a new **Create object** activity that creates a **NewHttpErrorNotFoundResponse** object.

    {{< figure src="/attachments/howto/integration/publish-rest-service/OrderNotFoundResponse.png" alt="Create Object dialog box for NewHttpErrorNotFoundResponse" class="no-border" >}}

    {{% alert color="info" %}}The **Content** value is the string `'{"Error": "No Order available for ID:'+$OrderID+'"}'`.{{% /alert %}}

2. Add an activity to create a **NewHttpErrorNotFoundHeader** object.

    {{< figure src="/attachments/howto/integration/publish-rest-service/OrderNotFoundHeader.png" alt="Create Object dialog box for NewHttpErrorNotFoundHeader" class="no-border" >}}

3. Configure the **End Event** to return `$NewHttpErrorNotFoundResponse`. The microflow should look like this:

    {{< figure src="/attachments/howto/integration/publish-rest-service/CompleteMFWithErrorHandling.png" alt="Updated microflow with decision activity and false exit" class="no-border" >}}

4. Test your new error responses, as you did with the app in the [Viewing the App](#viewing) section.

## Read More

* [Published REST Services](/refguide/published-rest-services/) – Information on creating published REST services in Mendix (including `GET`, `POST`, and `DELETE` operations)
