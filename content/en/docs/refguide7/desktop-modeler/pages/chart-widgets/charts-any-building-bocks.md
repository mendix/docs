---
title: "Any Chart Building Blocks"
url: /refguide7/charts-any-building-bocks/
description: "A reference guide to the Any Chart building blocks which are provided as part of the Any Chart widget"
weight: 40
tags: ["Any Chart", "Charts", "Building Blocks", "Widget", "Desktop Modeler"]
---

## 1 Introduction

Any Chart is a widget which is available in the Mendix app store here: [Any Chart](/appstore/modules/any-chart/) module. The Any Chart widget enables you to build all the chart types that are possible with Plotly.js. More about Plotly.js is available here: https://plot.ly/javascript/reference/.

Any Chart building blocks are pre-configured page building blocks with the basic properties of a chart already defined. They can be placed on a Mendix page in the same way as any other widget or building block. They contain samples of the **data** and **Layout** objects which are required to create a chart. These objects are used for demo purposes at run time when there is no Source attribute selected or when rendering sample data in the Studio preview.

## Properties

The Any Chart building blocks contain the basic configuration essential for the widget. Some changes need to be made to customize the look of the chart. The properties below should, as a minimum, be configured when placing an Any Chart building block in your app.

Open the properties of an Any Chart widget by double-clicking on the widget.

### Data
The data to be plotted is described in an array usually called data, whose elements are trace objects of various types (for example, scatter, bar etc) as documented in the [Full Reference](https://plot.ly/javascript/reference).

#### Static
A data JSON array based on https://plot.ly/javascript/reference/.

#### Source attribute
The attribute data will merge and overwrite **Static** data.

#### Sample data
Data for preview. It will be merged with the **Static data** in Mendix Studio or at runtime when no **Source attribute** is selected.

#### Mode
The development mode adds a button to the charts when running the app which is used to toggle a live editor for the advanced configuration options.

### Layout Options
The layout of the plot – non-data-related visual attributes such as the title or annotations – is described in an object usually called layout, as documented in the [Full Reference](https://plot.ly/javascript/reference/#layout).

#### Static
A JSON object based on https://plot.ly/javascript/reference/.

#### Source attribute
The attribute layout will merge and overwrite static layout options.

#### Sample layout
Layout options for preview. It will be merged with the 'Static' in Mendix Studio or at runtime when no 'Source attribute' is selected.

{{% alert color="info" %}}
For more a detailed description of Any Chart configuration, see [Any Chart Widgets](/refguide7/charts-any-configuration/)
{{% /alert %}}
