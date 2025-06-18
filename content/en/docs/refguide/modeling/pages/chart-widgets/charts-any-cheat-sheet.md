---
title: "Any Chart Cheat Sheet"
url: /refguide/charts-any-cheat-sheet/
description: "Shows, with examples, how the most common types of chart can be configured using the Any Chart Widget"
weight: 50
---

## Introduction

This *cheat sheet* lists the most common chart types, together with a visual sample and the json required to create them. More chart types can be found at [https://plot.ly/javascript/](https://plot.ly/javascript/).

## Basic Charts

### Line Chart {#line-chart}

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/line-chart2.png" alt="LineChartProperties" class="no-border" >}}

``` json
[
  {
    "x": [ 1, 2 ],
    "y": [ 1, 2 ],
    "type": "scatter"
  },
  {
    "x": [ 3, 4 ],
    "y": [ 9, 14 ],
    "type": "scatter"
  }
]
```

### Bubble Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/bubble-chart.png" alt="BubbleChartProperties" class="no-border" >}}

``` json
[ {
  "x": [ 1, 2, 3 ],
  "y": [ 1, 2, 3 ],
  "marker": {
    "color": [ "red", "blue", "green" ],
    "size": [ 20, 50, 80 ]
  },
  "mode": "markers"
} ]
```

### Scatter Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/scatter-plot.png" alt="ScatterPlotProperties" class="no-border" >}}

``` json
[ {
  "x": [ 1, 2, 3 ],
  "y": [ 1, 2, 3 ],
  "text": [ "A", "B", "C" ],
  "textposition": "left center",
  "mode": "markers+text"
} ]
```

### Heatmap

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/heat-map2.png" alt="HeatMapProperties" class="no-border" >}}

``` json
[ {
  "z": [ [ 1, 2 ], [ 3, 4 ] ],
  "type": "heatmap"
} ]
```

### Bar Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/bar-chart2.png" alt="BarChartProperties" class="no-border" >}}

``` json
[ {
  "y": [ "giraffe", "elephant" ],
  "x": [ 2, 4 ],
  "type": "bar",
  "orientation": "h"
} ]
```

### Column Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/column-chart2.png" alt="ColumnChartProperties" class="no-border" >}}

``` json
[ {
  "x": [ "giraffe", "elephant" ],
  "y": [ 2, 4 ],
  "type": "bar",
  "orientation": "v"
} ]
```

### Pie Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/pie-chart2.png" alt="PieChartProperties" class="no-border" >}}

``` json
[ {
  "values": [ 10, 20, 30 ],
  "labels": [ "Uganda", "Netherlands", "US" ],
  "type": "pie"
} ]
```

### Doughnut Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/doughnut-chart.png" alt="DoughNutChartProperties" class="no-border" >}}

```json
[ {
  "values": [ 10, 20, 30 ],
  "labels": [ "Uganda", "Netherlands", "US" ],
  "hole": 0.4,
  "type": "pie"
} ]
```

### Area Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/area-chart2.png" alt="AreaChartProperties" class="no-border" >}}

``` json
[ {
  "x": [ 1, 2, 3 ],
  "y": [ 1, 2, 3 ],
  "mode": "scatter",
  "fill": "tonexty"
} ]
```

## Statistical Charts

### Histograms

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/histogram.png" alt="HistogramProperties" class="no-border" >}}

``` json
[ {
  "x": [ 0, 2, 1, 3, 4, 2 ],
  "type": "histogram"
} ]
```

### Box Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/box-plot.png" alt="BoxPlotProperties" class="no-border" >}}

``` json
[ {
  "x": [ 1, 2, 3, 4, 5 ],
  "type": "box"
} ]
```

### 2D Histogram

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/2d-histogram.png" alt="2DHistogramProperties" class="no-border" >}}

``` json
[ {
  "x": [ 1, 2, 3, 4, 5 ],
  "y": [ 1, 2, 3, 4, 5 ],
  "type": "histogram2d"
} ]
```

## Maps

### Bubble Map

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/bubble-map.png" alt="BubbleMapProperties" class="no-border" >}}

``` json
[ {
  "lon": [ 100, 400 ],
  "lat": [ 0, 0 ],
  "type": "scattergeo",
  "marker": {
    "color": [ "red", "blue" ],
    "size": [ 20, 50 ]
  },
  "mode": "marker"
} ]
```

### Choropleth Map

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/choropleth-map.png" alt="ChoroplethMapProperties" class="no-border" >}}

#### Choropleth Map Data

``` json
[ {
    "type": "choropleth",
    "locations": ["AZ", "CA", "VT"],
    "locationmode": "USA-states",
    "z": [10,20,40],
    "name": "Choropleth data"
} ]
```

#### Choropleth Map Layout

``` json
{ 
  "geo": { 
    "scope": "usa" 
  }
}
```

### Scatter Map

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/scatter-map.png" alt="ScatterMapProperties" class="no-border" >}}

``` json
[ {
  "lon": [ 12, 22 ],
  "lat": [ 42, 39 ],
  "type": "scattergeo",
  "text": [ "Rome", "Greece" ],
  "mode": "marker"
} ]
```

## 3D Charts

### 3D Surface Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/3d-surface-plot.png" alt="3DSurfacePlotProperties" class="no-border" >}}

``` json
[ {
  "colorscale": "Viridis",
  "z": [ [ 3, 5, 7, 9 ], [ 21, 13, 8, 5 ] ],
  "type": "surface"
} ]
```

### 3D Line Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/3d-line-chart.png" alt="3DLineChartProperties" class="no-border" >}}

``` json
[ {
  "x": [ 9, 8, 5, 1 ],
  "y": [ 1, 2, 4, 8 ],
  "z": [ 11, 8, 15, 3 ],
  "mode": "lines",
  "type": "scatter3d"
} ]
```

### 3D Scatter Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/3d-scatter-plot.png" alt="3DScatterPlotProperties" class="no-border" >}}

``` json
[ {
  "x": [ "9", "8", "5", "1" ],
  "y": [ "1", "2", "4", "8" ], 
  "z": [ "11", "8", "15", "3" ],
  "mode": "markers",
  "type": "scatter3d"
} ]
```

## Other Charts

### Contour Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/contour.png" alt="ContourProperties" class="no-border" >}}

``` json
[ {
  "z": [ [ 2, 2, 4, 11 ], [ 5, 14, 8, 11 ] ],
  "type": "contour"
} ]
```

### Time Series

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/time-series2.png" alt="TimeSeriesProperties" class="no-border" >}}

``` json
[ {
  "type": "scatter",
  "mode": "lines",
  "x": [ "2018-09-04", "2018-10-04", "2018-11-04", "2018-12-04", "2018-12-04" ],
  "y": [ 5, 2, 7, 10 ]
} ]
```

### Group By Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/group-by-chart.png" alt="GroupByChartProperties" class="no-border" >}}

``` json
[ {
    "type": "scatter",
    "x": [ "Arthur","Jolly","Daphine","Arthur","Jolly","Daphine" ],
    "y": [ 1, 6, 2, 5, 8, 1 ],
    "mode": "markers"
} ]
```

### Symmetric Error Bar

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/error-bar.png" alt="ErrorBarProperties" class="no-border" >}}

``` json
[ {
  "x": [ 0, 1, 2 ],
  "y": [ 6, 10, 2 ],
  "error_y": {
    "type": "data",
    "array": [ 4, 2, 3 ]
  },
  "type": "scatter"
} ]
```

### Polar Chart

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/polar-chart.png" alt="PolarChartProperties" class="no-border" >}}

``` json
[ {
  "type": "scatterpolar",
  "r": [ 34, 11, 39, 37, 34 ],
  "theta": [ "A", "B", "C", "D", "A" ],
  "fill": "toself"
} ]
```

### Ternary Plot

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-cheat-sheet/ternary-plot.png" alt="TernaryPlotProperties" class="no-border" >}}

#### Ternary Plot Data

``` json
[{
    "type": "scatterternary",
    "mode": "markers",
    "a": [ 5, 4, 5, 2, 10 ],
    "b": [ 2, 1, 15, 20, 8 ],
    "c": [ 1, 20, 5, 15, 10 ],
    "text":[ "point 1", "point 2", "point 3", "point 4", "point 5" ]
}]
```

#### Ternary Plot Layout

```json
{
  "ternary": {
    "sum":100
  }
}
```

## Read More

* Full chart documentation is here: [https://plot.ly/javascript/](https://plot.ly/javascript/)
* [Any Chart Widget](/refguide/charts-any-configuration/)
* [How to Use Any Chart](/appstore/widgets/charts-any-usage/)
