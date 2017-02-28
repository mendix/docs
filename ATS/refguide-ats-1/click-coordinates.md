---
title: "Click Coordinates"
space: "ATS Add-On" 
parent: "selenium-actions"
---

## Description

Moves to a certain point on the current page and clicks it. The actual system mouse cursor is not moved. 


## Usage

Pass the horizontal and vertical coordinates as X and Y offset. By default, the upper left corner of the current page is used as point of origin.
If you want to start from a reference element, pass in the desired 
reference element. ATS will use the upper left corner of the reference element as new point of origin for calculating the desired 
click-position.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- | ---------------
X Offset | Integer | yes | The horizontal coordinate to move to, from the top left corner of either the page or the given reference element.
Y Offset | Integer | yes | The vertical coordinate to move to, from the top left corner of either the page or the given reference element.
Reference Element | WebElement | no | If given, the reference element is used as point of origin for measuring the coordinates.
