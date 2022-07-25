---
title: "Published App Service"
url: /refguide7/published-app-service/
---

{{% alert color="info" %}}
App services have been deprecated in version 7.23.4 and are marked for removal. Use a [published web service](/refguide7/published-web-services/) or a [published REST service](/refguide7/published-rest-services/) instead.
{{% /alert %}}

## General

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/published-app-service/16843916.png" >}}

### Version

The version of the app service. Every time an app service instance is created, the version number is incremented automatically.
App services are explicitly versioned, because once the app service is consumable, the public interface (parameters and return type) cannot be changed anymore. The public interface can only be changed by creating a new version of the app service. However, it is still possible to change the underlying microflow as long as it adheres to the interface.

### Status

A newly created version will have the status set to 'Draft' by default. With 'Draft' status, changes and additions can be made to the app service. When the version is ready to be published, the status must be set to 'Consumable'.
Once the status is set to 'Consumable', you cannot edit the app service anymore. App service versions are only editable when the version is in 'Draft'. Only one version of app service is allowed to be in 'Draft' status.

{{% alert color="success" %}}
Always remember to set at least one app service version to Consumable before going to production. Only Consumable app service versions will be available in production.
{{% /alert %}}

### Icon

This is the icon that belongs to the app service. An icon can be selected from any images document in the project. A new icon can be added to an images document if it is not available yet.

### Caption

This is the name of the app service the consumer will see in their toolbox.

### Description

Can be used to describe what the app service is used for.

## Actions

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/published-app-service/16843915.png" >}}

Provide the actual actions of which the app service is composed. Each of these actions is coupled to a microflow. See [Actions](/refguide7/actions/).

## Settings

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/published-app-service/16843914.png" >}}

### Authentication

The following authentication methods are available:

*   No authentication.
*   Username and password: the provided action is only executed if the username/password combination matched a registered web service user.

### Target Namespace

The 'Target namespace' is a technical term, that provides an XML namespace.

### Export Mendix Service Definition

The button 'Export Mendix Service Definition' creates an MSD-file with the definition of the App service. It can be imported by a consumer of your service. You can test your app service on the local machine by importing this MSD file in another app, and running the provider and consumer apps simultaneously.

{{% alert color="warning" %}}

This MSD file contains a default location: the Application Root URL of the default configuration in the project settings. For example: [http://localhost:8080/](http://localhost:8080/). This endpoint address is overwritten if you deploy your app in the cloud, and will be set to the cloud location where your app is running.

{{% /alert %}}

## Documentation

Documentation for the published app service. A consumer of the app service will see this as well.
