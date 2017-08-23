---
title: "How-to Structure"
parent: "custom-action-general"
description: "This document explains the general structure of the how-to's for creating custom actions."
tags: ["ATS", "testing"]
---

## 1 Introduction

This document explains the general structure of the how-to's for creating custom actions.

## 2 How-to introduction

In the introduction of each how-to, you find a description of what the how-to will explain and in which situation it applies. It also states that you must create a new action. You use this action during the how-to. You must perform all steps inside this action during the how-to unless stated otherwise.
It also tells you what type of action the how-to explains. The how-to's are written based on the [guidelines for building a custom action](/bestpractices/guidelines-custom-action).

## 3 How-to prerequisites

All how-to's have one prerequisite: You must read and if necessary complete the [general](custom-action-general) section. 

## 4 User Approach

After the prerequisites, you must define the user approach. The user approach has four different questions that you can answer. For each type of custom action there is a question.

### 4.1 How do you cover the functionality?

How do you cover the functionality, sees to the combined action. The term functionality can cover many widgets. The answer leads to what you must do to complete the functionality. 

### 4.2 How do you interact with the widget?

How do you interact with the widget, sees to the unsupported widget action. The answer leads to what you must do to trigger the widget.

### 4.3 How do you find the widget?

How do you find the widget, sees to the search context action. The answer leads to what you must use to find an element surrounding your widget.

### 4.4 What do I want to do?

What do I want to do, sees to the function action. The answer leads to what code you must use to perform what you want to do.

## 5 Action Structure

ATS is a functional testing tool. It simulates a user. To ensure that ATS also acts like a user, you must create a structure of actions based on the user approach. This way you know for certain that ATS walks through the widget or functionality like a user. 

## 6 Parameters

After creating the action structure you must create and connect the necessary parameters to the actions. There is a naming convention that you must follow in most situations. There is a how-to for the [basics of creating a custom action](custom-action-basics).

## 7 Final Check

Perform a final check to pick up on mistakes before using the action. 

## 8 Add logic

Some how-to's have an additional section that explains how to add logic to your action. This depends on the situation. With logic we mean adding conditional checks to ensure that the action works in a certain situation.