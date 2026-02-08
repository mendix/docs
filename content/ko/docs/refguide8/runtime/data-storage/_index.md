---
title: "데이터 저장소"
url: /refguide8/data-storage/
---

## 소개

데이터 저장소는 Mendix Runtime의 데이터 기반입니다. 데이터 저장소는 다음을 수행합니다:

* 지원되는 관계형 데이터베이스에 연결
* Domain Model에서 Entity 및 Association을 저장하고 검색
* XPath 및 OQL 쿼리를 SQL 쿼리로 변환
* 보안을 투명하고 효과적으로 처리

## 지원되는 데이터베이스

Mendix Cloud에 배포된 앱의 경우, Mendix는 앱 Domain Model에 정의된 데이터를 저장하기 위해 PostgreSQL 데이터베이스를 사용합니다.

다른 인프라에 배포하는 경우, Mendix는 다음 데이터베이스를 지원합니다.

* IBM DB2
* HSQLDB
* MySQL
* Oracle RDBMS
* PostgreSQL
* SAP HANA
* Microsoft SQL Server
