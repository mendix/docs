---
title: "Get Current DateTime String"
parent: "rg-one-ats-core-actions"
---

## 1 Description

Returns the current date and time in supplied format (java date format)
e.g. yyyy-MM-dd HH:mm:ss.

## 2 Usage

Pass the format for the date. For more informations about formating dates in java, check the [SimpleDateFormat Java reference](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

## 3 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Date Format | String | yes | The java date format definition to format the date.

## 4 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Value | Boolean | Value of the checkbox. True if checked, otherwise false.
