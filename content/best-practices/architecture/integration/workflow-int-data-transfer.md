---
title: "Workflow Integration with Data Transfer Example"
parent: "process-integration"
menu_order: 1
draft: true
---

*The integration pattern has been implemented in an App Store module. It can be
downloaded at the Best Practices section as Integration Pattern: Process
Integration.*

In this integration pattern example app, we implemented an example architecture
consisting of an ordering app and a billing app. The ordering app is responsible
for managing customer orders. The billing app is responsible for generating
invoices. A user who creates an order (in the ordering app) needs to approve the
invoice (in the support app) imattachmentstely after creating the order. To support
this workflow, an integration is necessary to transfer the user and data between
apps.

Both example apps have been built into the same Mendix model to facilitate easy
distribution and deployment of the demo, but could be split and deployed as two
separate microservices in a real implementation.

The integration between the apps consists of two parts:

-   The transactional data from the ordering app is shared with the billing app
    through a REST service endpoint published by the ordering app. The billing
    app has a scheduled event that periodically pulls data from this service.

-   The user working in the app can seamlessly transition between apps using
    deep links. When in the ordering workflow, the existing data sharing
    mechanism is used to get updated data when necessary.

The Example Case
----------------

![](attachments/workflow-int-data-transfer/example-case.png)

You can use this pattern when you have a business process using transactional
data that starts in one app and ends in another. An example which is used for
this example is depicted in the diagram below.

-   Orders can be created in the Ordering app/module. Each order has a status,
    which starts at “draft”.

-   When an order reaches the “confirmed” status, the Billing app/module needs
    to start a process of its own, so it requires the order data.

-   Periodically (every few minutes) the Billing app polls the Ordering app for
    changed orders and stored them locally.

-   When a new order is retrieved, the Billing process starts its own processing

-   In the Ordering app, when a user clicks the “confirm” button, he is
    transferred to the invoice screen using a deep link.

-   Just prior to opening the screen for the user, the billing app uses the rest
    integration to get the order data in time for the user to see the invoice.

Business Event Integration
--------------------------

In order to successfully implement a pull-based data integration, there are
several things that need to be in place, and error conditions that must be
handled. 

The root of the implementation is a simple REST service that exposes the Order
data:

### Pulling all Orders

1.  In the Ordering app, expose Orders as a REST resource.

2.  In the Support app, create a scheduled microflow that calls the Order REST
    endpoint.

3.  In the import mapping of the result, use ‘Find by key’ and ‘If not found,
    create’. This ensures updates are applied to the right objects.

This approach has the drawback that for every pull, all Orders are transferred,
even when they haven’t changed. An obvious way to improve this is to only
retrieve objects that are changed.

At first sight adding a changed date attribute to the order object solves this
issue. The rest service can then provide all objects that have been changed
since that date, and the consumer can ask for all objects changed since the last
call time. In addition to only retrieving changed objects, this approach has the
additional advantage that the app can reset the continuation token value stored
in OrderPull whenever they want to re-retrieve changes since a certain time. 

However, this implementation has one shortcoming: it might not synchronize all
orders. When a change to an order 1 occurs, its ChangeDate is set. However, this
value will only show up in the REST operation once the database transaction
associated to the change finishes. Since this may be a while if a complex
calculation occurs after that change, chances are that another change (order 2)
may occur and be committed before the end of the transaction.

If the get-all REST operation is called during that time, the operation will
have a max ChangeDate (i.e. that of order 2) that is after the ChangeDate of
order 1, even though the change to order 1 is not included in the returned
records. The next call to the service will include the later ChangeDate, and so
will not retrieve the change to order 1 either. So, the change to order 1 can be
lost.

![](attachments/workflow-int-data-transfer/workflow-order.png)

To resolve this problem, a different approach is necessary. This approach uses a
sequence number instead of a time stamp, and assigns that number in another
transaction in a way that prevents the problem from occurring:

### Assigned number as continuation token

1.  Add an attribute ConfirmedSequenceNr to the order. 

2.  Use this value as the continuation token instead of the ChangeDate. 

3.  Whenever a change occurs, this value is set to -1. A scheduled event finds
    all orders that should be exposed via get-all and sets ConfirmedSequenceNr
    to the maximum plus 1.

Increasing the ConfirmedSequenceNr is now an operation in the same transaction
as retrieving the data, so all orders will be synchronized.

### Deleted data

In the order app, data cannot really be deleted. Instead, a delete is handled by
marking the object as “removed” using a boolean attribute. Soft-deleted objects
are excluded from use in the app through entity access rules and other XPath
constraints. This is seen as a normal change and processed in the data transfer
mechanism.

The billing app is free to decide how to handle deleted data and in the example
implementation also performs soft deletes. It is also possible to perform “hard”
deletes in the integration if necessary.

Continuing Workflow in another App
----------------------------------

Pulling data based on a timer causes a delay; the data is not imattachmentstely
available in the other app. In some scenarios, this is not acceptable. For
instance, when a user has created an order and wants to continue working with
that order in the billing app. We don’t want them to have to wait for the order
to by pulled into the billing app.

In this case, we could push the order into the billing app. However, we already
have a data replication mechanism based on pull, so we can reuse that.

When the order is finished in the order app, we deep link the user into the
billing app, passing the order id. The billing app pulls the order and shows the
page.

Error scenarios
---------------

The implemented case gracefully deals with several error scenarios:

1.  The order app is temporarily unavailable

    1.  Behaviour: The support app will keep retrying the pull with the same
        continuation token. As soon as the order app becomes available, it will
        start pulling all orders that have been changed in the mean time.

2.  The support app is temporarily unavailable

    1.  Behaviour: The deep link from the order app to the support app will show
        the ‘application unavailable’.

    2.  Resolution: Make sure there is a good [custom error
        page](https://docs.mendix.com/howto/ux/custom-error-page).

3.  While pulling, the order app returns an error (e.g. the ordering database is
    unavailable)

    1.  Behaviour: See error scenario 1, the support app will continue polling

4.  While pulling, the support app encounters an error (e.g. the support
    database is unavailable)

    1.  Behaviour: The support app does not update the continuation token. The
        next time, the pull is retried.

Recommendations
---------------

### Do’s

-   Use a REST service to share transactional data between apps.  
    *Reference implementation: The “Ordering” module publishes a REST endpoint
    in the “Ordering.OrderService” document. It has operations to get all
    confirmed orders and to get orders with a specific order number.*

-   Periodically pull the data from a client app, instead of pushing from the
    owner.  
    *Reference implementation: The billing module has a scheduled event
    “Billing.InvokePull” that does this every minute.*

-   Use a special-purpose assigned number to track which objects have been
    transferred, instead of a change date  
    *Reference implementation: Every Order in the Ordering app has an attribute
    “ConfirmedSequenceNr” which stores the number as described above. The
    scheduled event “InvokeUpdateConfirmedSequenceNumber” updates the numbers of
    changed objects.*

-   Provide a global identifier for shared data  
    *Reference implementation: Each order has an attribute “Number” that is used
    to uniquely identify order. In the owning Ordering module, this is an
    autonumber. In the client Billing module, this is a normal integer, but with
    “unique” validation.*

-   Handle deleted data as “soft deletes” in the owning app  
    *Reference implementation: The “Order” entity in the ordering app has a
    before-delete event that prevents a delete action from completing
    successfully. A deleted object should instead have the “State” attribute set
    to “Deleted”. The entity access security rules are set so that these objects
    are not visible to anyone. Any processing logic should also take this into
    account. Deleted objects are also returned by the published REST service so
    clients can see when objects are deleted.*

-   Consider a strategy to handle deleted data in a client  
    *Reference implementation: The “Order” entity in the billing app is also
    protected from deletion by a before-delete event. Deleted objects have the
    “Deleted” attribute set to true. This is automatically performed by the
    import mapping based on the state of the object as returned by the ordering
    app.*

-   Create clear (debug) log messages for the data transfer mechanism (e.g. how
    many records were new, changed, removed).  
    *Reference implementation: The integration microflows in the Billing module
    provide several debug- and trace-level messages which can be used to analyse
    the integration behaviour.*

-   Use deep links to transfer a user between apps  
    *Reference implementation: The Billing module provides a deep link at
    ‘/link/new_order’, which is used from the Ordering app to transfer the user.
    The transferring microflow is “Ordering.SendUserToBillingApp_Order”, the
    receiving microflow is “Billing.DL_NewOrder”.*

-   Re-use the existing asynchronous data transfer mechanism in a synchronous
    context if possible  
    *Reference implementation: The deep link microflow “Billing.DL_NewOrder”
    reuses the existing REST endpoints in the Ordering app to retrieve the right
    order just before showing the user the right page.*

### Don’ts

-   Use change-dates to decide which data to sync. It is possible to miss data
    in certain scenarios, leading to an inconsistent state
