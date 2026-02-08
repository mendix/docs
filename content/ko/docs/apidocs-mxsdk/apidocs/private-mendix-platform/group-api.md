---
title: "Private Mendix Platform Group API"
url: /apidocs-mxsdk/apidocs/private-platform-group-api/
type: swagger
description: "이 API를 사용하면 Private Mendix Platform에서 사용자 그룹을 관리할 수 있습니다."
restapi: true
weight: 60
linktitle: "Group API"
---

{{% alert color="info" %}}
이 문서는 [Private Mendix Platform](/private-mendix-platform/) API에 대한 문서입니다. 이 API는 Private Mendix Platform 인스턴스에서만 사용할 수 있습니다. [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API에 대해서는 [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) 및 [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)를 참조하십시오.
{{% /alert %}}

## 소개

Private Mendix Platform Group API를 사용하면 Private Mendix Platform에서 사용자 그룹을 관리할 수 있습니다. 이 API를 사용하여 다음 작업을 수행할 수 있습니다:

* ID로 그룹 조회
* 현재 사용자의 모든 그룹 목록 조회
* 그룹 생성, 업데이트 또는 삭제
* 그룹 내 모든 사용자 목록 조회
* 그룹 멤버 역할 업데이트
* 그룹에 멤버 추가 또는 제거

## API 참조

{{< swaggerui src="/openapi-spec/openapi-group.yaml"  >}}
