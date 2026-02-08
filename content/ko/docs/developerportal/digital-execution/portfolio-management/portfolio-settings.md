---
title: "포트폴리오 설정"
url: /developerportal/portfolio-management/portfolio-settings/
weight: 20
description: "Mendix 포트폴리오 관리 앱의 포트폴리오 설정(Portfolio Settings) 페이지를 설명합니다."
---

## 소개

**포트폴리오 설정(Portfolio Settings)** 페이지에서 포트폴리오 세부 정보 편집, 개인정보 설정 변경 등 포트폴리오 설정을 관리하고 포트폴리오를 삭제할 수도 있습니다.

{{% alert color="info" %}}
**Portfolio Settings** 페이지는 포트폴리오 관리자만 사용할 수 있습니다.
{{% /alert %}}

## 포트폴리오 설정 변경

**Portfolio Settings** 페이지에서 포트폴리오 관리자는 다음 설정을 변경할 수 있습니다:

* **Portfolio Name** – **Edit Portfolio Details**를 클릭하여 포트폴리오 이름을 변경합니다.
* **Portfolio Description** – **Edit Portfolio Details**를 클릭하여 포트폴리오 설명을 변경합니다.
* **Privacy Settings** – **Private**, **Restricted** 또는 **Open**으로 설정할 수 있습니다. 개인정보 설정에 대한 자세한 내용은 [포트폴리오의 다양한 개인정보 설정](/developerportal/portfolio-management/#privacy-settings) 섹션을 참조하세요.

  {{% alert color="info" %}}Control Center의 [개인정보 요청](/control-center/portfolios/#privacy-requests) 탭에서 토글이 켜져 있으면 Mendix 관리자가 **Privacy Settings**의 모든 변경을 승인해야 합니다. 이 경우 Mendix 관리자는 변경 요청에 대한 알림을 받고 Control Center에서 요청을 승인하거나 거부할 수 있습니다. **Cancel Request**를 클릭하여 대기 중인 요청을 취소할 수 있습니다.{{% /alert %}}

* **Stages** – **Move Up** ({{% icon name="chevron-up" %}}) 또는 **Move Down** ({{% icon name="chevron-down" %}})을 클릭하여 단계를 위아래로 이동합니다.

  {{< figure src="/attachments/developerportal/portfolio-management/move-upwards-downwards.png" >}}

* **Prioritization Model**
* **Currency**
* **Departments**
* **Locations**
* **Countries**
* **Scope Estimation - Use Cases**
* **Expected Value - Types**

설정의 기존 옵션을 삭제하거나 편집하려면 옵션 위에 마우스를 올려 행 끝에 **Delete** 버튼 ({{% icon name="trash-can" %}}) 또는 **Edit** 버튼 ({{% icon name="pencil" %}})을 표시한 후 해당 버튼을 클릭하세요.

{{< figure src="/attachments/developerportal/portfolio-management/delete-edit-stage.png" >}}

설정에 옵션을 추가하려면 해당 목록 아래의 **Add Department**, **Add Country**, **Add Stage**, **Add Use Case** 또는 **Add Value Type**을 클릭하세요.

## 포트폴리오 삭제

1. **Portfolio Settings** 페이지에서 페이지 하단의 **Delete**를 클릭하세요. **Delete Portfolio** 대화 상자가 열립니다.
2. 경고를 주의 깊게 읽으세요. 포트폴리오를 삭제하면 모든 데이터를 포함하여 포트폴리오가 영구적으로 삭제됩니다. 이 변경은 되돌릴 수 없습니다.
3. 계속하기로 결정하면 텍스트 상자에 *DELETE*를 입력하세요.
4. **Delete**를 클릭하세요. 포트폴리오가 영구적으로 삭제됩니다.

{{% alert color="info" %}}Mendix 관리자는 Control Center의 [포트폴리오](/control-center/portfolios/#delete-portfolio) 섹션에서도 포트폴리오를 삭제할 수 있습니다.{{% /alert %}}
