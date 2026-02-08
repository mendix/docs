---
title: "페이지"
url: /refguide8/pages/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document also has a redirect from opening-pages (which has been deleted)
---

## 소개

페이지는 Mendix 애플리케이션의 기본 최종 사용자 인터페이스입니다. 최종 사용자에게 정보를 표시하고, 정보를 생성 및 편집할 수 있도록 하며, 추가적인 자동화 처리를 실행할 수 있도록 하는 데 사용됩니다.

페이지는 페이지 편집기에서 생성, 편집 및 조작됩니다.

모든 페이지는 페이지 [레이아웃](/refguide8/layout/)과 페이지 템플릿을 기반으로 합니다. 레이아웃은 페이지를 넣는 프레임입니다. 페이지 템플릿은 미리 정의된 요소(위젯)가 포함된 기초입니다.

{{< figure src="/attachments/refguide8/modeling/pages/page-structure.png" class="no-border" >}}

페이지는 서로 연결될 수 있어 한 페이지에서 다른 페이지를 열 수 있습니다. 두 번째 페이지에 페이지 매개변수 데이터 소스가 포함된 [데이터 위젯](/refguide8/data-widgets/)이 있는 경우, 현재 페이지에서 새 페이지로 객체를 전달할 수 있습니다. 페이지 열기 및 기타 종류의 이벤트 트리거에 대한 자세한 내용은 [클릭 이벤트 및 이벤트 섹션](/refguide8/on-click-event/)을 참조하세요.

페이지는 브라우저의 현재 패널 또는 팝업 자식 창에서 열립니다. 페이지가 열리는 위치는 [레이아웃 유형](/refguide8/layout/#layout-type)에 따라 결정됩니다. Mendix는 최대한 효율적으로 내비게이션을 수행합니다. 새 페이지가 이전 페이지와 동일한 레이아웃을 사용하는 경우, 전체 페이지를 처음부터 구축하는 대신 페이지의 데이터만 새로 고칩니다.

페이지 속성에 대한 자세한 내용은 [페이지](/refguide8/page/)를 참조하세요.

## 페이지 및 페이지 리소스

페이지 외에도 페이지 편집기에서 페이지 리소스를 추가할 수 있습니다. 페이지 리소스는 페이지를 구조화하고, 스타일을 지정하며, 데이터로 채우는 데 도움을 줍니다. 페이지 리소스를 추가하는 방법에 대한 자세한 내용은 [페이지 리소스](/refguide8/page-resources/)를 참조하세요.

유형 | 설명
--- | ---
[{{< figure src="/attachments/refguide8/modeling/pages/layout-icon.png" class="no-border" >}}Layout](/refguide8/layout/) | [레이아웃](/refguide8/layout/)은 페이지가 배치되는 프레임입니다. 레이아웃을 변경하면 이를 기반으로 하는 모든 페이지가 변경 사항을 상속합니다. <br />레이아웃에는 하나의 플랫폼에서 애플리케이션의 통일되고 일관된 외관과 느낌을 보장하는 미리 정의된 요소가 포함됩니다: 헤더의 위치, 로고의 크기, 메뉴의 위치 등. 예를 들어, 반응형 레이아웃에서는 헤더가 넓고 큰 로고를 가질 수 있지만, 모바일 레이아웃에서는 제한된 공간으로 인해 헤더가 좁고 로고가 작아집니다.
[{{< figure src="/attachments/refguide8/modeling/pages/page-template-icon.png" class="no-border" >}}Page template](/refguide8/page-templates/) | [페이지 템플릿](/refguide8/page-templates/)은 페이지의 구조를 미리 정의하는 기초입니다. 예를 들어, 이미지가 포함된 리스트 뷰가 있는 고객 목록용 페이지 템플릿을 만들 수 있습니다. 따라서 유사한 목록이 있는 페이지를 만들어야 할 때마다 이 템플릿을 기반으로 합니다. 공통 디자인 패턴을 매핑하면 적절한 페이지 템플릿 세트를 설정하여 새 페이지를 만드는 데 수반되는 초기 작업의 상당 부분을 단순화할 수 있습니다.
[{{< figure src="/attachments/refguide8/modeling/pages/snippet-icon.png" class="no-border" >}}Snippet](/refguide8/snippet/) | [Snippet](/refguide8/snippet/)은 재사용 가능한 인터페이스 부분을 정의합니다. 페이지와 레이아웃에서 사용할 수 있습니다. Snippet을 사용하면 인터페이스를 수정할 때 더 적은 곳에서 변경할 수 있습니다. 예를 들어, 템플릿 그리드의 콘텐츠 영역과 데이터 뷰에서 모두 사용되는 Snippet이 있을 수 있습니다. Snippet의 테이블에 행을 추가하면 해당 변경 사항이 두 곳 모두에 나타납니다.
[{{< figure src="/attachments/refguide8/modeling/pages/building-block-icon.png" class="no-border" >}}Building block](/refguide8/building-block/) | [Building block](/refguide8/building-block/)은 미리 스타일이 적용된 위젯 세트입니다. Building block은 페이지 편집기 도구 상자에 자동으로 나타나 쉽게 재사용할 수 있습니다. 포괄적인 Building block 라이브러리를 디자인하면 페이지 디자인에 수반되는 번거로운 작업의 상당 부분을 피할 수 있습니다.
[{{< figure src="/attachments/refguide8/modeling/pages/page-icon.png" class="no-border" >}}Page](/refguide8/page/) | [페이지](/refguide8/page/)는 Mendix 애플리케이션의 최종 사용자 인터페이스입니다. 페이지는 실제로 최종 사용자에게 보여지는 것입니다.
[{{< figure src="/attachments/refguide8/modeling/pages/menu-icon.png" class="no-border" >}}Menu](/refguide8/menu/) | [메뉴](/refguide8/menu/)는 메뉴 위젯에서 사용할 수 있는 메뉴 구조를 정의합니다.
[{{< figure src="/attachments/refguide8/modeling/pages/image-collection-icon.png" class="no-border" >}}Image collection](/refguide8/image-collection/) | [이미지 컬렉션](/refguide8/image-collection/)은 애플리케이션에서 사용할 커스텀 이미지를 배치하는 페이지 리소스입니다. 자세한 내용은 [이미지](/refguide8/images/)를 참조하세요.

## 위젯 및 위젯 카테고리 {#widgets-categories}

위에 설명된 모든 문서는 위젯을 사용하여 구축됩니다. 위젯에는 다양한 종류가 있으며, 모든 문서 유형에서 모든 위젯을 사용할 수 있는 것은 아닙니다. 레이아웃은 페이지에 구조를 제공하는 위젯을 지원하지만, 데이터를 표시하는 위젯은 지원하지 않습니다. 이는 레이아웃의 의도를 명확히 하기 위한 것입니다: 레이아웃은 무엇이 어디에 오는지를 정의해야 하며 그 이상은 아닙니다. 그러나 레이아웃에 Snippet을 배치할 수 있으며, 이는 레이아웃에 더 많은 종류의 위젯을 포함하는 간접적인 방법입니다.

위젯은 다음 카테고리로 그룹화됩니다:

* [데이터 위젯](/refguide8/data-widgets/)은 Mendix에서 폼을 구축하는 데 핵심적입니다; 이 위젯으로 애플리케이션의 데이터를 보고 편집할 수 있습니다
* [공통 위젯](/refguide8/common-widgets/)은 모든 페이지, 레이아웃 또는 Snippet에서 일반적으로 사용됩니다
* [컨테이너 위젯](/refguide8/container-widgets/)은 다른 위젯을 포함할 수 있습니다
* [입력 위젯](/refguide8/input-widgets/)은 속성 및 연관(Association)의 값을 표시하고 편집할 수 있게 합니다
* [파일 위젯](/refguide8/file-widgets/)을 사용하면 파일에 저장된 이미지를 포함한 파일 작업을 수행할 수 있습니다
* [버튼 위젯](/refguide8/button-widgets/)은 액션을 트리거하는 버튼입니다
* [메뉴 위젯](/refguide8/menu-widgets/)은 사용자가 애플리케이션을 탐색할 수 있게 합니다
* [리포트 위젯](/refguide8/report-widgets/)은 데이터를 집계하여 테이블 또는 차트 형태로 표시합니다
* [인증 위젯](/refguide8/authentication-widgets/)은 비밀번호 및 로그인 ID 텍스트 박스와 같은 사용자 인증 프로세스를 추가할 수 있습니다.
* 애드온 위젯은 [Mendix Marketplace](https://marketplace.mendix.com/)에서 다운로드하거나 JavaScript를 사용하여 직접 만들 수 있습니다
    * [차트 위젯](/refguide8/chart-widgets/)은 다양한 차트 유형을 사용하여 데이터를 그래픽으로 표현하는 애드온 위젯입니다

## 추가 참조

* [페이지 리소스](/refguide8/page-resources/)
* [페이지](/refguide8/page/)
