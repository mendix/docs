---
title: "10.15"
url: /releasenotes/sdk/metamodel-10.15/
weight: 85
---

## 10.15.0

### Microflows

#### SequenceFlow (Element)

* We deleted the `caseValue` property. You can use the 'caseValues' property instead.
* We introduced the `caseValues` property. 

### Mappings

#### MappingSource (Element)

* We made the MappingSource element public, which means you can use (some of) its properties without first loading the unit.
* We introduced the `name` property. Info: "An identifier for mapping source."

### CustomWidgets

#### WidgetValueType (Element)

* We introduced the `defaultType` property. 
