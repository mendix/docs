---
title: "Migrating to Atlas UI 4"
url: /refguide/frontend/atlas4-migration/
description: "Learn how to migrate your Mendix app from Atlas UI 3 to Atlas UI 4, including converting SASS variables to CSS variables and ensuring module compatibility."
weight: 10
tags: ["atlas", "atlas ui", "theming", "css", "css variables", "sass", "migration", "styling", "frontend"]
---

## Introduction

Atlas UI 4 marks a significant evolution in Mendix theming, bringing modern web standards and enhanced flexibility to your application's design. The most significant change to custom styling in Atlas 4 is the shift from **SASS variables** to **native CSS variables**.

This guide is intended for the following use cases:

* Developers who are choosing to migrate their custom themes from Atlas UI 3 to Atlas UI 4
* Module creators who are making their custom UI modules compatible with Atlas UI 4
* Teams who are adopting the latest Atlas UI features and theming standards

Use this guide when:

* Migrating your Mendix project from Atlas UI 3 to Atlas UI 4
* Updating custom modules to be compatible with Atlas UI 4
* Converting existing SASS-based themes so they use CSS variables
* Implementing dynamic theming, or white-labeling features

{{% alert color="info" %}}
You do not need to migrate to Atlas UI 4 when upgrading to Studio Pro 11 or above. Your existing Atlas UI 3 theme will continue to work. Only proceed with this migration if you want to use Atlas 4's new capabilities.
{{% /alert %}}

{{% alert color="info" %}}
The migration effort can range from **a few hours to multiple days**, depending on the complexity of your custom theme, your number of custom modules, and the extent of your styling customizations. Please also factor in testing time across all pages, modules, and browsers.
{{% /alert %}}

### Overview of Changes

Atlas 4 brings with it powerful new capabilities like **dynamic theming at runtime**, making **white-labeling** of applications significantly easier, and allowing seamless integration with Mendix's new [design properties](/howto/front-end/extend-design-properties/) which can directly set or consume CSS variables for highly flexible design systems.

This guide will explain the changes between v3-v4, help you migrate your existing themes to v4, and help you confirm your UI modules are compatible with v4.

### Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Have Mendix Studio Pro 11 or higher installed
* Have a backup of your current Mendix project
* Update your [Atlas UI module]() to version 4.x or higher 
* Have basic knowledge of SASS/SCSS and CSS
* Have user access to your project's theme files in `theme/web/` and any custom modules in `themesource/`

{{% alert color="warning" %}}
Always create a full backup of your Mendix project before beginning this migration. Test thoroughly in a development environment before deploying to production.
{{% /alert %}}

### The Power of CSS Variables

To understand the major change between v3 and v4, it is important to grasp the difference between SASS and CSS variables:

* **SASS (Syntactically Awesome Style Sheets)** — SASS is a **pre-processor**. This means your SASS code, including its variables, is processed and compiled into standard CSS **before** your application is deployed and run in a web browser. SASS variables are essentially placeholders that get replaced with their final values during this compilation step. The browser never "sees" a SASS variable.
* **CSS Custom Properties (CSS Variables)** — CSS variables are a native feature of web browsers. They are **interpreted at runtime**, meaning the browser understands and can directly work with them as your application is running.

This distinction is crucial because it unlocks powerful capabilities:

* **Dynamic Theming & White-labeling:** — Since CSS variables are interpreted at runtime, their values can be changed dynamically using JavaScript. This allows you to easily implement features like dark mode, user-selected themes, or even completely changed branding (white-labeling) without recompiling your application's SASS.
* **Integration with Mendix Design Properties** — Mendix Studio Pro's [design properties](/howto/front-end/extend-design-properties/) can directly set CSS variables or use them as values, providing a more intuitive and flexible way to customize components and layouts directly within the IDE.
* **Easier Debugging** — You can inspect and modify CSS variables directly in your browser's developer tools, which makes debugging styling issues more straightforward.
* **Modern Web Standards** — CSS variables align with the latest web technologies ensures better long-term compatibility, performance, and maintainability.

{{% alert color="info" %}}
CSS variables are supported in all modern browsers (Chrome, Firefox, Safari, Edge). Internet Explorer 11 does not support CSS variables. If you need to support IE11, you must maintain a separate fallback stylesheet or consider an alternate approach.
{{% /alert %}}

## Part 1: Going from SASS to CSS Variables

### 1.1 The Core Difference

Imagine you have a specific shade of blue you use throughout your app. Perhaps its key to your company's theme.

In SASS (Atlas 3 and lower), you define it like this:

```scss
// Define the SASS variable
$brand-primary: #264ae5;

// Use the variable
.my-button {
  background-color: $brand-primary;
}
```

When your Mendix app is built, `$brand-primary` is replaced with `#264ae5` **before** the browser ever sees the code. The browser only sees `background-color: #264ae5;`.
    
In CSS (Atlas 4), you define it like this:

```css
/* :root means these variables are available globally */
:root {
  --brand-primary: #264ae5; /* Define the CSS variable */
}

/* Use the variable */
.my-button {
  background-color: var(--brand-primary);
}
```

The browser directly understands `--brand-primary`. It can even change its value dynamically using JavaScript!

### 1.2 The New Theme .scss File

In Atlas 4, your `theme/web/custom-variables.scss` file (or any custom SASS file where you define global variables) needs to declare **CSS variables** instead of SASS variables. See the key changes in the code samples below:

* Declaration Syntax:
    * Atlas 3 (SASS variables):
        ```scss
        // SASS variables at the file root level
        $brand-primary: #264ae5;
        $font-size-default: 14px;
        $bg-color: #f8f8f8;
        ```
    * Atlas 4 (CSS variables):
        ```scss
        // All global CSS variables must be within :root block
        :root {
          --brand-primary: #264ae5;
          --font-size-default: 14px;
          --bg-color: #f8f8f8;
        }
        ```
* Usage Syntax:
    * Atlas 3 (SASS variables):
        ```scss
        .my-element {
          color: $brand-primary;
          background-color: $bg-color;
          font-size: $font-size-default;
        }
        ```
    * Atlas 4 (CSS variables):
        ```css
        .my-element {
          color: var(--brand-primary); /* Use var() function to reference CSS variables */
          background-color: var(--bg-color);
          font-size: var(--font-size-default);
        }
        ```

{{% alert color="info" %}}
If your `custom-variables.scss` previously imported other SASS files that defined variables (for example, `_my-design-system-colors.scss`), those imported files **also** need to be updated to declare CSS variables within a `:root` block.
{{% /alert %}}

{{% alert color="warning" %}}
If you omit the `$use-css-variables: true;` declaration, your theme may not function correctly. Always include this at the top of your `custom-variables.scss` file.
{{% /alert %}}

### 1.3 SASS Functions vs. CSS Functions

SASS offers many built-in functions (like `mix()`, `darken()`, `lighten()`) that perform calculations on colors or other values during compilation. With CSS variables, you will need to leverage native CSS functions, as SASS functions will not function with CSS variables.

#### Example: The mix() and color-mix() Functions

In SASS, `mix()` blends two colors. The CSS equivalent is `color-mix()`. For more information, see the code samples below:

* SASS `mix()` example:
    ```scss
    // SASS variables
    $link-color: #264ae5;
    $gray-light: #a9acb3;
    
    .blended-background {
      // Mix 50% of link-color with 50% of gray-light
      background-color: mix($link-color, $gray-light, 50%);
    }
    ```
* CSS `color-mix()` example,
    ```css
    :root {
      --link-color: #264ae5;
      --gray-light: #a9acb3;
    }
    
    .blended-background {
      /* Blends 50% of --link-color with 50% of --gray-light */
      background-color: color-mix(in srgb, var(--link-color) 50%, var(--gray-light));
    }
    ```

Understanding `color-mix()` syntax:
  * `in srgb`: specifies the color space for mixing. `srgb` is a common and safe choice for web
  * `var(--link-color) 50%`: the first color and its percentage contribution
  * `var(--gray-light)`: the second color (gets the remaining percentage, for example: 50%)

#### Other Commonly Used SASS Functions 

For other SASS functions like `darken()`, `lighten()`, `rgba()`, `transparentize()`, and others, please browse the guidance below:

* **`rgba()` / `hsla()`:** These have direct CSS equivalents and can be used with CSS variables:
    ```css
    :root { 
      --my-red-rgb: 255, 0, 0; /* Store as comma-separated RGB values */
    }
    
    .element { 
      background-color: rgba(var(--my-red-rgb), 0.5); /* 50% transparent red */
    }
    ```
    
* **`darken()` / `lighten()`:** Native CSS equivalents are not as direct, but you can use `color-mix()` in combination with `black` or `white` to achieve similar results:
    
    **To darken a color:**
    ```css
    /* Darken by approximately 20% */
    background-color: color-mix(in srgb, var(--brand-primary) 80%, black);
    ```
    
    **To lighten a color:**
    ```css
    /* Lighten by approximately 20% */
    background-color: color-mix(in srgb, var(--brand-primary) 80%, white);
    ```

{{% alert color="info" %}}
The Atlas core theme (`themesource/atlas_core/web/themes/_theme-default.scss`) uses `color-mix()` extensively for color variations. Review it for real-world examples.
{{% /alert %}}

### 1.4 Atlas 4 Backward Compatibility

Atlas 4 has backward compatibility which helps modules using SASS variables still function. However, there are some limitations due to how the two technologies work (pre-processor versus runtime interpretation):

*   **`_theme-default.scss` (Atlas variables with default values)** — This file, located at `themesource/atlas_core/web/themes/_theme-default.scss`, defines the **official Atlas 4 CSS variables**. These are the variables your custom theme should aim to use. You will notice that many of these variables share names with their SASS predecessors (for example, `--brand-primary`, `--font-size-default`), but are now true CSS variables.

*   **`_css-variables-mappings.scss` (Compatibility file)** — This file, located at `themesource/atlas_core/web/_css-variables-mappings.scss`, defines a mixin `legacy-variables()`. When this mixin is included (which Atlas does internally), it creates **CSS variables with the same names as many of the old Atlas SASS variables**, and assigns them the **compiled value of those SASS variables** using SASS interpolation (`#{$variable}`).

    **Example from `_css-variables-mappings.scss`:**

    ```scss
    @mixin legacy-variables() {
      :root {
        --gray: #{$gray}; // CSS variable --gray gets value of SASS variable $gray
        --brand-primary: #{$brand-primary}; // CSS variable --brand-primary gets value of SASS variable $brand-primary
        // ... many more mappings
      }
    }
    ```
    This mechanism ensures that if an internal Atlas component's SASS still references a SASS variable like `$brand-primary`, it will eventually resolve to `var(--brand-primary)` (a CSS variable). This is primarily for enabling transition while staying backwards compatible.

How you should use this information:

* For your custom theme and modules, the goal is to directly use the CSS variables defined in `_theme-default.scss`. These are the modern, runtime-interpretable variables. The Blank app in Studio Pro 11 comes with a `custom_variables.scss` (**App Directory**  > **Theme** > **Web** > **customer_variables.scss**) which already contains a commented out copy of the Atlas variables to make it easy to understand which variables can be used, as well as to see which values are overriding Atlas and which are using Atlas defaults.
* The `_css-variables-mappings.scss` file can be a helpful **reference** to understand which old SASS variables correspond to which new CSS variables when transitioning your own design system. For example, `$brand-primary` should become `var(--brand-primary)`.

## Part 2: Migrating Your Application

This section outlines the process to convert your existing Mendix application theme from Atlas 3 (SASS variables) to Atlas 4 (CSS variables).

### 2.1 Preparation

{{% alert color="warning" %}}
Before making any changes, create a complete backup of your Mendix project. Consider committing your current state to version control so you can easily revert if needed.
{{% /alert %}}

Do the following steps before your migration begins:

1.  Create a full backup of your Mendix project or commit to version control.
1.  Ensure you are using Mendix Studio Pro 11 or later.
1.  In your Mendix project, update the Atlas UI module to its latest Atlas 4 compatible version via the Marketplace. Also, ensure you update all other Marketplace modules, especially `Atlas Web Content` if used, as they may also require Atlas 4 compatibility.

### 2.2 Converting theme/web/custom-variables.scss

This section, where you convert `theme/web/custom-variables.scss`, is critical for your global theme variables:

1. Add the following line at the top of your `theme/web/custom-variables.scss` file to explicitly enable CSS variable usage:

    ```scss
    $use-css-variables: true;
    ```
    
  {{% alert color="info" %}}
  This declaration tells the Atlas UI compiler to generate CSS variables instead of traditional SASS compilation.
  {{% /alert %}}
    
1. Declare CSS Variables:
    *   Wrap all your SASS variable declarations within a `:root { ... }` block.
    *   Change the SASS variable syntax (`$variable-name: value;`) to CSS variable syntax (`--variable-name: value;`).
    *   **Important Note on Unchanged Variables:** With CSS variables, you only need to declare variables in `custom-variables.scss` if you are *overriding* their default values from Atlas. Any Atlas variables that you are not changing from their default can be safely removed from your `custom-variables.scss` file, reducing clutter and improving clarity. For SASS, it was technically necessary to include them even if unchanged, but this is no longer the case.
        
    Here is an example conversion:

      ```diff
      // Before (Atlas 3 - custom-variables.scss)
      - $brand-primary: #264ae5;
      - $font-size-default: 14px;
      - $bg-color: #f8f8f8;
      
      // After (Atlas 4 - custom-variables.scss)
      + $use-css-variables: true;
      + 
      + :root {
      +   --brand-primary: #264ae5;
      +   --font-size-default: 14px;
      +   --bg-color: #f8f8f8;
      + }
      ```
1.  Handle Imports (if any) — If your `custom-variables.scss` previously imported other SASS files that defined variables (for example `@import 'my-design-system/_colors.scss';`), those imported files also need to be updated to declare CSS variables within a `:root` block.

### 2.3 Updating SASS Variable Usage in Your SCSS Files

Now that your variables are declared as CSS variables, you need to update everywhere you use them:

1. Use your code editor's search function to find all occurrences of SASS variable usage (`$variable-name`) within your custom `.scss` files (for example, within your `theme/web/` folder or your custom UI modules' `themesource/{modulename}/web/` folders).
    
  {{% alert color="info" %}}
  Use a regex pattern like `\$([a-zA-Z0-9_-]+)` to identify SASS variable names. Most code editors support regex in their find/replace functions.
  {{% /alert %}}
    
1. For each instance, replace `$variable-name` with `var(--variable-name)` (see example below):

      ```diff
      // Before (Atlas 3 - in a custom UI module's SCSS file)
      - .my-custom-card {
      -   background-color: $bg-color;
      -   padding: $spacing-small;
      -   font-family: $font-family-base;
      - }
      
      // After (Atlas 4 - in a custom UI module's SCSS file)
      + .my-custom-card {
      +   background-color: var(--bg-color);
      +   padding: var(--spacing-small);
      +   font-family: var(--font-family-base);
      + }
      ```
      
1. For guidance on converting SASS functions like `mix()`, `darken()`, and `lighten()` to their CSS equivalents, please refer to [Section 1.3: SASS Functions vs. CSS Functions](#13-sass-functions-vs-css-functions).

{{% alert color="info" %}}
Test your changes incrementally. After updating variables in one section or module, run your application to verify the styling before proceeding to the next section.
{{% /alert %}}

### 2.4 Testing Your Theme

After making these changes, do the following:

1. Deploy and run your Mendix application.
1. Thoroughly check all pages and components for any visual regressions or unexpected styling.
1. Verify that your styles work correctly across different browsers.
1. Open browser developer tools and check for any CSS-related errors or warnings.

{{% alert color="info" %}}
Use your browser's developer tools to inspect CSS variables. In the **Elements** panel, you can see computed CSS variable values and even modify them temporarily to test different values.
{{% /alert %}}

## Part 3: Ensuring Module Compatibility {#ensuring-module-compatibility}

Custom modules, or even Marketplace modules, may contain SASS variables in their styling. You must ensure these modules are Atlas 4 compatible to achieve a consistent theme.

### 3.1 The Challenge

UI modules can have custom styling files inside `themesource/{modulename}/`. If these SASS files use `$brand-primary` or other SASS variables, they will not automatically pick up your new CSS variables. Crucially, if a Marketplace module is not yet updated to use CSS variables, its SASS variables will fall back to the **default Atlas values** (as defined by Atlas's internal fallback SASS variables, not your new CSS variables). This can lead to **inconsistent styling or even broken UI** when navigating to pages or using components from these unsupported modules.

### 3.2 How to Identify SASS Variable Usage in Modules

To identify SASS variables, you will need to search through your module's styling files:

1. Navigate to your module's `themesource/{modulename}/` directory (e.g., `themesource/MyModule/`).
1. Use your code editor's search function to look for Regex patterns like `\$([a-zA-Z0-9_-]+)` within all `.scss` files in the module.

### 3.3 Strategies for Module Compatibility

There are 3 approaches for achieving module compatibility, depending on if the module is your own or from the Marketplace.

#### Option A: Update the Module (Recommended for Your Own Modules)

If you own the module, this is the cleanest approach and ensures the module is truly Atlas 4 ready.

1.  Open the module's **.scss** files where SASS variables are used:
    * If the module uses Atlas 3 SASS variables (for example, `$brand-primary`), replace them with the corresponding Atlas 4 CSS variables as defined in `themesource/atlas_core/web/themes/_theme-default.scss` (for example, `var(--brand-primary)`). Use the mapping table in Section 4.3 as a reference.
    * If the module defines its own custom SASS variables, convert them to CSS variables within a `:root` block in a dedicated module `_variables.scss` file, and then update their usage throughout the module:

    ```diff
    // In themesource/MyCustomModule/web/sass/components/_my-component.scss
    - .my-component-header {
    -   color: $brand-primary;
    -   font-size: $font-size-h2;
    - }
    + .my-component-header {
    +   color: var(--brand-primary); // Using Atlas 4's core variable from _theme-default.scss
    +   font-size: var(--font-size-h2); // Using Atlas 4's core variable from _theme-default.scss
    + }
    ```

#### Option B: Override in Your Main Theme (For Marketplace Modules)

If you cannot directly modify a Marketplace module (because updates would overwrite your changes), you need to override its styles in your main theme. This is less ideal than modifying directly, as it creates more maintenance overhead and can be brittle if the module's internal structure changes.

To override its styles in your main theme, do the following:

1.  Use browser developer tools to find the specific CSS class names or selectors used by the module's elements.
1.  In your main theme's SCSS files (for example, a new file imported by `main.scss` in your theme), write override rules.

    ```scss
    // In theme/web/sass/custom/_overrides.scss (or similar)
    // Overriding a Marketplace module's style
    .my-marketplace-module-widget .some-element {
      color: var(--brand-primary); /* Use an Atlas 4 core variable */
      background-color: var(--bg-color-secondary); /* Use an Atlas 4 core variable */
    }
    ```

    This approach requires careful use of CSS specificity to ensure your overrides take precedence.

#### Option C: Wait for Module Updates

For popular Marketplace modules, the module developers will likely release Atlas 4 compatible versions. Check the Mendix Marketplace regularly for updates. This is often the safest and least effort approach if you can wait.

### 3.4 Best Practices for Developing New Modules (Atlas 4 Ready)

When creating new custom modules for Atlas 4, employ these best practices:

*  Define and use CSS variables for all your module's styling.
*  For common styling (colors, spacing, fonts), use Atlas 4's core CSS variables (for example, `--brand-primary`, `--spacing-medium`). This ensures consistency with the main theme.
*  If your module has specific configurable styles, consider defining them as CSS variables within the module. This allows users to easily customize your module from their `custom-variables.scss` without modifying the module's core files:

    ```css
    // In themesource/MyNewModule/web/sass/_variables.scss
    :root {
      --my-new-module-header-color: #333;
      --my-new-module-border-radius: 4px;
    }
    
    // In themesource/MyNewModule/web/sass/main.scss
    .my-new-module-header {
      color: var(--my-new-module-header-color);
      border-radius: var(--my-new-module-border-radius);
    }
    ```
    Users can then override these in their `custom-variables.scss`:
    ```css
    // In theme/web/custom-variables.scss
    :root {
      --my-new-module-header-color: var(--brand-primary); /* Match main theme */
    }
    ```

## Part 4: Troubleshooting Common Issues

This section addresses common problems you might encounter during the Atlas 4 migration. For common complaints and their solutions, look below.

### Issue: Styles Not Applying After Migration

**Symptoms** — Your application looks unstyled, or uses default colors instead of your custom theme's.

**Possible Causes & Solutions:**

* Missing `$use-css-variables: true;` declaration:
   * Solution: Ensure this line is at the top of your `theme/web/custom-variables.scss` file.

* CSS variables not wrapped in `:root` block:
   * Solution: All CSS variable declarations must be inside a `:root { }` block.

* Browser caching old compiled CSS:
   * Solution: Perform a hard refresh in your browser (<kbd>Cmd</kbd>+Shift<kbd>Shift</kbd>+<kbd>R</kbd> on macOS, Ctrl+Shift+R on Windows/Linux) or clear your browser cache.

* SASS compilation errors:
   * Solution: Check the Studio Pro console for SASS compilation errors. Fix any syntax errors in your SCSS files.

### Issue: CSS Variables Not Recognized

**Symptoms** — Browser developer tools show `var(--variable-name)` as an invalid property value.

**Possible Causes & Solutions:**

* Variable not defined:
   * Solution: Ensure the CSS variable is declared in a `:root` block in your `custom-variables.scss` or is available from Atlas core variables.

* Typo in variable name:
   * Solution: CSS variable names are case-sensitive. Check for typos like `--brand-Primary` vs `--brand-primary`.

* Scope issues:
   * Solution: CSS variables defined outside `:root` have limited scope. Use `:root` for global variables.

### Issue: Colors Look Different After Migration

**Symptoms** — Colors do not match your previous Atlas 3 theme.

**Possible Causes & Solutions:**

* SASS function conversion issues:
   * Solution: SASS functions like `darken()` and `lighten()` don't translate 1:1 to CSS `color-mix()`. You may need to adjust percentages. Test and tweak values.

* Color space differences:
   * Solution: `color-mix()` uses color spaces like `srgb`. Different color spaces can produce slightly different results than SASS functions.

* Fallback to Atlas defaults:
   * Solution: If you removed too many variables from `custom-variables.scss`, some might be falling back to Atlas defaults. Re-add any custom values you want to preserve.

### Issue: Module Styling Inconsistent

**Symptoms** — Some pages or widgets look correct, others use default styling.

**Possible Causes & Solutions:**

* Module has not been migrated:
   * Solution: Check if the module's SCSS files still use SASS variables. Follow the steps in [Part 3](#ensuring-module-compatibility) to update the module.

* Marketplace module not Atlas 4 compatible:
   * Solution: Check for updates to the module in the Mendix Marketplace. If unavailable, consider overriding styles in your main theme or contacting the module maintainer.

* Missing module variable mappings:
   * Solution: The module may use custom SASS variables not covered by Atlas. You'll need to convert these manually.

## Part 5: Quick Reference

### SASS Function to CSS Function Conversion

For information on SASS functions and their CSS equivalents, see the table below:

| SASS Function | CSS Equivalent | Example |
|--------------|----------------|---------|
| `$variable` | `var(--variable)` | `color: var(--brand-primary);` |
| `mix($color1, $color2, 50%)` | `color-mix(in srgb, var(--color1) 50%, var(--color2))` | `color-mix(in srgb, var(--brand-primary) 50%, white)` |
| `darken($color, 20%)` | `color-mix(in srgb, var(--color) 80%, black)` | `color-mix(in srgb, var(--brand-primary) 80%, black)` |
| `lighten($color, 20%)` | `color-mix(in srgb, var(--color) 80%, white)` | `color-mix(in srgb, var(--brand-primary) 80%, white)` |
| `rgba($color, 0.5)` | `rgba(var(--color-rgb), 0.5)` | Define color as RGB: `--color-rgb: 38, 74, 229;` |
| `transparentize($color, 0.5)` | `rgba(var(--color-rgb), 0.5)` | Same as rgba |

### Useful Regex Patterns for Migration

Use these regex patterns in your code editor's **find/replace** function:

| Purpose | Regex Pattern | Replacement |
|---------|--------------|-------------|
| Find SASS variables | `\$([a-zA-Z0-9_-]+)` | `var(--$1)` |
| Find SASS variable declarations | `^\s*\$([a-zA-Z0-9_-]+):\s*(.+);` | `--$1: $2;` (wrap in `:root {}`) |
| Find darken() usage | `darken\(\$([a-zA-Z0-9_-]+),\s*(\d+)%\)` | Manual conversion needed |
| Find lighten() usage | `lighten\(\$([a-zA-Z0-9_-]+),\s*(\d+)%\)` | Manual conversion needed |

{{% alert color="info" %}}
Always review regex replacements carefully before applying them. Complex SASS usage may require manual conversion.
{{% /alert %}}

## Read More

* [Atlas UI Kit for Figma](/howto/front-end/figma-ui-kit/)
* [Customize Styling](/howto/front-end/customize-styling-new/)
* [Design Properties](/apidocs-mxsdk/apidocs/design-properties/)
* [Atlas UI Reference App](https://atlasdesignsystem.mendixcloud.com/)
* [CSS Custom Properties - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
* [CSS color-mix() Function - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)