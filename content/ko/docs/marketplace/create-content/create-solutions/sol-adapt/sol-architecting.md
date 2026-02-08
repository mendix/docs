---
title: "적응 가능한 Solution 아키텍처 설계"
url: /appstore/creating-content/sol-architecting/
linktitle: "Solution 아키텍처 설계"
weight: 1
description: "조정을 위한 Solution 아키텍처 설계"
---

## 소개

Mendix Platform은 Solution 개발을 지원하는 데 적합합니다. Mendix를 통한 빠른 개발을 통해 고객의 요구와 상황에 맞게 Solution을 조정하고 고객의 기존 IT 환경과 통합할 수 있습니다.

## 점진적이고 진화하는 아키텍처

조정을 위한 Solution 아키텍처 설계의 목표는 [세 가지 Solution 부분](/appstore/creating-content/sol-adapt/#three-parts)인 변경 불가능한 코어, 커스터마이즈 가능한 모듈 및 고객별 컴포넌트에 대한 깊은 이해와 올바른 범위 설정입니다.

이를 위해서는 아키텍처 요구 사항에 대한 이해가 시간이 지남에 따라 더 명확해지는 반복적인 접근 방식이 필요합니다. 또한 기술적 설계 선택에 어느 정도의 실용주의가 필요한데, 모든 것을 미리 알 수 없으며 이해가 증가함에 따라 특정 설계 선택을 다시 해야 할 수 있기 때문입니다.

## 고객별 구현 {#per-customer}

고객 구현은 업그레이드 가능한 별도의 모델 인스턴스(포크)입니다. 원본 Solution 모델과 일반 기능을 공유하며 별도의 클라우드 리소스에 배포됩니다. 이를 통해 구현 팀은 IP 보호되지 않은 모든 기능을 완전히 커스터마이즈할 수 있습니다. 모든 고객 구현에 모델 변경이 필요한 것은 아닙니다. 이러한 경우 원본 모델을 그대로 배포할 수 있습니다. 사용 사례에 따라 고객도 앱에 대한 액세스 권한을 얻습니다.

### 요약

| 옵션 | 전용 앱 | 고객별 Cloud Node | 고객의 Mendix Portal 액세스¹ | 고객의 모델 액세스¹ |
| --- | --- | --- | --- | --- |
| ISV가 빌드, 설계 시점 조정 불필요 | 아니오 | 선택 사항 | 아니오 | 아니오 |
| ISV가 관리 서비스로 빌드 및 조정 | 예 | 예 | [Feedback](/developerportal/app-insights/feedback/) 및 [Epics](/developerportal/project-management/epics/)를 통한 협업을 위해 선택 사항 | 아니오 |
| 고객 또는 구현 파트너가 커스터마이즈 | 예 | 예 | 예, 고객 모델 액세스 포함 | 예 |

¹고객을 대신하여 구현하는 파트너 포함.

### 구성 및 조정

*적응 가능한 Solution*의 [Solution 라이프사이클](/appstore/creating-content/sol-adapt/#lifecycle) 섹션에서 언급한 바와 같이, Solution은 고객의 요구에 맞게 조정할 수 있습니다. 

Mendix는 다음을 사용할 것을 권장합니다:

* [데이터베이스 설정 객체](/refguide/custom-settings/#database-settings) 또는 [상수(constants)](/refguide/constants/)를 통한 **런타임 구성** - 고객 그룹의 요구에 맞게 구성할 때 사용합니다. 이는 다음 목적을 위한 가벼운 구성 및 개인화를 위해 사용해야 합니다:
    * 비즈니스 프로세스 활성화/비활성화.
    * 기능 토글과 같은 기능에 대한 조건부 액세스 제공.
    * 구성 가능한 임계값과 같이 고객 그룹별 기능 매개변수화.
* 개별 고객의 요구에 맞게 애플리케이션 모델을 변경하기 위한 **설계 시점 조정**. 이는 다음을 수행하기 위한 더 큰 커스터마이제이션에 사용해야 합니다:
    * 비즈니스 프로세스 조정 및 규칙 추가.
    * 핵심 시스템과의 통합 수정.
    * Solution 애플리케이션 모델 내에 있어야 하는 고객별 확장 추가.
    * (사용자 지정) 통합 완료.
    * (큰) UI 커스터마이제이션.

일부 커스터마이제이션에는 두 가지 접근 방식이 모두 사용될 수 있지만, Mendix는 다음을 고려할 것을 권장합니다:

* 빌드하고 유지 관리하기 얼마나 쉬운가?
* 나중에 구현하고 업그레이드하기 쉬운가?
* 성능에 미치는 영향은 무엇인가?

Mendix는 Mendix에서 Mendix를 빌드하는 것보다 설계 시점 모델 조정을 권장합니다.

### 설계 시점 조정

설계 시점 조정의 경우, Mendix는 [Solution 설정 방법](/appstore/creating-content/sol-set-up/) 및 [Solution 업그레이드 방법](/appstore/creating-content/sol-upgrade/)을 참조할 것을 권장합니다. 이는 고객을 대신하여 Solution을 구현하는 파트너를 포함하여 각 고객에 대한 전용 앱 및 Git 리포지토리를 만드는 방법에 대한 세부 정보를 제공합니다. 이를 통해 다음이 가능합니다:

* [앱 역할](/developerportal/general/app-roles/)을 통해 개별 고객의 모델 인스턴스에 액세스할 수 있는 사람에 대한 완전한 제어 
* [IP 보호된](/appstore/creating-content/sol-ip-protection/) 콘텐츠 및 원본 Solution 템플릿의 개발에 대한 액세스 방지
* 모든 [Mendix Portal 협업 기능](/developerportal/general/) 사용
* 전용 환경(최소 인수 테스트 및 프로덕션)을 통한 고객 테넌트별 데이터 격리

고객 모델 인스턴스는 [IP 보호](/appstore/creating-content/sol-ip-protection/)가 활성화된 상태로 실행됩니다. 이는 원본 Solution 모델의 일부가 숨겨질 수 있음을 의미합니다. Solution이 보호된 Solution 모델과 함께 게시되면, Solution 모델의 소비자는 더 이상 구현을 숨김 해제할 수 없습니다.

### 조정이 필요 없는 고객

모든 고객이 모델 조정을 요구하는 것은 아닙니다. 이는 수정되지 않은 원본 Solution 모델 버전에서 실행할 수 있음을 의미합니다. 이 경우 Mendix는 배포 패키지(MDA)를 배포 및 배포하는 것을 권장합니다. 이를 통해 Mendix 모델의 검사도 방지하고 원활한 업그레이드가 가능합니다. 이는 [유연한 환경](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments) 및/또는 멀티 테넌시 설정과 결합할 수 있습니다.

라이브 후 고객을 위해 모델을 조정해야 하는 경우, Solution을 초기화할 수 있습니다. 초기화 후 새로 생성된 환경에 데이터베이스 백업을 복원하면 데이터 손실이 없습니다.

{{% alert color="info" %}}
이 시나리오는 커스터마이제이션을 적용하기 전에 테스트하십시오. 이는 애플리케이션 모델이 동일한 버전의 Solution을 기반으로 하는 경우에만 작동합니다.
{{% /alert %}}

## 애플리케이션 설계 {#app-design}

### 모듈 유형 결합

적응 가능한 Solution은 여러 코어 및 조정 가능한 모듈을 포함할 수 있습니다. Solution을 만들 때 애플리케이션 모델에서 다양한 모듈 유형과 그 목적을 구분하는 것이 중요합니다:

| 유형 | 포함 내용 | 구현 | 책임 |
| --- | --- | --- | --- |
| [Solution 모듈](/refguide/module-settings/#solution-module) | 지적 재산 및 핵심 로직이 포함된 변경 불가능한 공통 코어 | 숨김 | 빌드 팀 |
| [(오픈) 애플리케이션 모듈](/refguide/module-settings/#app-module) | 앱의 조정 가능한 부분 | 표시, 변경 가능 | 빌드 팀과 구현 팀 간 공유 | 
| [UI 모듈](/refguide/ui-resources-package/) | 테마 | 표시, 변경 가능 | 빌드 팀과 구현 팀 간 공유 |
| 고객별 모듈 | 고객별 추가 사항 | 표시 | 구현 팀 |

Solution 모델의 구현 세부 사항은 볼 수 없고 변경할 수 없습니다. 예를 들어 Microflow 내부의 로직을 보거나, 매개변수를 변경하거나, 데이터 모델을 편집할 수 없습니다. 구현 세부 사항은 Solution의 시스템 모듈처럼 작동합니다.

그러나 문서는 Solution 모듈과 앱 모듈 간에 상호 참조할 수 있습니다. 이를 통해 부분적 편집 가능성, 추상적 개념 및 확장 가능한 프론트엔드를 사용하는 패턴이 가능합니다. 유지 관리를 쉽게 하려면 Solution 모듈로 표시된 각 코어 모듈에 대해 하나의 조정 가능한 모듈을 유지하는 것이 좋은 관행입니다. 이 모듈들은 밀접하게 결합되어 하나의 모듈로 간주되어야 하므로, 코어 모듈이 조정 가능한 모듈에 대한 종속성을 가지고 그 반대도 마찬가지입니다.

Studio Pro는 개발과 구현 모두에서 일관성을 적용하며, 구현을 보호하면서 사용 항목 찾기를 가능하게 합니다.

{{% alert color="info" %}}

* 이는 순환 종속성 규칙의 예외이며, Solution 모듈은 하나의 모듈로 함께 작동하면서 오픈 모듈 대응물을 가질 수 있습니다.  
* 적응 가능한 Solution으로 배포하고 Solution 모듈을 만들 수 있도록 **앱 설정**의 [Solution](/refguide/app-settings/#solution) 탭을 구성하십시오.

{{% /alert %}}

### 인터페이스 설계

Solution의 인터페이스를 설계할 때 Mendix는 다음을 권장합니다:

* 적응 가능한 Solution 아키텍처를 [세 가지 주요 기능 부분](/appstore/creating-content/sol-adapt/#three-parts)으로 분할하십시오.
* 공유 코어의 어떤 부분이 다른 부분에서 재사용 가능한지 생각하십시오.
    * 어떤 공유 로직이 재사용 가능해야 하는지 정의하고, API 형태의 공유 로직에 대한 진입점을 만드십시오.
    * 기능의 어떤 부분에서 어떤 Entity(데이터/상태)가 필요한지 정의하십시오.
* 공통 코어와 확장 모듈 간의 API를 설계하고, 현재 아키텍처의 다른 부분에서 명시적으로 필요한 부분만 공개하는 것을 고려하십시오.
* 현재 고객 요청과 그 가치에 초점을 맞추면서 고객별 모듈에 대한 API를 설계하십시오.
* 아키텍처를 발전시켜 Solution을 더 적응 가능하게 만들기 위해 고객과 반복하십시오.
    * Solution이 더 성공적이 되면 아키텍처가 더 복잡해지므로 필요할 때 재아키텍처를 수행하십시오.
* 최소 실행 가능 제품(MVP) 만들기에 집중하십시오.

### 지적 재산(IP) 보호 적용

IP 보호를 사용하여 고객이 애플리케이션 모델의 일부와 공통 코어를 변경할 수 없게 만들 수 있습니다. 실용적인 지침은 [지적 재산 보호 적용](/appstore/creating-content/sol-ip-protection/)을 참조하십시오.

### Mendix Platform 버전

[Solution을 업그레이드](/appstore/creating-content/sol-upgrade/)하려면 애플리케이션의 Mendix Platform 버전이 Solution 업그레이드 패키지에 지정된 버전과 일치해야 합니다. 따라서 Mendix는 다음을 권장합니다:

* 최신 [MTS](/releasenotes/studio-pro/lts-mts/#mts) 패치 버전으로 Solution을 게시하십시오. 이를 통해 고객 구현을 독립적으로 최신 패치 버전으로 업그레이드할 수 있습니다. 또한 Mendix Platform 버그 또는 보안 업데이트의 경우 릴리스 주기를 분리하는 데 도움이 됩니다.
* Solution이 업그레이드되지 않은 상태에서 Solution 구현을 더 높은 마이너 또는 메이저 버전으로 단독 업그레이드하지 마십시오(예: 9.18에서 9.20 또는 9에서 10으로).

다음은 Solution을 더 높은 마이너 또는 메이저 버전으로 업그레이드하는 프로세스입니다:

1. Solution을 새 Mendix 버전으로 업그레이드합니다.
2. 필요한 경우 애플리케이션 모델을 새 Mendix 버전과 호환되도록 하는 데 필요한 변경 사항을 적용합니다.
3. 새 Solution 패키지를 만듭니다.
4. Solution 구현을 대상 Mendix 버전으로 업그레이드하고 커밋합니다. 오류가 발생하면 오류와 함께 커밋합니다.
5. Solution을 업그레이드합니다(Solution 템플릿에서 가져온 애플리케이션 모델 부분의 모든 오류가 사라져야 합니다).
6. 플랫폼의 새 버전과 호환되도록 조정된 부분 모델에 필요한 변경 사항을 적용합니다.

자세한 내용은 Mendix Academy의 [플랫폼 업그레이드 및 Solution 버전 관리 방법](https://academy.mendix.com/link/modules/507/lectures/4038/3.3-How-to-Deal-with-Platform-Upgrades-and-Solution-Versioning)을 참조하십시오.

### Marketplace 모듈

Solution에 포함된 데이터베이스에 데이터가 있는 Marketplace 모듈은 항상 Solution 릴리스 업그레이드를 통해 업그레이드해야 합니다. 고객 구현에서 업그레이드해서는 안 되며, 이는 데이터 손실로 이어질 수 있습니다.

예를 들어 Solution에 [Excel Importer](/appstore/modules/excel-importer/)와 같은 모듈이 포함되어 있습니다. 고객이 Solution 벤더의 업그레이드를 기다리지 않고 새 버전으로 모듈을 업데이트하기로 결정하면, 나중에 병합 충돌이 발생합니다. Solution 벤더의 업그레이드를 적용하면 Team Server가 모듈의 양쪽 변경 사항을 올바르게 식별할 수 없습니다. 이 병합 충돌이 잘못 처리되면 데이터가 손실됩니다.

### 클린 코딩

Mendix는 [Mendix 개발 모범 사례](/refguide/dev-best-practices/)를 준수하고 명확한 코딩 규칙을 갖출 것을 권장합니다. 

{{% alert color="warning" %}}
이는 모델 수준에서 조정될 Solution에 더욱 중요합니다.
{{% /alert %}}

편집 가능하게 될 모델의 수정 가능한 부분이 논리적으로 구조화되고 잘 명명되어 있으며, 문서가 명확한 단일 목적을 가지고 있는지 확인해야 합니다. 이를 통해 구현이 더 쉬워지고, 새 버전을 릴리스하고 기존 Solution 구현에 대한 변경 사항의 영향을 예측하기가 더 쉬워집니다.

### 보안

Solution의 보안에 대한 자세한 내용은 다음 리소스를 참조하십시오:

* [앱 보안 모범 사례 구현](/howto/security/best-practices-security/)
* [익명 사용자 보안 설정](/howto/security/set-up-anonymous-user-security/)
* Mendix Academy의 [상용 Solution 보안](https://academy.mendix.com/link/paths/131/Secure-your-Commercial-Solution)
* Mendix Academy의 [애드온 역할 사용 시기](https://academy.mendix.com/link/modules/519/lectures/4099/3.1-When-to-use-add-on-roles)
