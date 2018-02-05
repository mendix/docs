---
title: "Community Best Practices for App Performance"
category: "Best Practices"
---

{{% alert type="warning" %}}

This document is created by and for the Mendix community. It collects performance best practices in the form of do's and don'ts.

{{% /alert %}}

## Introduction

A must-have for your app is that it performs well. Your users will not accept anything else, and they will choose alternatives if the performance is not good. This document describes some best practices to apply during development to in order to get a better performing app.

To put the best practices in perspective, let's quote some of the giants. First, Einstein's "Everything should be made as simple as possible, but no simpler," and next, programming giant Donald Knuth's "Premature optimization is the root of all evil." Both of these quotes suggest refraining from difficult constructs for the sake of performance unless you really need them and have already investigated simpler alternatives. You might need a load test and good measurement tooling, but those are out of the scope of this best practise.

Other best practices might conflict with performance best practices. For example, security might require event handlers, and performance requires minimizing them. Good architecture is often a trade-off between different quality aspects. So, make motivated choices.

This document is organized in sections covering parts of the Mendix Modeler where you can consider performance:

* Domain models (with a special section on indexes)
* Microflows
* Pages

Other sections cover parts of the infrastructure for special performance considerations in Mendix domain specific languages, such as XPath, expressions, and OQL.

## Domain Models

If you made a simple and sound design of the app's domain models, consider the following points so that the app performs well:

* Create indexes on entities that will get more than 100 records and that will be searched by anything besides Mendix references/IDs.
* Minimize the use of calculated attributes, as they fire on every retrieve and per row for a list retrieve. Since Mendix 7.x, you seldom need these for conditional visibility.
* Minimize the use and work of event handlers, because they fire on every event (for example, commit).
* Minimize the use of reference set associations. Mendix retrieves the IDs (per row for a list retrieve) on every query. So, many references—and especialy reference sets—cause extra queries and thus extra load on the database.
* Consider archiving data if your volume grows too large and you do not need all the data all the time. You can even consider creating two identical entities, one with the data currently being used, and the other with all the data that is only used for reporting or other historic reasons.
* Consider denormalizing the data, which means copying attribute values to other entities. This is so the data is not retrieved every time from the source. If data does not change a lot, this can save a lot of queries. However, you need to build the logic to keep the copied attributes in sync!
* Don't use multiple levels of inheritance and too many specializations on entities that will contain a substantial amount of data, especially when you are using domain model XPath access on entities. This will generate complex queries adding XPaths for every specialization's security rules and, on a large data set, will lead to slow queries. Consider the following alternatives:
    * Combine attributes in one entity and add an enum to determine its specialization.
    * Add separate entities for specializations with a 1:1 relation. Depending on UI needs, this 1:1 relation might be a normal reference from specialization to generalization to save prefetching time.
    * Add a non-persistent layer with inheritance that is populated by your business logic.
* Don't use temporary associations on persistent entities. Use a non-persistent entity for your screen/UI logic here.

{{% alert type="info" %}}

Mendix 7 is said to have optimized the retrieves, so not every association ID is loaded on every retrieve. This needs further investigation.

{{% /alert %}}

## Indexes

Indexes is a topic with a long history of best practices from the database world. For Mendix apps, the following best practises apply:

* Create as many indexes as needed. Although every index takes up space and the `insert`, `update`, and `delete` statements will be a bit slower, your queries will benefit a lot.
* Since Mendix will retrieve the object for you with all of its columns, your index is needed for two reasons. The first reason is to get the unique internal Mendix IDs fast. The second reason is for sorting.
* You only need to cover your search clauses and sort clauses, preferably in one index.
* Don't create different indexes that start with the same attributes.
* As a rule of thumb, try to minimize the number of index columns. Stay below three, or use a maximum of five.
* Start with the most selective attribute, although you need to consider that searches on single attribute can only use indexes that start with that attribute.
* Indexes can be used best for equal searches, ranges searches for dates and numbers, and leading/`startsWith` searches on strings.
* Index scans can be done to match more difficult clauses like `contains` or `endsWith`. These are still faster then full table scans.

## Microflows

* Minimize the work in loops. 
    * Do commits after the loop in a list commit. 
    * If needed, create a list named **<Entity>_CommitList** before the loop and collect the items to be committed there.
    * For retrieves in a loop, consider retrieving all the data before the loop, and do finds on that list inside the loop.
    * If loops contain splits, consider if the split logic can be a query before the loop to minimize iterations.
* Prevent unnecessary retrieves if objects or lists can be passed as parameters.
* Know and use the retrieve + aggregate optimization. If you retrieve a list and count the list, Mendix will optimize this to one query. If you need the list later in the microflow, after some splits, it is wise to retrieve the list again so that you only retrieve the data when needed. This also works in batches where you can retrieve the total count optimized and retrieve chunks in a separate query.
* Use the retrieve over association if possible. This uses caching, it is more readable, and it uses an index. If business logic requires the database value (because the value over association might be changed), then of course a database retrieve is needed.
* Commit as late as possible. A commit locks that record (or list of records). This means that any other user/logic that wants to commit the same object has to wait until the first transaction is finished.
* To prevent locking, do scheduled events that commit data in small chunks. This is so the data does not get locked over a longer period of time.

## Pages

* Keep it simple. If possible, split up into multiple pages. Think of mobile app logic and not of all-in-one-screen logic
* Minimize the data sent by using, for example, chunking or security to prevent data sent to the client.
* Try to prevent multiple identical data sources, since they load the object multiple times.
* Minimize conditional visibility.
* Give the user feedback. If this takes more than a few seconds, provide a progress indication.
* Do work asynchronously if the user does not have to wait for the result. For example, sending mails or updating other apps over an interface should never be something the user is waiting on in the UI. For running work asynchronously, there are options in the [Community Commons Function Library](https://appstore.home.mendix.com/link/app/170/Mendix/Community-Commons-Function-Library) in the Mendix App Store to run microflows in the background or have a process queue to control the load and prevent peaks in background work.

## Infrastructure

* Get better infrastructure (for example, more App Engines in the Mendix Cloud).
* When on premises, make sure a proxying web server is placed in front of Mendix to serve static content and compress data.

## XPath

* Avoid "unequal" and "not" clauses in XPath. Often they can be rewritten to positive statements, like `<boolean>=false()`, `<enum> = valueA`, `<enum> = valueB`, `integer>valueA`, or `integer<valueB`.
* Combine paths to the same assoicated entity if query logic allows this.
* In older PostgreSQL databases, it was wise to start the XPath with attribute clauses, since the database query optimizer was processing clauses in order. Nowadays, it is claimed that the query optimizer has improved, and this "rule" is no longer needed.
* Make sure that the attributes used are indexed.

## OQL

For OQL, many of the same best practices apply as for XPath.

* Note that OQL queries do not get domain model security, so you might need to add extra clauses when applicable (for example, in multi-tenant apps).

## Security

* Minimize the number of roles per user.
* Minimize the number of rules per entity.

## Web Services and XML

* Use SHA256 instead of BCrypt
* Validating against schema slows down the processing.
* Using sub-transactions for microflows slows down processing.
