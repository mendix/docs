---
title: "적응 가능한 Solution"
url: /appstore/creating-content/sol-adapt/
weight: 20
no_list: false
description_list: true
description: "적응 가능한 Solution에 대한 소개 정보를 제공합니다."
---

## 소개

이 섹션에서는 Mendix Platform에서 Marketplace에서 판매할 준비가 된 적응 가능한 Solution을 개발하기 위한 정보와 모범 사례를 제공합니다.

[Mendix 개발 모범 사례](/refguide/dev-best-practices/)가 적용되지만, Mendix Solution을 [아키텍처 설계](/appstore/creating-content/sol-architecting/) 및 개발할 때 추가적인 고려 사항이 있습니다.

## 적응 가능한 Solution이란?

적응 가능한 Solution에서는 최종 솔루션의 최대 20%를 커스터마이제이션, 확장, 통합 또는 새로운 고객별 모듈을 통해 조정할 수 있습니다. 나머지 80%는 변경 없이 모든 고객 간에 공유되는 핵심 솔루션입니다.    
런타임에서만 구성이 가능한 규범적인 SaaS(Software-as-a-Service) 솔루션에 국한되는 대신, 적응 가능한 Solution은 특정 구현의 요구에 맞추기 위해 모델 수준의 변경을 통한 설계 시점 조정을 허용합니다. 여러 고객에게 판매할 수 있으며, 새 버전으로 업그레이드할 수 있습니다.

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/sol-architecting/adaptable-solution-architecture.png" alt="Adaptable Solution architecture" class="no-border" >}}

## 사용 사례

적응 가능한 Solution은 [Mendix Commercial Solution Partner Program](/appstore/creating-content/comm-sol-partner-program/)의 경우처럼 ISV에게도, 기업 환경에서도 모두 효과적입니다.

### ISV 상용 Solution

ISV는 개별 고객에 맞게 조정할 수 있는 Solution을 만들고 판매할 수 있습니다. 이를 통해 UI/UX, 프로세스, 데이터 및 통합의 특정 요구 사항에 맞게 애플리케이션을 조정하여 고객에게 더욱 관련성 높은 서비스를 제공할 수 있습니다. 제공된 Solution은 업그레이드가 가능하므로 ISV가 혁신과 개선 사항을 제공할 수 있습니다.

### 기업 환경

대기업에서는 동일한 요구를 가진 다양한 부서나 지역이 있는 것이 일반적입니다. 적응 가능한 Solution은 핵심 솔루션의 중앙 집중식 개발을 허용하면서, 다른 팀들이 직접 조정할 수 있도록 합니다.  

업그레이드를 통해 중앙 팀은 다른 팀에게 공통 기능을 배포할 수 있습니다. IP 보호되고 변경 불가능한 코어는 구현 팀이 필요한 부분만 조정하도록 하여 업그레이드의 영향과 조정 노력을 최소화합니다.

## Solution 라이프사이클 {#lifecycle}

Solution의 가치 체인과 라이프사이클은 세 가지 중요한 단계로 구성됩니다:

| 단계 | 주체 | 목적 |
| --- | --- | --- |
| Solution 코어 구축 | ISV | 조정을 위해 설계된 Solution을 만듭니다. 새 버전이 주기적으로 릴리스됩니다. |
| 고객을 위한 구현 | ISV, 고객 또는 구현 파트너 | 개별 고객의 요구에 맞게 Solution을 조정하고 업그레이드를 적용합니다. UI, 데이터, 로직 또는 고객 환경의 통합 변경을 포함합니다. |
| 프로덕션 사용 | 고객 | 고객에 의한 애플리케이션의 프로덕션 사용입니다. 기능 관리자가 일상 업무를 수행할 수 있습니다. |

Solution 라이프사이클은 다음 다이어그램으로 시각화할 수 있습니다:

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-lifecycle.png" alt="Adaptable Solution Lifecycle" class="no-border" >}}

### 별도의 모델 인스턴스 및 클라우드 노드로서의 구현

고객 구현은 업그레이드 가능한 별도의 모델 인스턴스(포크)입니다. 원본 Solution 모델과 일반 기능을 공유하며, 별도의 클라우드 리소스에 배포됩니다.

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-deployment.png" alt="Adaptable Solution Deployment"  width="50%" class="no-border" >}}

별도의 모델 인스턴스를 통해 구현 팀은 [IP 보호되지 않은](#ip-protection) 모든 기능을 완전히 커스터마이즈할 수 있습니다. 모든 고객 구현에 모델 변경이 필요한 것은 아닙니다. 이러한 경우 원본 모델을 그대로 배포할 수 있습니다.

{{% alert color="info" %}}
Solution 개발자의 재량에 따라 누가 Solution을 구현할 수 있는지, 누가 모델에 액세스할 수 있는지, 그리고 제공 모델이 SaaS(Software-as-a-Service)인지 업데이트 구독이 포함된 Solution 템플릿인지를 결정합니다.
{{% /alert %}}

자세한 내용은 *적응 가능한 Solution 아키텍처 설계*의 [고객별 구현](/appstore/creating-content/sol-architecting/#per-customer) 섹션을 참조하십시오.

## 세 부분: 코어, 조정, 확장 {#three-parts}

조정을 위한 Solution을 구상하려면 고객의 요구에 대한 이해가 필요합니다. 고객 전체에 걸쳐 공통적인 기능 요구 사항과 개별 고객에게 특정한 요구 사항을 알아야 합니다. 이를 통해 애플리케이션 모델의 모듈을 세 가지 주요 기능 부분으로 그룹화할 수 있습니다:

* 공유되고 변경 불가능한 공통 코어
* 고객의 요구에 맞게 조정할 수 있는 공통 모듈
* 고객별 확장 모듈

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-three-parts.png" alt="Three parts of the adaptable solution" class="no-border" >}}

이러한 다른 부분들은 고객 구현에서 함께 작동합니다. 이러한 구분을 유지하는 것이 중요한데, 고유한 트레이드오프가 있기 때문입니다: 공통 코어의 일부이고 IP 보호된 것은 조정하거나 수정할 수 없으며, 조정 가능한 것은 보호할 수 없습니다. 이 경계는 세분화된 수준에서 만들 수 있습니다. 확장 및 조정 가능한 코어에 수행된 모든 조정은 공통 코어의 기능을 활용할 수 있습니다. 자세한 내용은 *적응 가능한 Solution 아키텍처 설계*의 [애플리케이션 설계](/appstore/creating-content/sol-architecting/#app-design) 섹션을 참조하십시오.

다음 표는 세 가지 주요 기능 부분을 더 자세히 설명합니다:

| 부분 | IP 보호 여부 | 책임 | 업그레이드 가능 여부 | 목적 |
| --- | --- | --- | --- | --- |
| 변경 불가능한 공통 코어 | 예 | 빌드 팀 | 예, 드롭인 | 애플리케이션의 핵심(예: 데이터 모델, Workflow 액션, 표준 통합) |
| 조정 가능한 코어 | 아니오 | 공유 문서의 경우 빌드 팀, 고객 문서의 경우 구현 팀 | 예, 세분화된 병합 | 모델에 대한 고객별 변경(예: Workflow, 데이터 모델 확장, 커스터마이즈 가능한 페이지 및 스니펫, 테마, 확장 가능한 Microflow, 번역 및 용어) |
| 고객별 확장 | 아니오 | 구현 팀 | 필요 없음 | 고객을 위한 추가 기능(예: 기존 시스템과의 통합, 추가 시각화) |

## IP 보호 {#ip-protection}

[Solution 코어 구축](#lifecycle) 중에 생성된 지적 재산권(IP)이 구현 팀이나 고객에게 공개되지 않도록 [IP 보호를 적용](/appstore/creating-content/sol-ip-protection/)할 수 있습니다. 이는 또한 해당 컴포넌트를 변경 불가능하게 만들며, 병합 충돌이 발생하지 않으므로 업그레이드를 더 쉽게 만듭니다.

## 이 섹션의 문서
