---
title: "MQTT"
url: /appstore/modules/mqtt/
description: "Describes the configuration and usage of the MQTT connector, which is available in the Mendix Marketplace."
aliases:
    - /appstore/connectors/mqtt/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

[MQTT](https://mqtt.org/) is a lightweight Internet of Things (IoT) messaging protocol. You can use the [MQTT](https://marketplace.mendix.com/link/component/119508) connector with your Mendix app to communicate with an MQTT broker.

### Features

The MQTT connector consists of microflow actions that enable you to do the following:

* Publish data to the MQTT broker
* Subscribe to the MQTT broker 
* Unsubscribe from the MQTT broker
* Enabled support for Secure WebSocket (WSS) protocol

## Broker Configuration {#configuration}

### Configuring the Broker {#configure-broker}

Configure your broker connection information by adding the **ConnectionAdministration** page to your app. Input your broker information, then set up and run the app locally. Enter the **Connection Name**, **Broker host**, and **Broker port**. 

If the broker needs basic authentication to connect, you can set up a user name and password that is stored in the domain model. See the [Authentication](#auth) section below for more information. 

#### Creating a Broker Connection in a Microflow {#broker-microflow}

You can set up a broker connection directly in a microflow if you do not want it to be [stored in the domain model](#configuration). To do this, follow these steps:

1. In your microflow, use the [Create object](/refguide/create-object/) activity to create the **ConnectionDetail** object and provide the required parameters.
2. Use the created **ConnectionDetail** object for **Publish**, **Subscribe**, or **Unsubscribe** operations.

#### Setting Up Authentication {#auth}

If an MQTT broker needs a user name and password for connection, set credentials on the **ConnectionAdministration** page. Set the **Authentication method** to **BASIC**, then set the values for **UserName** and **Password**.

Setting the **Authentication method** to **NONE** indicates that authentication is not required to connect to the MQTT broker. 

The **Password** is encrypted using the **EncryptionKey** constant. For better security, it is advised to change the **EncryptionKey** constant after importing the MQTT connector.

#### Enabling SSL

Enabling SSL establishes a secure connection to the broker. To input your SSL certificates, follow these steps:

1. Open your certificates file in any text editor. 
2. Open the **ConnectionAdministration** page and use the toggle to enable SSL.
3. Copy all content of the file and paste it to the **CA Certificate** and **Client Certificate** fields. 
   * Certificates start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`. 
4. Add the **Client Certificate Key** and the **Certificate password** if one was set.
    * Client keys typically start with `-----BEGIN RSA PRIVATE KEY-----` or `-----BEGIN PKCS7-----`.
    * Currently supported certificate types are X.509 format (*.crt*, *.cer*)
    * Currently supported key types are X.509 format (*.pem*, *.pkcs*)

## Usage

To use the MQTT connector, make sure you have [configured the broker connection](#configure-broker), or [created a broker connection directly in a microflow](#broker-microflow). 

You can build microflows that use the connection details provided by the domain model, or set up connection details within the domain model itself. The microflows should use the connection details from the domain model to establish a connection with the broker before completing Subscribe or Publish actions.

### Microflow Actions

After you have set up the broker connection (in the [Configuration](#configuration) section or in a microflow), you can **Publish**, **Subscribe**, or **Unsubscribe** in a microflow. The **SampleUses** microflow displays a sample setup to reference.

#### Publish

To publish data to the MQTT broker, follow these steps:

1. Search for **Publish MQTT** in the **Toolbox**.
2. Drag the **Publish MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Connection detail** - Select the **ConnectionDetail** object to specify where to publish to.
    * **Topic** – Define topic to which the payload is published.
    * **Payload** – Choose a string message to be published.
    * [Qo S (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – Choose an attribute of each message that is being published
    * **Retained** – The retained setting serves two purposes depending on if the message it is associated with is being published or received:
        * **true** – For messages being published, selecting **true** indicates the MQTT server should retain a copy of the message. The message is transmitted to new subscribers to a topic that matches the message topic. For subscribers registering a new subscription, if the flag is **true**, it indicates the received message has been retained by the MQTT server.
        * **false** – For publishers, selecting **false** indicates the message should not be retained by the MQTT server. For subscribers, this indicates it is a normal message that was received as a result of it being published to the server.

#### Subscribe

To subscribe to the MQTT broker, follow these steps:

1. Search for **Subscribe to MQTT** in the **Toolbox**.
2. Drag the **Subscribe to MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Connection detail** - Select the **ConnectionDetail** entity to subscribe to.
    * **Topic** – Define the topic to subscribe to.
    * **OnMessageMicroflow** – Identify the microflow to be executed when a message is received on subscribed topic.
    * [QoS (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – Choose an attribute for each message that is being published.

When subscribing to a topic, define in the subscribe action which microflow is triggered for each message, and that the topic and payload is passed on into that microflow.

#### Unsubscribe

To unsubscribe from the MQTT broker, follow these steps:

1. Search for **Unsubscribe from MQTT** in the **Toolbox**.
2. Drag the **Unsubscribe from MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Connection detail** - Select the **ConnectionDetail** entity to unsubscribe from.
    * **Topic** – Define topic to unsubscribe from.
