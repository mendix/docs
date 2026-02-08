---
title: "포트폴리오 관리"
url: /developerportal/portfolio-management/
weight: 35
description: "Mendix 포트폴리오 관리 앱을 설명합니다."
#The anchor #portfolios-settings and #privacy-settings below is mapped, so it should not be removed or changed. If changing the URL of this document, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[포트폴리오 관리(Portfolio Management)](https://portfolio.mendix.com) 도구는 모든 Mendix 사용자에게 제공됩니다. 이니셔티브에 대한 정보를 유지하고 다양한 개발 단계에서 관리할 수 있습니다. 포트폴리오 관리자, 비즈니스 이해관계자 및 개발자가 한 곳에서 효과적으로 협업하고 Mendix 플랫폼에 새로운 이니셔티브를 도입하는 데 필요한 모든 것을 제공합니다.

포트폴리오 관리 도구를 사용하면 포트폴리오에서 [활성 이니셔티브](/developerportal/portfolio-management/initiatives-overview/)와 [아카이브된 이니셔티브](/developerportal/portfolio-management/archive/)를 관리할 수 있습니다. 포트폴리오 관리자인 경우 포트폴리오의 [접근 관리](/developerportal/portfolio-management/access-management/) 및 [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/)을 구성할 수 있습니다.

포트폴리오 관리 앱을 시작하려면 Mendix 포털의 [글로벌 내비게이션 메뉴](/developerportal/) ({{% icon name="layout-rounded-1-filled" %}})를 열고 **Portfolio**를 선택하세요.

## 포트폴리오 환경 개요 {#portfolio-landscape}

포트폴리오 관리 도구를 시작하면 **Portfolio Landscape Overview** 페이지가 열립니다.

{{< figure src="/attachments/developerportal/portfolio-management/portfolio-landscape-overview.png" alt="portfolio-landscape-overview" >}}

### 나의 포트폴리오 vs 회사 포트폴리오 {#my-porfolios-vs-company-portfolios}

**Portfolio Landscape Overview** 페이지에는 **My Portfolios**와 **Company Portfolios** 두 섹션이 있습니다. 섹션은 해당 섹션에 하나 이상의 [포트폴리오 카드](#portfolio-card)가 있는 경우에만 나타납니다.

{{< figure src="/attachments/developerportal/portfolio-management/my-portfolios-vs-company-portfolios.png"  >}}

* **My Portfolios** – 포트폴리오 멤버인 모든 포트폴리오를 표시합니다. 포트폴리오 카드를 클릭하면 포트폴리오가 열립니다.

  {{% alert color="info" %}}포트폴리오 관리 도구를 처음 사용하는 경우 **My Portfolios** 섹션에 데모 포트폴리오가 있습니다. 이 데모는 포트폴리오의 모든 기능을 실험할 수 있는 놀이터 역할을 합니다. 그러나 사용자를 초대하거나 포트폴리오 설정을 변경할 수는 없습니다.{{% /alert %}}

* **Company Portfolios** – 포트폴리오 멤버가 아닌 회사의 모든 제한 및 공개 포트폴리오를 표시합니다.
    * 제한 포트폴리오 – 포트폴리오 카드를 클릭하면 제한 포트폴리오에 대한 자세한 정보가 표시됩니다. 제한 포트폴리오에 참여하려면 포트폴리오 카드에서 **Request to Join**을 클릭하세요. 포트폴리오 관리자가 이 [접근 요청](/developerportal/portfolio-management/access-management/#access-requests)을 승인해야 합니다.
    * 공개 포트폴리오 – 포트폴리오 카드를 클릭하면 공개 포트폴리오에 직접 접근할 수 있습니다. 포트폴리오의 [뷰어](/developerportal/portfolio-management/access-management/#members)와 동일한 접근 권한을 갖게 됩니다. 공개 포트폴리오에 참여하려면 포트폴리오를 연 후 왼쪽 하단의 **Request to Join**을 클릭하세요. 포트폴리오 관리자가 이 [접근 요청](/developerportal/portfolio-management/access-management/#access-requests)을 승인해야 합니다.

### 포트폴리오 카드 {#portfolio-card}

**Portfolio Landscape Overview** 페이지에서 각 카드는 포트폴리오를 나타냅니다. 포트폴리오 카드에서 포트폴리오 이름, 소속 회사, [개인정보 설정](#privacy-settings) 및 포트폴리오 관리자의 아바타를 확인할 수 있습니다. 최대 4개의 아바타가 표시될 수 있습니다.

#### 포트폴리오의 다양한 개인정보 설정 {#privacy-settings}

{{% alert color="info" %}}포트폴리오 관리자는 [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) 페이지에서 **Privacy Settings**를 변경할 수 있습니다.{{% /alert %}}

현재 포트폴리오의 개인정보 설정은 비공개, 제한 또는 공개일 수 있습니다. 아래 표는 차이점을 보여줍니다:

| 포트폴리오 유형 | **Company Portfolios** 섹션에 표시? | 포트폴리오에 참여하지 않고 접근 가능? | 포트폴리오 관리자가 사용자를 추가할 수 있나요? * | 사용자가 참여를 신청할 수 있나요? ** | Mendix 관리자가 포트폴리오 생성을 관리할 수 있나요? *** |
|-|-|-|-|-|-|
| Private        | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="red" >}}|{{< icon name="remove-circle-filled" color="red" >}}|
| Restricted     | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="green" >}}|
| Open           | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="green" >}}|

\* 포트폴리오 관리자는 [접근 관리](/developerportal/portfolio-management/access-management/#add-users) 페이지에서 포트폴리오에 사용자를 추가할 수 있습니다.

** 사용자는 포트폴리오 카드에서 **Request to Join**을 클릭하여 포트폴리오 참여를 신청할 수 있습니다. 포트폴리오 관리자가 이 [접근 요청](/developerportal/portfolio-management/access-management/#access-requests)을 승인해야 합니다.

\*** Control Center의 [개인정보 요청](/control-center/portfolios/#privacy-requests) 탭에서 토글이 켜져 있으면 Mendix 관리자가 제한 또는 공개 포트폴리오 생성을 승인해야 합니다. 이 경우 Mendix 관리자는 요청에 대한 알림을 받고 [Control Center](/control-center/portfolios/#privacy-requests)에서 요청을 승인하거나 거부할 수 있습니다. Mendix 관리자가 요청을 승인할 때까지 포트폴리오의 **Privacy Settings**는 **Private**입니다.

{{< figure src="/attachments/developerportal/portfolio-management/opened-portfolio.png"  >}}

### 새 포트폴리오 생성 {#create-portfolio}

**Portfolio Landscape Overview** 페이지에서 다음과 같이 새 포트폴리오를 생성할 수 있습니다:

1. 페이지 오른쪽 상단에서 **Create Portfolio**를 클릭하세요. **New Portfolio** 대화 상자가 열립니다.

2. 새 포트폴리오의 **Portfolio Name**과 **Description**을 입력하세요.

3. **Privacy Settings**에서 **Private**, **Restricted** 또는 **Open**을 선택하세요. 개인정보 설정에 대한 자세한 내용은 위의 [포트폴리오의 다양한 개인정보 설정](#privacy-settings) 섹션을 참조하세요.

4. **Prioritization Model**에서 [WSJF 우선순위](/developerportal/portfolio-management/initiatives-overview/#wsjf) 또는 [RICE 우선순위](/developerportal/portfolio-management/initiatives-overview/#rice)를 선택하세요.

5. **Currency** 드롭다운 목록에서 이 포트폴리오의 기본 통화를 선택하세요.

6. **Create**를 클릭하세요.

포트폴리오가 생성됩니다. 이 포트폴리오의 첫 번째 포트폴리오 관리자가 됩니다. 포트폴리오에 [다른 사람을 초대](/developerportal/portfolio-management/access-management/#add-users)할 수 있습니다.

### 포트폴리오 열기 {#open-portfolio}

접근 권한이 있는 포트폴리오 카드를 클릭하면 왼쪽에 메뉴가 있는 포트폴리오가 열립니다.

{{< figure src="/attachments/developerportal/portfolio-management/opened-portfolio.png" >}}

메뉴 항목을 클릭하면 해당 페이지가 열립니다:

* [이니셔티브 개요](/developerportal/portfolio-management/initiatives-overview/)
* [아카이브](/developerportal/portfolio-management/archive/)
* [접근 관리](/developerportal/portfolio-management/access-management/)
* [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) (포트폴리오 관리자만 사용 가능)

## 더 읽기

* [로우코드를 통한 애플리케이션 포트폴리오 관리](https://www.mendix.com/application-portfolio-management/)
* [포트폴리오 관리로 전략적 결정 내리기](https://academy.mendix.com/link/paths/145/Make-Strategic-Decisions-With-Portfolio-Management)
* [대규모 앱 개발에서 포트폴리오 관리가 중요한 이유](https://www.mendix.com/blog/)
* [Compass로 첫 번째 Mendix 앱 출시 준비](/developerportal/compass/) - 첫 번째 Mendix 앱의 구현을 계획하고 간소화하기 위한 또 다른 디지털 실행 도구
