---
title: "첫 번째 개요 및 상세 페이지 만들기"
linktitle: "개요 및 상세 페이지 만들기"
url: /howto8/front-end/create-your-first-two-overview-and-detail-pages/
weight: 25
---

## 소개

이 사용 방법 가이드에서는 Mendix에서 개요 및 상세 페이지를 만드는 방법을 설명합니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 개요 및 상세 페이지 만들기
* 내비게이션 및 보안 구성하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [기본 데이터 레이어 만들기](/howto8/data-models/create-a-basic-data-layer/)를 읽어 기본 데이터 구조를 설정하십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18582175.png" class="no-border" >}}

## 개요 및 상세 페이지 자동으로 만들기

데이터 구조에 대한 개요 및 상세 페이지를 만들려면 다음 단계를 따르십시오:

1. Domain Model에서 **Customer** Entity를 마우스 오른쪽 버튼으로 클릭하고 **Generate overview pages**를 선택하십시오.
2. **Generate pages** 대화 상자에서 두 Entity를 모두 선택하십시오.
3. **OK**를 클릭하십시오.

이것으로 완료입니다! 각 Entity에 대해 개요 페이지와 상세 페이지가 생성됩니다. 또한 **Entity_Menu** Snippet이 생성되어 각 개요 페이지에 추가됩니다.

{{% alert color="info" %}}
Mendix는 두 개의 탭(하나는 **Customer**의 헤더 및 데이터용, 다른 하나는 **Order**의 헤더 및 데이터용)이 포함된 Excel 스프레드시트를 만들면 더 많은 작업을 자동으로 수행할 수 있습니다. 새 앱을 만들 때 **App from a spreadsheet**를 선택하고 Excel 스프레드시트를 업로드하십시오.
{{% /alert %}}

## 개요 및 상세 페이지 수동으로 만들기

Mendix Studio Pro를 더 잘 이해하기 위해 이 섹션에서는 이러한 페이지를 만드는 수동 단계를 설명합니다.

### 개요 페이지 만들기

새 개요 페이지를 만들고 앱에 추가하려면 다음 단계를 따르십시오:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Page**를 선택하십시오.
2. **Responsive**를 클릭하십시오.
3. **Page name**에 *CustomerOverview*를 입력하십시오.
4. 내비게이션 레이아웃으로 *Sidebar_Full_Responsive*를 선택하십시오.
5. **Blank**를 클릭한 다음 **Blank** 페이지 템플릿을 선택하고 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581337.png" class="no-border" >}}

6. 페이지 빌더의 메뉴 바에서 **Data Grid**를 클릭하여 Data Grid 위젯을 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581335.png" class="no-border" >}}

7. 페이지 편집기 안쪽을 클릭하여 Data Grid 위젯을 만드십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581334.png" class="no-border" >}}

8. Data Grid를 마우스 오른쪽 버튼으로 클릭하고 **Select Entity**를 선택하십시오.
9. **Select Data Source** 팝업 창에서 **Customer** Entity를 선택하고 **Select**를 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581345.png" class="no-border" >}}

10. **OK**를 클릭하여 Data Grid에 검색 필드와 열을 자동으로 채우십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581343.png" class="no-border" >}}

이제 다음과 같은 Data Grid가 있는 개요 페이지가 있어야 합니다:

{{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581330.png" class="no-border" >}}

### 상세 페이지 만들기

새 상세 페이지를 수동으로 만들려면 다음 단계를 따르십시오:

1. 개요 페이지의 Data Grid에서 **New**를 마우스 오른쪽 버튼으로 클릭하고 **Generate page**를 선택하십시오.
2. **Navigation layout**으로 **PopupLayout**을 선택하십시오.
3. **Form horizontal**을 선택한 다음 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581327.png" class="no-border" >}}

4. 개요 페이지의 Data Grid에서 **New**를 다시 마우스 오른쪽 버튼으로 클릭하고 **Go to page**를 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581326.png" class="no-border" >}}

    이제 다음과 같은 상세 페이지가 있어야 합니다:

    {{< figure src="/attachments/howto8/front-end/create-your-first-two-overview-and-detail-pages/18581325.png" class="no-border" >}}

## 내비게이션 및 보안

이제 개요 페이지 사용을 시작하기 위한 내비게이션 항목을 만드십시오. 내비게이션 구조 설정 방법에 대한 자세한 내용은 [내비게이션 구조 설정 방법](/howto8/general/setting-up-the-navigation-structure/)을 참조하십시오.

이 애플리케이션에 보안을 켠 경우 개요 및 상세 페이지 모두에서 페이지 접근 권한을 구성해야 합니다. 자세한 내용은 [보안 앱 만들기](/howto8/security/create-a-secure-app/)를 참조하십시오.

## 더 읽기

* [Atlas UI](/howto8/front-end/atlas-ui/)
* [레이아웃과 스니펫 사용하기](/howto8/front-end/layouts-and-snippets/)
* [내비게이션 구조 설정하기](/howto8/general/setting-up-the-navigation-structure/)
* [런타임 오류의 근본 원인 찾기](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Page](/refguide8/page/)
