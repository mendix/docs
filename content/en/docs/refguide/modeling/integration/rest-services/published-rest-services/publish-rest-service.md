---
title: "Publish a REST Service"
url: /howto/integration/publish-rest-service/
category: "Integration"
weight: 10
description: "Describes how to create a published REST service and return the results in JSON or XML."
tags: ["rest", "rest service", "web service", "integration"]
aliases:
    - /howto/integration/publish-rest-service/
---

## 1 Introduction

Mendix allows you to publish REST web services natively from Studio Pro. This how-to explains how to publish a REST service in an example project, and it demonstrates the `GET` operation for a published REST service.

This how-to teaches you how to do the following:

* Create a published REST service and return the results in JSON or XML

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Studio Pro](https://marketplace.mendix.com/link/studiopro/)

## 3 Setting Up the Example App

To set up the example app that you will use in the next sections for publishing your REST service, follow these steps:

1. Create a new app and rename the **MyFirstModule** module to **RESTExample**.
2. Open the domain model of the **RESTExample** module.
3. Create **OrderItem** and **Order** entities with a many-to-one association, like this:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/domainmodel.png" alt="Many-to-one association from OrderItem to Order" >}}

4. [Generate overview and detail pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/#3-creating-overview-and-detail-pages-automatically) for the **Order** and **OrderItem** entities.
5. [Add a data grid](/refguide/data-grid/) to the **Order_NewEdit** page. Set it to display the **OrderItem** objects from the database over an association, like this:
    
    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/DataGridSettings.png" alt="Data grid settings for the Order_NewEdit page" >}}

Your completed **Order_Overview** page should look like this:

{{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/order_NewEdit_Page.png" alt="Structure mode view of the Order_NewEdit page with data grid" >}}

Add the overview page to your app navigation. Then, run the application and create a couple of orders and order items.

## 4 Publishing the Service

To use the data from your model in the REST service, you need to create a message definition.

### 4.1 Creating the Mapping

To create the mapping, follow these steps:

1. In the **App Explorer**, right-click the **RESTExample** module and select **Add other** > **Message definitions**.
2. In the **Add Message Definitions** dialog box, enter *MD_Orders* in the **Name** field. Click **OK** to create and start editing the new message definition.
3. Select **Add** to launch the **Message Definition** dialog box.
4. You need to select the entity to use for the **MD_Orders** definition. Click **Select** and choose the **Order** entity from the list. Selecting the entity fills in the **Structure** part of the **Message Definition** dialog box. By default, only the **Order** checkbox is selected.
5. Select the **OrderID** and **Customer** attributes.
6. Select and expand the **OrderItem_Order** association, then select the **Product** and **Quantity** attributes:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/MD_SelectedAttributes.png" alt="Checkbox selections in the Message Definition 'Order' dialog box" >}}

7. Click **OK** to close the dialog box.
8. Save and close the **MD_Orders** message definition.

### 4.2 Configuring the REST Service

1. In the **App Explorer**, right-click the **RESTExample** module and select **Add other** > **Published REST Service**.
2. Enter *PRS_OrderService* for the **Name** of your REST service. Then press **OK** to create and start editing the new REST service.
3. Add a new resource to your service by clicking **Add** in the **Resources** section. Enter **GetOrderByID** for the **Resource name**, then click **OK** to close the dialog box.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/AddRestResource.png" alt="Adding a GetOrderByID resource" >}}

4. Add an operation to your resource by clicking **Add** in the **Operations for resource** section.
5. In the **Operation** dialog box, enter `{OrderID}` in the **Operation path** field, making sure to include the braces (`{}`). This allows the REST service to be invoked with the order ID in the URL shown in the **Example location** field of the dialog box.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/AddOperation.png" alt="{OrderID} in the Operation path field" >}}

6. In the same dialog box, click **Select** next to the **Microflow** field. You do not yet have a microflow for this operation, so select the **RESTExample** module in the dialog box and click **New** to create a new microflow. Enter *PRS_GetGetOrderByID* for the **Name** of this new microflow.

7. From the **Parameters** section of the same **Operation** dialog box, click **Add** and add an **OrderID** path parameter.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/OperationsDialogSettings.png" alt="Operation path, microflow, and parameter settings" >}}

8. <a id="edit-microflow"></a>Click **OK** to close out the **Operation** dialog box, and then click **Show** to start editing the newly created microflow. Add two parameters: **httpRequest** and **OrderID**.

    {{% alert color="info" %}}These parameters might be added automatically, along with an **httpResponse** parameter. If you follow the steps below in [Building an Export Mapping](#export-mapping), you must remove the **httpResponse** parameter to avoid getting errors.{{% /alert %}}

9. Add a **Create variable** activity to the microflow to convert the **OrderID** variable from data type **String** to **Integer/Long**. This makes it possible to search for the **OrderID** (an **AutoNumber** data type).

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/ConvertOrderID.png" alt="Create Variable dialog box used to parse OrderID as an integer variable" >}}

10. Add a **Retrieve** activity to the microflow to retrieve the **Order** based on the **OrderID**. Set this activity to retrieve the first matching order from the database.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/RetrieveOrder.png" alt="Range and XPath constraint settings in the Retrieve Objects dialog box" >}}

#### 4.2.1 Building an Export Mapping (optional){#export-mapping}

The next steps explain how to ensure that outputs are generated in JSON. You can do this using [Export Mappings](/refguide/export-mappings/) or in a microflow. Creating an export mapping is not required because published REST services in Mendix support [content negotiation](https://nordicapis.com/content-negotiation/); in other words, the REST services let you select which media type you want to be returned to the server.

{{% alert color="info" %}}You can follow the next steps in this document to learn how to set up export mapping, but note that you can also return the list of objects from the microflow. The platform will export it in the desired format, as indicated by the `Accept` header. You can then specify if you want to receive XML or JSON. If you are using a microflow instead of export mappings, skip ahead to [Viewing the App](#viewing).{{% /alert %}}

To build an export mapping, follow these steps:

1. Right-click the **RESTExample** module on the **App Explorer** and select **Add other** > **Export Mapping** to add a new export mapping named *EM_ExportOrder*.
    
2. In the **Select schema elements for export mapping** dialog box, select **Message definition**. Then use the **Select** button to select **Orders** from the **MD_Orders** mapping you created earlier. Select all the attributes, as shown below, and click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/SelectSchemaForExport.png" alt="All attribute checkboxes selected in the Select schema elements for export mapping dialog" >}}

3. In the export mapping that is shown, map the schema object elements to the matching entities from the domain model (either by double-clicking the schema object elements or dragging the entities from the **Connector** pane). Make sure to map the attributes with the same names. Your mapping should look like this:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/ExportMappingResult.png" alt="Mapping Order to Order and OrderItem to OrderItem" >}}

4. Go back to the **PRS_GetGetOrderByID** microflow and add an **Export with mapping** activity.
5. In the **Mapping** field of the dialog box, select the **EM_ExportOrder** mapping. For the **Parameter** field, select the **Order** object that was retrieved with the **Retrieve** action in the microflow.
6. Select **JSON** for the result, and store the output in a **String Variable**. Enter *Order_JSON* for the **Variable name**.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/MFExportWithMapping.png" alt="Export With Mapping dialog box settings" >}}

7. Add a **Create object** activity to the microflow to create an object of type **HttpResponse**. Create three new members:
    * A **StatusCode** that returns the value `200` to indicate success
    * **Content** mapped to the exported JSON from the previous step
    * The **HttpVersion** that you will be using (`'HTTP/1.1'` in this case)

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/httpResponse.png" alt="Create Object dialog box for HttpResponse object" >}}

8. Add a **Create object** activity to the microflow for adding a header to the response. Create three new members:
    * **Key**, set to `'Content-Type'`
    * **Value**, set to `'application/json'` (or `'application/xml'` if your response contains XML rather than JSON)
    * **System.HttpHeaders**, set to your HTTP response (`$NewHttpResponse`).

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/httpResponseHeader.png" alt="Create Object dialog for HttpHeader" >}}

9. Open the **End Event** in your microflow and enter `$NewHttpResponse` as the return value. Your completed microflow should look like this:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/CompleteMFNoErrorHandling.png" alt="Completed PRS_GetGetOrderByID microflow" >}}

    {{% alert color="info" %}}You should have no errors. If you have error CE0346, check if an **httpResponse** parameter was automatically created when you [started editing the microflow](#edit-microflow). If there is one, remove it.{{% /alert %}}

### 4.3 Viewing the App {#viewing}

To view and try out your app, follow these steps:

1. Run your app and open it in the browser using this URL: [http://localhost:8080/rest-doc/](http://localhost:8080/rest-doc/).
2. You will see a page with the documentation of all your published REST services. Select the **PRS_OrderService** link to view the details:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/RESTTestDetails.png" alt="Details for the PRS_OrderService" >}}

3. Click **GET**. Then click **Try it out** and fill in an **OrderID**.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/RESTTestExecute.png" alt="OrderID with Description input field" >}}

4. Click **Execute** to run the request and return the result in the **Response body**.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/RESTTestResponse.png" alt="Result in Response" >}}

Congratulations! You have published your first REST service from Mendix.

## 5 Error Handling

You have not yet implemented error handling in this new service. For example, if you enter text instead of an integer in the **OrderID** parameter (or if you leave it blank) before clicking **Execute**, you will see a generic `500` or `404` error. So, to publish a more robust service, you should implement error handling.

### 5.1 Adding Error Handling

1. Open the **PRS_GetGetOrderByID** microflow and right-click the first activity. Select **Set error handling** > **Custom with rollback**. Press **OK**.
2. Below the initial **Create variable** activity, add a **Create object** activity. Set it to create a new **HttpResponse** object, and enter *NewHttpErrorResponse* for the **Name**. Then map the attributes like this:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/ParsingErrorResponse.png" alt="Create Object dialog box for NewHttpErrorResponse" >}}

    {{% alert color="info" %}}The **Content** value is the JSON string `'{"Error": "The OrderID can only be an integer"}'`.{{% /alert %}}

3. Right-click the sequence flow between the **Create variable** and **Create object** activities, and select **Set as error handler**.
4. Below the **Create object** activity, add another **Create object** activity that creates a new **httpHeader** object:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/ParsingErrorResponseHeader.png" alt="Create Object dialog box for NewHttpHeader_1" >}}

5. Right-click the sequence flow between the two **Create object** activities, and select **Set as error handler**.
6. Add an **End Event** and set `$NewHttpErrorResponse` as its return value. Your microflow should look like this:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/ParsingErrorMicroflow.png" alt="Updated microflow with error handling" >}}

7. Test your error handler, as you did with the app in the [Viewing the App](#viewing) section. Enter some text in the **OrderID** parameter, click **Execute**, and observe the request's response:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/ParsingErrorRESTResult.png" alt="Error in server response" >}}

### 5.2 Additional Error Handling

Now that you have covered the error handling of the **OrderID** parameter parsing, it is time to handle empty responses. Empty responses are not technically errors, but it is always a good idea to indicate what happened when nothing is returned. To add error handling for those situations when the **OrderID** parameter is filled with a valid integer but no corresponding **Order** result is found in the database, follow these steps:

1. After the activity for retrieving from the database, add a decision activity with the following expression: `$Order != empty`. Connect the **true** exit to the activity for exporting to JSON. For the **false** exit, add a new **Create object** activity that creates a **NewHttpErrorNotFoundResponse** object.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/OrderNotFoundResponse.png" alt="Create Object dialog box for NewHttpErrorNotFoundResponse" >}}

    {{% alert color="info" %}}The **Content** value is the string `'{"Error": "No Order available for ID:'+$OrderID+'"}'`.{{% /alert %}}

2. Add an activity to create a **NewHttpErrorNotFoundHeader** object.

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/OrderNotFoundHeader.png" alt="Create Object dialog box for NewHttpErrorNotFoundHeader" >}}

3. Configure the **End Event** to return `$NewHttpErrorNotFoundResponse`. The microflow should look like this:

    {{< figure src="/attachments/refguide/modeling/integration/publish-rest-service/CompleteMFWithErrorHandling.png" alt="Updated microflow with decision activity and false exit" >}}

4. Test your new error responses, as you did with the app in the [Viewing the App](#viewing) section.

## 6 Read More

* [Published REST Services](/refguide/published-rest-services/) – Information on creating published REST services in Mendix (including `GET`, `POST`, and `DELETE` operations)
