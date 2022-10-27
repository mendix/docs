---
title: "Random Number"
url: /addons/ats-addon/rg-one-random-number/
---

## 1 Description

Creates a random Integer using:
Math.floor(Math.random() * (max - min)) + min;

## 2 Usage

Pass the lower/min and upper/max bound for the generated number, to limit the outcome.
You have to define the min(included) and max (excluded).

## 3 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Min | Integer | yes | The lower bound for the outcome
Max | Integer | yes | The upper bound for the outcome

## 4 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Random integer | Integer | The generated random number.
