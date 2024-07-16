---
title: "Conversational AI Design Checklist"
url: /appstore/modules/genai/conversation-checklist/
linktitle: "Conversation Checklist"
weight: 40
description: "Describes the best practices to designing Conversational AI Bots."
---

{{< figure src="/attachments/appstore/modules/genai/conversation-best-practices/" alt="Description" >}}


## 1 Introduction {#introduction}

Conversational AIs are easy to create, but you want them to be easy to use and reflect the ethos of your business. To help you, Mendix has come up with this conversational AI design checklist which helps you think about how you want end-users to perceive and use the conversational AI.

In the examples below, we have named the conversational AI "Bot".

### 1.1 Key Design Elements

Mendix has established a Conversational AI service blueprint: A journey map for main user groups. It covers the following design elements.

* It has a distinctive personality.
* It has a specific tone and voice.
* It has a consistent sound, feel, and behavior. 

### 1.2 Conversational AI behavior design

Mendix recommends giving your conversational AI the following behavior. Click each item to find out more.

#### 1.2.1 It Has a Warm Start and Welcomes Users

* [It says hi](#hi)
* [It differentiates greetings to different users](#)
* [It shows the value of the system/service and tries to match the user’s expectations](#)
* [Proactively assure the user regarding data protection](#)

#### 1.2.2 It Helps the User Feel In Control

* [The user can stop AI response during the response generation](#)
* [It doesn’t limit the user from formatting the prompt at the beginning](#)
* [The user can set the temperature](#)
* [The user can remove the interaction history](#)

#### 1.2.3 It Helps the User Formulate a Better AI Response

* [It provides the user with a prompt guide](#)
* [The user can effortlessly Re-Prompt](#)
* [It provides sufficient hints and discoverability](#)

#### 1.2.4 It Embraces graceful Error-handling

* [It has transparent error messages that help the user identify the solution and take appropriate action correctly](#)
* [It proactively clarifies with the user to understand the user intent better](#)
* [It has a Maximum No of error counters to avoid users in a frustration loop](#)
* [If the system can’t provide an appropriate solution to the user, it gives fallback options to support the user as alternatives](#)

## 2 Say Hi{#hi}

### 2.1 Why It Matters

Make a good first impression by showing value, Welcoming the user, Setting expectations, Let the user take control.

### 2.2 How We Do It

By providing a warm welcome, the chatbot establishes a positive tone and makes users feel valued. This approach helps to build rapport and encourages engagement, enhancing the overall user experience.

Don’t just jump right in. Say "Hello".

### 2.3 Example

Welcome the user. Greet the user briefly, for example, with a simple "Welcome" or "Hi".

{{< figure src="/attachments/appstore/modules/genai/conversation-best-practices/say-hi.png" alt="Hello Ana, How can I help you today?" >}}
