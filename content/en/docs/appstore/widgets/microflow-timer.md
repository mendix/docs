---
title: "Microflow Timer"
url: /appstore/widgets/microflow-timer/
category: "Widgets"
description: "Describes the configuration and usage of the Microflow Timer widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "microflow timer", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Microflow Timer](https://marketplace.mendix.com/link/component/27/) widget can be used to time and execute a microflow or nanoflow as long as a certain page is open. The microflow or nanoflow can be executed once or repeatedly, in which case it will not stop until it returns false or until the page is closed. 

{{% alert color="warning" %}}
In offline apps, you cannot use microflows, but you can use nanoflows.
{{% /alert %}}

### 1.1 Typical Use Cases

* Update a grid or object after a certain amount of time (for example, a message inbox)
* Close a page with a message automatically after 10 seconds
* Automatically make backup copies while the user is still editing an object
* Open a page and directly trigger validation errors (to achieve this, set **Interval (in ms)** to *0*, **Execute once** to **Yes**, and **Start at once** to **Yes** – see [Configuration](#configuration) below)

### 1.2 Features

* Add timed behavior to your application
* Run a microflow or nanoflow

## 2 Configuration {#configuration}

The widget requires a data view or template grid context. This object will be sent as an argument to the invoked microflow or nanoflow.

The following properties must be configured:

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
