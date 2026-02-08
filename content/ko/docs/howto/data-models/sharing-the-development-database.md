---
title: "개발 데이터베이스 공유"
url: /howto/data-models/sharing-the-development-database/
weight: 9
description: "Studio Pro에 내장된 데이터베이스에 저장된 데이터를 열고 관리하는 방법을 설명합니다."
aliases:
  - /howto/collaboration-requirements-management/sharing-the-development-database/
---

## 소개

모든 Mendix 애플리케이션은 백그라운드에서 실행되는 데이터베이스가 필요합니다. 애플리케이션을 개발하는 동안 Mendix Studio Pro에 내장된 표준 데이터베이스를 사용하는 것이 가장 좋습니다. 이 사용 방법에서는 내장 데이터베이스에 저장된 데이터를 열고 관리하는 방법을 알려드립니다.

{{% alert color="warning" %}}
이 문서는 **동일한 앱**에서 작업하는 개발자 간에 데이터베이스를 공유하는 것에 관한 것입니다. 다른 앱 간에 하나의 데이터베이스를 공유하는 것은 불가능합니다. 다른 앱으로 데이터를 복사해야 하는 경우 [Database Replication](/appstore/modules/database-replication/) 모듈을 사용하세요.
{{% /alert %}}

## 사전 준비 사항

내장 데이터베이스를 최대한 활용하려면 다음 사전 준비 사항을 완료했는지 확인하세요:

* 인터넷 연결 (데이터베이스를 커밋하기 위해)
* Team Server가 활성화된 애플리케이션 (데이터베이스를 공유하기 위해)
* 실행 중인 애플리케이션
* SQL 쿼리를 커밋할 데이터베이스에 일부 데이터가 있어야 함

## 데이터베이스 유형

Mendix Studio Pro에 내장된 데이터베이스는 HSQLDB(HyperSQL DataBase)라는 플랫 파일 데이터베이스입니다. 이는 Java로 작성된 선도적인 SQL 관계형 데이터베이스 소프트웨어입니다. 인메모리 및 디스크 기반 테이블을 갖춘 작고 빠른 멀티스레드 트랜잭션 데이터베이스 엔진을 제공하며 임베디드 및 서버 모드를 지원합니다. 강력한 명령줄 SQL 도구와 간단한 GUI 쿼리 도구를 포함합니다.

HSQLDB는 2001년에 처음 출시되었으며 데이터베이스 및 영속성 엔진으로 사용됩니다. 작은 크기, 완전히 또는 부분적으로 메모리에서 실행하는 능력, 유연성 및 속도로 알려져 있습니다.

이 유형의 데이터베이스는 로컬 머신에서 Mendix Studio Pro로 애플리케이션을 개발하고 실행하는 동안 사용하기에 탁월합니다. 내장 기능 덕분에 개발자는 로컬 데이터베이스 엔진과 관리 도구를 실행할 필요가 없습니다.

## 선호하는 데이터베이스 선택

각 애플리케이션은 단일 데이터베이스를 사용하지만, 다른 데이터베이스 관리 시스템을 기반으로 한 데이터베이스를 포함하여 다른 데이터베이스를 선택할 수 있습니다. 구성된 데이터베이스 간에 다음과 같이 전환할 수 있습니다:

1. **App Explorer**에서 **Settings**를 더블클릭하여 **App Settings** 대화 상자를 여세요.
2. **Configurations** 탭에서 선호하는 데이터베이스 구성을 선택하고 **Make active**를 클릭하세요.

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580427.png" class="no-border" >}}

3. **OK**를 클릭하여 선택을 확인하세요.

## 데이터베이스 뷰어 시작

내장 데이터베이스 뷰어를 시작하려면 다음 단계를 따르세요:

1. 애플리케이션을 로컬로 실행하세요 (처음인 경우 Studio Pro에서 새 데이터베이스를 생성하라는 메시지가 표시됩니다. 이 경우 **Yes**를 클릭하세요):

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580426.png"   width="150"  class="no-border" >}}

2. 애플리케이션이 실행 중일 때 **Console** 창에서 **Advanced** > **Start built-in database viewer**를 선택하여 내장 데이터베이스 뷰어를 여세요:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580425.png" class="no-border" >}}

    **HyperSQL Database Manager** 앱이 시작됩니다 (애플리케이션의 데이터 모델에 따라):

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580424.png" class="no-border" >}}

왼쪽 창에는 실행 중인 애플리케이션의 모든 모듈의 모든 테이블이 표시됩니다. 오른쪽 상단 창에서는 SQL 쿼리를 입력할 수 있고 오른쪽 하단 창에는 입력한 SQL 쿼리의 결과가 표시됩니다.

## 쿼리 실행

쿼리를 실행하는 방법은 두 가지입니다:

* 오른쪽 상단 창의 명령줄에서 SQL 스크립트를 직접 사용
* 왼쪽 창의 데이터베이스 탐색기를 통해

**HyperSQL Database Manager**에서 데이터베이스 탐색기(왼쪽 창)로부터 쿼리를 실행하려면 다음 단계를 따르세요:

1. 테이블을 마우스 오른쪽 버튼으로 클릭하고 원하는 작업을 선택하세요:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580423.png" class="no-border" >}}

2. CUSTOMER 테이블에서 모든 고객을 선택하려면 첫 번째 옵션을 선택하세요. 오른쪽 상단 창에 SQL 명령이 자동으로 채워집니다:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580422.png" class="no-border" >}}

3. **Execute SQL**을 클릭하여 이 쿼리를 실행하세요:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580421.png" class="no-border" >}}

오른쪽 하단 창에 결과가 표시되며 데이터베이스에서 최대 50개의 행이 검색됩니다. 표준 작업에서 레코드를 삭제, 업데이트 및 삽입하는 것도 가능합니다.

SQL을 알고 있다면 표준 작업을 커스터마이징하여 특정 데이터를 검색, 업데이트 또는 삭제할 수 있습니다.

## 데이터 스냅샷 커밋

내장 데이터베이스는 팀의 다른 멤버와 쉽게 공유할 수 있습니다. 먼저, Team Server에 데이터베이스의 스냅샷을 커밋해야 합니다. 이를 수행하려면 다음 단계를 따르세요:

1. **Version Control** > **Add Snapshot of Data**를 선택하세요:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580420.png" class="no-border" >}}

2. **Yes**를 클릭하여 커밋하세요.
3. **Commit** 대화 상자에서 정보 메시지를 추가하고 **OK**를 클릭하세요.

이제 데이터가 Team Server에 커밋되었으며 다른 팀 멤버가 사용할 수 있습니다.

## 데이터 스냅샷 업데이트

다른 팀 멤버가 커밋한 데이터 스냅샷을 모델로 가져오려면 먼저 앱을 업데이트해야 합니다. 커밋된 데이터베이스 스냅샷에서 데이터를 가져오려면 다음 단계를 따르세요:

1. **Changes** 탭에서 **Update**를 클릭하여 애플리케이션을 업데이트하세요.

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580419.png" class="no-border" >}}

1. **App** > **Show App Directory in Explorer**를 클릭하여 앱의 루트 디렉터리를 여세요.

    데이터 스냅샷은 `data-snapshot.zip` 파일에 있습니다.

1. ZIP 파일에서 데이터베이스를 임시 디렉터리로 추출하세요.

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580417.png" class="no-border" >}}

1. **deployment** 디렉터리의 **data** 디렉터리에 있는 모든 파일과 폴더를 삭제하세요.

1. 추출된 데이터베이스의 **data** 디렉터리에서 파일과 폴더를 **deployment** 디렉터리의 **data** 디렉터리로 복사하세요.

{{% alert color="warning" %}}
공유된 데이터베이스의 데이터를 사용하기 전에 기존 데이터의 복사본을 보관하려면, 먼저 data 폴더의 복사본을 만들어 기존 데이터가 덮어써지지 않도록 할 수 있습니다.
{{% /alert %}}

## 더 읽기

* [버전 관리](/refguide/version-control/)
