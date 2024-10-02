---
title: "Denormalize Data to Improve Performance"
url: /howto9/data-models/denormalize-data-to-improve-performance/
weight: 6
description: "Describes how to denormalize data and keep denormalized data in sync in Studio Pro."
---

## Introduction

This how-to explains how you can improve performance by denormalizing data in Mendix.

This how-to teaches you how to do the following:

* Denormalize data
* Keep denormalized data in sync

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Creating a [basic data layer](/refguide9/create-a-basic-data-layer/)

## Denormalization

For an example scenario, a domain model contains two related entities called Customer and Order. The customer overview page needs to show the name of the customer and the total order amount next to each other. Showing the customer name is easy, but the total order amount needs to be calculated.

To show the total order amount, there are two options:

* First option: create a calculated attribute in the Customer entity to compute the total order amount
    * The drawback of this option is that the calculated attributes bring down the performance of overview pages
* Second option: create a persistable attribute in the Customer entity that stores the total order amount in the database – this is called denormalization
    * The drawback of this option is that the redundant data needs to be kept in sync (but this is easy with Mendix [event handlers](/refguide9/event-handlers/))

To enable denormalization, follow these steps:

1. Create a domain model that looks like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582169.png" class="no-border" >}}

2. Double-click the **Customer** entity to open the properties editor:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582168.png" class="no-border" >}}

3. Add a decimal attribute **TotalOrderAmount**.
4. Create an overview and detail page for the *Customer* entity.
5. Make sure the customer overview page shows the **TotalOrderAmount** value.
6. Make sure the order detail page has a mandatory reference selector to select the customer.

Now the application is ready to store redundant data, but you still need to keep the data in sync.

## Keep Denormalized Data in Sync with an After Commit Event

1. Open the domain model and double-click the Order entity to open its properties editor.
2. On the **Event handlers** tab, click **New** to add a new event handler.
3. On the **New Event Handler** dialog box, do the following:
    * Select **After** as the **Moment**
    * Select **Commit** as the **Event**
    * Select **Yes** for **Pass the event object**
    * Click **Select...** to open the microflow selector

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582166.png" class="no-border" >}}

4. On the microflow selector, click **New** and enter a name for the new microflow (for example, *Order_AfterCommit*).
5. Click **OK** to create the new microflow, and then click **OK** again to save the event handler.
6. Open the new microflow, which should look like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582165.png" class="no-border" >}}

    Let's take a moment to think about what the new microflow should do. We want to calculate the total order amount and store this value in the customer object. As you can see, the current microflow only has an order object as an input parameter. So, first we need to retrieve the corresponding customer. Then we need to get all the orders of this customer and calculate the total order amount. As soon as we have the total order amount, we need to store it in the customer object. Once you're done, the microflow should look like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582150.png" class="no-border" >}}

7. Open the **Toolbox**, which should be docked in the lower-right corner of Studio Pro. If you can't find the **Toolbox** there, you can open it from the **View** menu:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582163.png" class="no-border" >}}

8. Drag a **Retrieve** activity from the toolbox to the line between the start and end event on the microflow, which will insert a new retrieve activity:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582164.png" class="no-border" >}}

9. Double-click the new activity to open its properties on the **Retrieve Objects** dialog box and do the following:
    * Select **By association** as **Source**
    * Click **Select...** to open the **Association** selector

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582162.png" class="no-border" >}}

10. On the **Select association** pop-up window, select **Order_Customer** from the **Variables** node in the tree view, and then click **Select**:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582161.png" class="no-border" >}}

    As you can see below, the **Output** section of the **Retrieve Objects** dialog box is configured automatically:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582160.png" class="no-border" >}}

11. Click **OK** to save the activity. Your microflow should now look like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582159.png" class="no-border" >}}

12. Insert another retrieve activity (as you did in step #8), double-click it to open its properties on the **Retrieve Objects** dialog box, and do the following:
    * Select **From Database** as **Source**
    * Click **Select...** to open the entity selector

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582157.png" class="no-border" >}}

13. On the **Select entity** pop-up window, select **Order** via from the **Variables** node in the tree view, and then click **Select**:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582158.png" class="no-border" >}}

    As you can see below, the **XPath constraint** and **Output** sections of the **Retrieve Objects** dialog box are configured automatically:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582156.png" class="no-border" >}}

14. Click **OK** to save the activity. Your microflow should now look like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582155.png" class="no-border" >}}

15. Insert an aggregate list activity, double-click it to open its properties on the **Aggregate List** dialog box, and do the following:
    * Select **OrderList** as the **Input > List**
    * Select **Sum** as the **Function**
    * Select **Totalprice** as the **Attribute**
    * Enter *SumTotalprice* as the **Output > Variable** name

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582153.png" class="no-border" >}}

16. Click **OK** to save the activity. Your microflow should now look like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582152.png" class="no-border" >}}

17. Insert a change activity, double-click it to open its properties on the **Change Object** dialog box, and do the following:
    * Select **Customer** as the **Input > Object**
    * Select **Yes** as the **Commit** action
    * Select **Yes** to refresh in the client (the object changes are made on the server side, and with this option, the server triggers the client to refresh the object)
    * Click **New** to create a new change item
18. In the **Edit Change Item** dialog box, do the following:
    * Select **TotalOrderAmount** as the **Member**
    * Enter *$SumTotalprice* as the **Value**
    * Click **OK** to save the change item
19. Click **OK** again to save the activity. Your microflow should now look like this:

    {{< figure src="/attachments/howto9/data-models/denormalize-data-to-improve-performance/18582150.png" class="no-border" >}}

20. Run the application and create some customers and orders. You should now see an up-to-date value for the TotalOrderAmount.

## Read More

* [Creating a Basic Data Layer](/refguide9/create-a-basic-data-layer/)
* [Setting Up Data Validation](/refguide9/setting-up-data-validation/)
* [Find the Root Cause of Runtime Errors](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Defining Access Rules Using XPath](/refguide9/define-access-rules-using-xpath/)
* [Attributes](/refguide9/attributes/)
* [Event Handlers](/refguide9/event-handlers/)
