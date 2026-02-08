---
title: "Selenium IDE를 사용한 Mendix 앱 테스트"
url: /howto9/testing/testing-mendix-applications-using-selenium-ide/
weight: 40
description: "Selenium IDE를 Mozilla Firefox 플러그인으로 다운로드하고 설치하는 방법을 설명합니다."
---

## 소개

Selenium IDE는 브라우저에서 사용자 상호 작용을 녹화하고 재생하는 Firefox 플러그인입니다.

**이 사용 방법을 사용한 후 다음을 할 수 있습니다:**

* Selenium IDE로 간단한 테스트 스크립트 녹화하기
* 고유한 CSS 셀렉터 찾기

## 전제 조건

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* [Firefox](https://www.mozilla.org/nl/firefox/new/) 다운로드 및 설치
* [Selenium IDE](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/) 다운로드 및 설치(Selenium IDE가 설치되면 Firefox 플러그인으로 사용 가능)

이 사용 방법에서 사용된 소프트웨어 버전:

| 소프트웨어 | 이 사용 방법에서 사용된 버전 |
| --- | --- |
| Firefox | 67.0.1 |
| Selenium IDE | 3.8.1 |

{{% alert color="warning" %}}
이 사용 방법의 모든 이미지, 이름 및 단계는 이러한 버전을 기반으로 합니다. 다른 버전을 사용하는 경우 화면의 이미지 및/또는 이름이 이 사용 방법에서 사용된 것과 다를 수 있습니다.
{{% /alert %}}

{{% alert color="warning" %}}
이 사용 방법은 예제 시나리오를 위해 Company Expenses 앱 템플릿을 사용합니다. 그러나 이 앱 템플릿은 더 이상 Mendix에서 플랫폼 지원을 하지 않습니다. 따라서 이 앱 템플릿을 사용하는 섹션은 참조용으로만 사용할 수 있으며 단계별로 완료할 수 없습니다.
{{% /alert %}}

## Company Expenses 앱 설치 및 실행하기

Company Expenses 앱을 설치하고 실행하려면 다음 단계를 따르십시오:

1. Mendix Studio Pro를 여십시오.
2. 상단 도구 모음에서 Marketplace 아이콘을 클릭하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/app-store.png" class="no-border" >}}

3. *Company Expenses*를 검색한 다음 **Company Expenses**를 선택하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/company-ex.png" class="no-border" >}}

4. **Download**를 클릭한 다음 **OK**를 클릭하십시오. 이렇게 하면 Studio Pro에서 Company Expenses 앱이 열립니다.

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/download.png" class="no-border" >}}

5. **Run Locally** ({{% icon name="controls-play" %}})를 클릭한 다음 **View App**을 클릭하십시오.

## 첫 번째 자동화 테스트 생성하기

Selenium IDE의 녹화 버튼을 사용하여 자동화 테스트를 생성하려면 다음 단계를 따르십시오:

1. **Firefox**를 열고 브라우저 도구 모음에서 **Selenium IDE** 아이콘을 클릭하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/icon.png" class="no-border" >}}

2. **Record a new test in a new project**를 선택하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/sel-menu.png" class="no-border" >}}

3. 새 Selenium 프로젝트의 이름을 입력하십시오(예: *CompanyExpenses*).
4. Company Expenses 앱의 로그인 화면 URL(`http://localhost:8080/login.html`)을 입력한 다음 **START RECORDING**을 클릭하십시오. 새 브라우저 창에서 앱이 열립니다. Selenium IDE가 이제 녹화 중입니다.
5. 기본 [관리자 자격 증명](/refguide9/administrator/#administrator-properties)으로 로그인하십시오:
    * **User name**: MxAdmin
    * **Password**: 1

6. 로그인한 후, 앱 오른쪽에서 **Sign out**을 클릭하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/sign-out.png" class="no-border" >}}

7. Selenium IDE에서 녹화 아이콘을 클릭하여 녹화를 중지하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/record.png" class="no-border" >}}

8. 새 테스트의 이름을 입력하십시오(예: *Test1*).

9. 이제 테스트가 있으므로 **Run current test** 아이콘을 클릭하십시오:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/run-current-test.png" class="no-border" >}}

    통과한 모든 테스트 단계는 녹색으로 표시됩니다:

    {{< figure src="/attachments/howto9/testing/testing-mendix-applications-using-selenium-ide/green-test.png" class="no-border" >}}

## 테스트 대상 찾기 및 변경하기

정기적으로 실행하기 전에 Selenium IDE 테스트 스크립트를 편집해야 할 수 있습니다. 예를 들어, HTML 태그 ID가 동적으로 생성되어 동일한 페이지를 실행할 때마다 달라지는 경우 이런 상황이 발생할 수 있습니다.

필요한 경우, Selenium IDE가 작동해야 할 GUI 대상(예: 버튼, 텍스트 상자, 데이터 그리드)을 알려주기 위해 올바른 로케이터를 찾아야 합니다. Mendix 요소에 대한 로케이터를 쉽게 생성할 수 있도록 `mx-name`이 요소의 클래스에 추가됩니다. 문서에서 요소의 위치를 변경하더라도 스크립트를 다시 작성할 필요가 없습니다.

위젯에는 Mendix Studio Pro에서 이름을 지정할 수 있으며, 이 이름은 HTML 문서에서 `mx-name-`이 접두사로 붙은 클래스 이름으로 나타납니다. 예를 들어, `EmployeeGrid`라는 이름의 그리드는 CSS 클래스 `mx-name-EmployeeGrid`를 받습니다. 이는 모든 Mendix 위젯에 적용됩니다.

필요한 경우:

1. Selenium IDE 테스트가 실패한 위치에 해당하는 Studio Pro의 페이지를 여십시오.
2. 실패한 요소를 강조 표시하십시오.
3. 요소의 **Name** 속성을 확인하십시오. 모든 Mendix 요소는 자동으로 CSS 클래스 `mx-name-[Name]`을 받습니다.
4. 브라우저의 개발자 도구에서 해당 클래스 이름을 검색하여 고유한 셀렉터를 확인하십시오.
5. Selenium IDE에서 **Target**을 적절한 CSS 셀렉터로 변경하십시오.
6. **Run current test** 아이콘을 클릭하여 테스트가 통과하는지 확인하십시오.

## 더 읽기

* [TestNG로 자동화 테스트 생성하기](/howto9/testing/create-automated-tests-with-testng/)
* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto9/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)

이 주제에 대해 더 알아보려면 다음 유용한 링크를 참조하십시오:

* [Selenium IDE Documentation](https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started)
