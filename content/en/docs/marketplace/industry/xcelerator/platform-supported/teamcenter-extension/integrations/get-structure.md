---
title: "Get Structure"
url: /appstore/modules/siemens-plm/teamcenter-extension/integrations/get-structure/
description: "Provides step by step guide to use the \"Get Structure\" integration in Teamcenter Extension."
weight: 11
---

## Introduction {#introduction}

The **Get Structure** integration allows you to generate the domain model and microflows to configure a Bill-of-Material (BOM) window and retrieve **BOM structures** from Teamcenter. A **BOM window** displays a **BOM structure** inside a Mendix application. 

This document takes you through a use case of creating logic using the Teamcenter Extension to display a simple **BOM structure** with options to configure it according to our needs. 

This feature is designed specifically for generating microflows and domain models to retrieve and display simple BOM structures, be they configured on unconfigured. For other scenarios, consider alternative solutions. Refer to the following table:

| Scenario                                                 | Suggested Solution             |
| -------------------------------------------------------- | ------------------------------ |
| Work with large or complex BOM structures                | Use Active Workspace           |
| Have performance concerns                                | Use Active Workspace           |
| Transfer an entire BOM from Teamcenter to another system | Use Active Integration Gateway |
| Compare BOMs from different systems                      | Use Active Integration Gateway |
| Author BOMs                                              | Use Active Workspace           |
| Create BOM configurations                                | Use Active Workspace           |

## Step-by-Step Guide {#step-by-step-guide}

1. Make sure you have set up your credentials in the **Settings tab** before following these instructions. For more instructions on how to configure your settings, follow the steps in the [Settings Tab](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) section of *Teamcenter Extension*.

2. Click the **Get Structure** button on the home page to start configuring your integration.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/icon.png">}}

3. When you click this integration for the first time, you will see a warning indicating that Mendix should be used to display small BOM structures. For larger BOM structures, it is recommended to use Teamcenter Active Workspace. Click **OK** to proceed.     
    This warning is only displayed the first time you click the integration.

4. The [Import Mapping page](/refguide/import-mappings/) is displayed. This determines what data is retrieved from Teamcenter, and what type of objects are created in Mendix.     
    By default, the **Configure structure** side panel is displayed. This allows you to either configure the BOM structure at design time, or have the Teamcenter extension generate microflows where the BOM configurations are input parameters.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/import-mapping.png">}}
    Follow these steps:

   1. Enable **Revision rule**. This will generate the following:
   
       * A microflow to retrieve `Structure` with `Revision Rule` as the input parameter
       * A microflow to retrieve `Revision Rules`. 
       
      In other words, this lets you build a feature in your app where you can give end-users the ability to select a `Revision Rule` at run time, and to configure the BOM with the selected `Revision Rule`.     
      If the option is disabled, the Teamcenter extension will generate a microflow to retrieve `Structures` using the default revision rule, which is typically `LatestWorking`.

   2. Enable **Variant rules**. Just like with **Revision rule**, this will generate the following:
   
       * A microflow to retrieve `Structures` with `Variant Rules` as an input parameter 
       * A microflow to retrieve `Variant Rules`. 
       
       Just like with **Revision rule**, this also lets you build a feature in your app where you can give end-users the ability to select a `Revision Rule` at run-time, and to configure the BOM with the selected `Variant Rule`.     
       If the option is disabled, the Teamcenter extension will generate a microflow to retrieve structures without applying any variant rules.
 
   3. Enable **BOM Window properties**. This allows you to configure the BOM window properties at design time. The Teamcenter extension will generate a microflow to retrieve `Structures` with the selected properties.     
      If the option is disabled, the Teamcenter extension will generate a microflow to retrieve structures with the `TcConnector.BOMWindowPropFlagMap` object as input parameter. This is a HashMap used in the Teamcenter Java SOA API when creating BOM windows, and it controls various display and behavior settings for BOM windows.  

        For details on BOM Window properties, refer to the Teamcenter Documentation. 
        {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/import-mapping-2.png">}}
  
   4. Click **Close** to close the stucture configuration panel.

5. On the import mapping page, click the `BOMLine` entity. This opens the **Object mapping** window.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/import-mapping-empty.png">}}

6. In the object mapping panel that opens, follow these steps:

    1. The left side of the panel displays `BOMLine` and its subtypes. In Teamcenter, a `BOMLine` is a runtime object that represents a single entry or row in a product structure.     
       BOM lines define the hierarchy of the structure. Each `BOMLine` has an `Item Revision` attached to it.     
       The `BOMLine` is not a persistent item in the database. Instead, it is generated dynamically when a `BOMWindow` is created.    
       Select the parent **BOMLine** object.

    2. The right side of the panel shows the relevant Mendix entities that can serve as input parameters for the generated microflow.     
       Select the `TeamcenterToolkit.BOMLine` marketplace entity.
    
    3. Select the **Create new specialization of selected entity** checkbox. The entity will be automatically named `BOMLine` after the Teamcenter Object name, but it can be renamed here if required. 
    
    4. Click **OK** to finish the object mapping and to close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/object-mapping.png">}}

7. Once you close the object mapping panel, the attributes and associations sidebar is displayed. From here, select the properties you want to have within your Mendix app. For this use case, you do not need to add any additional properties, so no selections are necessary.

8. Click **Close** to close the object mapping panel.

9. Click the other entity placeholder, namely `ItemRevision`, to reopen the object mapping panel.

10. For this use case, you want to display `Item Revisions` in the `BOM tree`, so you select `ItemRevision` on the left side.

11. Select the **Create new specialization of selected entity** on the right. 

12. Click **OK** to close the object mapping panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/object-mapping-2.png">}}

13. In the **Attributes and Associations** panel that is displayed, select the following attributes:

    * `Last Saved Date`
    * `Maturity`
    
14. Click **Close** to close the panel.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/object-mapping-result.png">}}

15. Click the **Generate** button to generate the appropriate domain model and microflows.    
    Once the generation is complete, you are redirected to the **History** tab, which displays a summary of what has been generated.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-extension/get-structure/history.png">}}

## Result {#result}

The following sections describe the resulting domain model and microflows.

### Domain Model {#domain-model}

The extension generated the following entities in your domain model:

* `BOMLine` – This is an entity that represents the `BOMLine` object in Teamcenter. BOMLines define the hierarchy in a structure. When navigating the BOM, the BOMLine serves as an input for the microflow that expands the BOM structure.
* `ItemRevision` – This is an entity that represents the `Item Revision` object in Teamcenter. ItemRevision also serves as an input for microflows that create the BOM window and retrieve variant rules. 

### Microflows {#microflows}

The following microflows are generated:

* `ItemRevision_CreateBOMWindow` – This microflow implements the logic to create a BOM window with input item revision as its top line.
* `BOMWindow_GetTopBOMLine` – This microflow implements the logic to retrieve the top line or root of the BOM structure.
* `BOMLine_ExpandAllLevels_GetAll` – This microflow implements the logic to expand all levels of the BOM structure.
* `BOMLine_ExpandOneLevel_GetChildren` – This microflow implements the logic to expand just one level of the BOM structure.
* `BOMWindow_Close` – This microflow implements the logic to close the BOM Window.
* `GetRevisionRules` – This microflow implements the logic to retrieve revision rules from your Teamcenter instance.
* `ItemRevision_VariantRules` – This microflow implements the logic to retrieve variant rules from your Teamcenter instance. 
