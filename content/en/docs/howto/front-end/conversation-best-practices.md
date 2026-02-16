---
title: "Conversational AI Design Checklist"
url: /howto/front-end/conversation-checklist/
linktitle: "Conversational Design Checklist"
weight: 70
description: "Describes best practices for designing Conversational AI Bots."
---

## Introduction {#introduction}

Conversational AIs are easy to create, but you want them to be easy to use and reflect the ethos of your business. Creating conversational AIs is different from designing traditional user interfaces, and there are aspects that you may not have come across before.

To help you, Mendix has come up with this conversational AI design checklist which helps you think about how you want end-users to perceive and use the conversational AI. It is meant as an inspiration rather than a template. There are no references to specific Mendix features or modules to help you with your design, but these will be added to the Mendix offering as Mendix integrates more conversational AI features into its offering.

In the examples below, the conversational AI is named Bot.

### Key Design Elements

Mendix suggests that you set up a Conversational AI service blueprint. This is a journey map that you can use to tailor your design to your main targeted user groups. It contains the following design elements:

* A distinctive personality
* A specific tone and voice
* A consistent sound, feel, and behavior

### Conversational AI Behavior Design

Mendix recommends giving your conversational AI the following behavior. Click each item to find out more.

#### It Has a Warm Start and Welcomes End-Users

* [It says hi](#hi)
* [It tailors greetings to different end-users](#greeting)
* [It shows the value of the system or service and tries to match the end-user’s expectations](#value)
* [It proactively assures the end-user about data protection](#privacy)

#### It Helps the End-User Feel In Control

* [The end-user can stop the AI response while it is being generated](#local-control)
* [The end-user can format the prompt at the beginning](#input)
* [The end-user can set the temperature](#value)
* [The end-user can remove the interaction history](#privacy)

#### It Helps the End-User Formulate a Better AI Response

* [It provides the end-user with a prompt guide](#prompting)
* [It allows the end-user to reprompt effortlessly](#reprompting)
* [It provides sufficient hints and discoverability](#hinting)

#### It Embraces Graceful Error-Handling

* [It has transparent error messages that help the end-user identify the solution and take appropriate action correctly](#errors)
* [It proactively clarifies with the end-user to better understand the end-user's intent](#confirming)
* [It has a maximum number of error counters to avoid putting end-users in a frustrating loop](#confirming)
* [If the system cannot provide an appropriate solution to the end-user, it gives fallback options as alternatives to support the end-user](#confirming)

## Saying Hi{#hi}

### Why It Matters

Make a good first impression by showing value, welcoming the end-user, setting expectations, and letting the end-user take control.

### How We Do It

By providing a warm welcome, the chatbot establishes a positive tone and makes end-users feel valued. This approach helps to build rapport and encourages engagement, enhancing the overall end-user experience.

Don’t just jump right in. Say "Hello."

### Example

* Welcome the end-user. Greet the end-user briefly, for example with a simple "Welcome" or "Hi."

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/say-hi1.png" max-width="320px" alt="Hello Ana, How can I help you today?" >}}

## Tailoring Greetings{#greeting}

### Why It Matters

Tailoring greetings for different end-user groups can create a more engaging end-user experience than general greetings. Differentiate the greetings between first-time and repeated end-users.

A novice end-user might need more detailed descriptions of your conversational AI’s options and features. The same information can frustrate more experienced end-users.

On the other hand, an expert end-user might benefit from a well-placed tip about an advanced feature. This sort of information might overwhelm a novice end-user.

### How We Do It

* **New end-user**: Provide a warm welcome and a brief introduction to the system's capabilities.
* **Returning end-user**: Use a friendly greeting that acknowledges their familiarity.
* **Resuming interrupted task**: Consider the context of the previous interaction, especially for returning end-users.

Don’t overwhelm the end-user with lots of details upfront.

### Examples

* Greet and explain the system status to the novice end-user:

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/bot-is-experiment.png" max-width="480px" alt="A pop-up explaining what Bot is." >}}

* For returning end-users:

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/bot-recurring.png" max-width="480px" alt="Recurring end-users get straight to Bot with some suggestions and an offer to start asking questions" >}}

## Determining Value{#value}

### Why It Matters

You should help end-users to determine the value of the AI feature. Designers can help end-users understand where AI adds value and help them interact with the right expectations.

### How We Do It

* **Expectation-setting**: When confronting a new system, the end-user has these unspoken questions:

    * What is it?
    * What can it do for me?
    * Why should I care?
    * How should I feel about it?
    * Why should I trust it?
    * What does it want me to do next?

* **System status or version**: Help end-users understand the capabilities and limitations of the system, setting appropriate expectations for their experience. For example, let them know if the system is in beta.
* **New features and updates**: For returning end-users, actively communicate with the end-user about new features and updates of the system.

### Examples

* Communicate what the end-user can do with the system.
* Proactively ensure the end-user's data protection and let the end-user know about it.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/protection-and-examples.png" max-width="320px" alt="Give example questions and indicate on the screen that data is protected" >}}

* Communicate the new features or improved service to the end-users. Let end-users properly evaluate the value of the AI system. 
* Indicate the version of the system, allowing the end-user to determine the system's limitations.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/upgraded-recommendations.png" max-width="320px" alt="Pop-up informing that new features are available" >}}

## Assuring Privacy and Security{#privacy}

### Why It Matters

Users seek trust and assurance that their personal information is handled securely by AI systems. Therefore, confidentiality, breach prevention, and end-user trust are vital aspects of AI system security. Our ethical duty is to protect end-user data from any incident.

### How We Do It

* **Transparent data handling**: Clearly communicate how data is collected, processed, and used.
* **Empower end-user control**: Allow end-users to customize privacy settings and manage their data.

### Examples

* Proactively protect end-users' personal and corporate data. Make sure to also indicate to the end-user that their data is protected.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/protection-and-examples.png" max-width="320px" alt="Use a Protected badge to indicate that data is protected" >}}

* Allow the end-user to delete records of previous conversations and control whether conversation history is stored.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/delete-conversation.png" max-width="320px" alt="Show a switch to turn activity history on and off" >}}

## Giving Local Control{#local-control}

### Why It Matters

Local control allows end-users to adapt the AI's suggestions or outputs to their situation.

Additionally, people are more motivated and engaged when they believe they can influence outcomes (self-efficiency). Offering end-user control options reinforces a end-user's sense of self-efficacy and motivates them to interact with the AI system.

### How We Do It

* **Default option**: Set defaults based on end-user research and common use cases. Offer a clear "reset to defaults" option for end-users who want to return to the original settings.
* **Discoverability**: Place local control options within clear context, near the feature they impact. Use intuitive icons and labels. Offer tooltips or contextual help for advanced settings.

### Examples

* Make it easy for the end-user to edit and update a previous prompt to generate a new response.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/cancel-update-button.png" max-width="320px" alt="Show a button to allow end-user to edit a prompt" >}}

* Provide a way to stop or pause the AI interaction.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/pause.png" max-width="320px" alt="Show a switch to pause current interaction" >}}

* Provide options for the end-user to select a preferred response to their prompt—for example, by choosing between three different draft versions or even generating new versions—without having to write a new prompt.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/regenerate.png" max-width="320px" alt="Allow end-user to select a previous prompt and generate new responses from it" >}}

## Creating an Input Mechanism{#input}

### Why It Matters

The input mechanism is the method through which the end-user provides information to the system. This can be through text, voice, buttons, menus, or a combination of these elements.

### How We Do It

* The primary input mechanism should be the text input in the conversational interface. This primary input mechanism should never be blocked or disabled; the end-user should always have a way to provide primary input.
* Make it easy for users to perceive where they can provide input, whether via text, a button, or another input mechanism.
* Provide feedback once the system receives the end-user’s input to verify the system understood the input correctly.
* Don't overwhelm the end-user with too many input options at once. Keep it simple or provide just-in-time input options to avoid confusing the end-user about which action they should take.
* Allow the end-user to initiate a conversation by using suggested topics or inputting free text.

### Example

* Provide both inputs of command buttons and free text inputs for the user to navigate the conversation.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/buttons-and-prompts.png" max-width="320px" alt="Suggested questions on buttons and also a text input field" >}}

* Do not limit users to provide free text input.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/free-text.png" max-width="320px" alt="Suggested free input text" >}}

## Prompting{#prompting}

### Why It Matters

A helpful prompt guide bridges the gap between what end-users want and what the AI can understand. Eventually, it provides better AI responses for end-users.

### How We Do It

* **AI response temperature**: Empower end-users with adjustable temperature settings for AI responses. This allows end-users to customize the level of detail and personality they desire, which could range from factual and concise to creative and elaborate.

* **Shielding end-user data**: Strive for proactive protection and move beyond reactive measures. Design systems that prioritize end-user privacy from the outset. Implement robust data encryption and access controls to safeguard end-user information.

* **Input character handling**: Set clear and realistic expectations for end-user input. Communicate limitations on character count or format to avoid end-user frustration while ensuring efficient data processing by the AI system.

### Examples

* Present examples of prompts in the input field, helping the end-user to understand how to draft prompts in the system. Provide further guidance via an information icon ({{% icon name="info-circle" %}}).

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/prompts.png" max-width="320px" alt="Suggested prompt fragments on buttons and further help next to input field" >}}

* Showcase prompts for advanced end-users.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/further-advice.png" max-width="320px" alt="Pop up shown while response is generated giving additional suggestions for how to construct a prompt" >}}

* Provide ready-to-use prompts, so the end-user can compose on top of the provided context.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/context-driven-prompts.png" max-width="320px" alt="Suggested responses to latest output explaining a typo in the question" >}}

## Quoting and Reprompting {#reprompting}

### Why It Matters

If you allow end-users to quote specific parts of previous messages and reply directly, this facilitates clearer and more focused communication within the conversation.

* **Clarity and context**: Quoting maintains clarity and context by referencing specific parts of previous messages, aiding understanding of the conversation flow.
* **Precision**: Replying to specific text makes it straightforward to precisely address questions or comments, ensuring relevance.
* **Organization**: Quoting and reprompting helps organize conversations, separating topics into distinct threads for easier follow-up.
* **Efficiency**: Referencing previous messages enables focused exchanges, covering multiple topics efficiently within the same conversation.

### How We Do It

* **Visibility and accessibility**: Make the quote-and-reprompt feature easily accessible and visible within the interface. End-users should be able to select and quote specific parts of messages intuitively and smoothly.
* **Clarity and readability**: Ensure quoted text is displayed clearly and legibly, distinguishing it from the end-user’s input. Use visual cues such as indentation, color, or formatting to differentiate quoted text from new messages.
* **Interactivity**: Design the quote-and-reprompt feature to be interactive and responsive. Allow end-users to click or tap on quoted text to expand or collapse it, providing a seamless way to view the context without cluttering the interface.

### Examples

* Ensure that additional functionalities are discoverable but do not overwhelm the interface or distract from the main task. For example, when the end-user selects some text, an icon could appear indicating that they can reply directly to their selection.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/reply-quote-icon.png" max-width="320px" alt="Showing an icon in the Bot response to indicate that selected text can be replied to directly" >}}

* Display the selected text near the input area. Let the end-user dismiss it if it is no longer needed.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/highlight-the-question.png" max-width="320px" alt="Display selected text above the input area" >}}

## Hinting and Discoverability{#hinting}

### Why It Matters

With conversational AI, the burden of discovering the capability of a bot or voice assistant is up to the end-user. They only learn that a chatbot cannot do something after it fails to provide a good response. If there are no hints or interface cues, end-users are more likely to have unrealistic expectations.

Provide a clear motivation for any action you want the end-user to take. Tell the end-user why they might want to do something before telling them how to do it.

### How We Do It

* **Visual cues**: Incorporating visual indicators or icons to signify AI-driven features or suggestions can help end-users identify and interact with AI elements more easily.
* **Onboarding tutorials**: Providing guided onboarding tutorials or tooltips that introduce end-users to AI functionalities can enhance discoverability and encourage exploration.
* **Contextual help**: Offering contextual help prompts or pop-ups that appear when end-users encounter AI features for the first time can help them to use these features effectively.
* **Predictive suggestions**: Implementing predictive suggestions or autocomplete features powered by AI algorithms can help end-users anticipate system responses and discover new functionalities.
* **Progressive disclosure**: Employing progressive disclosure techniques to gradually reveal AI capabilities as end-users interact with the system can avoid overwhelming end-users with too much information upfront while encouraging exploration over time.
* **Action orientation**: Always provide end-users with the next action to take.

### Examples

* When text is highlighted, the **Reply** icon ({{% icon name="blockquote-filled" %}}) appears, signaling an opportunity for further interaction.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/reply-quote-icon.png" max-width="320px" alt="Showing an icon in the Bot response to indicate that selected text can be replied to directly" >}}

* The end-user can discover options to show or hide various drafts of the generated text and then select their preferred version.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/show-hide-draft.png" max-width="320px" alt="Option is given to create multiple drafts of response from Bot with option to show or hide the Bot's responses" >}}

## Reporting Errors{#errors}

### Why It Matters

Transparent error messages tell end-users exactly what went wrong, preventing confusion and wasted time trying to guess the issue. By explaining the problem, end-users can identify the solution or take appropriate corrective actions easily.

### How We Do It

* **Use precise language**: Instead of "An error occurred," pinpoint the issue. For example, "We couldn't find a profile with that email address. Please check your spelling and try again."
* **Offer context**: Briefly explain why the error happened. For instance, "It looks like the image might be a bit too large. We have a 5 MB limit for uploads. If you try resizing it or picking a smaller one, it should work just fine!"
* **Provide solutions**: Offer actionable steps that end-users can take to fix the problem. This could be suggesting alternative actions, linking to relevant help articles, or offering to reset a password.
* **Maintain a positive tone**: Even when reporting an error, use polite and helpful language. For example, "We encountered a problem processing your request. Let's try again!"

### Example

* Offer context explaining why the requested action can’t be made. Also, provide alternative solutions.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/error.png" max-width="320px" alt="Bot responds explaining why it cannot send an email and suggesting something it can do" >}}

## Confirming Intent{#confirming}

### Why It Matters

Clarifying end-user intent ensures the system understands what the end-user wants, leading to accurate responses and smoother interaction.

### How We Do It

* **Confirmation prompts**: Rephrase the end-user's request in a question to confirm understanding before proceeding. ("Did you mean...?")
* **Multiple response options**: Offer a few concise answer choices that reflect common end-user goals.
* **Context awareness**: Consider past interactions and end-user history to inform interpretations of current requests.
* **Fallback mechanisms**: Have built-in fallback options like offering to connect the end-user with a live agent or providing a menu of common tasks. This ensures the end-user has options even if the system cannot fulfill the initial request perfectly.

### Example

* Asking “Did I get that right?” helps the end-user and the system shape conversation direction.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/am-i-right.png" max-width="480px" alt="Bot responds with asking if response is correct with Yes/No buttons to allow response" >}}

* If the system cannot handle the query, provide fallback options for further navigation.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/do-not-understand.png" max-width="320px" alt="Bot responds that it cannot understand and prompts with buttons showing possible next steps" >}}
