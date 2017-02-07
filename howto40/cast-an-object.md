---
title: "Cast an object"
parent: "object-activities"
space: "Mendix 4 How-to's"
---
## Description

This section describes cast an object in a microflow.

## Instructions

![](attachments/819203/917932.png) **Create the microflow with inheritance split. If you do not know how to add activities to a microflow, please refer to [this](add-an-activity-to-a-microflow) article.**

![](attachments/819203/917932.png) **Add the 'Cast object' activity to the sequence flow directly behind the inheritance split.**

![](attachments/2621591/2752863.png)

In the above microflow, a new 'Order' object is created. If the user is of the type 'Customer' (a specialization of System.User), the 'Customer' object is cast and then used to set the association between 'Order' and 'Customer'. On the other hand if the user is not a 'Customer', the microflow only creates an 'Order' object and then opens a form.

![](attachments/819203/917932.png) **Double-click on the 'Cast object' activity and enter the variable name you want the object you are casting to be identified with in the microflow.**

![](attachments/2621591/2752864.png)
