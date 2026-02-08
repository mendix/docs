---
title: "외부 데이터베이스에서 SQL 문 실행하기"
linktitle: "외부 데이터베이스에서 SQL 실행"
url: /howto9/integration/execute-an-sql-statement-on-an-external-database/
weight: 17
description: "Database Connector를 사용하여 관계형 외부 데이터베이스에서 SQL 문을 실행하는 방법을 설명합니다."
---

## 소개

Mendix 플랫폼은 외부 데이터와 통합하는 다양한 방법을 제공하지만, 외부 데이터베이스와의 통합은 지금까지 원활한 경험이 아니었습니다. [Database Connector](/appstore/modules/database-connector/)를 사용하면 데이터베이스나 SQL 방언의 선택에 제한을 받지 않고 외부 데이터베이스에 원활하게 연결할 수 있으며, 외부 데이터를 Mendix 애플리케이션에 직접 통합할 수 있습니다. 커넥터를 통해 두 가지 액션을 사용할 수 있습니다: 이 문서에서 설명하는 [Execute statement](#statement)와 [Database connector 문서](/appstore/modules/database-connector/)에 설명된 [Execute query](/appstore/modules/database-connector/#execute-query)입니다.

**Execute statement** 액션은 Mendix 앱이 관계형 외부 데이터베이스에서 임의의 SQL 문을 수행할 수 있는 일관된 환경을 제공합니다. 이 Java 액션이 JDBC 드라이버가 존재하는 관계형 데이터베이스에 연결을 시도할 때 Java 데이터베이스 연결(JDBC) API가 사용됩니다.

Database Connector는 다음 SQL 문에 사용할 수 있습니다:

* `CREATE`
* `INSERT`
* `UPDATE`
* `STORED PROCEDURE`
* `DELETE`
* `DDL`
* `SELECT` (**Execute query** 액션에서만 사용 가능하며, **Execute statement**에서는 사용 불가)

{{% alert color="info" %}}
자동 매핑은 현재 불가능합니다.
{{% /alert %}}

이 문서는 관계형 외부 데이터베이스에서 SQL을 실행하는 데 초점을 맞추고 있습니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* Database Connector의 도움으로 관계형 외부 데이터베이스에서 SQL 문 실행하기
* **Execute statement** 액션 구성하기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* Mendix Marketplace에서 Database Connector를 앱에 다운로드하기
* 데이터베이스를 가리키는 데이터베이스 **URL** 주소 보유
* 데이터베이스 로그인을 위한 **사용자 이름**과 **비밀번호** 보유(데이터베이스 URL 주소에 상대적)
* 실행할 SQL 문 보유(데이터베이스 유형에 상대적; SQL 방언은 데이터베이스마다 다릅니다)
* 연결하려는 데이터베이스의 JDBC 드라이버 *.jar* 파일 보유

## 준비

연결하려는 데이터베이스의 JDBC 드라이버 *.jar* 파일을 Mendix 앱의 **userlib** 디렉토리에 배치해야 합니다.

예를 들어, Amazon RDS PostgreSQL 데이터베이스(예: `jdbc:postgresql://xyz-rds-instance.ccnapcvoeosh.eu-west-1.rds.amazonaws.com:5432/postgres`)에 연결하려면, PostgreSQL JDBC 드라이버 *.jar* 파일을 userlib 폴더에 배치해야 합니다.

## Microflow에서 Execute Statement 액션 사용하기 {#statement}

Microflow에서 **Execute statement** 액션을 사용하려면 다음 단계를 따르십시오:

1. **Toolbox**에서 **Execute statement**을 찾으십시오.

2. **Execute statement** 액션을 Microflow로 끌어다 놓으십시오:

    {{< figure src="/attachments/howto9/integration/execute-an-sql-statement-on-an-external-database/19399123.png" class="no-border" >}}

3. 문을 구성하십시오:
    * 문 액션에 모든 유효한 인수를 제공하십시오
    * **Jdbc url** 인수는 관계형 데이터베이스를 가리키는 데이터베이스 URL을 지정해야 하며, 특정 데이터베이스와 JDBC 드라이버에 따라 다릅니다
        * 항상 `jdbc:` 프로토콜 텍스트로 시작하지만, 나머지는 특정 공급업체에 따라 다릅니다(예: MySQL 데이터베이스의 경우 `jdbc:<a rel="nofollow">mysql://hostname/databaseName'</a>` JDBC URL 형식을 사용할 수 있습니다)
    * **Output Variable name**을 지정하십시오
        * 아래 예제에서 변수는 **amountOfUpdatedRows**로, SQL 문의 출력이며, 커넥터 내에서 **Sql** 인수에 제공된 SQL 문의 출력이기도 합니다

    {{< figure src="/attachments/howto9/integration/execute-an-sql-statement-on-an-external-database/19399146.png" class="no-border" >}}

    문 액션의 결과는 일반적으로 영향을 받은 행의 수를 나타내는 **Integer** 또는 **Long** 값입니다.

{{% alert color="warning" %}}
이 액션은 Mendix 애플리케이션에 SQL 인젝션을 허용할 수 있으므로, 적절한 보안을 적용하는 것은 사용자의 책임입니다. 무엇보다도, SQL 문에서 사용자 제공 또는 환경 제공 변수를 사용하지 마십시오. 가능하면 정적으로 유지하는 것이 좋습니다.
{{% /alert %}}
