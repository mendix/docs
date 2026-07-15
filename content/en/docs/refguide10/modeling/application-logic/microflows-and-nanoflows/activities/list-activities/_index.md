---
title: "List Activities"
url: /refguide10/list-activities/
weight: 20
---

## Introduction

{{% alert color="info" %}}
List activities work differently in microflows and in nanoflows. In nanoflows, changes done to the lists in a sub-nanoflow are not reflected in the original nanoflow, whereas in microflows, such changes are reflected.{{% /alert %}}

When working with the Mendix Platform, you can use microflows to manipulate not only single objects but whole lists of entities with a single activity.

Additional activities which work on lists, [commit object(s)](/refguide10/committing-objects/), [delete object(s)](/refguide10/deleting-objects/), and [retrieve](/refguide10/retrieve/), are in the [Object Activities](/refguide10/object-activities/) section of the toolbox. You can also [loop](/refguide10/loop/) through a list to perform activities on the individual objects.

The activities described in this document are in the **List Activities** section of the **Toolbox**.

The following are the list activities you can use in your microflow or nanoflow:

* [Aggregate List](/refguide10/aggregate-list/) – calculates aggregated values over a list
* [Change List](/refguide10/change-list/) – adds objects to, and removes objects from a list
* [Create List](/refguide10/create-list/) – creates an empty list
* [List Operation](/refguide10/list-operation/) – performs actions on a list and, if the result is a list, returns a new list containing the result

## Read More

* [Activities](/refguide10/activities/)
