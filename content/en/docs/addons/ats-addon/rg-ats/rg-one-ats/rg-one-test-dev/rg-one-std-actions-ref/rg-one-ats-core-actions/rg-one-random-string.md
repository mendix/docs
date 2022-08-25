---
title: "Random String"
url: /addons/ats-addon/rg-one-random-string/
---

## 1 Description

Creates a random aphanumerical String using:
Math.random().toString(36).slice(2,8)

## 2 Usage

Optionally you can pass a post- or prefix and the length for the generated string to the action as parameters.

## 3 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Prefix | String | no | The string to put in front of the generated string.
Postfix | String | no | The string to append to the generated string.
Length | Integer | no | The length of the generated string.

## 4 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Random String | String | The generated random string.
