---
title: "Jira와 통합"
url: /developerportal/portfolio-management/integrate-with-jira/
weight: 40
description: "포트폴리오 관리 도구를 Jira와 통합하는 방법을 설명합니다."
beta: true
---

{{% alert color="warning" %}}
이 기능은 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하세요.
{{% /alert %}}

## 소개

포트폴리오 관리 도구의 Jira 통합을 통해 [Jira 프로젝트](https://www.atlassian.com/software/jira/guides/projects/overview#what-is-a-jira-project)를 [포트폴리오](/developerportal/portfolio-management/#portfolio-landscape)에 연결할 수 있습니다. 이 통합을 통해 해당 Jira 프로젝트의 [Jira Epic](https://www.atlassian.com/agile/project-management/epics)을 [포트폴리오 이니셔티브](/developerportal/portfolio-management/initiatives-overview/#create-new-initiative)에 할당하고 진행 상황을 추적할 수 있습니다.

### 기능

* [Jira 프로젝트를 포트폴리오에 연결](#link-jira-project)할 수 있습니다.
* [Jira Epic을 이니셔티브에 연결](/developerportal/portfolio-management/initiatives-overview/#link-epic-from-jira-project)할 수 있습니다.
* 포트폴리오 이니셔티브에 연결된 Jira Epic의 진행 상황을 보고 추적할 수 있습니다.

### 제한 사항

* 포트폴리오와 같은 회사의 포트폴리오 관리자만 Jira 통합을 구성하고 Jira 프로젝트를 포트폴리오에 연결할 수 있습니다.
* 포트폴리오와 같은 회사의 포트폴리오 관리자와 기여자만 Jira Epic을 이니셔티브에 연결할 수 있습니다.
* 뷰어 또는 외부 멤버는 Jira 통합 기능을 사용할 수 없습니다.
* 이 통합은 단방향입니다. 포트폴리오 관리 도구에서만 Jira 정보를 표시할 수 있으며 그 반대는 불가합니다.

## Jira 통합 구성 {#configure-jira-integration}

포트폴리오 관리자로서 포트폴리오를 Jira와 통합할 수 있습니다. Jira 통합을 구성한 후 Jira 프로젝트를 포트폴리오에 연결하고 Jira Epic을 포트폴리오 이니셔티브에 연결할 수 있습니다. 각 포트폴리오에는 별도의 Jira 통합 설정이 필요합니다.

### 사전 요구 사항

* 포트폴리오에 대한 포트폴리오 관리자 역할이 필요합니다.
* [Jira Software Cloud](https://support.atlassian.com/jira-cloud-administration/docs/explore-jira-cloud-plans/)에 대한 활성 구독이 필요합니다.
* Jira 프로젝트에 대한 접근 권한이 있는 사용자 계정과 API 토큰이 필요합니다.

### 절차

포트폴리오를 Jira에 연결하려면 다음 단계를 따르세요:

1. 포트폴리오 관리 도구에서 Jira와 통합하려는 [포트폴리오를 엽니다](/developerportal/portfolio-management/#open-portfolio).
2. [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) 페이지로 이동합니다.
3. **Integrations** 탭으로 이동합니다.
4. **Jira integration** 섹션에서 **Configure Jira Integration**을 클릭합니다.

    {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/jira-configuration-not-configured.png" >}}

    통합 설정을 안내하는 Jira 통합 마법사가 열립니다.

5. 사전 요구 사항을 읽고 **Next**를 클릭합니다.

    {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/jira-configuration-wizard-page-1.png" >}}

6. 다음 필드에 정보를 입력합니다:

    {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/jira-configuration-wizard-page-2.png" >}}

     * **Jira Environment URL**: Jira가 제공하는 회사 환경의 URL입니다. 이 URL은 보통 `https://mycompany.atlassian.net`과 같습니다.
     * **Account**: 프로젝트 접근 권한이 있는 Jira 플랫폼 사용자의 로그인 이름(이메일 주소)입니다.
     * **API Token**: Jira 플랫폼에서 발급하고 위에 언급한 계정에 할당된 유효한 API 토큰입니다.

7. **Next**를 클릭합니다.
8. 포트폴리오에 연결할 Jira 프로젝트를 선택합니다. 포트폴리오당 최대 20개의 Jira 프로젝트를 연결할 수 있습니다.

    {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/jira-configuration-wizard-page-3.png" >}}

9. **Save**를 클릭합니다.

구성이 완료되면 포트폴리오가 Jira에 연결됩니다.

{{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/jira-integration-linked-projects.png" >}}

## Jira 구성 편집 {#edit-configuration}

기존 Jira 구성을 편집하려면(예: API 토큰 교체) 다음과 같이 수행하세요:

1. 포트폴리오 관리 도구에서 [포트폴리오를 엽니다](/developerportal/portfolio-management/#open-portfolio).
2. [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) 페이지로 이동합니다.
3. **Integrations** 탭으로 이동합니다.
4. **Edit Configuration**을 클릭합니다.

    {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/edit-configuration.png" >}}

5. 변경하고 저장합니다.

## Jira 구성 삭제

{{% alert color="warning" %}}
이미 포트폴리오에 [Jira 프로젝트를 연결](#link-jira-project)한 경우, Jira 구성을 삭제하면 연결된 Jira 프로젝트가 포트폴리오에서 자동으로 연결 해제됩니다.
{{% /alert %}}

구성을 삭제하려면 다음 단계를 수행하세요:

1. 포트폴리오 관리 도구에서 [포트폴리오를 엽니다](/developerportal/portfolio-management/#open-portfolio).
2. [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) 페이지로 이동합니다.
3. **Integrations** 탭으로 이동합니다.
4. 줄임표 아이콘(**...**)을 클릭합니다.

   {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/delete-configuration.png" >}}

5. **Delete**를 선택합니다. 확인 상자가 열립니다.
6. **Delete**를 클릭하여 확인합니다.

## Jira 프로젝트 연결 {#link-jira-project}

{{% alert color="info" %}}
API 토큰이 접근할 수 있는 Jira 프로젝트만 연결할 수 있으며, 포트폴리오당 최대 20개의 Jira 프로젝트를 연결할 수 있습니다.
{{% /alert %}}

Jira와의 통합이 완료되면 다음과 같이 Jira 프로젝트를 포트폴리오에 연결할 수 있습니다:

1. 포트폴리오 관리 도구에서 [포트폴리오를 엽니다](/developerportal/portfolio-management/#open-portfolio).
2. [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) 페이지로 이동합니다.
3. **Integrations** 탭으로 이동합니다.
4. **+Link Projects**를 클릭합니다.
5. 팝업 대화 상자에서 포트폴리오에 연결할 Jira 프로젝트를 검색하고 선택합니다.
6. 선택이 완료되면 **Done**을 클릭합니다.

## Jira 프로젝트 연결 해제 {#unlink-jira-project}

{{% alert color="warning" %}}
이미 [이니셔티브에 Jira 프로젝트의 Epic을 연결](/developerportal/portfolio-management/initiatives-overview/#link-epic-from-jira-project)한 경우, Jira 프로젝트를 연결 해제하면 연결된 Epic이 이니셔티브에서 자동으로 연결 해제됩니다.
{{% /alert %}}

1. 포트폴리오 관리 도구에서 [포트폴리오를 엽니다](/developerportal/portfolio-management/#open-portfolio).
2. [포트폴리오 설정](/developerportal/portfolio-management/portfolio-settings/) 페이지로 이동합니다.
3. **Integrations** 탭으로 이동합니다.
4. 연결 해제할 Jira 프로젝트의 행 끝에서 **⨉**를 클릭합니다. 확인 상자가 열립니다.

    {{< figure src="/attachments/developerportal/portfolio-management/integrate-with-jira/warning-jira-project-unlink.png" >}}

5. **Unlink**를 클릭하여 확인합니다.
