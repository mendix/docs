---
title: "Curate Registered Assets"
url: /catalog/manage/curate/
description: "Describes how to curate and enhance data assets in Catalog, and make them easier to find and understand."
aliases:
    - /catalog/curate/
    - /data-hub/data-hub-catalog/curate/
    - /data-hub/data-hub-catalog/manage-data-sources/curate/
---

## Introduction

Curators, owners of data sources, and Mendix Admins can curate registered assets. Curation in the Catalog is the process of enriching the metadata and providing further information about the exposed data sources, datasets and attributes, and deleting irrelevant or outdated data sources. You can add custom application icons, Catalog-specific descriptions, and tags to supplement the registered metadata. Curate functions in the Catalog include setting the [Discoverability](#discoverability) of data sources, indicating whether the data source is [validated](#validated), and specifying the [Business and Technical Owners](#custom-owner).

Users who can curate assets in the Catalog are as follows:

* Owners of a registered service – can curate their own services which include those that have been set to **Not discoverable**
* [Curators](/catalog/manage/user-roles/#curator) and [Mendix Admins](/catalog/manage/user-roles/#admin) – can curate and find all registered assets in the Catalog

Owners and Curators can also get an overview of the registered assets they own and curate from the [Curate](#curatelist) page in the Catalog.

{{% alert color="info" %}}
Information that is added or changed during curation is stored in the Catalog for that item. It will not be added to the service contract, metadata files, or affect any of the values in the metadata files associated with the service or the data associated with the exposed datasets.
{{% /alert %}}

## Curate List {#curatelist}

Owners and curators of registered assets can click **Curate** from the Catalog home page to see the curation list screen. This page provides an overview of all the registered assets you can curate as an owner under the **My Assets** tab. Curators will also see the **Company Assets** tab that lists all the registered assets:

{{< figure src="/attachments/catalog/curate/curate-list.png" alt="curate list" class="no-border" >}}

These lists include registered data sources and also individual datasets that are exposed for the data source.

You can search for specific assets by entering a search string in the search bar or **Filter** by: **Asset Type**, **Application**, **Environment Type**, **Technology**, or **Discoverable** assets.

The list can be sorted by any of the columns by clicking on the column header.

Click **View** to display the asset details. You can then perform curate actions to add Catalog-specific information to the asset metadata.

## Curate Page {#curation-option}

Curation is performed on the Edit Data Source screen. If you are a curator or owner of an asset, you will see the option to **Edit** the selected item.

{{% alert color="info" %}}
Owners of registered assets can only curate their services.
{{% /alert %}}

When a data source is selected, click **Edit** to do the following:

* Add or edit the description of the data source
* Set the data source as **Validated** and/or **Discoverable** 
    * **Validated** – indicates the data source has been validated
    * **Discoverable** – determines if the service is visible and can be found (and consumed) by users of the Catalog; if a service is set to **Not discoverable**, only the owners of the service (**Business** and **Technical**) and curators can find the registered data source
* Add new tags to your data source

When a dataset is selected, click **Edit the dataset** to do the following:

* Add or edit the description of the dataset
* Set the dataset as **Validated**
* Search for and add descriptions of the attributes

## Editing the Metadata of an App {#curate-application}

The curate functions that are available for a selected data source are to change **Data source**, **Application**, and **Authentication** details This section describes the application details that can be changed: changing owners or changing the application icon.

You can curate Application details from the **Application** tab as follows:

1. Click **Edit** > **Application** tab.

    {{< figure src="/attachments/catalog/search/curation-option.png" alt="app edit screen" >}}

2. The **Application** tab is displayed:

    {{< figure src="/attachments/catalog/curate/edit-application.png" alt="app edit screen" >}}

### Changing Owners of an App {#changing-owners}

The **Business Owner** and **Technical Owner** are displayed as a link in the **Application** tab so users can contact them through the provided email.

By default, the **Technical Owner** for a registered asset is the user who registered the data source through the deployment pipeline in Studio Pro. The owners can also be specified during manual registration using one of the connectors on the Catalog home page and when registering assets using the Catalog API. 

{{% alert color="info" %}}
**Business Owners** and **Technical Owners** have curation rights for the registered data source in the Catalog only if they are registered users on the Mendix Platform. If a [custom owner](#custom-owner) is created using the process described in this section, the link to contact them will be displayed for the asset. It does not mean they are able to access or curate the asset in the Catalog .{{% /alert %}}

{{% alert color="info" %}}
Curators and Mendix Admins can manage the lists of custom owners as part of their administration functions. For more information, see the [Owners](/control-center/catalog-admin/#custom-owners) section of *Catalog Administration*.
{{% /alert %}}

#### Changing the Business and Technical Owners of an App {#changing-owner}

To change the **Business Owner** or **Technical Owner** from the **Application** tab, click in the name field of the **Business** or **Technical** owner. You can start typing or select a name from the drop-down list. Mendix Platform users will be displayed with their avatar and custom owners will be shown with an avatar that displays their initials.

The **Technical Owner** can only be changed in **Control Center**, not within the Catalog. For more information, see the [Owners](/control-center/catalog-admin/#custom-owners) section of *Catalog*.

#### Adding a Custom Owner {#custom-owner}

When curating the owners of an application, you can specify an owner who is not a registered Mendix user but is the technical contact point for the application (the **Technical Owner**) or the owner of the data that is made available in the app (the **Business Owner**). The name and the contact email must be provided.

Curators can manage the lists of custom owners as an administration task. For more information, see the [Owners](/control-center/catalog-admin/#custom-owners) section of *Catalog*.

To add a custom **Business Owner**, follow these steps:

1. On the **Application** tab, if you start typing the name of an owner and it is not in the drop-down list, you will be prompted to **Create** it. Click on the prompt and the **Enter New Custom Owner Details** pop-up is displayed.

1. Enter the **Name** and **Email** of the owner and click **Save**.

    {{% alert color="info" %}}When you create or select a custom owner for an application, this will be displayed in the **Application** tab as a link to the email specified. Custom owners will have curate or access rights to the Catalog or the asset in the Catalog. Only Mendix users that are added as an owner can curate assets they own. {{% /alert %}}

1. Click **Save** to return to the **Application** tab. Click **Save** to return to the Data Source details page where the changes will be displayed in the right-hand metadata pane.

### Changing the App Icon {#application-icon}

You can change the icon that is displayed for the app and data source by uploading your own custom application icon or selecting one from the icon library. The selected icon will be displayed for all endpoints of the application and data source, such as the Catalog search results and in the Mendix Studio Pro [Integration pane](/refguide/integration-pane/).

When you change an application icon, all data sources that are registered in the Catalog for that application will show the new icon.

Currently, by default, the application icon is determined by the application type when the data source is registered. For example, for Mendix apps the Mendix icon is displayed which identifies the technology of the source app.

#### Uploading a Custom Icon Image File

When you want to upload a custom icon or image, the following apply:

* The accepted file types are *.png*, *.jpg*, and *.jpeg*.
* The maximum accepted file size is 50 KB.
* The minimum recommended image size is 64 pixels x 64 pixels. You can crop larger images and files, then select the area you want to display during the upload operation.

    {{% alert color="info" %}}If smaller images are selected, they will be expanded to meet the 64 x 64 size which may result in a loss of image quality. Ensure that your original file meets the recommendations for an optimal display.{{% /alert %}}

* Custom icons that are uploaded will be saved to the **Icon Library** and can be used for other apps.

To **Upload a different icon** for the app, follow these steps:

1. In the **Application** tab of the selected data source, click **Upload a different icon** to display the **Upload Application Icon** pop up:

    {{< figure src="/attachments/catalog/curate/icon-upload-dialog.png" alt="upload icon"   width="300"  class="no-border" >}}

2. Drag the image file into the upload area or click **Upload** to browse and select a file from your file system. Click **Step 2: Crop image** to proceed.
3. Move the wire-frame to select an area of the loaded image and change the size of the wire-frame to crop the image to the area that you want to use. When you are satisfied, click **Apply Changes**.

    {{% alert color="info" %}}For high-resolution images, there will be a warning if the selected area exceeds the size limit. Select a smaller area of the image to reduce the file size.{{% /alert %}}

4. A preview of the application icon is shown. Click **Save** to upload the selected icon.

    {{< figure src="/attachments/catalog/curate/icon-preview.png" alt="upload icon"   width="300"  class="no-border" >}}

5. The **Application** tab will now show the selected icon:

    {{< figure src="/attachments/catalog/curate/asset-metadata-new-icon.png" alt="upload icon" class="no-border" >}}

6. Click **Save** to return to the Data Source details page. The custom icon will be stored in the **Icon Library**.

#### Selecting an Icon from the Library

An alternative to uploading an icon is to use an existing icon by clicking **select one from your library**. The icons for your Catalog will be shown and you can select one and click **Change Icon**.

## Editing the Metadata of a Data Source {#service-details}

You can curate data sources to add a Catalog description and add tags.

### Adding or Editing a Catalog Description

If a description was included in the contract, it will be displayed in the Data Source details page for the selected data source. You can add a description or edit an existing description for the Catalog. They are included in searches.

{{% alert color="info" %}}If there is a **Catalog Description** for a service, both descriptions will be retained for the service in the Catalog regardless of the one that is selected for display in the Data Source details page. {{% /alert %}}

To edit the asset metadata, follow these steps:

1. On the **Curate** page, click **Edit** to display the Edit Data Source box:

    {{< figure src="/attachments/catalog/curate/service-metadata-box.png" alt="service metadata" class="no-border" >}}

2. The description from the service metadata is displayed in the **Description provided by the contract**. This cannot be changed, as it is part of the service definition. You can provide an alternative description in the **Description** box.

3. Add a description. This will be stored with the service details in the Catalog.
4. Click **Save** to save the changes and return to the Data Source details page, which will now display the selected description.

### Adding or Editing Tags to a Service {#tags}

Add tags to categorize a registered service and provide additional means for finding the service. Tags that are specified for a service also apply to the datasets and attributes that are exposed in the service. Specify tags for the selected service by following these steps:

1. On the Data Source details page of a selected service, click **Edit** to display the Edit Data Source screen.
2. To add tags, click the empty **Tags** input area:

    {{< figure src="/attachments/catalog/curate/service-metadata-tags.png" alt="tags" class="no-border" >}}

3. To add or edit the tags, enter a tag string and press <kbd>Enter</kbd> or select one from the list of existing tags that are used in the Catalog. To separate multiple tags, use spaces.

    {{% alert color="info" %}}Tags can only contain lower-case letters, numbers, and underscores. They must have a minimum of 2 characters. If you use capital letters when typing the tag string, they will be converted to lower-case. {{% /alert %}}

4. You can enter multiple tags separated by spaces. You can remove tags by clicking the {{% icon name="remove" %}}.

5. When you are finished specifying the tags, click **Save** to register the changes. The tags will be shown on the Data Source details page.

### Adding Authentication to a Service {#authentication}

Publishers of a data source can let consuming developers know what they will need to identify themselves when consuming a data source. Add this later if not configured during the registration step.

For a description of supported authentication methods, see the [Selecting an Authentication Method](/catalog/register/register-data/#authentication) section of *Register Resources in the Catalog*.

## Discoverable and Validated {#discoverability}

The discoverable and validated properties of registered assets can be set from the Edit Data Source page for the selected asset.

### Discoverable

The discoverability is set at a data source level. When a data source is registered in the Catalog, **Discoverable** is set to the company's default value, which is configured by the Mendix Admin in [Control Center](/control-center/catalog-admin/#settings). If **Discoverable** is on for a data source, all users can find the asset and see the details. The **Discoverable** setting will apply to all datasets that are exposed in the data source.

When the **Discoverable** setting is turned off, it will only be visible to the owners of the service, curators, and the Mendix Admin. All other users of the Catalog (and through the Catalog integrations in Studio Pro) will not be able to see an asset whose discoverability is turned off.

When a data source is set to **Not discoverable**, the data source, and the datasets that are exposed cannot be found by other users (except by owners and curators). However, there may be instances of the same datasets in the Catalog, from the same apps, that are available through other discoverable services.

{{% alert color="info" %}}The **Share Data Source** and **Share Dataset** links will not be accessible to users for a **Not discoverable** data source and the exposed datasets unless they are an owner or curator.
{{% /alert %}}

To change the discoverability of a service, follow these steps:

1. In the Catalog, select the desired data source.
2. If you have curation rights, the **Edit** button is displayed. Click the **Discoverable** toggle to turn it on or off. 

A message is displayed to indicate the discoverability of the asset and the discoverability icon is updated in the search results and Data Source details page.

### Validated {#validated}

The **Validated** property can be assigned to a data source or a dataset to indicate, for example, that it has been qualified and is a reliable asset. You can turn it on and off by clicking the **Validated** toggle. A validated data source or dataset is indicated by the validation shield on the Data Source details page and in the search results pane.

Setting an asset as **Validated** contributes to the weighting of the asset in the search results. This means that **Validated** assets will be listed before unvalidated assets in the results.

## Deleting a Data Source {#delete-data-source}

Owners of a data source can delete their own data sources. Anyone with curation rights (Mendix Admins or curators) can delete any data sources within the company. This ensures that their Catalog is free of outdated or irrelevant data sources.

Deleting something from the Catalog only removes the metadata registration. It does not affect the publishing application or any applications that are consuming the data source.

To delete a data source, click the delete icon (red trash can) on the Data Source details page, then click **Delete**.
