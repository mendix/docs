---
title: "Compass로 첫 번째 Mendix 앱 출시 준비"
linktitle: "Compass for Start"
url: /developerportal/compass/
weight: 25
description: "Compass 도구를 설명합니다."
---

{{% alert color="info" %}} 이 기능은 현재 참여 고객에게 제공됩니다. 자세한 내용은 Mendix Customer Success Manager(CSM)에게 문의하세요. {{% /alert %}}

## 소개

[Compass](https://compass.home.mendix.com/) 도구는 첫 번째 Mendix 앱의 구현을 계획하고 간소화하려는 팀에게 제공됩니다. 이것은 [Mendix 디지털 실행 실천](https://www.mendix.com/evaluation-guide/digital-execution-practice/#what-is-the-mendix-digital-execution-practice)을 플랫폼에 도입하는 이니셔티브의 일부이며, 비개발자 팀 멤버가 Mendix 구현 프로세스의 마일스톤과 목표를 계획할 수 있도록 합니다. 프로그램 소유자(즉, 구현을 이끄는 팀 멤버)는 직관적인 시각적 인터페이스를 통해 진행 상황을 모니터링하여 첫 번째 Mendix 애플리케이션을 성공적으로 출시하는 것을 목표로 합니다.

{{< figure src="/attachments/developerportal/compass/compass-home.png" alt="The home page of the Compass tool" >}}

Compass 도구를 사용하면 로우코드에 대한 자체 비전과 Mendix로 빌드하려는 앱을 정의한 다음, 사전 정의된 모범 사례 마일스톤을 따라 구현을 간소화할 수 있습니다. 각 마일스톤은 쉬운 추적을 위해 팀 멤버에게 할당할 수 있는 액션 포인트로 구성됩니다. 필요한 경우 각 마일스톤에 대한 추가 작업을 정의할 수도 있습니다.

## Compass 시작하기

조직에 Compass를 활성화하려면 Mendix Customer Success Manager(CSM)에게 문의하세요.

{{% alert color="info" %}}
Compass는 첫 번째 Mendix 애플리케이션을 출시하려는 조직을 위한 도구입니다. 많은 마일스톤과 작업이 초보자를 대상으로 하므로, 이미 하나 이상의 Mendix 앱을 생성한 팀에게는 유용하지 않을 수 있습니다.
{{% /alert %}}

조직에 Compass가 활성화된 후, 프로그램 소유자 역할을 가진 사용자가 Compass 홈 페이지에서 첫 번째 앱의 출시 날짜를 정의하고 팀 멤버를 참여하도록 초대할 수 있습니다.

### 팀 멤버 초대

Mendix 구현에 관여하는 Compass 팀에는 조직에서 Mendix를 구현하는 데 도움을 줄 모든 사람이 포함되어야 합니다. 이 팀은 앱 자체를 빌드할 앱 프로젝트 팀과 동일하지 않지만, 예를 들어 리드 개발자가 양쪽 모두에 참여할 수 있습니다. Compass의 액션 포인트를 살펴보면 팀의 범위와 책임에 대해 더 자세히 알 수 있습니다.

다음 단계를 수행하여 팀 멤버에게 Compass에 대한 접근 권한을 부여할 수 있습니다:

1. **프로그램 소유자** 역할을 가진 사용자로 [Compass](https://compass.home.mendix.com/)에 로그인하세요.
2. 왼쪽 내비게이션 메뉴에서 **Access Management**를 클릭하세요.
3. **Invite Members** 창에서 초대할 사용자의 이메일 주소를 입력하고 프로젝트에서의 역할을 지정하세요.

{{% alert color="info" %}}
**프로그램 소유자** 역할은 사용자에게 다른 사용자를 초대할 수 있는 권한을 부여합니다. 모범 사례로 최소 권한 원칙을 따르고 구현을 이끄는 팀 멤버에게만 이 역할을 할당하세요.
{{% /alert %}}

조직의 일원인 사용자뿐만 아니라 파트너 조직 등의 외부 사용자도 초대할 수 있습니다. 초대가 수락될 때까지 **Pending Invitations** 탭에 표시됩니다.

{{< figure src="/attachments/developerportal/compass/invite.png" alt="A screenshot of the Invite Members window" >}}
  
## 마일스톤 및 액션 포인트 추적

마일스톤은 구현이 성공하기 위해 완료해야 하는 구현 프로세스의 핵심 지점입니다. 각 마일스톤은 팀 멤버에게 할당할 수 있는 하나 이상의 액션 포인트로 구성됩니다. 예를 들어, **Introduction to Digital Execution with Mendix** 마일스톤은 Mendix 플랫폼 탐색 또는 Mendix 앱 관리자 할당과 같은 액션 포인트로 구성됩니다.

{{< figure src="/attachments/developerportal/compass/milestones.png" alt="A screenshot of the Introduction to Digital Execution with Mendix milestone with some action points completed and others in progress" >}}

마일스톤은 [디지털 실행](https://www.mendix.com/glossary/digital-execution/) 프레임워크를 기반으로 Mendix에서 정의합니다. 개발 마일스톤을 추적하는 것이 아니라, 개발을 시작하기 전에 완료해야 하는 단계를 안내하는 역할을 합니다.

{{< figure src="/attachments/developerportal/compass/milestones-home.png" alt="The Milestones page, showing some completed and open milestones" >}}

다음 단계를 수행하여 마일스톤을 보고 관리할 수 있습니다:

1. 왼쪽 내비게이션 메뉴의 **Program** 섹션에서 **Milestones**를 클릭하세요.
2. 보려는 마일스톤을 클릭하세요.
3. 액션 포인트를 클릭하여 세부 정보를 보거나 소유자와 마감일을 할당하세요.
4. 액션 포인트의 소유자인 경우 화면의 지침을 따라 완료하세요.
5. 할당된 모든 액션 포인트를 보려면 **Program** > **My Action Points**를 클릭하세요.

{{< figure src="/attachments/developerportal/compass/action-point.png" alt="An action point with instructions on how to complete it" >}}

## 작업 추가

마일스톤과 액션 포인트는 Mendix에서 사전 정의되어 있지만, 각 마일스톤과 관련된 사용자 정의 작업을 추가할 수도 있습니다.

다음 단계를 수행하여 작업을 보고 관리할 수 있습니다:

1. **Program** 섹션에서 **Tasks**를 클릭하세요.
2. 새 작업을 추가하려면 **Add Task**를 클릭하고 다음 정보를 제공하세요:

    * **Name** — 필수. 작업의 식별 이름입니다.
    * **Status** — 기본적으로 새 작업은 **To do** 상태로 생성되지만 이미 완료된 것으로 표시할 수도 있습니다.
    * **Description** — 모범 사례로 상세한 설명을 제공하여 작업을 담당하는 사람이 완료할 수 있는 충분한 정보를 갖도록 하세요.
    * **Deadline** — 작업의 마감일입니다.
    * **Assigned to** — 작업을 완료해야 하는 팀 멤버입니다.
    * **Milestone** — 작업이 연결된 마일스톤입니다.

3. **Save**를 클릭하세요.

새 작업은 **Tasks** 페이지와 연결된 마일스톤에 표시됩니다.

## 비전 및 목표 정의

구현의 초기 작업을 진행하면서 팀과 함께 조직에 Mendix를 사용한 로우코드가 무엇을 의미하는지에 대한 공유 비전을 개발해야 합니다. Compass는 **Vision and Goals** 페이지에서 해당 비전을 정의하고 지원하는 데 도움을 줍니다.

{{< figure src="/attachments/developerportal/compass/vision.png" alt="The Vision and Goals page showing a sample low-code vision and key result" >}}

### 로우코드 비전

**Low-Code Vision**은 구현을 위한 전반적인 지침 원칙입니다. 조직에 로우코드가 무엇을 의미하는지, 어떤 목표를 향해 노력하고 있는지 간략하게 설명하세요. 설명을 간략하게 유지하고 **Area of Focus** 섹션을 사용하여 구체적인 내용을 정의하세요.

{{% alert color="info" %}}
모범 사례로 팀과 함께 워크숍을 조직하여 로우코드 비전을 함께 브레인스토밍하는 것이 도움이 될 수 있습니다.
{{% /alert %}}

### 집중 영역

**Area of Focus** 섹션은 목표 설정의 일부로 계획하고 고려할 다음 주제를 나열합니다.

* **People** — 팀과 관련된 목표. 예를 들어, 향후 3개월 이내에 5명의 Mendix 개발자를 교육해야 한다고 결정할 수 있습니다.
* **Platform** — Mendix를 소프트웨어 개발 수명 주기에 통합하기 위한 목표.
* **Portfolio** — 로우코드가 조직에 높은 가치를 제공할 수 있는 제품.
* **Process** — 비즈니스 프로세스와 관련된 목표. 예를 들어, 스크럼을 구현하기로 결정할 수 있습니다.
* **Promotion** — 성공을 축하하고 팀이 Mendix로 빌드하도록 동기를 부여하는 목표.

이러한 집중 영역은 [디지털 전환의 5P](https://www.mendix.com/glossary/digital-execution/#what-are-the-5-ps-of-digital-transformation)를 기반으로 합니다. 각 영역에 대해 측정 가능한 핵심 결과를 직접 정의할 수 있습니다.

{{% alert color="info" %}}
모범 사례로 핵심 결과는 세분화되고 단기적으로 측정 가능해야 합니다.
{{% /alert %}}

#### 핵심 결과 관리

Mendix 구현 진행 상황에 대한 팀의 투명성을 제공하려면 핵심 결과의 진행 상황을 추적해야 합니다. 핵심 결과의 **Progress** 필드에서 값을 편집하여 이를 수행할 수 있습니다.

{{< figure src="/attachments/developerportal/compass/key-result.png" alt="Tracking the progress of a key result" >}}

## 더 읽기

* [포트폴리오 관리](/developerportal/portfolio-management/) - 구현 전 전략적 계획을 위한 또 다른 디지털 실행 도구
