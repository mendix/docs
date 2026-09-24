---
title: "Use a Chart with a REST Data Source"
url: /appstore/widgets/charts-basic-rest/
weight: 60
description: "Describes how to plot data from a REST service in a chart by retrieving the data in a microflow and using that microflow as the chart's data source."
aliases:
    - /howto/front-end/charts-basic-rest/
---

## Introduction

With the Charts widget, you can plot data that comes from a REST service.

The widget does not call a REST service itself. Its data source accepts a database query (a microflow, a nanoflow, or an association) so you retrieve the REST data in a microflow and point the chart at that microflow.

This how-to teaches you how to do the following:

* Publish a REST API
* Retrieve the data from a REST service in a microflow
* Use that microflow as the data source for the Charts widget

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Create an app
* Import the latest [Charts Widgets](/appstore/widgets/charts/) from the Mendix Marketplace

## Setting up Data to be Exposed by a REST Endpoint

Mendix allows you to publish REST web services natively from Studio Pro. This how-to publishes a service first, so that there is an endpoint to consume in the next sections.

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

## Retrieving the REST Data in a Microflow

To make the published data available to the chart, consume the service and return its results from a microflow:

1. Add a [consumed REST service](/refguide/consumed-rest-service/) for the endpoint you published.
1. Add an [import mapping](/refguide/import-mappings/) that maps the JSON response to the **Value** entity.
1. Create a microflow named *DS_ValuesFromREST*.
1. In the microflow, add a [Call REST service](/refguide/call-rest-action/) activity that calls the endpoint and applies the import mapping.
1. Set the list of **Value** objects produced by the mapping as the return value of the microflow.

{{% alert color="info" %}}
The mapping can return non-persistable objects. The chart only reads the attributes you select for the axes, so the objects do not have to be committed to the database.
{{% /alert %}}

## Using the Microflow as a Chart Data Source

To plot the retrieved data, follow these steps:

1. Create a page in your app containing an **Area chart** widget.
1. Double-click the **Area chart** widget to open its properties.
1. On the **General** tab, in the **Data source** section, add a new **Series** item.
1. In the **General** section of the series, leave **Data set** set to **Single series**.
1. Set **Data source** to **Microflow** and select *DS_ValuesFromREST*.
1. Set **Series name** to the text that should appear in the legend.
1. Select the **X axis attribute** and the **Y axis attribute**.
1. Run your app and view the chart.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-rest/charts-rest-area-chart.png" alt="Area chart plotting data retrieved from a REST service" class="no-border" >}}

## Read More

* [Create a Basic Chart](/appstore/widgets/charts-basic-create/)
* [Create a Multiple Series Chart](/appstore/widgets/charts-dynamic-series/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
* [Use Charts Themes](/appstore/widgets/charts-theme/)
