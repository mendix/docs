---
title: "MySQL/MariaDB"
url: /refguide8/mysql/
weight: 50
---

## 소개

MySQL 또는 MariaDB 데이터베이스를 사용하여 Mendix 앱을 구현하는 경우 고려해야 할 추가 사항이 있습니다. 또한 MySQL 또는 MariaDB 데이터베이스를 사용하는 Mendix의 동작은 PostgreSQL 데이터베이스를 사용할 때와 비교하여 약간의 차이가 있습니다.

이러한 고려 사항과 차이점은 아래에 설명되어 있습니다.

## 스토리지 엔진

Mendix는 행 기반 로깅이 활성화된 InnoDB 스토리지 엔진만 지원합니다.

## 트랜잭션 격리

Mendix는 기본적으로 `Read Committed` 트랜잭션 격리 수준을 사용합니다. 이 트랜잭션 격리 수준에서는 행 기반 로깅만 사용할 수 있습니다. `binlog_format` 데이터베이스 구성 값을 `ROW` 또는 `MIXED`로 설정해야 합니다. 자세한 내용은 [MySQL의 `binlog_format`](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_format) 또는 [MariaDB의 `binlog_format`](https://mariadb.com/kb/en/replication-and-binary-log-system-variables/#binlog_format)을 참조하십시오.

## SAVEPOINT 예외가 존재하지 않음

`SAVEPOINT unnamed does not exist` 예외를 받으면 교착 상태가 발생한 것입니다. MySQL/MariaDB가 자동으로 트랜잭션을 롤백하고 해당 트랜잭션의 모든 저장 지점을 제거하므로 Mendix는 이 상황을 올바르게 처리할 수 없습니다. Mendix는 특정 저장 지점으로 롤백하려고 하지만 MySQL과 MariaDB에서는 더 이상 허용되지 않습니다. 트랜잭션을 가능한 짧게 유지하여 교착 상태를 피하는 것이 좋습니다.

## 시간대 지원

Mendix는 쿼리에서 날짜와 시간의 일부를 추출하는 기능을 지원합니다. XPath에서는 [`hours-from-dateTime`](/refguide8/xpath-hours-from-datetime/) 및 [`week-from-dateTime`](/refguide8/xpath-week-from-datetime/)과 같은 함수를 사용할 수 있습니다. OQL에서는 [`DATEPART(..)`](/refguide8/oql-datepart/) 및 [`DATEDIFF(..)`](/refguide8/oql-datediff/)와 같은 함수를 사용할 수 있습니다.

Mendix에서 DateTime은 UTC 시간대에 저장됩니다. 이러한 함수가 올바르게 작동하려면 데이터베이스가 UTC에서 다른 시간대로 날짜와 시간을 변환하는 것을 지원하는 것이 중요합니다. 이것이 불가능한 경우 함수는 UTC 시간대의 날짜와 시간에서 작동합니다. 이는 사용자가 자신의 시간대에서 날짜가 작동하기를 기대하는 경우 잘못된 결과를 초래할 수 있습니다.

MySQL은 즉시 사용 가능한 시간대 변환을 완전히 지원하지 않습니다. 일부 시간대 테이블을 채워야 합니다(자세한 내용은 [5.1.14 MySQL Server Time Zone Support](https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html) 참조). 쿼리에서 이런 종류의 함수를 사용하지 않거나 항상 UTC 날짜와 시간으로 작업하려는 경우에는 이 작업을 수행할 필요가 없습니다.

MariaDB는 시간대 변환에 대해 동일한 구성을 지원합니다.

## 데이터베이스 생성

새 MySQL 데이터베이스를 생성하려면 사용자가 데이터베이스를 생성할 수 있는 충분한 접근 권한을 가지고 있어야 합니다.
