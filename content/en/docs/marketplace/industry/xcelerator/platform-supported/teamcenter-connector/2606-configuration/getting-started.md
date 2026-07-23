---
title: "Getting Started with Teamcenter Connector 2606"
linktitle: "Getting Started"
url: /appstore/industry/teamcenter-connector/teamcenter-connector-2606-getting-started/
weight: 10
description: "Describes how to install, configure, and build your first Teamcenter Connector 2606 integration in Mendix Studio Pro, including setup, security, connection settings, and generating microflows and entities from a Teamcenter service document."
---

## Installation and Setup

Follow these steps and install and set up Teamcenter Connector 2606

1. Download the module from Mendix Marketplace and import it in Studio Pro 11.12.     
   Remember that you don't need to download Teamcenter Extension separately, since it is already included.

2. Add the required dependencies. Make sure your app includes Community Commons and the Encryption module. These are both available in Mendix Marketplace.

3. Configure security. To do that, follow these steps:

    1. Assign the `TcConnector.User` role to the relevant user roles in your app's security settings.   
    {{% alert color="info" %}} The **Administrator** role now only has access to `TcConnector.TeamcenterConfiguration`. For all integration work, use the **User** role. {{% /alert %}}  
    2. Click **Update Security** in Studio Pro to refresh entity access rules.

4. Enable the React client from your app settings. This is required for the Teamcenter service document to work properly.

## Contents of a Teamcenter Service Document

These are the details included in a Teamcenter service document:

* **Settings** – This is what you can do:

    * Configure the connection to your Teamcenter instance. This is required so the Teamcenter service document can communicate with Teamcenter to retrieve business objects and properties, which allow you to build artifacts per your use case.
    * Configure your authentication method, test the connection, and manage the sign-in state. You typically configure this once per Teamcenter service document, unless you need to switch environments.

  {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/service-document-settings.png" alt="Settings tab of the Teamcenter service document" max-width=70% >}}

* **Integrations** – This is what you can do:

    * See an overview of all the integrations you've configured in this document.
    * See the Teamcenter integration type, the entities and microflows that were generated, and when each integration was last modified. From here, you can:

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

## Creating and Building Your First Teamcenter Service Document

The following steps walk you through creating and building a Teamcenter service document.

1. Create a Teamcenter service document.

    1. In the App Explorer, right-click the module where you want to create your integrations.
    2. Select **Add other**, then select **Teamcenter service**.
    3. Give the Teamcenter service a name, such as "PartsIntegrations" or "MainTeamcenterConnection".

1. Configure your connection.

    1. Navigate to the **Settings** tab of the Teamcenter service document.
    2. On the **Settings** tab, provide your Teamcenter authentication option along with credentials. For details, refer to the previous [Teamcenter Extension settings page](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) information.

1. Test your connection.    
   Once you have entered your connection details, click **Sign In** to test the connection.    
  {{% alert color="warning" %}} The Teamcenter service document automatically clears your sign-in state when you edit or reset connection details. This is a security feature to ensure you're always using the correct credentials with the correct Teamcenter environment. {{% /alert %}}

1. Add your first Teamcenter integration.

    1. Click the **Integrations** tab at the top. At this point, the tab is empty. This is normal for a new Teamcenter service document.
    2. Click **Add integration**. Tiles representing all available integration types, such as **Search Item Revisions**, **Create Item with Item Revision**, are displayed.
    3. Click one of the integration type tiles to start configuring that specific type of integration. The **Object Mapping** page is displayed.

1. Fill in the required information on the **Object Mapping** page:

    {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/object-mapping.png" alt="Object Mapping window" max-width=80% >}}

* Teamcenter objects

    1. Browse the Teamcenter object hierarchy.
    2. Select the business object type you want to work with, such as **Item Revision** or **Dataset**.

* Mendix entities

    1. Choose whether to create a new entity or use an existing one.    
       If you create a new entity, the Teamcenter service will generate an entity that is a specialization of the selected entity. 
       If you use an existing entity, you can select an entity you've already defined in your domain model.
    2. When you're done, click **Select** to proceed.

* Additional properties   
    Once you've selected the Teamcenter object type and Mendix entity, you can add additional propertiesreferences/relations to the list of default selected properties. Follow these steps:

    1. Double-click the entity or select an entity and click **Select Elements** at the top. 
    2. Use the checkboxes to indicate:
  
       * **Read** — Should this property be retrieved from Teamcenter?
       * **Write** — Should this property be sent to Teamcenter when creating or updating? Write checkboxes are only available in integrations where you can write data to Teamcenter. 

    3. From the **Property Mapping** window, select the properties you need for your integration.

    {{< figure src="/attachments/appstore/industry-components/teamcenter/teamcenter2606/property-mapping.png" alt="Property Mapping window" max-width=80% >}}

* Teamcenter integration-specific panels.   
    Depending on the integration type you choose, you might be presented with an additional configuration dialog window. For example:

    * Dataset integrations let you filter by dataset type.
    * BOM integrations let you configure BOM window properties and revision rules.

    Configure these integration-specific settings as needed.    
    For more information on each of the Teamcenter integrations, refer to the [integration guides](/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/integrations/).

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
