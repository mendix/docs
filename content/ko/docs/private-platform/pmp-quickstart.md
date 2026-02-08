---
title: "Private Mendix Platform 빠른 시작 가이드"
url: /private-mendix-platform/quickstart/
description: "Private Mendix Platform의 설치 및 업그레이드 프로세스에 대해 설명합니다."
weight: 20
aliases:
    - /private-mendix-platform-quickstart/
---

## 소개

이 문서는 자체 Kubernetes 환경에 Private Mendix Platform과 선택적 구성 요소를 설치하기 위한 종합 가이드를 제공합니다.

Private Mendix Platform은 시크릿 스토리지 사용을 지원합니다. 필요한 경우 Private Mendix Platform 설치 프로그램에서 스토리지 플랜, 데이터베이스 플랜, PCLM 관리자 및 Mendix 관리자 정보를 설정하지 않고 시크릿 볼트(예: AWS, Azure 또는 Hashicorp)에 일부 구성을 저장할 수 있습니다.
 
{{% alert color="info" %}}
시크릿 스토리지를 잘못 사용하면 앱의 보안이 저하될 수 있습니다. 프로덕션 환경에 안전하게 설정되었는지 시크릿 스토어 공급자에게 문의하십시오.
{{% /alert %}}

### 사전 요구사항 {#prerequisites}

Private Mendix Platform은 Mendix 앱의 설치 및 배포를 위해 Mendix on Kubernetes에 의존합니다.

설치 프로세스를 시작하기 전에 필요한 모든 사전 요구사항을 갖추고 있는지 확인하십시오:

* 대상 네임스페이스가 이미 생성된 Kubernetes 인스턴스. 자세한 내용은 [지원 공급자: 지원 버전](/developerportal/deploy/private-cloud-supported-environments/#supported-versions)을 참조하십시오.
* PostgreSQL 12 데이터베이스.
* 파일 스토리지. 자세한 내용은 [지원 공급자: 파일 스토리지](/developerportal/deploy/private-cloud-supported-environments/#file-storage)를 참조하십시오.
* 레지스트리. 자세한 내용은 [지원 공급자: 컨테이너 레지스트리](/developerportal/deploy/private-cloud-supported-environments/#container-registries)를 참조하십시오.
* 도메인.
* PCLM 구성 요소의 경우:

    * Mendix Operator 버전 2.21.0 이상
    * 공개 접근 가능성이 **Yes**로 설정된 전용 Postgres 또는 SQLServer 데이터베이스 서버.

* 선택적으로, Private Mendix Platform 앱에 자체 인증서가 필요한 경우: HTTPS 지원이 있는 TLS 인증서.
* 다음 요구사항을 갖춘 설치 도구 실행 환경:

    * Kubernetes 또는 OpenShift 플랫폼에 대한 관리자 권한이 있는 kubeconfig 파일
    * 콘솔 API 및 마우스 상호 작용을 지원하는 명령줄 터미널. Windows에서는 PowerShell 또는 Windows 명령 프롬프트를 사용할 수 있습니다.
    * OpenShift 클러스터의 경우 OpenShift CLI. 자세한 내용은 [CLI 시작하기](https://docs.openshift.com/container-platform/4.1/cli_reference/getting-started-cli.html)를 참조하십시오.
    * 다른 Kubernetes 플랫폼에 배포하는 경우 Kubectl이 설치되어야 합니다. 자세한 내용은 [kubectl 설치 및 설정](https://kubernetes.io/docs/tasks/tools/)을 참조하십시오.

* 선택적으로, Svix 구성 요소를 설치할 계획인 경우:

    * 기존 PostgreSQL 데이터베이스 인스턴스.
    * 선택적 Redis 서버 버전 6.2.0 이상(태스크 큐 및 캐시용). 대량의 웹훅 호출이 예상되거나 여러 Svix 서버가 있는 경우 고가용성을 위해 Redis를 사용하는 것이 권장됩니다. 모범 사례로서 Redis 서버 재시작 및 업그레이드 시 태스크가 유지되도록 Redis에서 지속성을 활성화하십시오.

* AWS Secret Manager를 사용할 계획인 경우 [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/)에 설명된 대로 클러스터에 AWS 공급자를 설치하십시오.
* Azure Key Vault를 사용할 계획인 경우 [Azure Key Vault로 시크릿 스토어 구성](/developerportal/deploy/secret-store-credentials/#azure-key-vault)을 참조하십시오.

## Mendix Operator 설치 및 구성 {#install-operator}

Mendix Operator를 설치하고 구성하려면 다음 단계를 수행하십시오:

1. [Private Mendix Platform 다운로드 포털](https://privateplatform.mendix.com/)에서 릴리스 바이너리를 다운로드하십시오. 다운로드 포털에 접근할 수 없는 경우 Mendix 파트너에게 문의하십시오.

2. 릴리스 바이너리를 Windows 또는 Linux 서버의 로컬 폴더에 압축 해제하십시오. 릴리스 바이너리에는 다음 파일이 포함되어 있습니다:

    * **Tools** - PCLM 관리에 사용할 수 있는 *mx-pclm-cli*
    * Private Mendix Platform 차트 및 Svix 차트를 배포하고 관리하는 데 사용되는 **helm** 및 **helmfile** 도구
    * **images** - Private Mendix Platform 이미지, PCLM 이미지, Svix 이미지, 테스트 애플리케이션 이미지
    * **Installer** - 설치 도구
    * **mxpc-cli** - Mendix Operator를 관리하거나 구성하는 데 사용할 수 있는 설치 도구
    * **charts** - Private Mendix Platform 차트 및 Svix 차트를 포함한 차트
    
    {{< figure src="/attachments/private-platform/pmp-binary.png" class="no-border" >}}

3. 선택 사항: 클러스터가 통과 가능한 네트워크로 퍼블릭 레지스트리에 연결할 수 있는 경우 아래 4단계로 건너뛰십시오. 그렇지 않으면 다음 단계를 수행하여 설치를 초기화하십시오:

    1. 에어갭 환경의 프라이빗 리포지토리에 이미지를 업로드하십시오.

        ```text
        ~/mpp-binary-linux$ ./installer init  migrate --help
        Migrate Mendix Private Platform related image to your own registry

        Usage:
        installer init migrate [flags]
        Flags:
            -h, --help                 help for migrate
            -r, --registryurl string   registry url (required)
            -e, --repo string          Repository name
            -u, --username string      Username (required) for your private registry
        ```

        대상 이미지 이름은 `${registryurl }/${repo}/mendix-private-platform: ${tag}`입니다.
    
    2. `registryurl` 및 `repo`는 입력 매개변수에서 읽습니다. `tag`는 설치 프로그램에 의해 자동으로 읽힙니다. 리포지토리가 존재하지 않는 경우 `init migrate` 명령을 실행하기 전에 생성해야 합니다.

        ```text
        ~/mpp-binary-linux$ ./installer init migrate   -r [registry] -u  user -e [repositoryName]
        Please enter user password: ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

        Confirm password: ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
        the config checksum is empty
        The image destination[REDACTED] svix-server:v0.75.0
        The image destiation [REDACTED] mendix-private-platform:1.4.0.80d447b1
        the config checksum is empty
        The image destiation [REDACTED] mxpc-test:1.0
        the config checksum is empty
        The image destiation [REDACTED] privatecloud-license-manager:0.3.0
        svix-server_v0.75.0 => [REDACTED] svix-server:v0.75.0 - ok
        mendix-private-platform_1.4.0.80d447b1 => [REDACTED] mendix-private-platform:1.4.0.80d447b1 - ok
        mxpc-test_1.0 => [REDACTED] mxpc-test:1.0 - ok
        privatecloud-license-manager_0.3.0 => [REDACTED] privatecloud-license-manager:0.3.0 - ok
        ```

    3. 기본적으로 mxpc-cli 도구는 최신 버전의 Mendix Operator를 설치합니다. 다음 명령을 사용하여 다른 Mendix Operator 버전을 지정할 수 있습니다: `./installer operator init -v="version number"`

4. 다음 단계를 수행하여 기본 설치를 진행하십시오:

    1. 다음 명령 중 하나를 실행하십시오. `-n`은 네임스페이스를 나타냅니다:
    
        * `./mxpc-cli installer -n=<namespace name>` - [Standard](/developerportal/deploy/standard-operator/) 모드로 Operator를 설치
        * `./mxpc-cli installer --global -n=<namespace name>` - [Global](/developerportal/deploy/global-operator/) 모드로 Operator를 설치. 이 설치 유형에는 Global 네임스페이스를 사용해야 합니다.

            Global 설치로 Operator 및 Agent와 함께 클러스터를 설치하고 구성하려면 Operator 버전 2.21.2 이상을 사용해야 합니다.
    
    2. **Base Installation**을 클릭한 다음 클러스터 유형을 선택하십시오.

        {{< figure src="/attachments/private-platform/pmp-install1.png" class="no-border" >}}

    3. **Run Installer**를 클릭하여 클러스터에 Mendix Operator를 설치하십시오.

5. 다음 단계를 수행하여 네임스페이스를 구성하십시오:

    1. **Configure Namespace**를 클릭하십시오.
    2. 선택 사항: Operator를 Global 모드로 실행하려면 **Global Operator**를 클릭하십시오.

        위의 4단계에서 선택한 Global 네임스페이스와 다른 네임스페이스를 사용해야 합니다. Mendix 앱을 배포할 계획인 관리되는 네임스페이스로 의도된 네임스페이스를 사용하지 마십시오. Global Operator 네임스페이스는 관리되는 네임스페이스와 별도여야 합니다. 그렇지 않으면 예기치 않은 결과가 발생할 수 있습니다.

    3. 선택 사항: AWS Secret Manager를 사용하지 않는 경우 **Database Plan**을 클릭하고 필수 정보를 입력하십시오.
        
        {{< figure src="/attachments/private-platform/pmp-install2.png" class="no-border" >}}

    4. 선택 사항: AWS Secret Manager를 사용하지 않는 경우 **Storage Plan**을 클릭하고 필수 정보를 입력하십시오.
    5. **Ingress**를 클릭하고 필수 정보를 입력하십시오.
        
        {{< figure src="/attachments/private-platform/pmp-install3.png" class="no-border" >}}
    
    6. **Registry**를 클릭하고 필수 정보를 입력하십시오.
    7. **Review and Apply** > **Evaluate Configuration**을 클릭하십시오.
    8. 필요한 변경 사항을 적용하거나 **Apply Configuration**을 클릭하십시오.
        
        {{< figure src="/attachments/private-platform/pmp-install4.png" class="no-border" >}}
    
    9. **Exit Installer** > **OK**를 클릭하십시오.
    
        {{< figure src="/attachments/private-platform/pmp-install5.png" class="no-border" >}}

## 선택 사항: AWS Secret Manager 구성

데이터베이스 플랜 또는 스토리지 플랜에 시크릿 공급자 옵션을 사용하려면 AWS Secret Manager에서 다음 키를 구성하십시오:

### 데이터베이스 플랜 키

| 데이터 유형 | 키 | 예시 값 |
| --- | --- | --- |
| 데이터베이스 유형(예: PostgreSQL) | **database-type** | `PostgreSQL` |
| 데이터베이스 Jdbc URL | **database-jdbc-url**    | `jdbc:postgresql://pg.example.com:5432/my-app-1?sslmode=prefer` |
| 데이터베이스 호스트 | **database-host**    | `pg.example.com:5432` |
| 데이터베이스 이름    | **database-name** | `my-app-1` |
| 데이터베이스 사용자 이름 | **database-username** | `my-app-user-1` |
| 데이터베이스 비밀번호 | **database-password**    |  |

### 스토리지 플랜 키

| 데이터 유형 | 키 | 예시 값 |
| --- | --- | --- |
| 스토리지 서비스 이름 | **storage-service-name** | `com.mendix.storage.s3` |
| S3 스토리지 엔드포인트 | **storage-endpoint** | `https://my-app-bucket.s3.eu-west-1.amazonaws.com` |
| S3 스토리지 접근 키 ID | **storage-access-key-id** | `AKIA################` |
| S3 스토리지 시크릿 접근 키 | **storage-secret-access-key** | `A###################################` |
| S3 하위 디렉터리(또는 S3 유사 스토리지 시스템의 버킷 이름) | **storage-bucket-name** | `subdirectory` |

{{% alert color="info" %}}
현재 AWS S3 또는 S3 호환 공급자만 지원됩니다.
{{% /alert %}}

### 관리자 비밀번호

| 데이터 유형 | 키 |
| --- | --- |
| PCLM 관리자 비밀번호 | **pclm-admin-password** |
| Private Mendix Platform 관리자 비밀번호 | **mx-admin-password** |

## 선택 사항: Azure Key Vault 구성

데이터베이스 플랜 또는 스토리지 플랜에 시크릿 공급자 옵션을 사용하려면 Azure Key Vault에서 다음 키를 구성하십시오. 별도의 언급이 없는 한 모든 키가 필요합니다.

### 데이터베이스 플랜 키

| 데이터 유형 | 키 | 예시 값 |
| --- | --- | --- |
| 데이터베이스 유형(예: SQLSERVER 또는 PostgreSQL) | **database-type** | `PostgreSQL` |
| 데이터베이스 Jdbc URL | **database-jdbc-url** | `jdbc:postgresql://test.database.azure.com:5432/testpmp?sslmode=prefer` |
| 데이터베이스 호스트 | **database-host** | `test.database.azure.com:5432` |
| 데이터베이스 이름 | **database-name** | `testpmp` |
| 데이터베이스 사용자 이름 | **database-username** | `pxx` |
| 데이터베이스 비밀번호 | **database-password**    | `passxx` |

### 스토리지 플랜 키

| 데이터 유형 | 키 | 예시 값 | 비고 |
| --- | --- | --- | --- |
| 스토리지 서비스 이름 | **storage-service-name** | `com.mendix.storage.azure` | |
| Azure 스토리지 계정 | **storage-azure-account-name** | `examplename` | 이 값은 정적 인증 방법을 사용하는 Azure Blob Storage에만 필요합니다. |
| Azure 스토리지 계정 키 | **storage-azure-account-key** | `examplekey` | 이 값은 정적 인증 방법을 사용하는 Azure Blob Storage에만 필요합니다. |
| Azure 스토리지 컨테이너 이름 | **storage-azure-container** | `examplecontainer` | |
| 파일 스토리지에 구성된 CA 신뢰 사용 | **storage-use-ca-certificates** | `true` | |
| Azure에 HTTP 사용 | **storage-azure-use-https** | `true` | |
| 앱에서 삭제 시 스토리지에서 파일 삭제 | **storage-perform-delete** | `true` | |
| Azure Blob Storage에 관리 ID 인증 사용 | **storage-azure-use-default-azure-credential** | `false` | Azure Blob Storage에 관리 ID 인증을 사용하려면 `true`로 설정하십시오. |
| Azure Blob Storage 엔드포인트 | **storage-azure-blob-endpoint** | `https://example.blob.core.windows.net/` | |

### 관리자 비밀번호

| 데이터 유형 | 키 |
| --- | --- |
| PCLM 관리자 비밀번호 | **pclm-admin-password** |
| Private Mendix Platform 관리자 비밀번호 | **mx-admin-password** |

## Private Cloud License Manager 설치 {#install-pclm}

Private Cloud License Manager는 Private Mendix Platform의 필수 구성 요소입니다. Platform을 설치하기 전에 다음 단계를 수행하여 PCLM을 설치하십시오:

1. `./installer component -n=<namespace name>` 명령을 실행하십시오. `-n`은 네임스페이스를 나타냅니다. 네임스페이스는 Private Mendix Platform에 사용할 네임스페이스와 동일해야 합니다.
2. **PCLM**을 선택하여 PCLM을 설치하십시오.
3. 다음 매개변수를 지정하십시오:

    * **Databasetype** – 데이터베이스 유형, **postgres**(기본값) 또는 **sqlserver**.
    * **DB Authentication mode** - 데이터베이스 인증 모드:
        * **static** (기본값)
        * **aws-irsa**
        * **azure-wi**
    * **Host** – 데이터베이스 서비스의 호스트 이름.
    * **Port** – 데이터베이스에 접근하는 데 사용되는 포트. 기본값은 *5432*입니다.
    * **Database Name** – PCLM 데이터를 보관할 데이터베이스 이름.
    * **Database User** – 사전 요구사항 섹션에 설명된 권한이 있는 데이터베이스 사용자.
    * **Database Password** – 데이터베이스 사용자의 비밀번호. 이 설정은 **DB Authentication mode**가 **static**으로 설정된 경우에만 사용할 수 있습니다.
    * **AWS-iam-Role** – AWS IAM 역할. 이 설정은 **DB Authentication mode**가 **aws-irsa**로 설정된 경우에만 사용할 수 있습니다.
    * **Azure-client-id** – Azure 클라이언트 ID. 이 설정은 **DB Authentication mode**가 **azure-wi**로 설정된 경우에만 사용할 수 있습니다.
    * **ImageRepo** – 이미지 리포지토리 위치, 예: `private-cloud.registry.mendix.com/privatecloud-license-manager`.
    * **Imagetag** – Docker 이미지 태그, 예: `0.3.0`.
    * **DB SSL cert file** – 데이터베이스가 엄격한 TLS를 사용하는 경우 SSL Root 인증서 파일의 위치를 제공하십시오. 그렇지 않으면 이 필드를 비워 두십시오.
    * **Admin Password** – 새 PCLM 관리자 비밀번호. PCLM 서버가 설정되면 기본 비밀번호가 있는 *administrator* 사용자가 포함됩니다. 이 비밀번호는 즉시 변경해야 합니다.
    * **PCLM Operator User** – 새 PCLM 운영자 사용자.
    * **PCLM Operator Password** – 새 PCLM 운영자 비밀번호.
    * **Global Operator Namespace** - Mendix Operator를 Global 모드로 사용하는 경우 Global 네임스페이스 정보를 입력하십시오. 그렇지 않으면 이 필드를 비워 두십시오.
    * **Customized cluster domain** - 기본값은 `cluster.local`입니다. 다른 내부 클러스터 도메인을 사용하는 경우 값을 변경하십시오.

4. **Install PCLM**을 클릭하십시오.

## 선택 사항: Svix 구성 요소 설치 {#install-svix}

웹훅을 사용하려면 Svix가 필요합니다. 다음 단계를 수행하여 Svix 구성 요소를 설치하십시오:

1. 선택 사항: AWS Secret Manager를 사용하려면 다음 단계를 수행하여 구성하십시오:

    1. 다음 정보를 제공하여 AWS Secret Manager에서 시크릿을 구성하십시오:

        * **POSTGRES DSN** - 키는 `svix-db-dsn`입니다. 예시 값은 `postgresql://postgres:postgres@pgbouncer/postgres`와 유사할 수 있습니다.
        * **Redis DSN** - 이 값은 Svix에도 Redis를 사용하는 경우에만 필요합니다. 키는 `svix-redis-dsn`입니다. 예시 값은 `redis://redis:6379`와 유사할 수 있습니다.
    
    2. **secretsmanager:GetSecretValue** 및 **secretsmanager:DescribeSecret** 권한이 있는 IAM 역할을 구성하고 Svix 파드가 시크릿 정보를 검색하는 데 사용할 Service Account를 수임하도록 허용하십시오.

2. 선택 사항: 자체 서명 TLS 인증서를 사용하는 경우 다음 단계를 수행하여 맞춤 자체 서명 TLS 인증서로 프라이빗 Svix 서버를 빌드하고 배포하십시오:

    1. 프라이빗 Svix 서버 이미지를 빌드하기 위해 다음 Docker 파일을 준비하십시오:

        ```text
        # Base build
        FROM svix/svix-server:v1.25.0
        # Add customer certification into system cert trust chain
        COPY ./customer.crt /usr/local/share/ca-certificates/
        USER root
        RUN update-ca-certificates
        # Start svix service
        USER appuser
        CMD \
            set -ex ; \
            if [ ! -z "$WAIT_FOR" ]; then \
                WAIT_FOR_ARG="--wait-for 15"; \
            fi ; \
            exec svix-server --run-migrations $WAIT_FOR_ARG
        ```

    2. 위의 Docker 파일과 자체 서명 TLS 인증서 파일로 프라이빗 Svix 서버 이미지를 빌드하십시오:
    
        ```text
        docker build -t {customer-private-image-registry-url}/svix/svix-server:v1.25.tls
        ```
    
    3. 프라이빗 이미지 레지스트리에 프라이빗 Svix 서버 이미지를 푸시하십시오:
    
        ```text
        docker push {customer-private-image-registry-url}/svix/svix-server:v1.25.tls
        ```
    
3. `./installer component -n=<namespace name>` 명령을 실행하십시오. 네임스페이스는 Private Mendix Platform에 사용할 네임스페이스와 동일해야 합니다.
4. **Svix**를 선택한 다음 다음 매개변수를 지정하십시오:

    * **Image** - Svix 이미지 경로. 기본 경로는 `svix/svix-server:v1.25.0`입니다. 자체 서명 TLS 인증서를 사용하는 경우 이 경로를 `{customer-private-image-registry-url}/svix/svix-server:v1.25.tls`로 설정하십시오.
    * **Use Secret Provider** - 선택 사항. AWS Secret Manager 또는 Azure Key Vault를 사용하려면 이 옵션을 선택하십시오. 이 옵션을 선택하면 다음 추가 필드가 활성화됩니다:

        * AWS Secret Manager의 경우:

            * **Secret Provider** - **AWS**로 설정.
            * **AWS-Role-ARN** - 지정된 Secret Manager에 접근할 수 있는 AWS 역할 ARN.
            * **AWS SecretManager Name** - 민감한 데이터가 저장된 AWS Secret Manager 이름.

        * Azure Key Vault의 경우:

            * **Secret Provider** - **Azure**로 설정.
            * **Client ID** - Private Mendix Platform이 Azure 리소스에 접근할 수 있도록 하는 Azure Managed Identity에 할당된 Client ID를 입력하십시오.
            * **Tenant ID** - Key Vault의 Directory ID를 입력하십시오.
            * **Key Vault Name** - Key Vault 이름을 입력하십시오.
            * **Use identity auth for Blob** - 관리 ID 인증으로 Azure Blob Storage를 사용하는 경우 **True**로 설정하십시오. 기본값은 **false**입니다.

    * **POSTGRES_DSN** - AWS Secret Manager를 사용하지 않는 경우에만 사용 가능합니다. Postgres DSN, 예: `postgresql://postgres:postgres@pgbouncer/postgres`.
    * **Use Redis** - 선택 사항. 메시지 캐시 및 큐에 Redis를 사용하려면 이 확인란을 선택하십시오.
    * **REDIS_DSN** - AWS Secret Manager를 사용하지 않는 경우에만 사용 가능합니다. Redis DSN, 예: `redis://redis:6379`. 이 필드는 **Use Redis** 확인란을 선택한 경우에만 사용할 수 있습니다.

5. **Install Svix** 또는 **Upgrade Svix**를 클릭하십시오.

{{% alert color="info" %}}
설치 프로그램은 파드의 실행 상태를 감지하지 않습니다. 문제가 발생하면 파드가 올바르게 실행되고 있는지 확인하십시오.
{{% /alert %}}

## Private Mendix Platform 설치

다음 단계를 수행하여 Private Mendix Platform을 설치하십시오:

1. `./installer platform -n=<namespace name>` 명령을 실행하십시오. `-n`은 Svix 및 PCLM을 설치한 것과 동일한 네임스페이스입니다.
2. **Configure Namespace**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-install6.png" class="no-border" >}}

3. **Configure**를 클릭한 다음 다음 매개변수를 지정하십시오:

    * **AppName** - 기본 앱 이름은 `mxplatform`입니다. 필요에 따라 변경할 수 있습니다.
    * **DatabasePlan** - AWS Secret Manager를 사용하려면 **USE-Secret-Provider**를 선택하십시오. 설치 프로그램은 AWS Secret Manager에 설정된 데이터베이스 구성을 사용합니다. 그렇지 않으면 [Mendix Operator 설치 및 구성](#install-operator)에서 생성한 데이터베이스 플랜의 이름을 입력하십시오.
    * **Storageplan** - AWS Secret Manager를 사용하려면 **USE-Secret-Provider**를 선택하십시오. 설치 프로그램은 AWS Secret Manager에 설정된 스토리지 구성을 사용합니다. 그렇지 않으면 [Mendix Operator 설치 및 구성](#install-operator)에서 생성한 스토리지 플랜의 이름을 입력하십시오.
    * **AppUrl** - 실행 중인 앱에 연결할 수 있는 엔드포인트. 플랫폼에서 지원하는 URL이어야 합니다. 비워 두면 Mendix Operator가 생성합니다.
    * **EnableTLS** - Mendix 앱의 Ingress 또는 OpenShift Router에 대해 TLS를 활성화하거나 비활성화할 수 있습니다. 기본값은 기본 설정을 사용하는 것입니다.
    * **TLS option** - TLS 인증서가 포함된 기존 `kubernetes.io/tls` 시크릿을 사용하거나 `tls.crt` 및 `tls.key` 값을 직접 제공할 수 있습니다.
    * **TLS Secret** - TLS 인증서가 포함된 기존 `kubernetes.io/tls` 시크릿. 인증서 및 키와 함께 사용할 수 없습니다. 비워 두면 Ingress Controller 또는 OpenShift Router의 기본 TLS 인증서가 사용됩니다.
    * **TLS certificate** 및 **TLS key** – `tls.crt` 및 `tls.key` 값을 직접 제공할 수 있습니다(프로덕션 환경에서는 권장되지 않음). secretName과 함께 사용할 수 없습니다.
    * **SourceUrl** - 배포 패키지의 위치, `oci-image://<your image location>` 형식. 이 위치는 클러스터에서 접근 가능해야 합니다.
    * **Replicas** – 앱을 배포하면 자동으로 하나의 복제본이 배포됩니다. 데이터가 중복될 수 있으므로 직접 복제본 수를 늘리지 마십시오.

    {{< figure src="/attachments/private-platform/pmp-install7.png" class="no-border" >}}

4. **Runtime**을 클릭한 다음 다음 매개변수를 지정하십시오:

    * **MxAdminPassword** - 선택 사항. 관리자 사용자의 비밀번호, AWS Secret Manager를 사용할 계획이 없는 경우 필요합니다. 최소 12자 이상이어야 하며, 최소한 하나의 숫자, 하나의 대문자, 하나의 소문자 및 하나의 기호가 포함되어야 합니다.
    * **dtapmode** - 프로덕션 배포의 경우 이 값을 **P**로 설정해 두십시오. 앱 개발(예: 인수 테스트)의 경우 값을 **D**로 설정하십시오.
    * **ApplicationRootUrl** - 선택 사항. SSO 사용 시 또는 이메일 전송 시와 같이 Private Mendix Platform의 URL을 수동으로 지정하십시오. 이 기능에 대한 자세한 내용은 [ApplicationRootUrl을 수동으로 설정해야 함](/developerportal/deploy/private-cloud-operator/#applicationrooturl-needs-to-be-set-manually)을 참조하십시오.
    * **Use Secret Provider** - 선택 사항. AWS Secret Manager 또는 Azure Key Vault를 사용하려면 이 옵션을 선택하십시오. 이 옵션을 선택하면 다음 추가 필드가 활성화됩니다:

        * AWS Secret Manager의 경우:

            * **Secret Provider** - **AWS**로 설정.
            * **AWS-Role-ARN** - 지정된 Secret Manager에 접근할 수 있는 [AWS 역할 ARN](https://docs.mendix.com/developerportal/deploy/secret-store-credentials/#aws-secrets-manager).
            * **AWS SecretManager Name** - 민감한 데이터가 저장된 AWS Secret Manager 이름.

        * Azure Key Vault의 경우:

            * **Secret Provider** - **Azure**로 설정.
            * **Client ID** - Private Mendix Platform이 Azure 리소스에 접근할 수 있도록 하는 Azure Managed Identity에 할당된 Client ID를 입력하십시오.
            * **Tenant ID** - Key Vault의 Directory ID를 입력하십시오.
            * **Key Vault Name** - Key Vault 이름을 입력하십시오.
            * **Use identity auth for Blob** - 관리 ID 인증으로 Azure Blob Storage를 사용하는 경우 **True**로 설정하십시오. 기본값은 **false**입니다.

5. **Enabled Functions** 섹션에서 활성화하거나 비활성화할 기능을 선택하거나 해제하십시오:
 
    * **Persist Config** - 활성화하면 이 설정은 Private Mendix Platform 구성을 잠가 사용자 인터페이스에서 더 이상 수정할 수 없도록 합니다.
    * **Project Management** - 권장. 앱 프로젝트를 만들고 관리할 수 있습니다. 포털 전체에서 앱 프로젝트 및 관련 설정을 활성화합니다. CI/CD 기능에 필수입니다.
    * **Marketplace** - 권장. Private Platform의 Marketplace 기능을 사용하여 Marketplace 콘텐츠를 업로드, 가져오기 및 관리할 수 있습니다. 여기서 활성화된 Marketplace는 Private Mendix Platform 내에서 완전히 호스팅됩니다.
    * **Marketplace Approvals** - 선택 사항. 활성화하면 사용자가 프라이빗 Marketplace에 게시하는 콘텐츠는 게시 전에 관리자 승인이 필요합니다.
    * **Marketplace Import** - 선택 사항. 외부 소스로 콘텐츠 가져오기를 활성화합니다.
    * **IDP** - 선택 사항. IdP 통합을 구성하여 SSO를 사용한 로그인을 활성화합니다.
    * **Webhook** - 선택 사항. 웹훅을 통해 플랫폼과 외부 시스템 간에 정보를 전송할 수 있으며, 앱, 사용자, 그룹, Marketplace 및 CI/CD 관련 이벤트에 의해 트리거될 수 있습니다.

6. **Review and Apply** > **Evaluate Configuration**을 클릭하십시오.
7. 필요한 변경 사항을 적용하거나 **Run Test App**을 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-install9.png" class="no-border" >}}

8. 테스트 설치가 완료된 후 나중에 설정을 재사용하여 설치에 적용할 수 있도록 설치 프로그램을 열어 두십시오.
9. 위의 3단계에서 **AppURL**로 구성한 엔드포인트 URL을 열고 테스트 파일을 업로드할 수 있는지 확인하십시오.
10. Private Mendix Platform 설치 프로그램에서 **Apply Configuration**을 클릭하십시오.
11. **OK**를 클릭하여 테스트 설치를 제거하고 Private Mendix Platform을 설치하십시오.

{{< figure src="/attachments/private-platform/pmp-install10.png" class="no-border" >}}

### Private Mendix Platform용 Maia 설치

[Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)는 개발자의 애플리케이션 개발을 지원하기 위해 [인공 지능(AI)](https://www.mendix.com/glossary/artificial-intelligence-ai/) 및 [머신 러닝(ML)](https://www.mendix.com/glossary/machine-learning/)을 활용하는 Mendix Platform 기능을 말합니다. Private Mendix Platform은 현재 Maia 지원 앱 생성을 지원합니다. Maia Chat과 같은 다른 Maia 기능은 향후 릴리스에서 제공될 예정입니다.

{{% alert color="info" %}}
이 기능은 선택된 고객에게 제공되는 베타 릴리스로 제공됩니다. 베타 릴리스에 대한 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오.
{{% /alert %}}

Private Mendix Platform에서 Maia를 활성화하려면 다음 단계를 수행하십시오:

1. 다음 사전 요구사항을 충족하는지 확인하십시오:

    * Amazon Bedrock LLM API 키를 준비하십시오.
    * Maia 서비스를 노출할 수 있는지 확인하십시오. 설치 프로그램은 현재 Ingress 방법만 지원합니다. 다른 방법(예: Openshift route, HAPROXY 등)을 사용하는 경우 Private Mendix Platform 팀에 문의하십시오.
    * Private Mendix Platform URL을 알고 있는지 확인하십시오.

2. Private Mendix Platform 다운로드 포털에서 *maia-appgen-pmp.zip* 파일을 다운로드하십시오.
3. *maia-appgen-pmp.zip* 파일의 압축을 해제하십시오.
4. 다음 명령을 실행하여 *maia-appgen-pmp* 디렉터리를 설치 프로그램의 *images* 하위 디렉터리에 복사하십시오: `cp -r maia-appgen-pmp <your installer>/pmp-binary-linux/images`
5. `installer init` 명령을 사용하여 Maia 디렉터리를 프라이빗 레지스트리에 업로드하십시오.
6. 다음 명령을 실행하십시오: `./installer component -n=<Private Mendix Platform namespace>`. Maia는 Private Mendix Platform과 동일한 네임스페이스에 설치해야 합니다.
7. **Components at PMP ns** 섹션에서 **Maia**를 선택하십시오.
8. 다음 설정을 구성하십시오:

    * **Image Prefix** - *maia-appgen-pmp* 이미지가 위치한 레지스트리 및 네임스페이스(존재하는 경우)
    * **Image Name** - 이미지 이름, 예: *maia-appgen-pmp*
    * **Image Tag** - AppGen 이미지의 이미지 태그
    * **Enable Ingress** - Nginx 인그레스 활성화 또는 비활성화
    * **MXASSIST_COPILOT_AWS_SERVICE_REGION** - Copilot AWS 서비스 리전
    * **MXASSIST_COPILOT_AWS_BEDROCK_REGION** - Copilot AWS Bedrock 리전
    * **Amazon_Bedrock_API_KEY** - AWS Bedrock API 키
    * **MXASSIST_COPILOT_MXID3_URL** - Private Mendix Platform의 OIDC URL, 다음 형식: `<your Private Mendix Platform URL>/oidc/`

9. Maia 설치 후 Studio Pro에서 연결하려면 다음 단계를 수행하십시오:

    1. Private Mendix Platform 다운로드 포털에서 Studio Pro 11.6용 패치 파일을 다운로드하십시오.
    2. `MaiaAppGenServiceBaseUrlP` 키를 *maia-appgen-pmp*의 노출된 URL로 수동으로 설정하십시오.

#### Maia 설치 제거

Maia를 설치 제거하려면 다음 명령을 실행하여 수동으로 수행해야 합니다: `helm unstall maia-appgen  -n=< maia namespace>`.

### Private Mendix Platform용 PDF 문서 생성 설치

PDF Document Generation 모듈을 사용하면 앱의 일반 페이지를 기반으로 픽셀 단위의 정밀한 PDF 문서를 생성할 수 있습니다.

Private Mendix Platform에서 PDF Document Generation을 활성화하려면 다음 단계를 수행하십시오:

1. Private Mendix Platform 다운로드 포털에서 *document-generation-service.zip* 파일을 다운로드하십시오.
2. *document-generation-service.zip* 파일의 압축을 해제하십시오.
3. 다음 명령을 실행하여 *document-generation-service.zip* 디렉터리를 설치 프로그램의 *images* 하위 디렉터리에 복사하십시오: `cp -r maia-appgen-pmp <your installer>/pmp-binary-linux/images`
4. `installer init` 명령을 사용하여 디렉터리를 프라이빗 레지스트리에 업로드하십시오.
5. 다음 명령을 실행하십시오: `./installer component -n=<Private Mendix Platform namespace>`. PDF Document Generation은 Private Mendix Platform과 동일한 네임스페이스 또는 다른 네임스페이스에 설치할 수 있습니다.
6. **Components at PMP ns** 섹션에서 **PDF Gen**을 선택하십시오.
7. 다음 설정을 구성하십시오:

    * **Namespace** - PDF Document Generation이 설치될 네임스페이스
    * **Image Prefix** - *document-generation-service* 이미지가 위치한 레지스트리 및 네임스페이스(존재하는 경우)
    * **Image Name** - 이미지 이름, 예: *document-generation-service*
    * **Image Tag** - AppGen 이미지의 이미지 태그, 예: *1.0.2*

#### PDF Document Generation 설치 제거

PDF Document Generation을 설치 제거하려면 다음 단계를 수행하십시오:

1. 다음 명령을 실행하여 네임스페이스에서 PDF Document Generation을 설치 제거하십시오: `helm uninstall mx-private-document-generation  -n=<PDF Document Generation namespace>`.
2. 다음 명령을 실행하여 Private Mendix Platform 네임스페이스의 `pmp-component-config` configmap에서 PDF 데이터를 제거하십시오: `kubectl edit configmap/pmp-component-config -n=<Private Mendix Platform namespace>`.

### Private Mendix Platform 설치 후 Svix 및 PCLM 구성 요소 추가

Svix 및 PCLM 구성 요소가 올바르게 작동하려면 Private Mendix Platform 자체를 설치하기 전에 설치해야 합니다. Platform 설치 후 구성 요소를 추가하려면(예: 웹훅을 활성화하기로 결정하여 Svix를 설치하려는 경우) 다음 단계를 수행해야 합니다:

1. [Private Cloud License Manager 설치](#install-pclm) 및 [Svix 구성 요소 설치](#install-svix)에 설명된 대로 구성 요소를 설치하십시오.
2. `./installer platform -n=<namespace name>` 명령을 실행하십시오. `-n`은 Svix 및 PCLM을 설치한 것과 동일한 네임스페이스입니다.

설치 명령을 다시 실행하면 설치 프로그램이 추가한 구성 요소에서 관련 정보를 가져옵니다.

## Private Mendix Platform 업그레이드 {#upgrade}

이전에 Private Mendix Platform을 설치한 경우 다음 단계를 수행하여 업그레이드할 수 있습니다:

1. Mendix Operator 버전이 2.12 이상인지 확인하십시오.
2. `./installer platform -n=<namespace name>` 명령을 실행하십시오. `-n`은 Private Mendix Platform이 설치된 네임스페이스를 나타냅니다.
3. **Upgrade Namespace**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-upgrade1.png" class="no-border" >}}

4. 다음 설정을 확인하십시오:
    
    * **Persist Config** - 활성화하면 이 설정은 Private Mendix Platform 구성을 잠가 사용자 인터페이스에서 더 이상 수정할 수 없도록 합니다.
    * **Project Management** - 권장. 앱 프로젝트를 만들고 관리할 수 있습니다.
    * **Marketplace** - 권장. Private Platform의 Marketplace 기능을 사용할 수 있습니다.
    * **Marketplace Approvals** - 선택 사항. 활성화하면 관리자 승인이 필요합니다.
    * **Marketplace Import** - 선택 사항. 외부 소스로 콘텐츠 가져오기를 활성화합니다.
    * **IDP** - 선택 사항. IdP 통합을 구성하여 SSO를 사용한 로그인을 활성화합니다.
    * **Webhook** - 선택 사항. 웹훅을 통해 플랫폼과 외부 시스템 간에 정보를 전송할 수 있습니다.

5. **Run Upgrade**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-upgrade2.png" class="no-border" >}}

{{% alert color="info" %}}
PCLM 또는 Maia 구성 요소를 업그레이드하려면 업그레이드 마법사에서 관련 옵션을 선택하십시오. Svix 구성 요소의 경우 Svix 패널을 사용하여 직접 업그레이드할 수 있습니다.
{{% /alert %}}

## Private Platform 구성 마법사 실행 {#wizard}

Private Mendix Platform을 설치한 후 일회성 구성 마법사를 실행하여 필요한 설정을 구성하십시오.

마법사를 시작하려면 사용자 ID *Admin*으로 Private Mendix Platform 앱에 로그인하십시오. 마법사가 자동으로 시작되어 필요한 구성 단계를 안내합니다. 사용 가능한 옵션에 대한 자세한 내용은 아래 섹션을 참조하십시오.

{{% alert color="info" %}}
Private Mendix Platform에서 활성화된 설정은 구매한 서비스 패키지에 따라 달라집니다. 따라서 아래 나열된 일부 설정이 플랫폼에서 비활성화될 수 있습니다.
{{% /alert %}}

### IdP 설정 구성

이 단계에서 사용자에 대해 SSO를 통한 로그인을 활성화할지 여부를 지정할 수 있습니다. Private Mendix Platform은 OIDC 및 SAML ID 공급자를 지원합니다.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" class="no-border" >}}

### 관리 설정 구성

이 단계에서 Private Mendix Platform에서 앱 프로젝트를 만들고 관리할지 여부를 지정할 수 있습니다. 프로젝트 관리를 활성화하면 프로젝트에 사용할 Git 호스트도 지정해야 합니다. Private Mendix Platform이 CI/CD 기능을 지원하려면 이 옵션을 활성화해야 합니다.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" class="no-border" >}}

### CI/CD 설정 구성

이 단계에서 앱에 대한 CI/CD 기능을 활성화할 수 있습니다. 이 옵션을 활성화하면 CI 시스템을 지정하고, 필요한 설정을 구성하고, Kubernetes 클러스터를 등록해야 합니다.

{{< figure src="/attachments/private-platform/pmp-wizard3.png" class="no-border" >}}

### Marketplace 설정 구성

이 단계에서 앱이 Marketplace에서 커넥터를 업로드하고 다운로드할 수 있도록 활성화할 수 있습니다.

{{% alert color="info" %}}
여기서 활성화된 Marketplace는 Private Mendix Platform 내에서 완전히 호스팅됩니다.
{{% /alert %}}

{{< figure src="/attachments/private-platform/pmp-wizard4.png" class="no-border" >}}

### 맞춤 브랜딩 설정 구성

이 단계에서 앱의 브랜딩을 맞춤 설정할 수 있습니다. 상단 바에 표시되는 이름을 변경하거나, 새 로고를 업로드하거나, 기본 로그인 페이지 이미지를 변경할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-wizard5.png" class="no-border" >}}

### 설정 검토 및 확인

마법사 실행이 완료되면 Private Mendix Platform에 로그인됩니다. 이전에 선택한 설정이 화면에 표시됩니다. 지금 또는 나중에 화면 왼쪽 상단의 **Settings** 메뉴를 사용하여 검토하고 업데이트할 수 있습니다.

## 다음 단계

설치 및 첫 번째 구성 마법사를 완료한 후 나머지 필요한 설정을 구성하십시오. 자세한 내용은 [Private Mendix Platform 구성](/private-mendix-platform-configuration/)을 참조하십시오.
