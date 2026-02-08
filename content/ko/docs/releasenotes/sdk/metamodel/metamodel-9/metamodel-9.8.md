---
title: "9.8"
url: /releasenotes/sdk/metamodel-9.8/
weight: 92
---

## 9.8.0

**릴리스 날짜: 2021년 11월 25일**

### Microflows

#### ExpressionListOperation (Element)

* `expressionModel` 속성을 삭제하였습니다. 

#### MemberChange (Element)

* `valueModel` 속성을 삭제하였습니다. 

#### ChangeListAction (Element)

* `valueModel` 속성을 삭제하였습니다. 

#### ChangeVariableAction (Element)

* `valueModel` 속성을 삭제하였습니다. 

#### CreateVariableAction (Element)

* `initialValueModel` 속성을 삭제하였습니다. 

#### CustomRange (Element)

* `limitExpressionModel` and `offsetExpressionModel` 속성을 삭제하였습니다.

#### EndEvent (Element)

* `returnValueModel` 속성을 삭제하였습니다. 

#### ExpressionSplitCondition (Element)

* `expressionModel` 속성을 삭제하였습니다. 

#### InspectAttribute (Element)

* `expressionModel` 속성을 삭제하였습니다. 

#### BasicCodeActionParameterValue (Element)

* `argumentModel` 속성을 삭제하였습니다. 

#### ListOperationAction (Element)

* The `operation` 속성이 더 이상 선택 사항이 아닙니다.
* `operation` 속성의 기본값을 변경하였습니다.

#### LogMessageAction (Element)

* `nodeModel` 속성을 삭제하였습니다. 

#### MicroflowCallParameterMapping (Element)

* `argumentModel` 속성을 삭제하였습니다. 

#### NanoflowCallParameterMapping (Element)

* `argumentModel` 속성을 삭제하였습니다. 

#### RuleCallParameterMapping (Element)

* `argumentModel` 속성을 삭제하였습니다. 

#### TemplateArgument (Element)

* `expressionModel` 속성을 삭제하였습니다. 

#### DocumentTemplateParameterMapping (Element)

* `argumentModel` 속성을 삭제하였습니다. 

#### GenerateDocumentAction (Element)

* `marginLeftInInchModel`, `marginRightInInchModel`, `marginTopInInchModel`, and `marginBottomInInchModel` 속성을 삭제하였습니다.

#### WebServiceCallAction (Element)

* `timeOutModel` 속성을 삭제하였습니다. 

#### HttpConfiguration (Element)

* `customLocationModel`, `username`, and `password` 속성을 삭제하였습니다.

#### HttpHeaderEntry (Element)

* `valueModel` 속성을 삭제하였습니다. 

#### BinaryRequestHandling (Element)

* `expressionModel` 속성을 삭제하였습니다. 

#### FormDataPart (Element)

* `valueModel` 속성을 삭제하였습니다. 

#### WebServiceOperationParameterMapping (Element)

* `argumentModel` 속성을 삭제하였습니다. 

#### ProxyConfiguration (Element)

* `usernameExpressionModel`, `passwordExpressionModel`, `hostExpressionModel`, `portExpressionModel`, and `useConfigurationExpressionModel` 속성을 삭제하였습니다.

#### RestCallAction (Element)

* `timeOutModel` 속성을 삭제하였습니다. 

### Projects

#### Module (StructuralUnit)

* `moduleSettings` 속성을 도입하였습니다. 
* `exportLevel` 속성을 삭제하였습니다. 

#### ModuleSettings (ModelUnit)

* 이 모델 유닛을 도입하였습니다. 

### Security

#### ProjectSecurity (ModelUnit)

* `strictPageUrlCheck` 속성을 도입하였습니다. 

### Pages

#### CheckBox (Element)

* `nativeRenderMode` 속성을 도입하였습니다. 

#### WidgetValidation (Element)

* `expressionModel` 속성을 삭제하였습니다. 

#### ConditionalSettings (Element)

* `expressionModel` 속성을 삭제하였습니다. 
