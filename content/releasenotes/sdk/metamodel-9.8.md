---
title: "9.8"
parent: "metamodel-9"
---

## 9.8.0

**Release date: November 25th, 2021**

### Microflows

#### ExpressionListOperation (Element)

* We deleted the `expressionModel` property. 

#### MemberChange (Element)

* We deleted the `valueModel` property. 

#### ChangeListAction (Element)

* We deleted the `valueModel` property. 

#### ChangeVariableAction (Element)

* We deleted the `valueModel` property. 

#### CreateVariableAction (Element)

* We deleted the `initialValueModel` property. 

#### CustomRange (Element)

* We deleted the `limitExpressionModel` and `offsetExpressionModel` properties.

#### EndEvent (Element)

* We deleted the `returnValueModel` property. 

#### ExpressionSplitCondition (Element)

* We deleted the `expressionModel` property. 

#### InspectAttribute (Element)

* We deleted the `expressionModel` property. 

#### BasicCodeActionParameterValue (Element)

* We deleted the `argumentModel` property. 

#### ListOperationAction (Element)

* The `operation` property is no longer optional.
* We changed the default value of the `operation` property.

#### LogMessageAction (Element)

* We deleted the `nodeModel` property. 

#### MicroflowCallParameterMapping (Element)

* We deleted the `argumentModel` property. 

#### NanoflowCallParameterMapping (Element)

* We deleted the `argumentModel` property. 

#### RuleCallParameterMapping (Element)

* We deleted the `argumentModel` property. 

#### TemplateArgument (Element)

* We deleted the `expressionModel` property. 

#### DocumentTemplateParameterMapping (Element)

* We deleted the `argumentModel` property. 

#### GenerateDocumentAction (Element)

* We deleted the `marginLeftInInchModel`, `marginRightInInchModel`, `marginTopInInchModel`, and `marginBottomInInchModel` properties.

#### WebServiceCallAction (Element)

* We deleted the `timeOutModel` property. 

#### HttpConfiguration (Element)

* We deleted the `customLocationModel`, `username`, and `password` properties.

#### HttpHeaderEntry (Element)

* We deleted the `valueModel` property. 

#### BinaryRequestHandling (Element)

* We deleted the `expressionModel` property. 

#### FormDataPart (Element)

* We deleted the `valueModel` property. 

#### WebServiceOperationParameterMapping (Element)

* We deleted the `argumentModel` property. 

#### ProxyConfiguration (Element)

* We deleted the `usernameExpressionModel`, `passwordExpressionModel`, `hostExpressionModel`, `portExpressionModel`, and `useConfigurationExpressionModel` properties.

#### RestCallAction (Element)

* We deleted the `timeOutModel` property. 

### Projects

#### Module (StructuralUnit)

* We introduced the `moduleSettings` property. 
* We deleted the `exportLevel` property. 

#### ModuleSettings (ModelUnit)

* We introduced this model unit. 

### Security

#### ProjectSecurity (ModelUnit)

* We introduced the `strictPageUrlCheck` property. 

### Pages

#### CheckBox (Element)

* We introduced the `nativeRenderMode` property. 

#### WidgetValidation (Element)

* We deleted the `expressionModel` property. 

#### ConditionalSettings (Element)

* We deleted the `expressionModel` property. 
