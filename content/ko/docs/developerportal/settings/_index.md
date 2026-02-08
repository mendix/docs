---
title: "설정"
url: /developerportal/general-settings/
weight: 11
description: "앱의 설정(Settings) 페이지를 설명합니다."
aliases:
    - /developerportal/settings/general-settings
    - /developerportal/settings/api-key
    - /developerportal/collaborate/general-settings
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #managing-app-users below is mapped from App > General > Settings > Manage App Users and the Mendix SSO module, so it should not be removed or changed.
---

## 소개

**앱(Apps)**의 [내비게이션 패널](/developerportal/#navigation-pane)에 있는 **설정(Settings)** 페이지는 앱의 개요를 제공합니다.

**설정(Settings)** 페이지에는 항상 다음 탭이 포함됩니다:

* **General**
* **Access Management**

다음 탭은 **App Settings** 권한이 있는 사용자만 사용할 수 있습니다:

* **Cloud Settings**
* **Project Management**
* **History**
* **Story Archive**

## 페이지 헤더 {#settings-page-header}

페이지 헤더에는 다음 정보가 표시됩니다:

* 앱 이미지 – 이미지를 클릭하여 변경할 수 있습니다.
* 앱 이름 – 이름 옆의 연필 아이콘을 클릭하여 앱 이름을 변경할 수 있습니다.
    Mendix 포털에서 앱 이름을 변경해도 Studio Pro에서는 이름이 변경되지 않습니다. Studio Pro의 앱 이름은 *.mpr* 파일에 연결되어 있습니다. 그러나 *.mpr* 파일의 이름 변경은 지원되지 않으며, 이를 강력히 권장하지 않습니다. 자세한 내용은 *버전 제어*의 [Mendix MPR 저장소](/refguide/version-control/#mpr-format) 섹션을 참조하세요.
* 앱을 소유한 회사.
* **Watch** / **Stop Watching** 토글 – 이 앱에 대한 알림을 활성화하거나 비활성화할 수 있습니다.

{{% alert color="info" %}}
**App Settings** 권한이 있는 사용자만 이미지와 앱 이름을 편집할 수 있습니다.
{{% /alert %}}

## 일반(General) {#general}

이 탭에서 다음 항목을 확인할 수 있습니다:

* 프로젝트 로고
* 프로젝트 **Description**
* **Project ID**
* 앱의 [기술 담당자(Technical Contact)](/developerportal/general/app-roles/#technical-contact)
* **Categories**
* **Danger Zone**
    * **Leave Project**
    * **Deactivate Project**
    * **Delete Project**

{{% alert color="info" %}}
**App Settings** 권한이 있는 사용자만 다음 작업을 수행할 수 있습니다:

* 프로젝트 설명 변경.
* 프로젝트의 카테고리 할당 변경.
* 프로젝트 비활성화 또는 삭제. 자세한 내용은 [앱 나가기, 삭제 또는 비활성화](/developerportal/general/leave-delete-app/)를 참조하세요.
{{% /alert %}}

## 클라우드 설정(Cloud Settings) {#cloud-settings}

{{% alert color="info" %}}
**App Settings** 권한이 있는 사용자만 클라우드 플랫폼을 변경할 수 있습니다.
{{% /alert %}}

**Cloud Settings** 탭에서 앱을 배포할 클라우드 플랫폼을 선택할 수 있습니다. 사용 가능한 클라우드 플랫폼 선택은 Mendix 계정의 기능에 따라 달라집니다.

SAP와 같은 Mendix Cloud가 아닌 플랫폼을 선택하면 설정을 완료하기 위한 페이지로 리디렉션됩니다. Mendix Cloud를 선택하면 추가 설정이 필요하지 않습니다.

다양한 클라우드 플랫폼을 구성하기 위한 구체적인 단계는 여기에서 제공됩니다:

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
* [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)

## 접근 관리(Access Management) {#managing-app-users}

**Access Management** 탭에서 앱 사용자를 관리하고 초대할 수 있습니다. 앱 사용자는 특정 환경에서 배포된 앱에 접근할 수 있는 최종 사용자입니다. 배포된 앱을 사용하고 테스트하며 피드백을 제공할 수 있습니다.

특정 환경에 배포된 앱의 사용자를 관리하거나 초대하려면 해당 환경의 **Manage Users** 또는 **Invite Users**를 클릭하세요. 자세한 내용은 이 페이지의 [사용자 관리](#manage-users) 및 [사용자 초대](#invite-users) 섹션을 참조하세요.

이 탭에서는 다음 요구 사항을 충족하는 환경만 볼 수 있습니다:

* [Mendix SSO(Single Sign-On)](/developerportal/deploy/mendix-sso/)가 [Mendix SSO](/appstore/modules/mendix-sso/) 모듈을 사용하여 앱에 구현되어 있습니다. 자세한 내용은 [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/)을 참조하세요.
* 다른 사용자를 관리할 수 있는 사용자 역할이 현재 할당되어 있습니다. 자세한 내용은 *사용자 역할*의 [사용자 관리 속성](/refguide/user-roles/#user-management) 섹션을 참조하세요.

{{% alert color="info" %}}
비프로덕션 환경에 애플리케이션을 배포할 때 배포하는 사용자와 기술 담당자(Technical Contact)에게 항상 관리자(Administrator) 사용자 역할이 할당됩니다.

프로덕션 환경에 애플리케이션을 배포할 때 기술 담당자에게 항상 관리자 사용자 역할이 할당됩니다. 환경을 볼 수 없는 경우 기술 담당자에게 다른 사용자를 관리할 수 있는 사용자 역할을 할당해 달라고 요청하세요.
{{% /alert %}}

### 사용자 관리 {#manage-users}

환경에 대해 **Manage Users**를 클릭하면 제거하거나 편집할 수 있는 현재 앱 사용자 목록이 포함된 대화 상자가 열립니다:

앱 사용자를 환경에서 제거하려면 해당 이름 옆의 **Remove**를 클릭하세요.

앱 사용자의 역할을 편집하려면 해당 이름 옆의 **Edit**를 클릭하세요. **User** 또는 **Administrator**와 같은 이러한 역할의 권한은 Mendix Studio Pro의 [앱 보안](/refguide/app-security/#user-roles)에서 앱의 사용자 역할에 대해 구성한 것에 해당합니다. 사용자 정의 역할을 생성한 경우 여기에서 보고 할당하려면 앱을 먼저 게시해야 합니다.

{{% alert color="info" %}}
앱 사용자가 [그룹](/control-center/groups/)을 통해 앱 환경에 대한 접근 권한을 부여받은 경우, Mendix 관리자만 해당 환경에서 사용자를 제거하거나(그룹에서 제거하여) 해당 그룹 정책에 의해 부여된 역할을 편집할 수 있습니다.
{{% /alert %}}

### 사용자 초대 {#invite-users}

앱에 새 앱 사용자를 초대하려면 해당 환경 내에서 또는 **Manage Users** 창에서 **Invite Users**를 클릭하고 다음 단계를 따르세요:

1. 초대할 최종 사용자의 이메일 주소를 입력하세요.
2. **Include your app team**을 클릭하여 [팀](/developerportal/general/team/)의 모든 멤버에 대한 초대를 포함하세요. 팀에 참여하도록 초대된 사람은 앱 사용자로 자동 추가되지 않으므로 이 기능이 유용할 수 있습니다.
3. **Add to invitee list**를 클릭하세요.
4. 앱 사용자의 역할을 선택하세요(예: **User** 또는 **Administrator**). 이러한 역할의 권한은 Mendix Studio Pro의 [앱 보안](/refguide/app-security/#user-roles)에서 앱의 사용자 역할에 대해 구성한 것에 해당합니다. 사용자 정의 역할을 생성한 경우 여기에서 보고 할당하려면 앱을 먼저 게시해야 합니다.
5. **Next**를 클릭하여 초대를 보내세요.

초대받은 사람은 Mendix 계정에 대한 접근 권한을 부여하도록 요청하는 이메일을 받게 됩니다. 권한을 부여한 후 배포된 앱으로 이동됩니다.

## 프로젝트 관리(Project Management) {#project-management}

{{% alert color="info" %}}
**App Settings** 권한이 있는 사용자만 이러한 설정을 관리할 수 있습니다.
{{% /alert %}}

**Project Management** 탭에서 앱의 팀 계획 도구를 선택할 수 있습니다. 기본적으로 [Epics](/developerportal/project-management/epics/)가 선택된 도구입니다.

Jira에서 프로젝트를 관리하는 경우 **앱(Apps)**의 앱을 Jira에 연결할 수 있습니다. 자세한 내용은 [Jira 커넥터](/developerportal/project-management/jira-connector/)를 참조하세요.

## Maia 설정 {#maia-settings}

{{% alert color="info" %}}
**App Settings** 권한이 있는 사용자만 이 설정을 토글할 수 있습니다.
{{% /alert %}}

**Maia Settings** 탭에서 앱에 대한 Maia 기능을 활성화하거나 비활성화할 수 있습니다.

Maia를 활성화하면 프로젝트에 대한 설명을 제공하라는 메시지가 표시됩니다. 이를 통해 Mendix AI 지원 응답이 앱에 더 정확하고 관련성 높게 됩니다.

## 이력(History) {#history}

{{% alert color="info" %}}
**App Settings** 권한이 있는 사용자만 이력을 볼 수 있습니다.
{{% /alert %}}

**History** 탭은 앱의 협업 활동을 표시합니다. 이 페이지에서 어떤 변경이 이루어졌는지, 누가 수행했는지, 언제 발생했는지 확인할 수 있습니다.

이력 항목을 선택하고 **Show item**을 클릭하면 스토리, Sprint 또는 [피드백 항목](/developerportal/app-insights/feedback/)의 세부 정보가 표시됩니다.

## 더 읽기

* [앱 나가기 및 삭제](/developerportal/general/leave-delete-app/)
