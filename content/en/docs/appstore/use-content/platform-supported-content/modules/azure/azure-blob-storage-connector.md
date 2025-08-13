---
title: "Azure Blob Storage"
url: /appstore/modules/azure/azure-blob-storage/
description: "Describes the configuration and usage of the Azure Blob Storage connector, which is available in the Mendix Marketplace. Azure Blob Storage is an object storage service offering industry-leading scalability, data availability, security, and performance."
weight: 20
aliases:
    - /appstore/connectors/azure-blob-storage-connector/
    - /appstore/connectors/azure/azure-blob-storage/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Azure Blob Storage](https://marketplace.mendix.com/link/component/<insert when published>) connector enables you to connect your app to [Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs) and easily store objects.

### Typical Use Cases

The Azure Blob Storage service is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case. With cost-effective storage types and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements. Some typical use cases of Azure Blob Storage are:

* Back up and restore critical data - Meet Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and compliance requirements with Blob Storage's robust replication features.
* Archive data at the lowest cost - Move data archives to the Azure Blob Storage to eliminate operational complexities and gain new insights.

### Prerequisites {#prerequisites}

The Azure Blob Storage Connector requires Mendix Studio Pro version 9.24.2 or above.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the Azure service to which it connects may incur a usage cost. For more information, refer to Azure documentation.

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Azure Blob Storage connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AzureBlobStorageConnector** section. The connector provides a domain model and operations that you can use to connect your app to Azure Blob Storage. Each operation can be implemented in a microflow or nanoflow.

### Configuring Authentication {#authentication}

To interact with Azure Blob Storage, authentication can be performed using either a Shared Access Signature (SAS) or an Azure Entra ID Access Token.

#### SAS authorization
A Shared Access Signature (SAS) provides secure, delegated access to resources in your storage account. Follow these steps:

1. Have your administrator generate a SAS for the target container or blob.
2. Create a `SASCredentials` object and populate its `SASToken` attribute.
3. Pass the `SASCredentials` object to the `AbstractCredentials` parameter in your operation microflow.

#### User-Based Azure Entra ID Access Token
For user-based Azure Entra ID authentication:

1. Configure Single Sign-On (SSO) using the `OIDC SSO` marketplace module.
2. Utilize the `GetCurrentToken` microflow to obtain the required access token.
3. Create an `EntraCredentials` object and set its `BearerToken` attribute.
4. Supply the `EntraCredentials` object to the `AbstractCredentials` parameter in your operation microflow.

#### Application-Based Azure Entra ID Access Token
For application-based Azure Entra ID authentication:

1. Set the ClientId, ClientSecret, and TenantId constants of your registered application in Azure.
2. Create a `GetApplicationBearerTokenRequest` object.
3. Supply the `GetApplicationBearerTokenRequest` to the `POST_v1_Azure_GetApplicationBearerToken` operation to generate a token and return an `EntraCredentials` object.
4. Supply the `EntraCredentials` object to the `AbstractCredentials` parameter in your operation microflow.

### Configuring Operation Microflows

[Operations](/refguide/Operations/) define the operations that are executed in a microflow or a nanoflow.

The Azure Blob Storage connector contains the following operations:

* `PutBlob` - Allows you to upload, as a blob, a file of any type, to Azure Blob Storage. For more information, see [Put Blob to Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob).
* `GetBlob` - Allows you to retrieve a blob. For more information, see [Get Blob to Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob).
* `DeleteBlob` - Allows you to delete a blob. For more information, see [Delete Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/delete-blob).
* `ListBlobs` - Allows you to list the blobs in a specified container. For more information, see [List blobs from an Azure Blob Storage container](https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id).
* `GetApplicationBearerToken` - Allows the application to request a bearer token. The response is mapped to a `EntraCredentials` object that can be used to authenticate calls to Azure Blob Storage.

You can implement the operations of the connector by using them in microflows. 

#### PUT_v1_Azure_PutBlob

`PutBlob` – stores the contents of a document as a blob in Azure Blob Storage. This operation requires a valid `PutBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Put Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob).

To use this operation in your microflow:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_PutBlob*, and then click **OK**.
3. In the **App Explorer**, in the **AzureBlobStorageConnector** section, find the **PUT_v1_Azure_PutBlob** operation microflow.
4. Create a **SASCredentials** or **EntraCredentials** object and add the SAS or access token to the **SASToken** or **BearerToken** attribute. 
5. Drag the **PUT_v1_Azure_PutBlob** microflow into your microflow.
6. Double-click the **PUT_v1_Azure_PutBlob** operation to configure the required parameters. 
    
    For the `PUT_v1_Azure_PutBlob` operation, retrieve the `BlobFileDocument` you want to store and provide a configured `SASCredentials` or `EntraCredentials` object. You must then create a `PutBlobRequest` object in your microflow as the last parameter. This entity requires the following parameters:

    | Parameter | Description | Required |
    |-----------|-------------|----------|
    | `StorageAccount` | Storage account name you want to perform Blob Storage operations on | Yes |
    | `VersionAPI` | API version for the Azure Storage service (e.g., '2021-04-01') | Yes |
    | `BlobName` | Desired name for the blob in storage | Yes |
    | `ContainerName` | Target container for Blob Storage | Yes |
    | `BlobType` | Type of Blob (currently supports BlockBlob only) | Yes |

    The following parameters are optional:

    | Parameter | Description | Default |
    |-----------|-------------|----------|
    | `ContentType` | MIME content type specification | application/octet-stream |
    | `StorageType` | Storage tier configuration | Varies by Blob type |
    
7. Configure a method to trigger the `ACT_PutBlob` microflow. 
    For example, you can call the microflow with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

#### GET_v1_Azure_GetBlob
    
`GetBlob` – Retrieves the contents of a blob stored in Azure Blob Storage. This operation requires a valid `GetBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Get Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob).

To use this operation in your microflow:

1. Create a `GetBlobRequest` object and populate the required attributes:

   | Parameter        | Description                                                  | Required |
   |------------------|--------------------------------------------------------------|----------|
   | `StorageAccount` | Storage account name you want to perform Blob Storage operations on | Yes |
   | `VersionAPI` | API version for the Azure Storage service (e.g., '2021-04-01')   | Yes      |   
   | `BlobName`       | Name of the blob to retrieve                                 | Yes      |
   | `ContainerName`  | Name of the container the blob is stored in                  | Yes      |
   | `BlobType`       | Type of Blob (currently supports BlockBlob only)             | Yes      |
   | `ContentType`    | MIME content type of the blob (used for response header)     | No       |

3. Provide a valid credentials object via the `AbstractCredentials` parameter.
4. Call the `GET_v1_Azure_GetBlob` action in your microflow.
5. The operation returns a `GetBlobResponse` object with the returned Blob associated with it.

#### DELETE_v1_Azure_DeleteBlob

* `DeleteBlob` – Deletes a specified Blob from Azure Blob Storage. This operation requires a valid `DeleteBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Delete Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/delete-blob).

To use the DeleteBlob operation in your microflow:

1. Create a `DeleteBlobRequest` object and populate the required attributes:

   | Parameter        | Description                                                  | Required |
   |------------------|--------------------------------------------------------------|----------|
   | `StorageAccount` | Storage account name you want to perform Blob Storage operations on | Yes |
   | `VersionAPI` | API version for the Azure Storage service (e.g., '2021-04-01')   | Yes      |
   | `BlobName`       | Name of the blob to delete                                   | Yes      |
   | `ContainerName`  | Name of the container where the blob is stored               | Yes      |

3. Provide a valid credentials object via the `AbstractCredentials` parameter.
4. Call the `DELETE_v1_Azure_DeleteBlob` action in your microflow.
5. The operation returns a `DeleteBlobResponse` object, which is a generalization of `AbstractResponse` and contains the StatusCode and ReasonPhrase.

#### GET_v1_Azure_ListBlobs

* `ListBlobs` – Lists the blobs contained in your specified Azure Blob Storage container. This operation requires a valid `ListBlobsRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [List blobs from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs).

To use the ListBlobs operation in your microflow:

1. Create a `ListBlobsRequest` object and populate the required attributes:

   | Parameter        | Description                                                  | Required |
   |------------------|--------------------------------------------------------------|----------|
   | `StorageAccount` | Storage account name you want to perform Blob Storage operations on | Yes |
   | `VersionAPI` | API version for the Azure Storage service (e.g., '2021-04-01') | Yes |
   | `ContainerName`  | Name of the container where the blob is stored               | Yes      |
   | `Prefix`    | The Prefix attribute is used to list only blobs from a folder within your container that match the specified prefix                           | No      |
   | `MaxResults`  | The maximum number of results listed by the ListBlobs operation               | No      |
   | `Marker`  | The marker used to get the next (sub)set of blobs from the specified location.               | No      |

3. Provide a valid credentials object via the `AbstractCredentials` parameter.
4. Call the `GET_v1_Azure_ListBlobs` action in your microflow.
5. The operation returns a list of `Blob` objects associated with the `ListBlobResponse`, which is a generalization of `AbstractResponse`.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
