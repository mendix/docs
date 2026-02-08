---
title: "컴포넌트 상세 페이지"
url: /appstore/component-details/
weight: 2
no_list: false
description_list: true
description: "컴포넌트 상세 페이지에 대한 정보를 제공합니다."
---
## 소개

[Marketplace](https://marketplace.mendix.com/) 컴포넌트의 타일을 클릭하면 이 문서에 설명된 섹션이 포함된 상세 페이지로 이동합니다.

## 컴포넌트 헤더 {#header}

컴포넌트의 헤더에는 다음 세부 정보가 포함됩니다:

* 라벨 (있는 경우)

    * **Partner**: 헤더에 이 라벨이 포함되어 있으면 해당 컴포넌트가 파트너 지원임을 의미합니다.
    * **Platform Supported**: 헤더에 이 라벨이 포함되어 있으면 해당 컴포넌트가 Mendix 플랫폼 지원임을 의미합니다. 
    * **Siemens**: 헤더에 이 라벨이 포함되어 있으면 해당 컴포넌트가 Siemens 지원임을 의미합니다.
    * **Recommended**: 헤더에 이 라벨이 포함되어 있으면 해당 컴포넌트가 회사의 정책과 가이드라인을 충족하므로 Mendix 관리자가 권장함을 의미합니다.
    
* 컴포넌트 이름
* **Save** – 컴포넌트를 [저장된 콘텐츠](/appstore/home-page/#personal) 목록에 추가하려면 클릭합니다.
* 콘텐츠 유형에 따라:

    * 모듈 및 위젯의 경우 **Use in Studio Pro** – 콘텐츠 ID를 복사하여 [Studio Pro에서 컴포넌트를 검색하고 사용](/appstore/use-content/#current-sp)할 수 있도록 클릭합니다.
    * Starter Template의 경우 **Start with Template** – 템플릿을 사용하려면 클릭합니다.
    * 기타 콘텐츠 유형의 경우 **Download** – 컴포넌트를 다운로드하려면 클릭합니다.
    * **Contact Us** – Mendix 또는 커뮤니티 공급자에게 문의하려면 클릭합니다.

* 컨텍스트 메뉴 – 컴포넌트에서 다음 작업을 수행할 수 있습니다:

    * **Add New Release** – 컴포넌트의 새 버전을 추가합니다.
    * **Manage Versions** – 컴포넌트의 모든 버전을 편집하거나 게시 취소합니다.
    * **Deprecate Component** – 컴포넌트를 지원 중단하고 대체 컴포넌트를 선택합니다.     
    컴포넌트 지원 중단에 대한 자세한 내용은 [Marketplace 콘텐츠 지원 중단](/appstore/deprecate-content/)을 참조하십시오.
  
  컴포넌트가 이미 지원 중단된 경우, 컨텍스트 메뉴에서 사용할 수 있는 유일한 옵션은 **Unpublish Component**입니다.

**Publisher** 섹션에는 컴포넌트 유형에 따라 다음 정보가 포함됩니다:

* 컴포넌트를 만든 회사 이름
* 컴포넌트가 처음 게시된 날짜
* 컴포넌트의 최신 버전
* 별점 기준 리뷰 평균 및 리뷰 수
* 컴포넌트가 다운로드된 횟수

**Requirements** 섹션에는 다음이 포함됩니다:

* 컴포넌트가 작동하는 데 필요한 Studio Pro 버전
* 컴포넌트의 [라이선스](/appstore/submit-content/#license) 유형

**Support** 섹션에는 Mendix가 컴포넌트에 제공하는 지원 카테고리가 표시됩니다. 자세한 내용은 [Marketplace 콘텐츠 지원](/appstore/marketplace-content-support/) 섹션을 참조하십시오.

**GitHub** 링크는 컴포넌트의 GitHub 소스 파일로 이동합니다.

## 컴포넌트 탭

컴포넌트 상세 페이지에는 다음 탭도 포함됩니다:

* **Overview** – 이 탭에는 컴포넌트의 설명과 스크린샷이 포함됩니다.
* **Documentation** – 이 탭에는 일반적인 사용 사례, 기능 및 제한 사항, 종속성, 설치 및 구성, 자주 묻는 질문, 스크린샷에 대한 세부 정보가 포함됩니다.
    * [플랫폼 지원 컴포넌트](/appstore/marketplace-content-support/#category)는 콘텐츠 유형 또는 카테고리에 따라 [Marketplace 가이드](/appstore/)에 문서화되어 있습니다.
* **Releases** – 이 탭에는 프레임워크 버전 및 UUID와 같은 세부 정보와 함께 컴포넌트의 모든 버전이 나열됩니다.
    * **Download**를 클릭하여 각 버전을 다운로드할 수 있습니다.
    * 어떤 버전 옆에 <text class="badge badge-pill badge-react" style="margin-left:0px">{{< icon name="react" color="blue" >}} REACT-CLIENT</text> 라벨이 있으면, 이 버전은 React Client 애플리케이션에 최적화되어 있음을 의미합니다. 이 라벨은 위젯에만 사용됩니다.
* **Reviews** – 이 탭에는 컴포넌트에 대한 사용자 리뷰가 표시됩니다.
    * 리뷰 날짜별로 탐색, 정렬하고 평점별로 필터링하여 컴포넌트에 대한 인사이트를 얻을 수 있습니다.
    * **Only show my reviews** 체크박스를 선택하여 자신의 리뷰를 확인할 수 있습니다.
    * **Write Review**를 클릭하여 텍스트를 추가하고, 컴포넌트를 평가하고, 리뷰를 제출할 수 있는 섹션을 열 수 있습니다.
        * 리뷰를 작성하기 전에 오른쪽의 **Tips for Sharing Your Review**를 먼저 읽을 수 있습니다. 
        * 이제 리뷰를 남기지 않고 4 또는 5점을 평가할 수 있습니다. 3점, 2점, 1점 평가에는 리뷰가 필수입니다.
        * Marketplace 홈 페이지의 [My Reviews](/appstore/home-page/#my-reviews) 페이지에서 모든 리뷰를 찾을 수 있습니다.
    * 컴포넌트 개발자인 경우 리뷰에 답글을 달 수 있습니다.
* **Developers** – 이 탭에는 컴포넌트를 가장 최근에 업데이트한 개발자의 이름과 [Mendix Profile](/portal/mendix-profile/) 링크가 표시됩니다.
