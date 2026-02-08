---
title: "Private Mendix Platform User API"
url: /apidocs-mxsdk/apidocs/private-platform-user-api/
type: swagger
description: "이 API를 사용하면 Private Mendix Platform에서 사용자를 관리할 수 있습니다."
restapi: true
weight: 60
linktitle: "User API"
---

{{% alert color="info" %}}
이 문서는 [Private Mendix Platform](/private-mendix-platform/) API에 대한 문서입니다. 이 API는 Private Mendix Platform 인스턴스에서만 사용할 수 있습니다. [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API에 대해서는 [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) 및 [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)를 참조하십시오.
{{% /alert %}}

## 소개

Private Mendix Platform User API를 사용하면 Private Mendix Platform에서 사용자를 관리할 수 있습니다. 이 API를 사용하여 다음 작업을 수행할 수 있습니다:

* ID로 사용자 조회
* 현재 조직의 모든 사용자 목록 조회
* 사용자 생성, 업데이트 또는 삭제
* 특정 ID의 사용자 비밀번호 변경

## API 참조

{{< swaggerui src="/openapi-spec/openapi-user.yaml"  >}}
