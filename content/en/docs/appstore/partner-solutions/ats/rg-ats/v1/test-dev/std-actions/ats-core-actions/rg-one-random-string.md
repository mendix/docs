---
title: "Random String"
url: /appstore/partner-solutions/ats/rg-one-random-string/
---

## Description

Creates a random aphanumerical String using:
Math.random().toString(36).slice(2,8)

## Usage

Optionally you can pass a post- or prefix and the length for the generated string to the action as parameters.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Prefix | String | no | The string to put in front of the generated string.
Postfix | String | no | The string to append to the generated string.
Length | Integer | no | The length of the generated string.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Random String | String | The generated random string.
