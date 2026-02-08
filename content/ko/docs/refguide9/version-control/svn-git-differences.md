---
title: "Git과 SVN의 차이점"
url: /refguide9/svn-git-differences/
weight: 45
aliases:
    - /refguide/svn-git-differences	
---


## 소개

Studio Pro 버전 9.12 이상에서 사용자는 SVN 또는 Git 버전 관리로 새 앱을 시작할지 선택할 수 있습니다. Git은 SVN에 비해 [여러 가지 장점](/refguide9/version-control-faq/#git-advantages)을 제공하며 팀원과 더 강력하고 견고한 협업을 제공합니다. 그러나 변경 사항을 커밋하는 방식과 협업하는 방식, 대형 리포지토리 작업 시 단점에서 몇 가지 차이점이 있습니다. 이 문서에서는 Git과 SVN 간의 가장 두드러진 변경 사항을 설명합니다.

Git으로 마이그레이션하는 방법에 대한 자세한 내용은 [Git으로 마이그레이션](/developerportal/general/migrate-to-git/)을 참조하십시오.

{{% alert color="info" %}}
Mendix 9의 기존 앱의 경우, Git 특정 기능이 필요하지 않는 한 Mendix 10으로의 업그레이드를 계획할 때까지 SVN 버전 관리를 유지하는 것을 Mendix는 권장합니다.

Mendix 10은 더 이상 Studio Pro에서 버전 관리 시스템으로 SVN을 지원하지 않습니다. 앱을 Mendix 10으로 업그레이드하려는 경우, 먼저 Mendix 9 내에서 Git으로 마이그레이션하십시오.
{{% /alert %}}

## 협업의 차이점: 커밋, Push, 업데이트(Pull) 및 병합

SVN은 중앙 집중식 버전 관리 시스템이고, Git은 분산 시스템입니다. 커밋할 때 SVN에서는 중앙 서버로 직접 전송되지만, Git은 로컬 커밋만 생성하며 로컬 커밋을 중앙 서버에 제출하려면 변경 사항을 *Push*해야 합니다(**Commit** 대화 상자에서 변경 사항 Push가 기본적으로 선택됨). 결과적으로 로컬 변경 사항이 더 빠르게 커밋되며, 버전 관리 서버에 연락하지 않고도 이전 상태로 롤백할 수 있습니다.

{{< figure src="/attachments/refguide9/version-control/svn-git-differences/local-repo-and-team-server.png" alt="Local Repository and Team Server" class="no-border" >}}

이는 또한 원격 서버에서 병합을 수행하지 않고도 다른 개발자의 변경 사항을 로컬에서 완전히 통합할 수 있음을 의미합니다. 이러한 작업은 SVN에 비해 상대적으로 빠릅니다.

예를 들어, 다른 개발자와 동일한 브랜치에서 함께 기능을 개발하고 있습니다. 둘 다 동일한 시작점(3)을 가지고 있습니다. 동료가 변경 사항을 커밋하면 이러한 변경 사항을 검색하여 통합할 수 있습니다. 이를 위해 개발자에게 먼저 기존 변경 사항을 로컬로 커밋(6)하도록 요청하여, 다른 개발자가 검색할 때 변경 사항이 자동으로 병합될 수 있도록 합니다. 그 후 병합된 결과를 커밋하고, 선택적으로 병합된 결과(7)를 Push하여 동료가 사용할 수 있도록 합니다. 변경 사항이 이미 명시적으로 커밋되었으므로, 변경한 내용을 항상 볼 수 있으며 충돌을 해결할 때 실수로 로컬 변경 사항을 덮어쓸 수 없습니다.

{{< figure src="/attachments/refguide9/version-control/svn-git-differences/incoming-changes.png" alt="Incoming changes in Git" class="no-border" >}}

아래 표는 SVN과 Git 간의 주요 차이점을 설명합니다:

| 작업 | SVN | Git |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Update/Pull | 서버에서 변경 사항을 검색하고 앱의 로컬 사본에 직접 적용합니다. | 서버에서 변경 사항을 검색합니다. 커밋되지 않은 변경 사항이 없는 경우에만 앱의 로컬 사본에 변경 사항을 적용할 수 있습니다. 커밋되지 않은 변경 사항이 있는 경우 먼저 *되돌리기*하거나 *커밋*해야 합니다. Git에서 이 작업은 일반적으로 *Update* 대신 *Pull*이라고 합니다. |
| Commit | 서버에 변경 사항을 제출합니다. | *로컬* 커밋을 생성합니다: 나중에 돌아갈 수 있는 메시지가 포함된 변경 사항 집합. **Push** 확인란을 선택하지 않는 한 서버에 변경 사항이 제출되지 않습니다. |
| Push | 해당 없음 | *모든* 로컬 커밋을 서버에 제출합니다. 다른 개발자가 아직 로컬 앱에 없는 변경 사항을 서버에 Push한 경우, 먼저 *update*/*pull*해야 합니다. |
| Port fix | Port fix는 한 브랜치에서 실제 커밋을 전송하여 다른 브랜치에 적용합니다. 변경 사항을 커밋해야 합니다. | Port fix는 한 브랜치에서 실제 커밋을 전송하여 작성자와 커밋 텍스트를 포함하여 다른 브랜치에 직접 적용합니다. 이는 명시적으로 변경 사항을 커밋할 필요가 없음을 의미합니다. |

## 리비전 번호의 차이점

SVN에서 커밋은 커밋 순서를 강제하는 중앙 서버에 수행됩니다. 이러한 커밋은 일반적으로 순차적으로 증가하는 숫자로 표현됩니다(예: 1, 2, 3, 4, 5).

Git에서 커밋은 처음에 로컬에서 수행됩니다. 그런 다음 커밋이 다른 리포지토리로 전송되며 고유하게 식별 가능해야 합니다. 따라서 Git의 커밋은 SHA-1/SHA-256 해시(예: f0e165, bb2327, 76d34e, c31247)로 표현되며, 분산 환경에서 생성되더라도 동일한 변경 사항을 가진 다른 클라이언트에서 동일합니다.

## 완전 분산 버전 관리 지원

Git의 분산 버전 관리 시스템을 지원하기 위해, Git 리포지토리를 복제하는 모든 사용자는 본질적으로 전체 프로젝트의 전체 사본을 생성합니다. 여기에는 전체 기록이 포함됩니다.

이 로컬 기록을 통해 완전한 독립성을 확보하여 사용자가 오프라인에서 작업하고, 변경 사항을 커밋하고, 중앙 서버에 지속적으로 연결할 필요 없이 프로젝트의 기록을 탐색할 수 있습니다.

이것의 단점은 새 체크아웃(Git에서는 'clone'이라고 함)이 SVN에 비해 더 오래 걸린다는 것입니다. SVN에서 체크아웃은 마지막 리비전만 다운로드하지만(예: 100MB), Git에서 복제하면 전체 리포지토리를 다운로드합니다(동일한 리포지토리의 경우 1.2GB가 될 수 있음).

## 프록시 지원 {#proxy-support}

Studio Pro는 두 가지 방법으로 Git 리포지토리와 통신합니다: LibGit2 라이브러리 또는 Git 명령줄 인터페이스(Git CLI). LibGit2는 로컬 리포지토리 작업 중에 집중적으로 사용되는 깨끗한 리포지토리 객체 모델을 제공합니다. 그러나 원격 Git 서버와의 통신에서는 충분한 성능을 제공하지 못합니다. 이때 Git CLI가 사용되며 Studio Pro는 fetch, pull 및 push 작업을 수행할 때 클라이언트로 전환합니다(이것이 Git CLI를 컴퓨터에 제공하는 Git for Windows 패키지가 Studio Pro 설치의 필수적인 부분인 이유입니다). 따라서 원격 Git 리포지토리와의 데이터 전송이 필요한 모든 작업은 GitCLI 클라이언트를 사용합니다.

아쉽게도 Git for Windows는 기본적으로 시스템 프록시 설정과 동기화되지 않으므로 Studio Pro에 원활하게 통합하기가 까다로울 수 있습니다. 가능한 한 빨리 통합을 제공하기 위해 노력하고 있지만, 해결 방법으로 **http_proxy**, **https_proxy** 및 **all_proxy**를 직접 재정의하거나(자세한 내용은 [Git 문서](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy) 참조) 다음 명령을 통해 로컬 **.git/config**에서 프록시 URL을 설정하여 프록시 설정을 직접 구성할 수 있습니다:

* 프록시 설정을 구성합니다:

    `git config --local http.proxy [protocol://][user[:password]@]proxyhost[:port]`
* 설정이 변경되었는지 확인합니다:

    `git config --local http.proxy`

Mendix 개발뿐만 아니라 Git을 사용하는 경우에는 권장되지 않지만, `--global` 수정자를 사용하여 시스템 전체에 변경 사항을 적용할 수도 있습니다.

## Studio Pro 외부에서 버전 관리와 상호 작용

SVN과 Git 모두 [서드파티 도구를 설정하여 Team Server에 연결](/refguide9/version-control-faq/#third-party-tools)할 수 있습니다. 그러나 Git으로 마이그레이션하려면 다른 도구가 필요합니다: TortoiseSVN 대신 TortoiseGit 또는 GitHub Desktop과 같은 도구를 사용할 수 있습니다.

## 더 읽기

* [Git으로 마이그레이션](/developerportal/general/migrate-to-git/)
