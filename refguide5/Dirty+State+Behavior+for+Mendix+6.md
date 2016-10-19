---
title: "Dirty State Behavior for Mendix 6"
category: "Runtime"
space: "Reference Guide 5"
---
<div class="alert alert-info">{% markdown %}

State of this document: PROPOSAL

{% endmarkdown %}</div>

For the implementation of [Clustered Mendix Business Server](Clustered+Mendix+Business+Server) several aspects of the Mendix Business Server are evaluated. One of these aspects is the Dirty State Behavior in Mendix. This behavior needs to be changed in order to deliver better performance in clustered scenarios. This page describes the changes on the aspect of Dirty State Behavior and the impact on building solutions with Mendix. For the TL;DR: see the overview at the end of the page.

## Explanation of terminology

This page uses specific terminology to describe data in the Mendix Business Server. The picture shown below has been taken from the [Clustered Mendix Business Server](Clustered+Mendix+Business+Server) page:

![](attachments/16056891/16285792.png?effects=border-simple,shadow-kn)

In a short summary, this picture describes that all data coming from the Mendix Database is called `Clean State` while changed data and newly instantiated data are called `Dirty State`. 

## Background

In a clustered environment it is important to have the data accessible in all Mendix Business Server instances. For `Clean State` this is easy (it can be read from the database). For `Dirty State` it needs to be synchronized between the instances. The more data that needs to be synchronized, the more it influences the performance of the system. For that reason, the amount of `Dirty State` should be kept as minimal as possible.

## Old situation (prior to Mendix 6)

In Mendix versions prior to version 6, non persistent entities are stored in memory and are 'garbage collected' when no longer used. Garbage collection is a data intensive task, which is not possible to do in a clustered environment. Also, when external data (data retrieved from external web services or OData integrations) is stored as non persistent entities, the amount of non persistent entities in memory can grow quite quickly.

## New situation (from Mendix 6 onwards) [proposal]

### Configuration of backwards compatibility

Mendix 6 will introduce a backwards compatibility breaking change: non persistent objects will be garbage collected after every request, unless you explicitly state you want it available across requests. To facilitate this, there will be a `project setting` introduced <sup><sub>(TODO: name of setting)</sub></sup> allowing developers to _disable_ the new behavior for new projects (it's by default enabled). For existing projects, this setting will be automatically disabled. Having this setting disabled means that your project behaves in the way the Mendix versions prior to Mendix 6 behaved (for details see the overview of changes below). However, this also means that your project is not fit for clustered environments. To make it fit, you should rework the project such that it minimizes `Dirty State`.

### Change in Non Persistent Entities behavior

Non persistent entities will no longer be kept in the `Dirty State` until garbage collected or logout. The default behavior will be that the non persistent entities will be removed after the request has been handled. If a non persistent entity has to survive multiple requests, it has to be explicitly associated to the current session (`$currentSession` variable in Microflows or the Mendix `Session` object in Java). Note that doing so increases `Dirty State` and as such needs to be done cautiously.

### Change in External Data behavior

Data retrieved from external sources and converted into non persistent entities will no longer be kept in `Dirty State` until garbage collected or logout. They will be removed after the request has been handled. If the data needs to survive multiple requests, the checkbox `Keep data alive` needs to be checked on the External Webservice or OData integration point. Checking this checkbox will cause this data to be automatically associated with the current session. Note that doing so increases `Dirty State` and as such needs to be done cautiously.

## Overview/TL;DR

For an overview of changes in behavior, see the scenario matrix below. To understand it, the following behavior applies in the two possible states:

<table><thead><tr><th class="confluenceTh">Type of State</th><th colspan="1" class="confluenceTh">Type of Entities</th><th class="confluenceTh">Old behavior (&lt; Mendix 6)</th><th class="confluenceTh">New behavior (&gt;= Mendix 6)</th></tr></thead><tbody><tr><td class="confluenceTd">Clean State</td><td colspan="1" class="confluenceTd">Persistent</td><td class="confluenceTd">Not kept in memory by Mendix Business Server</td><td class="confluenceTd">idem</td></tr><tr><td colspan="1" class="confluenceTd">Clean State</td><td colspan="1" class="confluenceTd">Non Persistent</td><td colspan="1" class="confluenceTd">n/a</td><td colspan="1" class="confluenceTd">n/a</td></tr><tr><td colspan="1" class="confluenceTd">Dirty State</td><td colspan="1" class="confluenceTd">Persistent</td><td rowspan="2" class="confluenceTd"><span><br>Kept in memory, garbage collected after x pages or cleaned upon logout</span><span>, delete</span><span> or commit/rollback</span></td><td colspan="1" class="confluenceTd"><span>Kept in memory, c<span>leaned upon logout, delete or commit/rollback</span></span></td></tr><tr><td colspan="1" class="confluenceTd">Dirty State</td><td colspan="1" class="confluenceTd">Non Persistent</td><td colspan="1" class="confluenceTd"><span>Cleaned after request, unless associated to session (in the latter case cleaned upon logout or delete)</span></td></tr></tbody></table><div class="alert alert-info">{% markdown %}

As explained above: backwards compatibility can be enforced by a project setting

{% endmarkdown %}</div>

In scenarios this would lead to the following behavior:

<table><thead><tr><th class="confluenceTh">Scenario</th><th class="confluenceTh">Applicable State</th></tr></thead><tbody><tr><td class="confluenceTd">Datagrid based on database retrieve</td><td class="confluenceTd"><code>Clean State</code></td></tr><tr><td colspan="1" class="confluenceTd">Dataview after Datagrid with Persistent Entities, user changed attribute</td><td colspan="1" class="confluenceTd"><code>Dirty State</code> (with persistent entities)</td></tr><tr><td colspan="1" class="confluenceTd">Microflow creates Persistent Entity, shows page with entity</td><td colspan="1" class="confluenceTd"><code>Dirty State</code><span> (with persistent entities)</span></td></tr><tr><td colspan="1" class="confluenceTd">Microflow creates Non Persistent Entity, shows page with entity</td><td colspan="1" class="confluenceTd"><span><code>Dirty State</code><span> (with non persistent entities)</span></span></td></tr><tr><td colspan="1" class="confluenceTd">Microflow calls External Webservice, creates Persistent Entity</td><td colspan="1" class="confluenceTd"><span><code>Dirty State</code><span> (with persistent entities)</span></span></td></tr><tr><td colspan="1" class="confluenceTd">Microflow calls External Webservice, creates Non Persistent Entity</td><td colspan="1" class="confluenceTd"><span><code>Dirty State</code><span> (with non persistent entities)</span></span></td></tr></tbody></table>
