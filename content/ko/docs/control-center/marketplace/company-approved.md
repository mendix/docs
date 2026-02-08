---
title: "회사 승인"
url: /control-center/company-approved/
description: "Mendix Control Center의 회사 승인 페이지에 대해 설명합니다."
weight: 10
no_list: true
aliases:
    - /control-center/marketplace-curation/
---

## 소개

**회사 승인** 페이지는 Marketplace 콘텐츠의 승인 상태에 대한 개요와 해당 콘텐츠에 대한 거버넌스 기능을 제공합니다. 회사의 퍼블릭 및 프라이빗 Marketplace 콘텐츠에 대한 정책과 가이드라인을 큐레이션 설정으로 변환할 수 있습니다. 이러한 요구 사항을 충족하는 Marketplace 컴포넌트에는 회사 승인 배지가 부여됩니다: <text class="badge badge-pill badge-company-approved" style="margin-left:0px"> {{% icon name="checkmark-shield-filled" color="green" %}}COMPANY APPROVED</text>. 이를 통해 회사의 개발자는 회사 정책 및 가이드라인에 따라 어떤 콘텐츠가 회사 승인을 받았는지 쉽게 확인할 수 있습니다. 이 기능은 다음과 같은 주요 이점을 제공합니다:

* 개발자 안내 – 개발자는 Studio Pro의 Marketplace 섹션 또는 Marketplace 웹사이트에서 회사 승인 배지별로 Marketplace 콘텐츠를 필터링하여 앱에 적합한 Marketplace 콘텐츠를 쉽게 식별할 수 있습니다. 이를 통해 개발자가 회사에서 앱 개발을 위한 가치 있고 관련 있는 콘텐츠를 찾을 수 있습니다.
    자세한 내용은 [Studio Pro에서 회사 승인 Marketplace 콘텐츠 표시](#display-company-approved-marketplace-content)를 참조하십시오.
* 향상된 Marketplace 탐색 – 회사 승인 콘텐츠의 기준을 지정함으로써 개발자는 더 다양한 퍼블릭 콘텐츠를 탐색하여 앱을 위한 리소스를 활용할 수 있습니다.
* 거버넌스 제어 – 중앙 집중식 큐레이션을 통해 Mendix 관리자가 오프라인 정책 및 가이드라인을 플랫폼 내 경험으로 변환하여 개발자와 Mendix 관리자 간의 효율적인 커뮤니케이션과 시간 절약 프로세스를 구축할 수 있습니다.

**회사 승인** 페이지에는 다음 탭이 포함되어 있습니다:

* [컴포넌트](#marketplace-content-list)
* [설정](#curation-settings)

## 컴포넌트 {#marketplace-content-list}

{{< figure src="/attachments/control-center/marketplace/company-approved/company-approved.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}

**컴포넌트** 탭에는 퍼블릭이든 프라이빗이든 모든 회사 승인 Marketplace 콘텐츠가 나열됩니다. 목록에 표시되는 세부 정보는 다음과 같습니다:

* **컴포넌트 이름** – 컴포넌트의 이름입니다.
* **지원 유형** – 컴포넌트의 지원 유형입니다.
* **가시성** – 컴포넌트의 가시성으로 **Public** 또는 **Private**일 수 있습니다.
* **업데이트 날짜** – 컴포넌트가 가장 최근에 업데이트된 날짜입니다.
* **라이선스** – 컴포넌트의 라이선스입니다.
* **승인자** – 배지의 출처를 나타냅니다:

    * **설정을 통해 표시** – 큐레이션 설정에 따라 회사 승인 배지가 자동으로 추가되었습니다.
    * **[관리자 이름]** – Mendix 관리자가 수동으로 회사 승인 배지를 추가했습니다.

### 회사 승인 배지 관리

{{< figure src="/attachments/control-center/marketplace/company-approved/manage-company-approved.png" max-width=70% alt=''displaying-company-approved-mp-content'' >}}

[큐레이션 설정](#curation-settings)에 따라 회사 승인이 되지 않은 컴포넌트에 대해 수동으로 회사 승인 배지를 추가할 수 있습니다.
**회사 승인 배지 관리** 페이지에서는 회사 컴포넌트에 대한 회사 승인 배지를 수동으로 추가 및 제거할 수 있습니다. 이에 접근하려면 컴포넌트 목록 오른쪽 상단의 **회사 승인 배지 관리**를 클릭하십시오.

**회사 승인 배지 관리** 페이지에는 컴포넌트 목록과 동일한 필드와 추가로 **회사 승인** 필드가 포함되어 있어 컴포넌트가 회사 승인으로 표시되었는지 여부를 보여줍니다.

각 컴포넌트 옆의 컨텍스트 작업 메뉴를 클릭하여 회사 승인 상태를 변경할 수 있습니다.
또한 여러 컴포넌트를 선택하여 회사 승인 상태를 동시에 변경할 수 있습니다.

{{% alert color="info" %}}Marketplace 컴포넌트에 수동으로 회사 승인 배지를 추가하면 나중에 큐레이션 설정이 변경되더라도 이 Marketplace 컴포넌트는 항상 배지를 유지합니다. 마찬가지로 Marketplace 컴포넌트에서 수동으로 회사 승인 배지를 제거하면 나중에 큐레이션 설정이 변경되고 Marketplace 컴포넌트가 새 요구 사항을 충족하더라도 다시 추가되지 않습니다. {{% /alert %}}

## 설정 {#curation-settings}

{{< figure src="/attachments/control-center/marketplace/company-approved/curation-settings.png" max-width=50% alt=''displaying-company-approved-mp-content'' >}}

**설정** 탭에서 퍼블릭 및 프라이빗 Marketplace 콘텐츠에 대한 회사 정책 및 가이드라인을 구성할 수 있습니다.

관련 지원 유형 및 라이선스 유형을 선택하십시오. 요구 사항을 충족하는 Marketplace 컴포넌트는 자동으로 회사 승인으로 레이블이 지정됩니다.

예를 들어, **지원 유형 기반**에서 **Community** 및 **Platform**을 선택하고 **라이선스 기반**에서 **MIT**를 선택하면 **Community** 또는 **Platform**에서 지원하고 **MIT** 라이선스로 제공되는 모든 컴포넌트가 회사 승인으로 레이블이 지정됩니다.

{{% alert color="info" %}}Partner License: 이 라이선스는 파트너 회사에서 생성한 모든 사용자 정의 라이선스를 포함합니다. {{% /alert %}}

## Studio Pro에서 회사 승인 Marketplace 콘텐츠 표시 {#display-company-approved-marketplace-content}

Studio Pro의 Marketplace 섹션에서 개발자는 회사 승인 콘텐츠 여부에 관계없이 모든 Marketplace 컴포넌트를 볼 수 있습니다. 회사 승인 콘텐츠만 보려면 **Show <text class="badge badge-pill badge-company-approved" style="margin-left:0px"> {{% icon name="checkmark-shield-filled" color="green" %}}COMPANY APPROVED</text>** 체크박스를 선택하십시오.

회사 승인 배지는 메인 패널의 세부 정보 페이지에서도 볼 수 있습니다.

{{< figure src="/attachments/control-center/marketplace/company-approved/displaying-company-approved-content.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}
