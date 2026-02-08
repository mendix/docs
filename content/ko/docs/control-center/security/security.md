---
title: "Control Center의 보안 설정"
linktitle: "설정"
url: /control-center/security-settings/
description: "Control Center의 보안 카테고리에 있는 설정 페이지에 대해 설명합니다."
weight: 10
no_list: false
---

{{% alert color="info" %}}
Control Center에서 멤버란 개발 프로세스에 참여하는 Mendix 플랫폼 사용자를 의미합니다. Mendix 플랫폼에서 구축된 앱의 최종 사용자를 의미하지 않습니다.
{{% /alert %}}

## 소개

Control Center **보안** 카테고리의 **설정** 페이지에서는 보안 설정을 구성하고, 싱글 사인온 구성을 관리하며, 회사의 보안 이력을 볼 수 있습니다.

## 보안 설정 탭

### 비밀번호 정책

Mendix는 Mendix 플랫폼 또는 Studio Pro에 로그인하는 데 사용되는 모든 플랫폼 비밀번호에 대해 90일 비밀번호 유효 기간을 적용합니다.
Mendix 관리자가 [SSO(BYOIDP)를 설정](/control-center/security/set-up-sso-byoidp/)하면 조직의 IdP가 모든 로그인과 비밀번호를 관리합니다. 이 경우 Mendix 플랫폼의 비밀번호 유효 기간 정책은 더 이상 적용되지 않습니다.

{{% alert color="info" %}}
Mendix 플랫폼은 더 이상 90일 이외의 비밀번호 유효 기간을 구성하거나 비밀번호 만료를 비활성화하는 것을 허용하지 않습니다. 이 기능은 2026년 3월 31일에 제거될 예정입니다.
{{% /alert %}}

### 이메일 서명 {#disable-enable-digital-signing-emails}

Mendix 플랫폼은 발신자 [no-reply@notifications.mendix.com](mailto:no-reply@notifications.mendix.com) 및 [no-reply@platform-mail.mendix.com](mailto:no-reply@platform-mail.mendix.com)의 이메일 내용에 디지털 서명을 합니다. 이메일 내용에 디지털 서명을 함으로써 Mendix는 이메일 수신자에게 이메일 내용이 전송 중에 변경되지 않았음을 보장합니다. 보안상의 이유로 이 기능은 기본적으로 활성화되어 있습니다. 그러나 이메일 내용의 디지털 서명이 수신자에게 이메일 전달을 방해하는 경우 Mendix 관리자가 회사 도메인의 수신자에게 전송되는 이메일에 대해 이 기능을 비활성화할 수 있습니다. 자세한 내용은 아래의 [이메일 내용의 디지털 서명을 비활성화하는 이유](#why-disable-email-signing) 섹션을 참조하십시오.

이메일의 디지털 서명을 비활성화하려면 토글을 끄십시오. 이메일의 디지털 서명을 활성화하려면 토글을 켜십시오. 이 설정은 [회사가 등록한 모든 이메일 도메인](/control-center/company-settings/#company-email-domains)으로 전송되는 이메일에 영향을 미칩니다.

#### 이메일 내용의 디지털 서명 비활성화 {#why-disable-email-signing}

이메일 내용의 디지털 서명은 보안에 기여하지만 비활성화해야 하는 경우가 있습니다.

디지털 서명은 "외부 이메일 경고"와 같은 다른 이메일 안전 조치와 충돌할 수 있습니다. 이 기능은 이메일에 맞춤형 HTML 경고를 추가할 수 있습니다. Mendix 이메일은 변경할 수 없으므로 일부 이메일 서버는 원본 메시지를 빈 이메일로 감싸고 원본 이메일을 첨부 파일로 추가합니다. 이는 사용자 경험에 도움이 되지 않으며 이메일이 의심스러워 보이게 하여 사용자 참여에 영향을 미칩니다. 또한 사용자가 특정 텍스트 내용이 있는 이메일을 검색하기 어렵게 만듭니다.

### 프로젝트에 외부 사용자 초대 허용 {#allow-external-users}

기본적으로 조직 외부의 멤버를 프로젝트에서 협업하도록 초대할 수 있습니다.

그러나 IT 정책에 따라 [회사 이메일](/control-center/company-settings/#company-email-domains) 주소, 즉 회사 도메인과 일치하는 이메일 주소를 가진 개인만 프로젝트에서 작업해야 하는 경우 이 옵션을 비활성화할 수 있습니다.

{{% alert color="info" %}}
이 옵션을 비활성화하면 회사 도메인 외부의 이메일 주소로의 모든 초대가 차단됩니다. 그러한 사용자를 초대하려는 모든 시도는 오류를 발생시킵니다.
{{% /alert %}}

기존 외부 협업자는 이 변경에 영향을 받지 않습니다. [외부 멤버](/control-center/members/#external-members) 페이지에서 언제든지 수동으로 제거할 수 있습니다.

예외적으로 외부 멤버를 일시적으로 초대해야 하는 경우:

1. 외부 초대를 다시 활성화하십시오.
2. 외부 멤버를 추가하십시오.
3. 제한을 다시 적용하기 위해 설정을 비활성화하십시오.

### 애플리케이션 데이터 복제 {#application-data-replication}

{{% alert color="info" %}}
애플리케이션 데이터 복제 설정은 아직 프로비저닝되지 않은 앱 및 환경에만 영향을 미칩니다.

이 기능은 [프리미엄 고객](/developerportal/deploy/mendix-cloud-deploy/#additional-resources)에게만 제공됩니다.
{{% /alert %}}

기본적으로 Mendix는 프리미엄 고객에게 고가용성 및 재해 복구 조치를 포함하는 SLA를 제공합니다. 이는 애플리케이션 데이터(파일 스토리지 및 데이터베이스 백업)가 리전 내의 다른 가용 영역으로 복제되고 보조 리전으로도 복제되어 기본 리전에서 장애가 발생한 경우에도 데이터에 액세스할 수 있음을 의미합니다.

보조 리전은 가능한 한 기본 리전과 동일한 정치적 리전에 있습니다. 그러나 항상 가능한 것은 아닙니다. 각 기본 리전에 사용되는 보조 리전은 *백업*의 [데이터 위치](/developerportal/operate/backups/#data-location) 섹션에서 찾을 수 있습니다.

데이터가 기본 리전에 유지되고 보조 리전으로 복제되지 않도록 하려면 **비활성화**를 클릭하여 애플리케이션 데이터 복제를 비활성화하십시오. 이것이 재해 복구 및 SOC2 규정 준수와 관련하여 Mendix와의 서비스 수준 계약에 미치는 영향을 수락했는지 확인해야 합니다. 이 변경을 수행하면 프로비저닝되는 모든 새 환경에서 데이터가 다른 리전으로 복제되지 않습니다.

**활성화**를 클릭하여 애플리케이션 데이터 복제를 다시 켤 수 있습니다.

## ID 제공자(IdP) 통합

### 싱글 사인온 탭

**싱글 사인온** 탭에서 Mendix 플랫폼과 기업 ID 제공자 간의 아이덴티티 페더레이션을 설정할 수 있습니다. 이 기능은 [자체 ID 제공자 사용(BYOIDP)](/control-center/security/set-up-sso-byoidp/)이라고 합니다.

### IdP 관리 Mendix 관리자 {#idp-managed-mendix-admins}

Mendix 플랫폼에 대한 싱글 사인온(SSO)을 설정하면 이 ID 제공자(IdP) 통합을 확장하여 누가 Mendix 관리자 역할을 부여받는지 제어할 수 있습니다. 액세스 관리 관점에서 Mendix 관리자와 같은 권한 있는 역할의 중앙 관리는 인정된 모범 사례입니다. 이 접근 방식은 기존 Mendix 관리자가 적절한 통제 없이 다른 사람에게 자유롭게 관리자 권한을 부여할 수 있는 권한 확장의 위험을 완화합니다.

{{% alert color="info" %}}
프로젝트 수준 역할을 프로젝트 멤버에게 할당하는 프로세스를 자동화하려면 [Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/)를 IAM 인프라에 통합할 수 있습니다.
{{% /alert %}}

IT 프로세스와 IT 시스템을 사용하여 특정 직원에 대한 Mendix 관리자 역할을 요청하고 승인하고, 자격이 있는 직원을 IdP의 사용자 그룹에 포함할 수 있습니다. Mendix 플랫폼은 그룹 멤버십을 기반으로 로그인 시 사용자에게 Mendix 관리자 역할을 할당하거나 제거합니다. IdP 관리 관리자를 사용하면 Control Center를 통해 Mendix 관리자를 수동으로 할당할 수 없습니다.

{{% alert color="info" %}}
IdP 관리 Mendix 관리자 기능은 현재 Control Center에서 셀프 서비스 구성이 부족하여 [제한 가용성](/releasenotes/release-status/#limited-availability) 상태입니다. 따라서 Mendix 지원 온보딩이 필요합니다. 온보딩을 준비하려면 `jaap.francke@mendix.com`에 문의하십시오.
{{% /alert %}}

이 기능을 Mendix 플랫폼에서 활성화하면 기존 Mendix 관리자 세트에 영향을 미칠 수 있습니다. 변경 사항은 로그인 시 적용됩니다:

* 사용자가 로그인하고 IdP의 Mendix 관리자 그룹의 멤버가 아닌 경우 Mendix는 Mendix 관리자 역할을 취소합니다.
* 사용자가 로그인하고 IdP의 Mendix 관리자 그룹의 멤버인 경우 Mendix는 Mendix 관리자 역할을 할당하거나 기존 할당을 유지합니다.

결과적으로 [Mendix 관리자](/control-center/mendix-admins-page/) 개요는 점진적으로 IdP의 Mendix 관리자 그룹과 동기화됩니다.

#### 온보딩 전제 조건

IdP 관리 Mendix 관리자 기능에 온보딩을 요청하기 전에 다음 전제 조건을 충족하는지 확인하십시오:

1. 이 기능을 사용하려면 프리미엄 플랫폼 라이선스가 있어야 합니다.
2. [SSO 또는 BYO-IdP 설정](/control-center/security/set-up-sso-byoidp/)에 설명된 대로 활성 SSO 또는 BYO-IdP 구성을 설정해야 합니다.
3. 현재 Mendix 관리자를 포함하는 IdP의 사용자 그룹이 있어야 합니다. 일반적으로 IT 부서에서 이 그룹을 관리해야 하며, 요청 또는 승인 프로세스가 있을 수 있습니다.
4. SSO 중 IdP가 Mendix 플랫폼에 보내는 ID 토큰에는 사용자가 Mendix 관리자 그룹의 멤버인지 여부를 나타내는 클레임이 포함되어야 합니다. 구성을 위해 Mendix는 클레임 이름과 예상 값을 알아야 합니다. Entra ID를 사용하는 경우 일반적인 설정에서는 ID 토큰에 다음 클레임이 있어야 합니다:

    ```text
    "roles" : "Mendix-admin"
    ```

    Mendix 플랫폼은 모든 클레임 이름과 값을 유연하게 사용할 수 있습니다.

5. BYOIDP 기능을 사용하여 Mendix 관리자를 관리하는 경우(위의 [IdP 관리 Mendix 관리자](#idp-managed-mendix-admins) 섹션 참조), Mendix 플랫폼은 SSO 요청에 특별한 것(예: 특정 스코프 값 또는 클레임 요청 매개변수)을 포함하지 않습니다. IdP의 Mendix 클라이언트 구성에 따라 IdP가 필요한 클레임을 포함할 것으로 예상합니다.

## 보안 이력 탭

**보안 이력** 탭에서는 애플리케이션 데이터 복제 설정에 대한 변경 사항의 자세한 이력(변경 시기와 변경자 포함)을 볼 수 있습니다.
