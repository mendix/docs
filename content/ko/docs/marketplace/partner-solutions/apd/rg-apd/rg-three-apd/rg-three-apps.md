---
title: "Apps"
url: /appstore/partner-solutions/apd/rg-three-apps/
---

## Apps 개요

APD의 홈 페이지에는 Mendix [Mendix Portal](/developerportal/)의 라이선스가 부여된 애플리케이션 목록이 알파벳순으로 표시됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/ProjectsDashboard.png" class="no-border" >}}

앱 이름으로 검색하거나 개요에서 직접 하나를 선택할 수 있습니다.

개요에서 앱을 선택하면 해당 앱의 [Environments](/appstore/partner-solutions/apd/rg-three-environments/) 개요가 표시됩니다.

특정 애플리케이션을 더 빨리 찾으려면 애플리케이션 타일에서 **Favorite** ({{% icon name="star" %}})을 클릭하여 즐겨찾기로 표시할 수 있습니다. 즐겨찾기 애플리케이션은 개요에서 먼저 표시됩니다.

애플리케이션이 이 개요에 표시되지 않는 경우 오른쪽 상단 모서리의 **Can't find your App?**을 클릭하십시오.

## 투어 가이드 및 비디오

APD에는 특정 작업을 수행하기 위해 APD를 탐색하는 데 도움이 되는 여러 투어 가이드와 비디오가 있습니다. 프로필 이미지 옆의 문서 아이콘을 클릭하고 **Tour**를 선택하여 접근할 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/Documentation.png" class="no-border" >}}

{{% alert color="info" %}}
기본적으로 APD는 새 사용자의 로그인 시 투어 가이드와 비디오를 표시합니다.
{{% /alert %}}

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/Tour.png" class="no-border" >}}

투어를 시작하면 APD 애플리케이션 전체에서 따라야 할 지침이 포함된 툴팁이 나타납니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/TourStep.png" class="no-border" >}}

## 프로필 메뉴 및 사용자 설정

프로필 메뉴에서 [Mendix Profile](/portal/mendix-profile/) 및 APD 사용자 설정에 대한 링크를 볼 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/profile_menu.png" class="no-border" >}}

사용자 설정에서 홈 페이지를 다음 중 하나로 구성할 수 있습니다:

* 모든 앱(두 드롭다운 메뉴가 모두 비어 있는 경우)
* 앱이 선택되고 **Environment** 드롭다운 메뉴가 비어 있는 경우 [Environments](/appstore/partner-solutions/apd/rg-three-environments/) 개요의 특정 앱
* 특정 앱의 특정 환경

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-apps/user_settings.png" class="no-border" >}}

**User settings** 대화 상자에서 사용할 수 있는 설정입니다:

* **Guide on login** – 로그인 시 투어 가이드 대화 상자가 열리는지 결정합니다(해당 대화 상자 하단의 체크박스로 이 설정을 해제합니다)
* **Paging size** – 통계 및 성능 그리드의 청크 크기를 결정합니다
* **Statistics period** – 통계가 기본적으로 시간별 또는 일별 데이터로 열리는지 결정합니다
* **Time zone** – 날짜/시간 정보의 적절한 표현을 위한 시간대를 결정합니다

**Delete account**를 클릭하면 계정에 속한 [Mendix Studio Pro 환경](/appstore/partner-solutions/apd/rg-three-environments/)을 포함하여 계정이 삭제됩니다. 삭제 후 Mendix Portal로 이동합니다. 앱은 이때 삭제되지 않습니다.

## 정리 {#cleanups}

APD 매니저는 자동 정리를 실행합니다. 이는 일정 기간 후 자동으로 모니터링 데이터를 제거합니다. APD 매니저는 다음 기간을 사용합니다:

* Short – 4시간(대시보드의 CPU와 같은 임시 데이터)
* Medium – 1주(성능 기록 및 로그와 같은 작업 데이터)
* Long – 3개월(통계와 같은 이력 데이터)

푸시핀 버튼을 사용하여 데이터를 보존할 수 있으며, 이는 자동 정리를 방지합니다.

환경은 1년간 사용하지 않으면 자동으로 삭제됩니다.
