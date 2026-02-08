---
title: "모듈 종속성 추가"
url: /howto8/mobile/notif-add-module-depends/
weight: 52
description: 푸시 알림 모듈 종속성을 추가하기 위한 튜토리얼입니다.
---

## 소개

이 사용 방법은 [Push Notifications Connector](/appstore/modules/push-notifications/) 모듈에 대한 모듈 종속성을 추가하는 데 도움이 됩니다. 사용 사례에 필요한 모듈만 설치하면 됩니다. 앱에 필요한 모듈이 설치되면 [Push Notifications 모듈 구현](/howto8/mobile/notif-implement-module/)으로 이동할 수 있습니다.

## Encryption 모듈 구현

[Encryption](https://marketplace.mendix.com/link/component/1011) 모듈이 이미 앱에 구현되어 있는 경우 이 섹션을 건너뛰십시오. 다음을 수행하여 이 모듈을 구현하십시오:

1. Studio Pro에서 Marketplace를 여십시오.
1. *Encryption*을 검색하십시오.
1. [Encryption](https://marketplace.mendix.com/link/component/1011) 모듈을 여십시오. 
1. **Download**를 클릭하십시오.
1. [Encryption marketplace 가이드](/appstore/modules/encryption/)의 지침에 따라 이 모듈을 설정하십시오.

## Community Commons 모듈 구현

[Community Commons](https://marketplace.mendix.com/link/component/170) 모듈이 이미 앱에 구현되어 있는 경우 이 섹션을 건너뛰십시오. 다음을 수행하여 이 모듈을 구현하십시오:

1. Studio Pro에서 Marketplace를 여십시오.
1. *Community Commons*를 검색하십시오.
1. [Community Commons](https://marketplace.mendix.com/link/component/170) 모듈을 여십시오.
1. **Download**를 클릭하십시오.
1. 추가 설치가 필요하지 않습니다. 모듈에 대해 더 알고 싶다면 [Community Commons marketplace 가이드](/appstore/modules/community-commons-function-library/)를 방문하십시오.

## Nanoflow Commons 모듈 구현

[Nanoflow Commons](https://marketplace.mendix.com/link/component/109515/Mendix/Nanoflow-Commons) 모듈이 이미 앱에 구현되어 있는 경우 이 섹션을 건너뛰십시오. 다음을 수행하여 이 모듈을 구현하십시오:

1. Studio Pro에서 Marketplace를 여십시오.
1. *Nanoflow commons*를 검색하십시오.
1. [Nanoflow commons](https://marketplace.mendix.com/link/component/109515/Mendix/Nanoflow-Commons) 모듈을 여십시오.
1. **Download**를 클릭하십시오.
1. 추가 설치가 필요하지 않습니다. 모듈에 대해 더 알고 싶다면 [Nanoflow Commons marketplace 가이드](/appstore/modules/nanoflow-commons/)를 방문하십시오.

## Native Mobile Resources 모듈 구현

[Native Mobile Resources](https://marketplace.mendix.com/link/component/109513/Mendix/Native-Mobile-Resources) 모듈이 이미 앱에 구현되어 있는 경우 이 섹션을 건너뛰십시오. 다음을 수행하여 이 모듈을 구현하십시오:

1. Studio Pro에서 Marketplace를 여십시오.
1. *Native mobile resources*를 검색하십시오.
1. [Native mobile resources](https://marketplace.mendix.com/link/component/109513/Mendix/Native-Mobile-Resources) 모듈을 여십시오.
1. **Download**를 클릭하십시오.
1. 알림과 상호 작용해야 하는 모든 사용자 역할에 `NativeMobileResources.User` 모듈 역할을 추가하십시오.
1. 추가 설치가 필요하지 않습니다. 모듈에 대해 더 알고 싶다면 [Native mobile resources marketplace 가이드](/appstore/modules/native-mobile-resources/)를 방문하십시오.

## Atlas Core 모듈 구현

{{% alert color="warning" %}}
Atlas UI Resources 모듈은 Atlas 2와 함께 더 이상 사용되지 않습니다. 아직 Atlas 2를 사용하고 있다면, [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

Mendix Studio Pro 9.0 이상의 앱에 Atlas Core 모듈을 구현하십시오. [Atlas Core](https://marketplace.mendix.com/link/component/117187/Mendix/Atlas-Core) 모듈이 이미 앱에 구현되어 있는 경우 이 섹션을 건너뛰십시오. 다음을 수행하여 이 모듈을 구현하십시오:

1. Studio Pro에서 Marketplace를 여십시오.
1. *Atlas Core*를 검색하십시오.
1. [Atlas Core](https://marketplace.mendix.com/link/component/117187/Mendix/Atlas-Core) 모듈을 여십시오.
1. **Download**를 클릭하십시오.
1. 추가 설치가 필요하지 않습니다. 모듈에 대해 더 알고 싶다면 [Atlas UI marketplace 가이드](https://marketplace.mendix.com/link/component/104730)를 방문하십시오.

필요한 종속성을 설치했으므로 이제 [Push Notifications 모듈 구현](/howto8/mobile/notif-implement-module/)으로 이동할 수 있습니다.
