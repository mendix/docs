---
title: "개발 데이터베이스 공유"
url: /howto9/data-models/sharing-the-development-database/
weight: 9
description: "Studio Pro와 함께 제공되는 내장 데이터베이스에 저장된 데이터를 열고 관리하는 방법을 설명합니다."
aliases:
  - /howto9/collaboration-requirements-management/sharing-the-development-database/
---

## 소개

모든 Mendix 애플리케이션에는 백그라운드에서 실행되는 데이터베이스가 필요합니다. 애플리케이션을 개발하는 동안에는 Mendix Studio Pro와 함께 제공되는 표준 내장 데이터베이스를 사용하는 것이 좋습니다. 이 사용 방법에서는 내장 데이터베이스에 저장된 데이터를 열고 관리하는 방법을 알려드립니다.

{{% alert color="warning" %}}
이 문서는 **동일한 앱**에서 작업하는 개발자 간에 데이터베이스를 공유하는 것에 관한 것입니다. 서로 다른 앱 간에 하나의 데이터베이스를 공유하는 것은 불가능합니다. 다른 앱으로 데이터를 복사해야 하는 경우 [Database Replication](/appstore/modules/database-replication/) 모듈을 사용하세요.
{{% /alert %}}

## 사전 준비 사항

내장 데이터베이스를 최대한 활용하려면 다음 사전 준비 사항을 완료했는지 확인하세요:

* 인터넷 연결이 있어야 합니다 (데이터베이스 커밋을 위해)
* Team Server가 활성화된 애플리케이션이 있어야 합니다 (데이터베이스 공유를 위해)
* 실행 중인 애플리케이션이 있어야 합니다
* SQL 쿼리를 커밋할 데이터가 데이터베이스에 있어야 합니다

## 데이터베이스 유형

내장 데이터베이스는 HSQLDB(HyperSQL DataBase)라는 플랫파일 데이터베이스입니다. 이것은 Java로 작성된 선도적인 SQL 관계형 데이터베이스 소프트웨어입니다. 소형이고 빠르며 멀티스레드 및 트랜잭션 데이터베이스 엔진을 제공하며, 인메모리 및 디스크 기반 테이블을 지원하고 임베디드 및 서버 모드를 지원합니다. 강력한 명령줄 SQL 도구와 간단한 GUI 쿼리 도구가 포함되어 있습니다.

HSQLDB는 12년 이상 지속적으로 개발되어 왔으며 데이터베이스 및 영속성 엔진으로 사용됩니다. 작은 크기, 완전히 또는 부분적으로 메모리에서 실행할 수 있는 능력, 유연성 및 속도로 알려져 있습니다.

따라서 이 유형의 데이터베이스는 로컬 머신에서 Mendix Studio Pro로 애플리케이션을 개발하고 실행하는 데 탁월합니다. 이 내장 기능 덕분에 개발자가 로컬 데이터베이스 엔진과 관리 도구를 실행할 필요가 없습니다.

## 기본 데이터베이스 선택

하나의 애플리케이션은 여러 다른 데이터베이스를 사용할 수 있습니다. 구성된 데이터베이스가 둘 이상인 경우 다음 단계에 따라 기본 데이터베이스를 선택하세요:

1. **App Explorer**에서 **Settings**를 더블 클릭하여 **App Settings** 대화 상자를 여세요.
2. **Configurations** 탭에서 그리드의 기본 데이터베이스 구성을 선택하고 **Make active**를 클릭하세요.

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580427.png" class="no-border" >}}

3. **OK**를 클릭하여 선택을 확인하세요.

## 데이터베이스 뷰어 시작

내장 데이터베이스 뷰어를 시작하려면 다음 단계를 따르세요:

1. 애플리케이션을 로컬로 실행하세요 (처음인 경우 Studio Pro가 새 데이터베이스를 만들 것인지 물어볼 것이며, 이 경우 **Yes**를 클릭하세요):

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580426.png"   width="150"  class="no-border" >}}

2. 애플리케이션이 실행 중일 때 **Console** 창에서 **Advanced** > **Start built-in database viewer**를 선택하여 내장 데이터베이스 뷰어를 여세요:

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580425.png" class="no-border" >}} 

    **Database Manager** 대화 상자가 표시됩니다 (애플리케이션의 데이터 모델에 따라 다름):

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580424.png" class="no-border" >}}

왼쪽 창에는 실행 중인 애플리케이션의 모든 모듈의 모든 테이블이 표시됩니다. 오른쪽 상단 창에서는 SQL 쿼리를 입력할 수 있으며, 오른쪽 하단 창에는 입력한 SQL 쿼리의 결과가 표시됩니다.

## 쿼리 실행

쿼리를 실행하는 방법은 두 가지입니다:

* 오른쪽 상단 창에서 SQL 스크립트를 사용하여 명령줄에서 직접 실행
* 왼쪽 창의 데이터베이스 탐색기를 통해 실행

탐색기에서 쿼리를 실행하려면 다음 단계를 따르세요:

**Database Manager**에서 탐색기(왼쪽 창)에서 쿼리를 실행하려면 아래 단계를 따르세요:

1. 테이블을 마우스 오른쪽 버튼으로 클릭하고 원하는 작업을 선택하세요:

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580423.png" class="no-border" >}}

2. CUSTOMER 테이블에서 모든 고객을 선택하려면 첫 번째 옵션을 선택하세요. 오른쪽 상단 창에 SQL 명령이 자동으로 채워집니다:

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580422.png" class="no-border" >}}

3. **Execute SQL**을 클릭하여 이 쿼리를 실행하세요:

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580421.png" class="no-border" >}}

오른쪽 하단 창에 결과가 표시되며 데이터베이스에서 총 50개의 행이 조회됩니다. 표준 작업에서 레코드를 삭제, 업데이트 및 삽입하는 것도 가능합니다. 표준 작업은 특정 데이터를 조회, 업데이트 또는 삭제하도록 커스터마이징할 수도 있습니다. 원하는 결과를 얻으려면 SQL 언어에 대한 고급 지식이 필요합니다.

## 데이터 스냅샷 커밋

내장 데이터베이스는 팀의 다른 구성원과 쉽게 공유할 수 있습니다. 데이터베이스의 스냅샷을 Team Server에 커밋할 수 있습니다. 이를 수행하려면 다음 단계를 따르세요:

1. **Version Control** > **Add Snapshot of Data**를 선택하세요:

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580420.png" class="no-border" >}}

2. **Yes**를 클릭하여 커밋하세요.
3. **Commit** 대화 상자에서 정보 메시지를 추가하고 **OK**를 클릭하세요.

이제 데이터가 Team Server에 커밋되었으며 다른 팀 구성원이 사용할 수 있습니다.

## 데이터 스냅샷 업데이트

모델에 데이터 스냅샷을 가져오려면, 다른 팀 구성원이 마지막 데이터베이스 스냅샷을 커밋한 이후에 앱을 업데이트해야 합니다. 커밋된 데이터베이스 스냅샷에서 데이터를 가져오려면 다음 단계를 따르세요:

1. 애플리케이션을 업데이트하려면 **Changes** 탭에서 **Update**를 클릭하세요.

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580419.png" class="no-border" >}}

2. 데이터 스냅샷을 구현하려면 ZIP 파일에서 **deployment** 디렉토리로 데이터베이스를 추출하세요.

    {{< figure src="/attachments/howto9/data-models/sharing-the-development-database/18580417.png" class="no-border" >}}

3. **data** 디렉토리를 **deployment** 디렉토리의 **data** 디렉토리로 복사하세요.

{{% alert color="warning" %}}
데이터베이스 이름이 같지 않은지 확인하거나 자신의 데이터베이스 사본을 먼저 만들어 덮어쓰지 않도록 하세요.
{{% /alert %}}

## 더 읽기

* [버전 관리](/refguide9/version-control/)
