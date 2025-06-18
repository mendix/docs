---
title: "Microflow Timer"
url: /appstore/widgets/microflow-timer/
description: "Describes the configuration and usage of the Microflow Timer widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Microflow Timer](https://marketplace.mendix.com/link/component/27/) widget can be used to time and execute a microflow or nanoflow as long as a certain page is open. The microflow or nanoflow can be executed once or repeatedly, in which case it will not stop until it returns false or until the page is closed. 

{{% alert color="warning" %}}
In offline apps, you cannot use microflows, but you can use nanoflows.
{{% /alert %}}

### Typical Use Cases

* Update a grid or object after a certain amount of time (for example, a message inbox)
* Close a page with a message automatically after 10 seconds
* Automatically make backup copies while the user is still editing an object
* Open a page and directly trigger validation errors (to achieve this, set **Interval (in ms)** to *0*, **Execute once** to **Yes**, and **Start at once** to **Yes** – see [Configuration](#configuration) below)

### Features

* Add timed behavior to your application
* Run a microflow or nanoflow

## Configuration {#configuration}

To configure this widget, follow these steps:

1. In Studio Pro, place the **Microflow Timer** widget inside a [Data View](/refguide/data-view/) or [Template Grid](/refguide/template-grid/) widget.
2. Make sure that you have set an entity as the **Data source** for the **Data View** or **Template Grid** widget. An object of this entity will be sent as an argument to the microflow or nanoflow evoked by the Microflow Timer.
3. Double-click the Microflow Timer widget to open the **Edit Microflow Timer** dialog box.
4. Configure the widget using the properties described below:

    * **Interval (in ms)** – defines how often the microflow or nanoflow is called
        * The inteval is in milliseconds, so the default of 30000 equals 30 seconds
        * Unless **Execute once** is set to **Yes**, the microflow is invoked immediately after loading the page for the first time

    * **Execute once** – if set to **Yes**, the microflow will be invoked only once
        * The **Interval (in ms)** above defines after how many seconds it will be invoked

    * **Start at once** – if set to **Yes** (and **Execute once** is also set to **Yes**), the microflow or nanoflow will be invoked the first time if the widget has loaded
        * If set to **No**, the microflow or nanoflow will be invoked the first time after the **Interval (in ms)** has passed

    * **Microflow** – this is the microflow to be executed
        * If the microflow returns false, it will not be executed any longer until the context changes

    * **Nanoflow** – this is the nanoflow to be executed
        * If the nanoflow returns false, it will not be executed any longer until the context changes

5. In addition to the standard configuration, you can also use the following configuration options found in the **Context** tab:

    * **First tick delay** – this is an optional attribute on the context entity that allows you to set a custom first interval (in milliseconds). This can be useful if you want to define a first interval different than what is defined in the **Behavior** tab.
    * **Interval Attribute (in ms)** – this option allows you to define the interval based on an entity attribute. If set, it overrides the interval defined in the **Behavior** tab.
    * **Timer Status Attribute** – this is an optional Boolean attribute that acts as a flag to enable or disable the timer, or even to verify its status.
