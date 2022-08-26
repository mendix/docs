---
title: "Structure for How-To's"
url: /addons/ats-addon/ht-two-custom-action-howto-structure/
description: "Explains the general structure of the how-to's for creating custom actions."
tags: ["ATS", "testing"]
---

## 1 Introduction

This document explains the general structure of the how-to's for creating custom actions.

## 2 How-to Introduction

In the introduction of each how-to, you find a description of what the how-to explains and in which situation it applies. It also states that you must create a new action. You use this action during the how-to. You must perform all the steps inside this action during the how-to unless stated otherwise.

The introduction also tells you what type of action the how-to explains. The how-to's are written based on the [guidelines for building a custom action](/addons/ats-addon/ht-two-guidelines-custom-action/).

## 3 How-to Prerequisites

All of the how-to's have the prerequisite that you must read and if necessary complete the [General](/addons/ats-addon/ht-two-custom-action-general/) section.

## 4 User Approach

After the prerequisites, you must define the user approach. The user approach has four different questions that you can answer. For each type of custom action, there is a question.

### 4.1 How Do You Cover the Functionality?

How you cover the functionality relates to a combined action. The term functionality can cover more than one widget. The answer leads to what you must do to complete the functionality.

### 4.2 How Do You Interact with the Widget?

How you interact with a widget relates to an unsupported widget action. The answer leads to what you must do to trigger the widget.

### 4.3 How Do You Find the Widget?

How you find the widget relates to a search context action. The answer leads to what you must use to find an element surrounding your widget.

### 4.4 What Do I Want to Do?

What you want to do relates to a function action. The answer leads to what code you must use to perform what you want to do.

## 5 Action Structure

ATS is a functional testing tool, and it simulates a user. To ensure that ATS also acts like a user, you must create a structure of actions based on the user approach. This way you know for certain that ATS walks through the widget or functionality like a user. 

## 6 Parameters

After creating the action structure, you must create and connect the necessary parameters to the actions. There is a naming convention that you must follow in most situations. There is a how-to for the [basics of creating a custom action](/addons/ats-addon/ht-two-custom-action-basics/).

## 7 Final Check

Perform a final check to pick up on mistakes before using the action.

## 8 Add Logic

Some how-to's have an additional section that explains how to add logic to your action ("logic" in this scenario means adding conditional checks to ensure that the action works in a certain situation). This depends on the situation.
