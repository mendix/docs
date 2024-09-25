---
title: "Find Element by CSS"
url: /appstore/partner-solutions/ats/rg-one-find-element-by-css/
---

## Description

Find a web element by CSS. Occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

## Usage

Provide the CSS selector which matches the elements you want to find. This action will find all matching elements from the DOM and save them as a result-list. If you want, to get another element instead of the first element of the result-list, provide an index as input for the Occurrence.  
Optionally restrict the search to a specified SearchContext element.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
CSS Selector | String | yes |  CSS selector which matches the elements you want to find
Search Context | WebElement | no | Limit the search to the given WebElement
Occurrence | Integer | no | Index of the result-list value you want to get (defaults to the first element)

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Element | WebElement | The wanted WebElement
