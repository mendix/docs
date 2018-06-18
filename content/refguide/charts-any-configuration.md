---
title: "Any Chart Widgets"
parent: "Chart Widgets"
---

## Any Charts
With the Any Chart, you can build all the chart types that are possible with Plotly.js and highly dynamic charts as well. So if you want to build a 3D chart or have a dynamic set of series, the Any Chart is your friend.

The configuration of this chart type is complex and it is recommended to start of the building blocks that are delivered in the [Any Chart module](https://appstore.home.mendix.com/link/app/106517/) from the Mendix App Store. Alternative use the [Any Chart cheat sheet](./charts-any-cheat-sheet) for a quick start

The Any Charts can be configured with a JSON **Data** array and **Layout** object. The configuration can be set statically, via the **Source attribute** or with the **Sample data**. The data of the attribute will be merged into the static settings and will overwrite any common properties. The Sample data is for demo purposes at run time when there is no Source attribute selected or when rendering sample data in the web modeler preview.

## Data
The data to be plotted is described in an array usually called data, whose elements are trace objects of various types (e.g. scatter, bar etc) as documented in the [Full Reference](https://plot.ly/javascript/reference).

### Static
Data JSON array based on https://plot.ly/javascript/reference/

### Source attribute
The attribute data will merge and overwrite 'Static' data.

### Sample data
Data for preview. It will be merged with the 'Static data' in the web modeler or at runtime when no 'Source attribute' is selected.

### Mode
The development mode adds a button to the charts when running the app which is used to toggle a live editor for the advanced configuration options.

## Layout options
The layout of the plot – non-data-related visual attributes such as the title, annotations etc – is described in an object usually called layout, as documented in the [Full Reference](https://plot.ly/javascript/reference/#layout).

### Static
JSON object based on https://plot.ly/javascript/reference/.

### Source attribute
Attribute layout will merge and overwrite static layout options.

### Sample layout
Layout options for preview. It will be merged with the 'Static' in the web modeler or at runtime when no 'Source attribute' is selected

## Configuration options
The JSON containing the Plotly configuration options.  
High-level configuration options for the plot, such as the scroll/zoom/hover behavior, is described in an object usually called config, as [documented here](https://plot.ly/javascript/configuration-options).  
The difference between **config** and **layout** is that layout relates to the content of the plot, whereas config relates to the context in which the plot is being shown.

### Appearance
The appearance settings are use to set dimension of the chart

#### Width unit
The type of units which are used for the **Width** property: Percentage or Pixels

#### Width
The width of the chart in pixels or percentage based on the **Width unit** setting.

#### Height unit
'Percentage of width' is the aspect ratio, 'Pixels' is absolute. Warning: When using 'Percentage of parent' the parent container must have an absolute height, else nothing is displayed.

#### Height
The height in pixels or percentage based on the settings of the **Height unit**

## Events
Data in the any chart is not directly related to data object in the Mendix server. So the event will share chart event data. https://plot.ly/javascript/plotlyjs-events/#event-data
This JSON data is stored in the **Data attribute** and should interpreted by the developer.

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
The microflow called on hover receives an event object of the type **Event entity** with the **Event data attribute** containing the JSON event data. The data should interpret and an object of the type **Tooltip form entity** needs to be returned. The chart will show **Tooltip form** the returned object.

### Tooltip form
The form to show when a user hovers over a chart plot point, context uses **Tooltip entity**.
