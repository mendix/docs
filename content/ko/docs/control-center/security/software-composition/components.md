---
title: "컴포넌트 탭"
linktitle: "컴포넌트 탭"
url: /control-center/components-tab/
description: "Mendix Control Center의 소프트웨어 구성 페이지에 있는 컴포넌트 탭에 대해 설명합니다."
weight: 2
---

## 소개

**컴포넌트** 탭은 앱 환경 전체에서 사용되는 모든 고유 컴포넌트에 대한 개요를 제공합니다.

{{< figure src="/attachments/control-center/security/software-composition/all_components.png" >}}

## 인사이트

**인사이트** 카드는 다음 세부 정보를 표시합니다:

* **Marketplace** — 앱 전체에서 사용되는 프라이빗 및 퍼블릭 Marketplace 컴포넌트의 수입니다. 다음이 될 수 있습니다:

    * 모듈
    * 위젯(Widget)
    * 프레임워크

* **지원 유형** — 콘텐츠 지원 카테고리로 나뉜 Marketplace 컴포넌트의 수입니다.
* **요약** — 각 심각도 카테고리의 발견 사항 수와 지난 30일 동안 발견 사항 수가 어떻게 변화했는지에 대한 이동 평균(백분율로 표시)입니다.

## 컴포넌트 목록

컴포넌트 목록 위에 다음 옵션을 사용할 수 있습니다:

* 목록 내 정보를 검색하는 검색 상자.
* 클라우드 유형별로 앱을 표시하는 필터.
* 목록의 모든 정보를 Excel 파일로 내보내는 {{% icon name="office-sheet" %}}**모두 내보내기** 옵션.

컴포넌트 목록에는 다음 정보가 포함됩니다:

* **컴포넌트** — 컴포넌트의 이름입니다.
* **유형** — 다음 중 하나일 수 있는 컴포넌트의 유형입니다:
  
    * **Module** — [Community Commons](https://marketplace.mendix.com/link/component/170)와 같이 Marketplace에서 가져온 표준 Marketplace 모듈 또는 개발자가 만든 모듈입니다.
    * **Widget** — [Charts](https://marketplace.mendix.com/link/component/105695)와 같이 Marketplace에서 다운로드한 사용자 인터페이스 요소 또는 개발자가 만든 위젯입니다.
    * **Framework** — Mendix Runtime 버전, 예: 10.12.0
    * **Jar** — [관리 종속성](/refguide/managed-dependencies/)을 사용하여 앱에 가져오거나 사용된 Studio Pro 버전에 따라 **userlib** 폴더에 수동으로 추가된 Java 라이브러리, 예: `org.apache.commons.io`.
    * **npms** — [JavaScript 액션](/refguide/javascript-actions/)에서 사용되는 `npm` 라이브러리입니다.
    * **Unknown** — 컴포넌트 유형이 위의 항목에 해당하지 않아 확인할 수 없는 경우입니다.
    
* **지원 유형** — Marketplace 컴포넌트의 지원 유형입니다. **Mendix**, **Partner** 또는 **Community**일 수 있습니다.
  자세한 내용은 [콘텐츠 지원 카테고리](/appstore/marketplace-content-support/#category)를 참조하십시오.
* **버전** — 사용 중인 컴포넌트의 버전입니다.
* **발견 사항** — 심각도 수준에 따라 색상으로 구분된 각 유형의 발견 사항 수를 표시합니다.
* **라이선스** — Mendix Marketplace에서 파생된 컴포넌트의 경우 최종 사용자 라이선스입니다.
* **Marketplace** – 컴포넌트가 **Public**인지 **Private**인지 여부입니다. 퍼블릭 컴포넌트는 Marketplace에서 전체 Mendix 커뮤니티에 사용할 수 있고, 프라이빗 컴포넌트는 [회사 콘텐츠](/appstore/home-page/#company-content) 페이지를 통해서만 사용할 수 있습니다.
* **컴포넌트를 사용하는 앱** – 컴포넌트가 사용되는 앱의 수입니다.
* **최신 버전** — 컴포넌트의 최신 버전입니다.
* **게시자** — 컴포넌트를 게시한 조직의 이름입니다.
* **세부 정보 보기** — 이를 클릭하면 [컴포넌트 세부 정보](#component-details) 페이지가 열립니다.
* 열 맞춤 설정({{% icon name="view" %}}) – {{% icon name="view" %}} 아이콘을 클릭하고 옵션을 선택 또는 해제하여 목록의 열을 맞춤 설정할 수 있습니다.

목록에서 선택한 항목에 해당하는 정보를 Excel 파일로 내보내려면 목록에서 항목의 체크박스를 선택한 다음 페이지 하단에 나타나는 **선택 항목 내보내기**를 클릭하십시오.

## 컴포넌트 세부 정보 {#component-details}

**컴포넌트** 탭에서 컴포넌트에 대해 **세부 정보 보기**를 클릭하면 **컴포넌트 세부 정보** 페이지가 열립니다.

### 발견 사항 {#component-findings}

**발견 사항** 탭에는 해당 특정 버전의 컴포넌트에 영향을 미치는 모든 발견 사항이 나열됩니다.

{{< figure src="/attachments/control-center/security/software-composition/components_findings.png" >}}

목록 위에 다음 옵션을 사용할 수 있습니다:

* 목록 내 정보를 검색하는 검색 상자.
* 발견 사항 유형별로 목록 항목을 표시하는 필터.
* 목록의 모든 정보를 Excel 파일로 내보내는 {{% icon name="office-sheet" %}}**모두 내보내기** 옵션.

발견 사항 목록에는 다음 정보가 포함됩니다:

* **심각도** — 해당 컴포넌트와 관련된 발견 사항의 심각도입니다.
* **발견 사항 유형** — **오래됨** 또는 **더 이상 사용되지 않음**일 수 있는 발견 사항의 유형입니다.
* **앱 이름** — 컴포넌트가 취약점으로 식별된 앱입니다.
* **환경** — 앱이 실행 중인 환경의 이름입니다.
* **대상 클라우드** — 배포 패키지가 배포된 클라우드 유형입니다.
* **기간** — 발견 사항이 적용된 일수로, 다음과 같이 계산됩니다:

    * 더 이상 사용되지 않는 컴포넌트: 현재 날짜 - 컴포넌트가 더 이상 사용되지 않게 된 날짜
    * 오래된 컴포넌트: 현재 날짜 - 첫 번째 상위 런타임 호환 버전의 게시 날짜

* 열 맞춤 설정({{% icon name="view" %}}) — {{% icon name="view" %}} 아이콘을 클릭하고 옵션을 선택 또는 해제하여 목록의 열을 맞춤 설정할 수 있습니다.

### 컴포넌트 사용 {#component-component-usage}

**컴포넌트 사용** 탭은 컴포넌트가 사용되는 모든 앱 및 환경의 상세 뷰를 표시합니다.
심각한 취약점이 있는 컴포넌트가 있는 경우 이 페이지를 사용하여 해당 컴포넌트를 사용하는 앱을 확인할 수 있습니다.

{{< figure src="/attachments/control-center/security/software-composition/components_comp_usage.png" >}}

목록 위에 다음 옵션을 사용할 수 있습니다:

* 목록 내 정보를 검색하는 검색 상자.
* 클라우드 유형별로 앱을 표시하는 필터.
* 목록의 모든 정보를 Excel 파일로 내보내는 {{% icon name="office-sheet" %}}**모두 내보내기** 옵션.

컴포넌트 사용 목록에는 다음 정보가 포함됩니다:

* **앱 이름** — 컴포넌트가 사용되는 앱의 이름입니다.
* **환경** — 컴포넌트를 사용하는 앱이 배포된 환경의 이름입니다.
* **런타임** — 컴포넌트가 호환되는 런타임 버전입니다.
* **대상 클라우드** — 배포 패키지가 배포된 클라우드 유형입니다.
* **기술 담당자** — 앱의 기술 담당자입니다.
* 열 맞춤 설정({{% icon name="view" %}}) — {{% icon name="view" %}} 아이콘을 클릭하고 옵션을 선택 또는 해제하여 목록의 열을 맞춤 설정할 수 있습니다.
