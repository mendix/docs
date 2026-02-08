---
title: "소프트웨어 구성"
linktitle: "소프트웨어 구성"
url: /control-center/software-composition/
description: "Mendix Control Center의 소프트웨어 구성 페이지에 대해 설명합니다."
weight: 20
---

## 소개

Mendix 앱은 Mendix 모델(페이지, 도메인 모델, 마이크로플로우(Microflow) 등 포함), 커스텀 Java, JavaScript로 구성될 수 있습니다. 또한 표준 Marketplace 모듈, 위젯(Widget), Java 라이브러리, npm 패키지, 런타임 버전과 같은 재사용 가능한 컴포넌트를 사용할 수 있습니다. 이러한 재사용 가능한 컴포넌트는 종속성, 즉 Mendix 앱이 실행되는 데 의존하는 컴포넌트입니다.

시간이 지남에 따라 이러한 종속성은 더 이상 사용되지 않거나, 오래되거나, 취약해질 수 있습니다. 기업은 또한 지원, 라이선스 등을 기반으로 이러한 재사용 가능한 컴포넌트 중 어떤 것을 사용할 수 있고 사용할 수 없는지에 대한 정책을 가지고 있습니다. 관리자나 보안 팀이 제기한 보안 결과를 해결하기 위해 개발 수명 주기 전반에 걸쳐 컴포넌트 종속성에 대한 쉽게 접근 가능하고 명확한 뷰를 갖는 것이 중요합니다.

이를 가능하게 하기 위해 Control Center의 **소프트웨어 구성** 페이지는 각 앱 환경의 컴포넌트 종속성에 대한 가시성을 제공합니다. 여기에 표시되는 컴포넌트는 [소프트웨어 자재 명세서(SBOM)](/refguide/sbom-generation/)를 기반으로 합니다.

{{% alert color="warning" %}}고급 소프트웨어 구성 기능은 현재 모든 사용자에게 제공됩니다. 향후 이러한 기능에 대한 접근은 라이선스에 따라 달라질 수 있습니다.{{% /alert %}}

## 전제 조건 {#prerequisites}

소프트웨어 구성 정보를 보려면 다음 전제 조건을 충족하는지 확인하십시오:

* 소프트웨어 자재 명세서(SBOM) 생성 및 관련 소프트웨어 구성 기능은 다음 Studio Pro 버전과 호환됩니다: 9.24.26 이상, 10.6.12 이상, 10.12.3 이상.

    {{% alert color="warning" %}}소프트웨어 구성을 계속 사용하려면 호환되는 Studio Pro 버전으로 업그레이드해야 합니다. 이전에 지원되었던 Studio Pro 버전(9.24.22~9.24.25, 10.6.9~10.6.11, 10.10.0~10.12.2, 10.13)은 더 이상 SBOM 생성 및 소프트웨어 구성의 가시성을 제공하지 않습니다. 소프트웨어 구성 내의 기존 데이터는 업그레이드 여부에 관계없이 접근 가능합니다.{{% /alert %}}

* 소프트웨어 구성 가시성은 플랫폼 서비스를 통해 생성된 배포 패키지에서만 가능합니다. 로컬에서 생성한 배포 패키지를 수동으로 업로드하는 경우에는 사용할 수 없습니다. SBOM은 각 배포 패키지에 대해 백그라운드에서 생성됩니다. 자세한 내용은 [배포 패키지 생성](/refguide/create-deployment-package-dialog/)을 참조하십시오.

* 무료 또는 라이선스가 부여된 Mendix Cloud 또는 Mendix Cloud Dedicated, 또는 Mendix on Kubernetes를 사용해야 합니다.

* 배포 패키지가 2024년 6월 14일 이전에 배포된 경우 이 페이지에 소프트웨어 구성 정보를 채우려면 새 배포 패키지를 생성하고 배포해야 합니다.

## 소프트웨어 구성 생성 {#software-composition-generation}

소프트웨어 자재 명세서(SBOM)는 다음 상황에서 생성됩니다:

* 호환되는 Mendix Runtime 버전으로 새 배포 패키지가 Mendix Portal을 통해 생성될 때
* Studio Pro 10.18 이상에서 **App** > **Tools** > **Generate Bill of Materials** 메뉴 옵션 사용

Mendix Portal의 배포 패키지 세부 정보에서 **빌드 출력 보기**를 클릭하여 로그 세부 정보를 확인하십시오. SBOM 생성에 대한 자세한 내용은 [SBOM 생성](/refguide/sbom-generation/)을 참조하십시오.

Mendix Portal의 **앱**에 있는 [소프트웨어 구성](/developerportal/deploy/software-composition/) 페이지에서 만료되지 않은 각 배포 패키지의 컴포넌트 종속성을 찾을 수 있습니다.

배포 패키지가 생성된 후 **소프트웨어 구성** 페이지는 일반적으로 몇 분 이내에 표시됩니다. 그러나 드문 경우 최대 하루가 걸릴 수 있습니다. Mendix는 이 부분의 성능을 개선하기 위해 노력하고 있습니다.

## 안내

**소프트웨어 구성** 페이지 오른쪽 상단의 **{{% icon name="book-closed" %}} 안내** 옵션을 클릭하여 주요 기능을 설명하는 비디오와 자세한 정보 링크를 찾으십시오.

## 소프트웨어 구성 탭

**소프트웨어 구성** 페이지는 발견 사항을 보고 관리하는 데 도움이 되는 다음 탭으로 구성됩니다:

* [개요 탭](/control-center/overview-tab/)
* [컴포넌트 탭](/control-center/components-tab/)
* [점수 기준 탭](/control-center/scoring-criteria-tab/)

각 탭에 대해 자세히 알아보려면 링크에 접속하십시오.
