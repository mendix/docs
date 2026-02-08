---
title: "Oracle"
url: /refguide8/oracle/
weight: 60
---

## 소개

Oracle 데이터베이스를 사용할 때 Mendix의 동작에는 PostgreSQL 데이터베이스를 사용할 때와 비교하여 약간의 차이가 있습니다. 이 문서에서는 이러한 차이점을 설명합니다.

## Mendix 사용자 설정

Oracle 백엔드와의 통합을 설정할 때, Mendix는 적절한 권한을 가진 사용자/스키마를 생성하는 것을 권장합니다. Mendix는 스키마 구조(예: 테이블 및 인덱스)를 업데이트하고 DML 문을 실행하기 위해 단일 사용자를 사용합니다. 전자는 Mendix가 시작되고 모델을 저장소 구조와 동기화할 때 수행되며, 후자는 정상적인 Runtime 작업에서 수행됩니다.

설정할 때 다음 단계를 수행하십시오:

1. "DEFAULT" 프로필로 Mendix용 새 사용자와 스키마를 생성합니다.
2. 사용자에게 다음 권한을 부여합니다:
    * CREATE SESSION
    * CREATE SEQUENCE
    * CREATE TABLE
    이렇게 하면 계정에 Domain Model을 나타내는 데 필요한 구조를 만들고 데이터를 생성, 쿼리 및 수정할 수 있는 충분한 권한이 보장됩니다.
3. 사용자에게 필요한 리소스를 생성할 수 있을 만큼의 할당량이 부여되었는지 확인하거나, 무제한 부여를 제공하십시오(예: `GRANT UNLIMITED TABLESPACE TO mendix`, 여기서 `mendix`는 생성한 사용자/스키마입니다).

{{% alert color="info" %}}
Mendix 데이터베이스 생성 중에 수행되는 구조적 수정의 수는 Domain Model의 크기에 따라 다릅니다. 이 수가 상당히 크거나 큰 구조적 변경이 있는 경우, `OPEN_CURSORS` 값을 늘리는 것이 현명할 수 있습니다.
{{% /alert %}}

## 무제한 및 매우 긴 문자열

PostgreSQL과 Oracle 간의 차이점 대부분은 매우 길거나 무제한 길이의 문자열을 처리하는 방식에 있습니다. Oracle은 CLOB(character large object) 데이터의 기능에 제한이 있습니다. Mendix는 긴 문자열을 CLOB 객체로 저장하며, 이는 무제한 또는 2000자보다 긴 문자열 Attribute를 정의하면 Oracle 데이터베이스에서 할 수 있는 일부 작업이 제한된다는 것을 의미합니다. 이러한 제한 사항은 아래에 나열되어 있습니다.

이 기능을 사용하려면 2000자 미만의 문자열 Attribute를 사용하는 것이 해결 방법입니다.

### 비교 함수

Oracle은 XPath 제약 조건에서 같음(`=`) 또는 같지 않음(`!=`) 연산자를 사용할 때 2000자보다 긴 문자열을 지원하지 않습니다. 그러나 `contains()`, `starts-with()`, `ends-with()`를 포함한 함수는 지원합니다.

### 정렬, 그룹화, 집계

2000자보다 긴 문자열에서는 정렬, 그룹화 또는 `count()`와 같은 집계 함수를 사용할 수 없습니다. 더 짧은 문자열을 사용할 수 없는 경우 데이터 그리드에서 Attribute를 제거하는 것을 고려하십시오.

### SELECT DISTINCT Attribute

OQL 쿼리에서 [SELECT DISTINCT](/refguide8/oql-select-clause/)를 사용하는 것은 2000자보다 긴 문자열에서 지원되지 않습니다.

이 제한에 부딪히면 `Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small`과 같은 메시지가 기록됩니다.

### 고유성 제약 조건

2000자보다 긴 문자열 Attribute에 [고유성 제약 조건](/refguide/validation-rules/#uniqueness)을 설정할 수 없습니다.

이 제한에 부딪히면 `Error Msg = ORA-02329: PL/SQL: column of datatype LOB cannot be unique or a primary key`와 같은 예외가 기록됩니다.

## DDL 명령

Oracle의 DDL(데이터 정의 언어) 명령은 트랜잭션이 아니며 오류 발생 시 롤백되지 않습니다. 이는 앱을 시작할 때 Oracle 데이터베이스를 모델과 동기화해야 하고 동기화 중에 오류가 발생하면, 오류가 발생한 시점까지 수행된 변경 사항은 롤백되지 *않는다*는 것을 의미합니다. 이로 인해 데이터베이스가 자동으로 복구할 수 없는 불일치 상태가 될 수 있습니다. Mendix는 앱의 새 버전을 배포하기 전에 데이터베이스 백업을 생성하여 데이터베이스 동기화가 실패하는 경우 백업을 복원할 수 있도록 하는 것을 권장합니다.
