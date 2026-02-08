---
title: "Marketplace"
url: /appstore/
description: "플랫폼에서 지원하는 최신 버전의 컴포넌트를 구성하고 사용하는 방법에 대한 문서를 제공합니다."
weight: 40
no_list: false 
description_list: true 
cascade:
    - content_type: "Marketplace"
    - mendix_version: 10
---

## 소개

Mendix Studio Pro에는 데이터 그리드 및 스니펫과 같은 다양한 기본 위젯이 포함되어 있습니다. 그러나 [Forgot Password module](https://marketplace.mendix.com/link/component/1296/), 간단한 차트, [Excel importer](https://marketplace.mendix.com/link/component/1296/) 등의 기능, 위젯, 모듈을 사용하여 애플리케이션을 확장할 수 있으며, 이를 통해 개발 속도를 더욱 높일 수 있습니다. [Mendix Marketplace](https://marketplace.mendix.com/)의 콘텐츠를 사용하면 됩니다. Mendix Marketplace는 앱을 빠르게 개발할 수 있는 강력한 플랫폼으로, Mendix뿐만 아니라 파트너 및 커뮤니티가 만든 유용하고 재사용 가능한 위젯과 모듈을 다수 포함하고 있습니다. 바로 사용할 수 있는 완전한 샘플 앱은 물론 커넥터, 모듈, 위젯 등 앱을 더 빠르게 구축할 수 있는 다양한 컴포넌트가 포함되어 있습니다. Mendix Marketplace에서 모든 콘텐츠를 탐색하고, 필요한 것을 가져오고, 직접 만든 콘텐츠를 공유할 수 있습니다.

이 문서에서는 다음 내용을 제공합니다:

* [플랫폼에서 지원하는](/appstore/marketplace-content-support/#category) Marketplace 컴포넌트의 최신 버전 구성 및 사용에 대한 세부 정보
* [Marketplace 콘텐츠 만들기](/appstore/creating-content/)를 통한 공유 및 판매 가이드라인

Mendix Studio Pro에는 데이터 그리드 및 스니펫과 같은 다양한 기본 위젯이 포함되어 있습니다. 그러나 [Forgot Password module](https://marketplace.mendix.com/link/component/1296/), 간단한 차트, [Excel importer](https://marketplace.mendix.com/link/component/1296/) 등의 기능, 위젯, 모듈을 사용하여 애플리케이션을 확장할 수 있습니다. 

사용에 필요한 Studio Pro 버전 및 컴포넌트 게시 시기에 대한 자세한 내용은 Mendix Marketplace의 해당 컴포넌트 페이지를 참조하십시오.  

변경 사항을 확인하려면 [Marketplace 릴리스 노트](/releasenotes/marketplace/)를 참조하십시오.

## Marketplace 컴포넌트 유형 {#components-type}

Marketplace에서는 다음과 같은 콘텐츠 유형을 제공합니다: 

| 유형                              | 설명                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| [Module](/appstore/modules/)      | 이동 가능한 보안 모델과 함께 데이터 모델, 로직, UI를 포함할 수 있는 소프트웨어 기능입니다. |
| [Widget](/appstore/widgets/)      | 컨테이너, 드롭다운 메뉴, 버튼과 같은 단일 사용자 인터페이스 요소입니다. Widget을 선택하고 구성한 후 앱의 페이지와 스니펫에 추가할 수 있습니다. |
| [Service](/appstore/services/)                       | 다양한 사용 사례에 재사용할 수 있는 소프트웨어 기능입니다. Service에는 일반적으로 앱 모듈에서 연결을 구성하여 상호 작용할 수 있는 API가 포함됩니다. |
| [Solution](/appstore/creating-content/sol-solutions-guide/) | 산업 및 도메인 문제를 해결하기 위한 즉시 사용 가능한 솔루션으로, 즉각적인 가치를 제공합니다. 이러한 솔루션은 일반적으로 최소 80% 이상 사용 준비가 되어 있으며, 고객별 사용 사례에 맞게 최소한의 조정만 필요합니다. |
| **Sample**                        | 제품이 수행할 수 있는 기능의 개요를 제공하는 프로젝트입니다. 이 프로젝트는 예제, 영업 활동, 데모 또는 템플릿으로 활용할 수 있습니다. |
| **Starter Template**              | 자체 앱 개발을 시작하기 위한 기반을 제공하는 특정 기능이 포함된 샘플 프로젝트입니다. 빈 템플릿에서 앱을 만들 필요 없이 이미 일부 기능이 구성된 템플릿을 사용할 수 있습니다. 또한, 템플릿에는 다른 앱에 특정 디자인을 적용하기 위해 공유하고 사용할 수 있는 개인화된 스타일이 포함될 수 있습니다. |
| **Industry Template**             | 산업별 프로세스 구현을 위한 액셀러레이터입니다. Industry Template은 가치 실현 속도와 시장 출시 시간을 단축하며, 해당 산업 내 일반적인 사용 사례를 위한 훌륭한 출발점입니다. Solution과 달리 Industry Template은 산업별 프로세스에 Mendix를 활용하는 영감을 제공하기 위한 Starter Template입니다. 일반적으로 프로세스의 약 20%를 다룹니다. |

## Marketplace와 Mendix Connect {#marketplace-mx-connect}

[Mendix Connect](https://www.mendix.com/data-hub/)는 조직 내 사용자가 데이터를 안전하게 검색, 이해, 연결 및 관리할 수 있도록 Mendix Platform에서 제공하는 기능 모음입니다. 다음 커넥터와 모듈은 Mendix Connect 에코시스템의 일부입니다:

* [Database](/appstore/modules/database-connector/) connector
* [Excel Importer](/appstore/modules/excel-importer/) module
* [Excel Exporter](/appstore/modules/excel-exporter/) module
* [Email](/appstore/modules/email-connector/) connector
* [MQTT](/appstore/modules/mqtt/) connector
* [Mendix Business Events](/appstore/services/business-events/) module

다음은 전략적 파트너 커넥터입니다:

* [AWS connectors](/appstore/aws-modules/)
* [SAP connectors](/partners/sap/)

플랫폼에서 지원하는 커넥터 및 모듈 외에도 Mendix Connect 기능에는 다음이 포함됩니다:

* Studio Pro [10.0](/releasenotes/studio-pro/10.0/)의 [통합 기능](/refguide/integration/#integration-mx-connect)
* 조직의 데이터를 등록, 관리 및 거버넌스하는 데 사용되는 [Catalog](/catalog/#catalog-mx-connect)

## 가이드 카테고리
