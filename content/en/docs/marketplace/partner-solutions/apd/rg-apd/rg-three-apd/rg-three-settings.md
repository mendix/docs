---
title: "Settings"
url: /appstore/partner-solutions/apd/rg-three-settings/
---

## Introduction

The settings displayed in this screenshot are available for an environment:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-settings/settings.png" class="no-border" >}}

By default, the best options are already selected for the most common situations.

## Settings 

The following settings can be changed:

* **Environment name**
* **Environment type** – **Mendix Studio Pro**, **Test**, **Acceptance**, and **Production** environments are available

    * Mendix Studio Pro instances are private to the creator of the environment
    * To use the **Test**, **Acceptance**, or **Production** environments, you need to be a cloud operator in Mendix
    
* **Runtime agent memory usage** – This setting is a protection against too much memory use and determines several technical settings, such as maximum trap duration, maximum number of trap records, and maximum number of messages or performance nodes recorded in the agent that still need to be sent to the manager
  
    * In Mendix Studio Pro, you can safely set this to **Large** to record/trap more
    * Setting this to me **Medium** is advised
    
* **Enabled** – With this security setting, you can configure if browser agent guest users, browser agents, or runtimes are allowed to connect to this environment
* **Statistics collection** – Statistics are available **Per microflow** and **Per microflow action**

    * For **Per microflow action**, statistics will be generated for actions in a microflow (**Per microflow** does not do this).

* **Trap message collection** – This can be set to **All messages**, **Without database nodes**, and **None**. 
  
    * It is not recommended to set this setting to **All messages** for production environments, as it can degrade performance.    
    * Changing this to **None** will stop sending logs from all database nodes. Changing this to **Without database nodes** will stop the sending of logs from database nodes to the [APD Manager](https://apd.mendix.com/). These nodes include the following:

        * DataStorage_QueryPlan
        * DataStorage_QueryHandling
        * ConnectionBus_Update
        * ConnectionBus_Security
        * ConnectionBus_Retrieve
        * ConnectionBus_Mapping
        * ConnectionBus_Queries
        * ConnectionBus_Synchronize
        * ConnectionBus_Validation
        * QueryParser

* **Generate API key** – After clicking this, click **Copy** to copy the API key to the clipboard (when you generate an API key for a runtime/Mendix Studio Pro environment, you see this key only once, so copy-paste and use it immediately; for more information about the installation, see [APD 3 Installation Guide](/appstore/partner-solutions/apd/ig-three/))

    {{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-settings/api_key_dialog.png" class="no-border" >}}

* **Delete this environment** – Clicking this button will delete the environment from the APD Manager
