---
title: "Any Chart Cheat Sheet"
url: /refguide8/charts-any-cheat-sheet/
description: "Shows, with examples, how the most common types of chart can be configured using the Any Chart Widget"
weight: 50
tags: ["Any Chart", "Examples", "Charts", "Widget", "studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/charts-any-cheat-sheet.pdf).
{{% /alert %}}

## 1 Introduction

This *cheat sheet* lists the most common chart types, together with a visual sample and the json required to create them. More chart types can be found at [https://plot.ly/javascript/](https://plot.ly/javascript/).

## 2 Basic Charts

### 2.1 Line Chart {#line-chart}

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/line-chart2.png" alt="LineChartProperties" >}}

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

### 2.2 Bubble Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/bubble-chart.png" alt="BubbleChartProperties" >}}

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

### 2.3 Scatter Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/scatter-plot.png" alt="ScatterPlotProperties" >}}

``` json
[ {
  "x": [ 1, 2, 3 ],
  "y": [ 1, 2, 3 ],
  "text": [ "A", "B", "C" ],
  "textposition": "left center",
  "mode": "markers+text"
} ]
```

### 2.4 Heatmap

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/heat-map2.png" alt="HeatMapProperties" >}}

``` json
[ {
  "z": [ [ 1, 2 ], [ 3, 4 ] ],
  "type": "heatmap"
} ]
```

### 2.5 Bar Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/bar-chart2.png" alt="BarChartProperties" >}}

``` json
[ {
  "y": [ "giraffe", "elephant" ],
  "x": [ 2, 4 ],
  "type": "bar",
  "orientation": "h"
} ]
```

### 2.6 Column Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/column-chart2.png" alt="ColumnChartProperties" >}}

``` json
[ {
  "x": [ "giraffe", "elephant" ],
  "y": [ 2, 4 ],
  "type": "bar",
  "orientation": "v"
} ]
```

### 2.7 Pie Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/pie-chart2.png" alt="PieChartProperties" >}}

``` json
[ {
  "values": [ 10, 20, 30 ],
  "labels": [ "Uganda", "Netherlands", "US" ],
  "type": "pie"
} ]
```

### 2.8 Doughnut Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/doughnut-chart.png" alt="DoughNutChartProperties" >}}

```json
[ {
  "values": [ 10, 20, 30 ],
  "labels": [ "Uganda", "Netherlands", "US" ],
  "hole": 0.4,
  "type": "pie"
} ]
```

### 2.9 Area Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/area-chart2.png" alt="AreaChartProperties" >}}

``` json
[ {
  "x": [ 1, 2, 3 ],
  "y": [ 1, 2, 3 ],
  "mode": "scatter",
  "fill": "tonexty"
} ]
```

## 3 Statistical Charts

### 3.1 Histograms

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/histogram.png" alt="HistogramProperties" >}}

``` json
[ {
  "x": [ 0, 2, 1, 3, 4, 2 ],
  "type": "histogram"
} ]
```

### 3.2 Box Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/box-plot.png" alt="BoxPlotProperties" >}}

``` json
[ {
  "x": [ 1, 2, 3, 4, 5 ],
  "type": "box"
} ]
```

### 3.3 2D Histogram

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/2d-histogram.png" alt="2DHistogramProperties" >}}

``` json
[ {
  "x": [ 1, 2, 3, 4, 5 ],
  "y": [ 1, 2, 3, 4, 5 ],
  "type": "histogram2d"
} ]
```

## 4 Maps

### 4.1 Bubble Map

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/bubble-map.png" alt="BubbleMapProperties" >}}

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

### 4.2 Choropleth Map

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/choropleth-map.png" alt="ChoroplethMapProperties" >}}

#### 4.2.1 Choropleth Map Data

``` json
[ {
    "type": "choropleth",
    "locations": ["AZ", "CA", "VT"],
    "locationmode": "USA-states",
    "z": [10,20,40],
    "name": "Choropleth data"
} ]
```

#### 4.2.2 Choropleth Map Layout

``` json
{ 
  "geo": { 
    "scope": "usa" 
  }
}
```

### 4.3 Scatter Map

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/scatter-map.png" alt="ScatterMapProperties" >}}

``` json
[ {
  "lon": [ 12, 22 ],
  "lat": [ 42, 39 ],
  "type": "scattergeo",
  "text": [ "Rome", "Greece" ],
  "mode": "marker"
} ]
```

## 5 3D Charts

### 5.1 3D Surface Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/3d-surface-plot.png" alt="3DSurfacePlotProperties" >}}

``` json
[ {
  "colorscale": "Viridis",
  "z": [ [ 3, 5, 7, 9 ], [ 21, 13, 8, 5 ] ],
  "type": "surface"
} ]
```

### 5.2 3D Line Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/3d-line-chart.png" alt="3DLineChartProperties" >}}

``` json
[ {
  "x": [ 9, 8, 5, 1 ],
  "y": [ 1, 2, 4, 8 ],
  "z": [ 11, 8, 15, 3 ],
  "mode": "lines",
  "type": "scatter3d"
} ]
```

### 5.3 3D Scatter Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/3d-scatter-plot.png" alt="3DScatterPlotProperties" >}}

``` json
[ {
  "x": [ "9", "8", "5", "1" ],
  "y": [ "1", "2", "4", "8" ], 
  "z": [ "11", "8", "15", "3" ],
  "mode": "markers",
  "type": "scatter3d"
} ]
```

## 6 Other Charts

### 6.1 Contour Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/contour.png" alt="ContourProperties" >}}

``` json
[ {
  "z": [ [ 2, 2, 4, 11 ], [ 5, 14, 8, 11 ] ],
  "type": "contour"
} ]
```

### 6.2 Time Series

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/time-series2.png" alt="TimeSeriesProperties" >}}

``` json
[ {
  "type": "scatter",
  "mode": "lines",
  "x": [ "2018-09-04", "2018-10-04", "2018-11-04", "2018-12-04", "2018-12-04" ],
  "y": [ 5, 2, 7, 10 ]
} ]
```

### 6.3 Group By Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/group-by-chart.png" alt="GroupByChartProperties" >}}

``` json
[ {
    "type": "scatter",
    "x": [ "Arthur","Jolly","Daphine","Arthur","Jolly","Daphine" ],
    "y": [ 1, 6, 2, 5, 8, 1 ],
    "mode": "markers"
} ]
```

### 6.4 Symmetric Error Bar

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/error-bar.png" alt="ErrorBarProperties" >}}

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

### 6.5 Polar Chart

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/polar-chart.png" alt="PolarChartProperties" >}}

``` json
[ {
  "type": "scatterpolar",
  "r": [ 34, 11, 39, 37, 34 ],
  "theta": [ "A", "B", "C", "D", "A" ],
  "fill": "toself"
} ]
```

### 6.6 Ternary Plot

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/charts-any-cheat-sheet/ternary-plot.png" alt="TernaryPlotProperties" >}}

#### 6.6.1 Ternary Plot Data

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

#### 6.6.2 Ternary Plot Layout

```json
{
  "ternary": {
    "sum":100
  }
}
```

## 7 Read More

* Full chart documentation is here: [https://plot.ly/javascript/](https://plot.ly/javascript/)
* [Any Chart Widget](/refguide8/charts-any-configuration/)
* [How to Use Any Chart](/howto8/front-end/charts-any-usage/)
