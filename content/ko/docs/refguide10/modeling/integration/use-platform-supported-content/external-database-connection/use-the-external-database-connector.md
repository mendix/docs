---
title: "외부 데이터 쿼리 및 통합"
url: /refguide10/query-and-integrate-external-data/
weight: 40
linktitle: "외부 데이터 쿼리 및 통합"
description: "External Database Connector를 사용하여 외부 데이터베이스를 쿼리하고 데이터를 Mendix 애플리케이션에 통합하는 방법을 자세히 설명합니다."
aliases: 
    - /howto10/integration/use-the-external-database-connector/
    - /refguide10/use-the-external-database-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team (buildpack) know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[External Database Connector](https://marketplace.mendix.com/link/component/219862)를 사용하여 Mendix 앱에 데이터를 연결, 검색 및 삽입하세요.

{{% alert color="info" %}}
Studio Pro 10.12를 사용하는 경우, 최신 버전 3.0.0 [External Database Connector](https://marketplace.mendix.com/link/component/219862)를 사용하세요.
{{% /alert %}}

## 사전 요구 사항

External Database Connection 문서를 사용하여 활성 연결이 있는지 확인하세요. 커넥터를 구성하는 방법은 *Marketplace 가이드*의 [External Database Connector](/appstore/modules/external-database-connector/)를 참조하세요.

연결에 추가 연결 속성이 필요한 경우, 대안으로 **JDBC Connection String**을 사용할 수 있습니다.

### Studio Pro 10.18 이상 {#enable-live-preview}

Studio Pro 10.18 이상의 경우, External Database Connector는 설계 시간에 데이터베이스에 연결하는 다른 접근 방식을 사용합니다. 이 기능은 설계 시간과 런타임 환경 간의 일관성을 향상시킵니다. 이 베타 기능을 활성화하려면 플래그를 사용하세요: `--enable-live-preview`

{{% alert color="info" %}}
이 기능 플래그는 Studio Pro 10.18에만 해당됩니다. 이 기능은 Studio Pro 10.19 이상에서 GA입니다.
{{% /alert %}}

* PostgreSQL 연결에 인증서 기반 인증이 필요한 경우, 앱을 실행하기 전에 필요한 모든 인증서가 추가되었는지 확인하세요.
* 설계 시간에 연결을 테스트하고 쿼리를 실행하려면 앱을 로컬에서 실행하세요.

## 매개변수를 사용한 SQL 쿼리 생성 및 검증

1. **SQL query** 필드에 SQL 쿼리를 입력하여 새 쿼리를 만드세요.

2. **Parameters** 탭을 열고 런타임에 쿼리에서 상수나 변수를 사용하려면 **Add Parameter**를 클릭하세요. 쿼리에 매개변수를 포함하려면 중괄호를 사용하세요.

3. 각 매개변수에 Test Value를 할당하세요.

4. **Run Query**를 클릭하여 쿼리를 검증하고 응답을 확인하세요.

예를 들어, 아래 쿼리는 ProductLine이 **Planes**인 RequestedProductRequirement 목록을 검색합니다.

SQL Query:
`Select requestedProductRequirement from productlines where productLine = {productLine}`

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/4.png" width="700" >}}

### 매개변수 데이터 유형 타입캐스트

아래와 같이 `String`을 UUID로 타입캐스트할 수 있습니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/13.png" width="700" >}}

## 쿼리 저장

### 데이터 검색을 위한 쿼리 저장

1. **Use Response**를 클릭하여 응답 데이터와 매핑을 확인하세요.

2. **Response Structure** 탭에서 **New Entity** 또는 **Reuse Entity**를 선택할 수 있습니다.

   a. **New Entity**를 선택하면 **Response structure** 탭에서 엔티티를 볼 수 있습니다. **Save Query & Create Entity**를 클릭하여 쿼리와 새로 만든 엔티티를 도메인 모델에 저장하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/5.png" width="600" >}}

   b. **Reuse Entity**를 선택하면 동일한 문서의 다른 쿼리에 매핑된 모든 엔티티가 드롭다운 목록에 나열됩니다. 재사용할 엔티티를 선택하고 **Save Query**를 클릭하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/5a.png" width="600" >}}

### DML 쿼리 저장

1. DML 쿼리의 경우, *영향을 받은 행 수*가 응답으로 표시됩니다.

    예를 들어, `INSERT INTO classicmodels.productlines(productLine, requestedProductRequirement)VALUES({productLine}, {requestedProductRequirement})`

2. **Save Query**를 클릭하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/6.png" width="600" >}}

{{% alert color="info" %}} 모든 DML 쿼리의 경우, Mendix 설계 단계에서 데이터베이스에 적용된 변경 사항은 자동으로 롤백됩니다. {{% /alert %}}

## 기존 쿼리 업데이트

{{% alert color="info" %}}

이 기능은 Studio Pro 10.15 이상에서 사용할 수 있습니다.

{{% /alert %}}

기존 쿼리를 업데이트할 때 기존 엔티티를 사용할 수 있습니다.

예를 들어, `productLine`이 **Planes**인 `productLines`에서 `productLine`, `textDescription`, `htmlDescription` 열 목록을 검색하도록 아래 쿼리를 수정할 수 있습니다.

SQL Query:
기존 쿼리: `Select requestedProductRequirement from productlines where productLine = {productLine}`
수정된 쿼리: `Select productLine, textDescription, htmlDescription from productlines where productLine = {productLine}`

다음을 수행하세요:

1. 쿼리를 다시 실행하여 **Response data**를 확인하세요.

2. **Use Response**를 클릭하여 엔티티 미리보기를 확인하세요.

3. 기존 엔티티를 사용하거나 새 엔티티를 만드세요.

   a. **New Entity**를 선택하면 **Response structure** 탭에서 엔티티를 볼 수 있습니다. **Save Query & Create Entity**를 클릭하여 쿼리와 새로 만든 엔티티를 도메인 모델에 저장하세요.

   b. **Update Entity**를 선택하면 기존 엔티티에 적용될 변경 사항을 볼 수 있습니다. **Update Entity**를 클릭하여 쿼리와 엔티티에 대한 변경 사항을 도메인 모델에 저장하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/5b.png" width="600" >}}

## 저장 프로시저 호출

{{% alert color="info" %}} 매개변수가 있는 저장 프로시저 호출은 Studio Pro 10.13 이상에서 지원됩니다. {{% /alert %}}

저장 프로시저를 호출하려면 다음을 수행하세요:

1. **Stored procedure** 체크박스를 선택하세요.

2. 저장 프로시저를 호출하는 쿼리를 입력하세요. 저장 프로시저 이름과 함께 스키마 이름을 추가하세요. 예를 들어, `latest_schema`가 스키마 이름이고 `InsertDataIntoTable1`이 저장 프로시저인 다음 구문을 사용하세요: `Call latest_schema.InsertDataIntoTable1({1},{2})`.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/9.png" width="600" >}}

3. 저장 프로시저에 있는 모든 매개변수에 대해 **IN**, **OUT**, **INOUT** 매개변수를 만드세요. **Name in DB**가 저장 프로시저의 매개변수 이름과 동일한지 확인하세요.
   
    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/10.png" width="600" >}}

4. **Run Query**를 클릭하세요. 영향을 받은 행 수와 모든 INOUT 및 OUT 매개변수가 포함된 엔티티가 반환됩니다. 저장 프로시저가 **Result set**을 반환하면 연관된 엔티티가 생성됩니다.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/11.png" width="600"  >}}

5. **Use Response** > **Save Query & Create Entity**를 클릭하여 쿼리와 새로 만든 엔티티를 도메인 모델에 저장하세요.
   
    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/12.png" width="600"  >}}

{{% alert color="info" %}}저장 프로시저 내의 DML 명령은 저장 프로시저에 의해 커밋되지 않으면 롤백되지만, DDL 명령은 롤백되지 않습니다.{{% /alert %}}

{{% alert color="info" %}} 원시 데이터 유형 매개변수가 있는 저장 프로시저만 지원됩니다.{{% /alert %}}

Postgres의 경우, Mendix는 다음 매개변수를 지원합니다:

* Decimal/numeric
* Real
* Double Precision
* Big Serial
* Small Serial
* Serial
* Bpchar
* Char
* Varchar
* Text
* Integer
* Smallint
* Bigint
* Timestamp with timezone
* Date only
* Time without timezone
* Time with timezone

MSSQL의 경우, Decimal 유형의 **INOUT** 및 **OUT** 매개변수의 테스트 값(설계 시간)은 반올림됩니다.

## Query External Database 액티비티 사용

1. 마이크로플로우에 **Query external database** 액티비티를 추가하세요.

2. 액티비티를 더블클릭하고 새 외부 데이터베이스 문서를 선택하세요.

3. **Query** 필드에서 드롭다운에서 필요한 쿼리를 선택하세요.

4. **Expression editor**를 사용하여 매개변수에 값을 할당하세요.

5. 선택한 쿼리에 대한 출력 세부 정보가 자동으로 채워집니다.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-external-database-connector/7.png" width="600"  >}}

이제 Mendix 앱에서 외부 데이터베이스의 데이터를 사용할 준비가 되었습니다.

{{% alert color="warning" %}}
이 액션은 앱에 SQL 인젝션을 허용할 수 있으므로 보안 조치를 사용하세요. SQL 문에 사용자 제공 또는 환경 제공 변수를 사용하지 마세요. 가능한 경우 정적으로 사용해야 합니다.
{{% /alert %}}

## 더 읽기

* [외부 데이터베이스에 연결](/refguide10/external-database-connection/), External Database Connection 문서의 개요입니다.
* [External Database Connector](/appstore/modules/external-database-connector/), External Database Connector의 구성 및 사용법을 설명합니다.
