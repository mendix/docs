---
title: "SQL Server 유지 관리 계획"
url: /developerportal/deploy/mendix-sql-maintenance-plans/
weight: 50
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 사용 방법 문서에서는 Mendix SQL 유지 관리 계획 설정에 대한 가이드라인을 제시합니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* SQL 기본 유지 관리 계획 설정
* 알림 설정
* 사용자 데이터베이스 유지 관리 계획 설정

## 전제 조건

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 완료하십시오:

* 이 사용 방법 문서의 목적상 다음 Mendix SQL 데이터 구조가 사용되므로, 조직의 데이터 구조에 따라 폴더 트리를 조정하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580650.jpg" class="no-border" >}}

* SQL Server Agent Service가 실행 중인지 확인하십시오. 인증에는 Mendix 서비스 계정을 사용하는 것이 좋습니다
* 보관해야 할 소프트 백업의 양을 고려하십시오
* 유지 관리 알림을 받을 이메일 주소를 고려하십시오

## SQL 기본 유지 관리 계획

### 기본 사항

유지 관리 계획은 SQL Server Management Studio의 편집기에서 생성합니다.

작업 단계를 추가하려면 다음 단계를 따르십시오:

1. **Maintenance Plan Tasks** 도구 상자에서 해당 항목을 끌어다 놓으십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580649.jpg" class="no-border" >}}

2. 항목 간에 연결선을 끌어 이벤트 시퀀스를 시작하십시오.
3. 알림 작업을 **Success**(기본 커넥터)에서 **Failure**로 변경하려면 연결선을 마우스 오른쪽 버튼으로 클릭하고 **Failure**를 선택하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580648.jpg" class="no-border" >}}

### 알림

알림을 구성하려면 다음 단계를 따르십시오:

1. SQL Management Studio를 시작하십시오.
2. SQL 연산자(SQL Server Agent)를 생성하십시오. 연산자는 유지 관리 알림을 수신합니다.
3. **DatabaseMail**을 마우스 오른쪽 버튼으로 클릭하고 **Configure Database Mail**을 선택하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580653.png" class="no-border" >}}

4. 유효한 이메일 발신자 주소를 선택하십시오(예: *mendix_sql@yourdomainname.com*)
5. 이메일 프로필이 **Public** 및 **Default Profile**로 설정되어 있는지 확인하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580663.png" class="no-border" >}}

6. 테스트 이메일을 보내 이메일 구성을 확인하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580662.png" class="no-border" >}}

7. 다음으로 두 개의 유지 관리 계획을 생성하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580661.png" class="no-border" >}}

    통일성을 위해 이 문서 전체에서 계획 이름 **MP_SYSDB** 및 **MP_USERDB**가 사용됩니다. 계획 이름을 다른 규칙으로 변경해도 계획의 기능에 영향을 미치지 않습니다.

    모든 (하위)계획에 알림이 구성됩니다. **Failed** 이벤트만 보낼지 **Failed** 및 **Successful** 모두 보낼지는 사용자에게 달려 있습니다.

다음은 알림 패턴입니다:

* 제목: `SQL Server Message - <SQL 인스턴스> - <유지 관리 계획 이름> - <하위 계획 이름> <성공/실패>`
    * 예: *SQL Server Message - Mendix-SQL1 – MP_USERDB - weekly maintenance failed*
* 본문: `<SQL 인스턴스> - <하위 계획 이름> <성공/실패>`
    * 예: *Mendix-SQL1 – database backup (full) successful*

### 사용자 데이터베이스

이 섹션에서는 하위 계획을 포함하는 **MP_USERDB**라는 새 유지 관리 계획을 생성합니다:

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580660.png" class="no-border" >}}

1. **backup database (full)**이라는 하위 계획을 생성하십시오.
2. 매 근무일 22:00에 실행되도록 계획을 예약하십시오(또는 외부 백업 애플리케이션과 충돌하지 않는 시간):

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580667.png" class="no-border" >}}

3. 디스크에 백업하도록 선택하십시오.
4. *X:\sqldata\backup*에 백업하십시오.
5. **create a sub-directory for each database**를 선택하십시오.
6. 백업 파일 확장자 *.bak*.
7. **verify backup integrity**를 선택하십시오.
8. 백업 압축을 **Compress Backup**으로 설정하십시오.
9. **backup database (trn)**이라는 하위 계획을 생성하십시오.
10. 필요한 만큼 자주 매 근무일 실행되도록 계획을 예약하십시오. 시간별 백업을 실행하면 시간별 데이터베이스 복구가 가능합니다. 더 작은 간격으로 실행하면 더 최근 시점으로의 데이터베이스 복구가 가능합니다. 많은 시간당 트랜잭션을 수행하는 고용량 데이터베이스는 덜 사용되는 데이터베이스보다 더 자주 백업해야 합니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580666.png" class="no-border" >}}

11. 백업 **Type**으로 **Transaction Log**를 선택하십시오.
12. 디스크에 백업하도록 선택하십시오.
13. *d:\sqldata\backup*에 백업하십시오.
14. **create a sub-directory for each database**를 선택하십시오.
15. 백업 파일 확장자 *.trn*.
16. **verify back up integrity**를 선택하십시오.
17. 백업 압축을 **Compress Backup**으로 설정하십시오.
18. **weekly maintenance**라는 하위 계획을 생성하십시오.
19. 매주 일요일 01:00에 실행되도록 계획을 예약하십시오(또는 애플리케이션이 가장 적게 사용되는 시간):

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580665.png" class="no-border" >}}

20. **Change free space per page percentage to: 10%**로 설정하고 **Keep index online while reindexing**을 선택하십시오(이 옵션은 Microsoft SQL Server의 엔터프라이즈 버전에서만 작동합니다):

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580659.png" class="no-border" >}}

21. **daily maintenance**라는 하위 계획을 생성하십시오.
22. 매주 화요일부터 금요일 02:00에 실행되도록 예약하십시오(또는 조직에 적용되는 근무일):

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580668.png" class="no-border" >}}

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580658.png" class="no-border" >}} .

{{% alert color="info" %}}

원하는 백업 보존 시간에 맞게 시간을 조정해야 합니다. 디스크 공간을 절약하기 위해 정리를 더 짧은 간격으로 설정할 수 있습니다.

{{% /alert %}}

### 시스템 데이터베이스

이 섹션에서는 다음 하위 계획을 포함하는 **MP_SYSDB**라는 새 유지 관리 계획을 생성합니다:

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580652.png" class="no-border" >}}

1. **backup database (full)**이라는 하위 계획을 생성하십시오.
2. 화요일부터 금요일 02:00에 실행되도록 예약하십시오(또는 조직에 적용되는 근무일):

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580654.png" class="no-border" >}}

3. 디스크에 백업하도록 선택하십시오.
4. *d:\sqldata\backup*에 백업하십시오.
5. **create a sub-directory for each database**를 설정하십시오.
6. 백업 파일 확장자 *.bak*.
7. **verify backup integrity**를 선택하십시오.
8. 백업 압축을 **Compress Backup**으로 설정하십시오.
9. **weekly maintenance**라는 하위 계획을 생성하십시오.
10. 매주 일요일 01:00에 실행되도록 예약하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580651.png" class="no-border" >}}

11. 인덱스 재빌드 작업을 **Default free space per page**로 페이지를 재구성하도록 설정하고 **Keep index online while indexing**을 선택하십시오:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/mendix-sql-maintenance-plans/18580655.png" class="no-border" >}}

## 더 읽기

* [SQL Server 데이터베이스 복원 방법](/developerportal/deploy/restoring-a-sql-server-database/)
* [SQL Server 문제 해결 방법](/developerportal/deploy/troubleshooting-sql-server/)
* [새 SQL Server 데이터베이스 설정 방법](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [SQL Server 사용자 설정 방법](/developerportal/deploy/setting-up-a-sql-server-user/)
* [온프레미스 설치 보안 체크리스트 구성 방법](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
* [Microsoft Windows에서 Mendix 배포 방법](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
* [Linux 배포](/developerportal/deploy/linux/)
