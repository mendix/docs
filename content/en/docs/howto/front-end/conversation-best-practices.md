---
title: "Conversational AI Design Checklist"
url: /howto/front-end/conversation-checklist/
linktitle: "Conversation Checklist"
weight: 70
description: "Describes the best practices to designing Conversational AI Bots."
---

## 1 Introduction {#introduction}

Conversational AIs are easy to create, but you want them to be easy to use and reflect the ethos of your business. To help you, Mendix has come up with this conversational AI design checklist which helps you think about how you want end-users to perceive and use the conversational AI.

In the examples below, we have named the conversational AI "Bot".

### 1.1 Key Design Elements

Mendix suggests that you set up a Conversational AI service blueprint. This is a journey map for main user groups. It will contain the following design elements:

* a distinctive personality
* a specific tone and voice
* a consistent sound, feel, and behavior

### 1.2 Conversational AI behavior design

Mendix recommends giving your conversational AI the following behavior. Click each item to find out more.

#### 1.2.1 It Has a Warm Start and Welcomes Users

* [It says hi](#hi)
* [It differentiates greetings to different users](#greeting)
* [It shows the value of the system/service and tries to match the user’s expectations](#value)
* [Proactively assure the user regarding data protection](#privacy)

#### 1.2.2 It Helps the User Feel In Control

* [The user can stop AI response during the response generation](#local-control)
* [It doesn’t limit the user from formatting the prompt at the beginning](#input)
* [The user can set the temperature](#value)
* [The user can remove the interaction history](#local-control)

#### 1.2.3 It Helps the User Formulate a Better AI Response

* [It provides the user with a prompt guide](#prompting)
* [The user can effortlessly Re-Prompt](#history)
* [It provides sufficient hints and discoverability](#hinting)

#### 1.2.4 It Embraces graceful Error-handling

* [It has transparent error messages that help the user identify the solution and take appropriate action correctly](#errors)
* [It proactively clarifies with the user to understand the user intent better](#confirming)
* [It has a Maximum No of error counters to avoid users in a frustration loop](#confirming)
* [If the system can’t provide an appropriate solution to the user, it gives fallback options to support the user as alternatives](#confirming)

## 2 Saying Hi{#hi}

### 2.1 Why It Matters

Make a good first impression by showing value, Welcoming the user, Setting expectations, Let the user take control.

### 2.2 How We Do It

By providing a warm welcome, the chatbot establishes a positive tone and makes users feel valued. This approach helps to build rapport and encourages engagement, enhancing the overall user experience.

Don’t just jump right in. Say "Hello".

### 2.3 Example

* Welcome the user. Greet the user briefly, for example, with a simple "Welcome" or "Hi".

{{< figure src="/attachments/howto/front-end/conversation-best-practices/say-hi.png" max-width="320px" alt="Hello Ana, How can I help you today?" >}}

## 3 Tailoring Greeting{#greeting}

### 3.1 Why It Matters

Tailoring greetings for different user groups can create a more engaging user experience than general greetings. Differentiate the greetings from the first-time user and repeated users. A novice user might need more detailed descriptions of your Action’s options and features. 

The same information can frustrate more experienced users (violating the Cooperative Principle ). On the other hand, an expert user might benefit from a well-placed tip about an advanced feature (information that might overwhelm a novice user).

### 3.2 How We Do It

* New user: Provide a warm welcome and a brief introduction to the system's capabilities.
* Repeated user: Use a friendly greeting that acknowledges their familiarity.
* Resuming interrupted task: Consider the context of the previous interaction, especially for returning users.

Don’t overwhelm the user with lots of details upfront.

### 3.3 Examples

* Greet and explain the system status to the novice user.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/bot-is-experiment.png" max-width="320px" alt="A pop-up explaining what Bot is." >}}

* For recurring users.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/bot-recurring.png" max-width="480px" alt="Recurring users get straight to bot with some suggestions and an offer to start asking questions" >}}

## 4 Determining Value{#value}

### 4.1 Why It Matters

You should help users to determine the value of the AI feature. Designers can help users understand where AI adds value and help them interact with the right expectations.

### 4.2 How We Do It

* When confronting a new system, the potential user will have these unspoken questions:

    * What is it?
    * What can it do for me?
    * Why should I care?
    * How should I feel about it?
    * Why should I trust it?
    * What does it want me to do next?

* System version: Help users understand the capabilities and limitations of the system, setting appropriate expectations for their experience.
* For recurring users, actively communicate with the user about new features and updates of the system.

### 4.3 Examples

* Communicate what the user can do with the system 
* Proactively ensure user data protection.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/protection-and-examples.png" max-width="320px" alt="Give example questions and indicate on the screen that data is protected" >}}

* Effectively communicate the new features or improved service to the users and let users properly evaluate the value of the AI system. 
* Communicate the version of the system, allowing the user to determine, the system limitation.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/upgraded-recommendations.png" max-width="320px" alt="Pop-up informing that new features are available" >}}

## 5 Assuring Privacy and Security{#privacy}

### 5.1 Why It Matters

Users seek trust and assurance that their personal information is handled securely by AI systems. Therefore, confidentiality, breach prevention, and user trust are vital aspects of AI system security. Our ethical duty is to protect user data from any incident.

### 5.2 How We Do It

* **Transparent Data Handling**: Design interfaces should clearly communicate how data is collected, processed, and used.
* **Empower User Control**: Allow users to customize privacy settings and manage their data.

### 5.3 Examples

* Proactively protect users' personal & corporate data.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/data-is-protected.png" max-width="320px" alt="Indicate that data is protected" >}}

* Allow the user to delete the conversation history, and turn off collecting conversation.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/delete-conversation.png" max-width="320px" alt="Show a switch to turn activity history on and off" >}}

## 6 Giving Local Control{#local-control}

### 6.1 Why It Matters

Local control allows users to adapt the AI's suggestions or outputs to their situation. 
Additionally, people are more motivated and engaged when they believe they can influence outcomes (Self-efficiency). Offering user control options reinforces a user's sense of self-efficacy and motivates them to interact with the AI system.

### 6.2 How We Do It

* **Default option**: Set defaults based on user research and common use cases. Offer a clear "reset to defaults" option for users who want to return to the original settings.
* **Discoverability:** Place local control options within clear context, near the feature they impact. Use intuitive icons and labels. Offer tooltips or contextual help for advanced settings.

### 6.3 Examples

* Provide the user the ability to override AI action via editing the prompt.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/cancel-button.png" max-width="320px" alt="Show a button to allow user to edit a prompt" >}}

* Provide an option to pause the AI Interaction.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/pause.png" max-width="320px" alt="Show a switch to pause current interaction" >}}

* Options to select a response within the interaction without the user to rewrite the new prompt.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/regenerate.png" max-width="320px" alt="Allow end-user to select a previous prompt and generate new responses from it" >}}

## 7 Creating Input Mechanism{#input}

### 7.1 Why It Matters

It is a method for the user to provide information to the system. This can be through text, voice, buttons, menus, or a combination of these elements. However, it is always important for the user to feel free to facilitate the input, especially primary input, which should always be available. 

### 7.2 How We Do It

* Clear affordance is key to where the user can enter their input.
* Provide feedback once the system receives the user’s input to verify the system understood the input correctly.
* Don’t overload various inputs at the same time, it might confuse the user with which action to take.
* Allow user to input free text, or initiate conversation

### 7.3 Example

* Provide inputs of both command buttons and free text inputs for the user to navigate the conversation.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/buttons-and-prompts.png" max-width="320px" alt="Suggested questions on buttons and also a text input field" >}}

## 8 Prompting{#prompting}

### 8.1 Why It Matters

A helpful prompt guide bridges the gap between what users want and what the AI can understand. Eventually, increases better AI responses for users.

### 8.2 How We Do It

* **AI Response Temperature**: Putting Users in Control  
Empower users with adjustable "temperature" settings for AI responses. This could range from factual and concise to creative and elaborate, allowing users to customize the level of detail and personality they desire.
* **Shielding User Data**: Proactive Protection  
Move beyond reactive measures. Design systems that prioritize user privacy from the outset. Implement robust data encryption and access controls to safeguard user information.
* **Managing User Input**: Setting Clear Expectations  
Input Character Handling: Set realistic expectations for user input. Communicate limitations on character count or format to avoid user frustration while ensuring efficient data processing by the AI system.

### 8.3 Examples

* Examples of prompts are presented in the input field, helping the user to sense how to draft prompts in the system. Further help is provided with ⓘ icon.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/prompts.png" max-width="320px" alt="Suggested prompt fragments on buttons and further help next to input field" >}}

* Showcasing prompt for advanced users.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/further-advice.png" max-width="320px" alt="Pop up shown while response is generated giving additional suggestions for how to construct a prompt" >}}

* Provide ready-to-use prompts, so the user can compose on top of the provided context.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/context-driven-prompts.png" max-width="320px" alt="Suggested responses to latest output explaining a typo in the question" >}}

## 9 Displaying History{#history}

### 9.1 Why It Matters

This feature, often called *Quote and Reply* allows users to quote specific parts of previous messages and reply directly, facilitating clearer and more focused communication within the conversation.

* **Clarity and Context**: Quoting maintains clarity and context by referencing specific parts of previous messages, aiding understanding of the conversation flow.
* **Precision**: Replying to specific parts allows for more precise addressing of questions or comments, ensuring relevance.
* **Organization**: Quoting and replying help organize conversations, separating topics into distinct threads for easier follow-up.
* **Efficiency**: Referencing previous messages enables focused exchanges, covering multiple topics efficiently within the same conversation.

### 9.2 How We Do It

* **Visibility and Accessibility**: Make the quote-reply feature easily accessible and visible within the interface. Users should be able to select and quote specific parts of messages without difficulty intuitively.
* **Clarity and Readability**: Ensure quoted text is displayed clearly and legibly, distinguishing it from the user’s input. Use visual cues such as indentation, color, or formatting to differentiate quoted text from new messages.
* **Interactivity**: Design the quote-reply feature to be interactive and responsive. Allow users to click or tap on quoted text to expand or collapse it, providing a seamless way to view the context without cluttering the interface.

### 9.3 Examples

* Use a salient discoverability of the functionality.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/reply-quote-icon.png" max-width="320px" alt="Showing an icon in the Bot response to indicate a response is required" >}}

* Make the selected quote visible in the input area and ensure the user’s control to disable it simultaneously.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/highlight-the-question.png" max-width="320px" alt="Summarize the Bot's question near the prompt" >}}

## 10 Hinting and Discoverability{#hinting}

### 10.1 Why It Matters

With conversational UI, the burden of discovering bots'(or voice assistants') capabilities is up to the user. You can only know a chatbot can’t do something only after it fails to provide it. If there are no hints or affordances, users are more likely to have unrealistic expectations.

Provide clear motivation for any action you want the user to take. Tell the user why they might want to do something before telling them how to do it.

### 10.2 How We Do It

* **Visual Cues**: Incorporating visual indicators or icons to signify AI-driven features or suggestions can help users identify and interact with AI elements more easily.
* **Onboarding Tutorials**: Providing guided onboarding tutorials or tooltips that introduce users to AI functionalities can enhance discoverability and encourage exploration.
* **Contextual Help**: Offering contextual help prompts or pop-ups that appear when users encounter AI features for the first time can guide them on how to utilize these features effectively.
* **Predictive Suggestions**: Implementing predictive suggestions or autocomplete features powered by AI algorithms can help users anticipate system responses and discover new functionalities.
* **Progressive Disclosure**: Employing progressive disclosure techniques to reveal AI capabilities as users interact with the system gradually can prevent overwhelming users with too much information upfront while encouraging exploration over time.
* **Action-oriented:** Always provide users with the next action to take.
* **Serendipity:** Algorithmic recommendations can create filter bubbles, The Serendipity feature helps users discover new things outside their echo chambers.

### 10.3 Examples

* When text is highlighted, the modification icon appears, signaling an opportunity for further interaction.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/modify-icon.png" max-width="320px" alt="Modify icon appears near highlighted response from Bot" >}}

* After hitting the modify icon the user can discover modification options.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/modify-options.png" max-width="320px" alt="Some standard modify options (Regenerate, Make Shorter, Remove) are given next to Bot's response" >}}

* The user can discover options to "Show drafts" or "Hide drafts" of the generated text.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/drafts.png" max-width="320px" alt="Option is given to create multiple drafts of response from Bot with option to show or hide the Bot's responses" >}}

## 11 Reporting Errors{#errors}

### 11.1 Why It Matters

Transparent error messages tell users exactly what went wrong, preventing confusion and wasted time trying to guess the issue. By explaining the problem, users can identify the solution or take appropriate corrective actions easily.

### 11.2 How We Do It

* **Use specific language:** Instead of "An error occurred," pinpoint the issue. For example, "We couldn't find a profile with that email address. Please check your spelling and try again."
* **Offer context:** Briefly explain why the error happened. For instance, "The password you entered doesn't meet our security requirements. It must be at least 8 characters long and contain a combination of uppercase and lowercase letters, numbers, and symbols."
* **Provide solutions:** Offer actionable steps users can take to fix the problem. This could be suggesting alternative actions, linking to relevant help articles, or offering to reset a password.
* **Maintain a positive tone:** Even when reporting an error, use polite and helpful language. For example, "We encountered a problem processing your request. Let's try again!"

### 11.3 Example

* Offer a context as to why the requested action can’t be made. Also, provide alternative solutions.



## 12 Confirming Intent{#confirming}

### 12.1 Why It Matters

Clarifying user intent ensures the system understands what the user wants, leading to accurate responses and smoother interaction.

### 12.2 How We Do It

* **Confirmation Prompts:** Rephrase the user's request in a question to confirm understanding before proceeding. ("Did you mean...?")
* **Multiple Response Options:** Offer a few concise answer choices that reflect common user goals.
* **Context Awareness:** Consider past interactions and user history to inform interpretations of current requests.
* **Fallback Mechanisms:** Have built-in fallback options like offering to connect the user with a live agent or providing a menu of common tasks. This ensures the user has options even if the system can't fulfill the initial request perfectly.

### 12.3 Example

* “Did I get that right?” helps the user and the system shape conversation direction.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/am-i-right.png" max-width="480px" alt="Bot responds with asking if response is correct with Yes/No buttons to allow response" >}}

* If the system can’t handle the quarry, provide fall-back options for further navigation.

{{< figure src="/attachments/howto/front-end/conversation-best-practices/do-not-understand.png" max-width="480px" alt="Bot responds that it cannot understand and prompts with buttons showing possible next steps" >}}
