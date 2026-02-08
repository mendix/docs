---
title: "SQL Server 문제 해결"
url: /developerportal/deploy/troubleshooting-sql-server/
weight: 80
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 문서에서는 SQL Server를 사용할 때 발생할 수 있는 다양한 오류를 다루고 해결 방법을 제안합니다.

## 문제

### Read Committed Snapshot

```text
Error while executing queries
ALTER DATABASE [YourDatabase] SET READ_COMMITTED_SNAPSHOT ON;
CREATE ASSEMBLY [Mendix.SqlServerExtensions] FROM [a dll file] WITH PERMISSION_SET = SAFE;
```

**Read Committed Snapshot**을 설정하거나 어셈블리를 생성하려면 사용자에게 `db_ddladmin` 역할이 필요합니다. 각 새 Mendix 데이터베이스에 대해 Read Committed Snapshot 구성을 활성화해야 합니다. 어셈블리 쿼리는 데이터베이스 서버 인스턴스당 한 번만 실행되며 모든 Mendix 애플리케이션에서 사용됩니다.

### Create Function

```text
Error while executing query
CREATE FUNCTION [dbo].[mx_toLocalDateTime] (@utcDateTime datetime, @dstTimeZone nvarchar(50)) RETURNS datetime AS EXTERNAL NAME [Mendix.SqlServerExtensions].[Mendix.SqlServerExtensions.DateTimeLocalizer].[ConvertToLocalDateTime];
```

이 권한은 `db_ddladmin` 및 `db_owner` 고정 데이터베이스 역할에 암시적으로 부여됩니다. SQL Server 2005 이상에서는 사용자가 특정 스키마에서 함수를 생성하려면 `ALTER SCHEMA` 권한이 필요합니다.

일반적으로 사용자가 데이터베이스에 대해 `db_owner` 역할을 가지고 있으면 이 쿼리를 실행하기에 충분한 권한이 있습니다.

### JDBC 연결

#### 시간 초과

```text
Opening JDBC connection to yourServerAddress\YourInstanceName:0 failed with SQLState: 08S01 Error code: 0 Message: The connection to the host localhost, named instance sqlexpress2008 failed.
Error: "java.net.SocketTimeoutException: Receive timed out". Verify the server and instance names and check that no firewall is blocking UDP traffic to port 1434\.  For SQL Server 2005 or later, verify that the SQL Server Browser Service is running on the host. Retrying...(1/4)
```

서버 주소와 인스턴스 이름이 올바른 경우 "SQL Server Browser" 서비스가 실행 중인지 확인하십시오. 이 프로세스가 실행 중이지 않으면 서비스를 시작하십시오. "SQL Server Browser"를 사용하지 않으려면 URL에 데이터베이스 인스턴스의 포트도 포함해야 합니다.

#### 로그인 실패

```text
Opening JDBC connection to localhost\sqlexpress2008:0 failed with SQLState: S0001 Error code: 18470
Message: Login failed for user 'YourDatabaseUser'. Reason: The account is disabled. ClientConnectionId:5d971a3f-ab50-4594-b17b-88b90effcaab Retrying...(1/4)
```

사용자의 '상태'를 검증하십시오. 사용자의 로그인 속성 중 하나가 Deny 또는 Disabled로 구성되어 있을 수 있습니다. 두 권한 모두 Grant/Enabled로 구성되어야 합니다.

#### 보안 연결을 설정할 수 없음

```text
Opening JDBC connection to yourServerAddress:1433\YourInstanceName failed with SQLState: 08S01 Error code: 0
Message: "The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.
Error: "PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target".
ClientConnectionId:[...]", retrying...(1/4)
```

`DatabaseUseSsl` [커스텀 설정](/refguide/custom-settings/#DatabaseUseSsl)을 false로 설정하여 연결 암호화를 끄십시오. Mendix 10부터 데이터베이스 연결에 사용되는 JDBC 드라이버가 기본적으로 TLS 암호화를 사용하지만, 많은 온프레미스 SQL Server 설치는 이를 위해 설정되지 않았습니다.

## 더 읽기

* [데이터베이스 사용자 설정](/developerportal/deploy/setting-up-the-database-user/)
* [SQL Server 데이터베이스 복원](/developerportal/deploy/restoring-a-sql-server-database/)
* [Mendix SQL 유지 관리 계획](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [새 SQL Server 데이터베이스 설정](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [SQL Server 사용자 설정](/developerportal/deploy/setting-up-a-sql-server-user/)
