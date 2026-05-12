---
title: "Create Item with Item Revision"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/create-item-with-item-revision/
description: "Provides step by step guide to use the \"Create Item with Item Revision\" integration in Teamcenter Extension."
weight: 2
---

## Introduction {#introduction}

The **Create Item with Item Revision** integration allows you to configure and generate the domain model and microflow to create an `Item` with `ItemRevision` or its specializations in Teamcenter. The resulting microflow implements the `Create Object` and `Update Properties` actions from the Teamcenter Connector.  

This document takes you through a use case of creating Problem Reports in Teamcenter. Problem Reports, represented by the `Problem Report Revision` business object, are used to manage the documentation or reproduction of an issue. They can also be used to determine the severity and priority of the issue. 

## Step-by-Step Guide {#step-by-step-guide}

Follow these steps to create the integration:

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*. 

2. Click the **Create Item w/ Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix.    
    When creating a `Problem Report` in Teamcenter, two objects are generated: `Problem Report` (sub-class of `Item`) and its associated `Problem Report Revision` (sub-class of `Item Revision`). As such, the import mapping page contains placeholders to map both objects to Mendix entities.    
    Click one of the top placeholder entities to start the import mapping.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/import-mapping.png">}}

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter objects retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, you want to create Problem Reports, so you select `Problem Report`, which can be found under `Item` > `Change Item` > `Generic Problem Report`.
    2. The right side shows the Mendix entities that can serve as input parameters for the microflow to create an Item with Item Revision. If you create your own entity here, you can ensure that additional attributes are set in Teamcenter upon creation. As such, select `TcConnector.ItemRevision`.
    3. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named `PartRevision` after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/object-mapping.png">}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/object-mapping-result.png">}}

5. For this use case, you also want to create a Problem Report Revision, so repeat this process to select `Problem Report Revision` with another specialized entity.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/property-mapping.png">}}

6. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you want to create an integration to retrieve additional Problem Report Revision details. From the side panel, select the following attributes to add to the `Problem Report Revision` entity:

    * `Severity Rating`

   Once selected, click the backdrop or the close button to close the side panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/attribute-mapping.png">}}

7. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
   {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/create-item-with-item-revision/history.png">}}
   
## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `ProblemReport` – This is an entity representing a Problem Report from Teamcenter. It can be used to create a new Item in Teamcenter. 
* `ProblemReportRevision` – This is an entity representing Problem Report Revision from Teamcenter. It can be used to create a new Item Revision in Teamcenter.
* `ProblemReportCreateInput` – This is a helper entity that is used in the `ProblemReport_CreateItemAndItemRevision` microflow to create the Item in Teamcenter.
* `ProblemReportRevisionCompoundCreateInput` – This is a helper entity that is used in the `ProblemReport_CreateItemAndItemRevision` microflow to Create the `ItemRevision` in Teamcenter. 

### Microflows {#microflows}

The extension generated the following microflows in your project:

* `ProblemReport_CreateItemAndItemRevision` – This microflow implements the logic to create an item with item revision with only the necessary properties, and then it updates the objects with additional properties.
* `ProblemReportRevision_RetrieveProblemReport` – This microflow implements the logic to retrieve problem reports revision. It is primarily available if you are interested in retrieving problem report revisions that were created.
