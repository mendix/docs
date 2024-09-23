---
title: "Cortex Analyst Connector"
url: /appstore/connectors/snowflake/cortex-analyst/
description: "Describes the configuration and usage of the Snowflake Cortex Analyst connector from the Mendix Marketplace. Cortex Analyst is a Snowflake Cortext feature that helps users create applications that can answer questions based on Snowflake data."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Cortex Analyst connector](link tbd) allows you to add the capabilities of the Cortex Analyst feature to your Mendix application.

### Typical Use Cases

Snowflake [Cortex Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst) gives business users the ability to ask business questions based on the data in Snowflake. Users can ask questions and receive answers in natural language, without the use of SQL.

### Prerequisites {#prerequisites}

#### VARIANT 1 - IF THE CONNECTOR HAS NO DEPENDENCIES OTHER THAN STUDIO PRO

The Cortex Analyst connector requires Mendix Studio Pro version {MINIMUM REQUIRED VERSION} or above.

#### VARIANT 2 - IF THE CONNECTOR ALSO HAS OTHER DEPENDENCIES

The Cortex Analyst connector requires Mendix Studio Pro version {MINIMUM REQUIRED VERSION} or above.

To use the Cortex Analyst connector, you must also install and configure the following modules:

* {MODULES AS REQUIRED, WITH A SHORT DESCRIPTION OF THEIR PURPOSE AND A LINK TO THEIR PAGES ON MARKETPLACE.}

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the services in Snowflake to which is connects may incur a usage cost. For more information, refer to the [Snowflake documentation](https://www.snowflake.com/en/data-cloud/pricing-options/).

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the {CONNECTOR NAME} connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **{MODULENAME}** section. The connector provides a domain modeland several activities that you can use to connect your app to Cortex Analyst. Each activity can be implemented by using it in a microflow.

### Configuring Snowflake Authentication

#### I COPIED THIS SECTION FROM THE REST SQL CONNECTOR, DELETE OR CHANGE IF NOT APPLICABLE

In order to use the capabilities of Snowflake in a Mendix app with the Snowflake Cortex Analyst connector, an RSA key-pair authentication method must be used.

### Configuring Key-pair Authentication in Snowflake {#setup-key-pair-snowflake}

To configure RSA key-pair authentication for your account in Snowflake, perform the following steps:

1. Generate the private key.
2. Generate a public key.
3. Assign the public key to a Snowflake user.

For more details about each step, refer to the official [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth).

### Setting up the Key-pair Authentication in a Mendix App {#setup-key-pair-mendix}

To make it easier for users to configure the key-pair authentication in a Mendix app, the Snowflake REST SQL connector includes pages and microflows that you can simply drag and drop them into your own modules.

To configure the authentication, perform the following steps:

1. In the **App Explorer**, under the **SnowflakeRESTSQL** section, find the **SNIPPET_SnowflakeConfiguration** snippet and drag and drop it into a page in your module.

    {{< figure src="/attachments/appstore/use-content/modules/snowflake-rest-sql/drag_snippet_to_page.png" >}}

2. Assign the module role **SnowflakeRESTSQL.Administrator** to the application role that will be used to set up the configuration, so that the added logic will be usable.
3. Run the application and go to the page where you added the snippet.
4. Click **New**. 
5. On the **Connection details** page, fill out all fields with the details of your Snowflake account. For more information, see [ConnectionDetails](#connection-details).
6. In the Snowflake console, click **Copy account URL**. This URL will be used as the **Account URL** parameter for **Connection details**.

    {{< figure src="/attachments/appstore/use-content/modules/snowflake-rest-sql/snowsight-account-url.png" >}}

7. In the Snowflake console, click **Copy account identifier**. Before using it inside Mendix, you must replace the `.` separator with a `-`. The final string will be used as the **Account identifier** parameter for the **Connection details**.

    {{< figure src="/attachments/appstore/use-content/modules/snowflake-rest-sql/snowsight-account-identifier.png" >}}

8. Enter the passphrase and upload [your private key file](#setup-key-pair-snowflake) in *.p8* format.

    {{< figure src="/attachments/appstore/use-content/modules/snowflake-rest-sql/connection_details.png" >}}

9. Click **Save** to save the connection, or click **Save and test connection** to generate a JSON Web Token (JWT) and validate your connection.

### Configuring a Microflow for the Service

After you configure the authentication for Snowflake, you can implement the functions of the connector by using the provided activities in microflows. For example, to {DESCRIBE A TASK}, implement the {ACTIVITY NAME} activity by doing the following steps:

{A DETAILED STEP-BY-STEP CONFIGURATION PROCEDURE, WITH SCREENSHOTS.}

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/use-content/modules/technical-reference/doc-pane.png" class="no-border" >}}