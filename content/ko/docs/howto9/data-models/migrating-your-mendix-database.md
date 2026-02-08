---
title: "Mendix 데이터베이스 마이그레이션"
url: /howto9/data-models/migrating-your-mendix-database/
weight: 10
description: "비PostgreSQL 데이터베이스를 PostgreSQL 데이터베이스로 마이그레이션하고, PostgreSQL 데이터베이스를 내보내고, 데이터베이스 마이그레이션을 위한 기타 작업을 수행하는 방법을 설명합니다."
---

## 소개

이 문서에서는 기존 Mendix 데이터베이스의 데이터를 다른 Mendix 데이터베이스로 마이그레이션하는 방법을 설명합니다. 예를 들어 MS SQL Server에서 PostgreSQL로 마이그레이션하려는 경우에 유용합니다.

이 사용 방법을 완료하면 다음을 수행하는 방법을 알게 됩니다:

* 비PostgreSQL 데이터베이스를 PostgreSQL 데이터베이스로 마이그레이션
* PostgreSQL 데이터베이스 내보내기
* 내보낸 PostgreSQL 데이터베이스를 Mendix Cloud에 업로드
* Mendix Cloud 데이터베이스 내보내기
* 온프레미스 PostgreSQL 데이터베이스로 가져오기
* PostgreSQL 데이터베이스를 비PostgreSQL 데이터베이스로 마이그레이션 (SAP HANA로의 PostgreSQL 데이터베이스 마이그레이션 포함)

{{% alert color="warning" %}}
이러한 방법을 사용하여 한 앱에서 다른 앱으로 데이터를 전송할 수는 없습니다. 이는 도메인 모델(Domain Model)에서 이름이 같더라도 각 앱이 Entity에 고유한 레이블을 지정하기 때문입니다. 자세한 내용은 [데이터 저장소](/refguide9/data-storage/)를 참조하세요.

다른 앱으로 데이터를 복사하려면 [Database Replication](/appstore/modules/database-replication/) 모듈을 사용하는 것을 권장합니다.
{{% /alert %}}

## 개요

Mendix에서 지원하는 모든 데이터베이스 관리 시스템에서 다른 Mendix 지원 데이터베이스 관리 시스템으로 모든 데이터를 복사할 수 있습니다. 예를 들어, 내장형에서 PostgreSQL로, PostgreSQL에서 내장형으로 데모, 테스트 및 프로덕션 데이터베이스를 복사할 수 있습니다. 또한 SQL Server 또는 Oracle(온프레미스)에서 클라우드의 PostgreSQL로 프로덕션 데이터를 마이그레이션할 수도 있습니다.

이를 위해 데이터를 복사하려는 데이터베이스에서 앱을 시작하세요. 이 데이터베이스는 이미 존재해야 하며 완전히 비어 있어야 합니다. 모든 데이터를 복사할 소스 데이터베이스를 Mendix에 알리려면 일부 사용자 정의 구성 설정을 지정해야 합니다. 이러한 사용자 정의 설정은 소스 데이터베이스를 식별하고 Mendix에 접근에 필요한 인증을 제공합니다.

데이터베이스 마이그레이션에 가장 일반적으로 사용되는 사용자 정의 설정은 다음과 같습니다:

* SourceDatabaseType (HSQLDB, MYSQL, ORACLE, POSTGRESQL, SQLSERVER)
* SourceDatabaseHost
* SourceDatabaseName
* SourceDatabaseUserName
* SourceDatabasePassword

사용 가능한 설정의 전체 목록에 대한 자세한 내용은 [런타임 커스터마이징](/refguide9/custom-settings/)을 참조하세요.

이러한 설정은 다음과 같이 구성할 수 있습니다:

* Studio Pro – **App Explorer**에서 **App**을 확장하고, **Settings**를 더블 클릭하고, 구성을 편집하고, **Custom** 탭으로 이동합니다:

    {{< figure src="/attachments/howto9/data-models/migrating-your-mendix-database/19398970.png" class="no-border" >}} 

* Service Console – 왼쪽 창에서 앱을 클릭하고, **Configuration**을 클릭하고, **Advanced**를 클릭한 다음 **Custom Mendix settings**를 확인합니다:

    {{< figure src="/attachments/howto9/data-models/migrating-your-mendix-database/19398971.png" class="no-border" >}} 

* m2ee-tools – mxruntime 섹션에 사용자 정의 설정을 추가합니다 (자세한 내용은 [Full Documented m2ee](https://github.com/mendix/m2ee-tools/blob/develop/examples/full-documented-m2ee.yaml)를 참조하세요)

Studio Pro, Service Console 또는 m2ee-tools를 사용하여 데이터베이스를 마이그레이션할 수 있습니다. Service Console은 복사 프로세스 중에 진행률 표시줄을 볼 수 있다는 장점이 있어, 실행에 시간이 오래 걸리는 대량의 데이터를 복사할 때 유용합니다.

{{% alert color="info" %}}
데이터베이스 마이그레이션은 앱 시작 프로세스 중 일반적인 데이터베이스 동기화 단계로 Mendix에 의해 처리됩니다. m2ee-tools를 사용할 때, 시작 프로세스 중에 '데이터베이스를 동기화해야 합니다'와 같은 메시지나 빈 메시지가 표시될 수 있습니다. 이러한 메시지를 무시해도 됩니다 — 데이터베이스 마이그레이션이 수행됩니다.
{{% /alert %}}

{{% alert color="warning" %}}
데이터 복사 프로세스가 시작되기 전에 소스 데이터베이스 구조를 기반으로 메인 데이터베이스 구조가 생성됩니다. 이는 소스 데이터베이스가 현재 도메인 모델에서 지정한 것보다 더 큰 요소 값을 가진 경우 특히, 모든 데이터가 문제없이 복사되도록 하기 위해 필요합니다.

소스 데이터베이스 구조와 데이터는 마이그레이션의 일부로 변경되지 않습니다.
{{% /alert %}}

## Studio Pro에서 PostgreSQL 데이터베이스 사용

Studio Pro를 내장형(HSQLDB) 데이터베이스 대신 PostgreSQL 데이터베이스를 사용하도록 구성할 수 있습니다.

이를 수행하려면 다음 단계를 따르세요:

1. **App** > **Settings**를 여세요.
2. **Configurations** 탭에서 **New**를 클릭하여 새 구성을 추가하세요.
3. 구성에 새 **Name**을 지정하세요.
4. **Database** 탭에서 다음 값을 설정하세요:
    * **Type** – **PostgreSQL**
    * **Database name** – *default*
    * **URL** – 로컬 PostgreSQL 서버의 URL
    * **User name** – 로컬 PostgreSQL의 데이터베이스 관리자 사용자 이름
    * **Password** – 위에서 지정한 사용자의 비밀번호

    {{< figure src="/attachments/howto9/data-models/migrating-your-mendix-database/postgresql-config.png" class="no-border" >}}

    새 구성이 활성 구성으로 설정됩니다.

5. PostgreSQL이 올바른 포트에서 로컬로 실행되고 있는지 확인하세요.
6. 앱을 로컬로 실행하세요. PostgreSQL 데이터베이스가 비어 있는 경우, 앱이 앱의 도메인 모델을 지원하도록 데이터베이스를 구성합니다.

{{% alert color="info" %}}
이미 데이터베이스가 있는 경우(예: 클라우드의 테스트 데이터베이스), 이를 로컬 PostgreSQL 데이터베이스로 복원할 수도 있습니다. 이 작업에 대한 지침은 [로컬로 백업 복원](/developerportal/operate/restore-backup-locally/)에서 확인할 수 있습니다.
{{% /alert %}}

## 비PostgreSQL 데이터베이스를 PostgreSQL 데이터베이스로 마이그레이션

Mendix Cloud 환경은 데이터베이스 서버로 PostgreSQL만 사용합니다. 권장하는 방법은 기존 온프레미스 비PostgreSQL 소스 데이터베이스를 새 온프레미스 PostgreSQL 대상 데이터베이스로 마이그레이션하는 것입니다.

소스 데이터베이스는 클라우드로 마이그레이션하려는 데이터가 있는 데이터베이스입니다. 대상 PostgreSQL 데이터베이스는 완전히 비어 있어야 하며, 테이블이 포함되어서는 안 됩니다. Mendix 앱에서 Settings의 활성 구성은 대상 데이터베이스를 가리켜야 하며, 위 개요에서 설명한 대로 소스 데이터베이스에 대한 사용자 정의 구성 설정을 추가해야 합니다.

Mendix 앱을 구성한 후 애플리케이션을 로컬로 실행하면 소스 데이터베이스에서 대상 데이터베이스로 데이터베이스 스키마와 모든 데이터를 자동으로 마이그레이션합니다. 대상 데이터베이스를 내보내기 전에 항상 브라우저에서 애플리케이션을 보면서 먼저 유효성을 검사해야 합니다.

### PostgreSQL 데이터베이스 내보내기

PostgreSQL 데이터베이스를 내보내려면 [pg_dump](https://www.postgresql.org/docs/current/backup-dump.html) 명령줄 도구 또는 [PG Admin](https://www.pgadmin.org/docs/) 시각적 도구 문서를 참조하여 새 PostgreSQL 데이터베이스의 백업을 만드는 방법을 이해하세요.

### 내보낸 PostgreSQL 데이터베이스를 Mendix Cloud 데이터베이스에 업로드

Mendix Portal을 사용하여 마이그레이션되고 내보낸 데이터베이스 백업을 Mendix Cloud에 업로드하세요. Mendix Portal의 Nodes 페이지를 사용하여 접근할 수 있습니다. 다음 단계를 따르세요:

1. 앱을 선택하세요.
2. 탐색 창에서 **Backups**를 클릭하세요.
3. **Upload Backup**을 클릭하여 데이터베이스를 업로드하세요.
4. 파일 선택기를 사용하여 로컬 파일 시스템에서 내보낸 데이터베이스 파일을 선택하세요.
5. 업로드가 완료된 후 애플리케이션을 중지하세요.
6. 업로드한 백업에서 **More Options** > **Restore**를 클릭하세요.
7. 마지막으로 애플리케이션을 시작하세요.

## Mendix Cloud 데이터베이스 내보내기

동일한 절차를 사용하여 기존 Mendix Cloud 데이터베이스를 내보내고, 온프레미스 PostgreSQL 소스 데이터베이스로 가져온 다음, 온프레미스 비PostgreSQL 대상 데이터베이스로 마이그레이션할 수 있습니다.

Mendix Portal을 통해 Mendix Cloud 데이터베이스를 내보내세요. Mendix Portal의 Nodes 페이지를 사용하여 접근할 수 있습니다:

1. 앱과 환경을 선택하세요.
2. **Backups**를 클릭하세요.
3. 선택적으로, **Create Backup**을 클릭하여 최신 데이터로 새 백업을 만드세요.
4. 다운로드하려는 백업에서 **More Options** > **Download**를 클릭하세요. 대화 상자에 표시된 데이터베이스 URL을 사용하여 데이터베이스가 로컬 파일 시스템으로 다운로드됩니다.

### 온프레미스 PostgreSQL 데이터베이스로 가져오기

다운로드된 데이터베이스 파일을 사용하여 PostgreSQL 데이터베이스를 가져오려면 [pg_dump](https://www.postgresql.org/docs/current/backup-dump.html) 명령줄 도구 또는 [pgAdmin](https://www.pgadmin.org/docs/) 시각적 도구 문서를 참조하여 다운로드한 데이터베이스 파일을 복원하는 방법을 이해하세요.

### PostgreSQL 데이터베이스를 비PostgreSQL 데이터베이스로 마이그레이션

아래는 PostgreSQL 데이터베이스를 다른 데이터베이스로 마이그레이션하는 방법에 대한 일반적인 지침입니다. SAP Business Technology Platform(SAP BTP)에서 실행되는 Mendix 애플리케이션이 사용하는 PostgreSQL 데이터베이스를 마이그레이션하는 경우에 대한 특별 섹션이 있습니다.

#### 일반 지침

소스 데이터베이스는 Mendix Cloud에서 다운로드한 데이터베이스가 있는 PostgreSQL 데이터베이스입니다. 대상 비PostgreSQL 데이터베이스는 완전히 비어 있어야 하며, 테이블이 포함되어서는 안 됩니다. Mendix 앱에서 Settings의 활성 구성은 대상 데이터베이스를 가리켜야 하며, 위 개요에서 설명한 대로 소스 PostgreSQL 데이터베이스에 대한 사용자 정의 구성 설정을 추가해야 합니다.

Mendix 앱을 구성한 후 애플리케이션을 로컬로 실행하면 소스 데이터베이스에서 대상 데이터베이스로 데이터베이스 스키마와 모든 데이터를 자동으로 마이그레이션합니다. 항상 브라우저에서 애플리케이션을 보면서 먼저 유효성을 검사해야 합니다.

#### SAP BTP에서 SAP HANA로 마이그레이션

SAP BTP에서 PostgreSQL을 데이터베이스 서비스로 사용하여 실행 중인 Mendix 애플리케이션이 있고 데이터베이스를 SAP HANA로 마이그레이션하려는 경우, 기존 데이터를 마이그레이션하기 위해 몇 가지 추가 단계가 필요합니다.

이를 수행하려면 다음 단계를 따르세요:

1. Cloud Foundry 명령줄을 사용하여 SAP BTP, Cloud Foundry 환경(PostgreSQL 서비스 포함)에 로그인하세요.
2. 다음 명령을 사용하여 애플리케이션의 환경 변수에서 PostgreSQL 서비스 인스턴스 세부 정보를 가져오세요:

    `cf env {application-name}`

3. **VCAP_SERVICES** 목록을 검사하고 `postgresql` 서비스의 다음 속성 값을 기록하세요:
    * `dbname` – `{dbname}`
    * `hostname` – `{hostname}`
    * `password` – `{password}`
    * `port` – `{port}`
    * `username` – `{username}`

    아래 강조된 이미지에 표시된 것과 같습니다:

    {{< figure src="/attachments/howto9/data-models/migrating-your-mendix-database/sap-postgres-config.png" class="no-border" >}}

4. Mendix Portal을 사용하여 SAP HANA 데이터베이스 서비스를 사용하는 환경을 만드세요.
5. mda를 배포하되, **애플리케이션을 시작하지 마세요**.
6. Cloud Foundry 명령줄을 사용하여 SAP BTP, Cloud Foundry 환경(SAP HANA 서비스 포함)에 로그인하세요.
7. 명령줄을 사용하여 SAP HANA 환경에 다음 런타임 속성을 설정하세요. 위에서 기록한 PostgreSQL 인스턴스 값을 사용하세요.

    ```bash
    cf set-env {application-name} MXRUNTIME_SourceDatabaseType POSTGRESQL
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseHost {hostname}:{port}
    cf set-env {application-name} MXRUNTIME_SourceDatabaseName {dbname}
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseUserName {username}
    cf set-env {application-name}  MXRUNTIME_SourceDatabasePassword {password}
    ```

8. [Apps](https://sprintr.home.mendix.com/)에서 또는 명령줄로 애플리케이션을 시작하세요.
9. 애플리케이션이 시작되면 애플리케이션의 데이터를 확인하세요.
