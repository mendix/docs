---
title: "Mendix 데이터베이스 마이그레이션"
url: /howto/data-models/migrating-your-mendix-database/
weight: 10
description: "비-PostgreSQL 데이터베이스를 PostgreSQL 데이터베이스로 마이그레이션하고, PostgreSQL 데이터베이스를 내보내고, 데이터베이스 마이그레이션을 위한 기타 작업을 수행하는 방법을 설명합니다."
---

## 소개

이 문서는 기존 Mendix 데이터베이스의 데이터를 다른 Mendix 데이터베이스로 마이그레이션하는 방법을 설명합니다. 이는 한 유형의 데이터베이스에서 다른 유형으로 마이그레이션하려는 경우에 유용합니다. 예를 들어, MS SQL Server에서 PostgreSQL로 마이그레이션하는 경우입니다.

이 하우투를 완료하면 다음 작업을 수행할 수 있습니다:

* 비-PostgreSQL 데이터베이스를 PostgreSQL 데이터베이스로 마이그레이션
* PostgreSQL 데이터베이스 내보내기
* 내보낸 PostgreSQL 데이터베이스를 Mendix Cloud에 업로드
* Mendix Cloud 데이터베이스 내보내기
* 온프레미스 PostgreSQL 데이터베이스로 가져오기
* PostgreSQL 데이터베이스를 비-PostgreSQL 데이터베이스로 마이그레이션(SAP HANA로의 마이그레이션 포함)

{{% alert color="warning" %}}
이 방법을 사용하여 한 앱에서 다른 앱으로 데이터를 전송할 수는 없습니다. 이는 각 앱이 Domain Model에서 이름이 같더라도 Entity에 고유한 레이블을 지정하기 때문입니다. 자세한 내용은 [데이터 스토리지](/refguide/data-storage/)를 참조하세요.

데이터를 다른 앱으로 복사하려면 [Database Replication](/appstore/modules/database-replication/) 모듈을 사용하는 것을 권장합니다.
{{% /alert %}}

## 개요{#overview}

Mendix가 지원하는 모든 데이터베이스 관리 시스템에서 다른 Mendix 지원 데이터베이스 관리 시스템으로 모든 데이터를 복사할 수 있습니다. 예를 들어, 데모, 테스트, 프로덕션 데이터베이스를 내장형에서 PostgreSQL로, PostgreSQL에서 내장형으로 복사할 수 있습니다. 또한 SQL Server 또는 Oracle(온프레미스)에서 클라우드의 PostgreSQL로 프로덕션 데이터를 마이그레이션할 수도 있습니다.

이를 수행하려면 데이터를 복사할 대상 데이터베이스에서 앱을 시작하세요. 이 데이터베이스는 이미 존재해야 하며 비어 있어야 합니다. 데이터를 복사할 원본 데이터베이스를 지정하려면 일부 사용자 정의 구성 설정을 지정해야 합니다. 이러한 사용자 정의 설정은 원본 데이터베이스를 식별하고 Mendix에 데이터베이스에 접근하는 데 필요한 인증 정보를 제공합니다.

데이터베이스 마이그레이션에 가장 일반적으로 사용되는 사용자 정의 설정은 다음과 같습니다:

* SourceDatabaseType (HSQLDB, MYSQL, ORACLE, POSTGRESQL, SQLSERVER)
* SourceDatabaseHost
* SourceDatabaseName
* SourceDatabaseUserName
* SourceDatabasePassword

자세한 내용과 사용 가능한 설정의 전체 목록은 [런타임 커스터마이제이션](/refguide/custom-settings/)을 참조하세요.

이러한 설정은 다음과 같이 구성할 수 있습니다:

* Studio Pro – **App Explorer**에서 **App**을 확장하고, **Settings**를 더블클릭한 후, 구성을 편집하고 **Custom** 탭으로 이동합니다:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/19398970.png" class="no-border" >}} 

* Service Console – 왼쪽 패널에서 앱을 클릭하고, **Configuration**을 클릭한 후, **Advanced**를 클릭하면 **Custom Mendix settings**를 확인할 수 있습니다:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/19398971.png" class="no-border" >}} 

* m2ee-tools – mxruntime 섹션에 사용자 정의 설정을 추가합니다(자세한 내용은 [Full Documented m2ee](https://github.com/mendix/m2ee-tools/blob/develop/examples/full-documented-m2ee.yaml) 참조)

Studio Pro, Service Console 또는 m2ee-tools를 사용하여 데이터베이스를 마이그레이션할 수 있습니다. Service Console은 복사 과정에서 진행률 표시줄을 볼 수 있는 장점이 있으며, 이는 대량의 데이터를 복사할 때 유용합니다.

{{% alert color="info" %}}
데이터베이스 마이그레이션은 앱 시작 과정에서 일반적인 데이터베이스 동기화 단계로 Mendix에 의해 처리됩니다. m2ee-tools를 사용할 경우 시작 과정에서 "The database has to be synchronized"와 같은 메시지나 빈 메시지가 표시될 수 있습니다. 이러한 메시지는 무시해도 됩니다—데이터베이스 마이그레이션이 수행됩니다.
{{% /alert %}}

{{% alert color="warning" %}}
데이터 복사 과정이 시작되기 전에 원본 데이터베이스 구조를 기반으로 메인 데이터베이스 구조가 생성됩니다. 이는 특히 원본 데이터베이스가 현재 Domain Model에서 지정한 것보다 큰 요소 값을 가진 경우 모든 데이터가 문제없이 복사되도록 하기 위해 필요합니다.<br><br>원본 데이터베이스 구조와 데이터는 마이그레이션의 일부로 변경되지 않습니다.
{{% /alert %}}

## Studio Pro에서 PostgreSQL 데이터베이스 사용

Studio Pro에서 내장형(HSQLDB) 데이터베이스 대신 PostgreSQL 데이터베이스를 사용하도록 구성할 수 있습니다.

이를 수행하려면 다음 단계를 따르세요:

1. 앱을 열고 **Settings**로 이동합니다.
2. **Configurations** 탭에서 **New**를 클릭하여 새 구성을 추가합니다.
3. 구성에 새 **Name**을 지정합니다.
4. **Database** 탭에서 다음 값을 설정합니다:
    * **Type** – **PostgreSQL**
    * **Database name** – *default*
    * **URL** – 로컬 PostgreSQL 서버의 URL
    * **User name** – 로컬 PostgreSQL의 데이터베이스 관리자 사용자 이름
    * **Password** – 위에서 지정한 사용자의 비밀번호

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/postgresql-config.png" class="no-border" >}}

    새 구성이 활성 구성으로 설정됩니다.

5. PostgreSQL이 올바른 포트에서 로컬로 실행 중인지 확인합니다.
6. 앱을 로컬로 실행합니다. PostgreSQL 데이터베이스가 비어 있다면 앱이 앱의 Domain Model을 지원하도록 데이터베이스를 구성합니다.

{{% alert color="info" %}}
클라우드의 테스트 데이터베이스와 같이 이미 데이터베이스가 있는 경우 이를 로컬 PostgreSQL 데이터베이스로 복원할 수도 있습니다. 이를 수행하는 방법에 대한 자세한 내용은 [로컬에서 백업 복원](/developerportal/operate/restore-backup-locally/)을 참조하세요.
{{% /alert %}}

## 비-PostgreSQL 데이터베이스 마이그레이션 및 업로드

Mendix Cloud 환경은 데이터베이스 서버로 PostgreSQL만 사용합니다. 따라서 기존 온프레미스 비-PostgreSQL 원본 데이터베이스를 온프레미스 PostgreSQL 대상 데이터베이스로 마이그레이션하는 것이 좋습니다. 그런 다음 이를 내보내고 Mendix Cloud에 업로드할 수 있습니다. 마이그레이션, 내보내기 및 업로드 단계는 아래에 설명되어 있습니다.

### 1단계: 비-PostgreSQL 데이터베이스를 PostgreSQL 데이터베이스로 마이그레이션

원본 데이터베이스는 클라우드로 마이그레이션하려는 데이터가 있는 데이터베이스입니다. 대상 데이터베이스는 완전히 비어 있는 PostgreSQL 데이터베이스여야 하며, 테이블이 없어야 합니다. 새 데이터베이스를 생성하거나 [기존 데이터베이스를 초기화](/developerportal/deploy/environments-details/#clear-environment)할 수 있습니다.

Mendix 앱에서 **Settings**의 활성 구성은 대상 데이터베이스를 가리켜야 합니다. 위의 [개요](#overview)에서 설명한 대로 원본 데이터베이스에 대한 **Custom configuration settings**를 추가하세요. Mendix 앱을 구성한 후 애플리케이션을 로컬로 실행하세요. 그러면 데이터베이스 스키마와 모든 데이터가 원본 데이터베이스에서 대상 데이터베이스로 자동으로 마이그레이션됩니다. 브라우저에서 애플리케이션을 확인하여 대상 데이터베이스가 예상대로 작동하는지 검증하세요.

### 2단계: PostgreSQL 데이터베이스 내보내기

PostgreSQL 데이터베이스를 내보내려면 아래에 설명된 대로 pg_dump 또는 pgAdmin을 사용하세요.

#### pg_dump 사용

[pg_dump](https://www.postgresql.org/docs/current/app-pgdump.html)를 사용하는 경우 `pg_dump -O -x -Fc` 명령을 사용하세요.

pg_dump 방법에 대한 자세한 내용은 [SQL Dump](https://www.postgresql.org/docs/current/backup-dump.html)를 참조하세요.

{{% alert color="warning" %}}
[백업 복원](/developerportal/operate/restore-backup/#db-folder)에 설명된 대로, 백업은 현재 PostgreSQL 12, 13, 14, 15에 번들된 pg_dump 버전 1.14 이하를 사용하여 생성해야 합니다. 이후 버전으로 생성된 경우 Mendix Cloud에 파일을 업로드할 수 없습니다.
{{% /alert %}}

#### pgAdmin 사용

[pgAdmin](https://www.pgadmin.org/docs/)을 사용하는 경우 다음 단계를 따르세요:

1. 마이그레이션된 백업을 마우스 오른쪽 버튼으로 클릭하고 **Backup**을 선택합니다.
1. **Filename** 필드에서 **Save As**({{% icon name="folder-closed" %}})를 클릭하고 파일을 *.backup* 파일로 저장합니다.
{{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/saving-backup-file.png" alt="" >}}
1. **Backup**을 클릭하고 프로세스가 완료될 때까지 기다립니다.
1. 데이터베이스만이 아닌 [전체 스냅샷](/developerportal/operate/restore-backup/#full-snapshot)을 업로드하려면 수정된 *.backup* 데이터를 (압축 해제된) **.tar.gz** 폴더 내의 **db** 폴더로 이동합니다. 그런 다음 7-Zip과 같은 아카이브 도구를 사용하여 폴더(**db**, **tree** 및 **.metadata**)를 TAR 파일로 압축합니다.

### 3단계: 내보낸 PostgreSQL 데이터베이스를 Mendix Cloud 데이터베이스에 업로드

Mendix Portal을 사용하여 마이그레이션되고 내보낸 데이터베이스 백업을 Mendix Cloud에 업로드합니다. 다음 단계를 따르세요:

1. [Apps](https://sprintr.home.mendix.com/)로 이동하여 앱을 엽니다.
2. 탐색 패널에서 **Backups**를 클릭합니다.
3. **Upload Backup**을 클릭하여 데이터베이스를 업로드합니다.
4. **Upload Archive** 대화 상자에서 로컬 파일 시스템에서 내보낸 데이터베이스 파일을 선택합니다.
5. 업로드가 완료되면 애플리케이션을 중지합니다.
6. 업로드된 백업에서 **More Options** > **Restore**를 클릭하여 새 백업을 복원합니다.
7. 애플리케이션을 시작합니다.

## Mendix Cloud 데이터베이스 내보내기

동일한 절차를 사용하여 기존 Mendix Cloud 데이터베이스를 내보내고, 온프레미스 PostgreSQL 원본 데이터베이스로 가져온 다음, 온프레미스 비-PostgreSQL 대상 데이터베이스로 마이그레이션할 수 있습니다.

Mendix Portal을 통해 Mendix Cloud 데이터베이스를 내보냅니다. 다음 단계를 따르세요:

1. Mendix Portal에서 앱을 엽니다.
2. 탐색 패널에서 **Backups**를 클릭합니다.
3. 원하는 환경을 선택합니다.
4. 선택적으로, **Create Backup**을 클릭하여 최근 데이터로 새 백업을 생성합니다.
5. 다운로드하려는 백업에서 **More Options** > **Download**을 클릭합니다. 이렇게 하면 대화 상자에 표시된 데이터베이스 URL을 사용하여 데이터베이스가 로컬 파일 시스템에 다운로드됩니다.

### 온프레미스 PostgreSQL 데이터베이스로 가져오기

다운로드한 데이터베이스 파일을 사용하여 PostgreSQL 데이터베이스를 가져오려면 [pg_dump](https://www.postgresql.org/docs/current/backup-dump.html) 명령줄 도구 또는 [pgAdmin](https://www.pgadmin.org/docs/) 시각적 도구 문서를 참조하여 다운로드한 데이터베이스 파일을 복원하는 방법을 이해하세요.

### PostgreSQL 데이터베이스를 비-PostgreSQL 데이터베이스로 마이그레이션

다음은 PostgreSQL 데이터베이스를 다른 데이터베이스로 마이그레이션하는 방법에 대한 일반적인 안내입니다. SAP Business Technology Platform(SAP BTP)에서 실행 중인 Mendix 애플리케이션이 사용하는 PostgreSQL 데이터베이스를 마이그레이션하는 경우에 대한 특별 섹션이 있습니다.

#### 일반 안내

원본 데이터베이스는 Mendix Cloud에서 다운로드한 데이터베이스가 있는 PostgreSQL 데이터베이스입니다. 대상 비-PostgreSQL 데이터베이스는 완전히 비어 있어야 하며, 테이블이 없어야 합니다. Mendix 앱에서 **Settings**의 활성 구성은 대상 데이터베이스를 가리켜야 하며, 개요에서 설명한 대로 원본 PostgreSQL 데이터베이스에 대한 **Custom configuration** 설정을 추가해야 합니다.

Mendix 앱을 구성한 후 애플리케이션을 로컬로 실행하면 데이터베이스 스키마와 모든 데이터가 원본 데이터베이스에서 대상 데이터베이스로 자동으로 마이그레이션됩니다. 대상 데이터베이스를 내보내기 전에 항상 브라우저에서 애플리케이션을 확인하여 검증해야 합니다.

#### SAP BTP CLI를 사용한 SAP HANA로 마이그레이션

PostgreSQL을 데이터베이스 서비스로 사용하는 SAP BTP에서 실행 중인 Mendix 애플리케이션이 있고 데이터베이스를 SAP HANA로 마이그레이션하려는 경우, 기존 데이터를 마이그레이션하기 위해 몇 가지 추가 단계를 수행해야 합니다:

1. Cloud Foundry 명령줄을 사용하여 SAP BTP, Cloud Foundry 환경(PostgreSQL 서비스가 포함된)에 로그인합니다.
2. 다음 명령을 사용하여 애플리케이션의 환경 변수에서 PostgreSQL 서비스 인스턴스 세부 정보를 가져옵니다:

    `cf env {application-name}`

3. **VCAP_SERVICES** 목록을 검사하고 `postgresql` 서비스에서 다음 속성의 값을 기록합니다:
    * `dbname` – `{dbname}`
    * `hostname` – `{hostname}`
    * `password` – `{password}`
    * `port` – `{port}`
    * `username` – `{username}`

    아래 강조된 이미지에 표시된 대로:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/sap-postgres-config.png" class="no-border" >}}

4. Mendix Portal을 사용하여 SAP HANA 데이터베이스 서비스를 사용하는 환경을 생성합니다.
5. MDA를 배포하되 애플리케이션을 시작하지 마세요.
6. Cloud Foundry 명령줄을 사용하여 SAP BTP, Cloud Foundry 환경(SAP HANA 서비스가 포함된)에 로그인합니다.
7. 명령줄을 사용하여 SAP HANA 환경에서 다음 런타임 속성을 설정합니다. 위에서 기록한 PostgreSQL 인스턴스 값을 사용하세요.

    ```bash
    cf set-env {application-name} MXRUNTIME_SourceDatabaseType POSTGRESQL
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseHost {hostname}:{port}
    cf set-env {application-name} MXRUNTIME_SourceDatabaseName {dbname}
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseUserName {username}
    cf set-env {application-name}  MXRUNTIME_SourceDatabasePassword {password}
    ```

8. Mendix Portal 또는 명령줄에서 애플리케이션을 시작합니다.
9. 애플리케이션이 시작되면 애플리케이션에서 데이터를 확인합니다.

#### SAP BTP Cockpit을 사용한 SAP BTP에서 SAP HANA로 마이그레이션

PostgreSQL을 데이터베이스 서비스로 사용하는 SAP BTP에서 실행 중인 Mendix 애플리케이션이 있고 데이터베이스를 SAP HANA로 마이그레이션하려는 경우, 기존 데이터를 마이그레이션하기 위해 몇 가지 추가 단계를 수행해야 합니다.

1. SAP BTP Cockpit에 로그인합니다.
2. 데이터베이스를 마이그레이션하려는 애플리케이션이 포함된 하위 계정으로 이동합니다.
3. 애플리케이션의 서비스 바인딩에서 postgreSQL DB 또는 공유 postgreSQL DB를 찾습니다.
4. **Show sensitive data**를 클릭합니다.
5. `postgresql` 서비스에서 다음 속성의 값을 기록합니다:
    * `dbname` – `{dbname}`
    * `hostname` – `{hostname}`
    * `password` – `{password}`
    * `port` – `{port}`
    * `username` – `{username}`

    공유 데이터베이스 예시:
   
    ```json
    {
        "uri": "postgres://{username}:{password}@{hostname}:{port}/{databasename}"
    }
    ```

    데이터베이스 예시:
   
    ```json
    {
        "dbname": "",
        "hostname": "",
        "password": "",
        "port": "",
        "uri": "",
        "read_url": "",
        "write_url": "",
        "username": ""
    }
    ```

6. SAP HANA 데이터베이스 서비스와 Mendix Portal을 사용하여 환경을 생성합니다.
7. 애플리케이션을 시작하지 않고 MDA를 배포합니다.
8. SAP BTP Cockpit에 로그인합니다.
9. 새 애플리케이션으로 이동하여 **User-Provided Variables**로 이동합니다.
10. **Add Variable**를 클릭하여 다음 런타임 속성을 설정합니다. 위에서 기록한 PostgreSQL 인스턴스 값을 사용하세요.

    | Key                                | Value               |
    | ---------------------------------- | ------------------- |
    | `MXRUNTIME_SourceDatabaseType`     | `POSTGRESQL`        |
    | `MXRUNTIME_SourceDatabaseHost`     | `{hostname}:{port}` |
    | `MXRUNTIME_SourceDatabaseName`     | `{dbname}`          |
    | `MXRUNTIME_SourceDatabaseUserName` | `{username}`        |
    | `MXRUNTIME_SourceDatabasePassword` | `{password}`        |

11. Mendix Portal 또는 SAP BTP Cockpit에서 애플리케이션을 시작합니다.
12. 애플리케이션이 시작되면 애플리케이션에서 데이터를 확인합니다.
