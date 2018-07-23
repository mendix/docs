---
title: "Any Chart Building Blocks"
parent: "chart-widgets"
---

## Introduction

Any Chart building blocks are pre-configured widgets with the basic properties of a chart already defined. It contains the sample **data** and **Layout** objects required create a chart. These objects are used demo purposes at run time when there is no Source attribute selected or when rendering sample data in the web modeler preview.

## Properties

The Any Chart building blocks have basic configuration essential for the widget. For a custom look of the chart, some changes need to be made. Below are the minimal properties that should be configured for the Any Chart widget.

### Data
The data to be plotted is described in an array usually called data, whose elements are trace objects of various types (e.g. scatter, bar etc) as documented in the [Full Reference](https://plot.ly/javascript/reference).

#### Static
Data JSON array based on https://plot.ly/javascript/reference/

#### Source attribute
The attribute data will merge and overwrite **Static** data.

#### Sample data
Data for preview. It will be merged with the **Static data** in the web modeler or at runtime when no **Source attribute** is selected.

#### Mode
The development mode adds a button to the charts when running the app which is used to toggle a live editor for the advanced configuration options.

### Layout options
The layout of the plot – non-data-related visual attributes such as the title, annotations etc – is described in an object usually called layout, as documented in the [Full Reference](https://plot.ly/javascript/reference/#layout).

#### Static
JSON object based on https://plot.ly/javascript/reference/.

#### Source attribute
Attribute layout will merge and overwrite static layout options.

#### Sample layout
Layout options for preview. It will be merged with the 'Static' in the web modeler or at runtime when no 'Source attribute' is selected

{{% alert type="info" %}}

For more a detailed configuration, see [Any Chart configurations](./charts-any-configuration)

{{% /alert %}}
