---
title: "Event Handlers"
url: /refguide7/event-handlers/
weight: 50
tags: ["domain model", "entity", "event handler"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

Event handlers define microflows that handle certain events related to the entity. Depending on the chosen moment and type, the microflow is executed before or after creating, committing, deleting or rolling back an object.

{{% alert color="warning" %}}

Use event handlers moderately. Event handlers will be triggered each and every time the corresponding event is raised so it has to be something that you want to always happen. If you just want something to happen in a certain form you can use a local microflow there, for example on a self-made Save button.

{{% /alert %}}{{% alert color="warning" %}}

Event handlers are not triggered in a particular order. So make sure events do not depend on each other in any way (also with regard to events in generalizations and specializations).

{{% /alert %}}

## Properties

### Moment

This property defines whether the microflow is executed before or after the specified event occurs.

| Value | Description |
| --- | --- |
| Before | The microflow is executed before the specified event occurs. |
| After | The microflow is executed after the specified event occurs. |

### Event

This property defines the event that triggers execution of the microflow.

| Value | Description |
| --- | --- |
| Create | The microflow is executed when an object of this entity is created. This happens when a user clicks a **Create** button on a grid, or when creating an object in a microflow. In a microflow create action, an After Create is executed after the object is initialised with its default values, but before any change items specified in the action are applied. |
| Commit | The microflow is executed when an object of this entity is committed. This happens when the user clicks a save button on a form, or when committing an object in a microflow. |
| Delete | The microflow is executed when an object of this entity is deleted. This happens when a user clicks a delete button in a grid, or when deleting an object in a microflow. |
| Rollback | The microflow is executed when an object of this entity is rolled back. This happens when a user clicks a cancel button in a form, or when rolling back an object in a microflow. |

### Microflow

This property defines the microflow that is executed for the specified event. The microflow is required to have a certain parameter and return type depending on the moment and event of the event handler:

*   Microflows of all event handlers except for 'before create' get the object on which the event occurs as parameter.
*   Microflows that are executed _before_ the event should return a Boolean value that specifies whether the event should continue (True) or be cancelled (False). When multiple microflows handle the same event, it is cancelled immediately when one of the microflows returns False. In that case, some microflows might not be executed at all. Using this feature it is for example possible to cancel committing an object when a certain condition is not met.

| Moment | Event | Gets object as parameter | Returns a Boolean value |
| --- | --- | --- | --- |
| Before | Create | No | Yes |
| After | Create | Yes | No |
| Before | Commit | Yes | Yes |
| After | Commit | Yes | No |
| Before | Delete | Yes | Yes |
| After | Delete | Yes | No |
| Before | Rollback | Yes | Yes |
| After | Rollback | Yes | No |

### Raise an error when the microflow returns false (only if Moment is 'Before')

By enabling this option the event handler will raise an error when the microflow returns false. You can then use error handling to detect whether the event handler returned false. This makes 'before commit' event handlers more like native validation. If this option is disabled, a 'before commit' event handler can only stop the commit from happening but the rest of the microflow will still be executed.

_Default value:_ Yes
