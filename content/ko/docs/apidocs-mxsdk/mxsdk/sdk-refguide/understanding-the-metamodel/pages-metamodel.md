---
title: "Mendix Metamodel의 페이지"
linktitle: "Metamodel의 페이지"
url: /apidocs-mxsdk/mxsdk/pages-metamodel/
weight: 3
description: "이 페이지에는 페이지, 레이아웃 및 페이지 콘텐츠가 어떻게 구성되는지에 대한 자세한 설명이 포함되어 있습니다."
---

## 개요

페이지의 메타모델에는 Studio Pro에서 페이지를 구축하는 데 도움이 되는 여러 문서 유형이 포함되어 있으며, 아래에 표시되어 있습니다.

앱의 실제 페이지를 나타내는 Page, Layout 및 Snippet이 있습니다. Page는 Layout을 기반으로 하며, 둘 다 Snippet을 사용하여 재사용 가능한 UI 조각을 가질 수 있습니다.

Page Template은 새 Page를 만들기 위한 시작점을 정의하고, Building Block은 페이지에 빠르게 구조를 추가하기 위한 작은 UI 조각입니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/DocumentOverview.svg" class="no-border" >}}

| Studio Pro 가이드                            | Model SDK API 문서                                                                                |
|---------------------------------------------|---------------------------------------------------------------------------------------------------|
| [페이지 개요](/refguide/pages/)          | [pages 네임스페이스](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/pages.html)              |
| [페이지](/refguide/page/)                     | [Page](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.page.html)                    |
| [레이아웃](/refguide/layout/)                 | [Layout](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layout.html)                |
| [스니펫](/refguide/snippet/)               | [Snippet](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippet.html)              |
| [페이지 템플릿](/refguide/page-templates/)  | [Page Template](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.pagetemplate.html)   |
| [빌딩 블록](/refguide/building-block/) | [Building Block](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.buildingblock.html) |

## 페이지와 레이아웃

레이아웃은 페이지의 기본 구조를 정의하며, 해당 레이아웃을 기반으로 하는 모든 페이지에 적용되는 위젯(Widget)과 구조를 포함합니다. 이 구조의 핵심 부분은 Placeholder 위젯(Widget)으로, 레이아웃이 페이지별 위젯(Widget)으로 채울 수 있는 구조를 정의합니다.

레이아웃의 콘텐츠는 네이티브 페이지용 레이아웃인지 웹 페이지용 레이아웃인지를 정의합니다. NativeLayoutContent가 있는 레이아웃을 기반으로 하는 모든 페이지는 네이티브 페이지가 되고, WebLayoutContent가 있는 레이아웃을 기반으로 하는 페이지는 웹 페이지가 됩니다. 두 유형의 콘텐츠 모두 레이아웃의 기본 구조를 정의하는 위젯(Widget) 목록을 포함합니다.

페이지는 LayoutCall을 통해 레이아웃을 사용합니다. 이는 레이아웃과 LayoutCallArgument를 정의합니다. LayoutCallArgument는 LayoutParameter로 레이아웃의 Placeholder 위젯(Widget)을 가리키며, 플레이스홀더를 채울 위젯(Widget) 목록을 정의합니다.

같은 방식으로, 웹 레이아웃도 WebLayoutContents 내부에 LayoutCall을 정의하여 마스터 레이아웃을 기반으로 할 수 있습니다. 레이아웃에 마스터 레이아웃이 있으면 직접 위젯(Widget)을 지정할 수 없으며, 대신 LayoutCallArgument를 사용합니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/PagesAndLayouts.svg" class="no-border" >}}

| Studio Pro 가이드                     | Model SDK API 문서                                                                                           |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------|
| [페이지](/refguide/page/)              | [Page](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Page.html)                               |
| [플레이스홀더](/refguide/placeholder/) | [Placeholder](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Placeholder.html)                 |
| [레이아웃](/refguide/layout/)          | [Layout](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Layout.html)                           |
|                                      | [LayoutCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutCall.html)                   |
|                                      | [LayoutCallArgument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutCallArgument.html)   |
|                                      | [LayoutParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutParameter.html)         |
|                                      | [WebLayoutContent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.WebLayoutContent.html)       |
|                                      | [NativeLayoutContent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.NativeLayoutContent.html) |

## 스니펫

스니펫은 더 유지 보수하기 쉬운 인터페이스를 만들 수 있게 해주는 재사용 가능한 인터페이스 부분으로, 페이지, 레이아웃, 심지어 다른 스니펫에서도 사용할 수 있습니다. 스니펫에 대한 변경 사항은 스니펫이 사용되는 모든 곳에 표시됩니다.

스니펫에는 위젯(Widget)이 포함되어 있으며, 스니펫 내에서 데이터를 사용하기 위해 하나 이상의 매개변수를 정의할 수 있습니다.

스니펫을 포함하려면 페이지, 레이아웃 또는 다른 스니펫에서 SnippetCallWidget을 사용해야 합니다. SnippetCallWidget에는 Snippet을 호출하고 스니펫의 각 매개변수에 대한 SnippetParameterMapping을 정의하는 SnippetCall이 있습니다.

SnippetParameterMapping은 데이터를 제공할 스니펫의 매개변수를 가리키며, 이 데이터가 어디서 오는지를 정의하는 PageVariable도 있습니다. 페이지 변수는 데이터 위젯(Widget), 페이지 매개변수 또는 스니펫 매개변수를 가리킬 수 있습니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/Snippets.svg" class="no-border" >}}

| Studio Pro 가이드              | Model SDK API 문서                                                                                                   |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [스니펫](/refguide/snippet/) | [Snippet](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Snippet.html)                                 | 
|                               | [SnippetCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SnippetCall.html)                         | 
|                               | [SnippetCallWidget](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SnippetCallWidget.html)             |
|                               | [SnippetParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SnippetParameter.html)               |
|                               | [SnippetParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SnippetParameterMapping.html) |
|                               | [PageVariable](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.PageVariable.html)                       |

## 컨테이너

컨테이너 위젯(Widget)은 다른 위젯(Widget)을 포함하는 데 사용되는 위젯입니다.

DivContainer는 특정 HTML 태그(기본값은 DIV)를 부여할 수 있는 간단한 컨테이너로, 위젯(Widget) 그룹을 동시에 스타일링하거나 숨기는 데 사용할 수 있습니다.

GroupBox는 헤더가 있는 컨테이너로, 콘텐츠의 축소/확장을 허용하도록 구성할 수 있습니다.

LayoutGrid는 위젯(Widget)을 행과 열로 배치하는 데 사용됩니다. 열에는 구체적인 너비(1/12 단위)를 부여하거나 콘텐츠에 필요한 만큼의 공간을 차지하거나, 행의 나머지 공간을 채울 수 있습니다.

ScrollContainer는 영역(보통 레이아웃)을 여러 리전으로 나누는 위젯(Widget)입니다. 중앙 콘텐츠가 있어야 하며, 상단, 오른쪽, 하단, 왼쪽 리전도 구성할 수 있습니다.

TabContainer에는 하나 이상의 TabPage가 포함되며, 그 중 하나를 기본 탭 페이지로 설정할 수 있습니다(페이지를 열 때 처음 표시됨). 한 번에 하나의 TabPage만 표시되어 위젯(Widget)의 하위 집합을 표시할 수 있습니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/ContainerWidgets.svg" class="no-border" >}}

| Studio Pro 가이드                                | Model SDK API 문서                                                                                               |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [컨테이너](/refguide/container/)               | [DivContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DivContainer.html)                   |
| [그룹 박스](/refguide/group-box/)               | [GroupBox](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GroupBox.html)                           |
| [레이아웃 그리드](/refguide/layout-grid/)            | [LayoutGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutGrid.html)                       |
|                                                 | [LayoutGridRow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutGridRow.html)                 |
|                                                 | [LayoutGridColumn](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutGridColumn.html)           |
| [스크롤 컨테이너](/refguide/scroll-container/) | [ScrollContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ScrollContainer.html)             |
|                                                 | [ScrollContainerRegion](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ScrollContainerRegion.html) |
| [탭 컨테이너](/refguide/tab-container/)       | [TabContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TabContainer.html)                   |
|                                                 | [TabPage](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TabPage.html)                             |

## 버튼

버튼은 클릭 시 액션을 수행합니다. RenderType 열거형을 통해 버튼 또는 하이퍼링크로 렌더링할 수 있습니다. ButtonStyle 열거형은 버튼 유형에 대한 시각적 표시를 결정합니다(예: Warning, Success).

버튼에는 번역 가능하고 ClientTemplate을 통해 템플릿화할 수 있는 캡션이 있을 수 있습니다. icon 속성을 통해 버튼은 이미지 컬렉션의 아이콘(ImageIcon 사용) 또는 글리프 아이콘([Bootstrap Halflings 컬렉션](https://getbootstrap.com/docs/3.3/components/#glyphicons-glyphs)의 글리프를 참조하는 UTF-8 코드 포함)을 참조할 수 있습니다.

ActionButton 구현은 구성된 ClientAction에 따라 수행할 작업을 결정합니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/ButtonWidgets.svg" class="no-border" >}}

| Studio Pro 가이드                                  | Model SDK API 문서                                                                                 |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [버튼](/refguide/button-widgets/)              | [ActionButton](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ActionButton.html)     |
| [버튼 속성](/refguide/button-properties/) | [RenderType](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.RenderType.html)         |
| [언어 메뉴](/refguide/translatable-texts/)    | [ButtonStyle](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ButtonStyle.html)       |
|                                                   | [ClientTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ClientTemplate.html) |
|                                                   | [Icon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Icon.html)                     |
|                                                   | [ImageIcon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ImageIcon.html)           |
|                                                   | [GlyphIcon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GlyphIcon.html)           |
|                                                   | [ClientAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ClientAction.html)     |

## 데이터 위젯

데이터 위젯은 [데이터 소스](#data-sources)에서 검색한 데이터를 표시합니다.

[DataView](#dataview)는 단일 객체의 콘텐츠를 표시하거나 편집하는 데 사용됩니다. [ListView](#listview)는 객체 목록을 표시하는 데 사용됩니다.

구성된 열을 기반으로 데이터를 표시하는 [DataGrid](#datagrid) 등 여러 그리드 위젯(Widget)도 있습니다. [ReferenceSetSelector](#referencesetselector)는 다대다 연관(Association)의 값을 표시하거나 선택할 수 있습니다. [TemplateGrid](#templategrid)는 열 수를 구성할 수 있는 타일 뷰로 객체 목록을 표시합니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/DataWidgets.svg" class="no-border" >}}

### DataView{#dataview}

데이터 뷰는 Mendix 애플리케이션의 중심 컴포넌트입니다. 데이터 뷰는 일반적으로 레이블이 있는 텍스트 박스 같은 입력 위젯(Widget)을 포함합니다. 더 복잡한 화면에서는 데이터 뷰가 주제별 탭 컨트롤, 관련 객체에 대한 데이터 뷰와 데이터 그리드를 포함할 수 있습니다.

`noEntityMessage`가 지정되면 소스 데이터를 받지 못하는 데이터 뷰는 콘텐츠 대신 이 메시지를 표시합니다. 그렇지 않으면 데이터 뷰는 정적 콘텐츠와 비활성화된 입력 위젯(Widget)을 표시합니다. 이 속성은 번역 가능한 텍스트입니다.

데이터 뷰의 푸터는 저장 버튼이나 취소 버튼 같은 버튼을 추가하는 데 자주 사용됩니다. 푸터는 다른 데이터 위젯(Widget) 내부에 중첩되지 않은 데이터 뷰에만 사용할 수 있습니다.

| Studio Pro 가이드                               | Model SDK API 문서                                                                     |
|------------------------------------------------|----------------------------------------------------------------------------------------|
| [데이터 뷰](/refguide/data-view/)              | [DataView](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataView.html) |
| [언어 메뉴](/refguide/translatable-texts/) | [Text](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/texts.Text.html)         |

### ListView{#listview}

리스트 뷰 위젯(Widget)은 템플릿을 사용하여 객체 목록을 표시합니다. 기본 템플릿은 `widgets` 속성을 통해 구성됩니다. 기본 데이터 소스 엔티티(Entity)의 특수화(Specialization)에 대한 ListViewTemplate을 추가하여 특수 템플릿을 추가할 수도 있습니다.

`clickAction` ClientAction은 리스트 뷰 항목을 클릭할 때 수행되는 액션입니다.

| Studio Pro 가이드                                            | Model SDK API 문서                                                                                     |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [리스트 뷰](/refguide/list-view/)                           | [ListView](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ListView.html)                 |
| [엔티티 일반화](/refguide/entities/#generalization) | [ListViewTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ListViewTemplate.html) |
| [리스트 뷰 템플릿](/refguide/list-view/#templates)       | [ClientAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ClientAction.html)         |

### DataGrid{#datagrid}

데이터 그리드는 테이블 형식으로 객체 목록을 표시합니다. 구성된 열에 따라 어떤 속성(Attribute)이 표시되는지 결정됩니다. 새 객체를 생성하거나 기존 객체를 표시/편집할 수 있는 버튼을 추가할 수 있는 컨트롤 바를 포함합니다.

| Studio Pro 가이드                           | Model SDK API 문서                                                                                 |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|
| [데이터 그리드](/refguide/data-grid/)          | [DataGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataGrid.html)             |
| [그리드 열](/refguide/columns/)         | [GridColumn](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridColumn.html)         |
| [그리드 컨트롤 바](/refguide/control-bar/) | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridControlBar.html) |

### ReferenceSetSelector{#referencesetselector}

참조 세트 선택기는 다대다 연관(Association)의 객체 그리드를 표시합니다. 컨트롤 바에 DataGridAddButton과 DataGridRemoveButton을 추가하면 그리드를 사용하여 연결된 객체를 편집할 수 있습니다.

| Studio Pro 가이드                                            | Model SDK API 문서                                                                                             |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [참조 세트 선택기](/refguide/reference-set-selector/) | [ReferenceSetSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ReferenceSetSelector.html) |
| [그리드 열](/refguide/columns/)                          | [GridColumn](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridColumn.html)                     |
| [그리드 컨트롤 바](/refguide/control-bar/)                  | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridControlBar.html)             |
|                                                             | [DataGridAddButton](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataGridAddButton.html)       |
|                                                             | [DataGridRemoveButton](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataGridRemoveButton.html) |

### TemplateGrid{#templategrid}

템플릿 그리드는 템플릿을 사용하여 타일 뷰로 객체 목록을 표시합니다. 이 템플릿은 TemplateGridContents에서 구성됩니다.

표시할 열 수는 `numberOfColumns` 속성으로 설정할 수 있으며, 페이지당 표시되는 행은 `numberOfColumns`를 사용합니다.

| Studio Pro 가이드                           | Model SDK API 문서                                                                                             |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [템플릿 그리드](/refguide/template-grid/)  | [TemplateGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TemplateGrid.html)                 |
|                                            | [TemplateGridContents](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TemplateGridContents.html) |
| [그리드 컨트롤 바](/refguide/control-bar/) | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridControlBar.html)             |

## 데이터 소스{#data-sources}

텍스트 박스 같은 입력 위젯(Widget)은 컨텍스트에서 콘텐츠를 파생합니다. 데이터 위젯(Widget) 자체는 구성된 데이터 소스에서 이 데이터를 가져옵니다. 데이터 위젯(Widget)에 따라 다른 소스가 적용됩니다(예: ListViewDatabaseSource는 ListView 위젯(Widget)에만 적용 가능).

데이터 소스는 데이터를 검색하는 방법에 따라 나눌 수 있습니다:

* [데이터베이스](/refguide/database-source/)를 쿼리, [XPath 제약 조건](/refguide/xpath-constraints/) 포함 가능
* 주변 데이터 위젯(Widget) 또는 페이지(또는 스니펫) 매개변수에서 [컨텍스트](/refguide/context-source/)로
* 주변 데이터 위젯(Widget)의 객체에서 [연관](/refguide/association-source/)으로
* [마이크로플로우](/refguide/microflow-source/) 또는 [나노플로우(Nanoflow)](/refguide/nanoflow-source/)로
* [리스트 뷰 또는 그리드 위젯 수신](/refguide/listen-to-grid-source/), 대상 위젯(Widget)의 선택된 객체 데이터 표시

대부분의 데이터 소스는 대상 EntityRef로 구성됩니다. 이 참조는 주어진 엔티티(Entity)의 모든 객체를 가져오는 DirectEntityRef이거나, 이미 컨텍스트에 있는 객체(주변 데이터 위젯(Widget) 또는 페이지 매개변수)와 관련된 객체를 가져오는 IndirectEntityRef일 수 있습니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/DataSources.svg" class="no-border" >}}

| Studio Pro 가이드                        | Model SDK API 문서                                                                         |
|-----------------------------------------|--------------------------------------------------------------------------------------------|
| [데이터 소스](/refguide/data-sources/) | [DataSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataSource.html) |
| [XPath](/refguide/xpath/)               |                                                                                            |

## 연관 위젯

참조 선택기와 입력 참조 세트 선택기는 연관(Association)을 표시하고 편집하는 데 사용할 수 있는 입력 위젯(Widget)입니다. 연관(Association)에 선택 가능한 객체는 SelectorSource에 의해 결정되며, 데이터베이스에서 쿼리하거나 마이크로플로우(Microflow)에서 검색할 수 있습니다(참조 선택기에만 해당).

두 위젯(Widget) 모두 연결된 객체(또는 객체들)를 선택하는 데 사용되는 페이지를 결정하는 `selectPageSettings`가 있습니다. 참조 선택기에는 선택적으로 연관된 객체에 대한 자세한 정보를 표시하는 데 사용되는 페이지를 결정하는 `goToPageSettings`도 있습니다.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/AssociationWidgets.svg" class="no-border" >}}

| Studio Pro 가이드                                                        | Model SDK API 문서                                                                                                       |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [참조 선택기](/refguide/reference-selector/)                     | [ReferenceSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ReferenceSelector.html)                 |
| [입력 참조 세트 선택기](/refguide/input-reference-set-selector/) | [InputReferenceSetSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.InputReferenceSetSelector.html) |
|                                                                         | [SelectorSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SelectorSource.html)                       |

## 더 읽기

* 블로그: [Designing Flexible User Interfaces with Layouts](https://www.mendix.com/blog/designing-flexible-user-interfaces-layouts/)
* 블로그: [Creating Maintainable Interfaces with Snippets](https://www.mendix.com/blog/creating-maintainable-interfaces-with-snippets/)
* 블로그: [Introducing Support for Glyphicons in Mendix](https://www.mendix.com/blog/introducing-support-for-glyphicons-in-mendix/)
