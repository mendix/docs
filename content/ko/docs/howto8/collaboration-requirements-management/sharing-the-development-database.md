---
title: "개발 데이터베이스 공유"
url: /howto8/collaboration-requirements-management/sharing-the-development-database/
weight: 40
---

## 소개

모든 Mendix 애플리케이션은 백그라운드에서 데이터베이스가 실행되어야 합니다. 애플리케이션을 개발하는 동안 Mendix Studio Pro에서 제공하는 표준 내장 데이터베이스를 사용하는 것이 좋습니다. 이 사용 방법 문서에서는 내장 데이터베이스에 저장된 데이터를 열고 관리하는 방법을 알려드립니다.

## 사전 조건

내장 데이터베이스를 최대한 활용하려면 다음 사전 조건을 완료하세요:

* 인터넷 연결 보유(데이터베이스 커밋용)
* Team Server 지원 애플리케이션 보유(데이터베이스 공유용)
* 실행 중인 애플리케이션 보유
* SQL 쿼리를 커밋할 데이터가 데이터베이스에 있어야 합니다

## 데이터베이스 유형

내장 데이터베이스는 HSQLDB(HyperSQL DataBase)라는 플랫파일 데이터베이스입니다. Java로 작성된 선도적인 SQL 관계형 데이터베이스 소프트웨어입니다. 인메모리 및 디스크 기반 테이블과 임베디드 및 서버 모드를 지원하는 소형, 고속 멀티스레드 및 트랜잭션 데이터베이스 엔진을 제공합니다. 강력한 명령줄 SQL 도구와 간단한 GUI 쿼리 도구가 포함되어 있습니다.

HSQLDB는 12년 이상 지속적으로 개발되어 왔으며 데이터베이스 및 지속성 엔진으로 사용됩니다. 작은 크기, 메모리에서 완전히 또는 부분적으로 실행하는 기능, 유연성 및 속도로 알려져 있습니다.

따라서 이 유형의 데이터베이스는 로컬 머신에서 Mendix Studio Pro로 애플리케이션을 개발하고 실행하는 데 매우 적합합니다. 이 내장 기능 덕분에 개발자가 로컬 데이터베이스 엔진과 관리 도구를 실행할 필요가 없습니다.

## 기본 데이터베이스 선택

하나의 애플리케이션은 여러 다른 데이터베이스를 사용할 수 있습니다. 기본 데이터베이스를 선택하려면 다음 단계를 수행하세요(구성된 데이터베이스가 여러 개인 경우):

1. **Project Explorer**에서 **Settings**를 더블클릭하세요.
2. 기본 데이터베이스 구성을 선택하고 **Make active**를 클릭하세요.

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580427.png" class="no-border" >}}

## 데이터베이스 뷰어 시작

내장 데이터베이스 뷰어를 시작하려면 다음 단계를 수행하세요:

1. 애플리케이션을 로컬에서 실행하세요(처음인 경우 Studio Pro에서 새 데이터베이스를 만들 것인지 묻습니다. **Yes**를 클릭하세요):

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580426.png" class="no-border" >}}

2. 애플리케이션이 실행 중일 때 내장 데이터베이스 뷰어를 여세요:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580425.png" class="no-border" >}} 

3. 그러면 다음 화면이 표시됩니다(애플리케이션의 데이터 모델에 따라 다름):

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580424.png" class="no-border" >}}

이것이 데이터베이스 관리자입니다. 왼쪽 창에는 실행 중인 애플리케이션의 모든 모듈의 모든 테이블이 표시됩니다. 오른쪽 상단 창에서는 SQL 쿼리를 입력할 수 있으며, 오른쪽 하단 창에는 입력된 SQL 쿼리의 결과가 표시됩니다.

## 쿼리 실행

쿼리는 두 가지 방법으로 실행할 수 있습니다. SQL 스크립트의 명령줄(오른쪽 상단 창)에서 직접 실행하거나 왼쪽 창의 탐색기를 통해 실행할 수 있습니다. SQL에 대한 자세한 정보는 [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)을 방문하세요. 데이터베이스 탐색기(왼쪽 창)에서 쿼리를 실행하려면 다음 단계를 수행하세요:

1. 테이블을 마우스 오른쪽 버튼으로 클릭하고 원하는 작업을 선택하세요:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580423.png" class="no-border" >}}

2. CUSTOMER 테이블에서 모든 고객을 선택하려면 첫 번째 옵션을 클릭하세요. 오른쪽 상단 창에 SQL 명령이 자동으로 채워집니다.

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580422.png" class="no-border" >}}

3. **Execute SQL**을 클릭하여 이 쿼리를 실행하세요:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580421.png" class="no-border" >}}

오른쪽 하단 창에 결과가 표시되며 데이터베이스에서 총 50개의 행이 검색됩니다. 표준 작업에서 레코드를 삭제, 업데이트 및 삽입하는 것도 가능합니다. 표준 작업은 특정 데이터를 검색, 업데이트 또는 삭제하도록 커스터마이즈할 수도 있습니다. 원하는 결과를 얻으려면 SQL 언어에 대한 고급 지식이 필요합니다.

## 데이터 스냅샷 커밋

내장 데이터베이스는 팀의 다른 구성원과 쉽게 공유할 수 있습니다. 비즈니스 로직 자체와 마찬가지로 데이터베이스의 스냅샷을 Team Server에 커밋할 수 있습니다. 이를 수행하려면 다음 단계를 따르세요:

1. **Version Control** > **Add Snapshot of Data**를 선택하세요:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580420.png" class="no-border" >}}

2. 이미 존재하는 경우 **Yes**를 클릭하여 커밋한 다음, 정보 메시지를 추가하고 **OK**를 클릭하세요.

이제 데이터가 Team Server에 커밋되었으며 다른 팀 구성원이 사용할 수 있습니다.

## 데이터 스냅샷 업데이트

데이터 스냅샷을 모델로 가져오려면 다른 팀 구성원이 마지막 데이터베이스 스냅샷을 커밋한 이후 앱을 업데이트해야 합니다. 커밋된 데이터베이스 스냅샷에서 데이터를 가져오려면 다음 단계를 수행하세요:

1. 먼저 애플리케이션을 업데이트해야 합니다. **Changes** 탭에서 **Update**를 클릭하세요:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580419.png" class="no-border" >}}

2. 데이터 스냅샷을 구현하려면 ZIP 파일에서 배포 디렉터리로 데이터베이스를 추출해야 합니다:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580417.png" class="no-border" >}}

3. 이제 데이터 디렉터리를 배포 디렉터리의 데이터 디렉터리로 복사하세요.

{{% alert color="warning" %}}
데이터베이스 이름이 동일하지 않은지 확인하거나 덮어쓰지 않도록 먼저 자체 데이터베이스의 복사본을 만드세요.
{{% /alert %}}

## 더 읽기

* [Mendix GitHub 리포지토리에 기여하기](/howto8/collaboration-requirements-management/contribute-to-a-github-repository/)
* [나만의 GitHub 리포지토리 시작하기](/howto8/collaboration-requirements-management/starting-your-own-repository/)
* [Version Control](/refguide8/version-control/)
