---
title: "Implement Best Practices for JavaScript Actions"
url: /howto8/extensibility/best-practices-javascript-actions/
category: "Extensibility"
weight: 60
description: "This set of best practices will help you get the most out of your JavaScript actions."
tags: ["JavaScript", "API", "nanoflow"]
---

## 1 Introduction

JavaScript actions can extend your app with several new functions. To implement JavaScript actions most effectively, be sure to follow these best practices.

**This best practices will teach you how to do the following:**

* Create high-quality JavaScript actions
* Learn common implementation patterns
* Design better APIs
* Use JavaScript actions in nanoflows

## 2 Implementing Actions

JavaScript actions are run in the browser, and each browser version has its own implementation of JavaScript Standard Style. Certain actions, therefore, can run in some browsers but not in others. For compatibility, working with ECMAScript 5 is recommended. 

Older browsers might not have the new ES6 functions implemented, so be careful copying and pasting modern sample code from the internet, especially when IE11 must be supported. Some ECMAScript 6 functions are polyfilled by the Mendix Client.

Mendix Studio Pro contains the following polyfills from [Core JS](https://github.com/zloirock/core-js):

* **core-js/fn/array/find**
* **core-js/fn/array/from**
* **core-js/fn/array/includes**
* **core-js/fn/array/fill**
* **core-js/fn/array/find-index**
* **core-js/fn/object/assign**
* **core-js/fn/object/entries**
* **core-js/fn/object/is**
* **core-js/fn/object/set-prototype-of**
* **core-js/fn/object/values**
* **core-js/fn/string/starts-with**
* **core-js/fn/string/ends-with**
* **core-js/fn/string/pad-end**
* **core-js/features/string/includes**
* **core-js/features/promise**
* **core-js/features/symbol**
* **core-js/features/set**
* **core-js/features/map**

Mendix Studio Pro also contains a polyfill for Mozilla's [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### 2.1 Handling Input{#handlinginput}

When creating a JavaScript action, input parameters can be used. Your JavaScript actions will be used by others, but you never know if they will be used correctly. To make actions more robust, validate all input parameters and enable defaults when possible.

Use this code for validating input string text:

```javascript
/**
 * @param {string} text
 */
function TextToSpeech(text) {
    // BEGIN USER CODE    
    if (text === undefined) {
        // Reject when the parameter is set to 'empty' the value will be undefined 
        return Promise.reject("The Text parameter is required");
    }
    if (text.trim() === "") {
        // Reject when the text is an empty string ""
        return Promise.reject("The Text parameter can not be empty");
    }
    /* implementation */
    // END USER CODE
  }
```

Use this code for validating a Mendix input object:

```javascript
/**
 * @param {MxObject} audioFile
 */
function PlayAudio(audioFile) {
    // BEGIN USER CODE
    if (!audioFile) {
        return Promise.reject("The 'Audio file' parameter can not be empty");
    }
    if (!audioFile.isA("System.FileDocument") && !audioFile.inheritsFrom("System.FileDocument")) {
        return Promise.reject("The 'Audio file' parameter should inherit from System.FileDocument");
    }
    if (!audioFile.get("HasContents")) {
        return Promise.reject("The 'Audio file' parameter does not have any content");
    }
    var allowedExtensions = ["mp3", "wav", "ogg"]
    var fileName = audioFile.get("Name");
    var dotIndex = fileName.lastIndexOf(".");
    var extension = fileName.substring(dotIndex + 1).toLowerCase();
    if (dotIndex === -1 || allowedExtensions.indexOf(extension) === -1) {
        return Promise.reject("The 'Audio file' parameter only supports files with extension .mp3, .wav or .ogg");
    }
    /* implementation */
    // END USER CODE
}
```

Use this code for validating an input list of objects and `attributesNames`:

```javascript
/**
 * @param {MxObject[]} objectList
 * @param {string} attributeName
 * @returns {Big}
 */
function SumListAttributeValues(objectList, attributeName) {
    // BEGIN USER CODE
    if (!attributeName || attributeName.trim() === "") {
        return Promise.reject("The 'Attribute name' parameter can not be empty");
    }
    if (!objectList || objectList.length === 0) {
        // Resolve early, sum of empty is 0
        return Promise.resolve(new Big(0));
    }
    if (!objectList[0].has(attributeName)) {
        return Promise.reject("List of type " + objectList[0].getEntity() + " does not have an attribute named " + attributeName);
    }
    if (!objectList[0].isNumeric(attributeName)) {
        return Promise.reject("List of type " + objectList[0].getEntity() + " an attribute named " + attributeName + " is not numeric");
    }
    /* implementation */
    // END USER CODE
}
```

Use this code for default input values:

```javascript
/**
 * @param {Big} targetSize
 * @param {"Module.PictureSource.camera"|"Module.PictureSource.gallery"} pictureSource
 * @param {boolean} correctOrientation
 * @param {string} waterMark
 */
function CameraStart(targetSize, pictureSource, correctOrientation, waterMark) {
    // BEGIN USER CODE
    targetSize = targetSize && targetSize > 0 ? targetSize : 150;  // numeric
    pictureSource = pictureSource ? pictureSource : "camera"; // enumeration
    correctOrientation = correctOrientation ? true : false; // boolean
    waterMark = waterMark !== undefined ? waterMark : "DEMO"; // string
    /* implementation */
    // END USER CODE
}
```

For more detail on input types, see [JavaScript Actions](/refguide8/javascript-actions/). For more information on choosing correct input types, see the [Better APIs](#betterapis) section below.

### 2.2 Coding the Actions

To customize your JavaScript actions, consult the sections below. 

#### 2.2.1 Understanding the Mendix Client API

Within the JavaScript actions, the full Mendix Client API is available. For reference, see the [Mendix Client API](https://apidocs.rnd.mendix.com/8/client/index.html). Note that some parts of the Mendix Client API were created for widgets, and are less relevant for JavaScript actions.

#### 2.2.2 Using Numeric Parameters in Your JavaScript Actions

When you use a parameter of the decimal, integer, or long types, your parameter will not be a number as you are used to in JavaScript. Instead, it will be will be a `Big` object, which comes from a JavaScript library called *Big.js* used by the Mendix Client. This is to ensure that the numbers used in your application are not constrained by default JavaScript number limitations.

```javascript
// Precision limitation of JavaScript numbers
0.1 + 0.2                  // 0.30000000000000004
// Solved with BigJs
x = new Big(0.1)
y = x.plus(0.2)            // '0.3'
```

If you know your JavaScript action does not require this extended precision (for example, if you expect a simple integer between 1 and 100), you can easily convert a `Big` object to a JavaScript number:

```javascript
var numberValue = Number(bigJsValue); // number
```

For information on how to use *Big.js*, consult [big.js API](https://mikemcl.github.io/big.js/).

#### 2.2.3 Creating Objects

Use the following code to create objects:

```javascript
mx.data.create({
    entity: "MyFirstModule.Cat",
    callback: function(object) {
        console.log("Object created on server");
    },
    error: function(error) {
        console.error("Could not commit object:", error);
    }
});
```

For more information on creating objects, consult the [Create](https://apidocs.rnd.mendix.com/7/client/mx.data.html#.create) section of the *Mendix Client API*.

#### 2.2.4 Changing Objects

Use the following code to change objects:

```javascript
mxobj.get("Name");               // "Fred"
mxobj.set("Name", "Henry");
mxobj.get("Name");               // "Henry"
mxobj.getOriginalValue("Name")   // "Fred"
```

For more information on changing objects, consult the [Set](https://apidocs.rnd.mendix.com/7/client/mendix_lib_MxObject.html#set) section of the *Mendix Client API*.

#### 2.2.5 Loading Platform-Shipped Dependencies

Use the following code for loading platform-shipped dependencies (please note the shipped dependencies might vary per Mendix version):

```javascript
// Synchronous libs that are already loaded
var lang = require("mendix/lang");
```

The following libraries are provided by the Mendix Client:

* [mendix/lang](https://apidocs.rnd.mendix.com/7/client/module-mendix_lang.html)
* [mendix/validator](https://apidocs.rnd.mendix.com/7/client/module-mendix_validator.html)
* [mxui/dom](https://apidocs.rnd.mendix.com/7/client/module-mxui_dom.html)
* [mxui/html/parser](https://apidocs.rnd.mendix.com/7/client/module-mxui_html_parser.html)

While there are Dojo and Document Object Model (DOM) functions available, they are not recommended. For more information on Dojo and DOM functions, see the [Understanding Bad Practice](#badpractice) section of this document below. 

#### 2.2.6 Using External Dependencies in the Browser

Loading and bundling external libraries are not currently supported. Embedding library code and CSS inside the JavaScript is not ideal. Adding the library JavaScript file and CSS into the theme folder and referencing them in the *index.html* and the *components.json* is recommended.

Below is an example of using an external dependency based on [pdf-lib](https://github.com/Hopding/pdf-lib):

1. Open Command Prompt and navigate to the right folder using `cd --your-project-folder--/javascriptsource/--ModuleName--/actions`.
2. Run `npm install pdf-lib`.
3.  In the JavaScript action, use the following code to import the library:
	
	```javascript
	// This file was generated by Mendix Studio Pro.
	//
	// WARNING: Only the following code will be retained when actions are regenerated:
	// - the import list
	// - the code between BEGIN USER CODE and END USER CODE
	// - the code between BEGIN EXTRA CODE and END EXTRA CODE
	// Other code you write will be lost the next time you deploy the project.
	import { Big } from "big.js";
	import { PDFDocument } from "pdf-lib"

	// BEGIN EXTRA CODE
	```

#### 2.2.7 Understanding Hybrid App External Dependencies

The Mendix hybrid app ships with a large set of plugins by default. For more details on default plugins, see the [November 20th, 2018 Version Upgrades](/releasenotes/mobile/hybrid-app/#upgrades-20) section of the *Hybrid App Base & Template* release notes.

It is also possible to add new plugins during a mobile build. For more information on adding new plugins, see [Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/).

The actual list of plugins use can be found in *config.xml* inside your deployment package.

### 2.3 Understanding Returns

The JavaScript action can specify a return type such as Integer, DateTime, Object, List of object, and Generics. For more information on returns, see [JavaScript Actions](/refguide8/javascript-actions/).

Actions can be synchronous or asynchronous. Synchronous actions will directly return the value and finish executing. An asynchronous action will return a promise, and will continue to execute and finish at a later time. The nanoflow will continue to execute when the promise is resolved.

At its core, JavaScript is a synchronous programming language – it runs one line of code at a time. If a line of code is executing, it prevents all other JavaScript in the Mendix Client from running, making the Mendix Client appear slow. Asynchronous functions solve this problem. With asynchronous functions, a function is stored for later execution when the results are available. This way, other JavaScript is not prevented from running.

Use the following code to employ a synchronous return for when your results are directly available:

```javascript
    /**
     * @param {Big} valueA
     * @param {Big} valueB
     * @param {Big}
     */
    function AddValue(valueA, valueB) {
        // BEGIN USER CODE
        return valueA.plus(valueB)
        // END USER CODE
    }
```

Use the following code to employ an asynchronous return for when your nanoflow needs to wait until an action is finished:

```javascript
    function Wait(delay) {
        // BEGIN USER CODE
        return new Promise(function(resolve) {
            window.setTimeout(function(){
                resolve();
            }, delay);
        });
        // END USER CODE
    }
```

Many APIs and functions are designed in an asynchronous way, and use callback functions or promises. A JavaScript action expects a promise to be returned. The promise should be resolved with the return value as expected in the action.

#### 2.3.1 Understanding Promises

A `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Use the following code to wrap a callback API in a promise:

```javascript
function AskConfirmation(question) {
    // BEGIN USER CODE
    return new Promise(function (resolve) {
        mx.ui.confirmation({
            content: question,
            handler: function() {
                resolve(true);
            },
            onCancel: function() {
                resolve(false);
            }
        });
    });
    // END USER CODE
}
```

Explaining the callback code: 

* Use the standard Mendix Client to show a confirmation dialog box with an **OK** and a **Cancel** button (the execution of the nanoflow halts until the user clicks one of the buttons) 
* The resolve will return a Boolean value, which is used as the return value of the action 
* In the nanoflow, the return variable can be used for an alternative flow for confirmation and cancel

#### 2.3.2 Understanding Promise API

This function uses the browser promise API:

```javascript
function GetUserNameSampleRest(userID) {
    // BEGIN USER CODE
    if (!userID) {
        return Promise.reject("The UserID parameter is required")
    }
    var url = "https://jsonplaceholder.typicode.com/users/" + userID;
    return fetch(url) // Fetch returns a promise, gets the url and wait for result
        .then(function(response) { return response.json() }) // Transform to json
        .then(function(jsonData) {
            return jsonData.name; // Get the data
        })
        .catch(function(error) { Promise.reject("Failed to get user information") });
    });
    // END USER CODE
}
```

Explaining the Promise API code:

* The URL refers to a sample API that returns a JSON object `{ id: string, name: string }`, and `fetch` is a browser API for retrieving data which returns a promise (see the [MDI Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) — the response is a promise that is converted into data with the `.json()` function (the name is accessed and returned)

* As this is a part of a promise already, it does not need to call a `resolve` function or return a promise itself — this makes error handling on promises easier, as a single error function can be used to catch errors at all three steps: fetch, parse JSON, and accessing the data (for a more detailed explanation, see the [MDN promise documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

* For more information on building a JavaScript action rest consume function, see [Build JavaScript Actions: Part 2 (Advanced)](/howto8/extensibility/write-javascript-github/).

#### 2.3.3 Understanding Common Promise Functions

These are the most commonly used promise functions:

* `new Promise(`*`executor`*`)`: creates a new promise that can be returned – the executor function gets two parameters; a resolve and a reject function
* `resolve(someValue)`: should be called with the result value – the value will be used in the nanoflow return value
* `reject(rejectReason)`: throws an error in the nanoflow, and stops the execution
* `Promise.resolve(results)`: returns a `Promise` object that is resolved with the results, which will be set in the output variable of the action in the nanoflow
* `Promise.reject(errorMessage)`: returns a `Promise` object that is rejected, and will explain that the rejection will induce an error in the nanoflow
* `.then()`: enables chaining promises, which will make the code easier to read than nested callback functions

#### 2.3.3.1 Using Promise Function Best Practices

When using promise functions, be aware of the following:

* Currently, JavaScript actions always expect a return type – if an action does not have a relevant returning value, choose return type `String` (the implemented return or promise can be `undefined`) 
* When using a JavaScript action in a nanoflow, set the output  `Use return variable` to `No` 
* Return type Boolean should never be returned with an `undefined` value (this will cause an error if the returned variable is accidentally used in the nanoflow)
* It is recommended to return early so no code is executed if it can or should be skipped – for example, when validating input
* The Promises API is implemented in modern browsers, but not in IE11 (the Mendix Client will polyfill the promise functionally in all supported browsers) 
* Uncaught errors in JavaScript will throw an error in microflows – currently, there is no way to add an error handler in nanoflows like you can in microflows

## 3 Making Reusable JavaScript Actions

To create and refine your JavaScript actions most effectively, consult the subsections below. 

### 3.1 Designing Better APIs{#betterapis}

With well-designed APIs, JavaScript actions will become easier to reuse. Please consider the following guidelines when designing APIs: 

* Create small, functional actions – when actions with many functions are split into smaller components, the nanoflow can combine them in various ways
* Generate the fewest number of side effects – an action without a side effect does not have a state, does not depend on the state of other components, and can thus stand alone (this will also make testing and behavior predicting easier for developers) 
* Do not implement actions that can be done with standard actions, and do not combine new and existing functions into single actions (instead, compose the required function with multiple actions in a nanoflow)
* Business logic should be in the nanoflow – the actions should only `Do`  things, `Check` states, and `Get` data
* Create `Check` actions and `Do` actions for developers who do not know that the Mendix Client can perform the actions – for example the `CheckCameraSupported` and `OpenCamera` actions
* Name actions and parameters clearly (this will go far in documenting the API)
* Document the action, parameters, defaults, return values, errors, and compatibility – for more information, see the [Documenting JavaScript Actions](#document) section of this document below
* Only expose the most generic functionality – libraries with fewer exposed functions are easier to understand, use, maintain, and test (new features can always be added later)
* Design an API that is independent from the used library (this makes it possible to change the implementation or replace the library without changing the API) 
* Use language that is familiar to developers – for example, the function name should not include implementation details;  `OpenPhoneGapCamera` should be `OpenCamera`

Consider these additional technical suggestions for best API practices:

* Favor enumerations for limited options over a free format string – for example: source "Camera”,  "Gallery", or "User choice"
* Prefer Boolean options for binary parameter – for example: 'Blocking dialog' (true / false)
* Prefer primitive return types – do not return objects where possible, but use return String or Decimal instead
* Do not change objects; create new non-persistable entity (NPE) objects instead – NPE objects should be shipped with the action in a module, and can be reused in various unrelated nanoflows
* When you are not working, make NPE objects depend on the Entity or Generic parameters (this way, you can restrict hardcoded entity names which could generate errors when the entities are renamed in the domain model)
* Validate input, and never trust that the developer is using the action correctly – for more information, see the [Handling Input](#handlinginput) section of this document above
* Provide sensible defaults for input parameters whenever possible

### 3.2 Exposing JavaScript Actions

JavaScript Actions can be used in a nanoflow with a JavaScript action call activity. It is also possible to expose the actions in the activity list. This will make it easier for developers to find the actions. It is recommended to expose only the actions that will be reused often. 

Use **Category** to group actions, and **Icon** to give the exposed nanoflow action easy recognition inside the nanoflow:

{{< figure src="/attachments/howto8/extensibility/best-practices-javascript-actions/narrow-expose.png" alt="exposed nanoflow with info" >}}

### 3.3 Publishing JavaScript Actions

You can export a single action by right-clicking a JavaScript action in the Project Explorer then selecting **Export document to file**. Then, the exported file can be shared with other developers. A single nanoflow cannot be published in the Mendix Marketplace. Instead, publish it as a module. 

You can import a single action by right-clicking your module in the Project Explorer, and then selecting **Import document from file**. Next, select your JavaScript action file.

A single nanoflow action cannot be published in the Mendix Marketplace. You may publish one as a module, but it is recommended to publish related nanoflow actions as a group within a module. For a module containing multiple nanoflow actions, group actions with a relevant data model like "entities" and provide relevant documentation for external dependencies. Export the module as a whole and upload it to the Mendix Marketplace. For further instructions, see [How to Share Marketplace Content](/appstore/general/share-app-store-content/).

### 3.4 Documenting JavaScript Actions{#document}

Well-documented actions are easier to reuse. Consider the following when documenting:

* Correct naming is the most important aspect of documentation
	* Use "VerbNoun" naming conventions, for example: GetUser
	* Use self-explaining parameter names
* In an action's **Settings** > **Documentation** tab, describe:
	* What the action is doing
	* The returned value
	* Supported platforms, such as web, mobile, or native
	* Browser compatibility, such as Chrome, FireFox, or Edge
	* Dependent modules (if any)
	* The used library or function
* For parameters, add a description and provide the default if implemented
* Referring to documentation for used APIs
* Noting any external dependencies, and explain how they can be added

## 4 Testing JavaScript Actions

An extensive test app can help make a JavaScript action more robust. Within a test app, try to create all possible variations of the input, accounting for empty inputs and error cases that should be handled.

When testing, make sure you to check all compatible platforms (web, hybrid, and native). The web should handle the Mendix browser compatibility. For further information about compatibility, see the [Browsers](/refguide8/system-requirements/#browsers) section of *System Requirements*. 

When an action is not compatible with the platform, make sure it can be checked with an additional action before running into an error. For example, employ a `CheckCameraSupport` action before starting a camera. When an action is called but not compatible, it should fail gracefully or display a clear error message. 

## 5 Debugging JavaScript Actions

Debugging a JavaScript action's code can be done within a browser development tool. For details on how to do this, see your browser's developer tools documentation at either [Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/), [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools), [Microsoft Edge Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium), or Safari's [Web Development Tools](https://developer.apple.com/safari/tools/). 

Initially, JavaScript actions' source code is not loaded. Their source code will be loaded right before the first execution of a module's action. From that moment on, you can find the source code in the **Sources** tab of **Developer Tools** in the folder **javascript-actions** if you are using Chrome.

After the file is loaded, breakpoints can be set in the code by clicking the inline number (**A**, in the screenshot below). Alternatively, select **Pause on caught exceptions**  could be used to find issues (**B**). As a last resort, you could alter the source code by adding the line `debugger;` (**C**). This statement will start the debugging tools the first time the action is executed, and will apply a breakpoint:

{{< figure src="/attachments/howto8/extensibility/best-practices-javascript-actions/debugging.png" alt="debugging"   width="500"  >}}

## 6 Understanding Bad Practices {#badpractice}

Not all capabilities are recommended for use. Consider the side effects that an action could have on the Mendix Client, DOM, or other widgets:

* Do not assume your user's browser – remember not all browsers have the same capabilities
* Permanent rendering should be done using pluggable or custom widgets – the new Mendix Client will render the page at will and remove your changes (for example, when you are rendering DOM, work on a DOM node of the `index.html`)
* Changes to the DOM might be lost due to the Mendix Client which can render the DOM at will (for example, when you add a CSS class to another component the Mendix Client will render the page at will and remove your changes) – you can create and change DOM elements that are placed outside `<div id="content"></div>`
* Avoid using deprecated libraries – do not use Dojo or Dijit as they will be deprecated (jQuery should also no longer be used)
* Avoid using Boolean actions that return `undefined`– the Boolean variable is the only variable that requires a value, is the only acceptable state is  `true` or `false`(other variables could be set to `undefined` and can be checked in Mendix Studio Pro as `$variable != empty`)

## 7 Read More

* [Build JavaScript Actions](/howto8/extensibility/build-javascript-actions/)
* [JavaScript Actions](/refguide8/javascript-actions/)
* [Mendix Client API](https://apidocs.rnd.mendix.com/7/client/index.html)
* JavaScript basics:
	* [Mozilla JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
	* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
