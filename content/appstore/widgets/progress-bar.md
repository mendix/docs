---
title: "Progress Bar"
category: "Widgets"
description: "Describes the purpose, features and configuration of the Progress Bar widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "app store", "marketplace component", "app store component", "widget", "progress bar", "bootstrap", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Progress Bar](https://appstore.home.mendix.com/link/app/48910/) widget displays a progress bar.

The widget:

- visually displays the percentual progress in the form of a bar based on a configurable range;
- offers out-of-the-box brand styling for the bar and background color with "Appearance" design properties;
- offers out-of-the-box options for different types of bars and support for animation.

## 2 Usage

The Progress Bar widget requires 3 values: a **Minimum** and **Maximum value** to describe the full range of the progress, and a **Current value** to indicate the progression on that range. These values can be provided in 3 different ways: as a **Static** integer value, a **Dynamic** integer value, or an **Expression**. An "On click" action can be set onto the progress bar to trigger custom logic on click interaction.

### 2.1 Label

Configuring the label on the progress bar can be done on the **Progress Label** tab and has the following options:

1. Whether to show a label.
1. The type of the label:
   1. Text: A custom text.
   1. Percentage: The **Current value** converted onto the configured range as a percentage. 
   1. Custom: A custom widget.

### 2.2 Styling

Under the **Appearance** tab, the following styling properties can be adjusted for the progress bar:

- Bar type. Can be plain, striped, or animated.
- Bar and background color based on brand styling.
- Size. Small, medium, and large. _Please note that when the size is configured to small, no label will be shown due to limited space and textual labels will be included as a tooltip that shows on hover._

## 3 Previous versions documentation

### Widgets below v2.0.0

#### 1 Introduction

The [Progress Bar](https://appstore.home.mendix.com/link/app/48910/) widget displays a progress bar.

##### 1.1 Features

* Show percentage of progress based on value
* Render bar types: plain, striped, or animated stripes
* Use bar Bootstrap colors: success, info, warning, or danger

##### 1.2 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://progressbar-demo.mxapps.io/).

#### 2 Usage

Place the widget in the context of an object that has attributes for **Progress attribute** and **Maximum value attribute**:
* If **Progress attribute** is not set, **Value static** will be used to calculate the progress
* If **Maximum value attribute** is not set, the maximum value defaults to **Maximum value static**

Progress percentage is calculated via `(value / maximumValue) * 100`.

Depending on the specified Bootstrap style (primary, success, info, warning, danger), the progress bar can appear in the associated colors.

For negative progress values, the bar is drawn from right to left.

#### 3 Developing This Marketplace Component

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma-cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/progress-bar](https://github.com/mendixlabs/progress-bar.git) repository. The code is in Typescript. 
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/progress-bar](https://github.com/mendixlabs/progress-bar/releases/latest ). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.
7. To run the project unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm test`
8. Run the test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/progress-bar](https://github.com/mendixlabs/progress-bar/issues).
