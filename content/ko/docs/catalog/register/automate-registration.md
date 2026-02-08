---
title: "카탈로그 등록 자동화"
linktitle: "카탈로그 등록 자동화"
url: /catalog/register/automate-registration/
description: "(가상) Mendix on Kubernetes 배포에 배포하는 파이프라인에서 카탈로그 등록을 자동화하는 방법을 설명합니다."
weight: 40
aliases:
    - /catalog/automate-registration/
---

## 소개

[카탈로그](/catalog/)는 OData 및 OpenAPI 서비스를 통해 제공되는 공유 등록 자산을 관리하기 위한 메타데이터 허브입니다. 카탈로그에 데이터를 등록하는 것은 게시된 서비스가 있는 앱을 Mendix Cloud에 배포할 때 자동으로 이루어집니다.

(가상) Mendix on Kubernetes 배포에 배포하는 사용자의 경우, 이 문서의 단계를 따라 파이프라인에서 카탈로그 등록을 자동화할 수 있습니다.

## 사전 요구 사항

시작하기 전에 다음을 준비하십시오:

* Catalog API에 접근하기 위한 [개인 접근 토큰(Personal Access Token)](/portal/user-settings/#pat)
* Mendix 앱을 배포하는 작동하는 파이프라인 (Mendix on Kubernetes 배포에 배포하는 첫 번째 단계는 [Mendix on Kubernetes 클러스터 생성](/developerportal/deploy/private-cloud-cluster/)을 참조하십시오)

## 시작점: dependencies.json

*dependencies.json*이라는 파일에 앱의 모든 게시된 서비스와 사용된 서비스가 나열됩니다. 이 파일에는 다음 단계에서 API 호출을 수행하는 데 필요한 정보가 포함됩니다.

*dependencies.json*이 포함된 `.mda` 패키지를 생성하십시오. [Apps](https://sprintr.home.mendix.com/)에서 앱을 열고 **Environments** 페이지로 이동한 다음 팀 서버에서 **Create Package**를 클릭하거나, `mxbuild`를 실행하십시오 (Mendix 배포 패키지를 빌드하는 방법에 대한 정보는 [MxBuild](/refguide/mxbuild/)를 참조하십시오).

Mendix 애플리케이션의 **Deployment** > **Model** 폴더에서도 *dependencies.json*을 찾을 수 있습니다.

## 데이터 구조 변경하기 {#transform}

Registration API의 **Transform** 엔드포인트를 사용하여 *dependencies.json*을 변환하여 계약 메타데이터가 수락되도록 하십시오 (*Catalog APIs*의 [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/) 섹션을 참조하십시오).

이 섹션에서 다음이 필요합니다:

* [개인 접근 토큰](/portal/user-settings/#pat)
* `dependencies.json` 파일
* 엔드포인트 위치 `Name` (노출된 서비스의 *metadata.json* 파일에서 **Constants** 배열의 **Name** 아래에 있음)
* 엔드포인트 위치 `Value` (노출된 서비스의 *metadata.json* 파일에서 **Constants** 배열의 **DefaultValue** 아래에 있음)

서비스 세부 정보를 준비하려면 [Catalog Registration API를 통한 환경 등록](/apidocs-mxsdk/apidocs/registration-api/#register-environment)의 단계를 따르십시오. 완료되면 [애플리케이션을 등록](#register-the-application)하십시오.

## 애플리케이션 등록하기 {#register-the-application}

애플리케이션을 등록하려면 다음이 필요합니다:

* [개인 접근 토큰](/portal/user-settings/#pat)
* 애플리케이션 **Name**

[Registration API를 통한 애플리케이션 등록](/apidocs-mxsdk/apidocs/registration-api/#register-application)의 단계를 따르십시오.

완료 시 `application_UUID`를 받게 됩니다.

## 환경 등록하기

환경을 등록하려면 다음이 필요합니다:

* [개인 접근 토큰](/portal/user-settings/#pat)
* `application_UUID`
* 환경 `Name`
* 환경 `Location`
* 환경 `Type`

애플리케이션의 환경을 등록하려면 [Catalog Registration API를 통한 환경 등록](/apidocs-mxsdk/apidocs/registration-api/#register-environment)의 단계를 따르십시오. 완료되면 [엔드포인트를 등록](#register-endpoints)하십시오.

완료 시 `environment_UUID`를 받게 됩니다.

## 엔드포인트 등록하기 {#register-endpoints}

서비스 엔드포인트를 등록하려면 다음이 필요합니다:

* [개인 접근 토큰](/portal/user-settings/#pat)
* `application_UUID`
* `environment_UUID`
* 서비스 `Path`, `Name`, `Type`
* 서비스 `Version` 및 `Security Scheme`
* `Type`과 `Value`를 포함하는 서비스 `Contract`

[Catalog Registration API를 통한 서비스(엔드포인트) 등록](/apidocs-mxsdk/apidocs/registration-api/#register-services)의 단계를 따르십시오.

동일한 애플리케이션 및 환경에 대해 한 번에 두 개 이상의 서비스를 등록하려면 요청 본문의 엔드포인트 목록에 다른 객체를 추가하십시오.
