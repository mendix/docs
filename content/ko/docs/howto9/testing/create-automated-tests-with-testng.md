---
title: "TestNG로 자동화 테스트 생성하기"
url: /howto9/testing/create-automated-tests-with-testng/
weight: 50
description: "TestNG 테스트 파일 생성, TestNG로 자동화 테스트 실행 및 TestNG로 보고서 생성 방법을 설명합니다."
---

## 소개

자동화 테스트는 테스트 유형에 따라 다양한 도구로 생성할 수 있습니다. 통합 테스트는 [SoapUI](/howto9/testing/testing-web-services-using-soapui/)로, 단위 테스트는 [Unit Testing](/refguide9/testing-microflows-with-unit-testing-module/) 모듈로, UI 테스트는 [Selenium IDE](/howto9/testing/testing-mendix-applications-using-selenium-ide/)로 생성할 수 있습니다. Selenium IDE로 자동화 지원 탐색 테스트를 돕는 스크립트를 생성할 수 있습니다. 강력한 브라우저 기반 테스트를 생성하려면 Selenium과 함께 테스팅 프레임워크를 사용하는 것을 고려해야 합니다.

TestNG는 Selenium을 구동하는 데 사용할 수 있는 Java 테스팅 프레임워크입니다. 이 사용 방법에서는 TestNG로 자동화 테스트를 생성하는 방법을 배웁니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* TestNG 테스트 파일 생성하기
* TestNG로 자동화 테스트 실행하기
* TestNG로 보고서 생성하기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* [Eclipse](https://www.eclipse.org/downloads/) 다운로드 및 설치
* Java용 [Selenium Client and WebDriver](https://www.selenium.dev/downloads/) 다운로드

{{% alert color="warning" %}}
이 사용 방법은 [세 번째 테스트 메서드 추가](#third) 섹션부터 예제 시나리오를 위해 Company Expenses 앱 템플릿을 사용합니다. 그러나 이 앱 템플릿은 더 이상 Mendix에서 플랫폼 지원을 하지 않습니다. 따라서 이 앱 템플릿을 사용하는 섹션은 참조용으로만 사용할 수 있으며 단계별로 완료할 수 없습니다.
{{% /alert %}}

## Java 프로젝트 생성하기

이 장에서는 TestNG 플러그인을 설치하고 TestNG 및 Selenium 라이브러리를 포함하는 Java 프로젝트를 Eclipse에서 생성합니다:

1. Eclipse를 여십시오.
2. [TestNG 다운로드](https://testng.org/doc/download.html)의 **Eclipse plug-in** > **Install from update site** 섹션의 지침을 따르십시오.
3. 변경 사항이 적용되도록 Eclipse를 재시작하십시오.
4. **File** > **New** > **Java Project**를 선택하십시오.
5. **Project name**에 *MyFirstTestNGProject*를 입력하고 **Next**를 클릭하십시오.
6. **Libraries** 탭을 선택하고 **Add Library**를 클릭하십시오.
7. **TestNG**를 선택하고 **Next**를 클릭하십시오.
8. **Finish**를 클릭하여 이 프로젝트에 기본 TestNG 라이브러리를 설정하십시오.
9. **Add External JARs...**를 클릭하고 Selenium JAR 파일을 저장한 위치로 이동하십시오.
10. **selenium-[version]** 및 **libs** 폴더 내의 모든 JAR 파일을 추가하십시오:

    {{< figure src="/attachments/howto9/testing/create-automated-tests-with-testng/18580403.png" class="no-border" >}}

11. **Finish**를 클릭하여 Java 프로젝트를 생성하십시오. **Package Explorer**에 **MyFirstTestNGProject**가 표시됩니다:

    {{< figure src="/attachments/howto9/testing/create-automated-tests-with-testng/18580401.png" class="no-border" >}}

프로젝트 설정이 완료되었습니다!

## TestNG 파일 생성하기

새 TestNG 파일을 생성하려면 다음 단계를 따르십시오:

1. **src** 폴더를 마우스 오른쪽 버튼으로 클릭하고 **New** > **Other...**를 선택하십시오:
2. **TestNG class**를 선택한 다음 **Next**를 클릭하십시오:

    {{< figure src="/attachments/howto9/testing/create-automated-tests-with-testng/18580398.png" class="no-border" >}}

3. **Browse...**를 클릭하여 소스 폴더를 선택하고, **MyFirstTestNGProject** > **src**를 선택한 다음 **OK**를 클릭하십시오.
4. 다음 정보를 입력하십시오:
    * **Package name**: *myfirsttestngpackage*
    * **Class name**: *MyFirstTestNGFile*
    * **@BeforeTest**: true
    * **@AfterTest**: true

    {{< figure src="/attachments/howto9/testing/create-automated-tests-with-testng/18580393.png" class="no-border" >}}

5. **Finish**를 클릭하십시오. 첫 번째 TestNG 파일의 템플릿이 자동으로 생성됩니다:

    {{< figure src="/attachments/howto9/testing/create-automated-tests-with-testng/18580392.png" class="no-border" >}}

    `@Test` 어노테이션은 그 아래의 메서드가 테스트 케이스임을 나타냅니다. `@BeforeTest` 어노테이션은 그 아래의 메서드가 첫 번째 테스트 케이스 전에 실행됨을 나타냅니다. `@AfterTest` 어노테이션은 그 아래의 메서드가 마지막 테스트 케이스 후에 실행됨을 나타냅니다.

## 테스트 케이스 생성하기

이제 테스트 케이스를 코딩하겠습니다.

### WebDriver 추가하기

WebDriver에 사용할 변수를 생성하려면 다음 단계를 따르십시오:

1. 다음을 검색하십시오:

    ```java
    public class MyFirstTestNGFile {
    ```

2. 다음 줄에 아래 코드를 추가하십시오. 이렇게 하면 WebDriver 유형의 `driver` 변수가 생성됩니다:

    ```java
    public WebDriver driver;
    ```

3. <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>를 눌러 import를 정리하십시오.

### BeforeTest 메서드 추가하기

`@BeforeTest` 어노테이션은 그 아래의 메서드가 첫 번째 테스트 케이스 전에 실행됨을 나타냅니다. 첫 번째 테스트 케이스 전에 Firefox 브라우저를 열기 위해 다음 단계를 따르십시오:

1. `beforeTest` 메서드에 `driver = new FirefoxDriver();`를 추가하십시오. 이렇게 하면 Firefox 드라이버의 새 인스턴스가 생성되고 Firefox 브라우저가 열립니다.

### AfterTest 메서드 추가하기

마지막 테스트 케이스 후 브라우저를 닫으려면 `afterTest` 메서드에 `driver.close();`를 추가하십시오.

### 첫 번째 테스트 메서드 추가하기

브라우저에서 URL을 여는 첫 번째 테스트 메서드를 추가하십시오:

```java
@Test(priority=1)
public void openApp() {
driver.get("http://localhost:8080/index.html");
}
```

기본적으로 `@Test`로 어노테이션된 메서드는 알파벳 순서로 실행됩니다. `priority` 매개변수를 사용하여 다른 순서로 메서드를 실행할 수 있습니다.

### 두 번째 테스트 메서드 추가하기

로그인 창에서 로그인하기 위한 두 번째 테스트 메서드를 추가하십시오:

```java
@Test(priority=2)
public void login() {
    driver.findElement(By.cssSelector("#usernameInput")).sendKeys("MxAdmin");
    driver.findElement(By.cssSelector("#passwordInput")).sendKeys("1");
    driver.findElement(By.cssSelector("#loginButton")).click();
}
```

### 세 번째 테스트 메서드 추가하기 {#third}

Expenses 탭을 여는 세 번째 테스트 메서드를 추가하십시오:

```java
@Test(priority=3)
public void openExpensesTab() {
    WebDriverWait wait = new WebDriverWait(driver, 10);
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".mx-name-tabPage4"))).click();
}
```

### 네 번째 테스트 메서드 추가하기

새 경비를 생성하는 네 번째 테스트 메서드를 추가하십시오:

```java
@Test(priority=4)
public void createExpense() {
	driver.findElement(By.cssSelector(".mx-name-newButton3")).click();
	driver.findElement(By.cssSelector(".mx-window-active .mx-name-textBox6 input")).clear();
	driver.findElement(By.cssSelector(".mx-window-active .mx-name-textBox6 input")).sendKeys("15.00");
	driver.findElement(By.cssSelector(".mx-window-active .mx-name-referenceSelector1 option:nth-child(2)")).click();
	driver.findElement(By.cssSelector(".mx-window-active .mx-name-saveButton1")).click();
}
```

### 다섯 번째 테스트 메서드 추가하기

로그아웃하는 다섯 번째 테스트 메서드를 추가하십시오:

```java
@Test(priority=5)
public void signOut() {
	driver.findElement(By.cssSelector(".mx-name-signOutButton1")).click();
}
```

## 테스트 실행하기 {#RuntheTest}

1. **MyFirstTestNGProject** 폴더를 마우스 오른쪽 버튼으로 클릭하십시오.
2. **Run as** > **TestNG Test**를 선택하십시오:

    {{< figure src="/attachments/howto9/testing/create-automated-tests-with-testng/18580385.png" class="no-border" >}}

    테스트 결과가 콘솔 창과 TestNG 결과 창에 표시됩니다.

## 테스트 보고서

TestNG는 HTML 형식으로 보고서를 생성합니다. 보고서를 테스트하려면 다음 단계를 따르십시오:

1. **MyFirstTestNGProject** 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Refresh**를 선택하십시오. test-output 폴더가 생성됩니다.
2. **test-output** 폴더를 여십시오.
3. **index.html** 파일을 마우스 오른쪽 버튼으로 클릭하십시오.
4. **Open with** > **Web Browser**를 선택하십시오.

## 테스트 스위트 생성하기

특정 테스트만 실행하려면 테스트 스위트를 직접 생성해야 합니다.

1. **src** 폴더를 마우스 오른쪽 버튼으로 클릭하고 **New** > **Other**를 선택하십시오.
2. **XML** 폴더를 열고 **XML File**을 선택하십시오.
3. **Next**를 클릭하십시오.
4. 파일 이름을 *MyFirstTestSuite.xml*로 변경하십시오.
5. **Finish**를 클릭하십시오.
6. **Source** 탭을 클릭하고 다음 코드를 입력하십시오:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <suite name="MyFirstTestSuite">
    	<test name="Test1">
    		<classes>
    			<class
    				name="myfirsttestngpackage.MyFirstTestNGFile" />
    		</classes>
    	</test>
    </suite>
    ```

7. **MyFirstTestSuite.xml** 파일을 마우스 오른쪽 버튼으로 클릭하고 **Run as** > **1 TestNG Suite**를 선택하십시오.

첫 번째 TestNG Suite를 생성했습니다!

## @Parameters를 사용하여 여러 브라우저에서 테스트 스위트 실행하기

다른 브라우저에서도 기능이 예상대로 작동하는지 확인하려면, 멀티 브라우저 테스팅을 수행해야 합니다. TestNG를 사용하면 다른 브라우저에서 동일한 테스트를 매우 쉽게 수행할 수 있습니다.

1. ChromeDriver를 다운로드하십시오.
2. IE Driver를 구성하십시오.
3. Eclipse에서 `@BeforeTest` 메서드에 `@Parameters("browser")` 어노테이션을 추가하고 브라우저 매개변수에 따라 적절한 드라이버를 시작하도록 코드를 변경하십시오.
4. **MyFirstTestSuite.xml**을 업데이트하여 각 브라우저에 대한 테스트를 추가하십시오:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <suite name="MyFirstTestSuite">
    	<test name="ChromeTest">
    		<parameter name="browser" value="chrome" />
    		<classes>
    			<class name="myfirsttestngpackage.MyFirstTestNGFile" />
    		</classes>
    	</test>
    	<test name="FirefoxTest">
    		<parameter name="browser" value="firefox" />
    		<classes>
    			<class name="myfirsttestngpackage.MyFirstTestNGFile" />
    		</classes>
    	</test>
    </suite>
    ```

5. **MyFirstTestSuite.xml** 파일을 마우스 오른쪽 버튼으로 클릭하고 **Run as** > **TestNG Suite**를 선택하십시오.

TestNG로 첫 번째 자동화 크로스 브라우저 테스트를 생성했습니다!

이제 TestNG 테스트 파일을 생성하고, 테스트 스위트를 생성하고, 여러 브라우저에서 자동화 테스트를 실행하는 방법을 알게 되었습니다.

즐거운 테스팅 되세요!

## 더 읽기

* [Selenium IDE를 사용한 Mendix 애플리케이션 테스트](/howto9/testing/testing-mendix-applications-using-selenium-ide/)
