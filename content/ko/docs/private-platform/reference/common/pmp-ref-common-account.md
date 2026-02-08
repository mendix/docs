---
title: "Private Mendix Platform 기능 - 내 계정 관리"
linktitle: "내 계정 관리"
url: /private-mendix-platform/reference-guide/common/account/
description: "Private Mendix Platform의 내 계정 관리 메뉴에 대한 세부 정보를 제공합니다."
weight: 90
---

## 소개

**Manage My Account** 메뉴에는 계정을 만들거나 관리하는 데 필요한 옵션이 포함되어 있습니다. 다음 섹션으로 구성됩니다:

### 프로필

**Profile** 페이지를 사용하여 프로필 사진을 추가하고 프로필 정보를 확인 및 편집하십시오. 일부 필드는 고정되어 있거나 관리자만 편집할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-manage-profile.png" class="no-border" >}}

### 비밀번호 변경

**Change Password** 페이지를 사용하여 다음 단계에 따라 비밀번호를 재설정하십시오:

1. 현재 비밀번호를 입력하십시오.
2. 새 비밀번호를 입력하십시오.
3. 새 비밀번호를 확인하십시오.
4. **Update**를 클릭하십시오.

### 개인 접근 토큰(Personal Access Token)

개인 접근 토큰(PAT)은 API 및 기타 비GUI 상호 작용을 통해 PMP와 상호 작용할 때 사용자 계정과 해당 권한을 식별하는 데 사용됩니다. 예를 들어, 외부 서비스와 PMP 간의 자동화된 API 호출을 설정할 때 사용합니다. 자세한 내용은 [Private Mendix Platform용 API](/apidocs-mxsdk/apidocs/private-platform/)를 참조하십시오.

{{< figure src="/attachments/private-platform/pmp-manage-pat.png" class="no-border" >}}

**Personal Access Tokens** 페이지는 이전에 생성한 개인 접근 토큰 목록과 함께 다음 정보를 표시합니다:

* **Name**
* **Scope**
* **Expiry date**
* **Actions**
    * **View details** - 토큰 범위를 설명합니다.
    * **Copy PAT** - 토큰을 클립보드에 복사합니다.
    * **Delete** - 토큰을 삭제합니다.
* **New Token** - 다음 정보로 새 토큰을 만듭니다:
    * **Input Name** – 토큰에 의미 있는 이름을 입력하십시오.
    * **Expiry Date** – 회사 제한 사항에 따라 토큰의 만료일을 지정하십시오. 모범 사례로서 토큰의 만료 시간을 1년 이상으로 설정하지 마십시오.
    * **Project scopes** – 이 토큰에 필요한 범위를 지정하십시오. 위험과 영향을 줄이기 위해 토큰 범위에 대해 최소 권한 원칙을 따르고 넓은 범위의 토큰 하나를 만드는 대신 용도별로 다른 토큰을 사용하십시오.

### 서비스 자격 증명

서비스 자격 증명은 Private Mendix Platform이 통합된 버전 관리 서버와 같은 외부 서비스와 사용자 계정의 ID를 설정하는 데 사용됩니다. 관리자가 구성한 설정에 따라 통합을 통해 자동으로 프로비저닝되거나 사용자 계정에 대해 수동으로 구성될 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-manage-credentials.png" class="no-border" >}}

**Service Credentials** 페이지는 이전에 생성한 각 자격 증명 세트에 대한 카드를 표시합니다. 이 페이지에서 자격 증명을 편집, 삭제 또는 새로 생성할 수 있습니다.

### 알림 {#manage-notifications}

**Notifications** 페이지에 표시되는 기본 설정은 현재 버전의 Private Mendix Platform에서는 변경할 수 없으며 정보 제공 목적으로만 제공됩니다. 향후 릴리스에서는 이메일 및 푸시 알림과 같은 추가 알림 채널에 대한 기본 설정을 이 페이지에서 구성할 수 있을 것입니다.
