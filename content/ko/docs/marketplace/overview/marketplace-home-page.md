---
title: "Marketplace 홈 페이지"
url: /appstore/home-page/
weight: 1
no_list: true
description: "Mendix Marketplace에 대한 개요 정보를 제공합니다."
aliases:
    - /appstore/general/
    - /appstore/general/app-store-overview/
    - /community/app-store/
    - /community/app-store/app-store-overview/
    - /developerportal/app-store/app-store-overview/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
콘텐츠 지원에 대한 자세한 내용은 [Marketplace 콘텐츠 지원](/appstore/marketplace-content-support/)을 참조하십시오.
{{% /alert %}}

## 소개

[Mendix Marketplace](https://marketplace.mendix.com/)는 즉시 사용 가능한 샘플 앱은 물론 커넥터, 모듈, 위젯 등 자체 앱을 더 빠르게 구축하는 데 사용할 수 있는 다양한 컴포넌트에 대한 액세스를 제공합니다. Marketplace를 통해 직접 만든 콘텐츠를 공유할 수도 있습니다.

이 문서에서는 Mendix Marketplace의 다양한 부분에 대한 진입점인 Marketplace 홈 페이지의 다양한 섹션을 설명합니다.

## 탐색 {#explore}

페이지 상단의 검색 상자를 사용하여 Mendix Marketplace를 탐색할 수 있습니다. 
다음 필터를 사용하여 검색 결과를 세분화할 수 있습니다:

* **Support** – 사용 가능한 지원 카테고리 중에서 선택합니다. 자세한 내용은 [Marketplace 콘텐츠 지원](/appstore/marketplace-content-support/)을 참조하십시오.
* **Visibility** – [공개 또는 비공개](/appstore/submit-content/#support-licensing) 콘텐츠를 표시할지 선택합니다.
* **Content Types** – 표시할 콘텐츠 유형을 선택합니다. 자세한 내용은 *Marketplace*의 [Marketplace 컴포넌트 유형](/appstore/#components-type) 섹션을 참조하십시오.
* **Category** – 컴포넌트 또는 서비스가 특성, 기능 또는 목적을 공유하는 특정 도메인을 선택합니다.
* **Industry** – 컴포넌트 또는 서비스가 사용되는 특정 분야 또는 비즈니스 도메인을 선택합니다.
* **Compatibility** – Studio Pro 메이저 버전 간에 선택합니다.
* **Rating** – 사용자 [리뷰](#my-reviews)에서의 평점을 기반으로 컴포넌트를 표시합니다.

{{% alert color="info" %}}
Studio Pro에서 Marketplace 콘텐츠를 찾고 설치하는 방법에 대한 자세한 내용은 *Marketplace 콘텐츠 사용*의 [Studio Pro에서 콘텐츠 찾기 및 다운로드](/appstore/use-content/#downloading) 섹션을 참조하십시오.
{{% /alert %}}

## 개인 {#personal}

**Personal** 카테고리에는 다음 섹션에 설명된 항목이 포함됩니다.

### 초안 {#my-drafts}

**Drafts**를 클릭하면 **My Drafts** 페이지가 열리며, 시작한 모든 Marketplace 콘텐츠의 초안을 보고 관리할 수 있습니다.

총 초안 수, 게시 준비가 되었거나 승인 대기 중인 초안, 거부된 초안에 대한 세부 정보도 확인할 수 있습니다.

각 항목에 대해 가능한 **Status** 항목은 다음과 같습니다:

* **Incomplete draft** – 초안이 불완전하며 제출하기 전에 추가 정보가 필요합니다.
* **Ready to publish** – 초안이 Mendix Marketplace에 게시할 준비가 되었습니다.
* **Waiting for approval** – 컴포넌트가 [Mendix에서 검토 중](/appstore/submit-content/governance-process/)입니다. 
* **Declined** – Mendix의 검토 후 초안이 거부되었습니다. 이메일 알림 및 초안 편집 페이지에서 구체적인 피드백을 확인할 수 있습니다.

컴포넌트에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하여 다음 옵션에 액세스합니다:

* **Edit Draft** – 컴포넌트의 초안 페이지에 액세스하여 컴포넌트 세부 정보 편집을 계속합니다.
* **Submit Draft** – 컴포넌트가 제출할 준비가 되고 오류가 없으면 검토를 위해 제출합니다.
* **Withdraw Draft** – 승인을 위해 제출한 후 검토 프로세스에서 콘텐츠를 철회합니다. 콘텐츠가 초안 상태로 돌아갑니다.
* **Delete** – 초안을 삭제합니다.

다음 사항을 명심하십시오: 

* 한 번에 하나의 초안 버전만 존재할 수 있으므로, 하나의 초안 버전이 진행 중이면 다른 것을 시작할 수 없습니다.
* 진행 중인 초안 버전이 있는 경우 편집하거나 삭제할 수 있습니다.
* 진행 중인 초안 버전이 있고 다른 사용자에게 할당된 경우 자신에게 재할당할 수 있습니다. 

초안 버전 만들기에 대한 자세한 내용은 *Marketplace에 업로드하기*의 [기존 Marketplace 콘텐츠 업데이트](/appstore/submit-content/#updating) 섹션을 참조하십시오.  

### 컴포넌트 {#my-content}

**Components**를 클릭하면 **My Components** 페이지가 열리며, 최소 하나의 버전을 만든 Marketplace 컴포넌트 목록을 볼 수 있습니다.    
목록에서 컴포넌트 이름을 클릭하면 [상세 페이지](/appstore/component-details/)가 열립니다.

콘텐츠 관리 옵션에 액세스하려면 컨텍스트 **Actions** 메뉴를 클릭하십시오:

* **Add New Release** – 컴포넌트의 새 버전을 추가합니다.
* **Manage Versions** – 컴포넌트의 모든 버전을 편집하거나 게시 취소합니다.      
    다음 사항을 명심하십시오:

    * 컴포넌트가 [콘텐츠 그룹](#content-groups) 내에서 [보호](#group-content)되는 경우, [그룹 멤버](#members)가 모든 버전을 게시 취소할 수 있습니다.
    * 컴포넌트가 콘텐츠 그룹 내에서 보호되지 않는 경우, 자신이 게시한 버전만 게시 취소할 수 있습니다.
    * **Unpublish**를 선택하여 컴포넌트의 모든 버전을 제거합니다.
    * 게시 취소 옵션은 지원 중단된 컴포넌트에만 사용할 수 있습니다.

    편집에 대한 자세한 내용은 *Marketplace에 업로드하기*의 [새 Marketplace 콘텐츠 추가](/appstore/submit-content/#adding) 섹션을 참조하십시오.    
    
* **Deprecate Component** – 컴포넌트를 지원 중단하고 대체 컴포넌트를 선택합니다.    
    컴포넌트 지원 중단에 대한 자세한 내용은 [Marketplace 콘텐츠 지원 중단](/appstore/deprecate-content/)을 참조하십시오.

컴포넌트에 **Private** 라벨이 있으면 해당 컴포넌트가 회사의 비공개 Marketplace 콘텐츠임을 의미합니다. 이를 구성하는 방법에 대한 자세한 내용은 *Marketplace에 업로드하기*의 [새 Marketplace 콘텐츠 추가](/appstore/submit-content/#adding) 섹션을 참조하십시오. 이 콘텐츠는 [게스트](#guests)와 공유할 수 있습니다.

[그룹 콘텐츠](#group-content)로 할당된 컴포넌트에는 할당된 [콘텐츠 그룹](#content-groups)에 대한 라벨이 표시됩니다.

### 공유 받은 콘텐츠 {#shared-with-me}

이 페이지에는 귀하를 [게스트](#guests)로 표시한 다른 회사에서 공유한 비공개 콘텐츠가 포함됩니다.

### 저장됨 {#saved-components}

**Saved**를 클릭하면 **Saved Content** 페이지가 열리며, [저장한](/appstore/component-details/) Marketplace 콘텐츠를 표시합니다. 

컴포넌트 이름을 클릭하여 [상세 페이지](/appstore/component-details/)에 액세스합니다.

이 컴포넌트를 관리하는 옵션에 액세스하려면 컨텍스트 메뉴를 클릭하십시오:

* **Receive/Stop Email Notifications** – 이메일 알림 수신을 시작하거나, 활성화된 경우 알림을 중지합니다.
* **Unsave** – 저장된 콘텐츠에서 컴포넌트를 제거합니다.

### 리뷰 {#my-reviews}

**Reviews**를 클릭하면 **My Reviews** 페이지가 열리며, 다른 사용자가 작성한 [My Components](#my-content)에 대한 리뷰와 다른 콘텐츠에 대해 작성한 **My reviews**가 포함됩니다.

## 회사 {#company}

**Company** 카테고리에는 다음 섹션에 설명된 항목이 포함됩니다.

### 컴포넌트 {#company-content}

**Components**를 클릭하면 **My Company Components** 페이지가 열리며, 회사가 비공개로 Marketplace에 게시한 모든 콘텐츠를 볼 수 있습니다.

컴포넌트 이름을 클릭하여 [상세 페이지](/appstore/component-details/)에 액세스합니다.

이 콘텐츠를 관리하는 옵션에 액세스하려면 컨텍스트 메뉴를 클릭하십시오.

이 메뉴의 옵션은 [My Components](#my-content) 섹션과 동일합니다.

### 그룹 {#content-groups}

**Groups**를 클릭하면 **Content Groups** 페이지가 열립니다. 이는 모든 사용자에게 표시되지만, [Mendix 관리자](/control-center/company-settings/)만 콘텐츠 그룹을 만들고 삭제할 수 있습니다. [그룹 관리자](#members)와 Mendix 관리자 모두 콘텐츠 그룹 멤버를 관리할 수 있습니다. 

회사 콘텐츠에 대한 다양한 수준의 액세스를 위해 콘텐츠 그룹을 구성할 수 있습니다. 각 콘텐츠 그룹 페이지의 사용 가능한 구성 탭은 다음 섹션에 설명되어 있습니다.

다음 표는 콘텐츠 그룹의 역할과 권한을 분류합니다:

| 역할                                       | 그룹 관리 (만들기 및 삭제) | 그룹 멤버 관리 | 콘텐츠를 그룹에 할당 | 콘텐츠 관리 (새 릴리스 추가, 버전 관리) | 그룹 콘텐츠 보기 및 다운로드 | 그룹 목록 보기 |
| ------------------------------------------- | ------------------------------- | -------------------- | ----------------------- | -------------------------------------------------- | ----------------------------- | --------------- |
| Mendix 관리자                                | ✔                               | ✔                    | ✔                       | ✔                                                  | ✔                             | ✔               |
| 그룹 관리자                                 | ✘                               | ✔                    | ✔                       | ✔                                                  | ✔                             | ✔               |
| 그룹 멤버                                | ✘                               | ✘                    | ✘                       | ✔                                                  | ✔                             | ✔               |
| 조직 멤버 (그룹에 속하지 않음) | ✘                               | ✘                    | ✘                       | ✘                                                  | ✔                             | ✔               |
| 게스트                                       | ✘                               | ✘                    | ✘                       | ✘                                                  | ✔                             | ✘               |

#### 콘텐츠 탭 {#group-content}

이 탭에서 이 그룹의 멤버만 관리할 수 있는 콘텐츠를 할당할 수 있습니다. 콘텐츠 그룹에 컴포넌트를 할당하려면 **Assign Content**를 클릭하고 대화 상자에서 Marketplace 컴포넌트를 선택합니다.

{{% alert color="info" %}}
컴포넌트는 한 번에 하나의 콘텐츠 그룹에만 할당할 수 있습니다. 컴포넌트가 이미 다른 콘텐츠 그룹에 할당된 경우, 이 대화 상자에 표시되지 않습니다.
{{% /alert %}}

이 콘텐츠를 관리하는 옵션에 액세스하려면 컨텍스트 메뉴를 클릭하십시오.

이 메뉴의 옵션은 [My Components](#my-content) 섹션과 동일합니다. **Unassign from Group** 버튼은 [그룹 관리자](#members)만 사용할 수 있으며, 콘텐츠 그룹에서 콘텐츠를 제거하는 데 사용할 수 있습니다.

#### 멤버 탭 {#members}

이 탭에서 회사의 Mendix Platform 사용자의 이메일 주소를 입력하고 **Add Member**를 클릭하여 콘텐츠 그룹 멤버로 추가할 수 있습니다. 콘텐츠 그룹 멤버는 그룹에 할당된 [콘텐츠](#group-content)를 관리할 수 있습니다.

멤버가 추가되면 권한 수준을 선택할 수 있습니다: **Group Member** 또는 **Group Admin**.

멤버를 제거하려면 이름 옆에 있는 **Remove**를 클릭합니다.

#### 게스트 탭 {#guests}

게스트는 이 그룹의 선택된 비공개 [콘텐츠](#group-content)를 다운로드할 수 있는 조직 외부의 Mendix Platform 사용자입니다. 

게스트를 추가하려면 상자에 이메일 주소를 입력하고 **Add Guest**를 클릭합니다. 비공개 콘텐츠에 대한 액세스를 알리는 이메일을 받게 됩니다. 

그러면 게스트는 [공유 받은 콘텐츠](#shared-with-me) 페이지에서 공유된 모든 비공개 Marketplace 콘텐츠를 볼 수 있습니다.

{{% alert color="info" %}}
게스트는 등록된 Mendix Platform 사용자여야 합니다. 그렇지 않으면 공유된 콘텐츠에 액세스할 수 없습니다.
{{% /alert %}}

게스트를 제거하려면 **Remove**를 클릭합니다.

#### 설정 탭 {#settings}

{{% alert color="info" %}}
이 탭은 [그룹 관리자](#members) 및 [Mendix 관리자](/control-center/company-settings/)만 액세스할 수 있습니다.
{{% /alert %}}

이 탭에서 **Group Name** 및 **Group Description**을 입력할 수 있습니다.

콘텐츠 그룹을 삭제하려면 그룹 관리자 또는 Mendix 관리자가 **Delete Group**을 클릭할 수 있습니다.

## Studio Pro 다운로드

최신 버전의 [Studio Pro](/releasenotes/studio-pro/)를 다운로드하십시오.    

## 컴포넌트 게시

개발한 새 Marketplace 콘텐츠를 공유하십시오.

자세한 내용은 [Marketplace에 콘텐츠 업로드하기](/appstore/submit-content/)를 참조하십시오.
