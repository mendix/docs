---
title: "Implement Best Practices for UX Design"
url: /howto8/front-end/ux-best-practices/
weight: 10
---

## Introduction

{{% alert color="info" %}}
This how-to is based on the blog post [Common UX Mistakes Made by Business Developers](https://blog.prototypr.io/common-ux-mistakes-made-by-business-developers-e837d0b31379) by Jason Teunissen, UX Consultant at [Appronto](https://developer.mendixcloud.com/link/partnerprofile/8870), a Mendix partner company.
{{% /alert %}}

In a Mendix team, the UX Designer's job is to improve the user experience of applications in as many ways as possible. However, sometimes logical solutions from a development perspective are not the best solutions from a UX perspective. 

This set of best practices is for UX Designers to think carefully about what they can add to app development process.

## Do Not Put Everything in a Single Screen

Putting all of the application's menus, features, and buttons in a single screen is a bad UX practice, but one that is commonly seen. In this scenario, UX Designers and Developers start with a tight interface, but over time they add features that result in a screen full of buttons.

The arguments for putting everything onto a single screen include the following:

* "Fewer clicks are needed"
* "An overview is created"
* "Users hate scrolling"

To a UX Designer, this kind of app looks like a Swiss Army knife with all the tools unfolded, but the only one being used is the bottle opener.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/single-screen.png" class="no-border" >}}

### Avoid Overwhelming Design

Packing all the options for your app into one screen may seem like it creates overview, but your brain can only understand nine options at a time at best. And let's be honest, the end-user may not use 90% of your app's buttons that often, so there is no need to overwhelm them.

### Prioritize Visual Proximity

Buttons should be close to the data that they influence. This means that when you have fewer buttons on one screen, you gain visual proximity.

### Remember, Users Do Not Hate Scrolling!

The “users hate scrolling argument” is often a side-effect of being unable to provide an end-user with the right context at the right time. The workaround is then forcing as much information as possible into a single screen to help create context.

The issue here is not the need to scroll, but the amount of information on the screen. Placing more information higher on the page does not mean the end-user will necessarily absorb that information. It may make them tire of your app more quickly and even leave.

For more information, see [Miller's Law](https://lawsofux.com/millers-law) and the [Law of Proximity](https://lawsofux.com/law-of-proximity).

## Do Not Put Everything in Drop-Down Menus

The arguments for using drop-down menus and packing them full of options often include the following:

* "There will be more focus and less clutter"
* "It will be easier for the end-user to find what they need"

The guidelines below address what you really need to consider when designing drop-down menus.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/drop-down.png" class="no-border" >}}

### Emphasize Balance

Think about your interface as a physical space. Consider the following scenario: an object you need is in a set of drawers, so you need to start opening the drawers until you find what you are looking for. If the drawers are in the right place and organized logically, you can find what you need more quickly. But if the drawers hold random objects that do not correspond to the context of what you need, you will spend a lot of time looking for the right object.

Good balance goes a long way. How often an object is used determines where it should go in a drawer, which translates to: How often a button is needed determines where it should go in a drop-down menu.

If you only have five buttons, they might not need to go in a drop-down menu at all. But if you have six buttons, that’s a different story.

## Let the User Know Where They Are in the App

When your app has a consistent design system and brand style, all the pages may start to feel the same to the end-user. Soon enough, the end-user may feel like they are walking through a forest of pages, unable to recall if they have seen a particular page before, or if they are actually on a different page with a similar state.

The arguments for using a very consistent design system and brand style may include the following:

* "The visual style must be entirely consistent and fully branded"
* "Design systems drive design"
* "We want efficient use of screen real-estate"

The guidelines below address how to let the user know where they are in your app.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/where-am-i.png" class="no-border" >}}

### Design for Distracted Users

Picture an end-user on a Friday afternoon, bouncing between social media, chats with colleagues, some private messages, and actually doing some work. The last thing on their mind is what link they just clicked and where they are in the flow of your app.

Create every screen for this user by following these guidelines:

* Give pages clear headers and page names
* Implement breadcrumbs if you design more than one level deep
* If the page flow has multiple steps, show those steps

## Avoid Long Lines and Tiny Text

Writing long lines of text and implementing tiny font sizes is another example of wanting to get the most out of your screen. Arguments for designing like this are some we have seen already:

* "Users hate scrolling"
* "We want efficient use of screen real-estate"

The rule of thumb for web typography is to write no more than nine words per line. When the end-user is finished reading a line, their eyes need to be able to find the next line. So, if a line is too long, it is harder for their eyes to move on.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/long-lines.png" class="no-border" >}}

### Whitespace Is Not Wasted Space

Consider the popular blogging platform [Medium.com](https://blog.prototypr.io/common-ux-mistakes-made-by-business-developers-e837d0b31379). Have you ever noticed how much screen real estate they "waste"? That is because what may be called "waste" is actually an investment. It presents the impression that if you can afford to invest that much space into a page, the text must be important (and if the text is not important, you should get rid of it anyway).

For more information, see [A Typographic Approach to Email](https://blog.weare1910.com/post/78113100010/a-typographic-approach-to-email).

## Do Not Double Up the Pop-Ups

Have you ever pressed a button in a mobile app that opens a notification pop-up window, and in that notification there is another button leading to another pop-up window?

The main argument for a UX Designer implementing something like this is the following:

* "The user will have more context awareness"

However, the problem with such a design is that the end-user will lose the mental model of where they are in the flow of app pages or the process. They will be more distracted, no matter if they close the second pop-up window and return to the first pop-up window or return to the original screen.  

{{< figure src="/attachments/howto8/front-end/ux-best-practices/pop-up.png" class="no-border" >}}

### Avoid One Too Many Pop-Up Windows

The best practice here is to implement one of the following solutions:

* Turn the first pop-up window into a page itself, or
* Convert the second pop-up window into an inline message in the first pop-up window

## Lay Your Cards on the Table 

Cards are trending in the UX world at the moment. Single cards are nice, but what about a series of cards in another card? 

An argument for implementing such a design would be the following:

* "The cards are nested in order to create visual hierarchy”

UX Designers often talk about visual hierarchy, which is the way elements are organized on a screen to communicate their importance to the end-user. Physical symbolism—such as cards—was introduced into the visual hierarchy to present information in a certain way. Because playing cards are of equal size in a traditional card deck, digital cards placed on, under, or next to other cards can communicate certain states and relationships between information. However, when you nest a card inside another card, the end-user's mental model of what you can do with the cards starts to break down. This end-user may even start to question the relationships of other objects in the UI, thus further compromising the design hierarchy in your app.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/cards.png" class="no-border" >}}

### Do Not Nest Cards

Instead of nesting cards in your design, place them next to each other (or at least close to each other). Or, place them in a ribbon spread (like how playing cards are spread on a casino table).

## Plan Your Forms Carefully

A UX Designer has to make a lot of decisions about forms. For example, should there be a long list of form inputs? Should the form be broken up in to multiple steps? Or maybe there should be three columns of form inputs, so that they all fit into a single screen?

The main argument for including a lot of form fields in one page is an argument we have seen before:

* “Users hate scrolling”

Again, the issue here is not the need to scroll, but the amount of information on the screen (meaning, how many form fields are visible on the screen at a single time). Like buttons, the number of form fields should be reduced to the minimal number possible that can still provide context and ease-of-use.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/forms.png" class="no-border" >}}

### Always Use a Single Column

The best practice for designing forms is to put input fields in a single column. This will make it easier for the end-user to continue their flow down the page and check off each section.

### Think About the Story You Are Telling

Sometimes your app's form fields reflect the journey the end-user is embarking on (for example, onboarding) or have important consequences (for example, a tax questionnaire). When you think about the story you are telling, look for the best points to break up your forms into multiple pages. Doing so will give you visual space to create breathing room for the end-user and explain to them what they are doing and why it is important.

### Consider What Should Go in Drop-Down Menus

If there are only 2–5 form field items to choose from, do not put them in a drop-down menu. This might seem like an elegant solution, but it will not be worth the user's effort and clicks. Placing radio buttons is a friendlier approach.

### Read More

For more information on planning form design, see the following:

* [Design Better Forms](https://uxdesign.cc/design-better-forms-96fadca0f49c?epik=0KSYeE_IWH4Bw)

* [Single Page or Multi-Page Forms?](https://ux.stackexchange.com/questions/36956/single-page-or-multi-page-forms)

## Make the Purpose of Each Button Clear

When designing a series of app pages, a UX Designer should employ certain elements on each page that will help an end-user get oriented. As a parallel, you may think that buttons do not need to be consistent, because the end-user only needs to understand the button in the context of a particular page.

An argument for designing buttons inconsistently may be something like this:

* "That's the way Apple and Google do it”

However, consistency in button design is important for enabling the user to progress through your app smoothly.

{{< figure src="/attachments/howto8/front-end/ux-best-practices/buttons.png" class="no-border" >}}

### Plan the Position, Color, and Label

The most common button examples that raise questions are "Accept" and "Cancel." As a UX Designer, you must decide which one you put on the left and the right, in order to establish a relationship between them that the end-user can easily understand. You also need to consider the button colors and labels.

The rule of thumb for button design is that, when the end-user moves forward in an app flow, that button should be designed in the following way:

* It should be on the right
* It should have the color green
* It should have a label that explains what it does (for example, “Accept,” “Proceed,” or “Order").

However, this can get confusing with “destructive tasks,” such as when the end-user wants to cancel a subscription. In this scenario, you would need to consider whether the button label should be “Cancel” or “Cancel subscription."

For more information, see [The Microcopyist: Cancellation, Confirmation, Conflagration](https://uxdesign.cc/the-microcopyist-cancellation-confirmation-conflagration-8a6047a4cf9).

## Quick Summary

These are the basic UX best practices outlined in this document:

* Do not use more than nine buttons on a page
* Do not write more than nine words per line in the UI
* Only use drop-down menus as a last resort to present options to the end-user
* Give every page a header
* When a page is more than one level deep, give it breadcrumb
* When the end-user has to perform multiple steps, show the steps
* Do not place pop-up window in another pop-up window
* Do not nest a card in a card
* Keep form fields in a single column
* Give descriptive names to buttons

## Read More

* [Common UX Mistakes Made by Business Developers](https://blog.prototypr.io/common-ux-mistakes-made-by-business-developers-e837d0b31379)
