---
title: "Settings"
url: /appstore/partner-solutions/apd/rg-two-settings/
---

The settings displayed in this screenshot are available for an environment:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-settings/settings.png" class="no-border" >}}

By default, the best options are already selected for the most common situations. The following settings can be changed:

* **Environment Name**
* **Environment Type** – Mendix Studio Pro, test, acceptance, and production environments are available. Mendix Studio Pro instances are private to the creator of the environment. To use test, acceptance, or production, you need to be a cloud operator in Mendix.
* **Runtime agent memory usage** – This determines several technical settings, such as maximum trap duration, maximum number of trap records, maximum number of messages or performance nodes recorded in the agent that still need to be sent to the manager. This setting is a protection against too much memory use. In Mendix Studio Pro, you can safely set this to **Large** to record/trap more. Setting this to me **Medium** is advised.
* **Enabled** – You can configure if browser agent guest users, browser agents, or runtimes are allowed to connect to this environment. This is a security setting.
* **Statistics collection** – Statistics are available **Per microflow** and **Per microflow action**. For **Per microflow action**, statistics will be generated for actions in a microflow (**Per microflow** does not do this).
* **Trap message collection** – This can be set to **All messages** and **Without database nodes**. Changing this to **Without database nodes** will stop the sending of logs from database nodes to APM. These nodes include:
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
* **Generate API key**
* **Delete this environment** – Clicking this button will delete the environment from the APM manager.

When you generate an API key for a runtime/Mendix Studio Pro environment, you see this key only once, so copy-paste and use it immediately. For more information about the installation, see the [APM 2 Installation Guide](/appstore/partner-solutions/apd/ig-two/).

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-settings/api_key_dialog.png" class="no-border" >}}

Click **Copy** to copy the API key to the clipboard.
