---
title: "DB2"
url: /refguide8/db2/
weight: 40
---

## 소개

DB2 데이터베이스를 사용하여 Mendix 앱을 구현하는 경우 고려해야 할 추가 사항이 있습니다. 또한 DB2 데이터베이스를 사용하는 Mendix의 동작은 PostgreSQL 데이터베이스를 사용할 때와 비교하여 약간의 차이가 있습니다.

이러한 고려 사항과 차이점은 아래에 설명되어 있습니다.

## 테이블 스페이스의 페이지 크기

Mendix가 DB2에서 실행되려면, 사용자 테이블 스페이스의 페이지 크기가 최소 8K(가능하면 32K)인 것이 매우 중요합니다. 이는 Mendix가 국가 문자 문자열(NVARCHAR 또는 문자열 단위 CODEUNIT32의 VARCHAR)을 사용하기 때문입니다. 이 데이터 유형은 옥텟 기반 VARCHAR보다 더 많은 공간을 소비합니다. 시스템 관리를 위해 Mendix는 항상 인덱스가 있는 일부 테이블을 생성하며, 이는 최소 8K의 테이블 스페이스 페이지 크기가 필요합니다.

**SQL Code `-614` 예외**

인덱스가 페이지 크기에 비해 너무 크면 DB2는 예외를 발생시킵니다: `com.ibm.db2.jcc.am.SqlException: DB2 SQL Error: SQLCODE=-614, SQLSTATE=54008, SQLERRMC=some_index_name`

사용자가 생성한 인덱스의 경우, 인덱스에 지정된 열의 결합 길이가 최대 키 길이보다 크면 테이블 스페이스의 페이지 크기도 늘려야 합니다.

자세한 내용은 *IBM Knowledge Center*의 *SQL messages* 섹션에서 [SQL0614N – The index or index extension index-name cannot be created or altered because the combined length of the specified columns is too long](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.messages.sql.doc/doc/msql00614n.html)을 참조하십시오.

## 트랜잭션 로그 크기

**SQL Code `-964` 예외**

트랜잭션 로그 공간이 고갈되었거나 활성 트랜잭션 수가 일시적으로 증가한 경우, DB2는 다음 예외를 발생시킵니다: `com.ibm.db2.jcc.am.SqlException: DB2 SQL Error: SQLCODE=-964, SQLSTATE=57011, SQLERRMC=null`.

이 경우 *LOGPRIMARY*의 크기를 늘려야 합니다.

자세한 내용은 *IBM Support* 페이지의 [DB2 SQL error: SQLCODE: -964, SQLSTATE: 57011, SQLERRMC: null](https://www-01.ibm.com/support/docview.wss?uid=swg21298630) 및 *IBM Knowledge Center*의 *SQL messages* 섹션의 [SQL0964C – The transaction log for the database is full](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.messages.sql.doc/doc/msql00964c.html)을 참조하십시오.

## DB2 대소문자 구분 없이 만들기 {#making}

대소문자가 혼합된 문자열 열 값에 정렬을 적용할 때, DB2는 대소문자도 고려합니다. 그러나 대소문자를 구분하지 않는 데이터 정렬로 DB2 데이터베이스를 생성하면 이러한 상황을 피할 수 있습니다.

자세한 내용은 *IBM Developer Works*의 [Making DB2 case-insensitive](https://www.ibm.com/developerworks/data/library/techarticle/0203adamache/0203adamache.html) 문서를 참조하십시오.

## 알려진 문제

### 매우 긴 문자열 정렬

무제한 문자열 또는 지정된 길이가 8192자보다 큰 문자열에 대해 정렬하는 것은 불가능합니다. 이러한 길거나 무제한 문자열은 NCLOB 데이터 유형으로 구현되기 때문입니다. DB2는 이 데이터 유형의 열에 대한 정렬을 허용하지 않습니다. 기술적으로 쿼리 실행 중에 이 유형을 일반 VARCHAR 유형으로 캐스팅하고 정렬하는 것은 가능하지만, 이는 실행 시간을 증가시킵니다. 이렇게 긴 문자열을 데이터 그리드에 표시하는 것이 정말 사용자에게 친숙한지 의문입니다. 문자열 Attribute의 길이를 줄이거나 데이터 그리드에서 제거하는 것을 고려하십시오.

### 상관 스칼라 전체 선택 또는 외부 작업이 있는 함수로 ORDER BY

*IBM DB2 SQL reference*의 [order-by-clause](https://www.ibm.com/support/knowledgecenter/SS6NHC/com.ibm.swg.im.dashdb.sql.ref.doc/doc/r0059211.html) 문서에 따르면, DB2는 상관 스칼라 전체 선택(SQLSTATE 42703) 또는 외부 작업이 있는 함수(SQLSTATE 42845)로의 ORDER BY를 지원하지 않습니다.

이 제한을 고려하여, Mendix 애플리케이션이 DB2에 의해 지원되는 경우 연관된 Attribute에 의한 정렬은 지원되지 않습니다. 따라서 정렬에 사용되는 모든 연관된 Attribute는 쿼리에서 필터링되며 결과 집합은 연관된 Attribute에 의한 정렬이 쿼리에 제시되지 않은 것처럼 반환됩니다.

### OData를 사용한 비차단 읽기 격리 스트리밍

*IBM DB2 Application design*의 [Isolation levels](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.admin.perf.doc/doc/c0004121.html) 문서에 따르면, DB2는 비차단 읽기 격리 쿼리를 지원하지 않습니다. DB2의 기본 동작은 한 사용자가 테이블에서 행을 검색하고 다른 사용자가 동시에 같은 테이블을 수정하는 경우 해당 수정 사항이 검색 쿼리의 데이터에 표시됩니다(즉, 데이터베이스 읽기가 격리되지 않음). 이 동작을 방지하기 위해 더 엄격한 트랜잭션 격리 수준을 구성하면 동일한 행에 잠금을 설정합니다(즉, 동시 데이터베이스 작업이 차단됨).

이 제한을 고려하여, Mendix 애플리케이션이 DB2를 스트리밍 OData 데이터 소스로 사용하는 경우 데이터 검색 작업의 결과 집합에 동시 행 수정이 포함되는 것을 방지하는 것은 지원되지 않습니다.

### 매우 긴 문자열에 대한 Select DISTINCT Attribute

CLOB 데이터 유형의 DISTINCT 열 선택에 대한 알려진 DB2 제한으로 인해, 크기 > 8168자의 String 유형의 DISTINCT Attribute 선택은 Mendix에서 지원되지 않습니다. 이 제한에 부딪히면 로그에 다음과 같은 메시지의 예외가 발생할 수 있습니다: `DB2 SQL Error: SQLCODE=-727, SQLSTATE=56098, SQLERRMC=2;-134;42907`
