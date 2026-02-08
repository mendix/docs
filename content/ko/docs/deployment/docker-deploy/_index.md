---
title: "Docker"
url: /developerportal/deploy/docker-deploy/
weight: 60
description: "Docker 이미지를 사용하여 배포하는 방법을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Docker는 오픈 소스 컨테이너 기술입니다. Mendix에서는 특히 로컬 또는 개발 버전의 앱을 실행할 때 간단한 배포에 사용할 수 있습니다. 그러나 일부 확장 및 통합 기능이 부족합니다.

Docker Buildpack은 로컬에서 Docker 이미지를 쉽게 생성할 수 있게 하지만, Mendix on Kubernetes가 제공하는 기능에 비해 실행, 관리 및 운영 면에서 부족합니다. Mendix on Kubernetes를 활용하면 Kubernetes가 컨테이너를 처리할 때마다 Mendix Operator가 이러한 필수 작업을 자동화합니다. 다음 다이어그램은 Docker Buildpack과 Mendix Operator 간의 차이를 보여줍니다:

{{< figure src="/attachments/deployment/docker-deploy/dockerbuildpack-vs-mxoperator.png" class="no-border" >}}

{{% alert color="info" %}}
대규모로 자체 클라우드 플랫폼에 배포할 계획이라면, 프로덕션 앱에는 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)를 사용하는 것이 더 나은 솔루션입니다. 이를 통해 처음부터 자체 프로세스를 만들 필요 없이 포괄적이고 자동화된 네이티브 기능을 사용하여 자체 클라우드 인프라와 통합하기 위한 구조적이고 테스트된 솔루션을 제공받을 수 있습니다.
{{% /alert %}}

이 페이지에서는 Mendix 앱에서 Docker 이미지를 빌드하는 방법을 설명합니다. 앱을 변경할 때마다 애플리케이션 파이프라인의 여러 단계를 통해 푸시할 수 있는 새 Docker 이미지를 만들어야 합니다.

이 사용 가이드에서는 다음을 수행하는 방법을 배웁니다:

* 이미지 빌드
* 레지스트리에 이미지 푸시

## 사전 요구 사항

이 지침을 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* *Mendix Marketplace*에서 최신 버전의 [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/) 다운로드
* [Docker 사이트](https://docs.docker.com/engine/installation/)에서 Docker 설치
* [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack) 다운로드

## 이미지 빌드

Docker 이미지를 빌드하려면 다음 단계를 따르십시오:

1. 컴퓨터에 Docker를 설치합니다.
2. Docker에 대한 액세스 권한이 부여되었는지 확인하기 위해 컴퓨터를 다시 시작합니다.
3. 빌드팩을 원하는 위치에 압축 해제합니다.
4. **명령 프롬프트**를 열고 빌드팩을 압축 해제한 폴더로 이동합니다.
5. Studio Pro에서 앱을 열고 메뉴 옵션 **App** > **Show App Directory in Explorer**를 선택합니다:

    {{< figure src="/attachments/deployment/docker-deploy/create-deployment-package.png" class="no-border" >}}

6. 프로젝트 폴더와 모든 하위 폴더를 압축 해제한 Docker 빌드 폴더에 복사합니다. 프로젝트 폴더는 Docker 파일과 동일한 폴더에 있어야 합니다. 그렇지 않으면 Docker가 액세스할 수 없습니다.
7. 다음 명령을 실행합니다:

    ```bash
    docker build --build-arg BUILD_PATH="{relative-mendix-project-location}" -t {image name} .
    ```

    **{relative-mendix-project-location}**은 애플리케이션 모델이 있는 위치를 나타내는 BUILD_PATH입니다. 프로젝트를 Docker 빌드 폴더에 복사한 후 .MPR 파일이 있는 디렉터리입니다. 지정하지 않으면 기본값은 `./project`입니다.

    성공적인 빌드는 아래에 표시된 출력과 유사합니다:

    {{< figure src="/attachments/deployment/docker-deploy/build-image.png" class="no-border" >}}

{{% alert color="info" %}}
[Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack) GitHub 리포지토리에서 훨씬 더 많은 정보와 관련 Docker 문서 링크를 찾을 수 있습니다.
{{% /alert %}}

## 이미지 푸시

지정한 이름(`{image name}`)으로 새 Docker 이미지가 생성되었습니다. `docker images` 명령을 사용하여 이미지를 볼 수 있습니다.

다음으로 이미지를 레지스트리에 푸시해야 합니다. 이것은 공개 레지스트리이거나 자체 레지스트리일 수 있습니다. 자체 레지스트리에 푸시하려면 `docker push {image name}` 명령을 사용합니다.

## 추가 정보

* [Mendix Docker 이미지 실행 방법](/developerportal/deploy/run-mendix-docker-image/)
