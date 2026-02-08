---
title: "Cloud Foundry"
url: /developerportal/deploy/cloud-foundry-deploy/
weight: 50
description: "Mendix Portal에서 Mendix 지원이 없는 Cloud Foundry 환경에 배포하는 방법을 설명합니다."
aliases:
    - /deployment/cloud-foundry/index.html
    - /howto/deploying-a-mendix-app-to-cloud-foundry.html
    - /refguide/deploying-a-mendix-app-to-cloud-foundry.html
    - /refguide8/deploying-a-mendix-app-to-cloud-foundry.html
    - /refguide9/deploying-a-mendix-app-to-cloud-foundry.html
    - /deployment/cloud-foundry/
    - /howto/deploying-a-mendix-app-to-cloud-foundry
    - /refguide/deploying-a-mendix-app-to-cloud-foundry
    - /refguide8/deploying-a-mendix-app-to-cloud-foundry 
    - /refguide9/deploying-a-mendix-app-to-cloud-foundry
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

{{% alert color="warning" %}} Studio Pro에서의 Cloud Foundry 배포는 버전 10에서 더 이상 사용되지 않으며 버전 11에서 제거되었습니다. {{% /alert %}}

Mendix 앱은 Mendix Cloud, 온프레미스 또는 Kubernetes 등 다양한 환경에 배포할 수 있습니다.

Mendix 앱은 또한 Mendix를 지원하는 최소 필수 버전 이상의 Cloud Foundry, 데이터베이스 및 클라우드 스토리지를 지원하는 모든 클라우드 플랫폼에 배포할 수 있습니다. 구체적인 버전 번호는 [Mendix 시스템 요구 사항](/refguide/system-requirements/)을 참조하십시오.

Cloud Foundry의 장점은 다음과 같습니다:

* 오픈 소스
* 수평적 확장
* 애플리케이션이 상태 비저장(stateless) 컨테이너 내에서 실행
* 애플리케이션은 HTTP, HTTPS 또는 WebSocket을 통해서만 접근 가능
* 지속성, 모니터링, 이메일 등을 위해 애플리케이션에 서비스 바인딩
* 소스 코드 입력, 실행 중인 애플리케이션 출력
* 커스텀 빌드팩을 통해 더 많은 소프트웨어 아키텍처로 확장
* 자동 상태 모니터링 및 복구

Cloud Foundry에서 Mendix 앱을 실행하는 방법에 대한 자세한 내용은 [Mendix Cloud Foundry BuildPack](https://github.com/mendix/cf-mendix-buildpack)을 참조하십시오. 이 Git에서는 커맨드 라인 명령을 사용하여 Cloud Foundry 환경에 Mendix 앱을 배포하는 방법도 설명합니다.

{{% alert color="info" %}}
특정 Mendix 버전에는 특정 버전의 빌드팩이 필요합니다. 자세한 내용은 [Supported Mendix Versions](https://github.com/mendix/cf-mendix-buildpack#supported-mendix-versions)를 참조하십시오.
{{% /alert %}}

이 사용 가이드에서는 Studio Pro 및 브라우저 기반 구성 옵션을 사용하여 다음을 수행하는 방법을 배웁니다:

* Studio Pro 및 서비스 제공자에서 Cloud Foundry 구성
* 앱에 서비스 추가
* Cloud Foundry에 앱 배포
* 문제 해결

### SAP에서의 Cloud Foundry

SAP와 같은 Cloud Foundry 제공자는 Mendix Portal 내에서 사용할 수 있습니다. 이러한 클라우드에 애플리케이션을 배포하려면 Mendix Portal을 사용하는 것이 권장됩니다. [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)에 대한 자세한 문서를 참조하십시오.

권장 방법이 지원하지 않는 특정 요구 사항이 있는 경우에만 이 문서의 지침을 사용하십시오.

## 사전 요구 사항

이 사용 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/)에서 최신 버전의 Studio Pro 다운로드
* 새 애플리케이션 및 서비스를 생성할 수 있는 권한이 있는 서비스 계정에 대한 액세스 확보

## Studio Pro에서 Cloud Foundry 구성 {#configuring-cloud-foundry-in-studio-pro}

Mendix 앱을 Cloud Foundry에 배포하려면 Studio Pro에서 설정을 구성해야 합니다.

1. Studio Pro를 열고 메뉴 옵션 **Run > Edit Cloud Foundry Settings**를 선택합니다:

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-settings.png" class="no-border" >}}

2. **Edit Cloud Foundry Settings** 창의 자격 증명에 다음을 입력합니다:

    * **API endpoint**는 플랫폼 문서에서 얻을 수 있는 플랫폼의 엔드포인트입니다. 예:
          * SAP Frankfurt의 경우 `https://api.cf.eu10.hana.ondemand.com`
    * **User name**은 플랫폼의 계정 이름입니다
    * **Password**는 계정을 인증하는 비밀번호입니다

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-settings-window.png" class="no-border" >}}

3. **Next**를 클릭합니다. 플랫폼에 로그인됩니다.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-settings-details.png" class="no-border" >}}

4. 사용 중인 플랫폼 계정에 따라 제한되는 다음 세부 정보를 입력합니다:

    * **Organization**
    * **Space**
    * **App** – *Create new app*
    * **Domain** – 플랫폼에 따라 도메인 이름 선택이 있을 수 있습니다
    * **App name** – 앱의 이름입니다. 창에서 도메인 이름을 추가하여 전체 URL이 무엇인지 표시합니다.
    * **Buildpack** – 플랫폼에 따라 빌드팩을 사용자 정의할 수 있습니다.

5. **Next**를 클릭합니다. 플랫폼에 Cloud Foundry *App*이 생성됩니다. 이것은 현재 앱을 위한 환경일 뿐이며 배포하기 전까지는 Mendix 앱을 포함하지 않습니다.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-configure-app.png" class="no-border" >}}

{{% alert color="warning" %}}
Cloud Foundry 환경은 Mendix 앱에 필요한 리소스로 구성되어야 합니다. 필요한 리소스가 없으면 앱을 실행할 수 없습니다.
{{% /alert %}}

앱은 서비스(예: 데이터베이스, 로드 밸런서, 메모리 도구)를 사용합니다. Mendix 애플리케이션은 플랫폼에서 다음 서비스가 필요합니다:

* 데이터베이스
* 라우트(*자동으로 구성되거나 서비스로 추가해야 할 수 있음*)

이러한 필수 서비스 외에 다음 서비스는 선택 사항입니다:

* File Store
* XSUAA Service (*SAP Business Technology Platform (SAP BTP)만 해당*)
* Connectivity Service (*SAP BTP만 해당*)

이 사용 가이드에서는 데이터베이스와 파일 스토어 추가만 설명합니다. 추가 서비스도 동일한 방법으로 추가할 수 있습니다. 일반적으로 체험판 계정에 추가할 수 있는 리소스에 제한이 있으므로, 리소스가 부족하지 않고 체험판 계정에 단일 앱만 배포할 수 있을 수도 있습니다.

## 앱에 데이터베이스 서비스 추가

Cloud Foundry 환경을 구성하려면 플랫폼의 콘솔로 이동해야 합니다. Studio Pro에서 Cloud Foundry 환경을 만들 때 사용한 것과 동일한 자격 증명으로 로그인해야 합니다.

이러한 모든 콘솔에는 서비스를 선택하고, 앱에 바인딩하고, 환경 및 앱의 세부 정보를 확인할 수 있는 유사한 기능이 있습니다. 예:

* [SAP](https://account.hanatrial.ondemand.com/cockpit#/home/trialhome)

{{% alert color="info" %}}
이 문서의 이미지는 주로 더 이상 사용할 수 없는 이전 호스팅 옵션인 Pivotal Web Services 콘솔에서 가져왔습니다.
{{% /alert %}}

앱에 데이터베이스 서비스를 추가하려면 다음 단계를 따르십시오:

1. 앱을 생성한 공간으로 이동합니다. 생성한 앱의 환경은 있지만 아직 실행 중이 아닙니다. 이는 연결된 서비스가 없기 때문입니다.
2. 추가할 수 있는 서비스 목록을 찾습니다. **Service Marketplace**에 있거나 추가할 수 있는 서비스 목록을 얻기 위해 **Add Service**가 필요할 수 있습니다. 서비스는 개별 앱이 아닌 공간에 제공됩니다.
3. Mendix에서 지원하는 데이터베이스를 선택합니다. 지원되는 데이터베이스에는 PostgreSQL, DashDB, Compose For PostgreSQL, ClearDB MySQL 및 ElephantSQL(서비스형 PostgreSQL)이 포함됩니다.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/marketplaces.png" class="no-border" >}}

4. 필요에 맞는 플랜을 선택합니다. 각 데이터베이스에는 메모리, 공간 및 클러스터링이 다른 여러 플랜이 있습니다. 각각의 비용이 다르지만 일반적으로 무료로 사용할 수 있는 개발 버전이 있습니다.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/db-service-plans.png" class="no-border" >}}

5. 다음을 설정하여 데이터베이스를 구성합니다:

    * **Name** – 데이터베이스에 부여할 이름입니다. 바인딩할 앱의 이름을 포함하는 것이 좋습니다. 그러면 동일한 공간에 여러 개를 배포한 경우 올바른 데이터베이스를 쉽게 선택할 수 있습니다.
    * **Space** – 인스턴스를 추가할 공간
    * **App** – 이 데이터베이스를 바인딩할 앱입니다. 즉, 이 데이터베이스에 데이터를 저장할 앱입니다.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/db-configure.png" class="no-border" >}}

    {{% alert color="info" %}}콘솔에 따라 이러한 구성 항목에 약간 다른 이름을 사용할 수 있습니다.{{% /alert %}}

데이터베이스를 구성한 후 선택한 플랫폼에 다른 요구 사항이 없는 한(예: 자동으로 생성되지 않는 경우 앱에 라우트를 바인딩해야 할 수 있음) 앱을 배포할 수 있습니다.

## 앱에 파일 스토어 서비스 추가

애플리케이션의 FileDocument(예: 이미지와 같은 바이너리 객체)는 데이터베이스에 저장되지 않습니다. 앱에서 이를 사용하고 세션 간에 유지하려면 영구 파일 스토리지에 저장해야 합니다.

이 서비스는 위의 데이터베이스와 동일한 방식으로 애플리케이션에 연결해야 합니다. 지원되는 클라우드 파일 스토리지 서비스에 대해서는 [Mendix 시스템 요구 사항](/refguide/system-requirements/)을 참조하십시오.

{{% alert color="info" %}}
일부 체험판 계정에는 객체 스토리지가 포함되지 않을 수 있습니다.

환경 변수를 사용하여 파일 스토어를 구성해야 할 수 있습니다. 자세한 내용은 [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack)을 참조하십시오.
{{% /alert %}}

## ⚠ Cloud Foundry에 앱 배포 (더 이상 사용되지 않음)

1. Studio Pro를 엽니다.
2. Cloud Foundry에 배포하려는 앱을 엽니다.
3. 메뉴 옵션 **Run > Run on Cloud Foundry**를 선택합니다:

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/run-on-cf.png" class="no-border" >}} 

Mendix 앱이 구성된 Cloud Foundry 앱에 배포되고 자동으로 시작됩니다.

{{% alert color="warning" %}} Studio Pro에서의 Cloud Foundry 배포는 버전 10에서 더 이상 사용되지 않으며 버전 11에서 제거되었습니다. {{% /alert %}}

## Cloud Foundry 환경 변수

Studio Pro에서 앱을 배포한 후 두 변수가 자동으로 애플리케이션 환경에 추가됩니다.

* **ADMIN_PASSWORD** – Mendix 앱의 기본 관리자 비밀번호입니다. Studio Pro에서 변경하지 않은 경우 보다 안전한 것으로 변경할 때까지 앱을 배포할 수 없습니다.
* **DEVELOPMENT_MODE** – 기본값은 *true*입니다. 이를 통해 보안을 켜지 않고 클라우드에서 앱을 실행할 수 있습니다. 프로덕션에서 앱을 실행하려면 false로 변경하십시오.

{{< figure src="/attachments/deployment/cloud-foundry-deploy/app-variables.png" class="no-border" >}}

## 문제 해결

문제가 발생하면 애플리케이션 로그를 확인해야 합니다. 이 로그는 선택한 플랫폼의 콘솔에서 사용할 수 있습니다.

1. 플랫폼 콘솔에서 앱으로 이동합니다.
2. **Logs**를 엽니다.

{{< figure src="/attachments/deployment/cloud-foundry-deploy/cf-log.png" class="no-border" >}}

### 프로젝트 폴더를 푸시할 수 없음

빌드팩을 사용하여 Mendix 프로젝트 폴더를 Cloud Foundry 클러스터에 푸시할 때 다음 오류 메시지와 함께 푸시가 실패합니다: *Cannot open assembly 'MendixBuilder/modeler/mxbuild.exe': no such file or directory.*

#### 원인

프로젝트 폴더를 Cloud Foundry 클러스터에 푸시하는 것은 현재 지원되지 않습니다.

#### 해결 방법

이 문제를 해결하려면 다음 해결 방법 중 하나를 구현하십시오:

* 앱 모델이 Mendix Teamserver에 저장된 경우 Build API를 사용하여 [배포 패키지 빌드](/apidocs-mxsdk/apidocs/build-api/#start-building-deployment-package)하고 해당 패키지를 CF 빌드팩으로 푸시합니다.
* [Studio Pro에서 배포 패키지 빌드](/refguide/app-menu/#create-package)하고 해당 패키지를 CF 빌드팩으로 푸시합니다.
* CI/CD 파이프라인에서 [MxBuild](/refguide/mxbuild/)를 실행하여 배포 패키지를 빌드하고 해당 패키지를 CF 빌드팩으로 푸시합니다.

이 문제는 향후 버전의 빌드팩에서 해결될 예정입니다.

## 추가 정보

* [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack)
