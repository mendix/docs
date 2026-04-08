---
title: "Creating an Integration"
url: /appstore/modules/siemens-plm/teamcenter-extension/create-an-integration/
description: "Describes Teamcenter Extension from the Mendix Marketplace. Teamcenter Extension facilitates a low-code approach to integrating with Siemens Teamcenter."
weight: 1
---

## Main Menu {#main-menu}

To open Teamcenter Extension in Studio Pro, go to **Extensions** > **Teamcenter Extension** > **Teamcenter Extension**. If you use Studio Pro versions 10.7 or lower, Teamcenter Extension is available under **View** > **Teamcenter Extension**.

{{% alert color="info" %}}
For details on the version dependencies between Studio Pro and Teamcenter Extension, refer to the [Dependencies](/appstore/modules/siemens-plm/teamcenter-extension/#dependencies) section in *Teamcenter Extension*.
{{% /alert %}}

The landing page has with three tabs: **Menu**, **History**, and **Settings**.

### Menu Tab {#menu-tab}

The **Menu** tab displays use cases or actions you can create artifacts for using Teamcenter Extension.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/menu-tab.png" >}}

### Settings Tab {#settings-tab}

The **Settings** tab allows you to change the **Teamcenter configuration**. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/teamcenter-configuration.png" >}}

The tab indicates whether you currently have an active Teamcenter session, or whether the session is inactive.

There are two buttons:

* **Edit** – Allows you to change the settings.
* **Sign in** – Signs you in to Teamcenter if **Authentication** is set to *Credentials*. For details, refer to [Signin Configuration](#signin-configuration).

#### Editing Settings {#editing-settings}

Click **Edit** to change the settings.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/edit-configuration.png" >}}

You can set up the following information. It will be saved when you click **Save**: 

##### Teamcenter Instance

While building your app and using Teamcenter Extension you need to provide the details of the Teamcenter instance to connect to. To do this provide the following information under **Teamcenter instance**:

* **TC URL** – The URL to which calls will be made to sign in and retrieve data. Teamcenter Extension supports both HTTP and HTTPS connections.
* **Certificate Path** – The path to certificates that have .crt and .pfx file extensions. The path should be relative to the app directory.

##### Signin Configuration {#signin-configuration}

Set **Authentication** to one of the following methods:

* **Credentials** – Select this if your Teamcenter instance supports logging in using provided credentials. You will be prompted for your Teamcenter credentials when you click the **Sign in** button on the **Settings** tab. This method prevents sharing of credentials among developers through versioning.
* **Teamcenter SSO** – Allows you to use SSO if your Teamcenter instance is configured to use it. You can get these settings from your Teamcenter administrator.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/teamcenter-sso.png" >}}

You need to fill in the following:

* **SSO Login Server URL** – the endpoint where your authentication request is sent. It acts as the main entry point for users trying to log in using SSO. This URL is typically associated with the Identity Provider (IdP) and is responsible for handling login requests and directing users through the authentication process
* **SSO Identity Server URL** – the URL of the Identity Server where the Teamcenter Extension application should be registered
* **Teamcenter Application ID** – the existing Teamcenter Application ID obtained from the Teamcenter Security Services Identity Service configuration.
* **Studio Pro Application ID** – the registered ID of the Teamcenter Extension at the Identity Server.
* **Callback Port**: The port of the callback URL. For the registration, the callback URL should be set to http://localhost:[PortNumber]/, for example, http://localhost:12345/.

    {{% alert color="info" %}}Although these settings generally align with those required to log in using SSO with the Teamcenter Connector in your Mendix application, the last two settings depend on the application registration with your Identity Server. Mendix recommends having a separate registration for the Teamcenter Extension on your Identity Server, distinct from your Mendix application’s registration. If you do not do this, conflicts might arise if your Mendix application is running.{{% /alert %}} 

* **Teamcenter X SSO** – Allows you to use the SSO credentials of your Teamcenter X instance.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/teamcenter_sso.png" class="no-border" max-width=75% >}}

Please work with your Siemens CApS representative to fill out the following:

* **TcX Client ID**
* **SAM Auth Base URL** 
* **SAM Auth Client ID**
* **SAM Auth Client Secret**
* **Token Exchange Client ID**
* **Token Exchange Client Secret**
* **Callback URL**   

## Import Mapping {#import-mapping}

Clicking any one of the actions opens an empty [import mapping](/refguide/import-mappings/) page. Here you can define what data you want to retrieve from Teamcenter and how to handle this data in Mendix. Depending on the action, the import mapping page starts with one or multiple entities or objects to configure, one per business object that needs to be configured. 

During configuration, the import mapping page will build up a preview of the Mendix domain model involved in the integration. In addition, the import mapping page shows the corresponding business objects on the Teamcenter side. For this, Teamcenter Extension displays both the display names of the objects and their properties, references, relations, and the corresponding technical names, as they will end up in the Mendix domain model.

In Teamcenter Extension, the import mapping consists of the following steps:

1. Object mapping: As Teamcenter works with many layers of specializations of its business objects, in the import mapping page, you need to configure which object type you want to retrieve from Teamcenter and what Mendix objects need to be created, when retrieving these business objects. This is called object mapping.
2. Selection of properties, references, and relations: Configure which properties, references, and relations you want to retrieve from Teamcenter and include in your Mendix model .

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/domain-model.png" max-width=80% >}}

### Object Mapping {#object-mapping}

Clicking any one of the empty boxes in the import mapping page opens the object mapping dialog. On the left side of the dialog, a tree with all relevant business objects available from the configured Teamcenter instance is displayed. If you have created any custom business objects in Teamcenter BMIDE, those objects will be shown as well. The right side shows a tree of all relevant entities in your Mendix app.

The relevant objects and entities are dependent on the actions you are configuring. For example, for the action to get `ItemRevisions` from Teamcenter, the Teamcenter tree has an `ItemRevision` as its root object. That means that, for this action, you can only select `ItemRevisions` or its specializations. Similarly, in this example, the Mendix tree has the `TcConnector.ItemRevision` entity as its root entity.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/select-objects.png" >}}

When retrieving a tree of objects, relevance can also be based on the type of the relation or reference. When working with typed relations o references, the type of Teamcenter business object is dictated by the relation or reference. By limiting the list of Teamcenter objects and Mendix entities to those that are relevant, Teamcenter Extension guides you to select Teamcenter business objects that make sense in the context of the action you want to perform.

To configure which type of Teamcenter business object you are interested in and what type of Mendix entities this should be mapped to, select a business object in the Teamcenter tree on the left side and an entity on the Mendix tree on the right side and click **OK**. 

It is also possible to create new entities for your integrations. This new entity needs to be a specialization of the root entity in the Mendix tree or one of its specializations. When you want to use a new entity, click your generalization of choice, click the **Create new specialization of selected entity** check box and provide an entity name. Once finishing the configuration for the actions, Teamcenter Extension will create a new entity with the given name and the selected entity as its generalization. You can also reuse or create the specialization of the generated entities in subsequent actions.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/new-entity.png" >}}

Once you click **OK**, you will return to the import mapping tab with a sidebar open for you to configure which Teamcenter properties, references, and relations to include when retrieving data for this business object.

### Teamcenter Properties, References, and Relations {#teamcenter-properties}

In the import mapping sidebar, you can configure which Teamcenter properties, references, and relations to include when retrieving data from Teamcenter. The import mapping sidebar is launched automatically after the completion of object mapping. When you are on the import mapping page and the sidebar is closed, you can double-click a previously configured entity to open the sidebar for that entity.

The sidebar shows all properties, references, and relations for the configured Teamcenter object. Depending on the use case, each one of them is accompanied with check boxes for reading ({{% icon name="view" %}}) and writing ({{% icon name="pencil" %}}) for you to configure what to include when retrieving data from or creating data in Teamcenter.

{{% alert color="info" %}} The Teamcenter Extension currently does not display compound attributes from Teamcenter. A compound attribute is a property defined on one object but displayed on a different object.{{% /alert %}}

You often see that check boxes are selected by default or grayed out. In general, the following rules apply:

1. Properties that are already available on the Mendix entity or one of its generalizations are selected by default and cannot be unchecked.
2. Properties, references, and relations for Marketplace entities are disabled by default, as it is not good practice to change Mendix marketplace content.

As an example, if a check box for reading ({{% icon name="view" %}}) is selected and grayed out, it means that property already exists as an attribute on the selected object or one of its generalizations. Similarly, if a check box for writing ({{% icon name="pencil" %}}) is selected and grayed out, it means the property is required during creation or revision of the selected object.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/attributes-associations.png" max-width=60% >}}

You can select and deselect the properties, references, and relations depending on the data you need from Teamcenter. When you select a reference or relation, a new placeholder entity will be added to the object mapping tree. You will need to perform the import mapping for these referenced or related objects in a subsequent step (business object mapping and selection of Teamcenter properties, references, and relations).

## Generating Artifacts {#generating-artifacts}

Once you have finished import mapping, click **Generate** to create microflows for the selected use case and its corresponding domain model. These artifacts can be used in your app logic.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/microflow.png" >}}

## History {#history}

The **History** tab displays the history of all actions (also referred as integrations) carried out in Teamcenter Extension.

{{< figure src="/attachments/appstore/platform-supported-content/modules/teamcenter-extension/history-tab.png" >}}

On the **History** tab, you can view details of each action, such as entities and microflows created, Teamcenter URL used to connect with, the preview of the import mapping, and much more. 

 You can also edit, duplicate or delete an action using the buttons in the upper-right corner:

* **Delete** – This deletes the selected action from the list. However, it does not delete the corresponding entities and microflows, since they may impact pages or other integrations.
* **Duplicate** – This allows you to create a new action based on an existing one. When you click **Duplicate**, it clones the selected action and takes you to the import mapping page, where you can modify your mapping and subsequently create new domain model and microflows. This operation does not modify any of existing actions.
* **Edit** – This allows you to modify an existing action and updating existing domain model and microflows. When you click **Edit**, it takes you to the import mapping page, where you can add or edit entities, attributes, and associations, subsequently updating the domain model and microflows.

It is not recommended to make specific adjustments to artifacts generated by Teamcenter Extension outside of Teamcenter Extension. Doing so may result in breaking the integration. Instead, you should make adjustments inside Teamcenter Extension using the **Delete**, **Duplicate** or **Edit** operations, wherever possible. Examples of adjustments that are not advisable outside Teamcenter Extension are as follows:

* Modifying the **CreateInput** and **CompoundCreateInput** entities generated from The **Create Item** action
* Modifying any entity generated from the **Revise Item Revision** action
* Deleting attributes or associations generated by Teamcenter Extension
* Deleting or editing microflows generated by Teamcenter Extension

However, you can make the following adjustments outside Teamcenter Extension:

* Adding attributes or associations
* Moving microflows
* Renaming microflows

If you select an item in the **Action** list, Teamcenter Extension performs a validation check to see if the Teamcenter objects, entities, and microflows still exist and are valid. The results are reported in the **Validation** section.
