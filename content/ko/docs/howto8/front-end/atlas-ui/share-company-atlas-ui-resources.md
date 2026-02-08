---
title: "회사 Atlas UI 리소스 공유하기"
url: /howto8/front-end/share-company-atlas-ui-resources/
weight: 40
---

{{% alert color="info" %}}
Atlas UI Resources 모듈은 더 이상 사용되지 않으며, Atlas 2도 마찬가지입니다. 아직 Atlas 2를 사용하고 있다면, Mendix는 [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

## 소개

회사 UI 리소스를 만드는 것은 Mendix 개발자가 기본 제공되는 회사 브랜드 테마, 페이지 템플릿 및 빌딩 블록으로 새로운 아름다운 애플리케이션을 빠르게 만들 수 있게 하는 좋은 방법입니다. 이는 여러 앱을 동일한 UI 리소스로 정렬하여 회사 브랜드와 룩 앤 필의 일관성을 유지하는 훌륭한 방법입니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* UI Resources 모듈 공유하기
* UI Resources 모듈 유지 관리하기

## 회사 Atlas UI 리소스 내보내기

사용자 정의 리소스를 여러 개발자 또는 앱과 공유할 준비가 되면 Studio Pro의 **Project Explorer**에서 모듈을 내보낼 수 있습니다. 이를 수행하려면 **UI Resources** 모듈을 마우스 오른쪽 버튼으로 클릭하고 내보낸 다음 저장하십시오:

{{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_export_uiresources.png" class="no-border" >}}

UI 리소스 패키지로 내보낸 후 모듈의 이름을 자유롭게 변경할 수 있습니다.

이제 모듈을 다른 앱에서 가져오거나 Mendix Marketplace에 업로드할 수 있습니다. 모듈을 비공개 전용으로 만들어 회사 내 모든 사람이 혜택을 받고 확장할 수 있도록 하는 것도 가능합니다.

다음 섹션에서는 UI 리소스 공유 프로세스를 명확하게 설명합니다.

## 회사 Atlas UI 리소스 공유 및 유지 관리하기

Mendix Marketplace는 회사 전체에서 UI 리소스를 공유하는 훌륭한 방법입니다. 회사 내 모든 사람이 이러한 UI 리소스를 활용할 수 있으며, 리소스에 대한 변경 사항을 문서화하고 추적할 수 있습니다. Mendix Marketplace 버전 관리 시스템이 모든 것을 처리하므로 UI 리소스를 분실하거나 오류를 만들 걱정이 없습니다.

UI 리소스 모듈을 업로드할 때 염두에 둬야 할 두 가지 중요한 옵션이 있습니다:

* **Publish to** — 이 옵션을 사용하면 비공개 Marketplace(회사 전용) 또는 공개 대상(전체 Mendix 커뮤니티)에서 UI 리소스를 공유할 수 있습니다
* **Category** — **UI Resources** 카테고리를 선택하여 모듈을 UI 리소스 모듈로 사용할 수 있게 하십시오

{{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_appstore_addcontent.png" class="no-border" >}}

공개 Mendix Marketplace에 새 UI 리소스를 업로드하면 콘텐츠가 Mendix에서 검토 및 승인되어야 합니다. 그러나 비공개 Marketplace에 UI 리소스를 게시하면 콘텐츠를 검토할 필요가 없으며, 게시 후 즉시 회사에서 사용할 수 있습니다.

## 회사 Atlas UI 리소스 사용하기

이 섹션에서는 회사의 Mendix 개발자가 UI Resources 모듈의 혜택을 받을 수 있는 방법을 설명합니다.

### 회사 앱 템플릿에 UI Resources 모듈 포함하기

UI Resources 모듈은 애플리케이션에서 모든 UI 리소스를 중앙 집중화하는 좋은 방법입니다. Mendix 개발자가 새 Mendix 앱을 시작할 때마다 UI Resources 모듈을 다운로드하는 것은 많은 작업이 될 것입니다. 새 Mendix 앱을 위해 UI Resources를 공유하는 더 쉬운 방법은 UI Resources 모듈이 이미 포함된 빈 회사 앱 템플릿을 만드는 것입니다. 이 빈 앱은 Mendix 개발자가 Mendix 애플리케이션을 빠르게 만드는 데 필요한 로직과 데이터로 확장할 수도 있습니다.

Mendix Portal 또는 Mendix Studio Pro에서 직접 새 Mendix 애플리케이션을 만드는 것부터 시작하겠습니다:

1. **Blank App**을 선택하고 Studio Pro에서 새 앱을 여십시오:

    {{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_createnewapp.png" class="no-border" >}}

2. Mendix **Project** 수준의 **App Store modules**에서 기본 **Atlas_UI_Resources** 모듈을 찾으십시오. 이 모듈을 마우스 오른쪽 버튼으로 클릭하고 삭제하십시오:

    {{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_delete_module.png" class="no-border" >}}

3. 이제 회사 UI 리소스를 가져올 시간입니다 (아직 UI 리소스를 만들지 않았다면 [회사 UI 리소스 만들기](/howto8/front-end/create-company-atlas-ui-resources/)를 참조하십시오). Studio Pro 상단 툴바에서 **App Store**를 클릭한 다음 왼쪽 사이드바 **Categories** 메뉴에서 **UI Resources**를 선택하여 이러한 리소스를 가져오십시오.
4. 만든 회사 UI 리소스 모듈을 다운로드하십시오.
5. 다운로드가 완료되면 UI 리소스가 **Project Explorer**의 **App Store modules**에 표시됩니다. 계속하기 전에 모든 오류가 해결되었는지 확인하십시오.

회사 앱 템플릿에 회사 UI 리소스를 추가했으므로 회사 UI 리소스와 마찬가지로 앱을 Mendix Marketplace에서 공유할 수 있습니다 (자세한 내용은 다음 섹션 참조). 회사 앱 템플릿은 Mendix 개발자가 새 앱을 만들고자 할 때 사용할 수 있으므로 시간을 절약하고 회사 UI 리소스를 별도로 다운로드하는 것을 건너뛸 수 있습니다.

#### 회사 앱 템플릿 공유 및 유지 관리하기

회사 앱 템플릿을 만들었으므로 다음 단계는 회사와 공유하는 것입니다. 가장 쉬운 방법은 비공개 Marketplace에 업로드하는 것입니다.

회사 앱 템플릿을 업로드할 때 염두에 둬야 할 네 가지 중요한 옵션이 있습니다:

* **Where can people find your content?** — 이 옵션은 **Private Marketplace**로 설정해야 합니다
* **Category** — **Create New App**을 선택하십시오
* **Sub category** — **Starter Apps** 하위 카테고리를 선택하여 앱을 Mendix Platform의 "새 앱 만들기 플로우"에서 템플릿으로 사용할 수 있게 하십시오
* **Impressions** — 인상 이미지는 Mendix Platform에서 새 앱을 만들 때 표시되는 이미지를 포함합니다

{{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_appstore_addcontent_starterapp.png" class="no-border" >}}

앱 인상 이미지의 예입니다:

{{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_createnewapp_detail.png" class="no-border" >}}

### Mendix Marketplace에서 UI Resources 모듈 사용하기

UI Resources 모듈은 Studio Pro의 Mendix Marketplace를 통해 쉽게 다운로드할 수 있습니다. 기존 Mendix 앱에서 UI Resources 모듈을 다운로드하면 개발자는 모든 새 UI 리소스를 활용할 수 있습니다.

Mendix Marketplace에서 UI Resources 모듈을 사용하려면 다음 단계를 따르십시오:

1. Studio Pro에서 Mendix Marketplace를 열고 왼쪽 사이드바 **Categories** 메뉴에서 **UI Resources**를 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing.png" class="no-border" >}}

    사용 가능한 UI 리소스가 Marketplace의 중간 섹션에 나타납니다. **Private** 라벨은 UI 리소스가 회사에서만 사용 가능함을 나타냅니다.

2. 회사에서 만든 UI 리소스를 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/atlas-ui/share-company-atlas-ui-resources/sharing_detail.png" class="no-border" >}}

3. 프로젝트 내에서 UI 리소스를 다운로드하려면 **Download**를 클릭하십시오. 회사의 UI Resources 모듈을 다운로드하면 **App Store modules** 아래에 나타납니다. 새 리소스가 추가되면 Mendix Marketplace에서 새 버전을 다운로드하여 모듈을 항상 업데이트할 수 있습니다.

## 더 읽기

* [Atlas UI 시작하기](/howto8/front-end/get-started-with-atlasui/)
* [회사 Atlas UI 리소스 만들기](/howto8/front-end/create-company-atlas-ui-resources/)
* [빌딩 블록 및 페이지 템플릿용 사용자 정의 미리보기 이미지 만들기](/howto8/front-end/create-custom-preview-images-for-building-blocks-and-page-templates/)
* [기존 앱을 Atlas UI로 마이그레이션하기](/howto8/front-end/migrate-existing-projects-to-atlasui/)
