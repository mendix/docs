---
title: "Retrieve and manipulate batches of objects"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to retrieve batches of objects, manipulate them and commit them in an efficient way using version 4 features. In version 3 you would have to write quite some Java code to accomplish the same (e.g. batches, retrieving with limit and offset).

## Instructions

![](attachments/819203/917932.png) Create a microflow and create two variables, one for limit and one for offset. Initialize limit on the size you would like the batches to have. Initialize offset on zero.

![](attachments/819203/917932.png) Create a while loop by first putting a merge and then a split which returns to the merge as long as there are batches of objects to process.

![](attachments/819203/917932.png) Put the meat of the microflow between the merge and the split. Retrieve a batch of objects using the defined limit and offset variables. Afterwards manipulate the objects by changing, committing or deleting them.

<div class="alert alert-warning">{% markdown %}

When deleting batches of objects the offset should always be equal to zero as all retrieved objects are removed from the table they are in, which means the next batch starts at zero again.

{% endmarkdown %}</div>

![](attachments/819203/917932.png) All done! See the picture below for an example.

![](attachments/2621441/2752513.png)