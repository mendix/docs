---
title: "Introduction to Accessibility in Mendix"
linktitle: "Accessibility introduction"
url: /refguide/accessibility-introduction/
weight: 10
description: "Describes an introduction on accessibility in general and how to get started making your apps more accessible."
---

## Introduction

In this guide, we'll go over what accessibility is, what the Web Content Accessibility Guidelines (WCAG) are, and how they're relevant to you. We'll also go over the accessibility options in Studio Pro.

## What is accessibility?

Accessibility in our context refers to enabling everyone to use your application and designing it specifically for that. To achieve this, you must consider people with all levels of ability. The example that springs to mind the most is people who are blind to any degree. Being blind means being dependent on assistive technologies, such as screen readers, to read the website out to you. However, screen readers must be able to programmatically understand the website to accurately read it out to the user and convey the information as intended by the website maker. An example of what can hinder this is if the component only looks like something, like a div styled and scripted like a button. This button would be inaccessible to visually impaired users because screen readers would not detect it. To fix this, you can either use ARIA ([ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)) to add to that div to patch that functionality back in. Ideally, though, you'd add a semantic HTML button instead.

```html
<button>this is a semantic html button</button>
```

Screen readers would pick it up, and no extra configuration is needed to help them understand it.

However, accessibility goes further than that; it also includes people who are deaf or hard of hearing and rely on subtitles to understand a video. Or people with a cognitive disability who struggle to recall the required information they need to enter. Or people who get too distracted by flashy animations on your webpage, and therefore can't read what it says. It also includes neurodivergent individuals who may encounter barriers that make it difficult, if not impossible, to use a website.

Another often overlooked accessibility concern is situational accessibility. For instance, people trying to use their laptops outside in the sun usually have trouble reading the page. The WCAG also covers those kinds of scenarios, requiring websites to have enough contrast so that they're readable in all sorts of contexts. New parents probably recognize the situational disability from having a child on their arm and trying to use a touchscreen.

## The Web Content Accessibility Guidelines (WCAG)

Considering all these things is a lot, and if everyone had to start from scratch, it would take a significant amount of time. That's why the World Wide Web Consortium (W3C) created the Web Content Accessibility Guidelines (WCAG). These guidelines help you make your application accessible to a larger audience and improve its usability for everyone else. (Improving accessibility for a small group and finding out that a considerable group benefits from it is called the [curb cut effect](https://en.wikipedia.org/wiki/Curb_cut_effect).)

These guidelines are also the basis for various laws, including those of the EU and the US. The European Accessibility Act (EAA) is based on version 2.1 level AA.

Currently, version 2.2 of these guidelines is available; the expectation is that you will adopt this version over version 2.1 in the near future. Since the difference between 2.1 and 2.2 is minimal, that's the version you want to target. You can find the WCAG 2.2 here: [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

The version currently used by the EAA is Web Content Accessibility Guidelines (WCAG) 2.1

The guidelines are organized into four distinct categories. Each category has a subset of Success Criteria (SC), which are the specific rules you have to comply with.

### Perceivable
SCs that fall under the [Perceivable Principle](https://www.w3.org/TR/WCAG22/#perceivable) are about contrast, correctly labeling your interactive components, and providing text alternatives for things that are only visual (for example, an informative image that gives context to a page needs to have a description in the alt text attribute).

### Operable
SCs that fall under the [Operable Principle](https://www.w3.org/TR/WCAG22/#operable) are about being able to operate your application. This concerns focus, keyboard navigability, and supporting different types of input devices.

### Understandable
SCs that fall under the [Understandable Principle](https://www.w3.org/TR/WCAG22/#understandable) make the page or action as easy to understand as possible. If you have a menu bar, for example, it should function consistently across all pages. If you encounter errors on your page, the system should provide you with as much information as possible. The instruction "Please fill out all the input fields" is insufficient for someone to understand what's happening quickly. They might be under the impression that they've already done so, and will therefore not understand this as an error message. Something like "Error: The required field' address' was not provided" gives more information on where and how that user made an error.

### Robust

The [Robust Principle](https://www.w3.org/TR/WCAG22/#robust) SCs are specifically about compatibility with assistive technology, like the previously mentioned screenreader.

## Using Mendix' accessibility options

### Labels

When a screen reader reaches an input field, it will read the label text aloud. This label must clearly describe the information required.

### Aria-required

<add image of this setting>

Various input widgets have the option to add aria-required to the input field. It will inform users of screen readers that this is a required field. Usually, you'd have this information in styling (for example, using a star to indicate required fields). Adding this attribute makes sure the programming of your application matches the visuals required by [Success Criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships).

Tip: Do not set the Validation Type to "Required." If you do, a validation message will appear as soon as the user exits the input field. Instead, validation for required fields should occur only when the user submits the form or attempts to proceed to the next step.

### Autocomplete

<add image of this setting>

Adding autocomplete to input fields can help individuals with reduced cognitive abilities by reducing the effort needed to fill out forms ([Success Criterion 1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose)). When the first name and last name fields are correctly tagged, browsers can auto-fill these inputs. However, while beneficial for some, autocomplete can hinder users of assistive technologies, as it complicates the form-filling process. In such cases, it may be better to turn off this feature.

You should avoid using autocomplete in the following situations:

* **Sensitive Information**: Fields that collect sensitive data, such as credit card numbers, government IDs, or personal identification numbers. It helps protect user privacy and prevents unauthorized access to sensitive information.

* **Public Computers**: If forms are likely to be filled out on public or shared computers, disabling autocomplete can prevent users from accessing previously entered information.

* **One-Time Inputs**: For fields that require unique, one-time entries (like a temporary PIN), autocomplete can be unnecessary and may confuse users.

* **Complex Forms**: In lengthy or complex forms, autocomplete might lead to incorrect autofill suggestions, which can frustrate users and lead to errors.

* **Regulatory Compliance**: Certain regulations may require that sensitive information not be stored or autofilled. Disabling autocomplete can help ensure compliance with such regulations.

### Aria-labels

<add image of this setting>

Aria labels are available in several widgets. Aria-labels take precedent over anything else that's available for that element. It should describe the element the user is currently interacting with. It is helpful in situations where a visible label would be redundant due to the context of the input field. The aria-label provides an opportunity to add extra context for [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value). 

**Important**: While aria-labels are very useful for adding context, using them excessively can even hurt accessibility. An example could be a situation where you have a button that says "Send ", if you add an aria-label with a description such as "Click this button to reserve your spot in line! "that new text takes precedent over the "Send "text of the button. It would impact voice control. If a user who uses voice control said "press send ", it would no longer activate that button.

### Alternative text (Image widget)

<add image of image widget>

Adding an alternative text that explains the image helps visually impaired users understand the page as required by [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content). It should be left empty if the image is purely decorative. Informative images require alt text, which should be a brief description explaining what's happening in the image. If there's text in the image that's not available in another form, it should be included in the alt text.

#### Decorative vs informative images

For images, there's a difference between decorative images and informative images. Decorative images add no extra context to the page. An extreme example would be a festive page with images of confetti all over it; they don't need to all be tagged as "Piece of confetti ". It doesn't add to the user's understanding of the page. It would actually make it harder to navigate since they would hear "Piece of confetti" continually as they're trying to read the page.

### Tab index

The tabindex helps users who only use a keyboard navigate the page (as required by [Guideline 2.1 Keyboard Accessible](https://www.w3.org/TR/WCAG22/#keyboard-accessible)). The Tab key allows users to navigate through interactive elements on a website, such as links, buttons, and form fields. Any element that can be interacted with should have a tab index.

The way someone with a screen reader navigates the page involves more than just the tab. There's a special key to navigate the page and have it read out paragraphs (i.e, VoiceOver key + arrows in Mac OS). Assigning a tabindex to every element on the page is unnecessary, as it makes the page more challenging to navigate.

To ensure that all interactive elements are accessible via the Tab key:
* Make sure all clickable elements are focusable.
* Use the tabindex attribute correctly. A value of 0 allows an element to be part of the default tab order.

Tip: Avoid using positive tabindex values, as they can confuse users by altering the natural focus order.

### Role type

Changing the role type helps screen readers understand the kind of element you've added ([Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value)). You may have added a link, but the function performed is that of a button (instead of navigating to a new page, it performs an action on that page). In this case, it is better to change the element to a button. Changing role types can lead to confusion for users of assistive technologies, as incorrect roles may misrepresent the function of an element, making it harder for users to navigate and interact with content. Whenever possible, always choose semantic HTML over [ARIA (Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria/) roles.

### Accessibility helper

If you need additional settings or attributes for your page, you can add them using the accessibility helper. It allows you to add attributes to widgets that are not available in the settings. It ensures you can add the necessary extra attributes without needing access to the codebase of that widget.
## What to look out for with styling

The key elements to consider when styling are contrast and the focus indicator.
### Contrast

There are two specific requirements related to contrast: [Success Criterion 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) for text contrast, and [Success Criterion 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast) for user interface components and graphical objects.

#### Text contrast
In the WCAG, you can find the calculation method, and there are many contrast checkers available, such as the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). There are some exceptions, such as for 'big text', but to err on the side of caution, it's best to stick to 4.5:1. 

In custom-variables.scss, you can find the following for font color:
```css
// Default Font Size & Color
$font-size-default: 14px;
$font-color-default: #0a1325;
```

Further on in the same document, the background color should be defined:
```css
// Background Colors
// Backgrounds
$bg-color: #f8f8f8;
$bg-color-secondary: #fff;
```

In this case with the text color being “`#0a1325`“ and background color being “`#f8f8f8`” the contrast ratio here is 17.45:1, well over 4.5:1.

#### Non-text contrast

Non-text contrast needs to be 3:1; this means that any critical inputs or buttons need to have this contrast with the background. An example could be an input field. There needs to be sufficient contrast so that the input field is clearly visible. It could be the contrast of the field itself with the background, or a border line around the input field with the background.

In custom-variables.scss, you could define the button background as such:
```css
//== Step 1: Brand Colors
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

Our button color is the same as $brand-primary, with the value `#264AE5`, and its background is `#F8F8F8`. The contrast here is 6.19:1, also well over 3:1.

A situation where this would fail would be if you change your button color to `$gray-light`, also defined in the `custom-variables.scss` file. The color contrast of `#A9ACB3` and `#F8F8F8` is only 2.14, which is insufficient for everyone to see the button.

### Focus

The focus indicator helps users identify where the focus currently is on the page. There are a few success criteria that describe what the focus indicator should look like.

<add image example of a focus indicator>

[Focus visible](https://www.w3.org/TR/WCAG22/#focus-visible) The focus should be visible at all times; however, this criterion does not specify how. In theory, for this SC, it could be a single pixel on the right of the element. However, other criteria provide more specific guidance on what it should look like.

[Use of color](https://www.w3.org/TR/WCAG22/#use-of-color): This indicates that a single sensory characteristic alone is insufficient to convey meaning. It counts for everything and thus also applies to the focus indicator. Using only color to indicate a focus change would fail this criterion. The focus indicator should use an alternative method. The most common thing is to change the shape of the element while it's focused. It could be something as simple as a box around the element that counts as changing the shape of the component.

The rules as described in "Non-text contrast" also apply to the focus indicator. You can set the color of the input focus indicator here: 

```css
// Form Input styling
...
$form-input-border-focus-color: $brand-primary;
```
## Other quick wins
### Page titled

[Page titled](https://www.w3.org/TR/WCAG22/#page-titled): Every page needs a meaningful name that describes the page. Having just "Page," for example, isn't enough to make the page easy to find among other tabs. 

<add general page title input thing>

### Error messages

Make sure you've got comprehensive error messages. Do they describe the situation clearly? Do they provide sufficient guidance on how to resolve the error? An example of a poor error message would be "Please fill in all required fields." Since the user might be under the impression that they have already done that, saying "Please fill in address" would give the user more information on how they can resolve the error.

More information on this can be found in the following SCs:
[WCAG Error Identification](https://www.w3.org/TR/WCAG22/#error-identification), [WCAG Error Suggestion](https://www.w3.org/TR/WCAG22/#error-suggestion), [WCAG Error Prevention](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data)

### Link purpose
[Link purpose](https://www.w3.org/TR/WCAG22/#link-purpose-in-context), instead of using "click here", the link's destination should be clear from the surrounding text. Ideally, that description would be part of the link itself. It would help users understand the purpose of each link, enabling them to decide whether to follow it. Also, assistive technology can provide users with a list of links on the website.

## How to test whether your app is accessible
### Automated accessibility testing

There are multiple options to run automatic tests on your pages. These tools are great for indicating the accessibility of your website and suggesting areas for improvement. W3C offers a [list of tools for checking if your web content meets accessibility guidelines.](https://www.w3.org/WAI/test-evaluate/tools/list/)
### Manual accessibility testing

Although it is the most time-consuming, a manual test is a good way to assess your application's accessibility when you don't have access to users with different abilities. The best way to test your application is with real users.

Doing just a few checks already goes a long way:
* Keyboard navigability: Can you reach all the input elements with your keyboard? Does your Tab key take you through all the elements of your page?
* Screen reader: Is all the information that's clear to a sighted person also available to a low vision or non-sighted person? Are labels of input fields being read out correctly?
* Color contrast: Does both text and non-text content have enough contrast?

Find more info on this in [the W3C Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)

## Read more

For a more in depth look at the accessibility, there's a learning path at the [Academy Accessibility learning path](https://academy.mendix.com/link/paths/141/Improve-Your-App-Accessibility).

Mendix' full accessibility report can be found here: 
[Mendix Accessibility Conformance: Ensure Your Apps Are Accessible](https://www.mendix.com/evaluation-guide/app-lifecycle/develop/ux-multi-channel-apps/accessibility/) 




