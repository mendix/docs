---
title: "Register—Publishing Data Assets to the Data Hub"
category: "Data Hub Catalog"
description: "Registering data services in the Data Hub Catalog."
menu_order: 50
tags: ["data hub", "data hub catalog", "register", "registration form", "data hub catalog api"]
---

{{% todo %}}[Not sure about this title - users can publish to an Odata service, but primary action here is  to register available data assets. ]{{% /todo %}}

## 1 Introduction

All shareable entities can be registered in the Data Hub Catalog by exposing them in an OData service. The registration includes the following:

* Location – where the data can be accessed
* Structural metadata – what the data looks like
* Descriptive metadata – information that indicates the applicability of using the asset for a particular app

For Mendix apps, there is a deployment pipeline which registers OData v3 published services for entities that are to be exposed in an OData service. This means that in Studio Pro, upon deployment of an app (via **Run**), the OData v3 services are automatically registered in the Data Hub Catalog. For further information on deployment on the Mendix platform see [Deployment](/developerportal/deploy/) in the *Developer Portal Guide*.

For non-Mendix apps (for example, from third-party public REST APIs), entities can be included in an OData v4 service and this can be manually registered through the [service registering](#registration-form) process.

This section starts with guidelines and best practice for registering services and shared entities in the Data Hub Catalog. The steps for registering an OData Service from Studio Pro are described in [Publishing an OData Service in Studio Pro to Register Entities](#odata-service-reg) section below.

The steps for updating a consumed OData service in Studio Pro for which a new version is available are described in the [Updating a Published OData Service in Studio Pro](#updating-service) section below.

{{% todo %}}[EC: This is removed from the beta-rel include when API is published officially: For non-Mendix apps using OData V3 and V4 contracts, the Data Hub Catalog API can be used to create an API gateway to the Data Hub Catalog to register available services. ]{{% /todo %}}

## 2 Best Practices for Registering Services and Shared Entities

This section provides advice and best practices when registering your services in the Data Hub Catalog either from Studio Pro or through manual registration.

### 2.1 Data Sharing Policy

App owners should refer to their Data Hub Admin and Data Hub curator to align with their organization's data registration policy and methods. This can include naming and grouping the entities that define specific data, access and security, and also issuing new versions of services.

{{% todo %}}[**AD: add cross-references to Admin and Curator role info**]{{% /todo %}}

Some entities may be published in several OData services as a way of grouping and publishing sets of data. Updating and maintenance has to be managed and maintained by the app owners.

User access rights to the entity and the associated data are published in the OData service and this is applied to the entities that are consumed in an app. For details on security in Studio Pro, see [Security](/refguide/security) in the *Studio Pro Guide*.

### 2.2 OData Services and Versions {#odata-service-version}

Services that are updated should be clearly documented and version numbers maintained and registered.

It is a good practice to adopt a strict convention for versioning. For example, any revisions or changes made to a service that is deployed to the same location could be indicated using a semantic numbering convention and communicated to all apps consuming the service. This means that major version numbers are assigned for significant changes to the service (for example, removing entities or attributes, or requiring input parameters that would be incompatible for the consuming apps and would result in a break or failure). Minor version numbers can be assigned for revisions that would "not break" consuming apps (for example, adding new fields to the service or adding new operations), for which the clients will continue to work.

{{% todo %}}[**AD: a lot of passive constructions here, whereas we try to speak to the user and use "you" more - can you rewrite some of these best practices to be more active?**]{{% /todo %}}

It is also good practice to expose major revisions to a new service. If the publisher wants to drop support for the old service, it can be deprecated, with a grace period for consumers to transfer to the replacement service and eventually remove it when there are no more connections to the old service. The consequences of changing the properties of a service with the same version when the service is being consumed by other apps is that the apps will break.

You should ensure that all apps that consume entities are notified when there is a change to a service or entity.

### 2.3 Environments

The [environment](/developerportal/deploy/environments) that an app is deployed to is important and indicates the location of the data for the app. The OData service for this deployment of the app is also located in the same environment and provides the connection to the data by consuming apps. Apps sharing data have to be deployed to a reliable production environment where the data for the apps is stable and reliably maintained.

When apps are being developed, ensure that there is a representative set of data available in the test or development environments so that services can be properly tested in the consuming apps. For example, in the case of an app for Human Resources, the developer should have test data with the different access levels to ensure that the correct data is available to users of differing access levels.

### 2.4 Entities and Associations

Currently only [persistable](/refguide/persistability) entities can be exposed for sharing by another app. The data associated with the entity is used in the consuming app.

{{% todo %}}[what are persisitable entties known as in other systems? what is the characteristic of a persistable entity that makes it shareable]{{% /todo %}}

When selecting the entities to expose in a service, consider including associated entities so that the relationship between the data is also registered.

## 3 Publishing an OData Service in Studio Pro to Register Entities {#odata-service-reg}

This section describes how to register entities from your Mendix app in the Data Hub Catalog in Studio Pro. For details on publishing an OData resource, see [Published OData Resource](/refguide/published-odata-resource).

{{% alert type="info" %}}
A published OData service is an API to your Mendix app. Some apps may have several published services exposing different combinations of entities. In Studio Pro, it is good practice to group them in a separate folder under each [module](/refguide/modules) to make location and maintenance easier.
{{% /alert %}}

1.  In the [domain model](/refguide/domain-model), right-click the entity to be exposed and from the menu select **Expose as OData resource**:

	![](attachments/registration/expose-as-odata-resource.png)

2.  In the **Select Published OData Service** dialog box, select the folder in the module that you want to use to organize your APIs, and click **New** to add a new OData service to that folder:

	![](../attachments/share-data/select-published-odata-service.png)

3. Enter a meaningful name that indicates the entities and data that are going to be exposed for the published OData service and click **OK**.
4.  The OData service document is added to the module, and the **Edit published resource** dialog box is displayed for the selected entity. The information in this will form the metadata definition for the entity:

	![](../attachments/share-data/edit-published-resource-box.png)

	* **Entity** – the name and module of the entity
		* **Select** – click to display list of entities available in the module and select another entity to expose
		* **Show** – click to see the entity in the domain model
	* **Exposed attributes and associations** – click **select** to view and select the attributes and associations to expose for this entity
	* **Exposed entity name** – you can customize the name of the entity in the OData service
	* **Exposed set name** – the name of the dataset associated with the entity that is exposed
	* **Example of location** – the location of the dataset for the entity
	* **Use paging** – the maximum number of data objects that are retrieved in a single call (with a link to the next set)
	* **Public documentation** tab – a summary and a description of the entity can be added here

	For further details, see [Published OData Resource](https://docs.mendix.com/refguide/published-odata-resource) in the *Studio Pro Guide*. 

5. Click **OK** to see the [OData Service](#odata-service-general) page. If you want to publish several entities in the same service, add them here by clicking **Add** for the **Resources**.
6.  If you add an entity that is associated with another entity that is exposed in the same OData service, you will be asked whether you want to include the association in the service definition. Click **Yes** and the association between the two entities will be included under **Attributes and associations**.

	In the example illustrated below, you will see that for **Entity_2** under **Attributes and associations** there is currently "**0 association**". 

	When **Entity_3** is added to the service which has an association to **Entity_2**, you will see that **Entity_3** has listed that it has "**1 association** and there is a further prompt **Would you like to publish the other side of this association as well** with the name of the association showing the entities being connected.

	![](attachments/registration/publish-association.jpg)
	
	{{% todo %}}[**AD: missing attachment, which will break the build - please add**]{{% /todo %}}

	Click **Yes** and the association for **Entity-2** is now updated to "**1 association**":

	![](attachments/registration/publish-association-2.png)

7.  Add a **Summary** and **Description** of the service In the **Properties** pane: 

	![](attachments/registration/publish-service-description.png)

	{{% alert type="info" %}}The description will be included in the published service metadata file and displayed for the service in the Data Hub Catalog.  If no description is available, then the **Summary** will be used.
	{{% /alert %}}

	{{% todo %}}[Will this appear somewhere more logical. Also why have a summary and description field if the summary is not published in the OData metadata??]{{% /todo %}}

	{{% alert type="info" %}}If you are updating a service (with a new service version), you can provide a summary of the changes from the previous version in the description. You can copy and paste the description from the previous version of the service and edit this with the new details. For further details, see the [Updating a Published OData Service in Studio Pro](#updating-service) section below.
	{{% /alert %}}

8. When the app is deployed with **Run**, the OData services defined for the app will automatically be registered in the Data Hub Catalog.

{{% alert type="info" %}}
The app has to be deployed to the Mendix Cloud or to your organization's environment using **Run** for the service to be registered in the Data Hub Catalog.
{{% /alert %}}

## 4 OData Service Page {#odata-service-general}

The OData service screen contains all the details that will be included in the OData service contract or *$metadata* file that will be registered in the Data Hub Catalog. Entities can be added and removed and changes to attributes and associations for included entities can also be made in this document.

{{% alert type="info" %}}
The **Version** number that is assigned to a service is significant – it forms part of the service location and the definition of the service endpoint for consumed entities. Several versions of the same OData service registered can be registered in the Data Hub Catalog. A connection to an entity by a consuming app will be through the unique URL and the version number of the service and the data connected to the app deployed to a specific environment.
{{% /alert %}}

### 4.1 General Tab

![](attachments/registration/odata-service-page-general.png)

{{% todo %}}[**AD: intro sentence needed here - what are we looking at in the bulleted list below?**]{{% /todo %}}

* **Service Name** – the name of the service
* **Version** – the version of the service
* **Location** – the URL of the service metadata 
* **Namespace** – the namespace or uniform resource identifier (URI) for the service (for further details, see [Namespace](https://en.wikipedia.org/wiki/XML_namespace)

	{{% todo %}}[**AD: really necessary to cross-reference a Wikipedia page here?**]{{% /todo %}}

* **Resources** – the entities that are included in the service: 
	* **Add**, **Edit**, **Delete** – click to add, edit, or remove an entity from the OData Service, respectively
	* **Show** – click to see the entity in the domain model

	{{% todo %}}[EC: verify that it says **Remove** and not delete]{{% /todo %}}

	* **Attributes and associations** – this column shows the attributes and association for the selected entity
	* **Change** – click this to display the **Select Attributes and associations** dialog box for the selected entity: 

	![](attachments/registration/select-attributes-associations.png)

	You can specify which attributes you want to include for the service, customize the **Exposed names** of the attributes and associations for the OData service.

	{{% alert type="info" %}}If you do not EXPLICITLY choose to expose the association of two associated entities, then this association will not be registered for the entities in the service.
	{{% /alert %}}

For further details, see [Published OData Resource](/refguide/published-odata-resource).

### 4.2 Settings Tab

In the **Settings** tab, you can set configurations of associations between entities, the export location of the service, and the metadata file. You can also specify access to the entities exposed: 

![](attachments/registration/odata-service-page-settings.png)

#### 4.2.1 Configuration

For **Associations**, select **As a link** for your published OData service to ensure that the association between entities is exposed.

#### 4.2.2 Export

This section contains the following properties:

* **Service feed** – displays the service endpoint; click **Export** to create an export file of the service feed
- **Metadata** – displays the OData service contract file; click **Export** to create an export file of the service contract

#### 4.2.3 Security

This section will be displayed if [project security](/refguide/project-security) is enabled. For further details, see [Security](/refguide/published-odata-services#3-2-security) section of *Published OData Services*.

This section contains the following properties:

* **Requires authentication**– specify if the consuming apps have to authenticate access to the data associated to the exposed entities
	* **Yes** will require the specified authentication
	* **No** means for no restriction to access to the data
* **Authentication methods** – one or more of the following authentication methods can be checked:
	* **Username and password** – for “basic authentication” with a username and a password 
	* **Active session** – for access to the data within the current app session
	* **Custom** – to specify custom authentication using a microflow that is called every time a user wants to access the data to an entity

	{{% alert type="info" %}}If more than one authentication method is specified, the order or authentication is **Custom**, then **Username and password**, and then **Active session**.
	{{% /alert %}}

* **Microflow** – when **Custom** authentication is checked, specify the authentication microflow that will be used
* **Allowed roles** – refers to the [module roles](/refguide/module-security#module-role) that a user must have to access the consumed entity

## 5 Deployment Environments

The OData service that is created when an app is deployed will be associated with the environment that the app is deployed to. This will also be the link to the data set associated with the exposed entities. 

When sharing entities through an OData service for use in other apps, it is important that the app is deployed to a stable environment so that the data for the app is maintained in this environment. Usually this will be a production environment. 

## 6 Updating a Published OData Service in Studio Pro {#updating-service}

For guidelines on when to update a published OData service and when to publish a new one, see the [OData Services and Version](#odata-service-version) section above.

{{% alert type="info" %}}
When a new version of a  service is published to replace an existing one, due notice has to be given to users if the preceding version is going to be deleted. A deprecation notice should be given to all apps consuming the service, and period of time when both services are available. 
{{% /alert %}}

{{% todo %}}[**AD: a section should not start with a cross-reference and an alert - it is then quite unclear what the section is about for the reader. Also, isn't that alert just a duplication of step 10 below, thus positioned much too early in this section?**]{{% /todo %}}

Registered OData services for Mendix apps can be updated in Studio Pro in the [OData service](#odata-service-general) document. You can access the **OData Service** page rom the **Project Explorer** in Studio Pro by double-clicking the published OData service document to be updated. 

{{% alert type="info" %}}
In the catalog, changing the name or version in the OData Service page will result in a new service that is published (with a new service endpoint and the corresponding endpoints for the exposed entities) and registered in the catalog. This means that in each environment to which you deploy your app, the new service or version with be available.  This also means that all  environments will still have the endpoints of the previous service or version. Note that the app (and published services) must be deployed to all environments for this "changed" service to be available.
{{% /alert %}}

{{% todo %}}[X-ref text on versioning in the index doc. and eventually to the dedicated doc. What happens if you change the name of a service in the OData service document — is the previous one still present in the app? the project explorer did not change ]{{% /todo %}}

To update a published OData service, follow these steps:

1. Decide if you are creating a minor update to a service or a major update that may break consuming apps if they were to upgrade to it, and designate a version number accordingly.
2. Create a duplicate of the old service document to make your changes to by right-clicking in **Project Explorer** the OData service that you want to update and then clicking **Duplicate**. A copy of the service will be created. You can rename the new service by right-clicking and selecting **Rename**.
3. Double-click this service to open the service document. You can now make the changes to the service.
4. Indicate the level of the change by changing the version number.
5. Append the **Description** (in the **Properties** pane) of the service to describe to all users the changes that have been made to the service.
6. Make the changes to the service, taking care when removing entities, attributes, and associations that may be consumed by other apps.
7. Deploy the app to register the services in the Data Hub Catalog. If you have kept the previous version, both services will now be registered.
8. In the Data Hub Catalog, curate the new service and add tags and further descriptions as necessary. 
9. Inform consuming apps of the changes. You can see all apps that are consuming previous versions of the service in the Data Hub Catalog and also the visual network of dependencies in the [Data Hub Landscape](../use-data-hub-landscape). Use the **Business Owner** and **Technical Owner** links to make contact with the users.
10. For major changes, and when a new service is published that will replace an existing one, provide deprecation notices to all consuming apps if they have to change to the new version within a certain length of time if the previous version is going to become inactive.
11. It is good practice to remove old (unused services) from your app by deleting them in the **Project Explorer** only when you are sure that they are no longer being consumed by any other apps. You can verify this by looking in [Mendix Data Hub](https://hub.mendix.com/) and searching for the service in the **Catalog** or checking out the network of dependencies in Data Hub **Landscape**. 

## 7 Manually Registering OData V4 Services {#registration-form}

OData v4 services that are published from Mendix apps which are not hosted in the Mendix Cloud are not automatically registered in the Data Hub Catalog through the deployment pipeline. For example, if you have an app running on-premises or anywhere else outside the Mendix Cloud, there will not be any auto-registration. These services can be manually registered in the catalog.

During manual registration, you can enter additional information about the service (such as a description) and assign tags to categorize the service so that it can be found for specific uses.

This section describes the sequence of steps to manually register a service in the Data Hub Catalog.

{{% alert type="info" %}}
New versions of previously registered services also have to be registered manually by following the steps below and specifying **Existing application** and **Existing environments**.
{{% /alert %}}

###  7.1 Preparing the V4 OData Service Documents

The documents making up the v4 OData service must be included in a *.zip* file. The files for an OData v4 service contract may comprise the base schema definition and additional associated schema documents to complete the full service definition. 

{{% alert type="info" %}}
If the v4 OData service document is only one file, this must also be saved as a *.zip* file, as the manual registration will only accept this file format.
{{% /alert %}}

### 7.2 Registering the Service – Application and Environment

To register the service, follow these steps:

1.  On the [Data Hub home page](../index), click **Register new service** to display the **Application and Environment Form**.

	![](attachments/registration/register-form-home-page.png)

2.  Enter the details of the app from which the OData v4 service was issued. This information will be displayed in the **Service Details** in the Data Hub Catalog and provide the link to the app.

	![](attachments/registration/old-register-service-form-details.png)

3.  Specify the details of the **Application**:

	* **Use Existing Application**
		* **Yes** – click this if the app is already registered in the Data Hub Catalog (for example, when you are registering a new service for a previously registered app, or when you are registering a new version of an existing service)
		* **No** – click this when registering a new app that is not currently registered in the Catalog
	* **UUID** – paste the UUID here for an existing app registered in the Data Hub Catalog (for a new app, the UUID is automatically generated)
		* You can copy the UUID of an already registered app from **Settings** > [General](/developerportal/settings/general-settings) in the Developer Porta
		* For further information on deep links for an app, see [How to Manage Deep Links](/developerportal/settings/manage-deeplinks).
	* **Name** – enter the name of the application as it should appear in the details page of the service
	* **Business Owner** – enter the name of the business owner of the data that will be made available through the service

	{{% todo %}}[??should the above be business or technical owner]{{% /todo %}}

4.  Enter the **Environment** details of the deployed app:
	
	* **Use Existing Environment**
		* **Yes** – click this when the deployed app in an existing environment is already registered in the Data Hub Catalog (for example, when you are registering a new service for the app deployed to this environment, or when you are registering a new version of an existing service deployed to this environment)
		* **No** – click this for a new deployment to an environment
	* **UUID**
		* For an existing app registered in the Data Hub Catalog to this environment, paste the UUID here
		* If you clicked **No** above for **Use Existing Environment**, the enviroment UUID is automatically generated
	* **Name** –  enter the name of the environment as it will be rendered in the catalog
	* **Location** – enter the URL of the environment location
   
5. Click **Next Step** to proceed to the **Upload contract** form.

### 7.3 Uploading the OData Contract and Selecting Main Schema

{{% todo %}}[**AD: intro content needed**]{{% /todo %}}

![](attachments/registration/old-register-service-form-contract.png)

1. Browse and upload the *.zip* file of the OData v4 service you want to register and click **Validate zip file**.
2.  The file will be validated, and the OData schemas that are available will be listed:

	![](attachments/registration/old-register-service-form-schema.png)

3.  You can examine the schemas by clicking **+** to display the schema: 

	![](attachments/registration/old-register-service-form-schema-display.png)

4.  Select the primary schema from the list that defines the service by checking the box.

	{{% alert type="info" %}}When there are several schemas for a v4 OData service, these contracts are part of the complete service definition and are necessary. The primary contract references the other schemas to form the full specification of the service. It is important that the correct schema is selected as the **Main schema**; otherwise, constituent elements may not be referenced.
	{{% /alert %}}

5. Click **Next Step** to proceed to the **Service Details** form.

### 7.4 Entering Further Service Details

In the final step of the manual registration process, use the **Service Details** screen to specify further details that will be displayed in **Service metadata** pane: 

![](attachments/registration/old-register-service-form-end-details.png)

1. In **Service Name**, enter the name of the OData service.
2.  n **Service Version**, enter the version number for the service.

	{{% alert type="info" %}}When registering another version of a registered service, ensure that the version numbering indicates the degree of change between versions.
   {{% /alert %}}

3. In **Relative service location**, enter the relative URL for the service.
4. In **Service Description**, enter a description of the service that will be displayed in the **Search Details** and also used in the catalog search.
5. In **Tags**, enter tags that can be used to categorize registered services and thus make them discoverable for specific uses. Add tags by entering alphanumeric strings separated by spaces. To remove a tag, click the **x**. 
6. When all the information has been completed, click **Save your service**. 
7. The contracts will be interpreted and the service registered in the Data Hub Catalog. On successful registration, you will be informed:

   ![](attachments/registration/old-register-successful.png) 

The service is now registered in the Data Hub Catalog.

{{% todo %}}[**AD: all of this below is confusing to have in a doc that is supposed to be ready for review. Is this content finalized? Please clarify and clean this up.**]{{% /todo %}}

## NEWNEWNEW

### 7.1 Application

Enter the app details of the OData V4 service that you want to register.

There are two different initial steps depending on whether you are registering a new OData service for an existing application (1) or registering an OData Service for a new application(2). 

1. **Existing Application** 
   Select this tab and use the dropdown menu to select the app from the list of apps already registered in the Data Hub Catalog. The UUID of the app is given after the name to ensure that you select the correct app. Click **Fetch Application** to look up the application based on the submitted UUID, provided it exists in the user's company.

2. **New Application** 

   a. **Type**: Enter the type of application that is being registered: **Team Center (TC)**, **Mendix (MX)**, or **Other**.

   b. **APP UUID**: Enter the unique identifier for this app.

   c.	**Application Name**: Enter the name of the registered application, this is displayed in the properties pane of the **Asset Details** screen.

3. **Technical Contact**: Enter the name of the primary contact for bug-related fixes and questions - usually the lead developer lead. By default, your name will be entered. 

Now click **Next Step** to proceed to specifying Environment.

![](attachments/registration/register-service-form-application.png)

- [ ] This following is the new registration form

The registration comprises 5 stages which have to be completed as follows:

### 7.1 Application

Enter the details of the app that you want to register.

 There are two different initial steps depending on whether you are registering a new OData service for an existing application (1) or registering an OData Service for a new application(2). 

1. **Existing Application** 
   Select this tab and use the dropdown menu to select the app from the list of apps already registered in the Data Hub Catalog. The UUID of the app is given after the name to ensure that you select the correct app. Click **Fetch Application** to looks up the application based on the submitted UUID, provided it exists in the user's company.

2. **New Application** 

   a. **Type**: Enter the type of application that is being registered: **Team Center (TC)**, **Mendix (MX)**, or **Other**.

   b. APP UUID**: Enter the unique identifier for this app.

   c.	**Application Name**: Enter the name of the registered application, this is displayed in the properties pane of the **Asset Details** screen.

3. **Technical Contact**: Enter the name of the primary contact for bug-related fixes and questions - usually the lead developer lead. By default, your name will be entered. 

Now click **Next Step** to proceed to specifying Environment.

![](attachments/registration/register-service-form-application.png)

### 7.2 Environment 

Specify the environment details for the app.

1. **Environment Name:**

   a. **Existing Environment: **Select from the list of the existing environments registered in the Data Hub Catalog

   b. **New Environment:** This is a non-editable field, displaying the environment as it will be rendered in the catalog.

2. **UUID**: Displays the unique identifier for the specified environment.
3. **Environment Location:** Add a URL for the location that the app is registered in.

Click **Next Step** to proceed to **Contract**.

![](attachments/registration/register-service-form-environment.png)

### 7.3 Upload OData Contract

Upload the OData V3 or V4 Contract for the new service. The contract will be uploaded and validated for registering the Data Hub catalog.

{{% alert type="info" %}}
If the contract upload was not successful it is possible to upload a new contract by clicking on the **Different Contract Link**.
{{% /alert %}}

 When the upload validation is successful, click **Next Step** to proceed to **Schema.**

![](attachments/registration/register-service-form-contract.png)

### 7.4 Schema

For the OData contract that you have uploaded in **Contract**, if there are several schemas defined, select the primary schema (which will be previewed in the right window) that will be used for the service definition in the Data Hub Catalog.

![](attachments/registration/register-service-form-schema.png)

{{% alert type="info" %}}When there are several schemas, these contracts may all be necessary. The primary contract imports information from the other contracts that are included to form the full specification of the service.
{{% /alert %}}

When you have selected your schema, click **Next Step** to go to the **Details** form.

### 7.5 Details

In this final step in the manual registration process, the **Details** screen is used to specify further Service details that are displayed in the Service metadata pane. For further details, see [??x-ref to Property metadata pane in the search document](?) details and classification

{{% todo %}}[**IG: @GM - what does this classification apply to? The Dataset for the whole service, or app, or each of the entities exposed in the service? **If it is to the service then this does not connect to the use of the word App.
**- What if there are entities that are public, and others confidential? **
**- Need to define this in greater detail in the Asset Details screen. **]{{% /todo %}}. 

1. **Security Classification ** – Security Classification indicates the classification of the data associated with the entities in the service. Click to select from one of the following:

   * **Internal** – data is restricted to the members of the organization 
   * **Confidential** – limited to restricted users, requiring further authentication
   * **Public** – data is available to all internal and external users.

2. **Security Type –** The security provider is the owner of the security configuration package. If this is set the consumer of a service can download the security package for the project and the corresponding security schema’s. Select from the dropdown menu either:

   - Mendix
   - Team Center
   - Other [the organizations own security configuration protocol]

3. **Service Name** - Enter the name of the OData Service.
4. **Relative service location** – Relative URL for the service 
5. **Service Description ** – Enter a description of the service that will be displayed for the **Asset Details**
6. **Tags **– Tags can be used to organise a service and make it discoverable for specific users. A tag can be added by typing and pressing enter or space. 

![](attachments/registration/register-service-form-details.png)

![](attachments/registration/register-service-form-security.png)

{{% todo %}}[**IG: The above form was also in the Register Baseline doc. Verify what is implemented.**]{{% /todo %}}

{{% todo %}}[**AD: cross-reference Security doc**]{{% /todo %}}

 {{% todo %}}[**IG: IMPORTANT note, in this design graphic, an absolute URL has been specified for a relative location!**]{{% /todo %}}

When all the information is specified, click **Register Service**. The contracts will be interpreted and the service and metadata will be registered in the Data Hub Catalog and are available to be discovered and consumed.

{{% todo %}}[**IG: How to update a registered service? New versions of a service get registered in this way, with the difference being the version number, for example?**]{{% /todo %}}

 {{% todo %}}[**IG: The following section is not included for public Beta**]{{% /todo %}}

## 8 Using the Data Hub Catalog API to Register

You can use the Data Hub Catalog API to create a registration gateway for connectable assets to register on or to create multiple contracts. The API supports the registration of OData v3 and OData v4 services. The form is used for registering new services and to update (to a different service version) previously registered services.

{{% todo %}}[**AD: what is the URL for the API? Cross-reference needed.**]{{% /todo %}}

{{% todo %}}[**IG: Any further info that I can include in this introductory text?**]{{% /todo %}}

{{% todo %}}[**IG: The API is available as a Swagger spec and accessed ….**]{{% /todo %}}

This table describes what happens in the Data Hub Catalog when using the API and there are actions in the Mendix Cloud:

{{% todo %}}[**IG: Verify that the table is up-to-date**]{{% /todo %}}

{{% todo %}}[**IG: Include a x-ref about Cloud Portal here.**]{{% /todo %}}

{{% todo %}}[**IG: Edit text of table**]{{% /todo %}}

{{% todo %}}[**IG: Is there too much information here? @SB felt this was the case. **]{{% /todo %}}

| Action in Mendix Cloud | What Happens in Data Hub |
| --- | --- |
| Start application<br />Restart application | 1. The application is registered/updated in Mendix Data Hub.<br />2. The environment to which it is being deployed is registered/updated in the Data Hub Catalog.<br />3. If there are published OData v3 services, they will be registered/updated. The entities that are part of the service will get registered/updated and will then be searchable in Studio Pro.<br />4. If the application consumes OData v3 services that are already registered in the Data Hub Catalog, it will be registered that the application (deployed on a specific environment) is consuming these services. |
| Clear environment | Consumption and publishing is cleared.<br />Application/service/data sources remain. |
| Delete | Environment is deleted.<br />Application remains. |
| Update (if you have sufficient rights) | Updates the metadata of the corresponding environment. |

{{% todo %}}[**IG: In table above — more specific description of Update else it is too generic and should be removed.**]{{% /todo %}} ]{{% todo %}}

{{% todo %}}[**IG: 9 Publishing to Data Hub Catalog from Team Center Services**]{{% /todo %}}

{{% todo %}}[**IG: Necessary to write about this in the docs Andrej K. https://docs.mendix.com/partners/**]{{% /todo %}}

{{% todo %}}[**IG: 10 Registration of Kafka Contracts**]{{% /todo %}}

{{% todo %}}[**IG: Data Hub Broker Product Plan - Materialized Virtual Entities – Dropbox Paper: https://paper.dropbox.com/doc/Data-Hub-Broker-Product-Plan-Materialized-Virtual-Entities--AxywVV5XhXqrl4luKsnOVZTgAg-xNt38RqceWY8ofGQyEDFT**]{{% /todo %}}

{{% todo %}}[**IG: DataBroker M2 - Single entity consume via ConsumedKafkaService – Dropbox Paper: https://paper.dropbox.com/doc/DataBroker-M2-Single-entity-consume-via-ConsumedKafkaService--AxyDMr72__kudHM35lNU2PN7Ag-oyqgMNwA22NVItfB2jKIX**]{{% /todo %}}

{{% todo %}}[**IG: 11 Troubleshooting**]{{% /todo %}}
