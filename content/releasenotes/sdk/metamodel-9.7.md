---
title: "9.7"
url: /releasenotes/sdk/metamodel-9.7/
parent: "metamodel-9"
---

## 9.7.0

**Release date: October 18th, 2021**

### DomainModels

#### RemoteAssociationSource (Element)

* We introduced the `updatableFromParentRuntime` property. 
* We introduced the `updatableFromChildRuntime` property. 

### Microflows

#### SendExternalObject (Element)

* We introduced the `refreshInClient` property to check whether the user wants to refresh the data in the client.

#### MeterAction, GaugeMeterAction, CounterMeterAction, IncrementCounterMeterAction, MeterTagMapping (Elements)

* We introduced these elements.

### Security

#### PasswordPolicySettings (Element)

* We changed the default value of the `minimumLength` property.

### Pages

#### PageSettings (Element)

* We introduced the `parameterMappings` property. 

#### PageParameterMapping (Element)

* We introduced this element. 

### Workflows

#### Workflow (ModelUnit)

* We introduced the `workflowType` property. 
* We deleted the `workflowEntity` property. 

#### WorkflowType (Element)

* We introduced this element. 
