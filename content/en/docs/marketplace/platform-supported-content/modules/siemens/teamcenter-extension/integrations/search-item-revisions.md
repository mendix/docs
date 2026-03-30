---
title: "Search Item Revisions"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/search-item-revisions/
description: "Provides step by step guide to use \"Search Item Revisions\" integration in Teamcenter Extension."
weight: 1
---

## Introduction {#introduction}

The  **Search Item Revisions** integration allows you to generate the domain model and microflow to search for an `Item Revision` or its specialization. The resulting microflow implements the out of the box saved query `Item Revision...` from Teamcenter.  

This document takes you through a use case of retrieving Part Revisions from Teamcenter. Part Revisions are specific iterations of a part of a product that is managed using Teamcenter. A Part Revision contains essential information like the schematics of the Part. Since a Part Revision is a subtype of an Item Revision, it can be revised.

## Step-by-Step guide {#step-by-step-guide}

Follow these steps to create the integration:

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Search Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-item-revisions/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix.    
Click one of the placeholder entities to start the import mapping.  
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-item-revisions/import-mapping.png">}}

4. In the object mapping panel that opens, follow these steps: 

    1. The left side shows all Teamcenter objects retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, select `Part Revision (Part Revision)`, which can be found under `Item Revision`.     
    2. The right side shows the relevant Mendix entities for which objects can be created when retrieving Item Revisions from Teamcenter. For this use case, you want to have an entity specifically for `Part Revisions`, so you can make changes and add new attributes to it. As such, select `TcConnector.ItemRevision`.
    3. Select the **Create new Specialization of selected entity** checkbox. The entity is automatically named `PartRevision` after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel. 
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-item-revisions/object-mapping.png">}}

5. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you want to create an integration to retrieve additional Part Revision details. From the side panel, select the following attributes to add to the `Part Revision` entity:

    * `Finish Type`
    * `Multi-body`
    * `Safety Part`
    * `Standard`
    * `Spare Part`
    * `Technology Intent`

    Once selected, click the backdrop or the close button to close the side panel. 
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-item-revisions/property-mapping.png">}} 

6. Click the **Generate** button to generate the appropriate domain model and microflows, so that you can start retrieving Part Revisions in your application.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-item-revisions/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `PartRevision` – This entity represents a `PartRevision` from Teamcenter. The objects can be retrieved via `PartRevision_SavedQueryItemRevision`. 

### Microflows {#microflows}

The extension generated the following microflows in your project:

* `PartRevision_SavedQueryItemRevision` - This microflow can be used to retrieve a list of Part Revisions from Teamcenter.     
    The microflow receives the following two input parameters:

    * `ConfigName` – This must be the `configName` on a `TcConnection.TeamcenterConfiguration` object.     
        It determines which Teamcenter configuration will be used to connect to Teamcenter. If only one Teamcenter Configuration is used, the parameter can be left empty.    
    * `ItemRevisionSearchCriteria` – This is required and must be used as input argument while searching for Item Revisions.     
        For hints on how to efficiently use this parameter, refer to [Item Revision Search Criteria](#item-revision-search-criteria).

The microflow returns a list of Part Revisions that matches the `SearchCriteria` provided in the `ItemRevisionSearchCriteria`. 

## Tips and Tricks {#tips-and-tricks}

### Item Revision Search Criteria {#item-revision-search-criteria}

* It is highly recommended to provide the `_Type` field, as it significantly optimizes the `ItemRevision_SavedQueryItemRevision` microflow. The `_type` field specifies which types of `ItemRevisions` will be requested. The field should be set to `PartRevision` to retrieve only `PartRevisions` and specializations of it. 
* The `Name` and `ItemID` fields of the `ItemRevisionSearchCriteria` parameter support wildcards. For example, if `Name` is set to `a*`, all revisions whose name starts with an `a` are returned. 
