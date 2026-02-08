---
title: "Minikube에서 Docker 사용"
linktitle: "Minikube에서 실행"
url: /developerportal/deploy/run-mendix-on-minikube/
weight: 20
aliases:
    - /developerportal/deploy/run-mendix-on-kubernetes/
---

## 소개

{{% alert color="info" %}}
이 문서는 [Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/)에서의 로컬 배포에 관한 것입니다. Mendix on Kubernetes 솔루션에 대해서는 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)를 참조하십시오.
{{% /alert %}}

이 사용 가이드는 Mendix 앱의 Docker 이미지를 [Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/)에 배포하는 과정을 안내합니다. Minikube는 Windows 컨테이너 또는 가상 머신에서 실행되는 [Kubernetes](https://kubernetes.io/docs/home/)의 로컬 버전입니다. Minikube에서 수행하는 많은 작업은 호스팅 환경에서의 작업과 동일하며 Kubernetes에 대한 낮은 수준의 진입점을 제공합니다. 자세한 내용은 Kubernetes 문서 사이트의 [Installing Kubernetes with Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/)를 참조하십시오.

Kubernetes는 Mendix에서 지원하는 표준 컨테이너 오케스트레이션 플랫폼입니다. 지원되는 Kubernetes 버전에 대한 자세한 내용은 [Mendix 시스템 요구 사항](/refguide/system-requirements/)을 참조하십시오.

{{% alert color="info" %}}
Minikube에 Docker 이미지를 배포하는 것은 로컬 머신의 테스트 프로젝트를 위한 것입니다. 클라우드 인프라에 게시할 때는 Mendix Portal과의 통합을 제공하고 많은 복잡한 작업을 대신 처리하는 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) 솔루션을 사용하는 것이 좋습니다.
{{% /alert %}}

이 사용 가이드에서는 다음을 수행하는 방법을 배웁니다:

* Minikube를 사용하여 Mendix 앱 배포 및 실행
* 앱에서 데이터베이스 배포 분리
* 앱 컨테이너에 영구 스토리지 연결

## 사전 요구 사항

이 사용 가이드를 따르려면 Docker 및 Kubernetes에 대한 기본 지식이 있어야 합니다. 자세한 내용은 [Docker Overview](https://docs.docker.com/engine/docker-overview/) 및 [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)를 참조하십시오. 제공된 모든 명령을 실행하는 데 더 많은 지식이 필요하지는 않지만, 약간의 경험이 있으면 사용 가이드를 더 잘 이해하는 데 도움이 됩니다.

이 사용 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl)에 제공된 지침을 사용하여 kubectl 설치
    * kubectl CLI는 Kubernetes 클러스터에 액세스하고 관리하는 기본 도구입니다
* [Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)에 제공된 지침을 사용하여 Minikube 설치
    * Minikube를 사용하면 Kubernetes 탐색에 편리한 로컬 클러스터를 만들 수 있습니다(클라우드 제공자 중 하나에 계정이 있고 사용하기로 선택한 경우 이 단계를 건너뛸 수 있습니다)
* [Docker](/developerportal/deploy/docker-deploy/) 페이지의 단계를 사용하여 Minikube에서 이미지를 빌드합니다. `docker build`와 같은 Docker 명령을 `minikube image build`와 같은 Minikube 동등 명령으로 교체합니다.

이 사용 가이드는 Unix 계열 시스템용 명령을 사용합니다. Windows 명령은 약간 다를 수 있습니다.

## 아키텍처 개요{#architecture}

시작하기 전에 Minikube로 Mendix 앱을 배포하는 데 필요한 구성 요소에 대한 배경 정보가 있습니다.

Mendix 애플리케이션은 최소한 실행을 위해 데이터베이스가 필요합니다. 이 예에서는 Kubernetes 클러스터 내에 PostgreSQL 데이터베이스를 프로비저닝합니다. 프로덕션 시나리오에서는 일반적으로 AWS RDS 또는 Azure SQL과 같은 클라우드 제공자의 서비스로 데이터베이스가 제공됩니다. 지원되는 데이터베이스에 대해서는 [Mendix 시스템 요구 사항](/refguide/system-requirements/)을 참조하십시오.

애플리케이션이 영구 FileDocument 또는 FileImage Entity를 사용하는 경우 영구 볼륨(PV) 스토리지 서비스도 연결해야 합니다. 지원되는 외부 스토리지 서비스에 대해서는 [Mendix 시스템 요구 사항](/refguide/system-requirements/)을 참조하십시오. 이 사용 가이드에서는 노드에 바인딩된 스토리지 볼륨을 예로 사용합니다. 자세한 내용은 아래 [아키텍처 개요](#architecture)를 참조하십시오.

이 아키텍처 개요는 배포의 모든 구성 요소를 보여줍니다:

{{< figure src="/attachments/deployment/docker-deploy/run-mendix-on-kubernetes/kubernetes.png" class="no-border" >}}

Mendix 앱 배포에는 다음 Kubernetes 구성 요소가 필요합니다:

* [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
* [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
* [Service](https://kubernetes.io/docs/concepts/services-networking/service/)
* [Volume](https://kubernetes.io/docs/concepts/storage/volumes/)
* [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/)

데이터베이스는 **deployment**로 배포됩니다. Deployment는 Pod와 이러한 Pod의 ReplicaSets에 대한 제어를 포함합니다. **Pods**는 셀렉터 레이블로 설정하지 않는 한 클러스터의 특정 노드에 바인딩되지 않습니다. Deployment는 하나 이상의 노드에서 Pod를 확장할 수 있으며 Pod가 충돌하면 복구합니다.

Mendix 애플리케이션은 **StatefulSet**을 사용하여 배포됩니다. StatefulSet은 일반적으로 Deployment와 동일한 제어 옵션을 제공하지만 Pod에 안정적인 인덱스 번호와 네트워크 ID 및 스토리지를 제공합니다. StatefulSet은 애플리케이션에 예약된 이벤트를 실행할 수 있는 인스턴스를 식별하는 고유한 Pod 인덱스 번호를 제공하는 데 사용됩니다.

Pod는 생성, 삭제 또는 이동될 수 있으므로 데이터 스토리지는 가능한 한 외부화해야 합니다. Pod를 삭제하면 Pod가 시작한 컨테이너 내에 저장된 모든 데이터도 삭제됩니다. 앱을 확장할 때 모든 인스턴스가 동일한 데이터를 검색할 수 있어야 합니다. 이 사용 가이드에서는 노드에 바인딩된 **volume** 마운트를 사용하지만 사용 가능한 [클러스터 스토리지](https://kubernetes.io/docs/concepts/storage/volumes/) 옵션 목록을 확인하십시오.

Kubernetes 외부에서 Pod 내의 Mendix 애플리케이션에 액세스하려면 포트를 노출하는 **service**를 만들어야 합니다. 서비스는 Pod 검색 및 Pod 수명 주기를 처리하므로 특정 서비스의 소비자는 Pod의 위치나 액세스에 필요한 IP를 알 필요가 없습니다.

## 구성 요소 배포

### PostgreSQL 데이터베이스 배포

Minikube가 실행되면 다음 명령을 사용하여 Docker 데몬을 사용하도록 로컬 환경을 구성해야 합니다:

```bash
minikube docker-env
```

먼저 데이터베이스를 배포해야 합니다. Minikube는 데이터베이스 Pod 외부에 데이터를 유지하기 위해 외부 폴더를 사용합니다.

{{% alert color="info" %}}
간편성과 Minikube와의 호환성을 위해 `minikube node`에서 폴더를 마운트합니다. 이 방법은 프로덕션에 권장되지 않습니다.
{{% /alert %}}

다음은 `postgres-deployment.yaml` 데이터베이스 구성 요소의 정의입니다:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:11
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_DB
              value: db0
            - name: POSTGRES_USER
              value: mendix
            - name: POSTGRES_PASSWORD
              value: mendix
          volumeMounts:
            - mountPath: "/var/lib/postgresql/data"
              name: "mendix-pgdata"
      volumes:
        - hostPath:
            path: "/home/docker/pgdata"
          name: mendix-pgdata
```

PostgreSQL 데이터베이스를 생성하기 위해 제공된 [Postgres](https://hub.docker.com/_/postgres/) 이미지를 사용합니다. `env`에 제공된 환경 변수는 기본 데이터베이스를 구성하는 데 필요합니다. *yaml* 파일에 직접 비밀번호를 설정하는 대신 [secrets](https://kubernetes.io/docs/concepts/configuration/secret/)를 사용할 수 있습니다.

마지막으로 데이터베이스를 서비스로 노출하고 애플리케이션에서 사용할 수 있게 해야 합니다. 다음은 이러한 서비스의 정의입니다:

(`postgres-service.yaml`):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: postgres-service
spec:
  type: ClusterIP
  ports:
    - port: 5432
  selector:
    app: postgres
```

언급된 모든 구성 요소를 만들려면 다음을 사용합니다:

```bash
kubectl create -f postgres-deployment.yaml
kubectl create -f postgres-service.yaml
```

이제 데이터베이스가 생성되었습니다. 설치를 확인하려면 로그를 확인하십시오:

```bash
kubectl logs $(kubectl get pods -lapp=postgres -o name)
```

출력은 다음과 유사해야 합니다:

`2017-09-14 08:34:37.538 UTC [1] LOG:  database system is ready to accept connections`

애플리케이션을 배포하려면 호스트 및 포트 값이 필요합니다. 이를 얻기 위해 다음 명령을 실행합니다:

```bash
kubectl get service postgres-service
```

Windows를 사용하는 경우 먼저 이러한 인라인 명령을 실행하여 Pod 이름을 가져와야 합니다:

```bash
kubectl get pods -lapp=postgres -o name
```

그런 다음 Pod 이름을 사용하여 로그를 검색합니다:

```bash
kubectl logs <name>
```

### 영구 볼륨 추가

Docker Buildpack은 /opt/mendix/build/data/files에 파일을 저장합니다. 영구 스토리지가 없는 경우 Pod가 삭제되면 이러한 파일이 사라집니다. 이 경로에 영구 볼륨(PV)을 마운트하면 업로드된 모든 파일이 해당 PV에 저장됩니다.

이를 위해 `mendixapp.yaml` 파일의 `volumeMounts` 매개변수가 `/opt/mendix/build/data/files`를 가리키도록 해야 합니다. 이것은 아래 [애플리케이션 배포](#deploy)의 샘플 파일에 이미 설정되어 있습니다.

{{% alert color="info" %}}
CF Buildpack은 앱을 시작하기 전에 볼륨에서 파일 권한을 설정하려고 하므로 이를 수행할 권한이 있어야 합니다.
{{% /alert %}}

### 애플리케이션 배포{#deploy}

데이터베이스가 실행 중이므로 애플리케이션을 배포할 수 있습니다. [hub.docker.com](https://hub.docker.com/r/mendix/sample-app-kubernetes/)에 게시된 Mendix 앱이 있는 샘플 Docker 컨테이너를 사용합니다. Mendix 앱에 대한 새 Docker 컨테이너를 만들려면 [docker-mendix-buildpack](https://github.com/mendix/docker-mendix-buildpack)의 설명을 참조하십시오.

앱을 배포하기 전에 애플리케이션의 민감한 정보가 *yaml* 파일에 있을 필요가 없도록 몇 가지 시크릿을 만들어야 합니다. 시크릿 파일은 클러스터에 한 번 적용되며 값은 거기에 유지됩니다. 모든 옵션에 대한 정보는 [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)를 참조하십시오.

{{% alert color="info" %}}
시크릿 파일의 Secret 값은 base64로 인코딩되어야 합니다.
{{% /alert %}}

다음 내용으로 `mendix-app-secrets.yaml` 파일을 만드십시오:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mendix-app-secrets
type: Opaque
data:
  admin-password: YOUR_ADMIN_PASSWORD
  db-endpoint: YOUR_DATABASE_ENDPOINT
  license-key: YOUR_LICENSE_KEY
  license-id: YOUR_LICENSE_ID
```

`YOUR-DATABASE-ENDPOINT`는 `postgres://mendix:mendix@255.255.255.255:5432/db0` 형식입니다(예: `postgres://mendix:mendix@172.17.0.3:5432/db0`). 다음 명령을 사용하여 데이터베이스 엔드포인트의 올바른 IP 주소와 포트를 찾을 수 있습니다:

```bash
kubectl get ep postgres-service
```

예상되는 값 형식에 대해서는 [Mendix Docker 이미지 실행](/developerportal/deploy/run-mendix-docker-image/)을 참조하십시오.

다음 명령을 실행하여 Kubernetes에서 시크릿을 만듭니다:

```bash
kubectl create -f mendix-app-secrets.yaml
```

데이터베이스 서비스와 시크릿이 만들어지면 아래 파일에 정의된 애플리케이션을 만들 수 있습니다.

`mendix-app.yaml`:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mendix-k8s-stateful
  labels:
    app: mendix-k8s
spec:
  serviceName: mendix-app-service
  replicas: 2
  selector:
    matchLabels:
      app: mendix-k8s
  template:
    metadata:
      labels:
        app: mendix-k8s
    spec:
      containers:
        - name: mendix-app
          image: <hub-user>/<repo-name>:<tag>
          imagePullPolicy: Always
          ports:
            - containerPort: 8080 
          volumeMounts:
            - mountPath: "/opt/mendix/build/data/files"
              subPath: files
              name: mendix-data
          env:
            - name: ADMIN_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: admin-password
            - name: DATABASE_ENDPOINT
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: db-endpoint
            - name: LICENSE_ID
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: license-id
            - name: LICENSE_KEY
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: license-key      
      volumes:
        - hostPath:
            path: "/home/docker/mendix-files"
          name: mendix-data
```

`<hub-user>/<repo-name>:<tag>`를 앱의 Docker 이미지로 교체하십시오(예: `mendix/sample-app-kubernetes:v3`).

GitHub의 [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack) 지침을 사용하여 Mendix 앱의 Docker 이미지를 만드십시오.

Docker 이미지를 만든 후 다음 명령을 사용하여 Docker hub에 푸시합니다:

```bash
minikube image push <hub-user>/<repo-name>:<tag>
```

여기서 `<hub-user>/<repo-name>:<tag>`는 `mendix-app.yaml`에 식별된 앱의 Docker 이미지입니다. 위의 예에서는 다시 `mendix/sample-app-kubernetes:v3`입니다.

{{% alert color="info" %}}
이 예에서는 앱에 대해 저장된 데이터를 Docker 컨테이너에서 외부화하는 방법을 보여주기 위해 노드의 로컬 스토리지 폴더를 사용합니다. 프로덕션 시스템의 경우 선택한 클라우드 플랫폼에서 제공하는 스토리지를 사용하는 것을 권장합니다.
{{% /alert %}}

Kubernetes에 애플리케이션을 배포합니다:

```bash
kubectl create -f mendix-app.yaml
```

#### 확장에 대한 참고 사항{#scaling}

Mendix 런타임은 상태 비저장이므로 클라이언트가 모든 서버 인스턴스와 통신할 수 있습니다. 그러나 예약된 이벤트와 데이터베이스 마이그레이션은 하나의 인스턴스에서만 처리해야 합니다. 이것은 컨테이너 인덱스 카운트를 사용하여 수행됩니다. 인덱스 0인 Pod는 항상 예약된 이벤트를 트리거하고 업그레이드 버전의 경우 데이터베이스 업데이트를 처리합니다.

`kind: Deployment` 대신 `kind: StatefulSet`을 설정하면 컨테이너의 호스트 이름에 컨테이너 인스턴스 인덱스가 추가됩니다.

StatefulSet과 Deployment를 사용하면 동작에 약간의 차이가 있습니다. 예를 들어 Pod가 충돌해도 다른 노드로 이동하지 않으며, 노드에 연결할 수 없는 경우 다른 시스템에서 Pod가 재생성되지 않습니다.

### 앱을 사용 가능하게 만들기

브라우저에서 앱에 액세스하려면 클러스터 외부에서 접근할 수 있어야 합니다. 이를 위해 LoadBalancer 또는 NodePort 유형의 서비스를 사용합니다. Minikube의 경우 둘 다 사용할 수 있으며, IP 주소를 통해 앱이 노출됩니다.

클라우드 제공자에 배포하는 경우 앱을 게시하는 방법이 다를 수 있습니다(예: 일부 클라우드 제공자는 URL 요청을 클러스터에 전달하도록 로드 밸런서를 자동으로 업데이트할 수 있습니다). 자세한 내용은 [Create an External Load Balancer](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/)를 참조하십시오.

Mendix 앱을 NodePort 서비스로 게시하는 정의는 다음 파일에 설명되어 있습니다:

`mendix-app-service.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mendix-app-service
  labels:
    app: mendix-k8s
spec:
  ports:
  - port: 8080
    protocol: TCP
  selector:
    app: mendix-k8s
  type: NodePort
```

서비스를 배포합니다:

```bash
kubectl create -f mendix-app-service.yaml
```

다음 명령을 사용하여 애플리케이션이 실행 중인지 확인합니다:

```bash
minikube service mendix-app-service
```

Minikube에서 애플리케이션의 URL을 얻으려면 이 명령을 실행하고 브라우저에서 링크를 엽니다:

```bash
minikube service mendix-app-service --url
```

축하합니다! Kubernetes에서 첫 번째 Mendix 앱을 배포했습니다.

## 추가 정보

* [Docker: Deploy](/developerportal/deploy/docker-deploy/)
* [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack)
