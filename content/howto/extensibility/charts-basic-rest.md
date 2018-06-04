---
title: "Use Charts REST data source"
parent: "charts-tutorials"
---

## 1 Introduction

{Add the introduction text here}

**This how-to will teach you how to do the following:**

* Create...
* Build...
* Configure...

## 2 Prerequisites

{If there are no prerequisites, leave this section out}

Before starting this how-to, make sure you have completed the following prerequisites:

* {Prerequisite 1}
* {Prerequisite 2}

## 3 {Title of Section [Use Present Participle Verb/Gerund]} 

To {do this task}, follow these steps:

1. {Step 1}
2. {Step 2}

![](attachments/{sub-folder with same name as doc file}/{image filename}.png)

### 3.1 {Title of Sub-Section}

## 4 Related Content

TODO Format content into template
# REST endpoint setup

* When retrieving data from a REST endpoint, a Data Point entity (non persistent entity) and the attribute(s) are required.

![Data Point entity](attachments/charts/data-point-entity.png)

* Create an export mapping which specifies how the entity relates to the JSON.

![Sample mapping export](attachments/charts/sample-mapping-export.png)

* Create a rest API which returns the Http response.

![REST microflow](attachments/charts/rest-microflow.png)

* Then publish the API.

![Published rest service](attachments/charts/published-rest-service.png)

For more information on publishing a rest API refer to Mendix [REST documentation](https://docs.mendix.com/refguide/published-rest-operation?utm_source=businessmodeler&utm_medium=software&utm_campaign=modeler)
