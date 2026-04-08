---
title: "Search Datasets"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/search-datasets/
description: "Provides step by step guide to use the \"Search Datasets\" integration in Teamcenter Extension."
weight: 5
---

## Introduction {#introduction}

The **Search Datasets** integration allows you to generate the domain model and microflow to search for `Datasets` or its specialization in Teamcenter. The resulting microflow implements the Teamcenter out-of-the-box `Datasets` saved query.  

This document takes you through a use case of creating the logic to search datasets with the option of choosing different dataset types, such as PDF, MS Word etc. 

## Step-by-Step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials on the **Settings** tab before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Search Datasets** icon on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-datasets/icon.png">}}

3. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix. Click one of the placeholder entities to start import mapping.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-datasets/import-mapping.png">}}

4. In the object mapping panel that opens, follow these steps:

    1. The left side shows all Teamcenter Datasets retrieved from the Teamcenter instance. These can be out-of-the-box or custom. For this use case, you want to search the different types of Datasets, so select `Dataset`.
    2. The right side shows the relevant Mendix entities for which objects can be created when we retrieve Datasets from Teamcenter. You want to have an entity specifically for `Database`, so you select `TcConnector.Dataset`.
    3. Select the **Create new specialization of selected entity** checkbox. The entity is automatically named `Dataset` after the Teamcenter Object name, but it can be renamed here if required.    
    4. Click **OK** to finish the object mapping and close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-datasets/object-mapping.png">}}

5. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you do not need to add any additional properties, so no selections are necessary.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-datasets/property-mapping.png">}}

6. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/search-datasets/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `Dataset` – This is an entity that represents a Dataset object from Teamcenter. This serves as an input in microflows that attach datasets.  

### Microflows {#microflows}

The extension generated the following microflows in your project:

* `Datatset_SavedQueryDataset` – This microflow implements the Teamcenter `Dataset` saved query. The microflow receives the following two input parameters: 

    * `ConfigName` – This must be the `configName` of a `TcConnection.TeamcenterConfiguration` object. It determines which Teamcenter configuration will be used to connect to Teamcenter. If only one Teamcenter Configuration is used, the parameter can be left empty.
    * `DatasetSearchCriteria` – This can be used as an input argument while searching for Datasets. 

* `Dataset_RetrieveFilesorImages` – This microflow implements the logic to retrieve files stored inside the Dataset. This is a helper microflow that can be used to retrieve files on the returned Dataset.  
* `GetFileTypesForDatasetType` – This microflow implements the logic to retrieve all file types associated to a particular Dataset type. 
* `GetAvailableDatasetTypes` – This microflow implements the logic to retrieve dataset types for your given Teamcenter instance.
* `Dataset_GetImanFiles` – This microflow implements the logic to retrieve the `ImanFile` object associated with an input dataset object.
