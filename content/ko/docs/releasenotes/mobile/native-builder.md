---
title: "Native Builder 릴리스 노트"
linktitle: "Native Builder"
url: /releasenotes/mobile/native-builder/
weight: 11
description: "Native Builder 릴리스 노트."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

{{% alert color="warning" %}}
CLI 도구인 Native Builder는 Studio Pro와 통합되는 UI 도구인 Mendix Native Mobile Builder로 대체되었습니다. Mendix Studio Pro 8.15에서는 CLI 도구 대신 Native Mobile Builder UI 도구를 사용하세요. 앱을 배포하는 방법에 대한 자세한 내용은 [여기](/refguide/mobile/getting-started-with-mobile/prerequisites/)에서 로컬 또는 원격으로 배포하는 방법을 확인하세요.
{{% /alert %}}

[Native Builder](/refguide8/native-builder/)는 Mendix 네이티브 모바일 앱을 빌드하는 데 도움이 되는 명령줄 입력 도구입니다. Native Builder가 빌드 프로세스를 간소화한 후, 가장 원하는 일을 할 수 있습니다: 앱을 테스트하고 게시하기. Native Builder는 MxBuild, GitHub, App Center를 사용하여 앱 빌드 프로세스를 간소화합니다. 

앱 빌드 경험을 간소화하는 데 많은 투자를 하고 있으며 도구의 기능을 지속적으로 개선하고 있습니다. Native Builder 사용에 대한 자세한 내용은 [로컬에서 Mendix 네이티브 앱 빌드](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)를 참조하세요.

{{% alert color="warning" %}}
Native Builder v3.2.1 이상으로 업데이트하세요. 버전 3.2.1에는 GitHub가 새 리포지토리의 기본 브랜치 이름을 **master** 대신 **main**으로 사용하는 전환에 필요한 수정 사항이 포함되어 있습니다. 
{{% /alert %}}

## 3.2.2

**릴리스 날짜: 2020년 10월 16일**

### 개선 사항

* 이 릴리스는 CLI v3.2.1에서 도입된 OTA 업데이트 관련 회귀 문제를 해결합니다. 

### 수정 사항

* CLI가 이제 새 빌드에 대해 Codepush API 키 환경 변수를 올바르게 할당합니다.

## 3.2.1

**릴리스 날짜: 2020년 10월 5일**

### 개선 사항

* 이 릴리스는 GitHub가 기본 리포지토리 브랜치 이름을 **master**에서 **main**으로 전환하는 것을 반영합니다.
* 이 CLI 릴리스 사용은 **필수**이며, 이전 CLI 버전에서는 CLI로 생성된 새 프로젝트가 리포지토리 생성 단계에서 실패합니다. 

## 3.2.0

**릴리스 날짜: 2020년 2월 5일**

### 개선 사항

* 커스텀 개발자 앱이 공식 출시되었습니다. `dev-app` 명령을 사용하면 특정 앱의 테스트 요구에 맞춘 더 작은 버전의 Make It Native 앱을 빌드할 수 있습니다. 커스텀 개발자 앱은 최종 릴리스 앱의 소스, 종속성 및 기능을 기반으로 빌드됩니다. 자세한 내용은 [커스텀 개발자 앱을 만드는 방법](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/)을 참조하세요.
* 이미지 기능을 업데이트했습니다. 이 개선으로 모든 추가 종속성을 제거하고 CLI를 단일 실행 파일로 압축할 수 있었습니다.
* 새로운 iOS 전용 구성 명령을 도입했습니다. 자세한 내용은 [Native Builder](/refguide8/native-builder/)를 참조하세요.

### 수정 사항

* 연속 업데이트 설치에 실패할 수 있는 OTA 아카이빙 알고리즘 문제를 수정했습니다.
* 성공적인 업데이트 후 리소스가 누락될 수 있는 Android의 OTA 문제를 수정했습니다.

## 3.1.0

**릴리스 날짜: 2019년 12월 17일**

### 개선 사항

* 타사 서비스의 안정성과 같은 몇 가지 요인으로 인해 가시적인 오류 없이 Native Builder가 충돌할 수 있습니다. 이러한 충돌 시 더 많은 정보를 제공하기 위해 전역 `--verbose` 인수를 도입했습니다. 이를 제공하면 Native Builder가 오류 발생 시 확장된 스택 트레이스를 출력합니다.
* 커스텀 빌드를 간소화하기 위해 `bundle` 명령을 도입했습니다. `bundle` 명령을 사용하면 전체 빌드 프로세스를 거치지 않고도 JavaScript 번들을 쉽게 생성할 수 있습니다. 이 명령은 iOS 또는 Android JavaScript 번들과 모든 필요한 에셋을 생성한 다음 제공된 경로로 번들을 출력합니다.
* Mendix Studio Pro와 Native Builders가 성숙해짐에 따라 이전 버전과 호환되지 않는 새로운 종속성이나 요구 사항을 도입할 것입니다. 이를 위해 `regenerate` 및 `prepare` 명령에 필수 `--mendix-version` 인수를 도입했습니다. Mendix 프로젝트가 빌드된 Studio Pro 버전을 제공하면 Native Builder가 리포지토리를 생성할 때 올바른 버전의 Native Template을 선택할 수 있습니다. 알 수 없는 버전이 제공되면 Native Builder가 리포지토리 생성을 위해 최신 사용 가능한 버전을 사용합니다. 

### 수정 사항

* `regenerate` 명령이 매번 실행 시 올바른 GitHub 리포지토리를 가리키도록 App Center를 올바르게 업데이트합니다.
* `regenerate` 명령이 올바른 이름으로 GitHub 리포지토리를 일관되게 생성합니다.
* 로그가 이제 사용자의 이름 매개변수 대신 로그인 사용자 이름을 사용하여 GitHub 소유자의 이름을 올바르게 보고합니다.

## 3.0.0

**릴리스 날짜: 2019년 10월 29일**

### 개선 사항

* 이 릴리스는 Native Builder의 재설계를 나타냅니다. 주요 개선 사항은 다음과 같습니다:
    * Native Builder가 이제 더 구조화된 명령 API를 갖습니다.
    * Native Builder가 이제 프로젝트의 업그레이드 경로를 제공합니다.
    * Native Builder가 이제 더 나은 오류 메시지를 제공합니다.

#### 명령 API 개선 사항

* Native Builder의 명령 API를 재작업했습니다. 두 가지 새 명령 `prepare`와 `build`를 도입했습니다. 이 명령은 준비 구성을 실제 빌드와 분리합니다. 구체적으로, 준비 과정에서는 구성 중에 여러 가지 앱 정보가 필요하며, 빌드 과정에서는 빌드 번호와 버전 번호만 필요합니다. 앱 빌드를 더 간소화하기 위해 새로운 인수 `--project-name`도 도입했습니다. 이 인수를 통해 Mendix 프로젝트와 앱 이름을 명시적으로 분리할 수 있습니다. `prepare`로 프로젝트를 준비하면 모든 구성이 로컬에 캐시됩니다. 따라서 빌드 명령은 다음과 같이 간단해질 수 있습니다: 
    * `build --project-name "My Mendix Project" --app-version "1.0.0" --build-number 1`
* 구성 업데이트는 여전히 다음을 호출하여 가능합니다: 
    * `prepare --project-name "My Mendix Project" --github-api-token "" <새 값으로 업데이트할 인수>`
* 또한 `build` 명령에 `--platform`과 `--skip-mxbuild` 두 가지 새 인수가 추가되었습니다. `--platform` 인수는 특정 플랫폼(iOS 또는 Android)에 대한 빌드를 허용하며, `--skip-mxbuild`는 프로젝트 빌드를 건너뛸 수 있습니다. 빌드 건너뛰기는 MxBuild는 성공했지만 이후 단계가 실패한 경우에 유용합니다.

#### 업그레이드 경로 개선 사항

* 리포지토리에 대한 실행 가능한 업그레이드 경로도 개발했습니다. 이전에는 Native Builder가 새 버전의 Native Template에 대해 알릴 수 없었습니다. 새로운 아키텍처의 일환으로 전반적인 버전 관리 정책을 시작했습니다. 이제부터 Native Template에 버전이 지정됩니다. 프로젝트의 리포지토리를 업데이트하려면 새로 추가된 `regenerate` 명령을 사용할 수 있습니다. 이 명령은 리포지토리와 App Center 구성을 우아하게 업데이트합니다. 현재 리포지토리는 백업 조치로 타임스탬프와 함께 이름이 변경되고, 최신 릴리스의 Native Template을 사용하여 새 리포지토리가 생성되며, App Center 프로젝트의 구성이 새 템플릿을 지원하도록 업데이트됩니다.

#### 오류 메시지 개선 사항

* 마지막으로, Native Builder의 오류 출력을 개선했습니다. 누락되었던 오류 메시지를 추가하고 컨텍스트가 부족했던 메시지를 업데이트했습니다.

### 수정 사항

* <a id="nalm-217"></a>앱 이름에 두 개 이상의 연속 공백을 사용하는 것이 이제 지원됩니다.
* <a id="nalm-215"></a>MxBuild가 더 이상 빌드 과정에서 오류 메시지 없이 실패하지 않습니다.

## 2.0.0

**릴리스 날짜: 2019년 9월 3일**

### 개선 사항

* Mendix 8.1.0 이상과의 MxBuild 호환성을 활성화하기 위해 MxBuild에 `--native-packager` 플래그를 전달했습니다.

### 호환성을 깨뜨리는 변경 사항

* 이 버전은 Mendix 8.1.0 이상만 지원합니다. Mendix 8.0.0을 사용해야 하는 경우 Native Builder v1.0.0을 사용하는 것을 고려하세요.

### 알려진 문제

* Native Builder 프로세스 중 MxBuild가 실패하면 명확한 오류 메시지가 제공되지 않고 프로세스가 계속됩니다. 이로 인해 이전 번들이 사용되어 최신 Mendix 프로젝트 모델 변경 사항이 적용되지 않습니다. 이를 완화하려면 Mendix 프로젝트 폴더의 **deployment/native/bundle** 폴더를 삭제하여 이전 번들이 없도록 하세요.
    * [3.0.0](#nalm-215)에서 수정되었습니다.
* 앱 이름에 두 개 이상의 공백을 사용하는 것은 지원되지 않습니다.
    * [3.0.0](#nalm-217)에서 수정되었습니다.

## 1.0.0

**릴리스 날짜: 2019년 8월 15일**

### 개선 사항

* Native Builder의 빌드 관리를 최적화했습니다. Native Builder가 이제 포크 대신 GitHub 템플릿을 사용하여 각 앱에 대한 고유한 리포지토리를 만듭니다. 이를 통해 각 앱에 대해 별도의 리포지토리를 만들 수 있어 더 나은 빌드 관리가 가능합니다. GitHub 템플릿에서 생성된 리포지토리는 기본적으로 비공개입니다.
* 선택적 `output-path` 매개변수를 추가했습니다. 이를 통해 아티팩트가 출력되어야 하는 위치를 정의할 수 있습니다. 이것이 작동하려면 해당 위치에 대한 충분한 접근 권한이 있어야 합니다.

### 알려진 문제

* Native Builder 프로세스 중 MxBuild가 실패하면 명확한 오류 메시지가 제공되지 않고 프로세스가 계속됩니다. 이로 인해 이전 번들이 사용되어 최신 Mendix 프로젝트 모델 변경 사항이 적용되지 않습니다. 이를 완화하려면 Mendix 프로젝트 폴더의 **deployment/native/bundle** 폴더를 삭제하여 이전 번들이 없도록 하세요.
    * [3.0.0](#nalm-215)에서 수정되었습니다.
* 앱 이름에 두 개 이상의 연속 공백을 사용하는 것은 지원되지 않습니다.
    * [3.0.0](#nalm-217)에서 수정되었습니다.

## 0.1.0

**릴리스 날짜: 2019년 8월 1일**

* Native Builder의 초기 릴리스입니다.
