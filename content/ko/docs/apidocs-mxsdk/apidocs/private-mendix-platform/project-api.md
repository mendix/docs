---
title: "Private Mendix Platform Project API"
url: /apidocs-mxsdk/apidocs/private-platform-project-api/
type: swagger
description: "이 API를 사용하면 Private Mendix Platform에서 프로젝트를 관리할 수 있습니다."
restapi: true
weight: 60
linktitle: "Project API"
---

{{% alert color="info" %}}
이 문서는 [Private Mendix Platform](/private-mendix-platform/) API에 대한 문서입니다. 이 API는 Private Mendix Platform 인스턴스에서만 사용할 수 있습니다. [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API에 대해서는 [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) 및 [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)를 참조하십시오.
{{% /alert %}}

## 소개

Private Mendix Platform Project API를 사용하면 Private Mendix Platform에서 프로젝트를 관리할 수 있습니다. 이 API를 사용하여 다음 작업을 수행할 수 있습니다:

* ID로 프로젝트 조회
* 현재 사용자의 모든 프로젝트 목록 조회
* 프로젝트 생성 또는 삭제
* 프로젝트 생성 상태 조회
* 프로젝트 이름, 설명 또는 상태 변경
* 프로젝트의 소유 사용자 및 그룹 변경
* 모든 프로젝트 팀 멤버 조회
* 프로젝트에 멤버 및 그룹 추가 또는 제거

## API 참조

{{< swaggerui src="/openapi-spec/openapi-project.yaml"  >}}
