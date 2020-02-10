---
title: "Event Handlers"
parent: "entities"
menu_order: 50
tags: ["domain model", "entity", "event handler", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Event handlers define microflows that handle certain events related to the entity. Depending on the chosen moment and type, a microflow is executed before or after creating, committing, deleting, or rolling back an object.

Event handlers should be used moderately, as they will be triggered each and every time the corresponding event is raised, so they must be for things you want to always happen. If you just want something to happen on a certain page, you can use a local microflow there (for example, on a customized **Save** button).

{{% alert type="warning" %}}
Event handlers are not triggered in a particular order. So, make sure events do not depend on each other in any way (also with regard to events in generalizations and specializations).
{{% /alert %}}

{{% alert type="info" %}}
If the specified event is applied to a list of objects (if, for example, you are committing a list of objects), the handler will be triggered for all the objects first, and then the event will be applied to the list. In the given example,  the handler will run on all the objects first and then all the objects in the list will be committed.

If your handler relies on the event having already been applied to another object in a list, you should loop through the list and apply the event to each object in turn.
{{% /alert %}}

## 2 Properties

### 2.1 When

#### 2.1.1 Moment {#moment}

This property defines whether the microflow is executed **Before** or **After** the specified event occurs.

#### 2.1.2 Event

This property defines the event that triggers execution of the microflow.

| Value | Description |
| --- | --- |
| Create | The microflow is executed when an object of this entity is created. This happens when the user clicks **Create** on a grid or when an object is created in a microflow. In a microflow-create action, an after-create action is executed after the object is initialized with its default values, but before any change items specified in the action are applied. |
| Commit | The microflow is executed when an object of this entity is committed. This happens when the user clicks **Save** on a page or when an object is committed in a microflow. |
| Delete | The microflow is executed when an object of this entity is deleted. This happens when a user clicks **Delete** in a grid or when an object is deleted in a microflow. |
| Rollback | The microflow is executed when an object of this entity is rolled back. This happens when a user clicks **Cancel** on a page or when an object is rolled back in a microflow. |

### 2.2 What

#### 2.2.1 Pass Event Object

This option defines if the configured microflow (see **Microflow** below) for this event will have the object (which has been or will be created, committed, deleted, or rolled back) as an argument. This is useful if you want to do some checks in your event handler on the object being committed, for example. 

If you set this to **No**, you can only specify a microflow with no parameters.

#### 2.2.2 Microflow

This property defines the microflow that is executed for the specified event. The microflow is required to have a certain parameter and return type depending on the moment and event of the event handler:

* Microflows of all event handlers except **Before** + **Create** get the object on which the event occurs as parameter.
* Microflows that are executed _before_ the event should return a Boolean value that specifies whether the event should continue (true) or be cancelled (false). When multiple microflows handle the same event, it is cancelled immediately when one of the microflows returns false. In that case, some microflows might not be executed at all. Using this feature, it is possible to cancel committing an object when a certain condition is not met, for example.

| Moment | Event | Gets Object as Parameter | Returns a Boolean Value |
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

If this option is enabled, the event handler raises an error when the microflow returns false. You can then use error handling to detect whether the event handler returned false. This makes **Before** + **Commit** event handlers more like native validation. If this option is disabled, a **Before** + **Commit** event handler can only stop the commit from happening, but the rest of the microflow will still be executed.

Default: *Yes*

## 3 Read More

* [How to Denormalize Data to Improve Performance](/howto/data-models/denormalize-data-to-improve-performance)
