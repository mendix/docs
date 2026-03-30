---
title: "Introduction to Accessibility in Mendix"
linktitle: "Accessibility Introduction"
url: /refguide/accessibility-introduction/
weight: 20
description: "Describes an introduction on accessibility in general and how to get started making your apps more accessible."
---

## Introduction

This guide will give an overview on what accessibility is, what the Web Content Accessibility Guidelines (WCAG) are, and how they apply to you. This guide will also cover the accessibility options in Studio Pro.

## Accessibility Overview

Accessibility enables various types of people to use your application, leading to wider user bases and easier development. To achieve an accessible app, consider people with all levels of ability. Take blindness (partial or full) as an example. Being blind means being dependent on assistive technologies, such as screen readers, to read websites out to you. 

However, screen readers must be able to programmatically understand the website to accurately read it out to the user. Something that can hinder this is if the component only looks like something, like a `div` styled and scripted like a button. This button would be inaccessible to visually-impaired users, because screen readers would not detect it. To fix this, you can either use ARIA ([ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)) to add to that `div` and patch that functionality back in. Ideally, though, you should add a semantic HTML button instead:

```html
<button>this is a semantic html button</button>
```

Screen readers would pick the button up, and no extra configuration is needed to help them understand it.

However, accessibility serves more than visually-impaired users; it also includes (but is not limited to) users such as:

* People who are deaf or hard of hearing and rely on subtitles to understand a video
* People with a cognitive disability who struggle to recall the required information they need to enter
* People who get too distracted by flashy animations on your webpage, and therefore cannot read it
* Neurodivergent people who may encounter barriers that make it difficult, if not impossible, to use a website

Another often overlooked accessibility concern is situational accessibility. For instance, people trying to use their laptops outside in the sun usually have trouble reading webpages. WCAG also covers those kinds of scenarios, requiring websites to have enough contrast so that they are readable in various contexts. New parents, for example, probably recognize the situational disability of having a child on their arm and trying to use a touchscreen.

## Web Content Accessibility Guidelines (WCAG)

Considering all these aspects of accessibility is significant. If everyone had to start from scratch, making apps accessible would take significant time. That is why the World Wide Web Consortium (W3C) created the Web Content Accessibility Guidelines (WCAG). These guidelines help you make your application accessible to a larger audience and improve its usability for everyone else. (Improving accessibility for a small group and finding out that a considerable group benefits from it is called the [curb cut effect](https://en.wikipedia.org/wiki/Curb_cut_effect).)

These guidelines are also the basis for various laws, including those of the EU and the US. The European Accessibility Act (EAA) is based on version 2.1 level AA.

Version 2.2 of these guidelines is available, and the expectation is that you will adopt 2.2 over 2.1 in the near future. Since the difference between 2.1 and 2.2 is minimal, 2.2 is the version you want to target. For more information, see the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

The version currently used by the EAA is Web Content Accessibility Guidelines (WCAG) 2.1

The guidelines are organized into four distinct categories. Each category has a subset of Success Criteria (SC), which are the specific rules you have to comply with.

### Perceivable

Software components (SCs) that fall under the [perceivable](https://www.w3.org/TR/WCAG22/#perceivable) principle are about contrast, correctly labeling your interactive components, and providing text alternatives for things that are only visual (for example, an informative image that gives context to a page needs to have a description in the alt text attribute).

### Operable

SCs that fall under the [Operable Principle](https://www.w3.org/TR/WCAG22/#operable) are about being able to operate your application. This concerns focus, keyboard navigability, and supporting different types of input devices.

### Understandable

SCs that fall under the [Understandable Principle](https://www.w3.org/TR/WCAG22/#understandable) make the page or action as easy to understand as possible. If you have a menu bar, for example, it should function consistently across all pages. If you encounter errors on your page, the system should provide you with as much information as possible. 

The instruction *"Please fill out all the input fields"* is insufficient for someone to quickly understand what is happening. They might think they have already done so, and will therefore not understand this as an error message. A message like *"Error: The required field' address' was not provided"* gives more information on where and how that user made an error.

### Robust

The [Robust Principle](https://www.w3.org/TR/WCAG22/#robust) SCs are specifically about compatibility with assistive technology, like the previously mentioned screen reader.

## Using Mendix's Accessibility Options

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/text-box-label.png" alt="Text box widget properties showing label, aria-required and autocomplete options." width="300" >}}

### Labels

When a screen reader reaches an input field, it will read the label text aloud. This label must clearly describe the information required.

### Aria-Required

Various input widgets have the option to add `aria-required` to the input field. It will inform users of screen readers that this is a required field. Usually, you would have this information in styling (for example, using a star to indicate required fields). Adding this attribute makes sure the programming of your application matches the visuals required by [Success Criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships).

{{% alert color="info" %}}
Do not set the **Validation Type** to **Required**. If you do, a validation message will appear as soon as the user exits the input field. Instead, validation for required fields should occur only when the user submits the form or attempts to proceed to the next step.
{{% /alert %}}

### Autocomplete

Adding autocomplete to input fields can help individuals with reduced cognitive abilities by reducing the effort needed to fill out forms (per the [Success Criterion 1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose)). When the first name and last name fields are correctly tagged, browsers can auto-fill these inputs. However, while beneficial for some, autocomplete can hinder users of assistive technologies, as it complicates the form-filling process. In such cases, it may be better to turn off this feature.

You should avoid using autocomplete in the following situations:

* **Sensitive Information** — Fields that collect sensitive data, such as credit card numbers, government IDs, or personal identification numbers. It helps protect user privacy and prevents unauthorized access to sensitive information.
* **Public Computers** — If forms are likely to be filled out on public or shared computers, disabling autocomplete can prevent users from accessing previously entered information.
* **One-Time Inputs** — For fields that require unique, one-time entries (like a temporary PIN), autocomplete can be unnecessary and may confuse users.
* **Complex Forms** — In lengthy or complex forms, autocomplete might lead to incorrect autofill suggestions, which can frustrate users and lead to errors.
* **Regulatory Compliance** — Certain regulations may require that sensitive information not be stored or auto-filled. Disabling autocomplete can help ensure compliance with such regulations.

### Aria Labels

ARIA labels are available in several widgets. ARIA labels take precedent over anything else available for that element. A good ARIA label should describe the element the user is currently interacting with. It is helpful in situations where a visible label would be redundant due to the context of the input field. The ARIA label provides an opportunity to add extra context for [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value):

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/combobox-aria-labels.png" alt="Combobox widget properties showing ARIA labels options." width="300" >}}

{{% alert color="info" %}}
While ARIA labels are very useful for adding context, using them excessively can even hurt accessibility. An example could be a situation where you have a button that says **Send**, if you add an ARIA label with a description such as **Click this button to reserve your spot in line!** that new text takes precedent over the **Send** text of the button. It would impact voice control. If a user who uses voice control said *Press send*, it would no longer activate that button.
{{% /alert %}}

### Alternative Text (Image widget)

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/static-image-alt-text.png" alt="Static Image widget properties showing the Alternative Text option." width="300" >}}

Adding alternative text that explains an image helps visually impaired users understand the page (as required by [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content)). It should be left empty if the image is purely decorative. Informative images require alt text, which should be a brief description explaining what is happening in the image. If there is text in the image that is not available in another form, it should be included in the alt text.

#### Decorative vs. Informative Images

There is a key difference between decorative images and informative images. Decorative images add no extra context to the page. Informative images do contain information the user is intended to learn. One decorative example would be a festive page with images of confetti all over it; they do not each ne to be tagged as **Piece of confetti**. That would not enhance the user's understanding of the page. It would actually make it harder to navigate since they would hear **Piece of confetti** repeatedly as they are trying to read the page.

### Tab Index

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/static-image-alt-text.png" alt="Static Image widget properties showing the Tab index option." width="300" >}}

The `tabindex` helps users who only use a keyboard navigate the page (as required by [Guideline 2.1 Keyboard Accessible](https://www.w3.org/TR/WCAG22/#keyboard-accessible)). The <kbd>Tab</kbd> key allows users to navigate through interactive elements on a website, such as links, buttons, and form fields. Any element that can be interacted with should have a tab index.

The way someone with a screen reader navigates the page involves more than just the tab. There is a special key to navigate the page and have it read out paragraphs (for example with the <kbd>VoiceOver</kbd> key + arrows in Mac OS). Assigning a `tabindex` to every element on the page is unnecessary, as it makes the page more challenging to navigate.

To ensure that all interactive elements are accessible via the <kbd>Tab</kbd> key:

* Make sure all clickable elements are focusable.
* Use the `tabindex` attribute correctly. A value of 0 allows an element to be part of the default tab order.

{{% alert color="info" %}}
Avoid using positive `tabindex` values, as they can confuse users by altering the natural focus order.
{{% /alert %}}

### Role Type

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/action-button-role-type.png" alt="Action button widget properties showing role type option." width="300" >}}

Changing the role type helps screen readers understand the kind of element you added ([Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value)). You may have added a link, but the function performed is that of a button (instead of navigating to a new page, it performs an action on that page). In this case, it is better to change the element to a button. Changing role types can lead to confusion for users of assistive technologies, as incorrect roles may misrepresent the function of an element, making it harder for users to navigate and interact with content. Whenever possible, always choose semantic HTML over [ARIA (Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria/) roles.

### Accessibility Helper

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/accessibility-helper.png" alt="The Accessibility helper widget." width="300" >}}

If you need additional settings or attributes for your page, you can add them using the accessibility helper. It allows you to add attributes to widgets that are not available in the settings. It ensures you can add the necessary extra attributes without needing access to the codebase of that widget.

## Key Styling Considerations

The key elements to consider when styling are contrast and the focus indicator.

### Contrast {#contrast}

There are two specific requirements related to contrast: [Success Criterion 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) for text contrast, and [Success Criterion 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast) for user interface components and graphical objects.

#### Text Contrast {#non-textcontrast}

In the WCAG, you can find the calculation method, and there are many contrast checkers available, such as the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). There are some exceptions, such as for big text, but we recommend sticking to 4.5:1. 

In **custom-variables.scss**, you can find the following for font color:

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

#### Non-Text Contrast

Non-text contrast needs to be 3:1; this means that any critical inputs or buttons need to have this contrast with the background. An example could be an input field. There needs to be sufficient contrast so that the input field is clearly visible. It could be the contrast of the field itself with the background, or a border line around the input field with the background.

In **custom-variables.scss**, you could define the button background as such:

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

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/group-box-focus-indicator.png" alt="A group box widget with an active focus indicator" width="300" >}}

The focus indicator helps users identify where the focus currently is on the page. There are a few success criteria that describe what the focus indicator should look like.

[Focus visible](https://www.w3.org/TR/WCAG22/#focus-visible) The focus should be visible at all times; however, this criterion does not specify how. In theory, for this SC, it could be a single pixel on the right of the element. However, other criteria provide more specific guidance on what it should look like.

[Use of color](https://www.w3.org/TR/WCAG22/#use-of-color): This indicates that a single sensory characteristic alone is insufficient to convey meaning. It counts for everything and thus also applies to the focus indicator. Using only color to indicate a focus change would fail this criterion. The focus indicator should use an alternative method. The most common thing is to change the shape of the element while it has focus. It could be something as simple as a box around the element that counts as changing the shape of the component.

The rules as described in [Non-Text Contrast](#non-textcontrast) also apply to the focus indicator. You can set the color of the input focus indicator here: 

```css
// Form Input styling
...
$form-input-border-focus-color: $brand-primary;
```

## Other Accessibility Quick Wins

### Page Titled

{{< figure src="/attachments/refguide/modeling/best-practices/accessibility-best-practices/page-properties-title.png"  alt="Page properties title option." width="300" >}}

[Page titled](https://www.w3.org/TR/WCAG22/#page-titled): Every page needs a meaningful name that describes the page. Entitling one just **Page**, for example, is not enough to make the page easy to find among other tabs. 

### Error Messages

Make sure you app has comprehensive error messages. Do they describe the situation clearly? Do they provide sufficient guidance on how to resolve the error? An example of a poor error message would be **Please fill in all required fields**. Since the user might be under the impression that they have already done that, saying **Please fill in address** would give the user more information on how they can resolve the error.

More information on this can be found in the following SCs:

* [WCAG Error Identification](https://www.w3.org/TR/WCAG22/#error-identification)
* [WCAG Error Suggestion](https://www.w3.org/TR/WCAG22/#error-suggestion)
* [WCAG Error Prevention](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data)

### Link Purpose

[Link purpose](https://www.w3.org/TR/WCAG22/#link-purpose-in-context) refers to the naming of links in text. For example:

`<a href="url">Click here</a> to learn more about Nanoflows.`

This is not good for accessibility, since the link itself only says 'Click here' and does not give information on what page the link will take you to. For example:

`To learn more, you can visit our <a href="url">Nanoflow explanation page</a>.`

 For ideal accessibility instead of using 'Click here' to be the link text, the link's destination should be clear from the link text ('Nanoflow explanation page' in the previous example). This would help users understand the purpose of each link, enabling them to decide whether to follow it. Also, assistive technology can provide users with a list of links on the website. Having the destination of the link in the link itself helps it stand out in that list and makes it clear where that link would take the user.

## Testing Accessibility

### Automated Accessibility Testing

There are multiple options for running automatic tests on your pages. These tools are great for indicating the accessibility of your website and suggesting areas for improvement. W3C offers a [list of tools for checking if your web content meets accessibility guidelines.](https://www.w3.org/WAI/test-evaluate/tools/list/)

### Manual Accessibility Testing

Although it is the most time-consuming, a manual test is a good way to assess your application's accessibility when you lack access to users with different abilities. The best way to test your application is with real users.

Doing just a few checks already goes a long way:

* **Keyboard navigability** — Can you reach all the input elements with your keyboard? Does your <kbd>Tab</kbd> key take you through all the elements of your page?
* **Screen reader** — Is all the information clear to a sighted person also available to a low vision or non-sighted person? Are labels of input fields being read out correctly?
* **Color contrast** — Does both text and non-text content have enough contrast?

Find more info on this in [the W3C Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)

## Read More

* [Mendix Academy's Accessibility Learning Path](https://academy.mendix.com/link/paths/141/Improve-Your-App-Accessibility).
* [Mendix Accessibility Conformance: Ensure Your Apps Are Accessible](https://www.mendix.com/evaluation-guide/app-lifecycle/develop/ux-multi-channel-apps/accessibility/) 
