---
title: "MQTT"
category: "Connectors"
description: "Describes the configuration and usage of the MQTT connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "mqtt", "iot"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

You can use the [MQTT](https://marketplace.mendix.com/link/component/119508) connector with your Mendix app to communicate with an MQTT broker. [MQTT](https://mqtt.org/) is a lightweight Internet of things (IoT) messaging protocol. 

### 1.1 Typical Use Cases

The MQTT Connector consists of microflow actions that enable doing the following:

* Publishing data to the MQTT broker
* Subscribing to the MQTT broker 
* Unsubscribing from the MQTT broker

### 1.2 Features

The MQTT Connector allows you to publish to, subscribe to, and unsubscribe from an MQTT broker.

## 2 Configuration {#configuration}

### 2.1 Broker 

Configure your broker connection information using the **ConnectionAdministration** page. The **Connection Name**, **Broker host**, and **Broker port** fields point to the MQTT broker. This data is stored in the domain model.

#### 2.1.1 Enabling SSL

Enabling SSL will establish a secure connection to the broker. To input your SSL certificates, follow these steps:

1. Open your certificates file in any text editor. 
2. Copy all content of the file and paste it to the **CA Certificate** and **Client Certificate** fields. Certificates start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`. Client keys typically start with `-----BEGIN RSA PRIVATE KEY-----` or `-----BEGIN PKCS7-----`.
3. Add the **Client Certificate Key** and **Certificate password** if one was set.
    * Currently supported certificate types are X.509 format (*.crt*, *.cer*)
    * Currently supported key types are X.509 format (*.pem*, *.pkcs*)

## 3 Usage

After you have set up the connection with the broker (in the [Configuration](#configuration) section or in a microflow), you can use the actions Publish, Subscribe, or Unsubscribe. These actions are used in microflows. The **SampleUses** microflow gives a sample setup for your reference.

### 3.1 Creating a broker connection directly in a microflow

You can set up a broker connection in a microflow directly if you do not want it to be stored in the domain model. To do this, follow these steps:

1. In your microflow, use the [Create object](/refguide/create-object) activity to create the **ConnectonDetail** object by providing the required parameters.
2. Use the created **ConnectionDetail** object for **Publish**, **Subscribe**, or **Unsubscribe** operations.

### 3.2 Using the MQTT Connector in Studio Pro

To use the MQTT Connector, make sure the broker connection is already set up, or create a broker connection directly in your microflow.

### 3.2.1 Publish

To publish data to the MQTT broker, follow these steps:

1. Search for *Publish MQTT* in the **Toolbox**.
2. Drag the *Publish MQTT* event into your microflow.
3. Edit the event to include the following details:
    * **Topic** – topic to which the payload is published
    * **Payload** – string message to be published
    * [QoS (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – an attribute of each message being published
    * **Retained** – the retained setting serves two purposes depending on whether the message it is associated with is being published or received:
        * **Retained** set to **Yes** – For messages being published, setting Retained to Yes indicates that the MQTT server should retain a copy of the message. The message will then be transmitted to new subscribers to a topic that matches the message topic. For subscribers registering a new subscription, the flag being true indicates that the received message is not a new one, but one that has been retained by the MQTT server.
        * **Retained** set to **No** – For publishers, this indicates that this message should not be retained by the MQTT server. For subscribers, it indicates this is a normal message, received as a result of it being published to the server.

### 3.2.2 Subscribe

To subscribe to the MQTT broker, follow these steps:

1. Search for *Subscribe MQTT* in the **Toolbox**.
2. Drag the *Subscribe MQTT* event into your microflow.
3. Edit the event to include the following details:
    * **Topic** – topic to subscribe to
    * **OnMessageMicroflow** – microflow to be executed when a message is received on subscribed topic
    * [QoS (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – an attribute of each message being published

### 3.2.3 Unsubscribe

To unsubscribe from the MQTT broker, follow these steps:

1. Search for *Unsubscribe MQTT* in the **Toolbox**.
2. Drag the *Unsubscribe MQTT* event into your microflow.
3. Edit the event to include the following details:
    * **Topic** – topic to unsubscribe from
