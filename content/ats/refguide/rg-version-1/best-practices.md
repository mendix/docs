---
title: "Best Practices"
parent: "test-development"
---

## Best Practices for writing custom actions

In ATS there are two ways for creating custom actions. First you can extract actions from you test case steps, to encapsulate multiple test steps into a single test step. The second way is to create custom actions from scratch. This section provides you with *Do's and Dont's* for your custom action creation process, to help you achieve the actions you want.  

### Write reusable and focused actions

Use input parameters and generic functions instead of hardcoding every variable or option. Also don't write actions that do everything at once. Let your actions do one specific task, e.g. the retrieval of a WebElement. This serves the readability of your actions/test cases and also makes maintenance much easier.     

### Retrieve WebElements/Widgets before applying JavaScript actions on them

If you want to access a child node, from a parent widget and you cannot use the [Find widget child node action](find-widget-child-node), you should get the parent widget first, before you manipulate the DOM with a JavaScript action. Especially if you use the extended JQuery selectors. Those selectors tend to be slower in their execution time and if you have to traverse the whole DOM to get to the desired node, this can make a huge difference. Use the [Find/Assert Widget action](findassert-widget) on the parent widget and pass the result to the JavaScript action as input parameter. From there you can traverse the subtree with the parent widget as root and save execution time.

For more informations about JQuery selectors read the [JQuery selectors section](selectors#jquery-selectors) of this reference or visit the [official JQuery selectors reference](https://api.jquery.com/category/selectors/).  

### Naming Conventions
Always use descriptive names for your actions and parameters, e.g. "Set TextBox value" for an action or "Column Name" for a parameter. This makes it easier to know what your action does, without looking into it.

Some parameter names used by the ATS core library:

 * Widget Name
 * Username
 * Password
 * Caption
 * Column Name
 * Column Value
 * Index
 * Page Title
 * Row/Item
 * Value
 * Element
