---
title: "글로벌 모드에서 Mendix Operator 실행"
url: /developerportal/deploy/global-operator/
description: "글로벌 모드에서 Kubernetes 기반 Mendix의 Mendix Operator를 설치하고 구성하는 프로세스를 설명합니다."
weight: 30
---

## 소개

Mendix Operator를 글로벌 모드에서 실행하면 하나의 Mendix Operator 및 Agent 설치만으로 여러 네임스페이스의 애플리케이션을 관리할 수 있습니다.

{{% alert color="warning" %}}
각 네임스페이스가 단일 Operator에 의해서만 관리되도록 하는 것이 중요합니다. 특히 서로 다른 버전의 두 Operator를 배포하여 동일한 네임스페이스를 관리하면 충돌이 발생하여 각 Operator의 수정 사항이 취소되고 롤백될 수 있습니다.
{{% /alert %}}

Global Operator 설치는 Operator 버전 v2.20.0 이상에서 공식적으로 지원됩니다.

{{% alert color="info" %}}
Mendix 버전 11.5.0 이상에서는 Mendix Operator 버전 2.24 이상을 설치해야 합니다.
{{% /alert %}}

## Global Operator 설치

Mendix Operator를 글로벌 모드로 설치할 때 먼저 *Global Operator 네임스페이스* 내에 Mendix Operator와 Agent를 배포해야 합니다. Global Operator 네임스페이스는 Operator 자체, Agent, 그리고 Operator가 감시해야 하는 네임스페이스를 지시하는 구성으로 구성됩니다.

Global Operator 네임스페이스를 구성한 후 *관리 네임스페이스*를 구성해야 합니다. 즉, 네임스페이스별 구성 설정입니다. 여기에는 스토리지 플랜, Ingress 구성, 레지스트리 설정, 프록시 또는 사용자 정의 TLS 설정이 포함될 수 있으며 모두 관리 네임스페이스의 특정 요구 사항에 맞게 조정됩니다. 설치 후 구성 프로세스에는 관리 네임스페이스 내에서 애플리케이션을 생성하는 것도 포함됩니다.

Global Operator를 설치하고 구성하려면 다음 단계를 수행하십시오:

1. Kubernetes 기반 Mendix Portal에서 클러스터를 생성하고 **Installation Type**으로 **Global Installation**을 선택하십시오.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator1.png" >}}

2. **Cluster Name**, **Cluster Type** 및 **Description**을 제공하십시오.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator2.png" >}}

3. **Create**를 클릭하십시오.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator3.png" class="no-border" >}}

4. Global Operator 클러스터가 생성된 후 **Add Global Operator Main Namespace**를 클릭하십시오.

    {{% alert color="warning" %}}관리 네임스페이스로 사용하려는 네임스페이스, 즉 Mendix 앱을 배포할 네임스페이스를 사용하지 마십시오. Global Operator 기본 네임스페이스는 관리 네임스페이스와 분리되어야 합니다. 그렇지 않으면 예상치 못한 결과가 발생할 수 있습니다.{{% /alert %}}

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator4.png" class="no-border" >}}

5. Global Operator **Namespace name**을 제공하고 **Installation type**을 선택한 다음 **Done**을 클릭하십시오.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator5.png" class="no-border" >}}

6. **Operating system**을 선택하고 다음 단계를 수행하여 Mendix Operator 및 Mendix Agent를 설치하십시오:

    1. [구성 도구 다운로드](/developerportal/deploy/standard-operator/#download-configuration-tool).
    2. [플랫폼에 로그인](/developerportal/deploy/standard-operator/#openshift-signin).
    3. [기본 설치](/developerportal/deploy/standard-operator/#base-installation) 수행.

        {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator6.png" class="no-border" >}}

    4. 구성 도구에서 **Custom TLS** 및 **Proxy** 옵션만 선택하여 Global Operator 기본 네임스페이스에 사용자 정의 TLS 및 프록시 설정을 적용할 수 있습니다.

    {{% alert color="info" %}}기본 설치는 Global Operator 기본 네임스페이스에서만 수행할 수 있습니다. 기본 설치와 함께 사용자 정의 TLS 및 프록시 설정도 적용할 수 있습니다. 그러나 스토리지 플랜, 데이터베이스 플랜, Ingress 구성 또는 레지스트리 구성과 같은 기타 구성은 Global Operator 기본 네임스페이스에서 지원되지 않습니다.{{% /alert %}}

7. 다음 명령을 사용하여 설치가 성공했는지 확인하십시오: 

    ```shell
    kubectl -n {globalOperatorNamespace} get deployments
    ```

8. 다음 명령을 사용하여 Operator 및 Agent Pod의 상태가 *Running*인지 확인하십시오:

    ```shell
    kubectl -n {globalOperatorNamespace} get pods
    ```

9. Kubernetes 기반 Mendix Portal에서 Global Operator 기본 네임스페이스의 상태가 다음 그림과 같이 *Connected*인지 확인하십시오:

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator7.png" class="no-border" >}}

10. **Namespaces**를 클릭하여 **Namespaces Overview** 페이지로 이동하십시오.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator9.png" >}}

11. Global Operator 기본 네임스페이스가 연결되면 **Convert Namespace** 및 **Add Managed Namespace** 버튼이 활성화되고 **Add Managed Namespace**를 클릭하여 Global Operator 네임스페이스 아래에 관리 네임스페이스를 설치할 수 있습니다.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator8.png" class="no-border" >}}

    {{% alert color="warning" %}}명령을 실행할 때 Portal과 클러스터에서 관리 네임스페이스에 동일한 이름을 사용하십시오. 다른 이름을 사용하면 원하지 않는 문제가 발생할 수 있습니다.{{% /alert %}}

12. Mendix 애플리케이션을 배포하려는 관리 네임스페이스 이름을 제공하고 **Done**을 클릭하십시오. 

    {{% alert color="warning" %}}기본 네임스페이스의 이름을 사용하지 마십시오 {{% /alert %}}

13. **Configuration** 페이지에서 **Operating system**을 선택하고 **Configuration** 섹션에서 **Configuration** 명령을 실행하십시오.

    {{% alert color="warning" %}}이미 Global Operator 기본 네임스페이스로 사용되는 네임스페이스를 사용하지 마십시오. Global Operator 네임스페이스는 관리 네임스페이스와 분리되어야 합니다. 그렇지 않으면 예상치 못한 결과가 발생할 수 있습니다.{{% /alert %}}

    {{% alert color="warning" %}}Global Operator 관리 네임스페이스에서 기본 설치를 수행하지 마십시오.{{% /alert %}}

14. **Configure Namespace**를 클릭하십시오. CLI의 **Global Operator** 섹션에서 기본 네임스페이스 이름을 제공하고 관리 네임스페이스에서 구성해야 하는 리소스를 선택하십시오. 자세한 내용은 [네임스페이스 구성](/developerportal/deploy/standard-operator/#configure-namespace)을 참조하십시오. 정보를 제공한 후 **Review and Apply** 섹션에서 **Apply Configuration**을 클릭하십시오 

### 결과

관리 네임스페이스를 구성한 후 Agent 및 Operator Pod가 자동으로 다시 시작되어 Global Operator 네임스페이스가 새로 추가된 관리 네임스페이스를 처리할 수 있습니다. 관리 네임스페이스가 Global Operator 네임스페이스의 Operator 구성에 추가되고 필요한 스토리지 플랜이 관리 네임스페이스에 생성됩니다.

관리 네임스페이스에 대한 Operator 구성도 생성됩니다. 

{{% alert color="info" %}}관리 네임스페이스 내의 구성 변경 사항이 글로벌 구성보다 우선합니다.{{% /alert %}}

구성 후 관리 네임스페이스의 상태가 **Configured**로 변경됩니다.

관리 네임스페이스가 구성되면 기본 네임스페이스의 **Additional Information** 섹션에서 전역적으로 설치된 Operator가 관리하는 모든 네임스페이스 목록을 찾을 수 있습니다. 이 목록은 **Global Installation Managed Namespaces** 섹션에 표시됩니다.

{{% alert color="info" %}}
포털에서 관리 네임스페이스를 삭제해도 클러스터에서는 삭제되지 않습니다. 클러스터에서 수동으로 삭제해야 합니다. 또한 기본 네임스페이스의 Operator 구성에서 관리 네임스페이스 목록에서도 제거해야 합니다.

관리 네임스페이스가 클러스터에서 삭제될 때까지 기본 네임스페이스를 포털에서 삭제할 수 없습니다.
{{% /alert %}}

### 다음 단계

모든 것이 구성되면 애플리케이션을 배포할 수 있습니다. 자세한 내용은 [애플리케이션 배포](/developerportal/deploy/private-cloud-deploy/)를 참조하십시오. 애플리케이션은 관리 네임스페이스 내에 배포됩니다.

## 표준에서 Global Operator로 네임스페이스 변환 {#convert-standard-operator-to-global-operator}

현재 표준 Operator를 사용하는 네임스페이스를 다음 단계를 완료하여 Global Operator 관리 네임스페이스로 변환할 수 있습니다.

{{% alert color="info" %}}
변환할 네임스페이스가 기본 네임스페이스와 동일한 클러스터에 있는지 확인하십시오. 또한 두 네임스페이스의 Operator 버전이 동일한지 확인하십시오. 그렇지 않으면 변환이 수행되지 않습니다.
{{% /alert %}}

{{% alert color="info" %}}
현재 네임스페이스를 표준에서 Global Operator로 변환하기 위한 API 지원은 없습니다.
{{% /alert %}}

1. 클러스터 개요 페이지에서 **Convert Namespace**를 클릭하십시오.

   {{< figure src="/attachments/deployment/private-cloud/global-operator/convert-namespace.png" >}}

2. 관리 네임스페이스로 변환할 네임스페이스를 선택하십시오. 표시되는 네임스페이스는 Global Operator 클러스터의 클러스터 유형과 일치합니다. 네임스페이스가 목록에 없으면 페이지 하단의 **here**를 클릭하여 목록을 확장하십시오.
 
    {{< figure src="/attachments/deployment/private-cloud/global-operator/choose-standard-namespace.png" >}}

3. 네임스페이스를 선택한 후 **Next**를 클릭하십시오. 표준 네임스페이스를 Global Operator 관리 네임스페이스로 변환하는 데 필요한 명령이 있는 페이지로 리디렉션됩니다.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/convert-namespace-command.png" >}}

4. 명령을 실행하고 변환을 수행해야 하는 클러스터에 로그인했는지 확인하십시오.

    명령이 성공적으로 실행되면 네임스페이스가 클러스터 측에서 Global Operator 설치의 일부로 관리 네임스페이스로 변환됩니다.

    변환 명령을 실행하지 않고 **Next** 버튼을 직접 클릭하면 관리 네임스페이스 목록에서 표준 네임스페이스의 존재를 확인할 수 없으므로 오류 메시지가 표시됩니다.

    {{% alert color="info" %}}변환할 네임스페이스는 기본 네임스페이스와 동일한 클러스터에 있어야 합니다. 또한 두 네임스페이스의 Operator 버전이 동일한지 확인하십시오. 그렇지 않으면 변환이 수행되지 않습니다.{{% /alert %}}

5. 변환 명령이 성공적으로 실행되면 **Next**를 클릭하여 성공적인 변환을 확인하는 Conversion Summary 팝업 페이지로 리디렉션됩니다. 이 단계에서는 포털 측에서도 네임스페이스 변환이 표시되도록 합니다.

6. **Done**을 클릭하여 Namespaces Overview 페이지로 돌아가십시오.

{{% alert color="info" %}}
표준 네임스페이스가 Global Operator 관리 네임스페이스로 변환된 후, 변환 전 표준 네임스페이스가 있던 클러스터의 상태가 **Conversion Finalized**로 변경됩니다. 클러스터 내의 모든 네임스페이스가 아직 변환되지 않은 경우 상태는 **Conversion in Progress**로 표시됩니다.
{{% /alert %}}

## 라이선스

### Private Cloud License Manager 설치

Global Operator 네임스페이스에서 Private Cloud License Management(PCLM)를 구성하십시오. 자세한 내용은 [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/)를 참조하십시오.

{{% alert color="info" %}}
Global Operator 설치의 경우 PCLM 섹션의 명령을 Global Operator 네임스페이스와 라이선스를 적용해야 하는 관리 네임스페이스 모두에서 실행하십시오. 예상치 못한 결과를 방지하기 위해 관리 네임스페이스와 Global Operator 네임스페이스 모두에 동일한 PCLM 라이선스 세부 정보가 구성되어 있는지 확인하십시오.
{{% /alert %}}

{{% alert color="warning" %}}
Global Operator 기본 네임스페이스와 관리 네임스페이스 모두에서 PCLM에 대한 일관된 Operator 구성을 유지하는 것이 중요합니다. 이를 위해 관리 네임스페이스와 Global Operator 네임스페이스 모두에서 사용되는 서버 URL과 자격 증명 시크릿 이름이 동일해야 합니다. 이 관행에서 벗어나면 예상치 못한 원하지 않는 결과가 발생할 수 있습니다.
{{% /alert %}}

PCLM 서버에 가져온 라이선스는 Global Operator 기본 네임스페이스의 PCLM Statistics 섹션에 표시됩니다. **Runtime** 및 **Operator** 라이선스 모두를 확인할 수 있습니다.

청구된 라이선스는 관리 네임스페이스의 PCLM Statistics 섹션에 표시됩니다.

### 오프라인 라이선스 및 Subscription Secret

Global Operator의 경우 Runtime 및 Operator 라이선스를 모든 관리 네임스페이스에 별도로 적용해야 합니다. 

## 관리 네임스페이스 업그레이드

Global Operator 기본 네임스페이스를 [업그레이드](/developerportal/deploy/private-cloud-upgrade-guide/#upgrade-cluster)하면 Global Operator 네임스페이스 내의 관리 네임스페이스도 자동으로 업그레이드됩니다.
