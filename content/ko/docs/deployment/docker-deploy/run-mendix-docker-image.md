---
title: "Mendix Docker 이미지 실행"
linktitle: "Docker 이미지 실행"
url: /developerportal/deploy/run-mendix-docker-image/
weight: 10
description: "Mendix Docker 이미지 실행에 대해 설명합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

Docker는 시장에서 높은 확장성 솔루션과 자동화된 전달 파이프라인(CI/CD)에 널리 사용되는 오픈 소스 컨테이너 기술입니다.

이 사용 가이드에서는 Mendix Docker Buildpack을 사용하여 생성된 Mendix Docker 이미지를 실행하는 방법을 설명합니다. Mendix Docker 이미지는 이 빌드팩을 사용하여 프로젝트의 각 릴리스에 대해 고유하게 생성됩니다. Docker 이미지를 실행하려면 Docker 오케스트레이션 플랫폼에 대한 액세스가 필요합니다. 공식 지원되는 오케스트레이션 플랫폼에 대해서는 [시스템 요구 사항](/refguide/system-requirements/)을 참조하십시오.

이 사용 가이드에서는 다음을 수행하는 방법을 배웁니다:

* 호환성 확인
* Mendix Docker 이미지 실행

## 사전 요구 사항

이 사용 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Mendix 빌드팩으로 이미지 빌드(자세한 내용은 [Docker: Deploy](/developerportal/deploy/docker-deploy/) 참조)

## 호환성

Mendix는 PostgreSQL, RDS 또는 Azure SQL과 같은 호환 가능한 데이터베이스 서비스가 있는 한 위의 Docker 호스트와 호환됩니다. 외부 파일 저장소 지원은 Amazon S3 또는 Azure Blob 저장소로 설정할 수 있습니다.

## Mendix Docker 이미지 실행

컨테이너를 시작하려면 Mendix 애플리케이션의 `ADMIN_PASSWORD`에 대한 관리 계정을 생성하기 위해 비밀번호와 `DATABASE_ENDPOINT`를 제공해야 합니다. 다음 예를 참조하십시오:

```shell
docker run -it \
  -e ADMIN_PASSWORD=Password1! \
  -e DATABASE_ENDPOINT=postgres://username:password@host:port/mendix \
  mendix/mendix-buildpack:v1.2  
```

Microsoft SQL Server의 예입니다:

```powershell
docker run -it \
  -e ADMIN_PASSWORD=Password1! \
  -e DATABASE_ENDPOINT=sqlserver://username:password@host:port/mendix \
  mendix/mendix-buildpack:v1.2  
```

## 추가 정보

* [Docker: Deploy](/developerportal/deploy/docker-deploy/)
* [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack)
