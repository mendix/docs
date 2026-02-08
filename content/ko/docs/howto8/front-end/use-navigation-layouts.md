---
title: "내비게이션 레이아웃 사용하기"
url: /howto8/front-end/use-navigation-layouts/
weight: 12
description: "이 가이드는 내비게이션 레이아웃 사용 방법을 설명합니다."
---

## 소개

이 문서에서는 내비게이션 레이아웃을 사용하는 기본 방법을 다룹니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 올바른 내비게이션 레이아웃 선택하기
* 상단 내비게이션과 좌측 내비게이션의 차이점 이해하기
* 사이드바 토글 구성하기

## 올바른 내비게이션 레이아웃 선택하기

Mendix로 앱을 구축할 때 가장 먼저 결정해야 할 것은 어떤 내비게이션 레이아웃을 선택할 것인지입니다. 이러한 레이아웃은 동적 페이지가 포함되는 프레임이며, 앱 전체에서 일관된 구조를 제공합니다.

레이아웃은 어디에 무엇이 배치될지를 지정합니다. 각 페이지는 레이아웃을 기반으로 하며, 레이아웃에는 해당 레이아웃을 기반으로 하는 모든 페이지에서 반복적으로 나타나는 위젯과 구조가 포함됩니다.

Mendix의 Atlas UI는 선택할 수 있는 두 가지 고유한 웹 레이아웃을 제공합니다: Atlas Default와 Atlas Topbar입니다.

### Atlas Default

Atlas의 기본 레이아웃은 웹, 태블릿, 모바일 기기에서 모두 사용할 수 있는 반응형 레이아웃입니다:

{{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.1_atlasdefault.png"   width="350"  class="no-border" >}}

세 가지 영역이 있습니다: 상단, 좌측, 중앙. 상단 영역에는 애플리케이션의 브랜드 로고, 좌측 영역에는 내비게이션 메뉴, 중앙 영역에는 동적 콘텐츠가 포함됩니다:

{{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.1_atlasdefaultregions.png"   width="350"  class="no-border" >}}

Atlas Default의 내비게이션 메뉴는 토글 메뉴입니다. 이 토글 메뉴의 옵션은 **콘텐츠 축소 (초기 열림)** 또는 **콘텐츠 축소 (초기 닫힘)**입니다:

* **콘텐츠 축소 (초기 열림)** — 내비게이션 메뉴는 처음에 최대 너비로 열려 메뉴 항목의 설명과 아이콘을 모두 표시합니다. 토글하면 최소 너비로 이동하여 메뉴 항목의 아이콘만 표시합니다. 페이지 콘텐츠(중앙 영역)도 열린 메뉴를 위한 공간을 확보하기 위해 처음부터 축소됩니다:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.1_shrinkingcontentopenoption.gif"   width="350"  class="no-border" >}}

* **콘텐츠 축소 (초기 닫힘)** — 내비게이션 메뉴는 처음에 최소 너비로 닫혀 메뉴 항목의 아이콘만 표시합니다. 토글하면 최대 너비로 이동하여 메뉴 항목의 아이콘과 설명을 모두 표시합니다. 페이지 콘텐츠(중앙 영역)는 처음에 축소되지 않지만 사이드바를 토글하면 축소됩니다:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.1_shrinkingcontentclosedoption.gif"   width="350"  class="no-border" >}}

### Atlas TopBar

Atlas의 TopBar 레이아웃은 웹, 태블릿, 모바일 기기에서 모두 사용할 수 있는 반응형 레이아웃입니다:

{{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.2_atlastopbar.png"   width="350"  class="no-border" >}}

세 가지 영역이 있습니다: 상단, 좌측, 중앙. 상단 영역에는 브랜드 로고와 내비게이션 메뉴가 모두 포함됩니다. 좌측 영역에도 내비게이션 메뉴가 있지만 휴대폰 화면 크기에서만 표시됩니다. 해당 화면 크기에서는 상단 영역의 내비게이션 메뉴가 숨겨지고 좌측 영역의 열림/닫힘을 트리거하는 햄버거 토글로 대체됩니다. 중앙 영역에는 앱의 동적 콘텐츠가 포함됩니다:

{{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.2_atlastopbarregions.png"   width="350"  class="no-border" >}}

사이드바 옵션(Atlas Default와 달리)은 휴대폰 화면 크기에서만 적용됩니다. 사이드바를 토글하는 두 가지 옵션이 있습니다: **콘텐츠 위로 슬라이드**와 **콘텐츠를 옆으로 밀기**:

* **콘텐츠 위로 슬라이드** — 사이드바가 콘텐츠 위에 오버레이되어 콘텐츠의 일부(사이드바 너비에 따라)를 숨깁니다:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.2_slidingovercontent.gif"   width="350"  class="no-border" >}}

* **콘텐츠를 옆으로 밀기** — 사이드바가 콘텐츠를 화면 밖으로 밀어냅니다:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.2_pushingcontentaside.gif"   width="350"  class="no-border" >}}

### 두 레이아웃 비교하기

두 레이아웃(Atlas Default와 Atlas Topbar) 중 어느 것이 적합한지 선택하는 것은 상단 내비게이션과 좌측 내비게이션 중 선택하는 것입니다. 아래 정보는 어떤 접근 방식이 사용자에게 더 적합한지 결정하는 데 도움이 됩니다. 아래 섹션에서는 앱이 왼쪽에서 오른쪽으로 읽는 사용자를 위해 설계된 것으로 가정하지만, Mendix는 향후 다른 언어 문화를 위한 더 많은 디자인 가이드와 옵션을 출시할 수 있습니다.

사용자를 위한 디자인에서는 맥락이 핵심입니다. 한 맥락에서 잘 작동하는 내비게이션이 다른 맥락에서는 그렇지 않을 수 있습니다. 앱에 가장 적합한 내비게이션을 결정하려면 상단 내비게이션과 좌측 내비게이션이 각각 가장 잘 작동하는 다양한 맥락을 이해하는 것이 중요합니다:

{{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.3_topvsleftnavigation.png"   width="350"  class="no-border" >}}

#### 스캐닝

좌측 내비게이션은 사용자가 더 빠르고 효율적으로 스캔할 수 있습니다. 단 세 번의 시각적 고정만으로 사용자는 좌측 내비게이션에서 6개 항목을 스캔하는 반면, 상단 내비게이션에서는 3개 항목만 스캔합니다. 좌측 내비게이션은 또한 사람들에게 자연스러운 수직 스캔 방향을 촉진하는 반면, 상단 내비게이션은 사람들이 읽을 때 주로 사용하는 수평 스캔 방향을 강제합니다.

#### 페이지 공간

상단 내비게이션은 좌측 내비게이션보다 더 많은 수직 페이지 공간을 절약합니다. 좌측 내비게이션을 사용하면 내비게이션 링크가 페이지의 왼쪽 열을 차지합니다. 이렇게 하면 페이지의 콘텐츠 영역이 축소되고 좁아져 콘텐츠를 위한 공간이 줄어듭니다. 반면 상단 내비게이션은 최소한의 수직 공간을 사용하여 페이지의 콘텐츠 영역을 콘텐츠로만 채울 수 있습니다.

#### 항목 우선순위

상단 내비게이션의 항목은 동일한 가중치를 갖지 않습니다. 가장 왼쪽 항목은 기본 시각 영역(왼쪽 상단)에 배치되어 다른 항목보다 더 많은 시각적 가중치를 갖습니다. 왼쪽 상단 영역의 항목은 더 많은 노출을 받으며 다른 항목보다 중요하게 인식되는 경우가 많습니다. 반면 좌측 내비게이션의 항목은 모두 왼쪽에 배치되어 있고 오른쪽에 대응하는 다른 항목이 없기 때문에 동일한 가중치를 갖습니다. 사용자가 왼쪽에서 오른쪽으로 항목을 읽기 때문에 항목 읽기의 우선순위 방향은 수직보다 수평이 더 강합니다.

#### 가시성

상단 내비게이션 항목은 항상 스크롤 없이 보이는 영역에 있고 찾기 쉽기 때문에 더 잘 보입니다. 좌측 내비게이션 항목은 항상 스크롤 없이 보이는 영역에 있지 않으며, 항목이 너무 많으면 일부가 스크롤 아래로 밀릴 수 있습니다. 상단 내비게이션은 일반적으로 헤더와 로고와 함께 표시되므로 찾기도 더 쉽습니다. 이 두 요소는 웹 페이지에서 시각적으로 두드러지는 객체입니다.

## 사이드바 구성하기

### 토글 사이드바를 콘텐츠 축소 (초기 열림)로 설정하기:

토글 사이드바를 콘텐츠 축소 (초기 열림)로 구성하려면 다음 단계를 따르십시오:

1. **Home_Web** 페이지의 페이지 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.1_pageproperties.png"   width="350"  class="no-border" >}}

2. **General** 탭에서 **Atlas_Default**를 레이아웃으로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.1_layoutselection.png"   width="350"  class="no-border" >}}

3. 그런 다음 브레드크럼에서 **Atlas_Default** 내비게이션 레이아웃으로 이동하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.1_breadcrumb.png"   width="350"  class="no-border" >}}

4. 좌측 사이드바의 영역 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.1_regionproperties.png"   width="350"  class="no-border" >}}

5. **General** 탭에서 **Shrinking content (initially open)**을 토글 모드로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.1_shrinkcontentopen.png"   width="350"  class="no-border" >}}

### 콘텐츠 축소 (초기 열림)를 위한 사이드바 토글하기

**콘텐츠 축소 (초기 열림)**를 위해 사이드바를 토글하려면 다음 단계를 따르십시오:

1. **Run Locally**를 클릭하여 앱을 실행하십시오.
2. 브라우저에서 토글 버튼을 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.2_toggleshrinkingcontentopenoption.gif"   width="350"  class="no-border" >}}

### 토글 사이드바를 콘텐츠 축소 (초기 닫힘)로 설정하기

토글 사이드바를 **콘텐츠 축소 (초기 닫힘)**로 구성하려면 다음 단계를 따르십시오:

1. **Home_Web** 페이지의 페이지 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.3_pageproperties.png"   width="350"  class="no-border" >}}

2. **General** 탭에서 **Atlas_Default**를 레이아웃으로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.3_layoutselection.png"   width="350"  class="no-border" >}}

3. 그런 다음 브레드크럼에서 **Atlas_Default** 내비게이션 레이아웃으로 이동하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.3_breadcrumb.png"   width="350"  class="no-border" >}}

4. 좌측 사이드바의 영역 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.3_regionproperties.png"   width="350"  class="no-border" >}}

5. **General** 탭에서 **Shrinking content (initially closed)**를 토글 모드로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.3_shrinkcontentclosed.png"   width="350"  class="no-border" >}}

### 콘텐츠 축소 (초기 닫힘)를 위한 사이드바 토글하기

1. **Run Locally**를 클릭하여 앱을 실행하십시오.
2. 브라우저에서 토글 버튼을 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.4_toggleshrinkingcontentclosedoption.gif"   width="350"  class="no-border" >}}

### 토글 사이드바를 콘텐츠를 옆으로 밀기로 설정하기

토글 사이드바를 **콘텐츠를 옆으로 밀기**로 구성하려면 다음 단계를 따르십시오:

1. Home_Web 페이지의 페이지 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.5_pageproperties.png"   width="350"  class="no-border" >}}

2. **General** 탭에서 **Atlas_Topbar**를 레이아웃으로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.5_layoutselection.png"   width="350"  class="no-border" >}}

3. 브레드크럼에서 **Atlas_Topbar** 내비게이션 레이아웃으로 이동하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.5_breadcrumb.png"   width="350"  class="no-border" >}}

4. 좌측 사이드바의 영역 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.5_regionproperties.png"   width="350"  class="no-border" >}}

5. **General** 탭에서 **Push content aside**를 토글 모드로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.5_pushcontentaside.png"   width="350"  class="no-border" >}}

6. 선택적으로 **Width**를 **Percentage**로 변경하고 **Width value**에 *80*을 입력할 수 있습니다:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.7_changewidth.png"   width="350"  class="no-border" >}}

### 콘텐츠를 옆으로 밀기를 위한 사이드바 토글하기

콘텐츠를 옆으로 밀기를 위해 사이드바를 토글하려면 다음 단계를 따르십시오:

1. **Run Locally**를 클릭하여 앱을 실행하십시오.
2. 브라우저에서 웹 페이지를 마우스 오른쪽 버튼으로 클릭하고 **검사**를 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.6_inspector.png"   width="350"  class="no-border" >}}

3. 디바이스 툴바 토글을 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.6_toggledevicetoolbar.png"   width="350"  class="no-border" >}}

4. 에뮬레이트된 디바이스를 **iPhoneX** 또는 동급 모바일 디바이스로 변경하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.6_selectdevicesize.png"   width="350"  class="no-border" >}}

5. 에뮬레이트된 디바이스의 브라우저 창에서 토글 버튼을 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.2_pushingcontentaside.gif"   width="350"  class="no-border" >}}

### 토글 사이드바를 콘텐츠 위로 슬라이드로 설정하기

토글 사이드바를 **콘텐츠 위로 슬라이드**로 구성하려면 다음 단계를 따르십시오:

1. **Home_Web** 페이지의 페이지 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.7_pageproperties.png"   width="350"  class="no-border" >}}

2. **General** 탭에서 **Atlas_Topbar**를 레이아웃으로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.7_layoutselection.png"   width="350"  class="no-border" >}}

3. 브레드크럼에서 **Atlas_Topbar** 내비게이션 레이아웃으로 이동하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.5_breadcrumb.png"   width="350"  class="no-border" >}}

4. 좌측 사이드바의 영역 속성을 여십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.7_regionproperties.png"   width="350"  class="no-border" >}}

5. **General** 탭에서 **Slide over content**를 토글 모드로 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.7_slideovercontent.png"   width="350"  class="no-border" >}}

6. 선택적으로 **Width**를 **Percentage**로 변경하고 **Width value**에 *80*을 입력하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.7_changewidth.png"   width="350"  class="no-border" >}}

### 콘텐츠 위로 슬라이드를 위한 사이드바 토글하기

**콘텐츠 위로 슬라이드**를 위해 사이드바를 토글하려면 다음 단계를 따르십시오:

1. **Run Locally**를 클릭하여 앱을 실행하십시오.
2. 브라우저에서 웹 페이지를 마우스 오른쪽 버튼으로 클릭하고 **검사**를 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.8_inspector.png"   width="350"  class="no-border" >}}

3. 디바이스 툴바 토글을 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.8_toggledevicetoolbar.png"   width="350"  class="no-border" >}}

4. 에뮬레이트된 디바이스를 **iPhoneX** 또는 동급 모바일 디바이스로 변경하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/3.8_selectdevicesize.png"   width="350"  class="no-border" >}}

5. 에뮬레이트된 디바이스의 브라우저 창에서 토글 버튼을 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/use-navigation-layouts/2.2_slidingovercontent.gif"   width="350"  class="no-border" >}}

## 더 읽기

* Atlas UI 프레임워크에 대한 자세한 내용은 [Atlas UI](https://atlas2.mendix.com/) 페이지를 확인하십시오
* 직접 내비게이션 레이아웃을 만드는 방법에 대한 자세한 내용은 *레이아웃과 스니펫 사용 방법*의 [레이아웃 예제](/howto8/front-end/layouts-and-snippets/#layout-examples) 섹션을 참조하십시오
