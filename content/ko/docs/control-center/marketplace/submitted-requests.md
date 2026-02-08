---
title: "제출된 요청"
url: /control-center/submitted-requests/
description: "Mendix Control Center의 제출된 요청 페이지에 대해 설명합니다."
weight: 20
no_list: true
aliases:
    - /control-center/private-marketplace/
---

## 소개

**제출된 요청** 페이지는 조직의 Marketplace에 새 컴포넌트 또는 기존 컴포넌트의 새 버전을 추가하기 위한 요청을 승인하거나 거부할 수 있는 거버넌스 기능을 제공합니다. 다음과 같은 이점을 제공합니다:

* 향상된 보안: 검증되고 승인된 컴포넌트만 회사의 Marketplace에 추가되도록 하여 보안 위험을 완화할 수 있습니다.
* 회사 가이드라인 보장: 컴포넌트를 철저히 검토하여 규정 요구 사항 및 내부 정책을 충족할 수 있습니다.
* 효율적인 관리: 중앙 집중식 승인 프로세스를 제공하여 시간과 리소스를 절약하고 플랫폼 외부의 추가 커뮤니케이션을 방지합니다.

{{% alert color="info" %}}Mendix 관리자 또는 컴포넌트 소유자로서 조직의 Marketplace에서 콘텐츠를 언제든지 게시 취소할 수 있습니다. 이를 통해 조직이 관련 회사 콘텐츠만 포함하여 프라이빗 Marketplace를 깔끔하게 유지할 수 있습니다. 이를 수행하려면 Marketplace 홈 페이지의 [회사 콘텐츠](/appstore/home-page/#company-content)로 이동하고 컴포넌트 카드에서 {{% icon name="three-dots-menu-horizontal" %}} 아이콘을 클릭한 다음 **모든 버전 게시 취소**를 선택하십시오. {{% /alert %}}

**제출된 요청** 페이지에는 다음 탭이 포함되어 있습니다:

* [대기 중인 승인](#pending-approvals)
* [승인 설정](#approval-settings)
* [승인 이력](#approval-history)

## 대기 중인 승인 {#pending-approvals}

{{< figure src="/attachments/control-center/marketplace/submitted-requests/submitted-requests-pending-approvals.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}

**대기 중인 승인** 탭에서 모든 대기 중인 요청을 관리할 수 있습니다.

**대기 중인 승인** 목록에는 승인 또는 거부해야 하는 모든 제출 요청이 다음 세부 정보와 함께 표시됩니다:

* **컴포넌트 이름** – 대기 중인 요청이 있는 컴포넌트의 이름입니다.
* **콘텐츠 유형** – 대기 중인 요청이 있는 컴포넌트의 유형입니다.
* **버전** – 대기 중인 요청이 있는 컴포넌트의 버전입니다.
* **Studio Pro 버전** – 대기 중인 요청이 있는 컴포넌트와 호환되는 Studio Pro 버전입니다.
* **제출자** – 요청 제출자의 이름입니다.
* **제출 날짜** – 요청이 제출된 날짜입니다.

### 요청 세부 정보

**대기 중인 승인** 목록에서 요청의 컴포넌트 이름을 클릭하면 요청의 세부 정보가 새 페이지에 열립니다. 여기에서 컴포넌트에 대해 제공된 모든 정보를 확인하고, *.mpk* 파일을 다운로드하며, 요청을 승인하거나 거부할 수 있습니다.

페이지 상단에서 다음 버튼을 찾을 수 있습니다:

* **승인** – 이 버튼을 클릭하여 요청을 승인합니다. 요청을 승인하면 제출자에게 알림이 전송되고 컴포넌트가 회사의 Marketplace에 게시됩니다.
    승인 확인 창에서 승인된 컴포넌트에 회사 승인 배지를 추가할 수 있습니다.
* **거부** – 이 버튼을 클릭하여 요청을 거부합니다. 이유를 추가할 수도 있습니다. 요청을 거부하면 제출자에게 알림이 전송됩니다.
* **다운로드** – 이 버튼을 클릭하여 컴포넌트의 *.mpk* 파일을 다운로드합니다.

요청 세부 정보 페이지에는 다음 탭도 포함됩니다:

* **일반** – 이 탭에는 콘텐츠 유형, 카테고리, 라이선스, 설명, 커버 이미지와 같은 컴포넌트에 대한 일반 정보가 표시됩니다. 화면 오른쪽에는 제출자의 이름과 이메일, 활동 로그, 호환되는 Mendix 버전, 컴포넌트 ID, UUID와 같은 기술 세부 정보가 표시됩니다.

* **패키지** – 이 탭에는 *.mpk* 파일의 정보 및 버전과 릴리스 노트가 표시됩니다.

  {{% alert color="info" %}}컴포넌트의 콘텐츠 유형이 **Industry Template**인 경우 이 탭은 선택 사항입니다. 콘텐츠 유형이 **Solution Content type**인 경우 탭을 사용할 수 없습니다.{{% /alert %}}

* **문서** – 이 탭에는 문서와 스크린샷, 데모 링크(있는 경우)가 표시됩니다.

* **기능** – 이 탭에는 **Solution** 및 **Industry Template**와 같은 콘텐츠 유형에 대한 추가 정보가 표시됩니다.

## 승인 설정 {#approval-settings}

{{< figure src="/attachments/control-center/marketplace/submitted-requests/submitted-requests-approval-settings.png" max-width=50% alt=''displaying-company-approved-mp-content'' >}}

**승인 설정** 탭에서는 다음 거버넌스 기능에 대한 설정을 구성할 수 있습니다:

{{% alert color="info" %}}모든 설정은 기본적으로 꺼져 있습니다.{{% /alert %}}

* **회사 관리자가 새 컴포넌트 제출을 승인해야 합니다** – 이 토글을 켜면 새 컴포넌트가 Marketplace에 제출될 때 회사 관리자가 컴포넌트가 Marketplace에 게시되기 전에 제출을 승인해야 합니다. 제출은 승인 또는 거부되기 전에 [대기 중인 승인](#pending-approvals) 탭에 표시됩니다.

  {{% alert color="info" %}}이 설정은 새 컴포넌트의 제출에만 영향을 미칩니다. 제출을 승인한 후 개발자는 나중에 회사 관리자의 승인 없이 컴포넌트의 새 버전을 Marketplace에 직접 추가할 수 있습니다. **회사 관리자가 새 컴포넌트 버전 제출을 승인해야 합니다** 토글도 켜지 않는 한 그렇습니다. {{% /alert %}}

  이 토글을 끄면 다음과 같은 결과가 발생합니다:

    * **회사 관리자가 새 컴포넌트 버전 제출을 승인해야 합니다** 토글이 자동으로 꺼집니다.
    * 모든 대기 중인 요청이 자동으로 승인됩니다.
    * 개발자가 회사 관리자의 승인 없이 Marketplace에 컴포넌트를 직접 추가할 수 있습니다.

* **회사 관리자가 새 컴포넌트 버전 제출을 승인해야 합니다** – 이 토글을 켜면 컴포넌트의 새 버전이 Marketplace에 제출될 때 회사 관리자가 새 버전이 Marketplace에 게시되기 전에 제출을 승인해야 합니다. 제출은 승인 또는 거부되기 전에 [대기 중인 승인](#pending-approvals) 탭에 표시됩니다.

  이 토글을 끄면 개발자가 회사 관리자의 승인 없이 기존 컴포넌트의 새 버전을 Marketplace에 직접 추가할 수 있습니다.

* **제출이 승인 대기 중일 때 이메일 알림 받기** – 이 토글을 켜면 새 제출 요청이 있을 때 알림을 받습니다.

  {{% alert color="info" %}}이 설정은 귀하의 알림에만 영향을 미치며, 조직의 다른 Mendix 관리자의 알림에는 영향을 미치지 않습니다.{{% /alert %}}

## 승인 이력 {#approval-history}

{{< figure src="/attachments/control-center/marketplace/submitted-requests/submitted-requests-approval-history.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}

**승인 이력** 탭에는 이력에서 승인 또는 거부된 모든 요청이 나열됩니다.

목록에는 다음 세부 정보가 표시됩니다:

* **컴포넌트 이름** – 요청에 있는 컴포넌트의 이름을 표시합니다.
* **콘텐츠 유형** – 요청에 있는 컴포넌트의 유형을 표시합니다.
* **작업** – 요청의 컴포넌트가 **게시됨** 또는 **거부됨**인지 표시합니다.
* **관리자** – 요청을 승인 또는 거부한 Mendix 관리자의 이름을 표시합니다.
* **날짜** – 요청이 승인 또는 거부된 날짜를 표시합니다.
* **이유** – 요청이 승인 또는 거부된 이유를 표시합니다.
