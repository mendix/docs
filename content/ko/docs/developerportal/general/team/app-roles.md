---
title: "앱 역할"
url: /developerportal/general/app-roles/
description: "Mendix 플랫폼 내의 앱 팀, 앱/기술 담당자 역할 및 권한을 설명합니다."
aliases:
    - /developerportal/settings/technical-contact.html
    - /developerportal/general/technical-contact.html
    - /developerportal/company-app-roles.html
    - /developerportal/company-app-roles/technical-contact.html
    - /developerportal/app-roles/index.html
    - /developerportal/settings/technical-contact
    - /developerportal/general/technical-contact
    - /developerportal/company-app-roles
    - /developerportal/company-app-roles/technical-contact
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

**앱(Apps)**에서 [앱](/developerportal/#my-apps) 및 [팀](/developerportal/general/team/)에 대해 정의된 역할은 아래에 설명되어 있습니다.

## 팀 멤버

사용자가 팀에 참여하려면 **Invite Members** 권한이 있는 현재 팀 멤버의 초대가 필요합니다.

{{% alert color="info" %}}
팀 외부의 사용자는 현재 팀 멤버를 볼 수 없고 팀의 [기술 담당자(Technical Contact)](#technical-contact)만 확인할 수 있으므로, 기술 담당자에게 초대를 요청하는 것이 쉬울 것입니다. 따라서 기술 담당자에게 앱을 관리할 수 있는 올바른 권한(예: **Scrum Master** 역할)을 부여하는 것이 좋은 관행입니다.
{{% /alert %}}

## 팀 역할 {#team-roles}

팀 내에서 팀 멤버에게 할당할 수 있는 사전 정의된 역할이 있습니다. 각 팀 역할은 다음 요소에 따라 권한 영역에 접근할 수 있습니다:

* 누가 백로그 및 현재 [Sprint](/developerportal/project-management/epics/planning/)를 편집할 수 있는지
* 누가 앱 모델을 편집할 수 있는지
* 누가 노드 정보에 접근할 수 있는 [노드 권한](/developerportal/deploy/node-permissions/)을 가지는지
* 누가 앱의 [설정](/developerportal/general-settings/)을 변경할 수 있는지

Mendix 관리자는 [Control Center](/control-center/roles-and-permissions/)에서 회사 내 팀 역할을 편집하고 새로 만들 수 있습니다.

## 기술 담당자(Technical Contact) {#technical-contact}

배포된 모든 앱에는 기술 담당자가 있습니다. 배포된 앱의 [설정](/developerportal/general-settings/#general)을 보면 앱의 기술 담당자를 확인할 수 있습니다. 기술 담당자는 앱 관련 질문에 대해 연락할 수 있는 사용자입니다.

{{< figure src="/attachments/developerportal/general/team/app-roles/technical-contact.png" alt="" class="no-border" >}}

{{% alert color="info" %}}
기술 담당자에게 Scrum Master 역할을 부여하세요. 기술 담당자는 일반 사용자의 연락 담당이므로 모든 Scrum Master를 대신하여 앱 작업을 수행할 수 있어야 합니다.
{{% /alert %}}

기술 담당자는 앱의 기술적 배포 설정을 관리합니다. 기술 담당자는 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) 또는 다양한 [배포](/deployment/) 플랫폼을 담당할 수 있습니다. Mendix 애플리케이션은 항상 기술 담당자가 할당된 상태로 설정되고 제공됩니다. Free App의 기술 담당자는 앱이 처음 배포될 때 할당됩니다. 기술 담당자는 Mendix가 애플리케이션의 라이선스를 활성화하기 전에 MxID가 필요합니다.

기술 담당자의 책임은 Mendix Cloud에서 호스팅하는지 온프레미스에서 호스팅하는지에 따라 달라집니다.

### Mendix Cloud 책임

Mendix Cloud의 앱에서 기술 담당자는 앱의 첫 번째 연락 담당이며 다음을 수행할 수 있습니다:

* 애플리케이션의 예정된 유지보수 작업에 대한 알림을 받습니다.
* 클라우드 노드의 **Monitoring** 탭에서 알림 설정을 구성합니다.
* 문제가 발생하면 Mendix 앱에서 알림을 받습니다. 예: CPU 부하가 높거나 디스크 공간이 부족한 경우.
* 환경을 조정합니다. 예: 크기 조정 및 새 환경 추가.

기술 담당자로서 Mendix 포털에서 Mendix Cloud 노드에 대한 모든 일반 작업을 수행할 수 있습니다. 또한 팀 멤버의 접근 권한을 관리하여 앱을 배포, 중지, 시작하고 기타 작업을 수행할 수 있습니다. 자세한 내용은 [노드 권한](/developerportal/deploy/node-permissions/)을 참조하세요.

기술 담당자는 갱신, 활성화 및 업그레이드를 포함한 라이선스 관리도 담당합니다. 또한 Mendix 지원 부서의 첫 번째 연락 담당입니다. Mendix는 Mendix Cloud 앱 갱신을 담당하며, 라이선스를 확장하려면 Customer Success Manager(CSM)에게 문의하세요.

### 온프레미스 책임

Mendix 앱이 온프레미스에 배포되면 고객의 자체 인프라에서 실행됩니다. 이 시나리오에서 라이선스를 관리하기 위해 Mendix는 이메일을 통해 기술 담당자에게 라이선스 갱신 알림을 보냅니다. 기술 담당자로서 라이선스를 확장하려면(예: 더 많은 사용자) Account Executive에게 문의해야 합니다.

### 기술 담당자 변경 {#change-technical-contact}

{{% alert color="info" %}}
앱당 하나 이상의 기술 담당자를 둘 수 없습니다.

라이선스가 있는 Mendix 앱에 대해서만 기술 담당자를 변경할 수 있습니다. Free App이나 Mendix Cloud 외부에서 실행되는 앱의 기술 담당자는 변경할 수 없습니다.
{{% /alert %}}

현재 앱의 기술 담당자인 경우 다음과 같이 기술 담당자 역할을 다른 팀 멤버에게 이전할 수 있습니다:

1. 앱의 [환경](/developerportal/deploy/environments/) 페이지로 이동합니다.
2. [권한](/developerportal/deploy/environments/#permissions-tab) 탭으로 전환합니다.
3. 새 기술 담당자가 될 팀 멤버의 **Change to Technical Contact**를 클릭합니다. 이 작업을 수행하기 위해 먼저 인증해야 할 수 있습니다. 인증에 성공한 후 **Change to Technical Contact**를 다시 클릭하여 이 작업을 완료하세요.

이 작업은 모든 환경의 기술 담당자를 변경합니다.

{{% alert color="info" %}}
Mendix 관리자는 Deploy API 버전 4를 사용하여 다른 팀 멤버에게 기술 담당자 역할을 부여할 수도 있습니다. 자세한 내용은 [Deploy API – 버전 4](/apidocs-mxsdk/apidocs/deploy-api-4/)를 참조하세요.
{{% /alert %}}
