---
title: "외부 데이터베이스에 연결"
url: /refguide10/external-database-connection/
weight: 30
linktitle: "External Database Connection"
description: "[External Database Connection 문서](https://marketplace.mendix.com/link/component/219862)를 구성하는 방법에 대한 개요입니다."
---

## 소개

[External Database Connector](/appstore/modules/external-database-connector/)는 **External database connection** 서비스 문서를 통해 Studio Pro와 통합됩니다. 이 문서를 사용하여 Studio Pro에서 외부 데이터베이스에 연결하세요.

{{% alert color="info" %}}
앱을 실행하는 동안 외부 데이터베이스 연결이 제대로 작동하려면 [External Database Connector](https://marketplace.mendix.com/link/component/219862)를 설치해야 합니다. 앱에 모듈이나 커넥터를 추가하는 방법은 [Studio Pro에서 Marketplace 콘텐츠 사용](/appstore/use-content/)을 참조하세요.
{{% /alert %}}

{{% alert color="info" %}}
Studio Pro 10.18의 경우, External Database Connector는 설계 시간에 데이터베이스에 연결하는 다른 접근 방식을 사용합니다. 이 기능은 설계 시간과 런타임 환경 간의 일관성을 향상시킵니다. 이 베타 기능을 활성화하려면 플래그를 사용하세요: `--enable-live-preview`

기능 플래그를 사용한 External Database Connection 문서로 연결하는 방법은 [외부 데이터 쿼리 및 통합](/refguide10/query-and-integrate-external-data/#enable-live-preview)을 참조하세요.

이 기능 플래그는 Studio Pro 10.18에만 해당됩니다. 이 기능은 Studio Pro 10.19 이상에서 GA입니다.
{{% /alert %}}

## 데이터베이스 연결 마법사 {#wizard}

모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other > External database connection**을 클릭하여 **Database Connection** 마법사를 여세요:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/database-connection-wizard.png" class="no-border" width="600" >}}

다음을 입력하거나 선택하세요:

* **Name** — 데이터베이스 연결의 이름
* **Database Type** — Microsoft SQL, MySQL, Oracle, PostgreSQL 또는 Snowflake ([Studio Pro 10.10](/releasenotes/studio-pro/10.10/)부터 Beta 지원)

### 연결 세부 정보

**Use connection details**를 선택하면 다음을 입력하세요:

* **Host** — 호스트 이름 (로컬 테스트 시 `localhost`)
* **Port** — 포트 번호
* **Database Name** — 데이터베이스 이름
* **User Name** — 데이터베이스에 접근하기 위한 사용자 이름
* **Password** — 데이터베이스에 접근하기 위한 비밀번호

### 연결 문자열

**Use connection string**을 선택하면 다음을 입력하세요:

* **Username** — 데이터베이스에 접근하기 위한 사용자 이름
* **Password** — 데이터베이스에 접근하기 위한 비밀번호
* **JDBC Connection String** — 각 데이터베이스 유형에 대한 다음 형식의 연결 문자열:
    * **Microsoft SQL** — `jdbc:sqlserver://myHostName:myPortNumber;databasename=myDatabaseName`
    * **MySQL** — `jdbc:mysql://myHostName:myPortNumber/myDatabaseName`
    * **Oracle** — `jdbc:oracle:thin:@//myHostName:myPortName/myDatabaseName`
    * **PostgreSQL** — `jdbc:postgresql://myHostName:myPortNumber/myDatabaseName`
    * **Snowflake** — `jdbc:snowflake://my_account_identifier.snowflakecomputing.com/?db=myDatabaseName` 

### 비밀번호 보안

위의 연결 방법 중 하나를 사용할 때 제공하는 비밀번호는 상수(constant)에 저장되며, Cloud 노드에 배포할 때 변경할 수 있습니다. Mendix Studio Pro 10.9부터 어떤 상수가 개인 또는 민감한 정보를 포함하는지 표시하여 이 정보가 로컬에 저장되고 TeamServer나 Cloud Portal에서 공유되지 않도록 할 수 있습니다.

## External Database Connection 문서 {#external-database-document}

Database Connection 마법사에 데이터베이스 정보를 입력한 후, External Database Connection 문서가 Studio Pro에서 열립니다.

문서의 이름은 마법사를 실행할 때 제공한 **Name**(**Database name**이 아님)입니다:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/database-service-document.png" class="no-border" width="600" >}}

### 쿼리 필드 {#query-screen}

문서의 왼쪽에는 **Query** 필드가 있습니다. 이 필드에서 SQL 쿼리를 작성하고 실행하여 응답을 검증할 수 있습니다.

오른쪽의 [Tables & Columns](#tables-columns) 화면에서 데이터베이스의 데이터를 확인하세요.

Query 필드에는 다음 필드가 포함됩니다:

* **Query Name** — 저장되어 나중에 사용할 수 있는 쿼리 이름
* **SQL Query** — 쿼리를 입력할 수 있는 텍스트 상자

**Parameters** 필드에서 **Add Parameter**를 클릭하여 다음 정보를 입력하세요:

* **Name** — **SQL Query** 필드에서 사용할 수 있는 매개변수의 이름 (`{parameter_name}` 형식)
* **Data Type** — 매개변수의 데이터 유형
* **Test Value** — 매개변수의 값을 입력하거나 선택하세요

응답의 미리보기를 보려면 **Run Query**를 클릭하세요.

### Tables & Columns {#tables-columns}

화면 오른쪽의 **Tables & Columns** 필드는 데이터베이스의 정보를 표시합니다. 쿼리를 사용하여 데이터베이스의 특정 정보에 접근할 수 있습니다.

### 응답 {#response}

[데이터베이스 쿼리](/appstore/modules/external-database-connector/#query-database) 후, **Response data** 필드에서 쿼리에 포함된 데이터를 확인하세요.

응답에 만족하면 **Use Response**를 클릭하세요. 그러면 응답에서 엔티티를 미리보고 만들 수 있는 [Response Structure](#data-structure) 탭으로 이동합니다.

### 응답 구조 {#data-structure}

**Response Structure** 탭은 쿼리의 응답에서 만들 수 있는 엔티티의 미리보기를 표시합니다. 이름을 조정하거나 이전 단계로 돌아갈 수 있습니다. **Save Query & Create Entity**를 클릭하여 도메인 모델에 엔티티를 만드세요.

## 더 읽기

* 외부 데이터베이스로 커넥터를 구성하려면 [External Database Connector](/appstore/modules/external-database-connector/)의 단계를 따르세요.
* 커넥터를 활용하여 데이터를 Mendix 애플리케이션에 통합하려면 [외부 데이터 쿼리 및 통합](/refguide10/use-the-external-database-connector/)을 참조하세요.
* SQL을 사용하려면 [외부 데이터베이스에서 SQL 문 실행](/refguide10/execute-an-sql-statement-on-an-external-database/)을 참조하세요.
* 마이크로플로우에서 데이터를 사용하는 방법을 알아보려면 [Query External Database](/refguide10/query-external-database/) 액티비티를 참조하세요.
