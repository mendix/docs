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

You can also generate an SAS by performing the **POST_v1_Azure_GetUserDelegationKey** operation in combination with one of the following:

* **Create_SAS_Token_Blob**
* **Create_SAS_Token_Directory**
* **Create_SAS_Token_Container**

For details, refer to the [Configuring Operation Microflows](#configure-operation-microflows) section. 

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

### Configuring Operation Microflows{#configure-operation-microflows}

Operations define the operations that are executed in a microflow or a nanoflow.

The Azure Blob Storage connector contains the following operations:

* `Put Blob` - Allows you to upload a file of any type to Azure Blob Storage as a blob. For more information, see [Put Blob to Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/put-blob).
* `Get Blob` - Allows you to retrieve a blob. For more information, see [Get Blob to Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob).
* `Delete Blob` - Allows you to delete a blob. For more information, see [Delete Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/delete-blob).
* `List Blobs` - Allows you to list the blobs in a specified container. For more information, see [List Blobs from a Azure Blob Storage container](https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id).
* `List Containers` - Allows you to list the containers you have access to in your Azure account. For more information, see [List Containers](https://learn.microsoft.com/en-us/rest/api/storageservices/list-containers2).
* `Get Application Bearer Token` - Allows the application to request a bearer token. The response is mapped to a **EntraCredentials** object that can be used to authenticate calls to Blob Storage.
* `Get User Delegation Key` - Allows you to retrieve a user delegation key. For more information, see [Get User Delegation Key](https://learn.microsoft.com/en-us/rest/api/storageservices/get-user-delegation-key).
* `Create SAS Token Blob` - Allows you to create an SAS with which to access a specific Blob.
* `Create SAS Token Container` - Allows you to create an SAS with which to access a specific Container.
* `Create SAS Toke _Directory` - Allows you to create an SAS with which to access a specific Directory.
* `Revoke All User Delegation Keys` - Revoke all the retrieved User Delegation Keys of an account in order to invalidate all existing SAS tokens of an account. To be able to invoke this service, you have to make sure that the application had been granted the Azure Entra Authoraization scope `https://management.azure.com/user_impersonation`, otherwise you will get an `HTTP-401 Unauthorized error`. Keep in mind that also new created SAS tokens which have been created with a revoked User Delegation Key will be invalid as well. For more information, see [Storage Accounts - Revoke User Delegation Keys](https://learn.microsoft.com/en-us/rest/api/storagerp/storage-accounts/revoke-user-delegation-keys). 

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
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2025-05-05` is required for this operation.
    * `BlobName` - Desired name for the blob in storage
    * `ContainerName` - Target container for blob storage
    * `BlobType` - Type of blob (currently supports BlockBlob only)

    The following parameters are optional:

    * `ContentType` - MIME content type specification; the default value is `application/octet-stream`
    * `StorageType` - Storage tier configuration; the default value varies by blob type
    
7. Configure a method to trigger the `ACT_PutBlob` microflow. 
    For example, you can call the microflow with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

The operation returns a **PutBlobRequestResponse** object, which is empty on itself, only its generalization AbstractResponse entity contains the http status code and optional the http reason phrase.

#### GET_v1_Azure_GetBlob

`GetBlob` – Retrieves the contents of a blob stored in Azure Blob Storage. This operation requires a valid `GetBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Get Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob).

To use this operation in your microflow, perform the following steps:

1. Create a **GetBlobRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2025-05-05` is required for this operation.
    * `BlobName` - Required; name of the blob to retrieve
    * `ContainerName` - Required; name of the container the blob is stored in
    * `BlobType` - Required; type of blob (currently supports BlockBlob only)
    * `ContentType` - Optional; MIME content type of the blob (used for response header)

2. Provide a valid credentials object by using the **AbstractCredentials** parameter.
3. Call the **GET_v1_Azure_GetBlob** action in your microflow.

The operation returns a **GetBlobResponse** object with the returned Blob associated with it.
Its generalization AbstractResponse entity contains the http status code and optional the http reason phrase.

#### DELETE_v1_Azure_DeleteBlob

Deletes a specified blob from Azure Blob Storage. This operation requires a valid `DeleteBlobRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [Delete Blob from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/delete-blob).

To use this operation in your microflow, perform the following steps:

1. Create a **DeleteBlobRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2025-05-05` is required for this operation.
    * `BlobName` - Required; name of the blob to delete
    * `ContainerName` - Required; name of the container where the blob is stored

2. Provide a valid credentials object by using the **AbstractCredentials** parameter.
3. Call the **DELETE_v1_Azure_DeleteBlob** action in your microflow.

The operation returns a **DeleteBlobResponse** object, which is a generalization of **AbstractResponse** and contains the **StatusCode** and **ReasonPhrase**.
Its generalization AbstractResponse entity contains the http status code and optional the http reason phrase.

#### GET_v1_Azure_ListBlobs

Lists the blobs contained in your specified Azure Blob Storage container. This operation requires a valid `ListBlobsRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [List Blobs from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs).

To use this operation in your microflow, perform the following steps:

1. Create a **ListBlobsRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on.
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2025-05-05` is required for this operation.
    * `ContainerName` - Required; name of the container where the blob is stored.
    * `Prefix` - Optional; used to list only blobs from a folder within your container that match the specified prefix.
    * `MaxResults` - Optional; the maximum number of results listed by the **ListBlobs** operation.
    * `Marker` - Optional; the marker used to get the next (sub)set of blobs from the specified location..

2. Provide a valid credentials object by using the **AbstractCredentials** parameter.
3. Call the **GET_v1_Azure_ListBlobs** action in your microflow.

The operation returns a list of **Blob** objects associated to the **ListBlobResponse**, which is a generalization of **AbstractResponse** and contains the **StatusCode** and **ReasonPhrase**.
Its generalization AbstractResponse entity contains the http status code and optional the http reason phrase.

#### GET_v1_Azure_ListContainers

Lists all containers within the specified Azure Blob Storage account. This operation requires a valid `ListContainersRequest` object and an appropriate credentials object (either `SASCredentials` or `EntraCredentials`). For more information, see [List Containers from Azure Blob Storage](https://learn.microsoft.com/en-us/rest/api/storageservices/list-containers2).

To use this operation in your microflow, perform the following steps:

1. Create a **ListContainersRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on.
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2025-05-05` is required for this operation.
    * `Prefix` - Optional; filters the results to return only containers whose names begin with the specified prefix.
    * `MaxResults` - Optional; the maximum number of results listed by the **ListContainers** operation.
    * `Marker` - Optional; the marker used to get the next (sub)set of containers from the specified location..

2. Provide a valid credentials object by using the **AbstractCredentials** parameter.
3. Call the **GET_v1_Azure_ListContainers** action in your microflow.

The operation returns a list of **Container** objects associated to the **ListContainersResponse**, which is a generalization of **AbstractResponse** and contains the **StatusCode** and **ReasonPhrase**.
Its generalization AbstractResponse entity contains the http status code and optional the http reason phrase.

#### POST_v1_Azure_GetApplicationBearerToken

Retrieves a bearer token from the registered app you need configured on Entra Id. This operation requires a valid `GetApplicationBearerTokenRequest` object. For more information, see [Get Bearer Token](https://learn.microsoft.com/en-us/community/content/azure-rest-api-how-to-create-a-bearer-token).

To use this operation in your microflow, perform the following steps:

1. Create a **GetApplicationBearerTokenRequest** object and populate the following attributes:

    * `TenantId` - Required; the Tenant ID of the registered app you have configured in your Microsoft Entra environment.
    * `ClientId` - Required; the Client ID of the registered app you have configured in your Microsoft Entra environment.
    * `ClientSecret` - Required; the Client Secret you have created on the registered app you configured in your Microsoft Entra environment.

2. Call the **POST_v1_Azure_GetApplicationBearerToken** action in your microflow.

The operation returns a **GetApplicationBearerTokenResponse** object with the returned **EntraCredentialsUsage** associated to it. The **EntraCredentialsUsage** entity is a specialization of the **EntraCredentials** entity so the returned object can be used to authenticate Blob operations.
Its generalization AbstractResponse entity contains the http status code and optional the http reason phrase.

#### POST_v1_Azure_GetUserDelegationKey{#get-user-delegation-key}

Retrieves a user delegation key. This operation requires a valid `GetUserDelegationKeyRequest` object. For more information, see [Create User Delegation Key](https://learn.microsoft.com/en-us/rest/api/storageservices/create-user-delegation-sas).

To use this operation in your microflow, perform the following steps:

1. Create a **GetUserDelegationKeyRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on.
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2025-07-05` is required for this operation.
    * `ExpiryDateTime` - Required; timestamp of when the validity period of the user delegation token ends.
    * `OptionalStartDateTime` - Optional; timestamp of when the validity period of the user delegation token starts.

2. Provide a valid **EntraCredentials** object by using the **EntraCredentials** parameter.
3. Call the **POST_v1_Azure_GetUserDelegationKey** action in your microflow.

The operation returns a **GetUserDelegationKeyResponse** object with the returned **UserDelegationKey** associated to it. This **UserDelegationKey** can be used in the **Create_SAS_Token_Blob**, **Create_SAS_Token_Container**, and **Create_SAS_Token_Directory** operations.

#### Create_SAS_Token_Blob 

Uses the **UserDelegationKey** generated with **POST_v1_Azure_GetUserDelegationKey** to create an SAS that can be used to access the specified Blob. For more information, see [Create SAS](https://learn.microsoft.com/en-us/rest/api/storageservices/create-user-delegation-sas).

To use this operation in your microflow, perform the following steps:

1. Perform the steps in the [POST_v1_Azure_GetUserDelegationKey](#get-user-delegation-key) section and use the acquired **UserDelegationKey** as input for the **Create_SAS_Token_Blob** operation microflow.
2. Create a **CreateSASTokenBlobInputFields** object and populate the following attributes:

    * `BlobName` - Required; the name of the blob you want to provide access to.
    * `StorageAccount` - Required; the storage account on which you want to perform Blob storage operations.
    * `ContainerName` - Required; the target container name where the blob will be stored.
    * `OptionalStartDateTime` - Optional; timestamp of when the validity period of the user delegation token starts.
    * `ExpiryDateTime` - Required; timestamp of when the validity period of the user delegation token ends.
    
3. Create a **StoragePermissions** object to specify the permissions you want the SAS to grant. To do that, populate the following attributes:

    * `Read` - Required. Read the content, properties, and metadata of a specific blob.
    * `Add` - Required. Add a block to an append blob.
    * `Create` - Required. Perform one of the following actions:
    
       * Write a new blob.
       * Snapshot a blob.
       * Copy a blob to a new blob.

    * `Write` - Required. Perform the following actions: 
    
       * Create or write content, properties, metadata, or blocklist.     
       * Snapshot or lease the blob.     
       * Resize the blob. This only applies to page blobs.     
       * Use the blob as the destination of a copy operation.

    * `Delete` - Required. Delete a blob. For version 2017-07-29 and above, the `Delete` permission also allows breaking a lease on a blob.
    * `DeleteVersion` - Required. Delete a blob version.
    * `PermanentDelete` - Required. Permanently delete a blob snapshot or version.
    * `List` - Required. List blobs non-recursively. This is always `False` for the **Create_SAS_Token_Blob** operation.
    * `Tags` - Required. Read or write the tags on a blob.
    * `Move` - Required. Move a blob to a new location.
    * `Execute` - Required. Get the system properties and, if the hierarchical namespace is enabled for the storage account, get the POSIX ACL of a blob.     
       If the hierarchical namespace is enabled and the caller is the owner of a blob, this permission grants the ability to set the owning group, POSIX permissions, and POSIX ACL of the blob. It does not allow the caller to read user-defined metadata.
    * `Ownership` - Required. When the hierarchical namespace is enabled, this permission enables the caller to set the owner or the owning group, or to act as the owner when the caller renames or deletes a blob within a directory that has the sticky bit set.
    * `Permissions` - Required. When the hierarchical namespace is enabled, this permission allows the caller to set permissions and POSIX ACLs on directories and blobs.
    * `Immutability` - Required. Set or delete the immutability policy or legal hold on a blob.

The operation returns an **SASCredentials** object. This **SASCredentials** object can be used to authenticate blob storage API calls for the specified blob.

#### Create_SAS_Token_Container

Uses the **UserDelegationKey** generated with **POST_v1_Azure_GetUserDelegationKey** to create an SAS that can be used to access the specified Container. For more information, see [Create SAS](https://learn.microsoft.com/en-us/rest/api/storageservices/create-user-delegation-sas).

To use this operation in your microflow, perform the following steps:

1. Perform the steps in the [POST_v1_Azure_GetUserDelegationKey](#get-user-delegation-key) section and use the acquired **UserDelegationKey** as input for the **Create_SAS_Token_Container** operation microflow.
2. Create a **CreateSASTokenContainerInputFields** object and populate the following attributes:

    * `StorageAccount` - Required; the storage account on which you want to perform Blob storage operations.
    * `ContainerName` - Required; the container to which you want to provide access.
    * `OptionalStartDateTime` - Optional; timestamp of when the validity period of the user delegation token starts.
    * `ExpiryDateTime` - Required; timestamp of when the validity period of the user delegation token ends.
    
3. Create a **StoragePermissions** object to specify the permissions you want the SAS to grant. To do that, populate the following attributes:

    * `Read` - Required. Read the content, blocklist, properties, and metadata of any blob in the container. Use a blob as the source of a copy operation.
    * `Add` - Required. Add a block to an append blob.
    * `Create` - Required. Perform one of the following actions:
    
       * Write a new blob.
       * Snapshot a blob.
       * Copy a blob to a new blob.

    * `Write` - Required. Perform the following actions: 
    
       * Create or write content, properties, metadata, or blocklist.     
       * Snapshot or lease the blob.     
       * Resize the blob. This only applies to page blobs.     
       * Use the blob as the destination of a copy operation.

    * `Delete` - Required. Delete a blob. For version 2017-07-29 and above, the `Delete` permission also allows breaking a lease on a blob.
    * `DeleteVersion` - Required. Delete a blob version.
    * `PermanentDelete` - Required. Permanently delete a blob snapshot or version. This is always `False` for the **Create_SAS_Token_Container** operation.
    * `List` - Required. List blobs non-recursively.
    * `Tags` - Required. Read or write the tags on a blob. This is always `False` for the **Create_SAS_Token_Container** operation.
    * `Move` - Required. Move a blob to a new location.
    * `Execute` - Required. Get the system properties and, if the hierarchical namespace is enabled for the storage account, get the POSIX ACL of a blob.     
       If the hierarchical namespace is enabled and the caller is the owner of a blob, this permission grants the ability to set the owning group, POSIX permissions, and POSIX ACL of the blob. It doesn't allow the caller to read user-defined metadata.
    * `Ownership` - Required. When the hierarchical namespace is enabled, this permission enables the caller to set the owner or the owning group, or to act as the owner when the caller renames or deletes a blob within a directory that has the sticky bit set.
    * `Permissions` - Required. When the hierarchical namespace is enabled, this permission allows the caller to set permissions and POSIX ACLs on directories and blobs.
    * `Immutability` - Required. Set or delete the immutability policy or legal hold on a blob.

The operation returns an **SASCredentials** object. This **SASCredentials** object can be used to authenticate blob storage API calls for the specified container.

#### Create_SAS_Token_Directory

Uses the **UserDelegationKey** generated with **POST_v1_Azure_GetUserDelegationKey** to create an SAS that can be used to access the specified Directory. For more information, see [Create SAS](https://learn.microsoft.com/en-us/rest/api/storageservices/create-user-delegation-sas).

To use this operation in your microflow, perform the following steps:

1. Perform the steps in the [POST_v1_Azure_GetUserDelegationKey](#get-user-delegation-key) section and use the acquired **UserDelegationKey** as input for the **Create_SAS_Token_Directory** operation microflow.
2. Create a **CreateSASTokenDirectoryInputFields** object and populate the following attributes:

    * `DirectoryName` - Required; the name of the folder/directory you have within a specific container.
    * `StorageAccount` - Required; the storage account on which you want to perform Blob storage operations.
    * `ContainerName` - Required; the container to which you want to provide access.
    * `OptionalStartDateTime` - Optional; timestamp of when the validity period of the user delegation token starts.
    * `ExpiryDateTime` - Required; timestamp of when the validity period of the user delegation token ends.
    
3. Create a **StoragePermissions** object to specify the permissions you want the SAS to grant. To do that, populate the following attributes:

    * `Read` - Required. Read the content, blocklist, properties, and metadata of any blob in the directory. Use a blob as the source of a copy operation.
    * `Add` - Required. Add a block to an append blob.
    * `Create` - Required. Perform one of the following actions:
    
       * Write a new blob.
       * Snapshot a blob.
       * Copy a blob to a new blob.

    * `Write` - Required. Perform the following actions: 
    
       * Create or write content, properties, metadata, or blocklist.     
       * Snapshot or lease the blob.     
       * Resize the blob. This only applies to page blobs.     
       * Use the blob as the destination of a copy operation.

    * `Delete` - Required. Delete a blob. For version 2017-07-29 and above, the `Delete` permission also allows breaking a lease on a blob.
    * `DeleteVersion` - Required. Delete a blob version. This is always `False` for the **Create_SAS_Token_Directory** operation.
    * `PermanentDelete` - Required. Permanently delete a blob snapshot or version. This is always `False` for the **Create_SAS_Token_Directory** operation.
    * `List` - Required. List blobs non-recursively.
    * `Tags` - Required. Read or write the tags on a blob. This is always `False` for the **Create_SAS_Token_Directory** operation.
    * `Move` - Required. Move a blob to a new location.
    * `Execute` - Required. Get the system properties and, if the hierarchical namespace is enabled for the storage account, get the POSIX ACL of a blob.     
       If the hierarchical namespace is enabled and the caller is the owner of a blob, this permission grants the ability to set the owning group, POSIX permissions, and POSIX ACL of the blob. It doesn't allow the caller to read user-defined metadata.
    * `Ownership` - Required. When the hierarchical namespace is enabled, this permission enables the caller to set the owner or the owning group, or to act as the owner when the caller renames or deletes a blob within a directory that has the sticky bit set.
    * `Permissions` - Required. When the hierarchical namespace is enabled, this permission allows the caller to set permissions and POSIX ACLs on directories and blobs.
    * `Immutability` - Required. Set or delete the immutability policy or legal hold on a blob. This is always `False` for the **Create_SAS_Token_Directory** operation.

The operation returns an **SASCredentials** object. This **SASCredentials** object can be used to authenticate blob storage API calls for the specified directory.

#### POST_v1_Azure_RevokeAllUserDelegationKeys{#revoke-all-user-delegation-keys}

Revokes all the user delegation keys thas have been retrieved for a storage account, so that all the SAS tokens of that account are invalidated.

To use this operation in your microflow, perform the following steps:

1. Create a **RevokeAllUserDelegationKeysRequest** object and populate the following attributes:

    * `StorageAccount` - Required; storage account name you want to perform Blob Storage operations on.
    * `VersionAPI` - Required; API version for the Azure Storage service, value `2024-01-01` is required for this operation.
    * `SubscriptionId` - Required; the Subscription ID of the Storage Account.
    * `OptionalStartDateTime` - Required; the name of the ResourceGroup for the Storage Account.

2. Provide a valid **EntraCredentials** object by using the **EntraCredentials** parameter.
3. Call the **POST_v1_Azure_RevokeAllUserDelegationKeys** action in your microflow.

The operation returns a **RevokeAllUserDelegationKeysResponse** object, which is empty on itself. Its generalization AbstractResponse entity contains the HTTP status code, and optionally the HTTP reason phrase.

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
