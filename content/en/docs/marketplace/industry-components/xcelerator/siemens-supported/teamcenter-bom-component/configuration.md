---
title: "Teamcenter BOM Widget Configuration"
url: /partners/siemens/bom-widget-configuration/
weight: 2
description: "Configuration instructions and explanation for the usage of the Teamcenter BOM widget."
---

## After Startup

The Teamcenter BOM widget relies on specific connections to and from your Teamcenter instance.     
To ensure that everything is properly set up, you must add the `Startup` microflow that is provided by the `TcConnector` module to your project's [After startup settings](/refguide/runtime-tab/#after-startup). This microflow registers the required request handlers used by the Teamcenter BOM widget.

## Teamcenter BOM Widget Tabs

The following sections describe the tabs of the Teamcenter BOM widget.

### General Tab

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/bom-widget-configuration-general.png">}}

Configure the following properties on the widget:

* **Widget identifier** – The unique identifier for this instance of the widget. This is useful if your app includes multiple Teamcenter BOM widgets that need to display different data. You can use this ID to differentiate and return the appropriate data.
* **Product UID** – The Teamcenter UID of the product (item or assembly) whose BOM will be displayed.
* **Configuration settings** – Comma-separated options to control the loading and the display of the BOM. For details, refer to [Configuration Settings](#config-settings).
* **Revision rule UID** – The Teamcenter UID of the revision rule to apply when loading the BOM.

#### Configuration Settings {#config-settings}

By default, all configuration options are shown in the configuration header menu: variants, arrangements, partitions, unit effectivity, date effectivity configuration.    
To hide any option, use the corresponding values as a comma-separated list in **Configuration settings**.     
These are the supported **Configuration settings** values:

* `HideVariantConfiguration` – Hides variant-based configuration.
* `HideArrangementConfiguration` – Hides arrangement-based configuration.
* `HidePartitionConfiguration` – Hides partition-based configuration.
* `HideUnitEffectivityConfiguration` – Hides unit effectivity configuration.
* `HideDateEffectivityConfiguration` – Hides date effectivity configuration.

### Selection Tab

{{< figure src="/attachments/partners/siemens/teamcenter-bom-component/bom-widget-configuration-selection.png">}}

The widget supports cross-selection to coordinate with other page components. The cross-selection is one-way, and selecting a BOM line in the BOM populates its properties on a configured entity. 

* **Selected UID** – The UID of the `ItemRevision` that was last selected in the BOM.
* **Selected Item ID** – The ID of the `ItemRevision` that was last selected in the BOM.
* **Selected Item Revision ID** – The revision ID of the `ItemRevision` that was last selected in the BOM.
