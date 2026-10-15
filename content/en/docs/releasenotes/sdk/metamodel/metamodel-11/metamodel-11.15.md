---
title: "11.15"
url: /releasenotes/sdk/metamodel-11.15/
weight: 52 # Reduce weight by 1 to add this document to the top of the navigation
---

## 11.15.0

### Workflows

#### NonInterruptingTimerEventSubProcessStartActivity (Element)

* We introduced the `recurrence` property. 

### Settings

#### WebUIProjectSettingsPart (Element)

* We deleted the `enableRspackBundler` property. 

### MessageDefinitions

#### MessageDefinitionCollection (ModelUnit)

* We deleted this modelunit. 

#### MessageDefinition (Element)

* We deleted this element. 

#### EntityMessageDefinition (Element)

* We deleted this element. 

### Mappings

#### MappingDocument (ModelUnit)

* We deleted the `messageDefinition` property. 

### Security

#### ProjectSecurity (ModelUnit)

* We changed the default value of the `strictMode` property.

### DataSets

#### DataSetColumn (Element)

* We deleted this element. 

#### DataSetDateTimeConstraint (Element)

* We deleted this element. 

#### DataSetNumericConstraint (Element)

* We deleted this element. 

#### DataSetParameter (Element)

* We deleted the `constraints` property. 

#### DataSetParameterConstraint (Element)

* We deleted this element. 

#### JavaDataSetSource (Element)

* We deleted this element. 

### ExcelDataImporter

#### Template (ModelUnit)

* We deleted the `useAsMappingSource` property. Info: "Removing as no longer required"
