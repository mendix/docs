---
title: "Get Datasets for Item Revision"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/get-datasets-for-item-revision/
description: "Provides step by step guide to use the \"Get Datasets for Item Revision\" integration in Teamcenter Extension."
weight: 6
---

## Introduction {#introduction}

The **Get Dataset for Item Revision** integration allows you to generate the domain model and microflow to retrieve `Datasets` for an `Item Revision`, and subsequently download files present inside the dataset. A `Dataset` is a container for files and related metadata. It is typically attached to a business object such as 1Item Revision1. 

This document takes you through a use case of retrieving PDF, MS Word and Excel documents stored inside a dataset that is attached to an `Item Revision`.

## Step-by-step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Get Dataset for Item Revision** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter and what type of objects are created in Mendix.    
    From the parameter entity placeholder on the top, you can select the object from which the `Dataset` should be retrieved.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/import-mapping.png">}}
    Click the parameter entity placeholder to open the object mapping panel. 
    
4. In the object mapping window that opens, follow these steps:

    1. The left side shows all Teamcenter objects retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, select the `Item Revision` object.
    2. The Mendix entity on the right is selected by default, so no further action is required. The entity will be used as an input parameter to get `Datasets` for any type of `Item Revision`.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/object-mapping.png">}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/object-mapping-result.png">}}
    Once the object mapping window is closed, a sidebar opens that shows the set of eight relationships selected by default. These are the eight most commonly used relationships in Teamcenter from which datasets are retrieved. You can modify the selections, but, for this specific use case, keep the eight relationships selected by default. You can always come back to them by double clicking the annotation.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/property-mapping.png">}}

5. Select the entity placeholder, just below the parameter entity placeholder, to open the object mapping panel. 

6. Select the `Dataset` object on the left. The right side displays the relevant Mendix entities that can be mapped to the `Dataset` object, and that will be used to create objects when a `Dataset` is retrieved for an `Item Revision`.  

7. In the panel, follow these steps:

    1. For this use case, you want to have an entity specifically for `Datasets`, so you select `TcConnector.Dataset`. 
    2. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named `Dataset` after the Teamcenter Object name, but it can be renamed here if required. 
    3. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/object-mapping-association.png">}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/property-mapping-association.png">}}

8. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you do not need to add any additional properties, so you can close the panel by clicking the close button. 

9. Double click the **Retrieve all dataset types**  annotation to open the configuration panel.

10. The configuration panel lets you choose if you want to retrieve certain dataset types only. Since you are particularly interested in retrieving only documents (PDF, Word, and Excel) attached to the item revision, you must only the following `Dataset` types:

    * PDF
    * MS Word
    * MS Excel

   {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/object-mapping-association-result.png">}}
    Once selected, close the panel.
11. Click the **Generate** button to generate the appropriate domain model and microflow.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-datasets-for-item-revision/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `Dataset` – This is an entity representing a Dataset object from Teamcenter. This serves as an input for the microflow that attaches datasets.  

### Microflows {#microflows}

The following microflows are generated:

* `GetDatasetForItemRevision` – This microflow implements the logic to retrieve the specific dataset types selected at step 10 from `Item Revision`, based on the eight relationships chosen at step 4. 
* `Dataset_RetrieveFilesorImages` – This microflow implements the logic to retrieve files or images stored within the dataset.
