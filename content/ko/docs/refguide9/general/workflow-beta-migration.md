---
title: "Workflow 앱 마이그레이션"
url: /refguide9/workflow-beta-migration/
linktitle: "Workflow 앱 마이그레이션"
weight: 25
description: "기존 Workflow 애플리케이션을 피드백이 개선된 새로운 베타 버전으로 마이그레이션하는 방법을 설명합니다."
---

## 소개

[Workflow](/refguide9/workflows/)는 Mendix 9에서 베타 기능으로 도입되었습니다. 이후 커뮤니티로부터 기능을 더욱 개선할 수 있는 귀중한 아이디어와 함께 훌륭한 피드백을 받았으며, 이러한 아이디어는 Mendix 9.6 이상에서 구현되었습니다. 그러나 [System Module의 Domain Model 변경 사항](#system-module)으로 인해 Workflow가 있는 앱을 수동으로 마이그레이션해야 합니다.

이 문서에서는 마이그레이션하려는 버전에 따라 기존 Workflow 앱을 마이그레이션하는 방법을 설명합니다. 이 문서는 숙련된 Mendix 개발자를 대상으로 하므로 주의하여 진행하십시오.

## System Module Domain Model 변경 사항 {#system-module}

### Mendix 9.6–9.9의 변경 사항

Mendix 9.6, 9.7, 9.8, 9.9에서 System Module의 Domain Model에 다음과 같은 변경이 이루어졌습니다:

1. **WorkflowSystemTask** 및 **WorkflowVersion** Entity가 제거되었으며, 이제 Runtime에서 백그라운드로 처리됩니다.
2. **WorkflowTaskInstance** Entity가 **WorkflowUserTask** Entity에 병합되었습니다.
3. **WorkflowContext** Entity가 제거되었으며, Domain Model의 Entity는 더 이상 이 Entity를 특수화할 필요가 없습니다. 자세한 내용은 아래의 [Domain Model 설정](#domain-model) 섹션을 참조하십시오.
4. **WorkflowInstance** Entity가 Mendix의 Entity 명명 방식에 더 부합하도록 **Workflow**로 이름이 변경되었습니다.
5. 일부 속성의 이름이 약간 업데이트되었습니다.

### Mendix 9.10의 변경 사항

Mendix 9.10에서 System Module의 Domain Model에 다음과 같은 변경이 이루어졌습니다:

* 9.6-9.9와 달리 Task에 더 이상 WorkflowUserTask Entity 특수화가 필요하지 않습니다
* 9.6-9.9와 달리 Workflow에 더 이상 Workflow Entity 특수화가 필요하지 않습니다
* WorkflowUserTask.Reason 속성이 제거되었습니다
* WorkflowUserTaskState 열거형이 변경되었습니다
* Workflow User Task가 완료되면 System.WorkflowUserTask에서 자동으로 삭제됩니다
* WorkflowUserTask 및 Workflow에 대한 Entity 접근 규칙이 변경되었습니다

## Workflow 기능이 있는 앱 마이그레이션

다음 하위 섹션에서는 마이그레이션하려는 버전에 따라 Workflow 기능이 있는 앱을 마이그레이션하는 단계를 설명합니다.

**Mendix 9.6-9.9**로 앱을 마이그레이션하려면 아래의 [Mendix 9.6-9.9로 앱 마이그레이션](#migrate) 섹션을 참조하십시오.

**Mendix 9.10**으로 앱을 마이그레이션하려면 아래의 [Mendix 9.6-9.9에서 Mendix 9.10으로 앱 마이그레이션](#migrate-910) 섹션을 참조하십시오.

### Mendix 9.6-9.9로 앱 마이그레이션 {#migrate}

Workflow 기능이 있는 앱을 Mendix 9.6, 9.7, 9.8 또는 9.9로 마이그레이션하려면 아래 단계를 따르십시오.

#### 앱 백업

현재 실행 중인 앱의 데이터를 보존해야 하는 경우, **백업을 만드십시오!** 이 마이그레이션은 System Module Entity에 변경을 가하며 자체 Entity도 조정해야 하므로 데이터 손실이 예상됩니다.

#### 데이터 마이그레이션 Microflow 빌드

필요한 경우 데이터 마이그레이션 Microflow를 빌드하십시오.

#### 앱 업그레이드

앱을 Mendix 9.6-9.9로 업그레이드하십시오. 앱을 업그레이드하려면 다음 단계를 따르십시오:

1. Studio Pro 9.6-9.9를 다운로드합니다.
1. Studio Pro에서 앱을 엽니다.
1. 필요한 경우 앱 업그레이드를 허용합니다.

#### Workflow Commons 모듈 업데이트

해당하는 경우 Marketplace에서 [Workflow Commons](https://marketplace.mendix.com/link/component/117066) 모듈을 새 호환 버전으로 업데이트합니다. 제거된 페이지/스니펫으로 인한 일관성 오류를 해결합니다.

App Settings에서 올바른 사용자 Entity가 설정되어 있는지 확인하십시오: **App Settings** > **Workflows** 탭을 열고 **User entity**를 *Administration.Account*로 설정합니다.

#### Domain Model 설정 {#domain-model}

Mendix 9.6-9.9로 업그레이드한 후, Workflow Context Entity가 비영속적(non-persistable)으로 변경된 것을 확인할 수 있습니다. 이는 System Module에서 **WorkflowContext** Entity가 제거되었기 때문입니다. 일반화(generalization)를 제거하기만 하면 Entity가 자동으로 다시 영속적(persistable)으로 변환됩니다. 이 Entity는 Workflow를 거치는 비즈니스 데이터를 나타내며 Workflow 편집기의 **WorkflowContext** 매개변수에 사용됩니다. 매개변수에 대한 자세한 내용은 아래의 [Workflow 재구성](#reconfigure-workflow) 섹션을 참조하십시오.

애플리케이션의 각 Workflow에 대해 Workflow 인스턴스를 나타내는 Entity가 필요하며, 이는 Workflow 편집기의 **Workflow Instance** 매개변수에 사용됩니다. 이 Entity는 System Module의 **Workflow** Entity의 특수화이어야 하며, 소유자가 **WorkflowInstance** Entity인 일대일 또는 일대다 연관(association)을 통해 Workflow Context Entity에 연결되어야 합니다.

#### Workflow 재구성 {#reconfigure-workflow}

Domain Model이 설정되면 Workflow 문서를 열고 새로 생성한 Entity를 사용할 수 있습니다. Workflow 속성 > **Data** 섹션에는 두 가지 속성이 있습니다: 하나는 **Workflow instance**라고 하며 이전 단계에서 설정한 System **Workflow** Entity를 특수화하는 Entity로 설정해야 합니다. 다른 하나는 **Workflow context**라고 하며 Workflow Instance Entity에서 Workflow Context Entity로의 연관을 통해 설정합니다.

Workflow의 각 User Task에 대해 새로 생성한 Entity를 선택하십시오.

#### 페이지 마이그레이션

Workflow 페이지에 사용자 정의 UI를 구현하지 않은 경우, 페이지를 제거하고 Studio Pro가 Workflow Commons 모듈의 템플릿 중 하나로 재생성하도록 하는 것을 강력히 권장합니다. 그러나 생성된 페이지에서 벗어나 해당 변경 사항을 보존하려면 데이터 뷰의 Context Entity만 변경하면 됩니다.

#### User Task 보안 설정

User Task 보안은 이제 [Entity 접근](/refguide9/module-security/#entity-access)을 설정하여 Domain Model을 통해 이루어지며, 더 이상 어떤 Module Role이 Task를 실행할 수 있는지 선택할 필요가 없습니다. 대상 사용자 설정은 변경되지 않았습니다.

### Mendix 9.6-9.9에서 Mendix 9.10으로 앱 마이그레이션 {#migrate-910}

Workflow 기능이 있는 앱을 Mendix 9.6-9.9**에서** Mendix 9.10**으로** 마이그레이션하려면 아래 단계를 따르십시오.

#### 앱 백업

현재 실행 중인 앱의 데이터를 보존해야 하는 경우, **백업을 만드십시오!** 이 마이그레이션은 System Module Entity에 변경을 가하며 자체 Entity도 조정해야 하므로 데이터 손실이 예상됩니다.

#### 데이터 마이그레이션 Microflow 빌드

필요한 경우 데이터 마이그레이션 Microflow를 빌드하십시오.

#### 앱 업그레이드

앱을 Mendix 9.10으로 업그레이드하십시오. 앱을 업그레이드하려면 다음 단계를 따르십시오:

1. Studio Pro [9.10](/releasenotes/studio-pro/9.10/)을 다운로드합니다.
1. Studio Pro에서 앱을 엽니다.
1. 필요한 경우 앱 업그레이드를 허용합니다.

#### Workflow Commons 모듈 업데이트

해당하는 경우 Marketplace에서 [Workflow Commons](https://marketplace.mendix.com/link/component/117066) 모듈을 새 호환 버전으로 업데이트합니다. 제거된 페이지/스니펫으로 인한 일관성 오류를 해결합니다.

App Settings에서 올바른 사용자 Entity가 설정되어 있는지 확인하십시오: **App Settings** > **Workflows** 탭을 열고 **User entity**를 *Administration.Account*로 설정합니다.

#### Domain Model 설정

Domain Model을 설정하려면 아래 권장 사항을 따르십시오:

* Domain Model에서 **Workflow** 및 **WorkflowUserTask**의 모든 특수화를 제거합니다. Entity에 특정 속성 및/또는 연관이 있었다면 Workflow Context Entity로 이동합니다.
* 경우에 따라 Workflow Context Entity에서 Workflow Entity로의 연관을 추가해야 할 수 있습니다(예: Context Entity를 표시하는 데이터 그리드에서 Workflow 데이터/열을 사용한 경우). 또는 모든 관련 데이터를 Workflow Context Entity에 복제합니다.

#### 페이지 마이그레이션

페이지를 마이그레이션하려면 아래 권장 사항을 따르십시오:

* Workflow Context Entity의 세부 정보를 표시하기 위해 데이터 소스 Microflow를 사용하도록 (Task) 페이지를 업데이트합니다. 이 Microflow는 Workflow의 Context Entity를 검색합니다. Task 페이지의 데이터 소스 Microflow는 Workflow 템플릿에서 첫 번째 Task 페이지를 생성할 때 자동으로 생성됩니다.
* 타임라인 및 *Completed Date* 열과 같이 완료된 User Task에 의존하는 모든 스니펫, 열 등을 제거합니다.
* 조건부 가시성 및/또는 동적 클래스 표현식에서 WorkflowUserTask의 State 속성을 사용한 경우 해당 항목을 적절히 업데이트합니다.
