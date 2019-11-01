---
title: "Questionnaire"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Questionnaire](https://appstore.home.mendix.com/link/app/234/) module allows you to configure complex reflexive questionnaires and distribute them to be conducted by your users. Different types of questions (with selectable options, date and number ranges, and free text) can be configured and rendered in different ways (for example, as text boxes, sliders, radio buttons, and check boxes). Depending on the question type, ranges can be configured wherein the answer must lie. Each question can be marked as required.

Furthermore the visibility of questions and options can be dependent on earlier given answers. In addition the applicability of a range can also be dependent on an earlier given answer. During the development of the configuration the changes are tracked in revision which can always be restored.
Installation

See the general instructions under How to Install.
Implementation

    Add the module role Administrator to the user roles that need to configure questionnaires.
    Add the module role User to the user roles that need to conduct questionnaires.
    Add the forms Connectors/Configurations and Connectors/Publications to your navigation.


Idea

Use the Deep Link Module to generate hyper-links to a microflow with the Questionnaire Set number as input which will retrieve the published questionnaire belonging to the set and passes it on to the Connectors/ConductConfiguration microflow.
User stories

As basis of the functionality that will be implemented in the template user stories are created.  A user story is described like "As a <role> I want <achievement>". For the Questionnaire template the user stories below were created.

    As an administrator I want to configure questionnaires. [ConfigureQuestionnaire]
    In these questionnaires an administrator wants to
        Add a question, instruction text or a next button. [AddElement]
        Edit or delete these elements. [EditDeleteElement]
        Define the sequence of the elements. [MoveElement]
        Configure instruction texts. [ConfigureInstruction]
        Configure questions that require text as answer. [ConfigureTextQuestion]
        Configure questions where a date can be filled in and ranges can be defined. [ConfigureDateQuestion]
        Configure questions where an amount can be filled in and ranges can be configured where the answer needs to be in. [ConfigureAmountQuestion]
        Configure the dependability of options or elements based on earlier given answers. [ConfigureDependencies]
        Control all revisions of earlier configurations. [ControlRevisions]
        Download the results of published revisions. [DownloadResults]
    As a user I want to be able to conduct a questionnaire. [ConductQuestionnaire]
    In these questionnaires a user wants to
        Start a questionnaire based on a configuration. [StartQuestionnaire]
        Give an answer to a question. [AnswerQuestion]
        Get a notification when he/she filled in something that is not valid. [ValidateAnswer]
        See that dependencies are updated. [UpdateDependencies]
        Navigate to a next or previous page. [NavigateBetweenPages]

Helpful

The user stories are quite simple and are not elaborated any further. When you want to dig deeper you can load the template into your project and navigate through it. The folder names in the Mendix Business Modeler in the 'Logic' folder correspond with the names between brackets at the end of each user story. Every microflow has a description with everything explained.
Known issues

 

sprintr™ integration

Use the form 'Feedback' in the main folder as startpage to get the sprintr™ feedback functionanility that allows you to send your feedback to Mendix.


    Dependencies of options shown in custom widgets are not updated. (ticket #8623 @ support.mendix.com)

Roadmap

The following features are scheduled to be implemented in the future:

    Weights: Assigning weight to questions, group-boxes and pages
    Group-boxes: Grouping questions to outline them and create options for calculating a group value
    Templates: Creating question templates which can be easily reused.
    Crosstable: An extra question type will be added to show a two dimensional table of checkboxes or radiobuttons.

    Sliders: An extra question type will be added where the user can use a slider to select a numerical answer.
    Integer support: Currently only floats are supported but in the future it will be possible to choose between whole number and decimal.

Adaptations

The module is easy to adapt to your wishes. Small adaptations won't influence the behaviour, but when new configuration options are added or existing are removed it will most likely have impact. To give insight to where you need to pay attention to when doing these type of changes there is a short instruction how different types of questions can be added below.

    Start in the folder 'ConfigureQuestionnaire'
    Add your type of question to the enumeration 'AddElement/ElementConfigType'
    Create an entity specialized from ElementConfig for configuring your question type
    If your question has options/ranges. Create an entity specialized from OptionConfig for configuring the option belonging to your question type
    Create forms for the just created objects (it is easy to use the existing forms as starting point)
    Add your just created form to the microflow 'EditDeleteElement/EditElementConfig'
    Now we move to the folder ' ConductQuestionnaire'
    Add the render modes belonging to your question type to the enumeration 'StartQuestionnaire/RenderMode'
    If your question has a new input type. Add the input belonging to your question type to the enumeration 'StartQuestionnaire/InputType'
    There are attributes for handling text, date and amount answers, but if the answer to your question differs you can add an attribute to the Element entity
    Add your new question and option type to the microflows 'StartQuestionnaire/CreateElement' and 'StartQuestionnaire/CreateOption'
    If your question has a new input type. Extend the microflow 'AnswerQuestion/SaveElement' and 'ValidateAnswer/ValidateElement' for handling the new input type
    If your question has a new input type. Extend the microflow 'DownloadResults/GetAnswer' for handling the new input type when exporting results