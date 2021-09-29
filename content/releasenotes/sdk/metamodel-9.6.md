---
title: "9.6"
parent: "metamodel-9"
---

## 9.6.0

### CodeActions

#### MicroflowActionInfo (Element)

* We introduced the `imageData` property.

### DomainModels

#### MappedValue (Element)

* We introduced the `updatableRuntime` property.

#### EntityRef, DirectEntityRef, EntityRefStep, AttributeRef & AssociationRef (Element)

* We made these elements public, which means you can use them without first loading the unit.

####  IndirectEntityRef (Element)

* We made this element public, which means you can use it without first loading the unit.
* We made the `steps` property public.

#### MemberRef (Element)

* We made this element public, which means you can use it without first loading the unit.
* We made the `entityRef` property public.

### Microflows

#### SendExternalObject (Element)

* We introduced this element.

### Settings

#### RuntimeSettings (Element)

* We introduced the `useSystemContextForBackgroundTasks` property.

### Rest

#### ODataRemoteAssociationSource (Element)

* We introduced the `updatableFromChild` property. When you have a child object, use this to identify that you can set its associated parent.
* We introduced the `updatableFromParent` property. When you have a parent object, use this to identify that you can set its associated child.

#### ODataMappedValue (Element)

* We introduced the `updatable` property. Use this to identify that the attribute is updatable.

### Workflows

#### Workflow (ModelUnit)

* We introduced the `parameter` and `workflowEntity` properties. 
* We deleted the `contextEntity`, `allowedModuleRoles`, and `allowedUserRoles` properties.

#### Parameter (Element)

* We introduced this element.

#### CallWorkflowActivity (Element)

* We introduced the `parameterExpression` property.

#### UserTask (Element)

* We introduced the `userTaskEntity` property.
* We deleted the `allowedModuleRoles` and `allowedUserRoles` properties.
