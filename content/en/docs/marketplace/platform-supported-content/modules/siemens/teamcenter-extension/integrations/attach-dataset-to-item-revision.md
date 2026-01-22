---
title: "Attach Dataset to Item Revision"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/attach-dataset-to-item-revision/
description: "Provides step by step guide to use the \"Attach Dataset to Item Revision\" integration in Teamcenter Extension."
weight: 7
---

## Introduction {#introduction}

The **Attach Dataset to Item Revision** integration allows you to generate the domain model and microflows needed to create and attach Teamcenter `Datasets` or their specializations containing file documents to an `Item Revision` in Teamcenter. A `Dataset` is a container for files and related metadata. If you want to attach a document to a Teamcenter object, you do this using datasets. 

This document takes you through a use case of attaching a PDF document to an `Item Revision` with a `Specification` relation. 

## Step-by-step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Attach Dataset to Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix. Click one of the placeholder entities to start import mapping. 
 {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/import-mapping.png">}}

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter objects retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, select `Dataset`. 
    2. The right side shows the relevant Mendix entities that can serve as input parameters for the microflow to attach datasets. For this use case, you want to have an entity specifically for `Datasets`, so you select `TcConnector.Dataset`.
    3. Select the **Create new specialization of selected entity** checkbox. The entity will automatically be named `Dataset` after the Teamcenter Object name, but it can be renamed here if required. 
    4. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/object-mapping.png">}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/object-mapping-result.png">}}

5. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you will not be adding any additional properties, so you can close the panel by clicking the backdrop.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/property-mapping.png">}}

6. Double click the **Attach any dataset** annotation to open the configuration panel. This panel lets you choose how you want to configure settings such as **Dataset type**, **File type** and **Relation name**, which are needed to upload `Datasets`:
    
    * Configure them within the extension itself.
    * Have them provided as input parameters to the generated microflows.
 
    Since you are particularly interested in building the logic to attach a PDF document to item revision, toggle on the following items and select these options:

    * For **Dataset type**, select **PDF**
    * For **File type**, select **PDF_Reference (*.pdf)**
    * For **Relation name**, select **Specifications**
     
   {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/configure-dataset-attachment.png">}}

7. Click **Close** the close the panel.

8. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/attach-dataset-to-item-revision/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `Dataset` – This is an entity representing a `Dataset` object from Teamcenter. This serves as an input to the microflow that attaches datasets.  

### Microflows {#microflows}

Since you chose specific options at step 6, the following microflow is generated:

* `Dataset_AttachDataset` – This microflow implements the logic to create and attach a PDF dataset type with the `PDF_Reference` file type and the `Specification` relation to an `Item Revision`.

Depending on what options are chosen in the configuration panel (step 7), additional microflows are generated:

* `GetAvailableDatasetTypes` – This microflow implements the logic to retrieve all available dataset types.
* `GetFileTypesForDatasetTypes` – This microflow implements the logic to retrieve all available files types for a specific dataset type.

Since you configured the dataset type and the file type in the extension, the extension did not generate these additional microflows for this use case. 
