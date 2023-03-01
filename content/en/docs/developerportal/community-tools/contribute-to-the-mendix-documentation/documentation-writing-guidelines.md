---
title: "Documentation Writing Guidelines"
url: /developerportal/community-tools/documentation-writing-guidelines/
description: "Describes some guidelines to follow when contributing to the Mendix documentation."
tags: ["documentation", "community"]
---

## 1 Introduction

This document presents guidelines for creating a common voice and style for the Mendix documentation. The goal of our documentation is to attract and teach new community developers. With that in mind, please read these guidelines to help us keep the documentation consistent.

## 2 Style Guidelines

When contributing to the Mendix documentation, please consider these style guidelines:

* Focus on the questions you want to answer in the documentation
* Put yourself in the position of the end-user (and consider their skill level)
* Keep it short, simple, and to the point
* Review your content and delete anything that might be unnecessary
* The tone of the Mendix documentation is relaxed, conversational, and straight-forward
* All text should be in (American) English
* Define obscure acronyms and write them out fully the first time before using them throughout the rest of the document
* Avoid adverbs such as “simply,” “possibly,” “might,” “could,” “actually,” and “potentially,” as these words add uncertainty and cloud the true meaning of sentences
* Be inclusive with your language and do not use just "he," use "the user" or "they" instead

Need an extra hand with spelling and grammar? Load your article into [Hemmingway](http://www.hemingwayapp.com/) to spot any potential errors.

## 3 Guidelines for the Mendix Studio Pro How-tos

{{% alert color="info" %}}

This section presents detailed guidelines for writing a how-to. Read this section while referencing the [How-to Template](https://github.com/mendix/docs/blob/development/templates/how-to-template.md).

{{% /alert %}}

The [Studio Pro How-tos](/howto/) are contextual and version-specific guides on Mendix topics that take you through the necessary steps to achieve a goal, whether it is adding a widget to your app's UI, importing Excel files, or consuming a web service. The *Studio Pro How-tos* use relevant information on Mendix components to create realistic scenarios with specific contexts and they should deliver functionality.

Here are some important details on the *Studio Pro How-tos*:

* This documentation should provide solutions and insights to common scenarios, business cases, and frequently asked questions
* At the end of each how-to, the reader should have increased knowledge about Mendix functionality and should know how to apply it in relevant situations

### 3.1 Title

Write the title of the how-to so that it's clear and attractive to people not familiar with Mendix. In addition, write the title from a problem-solving perspective (do not just state that you're implementing a solution).

You can use this title structure: **[goal/problem to be solved]** + **[Mendix terminology]** (for example,"Work with Object Events").

### 3.2 Introduction

The introduction should explain the business case of the how-to, what problems the document solves, and why end-users should read it.

In the **This how-to will teach you . . .** section, sum up the key points that end-users will have learnt after reading the how-to (make this as clear and concrete as possible).

### 3.3 Prerequisites Section

Use the prerequisites section to let end-users know what they should have completed before starting the how-to. This prevents having to explain certain steps in detail.

You can tell end-users that they need to have installed certain software requirements or have performed specific configurations before starting the how-to. You can also list other *Studio Pro How-tos* here that should be referenced.

### 3.4 Images

Add images that clearly show the specific functionality of the related step (so the reader can check that the image matches what they see on their screen). For example, the arrows and flow on this screenshot are too busy and not clear enough for the user:

{{< figure src="/attachments/developerportal/community-tools/contribute-to-the-mendix-documentation/documentation-writing-guidelines/image_examples.png"   width="500"  >}}

Add boxes, indicators, arrows, and other information to an image only if it makes the image more understandable:

{{< figure src="/attachments/developerportal/community-tools/contribute-to-the-mendix-documentation/documentation-writing-guidelines/image_examples2.png"   width="400"  >}}

Keep the images as simple as possible, because having too many arrows on an image can make it confusing!

## 4 Guidelines for the Mendix Studio Pro Guide

{{% alert color="info" %}}

This section presents guidelines for writing the Studio Pro Guide page. Read this section while referencing the [Reference Guide Page Template](https://github.com/mendix/docs/blob/development/templates/ref-guide-page-template.md).

{{% /alert %}}

The *Studio Pro Guide* contains version-specific details about the various Mendix components. Each component has its own page or section that explains what the component does and the methods and parameters for using it. The guide also presents useful examples that make it easy to use the specific component in Mendix projects. The guide does not contain detailed sections on how to use Mendix in various ways or in specific situations.

Here are some important details on the *Studio Pro Guide*:

* Each *Studio Pro Guide* topic should contain an introduction that explains what feature is being described and what its purpose is
* Each *Studio Pro Guide* topic should contain descriptions of the feature's screens, properties, and possible values
* Each feature should contain at least one relevant example (the more examples the better!)

When writing for the *Studio Pro Guide*, consider these guidelines:

* Clarify the explanations of how each feature works
* Add examples for each feature being documented
* Add images that clearly show the specific functionality being described (so the reader can check that the image matches what they see on their screen)

## 5 Read More

* [How to Contribute to the Mendix Documentation](/developerportal/community-tools/contribute-to-the-mendix-documentation/)
