---
title: "레이아웃과 스니펫 사용하기"
url: /howto8/front-end/layouts-and-snippets/
weight: 30
---

## 소개

이 문서에서는 레이아웃과 스니펫을 사용하여 페이지를 만드는 기본 방법을 다룹니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 스타일 레이아웃 만들기
* 스니펫 만들기

## 레이아웃

이 섹션에서는 레이아웃의 구성 요소와 그 가치를 설명합니다.

### 페이지 구성 요소

페이지를 보면 두 가지 중요한 구성 요소로 이루어져 있음을 알 수 있습니다:

* 레이아웃 — 페이지의 구조 (PowerPoint에 하나 이상의 레이아웃 프리셋이 있는 것과 같음)
* 콘텐츠 — 페이지 구조 내에 표시되는 내용

페이지를 모델링할 때 페이지가 생성될 때 레이아웃을 선택합니다.

### 레이아웃의 가치

레이아웃은 사용자 인터페이스를 구조화하는 데 사용됩니다. 기본 페이지 구조를 정의하고 페이지의 템플릿으로 재사용할 수 있습니다. 이 구조를 사용하여 최종 사용자에게 애플리케이션이 표시되는 방식을 디자인할 수 있습니다. 모범 사례는 앱 모델링을 시작하기 전에 UI 구조를 미리 정의하는 것입니다. 빈 레이아웃이 있지만 이것은 레이아웃의 기본 설정이며, 미리 정의된 레이아웃 구조를 사용할 수 있습니다.

사용할 수 있는 미리 정의된 레이아웃 구조는 다음과 같습니다:

* DesktopLayout
    * 로고와 메뉴 바가 있는 헤더 표시용
    * 콘텐츠 플레이스홀더 사용
    * 텍스트가 있는 푸터 사용
* PopupLayout
    * 콘텐츠 플레이스홀더만 포함

대부분의 사용자는 데스크톱 사용자를 위한 애플리케이션 인터페이스를 만드는 것부터 시작하지만, 모바일 및 태블릿 사용자를 위해 앱을 쉽게 확장할 수 있습니다. 각 디바이스에 대해 해당 디바이스 유형의 특정 레이아웃 요구 사항에 맞는 레이아웃 세트를 만들 수 있습니다. 디바이스별 레이아웃이 생성되면 디바이스별 페이지를 만드는 템플릿으로 사용할 수 있습니다:

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/layout-compare.png" class="no-border" >}}

## 스타일링

레이아웃 외에도 애플리케이션은 고객 브랜드와 일치하는 색상 체계와 같은 특정 룩 앤 필을 가져야 합니다. 이는 CSS/Bootstrap과 CSS 파일을 통해 Mendix 페이지 요소에 연결된 미리 정의된 클래스 세트를 사용하여 수행됩니다. 이 부분의 애플리케이션 디자인은 많은 유연성을 허용하지만, 고급 프로세스이며 특정 CSS 및 HTML 지식이 필요합니다. 이 사용 방법 가이드의 현재 범위에서는 기본 스타일링을 사용합니다.

### 새 레이아웃 만들기

이미 언급했듯이 기본 앱을 개발할 때 기본적인 요구 사항에 맞는 미리 정의된 레이아웃 세트가 있습니다. 그러나 더 정교한 앱을 원하는 경우 더 고급 레이아웃 설정이 필요할 수 있습니다. 다음 섹션에서는 새 레이아웃을 만드는 기본 사항을 설명합니다.

### 레이아웃 위젯

이 섹션에서는 새 레이아웃을 만드는 데 사용되는 주요 요소에 대해 설명합니다. 이후 기본 디자인 접근 방식에 대해 논의합니다.

#### Layout Container

Layout Container는 레이아웃을 헤더, 사이드바, 푸터 등의 영역으로 나누는 데 사용됩니다. Layout Container는 유일한 최상위 위젯이어야 합니다. 또한 Layout Container는 다른 Layout Container에 직접 배치할 수만 있습니다.

#### Region

Region을 사용하면 Layout Container를 섹션으로 나누어 레이아웃 요소를 특정 고정 위치에 배치할 수 있습니다. 각 Region에는 플레이스홀더 또는 특정 위젯이 포함됩니다.

#### Placeholder

Placeholder는 레이아웃에서 해당 레이아웃을 기반으로 하는 페이지에서 채울 수 있는 영역을 정의하는 데 사용할 수 있으며, 해당 레이아웃을 기본 레이아웃으로 정의하는 다른 레이아웃에서도 채울 수 있습니다.

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/placeholders.png" class="no-border" >}}

영역이 페이지에서 채워지면 해당 페이지에 지정된 동적 데이터를 표시하는 해당 페이지의 콘텐츠 영역이 됩니다. 레이아웃이 다른 레이아웃을 상속받을 때 영역을 새 Layout Container로 채워 이 특수 레이아웃을 정의할 수 있습니다. 비워 둘 수도 있으며, 그러면 페이지에서 채워집니다.

#### 상속

레이아웃은 다른 레이아웃을 기반으로 할 수도 있으며, 이 맥락에서 이를 "기본 레이아웃"이라고 합니다. 레이아웃이 기본 레이아웃을 기반으로 하는 경우, 레이아웃은 기본 레이아웃에서 정의한 영역을 채우고 Placeholder를 사용하여 새 영역을 정의할 수 있습니다. 기본 레이아웃을 기반으로 한 레이아웃을 사용하는 페이지는 해당 레이아웃에서 정의한 영역만 볼 수 있으며, 기본 레이아웃의 영역은 볼 수 없습니다.

## 데스크톱, 태블릿 또는 모바일?

생성된 HTML이 HTML5이므로 모든 페이지를 모든 디바이스 유형에서 열 수 있습니다. 그러나 각 디바이스에는 고유한 UI 디자인 요구 사항이 있습니다. 따라서 해당 디바이스 유형의 요구 사항에 맞는 디바이스 유형별 레이아웃 세트를 정의하는 것이 논리적입니다.

기본적으로 데스크톱과 휴대폰 레이아웃이 기본 제공되며, 레이아웃의 디자인은 필요에 따라 사용자 정의할 수 있습니다. 기본 레이아웃을 변경 및 확장할 수 있으며 필요에 따라 새 레이아웃을 만들 수도 있습니다.

이러한 레이아웃을 디자인할 때 주의하십시오. 예를 들어, 모바일 앱에서는 너무 많은 영역을 두지 않아야 합니다. 그렇지 않으면 디자인이 복잡하고 최종 사용자에게 혼란스러워 보일 것입니다. 반면에 데스크톱 애플리케이션은 더 많은 콘텐츠를 표시하고 세부 정보를 나타낼 수 있는 다른 영역이 필요할 수 있습니다.

### 레이아웃 예제 {#layout-examples}

레이아웃 예제는 다음과 같습니다:

* 반응형/데스크톱 페이지를 위한 기본 레이아웃:

    {{< figure src="/attachments/howto8/front-end/layouts-and-snippets/basic-desktop.png" class="no-border" >}}

* 모바일 페이지를 위한 기본 레이아웃:

    {{< figure src="/attachments/howto8/front-end/layouts-and-snippets/basic-mobile.png" class="no-border" >}}

* 메뉴가 추가된 기본 레이아웃:

    {{< figure src="/attachments/howto8/front-end/layouts-and-snippets/primary.png" class="no-border" >}}

{{% alert color="info" %}}

캔버스 너비를 조정하면 Studio Pro에서 페이지의 최종 사용자 보기를 에뮬레이트할 수 있습니다. 예를 들어, 데스크톱 레이아웃의 캔버스 너비는 800이고 기본 휴대폰 레이아웃의 너비는 500입니다. 캔버스 너비 속성은 Studio Pro의 보기에만 적용되며, 페이지의 실제 너비는 열린 브라우저 또는 선택적 팝업 창 크기에 따라 달라집니다.

{{% /alert %}}

Layout Container로 레이아웃의 구조를 정의한 후 Region의 콘텐츠를 정의해야 합니다. 이는 페이지별로 페이지 특정 요소(예: 빈 영역에 데이터 위젯 추가)를 사용하거나, 이 레이아웃을 사용하는 모든 페이지에서 사용할 요소를 정의하기 위해 레이아웃 내에서 수행할 수 있습니다. 일반적으로 이는 일반 앱 내비게이션이거나 특정 기능에 대한 특정 내비게이션입니다. 소스가 필요한 데이터 및 입력 위젯을 제외한 모든 위젯을 사용할 수 있습니다.

가장 유용한 위젯 유형 두 가지는 메뉴 위젯과 스니펫입니다. 아래에서 이 두 유형에 대해 자세히 알아보겠습니다.

## 메뉴 위젯

### 메뉴 바

메뉴 바 위젯은 구성된 메뉴를 항목이 있는 수평 바 형태로 표시합니다. 항목에는 하위 항목이 있을 수 있으며 메뉴의 주요 항목을 확장할 수 있습니다. 하위 항목은 한 단계만 깊어질 수 있습니다 (하위 항목에는 자체 하위 항목이 있을 수 없음). 메뉴 항목은 항목을 클릭하면 열리거나 시작되는 페이지 또는 Microflow를 가리킵니다.

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/menu-bar.png" class="no-border" >}}

### 내비게이션 트리

내비게이션 트리 위젯은 구성된 메뉴를 트리 형태로 표시합니다. 주요 항목이 확장되면 항목에 하위 항목이 있을 수 있습니다. 내비게이션 트리의 메뉴 구조는 최대 세 단계까지 가능합니다. 궁극적으로 메뉴 항목은 항목을 클릭하면 열리거나 시작되는 페이지 또는 Microflow를 가리킵니다.

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/nav-tree.png" class="no-border" >}}

### 간단한 메뉴 바

간단한 메뉴 바 위젯은 구성된 메뉴를 이미지와 캡션이 있는 수평 바 형태로 표시합니다. 항목에는 하위 항목이 있을 수 없습니다 (메뉴 구조는 한 단계만 가능). 메뉴 항목은 항목을 클릭하면 열리거나 시작되는 페이지 또는 Microflow를 가리킵니다.

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/simple-menu.png" class="no-border" >}}

### 메뉴 소스

메뉴 위젯에 표시되는 항목은 메뉴 소스에 의해 결정됩니다. 메뉴 위젯은 **Navigation** 문서에서 구성된 메뉴 또는 **Menu** 페이지 리소스에서 채워집니다:

* **Project** > **Navigation** — 선택하면 이 문서에서 정의된 메뉴 중 하나에서 메뉴 항목을 가져옵니다. 애플리케이션의 메인 메뉴에 사용하십시오
* **Add Other** > **Menu** — 선택하면 이 페이지 리소스에서 메뉴 항목을 가져옵니다. 보조 메뉴에 사용하십시오

프로젝트 내비게이션을 소스로 선택한 경우 올바른 내비게이션 메뉴를 위해 디바이스 프로필을 결정해야 합니다:

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/edit-menu-bar.png" class="no-border" >}}

데스크톱의 경우 **Responsive** 메뉴를 사용하십시오.

태블릿 및 휴대폰 구성의 경우 적절한 프로필 유형을 선택해야 합니다. 자세한 내용은 아래 [디바이스 프로필](#profiles) 섹션을 참조하십시오.

### 프로젝트 내비게이션

**Navigation** 문서는 최종 사용자를 위한 애플리케이션의 주요 내비게이션 구조를 정의합니다. 애플리케이션의 홈 페이지를 설정하고 메뉴 위젯에서 사용할 메뉴 구조를 정의할 수 있습니다. 홈 페이지는 사용자가 가진 역할에 따라 다를 수 있습니다. 보안이 활성화되면 메뉴는 사용자가 접근 권한이 있는 항목만 표시합니다.

### 디바이스 프로필 {#profiles}

Mendix의 내비게이션 모델의 핵심에는 세 가지 디바이스 유형이 있습니다: Desktop, Tablet, Phone. 이 세 가지 디바이스 각각에 대해 별도의 홈 페이지와 메뉴를 정의할 수 있습니다. Desktop 디바이스 유형은 항상 활성화되며, 다음 Tablet 및 Phone 프로필을 활성화하거나 비활성화할 수 있습니다:

* **Hybrid tablet app online**
* **Hybrid tablet app offline**
* **Hybrid phone app online**
* **Hybrid phone app offline**
* **Tablet browser**
* **Phone browser**

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/device-profiles.png" class="no-border" >}}

사용자가 Mendix 애플리케이션을 방문하면 적절한 디바이스 유형의 홈 페이지로 자동 리디렉션됩니다 (자세한 내용은 [디바이스 유형으로의 리디렉션](#RedirectiontoDeviceTypes) 섹션을 참조하십시오).

내비게이션 프로필에 대한 자세한 내용은 [Mendix의 Navigation](/refguide8/navigation/)을 참조하십시오.

### 메뉴 문서

메뉴 문서는 메뉴 위젯에서 사용할 수 있는 내비게이션 메뉴를 정의합니다. 일반적으로 애플리케이션의 기본 메뉴는 디바이스 유형에서 정의되며, 보조 메뉴(예: 사이드바)에는 메뉴 문서를 사용합니다. 메뉴는 선택적으로 하위 항목을 포함하는 메뉴 항목 목록으로 구성됩니다. 위젯에 따라 허용되는 단계 수가 다릅니다.

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/menu-document.png" class="no-border" >}}

### 디바이스 유형으로의 리디렉션 {#RedirectiontoDeviceTypes}

Mendix Runtime은 디바이스가 사용 중인 것을 기반으로 사용자를 적절한 디바이스 유형의 홈 페이지로 자동으로 리디렉션합니다. 이는 디바이스의 브라우저가 보내는 `User-Agent` 문자열을 검사하여 수행됩니다. 리디렉션의 기본 구성은 다음과 같습니다:

| User-Agent 문자열 정규 표현식 | 디바이스 유형 |
| ------------------------------------ | ----------- |
| `Android.*Mobile` 또는 `iPhone`             | Phone       |
| `Android` 또는 `iPad`                       | Tablet      |
| (기타)                              | Desktop     |

특정 사용자 인터페이스에 대한 문자열은 서버 사용자 정의 설정 내에서도 구성할 수 있습니다 (이는 더 고급이며 여기서는 다루지 않습니다).

디바이스 유형이 활성화되지 않은 경우 다른 디바이스 유형으로 폴백합니다:

| 디바이스 유형 | 폴백                             |
| ----------- | ------------------------------------ |
| Phone       | Tablet, Desktop                      |
| Tablet      | Phone, Desktop                       |
| Desktop     | (없음, Desktop은 항상 활성화됨) |

URL에 `profile` 쿼리 문자열 매개변수를 추가하여 Mendix 애플리케이션 방문 시 클라이언트가 특정 디바이스 유형을 사용하도록 강제할 수도 있습니다. 가능한 값은 `Desktop`, `Tablet`, `Phone`입니다.

## 스니펫

스니펫은 페이지와 레이아웃에서 사용할 수 있는 재사용 가능한 인터페이스 부분입니다. 스니펫을 사용하면 Mendix 비즈니스 엔지니어가 인터페이스에서 더 적은 곳을 수정할 수 있으며, 더 원활한 전환과 사용자 친화적인 경험을 제공합니다. 예를 들어, 템플릿 그리드의 콘텐츠 영역과 Data View 모두에서 사용되는 스니펫을 가질 수 있습니다. 스니펫에 대한 변경 사항은 스니펫이 사용되는 모든 곳에 적용됩니다.

또한 스니펫은 그 안에 배치된 위젯의 컨텍스트 역할을 하는 Entity를 정의할 수 있습니다. 예를 들어, 스니펫에 *Course* Entity를 설정하면 Data View를 먼저 정의하지 않고도 스니펫에 *Course Title*을 표시하는 텍스트 상자를 배치할 수 있습니다. 스니펫에 Entity가 정의되면 스니펫을 사용하는 각 위치에서 해당 Entity의 컨텍스트(예: Data View) 안에 배치해야 합니다.

{{< figure src="/attachments/howto8/front-end/layouts-and-snippets/snippet.png" class="no-border" >}}

## 더 읽기

* [Atlas UI](/howto8/front-end/atlas-ui/)
* [레이아웃과 스니펫 사용하기](/howto8/front-end/layouts-and-snippets/)
* [내비게이션 구조 설정하기](/howto8/general/setting-up-the-navigation-structure/)
* [첫 번째 개요 및 상세 페이지 만들기](/howto8/front-end/create-your-first-two-overview-and-detail-pages/)
* [런타임 오류의 근본 원인 찾기](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
