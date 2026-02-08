---
title: "Kubernetes에서 CI/CD 구성"
url: /private-mendix-platform/configure-k8s/
description: "Private Mendix Platform의 초기 구성에 대해 설명합니다."
weight: 30
aliases:
    - /private-mendix-platform-configure-k8s/
---
## 소개

이 문서는 Kubernetes 클러스터에서 Private Mendix Platform의 지속적 통합 및 배포(CI/CD) 솔루션을 구성할 때 사용할 수 있는 구성 옵션을 설명합니다.

### 사전 요구사항

CI/CD 파이프라인을 구성하려면 다음을 준비하십시오:

* Mendix 앱을 배포할 네임스페이스.
* MDA 파일을 저장할 수 있는 S3 호환 엔드포인트 또는 Azure 스토리지 계정.

## CI/CD 파이프라인 구성

Kubernetes 클러스터가 있는 경우 **Switch to Admin Mode** > **Settings** > **Build settings** > **Build Utility**에서 Kubernetes를 CI 시스템으로 설정할 수 있습니다. 먼저 [CA 인증서](#ca-certificate)를 획득하고 구성한 다음 다음 설정을 구성해야 합니다:

* [빌드 클러스터 설정](#build-cluster)
* [빌드 이미지 설정](#build-images)
* [MDA 스토리지 설정](#mda-storage)

마지막으로 [Kubernetes 클러스터를 등록](#register-cluster)해야 합니다.

{{< figure src="/attachments/private-platform/pmp-cicd4.png" class="no-border" >}}

### CA 인증서 획득 및 구성 {#ca-certificate}

대부분의 Kubernetes 클러스터 API 서버는 자체 서명 인증서를 사용합니다. Private Mendix Platform에서 API 서버에 접근하려면 Private Mendix Platform이 설치된 네임스페이스의 Operator 구성에 CA 인증서를 추가해야 합니다. 자세한 내용은 [Mendix on Kubernetes 클러스터 생성: 맞춤 TLS](/developerportal/deploy/standard-operator/#custom-tls)를 참조하십시오.

다음 명령을 실행하여 CA 인증서를 얻을 수 있습니다:

```text
export context=`kubectl config current-context`
export cluster=`kubectl config view -o jsonpath="{.contexts[?(@.name == \"$context\")].context.cluster}"`
kubectl config view --raw -o jsonpath="{.clusters[?(@.name == \"$cluster\")].cluster.certificate-authority-data}" | base64 -d > custom.crt
```

맞춤 CA 인증서를 처음 구성하는 경우 다음 명령을 실행하여 Private Mendix Platform의 Mendix Operator 구성도 업데이트해야 합니다:

```text
# update operator configuration
# please switch kubeconfig file if PMP cluster is different with app cluster.
export namespace=YOUR_PMP_NAMESPACE
kubectl -n ${namespace} create secret generic mendix-custom-ca --from-file=custom.crt=custom.crt
echo -e "spec:\n trust:\n    customCASecretName: mendix-custom-ca" > patchfile
kubectl -n ${namespace} patch operatorconfiguration mendix-operator-configuration --type merge --patch-file patchfile
```

맞춤 CA 인증서를 이미 구성한 경우 시크릿에 새 CA 인증서만 추가하고 Private Mendix Platform을 재시작하면 됩니다.

### 빌드 클러스터 설정 구성 {#build-cluster}

이 섹션의 설정은 Kubernetes 클러스터를 구성합니다.

* **API Server** - Kubernetes API 서버.
* **Namespace** - Kubernetes 파드를 생성하는 데 사용되는 네임스페이스.
* **Token** - 위의 네임스페이스에서 서비스 계정, 역할 및 역할 바인딩을 생성한 다음 서비스 계정의 토큰을 가져와야 합니다. 참고로 다음 셸 스크립트를 확인하십시오:

```text
# create ServiceAccount, Role, and RoleBinding
export NAMESPACE=default
kubectl create namespace $NAMESPACE || true
kubectl apply -f << EOF -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
---
apiVersion: v1
kind: Secret
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
  annotations:
    kubernetes.io/service-account.name: mxplatform-cicd
type: kubernetes.io/service-account-token
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
rules:
- apiGroups:
  - ""
  resources:
  - pods
  - pods/log
  verbs:
  - create
  - get
  - delete
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
subjects:
- kind: ServiceAccount
  name: mxplatform-cicd
  namespace: $NAMESPACE
roleRef:
  kind: Role
  name: mxplatform-cicd
  apiGroup: rbac.authorization.k8s.io
EOF

# get service account token:
kubectl get secret mxplatform-cicd -n$NAMESPACE -o jsonpath='{.data.token}'|base64 -d
# for openshift cluster
kubectl get secret mxplatform-cicd -n$NAMESPACE -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
```

### 빌드 이미지 설정 구성 {#build-images}

이 섹션의 설정은 이미지를 구성합니다.

* **Keep Build Pod** - 빌드가 완료된 후 빌드 파드를 유지하려면 이 확인란을 선택하십시오. 파드 생성 실패 또는 빌드 실패로 인해 빌드가 실패한 경우 문제 해결에 유용합니다. 파드를 describe하여 상태를 확인하거나 파드의 로그를 확인할 수 있습니다.
* **Run As User** - 기본값은 *1001110000*입니다. OpenShift 클러스터의 경우 아래 명령을 사용하여 사용자 ID 범위를 확인하고 어노테이션을 확인해야 합니다. 예를 들어, `openshift.io/sa.scc.uid-range: 1001190000/10000`의 경우 *1001190000 - 1001199999* 범위에서 하나의 ID를 선택할 수 있습니다.

    ```text
    export NAMESPACE=default
    kubectl get ns $NAMESPACE -oyaml
    ```

* **Build Image** - 기본값은 `private-cloud.registry.mendix.com/privateplatform/pmp-pipeline-tools`입니다. 이 이미지는 MDA 패키지 및 OCI 이미지를 빌드하는 데 사용됩니다.
* **Build Package Source** - *mxbuild* 패키지의 다운로드 소스를 선택하십시오. 다음 값이 지원됩니다:

    * **File Server** - 이 옵션은 인증 없이 익명 접근을 허용합니다.
    * **S3 Bucket** - 이 옵션은 인증을 위해 접근 키 ID와 시크릿 접근 키가 필요합니다.
    * **Azure Blob** - 이 옵션은 Azure Workload identity 인증이 필요합니다. *mxbuild* 패키지를 다운로드하기 위해 빌드 파드에서 기본 서비스 계정이 사용됩니다. 관리 ID 및 서비스 계정을 구성하려면 다음 단계를 수행하십시오:

        1. Azure Portal에서 관리 ID를 생성하십시오.
        2. Kubernetes 서비스 계정에 대한 페더레이션 자격 증명을 구성하십시오.
        3. **Managed Identity** 섹션에서 스토리지 계정으로 범위가 지정된 **Storage Blob Data Reader** 역할이 있는 역할 할당을 추가하십시오.
        4. 다음 예시와 같이 서비스 계정에 어노테이션을 추가하십시오:

            ```text
            kind: ServiceAccount
            metadata:
              name: default
              namespace: default # The same as the one in Configuring Build Cluster Setting
              annotations:
                azure.workload.identity/client-id: {client-id-build}
            ```

* **Build Package Path** - 이 설정은 **File Server** 빌드 패키지 소스에 필요합니다. 기본값은 `https://cdn.mendix.com/runtime`입니다. 자체 파일 서버가 있는 경우 Mendix Content Delivery Network에서 패키지를 다운로드한 다음 파일 서버에 업로드해야 합니다. 파일 이름 형식은 *mxbuild-9.24.1.4658.tar.gz*입니다.
* **S3 Endpoint**, **S3 Bucket Name**, **Region**, **Access Key ID**, **Secret Access Key** - 이러한 설정은 **S3 Bucket** 빌드 패키지 소스에 필요합니다.
* **Storage Account**, **Container** - 이러한 설정은 **Azure Blob** 빌드 패키지 소스에 필요합니다.
* **Build OCI Image** - MDA 파일 외에 OCI 이미지를 빌드하려면 이 확인란을 선택하십시오. 이 옵션이 선택되면 배포에 OCI 이미지만 사용할 수 있습니다. 이 옵션은 S3 버킷 또는 Azure Blob 컨테이너에 대한 익명 접근 구성을 피하는 데 사용할 수 있습니다.
* **Registry Type** - 이 설정은 **Build OCI Image** 확인란을 선택한 경우에만 적용됩니다. 다음 값이 지원됩니다:

    * **Generic** - 사용자 및 비밀번호 인증을 지원합니다.
    * **AWS ECR** - IRSA 인증을 지원합니다. IAM 역할에 다음 정책을 추가하십시오:

        ```text
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Sid": "AllowImageBuilds",
                    "Effect": "Allow",
                    "Action": [
                        "ecr:BatchGetImage",
                        "ecr:BatchCheckLayerAvailability",
                        "ecr:CompleteLayerUpload",
                        "ecr:GetDownloadUrlForLayer",
                        "ecr:InitiateLayerUpload",
                        "ecr:PutImage",
                        "ecr:ListImages",
                        "ecr:UploadLayerPart",
                        "ecr:DescribeRepositories",
                        "ecr:CreateRepository"
                    ],
                    "Resource": "arn:aws:ecr:*:<account_id>:repository/*"
                },
                {
                    "Sid": "AllowAuthentication",
                    "Effect": "Allow",
                    "Action": "ecr:GetAuthorizationToken",
                    "Resource": "*"
                }
            ]
        }
        ```

    * **Azure ACR** - Workload Identity 인증을 지원합니다. 빌드 관리 ID에 **AcrPush** 역할을 추가하십시오.

* **Runtime Base Image** - 이 설정은 **Build OCI Image** 확인란을 선택한 경우에만 적용됩니다. 기본값은 `private-cloud.registry.mendix.com/app-building-blocks`입니다. 에어갭 환경에 있는 경우 `ubi9-1-jre{XX}-entrypoint` 및 `runtime-{YYYYY}` 태그를 동기화하십시오. 여기서 `{XX}`는 앱의 Java 버전이고 `{YYYYY}`는 앱 런타임 버전입니다. 예: `app-building-blocks:ubi9-1-jre21-entrypoint` 및 `app-building-blocks:runtime-10.12.1.39914`.
* **Allow Anonymous Access** - 위의 Runtime Base Image가 인증 없이 접근 가능한 경우 이 확인란을 선택하십시오.
* **Runtime Base Registry User** - **Allow Anonymous Access** 확인란을 선택하지 않은 경우에만 적용됩니다. 레지스트리 인증을 위한 사용자 이름입니다.
* **Runtime Base Registry Password** - **Allow Anonymous Access** 확인란을 선택하지 않은 경우에만 적용됩니다. 레지스트리 인증을 위한 비밀번호입니다.
* **OCI Registry** - 이 설정은 **Build OCI Image** 확인란을 선택한 경우에만 적용됩니다. 이 레지스트리는 OCI 이미지를 저장하는 데 사용되며, 리포지토리 이름도 레지스트리에 추가해야 합니다. 예: quay.io/pmp.
* **OCI Registry User** - 이 설정은 **Build OCI Image** 확인란을 선택한 경우에만 적용됩니다. 레지스트리 인증을 위한 사용자 이름입니다.
* **OCI Registry Password** - 이 설정은 **Build OCI Image** 확인란을 선택한 경우에만 적용됩니다. 레지스트리 인증을 위한 비밀번호입니다.

### MDA 스토리지 설정 구성 {#mda-storage}

이 섹션의 설정은 빌드 출력 아티팩트의 스토리지를 구성합니다.

* **Mda Storage Option** - 빌드 출력 아티팩트를 저장할 위치를 구성하십시오. 지원되는 값은 S3 Bucket 및 Azure Blob입니다. 이 옵션은 Azure Workload identity 인증이 필요합니다. 빌드 아티팩트를 업로드하기 위해 빌드 파드에서 기본 서비스 계정이 사용됩니다. 관리 ID 및 서비스 계정을 구성하려면 다음 단계를 수행하십시오:

    1. Azure Portal에서 관리 ID를 생성하거나 재사용하고 Kubernetes 서비스 계정에 대한 페더레이션 자격 증명을 구성하십시오.
    2. **Managed Identity**에서 스토리지 계정으로 범위가 지정된 **Storage Blob Data Contributor** 역할이 있는 역할 할당을 추가하십시오.
    3. 빌드 파드 및 Private Mendix Platform에 대한 올바른 어노테이션을 Service Account에 추가하십시오.
    4. 다음 예시와 같이 빌드 파드 및 Private Mendix Platform의 어노테이션을 서비스 계정에 추가하십시오:

        ```text
        kind: ServiceAccount
        metadata:
            name: default
            namespace: default # The same as the one in Configuring Build Cluster Setting
            annotations:
                azure.workload.identity/client-id: {client-id-build}
        ```

    5. 빌드가 완료된 후 Private Mendix Platform이 빌드 메타데이터에 접근할 수 있도록 스토리지 계정으로 범위가 지정된 Storage Blob Data Reader 역할이 있는 역할 할당을 추가하십시오. Private Mendix Platform에 이미 Azure Blob Storage(Azure 관리 ID 인증)를 사용하고 있는 경우 Mendix Operator가 만든 관리 ID를 재사용할 수 있습니다.

        ```text
        kind: ServiceAccount
        metadata:
            name: {pmp-serviceaccount-name}
            namespace: {pmp-namespace} # The namespace where Private Mendix Platform is installed
            annotations:
                azure.workload.identity/client-id: {client-id-pmp}
        ```

    6. Mendix Operator에 **customPodLabels**를 추가하여 Private Mendix Platform 파드에 적절한 구성으로 레이블을 지정하십시오. 이 구성을 통해 Private Mendix Platform이 Azure Storage Blob에서 빌드 아티팩트를 가져올 수 있습니다.

        ```text
        kind: OperatorConfiguration
        metadata:
          name: mendix-operator-configuration
          namespace: {pmp-namespace}
        spec:
          customPodLabels:
            general:
                azure.workload.identity/use: "true"
        ```
        
    7. 레이블이 적용되도록 Private Mendix Platform을 재시작하십시오.

* **S3 Endpoint** - 예: `https://s3.ap-southeast-1.amazonaws.com`.
* **No Verify SSL** - 자체 버킷 서버를 사용하고 인증서가 자체 서명인 경우 이 확인란을 선택하십시오. 이 옵션을 선택하면 실패를 방지하기 위해 AWS CLI 명령에 *--no-verify-ssl*이 추가됩니다.
* **S3 Bucket Name** - S3 버킷 이름, 예: *mybucket*.
* **Mda Location** - S3 버킷 이름의 도메인, 예: `https://mybucket.s3.ap-southeast-1.amazonaws.com`. 이 URL은 빌드 아티팩트에 접근하는 데 사용되며, 전체 경로는 `Mda Location + Appid + Mda/Meta file`입니다. S3 버킷이 익명 접근을 허용하도록 구성되어 있는지 확인하십시오.
* **Region** - 예: `ap-southeast-1`.
* **Use K8S Secret** - **Access Key ID**와 **Secret Access Key**를 입력할지 또는 Kubernetes 시크릿에 설정할지 선택하십시오. 빌드 파드에서 민감한 자격 증명이 표시되는 것을 방지하려면 이 설정을 활성화하십시오.
* **Secret Name** - **Use K8S Secret** 확인란을 선택한 경우에만 적용됩니다. **Access Key ID**와 **Secret Access Key**를 저장할 시크릿 이름입니다. 다음 명령을 사용하여 이 시크릿을 생성하십시오. 여기서 your-namespace는 **Build Cluster Setting** > **Namespace**에서 지정한 네임스페이스입니다.

    ```text
    kubectl create secret generic mxplatform-awssecret -n your-namespace --from-literal=aws_access_key_id=your-aws-access-key-id --from-literal=aws_secret_access_key=your-aws-secret-access-key
    ```

* **Access Key ID** - **Use K8S Secret** 확인란을 선택하지 않은 경우에만 적용됩니다. 이 값은 S3 버킷에 접근하는 데 사용됩니다.
* **Secret Access Key** - **Use K8S Secret** 확인란을 선택하지 않은 경우에만 적용됩니다. 이 값은 S3 버킷에 접근하는 데 사용됩니다.
* **Storage Account, Container** - **Mda Storage Option**이 **Azure Blob**으로 설정된 경우 Azure Blob을 구성하는 데 사용되는 설정입니다.
* **Mda Location** - Azure Blob 컨테이너의 도메인, 예: `https://your-storage-account.blob.core.windows.net/your-container`. 이 설정은 **Build OCI Image**가 선택되지 않은 경우에만 적용됩니다. 컨테이너의 익명 접근 수준이 **Blob**으로 설정되어 있는지 확인하십시오.

### Kubernetes 클러스터 등록 {#register-cluster}

환경을 생성하기 전에 다음 단계를 수행하여 Kubernetes 클러스터를 등록해야 합니다:

1. **Register New Cluster**를 클릭하십시오.
2. 다음 값을 구성하십시오:
    
    * **Cluster Name** - 클러스터 이름을 지정하십시오.
    * **API Server** - Kubernetes API 서버를 지정하십시오.
    * **Token** - 먼저 클러스터에서 서비스 계정, 클러스터 역할 및 클러스터 역할 바인딩을 생성한 다음 서비스 계정의 토큰을 가져와야 합니다. 참고로 다음 셸 스크립트를 확인하십시오:

        ```text
        # create ServiceAccount, ClusterRole, and ClusterRoleBinding
        kubectl apply -f << EOF -
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: mxplatform-cicd
          namespace: kube-system
        ---
        apiVersion: v1
        kind: Secret
        metadata:
          name: mxplatform-cicd
          namespace: kube-system
          annotations:
            kubernetes.io/service-account.name: mxplatform-cicd
        type: kubernetes.io/service-account-token
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: mxplatform-cicd
        rules:
        - apiGroups:
          - ""
          resources:
          - namespaces
          verbs:
          - list
        - apiGroups:
          - privatecloud.mendix.com
          resources:
          - storageplans
          verbs:
          - list
        - apiGroups:
          - privatecloud.mendix.com
          resources:
          - mendixapps
          verbs:
          - '*'
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: mxplatform-cicd
        subjects:
        - kind: ServiceAccount
          name: mxplatform-cicd
          namespace: kube-system
        roleRef:
          kind: ClusterRole
          name: mxplatform-cicd
          apiGroup: rbac.authorization.k8s.io
        EOF

        # get service account token:
        kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
        # for openshift cluster
        kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
        ```

3. 선택적으로 **Help Me** 기능을 활성화하십시오. 참고로 다음 셸 스크립트를 확인하십시오:

    ```text
    # create ServiceAccount, ClusterRole, and ClusterRoleBinding
    kubectl apply -f << EOF -
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: mxplatform-cicd
      namespace: kube-system
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: mxplatform-cicd
      namespace: kube-system
      annotations:
        kubernetes.io/service-account.name: mxplatform-cicd
    type: kubernetes.io/service-account-token
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
        name: mxplatform-cicd
    rules:
    - apiGroups:
        - ""
        resources:
        - namespaces
        verbs:
        - list
    - apiGroups:
        - ""
        resources:
        - deployments
        verbs:
        - get
        - list
        - watch
    - apiGroups:
        - ""
        resources:
        - pods
        verbs:
        - get
        - list
    - apiGroups:
        - ""
        resources:
        - pods/log
        verbs:
        - get
    - apiGroups:
        - ""
        resources:
        - events
        verbs:
        - get
        - list
    - apiGroups:
        - privatecloud.mendix.com
        resources:
        - storageplans
        verbs:
        - list
    - apiGroups:
        - privatecloud.mendix.com
        resources:
        - mendixapps
        verbs:
        - '*'
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
        name: mxplatform-cicd
    subjects:
    - kind: ServiceAccount
        name: mxplatform-cicd
        namespace: kube-system
    roleRef:
        kind: ClusterRole
        name: mxplatform-cicd
        apiGroup: rbac.authorization.k8s.io
    EOF

    # get service account token:
    kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
    # for openshift cluster
    kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
    ```

4. **Save**를 클릭하십시오.

5. 새로 생성된 클러스터를 클릭하여 확장한 다음 **Retrieve Namespace(s)**를 클릭하여 모든 네임스페이스 및 스토리지 플랜을 검색하거나 **Manually Register Namespace**를 클릭하십시오.
    
    스토리지 플랜이 없는 네임스페이스는 건너뜁니다. 이 단계에는 Mendix Operator가 설치되고 구성되어 있어야 합니다. 추가 네임스페이스를 검색하기 위해 이 단계를 필요에 따라 반복할 수 있습니다.

6. 클러스터가 등록된 후 클러스터, 네임스페이스 및 플랜으로 환경을 생성하십시오.

## CI/CD 파이프라인 아키텍처

이 섹션의 다이어그램은 파이프라인의 아키텍처와 구성 요소를 설명합니다. 자세한 내용은 위의 [빌드 이미지 설정](#build-images)을 참조하십시오.

{{< figure src="/attachments/private-platform/pmp-cicd2.png" alt="Auto Detect Mx Runtime Version" class="no-border" >}}
