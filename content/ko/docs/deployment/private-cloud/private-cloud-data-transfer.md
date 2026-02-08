---
title: "Kubernetes 기반 Mendix 환경의 데이터 마이그레이션 (미리 보기)"
linktitle: "데이터 마이그레이션 (미리 보기)"
url: /developerportal/deploy/private-cloud-data-transfer/
description: "Kubernetes 기반 Mendix 환경 간 데이터 마이그레이션 방법을 설명합니다."
weight: 60
---
## 소개

{{% alert color="warning" %}}이 도구는 있는 그대로 제공되며 향후 추가 기능이나 개선 사항이 구현되지 않습니다. 데이터를 마이그레이션하려면 Expert Services에 문의하거나 [MendixOnAzure](/developerportal/deploy/mendix-on-azure/backups/)를 사용하는 것이 좋습니다.{{% /alert %}}

Kubernetes 기반 Mendix 데이터 마이그레이션 도구를 사용하면 다음을 수행할 수 있습니다:

* Kubernetes 기반 Mendix 환경에서 데이터베이스와 파일을 백업 파일로 내보내기
* 이전에 내보낸 백업 파일에서 환경으로 데이터베이스와 파일 가져오기

Kubernetes 기반 Mendix 데이터 마이그레이션 도구는 Mendix Cloud의 [백업 파일](/developerportal/operate/restore-backup/#format-of-backup-file)과 호환되므로 Mendix Cloud와 Kubernetes 기반 Mendix 간에 애플리케이션 데이터를 전송할 수 있습니다.

환경에서 파일을 내보낼 때 내보내기에는 사용 중인 파일(즉, `System.FileDocument` Entity에서 참조되는 파일)만 포함됩니다. 앱에서 사용하지 않는 파일은 무시됩니다.

{{% alert color="info" %}}
이 도구를 사용하여 Kubernetes 기반 Mendix 데이터베이스 및 파일을 정기적으로 백업 및 복원할 수도 있지만, Mendix에서는 데이터베이스 벤더 또는 클라우드 제공업체가 제공하는 도구를 활용하는 자체 백업 및 복원 프로세스를 구현하는 것을 권장합니다.
{{% /alert %}}

## 사전 요구 사항

### 데이터베이스 및 파일 스토리지 요구 사항

다음 데이터베이스가 지원됩니다:

* PostgreSQL ([Kubernetes 기반 Mendix에서 지원하는](/developerportal/deploy/private-cloud-supported-environments/) 모든 버전)

{{% alert color="warning" %}}
Mendix Cloud 백업과의 호환성을 유지하기 위해 다른 데이터베이스 유형(예: SQL Server)은 지원되지 않습니다.

데이터베이스를 다른 유형으로 변환하려면 PostgreSQL 데이터베이스가 있는 임시 중간 환경을 사용하고 [내장된](/howto/data-models/migrating-your-mendix-database/) Mendix Runtime `SourceDatabase` 기능을 사용하여 데이터베이스를 PostgreSQL로 또는 PostgreSQL에서 변환해야 합니다.
{{% /alert %}}

다음 파일 스토리지 옵션이 지원됩니다:

* Amazon S3
* Minio

{{% alert color="warning" %}}
데이터 전송 도구는 정적 및 AWS IRSA 인증만 지원합니다.
데이터베이스 또는 파일 스토리지가 CSI Secrets Storage를 사용하여 자격 증명을 저장하는 경우 데이터 전송 도구는 인증에 실패합니다.
{{% /alert %}}

### 환경 요구 사항

데이터 전송 도구에는 다음이 필요합니다:

* 시스템 경로에 나열된 위치에 있는 [pg_dump](https://www.postgresql.org/docs/12/app-pgdump.html) 및 [pg_restore](https://www.postgresql.org/docs/12/app-pgrestore.html) 바이너리
* PostgreSQL 서버 및 S3/Minio 스토리지에 대한 네트워크 액세스
    * 데이터베이스가 클러스터 내부 또는 Virtual Private Cloud(VPC)에서 실행 중인 경우 클러스터 외부에서 접근할 수 없을 수 있습니다
* Kubernetes API를 호출할 수 있는 권한
    * 이러한 호출은 환경의 데이터베이스 및 파일 스토리지 자격 증명을 가져오는 데 사용됩니다
* AWS IRSA를 사용하는 환경의 경우 환경의 버킷 및 데이터베이스에 액세스할 수 있는 IAM Role이 필요합니다.

대부분의 경우 데이터 전송 도구는 로컬 머신에서 실행할 수 없으며 [점프 서버](https://en.wikipedia.org/wiki/Jump_server)(a [점프 Pod](#jump-pod))로 작동하는 Kubernetes Pod에서 실행해야 합니다.

## 데이터 전송 도구 사용

### 데이터 전송 도구 다운로드

운영 체제에 맞는 도구를 다운로드하고 압축을 해제하십시오. Pod에서 데이터 전송 도구를 실행하려는 경우 Linux 버전을 다운로드하십시오.

* [Linux](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.4-linux-amd64.tar.gz)
* [macOS](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.4-macos-amd64.tar.gz)
* [Windows](https://cdn.mendix.com/mendix-for-private-cloud/mxpc-data-migration/mxpc-data-migration-0.0.4-windows-amd64.zip)

### 데이터 전송 도구를 로컬에서 실행

로컬 머신에서 데이터베이스 및 파일 스토리지에 대한 네트워크 액세스가 있는 경우 머신에서 직접 실행할 수 있습니다.

{{% alert color="warning" %}}
도구는 클러스터에 대한 액세스 권한이 있는 경우에만 작동합니다. 클러스터에 액세스하기 위한 네트워크 설정은 이 문서의 범위를 벗어납니다. 데이터베이스 또는 파일 스토리지에 직접 연결할 수 없는 경우 [점프 Pod](#jump-pod)를 사용하여 클러스터 내에서 이 도구를 사용할 수도 있습니다.
{{% /alert %}}

도구는 현재 사용자의 kubeconfig 및 Kubernetes 자격 증명(또는 Pod에서 실행 중인 경우 서비스 계정)을 사용하여 환경에서 데이터베이스 및 파일 스토리지 자격 증명을 가져옵니다.
AWS IRSA를 인증에 사용하는 환경의 경우 현재 사용자의 AWS 자격 증명이 데이터베이스 및 S3 스토리지에 연결하는 데 사용됩니다.

백업 파일을 생성하려면 다음 명령을 사용하십시오:

```shell
./mxpc-data-migration backup -n <namespace> -e <environment> -f <file>
```

* `-n <namespace>` - 환경을 포함하는 네임스페이스
* `-e <environment>` - 백업할 환경
* `-f <file>` - 백업을 저장할 대상 파일

환경에 백업 파일을 복원하려면 다음 명령을 사용하십시오:

```shell
./mxpc-data-migration restore -n <namespace> -e <environment> -f <file>
```

* `-n <namespace>` - 환경을 포함하는 네임스페이스
* `-e <environment>` - 데이터를 복원할 환경
* `-f <file>` - 대상 환경에 복원해야 하는 백업 파일([Mendix Cloud 형식](/developerportal/operate/restore-backup/#format-of-backup-file))

데이터베이스가 프라이빗 CA의 자체 서명 TLS 인증서를 사용하는 경우 `PGSSLROOTCERT` 환경 변수를 통해 사용자 정의 루트 CA `pem` 파일 경로를 제공하십시오.

파일 스토리지가 프라이빗 CA의 자체 서명 TLS 인증서를 사용하는 경우 `SSL_CERT_FILE` 또는 `SSL_CERT_DIR` 환경 변수를 통해 사용자 정의 루트 CA `pem` 파일 또는 디렉토리 경로를 제공하십시오.

### 점프 Pod에서 데이터 전송 실행{#jump-pod}

네트워크 액세스 문제로 인해 로컬 머신에서 데이터 전송 도구를 실행할 수 없는 경우 [점프 서버](https://en.wikipedia.org/wiki/Jump_server)(점프 Pod)로 작동하는 Kubernetes Pod에서 실행해야 합니다. 이를 수행하려면 아래 지침을 따르십시오.

백업/복원 Pod 구성이 포함된 YAML 파일(예: `/tmp/mendix-backup-restore.yaml`)을 다음 내용으로 생성하십시오:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mendix-backup-restore
  annotations:
    # Optional, to access data from environments using IRSA:
    # specify an IAM role ARN to use for connecting to the database and S3 storage
    eks.amazonaws.com/role-arn: arn:aws:iam::<account_id>:role/<role-name>
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: mendix-backup-restore
rules:
- apiGroups:
  - ""
  resources:
  - secrets
  verbs:
  - get
- apiGroups:
  - privatecloud.mendix.com
  resources:
  - mendixapps
  - storageinstances
  verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: mendix-backup-restore
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: mendix-backup-restore
subjects:
- kind: ServiceAccount
  name: mendix-backup-restore
---
apiVersion: v1
kind: Pod
metadata:
  name: mendix-backup-restore
spec:
  serviceAccountName: mendix-backup-restore
  automountServiceAccountToken: true
  terminationGracePeriodSeconds: 0
  containers:
  - name: pgtools
    image: docker.io/library/postgresql:12
    command: ["sleep", "infinity"]
    lifecycle:
      preStop:
        exec:
          command: ["/bin/sh","-c","killall -w sleep"]
```

AWS IRSA 인증을 사용하는 환경에서 데이터를 내보내거나 가져와야 하는 경우 다음도 수행해야 합니다:

1. AWS 콘솔에서 해당 환경에 대해 연결된 정책 없이 **IAM Role**을 생성하십시오.
   
    {{% alert color="info" %}}환경 내부 이름을 서비스 계정 이름으로 사용하십시오.{{% /alert %}}
   
2. IAM 역할에서 다음 JSON으로 인라인 정책을 추가하십시오. 여기서 `<aws_region>`은 데이터베이스의 리전, `<account_id>`는 AWS 계정 번호, `<database_id>`는 RDS 데이터베이스 인스턴스 식별자, `<bucket_name>`은 S3 버킷 이름입니다:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "rds-db:connect"
                ],
                "Resource": [
                    "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/*"
                ]
            },
            {
                "Sid": "AllowAllS3ActionsInUserFolder",
                "Effect": "Allow",
                "Resource": [
                    "arn:aws:s3:::<bucket_name>/*"
                ],
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:DeleteObject",
                    "s3:GetObject",
                    "s3:ListMultipartUploadParts",
                    "s3:PutObject"
                ]
            }
        ]
    }
    ```
    
    {{% alert color="info" %}}`<database_id>` 매개변수는 데이터베이스 이름(또는 ARN)이 아니라 고유하게 생성된 AWS 리소스 ID입니다. 이 정책을 작성하는 방법에 대한 자세한 내용과 지침은 [IAM policy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html) 문서를 참조하십시오.{{% /alert %}}

3. Kubernetes ServiceAccount(예: `mendix-backup-restore`)가 역할을 수임할 수 있도록 허용하십시오.

    1. 편집할 역할을 열고 조건 목록에 ServiceAccount(또는 ServiceAccounts)에 대한 항목을 추가하십시오:

        {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" class="no-border" >}}

    2. 두 번째 조건의 경우 `sts.amazonaws.com` 줄을 복사하여 붙여넣고 `:aud`를 `:sub`로 바꾸고 `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`으로 설정하십시오.

        자세한 내용은 [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough)를 참조하십시오. 역할 ARN이 필요합니다. 역할 세부 정보에서 ARN 이름 옆의 **Copy** 버튼을 사용할 수 있습니다. 이후 지정된 네임스페이스의 지정된 서비스 계정이 이 역할을 수임할 수 있습니다.

4. `mendix-backup-restore` 서비스 계정에 `eks.amazonaws.com/role-arn` 어노테이션을 추가하고 이전 단계의 역할 ARN 값으로 설정하십시오.

이 구성은 `pgtools`(pg_dump 및 pg_restore와 같은 PostgreSQL 도구)를 포함하는 Pod와 환경에서 데이터베이스 자격 증명을 가져올 수 있는 Service Account를 생성합니다.
데이터베이스가 다른 PostgreSQL 버전(예: PostgreSQL 13)을 사용하는 경우 `image: docker.io/library/postgresql:12`를 대상 PostgreSQL 버전(예: `docker.io/library/postgresql:13`)에 맞게 변경하십시오.

{{% alert color="warning" %}}
환경에 백업 파일을 가져오기 전에 환경을 중지(0 레플리카로 스케일 다운)해야 합니다.
실행 중인 환경에 데이터를 가져오면 환경이 작동을 중단할 수 있습니다.
{{% /alert %}}

{{% alert color="warning" %}}
실행 중인 앱(즉, 활성 사용자 또는 기타 활동이 있는 앱)을 백업하면 백업 진행 중에 일부 파일이 삭제될 수 있습니다. 예를 들어, 앱이 PDF 보고서를 생성하거나 처리 후 업로드된 파일을 삭제하는 경우 이러한 파일은 몇 초만 존재하고 자동으로 삭제될 수 있습니다. 파일이 삭제된 후 해당 파일을 백업하려고 하면 실패할 수 있습니다. 이는 임시 파일의 예상된 동작입니다. 백업 프로세스를 실행할 때 경고를 방지하려면 Storage Plan에서 [Prevent data deletion](/developerportal/deploy/private-cloud-storage-plans/#blob-storage) 옵션을 활성화해야 합니다.
{{% /alert %}}

{{% alert color="info" %}}
이 지침은 Windows Subsystem for Linux 및 macOS에서 검증되었으며 Windows 명령줄 터미널, Git Bash 또는 Powershell에서는 작동하지 않을 수 있습니다.
{{% /alert %}}

환경에서 백업 파일로 데이터를 내보내려면 다음 명령을 실행하십시오(`{namespace}`를 환경의 네임스페이스로, `{environment}`를 환경의 내부 이름으로 바꾸십시오):

```shell
NAMESPACE={namespace}
ENVIRONMENT={environment}
# Create the resources required for the backup operation
kubectl -n $NAMESPACE apply -f /tmp/mendix-backup-restore.yaml
# Copy the Linux version of the data migration tool into the Pod
kubectl -n $NAMESPACE cp mxpc-data-migration mendix-backup-restore:/tmp/mxpc-data-migration
# Run the backup process
kubectl -n $NAMESPACE exec -it mendix-backup-restore -- /tmp/mxpc-data-migration backup -e $ENVIRONMENT -f /tmp/backup.tar.gz -n $NAMESPACE
# Copy the backup file from the Pod to a local file
kubectl -n $NAMESPACE cp mendix-backup-restore:/tmp/backup.tar.gz backup.tar.gz
```

백업 파일에서 환경으로 데이터를 가져오려면 다음 명령을 실행하십시오(`{namespace}`를 환경의 네임스페이스로, `{environment}`를 환경의 내부 이름으로 바꾸십시오):

```shell
NAMESPACE={namespace}
ENVIRONMENT={environment}
# Create the resources required for the restore operation
kubectl -n $NAMESPACE apply -f /tmp/mendix-backup-restore.yaml
# Copy the Linux version of the data migration tool into the Pod
kubectl -n $NAMESPACE cp mxpc-data-migration mendix-backup-restore:/tmp/mxpc-data-migration
# Copy the backup file to be restored into the Pod;
# replace files_and_database.tar.gz with the path to the backup file
kubectl -n $NAMESPACE cp files_and_database.tar.gz mendix-backup-restore:/tmp/restore.tar.gz
# Run the restore process
kubectl -n $NAMESPACE exec -it mendix-backup-restore -- /tmp/mxpc-data-migration restore -e $ENVIRONMENT -f /tmp/restore.tar.gz -n $NAMESPACE
```

가져오기 또는 내보내기 작업을 실행한 후 백업 Pod 및 해당 종속성을 삭제하십시오(`{namespace}`를 이전에 사용한 네임스페이스 이름으로 바꾸십시오):

```shell
NAMESPACE={namespace}
# Delete the Pod and its Service account
kubectl -n $NAMESPACE delete -f /tmp/mendix-backup-restore.yaml
rm /tmp/mendix-backup-restore.yaml
```

{{% alert color="warning" %}}
`kubectl cp` 명령은 `.tar.gz` 확장자를 가진 파일을 복사하는 데 실패할 수 있습니다.
이 경우 파일 확장자를 변경하면 문제를 해결할 수 있습니다. 예를 들어 파일 확장자를 `.tar.gz`에서 `.tar.gz.backup`으로 변경하십시오.
{{% /alert %}}

## 알려진 제한 사항

* 데이터베이스만 또는 파일만 내보내기/가져오기할 수 없습니다. 가져오기/내보내기 프로세스는 항상 데이터베이스와 파일을 함께 내보내거나 가져옵니다.
* 도구 버전 0.0.1에서는 데이터를 내보낼 때 버킷의 모든 파일이 포함됩니다. 여기에는 다음이 포함될 수 있습니다:
    * 다른 환경의 파일(공유 버킷의 경우),
    * Mendix 앱에서 삭제되었지만 버킷에 여전히 존재하는 파일.
* 내보내기/가져오기 도구는 특정 환경의 자격 증명을 가져오기 위해 Kubernetes API에 대한 액세스가 필요합니다.
* `pg_restore`가 어떤 이유로든 실패하면 데이터 가져오기 프로세스가 즉시 오류와 함께 종료됩니다.
* TLS 옵션을 강제할 수 없습니다.
    * Postgres 스토리지 플랜에서 *Strict TLS*가 비활성화된 경우 도구는 SSL을 사용하려고 하지만 모든 서버 인증서를 신뢰합니다. 데이터베이스가 SSL을 지원하지 않으면 도구는 암호화되지 않은 연결로 전환합니다.
    * Postgres 스토리지에 *Strict TLS* 옵션이 활성화된 경우 도구는 SSL을 사용하고 서버 인증서를 검증합니다. 인증서가 유효하지 않거나 데이터베이스가 SSL을 지원하지 않으면 연결이 실패합니다.
    * Minio 및 S3의 경우 환경의 스토리지 플랜에 `https://` 엔드포인트 URL이 있으면 TLS가 사용됩니다.
