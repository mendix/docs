---
title: "SDK 사용 방법"
url: /apidocs-mxsdk/mxsdk/sdk-howtos/
weight: 4
---

## 소개

Mendix SDK가 여러분의 작업을 더 쉽게 만들기 전에, 먼저 학습이 필요합니다. 아래 나열된 단계별 가이드를 따라 SDK 사용에 필요한 모든 것을 학습하십시오. 가이드를 완료하면 SDK 사용 방법뿐만 아니라 모든 부분이 어떻게 결합되는지도 알게 될 것입니다.

자신만의 방법으로 학습하고 싶다면, 이 페이지를 스크롤하여 사용 가능한 문서와 예제의 개요를 확인하고 원하는 곳에서 시작하십시오. 빠르게 설정하려면 [개발 환경 설정 방법](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/)을 참조하십시오.

## 사용 방법

### 개발 환경 설정 방법

Mendix SDK로 작업을 시작하려면 먼저 SDK와 그 의존성을 설치해야 합니다. 다행히도 이는 쉽게 수행할 수 있으며, [개발 환경 설정 방법](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/)에서 확인할 수 있습니다.

### 첫 번째 스크립트 만들기 방법

Mendix SDK를 설치한 후, 다음을 수행하는 스크립트를 얻게 됩니다:

* 새 앱 만들기
* 해당 앱을 온라인 workingCopy로 사용 가능하게 만들기
* 해당 workingCopy에 간단한 변경 수행
* workingCopy에 변경 사항 커밋

해당 스크립트를 실행하고 Studio Pro에서 결과를 확인할 수 있습니다.

자세한 내용은 [첫 번째 스크립트 만들기 방법](/apidocs-mxsdk/mxsdk/creating-your-first-script/)을 참조하십시오.

### 도메인 모델 만들기 방법

이제 Mendix SDK가 할 수 있는 것에 대한 아이디어를 얻었으므로, 좀 더 깊이 파고들 차례입니다. 이 단계에서는 조금 더 복잡한 새 앱을 만들 것입니다: 여러 엔티티(Entity)와 상속이 있는 도메인 모델(Domain Model)을 포함할 것입니다. 이 예제를 통해 Model SDK API와 메타 모델이 정확히 어떻게 관련되는지 설명할 것입니다. 이것은 [Mendix Metamodel](/apidocs-mxsdk/mxsdk/sdk-refguide/)과 [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html)의 참조 문서를 살펴보는 데 필요한 개념적 프레임워크를 제공합니다.

주요 문서 소스를 탐색하는 방법을 배우려면 [도메인 모델 만들기 방법](/apidocs-mxsdk/mxsdk/creating-the-domain-model/)을 참조하십시오.

## Mendix SDK 더 활용하기

### 개발 워크플로우

첫 번째 스크립트 만들기 단계에서 사용한 스크립트는 전체 라운드 트립을 수행했습니다. 앱을 생성하고, 작업 복사본으로 만들어 변경한 후 TeamServer에 다시 커밋했습니다. 정확히 어떤 용도로 SDK를 사용하는지에 따라([사용 사례 예제](/apidocs-mxsdk/mxsdk/sdk-use-cases/) 참조) 이것이 좋은 방법일 수도 있고 아닐 수도 있습니다. 예를 들어 모델을 분석하는 데 관심이 있다면, 새로 생성된 앱 대신 기존 앱에서 시작하고 싶을 것이며, 모델에 커밋할 변경 사항이 없을 것입니다.

### 기존 모델 조작 방법

이 주제에 대한 설명은 [기존 모델 조작 방법](/apidocs-mxsdk/mxsdk/manipulating-existing-models/)을 참조하십시오.

기존 모델 조작에 대한 추가 설명은 다음 문서에서 찾을 수 있습니다:

* [모델에서 사항 변경하기](/apidocs-mxsdk/mxsdk/changing-things-in-the-model/)
* [모델에서 항목 찾기](/apidocs-mxsdk/mxsdk/finding-things-in-the-model/)
* [유닛과 엘리먼트 로드하기](/apidocs-mxsdk/mxsdk/loading-units-and-elements/)

### 모델에서 코드 생성 방법

[모델에서 코드 생성 방법](/apidocs-mxsdk/mxsdk/generating-code-from-the-model/)에 설명된 리버스 엔지니어링 도구는 기존 앱 중 하나를 가져와 정확히 동일한 앱을 생성하는 Mendix SDK 코드를 만들어 줍니다. 이 도구를 사용하여 기존 앱을 기반으로 스크립트를 빠르게 부트스트랩한 다음, 필요에 맞게 사용자 정의할 수 있습니다.
