---
title: "Best Practices"
category: "Test Development"
---

## Best Practices for writing custom actions
In ATS there are two ways for creating custom actions. First you can extract actions from you test case steps, to encapsulate multiple test steps into a single test step. The second way is to create custom actions from scratch. This section provides you with *Do's and Dont's* for your custom action creation process, to help you achieve the actions you want.  

### Make your actions reusable

### Split big actions

### Find WebElements before using JavaScript actions

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

### Solution Patterns
