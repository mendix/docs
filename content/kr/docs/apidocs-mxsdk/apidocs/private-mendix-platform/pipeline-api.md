---
title: "Private Mendix Platform Pipeline API"
url: /apidocs-mxsdk/apidocs/private-platform-pipeline-api/
type: swagger
description: "이 API를 사용하면 Private Mendix Platform에서 파이프라인을 관리할 수 있습니다."
restapi: true
weight: 60
linktitle: "Pipeline API"
---

{{% alert color="info" %}}
이 문서는 [Private Mendix Platform](/private-mendix-platform/) API에 대한 것입니다. 이 API는 Private Mendix Platform 인스턴스에서만 사용할 수 있습니다. [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API의 경우 [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) 및 [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)를 참조하십시오.
{{% /alert %}}

## 소개

Private Mendix Platform Project API를 사용하면 Private Mendix Platform에서 파이프라인을 관리할 수 있습니다. API를 사용하여 다음을 수행할 수 있습니다:

* 파이프라인 실행 정보 가져오기.
* 파이프라인의 현재 단계 상태 설정.
* 빌드 또는 배포를 위한 파이프라인 생성.
* 대기 중인 파이프라인의 수동 단계 승인 또는 거부.

## API 레퍼런스

{{< swaggerui src="/openapi-spec/openapi-pipeline.yaml"  >}}
