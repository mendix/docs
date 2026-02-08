---
title: "릴리스 상태"
url: /releasenotes/release-status/
weight: 55
aliases:
    - /releasenotes/beta-features/
#layout: wide
---

## 소개

일반적으로 기능 또는 제품의 릴리스 상태는 다음 단계를 거칩니다:

1. Private beta.
2. Experimental.
3. Public beta.
4. Limited availability (LA).
5. General availability (GA).
6. Deprecated

이 문서에서는 각 단계의 목적과 고객이 Mendix에 기대할 수 있는 사항을 설명합니다.

일부 단계는 선택 사항입니다. 릴리스 상태는 해당 기능 또는 제품의 지원 수준에 영향을 미칩니다. 구체적으로, Limited Availability 또는 General Availability 기능이나 제품은 프로덕션 사용에 적합하며 서비스 수준 계약(SLA)의 적용을 받습니다. 반면 Private Beta, Public Beta, 또는 Experimental 기능은 이에 해당하지 않습니다.

릴리스 상태 외에도, Mendix Marketplace에서 제공되는 콘텐츠에는 지원 상태(예: Platform Supported 또는 Deprecated)가 있습니다. 자세한 내용은 *Marketplace Support Content*의 [Content Support Categories](/appstore/marketplace-content-support/#category) 섹션을 참조하십시오.

## Private Beta, Experimental, Public Beta 릴리스

Mendix는 구현 및 사용에 대한 피드백을 수집하기 위해 Private beta, Experimental 또는 Public beta로 표시된 기능이나 제품을 릴리스합니다. 피드백은 최상의 제품을 제공하는 데 도움이 되므로 모든 피드백을 소중히 여기고 있습니다. 이를 통해 GA 릴리스를 위한 기능이나 제품을 준비하는 데에도 도움이 됩니다.

예를 들어, Mendix Studio Pro의 새로운 메이저 버전이 있습니다. Mendix는 기능이 완전하지 않을 수 있고 개발자가 아직 작업 중인 기능적 공백을 발견할 수 있으므로 이 제품을 베타로 릴리스합니다.

### Beta 기능의 가용성

Private beta 기능이나 제품은 선택된 고객만 사용할 수 있으며, Experimental 및 Public beta 기능이나 제품은 모든 고객이 사용할 수 있습니다.

### 일반적인 사용 사례

Mendix는 다음 두 가지 경우에 Private beta 또는 Public beta 기능이나 제품을 릴리스합니다:

* 새로운 제품 또는 제품 버전이 도입되어 향후 GA가 되는 것을 목표로 얼리 어답터가 사용해 볼 수 있도록 제공하는 경우
* 비베타 제품 내에서 개별 기능이 도입되며, 기본적으로 프로덕션 준비가 되었지만 변경될 수 있거나 더 넓은 사용자의 검토가 필요한 경우 (이러한 기능은 기본적으로 비활성화되어 있음)

Mendix는 기능이나 제품이 이미 사용자에게 가치를 제공할 수 있지만 안정성이나 품질을 아직 보장할 수 없으며 GA로 릴리스되지 않을 수도 있는 경우 Experimental 기능이나 제품을 릴리스합니다.

### Beta 릴리스 테스트

Beta 기능이나 제품을 테스트하려면 다음 사항을 고려하십시오:

* Public beta 또는 Experimental로 표시된 기능이나 제품은 모든 고객이 사용할 수 있습니다. 이러한 기능에 대한 피드백은 고객 성공 관리자(CSM) 및 커뮤니티 포럼을 통해 보내주시면 감사하겠습니다.
* Private beta로 표시된 기능이나 제품의 경우, 제품 팀에서 일반적으로 기능이나 제품의 테스트 초대를 연락드립니다. 제품 팀이 피드백의 연락 창구가 되며, 필요한 경우 Mendix Expert Services의 참여를 보장하여 Private beta 기능이나 제품을 성공적으로 활용하는 데 필요한 지식을 제공합니다.

### Beta 및 Experimental 릴리스의 제한 사항

Beta/Experimental 기능 및 제품에 대한 다음 제한 사항을 참고하십시오:

* 이러한 기능 및 제품은 프로덕션 애플리케이션에 사용해서는 안 됩니다
    * Mendix는 beta/experimental 기능 및 제품에 대한 프로덕션 지원을 제공하지 않습니다
    * Beta/experimental 기능 및 제품에는 데이터 손상을 초래할 수 있는 버그가 포함될 수 있습니다
* 이러한 기능 및 제품은 SLA의 적용을 받지 않습니다
    * Mendix는 beta/experimental 기능 및 제품의 문제를 설명하는 티켓을 포함한 피드백을 소중히 여기지만, 이러한 티켓은 SLA에 따라 처리되지 않습니다
    * Mendix는 beta/experimental 기능 및 제품에서 발생하는 문제에 대한 적시 수정을 보장할 수 없습니다
* 이러한 기능 및 제품은 호환성을 깨는 변경 사항을 도입할 수 있습니다
    * 하위 호환성을 목표로 하지만, Mendix는 beta/experimental 기능 및 제품의 월별 릴리스 간 하위 호환성을 보장할 수 없습니다
* 범위와 기능은 피드백에 따라 향후 릴리스에서 변경될 수 있습니다
* 범위가 불완전할 수 있습니다
    * 향후 릴리스에서 기능이나 제품을 완성하기 위한 더 많은 기능이 포함될 수 있습니다

또한, Experimental로 표시된 기능이나 제품은 다음과 같습니다:

* 제한된 사용자 그룹에게만 제공될 수 있습니다
* 기존 및 향후 릴리스에서 언제든지 제거될 수 있습니다

### 문서

Beta/experimental 기능 및 제품의 가용성은 해당 릴리스의 릴리스 노트에 문서화됩니다. 기타 문서는 Mendix에서 제공할 수 있습니다. 이러한 기능 및 제품을 활성화하고 사용하는 방법에 대한 자세한 내용은 릴리스 노트와 문서를 참조하십시오.

문서에서 beta 기능에 대한 페이지는 왼쪽 사이드바에 beta 배지(<text class="badge badge-pill badge-beta" style="margin-left:0px">BETA</text>)로 표시됩니다.

## Limited Availability

Mendix는 기능이나 제품을 통제된 방식으로 시장에 도입하기 위해 Limited Availability로 표시된 기능이나 제품을 릴리스합니다. 이 선택적 단계에서는 특정 그룹이나 지역이 프로덕션 사용을 위해 기능이나 제품에 먼저 액세스할 수 있으며, 다른 그룹은 나중에 사용할 수 있습니다. 이는 규제 또는 운영상의 이유 때문일 수 있습니다. Limited Availability 기능이나 제품을 프로덕션에 도입하려면 CSM에 문의하여 가능한 방안을 확인하십시오.

## General Availability

General Availability로 표시된 기능이나 제품은 모든 고객이 프로덕션에서 사용할 수 있습니다.
