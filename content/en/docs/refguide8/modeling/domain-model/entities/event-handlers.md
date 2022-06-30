---
title: "Event Handlers"
url: /refguide8/event-handlers/
weight: 50
tags: ["domain model", "entity", "event handler", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/event-handlers.pdf).
{{% /alert %}}

## 1 Introduction

Event handlers define microflows that handle certain events related to the entity. Depending on the chosen moment and type, a microflow is executed before or after creating, committing, deleting, or rolling back an object.

Event handlers should be used moderately, as they will be triggered every time the corresponding event occurs, so they must be for things you want always to happen. If you only want something to happen on a certain page, you can use a microflow there (for example, on a customized **Save** button).

{{% alert color="warning" %}}
Event handlers are not triggered in a particular order. So, make sure events do not depend on each other in any way (also with regard to events in generalizations and specializations).

When events are triggered from microflows you can choose to bypass the event handlers in the microflow action.
{{% /alert %}}

{{% alert color="info" %}}
If the specified event is applied to a list of objects (if, for example, you are committing a list of objects), the handler will be triggered for all the objects first, and then the event will be applied to the list. In the given example,  the handler will run on all the objects first and then all the objects in the list will be committed.

If your handler relies on the event having already been applied to another object in a list, you should loop through the list and apply the event to each object in turn.
{{% /alert %}}

For example, say your **Customer** entity has a **Postcode** attribute and you want to check that this is always valid. If there are multiple places where this can be changed, you can add a *Before Commit* event which calls a microflow **BCo_Customer_Postcode** which checks that the postcode is valid every time a Customer object is committed and prevents the object being committed if the postcode is invalid.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/event-handlers/customer-event-handlers.png" alt="Example of adding a before commit event handler to the Customer entity" >}}

For more information on using event handlers for data validation, see [How To Set Up Data Validation](/howto8/data-models/setting-up-data-validation/).

## 2 Properties

You can add and edit event handlers for an entity from the [entity dialog box](/refguide8/entities/#dialog-box).

An example of the event handler properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/event-handlers/event-handler-properties.png" >}}

Event handler properties consist of the following sections:

* [When](#when)
* [What](#what)

### 2.1 When Section {#when}

#### 2.1.1 Moment {#moment}

**Moment** specifies whether the microflow is executed **Before** or **After** the specified event occurs.

#### 2.1.2 Event{#event}

**Event** specifies the event that triggers execution of the microflow.

| Value | Description |
| --- | --- |
| Create | The microflow is executed when an object of this entity is created. This happens when the user clicks **Create** on a grid or when an object is created in a microflow. In a [create](/refguide8/create-object/) action in a microflow, an after create action is executed after the object is initialized with the attributes' default values, but before any change items specified in the action are applied. |
| Commit | The microflow is executed when an object of this entity is committed. This happens when the user clicks **Save** on a page or when an object is committed in a microflow. |
| Delete | The microflow is executed when an object of this entity is deleted. This happens when a user clicks **Delete** in a grid or when an object is deleted in a microflow. |
| Rollback | The microflow is executed when an object of this entity is rolled back. This happens when a user clicks **Cancel** on a page or when an object is rolled back in a microflow. |

### 2.2 What Section{#what}

#### 2.2.1 Pass Event Object

This option specifies whether the microflow (see **Microflow** below) set for this event will have the object associated with the event as a parameter. This is useful, for example, if you want to do some validation checks in your event handler on an object being committed. 

If you set this to **No**, you can only specify a microflow with no parameters.

#### 2.2.2 Microflow

This property defines the microflow that is executed for the specified event. The microflow must have parameter and return types consistent with the moment and event of the event handler:

* Microflows of all event handlers except **Before Create** can get the object on which the event occurs as parameter.
* Microflows that are executed _before_ the event should return a Boolean value that specifies whether the event should continue (true) or be cancelled (false). When multiple microflows handle the same event, it is cancelled immediately when one of the microflows returns false. In that case, some microflows might not be executed at all. You can use this feature, for example, to cancel committing an object when a certain condition is not met.

| [Moment](#moment) | [Event](#event) | Can Get Object as Parameter | Returns a Boolean Value |
| --- | --- | --- | --- |
| Before | Create | No | Yes |
| After | Create | Yes | No |
| Before | Commit | Yes | Yes |
| After | Commit | Yes | No |
| Before | Delete | Yes | Yes |
| After | Delete | Yes | No |
| Before | Rollback | Yes | Yes |
| After | Rollback | Yes | No |

#### 2.2.3 Raise an Error When the Microflow Returns False

This is only relevant if the [Moment](#moment) is set as **Before**.

If this option is enabled, the event handler raises an error when the microflow returns false. You can then use error handling to detect whether the event handler returned false.

For example, this makes it possible to use **Before Commit** event handlers in the same way as native validation. If this option is set to **No**, a Before Commit event handler can stop the commit from happening but the rest of the microflow will still be executed.

Default: *Yes*

## 3 Read More

* [How to Denormalize Data to Improve Performance](/howto8/data-models/denormalize-data-to-improve-performance/)
* [How To Set Up Data Validation](/howto8/data-models/setting-up-data-validation/)
