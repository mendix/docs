---
title: "회사 Atlas UI 리소스 만들기"
url: /howto8/front-end/create-company-atlas-ui-resources/
weight: 30
---

{{% alert color="info" %}}
Atlas UI Resources 모듈은 더 이상 사용되지 않으며, Atlas 2도 마찬가지입니다. 아직 Atlas 2를 사용하고 있다면, Mendix는 [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

## 소개

회사를 위한 Atlas UI 리소스를 만드는 것은 회사 앱을 회사 브랜드와 동기화하는 좋은 방법입니다. 모든 리소스가 단일 모듈에 깔끔하게 정리되어 있으면 앱 환경 전체에서 앱을 확장하고 관리하기가 더 쉬워집니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 직접 UI 리소스 만들기
* 페이지 템플릿 만들기
* 리소스 내보내기

## 페이지 템플릿 만들기

Atlas UI 리소스에는 사용할 수 있는 다양한 페이지 템플릿이 포함되어 있습니다. 앱을 만들 때 만드는 많은 페이지가 사용자 정의로 제작되며, 개발자는 처음부터 시작할 필요 없이 앱 내에서 또는 다른 앱에서 이러한 페이지 템플릿을 재사용하고 싶을 수 있습니다. 이것이 이제 Mendix Studio Pro에서 가능합니다.

아래 예에서는 새 페이지 템플릿을 만드는 단계를 살펴보고 페이지 템플릿이 로컬 앱과 **UI Resources** 모듈에서 어떻게 동작하는지 설명합니다.

### 예제 시나리오

Studio Pro에서 앱의 **Project Explorer**로 이동하고 페이지 템플릿으로 사용하려는 페이지를 마우스 오른쪽 버튼으로 클릭하십시오. 이 예에서는 대시보드 페이지를 사용합니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_templates.png" class="no-border" >}}

만들려는 페이지 템플릿의 이름을 지정한 다음 레이아웃 유형을 선택하십시오. **Responsive** 레이아웃은 앱이 여러 화면 크기에서 볼 때 가장 적합합니다. **Tablet-specific** 및 **Phone-specific** 유형은 각각의 디바이스에 가장 적합합니다. **Pop-up** 레이아웃 유형은 페이지의 콘텐츠를 팝업 창이나 대화 상자에서 보려는 경우 선택해야 합니다. **Preview layout**은 페이지 템플릿을 만들 때 사용되는 기본 레이아웃입니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_template_name.png" class="no-border" >}}

페이지 템플릿은 이제 자체 아이콘이 있는 모듈의 새 문서 유형입니다. 페이지 템플릿 **Properties** 창에는 템플릿에 중요한 몇 가지 속성이 있습니다:

* **Display name** — 페이지 템플릿의 이름으로, **Create page** 대화 상자에 표시됩니다
* **Image** — 페이지 템플릿 미리보기 이미지로, **Create page** 대화 상자에 표시됩니다
* **Show when** — 페이지 템플릿을 표시할 시기에 대한 세 가지 옵션이 있습니다: **Creating new pages** (기본값), **Generating edit pages**, **Generating select pages**
* **Layout type** — 페이지를 반응형, 태블릿, 휴대폰 또는 팝업 유형으로 분류하는 데 필요한 레이아웃 유형입니다
* **Preview layout** — 페이지 템플릿을 만들 때 사용되는 기본 레이아웃입니다

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_template_properties.png" class="no-border" >}}

모듈에서 새 페이지를 만들면 이제 생성된 페이지 템플릿도 표시됩니다. 아래 예는 페이지 템플릿이 **Local** 카테고리에 추가된 방법을 보여줍니다. 생성된 모든 것은 페이지 템플릿을 UI Resources 모듈로 이동할 때까지 **Local**로 유지됩니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_template_local.png" class="no-border" >}}

Atlas UI의 페이지 템플릿은 모두 빌딩 블록으로 구축됩니다. 다음 섹션에서는 빌딩 블록을 만드는 단계를 안내합니다.

## 빌딩 블록 만들기

빌딩 블록은 여러 위젯으로 구성된 단일 목적의 사용자 인터페이스 요소입니다. 여러 빌딩 블록은 일반적으로 한 페이지에서 함께 사용됩니다. Atlas UI에는 카드, 폼, 헤더, 컨트롤과 같은 다양한 빌딩 블록이 포함되어 있습니다.

모든 페이지는 위젯을 그룹화하여 빌딩 블록을 포함할 수 있습니다. 예에서는 컨테이너, 제목, 텍스트 및 버튼으로 구성된 빌딩 블록이 있습니다. 이것은 앱에서 자주 사용되는 간단한 빌딩 블록입니다.

페이지로 이동하여 빌딩 블록으로 사용할 수 있는 위젯 그룹을 선택하십시오. 위젯을 포함하는 컨테이너 또는 부모 위젯을 마우스 오른쪽 버튼으로 클릭한 다음 **Create building block**을 선택하십시오:

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb.png" class="no-border" >}}

만들려는 빌딩 블록의 이름을 지정하십시오:

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb_name.png" class="no-border" >}}

빌딩 블록은 이제 자체 아이콘이 있는 모듈의 새 문서 유형입니다. 빌딩 블록 **Properties** 창에는 빌딩 블록에 중요한 두 가지 속성이 있습니다:

* **Display name** — Studio Pro의 **Toolbox** 창에 표시될 빌딩 블록의 이름
* **Image** — Studio Pro의 **Toolbox** 창에 표시될 빌딩 블록 미리보기 이미지

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb_properties.png" class="no-border" >}}

빌딩 블록은 이제 **Toolbox**에서 사용할 수 있으며, 사용자는 이 빌딩 블록과 다른 빌딩 블록을 페이지로 끌어다 놓을 수 있습니다. 아래 예는 빌딩 블록이 **Local** 카테고리에 추가된 것을 보여줍니다. 생성된 모든 것은 빌딩 블록을 **UI Resources** 모듈로 이동할 때까지 **Local**로 유지됩니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb_toolbox.png" class="no-border" >}}

## Local에서 Atlas UI Resources로 이동하기 {#moving-from-local-to-atlas-ui-resources}

페이지 템플릿과 빌딩 블록을 만드는 방법이 명확해졌으므로, 리소스를 **Local** 카테고리에서 앱과 사용자와 공유할 수 있는 모듈로 옮기는 방법에 대해 논의해야 합니다.

**App Store modules** 아래의 **UI_Resources** 모듈 안에 페이지 템플릿을 배치하는 것부터 시작하겠습니다:

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_moving_local.png" class="no-border" >}}

예에서는 새 페이지 템플릿이 대시보드 카테고리에 추가되었습니다. Mendix Studio Pro에서 새 페이지를 만들면 **Create Page** 마법사의 **Dashboards** 카테고리에서 **Template**을 사용할 수 있습니다:

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/creating_open_pt.png" class="no-border" >}}

**UI_Resources** 모듈은 페이지 템플릿과 빌딩 블록의 카테고리로 이름을 변경하고 사용할 수 있는 폴더로 구성되어 있습니다. 정렬은 이름 앞에 숫자를 사용하여 수행되며, 이를 변경하여 표시 순서를 바꿀 수 있습니다. 페이지 템플릿과 빌딩 블록은 동일한 카테고리 이름을 재사용하기 위해 같은 폴더 안에 배치할 수 있습니다.

Studio Pro에서 폴더 이름에 밑줄을 추가하면(예: **_Layouts**) 해당 폴더가 페이지 템플릿이나 빌딩 블록의 카테고리에 추가되지 않습니다.

## 회사 Atlas UI 리소스 내보내기

리소스를 여러 개발자나 앱과 공유할 준비가 되면 Project Explorer에서 모듈을 내보낼 수 있습니다. 모듈이 UI 리소스 패키지로 내보내진 한 모듈의 이름을 자유롭게 변경할 수 있습니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-company-atlas-ui-resources/export_ui_module.png" class="no-border" >}}

이제 모듈을 다른 앱에서 가져오거나 [Mendix Marketplace](https://marketplace.mendix.com/)에 업로드할 수 있습니다. 리소스 모듈을 비공개 전용으로 만들어 회사 내 모든 사람이 모듈을 활용하고 확장할 수 있는 옵션이 있습니다.

## 더 읽기

* [Atlas UI 시작하기](/howto8/front-end/get-started-with-atlasui/)
* [빌딩 블록 및 페이지 템플릿용 사용자 정의 미리보기 이미지 만들기](/howto8/front-end/create-custom-preview-images-for-building-blocks-and-page-templates/)
* [기존 앱을 Atlas UI로 마이그레이션하기](/howto8/front-end/migrate-existing-projects-to-atlasui/)
* [회사 Atlas UI 리소스 공유하기](/howto8/front-end/share-company-atlas-ui-resources/)
