---
title: "Add an event handler"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to add an event handler to an entity and configure it. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=9699431).

## Instructions

![](attachments/819203/917932.png) **Double-click on the entity.**

![](attachments/819203/917932.png) **Click on the 'New' button in the 'Event handlers' tab.**

![](attachments/2621529/2752535.png)

![](attachments/819203/917932.png) **Now choose when you want the event handler to perform its action. Event handlers can be triggered by four different object events, and can be chosen to have the action performed before or after the event takes place.**

For example choosing 'Before' and 'Commit' will have the selected microflow executed before an instance of this entity is committed, whereas choosing 'After' and 'Delete' would have the microflow executed after an instance of this entity is deleted.

![](attachments/819203/917932.png) **Press the 'Select microflow' button and in the menu that appears choose the microflow you want to have executed whenever the event handler is triggered. Finish by pressing the 'Select' button.**

![](attachments/2621529/2752534.png)

![](attachments/819203/917932.png) **The domain model will now indicate that the entity has an event handler.**

![](attachments/2621529/2752548.png)

[![](attachments/819203/917564.png)](add-an-event-handler)[(Back to Top)](add-an-event-handler)