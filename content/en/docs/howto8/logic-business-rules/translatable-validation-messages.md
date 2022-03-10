---
title: "Use Translatable Validation Messages"
url: /howto8/logic-business-rules/translatable-validation-messages/
category: "Logic & Business Rules"
menu_order: 14
tags: ["validation", "microflow", "translate"]
---

## 1 Introduction

Setting up validation rules should be relatively straight forward. Per object or per process step you want to have a single microflow that is in charge of the validation. That microflow has the required input parameters, validates all values. If a value is invalid the microflow will execute the validation feedback activity. When completing the microflow it will return a Boolean true/false whether or not the object has been successfully validated.

These types of validation actions should be used throughout your project. 

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/18581628.png)

However you will often run into situations where you need to be able to show or process your validation rules in a different way than just as validation feedback. On option that gives you more control is building one large string message variable. The validation microflow should return that message. If anything has been returned, the object is invalid.

Or if you need to differentiate between the different validation messages you can also build a list of (non-)persistable objects, instead of appending a message you should create an object and add the object to a list. Also take a look at the validation best practices.

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/18581627.png)

## 2 Simple Alternative for Translating Messages

There is one big problem with this second solution, you loose the ability to translate your validation message. String variables or attributes can not be translated by the platform. If you only have a hand full of these types of validation rules you might want to consider modeling out all language combinations. For each validation message you have to add decisions and activities per language. This could become a lot of work, but as long as you only have to do this one a couple of places it might not be worth to use the more complicated solution described below. 

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/18581626.png)

## 3 Translating Validation Rules

If you have to translate multiple validation rules, it will be worth it to develop a more advanced validation module which supports you in your maintenance of all these rules and messages.

Prepare a validation entity in the domain model

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/18581625.png)

Create an enumeration containing all validation messages

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/18581624.png)

Reference the model below for messages you should store in the entity:

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/model1.jpg)

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/model2.jpg)

The GetI18NText microflow validates and acquires the text like this. This is done to prevent any nullpointers in case of incorrect modeling.

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/model3.jpg)

The text is replaced by this microflow, the input is the translated text, the variable (parameter) text you want to add to the text, and the token number to indicate the position (as in, {1}, {2}, {3})

![](/attachments/howto8/logic-business-rules/translatable-validation-messages/model4.jpg)

