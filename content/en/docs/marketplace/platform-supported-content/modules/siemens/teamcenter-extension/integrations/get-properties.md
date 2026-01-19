---
title: "Get Properties"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/get-properties/
description: "Provides step by step guide to use the \"Get Properties\" integration in Teamcenter Extension."
weight: 10
---

## Introduction {#introduction}

The **Get Properties** integration allows you to generate a microflow to retrieve additional properties of a Teamcenter `Workspace Object` or its specializations, and the corresponding domain model. The resulting microflow implements the `Get Properties` action from the Teamcenter Connector.

This document takes you through a use case of retrieving additional properties of a `Part Revision` object. Part Revisions are specific iterations of a part of a product that is managed using Teamcenter. A Part Revision contains essential information like the schematics of the Part. Since a Part Revision is a subtype of an Item Revision, it can be revised. 

## Step-by-step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Get Properties** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-properties/icon.png">}}
    The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix. Additionally, the **Get Properties Configuration** panel opens by default.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-properties/import-mapping.png">}}
    The **Create new object** option is enabled by default. This means it will generate a microflow to create and populate Mendix Model Objects for a given list of Teamcenter product `UIDs`.     
    If the option is not enabled, the extension will generate a microflow to update and overwrite a list of existing Mendix Model Objects based on the selections made on the import mapping page.    
    Keep the option enabled, then click **Close** to close the configuration panel.

3. Click one of the placeholder entities to open the object mapping panel. 

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows workspace objects and their subtypes. These can be out-of-the-box or custom. For this use case, you want to retrieve `Part Revision` objects, so select `Part Revision`.
    2. The right side shows the relevant Mendix entities that can serve as input parameters for the microflow to retrieve additional properties. You want to have an entity specifically for `Part Revision`, so you select `TcConnector.WorkspaceObject`.
    3. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named `PartRevision` after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-properties/object-mapping.png">}}

5. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, you can select from all properties available on the selected object. For this use case, you will not be selecting any additional properties. Close the sidebar by clicking the import mapping page.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-properties/property-mapping.png">}}

6. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-properties/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `PartRevision` – This is an entity that represents Part Revision in Teamcenter, and that serves as an input to the Java action that retrieves lists of part revisions from the Teamcenter product `UIDs`. 

### Microflows {#microflows}

The following microflows are generated: 

* `PartRevision_GetPropertiesByUIDs` – This microflow implements the logic needed to retrieve additional properties of part revisions based on the provided `UID` and Teamcenter configuration `Name`.
* `ModelObjectList_ToUIDList` – This microflow implements the logic to retrieve `UIDs` for a list of model objects. 
