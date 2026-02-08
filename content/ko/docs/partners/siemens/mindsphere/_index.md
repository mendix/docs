---
title: "Insights Hub"
url: /partners/siemens/mindsphere/
description: "Presents reference content for using apps deployed to Insights Hub."
weight: 10
---

## 소개

Mendix는 Siemens Insights Hub에서 제공하는 IIoT 데이터를 Mendix 애플리케이션에 통합하는 강력한 통합 옵션을 제공합니다. 이러한 통합을 활용하는 두 가지 방법이 있습니다.

1. 독립형 Mendix 애플리케이션을 보유하고 Insights Hub에서 제공하는 IIoT 데이터를 비즈니스 로직에 통합하기만 원하는 경우 [Siemens Insights Hub – API 호출만 사용](/partners/siemens/mindsphere-api-only/)을 참조하십시오.

1. Insights Hub 내에서 완전한 통합을 원하여 Insights Hub Launchpad에 애플리케이션을 표시하고, Insights Hub Settings 앱을 통해 사용자 액세스를 관리하며, [서브테넌시](https://developer.mindsphere.io/howto/howto-subtenant-management.html)를 통한 OEM 기반 사용 사례를 달성하거나, Insights Hub 에코시스템 내에서 다른 Insights Hub 고객에게 Mendix 애플리케이션을 제공(멀티테넌시)하려는 경우 아래에 설명된 문서를 참조하십시오.

Mendix Academy에서는 완전히 통합된 Insights Hub 애플리케이션을 개발하는 방법을 보여주는 두 가지 학습 경로가 제공됩니다:

* [Mendix로 Insights Hub 앱 구축](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) - 이 학습 경로는 Mendix로 Insights Hub용 앱을 개발하는 방법을 알려줍니다
* [Insights Hub 앱 구축 - 심화](https://academy.mendix.com/link/path/93/Build-a-MindSphere-App---Continued) - 이 학습 경로는 Mendix Platform으로 Insights Hub 앱을 구축하는 방법을 더 깊이 이해하고자 하는 모든 분을 위한 것입니다

앱이 Insights Hub에 등록되면 Mendix 앱을 개발하면서 고려해야 할 여러 사항이 있습니다. 이러한 사항은 다음 두 문서에서 다루고 있습니다:

* [Insights Hub 개발 고려 사항](/partners/siemens/mindsphere-development-considerations/) – Insights Hub용으로 개발할 때 다루어야 할 사항을 다루며, 다음 내용이 포함됩니다:

    * [Cloud Foundry 환경 변수](/partners/siemens/mindsphere-development-considerations/#cfenvvars)
    * [로컬 테스트](/partners/siemens/mindsphere-development-considerations/#localtesting)
    * [멀티테넌시](/partners/siemens/mindsphere-development-considerations/#multitenancy)
    * [유효성 검사<br style="margin-bottom: 10px;">](/partners/siemens/mindsphere-development-considerations/#validation)

* [Insights Hub 모듈 상세 정보](/partners/siemens/mindsphere-module-details/) – Insights Hub에서 실행되도록 Mendix 앱에 포함해야 하는 Insights Hub 모듈에 대한 기술적인 세부 정보를 포함합니다

예제 애플리케이션으로 작업하려면 다음 문서를 참조하십시오:

* [Siemens Insights Hub Monitor 예제 사용 방법](/partners/siemens/mindsphere-example-app/) – Marketplace에서 제공되는 [Siemens Insights Hub Monitor Example](https://marketplace.mendix.com/link/component/117954) 사용에 대한 문서 및 도움말을 포함합니다
