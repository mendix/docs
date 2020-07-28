---
title: "Get Current DateTime String"
parent: "rg-one-ats-core-actions"
---

## 1 Description

Returns the current date and time in supplied format (java date format)
e.g. yyyy-MM-dd HH:mm:ss.

## 2 Usage

Pass the format for the datetime. For more informations about formating datetime in java, check the [SimpleDateFormat Java reference](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

## 3 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Datetime Format | String | yes | The java datetime format definition to format the datetime, e.g. 'dd.MM.yyyy'

## 4 Return Value

Name | Datatype | Description
---- | --------- | ---------------
CurrentDateTime | String | A string representation of the current date time formatted accordingly, e.g. '27.07.2020'
