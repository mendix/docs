---
title: "Private Mendix Platform Marketplace API"
url: /apidocs-mxsdk/apidocs/private-platform-marketplace-api/
type: swagger
description: "이 API를 사용하면 Private Mendix Platform에서 Marketplace를 관리할 수 있습니다."
restapi: true
weight: 60
linktitle: "Marketplace API"
---

{{% alert color="info" %}}
이 문서는 [Private Mendix Platform](/private-mendix-platform/) API에 대한 문서입니다. 이 API는 Private Mendix Platform 인스턴스에서만 사용할 수 있습니다. [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API에 대해서는 [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) 및 [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)를 참조하십시오.
{{% /alert %}}

## 소개

Private Mendix Platform Marketplace API를 사용하면 Private Mendix Platform에서 Marketplace를 관리할 수 있습니다. 이 API를 사용하여 다음 작업을 수행할 수 있습니다:

* 모든 Marketplace 콘텐츠 항목 조회
* 새 Marketplace 콘텐츠 항목 생성
* 기존 Marketplace 콘텐츠 항목의 버전 조회
* 기존 콘텐츠 항목의 새 버전 생성
* ID로 단일 Marketplace 콘텐츠 항목 조회
* 콘텐츠 항목 업데이트
* 게시되지 않은 Marketplace 콘텐츠 삭제
* 특정 게시된 콘텐츠 항목 다운로드
* Marketplace 콘텐츠 항목의 특정 버전 조회
* 콘텐츠 항목의 소유 사용자 및 그룹 변경
* 콘텐츠 항목의 그룹 조회, 추가, 삭제 또는 입력
* Marketplace 콘텐츠 항목의 특정 버전 업데이트, 게시, 사용 중단, 활성화 또는 삭제
* 모든 Marketplace 카테고리 조회
* ID로 단일 하위 카테고리 조회
* 하위 카테고리 생성, 업데이트 또는 삭제

## API 참조

{{< swaggerui src="/openapi-spec/openapi-marketplace.yaml"  >}}
