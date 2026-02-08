---
title: "Siemens Insights Hub"
url: /developerportal/deploy/deploying-to-mindsphere/
weight: 42
description: "Insights Hub Gateway에 등록하고 Insights Hub Launchpad에 통합하여 Siemens Insights Hub에 배포하는 방법을 설명합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #launchpad below is mapped from the Insights Hub themepack in the Marketplace, so it should not be removed or changed.
---

## 소개

Insights Hub는 Siemens의 클라우드 기반 개방형 IoT 운영 체제로, 기기와 물리적 인프라를 디지털 세계에 연결할 수 있게 합니다. 수십억 개의 지능형 기기에서 빅 데이터를 활용하여 비즈니스 전체에 걸쳐 혁신적인 인사이트를 발견할 수 있습니다.

이 문서는 Insights Hub에서 Mendix 앱을 배포, 등록 및 실행하려는 Mendix 개발자를 위한 것입니다.

{{% alert color="warning" %}}
Insights Hub에 배포된 Mendix 앱에서 수행할 수 있는 작업에는 몇 가지 제한이 있습니다. 자세한 내용은 *Insights Hub 개발 고려 사항*의 [제한 사항](/partners/siemens/mindsphere-development-considerations/#limitations) 섹션을 참조하십시오.
{{% /alert %}}

{{% alert color="info" %}}
회색 블록 안에 표시된 코드 예제를 클립보드에 쉽게 복사할 수 있습니다. 코드 블록 위에 커서를 올리고 나타나는 복사 버튼을 클릭하십시오.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/copy-from-documentation.png" class="no-border" >}}

{{% /alert %}}

첫 번째 Insights Hub 앱을 돕기 위해 Insights Hub API를 호출하는 모듈이 포함된 예제 앱도 있습니다. 자세한 내용은 [Siemens Insights Hub Monitor 예제 앱 사용 방법](/partners/siemens/mindsphere-example-app/)을 참조하십시오.

## 사전 요구 사항{#prerequisites}

Insights Hub 내에서 앱을 배포하고 등록하려면 다음 사전 요구 사항이 필요합니다.

* **Developer** 또는 **Start for Free** 테넌트의 Insights Hub 사용자 계정
* Insights Hub 개발자 역할: `mdsp:core:Developer` 또는 `mdsp:core:DeveloperAdmin` — Start for Free 테넌트에서는 이미 부여되어 있습니다.
* [Mendix Studio Pro](https://marketplace.mendix.com/)

Insights Hub Cloud Foundry에서 Mendix 앱을 배포하고 실행하려면 다음도 필요합니다:

* [Cloud Foundry Command Line Interface (CF CLI)](https://github.com/cloudfoundry/cli)
* 앱을 푸시할 수 있는 Cloud Foundry 역할(예: `SpaceDeveloper`)

## 필수 Insights Hub 모듈 포함

앱이 배포되고 등록되며 런치패드에 표시될 수 있도록 사용자 정의해야 합니다. 이는 Insights Hub 사용자 정의 모듈을 통해 수행됩니다. 앱에 필요한 사용자 정의를 포함하는 두 가지 방법이 있습니다.

### 옵션 A: Insights Hub 앱 템플릿 사용

Mendix Marketplace의 **Siemens Insights Hub Starter Application**에는 Insights Hub에 배포할 앱을 만드는 데 필요한 모든 모듈과 스타일이 포함되어 있습니다.

{{% alert color="info" %}}
새 애플리케이션을 빌드하는 경우 이 방법이 권장됩니다. 시작하는 데 필요한 모든 구성 요소를 제공합니다.
{{% /alert %}}

Studio Pro(버전 7.22.2 이상)를 열고 다음 단계를 따르십시오:

1. 브라우저를 시작하고 [Mendix Marketplace](https://marketplace.mendix.com/)를 엽니다.

2. 검색 상자에 *Insights Hub*를 입력하고 <kbd>Enter</kbd>를 누릅니다.
3. 검색 결과에서 **Siemens Insights Hub Starter Application**을 선택합니다.
4. **Download**를 클릭하여 이 앱을 템플릿으로 사용하는 새 앱을 생성합니다.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/app-store-download.png" class="no-border" >}}

5. Mendix Studio Pro를 열고 **Open App** 대화 상자에서 Import App Package를 선택합니다.
    {{< figure src="/attachments/deployment/deploying-to-mindsphere/import-app-package.png" class="no-border" >}}

6. 방금 다운로드한 스타터 템플릿 패키지를 선택합니다.
7. 새 앱을 시작하려면 앱 저장 위치, 앱 이름 및 앱 디렉터리를 확인한 후 **OK**를 클릭합니다.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/app-store-download-project.png" class="no-border" >}}

### 옵션 B: 기존 앱 사용자 정의{#existingapp}

Insights Hub 앱 템플릿을 기반으로 하지 않은 기존 앱이 있는 경우 필요한 사용자 정의를 가져와야 합니다. 가져와야 하는 세 가지 모듈은 다음과 같습니다:

* Mendix Marketplace의 **Siemens Insights Hub SSO**: [Siemens Insights Hub SSO](https://marketplace.mendix.com/link/component/108805/)

    이 모듈을 사용하면 Insights Hub에 로그인한 사용자가 다시 로그인하지 않고도 앱을 사용할 수 있습니다. 또한 로컬에서 앱을 테스트할 수 있게 합니다. 자세한 내용은 *Insights Hub 모듈 세부 사항*의 [Single Sign-On](/partners/siemens/mindsphere-module-details/#mssso) 섹션을 참조하십시오.

* Mendix Marketplace의 **Siemens Insights Hub OS Bar Connector**: [Siemens Insights Hub OS Bar Connector](https://marketplace.mendix.com/link/component/108804/)

    이것은 필수 Insights Hub OS Bar를 앱에 통합합니다. 자세한 내용은 *Insights Hub 모듈 세부 사항*의 [Siemens Insights Hub OS Bar](/partners/siemens/mindsphere-module-details/#msosbar) 섹션을 참조하십시오.

* Mendix Marketplace의 **Siemens Insights Hub Web Content**: [Siemens Insights Hub Web Content](https://marketplace.mendix.com/link/component/108803/)

    이것은 앱에 Insights Hub 스타일을 적용하고 앱의 올바른 작동에 필요한 추가 사용자 정의 파일을 포함합니다. 자세한 내용은 *Insights Hub 모듈 세부 사항*의 [Siemens Insights Hub Web Content](/partners/siemens/mindsphere-module-details/#msthemepack) 섹션을 참조하십시오.

## 모듈 구성{#configure-modules}

새 앱이 있거나 기존 앱에 Insights Hub 모듈을 가져왔으므로, 이제 앱이 Insights Hub와 작동하도록 모듈을 구성해야 합니다.

### Single Sign-On 구성 (SiemensInsightsHubSingleSignOn)

SiemensInsightsHubSingleSignOn 모듈에서 다음 항목을 구성해야 합니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image2.png" alt="SiemensInsightsHubSingleSignOn 모듈의 폴더 구조" class="no-border" >}}

#### CockpitApplicationName

Insights Hub Mendix Portal에 등록된 앱의 이름을 *CockpitApplicationName*의 값으로 입력합니다.

이 두 값은 동일해야 하며, 따라서 *Insights Hub 개발 고려 사항*의 [앱 이름](/partners/siemens/mindsphere-development-considerations/#appname) 섹션에 나열된 제약 조건에 맞아야 합니다.

#### GatewayURL

이것은 Insights Hub 게이트웨이의 URL이며 다음 형식입니다:

```http
https://gateway.{Region}.mindsphere.io
```

앱이 실행되는 `{Region}`에 따라 변경해야 합니다. 기본값은 **AWS**에서 실행되는 Insights Hub용입니다:

```http
https://gateway.eu1.mindsphere.io
```

#### PublicKeyURL

이 상수의 값은 다음과 같습니다:

```http
https://core.piam.{Region}.eu1.mindsphere.io/token_keys
```

앱이 실행되는 `{Region}`에 따라 변경해야 합니다. 기본값은 **AWS**에서 실행되는 Insights Hub용입니다:

```http
https://core.piam.eu1.mindsphere.io/token_keys
```

#### RegisterSingleSignOn

*RegisterSingleSignOn* Microflow를 **After startup** Microflow로 추가하거나 기존 *after startup* Microflow의 하위 Microflow로 추가합니다.

{{% alert color="info" %}}
Siemens Insights Hub Starter Application을 사용하는 경우 이것은 이미 *After startup* Microflow로 설정되어 있습니다.
{{% /alert %}}

기존 앱을 수정하는 경우 **App Explorer**를 통해 액세스하는 **App** > **Settings** 대화 상자의 *Runtime* 탭에서 이 작업을 수행할 수 있습니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image4.png" alt="앱 설정 대화 상자" class="no-border" >}}

### Insights Hub OS Bar 구성 (SiemensInsightsHubOSBarConnector)

실행 중인 앱에 대한 정보를 표시하도록 OS Bar를 변경합니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image10.png" alt="OS Bar의 정보 예시" class="no-border" >}}

이것은 *SiemensOSBarConfig* 모듈의 문자열 상수 **Config**의 기본값으로 보유되는 JSON 객체로 구성됩니다. 가져온 모듈에는 올바르게 형식화된 예제 값 세트가 있습니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image11.png" alt="OS Bar의 Config 상수 설정 대화 상자" class="no-border" >}}

JSON을 다음 정보에 적절한 값으로 변경합니다:

* displayName – 앱의 표시 이름
* appVersion – 앱의 버전 번호
* appCopyright – 앱 소유자의 이름 및 게시 연도
* links – 앱에 대한 추가 정보 링크

이 JSON 객체의 구조 및 내용에 대한 자세한 내용과 샘플 JSON은 Insights Hub 개발자 사이트의 [App Information](https://design.mindsphere.io/osbar/get-started.html#app-information)에서 확인할 수 있습니다.

## 앱 배포{#deploying-your-app}

Insights Hub용 Mendix 기반 애플리케이션은 Mendix 또는 Insights Hub에 배포할 수 있습니다. Mendix에 배포하는 것은 매우 간단하며 **Auto Registration** 프로세스도 사용할 수 있으므로 권장되는 옵션입니다.

{{% alert color="info" %}}
**Auto Registration** 프로세스는 Europe 1 리전에서만 사용할 수 있습니다.
{{% /alert %}}

### 옵션 A: Mendix Studio Pro를 사용하여 Mendix Cloud에 배포

Mendix Studio Pro에서 Publish 버튼을 클릭하기만 하면 됩니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/runMendixApp.png" alt="Mendix에 배포" class="no-border" >}}

앱이 배포되면 Insights Hub 테넌트에서 자동으로 앱을 등록할 수 있습니다.

### 옵션 B: Mendix 배포 패키지를 생성하여 Insights Hub Cloud Foundry에 배포

{{% alert color="info" %}}
Insights Hub에 배포할 수 있는 Mendix 배포 패키지(MDA 파일) 크기 제한은 1.5 GB입니다.
{{% /alert %}}

#### Cloud Foundry에 푸시

계속하기 전에 위의 [사전 요구 사항](#prerequisites) 섹션에 설명된 사전 요구 사항을 충족하고 [모듈 구성](#configure-modules) 섹션에 설명된 대로 Insights Hub 모듈을 구성했는지 확인하십시오.

##### Mendix 배포 패키지 생성

앱에서 Mendix 배포 패키지를 생성하려면 다음을 수행하십시오:

1. Studio Pro에서 앱을 엽니다.
2. **App** > **Create Deployment Package**를 선택합니다.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image13.png" class="no-border" >}}

3. 올바른 **Development line** 및 **Revision**을 선택합니다.
4. **New version** 번호를 설정하고 필요한 경우 **Description**을 추가합니다.
5. 필요한 경우 경로 및 **File name**을 변경합니다.

배포 패키지가 생성되고 위치가 정보 메시지에 표시됩니다.

{{% alert color="info" %}}
기본적으로 배포 패키지는 앱의 *releases* 폴더에 생성됩니다.
{{% /alert %}}

##### CF CLI를 사용하여 Cloud Foundry에 애플리케이션 배포

배포 패키지를 배포하려면 다음을 수행하십시오:

1. 일회용 코드를 사용하여 Insights Hub CF CLI에 로그인합니다:

    * `cf login -a https://api.cf.{Region}.{mindsphere-domain} --sso`를 입력합니다
    * CLI에서 출력한 URL을 열고 WebKey 자격 증명을 사용하여 로그인하여 일회용 코드를 얻습니다
    * CLI에 일회용 코드를 입력합니다

        {{% alert color="info" %}}Cloud Foundry에 대한 프록시를 구성해야 하는 경우 Windows `set` 명령을 사용하십시오. 예: `set http_proxy=http://my.proxy.ip:1234`.{{% /alert %}}

2. 다음 명령을 사용하여 조직과 공간을 선택합니다:

    ```bash
    cf target –o {org_name} -s {space_name}
    ```

    {{% alert color="info" %}}조직 또는 공간을 대상으로 지정할 수 없는 경우 조직에 추가되어야 할 수 있습니다. Insights Hub 문서의 [Cloud Foundry How Tos](https://developer.mindsphere.io/paas/howtos/index.html)를 참조하십시오.{{% /alert %}}

3. 다음 명령을 사용하여 PostgreSQL 인스턴스를 생성합니다:

    ```bash
    cf create-service postgresql10 {plan} {service_instance} [-c {parameters_as_JSON}] [-t {tags}]
    ```

    예: `cf create-service postgresql10 postgresql-xs myapp-db`

    자세한 내용은 Insights Hub 개발자 사이트의 [Using the a9s PostgreSQL](https://developer.mindsphere.io/paas/a9s-postgresql/using.html)을 참조하십시오.

    {{% alert color="warning" %}}각 Mendix 앱은 자체 데이터베이스가 필요합니다. 두 앱이 모두 제대로 작동하지 않으므로 하나의 데이터베이스에 둘 이상의 앱을 바인딩하지 마십시오. 대신 새 데이터베이스 인스턴스를 생성하십시오.{{% /alert %}}

4. 인프라 및 서비스 브로커 사용에 따라 서비스 인스턴스를 생성하는 데 몇 분이 걸릴 수 있습니다. 다음 명령을 사용하여 PostgreSQL 서비스가 성공적으로 생성되었는지 확인하십시오:

    `cf services`
    서비스가 목록에 표시되어야 하며 마지막 작업은 'create succeeded'여야 합니다.

5. 배포할 패키지와 동일한 폴더에 있는지 확인하십시오.
6. 최소한 다음 내용으로 `manifest.yml` 파일을 생성합니다:

    ```yaml
        applications:
        - name: {app_name}
          disk_quota: {disk_quota_size}
          memory: {memory_size}
        services:
          - {service_instance}
    ```

    {{% alert color="info" %}}`disk_quota_size` 및 `memory_size`는 Mendix 앱이 실행되려면 최소 **512M**이어야 합니다.<br />메모리 및 디스크 할당량 크기의 유효한 사양에 대한 자세한 내용은 *Cloud Foundry* [App Manifest Attribute Reference](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest-attributes.html)를 참조하십시오.{{% /alert %}}

    {{% alert color="warning" %}}각 Mendix 앱은 자체 데이터베이스가 필요합니다. 두 앱이 모두 제대로 작동하지 않으므로 하나의 데이터베이스에 둘 이상의 앱을 바인딩하지 마십시오. 대신 새 데이터베이스 인스턴스를 생성하십시오.{{% /alert %}}

    manifest 파일 구성에 대한 자세한 내용은 Insights Hub 개발자 사이트의 [Configuring the manifest file](https://developer.mindsphere.io/howto/howto-cf-single-manifest.html#configuring-the-manifest-file)을 참조하십시오.

7. 다음 명령을 사용하여 Insights Hub에 앱을 푸시합니다:

    ```bash
    cf push -p "{deployment_package_name}"
    ```

    예: `cf push -p "myapp.mda"`

##### Cloud Foundry 스택

항상 최신 사용 가능한 Cloud Foundry 스택을 사용해야 합니다. Insights Hub의 최신 스택은 `cflinuxfs4`입니다. Insights Hub에 푸시된 앱은 이 스택을 사용합니다.

앱을 푸시할 때 다음 명령줄 옵션을 사용하여 앱이 특정 스택을 사용하도록 지정할 수 있습니다:

```bash
cf push -p "{deployment_package_name}" -s {stack_name}
```

예: `cf push -p "myapp.mda" -s cflinuxfs4`

Insights Hub의 Cloud Foundry 스택에 대한 자세한 내용은 *Insights Hub Developer* 사이트의 *Cloud Foundry How Tos*에서 [How Can I Find the Stack my App is using?](https://developer.mindsphere.io/paas/howtos/howtos-stacks.html#find-out-which-stack-an-app-uses)를 참조하십시오.

#### 문제 해결

Cloud Foundry에 앱을 배포하는 데 문제가 있는 경우 [Running a Cloud Foundry-Hosted Application – for Java Developers](https://developer.mindsphere.io/howto/howto-cf-running-app.html)에서 추가 정보를 찾을 수 있습니다. 이것은 Mendix 개발자 관점에서 작성된 것이 아니므로 일부 정보가 관련이 없을 수 있습니다.

필요한 경우 프록시 설정이 구성되었는지 확인하십시오.

### Insights Hub Launchpad 설정{#launchpad}

앱이 작동하고 Insights Hub Launchpad에 표시되려면 등록해야 합니다. Mendix에 애플리케이션을 배포한 경우 다음 두 옵션 중 하나를 사용할 수 있습니다(옵션 A가 권장됨). Insights Hub에 배포한 경우 Developer Cockpit(옵션 B)을 통해 수동으로 등록해야 합니다.

#### 옵션 A: Auto Registration 프로세스 사용

{{% alert color="info" %}}
이 방법은 Mendix Cloud에 앱이 배포된 경우 권장됩니다.

그러나 Auto Registration 프로세스는 Europe 1 리전에서만 사용할 수 있습니다.
{{% /alert %}}

**Auto Registration** 프로세스를 시작하려면 앱이 Mendix Cloud에 배포된 후 Mendix Studio Pro에서 **View** 버튼을 클릭합니다. 기본 브라우저가 열리고 앱이 프로세스를 시작합니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/AutoRegistrationExplanation.png" alt="AutoRegistrationExplanation" class="no-border" >}}

**Start Auto Registration**을 클릭합니다. 프로세스는 이제 앱이 어떤 테넌트에 등록되어야 하는지 파악하려고 합니다. 따라서 로그인해야 합니다:

{{< figure src="/attachments/deployment/deploying-to-mindsphere/WebKeyLogin.png" alt="Siemens Digital Industry Software에 로그인" class="no-border" >}}

{{% alert color="info" %}}
Insights Hub에 둘 이상의 테넌트가 있는 경우 테넌트 목록이 표시됩니다. 앱을 등록할 테넌트를 선택하십시오.

Insights Hub에 하나의 테넌트만 있는 경우 프로세스가 자동으로 이 테넌트를 선택합니다.
{{% /alert %}}

앱을 등록하기 위해 이름, 내부 이름 및 선택적으로 설명을 입력합니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/AutoRegistrationNameAndDescription.png" alt="AutoRegistrationNameAndDescription" class="no-border" >}}

**Developer** 테넌트인 경우 계정에 자동으로 할당될 하나 이상의 애플리케이션 역할도 선택해야 합니다.

**Start for Free** 테넌트에서는 **admin** 역할이 자동으로 계정에 할당됩니다.

**Register**를 클릭하여 테넌트에서 등록 프로세스를 시작합니다. 몇 초 후 요약 페이지가 표시되며 앱으로 직접 이동할 수 있습니다.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/AutoRegistrationSummary.png" alt="AutoRegistrationSummary" class="no-border" >}}

{{% alert color="info" %}}
**Auto Registration** 프로세스는 앱에 대한 애플리케이션 역할과 범위를 자동으로 생성합니다.

**Start for Free** 테넌트인 경우 추가 Insights Hub API 역할이 할당되고 사용자에게 앱에 대한 **admin** 액세스가 부여됩니다.

**Developer** 테넌트인 경우 추가 Insights Hub API 역할이 할당되지 않습니다. 앱에 대해 부여된 액세스는 등록 요약 페이지에 표시됩니다.
{{% /alert %}}

추가 구성(예: CSP 또는 추가 역할)은 Developer Cockpit을 사용하십시오.

{{% alert color="info" %}}
Developer Cockpit 내에서 앱의 여러 버전을 가질 수 있습니다. 예를 들어 다른 구성이나 역할 및 범위를 가진 버전입니다.

**Auto Registration** 프로세스를 통해 등록된 배포는 *항상 프로세스 중에 생성된 버전에 매핑*됩니다. 앱의 추가 버전을 만들려면 Developer Cockpit 내에서 수동으로 새 버전을 만들 수 있습니다.
{{% /alert %}}

#### 옵션 B: Developer Cockpit에서 Mendix 앱 구성

##### 새 애플리케이션 생성

Insights Hub 런치패드에서 수동으로 새 앱을 만들려면 다음을 수행하십시오:

1. **Developer Cockpit > Dashboard**로 이동합니다.
2. **Create new application**을 클릭합니다.
3. **Type**을 *Standard*로 설정합니다.
4. **Infrastructure**를 *Cloud Foundry*로 설정합니다.
5. 런치패드에 표시할 앱의 **Display Name**을 입력합니다.
6. 앱의 **Internal Name**을 입력합니다. 이것은 앱의 SSO 모듈에서 설정한 *CockpitApplicationName*의 값과 동일해야 합니다.
7. 앱의 **Version**을 입력합니다.
8. 필요한 경우 앱의 **Description**을 입력합니다.
9. **Edit icon**을 클릭하여 앱의 **App Icon**을 업로드합니다.
10. **Component > Name**을 입력합니다. 이것은 *manifest.yml* 파일에서 설정한 {app_name}과 동일해야 합니다.
11. 컴포넌트 옆의 **+**를 클릭하여 **Endpoints**를 추가합니다.
12. 애플리케이션과 관련된 모든 엔드포인트에 액세스할 수 있도록 엔드포인트로 `/**`를 지정하고 **Save**를 클릭합니다.
13. **Cloud Foundry Direct URL**을 입력합니다. Cloud Foundry 명령 `cf app {app_name}`을 사용하여 찾을 수 있습니다.
14. **Configurations > content-security-policy** *Value*를 다음으로 설정합니다(텍스트 위에 마우스를 올리면 클립보드에 내용을 복사할 수 있습니다):

    앱이 **AWS**의 Insights Hub에서 실행 중인 경우 Region `eu1`을 사용하십시오:

    ```text
    default-src 'self' 'unsafe-inline' 'unsafe-eval' static.eu1.mindsphere.io feedback-static.mendix.com home.mendix.com;
    font-src 'self' static.eu1.mindsphere.io fonts.gstatic.com;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' static.eu1.mindsphere.io feedback-static.mendix.com home.mendix.com;
    style-src 'self' 'unsafe-inline' static.eu1.mindsphere.io feedback-static.mendix.com home.mendix.com fonts.googleapis.com;
    img-src * data:;
    connect-src 'self' 'unsafe-inline'  *;
    ```

    {{% alert color="info" %}}이러한 콘텐츠 보안 정책(CSP) 설정은 Insights Hub OS Bar와 [Mendix Feedback](/appstore/modules/mendix-feedback/) 위젯이 올바르게 로드되도록 하는 데 필요합니다. 다른 도메인에 추가 호출을 하는 경우(예: maps.googleapi.com에서 Google 지도를 사용하는 경우) 추가 CSP 설정이 필요할 수 있습니다.{{% /alert %}}

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image14.png" class="no-border" >}}

15. **Save**를 클릭하여 이 세부 정보를 저장합니다.
16. **Register**를 클릭하여 Insights Hub 런치패드에 앱을 등록합니다.

    {{% alert color="info" %}}앱이 아직 푸시되지 않은 경우 앱에 대한 라우트가 설정되지 않으며 오류 메시지가 표시됩니다. 앱을 Cloud Foundry에 푸시하면 이 문제가 해결됩니다.{{% /alert %}}

##### Developer Cockpit에서 애플리케이션 범위 설정{#scopes}

Insights Hub에서 적절한 범위를 설정하려면 다음을 수행하십시오:

1. Insights Hub 런치패드에서 **Developer Cockpit > Authorization Management > App Roles**로 이동합니다.
2. **Scope Name**을 입력합니다.
3. Insights Hub 기본 역할인 **user** 및/또는 **admin**에 연결합니다. 또는 직접 만든 Insights Hub 역할 중 하나에 연결합니다. Insights Hub는 최대 5개의 애플리케이션 역할을 지원합니다.
4. **Save**를 클릭합니다.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image15.png" class="no-border" >}}

{{% alert color="info" %}}
앱 템플릿을 사용하는 경우 *user*와 *admin* 두 개의 범위를 만들어야 합니다.
{{% /alert %}}

Mendix 역할과 Insights Hub 역할 간의 관계에 대한 설명은 *Insights Hub 모듈 세부 사항*의 [역할 및 범위](/partners/siemens/mindsphere-module-details/#rolesscopes) 섹션을 참조하십시오.

{{< figure src="/attachments/deployment/deploying-to-mindsphere/image8.png" class="no-border" >}}

{{% alert color="info" %}}
앱이 Insights Hub를 호출하는 경우 **Add Core Role** 옵션을 사용하여 앱에 *Core Roles*를 추가해야 합니다. 추가해야 하는 역할은 사용 중인 Insights Hub 기능에 따라 다릅니다.
{{% /alert %}}

##### 사용자 역할 할당

앱에 대한 범위를 생성한 후 앱에 액세스하려는 사용자에게 해당 범위를 할당해야 합니다.

1. Insights Hub 런치패드에서 **Settings > Roles**로 이동합니다.

    {{< figure src="/attachments/deployment/deploying-to-mindsphere/image16.png"   width="50%"  class="no-border" >}}

2. **Roles** 목록에서 할당할 앱 역할(범위)을 선택합니다.
3. **Edit assignment**을 클릭합니다.
4. 역할을 할당할 사용자를 선택합니다.
5. **Next**를 클릭한 다음 **Save**를 클릭합니다.

{{% alert color="info" %}}
이 할당이 적용되려면 사용자가 로그아웃한 후 다시 로그인해야 합니다.
{{% /alert %}}

{{% alert color="success" %}}
이제 앱이 설정되었으며 사용자가 Insights Hub Developer Cockpit 내에서 실행할 수 있습니다.
{{% /alert %}}

## 개발 고려 사항

다음과 같은 추가 도움을 위해 [Insights Hub 개발 고려 사항](/partners/siemens/mindsphere-development-considerations/)을 참조하십시오:

* 로컬 테스트
* 멀티 테넌시
* 제한 사항
