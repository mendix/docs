---
title: "Relate Workspace Objects"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/relate-workspace-objects/
description: "Provides step by step guide to use the \"Relate Workspace Objects\" integration in Teamcenter Extension."
weight: 9
---

## Introduction {#introduction}

The **Relate Workspace Objects** integration allows you to generate the domain model and microflow needed to relate two `Workspace Objects` or their specialization from Teamcenter. The resulting microflow implements the `Create relation` action from the `TcConnector` module.

This document takes you through a use case of relating a `CAE 3D Analysis` object to an `Item Revision`. A `CAE 3D Analysis` object typically contains simulation files of a `CAE (Computer Aided Engineering) 3D Analysis`. It can also contain results after the simulation has completed.     
The `Item Revision` contains the `CAD Parts` on which the simulation is to be performed. Users would want to relate the two objects to trace for which parts a 3D simulation has been performed. The relation type that will be created between the two objects is `CAE Target`. 

## Step-by-step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.
2. Click the **Search Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/relate-workspace-objects/icon.png">}}
    The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/relate-workspace-objects/import-mapping.png">}}
    When defining a relationship between two objects in Teamcenter, the object from which the relationship originates is called the `Primary Object`, while the object to which it is referenced is called the `Secondary Object`. For this reason, you’re seeing two placeholder entities on the import mapping page: `Primary entity` and `Secondary entity`. For this use case, primary object will be `Item Revision`, while the secondary object will be `CAE 3D Analysis Revision`.

3. Click the `Primary entity` placeholder.

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter Datasets retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, you want to retrieve `Item Revision` objects, so select `Item Revision`.
    2. The right side shows the relevant Mendix entities that can be created when we retrieve Workspace objects from Teamcenter. For this use case, you are only relating two objects to which you will not be making any changes. Hence, you just select the `TcConnector.WorkspaceObject` marketplace entity.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/relate-workspace-objects/object-mapping.png">}}

5. Once you close the object mapping panel, the relations sidebar is displayed. From here, you can choose to select the relationship name between the two objects.    
If you choose a **Relation Type**, the extension will generate a microflow to relate the two objects with the selected relation type.     
If no relation name is selected, the relation type needs to be provided manually in the microflow that gets generated to relate the objects.    
For this use case, sselect the `CAE Target` relationship.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/relate-workspace-objects/property-mapping.png">}}

6. Once selected, click **Close** to close the side panel.

7. Click the `Secondary entity` placeholder and repeat the previous steps. However, this time select `CAE 3D Analysis Revision` on the left and `TcConnector.ModelObject` on the right.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/relate-workspace-objects/object-mapping-association.png">}}

8. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/relate-workspace-objects/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension has not generated any new entities, since you are reusing the existing entities from the TcConnector Marketplace module. 

### Microflows {#microflows}

The extension generated the following microflow in your project:

* `WorkspaceObject_RelateToModelObject` – This microflow can be used to relate `Primary object` and `Secondary object`. In this case, these are `Item Revision` and `CAE 3D Analysis Revision`.      

The microflow receives four input parameters:

* `ConfigName` – This must be the `configName` of a `TcConnection.TeamcenterConfiguration` object. It determines which Teamcenter configuration will be used to connect to Teamcenter.     
    If only one Teamcenter Configuration is used, this parameter can be left empty.
* `Primary Workspace Object` – One of two objects between which the relation will be created.
* `Secondary Workspace Object` – One of two objects between which the relation will be created.
* `Relation Type` – This is the relationship type between the two objects. For this use case, it is `CAE Target`.
