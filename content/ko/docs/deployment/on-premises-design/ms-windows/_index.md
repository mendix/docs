---
title: "Microsoft Windows"
url: /developerportal/deploy/deploy-mendix-on-microsoft-windows/
description: "Microsoft Windows를 실행하는 시스템에서 Mendix를 설치하고 구성하는 방법"
weight: 50
aliases:
    - /deployment/on-premises/deploy-mendix-on-microsoft-windows.html
    - /deployment/on-premises/deploy-mendix-on-microsoft-windows
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 문서에서는 Microsoft(MS) Windows를 실행하는 시스템에서 Mendix 소프트웨어의 설치 및 구성을 설명합니다. 다음 내용을 다룹니다:

* Mendix Service Console 설치

* Mendix 앱 배포

* MS Internet Information Services(IIS) 서버 구성

## 전제 조건 {#Prerequisites}

Mendix 애플리케이션을 실행하기 위한 환경을 설정하려면 Mendix 소프트웨어를 설치해야 합니다. 또한 실행할 각 Mendix 애플리케이션에 대해 별도의 사용자(서비스) 계정을 만들어야 합니다.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/ms-windows-setup.png" >}}

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 확인하십시오:

* MS Windows Server 2012 이상
    * Mendix Service Console은 [MS Windows Server 2012의 최소 하드웨어 요구 사항](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/jj134246(v=ws.11)#system-requirements)에서 Mendix 앱을 실행하고 배포합니다. 그러나 앱의 기능에 따라 사양을 늘려야 할 수 있습니다. 직접 비교할 수는 없지만, Mendix Cloud에 배포할 때 사용되는 [클라우드 리소스 팩](/developerportal/deploy/mendix-cloud-deploy/#resource-pack)을 비교 정보로 참조하십시오.
* .NET Framework 4.7.2 이상
* IIS 8 이상, 다음 서비스 역할이 활성화되어야 합니다:

    * IIS Management Console
    * Default Document
    * Static Content

* MS Application Request Routing(ARR) 설치(자세한 정보는 [Application Request Routing](https://www.iis.net/downloads/microsoft/application-request-routing) 참조)
* MS IIS URL Rewrite 설치(자세한 정보는 [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite) 참조)
* Mendix Server Distribution에 따른 Java Runtime 버전. 자세한 내용은 [시스템 요구 사항](/refguide/system-requirements/#java)을 참조하십시오.
* Mendix 프로젝트의 Mendix Deployment Archive(MDA)
* Mendix Studio Pro 버전에 해당하는 Mendix 서버 배포([Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/) 참조)
* 충분한 보안 권한을 가진 데이터베이스

    * 적합한 데이터베이스 서버는 MariaDB, MS SQL Server, MySQL, Oracle Database 및 PostgreSQL입니다. 자세한 내용은 [시스템 요구 사항](/refguide/system-requirements/#databases)을 참조하십시오

* *"서비스로 로그온"* 로컬 보안 정책이 설정된 로컬 또는 도메인 사용자

## Mendix Service Console 설치 {#service-console}

Mendix Service Console을 다운로드하고 설치하려면 다음 단계를 따르십시오:

1. Marketplace에서 최신 버전의 [Mendix Service Console](https://marketplace.mendix.com/link/component/223425) 모듈을 다운로드하십시오.
2. 설치 마법사를 따라 Mendix Service Console을 설치하십시오.

3. 설치를 완료한 후 Mendix Service Console을 시작하십시오. 애플리케이션을 처음 실행하면 대화 상자가 표시됩니다(앱 및 서버 파일에 대한 유효한 위치가 구성되지 않은 경우 항상 표시됩니다):

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/service_console_first_run.png" >}}

4. **Yes**를 클릭하십시오. **Preferences** 대화 상자가 표시됩니다:

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/18580730.png" >}}

5. **Preferences** 대화 상자에서 **Location of apps and server files**를 입력하십시오. 이 위치는 앱 파일과 Mendix 서버 파일을 저장하는 데 사용됩니다. Mendix는 다음과 같은 디렉토리를 사용하는 것을 권장합니다:

    * 시스템 파티션에 있지 않은 디렉토리
    * 보안 권한을 쉽게 제어할 수 있는 디렉토리

    앱 디렉토리는 네 개의 하위 디렉토리로 구성됩니다:

    * Backup - 모델 업그레이드로 인한 데이터베이스 변경 사항을 저장합니다
    * Log - 모든 애플리케이션 로그 파일을 저장합니다
    * Project - 모든 애플리케이션 파일을 포함합니다. 이 디렉토리 내에서 업로드된 모든 파일을 포함하는 data/files 디렉토리를 찾을 수 있습니다
    * Service - Windows Services를 구성하기 위한 파일을 포함합니다

    또한, 애플리케이션 구성이 포함된 `Settings.yaml`이라는 파일이 있습니다.

## Mendix 앱 배포

Mendix Service Console을 사용하여 Mendix 앱을 배포하려면 다음 단계를 따르십시오:

1. Mendix Service Console을 시작하십시오.
2. **Add app**을 클릭하여 새 앱을 추가하십시오. 새 앱을 구성하기 위한 마법사가 나타납니다.
3. **Service Settings**를 다음과 같이 구성하십시오:

    * **Service name** - 이 이름은 기존의 모든 Windows 서비스 내에서 고유해야 합니다
    * **Display name** - Mendix Service Console의 왼쪽 표시줄에서 앱의 도구 설명으로 표시되거나 Windows 서비스 목록에서 열로 표시되는 앱 설명
    * **Description** - Mendix Service Console에 표시되는 애플리케이션 설명
    * **Startup type** - 서버 시작 시 앱을 자동으로 시작할지, 지연 시작할지, 수동으로 시작할지 또는 비활성화할지 선택하십시오
    * **User name** 및 **Password** - 앱은 항상 여기에 지정된 사용자 계정으로 실행되며, 이 사용자 계정으로 서비스가 설치됩니다(자세한 내용은 [전제 조건](#Prerequisites) 참조)

4. **Next >**를 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/18580728.png" >}}

5. **Project Files** 화면에서 **Select app…**을 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/service_console_selectapp.png" >}}

6. [Mendix Studio Pro에서 생성된](/refguide/create-deployment-package-dialog/) 애플리케이션 로직이 포함된 **MDA** 파일을 선택하십시오. MDA 파일 설치 후 필요한 Mendix 서버(Mendix Runtime) 버전이 표시됩니다.

7. **Database Settings**를 구성하십시오:

    * **Type** - 데이터베이스 서버 유형
    * **Host** - 데이터베이스 서버의 IP 주소 또는 호스트 이름
    * **Name** - 데이터베이스 이름
    * **User name** 및 **Password** - 데이터베이스 사용자 이름 및 비밀번호

8. **Next >**를 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/18580726.png" >}}

9. **Common Configuration** 화면에서 기본 설정을 유지하십시오. 이 설정은 애플리케이션 설정에 필요한 경우에만 변경해야 합니다.

10. **Finish**를 클릭하고 애플리케이션을 시작하십시오.

## Microsoft Internet Information Services 서버 구성{#configure-msiis}

MS IIS 서버를 구성하려면 아래 섹션의 단계를 따르십시오.

### ARR에서 프록시 활성화

ARR 내에서 프록시 기능을 사용하려면 IIS에서 이 기능을 활성화해야 합니다. ARR에서 프록시를 활성화하려면 다음 단계를 따르십시오:

1. IIS Manager를 시작하십시오.
2. **Connections** 창에서 **Server**를 선택하십시오.
3. **Application Request Routing** 기능을 여십시오.
4. 화면 오른쪽의 **Actions** 창에서 **Server Proxy Settings**를 클릭하십시오.
5. **Enable proxy**를 선택하고 **Actions** 창에서 **Apply**를 클릭하십시오.

### 웹사이트 만들기

웹사이트를 만들려면 다음 단계를 따르십시오:

1. IIS Manager를 여십시오.
2. **Connections** 창에서 트리의 **Sites** 노드를 클릭하십시오. **Default Website** 또는 다른 웹사이트가 **Sites** 아래에 있는 경우 사용 중인지 확인하십시오.
3. **Sites**를 마우스 오른쪽 버튼으로 클릭하고 **Add Web Site**를 선택하십시오.
4. **Add Web Site** 대화 상자에서 **Web site name** 필드에 웹사이트의 친숙한 이름을 입력하십시오.
5. **Physical path** 필드에 애플리케이션-프로젝트-웹 폴더의 물리적 경로를 입력하십시오(예: *D:\Mendix\Apps\Application\Project\Web*).
6. **Type** 목록에서 웹사이트의 **Protocol**을 선택하십시오.
7. IP 주소 상자 필드의 기본값은 **All Unassigned**입니다. 웹사이트에 고정 IP 주소를 지정해야 하는 경우 **IP address** 상자에 주소를 입력하십시오.
8. **Port** 필드에 포트 번호를 입력하십시오.
9. 이 IIS 서버에서 다른 웹사이트가 이미 실행 중인 경우 **Host name** 필드에 이 웹사이트의 원하는 호스트 이름을 입력하십시오.
10. **OK**를 클릭하십시오.

### HTTPS 바인딩 추가

1. 웹사이트에 사용할 인증서가 Windows Certificate Store에 추가되었는지 확인하십시오.
2. 방금 만든 웹사이트를 마우스 오른쪽 버튼으로 클릭하고 **Edit Bindings...**를 선택하십시오.
3. **Add...**를 클릭하십시오.
4. **Type** 필드에서 **https**를 선택하십시오.
5. **Host name** 필드에 이 웹사이트에 사용할 호스트 이름을 입력하십시오.
6. 사용할 인증서가 SNI 인증서인 경우 **Require Server Name Indication** 상자를 선택하십시오.
7. 드롭다운 상자에서 또는 **Select...** 대화 상자를 통해 웹사이트의 인증서를 선택하십시오.
8. **OK**를 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/iis_add_https_binding.png" >}}

### MIME 유형 구성

MIME 유형을 구성하려면 다음 단계를 따르십시오:

1. IIS Manager를 열고 관리할 웹사이트로 이동하십시오.
2. **Features View**에서 **MIME Types**를 더블 클릭하십시오.
3. **Actions** 창에서 **Add**를 클릭하십시오.
4. **Add MIME Type** 대화 상자에서 다음 파일 유형을 추가하십시오:

    * **File name extension**: *.mxf*
    * **MIME type**: *text/xml*

5. IIS 버전에 따라 JSON의 MIME 유형이 기본적으로 존재하거나 존재하지 않을 수 있습니다. *.json*이 이미 목록에 있는지 확인하고, 없는 경우 다른 MIME 유형을 추가하십시오:

    * **File name extension**: *.json*
    * **MIME type**: *application/json*

6. **OK**를 클릭하십시오.

### URL Rewrite 구성

{{% alert color="info" %}}
이 지침에서는 기본 포트인 포트 8080을 사용합니다. Mendix 앱이 구성된 포트를 사용하십시오.
{{% /alert %}}

#### 리버스 프록시 인바운드 규칙{#reverse-proxy-rules}

다음 요청 핸들러를 구성하기 위해 여러 규칙을 추가해야 합니다.

Rule | Name | Pattern | Rewrite URL
:--- | :--- | :--- | :---
1 | xas | `^(xas/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
2 | ws | `^(ws/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
3 | ws-doc | `^(ws-doc/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
4 | file | `^(file)(.*)` | `http://localhost:8080/{R:1}{R:2}`
5 | link | `^(link/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
6 | rest | `^(rest/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
7 | rest-doc | `^(rest-doc/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
8 | debugger | `^(debugger/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
9 | oauth | `^(oauth/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
10 | p | `^(p/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
11 | manifest | `^(manifest.webmanifest)(.*)` | `http://localhost:8080/{R:1}{R:2}`

{{% alert color="info" %}}
일부 패턴에는 정확한 경로를 일치시켜야 할 때 후행 슬래시 `/`가 포함됩니다. 예를 들어, `ws-doc/` 패턴은 `/ws-doc/mydoc/1234`와 일치하지만 `/ws-documentation/`과 같은 유사한 접두사와는 일치하지 않습니다.

또한, 예시 경로(`/ws-doc/mydoc/1234`)에는 브라우저 URL이 항상 슬래시로 시작하기 때문에 선행 슬래시가 포함되어 있지만, IIS 재작성 패턴에는 이 슬래시가 포함되지 않습니다. 이는 웹 서버가 URL 경로를 일치시키기 위해 처리하기 전에 선행 슬래시를 제거하기 때문입니다.
{{% /alert %}}

아래 지침을 따르고 *[Name]*을 위 표의 규칙 이름으로, *[Pattern]*을 정규 표현식 패턴으로, *[Rewrite URL]*을 Rewrite URL로 교체하십시오.

1. IIS Manager를 열고 관리할 웹사이트로 이동하십시오.
2. **Features View**에서 **URL Rewrite**를 더블 클릭하십시오.
3. 화면 오른쪽의 **Actions** 창에서 **Add rule(s)...**를 클릭하여 새 재작성 규칙을 추가하십시오.
4. **Inbound Rules** 섹션에서 *Blank rule*을 더블 클릭하십시오.
5. **Name** 필드에 위 표의 *[Name]*을 입력하십시오.
6. **Match URL** 섹션에서 **Requested URL**을 *Matches the Pattern*으로 설정하십시오.
7. **Using**을 *Regular Expressions*로 설정하십시오.
8. **Pattern** 필드에 `[Pattern]`을 입력하십시오.
9. **Action** 섹션에서 **Action type**을 *Rewrite*로 설정하십시오.
10. **Rewrite URL** 필드에 `[Rewrite URL]`을 입력하십시오(위 규칙에서 이는 항상 `http://localhost:8080/{R:1}{R:2}`입니다).
11. **Append query string** 체크박스가 *true*(선택됨)로 설정되어 있는지 확인하십시오.
12. **Apply**를 클릭하십시오.
13. **Back to Rules**를 클릭하십시오.
14. 3단계부터 반복하여 필요한 모든 규칙을 추가하십시오.

동일한 방식으로 추가 요청 핸들러를 추가할 수도 있습니다. 그러나 아래에 설명된 *add x-forwarded-proto header* 규칙 *이후에* 와야 합니다.

#### *add x-forwarded-proto header* 규칙

이는 게시된 REST 서비스의 Swagger 문서에 접근할 수 있도록 하는 데 필요합니다.

{{% alert color="info" %}}
이것은 첫 번째 규칙이어야 합니다. 재작성 규칙 다음에 설명되어 있으며, 이는 맨 위로 이동하여 추가 규칙이 실수로 그 위에 배치되지 않도록 하기 위함입니다.
{{% /alert %}}

1. **View Server Variables**를 클릭하십시오.
2. 서버 변수 **HTTP_X_FORWARDED_PROTO**가 목록에 있는지 확인하십시오. 있다면 7단계로 건너뛰십시오.
3. **Action** 페이지에서 **Add**를 클릭하여 서버 변수를 추가하십시오.
4. **Server variable name** *HTTP_X_FORWARDED_PROTO*를 입력하십시오.
5. **OK**를 클릭하십시오.
6. **Back to Rules**를 클릭하십시오.
7. **Add rule(s)...**를 클릭하십시오.
8. **Blank Rule**을 클릭하십시오.
9. **Name**을 *add x-forwarded-proto header*로 설정하십시오.
10. **Match URL** 섹션에서 **Requested URL**을 *Matches the Pattern*으로 설정하십시오.
11. **Using**을 *Regular Expressions*로 설정하십시오.
12. **Pattern**을 `.*`로 설정하십시오.
13. **Ignore Case**를 *true*(선택됨)로 설정하십시오.
14. **Server Variables** 섹션에서 **Add**를 클릭하십시오.
15. 서버 변수 이름 **HTTP_X_FORWARDED_PROTO**를 선택하십시오.
16. **Value**를 *https*로 설정하십시오.
17. **OK**를 클릭하십시오.
18. **Action** 섹션에서 **None**을 선택하십시오.
19. **Stop processing of subsequent rules**를 *false*(선택 해제)로 설정하십시오.
20. **Actions** 창에서 **Apply**를 클릭하여 규칙을 저장하십시오.
21. **Back to Rules**를 클릭하십시오.
22. 새로 생성된 *add x-forwarded-proto header* 규칙을 선택하고 Action 창의 **Move Up** 버튼을 사용하여 규칙을 목록의 맨 위로 이동하십시오.

#### HTTP를 HTTPS로 리다이렉트 (선택 사항)

5.3단계에서 HTTPS가 구성된 경우 모든 암호화되지 않은 HTTP 트래픽을 HTTPS로 리다이렉트하는 것이 좋습니다. 이를 구성하려면 다음 단계를 따르십시오:

1. **Add rule(s)...**를 클릭하십시오.
2. **Blank Rule**을 클릭하십시오.
3. **Name**을 *Redirect to HTTPS*로 설정하십시오.
4. **Match URL** 섹션에서 **Requested URL**을 *Matches the Pattern*으로 설정하십시오.
5. **Using**을 *Regular Expressions*로 설정하십시오.
6. **Pattern**을 `(.*)`로 설정하십시오.
7. **Ignore Case**를 *true*(선택됨)로 설정하십시오.
8. **Conditions** 섹션에서 **Add...**를 클릭하십시오.

    1. **Condition input** 필드에 `{HTTPS}`를 입력하십시오.
    2. **Check if input string**을 *Matches the Pattern*으로 설정하십시오.
    3. **Pattern** 필드에 `off`를 입력하십시오.
    4. **Ignore case**를 *true*(선택됨)로 설정하십시오.
    5. **OK**를 클릭하십시오.

9. **Action** 섹션에서 **Action type**을 *Redirect*로 설정하십시오.
10. **Redirect URL** 필드에 `https://{HTTP_HOST}/{R:1}`을 입력하십시오.
11. **Append query string**을 *true*(선택됨)로 설정하십시오.
12. **Redirect type**을 *Permanent (301)*로 설정하십시오.
13. **Actions** 창에서 **Apply**를 클릭하여 규칙을 저장하십시오.
14. **Back to Rules**를 클릭하십시오.
15. 새로 생성된 *Redirect to HTTPS* 규칙을 선택하고 Action 창의 **Move Up** 버튼을 사용하여 이전에 생성한 *add x-forwarded-proto header* 규칙보다 위인 목록의 맨 위로 규칙을 이동하십시오.

### 클라이언트 캐시 비활성화

1. **Features View**에서 **HTTP Response Headers**를 더블 클릭하십시오.
2. **Actions** 창에서 **Set Common Headers...**를 클릭하십시오.
3. **Expire Web content**를 *true*(선택됨)로 설정하십시오.
4. *Immediately* 라디오 버튼이 선택되어 있는지 확인하십시오.
5. **OK**를 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/iis_response_headers.png" >}}

이후 *web.config* 파일의 내용은 다음 예시와 유사합니다:

**web.config**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="add x-forwarded-proto header">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll" trackAllCaptures="false" />  <serverVariables>
                        <set name="HTTP_X_FORWARDED_PROTO" value="https" />
                    </serverVariables>
                    <action type="None" />
                </rule>
                <rule name="xas" stopProcessing="true">
                    <match url="^(xas/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="ws" stopProcessing="true">
                    <match url="^(ws/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="ws-doc" stopProcessing="true">
                    <match url="^(ws-doc/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="file" stopProcessing="true">
                    <match url="^(file)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="link" stopProcessing="true">
                    <match url="^(link/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="rest" stopProcessing="true">
                    <match url="^(rest/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="rest-doc" stopProcessing="true">
                    <match url="^(rest-doc/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="debugger" stopProcessing="true">
                    <match url="^(debugger/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="oauth" stopProcessing="true">
                    <match url="^(oauth/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="p" stopProcessing="true">
                    <match url="^(p/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <mimeMap fileExtension=".mxf" mimeType="text/xml" />
            <clientCache cacheControlMode="DisableCache" />
        </staticContent>
    </system.webServer>
</configuration>
```

## Host 헤더 유지{#preserve-header}

웹 서비스 내에서 올바른 애플리케이션 루트 URL이 사용되도록 하려면, 클라이언트 요청의 원본 호스트 헤더가 호스트 헤더에 포함되도록 해야 합니다. 호스트 헤더가 유지되도록 하려면 다음 단계 중 하나를 따르십시오.

1. IIS Manager를 통해:

    1. **Connections** 창에서 **Server**를 선택하십시오.
    2. **Configuration editor** 기능을 더블 클릭하십시오.
    3. **Section** 드롭다운 메뉴에서 *system.webServer/proxy*를 선택하십시오.
    4. **preserveHostHeader** 옵션을 *True*로 설정하십시오.
    5. **Actions** 창에서 **Apply**를 클릭하십시오.

2. 명령 프롬프트를 통해:

    1. **시작**을 클릭한 다음 **모든 프로그램**을 클릭하십시오.
    2. **보조 프로그램**을 클릭한 다음 **명령 프롬프트**를 클릭하십시오.
    3. 명령 프롬프트에서 다음 명령을 실행하십시오:

        ```batch
        cd %windir%\system32\inetsrv
        ```

    4. 다음을 입력하십시오:

        ```batch
        appcmd.exe set config -section:system.webServer/proxy /preserveHostHeader:"True" /commit:apphost
        ```

## 문제 해결

### IIS

IIS를 구성할 때 모든 것을 올바르게 수행한 것처럼 보이지만 작동하지 않는 것처럼 보일 수 있습니다. IIS 문제 해결 가이드는 여기에서 확인할 수 있습니다: [IIS 문제 해결](/developerportal/deploy/troubleshooting-iis/).

### Service Console에서 잘못된 서비스 상태 표시

서비스의 상태를 변경하기 위해 [Powershell cmdlet](/developerportal/deploy/automate-mendix-deployment-on-microsoft-windows/#powershell)을 사용하는 경우(예: `Start-MxApp` 사용) 서비스 상태가 Service Console GUI에서 자동으로 업데이트되지 않습니다. Service Console을 재시작하면 올바른 상태가 표시됩니다.

## 더 읽기

* [온프레미스](/developerportal/deploy/on-premises-design/)
