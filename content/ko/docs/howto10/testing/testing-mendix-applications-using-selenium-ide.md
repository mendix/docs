---
title: "Selenium IDE를 사용한 Mendix 앱 테스트"
url: /howto10/testing/testing-mendix-applications-using-selenium-ide/
weight: 40
description: "Selenium IDE를 Mozilla Firefox 플러그인으로 다운로드 및 설치하는 방법을 설명합니다."
---

## 소개

Selenium IDE는 브라우저에서 사용자 상호작용을 기록하고 재생하는 Firefox 플러그인입니다.

**이 사용 방법을 마치면 다음을 수행할 수 있습니다:**

* Selenium IDE로 간단한 테스트 스크립트 기록하기
* 고유한 CSS 셀렉터 찾기

## 사전 준비 사항

이 사용 방법에서는 다음을 수행하는 방법을 알려드립니다:

* [Firefox](https://www.mozilla.org/nl/firefox/new/) 다운로드 및 설치
* [Selenium IDE](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/) 다운로드 및 설치 (Selenium IDE가 설치되면 Firefox 플러그인으로 사용 가능)

이 사용 방법에서 사용된 소프트웨어 버전은 다음과 같습니다:

| 소프트웨어 | 이 사용 방법에서 사용된 버전 |
| --- | --- |
| Firefox | 67.0.1 |
| Selenium IDE | 3.8.1 |

{{% alert color="warning" %}}
이 사용 방법의 모든 이미지, 이름 및 단계는 이 버전들을 기반으로 합니다. 다른 버전을 사용하는 경우 화면의 이미지 및/또는 이름이 이 사용 방법에서 사용된 것과 다를 수 있습니다.
{{% /alert %}}

{{% alert color="warning" %}}
이 사용 방법에서는 예시 시나리오로 Company Expenses 앱 템플릿을 사용합니다. 하지만 이 앱 템플릿은 더 이상 Mendix에서 플랫폼 지원을 하지 않습니다. 따라서 이 앱 템플릿을 사용하는 섹션은 참고용으로만 사용할 수 있으며 단계별로 완료할 수는 없습니다.
{{% /alert %}}

## Company Expenses 앱 설치 및 실행

Company Expenses 앱을 설치하고 실행하려면 다음 단계를 따르세요:

1. Mendix Studio Pro를 여세요.
2. 상단 도구 모음에서 Marketplace 아이콘을 클릭하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/app-store.png" class="no-border" >}}

3. *Company Expenses*를 검색한 후 **Company Expenses**를 선택하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/company-ex.png" class="no-border" >}}

4. **Download**를 클릭한 후 **OK**를 클릭하세요. 그러면 Studio Pro에서 Company Expenses 앱이 열립니다.

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/download.png" class="no-border" >}}

5. **Run Locally** ({{% icon name="controls-play" %}})를 클릭한 후 **View App**을 클릭하세요.

## 첫 번째 자동화 테스트 만들기

Selenium IDE의 기록 버튼을 사용하여 자동화 테스트를 만들려면 다음 단계를 따르세요:

1. **Firefox**를 열고 브라우저 도구 모음에서 **Selenium IDE** 아이콘을 클릭하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/icon.png" class="no-border" >}}

2. **Record a new test in a new project**를 선택하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/sel-menu.png" class="no-border" >}}

3. 새 Selenium 프로젝트의 이름을 입력하세요 (예: *CompanyExpenses*).
4. Company Expenses 앱의 로그인 화면 URL (`http://localhost:8080/login.html`)을 입력한 후 **START RECORDING**을 클릭하세요. 새 브라우저 창에서 앱이 열립니다. 이제 Selenium IDE가 기록을 시작합니다.
5. 기본 [관리자 자격 증명](/refguide10/administrator/#administrator-properties)으로 로그인하세요:
    * **User name**: MxAdmin
    * **Password**: 1

6. 로그인 후 앱 우측의 **Sign out**을 클릭하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/sign-out.png" class="no-border" >}}

7. Selenium IDE에서 기록 아이콘을 클릭하여 기록을 중지하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/record.png" class="no-border" >}}

8. 새 테스트의 이름을 입력하세요 (예: *Test1*). Selenium IDE는 이제 다음과 같이 보여야 합니다:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/after-test.png" class="no-border" >}}

9. 이제 테스트가 있으므로 **Run current test** 아이콘을 클릭하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/run-current-test.png" class="no-border" >}}

    통과한 모든 테스트 단계가 녹색으로 표시됩니다:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/green-test.png" class="no-border" >}}

## 테스트 대상 찾기 및 변경

Selenium IDE 테스트 스크립트를 정기적으로 실행하기 전에 편집해야 할 수 있습니다. 이는 예를 들어 HTML 태그 ID가 동적으로 생성되어 동일한 페이지를 실행할 때마다 달라지기 때문에 발생할 수 있습니다.

필요한 경우 Selenium IDE에 GUI 대상(예: 버튼, 텍스트 상자, 데이터 그리드)을 알려주기 위해 올바른 로케이터를 찾아야 합니다. Mendix 요소에 대한 로케이터를 더 쉽게 만들 수 있도록 요소의 클래스에 `mx-name`이 추가됩니다. 문서에서 요소의 위치를 변경하면 스크립트를 다시 작성할 필요가 없습니다.

이 예시 시나리오에서는 실행 중인 테스트가 대상 `id=mxui_widget_Wrapper_23`에서 실패했습니다:

{{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/fail.png" class="no-border" >}}

이 대상을 가진 요소가 Selenium IDE 페이지에 존재하지 않습니다. ID의 숫자가 항상 동일하지 않기 때문입니다. Selenium IDE가 인식할 수 있는 동일한 요소에 대한 다른 대상 셀렉터를 찾아야 합니다. Mendix는 CSS 클래스를 사용하여 Widget과 팝업 창 같은 페이지 콘텐츠를 식별하므로, Selenium IDE에서 이 클래스를 사용하여 페이지를 조작하고 데이터를 확인할 수 있습니다.

Mendix Studio Pro에서 Widget에 이름을 지정할 수 있으며, 이 이름은 HTML 문서에서 `mx-name-` 접두사가 붙은 클래스 이름으로 나타납니다. 예를 들어 `EmployeeGrid`라는 이름의 그리드는 CSS 클래스 `mx-name-EmployeeGrid`를 얻게 됩니다. 이는 모든 Mendix Widget에 해당됩니다.

이 예시 시나리오에서는 다음을 수행해야 합니다:

1. Selenium IDE 테스트가 실패한 위치에 해당하는 Studio Pro의 페이지를 여세요.
2. Selenium IDE 테스트가 실패한 요소를 강조 표시하세요.
3. **User name** 필드의 **Name** 속성은 **textBox10**입니다. 모든 Mendix 요소는 자동으로 CSS 클래스 `mx-name-[Name]`을 가지므로, 이 필드는 CSS 클래스 `mx-name-textBox10`을 가집니다.

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/name.png" class="no-border" >}}

4. 브라우저의 개발자 도구를 열고 (Selenium IDE 테스트가 실패한 위치에서 앱이 여전히 열려 있는 상태로) `mx-name-textBox10`을 검색하세요. 일치하는 노드가 있으므로 **User name** 필드에 대한 고유한 셀렉터를 확인하였습니다.

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/inspector.png" class="no-border" >}}

5. Selenium IDE에서 **Target** `id=mxui_widget_Wrapper_23`을 `css=.mx-name-textBox6`으로 변경하세요:

    {{< figure src="/attachments/howto10/testing/testing-mendix-applications-using-selenium-ide/change.png" class="no-border" >}}

6. **Run current test** 아이콘을 클릭하여 테스트가 통과하는지 확인하세요.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto10/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto10/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto10/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/developerportal/deploy/monitoring-mendix-using-jmx/)

다음 유용한 링크를 통해 이 주제에 대해 더 자세히 알아보세요:

* [Selenium IDE Documentation](https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started)
