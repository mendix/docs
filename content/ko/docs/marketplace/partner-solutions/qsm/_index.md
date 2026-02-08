---
title: "Quality and Security Management"
url: /appstore/partner-solutions/qsm/
linktitle: "QSM"
description: "Mendix와 Software Improvement Group(SIG)이 개발한 클라우드 서비스인 Mendix Quality and Security Management와 구현된 모범 사례 점검 항목을 소개합니다."
aliases:
    - /addons/aqm-addon/
    - /addons/aqm-addon/index.html
---

{{% alert color="info" %}}
이 제품은 **Mendix Application Quality Monitor (AQM)**에서 **Mendix Quality and Security Management (QSM)**으로 이름이 변경되었습니다.
{{% /alert %}}

## 소개

[Mendix Quality and Security Management (QSM)](https://www.softwareimprovementgroup.com/solutions/sigrid-for-mendix-quality-and-security-management/)는 Mendix와 Software Improvement Group(SIG)이 개발한 클라우드 서비스입니다. Mendix QSM은 ISO 25010 유지보수성 표준에 따라 Mendix 애플리케이션 모델의 정적 분석을 수행합니다. 대시보드는 수천 개의 프로젝트 벤치마크를 기반으로 한 품질 등급을 포함하여 애플리케이션 모델이 구축될 때 그 품질에 대한 즉각적인 인사이트를 제공합니다.

매일 사전에 품질을 모니터링함으로써 고객은 유지보수성을 개선하고 라이프사이클 비용을 줄일 수 있습니다.

## 유지보수성

Mendix QSM 유지보수성 모델은 SIG/TÜViT 평가 기준을 기반으로 합니다. 이 기준은 소프트웨어 제품 소스 코드의 기술적 품질에 대한 표준화된 평가 및 인증을 제공합니다. 애플리케이션의 높은 유지보수성을 보장함으로써 유지보수 부하를 줄이고 비용을 절감하며 혁신에 집중할 수 있는 역량을 확보할 수 있습니다. QSM은 모든 애플리케이션의 유지보수성을 구조적이고 반복적으로 개선하기 위한 실행 가능한 인사이트를 제공하며, AI를 활용하여 개별 발견 사항에 대한 설명과 처리 방법을 결정하는 방법을 제공합니다. 

소프트웨어 품질의 일반적인 개념은 다양한 품질 측면을 포함하며, 그 분류 체계는 소프트웨어 제품 품질에 관한 [ISO/IEC 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) 국제 표준에서 확인할 수 있습니다. SIG/TÜViT **평가 기준**의 범위는 내부 품질 특성인 유지보수성과 그 하위 특성인 **분석성, 수정성, 테스트 가능성, 모듈성 및 재사용성**으로 제한됩니다. 평가는 소프트웨어 제품의 소스 코드에 관한 것이며, 테스트 또는 운영 환경에서의 제품 동작에 관한 것이 아닙니다. 

위에서 언급한 바와 같이, QSM은 Mendix 애플리케이션이 유지보수 가능한 소프트웨어 작성을 위한 ISO 25010 표준을 준수하는지 확인합니다. 이에 사용되는 모델은 [Mendix Development Best Practices](/refguide/dev-best-practices/)와 부분적으로 겹치며, 특히 Microflow 개발 모범 사례와 관련됩니다. 사용되는 정확한 모델에 대한 자세한 내용은 [QSM Model Documentation](https://www.softwareimprovementgroup.com/wp-content/uploads/SIG-TUViT-Evaluation-Criteria-Trusted-Product-Maintainability.pdf)을 참조하십시오. QSM 플랫폼 및 모든 기능에 대한 보다 광범위한 문서는 [QSM Documentation](https://docs.sigrid-says.com/)을 참조하십시오. Sigrid는 기술에 구애받지 않는 QSM의 명칭이며, QSM은 Mendix에 특화된 명칭입니다.

## 아키텍처

유지보수성이 특정 플로우, 문서 및 모듈의 품질에 관한 것이라면, 아키텍처는 애플리케이션과 그 내부 구조에 대한 보다 전체적인 관점을 제공합니다. 컴포넌트 결합도 및 응집도와 같이 달리 무형인 개념의 품질을 추적하기 위한 측정 가능하고 객관적인 지표를 제공합니다.

또한, 아키텍처 모델은 완전히 자동으로 필요한 세부 수준의 아키텍처 다이어그램을 생성하여 다양한 모듈 간의 대규모 관계를 살펴보고, 개별 플로우에 접근할 수 있는 다양한 방법을 분석할 수 있습니다. 이는 애플리케이션의 아키텍처를 분석하거나 재설계할 때 매우 유용하며, 보안 공격 면이나 오류 분석과 같은 번거로운 작업도 지원할 수 있습니다. 

## 보안

애플리케이션의 보안은 가장 약한 고리만큼만 강합니다. 불행히도 이는 단 하나의 실수로도 데이터 유출이나 랜섬웨어 공격이 발생할 수 있다는 것을 의미합니다. QSM의 보안 모델은 Mendix와 SIG 간의 긴밀한 협력을 통해 가능한 한 많은 잠재적 문제를 포착하도록 맞춤 제작되었습니다. 여기서의 초점은 Entity 접근 잘못된 구성과 같이 실제 보안 사고를 야기하는 문제를 포착하는 것입니다. 

QSM은 개발 초기 단계에서 이러한 발견 사항을 기본으로 제공할 수 있으므로, 개발자가 보안 팀이나 침투 테스트를 기다리는 대신 개발 중에 문제를 포착할 수 있습니다. 이는 시장 출시 시간을 단축하고 배포의 예측 가능성을 향상시킵니다. 

## 오픈소스 상태

자체 코드의 보안 외에도 시스템 내 서드파티 코드의 보안도 고려하는 것이 필수적입니다. 오픈소스 상태를 통해 시스템에 있는 모든 오픈소스 소프트웨어의 포괄적인 목록을 자동으로 생성할 수 있습니다. Mendix 모듈이나 Widget은 물론 Java 또는 JavaScript 라이브러리도 이 모델에 의해 포착 및 분석됩니다. QSM은 해당 라이브러리에 알려진 취약점이 있거나 새로운 업데이트가 있을 때마다 알려줍니다. 이를 통해 QSM은 사전에 종속성을 최신 상태로 유지하고 보안 사고가 발생하기 전에 방지할 수 있도록 지원합니다. 

## 추가 정보

{{% alert color="info" %}}
구매한 라이선스를 획득하거나 갱신하려면 [이 양식](https://addon.mendix.com/index.html)으로 이동하십시오.
{{% /alert %}}

* Mendix QSM은 Mendix 6.0 이상 기반 프로젝트에서 사용할 수 있습니다.
* Mendix QSM은 Mendix Support를 통해 기존 고객을 위한 새로운 QSM 앱의 셀프서비스 온보딩을 지원합니다.
* Mendix QSM은 Mendix 가격표에 포함되어 있습니다. 자세한 정보나 활성화를 원하시면 Mendix Customer Success Manager 또는 영업 담당자에게 문의하십시오.
* 자세한 문서는 보완적인 Sigrid Academy를 통해 제공됩니다.
* Mendix QSM 대시보드 리포트는 Project Team Server의 최신 버전을 기반으로 매일 밤 생성됩니다.
    * 기본적으로 Mendix QSM 리포트는 앱 Team Server의 메인 라인을 기반으로 합니다.
    * Mendix CI 파이프라인에서 QSM을 실행할 수 있는 Mendix CI 지원을 구축 중입니다(자세한 내용은 [SigridCI](https://github.com/Software-Improvement-Group/sigridci)를 참조하십시오).

## 릴리스 노트

{{% alert color="info" %}}
QSM은 지속적으로 개선 및 확장되고 있습니다. 최근 출시된 주요 기능에 대한 개요는 [QSM 문서](https://docs.sigrid-says.com/reference/release-notes.html)를 참조하십시오. 
{{% /alert %}}

### Quality Monitor 도구 업데이트

이제 스냅샷을 서로 비교할 수 있습니다. 이 기능은 메트릭 테이블과 유사합니다.
스냅샷 비교 기능은 두 스냅샷 간의 차이점을 보여줍니다.

종속성 그래프에 몇 가지 유용한 새 기능이 추가되어 종속성에 대한 더 많은 정보를 확인할 수 있습니다:

* 엣지를 클릭하여 두 컴포넌트 간의 종속성 세부 정보를 확인할 수 있습니다.
* 이전 스냅샷의 종속성 그래프도 확인할 수 있습니다.
* 종속성 유형별로 그래프를 필터링하여 관련 정보만 표시할 수 있습니다.
* 종속성을 좀 더 분석하고 싶다면, DOT 형식으로 정보를 다운로드할 수 있습니다. Graphviz와 같은 도구에서 사용할 수 있습니다.
* 대규모 그래프가 다시 올바르게 렌더링됩니다.

### 분석 도구 업데이트 – 의사 코드 생성기

분석 도구가 크게 개선되어 Microflow와 페이지에서 흔히 볼 수 있는 거짓 양성 중복 발생을 완화합니다:

* CreateObject 액션에서 참조를 속성과 유사하게 렌더링합니다.
* DownloadFile 액션의 변수 이름과 show-in-browser 값을 렌더링합니다.
* WebserviceCall 액션의 이름과 호출된 오퍼레이션을 렌더링합니다.
* ChangeObject 액션에 의해 수정되는 속성의 새 값을 렌더링합니다.
* GenerateDocument 액션의 템플릿 이름과 매개변수를 렌더링합니다.
* 페이지와 스니펫의 캔버스 크기를 렌더링하지 않습니다.
* AllowedRoles가 이제 페이지의 의사 코드에서 한 줄에 모두 렌더링됩니다.

### System Analysis Toolkit

SIG/TÜVIT 유지보수성 모델의 최신 버전 8.0(2016년 2월 보정 버전)으로 모델을 업그레이드했습니다.
