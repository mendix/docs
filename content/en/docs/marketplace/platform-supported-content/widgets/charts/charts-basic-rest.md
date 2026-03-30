---
title: "Use a Chart with a REST Data Source"
url: /appstore/widgets/charts-basic-rest/
weight: 60
aliases:
    - /howto/front-end/charts-basic-rest/
---

## Introduction

With the Charts widgets, you can use data from a REST Service to plot graphs.

This how-to teaches you how to do the following:

* Publish a REST API
* Use a REST endpoint as a data source for the Charts widget

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Create an app
* Import the latest [Charts Widgets](/appstore/widgets/charts/) from the Mendix Marketplace

## Setting up Data to be Exposed by a REST Endpoint

Mendix allows you to publish REST Web services natively from Studio Pro. Using these capabilities you can publish a REST service and use it in our Charts widget to plot graphs.

To create an Area Chart with data from a REST service, follow these steps:

{{% alert color="info" %}}

For more information on publishing a REST API refer to this Mendix document: [Published REST Operation](/refguide/published-rest-operation/)

{{% /alert %}}

1. Create a new Module in your app.
1. Rename the module to *ChartsREST*.
1. Open the Domain model.
1. Create **Value** and **Series** entities with the attributes and association shown in the picture below.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-domain.png" alt="Chart Rest Domain" class="no-border" >}}  
1. Right-click **Value** and select **Generate overview pages...**.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-rest-generate-overview-pages.png" alt="Chart Rest Enter Data" class="no-border" >}}
1. Add the **Value_NewEdit** page generated to your navigation.
1. Run the app.
1. In your browser, open the NewEdit page.
1. Add values and series by entering data in the appropriate fields.

## Publishing the Service

To use data from a model in the REST service, you need to create a JSON structure.

### Creating the Structure

1. Create a **JSON Structure**  
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/chart-series-json-structure.png" alt="Charts Rest MD" class="no-border" >}}

### Configuring the REST Service

To configure the REST service, follow these steps:

1. Add **Published REST service**.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-publish.png" alt="Charts Rest Publish" class="no-border" >}}

1. Add REST Service **Microflow**.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-microflow.png" alt="Charts Rest Microflow" class="no-border" >}}

1. Add **Export mapping**.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-export-mapping.png" alt="Charts Rest Export Mapping" class="no-border" >}}

## Using REST as a Data Source

To use the REST Data source endpoint in your chart, follow these steps:

1. Create a page in your app containing an **Area chart** widget.

1. Double-click the **Area chart** widget.

1. In the tab **Chart properties**, add a new chart **Series** property.

1. Add **Series name** and **Entity**.

1. Select **Data source** REST endpoint.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-series.png" alt="Chart Rest Series" class="no-border" >}}

1. Add the **REST URL**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-url.png" alt="Chart Rest URL" class="no-border" >}}

1. In the tab **Data points**, select the **X-axis data attribute** and the **Y-axis data attribute**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-data-points.png" alt="select Data Points" class="no-border" >}}  

1. Add Parameters to the REST Request. The **contextId**, **series name** are provided by default.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-parameters.png" alt="select Data Points" class="no-border" >}} 

1. Run your app and view the chart.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-area-chart.png" alt="Show Chart" class="no-border" >}}

## Read More

* [Use Chart Data Source REST](/howto/front-end/charts-basic-create/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
* [Use Theme Charts](/howto/front-end/charts-theme/)
