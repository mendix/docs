---
title: "Environments"
url: /appstore/partner-solutions/apd/rg-two-environments/
---

## Environments 개요

[Apps 개요](/appstore/partner-solutions/apd/rg-two-apps/)에서 앱을 선택하면 해당 앱에 사용 가능한 환경의 개요가 표시됩니다. 기존 환경을 선택하거나 새 환경을 추가할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-environments/environments.png" class="no-border" >}}

기존 환경을 선택하면 해당 환경의 [대시보드](/appstore/partner-solutions/apd/rg-two-dashboard/)가 표시됩니다.

환경이 녹색 대신 빨간색으로 표시되면 APM 에이전트가 APM Manager에 도달할 수 없다는 의미입니다. 이는 다음 원인 중 하나 때문일 수 있습니다:

* 환경이 다운되었거나 인터넷에 연결되지 않음
* APM 에이전트가 아직 설치되지 않음
* APM 에이전트가 제대로 구성되지 않음

## 새 환경 추가

새 환경을 추가하려면 **Environments** 개요에서 **New environment**를 클릭합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-environments/new_environment.png" class="no-border" >}}

모든 환경은 처음에 Mendix Studio Pro 환경으로 시작됩니다. Mendix Studio Pro 환경은 APM에서 이를 생성한 사용자에게만 표시됩니다.

프로젝트 관리자(Scrum Master 역할)의 경우 유형을 변경하기 위한 추가 **Modeler environment** 스위치(Mendix Studio Pro용)를 사용할 수 있습니다. 스위치를 **No**로 설정하면 운영, 수락 또는 테스트로 변경할 수 있습니다.

각 환경에는 이름이 있어야 합니다. 환경 이름은 APM에서 표시 목적으로만 사용되며, 호스트명/서버명과 일치할 필요가 없습니다.
다른 설정에 대한 설명은 [APM 설정](/appstore/partner-solutions/apd/rg-two-settings/)을 참조하십시오.

환경 생성 시 APM Agent 구성을 위한 API 키가 생성됩니다(나중에 환경 설정에서 새 키를 생성할 수 있습니다). API 키 및 APM Agent 설치에 대한 자세한 내용은 [APM 2 설치 가이드](/appstore/partner-solutions/apd/ig-two/)를 참조하십시오.
