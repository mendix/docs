---
title: "접근 관리"
url: /developerportal/portfolio-management/access-management/
weight: 15
description: "Mendix 포트폴리오 관리 앱의 접근 관리(Access Management) 페이지를 설명합니다."
---

## 소개

**접근 관리(Access Management)** 페이지에서 포트폴리오에 대한 사용자 접근을 보고 관리할 수 있습니다.

{{< figure src="/attachments/developerportal/portfolio-management/access-management.png" >}}

## 멤버 {#members}

**Members** 탭은 포트폴리오에 접근할 수 있는 모든 사용자를 나열합니다. 사용자 이름, 이메일 또는 회사로 사용자를 검색할 수 있습니다. 역할과 상태로 사용자를 필터링할 수도 있습니다. 목록에는 다음 항목이 포함됩니다:

* **User Name** – 사용자의 이름입니다.
* **Email** – 사용자의 이메일입니다.
* **Company** – 사용자가 속한 회사를 표시합니다.
* **Status** – 사용자의 활성 또는 비활성화 상태를 표시합니다.

  {{% alert color="info" %}}Mendix 관리자는 Control Center의 [멤버](/control-center/members/) 페이지에서 사용자를 활성화하거나 비활성화할 수 있습니다.{{% /alert %}}

* **Role** – 사용자의 역할입니다. 사용자는 포트폴리오 관리자, 기여자 또는 뷰어가 될 수 있습니다. 각 역할의 권한에 대한 자세한 내용은 이 섹션 아래의 표를 참조하세요.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) (포트폴리오 관리자만 사용 가능) – 버튼을 클릭하면 다음 항목이 있는 메뉴가 열립니다:

    * **Edit Role** – 사용자의 역할을 변경할 수 있습니다.
    * **Remove** – 포트폴리오에서 사용자를 제거할 수 있습니다.

아래 표는 포트폴리오 관리자, 기여자, 뷰어의 권한을 보여줍니다:

| 작업                                   | 포트폴리오 관리자                                         | 기여자                                               | 뷰어\*                                                  |
| ---------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| 사용자 초대                             | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| 사용자 권한 및 역할 제거        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| 사용자 권한 및 역할 업데이트        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| 사용자 접근 정보 보기             | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| 포트폴리오 설정 관리                | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| 포트폴리오 삭제                     | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| 이니셔티브 생성                       | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 기존 이니셔티브 편집                | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 이니셔티브 아카이브 및 복원          | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 이니셔티브 삭제                       | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 이니셔티브 세부 정보 보기                  | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| 코멘트 작성                           | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| 코멘트 편집                            | 본인 코멘트                                              | 본인 코멘트                                              | 본인 코멘트                                              |
| 코멘트 삭제                          | 본인 코멘트                                              | 본인 코멘트                                              | 본인 코멘트                                              |
| 코멘트 보기                            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| 이니셔티브 첨부 파일 추가               | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 이니셔티브 첨부 파일 삭제            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 이니셔티브 첨부 파일 보기 및 다운로드 | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| 이니셔티브 내보내기 및 가져오기            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| Epic 연결 및 해제                    | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| 연결된 Epic 보기                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

\* 공개 포트폴리오의 경우 모든 회사 멤버(포트폴리오 멤버 제외)는 포트폴리오의 뷰어와 동일한 권한을 가집니다.

### 포트폴리오 나가기

포트폴리오를 나가려면 멤버 목록 위 오른쪽의 **Leave** 버튼을 클릭하세요.

포트폴리오의 유일한 포트폴리오 관리자인 경우 **Leave**를 클릭하면 다음 두 가지 옵션 중 하나를 선택하라는 대화 창이 열립니다:

* 포트폴리오를 나갈 때 포트폴리오의 모든 데이터와 함께 영구적으로 삭제하거나
* 포트폴리오를 나가기 전에 다른 사용자를 새 포트폴리오 관리자로 할당합니다.
    * 다른 사용자를 새 포트폴리오 관리자로 할당하려면 **Assign Portfolio Manager**를 클릭한 후 기존 멤버를 선택하여 역할을 포트폴리오 관리자로 편집하거나 새 멤버를 초대하여 새 포트폴리오 관리자로 지정하세요.

### 새 사용자 추가 {#add-users}

{{% alert color="info" %}}[포트폴리오 관리자](#members)만 새 사용자를 추가할 수 있습니다.{{% /alert %}}

1. **Access Management**로 이동하세요.
2. **Members** 탭의 오른쪽 상단에서 **Add Users**를 클릭하세요.
3. 대화 상자에서 초대할 사용자의 이메일 주소를 입력하세요. **Email Address** 필드는 회사의 모든 활성 사용자가 포함된 드롭다운 목록도 제공합니다. 여러 사용자를 초대해야 하는 경우 여러 이메일 주소를 추가할 수 있습니다. 사용자는 회사 내부 또는 외부 사람일 수 있습니다. 회사 외부 사용자의 경우 이름과 프로필 사진이 표시되지 않습니다.
4. 추가하는 사용자의 **Access Role**을 선택하세요 – **Portfolio Manager**, **Contributor** 또는 **Viewer**. 이는 이 포트폴리오의 모든 이니셔티브에 대한 접근 수준을 결정합니다.
5. **Add to List**를 클릭하세요.
6. **Send Invites**를 클릭하세요.

초대한 사용자는 이메일로 알림을 받고 **Access Management** 페이지에 나타납니다.

회사 외부 사용자의 경우 초대를 수락해야 합니다. 초대를 수락하거나 거절할 때까지 **Pending Invites** 탭에 나타납니다. 수락하면 **Members** 탭에 나타납니다.

회사 내 사용자의 경우 초대를 수락할 필요가 없습니다. Mendix 계정이 있으면 즉시 접근 권한이 부여되어 **Members** 탭에 나타납니다. Mendix 계정이 없으면 **Pending Invites** 탭에 나타납니다. Mendix 계정을 생성하고 포트폴리오 관리에 로그인하면 즉시 접근 권한이 부여되어 **Members** 탭에 나타납니다.

### 비활성화된 사용자 제거

{{% alert color="info" %}}[포트폴리오 관리자](#members)만 비활성화된 사용자를 제거할 수 있습니다.{{% /alert %}}

포트폴리오에 비활성화된 멤버가 있으면 목록 위 오른쪽에 **Remove Deactivated Users** 버튼이 사용 가능해집니다. 버튼을 클릭하면 이 포트폴리오에서 비활성화된 모든 사용자를 한 번에 제거할 수 있습니다. 제거할 비활성화된 사용자가 이니셔티브를 소유하고 있는 경우 사용자를 포트폴리오에서 제거한 후 해당 이니셔티브에는 더 이상 소유자가 없습니다.

## 접근 요청 {#access-requests}

{{% alert color="info" %}}
**Access Requests** 탭은 포트폴리오 관리자에게만 표시됩니다.
{{% /alert %}}

같은 회사의 사용자가 제한 또는 공개 포트폴리오에 참여를 요청할 수 있습니다.

제한 포트폴리오의 경우 포트폴리오 카드에서 **Request to Join**을 클릭하여 [포트폴리오 환경 개요](/developerportal/portfolio-management/#portfolio-landscape)에서 참여를 요청할 수 있습니다. 공개 포트폴리오의 경우 포트폴리오를 연 후 왼쪽 하단의 **Request to Join**을 클릭하여 참여를 요청할 수 있습니다. 접근 요청은 포트폴리오 관리자의 승인이 필요합니다. 포트폴리오 관리자는 새 접근 요청에 대한 [알림](/portal/global-navigation/#notifications)을 자동으로 받습니다.

{{< figure src="/attachments/developerportal/portfolio-management/access-requests.png" >}}

**Access Requests** 탭은 포트폴리오의 모든 열린 접근 요청을 표시합니다. 사용자 이름으로 사용자를 검색할 수 있습니다. 역할로 사용자를 필터링할 수도 있습니다. 목록에는 다음 항목이 포함됩니다:

* **Requested By** – 접근을 요청한 사용자의 이름과 아바타입니다.
* **Role** – 사용자가 요청한 접근 역할입니다.
* **Date** – 요청이 이루어진 날짜입니다.
* **Reject** – 요청을 거부합니다.
* **Approve** – 접근 요청을 승인하고 사용자에게 포트폴리오 접근 권한을 부여할 수 있는 대화 상자가 열립니다. 대화 상자에서 사용자가 요청한 것과 다른 접근 역할을 할당할 수도 있습니다.

## 대기 중인 초대 {#pending-invites}

{{% alert color="info" %}}
**Pending Invites** 탭은 포트폴리오 관리자에게만 표시됩니다.
{{% /alert %}}

포트폴리오 관리자가 회사 외부 사용자를 포트폴리오에 참여하도록 초대하면 사용자는 이메일로 초대를 받습니다. 사용자는 먼저 초대를 수락해야 이 포트폴리오에 접근할 수 있습니다. 사용자가 초대를 수락하거나 거부할 때까지 초대는 **Pending Invites** 탭에 나타납니다. 수락하면 **Members** 탭에 나타납니다.

**Pending Invites** 탭은 외부 사용자의 모든 대기 중인 초대를 표시합니다. 이메일로 사용자를 검색할 수 있습니다. 역할로 사용자를 필터링할 수도 있습니다. 목록에는 다음 항목이 포함됩니다:

* **Email** – 초대된 사용자의 이메일을 표시합니다.
* **Role** – 초대된 사용자의 접근 역할을 표시합니다.
* **Invite Date** – 초대가 발송된 날짜를 표시합니다.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – 버튼을 클릭하면 다음 항목이 있는 메뉴가 열립니다:

    * **Edit Role** – 대기 중인 초대의 접근 역할을 변경할 수 있습니다.

    * **Delete** – 대기 중인 초대를 취소할 수 있습니다.
