---
title: "API 문서"
url: /apidocs-mxsdk/apidocs/
description: "Studio Pro, Frontend, Apps, Deployment, Governance, Marketplace, Catalog 및 Private Mendix Platform API를 위한 Mendix Platform API 문서 개요를 제공합니다."
weight: 1
no_list: false 
description_list: true
aliases:
    - /apidocs/
    - /apidocs-mxsdk/apidocs/authentication/
    - /apidocs/index.html
    - /apidocs-mxsdk/apidocs/runtime-api/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

API 문서는 아래에 설명된 섹션으로 나뉩니다.

자세한 내용은 *기술 용어 사전(Technology Glossary)*의 [API (Application Programming Interface)](https://www.mendix.com/glossary/api/)를 참조하십시오.

## 인증

Mendix API는 API 키 또는 개인용 액세스 토큰(Personal Access Token, PAT)으로 보호됩니다. 두 메커니즘 모두 CI/CD 파이프라인과 같은 클라이언트가 토큰을 생성한 플랫폼 사용자를 대신하여 플랫폼 API를 사용할 수 있도록 합니다. 각 API 문서에서 해당 API가 사용하는 인증 메커니즘에 대한 정보를 확인할 수 있습니다.

API 키와 비교했을 때 PAT의 장점은 플랫폼 사용자가 PAT 생성 시 해당 스코프(Scope)를 선택하여 특정 API에 대한 위임된 액세스 범위를 제한할 수 있다는 것입니다.

{{% alert color="info" %}}
API 키나 PAT를 생성한 사용자에게 적용되는 것과 동일한 권한 제한이 적용됩니다. 사용자가 비활성화된 경우 해당 사용자가 생성한 API 키와 PAT는 더 이상 사용할 수 없습니다.
{{% /alert %}}

## 이 카테고리의 문서
