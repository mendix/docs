---
title: "11.1"
url: /releasenotes/sdk/metamodel-11.1/
weight: 76
---

## 11.1.0

### Workflows

#### Workflow (ModelUnit)

* We introduced the `workflowMetaData` property. 
* We introduced the `workflowV2` property. 

#### WorkflowActivity (Element)

* We introduced the `relativeMiddlePoint` property. 
* We introduced the `^size` property. 

#### StartWorkflowActivity (Element)

* We introduced this element. 

#### WorkflowMetaData (Element)

* We introduced this element. 

#### FloatingAnnotation (Element)

* We introduced this element. 

#### FlowLine (Element)

* We introduced this element. 

#### Line (Element)

* We introduced this element. 

#### OrthogonalPath (Element)

* We introduced this element. 

#### BezierCurve (Element)

* We introduced this element. 

### Pages

#### Page (ModelUnit)

* We introduced the `autofocus` property. 

#### PageParameterMapping (Element)

* We made the `variable` property optional.
* We changed the default value of the `variable` property.

### Navigation

#### NativeNavigationProfile (Element)

* We introduced the `nativeNavigationEnabled` property. 

### ODataPublish

#### CallMicroflowToChange (Element)

* We made the `microflow` property optional.
* We introduced the `microflowRuntime` property. 

### DatabaseConnector

#### ExecuteDatabaseQueryAction (Element)

* We introduced the `connectionParameterMappings` property. Info: "Connection parameters to set dynamic connection properties in the activity."

#### ConnectionParameterMapping (Element)

* We introduced this element. Info: "Connection parameters to set dynamic connection properties in the activity."
