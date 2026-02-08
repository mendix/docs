---
title: "SDK 소개"
url: /apidocs-mxsdk/mxsdk/sdk-intro/
weight: 1
#When content is updated here, it should also be updated on https://developers.mendix.com/sdk/, contact Ben.
---

## 소개

Mendix Platform 및 Model SDK는 TypeScript 및 JavaScript 기반 SDK로, 모든 Mendix 앱의 내부 구조에 접근할 수 있게 해줍니다. 이 SDK를 사용하면 코드를 통해 앱을 효율적으로 작업하고 지루하거나 오류가 발생하기 쉬운 작업을 자동화할 수 있습니다.

Mendix Platform SDK와 Mendix Model SDK를 사용하면 다음과 같은 작업을 수행할 수 있습니다:

* 앱 모델에서 "읽기" (예: 앱 모델의 품질을 분석하거나 앱을 문서화하기 위한 상위 수준 다이어그램 생성)
* 앱 모델에 "쓰기" (예: 도메인 모델(Domain Model)에 새 엔티티(Entity)를 만들거나, 기존 마이크로플로우(Microflow)에 액티비티(Activity)를 추가하거나, 레거시 코드 기반으로 완전히 새로운 Mendix 앱을 생성)

{{% alert color="info" %}}
자세한 내용은 *SDK 사용 사례*의 [레거시 코드 가져오기](/apidocs-mxsdk/mxsdk/sdk-use-cases/#importing)를 참조하십시오.
{{% /alert %}}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/sdk-diagram.png" class="no-border" >}} 

### Mendix Platform SDK

[Mendix Platform SDK](https://apidocs.rnd.mendix.com/platformsdk/latest/index.html)를 사용하면 앱 수준에서 작업할 수 있습니다. 현재 Mendix Platform SDK는 다음 기능을 구현하고 있습니다:

* 새 앱 만들기
* 앱 삭제
* Mendix Model SDK를 사용하여 앱 모델을 편집하기 위한 임시 작업 복사본 만들기
* 임시 작업 복사본의 변경 사항을 Mendix Team Server에 커밋
* 리포지토리, 브랜치 및 커밋에 대한 정보 가져오기

### Mendix Model SDK

[Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html)를 사용하면 앱 모델의 모든 메타모델 엘리먼트를 읽고, 수정하고, 분석할 수 있습니다. 여기에는 도메인 모델(Domain Model), 마이크로플로우(Microflow), 페이지, 통합(소비 및 게시된 웹 서비스), Java 액션, 커스텀 위젯(Widget), 보안 제약 조건 등이 포함됩니다. Studio Pro에서 접근할 수 있는 모든 것과 UI에서 추상화한 모든 기술적 세부 사항이 앱 모델의 일부입니다.

앱 모델을 분석할 때 강력한 기능을 얻을 수 있습니다: 모델의 모든 세부 사항에 접근하여 전체 모델에 대해 추론하고, 품질을 분석하거나, 완전히 내보낼 수 있습니다.

{{% alert color="info" %}}

전체 읽기-쓰기 접근 권한을 제공하기 때문에 모델을 쉽게 손상시킬 수도 있습니다. 물론 이에 대한 조치를 취했으며 대부분의 메타모델에서 안전하게 사용할 수 있습니다. 그러나 다음 메타모델 구성 요소에 대해서는 읽기 접근 작업만 수행하는 것을 권장합니다. 잘못된 모델을 쉽게 생성할 수 있기 때문입니다:

* 소비 및 게시된 웹 서비스
* XML 스키마
* 가져오기 및 내보내기 매핑
* 커스텀 위젯(Widget)
* Rest 서비스: PublishedRestService는 지원되지 않는 실험적 기능입니다.

이러한 구성 요소를 변경할 때는 [리버스 엔지니어링 도구](/apidocs-mxsdk/mxsdk/generating-code-from-the-model/)를 사용하여 유효한 모델을 생성하는 스크립트를 성공적으로 빌드할 가능성을 높이십시오.

{{% /alert %}}

## 시작하기

### 빠른 설정

Mendix Platform 및 Model SDK를 설정하려면 [빠른 설치](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/#quick-installation) 가이드를 따르십시오.

### 상세 리소스

Mendix Platform SDK 및 Mendix Model SDK 시작하기에 대한 자세한 정보는 [개발 환경 설정 방법](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/)을 참조하십시오.
