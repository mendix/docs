---
title: "Getting Started with Teamcenter Connector 2606"
linktitle: "Getting Started"
url: /appstore/industry/teamcenter-connector/teamcenter-connector-2606-getting-started/
weight: 10
description: "Describes how to install, configure, and build your first Teamcenter Connector 2606 integration in Mendix Studio Pro, including setup, security, connection settings, and generating microflows and entities from a Teamcenter service document."
---

## Installation and Setup

1. **Download and import the module**
* Open Mendix Studio Pro 11.12, and go to the Marketplace tab. Download Teamcenter Connector 2606. Remember: you don't need to download Teamcenter Extension separately since its already included.
* Alternatively, you can download Teamcenter Connector 2606 from the Mendix Marketplace and import it into your Mendix 11.12 project.

2. **Add required dependencies**
* Make sure your app includes Community Commons and the Encryption module. These are both available from the Marketplace.

3. **Configure security**
* Assign the `TcConnector.User` role to the relevant user roles in your app's security settings. **Important**: The Administrator role now only has access to `TcConnector.TeamcenterConfiguration`. For all integration work, use the User role.
* Click "Update Security" in Studio Pro to refresh entity access rules.

4. **Enable React client**
- Make sure the React client is enabled in your app settings (Project → Settings → Runtime). This is required for the Teamcenter service document to work properly.

## What a Teamcenter service document contains

1. **Settings** 
  * This is where you configure the connection to your Teamcenter instance. This is required so the Teamcenter service document can communicate with Teamcenter to retrieve business objects and properties so you can build artifacts as per your use case.
  * Set up your authentication method, test the connection, and manage sign-in state.
  * You typically configure this once per Teamcenter service document, unless you need to switch environments.

<img width="2339" height="1168" alt="image" src="https://github.com/user-attachments/assets/cfeb4f6a-83cf-4524-a2da-462447144f7d" />

2. **Integrations** 
  * It shows an overview of all the integrations you've configured in this document.
  * You can see the Teamcenter integration type, the entities and microflows that were generated, and when each integration was last modified.
  * From here, you can:
    * View details of an integration.
    * Edit an existing integration.
    * Duplicate an integration (useful for creating variations).
    * Delete integrations you no longer need.
    * Navigate directly to the generated microflows and entities by double-clicking on them.
  * This is also where you can add new integrations.

<img width="3544" height="1700" alt="image" src="https://github.com/user-attachments/assets/33937f02-6003-4016-be11-95f18d03f62e" />

---

**You can have multiple Teamcenter service documents**
You can create several Teamcenter service documents in a single app, each in its own module. This is useful for separating concerns. For example:
* A "Parts" module with a Teamcenter service document for part-related integrations.
* A "Workflows" module with a Teamcenter service document for workflow-related integrations.
* A "Documents" module with a Teamcenter service document for dataset and document integrations.


## Create and build your first Teamcenter service document

### 1. Create a Teamcenter service document
* In the App Explorer, right-click on the module where you want to create your integrations.
* Select "Add other" → "Teamcenter service".
* Give it a name (e.g., "PartsIntegrations" or "MainTeamcenterConnection").

### 2. Open the Settings tab
* Navigate to the Settings tab of the Teamcenter service document (it's one of the tabs at the top of the document)

### 3. Configure your connection
* In the Settings tab, provide your Teamcenter authentication option along with credentials. Please refer to the [old Teamcenter Extension](https://docs.mendix.com/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/#settings-tab) settings page for more details.

### 4. Test your connection
* Once you've entered your connection details, click the "Sign In" button to test the connection.

>[!NOTE] Important note about auto-logout
The Teamcenter service document automatically clears your sign-in state when you edit or reset connection details. This is a security feature to ensure you're always using the correct credentials with the correct Teamcenter environment.

### 5. **Add your first Teamcenter integration**
* Click on the "Integrations" tab at the top. Right now, it's empty—this is normal for a new Teamcenter service document.
* Click on "Add integration".
* You'll see tiles representing all available integration types (like "Search Item Revisions," "Create Item with Item Revision," etc.).
* Click on one of these tiles to start configuring that type of integration.
* This will take you to the Import Mapping page.

### 6. **Use the Import Mapping Mapping Page**
Double-click on any one of the boxes to open the object mapping dialog.

<img width="2562" height="1989" alt="image" src="https://github.com/user-attachments/assets/eaa4fb09-d1d8-4c39-9a8c-65004f4adc41" />

**Teamcenter side (left)**
* Browse the Teamcenter object hierarchy.
* Select the business object type you want to work with (for example, "Item Revision" or "Dataset").

**Mendix side (right)**
* Choose whether to create a new entity or use an existing one.
  * If creating new, the Teamcenter service will generate an entity that is a specialization of the selected entity. 
  * If using existing, you can select an entity you've already defined in your domain model.
* When you're done, choose the **Select** button at the bottom to proceed.

**Mapping additional properties**
* Once you've selected the Teamcenter object type and Mendix entity, you can add additional properties/references/relations to the list of default selected properties.
* Double-click on the entity or select an entity and click Select Elements at the top. 
* Use the checkboxes to indicate:
  * "Read" — should this property be retrieved from Teamcenter?
  * "Write" — should this property be sent to Teamcenter when creating or updating (note the write checkboxes are only available in integrations where you can write data to Teamcenter). 
* Select the properties you need for your integration.

<img width="2551" height="1975" alt="image" src="https://github.com/user-attachments/assets/a137c186-da2c-4c8e-bd59-d6a2a4eea222" />

**Teamcenter integration-specific panels**
* Depending on the integration type, you'll be presented with additional configuration dialog.
* For example:
  * Dataset integrations let you filter by dataset type.
  * BOM integrations let you configure BOM window properties and revision rules.
* Configure these integration-specific settings as needed.
* For more information on each of the Teamcenter integrations, refer to [integration guides](https://docs.mendix.com/appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/integrations/).

### 7. **Generate your integration**
* Once you've configured everything, click the "Generate" button.
* The Teamcenter service document will:
    * Validate your integration to make sure everything is correct.
    * Generate domain model entities (placed in your domain model as a tree for easy visualization).
    * Generate microflows that implement the integration logic.
    * Save the integration to the Teamcenter service document
    * Navigate to the Integrations tab where the integration is now listed

### 8. **Explore the results**
* After generation completes, you'll automatically return to the Integrations tab.
* Find your newly created integration in the list.
* You'll see links to:
    * The generated microflows (double-click to jump directly to them in Studio Pro).
    * The generated entities (double-click to jump directly to the Domain model).
* Double click on a microflow name for Studio to open that microflow, and you can see exactly what was generated.

<img width="3529" height="1688" alt="image" src="https://github.com/user-attachments/assets/ca67bf73-c51d-4059-80f8-be2dc2d879ad" />
