---
title: "Any Chart Widgets"
parent: "Chart Widgets"
---

## Any Charts
With the AnyChart it is possible to build all the chart types that are possible with Plotly.js and it allows you build highly dynamic charts. So if you want to build a 3D chart or have a dynamic set of series, the AnyChart is your friend.

The Any Charts can be configured with a JSON `Data` array and `Layout` object. The configuration can be set statically, via the `Source attribute` or with the `Sample data`. The data of the attribute will be merged into the static settings and will overwrite any common properties. The `Sample data` is for demo purposes at run time when there is no `Source attribute` selected or when rendering sample data in the web modeler preview.


## Data
### Static
Data JSON array based on https://plot.ly/javascript/reference/

### Source attribute
The attribute data will merge and overwrite 'Static' data.

### Sample data
Data for preview. It will be merged with the 'Static data' in the web modeler or at runtime when no 'Source attribute' is selected.

### Mode
The development mode adds a button to the charts when running the app which can be used to toggle a live editor for the advanced configuration options.

## Layout options
### Static
JSON object based on https://plot.ly/javascript/reference/.

### Source attribute
Attribute layout will merge and overwrite static layout options.

### Sample layout
Layout options for preview. It will be merged with the 'Static' in the web modeler or at runtime when no 'Source attribute' is selected

## Configuration options
The JSON containing the Plotly configuration options.

## Appearance
### Width unit
### Width
### Height unit
'Percentage of width' is the aspect ratio, 'Pixels' is absolute. Warning: When using 'Percentage of parent' the parent container must have an absolute height, else nothing is displayed.
### Height

## Events
TODO explain events based on data not objects

### Event entity
The entity used to pass the event data to the server.

### Event data attribute
The attribute to store received raw data from the chart event. https://plot.ly/javascript/plotlyjs-events/#event-data

### On click microflow
The microflow that will be executed on click.

### On click nanoflow
The nanoflow that will be executed on click.

### Tooltip form entity
The entity that will be returned by tooltip microflow, to be used in the tooltip form.

### Tooltip microflow
The microflow called on hover, returning the tooltip object for the tooltip form.

### Tooltip form
The form to show when a user hovers over a chart plot point, context uses 'Tooltip entity'.
