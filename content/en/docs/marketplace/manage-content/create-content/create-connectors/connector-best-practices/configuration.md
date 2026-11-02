---
title: "Configuration"
url: /appstore/creating-content/best-practices/configuration/
weight: 10
---

## Introduction

You should set up your configuration in such a way as to ensure that your connector can be used in different settings without changes to the module itself. This means that upon deployment or after deployment your connector can be configured to connect to the relevant services. 

Using constants is the way to deal with configuration that aligns with the [Twelve-Factor Architecture](https://www.mendix.com/evaluation-guide/enterprise-capabilities/twelve-factor-architecture/) cloud-native approach.

## Simple Configuration

When you are looking for a simple configuration, such as a URL, username, or password, you can use [constants](/refguide/constants/). Constants are ideal for simple flat configurations.

### Simple Configuration with a Free App Environment

When using constants in combination with a Free App, you can use the settings profile to allow for different configurations. Follow these steps to do that:

1. Create a constant.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-constant.png">}}

2. Set the value of the constant to the value you want to use in your free cloud node.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-value.png" >}}

3. Open your application **Settings**. 

4. Click **Duplicate** or **New** to create a new configuration for your local usage.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-settings.png">}}

5. In your configuration, open the **Constants** tab and click **New**.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-new-constants.png">}}

6. Look up and select your constant.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-select-constant.png">}}

7. Change the configuration value of your constant to the value you want to use in your local environment.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-change-value.png">}}

8. Save the configuration and publish the application to your free node. When you run locally, Studio Pro will now use the **Active** configuration, while the free cloud node will keep using the value you specified in the **App Explorer**.

## Complex Configuration

You might need a more sophisticated configuration to connect to external systems, either because you will need to have dozens of constants or you want to be able to connect to multiple endpoints without having to replicate your constants each time. You will have to maintain these through configuration tables.

### Disadvantages of Complex Configuration

The following are the disadvantages of complex configuration:

* Configuration in the database or the codebase makes it difficult to deploy your connector/app to any new environment.
* Manual configuration could cause more mistakes.
* Restoring a database to a different environment when the configuration is stored in the database could cause unwanted behavior.
* One big risk of using the database to store configuration is test data going out to production users.

### Advantages of Complex Configuration

The following are the advantages of complex configuration: 

* It provides more complexity than constants.
* You can easily perform runtime changes on the configuration.
* You can add wizards/helper flows to guide the user with the configuration.

### Setting Up Complex Configuration

Follow these steps to set up complex configuration: 

1. Set up a **Configuration** entity.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-entity.png">}}

2. Create the microflow.  
   Have a single microflow called **DS_GetOrCreateSettings**. It will retrieve your settings from the database, and create it with appropriate default values if it does not exist.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-create-microflow.png">}}

3. Set up security on the entity and the microflow.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-security.png" >}}

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-security-2.png" >}}

4. Set up the administrator page.  
   Have an administration page to manage the configuration. For maximum reusability, have all configuration settings available in a single snippet so your consumer can combine all admin sections from all components into a single area in their application.

5. Encrypt the password and other sensitive information.

#### Further Considerations

When possible, create a microflow to set up the default or starting configuration for your consumers. 

Consider adding logic so the configuration can easily be set up from your codebase.

If possible, add an export/import option for the configuration to safely move the configuration between environments. This could be achieved via a JSON export/import of the configuration data.
