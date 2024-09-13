---
title: "Server-Side Paging and Sorting for a Microflow Data Source"
linktitle: "Server-Side Paging and Sorting"
url: /refguide/server-side-paging/
weight: 2
description: "Describes how to create a data grid with a microflow data source which retrieves data from a REST service, and then add server-side paging and sorting to it."
aliases:
    - /howto/logic-business-rules/server-side-paging/
---

## Introduction

Using server-side paging and sorting for a microflow data source, you can model out how you retrieve data to a single page and ensure it ends up in the correct sorting order. With this approach, you do not need to return all the data to the client — you can just return a single page. This can be helpful for getting data from external sources like a REST service, but can also be useful for a regular retrieve activity in a microflow. To do this, you must model the logic for getting the correct data in the microflow itself.

This how-to teaches you how to do the following:

* Create a data grid with a microflow data source which retrieves data from a REST service
* Add server-side paging and sorting to that data grid

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro [8.2.0 or above](https://marketplace.mendix.com/link/studiopro/)
* If you are not familiar with using data from REST services, read [Consume a REST Service](/howto/integration/consume-a-rest-service/)

## Creating a Microflow Data Source

In this section, you will create a JSON structure and import mapping for a REST service. To do this, complete the first four sections of [Consume a REST Service](/howto/integration/consume-a-rest-service/) — (until **Adding an Input Entity to the Domain Model** is done). 

Complete these steps with one crucial change: you must use this REST service URL for your JSON snippet: `https://my-json-server.typicode.com/mendix/howto-api-data/airports`.

Once successful, your app should have the following elements:

* A JSON structure based on the airport data:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/json-structure.png" alt="json structure"   width="500"  class="no-border" >}}

* Import mapping:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/import-mapping.png" alt="import mapping"   width="500"  class="no-border" >}}

* An input entity added to the domain model:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/input-entity.png" alt="input entity"   width="500"  class="no-border" >}}

Now, you can start calling the REST service from your microflow data source. To create a microflow data source which returns a list of characters, do the following:

1. Right-click your module, click **Add Microflow**, and create a new microflow named *Call_REST*.
2. From the **Toolbox**, drag a **Call REST service** activity into the microflow.
3. Double-click your **Call REST service** activity.
4. Click the **Location** > **Edit** button: 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/edit-call-rest.png" alt="edit call rest"   width="500"  class="no-border" >}}

5. In the **Template** field, add `https://my-json-server.typicode.com/mendix/howto-api-data/airports` and click **OK**:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/add-airport-url.png" alt="airport template"   width="500"  class="no-border" >}}

6. Click the **Response** tab:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/response-tab.png" alt="response tab"   width="500"  class="no-border" >}}

7. Select **Apply import mapping** from the **Response handling** drop-down menu.
8. Click **Mapping** > **Select** and select the import mapping you created.
9. For **Variable Name**, type *Result*. Click **OK** to accept the changes:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/call-rest-response.png" alt="variable result"   width="500"  class="no-border" >}}

10. From the **Toolbox**, drag the **Retrieve** activity into the microflow and double-click it.
11. Click **Association** > **Select**.
12. Click **Expand All** and select **JsonObject_Summary (List of NativeMobile.JsonObject)**. 
13. Click **OK** to accept this association.
14. Right-click the **Retrieve** activity and select **Set $JsonObjectList as return value**:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/call-rest-returned.png" alt="set return value"   width="500"  class="no-border" >}}

## Creating a Data Grid with a Microflow Data Source

In the previous section, you created a microflow which returns a list of characters. Now, you will use this microflow as a data source for a data grid:

1. From the **Toolbox**, drag a **Data grid** onto a page.
2. Double-click the blue header of the newly-placed data grid.
3. Click the **Data source** tab:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/data-source.png" alt="data source tab" class="no-border" >}}

4. Select **Type** > **Microflow**. 
5. Click **Microflow** > **Select** and select the **Call_REST** microflow. 
6. Click **OK** to accept the changes to the data source.
7. When you see the **“Do you want to automatically fill the contents of the data grid?”** pop-up window, click **Yes**:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/auto-fill.png" alt="click yes"   width="500"  class="no-border" >}}

8. When you see the **“Do you want to generate controls for microflow source parameters of the data grid? This will enable server-side paging sorting and searching for the grid.”** pop-up window, click **Yes**:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/question-dialog.png" alt="click yes again"   width="500"  class="no-border" >}}

This generates a data view around your data grid, creates the necessary widgets and nanoflows, and adds the **Paging** object as an input to your microflow:

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/paging.png" alt="paging object"   width="500"  class="no-border" >}}

## Adding Paging Support to the Microflow Data Source

In the previous section, you added the **Paging** input parameter to your microflow. This parameter contains the **PageNumber** attribute, which is updated when you navigate through the pages with the paging bar in the client. In this section, you will use the **PageNumber** attribute to retrieve a specified page from your REST service:

1. Open the **CallREST** microflow.
2. Double-click the **Call REST service** activity and click **Location** > **Edit**.
3. Change **Template** to `https://my-json-server.typicode.com/mendix/howto-api-data/airports?_limit=5&_page={1}`:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/template-param-one.png" alt="add page bit to template"   width="500"  class="no-border" >}}

4. Click **Parameters** > **New** for a new parameter and enter the expression `toString($Paging/PageNumber)` for this parameter:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/page-parameter.png" alt="add page number parameter"   width="500"  class="no-border" >}}

5. Click **OK** > **OK** to accept this expression and in the location. 
6. Click **OK** to accept the changes for the **Call REST service** activity. You are now back at your microflow.

Deploy your app and navigate to the page where you added your data grid. You can now use your newly added server-side paging by using the paging bar buttons above the data grid. 

## Adding Server-Side Sorting Support to the Microflow Data Source

Now, you have service-side paging for your data grid. Next, add server-side sorting to it.

Clicking the header on the data grid in the client will update the **Paging** entity by setting the attribute **SortAttribute** to the attribute which is associated to the header you clicked. The **SortAscending** is set to **true** for ascending and **false** for a descending sort order.

Use these attributes when calling your REST service:

1. Open your **Call_REST** microflow.
2. Double-click the **Call REST service** activity and click **Location** > **Edit**.
3. Add `&_sort={2}&_order={3}` to the end of your current **Template** address:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/appended-template.png" alt="add sort and order bits to template"   width="500"  class="no-border" >}}

4. Click **Parameters** > **New** to add the second parameter and enter the expression `toLowerCase($Paging/SortAttribute)`:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/second-param.png" alt="add second parameter"   width="500"  class="no-border" >}}

5. Click **OK** to accept this expression.
6. Click **Parameters** > **New** to add the third parameter and enter the expression `if $Paging/SortAscending then 'asc' else 'desc'`:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/third-param.png" alt="add third parameter"   width="500"  class="no-border" >}}

7. Click **OK** > **OK** to accept this expression and in the location. 
8. Click **OK** to accept the changes in the **Call REST service** activity.

Deploy your app again and navigate to the page with your data grid. Click the column headers to see your server-side sorting in action.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/header-sorting-smaller2.gif" alt="click headers to sort" class="no-border" >}}

### Setting a Default Sort Order

You can set a default sort order for data. When a user has not clicked a header, the data will be ordered in the default sort order:

1. Open the page containing your data grid.
2. Right-click the data view surrounding the data grid.
3. Select **Go to data source nanoflow**.
4. Double-click the **Create object** activity: 

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/create-nano.png" alt="create object activity one"   width="500"  class="no-border" >}}

5. Click **New** to set the value for a member of the **Paging** entity.  
6. Click the **Member** drop-down menu and select **SortAttribute (String (200))**. 
7. Set **Value** to `'Name'`:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/name-value.png" alt="name value"   width="500"  class="no-border" >}}

8. Click **OK** > **OK** to accept the changes to the member and the **Create object** activity.

Deploy your app again and navigate to the page with your data grid. The data is now ordered by **Name**.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/data-by-name.png" alt="sorted by name"   width="500"  class="no-border" >}}

### Disabling Server-Side Sorting

Apps that use a REST service that does not support sorting, or apps that do not enable users to change sorting order, require special functionality. In these cases, disable sorting so that clicking the header has no effect:

1. Open the page containing the data grid.
2. Right-click the data view surrounding the data grid and select **Go to data source nanoflow**.
3. Double-click the **Create object** activity. 
4. Click **New** to set the value for another member of the **Paging** entity. 
5. Select **Member** > **IsSortable (Boolean)** from the drop-down menu.
6. Type *false* into **Value**:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/disable-sort.png" alt="value false" class="no-border" >}}

7. Click **OK** > **OK** to accept the changes to the member and the **Create object** activity.

Deploy your app again and navigate to the page with your data grid. The data is still ordered by **Name**, but you can no longer change the sorting by clicking the header. Note the lack of an arrow above the **Name** header.

{{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/sorting-disabled.png" alt="sorted but not clickable" class="no-border" >}}

## Adding Server-Side Searching

Generating controls also generates input fields for all your attributes of the entity the microflow returns. These inputs can be used by your user to enter search criteria, which can be used to filter the data set on the server. Any data entered in the input fields by the user is set in the **Paging** entity which is passed to the data source microflow. 

You only need to use this data in your microflow and pass the search criteria to your REST call to get a filtered set of data. As an example, follow the instructions below to filter the **Name** attribute:

1. Open your **Call_REST** microflow.
2. Double-click the **Call REST service** activity and click **Location** > **Edit**.
3. Add `&name_like={4}` to the end of your current **Template** address:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/template-add-search.png" alt="add search bits to template"   width="500"  class="no-border" >}}

4. Click **Parameters** > **New** to add the fourth parameter and enter the following expression:

    ```text
    if $Paging/Name = empty then '' else $Paging/Name
    ```

    {{< figure src="/attachments/refguide/modeling/integration/consumed-rest-services/server-side-paging/fourth-param.png" alt="add fourth parameter"   width="500"  class="no-border" >}}

5. Click **OK** > **OK** to accept this expression and the changes in the location. 
6. Click **OK** to accept the changes in the **Call REST service** activity.

Deploy your app again and navigate to the page with your data grid. Enter a value for a part of the name, for example, *International*, and click **Search** to see your server-side searching in action!

## Read More

* [Consume a REST Service](/howto/integration/consume-a-rest-service/)
* [JSON Structures Guide](/refguide/json-structures/)
* [Consumed REST Services Guide](/refguide/consumed-rest-services/)
