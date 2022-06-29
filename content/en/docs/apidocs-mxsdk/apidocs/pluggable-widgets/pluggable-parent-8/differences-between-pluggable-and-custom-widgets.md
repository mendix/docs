---
title: "Differences Between Pluggable and Custom Widgets"
url: /apidocs-mxsdk/apidocs/differences-between-pluggable-and-custom-widgets/
description: This document explains the differences between pluggable and custom widgets.
tags: ["Widget", "Pluggable",  "JavaScript"]
---

## 1 Introduction

Pluggable widgets are the successor to [Custom widgets](/howto8/extensibility/widget-development/). Pluggable widgets are based on a modern React framework, have access to better APIs in the client, and can use more advanced properties in Studio and Studio Pro. Therefore, pluggable widgets allow you to more easily implement existing front-end libraries, tools, and your own expertise. Pluggable widgets should be used instead of custom widgets whenever possible.

## 2 Differences Between Pluggable and Custom Widgets

| Concept      | Pluggable widgets                                                                                     | Custom widgets                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Framework    | [React](/apidocs-mxsdk/apidocs/pluggable-widgets/#client-component)                                                                         | [Dojo](/howto8/extensibility/widget-development/#dojo)                 |
| Data access  | Declarative, props-based                                                                              | Imperative, callback-based                                               |
| Data updates | [Receive updates in props](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/#dynamic-value) | [Subscribe](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.subscribe) |
| API          | [Pluggable widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)                                     | [Mendix client API](https://apidocs.rnd.mendix.com/8/client/index.html)                |
| Platform     | [Web and native](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-description)                                                            | Web                                                                      |

| Feature                                                           | Pluggable widgets                                    | Custom widgets                                                        |
| ----------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Access to attribute data                                          | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#attribute)    | Yes                                                                   |
| Retrieve additional data over associations, microflows, or nanoflows | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#datasource) (with [widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#widgets) only)   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.get) |
| Template Text; combine data and translatable text                 | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#texttemplate) | No                                                                    |
| Expressions; logic combined with data                             | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#expression)   | No                                                                    |
| File support; download, and open                                  | [yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#file)         | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| File support; upload                                              | No                                                   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| Use conditional visibility                                        | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#visibility)   | No                                                                    |
| Use conditional editability                                       | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#editability)  | No                                                                    |
| Use glyph icons                                                   | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#icon)         | No                                                                    |
| Show input label                                                  | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#label)        | No                                                                    |
| Trigger an action on change of attribute                          | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#attribute)    | No                                                                    |
| Widgets can contain other widgets                                 | [Yes](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#widgets)      | No                                                                    |
| Widgets can create new objects                                    | No                                                   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.create)   |

## 3 Read More

* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
