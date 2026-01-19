---
title: "Revise Item Revision"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/revise-item-revision/
description: "Provides step by step guide to use the \"Revise Item Revision\" integration in Teamcenter Extension."
weight: 4
---

## Introduction {#introduction}

The **Revise Item Revision** integration allows you to configure and generate the domain model and microflow to revise an `Item Revision` or its specializations in Teamcenter. The resulting microflow implements the `Revise Object` and `Update Properties` actions from the Teamcenter Connector.  

This document takes you through a use case of creating a revision of a `Requirement Revision` object. The `Requirements` object in Teamcenter facilitates the capture, organization, and tracking of various product requirements throughout the product lifecycle. `Requirements` undergo changes during the product's lifecycle, so new revisions of this object are created.  

## Step-by-Step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Revise Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/revise-item-revision/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix. Click one of the placeholder entities to start import mapping. 
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/revise-item-revision/object-mapping.png">}}

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter objects retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, you want to revise `Requirements Revisions`, so select `Requirement Revision`, which is available under `Item Revision`.
    {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/revise-item-revision/object-mapping.png">}}
    2. The right side shows the Mendix entities that can be used to create the new Revision of the Item Revision in Teamcenter. You want to have an entity specifically for `Requirement Revisions` so you can choose custom properties to be set when revising the `Item Revision`. As such, select `TcConnector.ItemRevision`. 
    3. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named `RequirementRevision` after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel.

5. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you want `Name`, `Item ID`, and `Description` to be provided as attributes that can be modified when revising the `Item Revision`. As such, make sure to select the write option for these attributes. Since it is already selected, no further actions are required in the sidebar.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/revise-item-revision/property-mapping.png">}}

6. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/revise-item-revision/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `ReviseRequirementRevision` – This is a helper entity that is used in the `RequirementRevision_ReviseItemRevision` microflow to revise a Requirement revision in Teamcenter.
* `RequirementRevision` – This is an entity representing Requirement Revisions from Teamcenter. It can be used to revise a new Requirement Revision in Teamcenter. 

### Microflows {#microflows}

The extension generated the following microflows in your project:

* `RequirementRevision_ReviseItemRevision` – This microflow implements the logic to revise an Item Revision in Teamcenter.
