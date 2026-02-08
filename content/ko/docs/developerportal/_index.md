---
title: "앱"
url: /developerportal/
description: "앱(Apps)의 홈 페이지를 설명하고 가이드의 상세 문서로 연결합니다."
weight: 30
no_list: false
description_list: true
cascade:
  - content_type: "Apps"
  - mendix_version: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

[앱(Apps)](https://sprintr.home.mendix.com)은 Mendix 포털의 핵심 구성 요소 중 하나입니다. **앱(Apps)**에서 앱을 생성, 배포 및 관리할 수 있으며 다른 사용자와 협업할 수도 있습니다. **앱(Apps)**은 현재 앱, 회사 앱 및 대기 중인 초대에 대한 요약을 제공합니다.

{{< figure src="/attachments/developerportal/apps-overview.png" alt="Apps Overview" >}}

## 앱 생성 {#create-app}

새 앱을 생성하고 협업을 시작하려면 다음 단계를 따르세요:

1. **앱(Apps)**에서 오른쪽 상단의 **Create App**을 클릭하세요. 프로세스를 안내하는 화면이 열립니다.

2. 앱에 대한 다음 정보를 입력하세요:

    * **App name** – 모든 앱에는 다음 요구 사항을 충족하는 이름이 있어야 합니다:

        * 200자를 초과할 수 없지만, Mendix는 40자 이하를 권장합니다.
        * 문자, 숫자, 밑줄(`_`), 대시(`-`) 또는 공백()을 포함할 수 있습니다.
        * 공백으로 시작해서는 안 됩니다.

    * **App description (Optional)** – 앱에 짧은 설명을 추가하세요. 이것은 선택 사항입니다.
    
    * **App icon** – Mendix가 앱 아이콘을 자동으로 생성합니다. 원하시면 아이콘 색상을 변경할 수 있습니다. 앱을 생성한 후 [앱 설정](/developerportal/general-settings/#general) 페이지에서 사용자 정의 아이콘을 업로드할 수 있습니다.

3. **Next**를 클릭하여 2단계로 이동하세요.

4. 앱의 기반이 될 스타터 앱 템플릿을 선택하세요. 가장 많이 사용되는 스타터 앱 템플릿이 표시됩니다.

    일부 템플릿은 선택 가능한 옵션으로 표시되는 여러 버전을 제공합니다. 기본적으로 안정적인 버전이 미리 선택되어 있습니다.
    
    표시된 것과 다른 스타터 앱 템플릿을 선택하려면 상단의 **discover community starter apps** 링크를 클릭하세요. Marketplace로 이동하여 사용 가능한 모든 스타터 앱 템플릿을 탐색하고 필요에 맞는 템플릿을 선택할 수 있습니다.
    
5. 스타터 앱 템플릿을 선택한 후 **Create App**을 클릭하세요. 선택한 스타터 앱 템플릿에 따라 앱, 리포지토리 및 협업 도구에 대한 접근 권한을 설정하는 데 시간이 걸릴 수 있습니다. 완료되면 앱이 생성됩니다.

## 나의 앱 {#my-apps}

**My Apps** 탭은 [팀(Team)](/developerportal/general/team/) 멤버인 모든 앱을 표시합니다.

삭제 대상으로 표시된 앱만 표시하도록 개요를 필터링할 수 있습니다. 삭제 대상 표시 방법에 대한 자세한 내용은 *Mendix Cloud*의 [사용하지 않는 프로젝트 삭제](/developerportal/deploy/mendix-cloud-deploy/#projects-deletion) 섹션을 참조하세요.

페이지 오른쪽의 드롭다운 메뉴를 사용하여 **Pinned**, **Recent Activity** 또는 **App Name** 알파벳 순서로 앱을 정렬할 수 있습니다.

오른쪽의 **Filter** ({{% icon name="filter" %}}) 버튼을 클릭하여 지정된 **Project Categories**로 필터링할 수 있습니다. 사용 가능한 카테고리가 사이드 패널에 표시됩니다.
카테고리는 회사의 [Mendix 관리자](/control-center/mendix-admins-page/)가 Control Center의 [프로젝트 카테고리](/control-center/project-categories/) 페이지에서 관리합니다.
**App Settings** 권한이 있는 경우 앱의 [설정](/developerportal/general-settings/) 페이지에서 앱에 카테고리를 지정하여 분류 및 검색 기능을 향상시킬 수 있습니다.

{{< figure src="/attachments/developerportal/general/apps/myapps-filter.png" >}}

### 앱 타일 {#app-tiles}

**Pin** ({{% icon name="pin" %}})을 클릭하여 앱 타일을 고정할 수 있습니다. 고정된 앱은 목록 상단에 나타납니다.

앱 감시를 중지하고 해당 앱에 대한 알림을 비활성화하려면 {{% icon name="view" %}} 아이콘을 클릭하여 **You are not watching this app** 툴팁이 표시되도록 하세요. 해당 앱 감시를 다시 시작하려면 {{% icon name="view-off" %}} 아이콘을 클릭하여 **You are watching this app** 툴팁이 표시되도록 하세요.

앱 타일에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하면 **Edit in Mendix Studio Pro** 및 **Leave App** 작업을 빠르게 수행할 수 있습니다.

배포된 앱의 [라이선스 환경](/developerportal/deploy/environments/)으로 이동하려면 앱 타일 하단의 **Environments**를 클릭하세요.

### 내비게이션 패널 {#navigation-pane}

[앱(Apps)](https://sprintr.home.mendix.com/)에서 앱 타일을 클릭하여 앱을 열 수 있습니다. 앱을 연 후 화면 왼쪽의 내비게이션 패널을 사용하여 섹션 간에 이동할 수 있습니다.

내비게이션 패널은 다음과 같은 주요 카테고리로 구분됩니다:

* [일반(General)](/developerportal/general/)
* [프로젝트 관리(Project Management)](/developerportal/project-management/)
* [앱 인사이트(App Insights)](/developerportal/app-insights/)
* [리포지토리(Repository)]()
* [배포(Deployment)](/developerportal/deploy/general/)
* [모니터링(Monitoring)]()

{{% alert color="info" %}}
내비게이션 패널의 기능은 API를 통해서도 접근할 수 있어 서드파티 개발자가 자체 위젯 및 플러그인을 통합할 수 있습니다. 자세한 내용은 [API 문서](/apidocs-mxsdk/apidocs/)를 참조하세요.
{{% /alert %}}

### 대기 중인 초대 {#pending-invitations}

앱 협업에 초대된 경우 **My Apps** 페이지 상단에 초대가 표시됩니다. 초대를 수락하거나 거절할 수 있습니다.

{{% alert color="info" %}}
다른 회사의 사용자가 앱에 초대한 경우에만 초대를 받게 됩니다. 같은 회사의 사용자가 앱에 초대하면 자동으로 추가됩니다.
{{% /alert %}}

## 회사 앱 {#my-company-apps}

**Company Apps** 탭은 [회사](/control-center/company-settings/) 멤버가 생성한 모든 앱을 표시합니다.

앱의 [대상 클라우드](/deployment/) 및 앱을 보거나 편집할 수 있는 [전체 멤버](/control-center/members/)에 대한 세부 정보도 있습니다.

**Recent Activity**, **Created Date**, **Name**으로 앱 순서를 정렬할 수도 있습니다.

## 가이드 카테고리

**앱(Apps)**의 문서는 다음 카테고리로 구분됩니다:
