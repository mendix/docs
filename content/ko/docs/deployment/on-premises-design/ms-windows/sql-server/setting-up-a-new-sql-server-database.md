---
title: "SQL Server에서 새 데이터베이스 설정"
url: /developerportal/deploy/setting-up-a-new-sql-server-database/
weight: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 사용 방법 문서에서는 새 SQL Server 데이터베이스를 수동으로 설정하는 방법을 설명합니다.

{{% alert color="info" %}}
Mendix가 사용하는 데이터베이스 사용자에게 데이터베이스를 생성할 수 있는 충분한 권한이 없는 경우에만 이 단계를 따르면 됩니다.

이 단계 중 일부는 SQL Server 또는 Mendix의 특정 버전에서만 필요합니다.
{{% /alert %}}

## 새 데이터베이스 설정

Mendix용 새 데이터베이스를 설정할 때 대부분의 설정을 기본 구성으로 둘 수 있습니다. 일반 설정을 살펴볼 때 데이터베이스 이름만 설정하면 됩니다. [Microsoft SQL Server 모범 사례](https://www.mssqltips.com/sqlservertip/4891/sql-server-installation-best-practices/)에 따라 데이터베이스 파일을 설정하십시오.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-a-new-sql-server-database/18580676.png" class="no-border" >}}

데이터베이스 옵션에서 기본 속성을 평가해야 합니다. 데이터 정렬을 선택할 때 사용할 데이터 정렬 유형에 주의하십시오. Mendix는 모든 데이터 평가에 UTF-8을 사용합니다. 정확한 로케일에 따라 `SQL_Latin1_General_` 데이터 정렬 중 하나를 선택하는 것이 가장 적절합니다. 정확한 인코딩은 OS에 따라 달라집니다. 예를 들어 **en_US** 설치의 경우 인코딩은 `CP1`입니다.

마지막 두 데이터 정렬 인수는 정렬과 고유성이 해석되는 방식을 식별합니다. 예를 들어, 데이터 정렬 인수 `CS`는 데이터 정렬 정렬 스타일이 대소문자를 구분함을 나타냅니다. 데이터 정렬 및 대소문자 구분에 대한 자세한 내용은 [대소문자 구분 데이터베이스 동작](/refguide/case-sensitive-database-behavior/) 및 Microsoft 문서 [Windows Collation Name](https://docs.microsoft.com/en-us/sql/t-sql/statements/windows-collation-name-transact-sql)을 참조하십시오.

Mendix는 **Simple** 복구 모델 옵션 사용을 권장합니다. Mendix는 **Full** 복구 모델 옵션에서 제공되는 전체 기능을 사용하지 않습니다. **Full** 복구 모델을 성공적으로 사용할 수 있지만, 모든 트랜잭션의 데이터 사용량이 증가하고 오류 발생 시 롤백이 느려질 수 있습니다.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-a-new-sql-server-database/18580675.png" class="no-border" >}}

데이터베이스가 생성된 후 Mendix Runtime은 초기 설정을 시작하고 플랫폼에서 사용할 모든 테이블과 함수를 준비할 수 있습니다. 이러한 쿼리 중 일부는 `sysadmin` 권한이 필요합니다. `sysadmin` 역할은 사용자에게 임시로 할당하거나 관리자가 이러한 쿼리를 실행할 수 있습니다. 다른 쿼리에는 `db_owner` 역할에 암시적으로 할당되는 권한이 필요합니다. Mendix Runtime이 사용하는 사용자에게 이러한 쿼리에 대한 충분한 권한이 없는 경우 수동으로 실행할 수 있습니다 - 자세한 내용은 아래를 참조하십시오.

## Read Committed Snapshot 격리 수준 및 Snapshot 격리 활성화

SQL Server를 사용하는 Mendix 앱은 데이터베이스에 **Read Committed Snapshot** 및 **Snapshot Isolation** 기능을 모두 사용합니다. 이를 통해 동시 트랜잭션에 의해 레코드가 업데이트된 경우에도 읽기 작업이 계속될 수 있어 동시성이 향상됩니다. 자세한 내용은 [Transaction Locking and Row Versioning Guide](https://docs.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver15)를 참조하십시오.

{{% alert color="info" %}}
Mendix Runtime이 사용하는 데이터베이스 사용자에게 `ALTER DATABASE` 명령(일반적으로 `sysadmin` 역할)을 실행할 수 있는 충분한 권한이 없는 경우에만 이 단계를 따르면 됩니다.
{{% /alert %}}

**Read Committed Snapshot** 및 **Snapshot Isolation** 기능이 활성화되도록 데이터베이스 스키마를 구성해야 합니다. 이를 활성화하려면 데이터베이스에서 다음 명령을 실행하십시오:

```sql
ALTER DATABASE [MySchema] SET READ_COMMITTED_SNAPSHOT ON;

ALTER DATABASE [MySchema] SET ALLOW_SNAPSHOT_ISOLATION ON;
```

{{% alert color="info" %}}
위 명령을 실행할 때 `[MySchema]`를 스키마 이름으로 교체하십시오.
{{% /alert %}}

## 더 읽기

* [Microsoft Windows에서 Mendix 라이선스 활성화 방법](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/)
* [데이터베이스 사용자 설정 방법](/developerportal/deploy/setting-up-the-database-user/)
* [개발 데이터베이스 공유 방법](/howto/data-models/sharing-the-development-database/)
* [SQL Server 데이터베이스 복원 방법](/developerportal/deploy/restoring-a-sql-server-database/)
* [문제 해결 방법](/developerportal/deploy/troubleshooting-iis/)
* [SQL Server 문제 해결 방법](/developerportal/deploy/troubleshooting-sql-server/)
* [Mendix SQL 유지 관리 계획 설정 방법](/developerportal/deploy/mendix-sql-maintenance-plans/)
