---
title: "Microsoft Windows에서 Mendix 라이선스 활성화"
linktitle: "MS Windows: Mendix 라이선스 활성화"
url: /developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/
weight: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

라이선스가 없는 앱에 적용되는 제한 없이 Microsoft Windows 서버에서 앱을 실행하려면 라이선스를 활성화해야 합니다. 라이선스가 없는 앱에 적용되는 제한 사항은 [앱 라이선싱](/developerportal/deploy/licensing-apps-outside-mxcloud/)에 설명되어 있습니다.

제한을 해제하려는 각 환경에 별도의 라이선스를 적용해야 합니다.

## 전제 조건

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 완료하십시오:

* 온프레미스에서 Mendix 인스턴스를 활성화하려면 온프레미스 라이선스가 필요합니다(자세한 내용은 Customer Success Manager에게 문의하십시오)
* Microsoft Windows 서버에 Mendix를 설치하십시오(자세한 내용은 [Microsoft Windows에서 Mendix 배포](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) 참조)
* 라이선스의 기술 담당자로 등록되어야 합니다
    * 이는 일반적으로 라이선스 요청 프로세스에서 수행됩니다
    * 기술 담당자가 아닌 경우 기술 담당자에게 이 사용 방법 문서를 따라 라이선스를 활성화하도록 요청하십시오
* MxID와 비밀번호를 준비하십시오
* 서버에 대한 로그인 접근 및 Mendix Service Console에 대한 접근 권한이 있어야 합니다

## 서버 ID 가져오기 {#retrieve-the-server-id}

이 섹션에서는 라이선스 활성화 프로세스에 사용되는 Mendix 서버의 서버 ID를 가져옵니다. 이 단계는 Microsoft Windows 서버에서 실행해야 합니다.

1. Mendix Service Console을 시작하십시오.
2. 콘솔 왼쪽의 개요에서 앱을 선택하십시오.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398813.png" class="no-border" >}}
3. 라이선스를 활성화하려면 앱이 실행 중이어야 합니다. 앱이 실행 중이지 않으면 **Start service**를 클릭하여 앱을 시작하십시오.
4. **Advanced**를 클릭하고 **Show or add license...** 옵션을 선택하십시오.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398814.png" class="no-border" >}} 
5. **Server ID** 옆의 **Copy to clipboard**를 클릭하십시오.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398815.png" class="no-border" >}} 

## Mendix 지원에서 라이선스 키 받기

이 섹션에서는 서버의 라이선스 키를 요청하기 위해 Mendix 지원 포털에 서버 ID를 제출합니다.

1. 브라우저를 열고 [https://support.mendix.com](https://support.mendix.com)으로 이동하십시오.
2. 다음 중 하나를 수행하십시오:
    * 새 앱의 경우 [Request New App Node](https://newnode.mendix.com/) 앱을 사용하십시오 - 자세한 내용은 [앱 라이선싱](/developerportal/deploy/licensing-apps-outside-mxcloud/) 참조
    * 기존 앱의 경우 **Standard change: Change On-Prem Licensed Node** 템플릿을 사용하여 티켓을 생성하십시오
3. Mendix 지원팀이 제공된 서버 ID를 사용하여 서버의 라이선스 키를 생성합니다.

## 서버에 라이선스 키 입력

이 섹션에서는 Mendix 서버에 라이선스 키를 입력하여 라이선스 활성화 프로세스를 완료합니다.

1. Mendix Service Console **License** 대화 상자로 돌아가십시오([서버 ID 가져오기](#retrieve-the-server-id) 섹션에 설명된 대로).
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398814.png" class="no-border" >}} 
2. **License key** 텍스트 상자에 라이선스 키를 붙여넣으십시오.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398816.png" class="no-border" >}} 
3. **Activate license**를 클릭하십시오.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398817.png" class="no-border" >}} 
4. 라이선스가 활성화되었습니다.

## 더 읽기

* [데이터베이스 사용자 설정](/developerportal/deploy/setting-up-the-database-user/)
* [문제 해결](/developerportal/deploy/troubleshooting-iis/)
* [SQL Server 데이터베이스 복원](/developerportal/deploy/restoring-a-sql-server-database/)
* [SQL Server 문제 해결](/developerportal/deploy/troubleshooting-sql-server/)
* [Mendix SQL 유지 관리 계획](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [새 SQL Server 데이터베이스 설정](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [SQL Server 사용자 설정](/developerportal/deploy/setting-up-a-sql-server-user/)
