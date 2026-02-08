---
title: "Jira"
url: /developerportal/project-management/jira-connector/
weight: 5
description: "앱(Apps)에서 Mendix 앱을 Jira에 연결하는 방법을 설명합니다."
aliases:
    -  /developerportal/general/jira-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 소개

Mendix 앱의 Scrum Master인 경우 Jira에서 프로젝트를 관리하는 경우 앱을 Jira에 연결할 수 있습니다. 앱이 Jira에 연결되면 Studio Pro에서 커밋을 Jira에서 생성된 하나 이상의 스토리에 연결할 수 있는 옵션이 있습니다.

## 기능

* Mendix 앱을 Jira에 연결하는 것을 지원합니다.
* Scrum, Kanban 및 팀 관리 보드(이전에 next-gen 보드로 알려짐)를 지원합니다.
* Studio Pro 버전 7.19 이상에서 커밋을 Jira 스토리에 연결할 수 있습니다:

    * Scrum 보드의 경우 **Stories** 패널에 활성 Sprint의 모든 스토리가 스토리 키 순으로 표시됩니다.
    * Kanban 보드의 경우 **Stories** 패널에 보드 설정의 하위 쿼리를 고려하여 보드의 모든 스토리가 스토리 키 순으로 표시됩니다.
    * 팀 관리 보드의 경우 **Stories** 패널에 백로그를 포함한 보드의 모든 스토리가 표시됩니다. Studio Pro에서 백로그 스토리를 보고 싶지 않은 경우 백로그 없이 보드를 설정하고 별도의 보드를 사용하여 백로그를 관리하는 것을 고려하세요.

* App Insights에서 [피드백 항목](/developerportal/app-insights/feedback/)을 변환하면 Jira에 스토리가 생성됩니다.

## 제한 사항

{{% alert color="info" %}}
이 기능을 추가로 개발하면서 향후 릴리스에서 이러한 제한 사항이 해제될 수 있습니다.
{{% /alert %}}

* 피드백 이슈와 Epics의 스토리는 Jira로 마이그레이션되지 않습니다.
* 피드백 항목이 이슈로 변환될 때 이슈의 스토리 유형, 제목 및 설명이 설정됩니다. Jira 구성에 추가 필수 필드가 필요한 경우 이 프로세스가 작동하지 않을 수 있습니다.

## 사전 요구 사항

* 앱에 대한 [Scrum Master](/developerportal/general/app-roles/#team-roles) 역할이 필요합니다.
* Jira Software Cloud에 대한 활성 구독이 필요합니다.
* Scrum 보드, Kanban 보드 또는 팀 관리 보드가 있는 Jira 프로젝트가 필요합니다.
* Jira 프로젝트에 대한 관리 권한이 있는 사용자 계정과 API 토큰이 필요합니다. 이 API 토큰을 얻는 방법에 대한 자세한 내용은 [Atlassian 계정의 API 토큰 관리](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)를 참조하세요.
* 피드백 항목을 Jira의 스토리로 변환하려면 Jira 프로젝트에 "Story" 및 "Bug" 이슈 유형이 있어야 합니다. 프로젝트의 이슈 유형을 설정하는 방법에 대한 자세한 내용은 [프로젝트에 이슈 유형 연결](https://support.atlassian.com/jira-cloud-administration/docs/associate-issue-types-with-projects/)을 참조하세요.

## 절차

앱을 Jira에 연결하려면 다음 단계를 수행하세요:

1. [앱(Apps)](https://sprintr.home.mendix.com)에서 앱을 여세요.

2. [설정](/developerportal/general-settings/) 페이지로 이동하세요.

3. **Project Management** 탭으로 이동하세요.

4. **Connect Jira**를 클릭하세요. **Set Up Jira Configuration** 대화 상자가 열립니다.
   다음과 같이 정보를 입력하세요:

    * **URL Jira Environment**: Jira가 제공하는 회사 환경의 URL입니다. 이 URL은 보통 `https://my-company.atlassian.net`과 같습니다.
    * **Project Key**: Jira 플랫폼 내 프로젝트의 고유 키입니다.
    * **Admin User**: 프로젝트 관리 권한이 있는 Jira 플랫폼 사용자의 로그인 이름입니다.
    * **API Token**: Jira 플랫폼에서 발급하고 위에 언급한 관리자 사용자에게 할당된 유효한 API 토큰입니다. 이 API 토큰을 얻는 방법에 대한 자세한 내용은 [Atlassian 계정의 API 토큰 관리](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)를 참조하세요.

5. **Next**를 클릭하세요.

6. Jira 프로젝트에 여러 보드가 구성된 경우 드롭다운 목록에서 연결할 Jira 보드 중 하나를 선택하세요. Scrum, simplified Scrum 및 Kanban 보드 유형을 지원합니다.

7. **Activate**를 클릭하여 연결을 활성화하세요.

활성화가 완료되면 앱이 Jira에 연결됩니다. 다음을 확인할 수 있습니다:

* Studio Pro에서 **Stories** 패널에 Jira 스토리가 표시됩니다:

    * 앱을 Jira의 Scrum 보드에 연결하면 **Stories** 패널에 활성 Sprint의 모든 스토리가 표시됩니다.
    * 앱을 Kanban 보드에 연결하면 **Stories** 패널에 보드 설정의 필터와 하위 쿼리를 고려하여 보드의 모든 스토리가 스토리 키 순으로 표시됩니다.
        * Jira의 보드 설정에서 필터와 하위 쿼리를 찾을 수 있습니다(자세한 내용은 [회사 관리 보드 구성](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/)을 참조하세요).
    * 앱을 팀 관리 보드에 연결하면 **Stories** 패널에 백로그를 포함한 보드의 모든 스토리가 표시됩니다.
    * Studio Pro에서 백로그 스토리를 보고 싶지 않은 경우 백로그 없이 보드를 설정하고 별도의 보드를 사용하여 백로그를 관리하는 것을 고려하세요.
    * 스토리 목록은 Jira 스토리 키 순으로 정렬됩니다.

* Studio Pro에서 변경 사항을 커밋한 후 **앱(Apps)**에서 앱을 연 후 **Team Server** 페이지에서 해당 [리비전](/developerportal/repository/team-server/#revision-details)의 세부 정보에서 연결된 Jira 스토리를 확인할 수 있습니다.
* **앱(Apps)** [내비게이션 패널](/developerportal/#navigation-pane)의 **Project Management** 섹션에서 Jira 보드 링크를 확인할 수 있습니다.

    {{< figure src="/attachments/developerportal/project-management/jira-connector/navigation-jira.png" >}}

## 설정 보기

Jira 커넥터를 활성화한 후 언제든지 구성 세부 정보를 검토할 수 있습니다.

{{< figure src="/attachments/developerportal/project-management/jira-connector/jira-configuration-details.png" >}}

다른 Jira 환경에 연결해야 하거나 Jira 커넥터에서 사용하는 API 키를 교체해야 하는 경우 **Edit Connection Details**를 클릭하세요. 동일한 환경 내에서 다른 Jira 보드로 전환하려면 **Change Board**를 클릭하세요.

Jira 커넥터가 작동하려면 Mendix가 Jira 보드의 일부 정보를 시스템에 캐시합니다. 여기에는 스토리 포인트를 설정하는 데 사용하는 추정 필드 이름과 보드에서 사용하는 상태 스키마가 포함됩니다. 이 정보가 Jira에서 변경되면 **Reconnect**를 클릭하여 캐시를 새로고침해야 할 수 있습니다.

Jira 커넥터를 더 이상 사용하지 않으려면 **Deactivate Connection**을 클릭하세요. 이렇게 하면 프로젝트 관리 도구가 자동으로 [Epics](/developerportal/project-management/epics/)로 되돌아갑니다.
