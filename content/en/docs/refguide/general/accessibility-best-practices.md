---
title: "Introduction to Accessibility in Mendix"
linktitle: "Accessibility introduction"
url: /refguide/accessibility-introduction/
weight: 10
description: "Describes an introduction on accessibility in general and how to get started making your apps more accessible."
---

## Introduction

This guide we’ll go over what accessibility is, what the WCAG is and how it’s relevant to you. We'll also go over the accessibility options in Studio Pro. 

## What is accessibility?

Accessibility in our context refers to enabling the ability for everyone to use your application and designing your application specifically for that. To be able to do that you have to consider people with all levels of ability. The example that springs to mind the most is people who are blind to any degree. Being blind means being dependent on a screenreader to read the website out to you. However, the screenreaders need to be able to programatically understand the website to be able to properly read that out to the user and convey the information as was intended by the website maker. 
An example of what can hinder this is if the component only looks like something, like a div styled and scripted like a button. This button would be inaccessible for blind users since it would not get picked up by screenreaders.
To fix this, you can either use ARIA (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) to add to that div in order to patch that functionality back in. Ideally though, you'd add a semantic html button instead. 

<button>this is a semantic html button</button>

This would be picked up by screenreaders, and there's no extra configuration needed to help screenreaders understand it.

However, accessibility goes further than that, it also includes people who are deaf or hard of hearing and rely on subtitles to understand a video. Or people with a cognitive disability that have trouble remembering the required information they need to enter. Or people who get too distracted by flashy animations on your webpage and therefor can't read what it says.

Another often overlooked accessibility concern is situational accessibilty. Everyone has probably tried to use their laptop while outside in the sun and had trouble reading the page. The WCAG also covers those kinds of scenarios, requiring websites to have enough contrast so that they’re readable in all kinds of contexts. New parents probably recognize the situational disability from having a child on your arm and trying to use a touchscreen.

## The WCAG

Having to consider all these things is a lot, and if everyone would have to reinvent the wheel on that it would take a significant amount of time. That’s why the Web Content Accessibility Guidelines (WCAG) were created. These guidelines help you make your website/application accessible to a larger audience and help you improve the usability of it for everyone else. (Improving accessibility for a small group and finding out a large group benefits from it is called the [curb cut effect](https://en.wikipedia.org/wiki/Curb_cut_effect).) 

These guidelines are also the basis for various laws, including for the EU and the US. The European Accessibility Act (EAA) is based on version 2.1 level AA.

Currently version 2.2 of these guidelines is available, the expectation is that this version will be adopted over 2.1 in the near future. Since the difference between 2.1 and 2.2 is minimal, that’s the version you probably want to target. You can find the WCAG 2.2 here: [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)

The version currently used by the EAA can be found here: [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

There’s 4 categories that these guidelines are organized in. Each category has a subset of Success Criteria (SC) which are the specific rules you have to comply with.

### Perceivable
These SC’s are about contrast, correctly labeling your interactive components and providing text alternatives for things that are only visual (for example an informative image, that provides context to a page, needs to have a description in the alt text)

### Operable
These SC’s are about being able to operate your website/application. This concerns focus, keyboard navigability and supporting different types of input devices.  

### Understandable
These SC’s are about making the page or action as easy to understand as possible. If you have a menu bar for example, it should be operating the same on each page. If you have errors on your page they should give you as much information as possible.
“Please fill out all the input fields“ is not enough for someone to be able to quickly understand what’s happening. They might be under the impression that they've already done so, and will therefore not understand this as an error message. Something like “Error: The required field 'address' was not provided“ gives more information on where and how that user made an error. 

### Robust

The SC’s are specifically about compatibility with assistive technology, like the previously mentioned screenreader.

## Using Mendix' accessibility options

### Labels

Starting simple, the text of a label will be read out when a screenreader reaches an input field. It should accurately describe the text that needs to be filled in.

### Aria-required

<add image of this setting>

Various input widgets have the option to add aria-required to the input field. This will tell users of screenreaders that this is a required field. Usually you’d have this information in styling (for example using a star to indicate required fields). Adding this attribute makes sure the programming of your website matches the visuals (required by https://www.w3.org/TR/WCAG22/#info-and-relationships ).

### Autocomplete

<add image of this setting>

Adding autocomplete to input fields helps people with reduced cognitive ability to reduce the amount of thinking needed to fill out a form. By tagging the firstname and lastname fields accordingly the browser of the user can prefill those inputs. (required by https://www.w3.org/TR/WCAG22/#identify-input-purpose )

### Aria-labels

<add image of this setting>

Aria labels are available in a number of widgets. Aria-labels take precedent over anything else that’s available for that element. It should describe the element the user is currently interacting with. This is useful for situations where a visible label would be redundant because of the context of the input field. The aria-label gives the opportunity to add that extra context. 

Note: While it’s very useful for adding context, you can go overboard with aria-labels and even hurt accessibility when using them. An example could be a situation where you have a button that says “Send“, if you’d add an aria-label with a description such as “Click this button to reserve your spot in line!“ that new text takes precedent over the “Send“ text of the button. This would impact voice control, if a user that uses voice control would say “press send“, it would no longer activate that button.
### Alternative text (image widget)

<add image of image widget>

Adding an alternative text that explains the image helps blind users understand the page. This should be left empty if the image is purely decorative. Informative images do need to have alt text, this should be a short text that explains what's happening in the image. If there's text in the image that's not available in another form it should also be added to the alt text. 

#### Decorative vs informative images
For images there's a difference between decorative images and informative images. Decorative images are ones that add no extra context to the page. An extreme example would be a festive page with images of confetti all over it, they don’t need to all be tagged as “Piece of confetti“. It doesn’t add to the users understanding of the page and would actually make it harder to navigate since they would hear “piece of confetti“ continually as they’re trying to read the page. 

### Tab index

The tab index helps users who only use a keyboard navigate the page. The tab key is used to navigate all input elements, these include buttons, input fields, text boxes, check boxes etc. Any element that can be interacted with, should have a tab index. 

The way someone with a screenreader navigates the page isn’t just with tab. There’s a special key to go through the page an have it read out paragraphs (voiceoverkey + arrows). It’s not needed to put a tab-index on every element of the page, and it actually would make your page harder to navigate if you set it up that way.
### Role type

Changing the role type will help screenreaders know what type of element you’ve added. Maybe you’ve added a link but the actual action that preforms is that of a button (instead of navigating to a new page it preforms an action on that page). You could make the link have the role button to make sure the screenreader knows what's going on.
### Accessibility helper

If you require extra settings or attributes for your page, you can add them with the accessibility helper. This allows you to add attributes to widgets that don’t have that available in the settings. This ensures you can add those needed extra things without needing access to the codebase of that widget. 
## What to look out for with styling

The main things to keep in mind when styling are contrast and the focus indicator.
### Contrast

There’s two specific requirements to do with contrast.
#### Text contrast

Text contrast needs to be 4.5:1, the way this is calculated is described in the WCAG, but there are plenty of contrast checkers available (for example the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)). There are some exceptions for example for ‘big text’, but to err on the side of caution it’s best to just stick to 4.5:1.

In custom-variables.scss you can find the following for font color:
// Default Font Size & Color
$font-size-default: 14px;
$font-color-default: #0a1325;

Further on in the same document, the background color should be defined:
// Background Colors
// Backgrounds
$bg-color: #f8f8f8;
$bg-color-secondary: #fff;

In this case with the text color being “#0a1325“ and background color being “#f8f8f8” the contrast ratio here is 17.45:1, well over 4.5:1.

#### Non-text contrast

Non text contrast needs to be 3:1, this means that any important inputs or buttons need to have this contrast with the background. An example could be an input field, there needs to be enough contrast there that it’s clear where the input field actually is. This could be the contrast of the field itself with the background, or a border line around the input field with the background.

In custom-variables.scss the button background could be defined as such:
```//== Step 1: Brand Colors
$brand-default: $gray-primary;
$brand-primary: #264ae5;
...
// Background Colors
// Backgrounds
$bg-color: #f8f8f8;
$bg-color-secondary: #fff;
...
// Button Background Color
$btn-default-bg: #fff;
$btn-primary-bg: $brand-primary;
```

Our button color is the same as $brand-primary and has the value 264AE5, the background is F8F8F8. The contrast here is 6.19:1. Also well over 3:1. 

A situation where this would fail would be if we change our button color to $gray-light which is also defined in the custom-variables.scss file. The color contrast of A9ACB3 and F8F8F8 is only 2.14, which isn’t enough for everyone to be able to see the button in that case. 

### Focus

The focus indicator helps users identify where the focus currently is on the page. There’s a few success criteria that describe what the focus indicator should look like.

<add image example of a focus indicator>

focus visible: the focus should be visible at all, this criteria does not specify how. In theory for this SC it could be a single pixel on the right of the element. However, there’s other criteria that give a bit more guidance on what it should look like.

Use of color https://www.w3.org/TR/WCAG22/#use-of-color : this states that nothing can be indicated with one sensory characteristic alone. This counts for everything and thus also applies to the focus indicator. Using only color to indicate a focus change would fail this criteria. The focus indicator should use something else, the most common thing is to change the shape of the element while it’s focused. This could be something as simple as a box around the element, that counts as changing the shape of the component. 

The rules as described in (link back to non text contrast) also apply for the focus indicator. The color of the input focus indicator can be set here:
// Form Input styling
...
$form-input-border-focus-color: $brand-primary;
## Other quick wins
### Page titled

Every page needs a meaningful name that describes the page. Having just "Page" for example isn't enough to make the page easy to find between other tabs. SC 2.4.2. [Page titled](https://www.w3.org/TR/WCAG22/#page-titled)

<add general page title input thing>

### Error messages

Make sure you’ve got comprehensive error messages, do they describe the situation clearly? Do they offer enough guidance on how the fix the error? An example of a bad error message here would be having an error “please fill in all required fields“. Since the user might be under the impression that they have already done that. Instead saying “Please fill in address“ would give the user more information on how they can resolve the error.

(
[WCAG Error Identification](https://www.w3.org/TR/WCAG22/#error-identification), [WCAG Error Suggestion](https://www.w3.org/TR/WCAG22/#error-suggestion), [Error Prevention](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data)

### Link purpose
[Link purpose](https://www.w3.org/TR/WCAG22/#link-purpose-in-context), instead of having a link say “click here“ it should be clear from the surrounding text where that link leads. Ideally, that description would be part of the link itself: https://www.w3.org/TR/WCAG22/#link-purpose-link-only (since this is a level AAA Success Criteria, it’s usually not required). 
## How to test whether your app is accessible
### Automated accessibility testing

There’s multiple options to run automatic tests on your pages, these are great for giving you an indication on the accessibility of your website and can suggest things to improve. W3C offers a list of such tools: [List of tools for checking if your web content meets accessibility guidelines.](https://www.w3.org/WAI/test-evaluate/tools/list/)
### Manual accessibility testing

While also being the most time consuming, the best way to test your application for accessibility is to do a manual test. 

Doing just a few checks already goes a long way:

    Keyboard navigability, can you reach all the input elements with your keyboard? Does your tab key take you through all the elements of your page?

    Screenreader, is all the information that’s clear to a sighted person also available to a blind person? Are labels of input fields being read out correctly?

    Color contrast, does both text and nontext content have enough contrast? 

More info on this can be found on this page by the W3C: [Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)

## Read more

For a more in depth look at the accessibility learning path at the [Academy Accessibility learning path](https://academy.mendix.com/link/paths/141/Improve-Your-App-Accessibility).

Mendix' full accessibility report can be found here: 
Mendix Accessibility Conformance: Ensure Your Apps Are Accessible 




