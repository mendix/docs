---
title: "App Store Approval Guidelines"
space: "App Store"
category: "App Store"
---


This page contains the guidelines for developing and submitting content to the Mendix App Store. Submitted App Store content will be reviewed within 5 working days.

## 1. General Guidelines

These guidelines are applicable to all the App Store content you want to submit.

*   Provide an extended description of the content.
*   Describe typical usage scenario(s).
*   Describe the features / limitations of your content.
*   Describe dependencies (e.g. Mendix Business Modeler version, modules, jars, images, styles)
*   Describe the necessary steps to install the content.
*   Describe the necessary steps to configure the content.
*   Describe the know bugs.

## 2\. Widget Guidelines

Read and follow these guidelines carefully when developing widgets.

*   Widget must be based on the AppStoreBoilerplate (see GitHub [https://github.com/mendix/AppStoreWidgetBoilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate)).

*   Use lowerCamelCase for variable and function names.

*   Add code comments.

*   Use descriptive variable and function names in both XML and JavaScript.

*   Always add ‘use strict’. to functions.

*   A function may not be larger than 200 lines of code.

*   A function may only do one thing and it should be doing this properly.

*   Internal variables should start with underscore.

*   The Dojo library and its functionalities are leading, yet for external plugins you can use jQuery.
*   Create a test project based on the AppStoreBoilerplate.
*   Create test pages for mobile when content is mobile supported.

## 3\. Module Guidelines

Read and follow these guidelines carefully when developing modules.

*   Create a folder named "USE_ME" and add the microflows and pages that are relevant for the user to use.

*   Reduce the use of layouts. Using snippets will result in less module dependencies and reduce the number of potential errors. (E.g. missing layouts) 

*   User roles and security should be implemented. 
*   Creating a new release/module export should be done while the project, containing the module, has it's security level set to <u>Production.</u>
*   Module security status (in Project Security) must be <u>complete</u> for: Page acces, Microflow acces, OData access, Entity access and Dataset acces

*   Example pages and microflows, to be copied to a another module, should be ‘excluded from project’. To encourage duplication and reduce dependency errors. 

*   Do not rename entities and attributes when creating new versions. Data in these entities will get lost as replacing an existing module is based on entity names.

*   Module should include English language.

## 4\. Related content

*   [Install the SMTP email module](/howto6/Install+and+Configure+the+SMTP+Module)
*   [Install an App from the App Store](/appstore/Install+an+App+from+the+App+Store)
*   [App Store Approval Guidelines](/appstore/App+Store+Approval+Guidelines)
*   [App Store Content Support](/appstore/App+Store+Content+Support)
*   [Adding App Store content to your app](/appstore/Adding+App+Store+content+to+your+app)
