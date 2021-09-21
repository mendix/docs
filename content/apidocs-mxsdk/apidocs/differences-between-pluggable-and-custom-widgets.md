---
title: "Differences Between Pluggable and Custom Widgets"
parent: "pluggable-parent-8"
description: This document explains the differences between pluggable and custom widgets.
tags: ["Widget", "Pluggable",  "JavaScript"]
---

## 1 Introduction

Pluggable widgets are the successor to [Custom widgets](/howto8/extensibility/widget-development). Pluggable widgets are based on a modern React framework, have access to better APIs in the client, and can use more advanced properties in Studio and Studio Pro. Therefore, pluggable widgets allow you to more easily implement existing front-end libraries, tools, and your own expertise. Pluggable widgets should be used instead of custom widgets whenever possible.

## 2 Differences Between Pluggable and Custom Widgets

| Concept      | Pluggable widgets                                                                                     | Custom widgets                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Framework    | [React](/apidocs-mxsdk/apidocs/pluggable-widgets#client-component)                                                                         | [Dojo](/howto8/extensibility/widget-development#dojo)                 |
| Data access  | Declarative, props-based                                                                              | Imperative, callback-based                                               |
| Data updates | [Receive updates in props](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis#dynamic-value) | [Subscribe](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.subscribe) |
| API          | [Pluggable widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets)                                     | [Mendix client API](https://apidocs.rnd.mendix.com/8/client/index.html)                |
| Platform     | [Web and native](/apidocs-mxsdk/apidocs/pluggable-widgets#widget-description)                                                            | Web                                                                      |

| Feature                                                           | Pluggable widgets                                    | Custom widgets                                                        |
| ----------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Access to attribute data                                          | [Yes](property-types-pluggable-widgets#attribute)    | Yes                                                                   |
| Retrieve additional data over associations, microflows, or nanoflows | [Yes](property-types-pluggable-widgets#datasource) (with [widgets](property-types-pluggable-widgets#widgets) only)   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.get) |
| Template Text; combine data and translatable text                 | [Yes](property-types-pluggable-widgets#texttemplate) | No                                                                    |
| Expressions; logic combined with data                             | [Yes](property-types-pluggable-widgets#expression)   | No                                                                    |
| File support; download, and open                                  | [yes](property-types-pluggable-widgets#file)         | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| File support; upload                                              | No                                                   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| Use conditional visibility                                        | [Yes](property-types-pluggable-widgets#visibility)   | No                                                                    |
| Use conditional editability                                       | [Yes](property-types-pluggable-widgets#editability)  | No                                                                    |
| Use glyph icons                                                   | [Yes](property-types-pluggable-widgets#icon)         | No                                                                    |
| Show input label                                                  | [Yes](property-types-pluggable-widgets#label)        | No                                                                    |
| Trigger an action on change of attribute                          | [Yes](property-types-pluggable-widgets#attribute)    | No                                                                    |
| Widgets can contain other widgets                                 | [Yes](property-types-pluggable-widgets#widgets)      | No                                                                    |
| Widgets can create new objects                                    | No                                                   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.create)   |

## 3 Read More

* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets)
