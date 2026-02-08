---
title: "Private Mendix Platform용 API"
url: /apidocs-mxsdk/apidocs/private-platform/
description: "Group, User, Marketplace 및 Project와 같은 Private Mendix Platform API 문서에 대한 개요를 제공합니다."
weight: 40
no_list: false 
description_list: true
linktitle: "Private Mendix Platform"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
이 문서는 [Private Mendix Platform](/private-mendix-platform/) API에 대한 것입니다. 이 API는 Private Mendix Platform 인스턴스에서만 사용할 수 있습니다. [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API의 경우 [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) 및 [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)를 참조하십시오.
{{% /alert %}}

## 소개

이 카테고리의 문서는 Group, User, Marketplace 및 Project와 같은 [Private Mendix Platform](/private-mendix-platform/) API 문서에 대한 개요를 제공합니다.

API 문서는 아래 설명된 섹션으로 나뉩니다.

자세한 내용은 *기술 용어 사전(Technology Glossary)*의 [API (Application Programming Interface)](https://www.mendix.com/glossary/api/)를 참조하십시오.

## 전제 조건

API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다. [Private Mendix Platform 프로필(Private Mendix Platform Profile)](/private-mendix-platform/user-guide/#profile)의 **Personal Access Tokens** 섹션에서 PAT를 생성할 수 있습니다.

사용 가능한 각 API에는 토큰의 액세스 수준을 정의하는 자체 스코프(scope) 세트가 있습니다. 모범 사례로 필요한 작업을 수행하는 데 필요한 가장 낮은 액세스 수준으로 토큰의 스코프를 제한하는 것을 고려하십시오.

`{GENERATED_PAT}`를 복사하여 안전한 위치에 보관하여 Private Mendix Platform API 호출을 인증하는 데 사용하십시오.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-platform/copy-pat.png" class="no-border" >}}

## 이 카테고리의 문서

Mendix는 Private Mendix Platform을 위해 다음과 같은 API를 제공합니다:
