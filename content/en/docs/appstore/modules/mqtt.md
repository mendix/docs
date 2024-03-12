---
title: "MQTT"
url: /appstore/modules/mqtt/
category: "Connectors"
description: "Describes the configuration and usage of the MQTT connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "mqtt", "iot"]
aliases:
    - /appstore/connectors/mqtt/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

[MQTT](https://mqtt.org/) is a lightweight Internet of Things (IoT) messaging protocol. You can use the [MQTT](https://marketplace.mendix.com/link/component/119508) connector with your Mendix app to communicate with an MQTT broker.

### 1.1 Features

The MQTT connector consists of microflow actions that enable you to do the following:

* Publish data to the MQTT broker
* Subscribe to the MQTT broker 
* Unsubscribe from the MQTT broker

## 2 Broker Configuration {#configuration}

### 2.1 Configuring the Broker {#configure-broker}

Configure your broker connection information by adding the **ConnectionAdministration** page to your app. Input your broker information, then set up and run the app locally. Enter the **Connection Name**, **Broker host**, and **Broker port**. 

If the broker needs basic authentication to connect, you can set up a user name and password that is stored in the domain model. See the [Authentication](#auth) section below for more information. 

#### 2.1.1 Creating a Broker Connection in a Microflow {#broker-microflow}

You can set up a broker connection directly in a microflow if you do not want it to be [stored in the domain model](#configuration). To do this, follow these steps:

1. In your microflow, use the [Create object](/refguide/create-object/) activity to create the **ConnectionDetail** object by providing the required parameters.
2. Use the created **ConnectionDetail** object for **Publish**, **Subscribe**, or **Unsubscribe** operations.

#### 2.2 Setting Up Authentication {#auth}

If an MQTT broker needs a user name and password for connection, set credentials on the **ConnectionAdministration** page. Set the **Authentication method** to **BASIC**, then set the values for **UserName** and **Password**.

Setting the **Authentication method** to **NONE** indicates that authentication is not required to connect to the MQTT broker. 

The **Password** is encrypted using the **EncryptionKey** constant. For better security, it is advised to change the **EncryptionKey** constant after importing the MQTT connector.

#### 2.1.2 Enabling SSL

Enabling SSL will establish a secure connection to the broker. To input your SSL certificates, follow these steps:

1. Open your certificates file in any text editor. 
2. Copy all content of the file and paste it to the **CA Certificate** and **Client Certificate** fields. 
   * Certificates start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`. 
   * Client keys typically start with `-----BEGIN RSA PRIVATE KEY-----` or `-----BEGIN PKCS7-----`.
3. Add the **Client Certificate Key** and the **Certificate password** if one was set.
    * Currently supported certificate types are X.509 format (*.crt*, *.cer*)
    * Currently supported key types are X.509 format (*.pem*, *.pkcs*)

## 3 Usage

To use the MQTT connector, make sure you have [configured the broker connection](#configure-broker), or [create a broker connection directly in a microflow](#broker-microflow). 

You can build microflows that use the connection details from the domain model to connect, then set up connection details using the domain model. Include microflows that first use the connection details from the domain model to connect, before the subscribe or publish actions can be performed.

### 3.2 Microflow Actions

After you have set up the connection with the broker (in the [Configuration](#configuration) section or in a microflow), you can use the actions **Publish**, **Subscribe**, or **Unsubscribe** in a microflow. The **SampleUses** microflow gives a sample setup to reference.

#### 3.2.1 Publish

To publish data to the MQTT broker, follow these steps:

1. Search for **Publish MQTT** in the **Toolbox**.
2. Drag the **Publish MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Connection detail** 
     **Topic** – topic to which the payload is published
    * **Payload** – string message to be published
    * [Qo S (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – an attribute of each message being published
    * **Retained** – the retained setting serves two purposes depending on whether the message it is associated with is being published or received:
        * **Yes** – For messages being published, setting Retained to Yes indicates that the MQTT server should retain a copy of the message. The message will then be transmitted to new subscribers to a topic that matches the message topic. For subscribers registering a new subscription, the flag being true indicates that the received message is not a new one, but one that has been retained by the MQTT server.
        * **No** – For publishers, this indicates that this message should not be retained by the MQTT server. For subscribers, it indicates this is a normal message, received as a result of it being published to the server.

#### 3.2.2 Subscribe

To subscribe to the MQTT broker, follow these steps:

1. Search for **Subscribe to MQTT** in the **Toolbox**.
2. Drag the **Subscribe to MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Topic** – topic to subscribe to
    * **OnMessageMicroflow** – microflow to be executed when a message is received on subscribed topic
    * [QoS (Quality of Service)](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) – an attribute of each message being published

When subscribing to a topic, define in the subscribe action which microflow is triggered for each message, and that the topic and payload is passed on into that microflow.

#### 3.2.3 Unsubscribe

To unsubscribe from the MQTT broker, follow these steps:

1. Search for **Unsubscribe from MQTT** in the **Toolbox**.
2. Drag the **Unsubscribe from MQTT** event into your microflow.
3. Edit the event to include the following details:
    * **Topic** – topic to unsubscribe from
