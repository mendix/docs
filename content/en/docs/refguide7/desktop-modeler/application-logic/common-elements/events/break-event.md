---
title: "Break Event"
url: /refguide7/break-event/
---

A break event is used to stop iterating over the list of objects and continue with the rest of the flow. Please note that break events can only be used inside [loops](/refguide7/loop/).

{{% alert color="info" %}}

If you have a situation where you want to notify the user of any unpaid orderlines you could use a break event. First you retrieve all objects of entity 'OrderLine' that are associated with the order. For each orderline you check whether they are paid or not. If the orderline is paid, the microflow continues to the next orderline. However, if an unpaid orderline is found the user is notified and the loop is stopped; the microflow breaks from the loop and continues with the rest of the microflow.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/events/break-event/917951.png" >}}

{{% /alert %}}
