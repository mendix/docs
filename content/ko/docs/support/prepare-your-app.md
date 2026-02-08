---
title: "지원을 위한 앱 준비"
url: /support/prepare-your-app/
weight: 10
description: "Mendix 지원 포털에서 영향을 받는 앱을 선택하기 위해 앱 권한을 구성하는 방법을 설명합니다."
aliases:
    - /developerportal/support/change-affected-apps.html
    - /developerportal/support/change-affected-apps
    - /developerportal/support/prepare-your-project/
    - /developerportal/support/prepare-your-app/
    - /community-tools/support/prepare-your-app/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[Mendix 지원 포털](https://support.mendix.com/)에서 사용자는 제출된 요청에 대해 영향을 받는 앱을 선택할 수 있습니다. 선택할 수 있는 앱은 사용자의 앱 권한을 기반으로 합니다(조직에 관계없이). **Deploy** 또는 **Capture**에 대한 **Edit** 권한이 있는 사용자는 해당 앱에 대한 티켓을 제출하고 볼 수 있습니다.

Mendix 지원팀이 올바른 앱을 표시할 수 있도록 온프레미스 앱의 앱 식별자를 알아야 합니다. 따라서 온프레미스 사용자는 앱의 **App ID**를 제공해 주십시오. 티켓을 제출할 수 있어야 하는 모든 [팀](/developerportal/general/team/) 구성원을 초대하고 지정된 역할을 부여한 후, 앱 정보와 함께 Mendix 지원팀에 문의하십시오.

이 가이드의 단계는 Mendix 지원 포털에서 티켓 요청을 제출할 수 있도록 생성하는 모든 새 앱에 대해 수행해야 합니다. 새 Mendix 애플리케이션을 만들 때 이를 표준 프로세스로 설정하는 것을 권장합니다.

## 팀원에게 티켓 제출 권한 부여

팀원에게 티켓 제출 권한을 부여하는 방법에는 두 가지가 있습니다: 팀원으로 추가할 때 올바른 역할을 할당하거나, 기존 팀원의 역할을 변경하는 것입니다.

### 새 팀원에게 권한 부여

앱 팀에 사용자를 추가하고 특정 앱에 대한 티켓 제출 권한을 부여하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com/)에서 앱을 엽니다.
2. [팀](/developerportal/general/team/) 페이지로 이동합니다.
3. **Invite Member**를 클릭하여 이 앱에 관한 지원 티켓을 제출/조회할 수 있어야 하는 사용자를 초대합니다.
4. 앱에 대한 티켓 생성 권한을 부여하려는 사용자에게 다음 역할 중 하나를 할당합니다:
    * **Business Engineer**
    * **Product Owner**
    * **Scrum Master**

    이러한 역할에는 **Deploy** 또는 **Capture**에 대한 **Edit** 권한이 설정되어 있으므로 앱에 대한 지원 티켓을 제출/조회할 수 있습니다. 권한 설정에 대한 자세한 내용은 **팀**의 [팀 관리](/developerportal/general/team/#managing) 섹션을 참조하십시오.

5. 설정을 완료하려면 **앱 이름**과 **Project ID**(앱의 [일반](/developerportal/settings/general-settings/) 페이지에서 확인할 수 있습니다)를 [support@mendix.com](https://support.mendix.com/)으로 이메일을 보내십시오.

### 기존 팀원에게 권한 부여

기존 앱 구성원에게 티켓 제출 권한을 부여하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com/)에서 앱을 엽니다.
2. **Security** 페이지로 이동합니다.
3. 접근 권한이 필요한 사용자의 **ROLE**을 다음 중 하나로 변경합니다:
    * **Business Engineer**
    * **Product Owner**
    * **Scrum Master**

    **Role settings**를 클릭하여 자체 역할을 만들고 기존 역할의 권한을 사용자 정의할 수도 있습니다. 자세한 내용은 **앱 역할**의 [팀 역할](/developerportal/general/app-roles/#team-roles) 섹션을 참조하십시오.

4. 설정을 완료하려면 **앱 이름**과 **App ID**를 [support@mendix.com](mailto:support@mendix.com)으로 이메일을 보내십시오.

## 추가 읽기

* [온프레미스](/developerportal/deploy/on-premises-design/)
