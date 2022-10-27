---
title: "Click Coordinates"
url: /addons/ats-addon/rg-one-click-coordinates/
---

## 1 Description

Moves to a certain point on the current page and clicks it. The actual system mouse pointer is not moved. 

## 2 Usage

Pass the horizontal and vertical coordinates as X and Y offset. By default, the upper-left corner of the current page is used as point of origin.

If you want to start from a reference element, pass in the desired reference element. ATS will use the upper left corner of the reference element as new point of origin for calculating the desired click-position.

## 3 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- | ---------------
X Offset | Integer | Yes | The horizontal coordinate to move to, from the upper-left corner of either the page or the given reference element.
Y Offset | Integer | Yes | The vertical coordinate to move to, from the upper-left corner of either the page or the given reference element.
Reference Element | WebElement | No | If given, the reference element is used as point of origin for measuring the coordinates.
