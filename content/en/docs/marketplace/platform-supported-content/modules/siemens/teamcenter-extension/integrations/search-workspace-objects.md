---
title: "Search Workspace Objects"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/search-workspace-objects/
description: "Provides step by step guide to use the \"Search Workspace Objects\" integration in Teamcenter Extension."
weight: 8
---

## Introduction {#introduction}

The **Search Workspace Objects** integration allows you to generate the domain model and microflow needed to search for `Workspace Objects` or its specialization. The resulting microflow implements the out of the box saved query `General...` from Teamcenter.  

This document takes you through a use case of retrieving `FMEA (Failure Modes and Effects Analysis)` object types from Teamcenter. The purpose of `FMEA` is to proactively identify risks involved in the product design process and to mitigate or eliminate them by defining prevention and detection actions.  

## Step-by-step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Search Workspace Objects** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-workspace-objects/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix. Click one of the placeholder entities to start import mapping.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-workspace-objects/import-mapping.png">}}

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter Datasets retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, you want to retrieve `FMEA` objects, so select `FMEA`.
    2. The right side shows the relevant Mendix entities for which objects can be created when we retrieve Workspace objects from Teamcenter. You want to have an entity specifically for `FMEA`, so you can make changes and add new attributes to it. Hence, you select `TcConnector.WorkspaceObject`.
    3. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-workspace-objects/object-mapping.png">}}

5. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you want to create an integration to retrieve additional `FMEA` object type attributes. As such, from the panel, select the following attributes to add to the `FMEA` entity:

    * `FMEA Category`
    * `Last Saved Date`
    * `Version Information` 

   {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-workspace-objects/property-mapping.png">}}

6. Once selected, click **Close** to close the panel.

7. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-workspace-objects/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `FMEA` – This is an entity that represents an FMEA Object from Teamcenter. The objects can be retrieved via `FMEA_PerformGeneralSearch`. 

### Microflows {#microflows}

The extension generated the following microflow in your project:

* `FMEA_PerformGeneralSearch` – This microflow can be used to retrieve a list of `FMEA` object types from Teamcenter. It receives three input parameters:

    * `ConfigName` – This must be the `configName` of a `TcConnection.TeamcenterConfiguration` object. It determines which Teamcenter configuration will be used to connect to Teamcenter.    
        If only one Teamcenter Configuration is used, the parameter can be left empty.
    * `GeneralQuery` – This is required and is used as input argument, i.e. entered by user as input, while searching for `FMEA`.
    * `SearchInput` – This is used to provide additional input that is required by the Teamcenter SOA that is called upon.

The microflow returns a list of `FMEA` object types that matches the `SearchCriteria` provided in the `GeneralQuery`.
