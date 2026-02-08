---
title: "버전 관리"
url: /refguide8/version-control/
description: "이 문서는 정의를 제공하고 버전 관리 프로세스를 설명합니다."
weight: 30
no_list: false
description_list: true 
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

버전 관리를 사용하면 두 가지 방법으로 앱 개발을 관리할 수 있습니다:

* 첫째, 현재 리비전의 모델과 모든 리소스를 저장([커밋](#commit))할 수 있습니다. 나중에 해당 리비전을 다시 가져와 다른 팀원과 공유할 수 있도록 식별자를 부여합니다.
* 둘째, 여러 [개발 라인](#development-line)에서 작업하여 여러 기능을 동시에 작업할 수 있습니다. 그런 다음 이러한 개발 라인을 다시 [병합](#merge)하여 [메인 라인](#main-line)에 별도로 작업한 모든 완료된 기능이 포함되도록 할 수 있습니다.

Mendix의 버전 관리는 [Apache Subversion](https://subversion.apache.org/) 위에 구축되어 있으며, Subversion 사용자에게 익숙한 개념입니다. Mendix는 Studio Pro와 Mendix Portal에 Subversion 명령을 내장하여 이를 단순화합니다.

## 개념 {#concepts}

### Team Server {#team-server}

[Team Server](/developerportal/repository/team-server/)는 모든 커밋된 버전의 Mendix 앱이 저장되는 곳입니다. 앱의 리비전을 커밋하면 Team Server에 저장됩니다.

Team Server에 커밋하려면 앱을 편집할 수 있는 프로젝트 내 역할이 있어야 합니다.

### 리포지토리 {#repository}

[Team Server](#team-server) 내에서 각 앱은 리포지토리에 저장됩니다. 이 리포지토리에는 앱의 [브랜치](#branches)에 대한 모든 [커밋된 리비전](#commit)이 포함됩니다.

### 리비전 {#revision}

리비전은 [Team Server](#team-server)에 저장된 특정 시점의 앱 버전입니다.

앱의 각 리비전에는 이를 식별하고 향후 찾을 수 있도록 고유한 번호가 부여됩니다. Studio Pro에서 앱이 리포지토리에 커밋될 때 새 리비전이 생성됩니다.

### 작업 복사본 {#working-copy}

작업 복사본은 현재 Studio Pro에서 작업 중인 앱의 버전입니다. Studio Pro의 경우 앱의 각 개발 라인에 대해 하나의 작업 복사본이 있습니다. 이 모델은 개발 작업이 이루어지는 각 컴퓨터에 로컬로 유지됩니다.

### 병합 {#merge}

병합은 앱의 한 [리비전](#revision)을 가져와 다른 리비전에서 만든 차이점을 적용하는 작업입니다. 자세한 내용은 [브랜치 병합](#merging-branches) 섹션을 참조하십시오.

차이점을 적용할 수 없는 경우 [충돌](#conflict)이 발생합니다.

### 충돌 {#conflict}

두 버전의 앱을 자동으로 결합할 수 없을 때 충돌이 발생합니다. 이것은 동일한 문서가 Studio Pro 작업 복사본과 커밋된 [리비전](#revision)에서 변경되었고 이러한 변경 사항을 조정할 수 없을 때 발생합니다. 다음은 몇 가지 예입니다:

* 위젯의 속성이 리비전과 작업 복사본에서 변경되었지만 다른 설정으로 변경된 경우
* 문서가 리비전에서 이동 또는 삭제되었지만 작업 복사본에서 다른 방식으로 변경된 경우

충돌이 발생하면 개발자가 개입하여 새 리비전으로 Team Server에 커밋하기 전에 해결 방법을 결정해야 합니다.

### 업데이트 {#update}

업데이트는 Studio Pro에서 호출되는 작업으로, Team Server 리포지토리에서 현재 [개발 라인](#development-line)의 최신 리비전을 가져와 현재 작업 복사본에 차이점을 병합합니다.

### 커밋 {#commit}

커밋은 Studio Pro에서 호출되는 작업으로, 모든 변경 사항을 [리포지토리](#repository)에 보내고 새 [리비전](#revision)을 만듭니다.

충돌이 없으면 변경 사항이 리포지토리로 전송되어 새 리비전을 만듭니다.

### 개발 라인 {#development-line}

앱 개발은 관련 변경 사항의 집합이 이루어지는 개발 라인에서 수행됩니다. 두 가지 유형의 개발 라인이 있습니다: [메인 라인](#main-line)과 [브랜치 라인](#branch-line).

#### 메인 라인 {#main-line}

메인 라인은 앱의 초기 개발 라인이며, 일반적으로 프로덕션 환경에 배포될 버전으로 유지됩니다. 단순한 앱과 높은 수준의 협업이 필요하지 않은 앱은 메인 라인만 가질 수 있습니다.

#### 브랜치 라인 {#branch-line}

브랜치 라인은 메인 라인에서 벗어나 테스트할 수 있는 독립적인 변경 사항 집합을 만드는 방법입니다.

브랜치 라인을 사용하는 방법에 대한 자세한 내용은 아래의 [브랜치](#branches)를 참조하십시오.

### 태그

태그는 [리비전](#revision) 번호 외에 커밋을 식별하는 방법입니다. 개발자가 지정하며 네 부분으로 구성됩니다:

* Major: 중요한 새 기능, 새로운 사용자 인터페이스 또는 기타 중요한 변경 사항을 식별하는 데 사용됩니다
* Minor: 앱의 주요 기능을 보강하는 새 기능을 식별하는 데 사용됩니다
* Patch: 이전에 릴리스된 앱의 오류 수정을 식별하는 데 사용됩니다
* Revision: 자동으로 추가되며 커밋의 리비전 번호입니다

### Repository Service

Repository Service는 Studio Pro와 기타 지원 서비스(예: Team Server) 간의 통신을 관리합니다. 개발자는 일반적으로 Repository Service를 통해 통신하고 있다는 것을 인식하지 못합니다.

## 브랜치 {#branches}

더 복잡한 앱에서는 코드를 더 정교한 방식으로 관리하고 싶을 수 있습니다. 예를 들어, 현재 배포된 앱 버전과 별도로 새 기능을 개발하여 모든 새 기능을 릴리스하지 않고도 버그를 수정할 수 있습니다.

이것은 [브랜치 라인](#branch-line)을 사용하여 수행됩니다.

### 메인 라인

모든 앱은 메인 라인(**trunk**이라고도 함)을 따라 개발됩니다. 여기서는 모든 개발이 단일 라인을 따라 이루어지며, 모든 변경 사항이 이전 리비전 위에 구축됩니다:

{{< figure src="/attachments/refguide8/version-control/image7.png" class="no-border" >}}

### 브랜치 라인

브랜치 라인을 추가하면 기존 [리비전](#revision)의 복사본을 만들어 해당 복사본에서 별도로 작업합니다. 하나의 브랜치에 대한 변경 사항은 다른 브랜치에 영향을 미치지 않습니다.

Mendix에서는 [리포지토리](#repository) 내의 각 리비전에 고유한 버전 번호가 부여됩니다. 이는 선택한 브랜치 라인을 따른 리비전에 부여된 버전 번호가 연속적이지 않을 수 있음을 의미합니다.

{{< figure src="/attachments/refguide8/version-control/image8.png" class="no-border" >}}

### 브랜치 병합 {#merging-branches}

독립적으로 계속되어 다른 개발 라인과 결합할 필요가 없는 브랜치 라인이 있을 수 있습니다. 예를 들어, 앱의 특정 릴리스를 위해 브랜치를 생성하고 해당 릴리스의 버그만 수정하는 데 사용할 수 있습니다.

반면에 한 브랜치 라인의 기능을 다른 개발 라인에 추가하고 싶을 수 있습니다. 이를 위한 두 가지 경우가 있습니다:

* 브랜치 라인에서 새 기능을 개발하고 메인 개발 라인에 포함시키려는 경우
* 다른 브랜치 라인에서 수행된 버그 수정을 활용하려는 경우

브랜치 라인의 특정 리비전을 현재 [작업 복사본](#working-copy)에 병합할 수 있습니다. 예를 들어, 리비전 6으로 업데이트된 메인 라인에서 작업 중인 경우, 다른 브랜치 라인의 리비전 5를 작업 복사본에 [병합](#merge)할 수 있습니다. 그런 다음 결과를 커밋하여 리비전 7을 생성할 수 있습니다. 브랜치에서 여러 다른 커밋된 변경 사항을 병합하려면 모든 변경 사항을 포함하는 리비전 범위를 선택해야 합니다.

{{< figure src="/attachments/refguide8/version-control/image9.png" class="no-border" >}}

병합 중에 충돌이 발생할 수 있으며, 앱에 대한 변경 사항을 커밋하기 전에 이를 해결해야 합니다.

병합 과정에서 충돌이 식별되지 않더라도 [병합](#merge) 프로세스에 의해 오류가 도입될 수 있습니다. 오류는 Studio Pro에서 표시되는 불일치이며 앱이 배포되는 것을 방지합니다. 이로 인해 리비전이 배포 불가능해질 수 있으므로, 병합을 수행한 후 오류를 확인하는 것이 중요합니다.

## 이 카테고리의 문서
