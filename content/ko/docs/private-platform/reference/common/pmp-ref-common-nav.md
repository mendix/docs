---
title: "Private Mendix Platform 기능 - 상단 탐색 바"
linktitle: "상단 탐색 바"
url: /private-mendix-platform/reference-guide/common/navigation/
description: "Private Mendix Platform의 상단 탐색 메뉴에 대한 세부 정보를 제공합니다."
weight: 20
---

## 소개

상단 탐색 바는 플랫폼 내 현재 위치(예: *Apps* 또는 *Marketplace*)를 표시합니다. 로고 및 제목과 같은 바의 브랜딩은 회사 관리자(Company Admin)가 맞춤 설정할 수 있습니다.

탐색 바에서 다음 항목에 접근할 수 있습니다:

* [플랫폼 탐색](#navigation) (({{% icon name="layout-1-filled" %}}))
* [알림](#notifications) (({{% icon name="alarm-bell" %}}))
* [계정 메뉴](#account)

### 플랫폼 탐색 {#navigation}

탐색 메뉴에는 앱을 만들거나 관리하는 데 필요한 옵션이 포함되어 있습니다.

{{< figure src="/attachments/private-platform/pmp-navigation-menu.png" class="no-border" >}}

다음 섹션으로 구성됩니다:

* **Make**
    * **Mendix Home** - 이 옵션을 클릭하면 [내 앱](/private-mendix-platform/reference-guide/common/my-apps/) 페이지로 이동합니다.
    * **Group Apps** - 이 옵션을 클릭하면 [내 그룹 앱](/private-mendix-platform/reference-guide/common/group-apps/) 페이지로 이동합니다.
    * **Get Studio Pro** - 이 옵션을 클릭하면 [Studio Pro 다운로드](/private-mendix-platform/reference-guide/common/get-studio/) 페이지로 이동합니다.
* **Manage**
    * **My Content** - 이 옵션을 클릭하면 [내 콘텐츠](/private-mendix-platform/reference-guide/common/my-content/) 페이지로 이동합니다.
    * **Group Content** - 이 옵션을 클릭하면 [그룹 콘텐츠](/private-mendix-platform/reference-guide/common/group-content/) 페이지로 이동합니다.
    * **Company Content** - 이 옵션을 클릭하면 [회사 콘텐츠](/private-mendix-platform/reference-guide/common/company-content/) 페이지로 이동합니다.

### 알림 {#notifications}

**알림** 센터는 다음 이벤트에 대한 알림을 표시합니다:

* 앱 이벤트
    * 앱에 추가되었습니다.
    * 앱에서 제거되었습니다.
    * 앱에서의 역할이 변경되었습니다.
    * 사용자가 앱에 대한 접근 권한을 요청했습니다.
    * 앱의 소유자로 지정되었습니다.
    * 앱에 새 피드백이 접수되었습니다.
* 배포 이벤트
    * 배포 패키지가 성공적으로 생성되었습니다.
    * 오류로 인해 배포 패키지를 생성할 수 없습니다.
    * 앱이 배포되었습니다.
    * 오류로 인해 앱을 배포할 수 없습니다.
* Marketplace 이벤트
    * 팔로우 중인 Marketplace 컴포넌트가 업데이트되었습니다.
    * 소유한 Marketplace 컴포넌트가 게시 승인되었습니다.
    * 소유한 Marketplace 컴포넌트의 새 버전이 게시 승인되었습니다.
    * 소유한 Marketplace 컴포넌트가 게시 거부되었습니다.
    * 소유한 Marketplace 컴포넌트의 새 버전이 게시 거부되었습니다.
    * Marketplace 컴포넌트의 소유자로 지정되었습니다.

{{< figure src="/attachments/private-platform/pmp-notifications.png" class="no-border" >}}

알림을 클릭하면 관련 페이지 또는 링크를 볼 수 있습니다. 왼쪽의 상태 점을 클릭하여 알림을 읽음 또는 읽지 않음으로 표시할 수도 있습니다. 알림 기본 설정을 지정하려면 [내 계정 관리 > 알림](/private-mendix-platform/reference-guide/common/account/#manage-notifications)으로 이동하십시오.

### 계정 메뉴 {#account}

계정 메뉴에는 계정을 만들거나 관리하는 데 필요한 옵션이 포함되어 있습니다.

{{< figure src="/attachments/private-platform/pmp-account-menu.png" class="no-border" >}}

다음 섹션으로 구성됩니다:

* **Manage My Account** - 이 옵션을 클릭하면 [내 계정 관리](/private-mendix-platform/reference-guide/common/account/) 섹션으로 이동합니다.
* **Manage My Group** - 이 옵션은 그룹 관리자(Group Admin) 역할을 가진 사용자에게만 표시됩니다. 클릭하면 [내 그룹 관리](/private-mendix-platform/reference-guide/common/manage-group/) 페이지로 이동합니다.
* **Switch to Admin Mode** - 이 옵션은 회사 관리자(Company Admin) 및 시스템 관리자(System Admin) 역할을 가진 사용자에게만 표시됩니다. 클릭하면 Private Mendix Platform의 관리 섹션으로 이동합니다.
* **Show Onboarding** - 이 옵션을 클릭하면 이전에 숨긴 [온보딩](/private-mendix-platform/reference-guide/common/my-apps/#onboarding) 섹션을 다시 활성화합니다.
* **Sign out** - 이 옵션을 클릭하면 세션을 종료하고 로그인 화면으로 돌아갑니다.
