---
title: "Questionnaire"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Questionnaire](https://appstore.home.mendix.com/link/app/234/) module allows you to configure complex reflexive questionnaires and distribute them to users. Different types of questions (for example, with selectable options, date and number ranges, and free text) can be configured and rendered in different ways (for example, as text boxes, sliders, radio buttons, and check boxes). Depending on the question type, ranges can be configured wherein the answer must lie. Each question can be marked as required.

The visibility and applicability of questions and options can be made dependent on earlier given answers. During configuration, changes are tracked in revision, which can always be restored.

## 2 Implementation

To implement this module, follow these steps:

1. Add the **Administrator** [module role](/refguide/module-security#module-role) to the [user roles](/refguide/user-roles) that need to configure questionnaires.
2. Add the **User** module role to the user roles that need to conduct questionnaires.
3. Add the **Connectors/Configurations** and **Connectors/Publications** forms to your navigation.

## 3 Usage

You can use this module to generate hyperlinks to a microflow with the questionnaire set number as an input. This will retrieve the published questionnaire belonging to the set and pass it to the **Connectors/ConductConfiguration** microflow.

User stories are created as the basis of the functionality implemented in the template.  A user story uses this template: "As a \<role\>, I want to \<goal\>". 

For the Questionnaire template, the following user stories below have been created:

* As an Administrator, I want to configure questionnaires [ConfigureQuestionnaire] and do the following:
	* Add a question, instruction text, or next button [AddElement]
	* Edit or delete these elements [EditDeleteElement]
	* Define the sequence of the elements [MoveElement]
	* Configure instruction texts [ConfigureInstruction]
	* Configure questions that require text as answer [ConfigureTextQuestion]
	* Configure questions where a date can be filled in and ranges can be defined [ConfigureDateQuestion]
	* Configure questions where an amount can be filled in and ranges can be configured where the answer needs to be [ConfigureAmountQuestion]
	* Configure the dependability of options or elements based on earlier given answers [ConfigureDependencies]
	* Control all revisions of earlier configurations [ControlRevisions]
	* Download the results of published revisions [DownloadResults]
* As a User, I want to conduct a questionnaire [ConductQuestionnaire] and do the following:
	* Start a questionnaire based on a configuration [StartQuestionnaire]
	* Give an answer to a question [AnswerQuestion]
	* Get a notification when the user filled in something that is not valid [ValidateAnswer]
	* See that dependencies are updated [UpdateDependencies]
	* Navigate to a next or previous page [NavigateBetweenPages]

## 4 Customization

This module is easy to customize. Small customizations will not influence the module behavior, but when new configuration options are added or existing ones are removed, they will most likely have an impact. 

For insight into where you need to pay attention when making these type of changes, these steps describe how to add different types of questions:

1. In the **ConfigureQuestionnaire** folder, add your question type to the **AddElement/ElementConfigType** enumeration.
2. Create an entity specialized from **ElementConfig** for configuring your question type.
3. If your question has options or ranges, create an entity specialized from **OptionConfig** for configuring the options belonging to your question type.
4. Create forms for the objects you just created, because it is easy to use existing forms as starting points.
5. Add each form you create to the **EditDeleteElement/EditElementConfig** microflow.
6. In the **ConductQuestionnaire** folder, add the render modes belonging to your question type to the **StartQuestionnaire/RenderMode** enumeration.
7. If your question has a new input type, add the input belonging to your question type to the **StartQuestionnaire/InputType** enumeration.
8. There are attributes for handling text, date, and amount answers, but if the answer to your question needs to be different, add an attribute to the **Element** entity
9. Add your new question and option type to the **StartQuestionnaire/CreateElement** and **StartQuestionnaire/CreateOption** microflows.
10. If your question has a new input type, extend the **AnswerQuestion/SaveElement** and **ValidateAnswer/ValidateElement** microflows for handling the new input type.
11. If your question has a new input type, extend the **DownloadResults/GetAnswer** microflow for handling the new input type when exporting results.
