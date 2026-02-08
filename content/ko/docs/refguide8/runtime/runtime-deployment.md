---
title: "Runtime 배포"
url: /refguide8/runtime-deployment/
description: "Mendix Runtime이 배포되는 방식을 설명합니다."
weight: 30
---

## 소개

Mendix 모델을 클라우드에서 실행되는 앱으로 변환하려면 배포가 필요합니다. 이 문서에서는 프로젝트 배포의 개념과 클라우드에서 실행을 시작하기까지의 프로세스를 설명합니다. 앱을 배포하는 방법에 대한 기술적인 자세한 내용은 [앱 배포](/deployment/)를 참조하십시오.

이 배포 설명은 클라우드에서 실행되는 앱을 기반으로 합니다. 테스트를 위해 Mendix를 로컬에서 실행할 수도 있지만, 개념적으로는 동일합니다.

## Mendix Runtime 배포

구조적 오류가 없는 Mendix 앱을 만들었으면 배포하여 실행해야 합니다.

아래는 앱 배포에 관련된 프로세스를 보여주는 차트입니다. 각 프로세스와 구성 요소에 대한 설명은 차트 아래에 있습니다.

{{< figure src="/attachments/refguide8/runtime/runtime-deployment/runtime-deployment.png" alt="How Mendix Runtime is deployed" class="no-border" >}}

### Deployer

Mendix Cloud 기능에 의해 시작되어 앱의 배포를 관리합니다.

### Docker 환경

Buildpack이 처리할 수 있도록 Cloud Foundry 방식으로 Docker 환경을 지정하는 Docker 환경 사양입니다.

### 프로젝트 MPK

Studio Pro에서 생성한 프로젝트 모델입니다. Mendix Runtime에서 직접 해석할 수 없습니다.

### MX Build

mpk 형식의 앱을 Mendix Runtime에서 해석할 수 있는 mda 형식으로 변환합니다.

### Buildpack

Buildpack은 클라우드 환경에 Mendix 모델을 배포하는 것을 제어하는 Mendix 스크립트입니다. 다음 작업을 수행합니다:

* 대상 환경과 데이터베이스 및 파일 저장소와 같은 바인딩된 서비스를 식별합니다
* mpk 형식의 프로젝트를 받으면 MxBuild를 시작하여 mda 형식으로 변환합니다
* 올바른 버전의 Java Runtime Environment를 식별하고 환경에 푸시합니다
* 올바른 버전의 Mendix Runtime을 식별하고 m2ee를 사용하여 프로젝트를 정의하는 프로젝트 mda에 대한 링크와 함께 Runtime Server를 환경에 푸시합니다

### 프로젝트 MDA

Mendix Runtime에서 해석할 수 있는 방식으로 앱을 정의하는 mda 형식의 Mendix 앱입니다.

### CDN

Mendix Runtime 및 MxBuild 버전과 같은 배포 프로세스 구성 요소를 저장하는 데이터 리포지토리입니다.

### Java RE

Runtime Server를 실행하는 데 사용되는 Java Runtime Environment(JRE)입니다. JRE 버전은 Runtime Server 버전에 따라 다릅니다. 예를 들어, Mendix 8.18.29는 JRE 버전 17에서 실행됩니다.

### M2ee

M2ee는 Mendix 앱을 배포하는 데 사용되는 Python으로 작성된 도우미 도구 모음입니다. 대상 플랫폼에 따라 m2ee-tools와 m2ee-sidecar의 두 가지 형태로 제공됩니다.
Java RE를 시작하고 관련 Runtime Server 바이너리(jar) 파일 버전을 가리켜 Runtime Server를 시작합니다. 시작된 후, m2ee는 Runtime Server에 연결하여 로드할 Mendix 애플리케이션 모델을 알려줍니다.

### Runtime Server

앱을 실행하는 인터프리터입니다. 자세한 내용은 [Runtime Server](/refguide8/runtime-server/)를 참조하십시오.
