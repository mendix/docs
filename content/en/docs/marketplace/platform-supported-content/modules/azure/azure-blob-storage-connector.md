---
title: "Azure Blob Storage Connector"
url: /appstore/azure-modules/azure-blob-storage/
description: "Describes the configuration and usage of the Azure Blob Storage connector, which is available in the Mendix Marketplace. Azure Blob Storage is an object storage service offering industry-leading scalability, data availability, security, and performance."
weight: 20
---

## Introduction

The [Azure Blob Storage](https://marketplace.mendix.com/link/component/244401) connector enables you to connect your app to [Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs) and easily store objects.

### Typical Use Cases

The Azure Blob Storage service is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case. With cost-effective storage types and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements. Some typical use cases of Azure Blob Storage are:

* Back up and restore critical data - Meet Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and compliance requirements with Blob Storage's robust replication features.
* Archive data at the lowest cost - Move data archives to the Azure Blob Storage to eliminate operational complexities, and gain new insights.

### Prerequisites {#prerequisites}

The Azure Blob Storage Connector requires Mendix Studio Pro version 9.24.2 or above.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the Azure service to which it connects may incur a usage cost. For more information, refer to Azure documentation.

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Azure Blob Storage connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AzureBlobStorageConnector** section. The connector provides a domain model and operations that you can use to connect your app to Azure Blob Storage. Each operation can be implemented using it in a microflow or nanoflow.

### Configuring Authentication {#authentication}

To interact with Azure Blob Storage, authentication can be performed using either a Shared Access Signature (SAS) or an Azure Entra ID access token.

#### Configuring SAS Authorization

A Shared Access Signature (SAS) provides secure, delegated access to resources in your storage account. To configure SAS authorization, perform the following steps:

1. Ask your administrator to generate an SAS for the target container or blob.
2. Create a **SASCredentials** object and populate its **SASToken** attribute.
3. Pass the **SASCredentials** object to the **AbstractCredentials** parameter in your operation microflow.

#### Configuring an Azure Entra ID Access Token

To configure user-based Azure Entra ID authentication, perform the following steps:

1. Configure Single Sign-On (SSO) with the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module.
2. Use the **GetCurrentToken** microflow to obtain the required access token.
3. Create an **EntraCredentials** object and set its **BearerToken** attribute.
4. Supply the **EntraCredentials** object to the **AbstractCredentials** parameter in your operation microflow.

#### Configuring a Microflow for an AWS Service

To configure application-based Azure Entra ID authentication, perform the following steps:

1. In Microsoft Azure, set the **ClientId**, **ClientSecret**, and **TenantId** constants for your registered application.
2. Create a **GetApplicationBearerTokenRequest** object.
3. Supply the **GetApplicationBearerTokenRequest** to the **POST_v1_Azure_GetApplicationBearerToken** operation to generate a token and return an **EntraCredentials** object.
4. Supply the **EntraCredentials** object to the **AbstractCredentials** parameter in your operation microflow.

### Configuring Operation Microflows

[Operations](/refguide/operations/) define the operations that are executed in a microflow or a nanoflow.

The Azure Blob Storage connector contains the following operations:

* `PutBlob` - Allows you to upload a file of any type to Azure Blob Storage as a blob. For more information, see [Put Blob to Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob).
* `GetBlob` - Allows you to retrieve a blob. For more information, see [Get Blob to Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob).
* `DeleteBlob` - Allows you to delete a blob. For more information, see [Delete Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/delete-blob).
* `ListBlobs` - Allows you to list the blobs in a specified container. For more information, see [List Blobs from a Azure Blob Storage container](https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id).
* `GetApplicationBearerToken` - Allows the application to request a bearer token. The response is mapped to a **EntraCredentials** object that can be used to authenticate calls to Blob Storage.

You can implement the operations of the connector by using them in microflows. 

#### PUT_v1_Azure_PutBlob

`PutBlob` – stores the contents of a document as a blob in Azure Blob Storage. This operation requires a valid `PutBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Put Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob).

To use this operation in your microflow, perform the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_PutBlob*, and then click **OK**.
3. In the **App Explorer**, in the **AzureBlobStorageConnector** section, find the **PUT_v1_Azure_PutBlob** operation microflow.
4. Create a **SASCredentials** or **EntraCredentials** object and add the SAS or access token to the **SASToken** or **BearerToken** attribute. 
5. Drag the **PUT_v1_Azure_PutBlob** microflow into your microflow.
6. Double-click the **PUT_v1_Azure_PutBlob** operation to configure the required parameters. 
    
    For the `PUT_v1_Azure_PutBlob` operation, retrieve the `System.FileDocument` you want to store and provide a configured `SASCredentials` or `EntraCredentials` object. You must then create a `PutBlobRequest` object in your microflow as the last parameter. This entity requires the following parameters:

    * `StorageAccount` - Storage account name you want to perform blob storage operations on
    * `VersionAPI` - API version for the Azure Storage service (for example, `2021-04-01`)
    * `BlobName` - Desired name for the blob in storage
    * `ContainerName` - Target container for blob storage
    * `BlobType` - Type of blob (currently supports BlockBlob only)

    The following parameters are optional:

    * `ContentType` - MIME content type specification; the default value is `application/octet-stream`
    * `StorageType` - Storage tier configuration; the default value varies by blob type
    
7. Configure a method to trigger the `ACT_PutBlob` microflow. 
    For example, you can call the microflow with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

#### GET_v1_Azure_GetBlob

`GetBlob` – Retrieves the contents of a blob stored in Azure Blob Storage. This operation requires a valid `GetBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Get Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob).

To use this operation in your microflow, perform the following steps:

1. Create a **GetBlobRequest** object and populate the following attributes:

    * `BlobName` - Required; name of the blob to retrieve
    * `ContainerName` - Required; name of the container the blob is stored in
    * `BlobType` - Required; type of blob (currently supports BlockBlob only)
    * `ContentType` - Optional; MIME content type of the blob (used for response header)

2. Provide a valid credentials object by using the **AbstractCredentials** parameter.
3. Call the **GET_v1_Azure_GetBlob** action in your microflow.

The operation returns a **GetBlobResponse** object with the returned Blob associated with it.

#### DELETE_v1_Azure_DeleteBlob

Deletes a specified blob from Azure Blob Storage. This operation requires a valid `DeleteBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Delete Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/delete-blob).

To use this operation in your microflow, perform the following steps:

1. Create a **DeleteBlobRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on
    * `VersionAPI` - Required; API version for the Azure Storage service (for example, `2021-04-01`)
    * `BlobName` - Required; name of the blob to delete
    * `ContainerName` - Required; name of the container where the blob is stored

3. Provide a valid credentials object by using the **AbstractCredentials** parameter.
4. Call the **DELETE_v1_Azure_DeleteBlob** action in your microflow.

The operation returns a **DeleteBlobResponse** object, which is a generalization of **AbstractResponse** and contains the **StatusCode** and **ReasonPhrase**.

#### GET_v1_Azure_ListBlobs

Lists the blobs contained in your specified Azure Blob Storage container. This operation requires a valid `ListBlobsRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [List Blobs from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs).

To use this operation in your microflow, perform the following steps:

1. Create a **ListBlobsRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on
    * `VersionAPI` - Required; API version for the Azure Storage service (for example, `2021-04-01`)
    * `ContainerName` - Required; name of the container where the blob is stored
    * `Prefix` - Optional; used to list only blobs from a folder within your container that match the specified prefix
    * `MaxResults` - Optional; the maximum number of results listed by the **ListBlobs** operation
    * `Marker` - Optional; the marker used to get the next (sub)set of blobs from the specified location.

3. Provide a valid credentials object by using the **AbstractCredentials** parameter.
4. Call the **GET_v1_Azure_ListBlobs** action in your microflow.

The operation returns a list of **Blob** objects associated to the **ListBlobResponse**, which is a generalization of **AbstractResponse** and contains the **StatusCode** and **ReasonPhrase**.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}

### Known Limitations

This section lists all the known limitations of the Azure Blob Connector.

#### Blob Size

The maximum size for a blob uploaded through the connector is 1.49 GB. Larger files are not supported due to Mendix runtime and memory constraints.

#### Blob Types

The connector currently supports Block Blobs only. Other blob types such as Append Blobs and Page Blobs are not supported.

#### Authentication

* Shared Access Signature (SAS) tokens must be manually managed. The connector does not provide built-in functionality to refresh or regenerate SAS tokens when they expire.
* When using Azure Entra ID authentication, the connector does not handle token refresh automatically. Applications must implement microflows to renew access tokens as needed.

#### Metadata and Properties

* Setting or retrieving custom metadata and blob properties is not yet supported. Only the blob content and a limited set of parameters (such as `ContentType`) can be handled.

#### Operations

The connector supports single-blob operations only. Advanced batch operations (such as bulk deletion or parallelized multi-blob uploads and downloads) are not included.

#### Versioning and Snapshots

Azure Blob Storage features such as blob versioning, soft delete, and snapshots are not exposed through the connector.
