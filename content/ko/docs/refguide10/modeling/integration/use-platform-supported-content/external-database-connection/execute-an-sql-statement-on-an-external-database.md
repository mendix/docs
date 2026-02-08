---
title: "외부 데이터베이스에서 SQL 문 실행"
linktitle: "외부 데이터베이스에서 SQL 실행"
url: /refguide10/execute-an-sql-statement-on-an-external-database/
weight: 50
description: "Database Connector를 사용하여 관계형 외부 데이터베이스에서 SQL 문을 실행하는 방법을 설명합니다."
aliases: 
    - /howto10/integration/execute-an-sql-statement-on-an-external-database/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team (buildpack) know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix 플랫폼은 외부 데이터와 통합하는 많은 방법을 제공하지만, 외부 데이터베이스와의 통합은 지금까지 매끄러운 경험이 아니었습니다. [Database Connector](/appstore/modules/database-connector/)를 사용하면 데이터베이스나 SQL 방언의 선택에 제한 없이 외부 데이터베이스에 원활하게 연결할 수 있으므로 외부 데이터를 Mendix 애플리케이션에 직접 통합할 수 있습니다. 커넥터를 통해 두 가지 액션을 사용할 수 있습니다: 이 문서에서 설명하는 [Execute statement](#statement)와 [Database connector 문서](/appstore/connectors/database-connector/)에 설명된 **Execute query**입니다.

**Execute statement** 액션은 Mendix 앱이 관계형 외부 데이터베이스에서 임의의 SQL 문을 수행할 수 있는 일관된 환경을 제공합니다. 이 Java 액션이 관계형 데이터베이스에 연결을 시도할 때 JDBC(Java Database Connectivity) API가 사용됩니다.

Database Connector는 다음 SQL 문에 사용할 수 있습니다:

* `CREATE`
* `INSERT`
* `UPDATE`
* `STORED PROCEDURE`
* `DELETE`
* `DDL`
* `SELECT` (**Execute query** 액션에서만 가능하며, **Execute statement**에서는 사용 불가)

{{% alert color="info" %}}
자동 매핑은 현재 지원되지 않습니다.
{{% /alert %}}

이 문서에서는 관계형 외부 데이터베이스에서 SQL을 실행하는 데 중점을 둡니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* Database Connector를 사용하여 관계형 외부 데이터베이스에서 SQL 문 실행
* **Execute statement** 액션 구성

## 사전 요구 사항

이 사용 방법 문서를 시작하기 전에 다음 사전 요구 사항을 완료하십시오:

* Mendix Marketplace에서 [Database Connector](https://marketplace.mendix.com/link/component/2888)를 앱에 다운로드하세요
* 데이터베이스를 가리키는 데이터베이스 URL 주소를 준비하세요
* 데이터베이스에 로그인하기 위한 사용자 이름과 비밀번호를 준비하세요(데이터베이스 URL 주소 기준)
* 실행할 SQL 문을 준비하세요(데이터베이스 유형 기준, SQL 방언은 데이터베이스마다 다릅니다)
* 연결하려는 데이터베이스의 JDBC 드라이버 *.jar* 파일을 준비하세요

## 준비

연결하려는 데이터베이스의 JDBC 드라이버 *.jar* 파일을 Mendix 앱의 userlib 디렉토리 안에 넣어야 합니다.

예를 들어, Amazon RDS PostgreSQL 데이터베이스(예: `jdbc:postgresql://xyz-rds-instance.ccnapcvoeosh.eu-west-1.rds.amazonaws.com:5432/postgres`)에 연결하려면 PostgreSQL Jdbc 드라이버 *.jar* 파일을 userlib 폴더 안에 넣어야 합니다.

## 마이크로플로우에서 Execute Statement 액션 사용하기 {#statement}

마이크로플로우에서 **Execute statement** 액션을 사용하려면 다음 단계를 따르세요:

1. **Toolbox**에서 **Execute statement**를 찾으세요.

2. **Execute statement** 액션을 마이크로플로우로 드래그하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/execute-an-sql-statement-on-an-external-database/19399123.png" class="no-border" >}}

3. 문을 구성하세요:
    * 문 액션에 모든 유효한 인수를 제공하세요
    * **Jdbc url** 인수는 관계형 데이터베이스를 가리키는 데이터베이스 URL을 지정해야 하며, 특정 데이터베이스 및 JDBC 드라이버에 따라 다릅니다
        * 항상 `jdbc:` 프로토콜 텍스트로 시작하지만, 나머지는 특정 벤더에 따라 다릅니다(예: MySQL 데이터베이스에는 `jdbc:<a rel="nofollow">mysql://hostname/databaseName'</a>` JDBC URL 형식을 사용할 수 있습니다)
    * **Output Variable name**을 지정하세요
        * 아래 예에서 변수는 **amountOfUpdatedRows**이며, 이는 SQL 문의 출력입니다. 이는 커넥터 내에서 **Sql** 인수에 제공된 SQL 문의 출력이기도 합니다

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/execute-an-sql-statement-on-an-external-database/19399146.png" class="no-border" >}}

    문 액션의 결과는 **Integer** 또는 **Long** 값이며, 일반적으로 영향을 받은 행의 수를 나타냅니다.

{{% alert color="warning" %}}
이 액션은 애플리케이션에 SQL 인젝션을 허용할 수 있으므로 적절한 보안을 적용하는 것은 사용자의 책임입니다. SQL 문에 사용자 제공 또는 환경 제공 변수를 사용하지 마세요. 가능한 경우 정적으로 사용하는 것이 좋습니다.
{{% /alert %}}
