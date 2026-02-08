---
title: "미니 설문조사"
url: /developerportal/app-insights/mini-surveys/
weight: 6
description: "앱 개발 팀은 Mendix의 사용자 친화적인 [미니 설문조사](/appstore/modules/mendix-mini-surveys/) 모듈을 활용하여 애플리케이션에 설문조사를 통합할 수 있습니다."
---

## 소개

미니 설문조사(Mini Surveys)는 고객으로부터 피드백을 수집하고 통합하도록 설계된 도구 세트인 Mendix App Insights의 일부입니다.

미니 설문조사 기능은 두 부분으로 구성됩니다:

* 사용자가 작성할 수 있는 앱 내 팝업 설문조사
* 설문조사를 생성하고 결과를 집계하기 위한 **앱(Apps)**의 [내비게이션 패널](/developerportal/#navigation-pane)에 있는 백엔드 대시보드

**앱(Apps)**의 내비게이션 패널에 있는 **Mini Survey** 페이지에서 미니 설문조사를 생성한 다음 Studio Pro에서 [Mendix 미니 설문조사](/appstore/modules/mendix-mini-surveys/) 모듈을 구성하여 미니 설문조사를 구현합니다. 미니 설문조사가 시작된 후 Mendix 포털의 Mini Surveys에서 수집된 응답을 보고 XLSX 파일로 내보낼 수 있습니다.

## Mendix 미니 설문조사 구성

### 설문조사 개요 {#survey-overview}

이미 기존 미니 설문조사가 있는 앱의 [내비게이션 패널](/developerportal/#navigation-pane)에서 **Mini Surveys**를 클릭하면 **Survey Overview** 페이지가 먼저 열립니다.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/mini-surveys-overview.png">}}

#### Active 탭 {#active}

**Active** 탭은 앱에 대해 활성화된 모든 미니 설문조사를 다음 세부 정보와 함께 표시합니다:

* **ID** – 미니 설문조사의 고유 ID
* **Name** – 미니 설문조사의 이름
* **Location** – 앱에서 미니 설문조사 위젯이 팝업되는 위치 참조
* **Responses** – 미니 설문조사에 대해 수집된 응답 수
* **Status** – 미니 설문조사의 상태
* **Start & End Dates** – 미니 설문조사의 시작 및 종료 날짜
* **Created on** – 미니 설문조사가 생성된 시기

##### 미니 설문조사의 상태 {#survey-status}

미니 설문조사는 수명 주기 동안 **Draft**, **Scheduled**, **Active**, **Finished** 상태를 가질 수 있습니다.

#### Archived 탭 {#archived}

**Archived** 탭은 앱에 대해 아카이브된 모든 미니 설문조사를 표시합니다.

### 설문조사 세부 정보 {#survey-details}

[Survey Overview](#survey-overview) 페이지에서 미니 설문조사를 클릭하면 설문조사 세부 정보 페이지가 열립니다.

오른쪽 상단에서 **Share Link**, **Archive Survey**, **Export Responses**, **Delete Survey** 버튼을 찾을 수 있습니다.

#### Settings 탭 {#survey-details-settings}

이 탭은 모든 상태의 미니 설문조사에 사용할 수 있습니다. **Survey ID**를 포함한 설문조사 세부 정보의 개요를 제공합니다.

#### Responses 탭 {#responses}

이 탭은 **Active** 또는 **Finished** 상태의 미니 설문조사에 사용할 수 있습니다.

### Settings 페이지 {#settings}

**Survey Overview** 페이지의 오른쪽 상단에서 {{% icon name="cog" %}} **Settings**를 클릭하면 **Settings** 페이지가 열립니다. **Survey Locations**와 **API Key** 두 개의 탭이 있습니다.

#### 설문조사 위치 {#survey-locations}

**Survey Locations** 탭에서 설문조사 위치를 생성하고 관리할 수 있습니다.

#### API Key

**API Key** 탭에서 API 키를 보거나 생성할 수 있습니다.

## 미니 설문조사 실행

### 미니 설문조사 생성 {#create-survey}

처음 온보딩을 완료하면 Mendix가 미니 설문조사를 테스트할 수 있는 데모 설문조사를 생성합니다. 새 미니 설문조사를 생성하려면 다음 단계를 따르세요:

1. [앱(Apps)](https://sprintr.home.mendix.com/)에서 앱을 열고 사이드바에서 **Mini Surveys**를 클릭합니다.
2. **Create New Survey**를 클릭하여 설문조사 마법사를 시작합니다.
3. 미니 설문조사에 대한 정보를 입력합니다: **Context**, **Questions**, **Finalize**.
4. **Preview**를 클릭하여 미니 설문조사가 실제로 어떻게 보이는지 확인합니다.
5. 미리보기가 좋으면 **Schedule Survey**를 클릭하여 설문조사 생성을 완료합니다.

### 미니 설문조사 편집 {#edit-survey}

미니 설문조사를 편집하려면 [Survey Overview](#survey-overview) 페이지에서 편집할 미니 설문조사를 클릭하고 [상태](#survey-status)에 따라 다른 부분을 편집할 수 있습니다.

### 미니 설문조사 구현 {#implement-survey}

미니 설문조사의 시작 시간에 도달하기 전에 Studio Pro에서 설문조사를 구현해야 합니다.

#### API 키 획득 {#obtain-api-key}

구현을 위한 API 키를 얻으려면 [Settings](#settings) 페이지의 **API Key** 섹션을 확인하세요.

#### 모듈 설치 및 구성

[Mendix 미니 설문조사](/appstore/modules/mendix-mini-surveys/) 모듈을 설치하려면 Studio Pro에서 앱을 열고 지침을 따르세요.

### 응답 보기 또는 내보내기 {#view-export-responses}

미니 설문조사에 대해 설정한 시작 시간에 도달하면 설문조사가 자동으로 실행되기 시작합니다. 수집된 응답 수에 대한 [알림](/portal/global-navigation/#notifications)을 받게 됩니다.

### 설문조사 옵트아웃 규칙

사용자는 설문조사를 옵트아웃할 수 있습니다. 옵트아웃되면 사용자가 완료하지 않았더라도 설문조사가 더 이상 해당 사용자에게 나타나지 않습니다.

### 미완성 설문조사

사용자가 미니 설문조사를 닫기 전에 한두 개의 질문에만 답한 경우 답변이 앱에 저장됩니다. 15분마다 예약된 이벤트가 앱에 수집된 모든 미완성 설문조사를 **앱(Apps)**의 **Mini Surveys**에 제출합니다.

## 문제 해결 및 FAQ

문제 해결 정보 및 FAQ는 *Mendix 미니 설문조사*의 [문제 해결](/appstore/modules/mendix-mini-surveys/#troubleshooting) 섹션과 [FAQ](/appstore/modules/mendix-mini-surveys/#faq) 섹션을 참조하세요.
