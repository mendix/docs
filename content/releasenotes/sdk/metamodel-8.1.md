---
title: "8.1"
parent: "metamodel"
---

These are the release notes for the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.1.

## 8.1.0

**Release date: August 29th, 2019**

### CustomWidgets

#### CustomWidget (Element)

We introduced the following properties:

* `labelTemplate`
* `conditionalEditabilitySettings`
* `editable`
* `conditionalVisibilitySettings`

#### WidgetObject (Element)

We deleted the `labelTemplate` property and moved it to the `CustomWidget` element (see above).
