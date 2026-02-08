---
title: "Dynamic Case Management"
url: /appstore/partner-solutions/dcm/
linktitle: "DCM"
description: "복잡한 프로세스를 위한 Mendix Dynamic Case Management를 소개합니다."
beta: true
---
{{% alert color="warning" %}} 이 기능은 Private Beta 단계입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오. {{% /alert %}}

## 소개

[Mendix Dynamic Case Management](https://marketplace.mendix.com/link/component/242816) (Mendix DCM)는 Mendix와 CaseFabric이 공동으로 개발한 애드온 모듈입니다.
Mendix DCM은 CaseFabric 케이스 엔진을 사용하여 Mendix 앱 내에서 직접 복잡한 프로세스 관리, 오케스트레이션 및 동적 케이스 관리를 수행할 수 있게 합니다.    

Dynamic Case Management(DCM)는 기술을 활용하여 복잡한 케이스를 처리하는 프로세스입니다. 이를 통해 조직은 다음을 수행할 수 있습니다:

* 동적 비즈니스 프로세스를 관리하여 인사이트에 따라 행동합니다.
* 레거시 시스템으로 인한 비효율성을 제거합니다.
* 복잡한 워크플로우를 모델링하고 자동화합니다.
* 운영을 간소화하고 목표 달성을 개선합니다.

자세한 내용은 CaseFabric 문서의 [DCM for Mendix](https://www.casefabric.com/#mendix)를 참조하십시오.

## Mendix DCM 모듈

CaseFabric의 DCM 솔루션은 [CMMN (Case Management Model and Notation)](https://www.omg.org/spec/CMMN/1.1) 표준을 사용하여 Studio Pro에 강력한 케이스 모델링 기능을 제공합니다. 이를 통해 Domain Model, Entity, 페이지, Microflow와 같은 Mendix 요소와 원활하게 작동하는 유연한 이벤트 기반 케이스 모델을 구축할 수 있어 앱을 더 스마트하고 반응성 있게 만들 수 있습니다.
Mendix DCM 모듈은 Studio Pro에 케이스 모델 전용 모델러를 제공합니다. 이를 통해 다음을 수행할 수 있습니다:

* Domain Model을 케이스 파일 모델에 매핑합니다.
* 기존 Entity를 케이스 모델 내에서 직접 사용합니다.
* Entity 변경 사항을 기반으로 케이스 모델을 트리거합니다. 현재 이를 위해서는 명시적인 모델링이 필요합니다.
* 개발 중 핫 배포를 수행합니다. 즉, 개발 중에 실행 중인 앱에 모델을 직접 배포합니다.
CaseFabric의 *Case Management Guide*에서 [DCM for Mendix](https://guide.casefabric.com/docs/mendix/overview.html)를 참조하여 DCM 기반 앱 구축을 시작하는 방법에 대한 자세한 내용을 확인하십시오.

### 아키텍처

Mendix DCM 모듈은 Mendix 런타임에 완전히 내장되어 있습니다. 자세한 내용은 CaseFabric 문서의 [Architecture](https://guide.casefabric.com/docs/mendix/architecture.html)
페이지를 참조하십시오.

## 역할 및 보안

Mendix DCM 모듈은 Mendix 내장 사용자 및 역할 관리 시스템을 활용합니다. 사용자와 역할은 케이스 팀으로 결합되며, 이는 특정 케이스 인스턴스에 매핑됩니다.
서로 다른 사용자와 역할을 할당하여 동일한 케이스 모델을 여러 팀에서 재사용할 수 있습니다.
Mendix DCM 모듈은 Mendix 애플리케이션과 런타임에 완전히 내장되어 있습니다. 기본적으로 외부 엔드포인트를 노출하지 않습니다.

## 라이선스 및 가용성

* Mendix DCM 라이선스를 획득하거나 갱신하려면 Mendix 계정 관리자에게 문의하십시오.
* Mendix DCM은 Studio Pro 10.24 이상 기반 프로젝트에서 사용할 수 있습니다.
* Mendix DCM은 Mendix 가격표에 포함되어 있습니다. 자세한 정보나 활성화를 원하시면 Mendix Customer Success Manager 또는 영업 담당자에게 문의하십시오.

## CaseFabric DCM 릴리스 노트

CaseFabric의 DCM은 지속적으로 개선 및 확장되고 있습니다. 최근 출시된 주요 기능에 대한 개요는 [DCM 문서](https://guide.casefabric.com/docs/mendix/releases.html)를 참조하십시오.
