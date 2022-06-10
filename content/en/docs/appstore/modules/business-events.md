---
title: "Business Events"
url: /appstore/modules/business-events/
category: "Modules"
description: "Describes the configuration and usage of the Business Events module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "business events", "data broker", "event broker", "kafka", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Business Events](https://marketplace.mendix.com/link/component/117555) module enables your Mendix apps to be event-driven. With Business Events, applications can signal when something important happens, and apps can independently subscribe to these events if they want to be informed. Mendix Business Events are like a mailing list to share event notification between apps.

The key difference doing this with Business Events compared to traditional communication between apps like you may know from REST or Web Services is that there is no direct communication between the different apps. Applications publish events to the Mendix Event Broker, or subscribe to events with the Mendix Event Broker.

### 1.1 Typical Use Cases

Have you ever needed to do some automation when something happens in your organization? If you actually tried to implement this, you probably know how much effort it takes to find out how to get this information, or to have some application inform you that something happened.

Some examples of where this could be useful: Maybe a payment was registered in a financial app, and another app needs to send to receipt. Or someone made an appointment in an appointment app, and you need to handle this in the schedule app of some professionals. Or maybe a customer placed an order in a webshop, and multiple apps need take follow-up actions like scheduling the shipment, sending the invoice and ordering restock of the inventory.

### 1.2 Pre-Requisites

To use the Business Events module, you will need the following:

* Use Mendix 9.15 or higher
* A license to the Mendix Event Broker (how do people get this?)
* Two Mendix apps: one that *publishes* the Business Events and makes them available, and one that *subscribes* to the Business Events (you can have as many publishing and consuming apps as you require)

## 2 Configuration

When you want to publish or consume business events, the **Business Events** module must be imported and setup in your app. Follow these steps for *first time* setup.

After downloading the module from the Marketplace and adding it to your app.

### 2.1 Configure Local Deployments

When deploying locally some settings will need to be configured.  These are all located in the **_USE_ME/****Constants** folder for the **Business Events** Module
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653392738981_Screenshot+2022-05-24+at+13.39.55.png)

    - Only the `ChannelName` and `ServerUrl` have to be specified as defined in the README of the [business-events-local-setup](https://gitlab.rnd.mendix.com/platformcore/business-events-local-setup).
        - **ChannelName**: `local`
        - Running on Windows, **ServerUrl**: `localhost:9092`
        - Running Docker on MacOS and StudioPro on Windows via parallels, **ServerUrl**: `10.211.55.2:9094`
        - Running Docker on Linux and StudioPro on Windows via VirtualBox/KVM, **ServerUrl**: `<IP ADDRESS>:9094`

### 2.2 Change Logging Interval (Optional)

Optionally you can set **Summ****a****ryLogIntervalSeconds** to a different value. By default it’s set at 120, which means if events are consumed or produced, an overview of what was consumed or produced will be logged at `INFO` level every two minutes (120 seconds). When configured with 0 or a negative number, this additional logging will not be logged at all.

## 3 Usage

### 3.1 Publishing Business Events

The following steps describe how to publish entities as Business Events:

#### 3.1.1 Modelling your Business Events
1. Entities that are to be published as business events must inherit from the `PublishedBus``inessEvent` entity included in the Business Events Module. In your Domain Model, double-click the entity you want to publish to display the entity properties: 
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653394398998_Screenshot+2022-05-24+at+14.13.03.png)

2. For **Generalization**, click **Select** and select the **PublishedB****usinessEvent** entity. 
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653394513051_Screenshot+2022-05-24+at+14.14.59.png)

1. The base values for your entity are taken from the **PublishedB****usinessEvent** and your entity will behave like a specialized entity. For more information, see [Generalization, Specializations and Inheri](https://docs.mendix.com/refguide/generalization-and-association)[t](https://docs.mendix.com/refguide/generalization-and-association)[ance](https://docs.mendix.com/refguide/generalization-and-association). 
2. The text with the blue background above the entity tells you that it is a specialized entity based on the **PublishedBusinessEvent** entity in the **BusinessEvents** module.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653394650343_Screenshot+2022-05-24+at+14.17.14.png)

#### 3.1.2 Import Publish Business Event Action

The next stage is to import an action for publishing into the microflow(s) that will publish. The following has to be done for every microflow: 


1. Open the microflow where the Business Event will be published, 
2. Include the entity of Business Event as a parameter to the microflow.
3. In the **Toolbox**, search for `Publish business event` action and drag it and place it in your microflow. 
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653394735766_Screenshot+2022-05-24+at+14.18.39.png)

4. Double click the `Publish business event` to display the **Publish Business Event** property box: 
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653394870622_Screenshot+2022-05-24+at+14.20.49.png)

5. Enter the following information:
    - **Subject**: Fill in the subject. Subject can be anything you consider useful, it’s like a short description of what can be expected in the payload, similar to email subject. It will help subscribed apps decide if the event might be useful to them.
    - **Event Data**: Select the entity that you want to publish in the service that will represent the Business event in the subscribers app. This should be an entity that you have configured to inherit from the `PublishedB``usinessEvent` entity in step 1.
    - **Task Queue/Output:** These values are not currently used for Business Events and should be left unchanged

**NOTE**
The *Publish Business Event* Java action will commit all event objects at the start of the publishing process as Outbox entity, this is an implementation detail. In case something goes wrong during the publishing process, a retry mechanism will be triggered for up to 48 hours.  If the publishing microflow fails, the entity in the Outbox will be rolled back as well.

#### 3.1.3 Create a Published Business Event Service

A Published Business Event Service is the contract defining various events, like a REST API spec.


- From the Module folder, right click → Add other → Published Business Event service
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395375934_Screenshot+2022-05-24+at+14.27.43.png)

- Next provide the name for your service and OK to create it.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395393423_Screenshot+2022-05-24+at+14.28.35.png)

- Once you have the Service created, click on the add button to link your modelled **PublishedBusinessEvent** entity as an event.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395430667_Screenshot+2022-05-24+at+14.30.12.png)

- Select the entity that you would like to publish to add it to the Service.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395452775_Screenshot+2022-05-24+at+14.30.41.png)

- The Business Event with Attributes will now appear in the Service
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395534379_Screenshot+2022-05-24+at+14.31.24.png)

- Once you have all of your entities linked into the Published Business Event Service, you can export it to be shared as an AsyncAPI contract in YAML format.


#### 3.1.1 Required Entities in Domain Model

Four entities are necessary to include in your domain model to publish business events: 

![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653392680087_Screenshot+2022-05-24+at+13.44.26.png)

- **Published****BusinessEvent:** this non-persistable entity has the fields settings that every published event will include. Every published business event will inherit from this entity. The three fields can be set from the Java Action. 
- **Consumed****BusinessEvent:**  this entity has the fields that every consumed event will include. Every consumed business event will inherit from this entity. These fields will be set from the module, as will any additional fields that match with the payload of the event.
- **DeadLetterQueue:** this persistant entity within the Domain Model of the Business Events Module is used for generating a historical record of events that are generated for Business Event activities that were not successful or had errors when received by the consumer and can be referred to for troubleshooting. 
- **Outbox:** this entity is used to store the event prior to being sent.  This entity is connected to the microflow where a Business Event is triggered.  Should the Microflow fail, the entity will be removed as part of the same transaction.

### 3.2 Consuming Business Events

Consumption is a continuous process that the module will start and will be restarted in case of any errors.   Once you have configured the Subscription to the Events, this will be taken care of by the system.

#### 3.2.1 Create a Consumed Business Event Service

In order to start consuming a Business Event Contract, you need to create a Consumed Business Event Service


- From the Module folder, right click → Add other → Consumed Business Event Service 
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395288007_Screenshot+2022-05-24+at+14.27.43.png)

- Next provide the name for your service and OK to create it
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395653153_Screenshot+2022-05-24+at+14.33.59.png)

- In order to populate the service you are prompted to **Import Service Contract (AsyncAPI)****.** (See 4.3 for where to get this AsyncAPI contract.) 
![](https://paper-attachments.dropbox.com/s_25001DDFA210B4171C89326F7DB2BF2D8E5FEA3153EE1D0574829BE154CA1381_1649255459871_image.png)

- This will make Subscriptions to Business Events available for you to start mapping to entities within your consuming application.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395694580_Screenshot+2022-05-24+at+14.34.31.png)

![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395729922_Screenshot+2022-05-24+at+14.35.18.png)

- As you click Add to add the Events from the Contract into your module, Mendix Studio Pro will create an Entity within your Domain model and an Event Handler microflow to manage the flow of the Event after delivery.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395764394_Screenshot+2022-05-24+at+14.35.50.png)

- You will now have at your disposal the payload of the Event as an Entity and attached to it a microflow which triggers on each Event from where you can build your business logic.
![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395818397_Screenshot+2022-05-24+at+14.36.45.png)

![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395921745_Screenshot+2022-05-24+at+14.37.22.png)

![](https://paper-attachments.dropbox.com/s_5112255A543DA3FFC2AEF04899EBEAD5076372C39E9A1EE9612BC93B1906A44D_1653395864246_Screenshot+2022-05-24+at+14.37.27.png)

### 3.3 Dead Letter queue for any failed messages

Every time a Business Event is consumed it is transformed to match the Entity created as part of the Subscription. When the Entity within the Business Event has changed based on the imported contract, it can render the Entity unprocessable. In such a scenario the Business Event will fail into a Dead Letter Queue which contains the representation of the Entity within the data column.


![](https://paper-attachments.dropbox.com/s_837CD31D54F4C06BA02DA31C3EBA5FE661BD1E8EE06F20FB2B3F3A0F07C6C051_1628256196736_image.png)


The most important fields in this entity to be checked when there are errors include the following:

-  `type`,
-  `source`,
-  `subject`,
-  `data`. 

You can use these fields to transform the payload back into a Mendix entity again. It’s possible the subject is missing from the original event, in which case the value will be an empty string. It’s also possible the consumed event does not has the correct format, in that case the event won’t go to the dead letter queue but throw an error.

## 4 Limitations {#limitations}

There is currently a **limit** **of** **1000 events per day****,** **per app**,  that can published or consumed in the **Mendix Free App (S****andbox****)** ****environment. For Mendix Apps on Licensed Nodes there is no limit. 

## 5 Frequently Asked Questions

1. Can I undo a Publish Event action in case my microflow fails?
Yes, if you do a rollback in an error handler, the business event will not be sent to other applications. (See outbox pattern.)

2. Can I publish my own events from other software directly to a Kafka topic?

No, that is currently not supported. Currently the focus is on sending Business Events from Mendix apps to other Mendix apps in a decoupled way.

3. Can I send related or associated objects as a single Business Event?

No, only a flat object. For complex data structures, we advise you to provide an API where the consuming app can retrieve the complex structure upon retrieval of a Business Event. Alternatively, you can use a string attribute in the business event to store JSON or XML using mappings.

4.  I want to replicate data between my Mendix apps, should I use Business Events?

Business events can help you replicate data more efficiently, by ensuring you do not have to poll continuously. Instead, the consuming app only polls for new data if it receives a Business Event indicating that something has changed.  To share data it is still preferable to use OData or RESTful APIs as this is not the current purpose of Business Events.

5.  Can I try Business Events locally before I deploy my app to Mendix Cloud?

Yes, users can also try out the Business Event functionality and deploy locally by setting up a Docker container with Kafka. The repository with the required docker-compose file can be found [here](https://gitlab.rnd.mendix.com/platformcore/business-events-local-setup).

6. Are Business Events guaranteed to be delivered only once?

The Outbox will publish each Business Event only once.  This however does not prevent business logic from sending duplicate messages to the Outbox. 

7. Are business events guaranteed to be delivered in the original sequence?

Events will be delivered in the sequence that they where produced in.  The Business Events module however persists the event to the Entity table in this order.  Once the entity is persisted it triggers the microflow for the persisted entity.  A failure in the microflow can cause data to become out of sequence.  Event ordering is not currently a feature of Business Events.

8. How do I detect and correct failed processing of received events?

The Business Events module uses Mendix 9 Task queue to publish/consume events, so all the capabilities of observability of task queue can be used here as well.

9. How do I configure which Kafka cluster to use?

During modelling, you can use the constants described above to configure to a local or other Kafka. This does not transfer through to runtime. During runtime the configurations are provided during startup automatically since only Mendix Cloud is supported.

10. How to delete / clean up events and tasks?

This is something we are looking into, likely by default all will be deleted after some time, with some configuration to overwrite for advanced use cases.
In the meantime, you could use scheduled event to clean up the events yourself. (Do make sure the consumer doesn’t need them anymore). For the task queue the https://marketplace.mendix.com/link/component/117272 Task Queue Helpers can be used.

11. How do I know the event was successfully published?

Messages are first queued within the Outbox for successful delivery as a Business Event.  Monitoring the Outbox entity will allow the developer to determine if there are unpublished Business Event Entities.

12. How do I know events are consumed successfully?

The flow of events are controlled by the persistence of the event to the Consumed Business Event Entity as described above.  The flow will not continue in the case of such a failure.   They only cause for such failure would be databases related and thus exceptionally unlikely to occur.

On the microflow, a log message action can be added after the start action in order to track the movement. Please refer to section 7 describing the Dead Letter queue.


# 10 Known Issues
- In studioPro 9.14.0 having an log activity in your after startup microflow results in an error when trying to build the app. You can work around this by removing the log activity in the after startup microflow.



