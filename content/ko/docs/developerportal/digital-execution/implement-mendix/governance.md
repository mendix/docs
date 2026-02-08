---
title: "Mendix에서 거버넌스 및 제어 설정"
linktitle: "Mendix에서 거버넌스 및 제어 설정"
url: /developerportal/digital-execution/governance-control/
weight: 85
description: "프로세스에 거버넌스를 통합하는 방법을 알아보세요."
aliases:
    - /governance-control/
---

## 소개

이 섹션은 프로세스에 거버넌스를 통합하기 위해 제공하는 기능에 대한 정보를 제공합니다. 이 섹션이 끝나면 다음을 수행할 수 있습니다:

* Mendix가 특정 거버넌스 요구에 맞게 플랫폼을 조정하는 데 제공하는 옵션을 인식합니다.
* Control Center에서 플랫폼을 구성하는 데 필요한 단계를 식별합니다.

### Mendix에서 거버넌스 소개

로우코드 거버넌스는 앱 환경과 개별 앱 개발에 대한 감독을 유지하고 제어하는 것입니다.

{{< figure src="/attachments/quickstarts/leading-mendix-implementation/governance-capability-highlights.png"  >}}

초기에는 거버넌스 책임이 Mendix 관리자에게 있을 것입니다. Mendix 환경이 성장하면 Center of Excellence를 정의할 수 있습니다. 관리자는 [Control Center](/control-center/)를 사용하여 앱 환경 거버넌스의 많은 측면을 관리할 수 있습니다.

Control Center의 여러 고급 기능:

* [대시보드](/control-center/dashboard/)
* [앱](/control-center/apps/)
* [상태 대시보드](/control-center/application-health-dashboard/)
* [자격](/control-center/entitlements/)
* [배포된 앱](/control-center/deployed-apps/)

### Control Center에서 플랫폼 구성

#### 추가 이메일 도메인 클레임

회사에 둘 이상의 이메일 도메인이 있는 경우 모든 이메일 도메인을 클레임해야 합니다. 자세한 내용은 *회사 설정*의 [회사 이메일 도메인](/control-center/company-settings/#company-email-domains)을 참조하세요.

#### 보안 담당자 할당

Mendix 플랫폼의 중요한 보안 이슈가 있을 때 알림을 받는 특정 보안 담당자를 제공하세요. 자세한 내용은 *회사 설정*의 [보안 담당자](/control-center/company-settings/#security-contact)를 참조하세요.

#### 회사 브랜드 및 설명 정의

자세한 내용은 [회사 브랜드](/control-center/company-brand/)를 참조하세요.

#### 새 팀 멤버를 위한 온보딩 경험 개선

자세한 내용은 [회사 온보딩](/control-center/company-onboarding/)을 참조하세요.

#### IDP 또는 SSO 설정

Mendix 플랫폼과 회사 IDP(예: Microsoft Entra ID 또는 Okta) 간에 [SSO를 설정](/control-center/security/set-up-sso-byoidp/)하는 것이 권장됩니다.

#### 비밀번호 정책 설정

SSO를 활성화하지 않는 경우 사용자 비밀번호 만료 여부를 지정하는 것이 권장됩니다. 자세한 내용은 [Control Center 보안 설정](/control-center/security-settings/)을 참조하세요.
