---
title: "Community Best Practices for App Performance"
linktitle: "Best Practices for App Performance"
url: /refguide9/community-best-practices-for-app-performance/
weight: 15
description: "Describes some best practices to apply during development to get a better performing app. This document is created by and for the Mendix community."
aliases:
    - /howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7.html
    - /howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7
    - /howto9/general/community-best-practices-for-app-performance/
---

## Introduction

{{% alert color="info" %}}

This document is created by and for the Mendix community. It collects performance best practices in the form of dos and don'ts.

{{% /alert %}}

A must-have for your app is that it performs well. Your users will not accept anything else, and they will choose alternatives if the performance is not good. This document describes some best practices to apply during development to in order to get a better performing app.

To put the best practices in perspective, let us quote some of the giants. First, Einstein's "Everything should be made as simple as possible, but no simpler." And next, programming giant Donald Knuth's "Premature optimization is the root of all evil." Both of these quotes suggest refraining from difficult constructs for the sake of performance unless you really need them and have already investigated simpler alternatives. You might need a load test and good measurement tooling, but that is out of the scope of this document.

Other best practices might conflict with performance best practices. For example, security might require event handlers, and performance requires minimizing them. Good architecture is often a trade-off between different quality aspects. So, make motivated choices.

This document contains sections covering parts of Mendix Studio Pro where you can consider performance for domain models (with a special section on indexes), microflows, and pages. Other sections cover parts of the infrastructure for special performance considerations in Mendix domain-specific languages, such as XPath, expressions, and OQL.

## Domain Model Best Practices

If you made a simple and sound design of the app's domain models, consider the following points so that the app performs well:

* Create indexes on entities that will get more than 100 records and that will be searched by anything besides Mendix references/IDs.
* Minimize the use of calculated attributes, as they fire on every retrieve and per row for a list retrieve. You seldom need these for conditional visibility.
* Minimize the use and work of event handlers, because they fire on every event (for example, commit).
* Minimize the use of reference set associations. Mendix retrieves the IDs (per row for a list retrieve) on every query. So, many references—and especially reference sets—cause extra queries and thus extra load on the database.
* Consider archiving data if your volume grows too large and you do not need all the data all the time. You can even consider creating two identical entities, one with the data currently being used, and the other with all the data that is only used for reporting or other historic reasons.
* Consider denormalizing the data, which means copying attribute values to other entities. This is so the data is not retrieved every time from the source. If data does not change a lot, this can save a lot of queries. However, you need to build the logic to keep the copied attributes in sync!
* Do not use multiple levels of inheritance and too many specializations on entities that will contain a substantial amount of data, especially when you are using domain model XPath access on entities. This will generate complex queries adding XPaths for every specialization's security rules and, on a large dataset, will lead to slow queries. Consider the following alternatives:
    * Combine attributes in one entity and add an enumeration to determine its specialization.
    * Add separate entities for specializations with a one-to-one relation. Depending on UI needs, this one-to-one relation might be a normal reference from specialization to generalization to save prefetching time.
    * Add a non-persistable layer with inheritance that is populated by your business logic.
* Do not use temporary associations on persistable entities. Use a non-persistable entity for your screen/UI logic here.
* Avoid using more than one [association](/refguide9/associations/) between entities, especially if such associations give different access levels. Instead, use [enumerations](/refguide9/enumerations/) within one of the entities, or add an intermediary entity between the entities that contains an enumeration with the association type. For example, if different user types are accessing a document, do not create the associations **Document_Owner**, **Document_Editor**, **Document_Viewer**, etc. Instead, add an intermediary entity named **DocumentAccess** between the entities that contains an enumeration named **AccessType**, with the possible values of **Owner**, **Editor**, and **Viewer**.

## Index Best Practices

Indexes is a topic with a long history of best practices from the database world. For Mendix apps, the following best practices apply:

* Create as many indexes as needed. Although every index takes up space and the `insert`, `update`, and `delete` statements will be a bit slower, your queries will benefit a lot.
* Since Mendix will retrieve the object for you with all of its columns, your index is needed for two reasons. The first reason is to get the unique internal Mendix IDs fast. The second reason is for sorting.
* You only need to cover your search clauses and sort clauses, preferably in one index.
* Don't create different indexes that start with the same attributes.
* As a rule of thumb, try to minimize the number of index columns. Stay below three, or use a maximum of five.
* Start with the most selective attribute, although you need to consider that searches on single attribute can only use indexes that start with that attribute.
* Indexes can be used best for equal searches, ranges searches for dates and numbers, and leading/`startsWith` searches on strings.
* Index scans can be done to match more difficult clauses like `contains` or `endsWith`. These are still faster then full table scans.

## Microflow Best Practices {#microflow-community-best-practices}

* Minimize the work in loops:
    * Do commits after the loop in a list commit. 
    * If needed, create a list named `<Entity>_CommitList` before the loop and collect the items to be committed there.
    * For retrieves in a loop, consider retrieving all the data before the loop, and do finds on that list inside the loop.
    * If loops contain decisions, consider if the decision logic can be a query before the loop to minimize iterations.
* Prevent unnecessary retrieves if objects or lists can be passed as parameters.
* Know and use the retrieve + aggregate optimization. If you retrieve a list and count the list, Mendix will optimize this to one query. If you need the list later in the microflow, after some decisions, it is wise to retrieve the list again so that you only retrieve the data when needed. This also works in batches where you can retrieve the total count optimized and retrieve chunks in a separate query.
* Use the retrieve over association if possible. This uses caching, it is more readable, and it uses an index. If business logic requires the database value (because the value over association might be changed), then of course a database retrieve is needed.
* Commit as late as possible. A commit locks that record (or list of records). This means that any other user/logic that wants to commit the same object has to wait until the first transaction is finished.
* To prevent locking, do scheduled events that commit data in small chunks. This is so the data does not get locked over a longer period of time.

## Page Best Practices

* Keep it simple. If possible, split up into multiple pages. Think of mobile app logic and not of all-in-one-screen logic.
* Minimize the data sent by using, for example, chunking or security to prevent data sent to the client.
* Try to prevent multiple identical data sources, since they load the object multiple times.
* Minimize conditional visibility.
* Give the user feedback. If this takes more than a few seconds, provide a progress indication.
* Do work asynchronously if the user does not have to wait for the result. For example, sending mails or updating other apps over an interface should never be something the user is waiting on in the UI. For running work asynchronously, there are options in the [Community Commons Function Library](/appstore/modules/community-commons-function-library/) in the Mendix Marketplace to run microflows in the background or have a [task queue](/refguide9/task-queue/) to control the load and prevent peaks in background work.
* When using a filter via an attribute from an associated entity in a data grid, restricting possible options is suggested in the drop-down search field so that only objects that have an association to the entity in the grid are fetched. For example scenario, you have a grid for the **Order** entity where you want to add a drop-down search field to filter by **Order_Customer/Customer/Name**. It would be beneficial to add the following [XPath](/refguide9/xpath/) constraint to the drop-down search field: `[Order_Customer/Order]`. That way only **Customer**s with **Order**s will be available in the drop-down search. This is necessary because in some databases, filtering by non-existing criteria is slow, even if all indices are in place.

## Infrastructure Best Practices

* Get better infrastructure (for example, more App Engines in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)).
* When on premises, make sure a proxying web server is placed in front of Mendix to serve static content and compress data.

## XPath Best Practices

* Avoid "unequal" and "not" clauses in XPath. Often they can be rewritten to positive statements, like `<boolean>=false()`, `<enumeration> = valueA`, `<enumeration> = valueB`, `integer>valueA`, or `integer<valueB`.
* Combine paths to the same associated entity if query logic allows this.
* In older PostgreSQL databases, it was wise to start the XPath with attribute clauses, since the database query optimizer was processing clauses in order. Nowadays, it is claimed that the query optimizer has improved, and this "rule" is no longer needed.
* Make sure that the attributes used are indexed.
* If a role has two access rules for the same entity, one giving read-only access, and another giving read and write access, do not make those access rules exclusive. Make the read-only rule include the read and write rule. For example, if access level is based on a boolean attribute `Editable`, create two access rules: the first granting read-only access to all objects (no constraint) and the second granting read and write access to some objects (constraint: `[Editable = true()]`). Do not add the constraint `[Editable = false()]` to the first access rule as this creates unnecessary complexity in the resulting SQL.

## OQL Best Practices

For OQL, many of the same best practices apply as for XPath.

* Note that OQL queries do not get domain model security, so you might need to add extra clauses when applicable (for example, in multi-tenant apps).

## Security Best Practices

* Minimize the number of roles per user.
* Minimize the number of rules per entity.

## Web Services and XML Best Practices

* Use SSHA256 instead of BCrypt.
* Validating against schema slows down the processing.
* Using sub-transactions for microflows slows down processing.

## MxAssist Performance Bot

[MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/) can help you find potential improvements to your app for better performance. It can be accessed via **View** > **MxAssist Performance Bot**.

For more information on performance best practices, see [Performance Best Practices](/refguide9/performance-best-practices/).
