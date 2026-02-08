---
title: "Team Server"
url: /developerportal/repository/team-server/
weight: 12
description: "Team Server 리비전 및 커밋의 개요를 설명합니다."
aliases:
    - /refguide/team-server.html
    - /developerportal/develop/team-server.html
    - /refguide/team-server
    - /developerportal/develop/team-server
    - /developerportal/general/team-server
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

Team Server는 Mendix 앱의 모든 커밋된 버전이 저장되는 곳입니다. Mendix Studio Pro는 Team Server와 통합되어 있으며, 새 앱 생성(버전 관리 모델 리포지토리 포함), 앱 업데이트, 변경 사항 커밋, 모델 버전 병합 등의 작업을 Mendix Studio Pro에서 단일 클릭으로 수행할 수 있습니다.

Studio Pro에서 앱 모델 변경 사항을 Team Server에 커밋할 때 작업하던 스토리를 선택할 수 있습니다. Team Server는 스토리와 모델 변경 사항 간의 링크를 자동으로 생성하여 커밋에서 관련 요구 사항으로 탐색할 수 있습니다.

[앱(Apps)](https://sprintr.home.mendix.com/)에서 앱을 연 후 **Team Server** 페이지에서 앱에 접근하기 위한 URL, 리비전 이력 및 리비전 세부 정보를 확인할 수 있습니다.

Team Server는 독일 프랑크푸르트의 AWS에 호스팅됩니다.

## Git으로 버전 관리

**Versioning with Git** 섹션에서 Scrum Master는 SVN 버전 제어 시스템에서 Git으로 앱을 마이그레이션할 수 있습니다. 자세한 내용은 [Git으로 마이그레이션](/developerportal/general/migrate-to-git/)을 참조하세요.

## Team Server URL

**Team Server URL**은 리포지토리에 수동으로 접근하는 데 사용할 수 있습니다(Git/SVN 명령줄 사용). SVN의 경우 브라우저를 사용하여 URL을 탐색할 수도 있습니다.

URL은 다음과 같은 형태를 가질 수 있습니다:

* `https://git.api.mendix.com/<your AppID>/` Git 지원 앱인 경우
* `https://svn.home.mendix.com/<your AppID>/` SVN 지원 앱인 경우

{{% alert color="warning" %}}
`https://teamserver.sprintr.com/<your AppID>/` 엔드포인트는 더 이상 사용되지 않으며 2026년 3월 31일 이후에는 사용할 수 없습니다.
{{% /alert %}}

{{% alert color="info" %}}
링크를 따르려면 마지막 슬래시(`/`)를 수동으로 추가해야 할 수 있습니다. Mendix 자격 증명을 다시 입력하라는 메시지가 표시될 수도 있습니다. Team Server에는 아직 SSO(Single Sign-On)가 구현되지 않았습니다.
{{% /alert %}}

Git에 연결하거나 PAT를 사용하여 SVN에 연결하는 경우 *Mendix 프로필*의 [개인 접근 토큰](/portal/user-settings/#pat) 섹션에 설명된 대로 PAT를 생성해야 합니다. PAT에는 다음 범위가 포함되어야 합니다:

* *Model Repository* 아래의 `mx:modelrepository:repo:write`, `mx:modelrepository:repo:read` 및/또는 `mx:modelrepository:write` – Git Team Server에 접근하기 위해
* *Model Repository* 아래의 `mx:modelrepository:write` – SVN Team Server에 접근하기 위해

연결 시 사용자 이름은 Mendix 계정 사용자 이름이고, 비밀번호는 생성한 PAT입니다. Git에 연결할 때 *pat*이라는 단어를 사용자 이름으로 사용할 수도 있습니다.

명령줄을 사용하여 리포지토리를 클론/체크아웃하려면 명령에 PAT를 포함해야 합니다.

Git의 경우 명령 형태는 `git clone https://pat:{USERPAT}@git.api.mendix.com/{APPID}.git`이며, `{USERPAT}`는 PAT입니다.

{{% alert color="warning" %}}
Studio Pro는 사용자 인터페이스를 통해 Git 클론을 다운로드할 때 필요한 후처리 단계를 자동으로 수행합니다. Git 명령줄을 사용하여 Git 클론을 생성하거나 서드파티 도구로 생성한 클론을 Studio Pro에서 사용하는 것은 지원되지 않습니다.
{{% /alert %}}

SVN의 경우 명령 형태는 `svn checkout --revision "{REVISION}" --username "{USERNAME}" --password "{USERPAT}" https://svn.home.mendix.com/{APPID}/branches/{BRANCH}`입니다.

## 리비전 이력 {#revision-history}

{{% alert color="info" %}}Git 기반 애플리케이션의 경우, Git의 분산 특성과 로컬 커밋으로 인해 리비전은 커밋 이력에 따라 정렬되며 시간순서를 반영하지 않을 수 있습니다.{{% /alert %}}

각 리비전에 대해 다음 정보를 확인할 수 있습니다:

* 리비전 커밋의 메시지
* 리비전 커밋 날짜
* 리비전을 커밋한 팀 멤버의 이름
* 리비전이 커밋된 브랜치
* 사용된 Mendix Studio Pro 버전
* 리비전 번호

Studio Pro에서도 리비전 이력에 접근할 수 있습니다. 자세한 내용은 *Studio Pro에서 버전 제어 사용*의 [이력](/refguide/using-version-control-in-studio-pro/#history) 섹션을 참조하세요.

## 리비전 세부 정보 {#revision-details}

리비전의 **Details**를 클릭하면 해당 리비전과 관련된 스토리를 확인할 수 있습니다.

관련 스토리는 커밋 시 Mendix Studio Pro의 **Commit** 대화 상자에서 선택한 경우에만 나타납니다:

{{< figure src="/attachments/developerportal/repository/team-server/commit-story.png" class="no-border" >}}

## 더 읽기

* [버전 제어 FAQ](/refguide/version-control-faq/)
* [앱 역할](/developerportal/general/app-roles/)
