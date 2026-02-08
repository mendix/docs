---
title: "기존 앱을 Atlas UI로 마이그레이션하기"
url: /howto8/front-end/migrate-existing-projects-to-atlasui/
weight: 20
---

{{% alert color="info" %}}
Atlas UI Resources 모듈은 더 이상 사용되지 않으며, Atlas 2도 마찬가지입니다. 아직 Atlas 2를 사용하고 있다면, Mendix는 [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

## 소개

Atlas UI는 앱 구축 프로세스에 많은 기능을 가져옵니다. 그러나 이미 훌륭하게 보이고 원활하게 실행되는 Mendix 앱이 있다면 어떨까요? 문제없습니다! 기존 Mendix 앱을 Atlas UI와 함께 작동하게 하려면 몇 가지 단계를 따라야 합니다. 이 사용 방법 가이드에서는 기존 Mendix 프로젝트를 Atlas UI로 업그레이드하는 방법을 설명합니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* Atlas UI를 위한 앱 준비하기
* UI Framework 모듈 교체하기
* 기존 내비게이션 레이아웃 교체하기
* 선택적 작업 수행하기

## UI Framework 모듈 교체하기

{{% alert color="warning" %}}
Atlas UI Resources 모듈은 더 이상 사용되지 않으며, Atlas 2도 마찬가지입니다. 아직 Atlas 2를 사용하고 있다면, Mendix는 [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

Atlas UI의 전체 경험을 얻으려면 Atlas UI Resources 모듈을 가져와야 합니다. 모든 앱에는 Studio Pro의 **Project** > **App Store modules** 아래에서 찾을 수 있는 **UI_Resources**라는 모듈이 포함되어 있습니다. 이 모듈에는 모든 레이아웃, 페이지 템플릿 및 빌딩 블록이 포함되어 있습니다. 이 모듈의 **UI Framework** 폴더에는 이전 Mendix UI Framework 콘텐츠가 포함되어 있으며, 이를 Atlas UI로 업그레이드할 것입니다.

UI Framework를 교체하려면 다음 단계를 따르십시오:

1. **UI_Resources** 모듈을 삭제하십시오.
2. Mendix Marketplace에서 [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730) 모듈을 다운로드하고 가져오십시오.
3. Atlas UI Resources 모듈을 Mendix Marketplace에서 다운로드하면 **App Store modules**에서 찾을 수 있습니다:

    {{< figure src="/attachments/howto8/front-end/atlas-ui/migrate-existing-projects-to-atlasui/migrate_dm_appstore.png" class="no-border" >}}

가져오기가 완료된 후 존재하지 않는 내비게이션 프로필이나 레이아웃에 대한 일부 오류가 **Error** 창에 나타날 수 있습니다. 이러한 모든 오류를 해결하십시오.

Atlas UI Resources 모듈을 가져오면 Studio Pro에서 모든 새 리소스를 사용할 수 있습니다. 새 페이지를 만들 때 모든 디바이스에 대한 새로운 페이지 템플릿 세트를 사용할 수 있습니다. **Toolbox**에 **Building blocks**라는 새 탭이 추가됩니다. 이 창에서 빌딩 블록을 페이지로 끌어다 놓을 수 있습니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/migrate-existing-projects-to-atlasui/migrate_dm_bb_toolbox.png" alt="Image of Mendix Atlas UI" class="no-border" >}}

## 기존 내비게이션 레이아웃 교체하기

Atlas UI Resources 모듈에는 페이지 템플릿을 사용하는 데 필요한 내비게이션 레이아웃이 포함되어 있습니다. 기존 내비게이션 레이아웃이 별도의 모듈에 있는 경우 새 페이지 템플릿을 활용하려면 모든 페이지의 레이아웃을 Atlas UI 레이아웃으로 교체해야 합니다. 이전 내비게이션 레이아웃을 계속 사용할 수 있지만, 그렇게 하면 Atlas UI의 전체 기능에 접근할 수 없습니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/migrate-existing-projects-to-atlasui/migrate_dm_navlayouts.png" class="no-border" >}}

## 이전 테마의 일부 재사용하기 (선택 사항)

많은 Mendix 프로젝트에는 사용자 정의 테마가 있습니다. 프로젝트에 해당하는 경우 이전 테마는 Project Explorer의 **theme_old** 폴더에서 찾을 수 있습니다. Atlas UI 프레임워크는 Mendix UI Framework와 유사하므로 사용자 정의 변수 파일의 일부를 재사용할 수 있습니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/migrate-existing-projects-to-atlasui/migrate_old_theme.png" alt="Image of Mendix Atlas UI" class="no-border" >}}

## 더 읽기

* [Atlas UI 시작하기](/howto8/front-end/get-started-with-atlasui/)
* [회사 Atlas UI 리소스 만들기](/howto8/front-end/create-company-atlas-ui-resources/)
* [빌딩 블록 및 페이지 템플릿용 사용자 정의 미리보기 이미지 만들기](/howto8/front-end/create-custom-preview-images-for-building-blocks-and-page-templates/)
* [회사 Atlas UI 리소스 공유하기](/howto8/front-end/share-company-atlas-ui-resources/)
* [Atlas UI 변경 사항 문제 해결](/refguide8/migration-atlas/)
