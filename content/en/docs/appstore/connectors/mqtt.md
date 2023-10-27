---
title: "MQTT"
url: /appstore/connectors/mqtt/
category: "Connectors"
description: "Describes the configuration and usage of the MQTT connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "mqtt", "iot"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

You can use the [MQTT](https://marketplace.mendix.com/link/component/119508) connector with your Mendix app to communicate with an MQTT broker. MQTT is a lightweight Internet of Things (IoT) messaging protocol. 

### 1.1 Features

The MQTT connector consists of microflow actions that enable you to do the following:

* Publish data to the MQTT broker
* Subscribe to the MQTT broker 
* Unsubscribe from the MQTT broker

## 2 Broker Configuration {#configuration}

### 2.1 Configuring the Broker {#configure-broker}

Configure your broker connection by adding the **ConnectionAdministration** page to your app. Input your broker information, then set up and run the app locally.

{{< figure src="/attachments/appstore/connectors/mqtt-connector/connection-administration.png" >}}

The **Connection Name**, **Broker host**, and **Broker port** fields point to the MQTT broker. 

If the broker needs basic authentication to connect, you can set up a user name and password that is stored in the domain model. For more information, see the [Setting Up Authentication](#auth) section below.

#### 2.1.1 Creating a Broker Connection in a Microflow {#broker-microflow}

You can set up a broker connection directly in a microflow if you do not want it to be stored in the database. To do this, follow these steps:

1. In your microflow, use the [Create object](/refguide/create-object/) activity to create a **MqttConnector.ConnectionDetail** object and provide the required parameters.
2. Use the **ConnectionDetail** object for **Publish**, **Subscribe**, or **Unsubscribe** operations.

#### 2.1.2 Setting Up Authentication {#auth}

If an MQTT broker needs a user name and password for connection, set the credentials on the **ConnectionAdministration** page. Set the **Authentication method** to **BASIC**, then set the values for **UserName** and **Password**.

{{< figure src="/attachments/appstore/connectors/mqtt-connector/authentication-method.png" >}}

Setting the **Authentication method** to **NONE** indicates that authentication is not required to connect to the MQTT broker. 

The **Password** is encrypted using the **EncryptionKey** constant. For better security, it is advised to change the **EncryptionKey** constant after importing the MQTT connector.

#### 2.1.3 Enabling SSL

Enabling SSL establishes a secure connection to the broker. To input your SSL certificates, follow these steps:

1. Open your certificates file in any text editor. 
2. Open the **ConnectionAdministration** page and use the toggle to enable SSL.
3. Copy all file content and paste it to the **CA Certificate** and **Client Certificate** fields. 
    * Certificates start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`
4. Add the **Client Certificate Key** and the **Certificate password** if one was set.
    * Client keys typically start with `-----BEGIN RSA PRIVATE KEY-----` or `-----BEGIN PKCS7-----`
    * Currently supported certificate types are *X.509* format (*.crt*, *.cer*)
    * Currently supported key types are *X.509* format (*.pem*, *.pkcs*)

{{< figure src="/attachments/appstore/connectors/mqtt-connector/ssl-input.png" >}}

## 3 Usage

To use the MQTT Connector, make sure you have [configured the broker connection](#configure-broker), or [created a broker connection directly in a microflow](#broker-microflow). 

You can build microflows that use the connection details provided by the domain model, or set up connection details within the domain model itself. The microflows should use the connection details from the domain model to establish a connection with the broker before completing subscribe or publish actions. 

### 3.1 Microflow Actions

After you have set up the broker connection in the [Configuration](#configuration) section or in a microflow, you can **Publish**, **Subscribe**, or **Unsubscribe**. These actions are used in microflows. The **SampleUses** microflow displays a sample setup for you to reference.

{{< figure src="/attachments/appstore/connectors/mqtt-connector/sample-microflow.png" >}}

#### 3.1.1 Publish

To publish data to the MQTT broker, follow these steps:

1. Search for *Publish MQTT* in the **Toolbox**.
2. Drag the **Publish MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Connection detail** - Select the **ConnectionDetail** object to specify where to publish to.
    * **Topic** – Define the topic to which the payload is published.
    * **Payload** – Choose a string message to be published.
    * [Qo S (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – Choose a value for each message that is being published.
    * **Retained** – The retained setting serves two purposes depending on whether the message it is associated with is being published or received:
        * **true** – For published messages, selecting **true** indicates the MQTT server should retain a copy of the message. The message is transmitted to new subscribers to a topic that matches the message topic. For subscribers registering a new subscription, if the flag is **true**, this indicates the received message has been retained by the MQTT server.
        *  **false** – For publishers, selecting **false** indicates this message should not be retained by the MQTT server. For subscribers, this indicates it is a normal message that was received as a result of it being published to the server.

#### 3.1.2 Subscribe

To subscribe to the MQTT broker, follow these steps:

1. Search for *Subscribe MQTT* in the **Toolbox**.
2. Drag the **Subscribe to MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Connection detail** - Select the **ConnectionDetail** entity to subscribe to. 
    * **Topic** – Define the topic to subscribe to.
    * **On message microflow** – Identify the microflow to be executed when a message is received on a subscribed topic.
    * Qo S (Quality of Service) – Choose an attribute for each message that is being published.

When subscribing to a topic, in the **Subscribe** action, define which microflow is triggered for each message and check that the topic and payload is passed to the microflow as string parameters.

{{< figure src="/attachments/appstore/connectors/mqtt-connector/on-message-microflow.png" >}}

#### 3.1.3 Unsubscribe

To unsubscribe from the MQTT broker, follow these steps:

1. Search for *Unsubscribe MQTT* in the **Toolbox**.
2. Drag the **Unsubscribe from MQTT** event into your microflow.
3. Edit the event to include the following details:
   * **Connection detail** - Select the **ConnectionDetail** entity to unsubscribe from.
   * **Topic** - Define the topic to unsubscribe from.
