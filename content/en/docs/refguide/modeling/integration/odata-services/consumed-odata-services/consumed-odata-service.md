---
title: "Consumed OData Service"
url: /refguide/consumed-odata-service/
weight: 10
aliases:
    - /refguide/consumed-odata-service-properties
---

## Introduction

A consumed OData service contains the connection information for OData external entities and actions.

You can create a consumed OData service and specify its metadata in a file or a URL. Alternatively, you can search using the [Integration pane](/refguide/integration-pane/) and drag an entity to the domain model to have Studio Pro create a consumed OData service for you.

## Consumed OData Service screen

The **Consumed OData Service** document contains the following information:

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/consumed-odata-service-screen.png" alt="Connection Tab" width="850" class="no-border" >}}

* Service name and icon for the source application of the originating app
* Version number of the consumed service
* **View in Catalog** link to the **Service Details** where you can see the full details that are registered
* **Update/Switch** – You can update the consumed service contract to another version that has been detected in the [Catalog](/catalog/) for the same app and service. The button will show the following, depending on what has been returned for the consumed contract:
    * **Update** – This button is displayed so you can update the contract that is currently consumed and shown in the **Consumed OData Service** document. You will be presented with the contract that is currently at the service endpoint. It is good practice that only minor, non-breaking changes are deployed to the same endpoint.
    * **Switch** – This button is shown if other registered instances of the same service with the same name, from the same app are available in the Catalog, but are deployed to different endpoints (for example, to another environment or because of changes that would break existing apps consuming the previous version)

    {{% alert color="info" %}} Studio Pro will always show the **Update** option for the **Consumed OData Service** where you can check if an update is available. In the Catalog search and **App** pane, when a different contract is detected at the service endpoint, it will be indicated with an update arrow for the service. For more information on updating and switching services, see the [Updating or Switching a Consumed OData service](#updating) section of this document. {{% /alert %}}

    {{% alert color="info" %}}In the [Integration pane](/refguide/integration-pane/), consumed services display an **Update** icon (a blue arrow) if there is an update available.{{% /alert %}}

### Configuration

There are three ways to specify the service URL, headers, and proxy settings: **Constants only**, **Configuration microflow**, and **Headers microflow**.

* **Constants only** – specify the service URL, proxy settings, and headers using constants
* **Configuration microflow** – specify the service URL, proxy settings, and headers using a microflow that returns a **System.ConsumedODataConfiguration** (this option was introduced in Studio Pro 10.12.0)
* **Headers microflow** – specify headers using a microflow that returns a list of **System.HttpHeader** and specify the service URL and proxy settings using constants

### Configuration/headers microflow

Choose a microflow that returns one of the following options:

* A **System.ConsumedODataConfiguration** object with associated **System.HttpHeader** objects (when using **Configuration microflow**)
* A list of **System.HttpHeader** objects (when using **Headers microflow**)

This microflow may take a parameter of type **System.HttpResponse**. The microflow is called every time a request is made. Initially, the HTTP response parameter will be empty. If the service responds with `401 Unauthorized`, the microflow is called with that HTTP response and another call is made with the new HTTP headers.

{{% alert color="info" %}}
Custom authentication can be done with the microflow where the authentication value is retrieved (such as SSO). For more information on access and authentication, see [Using Custom HTTP Header Validation for Published Entities](/refguide/security-shared-datasets/#http-header-validation) in *Security and Shared Datasets*.
{{% /alert %}}

#### Authenticating with Mendix SSO {#authenticate-mendix-sso}

Publishers can set up [custom authentication](/refguide/published-odata-services/#authentication-microflow) using [Mendix SSO](/appstore/modules/mendix-sso/) module. For more information, see the [Mendix SSO](/refguide/published-odata-services/#authentication-mendix-sso) section of *Published OData Services*. 

Consumers of an OData service that is set up with Mendix SSO authentication can use the **CreateAccessTokenAuthorizationHeaderList**.

To learn more about how to publish an OData service with authentication (Mendix SSO, or other methods), see the [Authentication Methods](/refguide/published-odata-services/#authentication-methods) section of *Published OData Services*. 

To learn more about using external entities with security enabled (in production environments), see the [Authentication](/refguide/external-entities/#authentication) section of *External Entities*.

### Service URL {#service-url}

The **Service URL** displays constant that specifies the URL of the service endpoint:

* Click **Select** to choose another [constant](/refguide/constants/) for the service
* Click **Show** to open the **Constant** dialog box displaying the service URL or endpoint:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/service-url.png" class="no-border" >}}

### Timeout

**Timeout** is the response time for fetching data from the service endpoint. If the endpoint has not responded after the number of seconds in **Timeout (s)**, an exception will occur. If this happens during a microflow activity, the microflow will roll back or go into your custom [error handling](/refguide/error-handling-in-microflows/).

Default value: 300 seconds

### Proxy Configuration

**Proxy configuration** allows you to configure a proxy for the request:

* **Use app settings** – use settings which are defined at the app level (default)
* **Override** – override the app-level settings for this action by specifying the host, port, user name, and password settings for the proxy
* **No proxy** – do not use a proxy for this service, even if there is a proxy configured at the app level

{{% alert color="info" %}}
In most cases, this setting can be ignored and the default **Use app settings** can be used.
{{% /alert %}}

### Authentication {#authentication}

The **Use HTTP authentication** checkbox specifies if basic authentication should be used. If selected, specify the following details:

* **User name** – defines the user name that will be used for authentication
* **Password** – defines the password that will be used for authentication

Input these as a string with single quotes.

In addition to basic authentication, you can also use custom authentication. For more information, see the [HTTP Headers](#http-headers) section below.

### HTTP Headers {#http-headers}

You can specify additional HTTP request headers to be passed to the endpoint in this list by clicking **Add**, **Edit**, or **Delete** for custom HTTP headers for authentication. Each custom header is a pair with a key and a value.

If the service uses a configuration microflow or a headers microflow that specifies a different value for the header, then that value overrides the value specified in this list.

### Error Handling Microflow

When a call to the OData service fails, users see a generic error message. Create an [error-handling microflow](/refguide/error-handling-in-microflows/) to change this message.

When the service responds with an unsuccessful status code (not in the 2xx range), or does not return a response at all, this microflow decides which message to show to the user.

The microflow should have an argument of type `System.HttpResponse`. If the OData service returns a response, the argument has a value. Otherwise, it is `empty`.

The microflow must return a `String` containing the error message. If it returns `empty`, the original generic message is used.

Note for developers of Java actions: the message returned by the error handling microflow can be caught as a [UserException](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/systemwideinterfaces/core/UserException.html).

### Metadata

When you create a consumed OData service, the metadata editor allows you to open an OData contract from a file or URL. If you have already consumed a contract, you can click **Update** to update the existing contract with a new version from a file or URL.

To open the **Metadata Editor**, click **Update**. In the editor, you can specify a URL or file for the metadata:

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/update-metadata.png" alt="Metadata Editor" class="no-border" >}}

The following settings are available:

* **Import from** – select **URL** or **File** for the location of the metadata
    * **URL** – specify the URL for the metadata
    * **File** – click **Browse** to select a metadata file

        You can use the URL of a file that contains the metadata, such as `https://services.odata.org/V4/Northwind/Northwind.svc/$metadata`. You can also click [Share Data Source](/catalog/manage/search/#service-details) in the details of a data source in the [Catalog](https://catalog.mendix.com/) and paste that value.

When downloading the metadata from a URL, the server may request a user name and password (basic authentication). If this happens, a dialog box will prompt you to enter your user name and password. If the metadata file refers to other metadata files on the same server within the same realm, the user name and password are reused.

{{% alert color="info" %}}
This information is not stored, so if you download the metadata from the same server again, you will have to re-enter your user name and password.
{{% /alert %}}

When you import the metadata, you can add external entities and actions from the consumed OData service in the [Integration pane](/refguide/integration-pane/).

### Properties

Click the **Properties** tab for the consumed OData service which displays the properties that were defined for the OData service document and the following additional properties:

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/properties-tab.png" width="300"  class="no-border" >}}

* **Entities** – the URL of the metadata defining the entities and associated datasets
* **Documentation** – an additional description about this service for the current app
* **Service name** – the name of the published OData service that is consumed
* **Service version** – the version of the service that is consumed
* **Service ID** – the unique identifier of the service in the Catalog
* **Application ID** – the unique identifier of the application that the service was published from in the Catalog
* **Metadata** – the contents of the metadata file defining the service
* **OData version** – the OData version (can be v3 or v4)

#### Using QuerySegment

When set to `No`, the application retrieves data using a `GET HTTP` method and places data query arguments in the URL's query string. 

When set to `Yes`, a `POST HTTP` method is used, `/$query` is appended to the resource path of the URL and the query string is provided as the request body. This enables limiting the length of the URL and avoiding potential problems with the systems involved. This feature is not available for OData v3 or if the consumed service explicitly indicates that it is not supported. For details, see [Passing Query Options in the Request Body](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_PassingQueryOptionsintheRequestBody) in the OData specification. 

## Updating or Switching a Consumed OData Service {#updating}

### Consuming from Service Endpoints{#consume-service-endpoints}

When you add an external entity to your app, you are consuming the entity from a specific version of a service (the service endpoint), deployed to a given environment. The metadata file or contract for the service is located at this endpoint.

The same service deployed to a different environment will be to a different service endpoint and registered as a different asset in the Catalog. In the following example, there are three endpoints for the **Sales 1.0.0** service, which is deployed to the production environment and the **Acceptance** and **Test** environments:

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/consuming-from-service-endpoints.png" alt="2 endpoints"  width="350"  class="no-border" >}}

When you drag the **Customer** entity from **CustomerApi version 1.0.0** deployed to the **Acceptance** environment into your app, Studio Pro retrieves the information it requires from the contract that is at that endpoint.

### Semantic Numbering for Service Versions {#semantic}

It is important the publishers of the services adopt a strict revision process for any changes they make to their published OData services that are consumed by other users.

It is recommended to use a strict versioning system, such as semantic numbering, when issuing updates to services. The service version should clearly indicate the level and severity of the changes that have been made when a service is updated and deployed according to the following guidelines.

#### Minor Service Updates

Minor service updates are, for example, additional fields added to the service or new operations that would not break any apps that consume the previous versions.

If semantic numbering is used, then a minor/non-breaking change to a service can be indicated by an increase in the decimal part of the version number. For example, 1.0.11, 1.0.12, 1.1, 1.2.

Minor service updates can be deployed to the same service endpoints, which ensures that all consuming apps consume the latest version of the service.

#### Major Service Updates

Major service updates are, for example, when entities or attributes are removed, or input parameters are required. Such updates would be incompatible for the consuming apps and result in the consuming app "breaking."

When a major change has been made to a published service, Mendix recommends the service is deployed to a different endpoint with the new service version number that clearly indicates there has been a major change. With semantic numbering, this would be an incremental increase of a whole number.

In this case, the new service should be registered in the Catalog as a different service and show up as a separate asset. In the following example, there are four registered occurrences of the **OrderManagementService**:

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/major-service-updates.png" alt="4 endpoints" width="300"  class="no-border" >}}

There is a major service update indicated by the change in the version number from **1.0.0** to **2.0.0**. Both major versions have been deployed to **Acceptance**, which results in separately registered assets in the Catalog at different endpoints.

{{% alert color="info" %}}
Entities of non-Mendix OData services are identified with a key of one or more fields. If the key fields are changed in a service update, this will also be seen as a breaking change.
{{% /alert %}}

### Update or Switch {#update-switch}

When a change in the contract at a consumed endpoint is detected (possibly due to a minor change), or if the same named service is deployed with a major version number but to a different endpoint, the following options are available in the **Consumed OData Service** screen.

#### Update

The **Update** option is available when Studio Pro detects that the contract at the Catalog endpoint is different than the one currently consumed in the app. If **Update** is selected, the new contract will be loaded in the app.

See the [Limitations](/refguide/consumed-odata-services/#consumed-odata-service-limitations) section of *Consumed OData Services* to read about known update limitations.

##### Integration Pane

In the [Integration pane](/refguide/integration-pane/), search results, and in the **Used in your App** section, an update arrow indicates if there is a different contract at the Catalog endpoint.

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/integration-pane.png" alt="update service app-pane" class="no-border" >}}

* The service version that is currently consumed is shown (in this example **1.0.0**).
* Blue **Update** - click to open the **Update Service** box and update the contract. Studio Pro will retrieve the new contract at the Catalog endpoint, which will be loaded in the app.
* The list of entities in this new version in the Catalog are shown, including the locally consumed entities that are marked with a green check mark. These entities are, however, greyed out to indicate that they cannot be dragged into the domain model because the contract for the previous version is currently being consumed. The only option is to click **Update** to retrieve the updated OData Service.

##### Update Service Dialog Box

When you click **Update** on the **Consumed OData Service** document or the update icon in the **Mendix Connect** and **App** sections, the **Update** dialog box is displayed.

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/update-dialog-box.png" width="700" class="no-border" >}}

The consumed OData service that is currently consumed in the app (**1.0.0**) is shown on the left. Click **Update** to retrieve the new contract from Mendix Connect (**2.0.0**).

#### Switch

When an OData service is published to a different endpoint or environment, it will be registered as a different asset in the Catalog.

In the example in the [Consuming from Service Endpoints](#consume-service-endpoints) section above, if you are consuming the service from the **Acceptance** environment, the Consumed OData service screen will display the **Switch** button to enable you to consume the same service from the **Production**.

#### Switching Consumed Services

A published OData service that is deployed to multiple environments or is published with major service updates (and therefore deployed to a different endpoint) is shown as separate items in the search results of the [Integration pane](/refguide/integration-pane/).

In the following example, the consumed **Orders** version **1.0.0** deployed to **Test** environment is consumed in the app. However, the same service is deployed to the **Acceptance** environment:

{{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/switching-consumed-services.png" alt="major change environment" class="no-border" >}}

To consume the service deployed to the **Acceptance environment**, follow these steps:

1. Click  **Update** > **Switch** on the **Consumed OData Service** document:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/orders.png" alt="major change environment" class="no-border" >}}

2. On the **Switch** dialog box, from the drop-down list, select the service you want to consume from (note that an endpoint is also detected that is deployed to **Production**) and click **Switch**:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/switch-dialog-box.png" alt="major change environment" width="700" class="no-border" >}}

3. The consumed service is be consumed from the new selected environment. The information on the **Consumed OData Service** document displays the changed service details and the [Integration pane](/refguide/integration-pane/) will display that you are consuming from the selected environment:

    {{< figure src="/attachments/refguide/modeling/integration/consumed-odata-services/consumed-odata-service/integration-pane-2.png" width="350" class="no-border" >}}

## Read More

* [Integration Pane](/refguide/integration-pane/)
* [Consumed OData Services](/refguide/consumed-odata-services/)
