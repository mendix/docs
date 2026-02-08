---
title: "Mendix Pipelines 릴리스 노트"
linktitle: "Mendix Pipelines"
url: /releasenotes/developer-portal/mendix-pipelines/
weight: 8
description: "Mendix Pipelines에 대한 릴리스 노트"
---

이 릴리스 노트는 [Mendix Pipelines](/developerportal/deploy/mendix-pipelines/)의 기능 및 기타 기능 변경 사항을 다룹니다.

Mendix Pipelines의 현재 상태를 확인하려면 [Mendix Status](https://status.mendix.com/)를 참조하세요. 여기에서 계획된 유지보수 및 과거 인시던트도 확인하실 수 있습니다.

## 2025

### November 27, 2025

#### 개선 사항

* Mendix Pipelines 딥링크를 업데이트하여 탐색을 개선했습니다. `/link/`를 사용하는 이전 링크가 `/p/`로 대체되었습니다. 북마크된 Pipeline 페이지를 새 URL 형식으로 업데이트하세요. 예시:
    * 이전 형식 – `https://pipeline-portal.home.mendix.com/link/project/{ProjectID}`
    * 새 형식 – `https://pipeline-portal.home.mendix.com/p/project/{ProjectID}`

### August 7, 2025

#### 새로운 기능

* Mendix on Kubernetes 및 Azure에 대한 배포 및 CI/CD 자동화를 지원하는 새로운 단계를 추가하여 Mendix Pipelines의 기능을 확장했습니다. 이러한 구성 가능한 로우코드 단계는 Mendix Public Cloud용 기존 Mendix Pipelines 단계를 보완하여, 팀이 개발 워크플로우를 더 빠르고 쉽게 간소화할 수 있도록 합니다. 자세한 내용은 [Mendix Pipelines Steps](/developerportal/deploy/mendix-pipelines/#pipeline-steps)를 참조하세요.
  
### June 27, 2025

#### 버그 수정

* 사용자가 커밋 시 트리거되는 Mendix Pipeline을 실행할 수 없는 버그를 수정했습니다. (Ticket 245653)

### February 27, 2025

#### 개선 사항

* Mendix Pipeline 디자인에 대한 유효성 검사 메커니즘을 추가하여, 해당 디자인을 사용하는 Mendix Pipeline이 현재 실행 중인 경우 디자인을 삭제할 수 없도록 했습니다. 자세한 내용은 [Mendix Pipelines: Editing a Mendix Pipeline Design](/developerportal/deploy/mendix-pipelines/#edit-pipeline)을 참조하세요. 
* 이제 Mendix Pipeline이 실행 중인 동안에도 언제든지 **Details** 페이지에 접근할 수 있습니다. 자세한 내용은 [Mendix Pipelines: Run Results](/developerportal/deploy/mendix-pipelines/#run-results)를 참조하세요.

## 2024

### November 14, 2024

#### 새로운 기능

* 사용자 정의 Mendix Pipeline 변수를 생성할 수 있는 새로운 **Variables** 탭을 추가했습니다. 자세한 내용은 *Mendix Pipelines* 문서의 [The Variables Tab](/developerportal/deploy/mendix-pipelines/#variable-tab)을 참조하세요.
* 새로운 Mendix Pipeline 단계를 추가했습니다: [Unit Testing](/developerportal/deploy/mendix-pipelines/#unit-testing). 이 단계는 실행 중인 환경에서 Unit Testing 모듈을 실행하여 회귀 테스트를 수행하고, 테스트가 실패하면 실패 횟수와 세부 정보를 제공하며 Mendix Pipeline을 실패로 표시합니다.

### September 19, 2024

#### 새로운 기능

* 저장 및 활성화된 Mendix Pipeline 디자인에 대해 새 Mendix Pipeline 실행을 시작하고 실행 상태를 조회할 수 있는 API를 출시했습니다. 자세한 내용은 [Mendix Pipelines API](/apidocs-mxsdk/apidocs/pipelines-api/)를 참조하세요.
* 새로운 Mendix Pipeline 단계를 추가했습니다: [Best Practice Recommender](/developerportal/deploy/mendix-pipelines/#recommender) Check. 이 단계를 통해 Mendix Pipeline 내에서 Maia Best Practice Recommender의 결과를 평가할 수 있습니다.

### September 3, 2024

#### 개선 사항

* Mendix Pipelines를 통해 생성된 배포 패키지는 이제 내부적으로 Software Bill of Material(SBOM)을 생성합니다. 이는 Studio Pro LTS 및 MTS 버전 9.24.26 이상, 10.6.12 이상, 10.12.3 이상의 Software Composition에서 확인할 수 있습니다.

### August 22, 2024

#### 수정 사항

* 수동으로 트리거된 Mendix Pipeline에서 처음 몇 초 동안 잘못된 실행 상태가 표시되던 버그를 수정했습니다.

#### 개선 사항

* **Pipelines** 페이지의 **Runs** 탭에서 열 이름을 **Last Run**에서 **Run**으로 변경했습니다. 이 열이 표시하는 내용을 더 정확하게 반영하기 위함입니다: Mendix Pipeline 실행이 발생한 시점을 나타냅니다.

### August 15, 2024

#### 개선 사항

* **Pipelines** 페이지의 **Designs** 탭에 Pipeline ID 열을 추가했습니다.

### July 4, 2024

#### 새로운 기능

* 두 가지 새로운 Mendix Pipeline 단계를 추가했습니다:
    * Start Environment 단계를 사용하여 선택한 환경을 시작할 수 있습니다.
    * Promote Package 단계를 사용하여 지정된 소스 환경에서 지정된 대상 환경으로 배포 패키지를 이동할 수 있습니다.
* 이제 Mendix Pipeline을 수동으로 트리거할 수 있습니다. 이 새로운 트리거 유형을 Mendix Pipeline에서 사용하려면 Mendix Pipeline 디자인의 Start Pipeline 단계에서 **Trigger**로 **Manual**을 선택하세요.
* 곧 Mendix Pipelines에 대한 미니 설문조사를 실시하여 좋아하는 점과 싫어하는 점에 대해 몇 가지 질문을 드릴 예정입니다.

#### 개선 사항

* Mendix Pipeline이 활성 상태인 동안에는 이름을 편집할 수 없습니다. Mendix Pipeline 이름을 편집하려면 먼저 Mendix Pipeline을 비활성화하세요.
* Mendix Pipelines 페이지의 세 개 탭 모두에 딥링크를 구현했습니다. 이를 통해 **Runs**, **Designs**, **Settings** 탭의 레코드별 세부 정보를 쉽게 공유할 수 있습니다. URL을 복사하여 붙여넣기만 하면 됩니다.

### May 9, 2024

#### 개선 사항

* Mendix Pipelines 페이지에 Feedback Widget를 추가하여 고객이 피드백, 개선 요청 및 기타 아이디어를 직접 제공할 수 있도록 했습니다.
* **Runs** 페이지의 검색 및 필터링 성능을 개선했습니다.
* **Runs** 페이지의 테이블에 열 선택기를 추가하여 테이블에 표시되는 열을 사용자 정의할 수 있게 했습니다. 또한 새로운 열인 Pipeline ID를 추가했습니다.

### April 4, 2024

#### 수정 사항

* 선택된 Mendix Pipeline 실행에서 Checkout 단계에서 Mendix Pipeline이 실패하는 문제를 수정했습니다. (Ticket 211117)
* 일부 사용자에 대해 사용자 설정이 저장되지 않는 문제를 수정했습니다.
* Mendix Pipeline을 디자인할 때 Checkout 단계에 대한 브랜치가 가져와지지 않는 문제를 수정했습니다. 또한 트리거 변경 시 Checkout 단계가 동적으로 변경되지 않는 문제도 수정했습니다.

#### 개선 사항

* 스타일링 개선 및 Mendix Pipeline 이름 40자 제한 구현 등 다양한 사용자 경험 개선을 수행했습니다.

### February 29, 2024

#### 새로운 기능

* 새로운 기능인 Mendix Pipelines를 출시했습니다. Mendix Pipelines를 사용하면 자동화된 방식으로 소프트웨어를 빌드하고 배포할 수 있습니다. 구성 가능한 로우코드 단계 세트로 Mendix Pipeline을 디자인할 수 있습니다. 활성화된 Mendix Pipeline은 디자인에 따라 자동으로 실행됩니다. 이 새로운 Mendix Pipelines 기능은 팀이 CI/CD 프로세스를 빠르고 쉽게 자동화할 수 있도록 하기 위해 만들어졌습니다. 자세한 내용은 [Mendix Pipelines](/developerportal/deploy/mendix-pipelines/)를 참조하세요.
    * Mendix Pipelines 기능은 [공개 베타](/releasenotes/release-status/) 상태입니다. 현재 모든 라이선스가 부여된 Mendix Cloud 및 앱에서 무제한으로 사용할 수 있습니다. 향후 사용에 제한이 적용될 수 있습니다.
