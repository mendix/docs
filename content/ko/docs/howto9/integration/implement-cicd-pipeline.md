---
title: "Mendix API를 사용한 간단한 CI/CD 파이프라인 구현"
linktitle: "Mendix Cloud용 CI/CD 파이프라인"
url: /howto9/integration/implement-cicd-pipeline/
description: "사용 가능한 Mendix API를 메인라인 오케스트레이터와 함께 사용하여 간단한 CI/CD 파이프라인을 구축하는 방법을 설명합니다."
---

## 소개

이 사용 방법 문서에서는 사용 가능한 Mendix API를 메인라인 오케스트레이터(Jenkins, Visual Studio Team Services 등)와 함께 사용하여 간단한 CI/CD 파이프라인을 구축하는 방법을 설명합니다.

이 문서는 단계별 가이드가 아닙니다. 어떤 API를 사용하고 사용 방법에 대한 예제를 보여줄 뿐입니다. 예제에서 사용하는 도구는 [postman](https://www.getpostman.com/)입니다.

## 전제 조건

이 사용 방법을 시작하기 전에 다음 사항에 익숙한지 확인하십시오:

* CI/CD
* REST 서비스 사용
* [단위 테스트](/appstore/modules/unit-testing/) (애플리케이션에서 사용하는 경우에만)
* [Application Test Suite](/appstore/partner-solutions/ats/) (애플리케이션에서 사용하는 경우에만)

## 파이프라인

### API 권한 및 키

#### 사용자 API 키

Mendix Cloud 환경에 접근하려면 API를 실행할 때 인증된 사용자가 필요합니다. Mendix API에서는 이를 위해 API 키를 사용합니다. Mendix API 키를 생성하려면 [인증](/apidocs-mxsdk/apidocs/authentication/)의 단계를 따르십시오.

#### Mendix API 권한

Mendix API를 사용하여 환경에 접근하려면, API에 접근할 사용자에게 API 권한을 부여해야 합니다. 해당 사용자에게 API 권한을 부여하려면, [Apps](https://sprintr.home.mendix.com/)에서 앱을 열고 **Security** > **Node Permissions**로 이동한 다음, 이전 단계에서 API 키를 생성한 사용자에 대해 **API RIGHTS** 옵션을 체크하십시오.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/01APIRightsCloudPortal.png" class="no-border" >}}

### 배포 패키지 빌드하기

배포 패키지를 빌드하려면 [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/)와 [Build API](/apidocs-mxsdk/apidocs/build-api/)를 사용하십시오. 이 시나리오에서는 최신 리비전에 대한 패키지를 빌드하지만, 원하는 버전을 사용할 수 있습니다.

#### 최신 리비전 가져오기

최신 리비전을 가져오려면 [Retrieve Branch](/apidocs-mxsdk/apidocs/app-repository-api/#retrieve-branch) API 호출을 사용하여 출력에서 `latestCommit.id`를 가져오십시오.

#### 패키지 빌드하기{#BuildPackage}

패키지를 빌드할 버전을 가져온 후 패키지를 빌드해야 합니다. 이를 위해 [Start Building a Deployment Package API 호출](/apidocs-mxsdk/apidocs/build-api/#start-building-deployment-package)을 사용하십시오.

이것은 POST 호출이므로 본문에 관련 필드를 전달해야 합니다(사용할 내용은 위 링크를 참조하십시오).

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/03StartBuildingPackage.png" class="no-border" >}}

다음 단계로 진행하기 전에 배포 패키지 빌드가 성공할 때까지 기다려야 합니다. 이를 위해 [Retrieve Package API 호출](/apidocs-mxsdk/apidocs/build-api/#retrieve-package)을 사용하십시오. 이 시나리오에서는 `PackageId`(이전 호출의 출력)를 사용하고 상태가 `Succeeded`인지 확인해야 합니다(다른 가능한 상태는 Queued, Building, Uploading, Failed입니다).

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/04RetrievePackageStatus.png" class="no-border" >}}

### 다음 환경에 배포하기 {#deploying-to-the-next-environment}

배포 패키지를 빌드한 후 이제 새 패키지를 다음(Test, Acceptance 등) 환경에 배포할 수 있습니다. 이를 위해 [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/)를 사용하십시오.

#### 환경 상태 가져오기

먼저, 배포하려는 환경이 실행 중인지 확인해야 합니다. 새 배포 패키지를 배포하기 전에 중지해야 하는지 알아야 합니다. 이를 위해 [Retrieve Environment API 호출](/apidocs-mxsdk/apidocs/deploy-api/#retrieve-environment)을 사용하여 상태를 확인하십시오.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/05GetEnvironment.png" class="no-border" >}}

#### 환경 중지하기

환경이 실행 중이면 중지해야 합니다. 이를 위해 [Stop Environment API 호출](/apidocs-mxsdk/apidocs/deploy-api/#stop-environment)을 사용하십시오.

#### 패키지 배포/전송하기

환경에 패키지를 배포/전송하려면 [Transport a Deployment Package to an Environment API 호출](/apidocs-mxsdk/apidocs/deploy-api/#transport-deployment-package)을 사용하십시오.

이 액션에는 [패키지 빌드하기](#BuildPackage) 섹션의 `PackageId`가 필요합니다.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/06TransportDeploymentPackageToEnvironment.png" class="no-border" >}}

#### 환경 시작하기

배포가 성공한 후 환경을 시작해야 합니다. 이를 위해 [Start Environment API 호출](/apidocs-mxsdk/apidocs/deploy-api/#start-environment)을 사용하십시오.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/07StartEnvironment.png" class="no-border" >}}

다음 단계로 진행하기 전에(다른 환경으로의 전송만 자동화하려는 경우 다음 단계가 없을 수 있음) 환경이 시작되었는지 확인해야 합니다. 이를 위해 `JobId`(이전 호출의 출력)와 함께 [Get Environment Status API 호출](/apidocs-mxsdk/apidocs/deploy-api/#get-start-environment-status)을 사용하십시오. 상태가 **Started**이면 환경이 준비된 것입니다.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/08StartEnvironmentStatusStarting.png" class="no-border" >}}

### 테스트 실행하기

환경에 패키지를 배포하고 시작한 후 테스트를 실행할 준비가 되었습니다. 이는 CI/CD 파이프라인에서 필수 단계가 아니지만 일반적으로 파이프라인의 일부입니다.

아래 섹션에서는 단위 테스트와 ATS(UI) 테스트를 원격으로 실행하는 방법을 보여줍니다. 로드 테스트 등 다른 테스트가 있을 수 있지만 이 문서에서는 다루지 않습니다.

#### 단위 테스트

Mendix 앱에서 단위 테스트를 수행하는 한 가지 방법은 Mendix Marketplace에서 제공하는 [단위 테스트](/appstore/modules/unit-testing/) 모듈을 사용하는 것입니다. 이 모듈은 이미 원격 호출을 실행하기 위한 API를 노출합니다.

먼저 테스트를 시작해야 합니다.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/10StartUnitTests.png" class="no-border" >}}

테스트가 완료되면(completed가 `true`인 상태 확인), 실행된 테스트 수, 실행 시간, 실패한 수, 어떤 테스트가 실패했는지, 실패 이유를 확인할 수 있습니다.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/11UnitTestsStatus.png" class="no-border" >}}

{{% alert color="info" %}}
단위 테스트 모듈에서 사용할 수 있는 데이터에서 표준 단위 구조를 노출하는 웹 서비스를 (수동으로) 생성할 수도 있습니다.
{{% /alert %}}

#### Mendix Application Test Suite(ATS) 테스트

ATS에는 자체 [CI/CD용 API](/appstore/partner-solutions/ats/rg-two-cicd-api/#api)가 있습니다. 이를 사용하려면 [CI/CD와 함께 ATS를 사용하는 방법](/appstore/partner-solutions/ats/ht-two-ats-and-ci-cd/#ats-and-ci-cd)의 **ATS and CI/CD** 섹션의 단계를 따르십시오.

### 다음 단계

다른 환경으로 승격해야 하는 경우 [다음 환경에 배포하기](#deploying-to-the-next-environment) 섹션의 단계를 반복하십시오.

## Jenkins/VSTS 예제

아래 섹션에서는 Jenkins(groovy 스크립트 사용)와 Visual Studio Team Services(VSTS)에서 Mendix API를 호출하는 방법의 예제를 제시합니다.

### Jenkins

Jenkins에서 REST 서비스를 호출하려면(groovy 스크립트 사용) [HTTP Request Plugin](https://wiki.jenkins.io/display/JENKINS/HTTP+Request+Plugin)을 설치하십시오. 자격 증명을 변수에 바인딩하려면(아래 코드 스니펫의 `withCredentials` 참조) [Credentials Binding Plugin](https://jenkins.io/doc/pipeline/steps/credentials-binding/)을 설치하십시오. `Mendix-Username`과 `Mendix-ApiKey`는 `customHeaders` 배열에 설정됩니다.

이 코드 스니펫 예제는 배포 패키지를 빌드할 때 사용할 수 있도록 최신 리비전 번호를 가져옵니다:

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/12Jenkins.png" class="no-border" >}}

### VSTS

VSTS에서 REST 서비스를 호출하려면 [Invoke REST API task](https://docs.microsoft.com/en-us/vsts/build-release/tasks/utility/http-rest-api)를 사용하십시오. 이는 에이전트 없는 단계에서 사용해야 하며, 먼저 **Generic endpoint**를 설정해야 합니다. `Mendix-Username`과 `Mendix-ApiKey`는 **Headers** 섹션에 넣습니다. **Success criteria**(**Advanced** 섹션 아래)를 설정하여 작업이 성공한 것으로 정의할 수 있습니다.

아래 예제는 수락 환경의 상태를 확인합니다. 환경이 실행 중이면 작업이 성공합니다.

{{< figure src="/attachments/howto9/integration/implement-cicd-pipeline/13RestExampleVSTS_cut.png" class="no-border" >}}
