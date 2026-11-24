---
title: "11.17"
url: /releasenotes/sdk/metamodel-11.17/
weight: 50 # Reduce weight by 1 to add this document to the top of the navigation
---

## 11.17.0

### Workflows

#### CallWorkflowActivity (Element)

* We deleted the `boundaryEvents` property. Info: "replaced with boundaryEventContainers"
* We introduced the `boundaryEventContainers` property.

#### MicroflowBasedActivity (Element)

* We deleted the `boundaryEvents` property. Info: "replaced with boundaryEventContainers"
* We introduced the `boundaryEventContainers` property.

#### UserTaskActivity (Element)

* We deleted the `boundaryEvents` property. Info: "replaced with boundaryEventContainers"
* We introduced the `boundaryEventContainers` property.

#### WaitForNotificationActivity (Element)

* We deleted the `boundaryEvents` property. Info: "replaced with boundaryEventContainers"
* We introduced the `boundaryEventContainers` property.

#### BoundaryEvent (Element)

* We deleted this element.

#### InterruptingTimerBoundaryEvent (Element)

* We deleted this element.

#### NonInterruptingTimerBoundaryEvent (Element)

* We deleted this element.

#### NotificationBoundaryEvent (Element)

* We deleted this element.

#### InterruptingNotificationBoundaryEvent (Element)

* We deleted this element.

#### NonInterruptingNotificationBoundaryEvent (Element)

* We deleted this element.

#### BoundaryEventContainer (Element)

* We introduced this element.

#### BoundaryEventActivity (Element)

* We introduced this element.

#### TimerBoundaryEventActivity (Element)

* We introduced this element.

#### InterruptingTimerBoundaryEventActivity (Element)

* We introduced this element.

#### NonInterruptingTimerBoundaryEventActivity (Element)

* We introduced this element.

#### NotificationBoundaryEventActivity (Element)

* We introduced this element.

#### InterruptingNotificationBoundaryEventActivity (Element)

* We introduced this element.

#### NonInterruptingNotificationBoundaryEventActivity (Element)

* We introduced this element.

#### NotifyNotificationBoundaryEventTarget (Element)

* We deleted the `boundaryEvent` property. Info: "replaced with activity"
* We introduced the `activity` property.

### Pages

#### Page (ModelUnit)

* We introduced the `popupOnCloseAction` property.
* We introduced the `useOldPopupCloseAction` property.

### CustomWidgets

#### CustomWidget (Element)

* We introduced the `systemTextOverrides` property.

#### SystemTextOverride (Element)

* We introduced this element.

### DatabaseConnector

#### TableMapping (Element)

* We made the `entity` property optional.

#### ColumnMapping (Element)

* We made the `attribute` property optional.
