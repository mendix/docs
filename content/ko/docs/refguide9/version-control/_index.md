---
title: "버전 관리"
url: /refguide9/version-control/
description: "버전 관리의 정의와 버전 관리 프로세스를 설명합니다."
weight: 30
no_list: false
description_list: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

버전 관리를 사용하면 두 가지 방법으로 앱 개발을 관리할 수 있습니다:

* 첫째, 모델과 모든 리소스의 현재 리비전을 저장([커밋](#commit))할 수 있습니다. 해당 리비전을 나중에 다시 가져오고 다른 팀원과 공유할 수 있도록 식별자를 부여합니다.
* 둘째, 여러 [개발 라인](#development-line)에서 작업하여 여러 기능을 동시에 개발할 수 있습니다. 이러한 개발 라인을 [병합](#merge)하여 [메인 라인](#main-line)에 별도로 작업한 모든 완성된 기능을 포함할 수 있습니다.

Mendix의 버전 관리는 [Apache Subversion](https://subversion.apache.org/) 또는 [Git](https://git-scm.com) 위에 구축되어 있습니다. 이러한 버전 관리 시스템(VCS)의 숙련된 사용자에게는 개념이 익숙할 것입니다. Mendix는 Studio Pro와 Mendix Portal에 VCS 명령을 내장하여 단순화합니다.

{{% alert color="info" %}}
Team Server Git은 버전 [9.12.0](/releasenotes/studio-pro/9.12/#team-server-git)에서 GA로 릴리스되었습니다. BYO(Bring Your Own) Git은 Mendix [9.6.0](/releasenotes/studio-pro/9.6/#960)부터 베타였으며 Mendix [9.24.0](/releasenotes/studio-pro/9.24/#private-git)에서 GA가 되었습니다. 자세한 내용은 *Studio Pro 가이드*의 [Git 온프레미스 버전 관리 서버 사용하기](/refguide9/on-premises-git/)를 참조하십시오.
{{% /alert %}}

## 개념 {#concepts}

### Team Server {#team-server}

[Team Server](/developerportal/repository/team-server/)는 Mendix 앱의 모든 커밋된 버전이 저장되는 곳입니다. 앱의 리비전을 커밋하면 Team Server에 저장됩니다.

Team Server에 커밋하려면 앱을 편집할 수 있는 역할이 앱에 있어야 합니다. 자세한 내용은 *앱 역할*의 [팀 역할](/developerportal/general/app-roles/#team-roles) 섹션을 참조하십시오.

Team Server 및 관련 기술에 대한 자세한 내용은 [버전 관리 FAQ](/refguide9/version-control-faq/)를 참조하십시오.

### 리포지토리 {#repository}

[Team Server](#team-server) 내에서 각 앱은 리포지토리에 저장됩니다. 이 리포지토리에는 앱의 [브랜치](#branches)에 대한 모든 [커밋된 리비전](#commit)이 포함됩니다.

### 리비전 {#revision}

리비전은 특정 시점의 앱 버전으로, [Team Server](#team-server)에 저장됩니다.

앱의 각 리비전에는 나중에 찾을 수 있도록 고유한 영숫자 식별자가 부여됩니다. 앱이 리포지토리에 커밋되면 Studio Pro에서 새 리비전이 생성됩니다.

### 작업 사본 {#working-copy}

작업 사본은 Studio Pro에서 현재 작업 중인 앱 버전입니다. 앱의 각 개발 라인에 대해 하나의 작업 사본이 있습니다. 이 모델은 개발 작업이 이루어지는 각 컴퓨터에 로컬로 보유됩니다.

### 병합 {#merge}

병합은 앱의 한 [리비전](#revision)을 가져와 다른 리비전에서 만든 차이점을 적용하는 작업입니다. 자세한 내용은 [브랜치 병합](#merging-branches) 섹션을 참조하십시오.

차이점 중 적용할 수 없는 것이 있으면 [충돌](#conflict)이 발생합니다.

### 충돌 {#conflict}

충돌은 앱의 두 버전을 자동으로 결합할 수 없을 때 발생합니다. 이는 동일한 문서가 Studio Pro 작업 사본과 커밋된 [리비전](#revision)에서 변경되었고 이러한 변경을 조정할 수 없을 때 발생합니다. 몇 가지 예:

* Widget의 속성이 리비전과 작업 사본에서 변경되었지만 다른 설정으로 변경된 경우
* 문서가 리비전에서 이동 또는 삭제되었지만 작업 사본에서 다른 방식으로 변경된 경우

충돌이 발생하면 개발자가 개입하여 새 리비전으로 Team Server에 커밋하기 전에 해결 방법을 결정해야 합니다.

### 업데이트/Pull {#update}

업데이트(SVN 용어) 또는 Pull(Git 용어)은 Studio Pro에서 호출되는 작업으로, 리포지토리에서 현재 [개발 라인](#development-line)의 최신 리비전을 가져와 현재 작업 사본에 차이점을 병합합니다.

### 커밋/Push {#commit}

커밋은 Studio Pro에서 호출되는 작업으로, 변경 사항 집합을 생성하고 모든 변경 사항을 [리포지토리](#repository)에 전송/Push하여 새 [리비전](#revision)을 만듭니다.

{{% alert color="info" %}}
Git을 사용할 때 커밋된 데이터를 로컬 리포지토리에 저장하되 아직 중앙 [리포지토리](#repository)에 Push하지 않을 수 있습니다. SVN에서는 이러한 작업이 항상 함께 수행됩니다.
{{% /alert %}}

충돌이 없으면 변경 사항이 리포지토리에 전송되어 새 리비전을 만듭니다.

### 개발 라인 {#development-line}

앱 개발은 관련 변경 사항 집합이 만들어지는 개발 라인에서 수행됩니다. 개발 라인에는 [메인 라인](#main-line)과 [브랜치 라인](#branch-line) 두 가지 유형이 있습니다.

#### 메인 라인 {#main-line}

메인 라인은 앱의 초기 개발 라인이며 일반적으로 프로덕션 환경에 배포될 버전으로 유지됩니다. 간단한 앱과 높은 수준의 협업이 필요하지 않은 앱은 메인 라인만 있을 수 있습니다.

#### 브랜치 라인 {#branch-line}

브랜치 라인은 메인 라인에서 벗어나 테스트할 수 있는 독립적인 변경 사항 집합을 만드는 방법입니다.

브랜치 라인 사용 방법에 대한 자세한 내용은 아래의 [브랜치](#branches) 섹션을 참조하십시오.

### 태그 {#tag}

태그는 [리비전](#revision) 번호 외에 커밋을 식별하는 방법입니다. 개발자가 지정하며 네 부분으로 구성됩니다:

* Major: 중요한 새 기능, 새 사용자 인터페이스 또는 기타 중요한 변경 사항을 식별하는 데 사용
* Minor: 앱의 주요 기능을 보강하는 새 기능을 식별하는 데 사용
* Patch: 이전에 릴리스된 앱의 오류 수정을 식별하는 데 사용
* Revision: 자동으로 추가되며 커밋의 리비전 번호

{{% alert color="info" %}}
태그는 Mendix 9.8.0부터 Studio Pro Git([BYO](/refguide9/branch-line-manager-dialog/#byo-server-app) 및 Team Server)에서 지원됩니다.
{{% /alert %}}

### Repository Service

Repository Service는 Studio Pro와 기타 지원 서비스(예: Team Server) 간의 통신을 관리합니다. 개발자는 일반적으로 Repository Service를 통해 통신하고 있다는 것을 인식하지 못합니다.

## 브랜치 {#branches}

더 복잡한 앱의 경우, 코드를 더 정교한 방식으로 관리하고 싶을 수 있습니다. 예를 들어, 모든 새 기능을 릴리스하지 않고도 버그를 수정할 수 있도록 현재 배포된 앱 버전과 별도로 새 기능을 개발하고 싶을 수 있습니다.

이는 [브랜치 라인](#branch-line)을 사용하여 수행됩니다.

### 메인 라인

모든 앱은 메인 라인을 따라 개발됩니다. 여기서 모든 개발이 단일 라인을 따라 이루어지며, 모든 변경 사항이 이전 리비전 위에 구축됩니다:

{{< figure src="/attachments/refguide9/version-control/image7.png" class="no-border" >}}

### 브랜치 라인

브랜치 라인을 추가하면 기존 [리비전](#revision)의 사본을 가져와 해당 사본에서 별도로 작업합니다. 한 브랜치의 변경 사항은 다른 브랜치에 영향을 미치지 않습니다.

Mendix에서 [리포지토리](#repository) 내의 각 커밋에는 고유 식별자가 부여됩니다.

{{% alert color="info" %}}
SVN에서 고유 식별자는 숫자입니다. 각 커밋에 고유한 번호가 있으므로 선택한 브랜치 라인을 따라 리비전에 부여된 버전 번호가 연속적이지 않을 수 있습니다.
{{% /alert %}}

{{< figure src="/attachments/refguide9/version-control/image8.png" class="no-border" >}}

### 브랜치 병합 {#merging-branches}

독립적으로 계속되어 다른 개발 라인과 결합할 필요가 없는 브랜치 라인이 있을 수 있습니다. 예를 들어, 앱의 특정 릴리스를 위한 브랜치를 만들고 해당 릴리스의 버그만 수정하는 데 사용할 수 있습니다.

반면에, 한 브랜치 라인의 기능을 다른 개발 라인에 추가하고 싶을 수 있습니다. 이를 위한 두 가지 케이스가 있습니다:

* 브랜치 라인에서 새 기능을 개발하고 메인 개발 라인에 포함시키고 싶은 경우
* 다른 브랜치 라인에서 만든 버그 수정을 활용하고 싶은 경우

브랜치 라인의 특정 리비전을 현재 [작업 사본](#working-copy)에 병합할 수 있습니다. 예를 들어, 리비전 6으로 업데이트된 메인 라인에서 작업하고 있었다면 다른 브랜치 라인의 리비전 5를 작업 사본에 [병합](#merge)할 수 있습니다. 그런 다음 결과를 커밋하여 리비전 7을 생성할 수 있습니다. 브랜치에서 여러 다른 커밋된 변경 사항을 병합하려면 모든 변경 사항을 포함하는 리비전 범위를 선택해야 합니다.

{{< figure src="/attachments/refguide9/version-control/image9.png" class="no-border" >}}

{{% alert color="info" %}}

현재 버전보다 하나 이상의 **주요** 버전이 최신인 버전으로 업그레이드하기 전에 브랜치 라인을 메인 라인에 병합해야 합니다.
또한 업그레이드 중에 커밋되지 않은 변경 사항이 없도록 이러한 업그레이드 전에 모든 변경 사항을 커밋하거나 되돌리는 것이 매우 권장됩니다.

{{% /alert %}}

병합 중 충돌이 있을 수 있으며, 앱의 변경 사항을 커밋하기 전에 해결해야 합니다.

병합 중 충돌이 식별되지 않더라도 [병합](#merge) 프로세스에 의해 오류가 도입될 수 있습니다. 오류는 Studio Pro에서 표시되는 불일치이며 앱 배포를 방지합니다. 이로 인해 리비전이 배포할 수 없게 될 수 있으므로 병합 후 오류를 확인하는 것이 중요합니다.

## 이 카테고리의 문서
