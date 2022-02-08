---
title: "Customize Styling"
parent: "atlas-ui"
menu_order: 20
description: "This describes how developers can change apps styling and create re-usable styling."
tags: ["build", "app", "studio", "studio pro", "style", "styling"]
---

## 1 Introduction

This page describes how developers can change the styling of apps and create re-usable styling. For progressive and web apps, SASS (SCSS) is used and for native mobile apps JavaScript is used. Even though the technologies differ, the approach for customizing styling is the same.

## 2 Changing the App Look and Feel

Developers have several options to change an app's look and feel. Depending on whether you are a Studio or Studio Pro user, there are different options.

### 2.1 Changing the Default Theme Settings

When tailoring your app's look, a simple first step is to change the theme settings. This quickly adjusts the theme to a company's brand by changing the colors.

For Studio users, use the [Theme Customizer](/studio/theme-customizer) to change the basic look and feel of your app. The differences will become visible immediately.

For Studio Pro users there are more options to change the default theme settings. In the theme folder there is a *custom-variables* file (for both web apps and native mobile apps) which can be used to simply change many of the theme settings for the app. For more information on this topic, see the [File and Folder Structure](#file-and-folder) section below.

For more information on how changes can be quickly previewed, see the [Preview a Styling Change](#previewing-styling) section below.

### 2.2 Adding Custom Styling

Developers can add custom styling for apps in the `theme/web` or `theme/native` folder.

For (progressive) web apps, custom styling should be placed in `theme/web` and linked from (or placed in) *main.scss*. For native mobile apps, custom styling should be placed in *theme/native* and linked from (or placed in) *main.js*.

While custom styling can be added directly in the *main.scss* or *main.js* it is a best practice to separate styling in files and include these files in *main.scss* or *main.js*.

Within custom styling, the theme settings (colors, spacings, etc.) as configured in *custom-variables.scss* or *custom-variables.js*, can be re-used. This is also recommended to provide a consistent user experience.

#### 2.2.1. Web Environment Example

In the following example a custom style is added to change any matching element's font-size upon use.

Steps: 

1.  In *theme/web/custom-variables.scss* add a SCSS variable by adding the following code to the file: 

	```scss
	$company-header-text-size: 30px;
	```

2.  Create a new file *theme/web/company-header.scss*. In the new file create a class with a selector name (`.company-header`) and include a CSS property that references the variables created in step 1.

	```scss
	.company-header { font-size: $company-header-text-size; }
	```

3.  Import the new file in *theme/web/main.scss* by adding the following:

	```scss
	@import “company-header”;
	```

This ensures the SCSS is included in CSS compilation.

#### 2.2.2 Native Environment Example

In this example we will be creating a custom style which will change the font size of text upon use:

1.  Add a JavaScript variable in *theme/native/custom-variables.js* with the following code: 
   
	```javascript
	export const companyHeaderTextSize = 30;
	```

2.  Create a new file *theme/native/company-header.js*. In the new file, the newly defined variable defined in step needs to be imported. Create a variable with an object value, containing property `fontSize` with the value referencing the newly defined custom-variable, then export the variable. The following code achieves this:

	```javascript
	import { companyHeaderTextSize } from “./custom-variables”;
	export const companyHeader = { fontSize: companyHeaderTextSize };
	```

3.  Import the object defined in *company-header.js* and expose it in *theme/native/main.js* as follows:

	```javascript
	import {companyHeader} from “./company-header”;
	module.exports = {companyHeader};
	```

### 2.3 Importing CSS (Web Only)

An app's theme is based on SASS (`.scss` files), but it can be the case you require CSS files from third-party libraries. This can be done by adding the third-party library file to the `cssFiles` property in *theme/web/settings.json*.

See the following fragment as an example of how additional CSS can be added to your app. Below, a third-party CSS file *water.css* is added and will be applied to the app. The third-party CSS file should be in **theme/web**:

```json
{
	"cssFiles": ["theme.compiled.css", "water.css"]
}
```

## 3 Creating Re-Usable Styling

The previous section describes how developers can customize the styling of an app. Next to that it is possible to place styling inside modules, which then can be re-used in other apps. This can be used to [create a theme module](#create-theme-mod) or a [company design system](create-a-company-design-system).

Adding styling to a module is similar to adding styling to an app, except that styling resources are placed in the **themesource** folder as explained in the [File and Folder Structure](#file-and-folder) section below.

For classes that are generic or that should be easily discovered, a developer can consider creating design properties for this. For more information see [How to Extend design properties](extend-design-properties).

## 4 Creating a Theme Module {#create-theme-mod}

A theme module is useful for styling which can be easily re-used through modules across apps. By default, the theme settings like color, font, spacing, and more are in the **theme** folder, which is specific per app. However, often these settings should be re-used to create a consistent look and feel across apps.

This can be done by creating a theme module and making the *custom-variables* file in the **theme** folder point to the custom variables file in your theme module. For creating a full design system see [How to Create a Company Design System](create-a-company-design-system).

See the examples below for more information on creating a re-usable theme module.

### 4.1 Marking as a UI Resources Module

Modules that contain theme styling should be marked as UI resources modules. To do so, right-click the **Module {name}** in the App Explorer, then click **Mark as UI resources module**. This will give the modules a green icon, which makes it easy to distinguish theme modules from other modules, and also influences the order in which styling will be applied from those modules:

![green module](attachments/customize-styling/green-module.png)

#### 4.2 Ordering UI Resource Modules

When a module contains styling (SCSS/CSS), be sure it is added to the compiled CSS file in the correct order relative to other files. For example, if a theme module should overwrite styling that is defined in **Atlas_Core**, it is important that the theme module is added *after* **Atlas_Core**. 

You can set an explicit order in the theme settings (**App Settings** > **Theme**). This contains a list of all modules that are marked as UI resource modules, and allows you to set the explicit order in which they are added to the CSS file. Note that the lower a module is ordered in the list, the higher its precedence. For example, an app that uses a company theme module could be ordered as follows:

![app theme settings](attachments/customize-styling/app-theme-settings.png)

### 4.3 Examples

#### 4.3.1 Web

As an example, the following variables in *theme/web/custom-variables.scss* will be made into a re-usable theme module:

```scss
$gray-primary: #e7e7e9;

$brand-default: $gray-primary;
$brand-primary: #264ae5;
$brand-success: #3cb33d;
$brand-warning: #eca51c;
$brand-danger: #e33f4e;
```

To create a re-usable theme module, do the following:

1. Create a new module in Studio Pro. Right-click **App {name}** in the App Explorer, then click **Add module…**. Give it a name. For this example the module’s name is "mytheme".
   
2. In your Mendix app directory, create a new file *themesource/mytheme/web/custom-variables.scss*.

{{% alert type="info" %}}
To open your Mendix app directory from Studio Pro, click **App** in the top menu-bar, then click **Show App Directory in Explorer**.
{{% /alert %}}

3. Cut the variables from *theme/web/custom-variables.scss* and paste them in *themesource/mytheme/web/custom-variables.scss*.
   
4. In *theme/web/custom-variables.scss* add `@import "../../themesource/mytheme/web/custom-variables.scss` to the top of the file, replacing “mytheme” with your module name.

The two files should end up looking like this:

*theme/web/custom-variables.scss*:

```scss
@import "../../themesource/mytheme/web/custom-variables.scss";
```

*themesource/mytheme/web/custom-variables.scss*:

```scss
$gray-primary: #e7e7e9;

$brand-default: $gray-primary;
$brand-primary: #264ae5;
$brand-success: #3cb33d;
$brand-warning: #eca51c;
$brand-danger: #e33f4e;
```

You can now export the **mytheme** module from Studio Pro to re-use in your apps. Note that you need to add the `@import …` line to *theme/web/custom-variables.scss* for every app that imports the module. Therefore, we recommend you create a company starter app containing this change.

To test the theme for all the widgets, page templates, and building blocks it can be helpful to use the Atlas Design System app as discussed in [Create a Company Design System](create-a-company-design-system).

{{% alert type="info" %}}
Note: if this is done, the Theme customizer in Studio will not work any more as it depends on the custom variables in the **theme** folder.
{{% /alert %}}

#### 4.3.2 Native Mobile

As an example, the following variables in *theme/native/custom-variables.js* will be made into a re-usable theme module:

```javascript
export const brand = {
    primary: "#264AE5",
    success: "#3CB33D",
    warning: "#ECA51C",
    danger: "#E33F4E",
    info: "#0086D9",
    primaryLight: "#F3F5FF",
    successLight: "#F1FCF1",
    warningLight: "#FFF9E6",
    dangerLight: "#FFEEF0",
    infoLight: "#ECF9FF"
};
```

Steps:

1. Create a new module in Studio Pro. Right-click **App {name}** in the App Explorer, then click **Add module…**. Give it a name, for this example the module’s name is “mytheme”.
   
2. In your Mendix app directory, create a new file *themesource/mytheme/native/custom-variables.js*.

{{% alert type="info" %}}
Note: To open your Mendix app directory from Studio Pro, click **App** in the top menu-bar, then click **Show App Directory in Explorer**.
{{% /alert %}}

3. Cut the export statement and variables from *theme/native/custom-variables.js* and paste in *themesource/mytheme/native/custom-variables.js*.
   
4.  In *theme/native/custom-variables.js* add the following code to the top of the file, replacing “mytheme” with your module name:

	```javascript
	export * from "../../themesource/mytheme/native/custom-variables";
	```

The two files should end up looking like this:

*theme/native/custom-variables.js*:

```javascript
export * from "../../themesource/mytheme/native/custom-variables";
```

*themesource/mytheme/native/custom-variables.js*:

```javascript
export const brand = {
    primary: "#264AE5",
    success: "#3CB33D",
    warning: "#ECA51C",
    danger: "#E33F4E",
    info: "#0086D9",
    primaryLight: "#0086D9",
    successLight: "#F1FCF1",
    warningLight: "#FFF9E6",
    dangerLight: "#FFEEF0",
    infoLight: "#ECF9FF"
};
```

If you get errors, double check if the imports point to valid files.

{{% alert type="info" %}}
When this approach is used we recommend you create a company starter app. Out-of-the-box this app will contain the theme module, and already contains this change in the theme folder that points to the module.
{{% /alert %}}

## 5 Previewing a Styling Change {#previewing-styling}

Depending on the type of app you are building, the preview of styling or a theme change is different.

### 5.1 Web apps

Mendix monitors the file system in the **theme** and **themesource** folder for changes in the `.scss` files. When a change is detected, the `.scss` files are compiled to CSS and the app is automatically reloaded (if it is running), so no additional tooling is needed. For more information on how the SCSS is compiled see the [Styling Output](#styling-output) section below.

### 5.2 Native Mobile Apps

Mendix monitors the file system in the **theme** and **themesource** folders for changes in the `.js` files. When loading a native mobile app in the Make it Native app there you will see the **Enable developer mode** option. If this setting is not enabled, after making a styling change, you can reload the app with a three-finger tap.

If **Enable developer mode** is enabled, and changes are made in the JavaScript styling files, the app automatically reloads with the new styling. 

For more information, see the Getting the [Make It Native App Reference Guide](/refguide/getting-the-make-it-native-app).

## 6 File and Folder Structure {#file-and-folder}

Mendix offers a modular and flexible approach for styling apps. Styling can be done on an app level for app-specific styling, and styling can be put in modules for re-use.

To facilitate app- and module-level styling, the following file and folder structure is used; the **theme** folder is used for app-specific styling and the **themesource** folder is used for re-usable module styling and resources.

The bullets below describe the file structure for the theme folder and for modules:

* **theme**
	* **web** — This folder contains app specific styling resources for (progressive) web apps.
		* *custom-variables.scss* — This file contains the theme setting which can be configured to easily change colors, font, spacing etc.
		* *main.scss* — This file is the starting point for adding custom styling.
		* *exclusion-variables.scss* — This file contains variables that can be toggled to optionally exclude Atlas core styling.
		* *settings.json* — This file contains the (external) CSS files that should be loaded. This includes the CSS result of the SASS compilation.
	* **native** — This folder contains app specific styling resources for native mobile apps.
		* *custom-variables.js* — This file contains the theme setting which can be configured to easily change colors, font, spacing etc.
		* *main.js* — This file is the starting point for adding custom styling.
		* *exclusionVariables.js* — This file contains variables that can be toggled to optionally exclude Atlas core styling.
* **themesource** — This folder contains module specific styling and resources. Every module has a folder that can contain styling resources.
	* **Atlas_core** (required) — This folder from the Atlas core module which is the core for all Mendix apps. This module should always be part of an app as other modules depend on this and it contains all the styling for the Mendix widget. The content of this folder should not be changed as that will cause issues with migrating/updating to newer versions. For information about disabling default styling from this module see [Disabling Default Styling](#disable-default) below.
		* **web** — This folder (and subfolders) contain the web resources for the standard Mendix supported widgets.
		* **native** — This folder (and subfolders) contain the native mobile resources for the standard Mendix supported widgets.
	* **{MODULE_NAME}** — Per module a folder is created which can contain styling resources for (progressive) web apps and native mobile apps.
		* **web** — This folder contains re-useable web resources
			* *main.scss* — This file is the starting point for the module web based styling.
			* *design-properties.json* — This file contains additional design properties or additional options for existing design properties that are based on the classes defined in this module.
		* **native** — This folder contains re-useable native mobile resources.
			* *main.js* — This file is the starting point for the module native mobile based styling.
			* *design-properties.json* — This file contains additional design properties or additional options for existing design properties that are based on the classes defined in this module.
		* **public** — This folder can contain other re-useable resources like a custom *login.html* page or images and fonts used from your web styling.

## 7 Styling output {#styling-output}

With the modular structure of the styling of Mendix app, the styling files are placed in different folders. Studio (Pro) automatically combines the files to a single output (stylesheet for web and JavaScript for native) which is used by the app in the browser or on the device. The following sections describe in more detail how this is done.

### 7.1 Web Apps

Studio and Studio Pro combines the different *.scss* files in a certain order and compiles the SASS into CSS which is used in the browser. The compiled output is saved in a folder named **theme-cache**.

{{% alert type="info" %}}
The content of this folder is regenerated regularly (for example when opening the app or pressing <kbd>{F4}</kbd>) and therefore should not be changed manually. Also note, that the **theme-cache** folder is included when uploading your app to Team Server. It is required to see the correct styling in Studio, which is why it's strongly recommended to commit any changes when the styling has changed.
{{% /alert %}}

If a module contains styling, such as a design system module, it is generally best practice to mark the module as a UI resources module. This will make it possible to explicitly set a compilation order in the theme settings. For more information, see the [Create a Theme Module](#create-theme-mod) section above.

The *.scss* files compile in the following order:

1. The *main.scss* files from the **themesource** folders, specifically:
   1. Non-UI Marketplace modules, in alphabetical order.
   1. UI resources modules, ordered as in **App Settings** > **Theme**.
   1. Non-UI user modules, ordered as in the Studio Pro **App explorer**.
1. Custom variables from the **theme** folder (*theme/web/custom-variables.scss*).
1. *main.scss* from the **theme** folder (*theme/web/main.scss*).

If SASS compilation fails, it will be shown in Studio Pro as a consistency error. This error gives information on what went wrong and what should be fixed:

![theme compilation error](attachments/customize-styling/compilation-error.png)

The content from the **public** folder will be copied to the same folder as the *theme.compiled.css* file when deployed. This allows you to reference those resources using a relative path in the theme module's *SCSS*. For example, to use the image *themesource/{module}/public/images/login-background.jpg* from *themesource/{module}/web/main.scss*, you can simply use `url("./images/login-background.jpg)`.

Note that public folders will be copied in the same order *.scss* files are compiled. Therefore if two modules have the same public resource, the last to be copied will end up in the deployment folder.

### 7.2 Native Mobile Apps

For native mobile apps the React Native framework is used to combine all the JavaScript files into one file, using a "bundler" that is responsible for creating the JavaScript bundle used to run the app. The styling of the different modules is combined and made ready to be processed by the bundler in the following order:

1. All *main.js* files from the **themesource** folders in the following order:
   1. Non-UI Marketplace modules, in alphabetical order.
   1. UI resources modules, ordered as in **App Settings** > **Theme**.
   1. Non-UI user modules, ordered as in Studio Pro.
1. *main.js* from theme folder (*theme/native/main.js*).
1. Original *styles.js* in the **theme** folder if it exists (*theme/styles.js*).

If there are errors during the bundling, these will be shown in Studio Pro and the Make it Native app. For details on the error, it can be helpful to look at the native packager logs in *{Mendix app directory}/deployment/log/native_packager_log.txt*.

For more details on styling native mobile apps see the [Native Mobile Styling](/refguide/native-styling-refguide) Reference Guide.

## 8 Disabling default styling from Atlas Core {#disable-default}

Mendix provides styling for the platform supported widgets in the Atlas core module. In general, for every widget there is base styling to provide a default look and feel for the widget and helper styling, which can be seen as additional styling and variations that can be used to fit the widget into its context. Styling can be overridden, but in some cases it can be preferred to disable this default styling. This is possible by excluding styling using variables which can be set in the exclusion variables file.

### 8.1 Disabling Default Web Widget Styling

To disable the default styling of a web widget, open the *exclusion-variables.scss* file located in the folder **{Mendix app}/theme/web**. This file contains supported exclusion variables. Note that these variables can be part of a custom theme module as well, just like the custom variables as described in [Create a Theme Module](#create-theme-mod), by making the *exclusion-variables.scss* file in the app specific theme folder point to the exclusion variables file in your theme module.

Pick the button widget as an example. The success button is by default styled as in **Figure 1**:

![Figure 1](attachments/customize-styling/exclusion-vars-fig1.png)

**Figure 1 - All Styles Enabled**

To exclude additional styles, like the success button styles, the button helper styles need to be disabled. This can be achieved by setting the variable `$exclude-button-helpers` to `true`:

```scss
$exclude-button-helpers: true;
```

The resulting success button is visible in **Figure 2**:

![Figure 2](attachments/customize-styling/exclusion-vars-fig2.png)

**Figure 2 - Helper Styles Disabled**

To remove the complete default look and feel, both base and helper styles need to be disabled. This can be achieved by setting the variable `$exclude-button` to `true` as well:

```scss
$exclude-button: true;
$exclude-button-helpers: true;
```

It is not necessary to set both variables to `true` to exclude all styles, since Atlas automatically excludes helper styles when the base styles are excluded. Additional styles are useless when base styles are missing. Therefore, the following configuration is equivalent to the previous one:

```scss
$exclude-button: true;
$exclude-button-helpers: false;
```

The resulting success button is visible in **Figure 3**. Note that the underlying Bootstrap styles, the styles that the Atlas UI Framework is build upon, have become visible now.

![Figure 3](attachments/customize-styling/exclusion-vars-fig3.png)

**Figure 3 - All Styles Disabled (visible Bootstrap styles)**

All supported exclusion variables for web are:

```text
- $exclude-background-helpers
- $exclude-badge
- $exclude-badge-button
- $exclude-badge-button-helpers
- $exclude-button
- $exclude-button-helpers
- $exclude-check-box
- $exclude-custom-dijit-widget
- $exclude-custom-switch
- $exclude-data-grid
- $exclude-data-grid-helpers
- $exclude-data-view
- $exclude-data-picker
- $exclude-glyphicon
- $exclude-grid
- $exclude-group-box
- $exclude-group-box-helpers
- $exclude-header
- $exclude-helper-classes
- $exclude-input
- $exclude-image-helpers
- $exclude-label
- $exclude-label-helpers
- $exclude-layout-grid
- $exclude-list-view
- $exclude-list-view-helpers
- $exclude-modal
- $exclude-navigation-bar
- $exclude-navigation-bar-helpers
- $exclude-navigation-list
- $exclude-navigation-tree
- $exclude-navigation-tree-helpers
- $exclude-pagination
- $exclude-pop-up-menu
- $exclude-progress
- $exclude-progress-bar
- $exclude-progress-bar-helpers
- $exclude-progress-circle
- $exclude-progress-circle-helpers
- $exclude-radio-button
- $exclude-range-slider
- $exclude-range-slider-helpers
- $exclude-rating
- $exclude-rating-helpers
- $exclude-simple-menu-bar
- $exclude-simple-menu-bar-helpers
- $exclude-slider
- $exclude-slider-helpers
- $exclude-table
- $exclude-table-helpers
- $exclude-tab-container
- $exclude-tab-container-helpers
- $exclude-template-grid
- $exclude-template-grid-helpers
- $exclude-timeline
- $exclude-typography
- $exclude-typography-helpers
```

### 8.2 Disabling Default Native Mobile Widget Styling

To disable the default styling of a native mobile widget, open the *exclusionVariables.js* file located in the folder **{Mendix app}/theme/native**. This file contains supported exclusion variables. Note that these variables can be part of a custom theme module as well, just like the custom variables as described in [Create a Theme Module](#create-theme-mod), by making the *exclusionVariables.js* file in the app specific theme folder point to the exclusion variables file in your theme module.

Pick the button widget as an example again. The success button is by default styled as in **Figure 4**.

![Figure 4](attachments/customize-styling/exclusion-vars-fig4.png)

**Figure 4 - All Styles Enabled**

To exclude additional styles, like the success button styles, the button helper styles need to be disabled. This can be achieved by setting the constant variable `excludeButtonsHelpers` to `true`:

```javascript
export const excludeButtonsHelpers = true;
```

The resulting success button is visible in **Figure 5**.

![Figure 5](attachments/customize-styling/exclusion-vars-fig5.png)

**Figure 5 - Helper Styles Disabled**

Also for native mobile widgets both base and helper styles need to be disabled, to remove the complete Atlas look and feel. This can be achieved by setting the variable `excludeButtons` to `true` as well:

```javascript
export const excludeButtons = true;
export const excludeButtonsHelpers = true;
```

It is not necessary to set both variables to `true` to exclude all styles, since Atlas automatically excludes helper styles when the base styles are excluded. Additional styles are useless when base styles are missing. Therefore, the following configuration is equivalent to the previous one:

```javascript
export const excludeButtons = true;
export const excludeButtonsHelpers = false;
```

The resulting success button is visible in **Figure 6**. Note that the button text is white and, thus, not visible.

![Figure 6](attachments/customize-styling/exclusion-vars-fig6.png)

**Figure 6 - All Styles Disabled (Button Text is White)**

All supported exclusion variables for native mobile are:

```text
- excludeActivityIndicator
- excludeActivityIndicatorHelpers
- excludeAnimation
- excludeBackgroundImage
- excludeBadge
- excludeBadgeHelpers
- excludeBottomSheet
- excludeButtons
- excludeButtonsHelpers
- excludeCarousel
- excludeCheckBox
- excludeColorPicker
- excludeContainer
- excludeDatePicker
- excludeDropDown
- excludeFeedback
- excludeFAB
- excludeFABHelpers
- excludeImage
- excludeImageHelpers
- excludeIntroScreen
- excludeIntroScreenHelpers
- excludeLayoutGrid
- excludeLineChart
- excludeLineChartHelpers
- excludeBarChart
- excludeBarChartHelpers
- excludeListView
- excludeListViewHelpers
- excludeListViewSwipe
- excludeListViewSwipeHelpers
- excludeMaps
- excludeMapsHelpers
- excludePageTitle
- excludeProgressBar
- excludeProgressBarHelpers
- excludeProgressCircle
- excludeProgressCircleHelpers
- excludePopUpMenu
- excludeQRCode
- excludeRangeSlider
- excludeRangeSliderHelpers
- excludeRating
- excludeReferenceSelector
- excludeSafeAreaView
- excludeSlider
- excludeSliderHelpers
- excludeTabContainer
- excludeTabContainerHelpers
- excludeTextArea
- excludeTextBox
- excludeTextBoxHelpers
- excludeToggleButtons
- excludeTypography
- excludeTypographyHelpers
- excludeVideoPlayer
- excludeWebView
- excludeHelpers
```

## 9 Customizing index.html (Web)

By default, Mendix generates the *index.html* (the page that is loaded to start the app), based on the app configuration. In some cases it may be needed to customize this HTML, which can be done by creating a file called *index.html* in the **theme/web** folder. To make sure that your file has the right structure, we recommend you copy *index-example.html* from the **deployment/web** folder to the **theme/web**, rename it to *index.html*, and then use it as a starting point. This file will be created after you have deployed your app locally at least once.

## 10 Customizing Unsupported Browsers (Web) {#customize-unsupported-browsers}

When an end-user opens a Mendix app in an unsupported browser, a page is shown that the current browser is not supported and explain which other browsers can be used. To customize this screen, you can create a custom html file called *unsupported-browser.html* in the **theme/web** folder. If desired, you can copy *unsupported-browser.html* from the **deployment/web** folder to the **theme/web** folder and use it as a starting point. This file will be created after you have deployed your app locally at least once.
