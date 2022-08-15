---
title: "Get Current DateTime String"
url: /addons/ats-addon/rg-one-get-current-datetime-string/
---

## 1 Description

Returns the current date and time in supplied format (Java date format) (for example, `yyyy-MM-dd HH:mm:ss`).

## 2 Usage

Pass the format for the datetime. For more informations about formating datetime in Java, see the [SimpleDateFormat](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) Java reference.

## 3 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Datetime Format | String | yes | The Java datetime format definition to format the datetime (for example, `dd.MM.yyyy`).

## 4 Return Value

Name | Datatype | Description
---- | --------- | ---------------
CurrentDateTime | String | A string representation of the current datetime formatted accordingly (for example, `27.07.2020`).
