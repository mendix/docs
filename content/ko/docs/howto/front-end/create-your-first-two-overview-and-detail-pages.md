---
title: "첫 번째 개요 및 상세 페이지 만들기"
linktitle: "개요 및 상세 페이지 만들기"
url: /howto/front-end/create-your-first-two-overview-and-detail-pages/
weight: 25
description: "개요 및 상세 페이지를 만들고 내비게이션과 보안을 구성하는 방법을 설명합니다."
---

## 소개

이 사용 방법에서는 Mendix에서 개요 및 상세 페이지를 만드는 방법을 설명합니다.

이 사용 방법에서는 다음을 수행하는 방법을 알려줍니다:

* 개요 및 상세 페이지 만들기
* 내비게이션 및 보안 구성

## 사전 준비 사항

이 사용 방법을 시작하기 전에 다음 사전 준비 사항을 완료했는지 확인하세요:

* [도메인 모델 구성](/refguide/configuring-a-domain-model/)을 따라 Domain Model을 만드세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18582175.png" class="no-border" >}}

## 자동으로 개요 및 상세 페이지 만들기 {#create-automatically}

데이터 구조에 대한 개요 및 상세 페이지를 만들려면 다음 단계를 따르세요:

1. Domain Model에서 **Customer** Entity를 마우스 오른쪽 버튼으로 클릭하고 **Generate overview pages**를 선택하세요.
2. **Generate pages** 대화 상자에서 두 Entity를 모두 선택하세요.
3. **OK**를 클릭하세요.

이렇게 하면 됩니다! 각 Entity에 대해 개요 페이지와 상세 페이지가 생성됩니다. 또한 **Entity_Menu** 스니펫이 생성되어 각 개요 페이지에 추가됩니다.

{{% alert color="info" %}}
Mendix는 두 개의 탭이 있는 Excel 스프레드시트(하나는 **Customer**의 헤더와 데이터용, 다른 하나는 **Order**의 헤더와 데이터용)를 만들면 더 많은 작업을 자동으로 수행할 수 있습니다. 새 앱을 만들 때 **App from a spreadsheet**를 선택하고 Excel 스프레드시트를 업로드하세요.
{{% /alert %}}

## 수동으로 개요 및 상세 페이지 만들기

Mendix Studio Pro를 더 잘 이해하기 위해 이 섹션에서는 이러한 페이지를 수동으로 만드는 단계를 설명합니다.

### 개요 페이지 만들기

새 개요 페이지를 만들어 앱에 추가하려면 다음 단계를 따르세요:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Page**를 선택하세요.
2. **Responsive**를 클릭하세요.
3. **Page name**에 *CustomerOverview*를 입력하세요.
4. 내비게이션 레이아웃으로 *Sidebar_Full_Responsive*를 선택하세요.
5. **Blank**를 클릭한 다음 **Blank** 페이지 템플릿을 선택하고 **OK**를 클릭하세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581337.png" class="no-border" >}}

6. 페이지 빌더의 메뉴 바에서 **Data Grid**를 클릭하여 데이터 그리드 Widget을 선택하세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581335.png" class="no-border" >}}

7. 페이지 편집기 내부를 클릭하여 데이터 그리드 Widget을 만드세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581334.png" class="no-border" >}}

8. 데이터 그리드를 마우스 오른쪽 버튼으로 클릭하고 **Select Entity**를 선택하세요.
9. **Select Data Source** 팝업 창에서 **Customer** Entity를 선택하고 **Select**를 클릭하세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581345.png" class="no-border" >}}

10. **OK**를 클릭하여 데이터 그리드에 검색 필드와 열을 자동으로 채우세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581343.png" class="no-border" >}}

이제 다음과 같은 데이터 그리드가 있는 개요 페이지가 있어야 합니다:

{{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581330.png" class="no-border" >}}

### 상세 페이지 만들기

새 상세 페이지를 수동으로 만들려면 다음 단계를 따르세요:

1. 개요 페이지의 데이터 그리드에서 **New**를 마우스 오른쪽 버튼으로 클릭하고 **Generate page**를 선택하세요.
2. **Navigation layout**으로 **PopupLayout**을 선택하세요.
3. **Form Horizontal**을 선택한 다음 **OK**를 클릭하세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581327.png" class="no-border" >}}

4. 개요 페이지의 데이터 그리드에서 **New**를 다시 마우스 오른쪽 버튼으로 클릭하고 **Go to page**를 선택하세요:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581326.png" class="no-border" >}}

    이제 다음과 같은 상세 페이지가 있어야 합니다:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581325.png" class="no-border" >}}

## 내비게이션 및 보안

이제 개요 페이지를 사용하기 위한 내비게이션 항목을 만드세요. 내비게이션 설정에 대한 자세한 내용은 [내비게이션 설정](/refguide/setting-up-the-navigation-structure/)을 참조하세요.

이 애플리케이션에 보안을 활성화한 경우, 개요 및 상세 페이지 모두에서 페이지 접근을 구성해야 합니다. 자세한 내용은 [보안 앱 만들기](/howto/security/create-a-secure-app/)를 참조하세요.

## 더 읽기

* [UI 디자인](/howto/front-end/atlas-ui/)
* [레이아웃 및 스니펫 사용](/howto/front-end/layouts-and-snippets/)
* [내비게이션 설정](/refguide/setting-up-the-navigation-structure/)
* [런타임 오류의 근본 원인 찾기](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Page](/refguide/page/)
