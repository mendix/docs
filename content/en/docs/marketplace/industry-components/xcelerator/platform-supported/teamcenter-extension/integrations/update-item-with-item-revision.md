---
title: "Update Item with Item Revision"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/update-item-with-item-revision/
description: "Provides step by step guide to use the \"Update Item with Item Revision\" integration in Teamcenter Extension."
weight: 3
---

## Introduction {#introduction}

The **Update Item and Item Revision** integration allows you to generate the domain model and microflow to update an `Item` with `ItemRevision` or their specializations in Teamcenter. The resulting microflows implement the `Update Properties` action from the Teamcenter Connector. 

This document takes you through a use case of updating the properties, such as `description`, of `CAE 3D Analysis Revision Reports` in Teamcenter. `CAE 3D Analysis Revision` business objects are used to manage files associated from a 3D simulation study, such as CFD or Structural.

## Step-by-Step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Update Item and Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix. Click one of the placeholder entities to start import mapping.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/import-mapping.png">}}

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter objects retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, you want to update `CAE 3D Analysis Revision`, so look for `CAE 3D Analysis`.
    2. The right side shows the Mendix entities that can serve as input parameters for the microflow to update an Item with Item Revision. If you create your own entity here, you can ensure that additional attributes are set in Teamcenter upon creation. As such, select `TcConnector.Item`.
    3. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named `CAEAnalysis` after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/object-mapping.png">}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/object-mapping-result.png">}}

5. For this use case, you also want to update `CAE 3D Analysis Revision`, so repeat this process to select `CAE 3D Analysis Revision` with another specialized entity.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/object-mapping-association.png">}}

6. Double click any of the boxes to display the **Properties** window. You want to update the `description` attribute, which is already selected. As such, do not select any additional attributes.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/property-mapping.png">}}

7. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `CAE3DAnalysis` – This is an entity representing a CAE 3D Analysis from Teamcenter. 
* `CAE3DAnalysisRevision` – This is an entity representing a CAE 3D Analysis Revision from Teamcenter.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/update-item-with-item-revision/domain-model.png">}}

### Microflows {#microflows}

The extension generated the following microflows in your project:

* `CAE3DAnalysis_UpdateItem` – This microflow implements the logic to update properties of CAE 3D Analysis. The microflow takes two input parameters: `CAE 3D Analysis` and `ConfigName`. It returns one output variable named `CAE3DAnalysis_Updated_Cast`.
* `CAE3DAnalysisRevision_UpdateItemRevision` – This microflow implements the logic to update properties of CAE 3D Analysis Revision. 
