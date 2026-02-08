---
title: "SQL Server에서 데이터베이스 복원"
url: /developerportal/deploy/restoring-a-sql-server-database/
weight: 70
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

특정 상황(예: 원치 않는 데이터베이스 업데이트 또는 데이터 손상)에서는 백업에서 Mendix 데이터베이스를 복원해야 할 수 있습니다. 이 문서에서는 전체 데이터베이스 복원을 수행하는 데 필요한 작업을 설명하고 백업 복원을 위한 전제 조건을 정의합니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* 데이터베이스 복원

이 작업에 대한 심층 분석은 다음 비디오를 확인하십시오:

{{< vidyard "WZu7QtHZPjtYUTdcV58PKr?" >}}

## 전제 조건

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 완료하십시오:

* DBMS에 대한 충분한 권한이 있어야 합니다(자세한 내용은 아래 [권한](#Permissions) 섹션 참조)
* 다음 사항이 충족되는지 확인하십시오:
    * Mendix 데이터베이스가 [Mendix SQL 유지 관리 계획 설정 방법](/developerportal/deploy/mendix-sql-maintenance-plans/)에 설명된 대로 유지 관리 계획을 사용하여 유지되고 있습니다
    * Mendix 데이터베이스에 대한 유효한 데이터베이스 백업 파일이 존재합니다
    * Mendix 데이터베이스에 대한 유효한 트랜잭션 로그 파일이 존재합니다

## 권한 {#Permissions}

복원 중인 데이터베이스가 존재하지 않는 경우 사용자는 **RESTORE**를 실행하기 위해 **CREATE DATABASE** 권한이 있어야 합니다. 데이터베이스가 존재하는 경우 RESTORE 권한은 기본적으로 `sysadmin` 및 `dbcreator` 고정 서버 역할의 구성원과 데이터베이스 소유자(`dbo`)에게 부여됩니다.

RESTORE 권한은 멤버십 정보가 서버에서 항상 쉽게 확인 가능한 역할에 부여됩니다. 고정 데이터베이스 역할 멤버십은 데이터베이스에 접근 가능하고 손상되지 않은 경우에만 확인할 수 있으므로(RESTORE 실행 시 항상 그런 것은 아님), `db_owner` 고정 데이터베이스 역할의 구성원에게는 RESTORE 권한이 없습니다.

## 데이터베이스 복원

데이터베이스를 복원하려면 다음 단계를 따르십시오:

1. Microsoft SQL Server Database Engine의 적절한 인스턴스에 연결한 후 **Object Explorer**에서 서버 이름을 클릭하여 서버 트리를 확장하십시오.
2. **Databases**를 확장하십시오. 데이터베이스에 따라 사용자 데이터베이스를 선택하거나 **System Databases**를 확장하여 시스템 데이터베이스를 선택하십시오.
3. 데이터베이스를 마우스 오른쪽 버튼으로 클릭하고 **Tasks** > **Restore** > **Database**를 선택하면 **Restore Database** 대화 상자가 열립니다.
4. **General Settings** 페이지의 **Source** 섹션에서 **Device** > **Add**를 선택한 다음 백업 파일을 찾아 복원할 백업 세트의 소스와 위치를 지정하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/restoring-a-sql-server-database/18580646.jpg" class="no-border" >}}

5. **General Settings** 페이지의 **Destination** 섹션에서 **Database** 필드가 복원할 데이터베이스의 이름으로 자동 채워집니다. 데이터베이스의 이름을 변경하려면 이 필드에 새 이름을 입력하십시오.
6. **General Settings** 페이지의 **Restore plan** 섹션에서 기본값인 **To the last backup taken**을 그대로 두거나 **Timeline**을 클릭하여 **Backup Timeline** 대화 상자에 접근하여 복구 작업을 중지할 시점을 수동으로 선택하십시오.
7. **Backup sets to restore** 그리드에서 복원할 백업을 선택하십시오. 이 그리드는 지정된 위치에 사용 가능한 백업을 표시합니다. 기본적으로 복구 계획이 제안됩니다. 제안된 복구 계획을 재정의하려면 그리드에서 선택을 변경하십시오. 이전 백업이 선택 해제되면 이전 백업의 복원에 의존하는 백업이 자동으로 선택 해제됩니다.

    {{% alert color="info" %}}선택적으로 "Select a page" 창에서 "Files"를 클릭하여 "Files" 대화 상자에 접근할 수 있습니다. 여기에서 "Restore the database files as" 그리드의 각 파일에 대한 새 복원 대상을 지정하여 데이터베이스를 새 위치로 복원할 수 있습니다.{{% /alert %}}

8. 고급 옵션을 보거나 선택하려면 **Options** 페이지의 **Restore options** 패널에서 상황에 적합한 경우 다음 옵션 중 하나를 선택할 수 있습니다:
    * **WITH** 옵션(필수 아님):
        * 기존 데이터베이스 덮어쓰기(**WITH REPLACE**)
        * 복제 설정 유지(**WITH KEEP_REPLICATION**)
        * 복원된 데이터베이스에 대한 접근 제한(**WITH RESTRICTED_USER**)
    * **Recovery state** 상자의 옵션을 선택하십시오. 이는 복원 작업 후 데이터베이스의 상태를 결정합니다:
        * **RESTORE WITH RECOVERY**는 커밋되지 않은 트랜잭션을 롤백하여 데이터베이스를 사용 가능한 상태로 두는 기본 동작입니다
            * 추가 트랜잭션 로그를 복원할 수 없습니다
            * 필요한 모든 백업을 지금 복원하는 경우 이 옵션을 선택하십시오
        * **RESTORE WITH NORECOVERY**는 데이터베이스를 비작동 상태로 두고 커밋되지 않은 트랜잭션을 롤백하지 않습니다
            * 추가 트랜잭션 로그를 복원할 수 있습니다
            * 복구될 때까지 데이터베이스를 사용할 수 없습니다
        * **RESTORE WITH STANDBY**는 데이터베이스를 읽기 전용 모드로 둡니다
            * 커밋되지 않은 트랜잭션을 취소하지만 복구 효과를 되돌릴 수 있도록 실행 취소 작업을 대기 파일에 저장합니다
    * 선택한 시점에 필요한 경우 복원 전 비상 로그 백업을 수행하도록 선택합니다
        * 이 설정을 수정할 필요는 없지만 필수가 아니더라도 비상 로그를 백업하도록 선택할 수 있습니다
    * 데이터베이스에 활성 연결이 있으면 복원 작업이 실패할 수 있습니다
        * Management Studio와 데이터베이스 간의 모든 활성 연결이 닫히도록 **Close existing connections** 옵션을 선택하십시오(이 체크박스는 복원 작업 전에 데이터베이스를 단일 사용자 모드로 설정하고 완료 시 다중 사용자 모드로 설정합니다)
    * 각 복원 작업 사이에 프롬프트를 받으려면 **Prompt before restoring each backup**을 선택하십시오
        * 데이터베이스가 크고 복원 작업의 상태를 모니터링하려는 경우가 아니면 일반적으로 필요하지 않습니다
9. **OK**를 클릭하십시오.

## 더 읽기

* [SQL Server 문제 해결 방법](/developerportal/deploy/troubleshooting-sql-server/)
* [SQL Server 사용자 설정 방법](/developerportal/deploy/setting-up-a-sql-server-user/)
* [새 SQL Server 데이터베이스 설정 방법](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [Mendix SQL 유지 관리 계획 설정 방법](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [온프레미스 설치 보안 체크리스트 설정 방법](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
