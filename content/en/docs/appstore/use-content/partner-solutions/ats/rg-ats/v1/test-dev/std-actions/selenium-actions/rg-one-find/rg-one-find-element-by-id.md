---
title: "Find Element by ID"
url: /appstore/partner-solutions/ats/rg-one-find-element-by-id/
---

## Description

Find a web element by ID. Occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

## Usage

Provide the ID of the element you want to find. This action will find all elements from the DOM with that ID and save them as a result-list. If you want, to get another element instead of the first element of the result-list, provide an index as input for the Occurrence.  
Optionally restrict the search to a specified SearchContext element.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
ID| String | yes |  The ID of the element you want to get  
Search Context | WebElement | no | Limit the search to the given WebElement
Occurrence | Integer | no | Index of the result-list value you want to get (defaults to the first element)

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Element | WebElement | The wanted WebElement
