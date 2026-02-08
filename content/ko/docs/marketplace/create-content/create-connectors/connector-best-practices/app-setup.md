---
title: "앱 설정"
url: /appstore/creating-content/best-practices/app-setup/
weight: 8
---

## 소개 {#app-setup}

이 섹션에서는 Studio Pro에서 앱을 설정하기 위한 모범 사례를 자세히 살펴봅니다. 기본 지침은 *커넥터 만들기*의 [앱 설정](/appstore/creating-content/connector-guide-build/#app-setup) 섹션을 참조하십시오.

## Studio Pro 버전

사용자가 커넥터를 사용할 수 있도록 하려면, 최신 버전의 Studio Pro를 사용하는 최종 사용자만을 대상으로 하지 마십시오. 최신 [LTS](/releasenotes/studio-pro/lts-mts/) 버전을 지원하고, 가능하면 이전 지원 버전도 지원하도록 하십시오. 

이를 벗어나는 유일한 이유는 커넥터가 최신 버전에서만 사용할 수 있는 특정 플랫폼 기능을 필요로 하거나, 최신 버전에서만 사용할 수 있는 다른 모듈을 필요로 하는 경우입니다. 이 경우 해당 최신 버전을 Mendix 필수 버전으로 사용하십시오.

## 앱의 모듈

메인 커넥터 모듈과 테스트 모듈이 포함된 Studio Pro에서 Mendix 앱을 만드십시오. 일부 사용 사례를 보여주는 예제 모듈을 추가할 수도 있습니다.

* 메인 모듈에는 가져온 후 앱에서 커넥터가 작동하는 데 필요한 모든 로직이 포함됩니다. 다른 사용자가 모듈을 가져온 후 앱에 나타나기를 원하는 이름을 메인 모듈에 지정하십시오.
* 테스트 모듈에는 모듈의 기능을 테스트하기 위한 Microflow, 페이지 및 Java 코드가 있습니다. 이는 나중에 내보내고 게시할 모듈에 테스트 로직을 추가할 필요가 없음을 의미합니다.
* 최종 사용자가 커넥터 모듈의 구현을 더 잘 이해하거나, 처음부터 너무 많은 구성 없이 시도해 볼 수 있도록 커넥터 메인 모듈 및 테스트 모듈 옆에 예제 모듈을 게시할 수 있습니다.

### 메인 커넥터 모듈 설정 {#main-setup}

Mendix는 커넥터의 메인 모듈에 다음을 포함할 것을 권장합니다:

* **_Docs** (폴더) – 문서 또는 문서에 대한 참조와 버전 표시기를 포함합니다.
    * **ReadMe** (스니펫) – 문서에 대한 참조 및/또는 모듈 사용 방법에 대한 직접적인 문서를 제공하는 데 사용됩니다.
    * **[ModuleName]_[Version]** (문자열 상수) – [ModuleName]을 모듈 이름으로, [Version]을 모듈 버전으로 대체합니다. Mendix Marketplace 1.2.3과 동일한 표준을 사용합니다. *릴리스 및 버전 관리*의 [버전 관리](/appstore/creating-content/best-practices/releasing-versioning/#versioning) 섹션을 참조하십시오.
        * 버전 상수의 대안으로 버전 표시가 있는 하위 폴더를 포함할 수 있습니다.
* **Private** (폴더) – 다른 개발자가 모듈을 구현할 때 건드리지 않아야 하는 모든 로직을 포함합니다.
* **UseMe** (폴더) – 구현 개발자가 애플리케이션에 모듈을 구현하는 데 사용할 수 있는 모든 것을 포함합니다. **Microflows**, **Pages**, **Snippets**, **Templates** 및 **Constants**에 대한 하위 폴더를 포함할 수 있습니다.

초기 설정 후 **App Explorer**는 다음과 같아야 합니다:

{{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/app-initial-setup.png" class="no-border" >}}

{{% alert color="info" %}}
이 앱 폴더 구조 예제는 **Blank Web App** 스타터 앱을 기반으로 하며, 앱에 없을 수 있는 Mendix Marketplace 모듈이 포함되어 있습니다. 표시된 중요한 Marketplace 모듈은 테스트 목적의 [Unit Testing](/appstore/modules/unit-testing/) 모듈입니다.
{{% /alert %}}

### 앱 루트 설정 {#root-setup}

Mendix는 디스크의 앱 루트에 추가 폴더를 추가할 것을 권장합니다. 여기에는 다음이 포함됩니다:

* **DIST** – 참조용으로 보관되는 모듈의 릴리스를 포함합니다.
* **MarketplaceResources** – 스크린샷, 비디오 및 참조 문서와 같이 Mendix Marketplace에서 사용되는 모든 자산을 포함합니다. 릴리스 패키지는 포함하지 않습니다.

루트 설정 후 **App Explorer**의 앱 루트는 다음과 같아야 합니다:

{{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/app-post-setup.png" class="no-border" >}}

### 종속성 모듈 가져오기

가능한 한 적은 수의 종속성 모듈을 사용하십시오. 하나를 사용해야 하는 경우, 플랫폼 지원이거나, 회사 전용 커넥터를 만드는 경우 자사에서 유지 관리하는 것인지 확인하십시오. 이를 통해 사용자가 항상 지원받을 수 있습니다. 그렇지 않으면 커넥터가 제대로 작동하도록 하기 위해 플랫폼 지원이 아닌 공개 모듈을 유지 관리해야 할 수 있습니다.

## 버전 관리에 앱 추가

아직 앱을 추가하지 않았다면 [Team Server](/refguide/version-control/#team-server)에 추가하십시오. Mendix가 권장하는 대안 솔루션은 비공개 Team Server Git 리포지토리 옆에 별도의 공개 Git 리포지토리를 갖는 것입니다. 이렇게 하면 커밋을 계속 적용하고 변경 사항을 적용하면서 Marketplace에 새 릴리스를 위해서만 공개 리포지토리에 푸시할 수 있습니다. Marketplace의 GitHub와의 자동 통합은 이를 공개 Git 리포지토리의 좋은 옵션으로 만듭니다.

## Java 집약적인 앱 작업

Java 집약적인 앱의 경우, 핵심 구현을 별도로 유지하기 위해 **Implementation** 하위 모듈을 만드는 것을 고려하십시오. 또한 종속성 및 릴리스 파이프라인을 더 잘 관리하기 위해 모듈을 Gradle 프로젝트로 만들 수 있습니다. Java 라이브러리 종속성과 내보내기를 위한 **userlib** 폴더 정리를 관리하기 위해 *gradle.build* 파일을 만드십시오. 자세한 내용은 *개발*의 [Java로 커넥터 빌드를 위한 앱 설정 확장](/appstore/creating-content/best-practices/development/#extend-app-java)을 참조하십시오.

## 라이선싱

Java 라이브러리를 따르고 Mendix EULA를 기본으로 사용하십시오. 또한 상업적으로 사용 가능한 커넥터에 대해 카피레프트 라이선스를 사용하지 않는 것을 권장합니다.
