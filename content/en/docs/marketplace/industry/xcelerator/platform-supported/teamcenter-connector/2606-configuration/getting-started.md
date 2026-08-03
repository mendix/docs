---
title: "Getting Started with Teamcenter Connector 2606"
linktitle: "Getting Started"
url: /appstore/industry/teamcenter-connector/unified-teamcenter-connector-getting-started/
weight: 10
description: "Describes how to install, configure, and build your first Teamcenter Connector 2606 integration in Mendix Studio Pro, including setup, security, connection settings, and generating microflows and entities from a Teamcenter service document."
---

## Installation and Setup

Follow these steps to install and set up Teamcenter Connector 2606:

1. Download the module from Mendix Marketplace and import it in Studio Pro 11.12.     
   You do not need to download Teamcenter Extension separately, since it is already included.

2. Add the required dependencies. Make sure your app includes Community Commons and the Encryption module. These are both available in Mendix Marketplace.

3. Configure security:

    1. Assign the `TcConnector.User` role to the relevant user roles in your app's security settings.   
    {{% alert color="info" %}} The **Administrator** role now only has access to `TcConnector.TeamcenterConfiguration`. For all integration work, use the **User** role. {{% /alert %}}  
    2. Click **Update Security** in Studio Pro to refresh entity access rules.

4. Enable the React client from your app settings. This is required for the Teamcenter service document to work properly.

## Contents of a Teamcenter Service Document

These are the details included in a Teamcenter service document:

* **Settings** – Configure the following:

    * The connection to your Teamcenter instance. This is required so the Teamcenter service document can communicate with Teamcenter to retrieve business objects and properties, which allow you to build artifacts per your use case.
    * Your authentication method, test the connection, and manage the sign-in state. You typically configure this once per Teamcenter service document, unless you need to switch environments.

  {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/service-document-settings.png" alt="Settings tab of the Teamcenter service document" max-width=70% >}}

* **Integrations** – View and manage integrations:

    * Check out an overview of all the integrations you have configured in this document.
    * Check out the Teamcenter integration type, the entities and microflows that were generated, and when each integration was last modified. From here, you can:

        * View the details of an integration.
        * Edit an existing integration.
        * Duplicate an integration. This is useful for creating variations.
        * Delete integrations you no longer need.
        * Navigate directly to the generated microflows and entities by double-clicking them.    

    * Add new integrations.

  {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/service-document-integrations.png" alt="Integrations tab of the Teamcenter service document" max-width=100% >}}

You can have multiple Teamcenter service documents in a single app, each in its own module. This is useful for separating concerns. For example: 

* A **Parts** module with a Teamcenter service document for part-related integrations.
* A **Workflows** module with a Teamcenter service document for workflow-related integrations.
* A **Documents** module with a Teamcenter service document for dataset and document integrations.

## Creating and Building a Teamcenter Service Document

The following steps walk you through creating and building a Teamcenter service document.

1. Create a Teamcenter service.

    1. In the App Explorer, right-click the module where you want to create your integrations.
    2. Select **Add other**, then select **Teamcenter service**.
    3. Give the Teamcenter service a name, such as "PartsIntegrations" or "MainTeamcenterConnection".

1. Configure your connection.

    1. Navigate to the **Settings** tab of the Teamcenter service document.
    2. Provide your Teamcenter authentication option and credentials. For details, refer to the [Settings tab](/appstore/industry/teamcenter-extension/create-an-integration/#settings-tab) section of the Teamcenter Extension *Creating an Integration* page.

1. Test your connection.    
   Once you have entered your connection details, click **Sign In** to test the connection.    
  {{% alert color="warning" %}} The Teamcenter service document automatically clears your sign-in state when you edit or reset connection details. This is a security feature to ensure you are always using the correct credentials with the correct Teamcenter environment. {{% /alert %}}

1. Add your Teamcenter integration.

    1. Click the **Integrations** tab at the top.
    2. Click **Add integration**. Tiles representing all available integration types are displayed, such as **Search Item Revisions** and **Create Item with Item Revision**.
    3. Click one of the integration type tiles to start configuring that specific type of integration. The **Object Mapping** page is displayed.

1. Fill in the required information on the **Object Mapping** page:

    {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/object-mapping.png" alt="Object Mapping window" max-width=80% >}}

    1. Teamcenter objects

        1. Browse the Teamcenter object hierarchy.
        2. Select the business object type you want to work with, such as **Item Revision** or **Dataset**.

    2. Mendix entities

        1. Choose whether to create a new entity or use an existing one.    
           If you create a new entity, the Teamcenter service generates an entity that is a specialization of the selected entity. 
           If you use an existing entity, you can select an entity you have already defined in your domain model.
        2. When you are done, click **Select** to proceed.

    3. Additional properties   
        Once you have selected the Teamcenter object type and Mendix entity, you can add additional properties, references, and relations to the list of default selected properties. Follow these steps:

        1. Double-click the entity or select an entity and click **Select Elements** at the top. 
        2. Use the checkboxes to indicate:
  
        * **Read** — Should this property be retrieved from Teamcenter?
        * **Write** — Should this property be sent to Teamcenter when creating or updating? Write checkboxes are only available in integrations where you can write data to Teamcenter. 

        3. From the **Property Mapping** window, select the properties you need for your integration.

        {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/property-mapping.png" alt="Property Mapping window" max-width=80% >}}

    4. Teamcenter integration-specific panels   
        Depending on the integration type you choose, an additional configuration dialog window may be displayed. For example:

        * Dataset integrations let you filter by dataset type.
        * BOM integrations let you configure BOM window properties and revision rules.

        Configure these integration-specific settings as needed.    
        For more information on each of the Teamcenter integrations, refer to the [integration guides](/appstore/industry/teamcenter-extension/create-an-integration/integrations/).

1. Generate your integration.    
    Once you have configured everything, click **Generate**. The Teamcenter service document performs the following actions:
    
    * Validates your integration to make sure everything is correct.
    * Generates domain model entities, which are placed in your domain model as a tree for easy visualization.
    * Generates microflows that implement the integration logic.
    * Saves the integration to the Teamcenter service document.
    * Navigates to the **Integrations** tab where the integration is now listed.

1. Explore the results.    
    Once the Teamcenter service document is fully generated, you are automatically returned to the **Integrations** tab. You can find your newly created integration in the list, along with links to:

    * The generated microflows. Double-click to jump directly to them in Studio Pro. Double-click a microflow name to open it in Studio Pro, and see what exactly was generated.
    * The generated entities. Double-click to jump directly to the domain model.

    {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/integrations-result.png" alt="Results displayed on the Integration tab of the Teamcenter service window" max-width=100% >}}
