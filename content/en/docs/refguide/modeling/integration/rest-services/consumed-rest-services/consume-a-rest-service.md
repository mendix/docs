---
title: "Advanced Consumed REST Services"
url: /refguide/integration/consume-a-rest-service/
weight: 9
description: "Describes how to integrate an existing system or a legacy system into a Mendix app by calling a REST service in a microflow."
description: "Describes how to get information from a REST service."
aliases:
    - /howto/integration/consume-a-rest-service/
---

## Introduction

In your Mendix app, you can use information from REST services. This how-to shows you how to do that through an example where you create an app that retrieves Wikipedia pages from a REST service. The resulting app is [available for download](/attachments/refguide/modeling/integration/consume-a-rest-service/WikipediaApi.mpk).

This how-to teaches you how to do the following:

* Call the REST service in a microflow

## Creating a JSON Structure

The Wikipedia REST service allows you to retrieve the summary of a page. This service can be reached at `https://en.wikipedia.org/api/rest_v1/page/summary/{title}`, where `{title}` is the title of a page.

The steps below use Studio Pro as an example of what the REST service returns:

1. Open your browser and go to [https://en.wikipedia.org/api/rest_v1/page/summary/Tahiti](https://en.wikipedia.org/api/rest_v1/page/summary/Tahiti).
   
   This calls the REST service with a `GET` request. The result is the summary of the [Tahiti page on Wikipedia](https://en.wikipedia.org/wiki/Tahiti) in JSON format:

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/get-call-result.png" alt="Screenshot of the result of the rest call" class="no-border" >}}

2. Select the **Raw Data** tab and copy the whole JSON snippet.
3. Create a module and name it *RESTconsume*. 
4. Add the new [JSON structure](/refguide/json-structures/) to your module by right-clicking the module in the **App Explorer** and selecting **Add other** > **JSON structure**. 
5. Enter *JSON_structure* in the **Name** field and click **OK**.
6. In the **JSON Structure** dialog box, paste the JSON snippet in the **General** tab and click **Refresh** in the **Structure** section. This analyzes the structure of the JSON snippet and provides a representation of it.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/json-structure.png" class="no-border" >}}

7. Click **OK**

## Creating an Import Mapping {#create-import-mapping}

An [import mapping](/refguide/import-mappings/) specifies how the JSON relates to [entities](/refguide/entities/). You can map the JSON to any entity you like. The following steps describe how to generate the entities and create an import mapping:

1. Right-click the module in the **App Explorer** and select **Add other** > **Import Mapping**.
2. Enter *Import_mapping* in the **Name** field and click **OK**.
3. In the **Select schema elements for import mapping** dialog box, click the radio button for **JSON structure**, then click **Select**.
4. Double-click **JSON_structure** in the **Select JSON Structure** dialog box.
5. Click **Expand all**, then click **Check all**.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/import-mapping.png" class="no-border" >}}

6. Click **OK**. The **Import_mapping** document is displayed with the JSON structure on the right.
7. Click **Map automatically** in the editor toolbar. 
8. A pop-up box is displayed that you that can **See the details for the changes that have been applied**. Click **Details** to see details of the mapping to the entities that are generated to match the JSON structure.
9. Click **Close** to see the entities corresponding to the JSON structure.

## Adding an Input Entity to the Domain Model

The service takes the title of the page as an input and returns the summary of the page from Wikipedia. 

In this section, you will create an entity that represents this input and associate it with its summary.

To add an input entity to the domain model, follow these steps:

1. In the **App Explorer**, double-click the **Domain model**.
2. Rename **Root** to *Summary*.
3. From the **Toolbox**, drag an entity into the domain model. 
4. Double-click the entity and enter *Input* for the **Name**.
5. For **Persistable**, select **No**.
6. On the **Attributes** tab, click **New** to add a string attribute, name it *Title*, then click **OK**.
7. Drag an association from **Input** to **Summary**.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/domain-model.png" class="no-border" >}}

8. Double-click **Import_mapping** in the **App Explorer** and from the **Connector** pane, drag **Input** as the input parameter for the input mapping.
9. Double-click **Summary**.
10. In the **Map entity 'Summary' from schema object element 'Root** dialog box, **Set association** to **Yes** and select the **RESTconsume_input_Summary** for the **Association** to enable the import mapping to set the association:

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/map-entity-from-input-mapping.png" alt="map entity from input mapping" class="no-border" >}}

11. Click **OK**. 

## Calling the REST Service in a Microflow {#call-microflow}

You will now call the REST service in a [microflow](/refguide/microflows/) to build the integration with Wikipedia. The input parameter for the microflow is **Input**, which is associated with **Summary**.

To call the REST service in a microflow, follow these steps:

1. Right-click the module and select **Add Microflow**. Then, accept the default name **Microflow** and click **OK**.
2. From the toolbar, drag a **Parameter** object to the microflow document.
3. For the **Data type**, click **Select** and select the **Input** entity as the input parameter. Click **OK**. 
4. Right-click and select **Add** > **Activity** and insert this to the microflow. Double-click the activity and select  **Call REST service** to change the type of action.
5. In the **Call REST** dialog box, click **Edit** for the **Location** and add the following to **Template**: `https://en.wikipedia.org/api/rest_v1/page/summary/{1}`, with the parameter being the Title attribute from the **Input** parameter `$Input/Title`. Click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/location.png" class="no-border" >}}

6. In the **Response** tab, the response has to be mapped using the import mapping. For **Response handling**, select **Apply import mapping**.
7. For **Mapping**, click **Select** and double-click **Import_mapping**. For the **Parameter**, select **Input**. 
8. For **Output** select **Yes** for **Store in variable** and specify *Summary* for the **Variable name**.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/response.png" class="no-border" >}}

9. Click **OK**.
10. Right-click after the **Call REST service** object and select **Insert** > **Activity**. Double-click it and change it to a **Change object**.
11. For the **Input Object**, select **Input (RESTconsume.Input)**.
12. For **Refresh in client**, select **Yes**. This ensures the summary is displayed on the screen.
13. To add an action, click **New**.
14. On the **Edit Change Item** dialog box, for **Member**, select **RESTconsume.Input_Summary (RESTconsume.Summary)**.
15. Under **Value**, enter `$Summary`.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/set-association.png" class="no-border" >}}

16. Click **OK**.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/change-object.png" class="no-border" >}}

17. Click **OK**. You have created microflow that takes the title of an article as input and associates it with its summary.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/microflow.png" class="no-border" >}}

You have successfully consumed a REST service and created a microflow to show the results. The rest of this how-to describes how to use this microflow in an app so you can see the REST call in action.

## Creating a Page

To create a page for this app, follow these steps:

1. Open the **Home_Web** and add a **Data view**.
2. Right-click the **[Unknown]** bar, click **Select entity** and select the **Input** entity.
3. For the **Data source – Type**, select **Microflow**.
4. For the **Microflow Name**, enter *CreateInput*. Note that when this page loads, it needs a new **Input** object. You will define the **CreateInput** microflow that creates this object in [Filling In the Create Input Microflow](#createinput).
5. Click **OK**.
6. In the **App Explorer** under **Structure**, add a new **Table** with one row and two columns.
7. Drag the **Title** field onto the left column.
8. Delete the **Summary** field.
9. From the **App Explorer**, drag a **Call Microflow button** into the right column.
10. In the **Select Microflow** dialog box, expand **RESTconsume** and select **Microflow**. This is the microflow you created in the [Calling the REST Service in a Microflow](#call-microflow) section above.
11. Double-click the **Microflow** button and in the **Edit Action Button** dialog box, enter *Get summary* for button caption.
12. Add a **Data view** below the table (inside the other data view).
13. From the **Connector**, drag the **Summary** entity onto the **[Unknown]** bar and click **OK**.
14. From this data view, delete all the fields except **Extract**.
15. Double-click **Extract**.
16. For **Show label**, select **No**, then click **OK**.
17. Delete the **Save** and **Cancel** buttons.

    {{< figure src="/attachments/refguide/modeling/integration/consume-a-rest-service/page.png" class="no-border" >}}

## Filling in the Create Input Microflow {#createinput}

Now, all that is left is to have the **CreateInput** microflow create a new **Input** object.

To fill in the CreateInput microflow, follow these steps:

1. In the **App Explorer**, double-click **CreateInput**. 
2. From the **Toolbox**, drag a **Create object** activity to the microflow.
3. Double-click the activity.
4. For **Entity**, click **Select** and double-click **Input**, then click **OK**.
5. Double-click the red **End event**.
6. Under **Return value**, enter `$NewInput`, then click **OK**.

You can now start your app and get summaries from Wikipedia.

## Read More

* [Consume a Complex Web Service](/howto/integration/consume-a-complex-web-service/)
* [Consume a Simple Web Service](/howto/integration/consume-a-simple-web-service/)
* [Export XML Documents](/howto/integration/export-xml-documents/)
* [Import XML Documents](/howto/integration/importing-xml-documents/)
* [Import Excel Documents](/howto/integration/importing-excel-documents/)
* [Expose a Web Service](/howto/integration/expose-a-web-service/)
* [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/)
* [Security Considerations](/refguide/call-rest-action/#security)
