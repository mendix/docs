---
title: "Use Charts REST data source"
parent: "charts-tutorials"
---

## 1 Introduction

With the Charts widget, you can use data from a REST Service to plot graphs.

**This how-to will teach you how to do the following:**

* Use a REST end point as a data source for the Charts widget
* Publish a REST API

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the Latest mendix modeler
* Download latest [Charts Widget](https://appstore.home.mendix.com/link/app/105695/) from the Mendix App Store

## 3 Data source

To create a REST Data source end point, follow these steps:

1. Open a project with a Charts widget
2. Open the page with the Charts widget
3. Double click on the Charts widget
4. In the tab **Chart properties**, add new Chart **Series** property  
![Chart Rest Series](attachments/charts/charts-rest-series.png)
5. Add **Series name** and **Entity**  
![Values entity](attachments/charts/charts-entity.png)  
6. Select **Data source** REST endpoint  
7. Add the **REST URL**  
![Chart Rest URL](attachments/charts/charts-rest-url.png)
8. In the tab **Data points**, select the **X-axis data attribute** and the **Y-axis data attribute**  
![select Data Points](attachments/charts/charts-data-points.png)

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
