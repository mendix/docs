---
title: "9.10"
url: /releasenotes/sdk/metamodel-9.10/
weight: 90
---

## 9.10.0

**릴리스 날짜: 2022년 1월 14일**

### CodeActions

#### MicroflowActionInfo (Element)

* `iconData`, `iconDataDark`, and `imageDataDark` 속성을 도입하였습니다.
* `icon` 속성을 삭제하였습니다. 

### JavaScriptActions

#### JavaScriptAction (ModelUnit)

* `platform` 속성을 도입하였습니다. 

### DomainModels

#### DomainModel (ModelUnit)

* `documentation` 속성을 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.

#### Entity (Element)

* We made the `location` and `documentation` properties public, which means you can use these without first loading the unit.

#### Attribute (Element)

* `documentation` 속성을 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.

#### AssociationBase (Element)

* `documentation` 속성을 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.

### Microflows

#### JavaActionCallAction (Element)

* `queueSettings` 속성을 도입하였습니다. 
* `queue` 속성을 삭제하였습니다. 

#### MicroflowCall (Element)

* `queueSettings` 속성을 도입하였습니다. 
* `queue` 속성을 삭제하였습니다. 

#### MLModelCallAction, MLModelCall, and MLModelCallParameterMapping (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Projects

#### Document (ModelUnit)

* `documentation` 속성을 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.

### Queues

#### QueueSettings, QueueRetry, QueueFixedRetry, and QueueExponentialRetry (Elements)

* 이 엘리먼트들을 도입하였습니다. 

### Settings

#### WebUIProjectSettingsPart (Element)

* `useOptimizedClient` 속성을 도입하였습니다.

#### JarDeploymentSettings, JarLocationBase, UserLibJarLocation, and ProtectedModuleJarLocation (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Rest

#### PublishedRestResource (Element)

* `insertable` and `deletable` 속성을 도입하였습니다.

### CustomWidgets

#### WidgetValueType (Element)

* `universeDataSourceProperty` 속성을 도입하였습니다. 

### Workflows

#### Parameter (Element)

* `entity` 속성을 도입하였습니다. 
* `entityRef`, `parameterAssociation`, and `parameterEntity` 속성을 삭제하였습니다.

#### Workflow (ModelUnit)

* `workflowType` 속성을 삭제하였습니다. 

#### UserTask (Element)

* `userTaskEntity` 속성을 삭제하였습니다. 

#### EmptyUserSource (Element)

* 이 엘리먼트를 도입하였습니다. 

#### WorkflowType (Element)

* 이 엘리먼트를 삭제하였습니다. 
