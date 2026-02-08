---
title: "Published REST Resource"
url: /refguide8/published-rest-resource/
weight: 50
description: "Published REST Resource의 구성 가능한 옵션"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > add resource > help (integration)
---

## 소개

Published REST Resource는 [Published REST Service](/refguide8/published-rest-service/)의 일부이며 하나 이상의 [작업](/refguide8/published-rest-operation/)을 정의할 수 있는 항목의 컬렉션을 나타냅니다.

도메인 모델의 Entity에서 Published REST Resource를 생성할 수 있습니다. [Published REST Resource 생성](/refguide8/generate-rest-resource/)을 참조하십시오.

## General

### Resource Name{#name}

리소스 이름은 [서비스](/refguide8/published-rest-service/)에서 리소스를 고유하게 식별합니다. 작업 위치의 일부이므로 공백이나 특수 문자를 포함할 수 없습니다.

## Public Documentation {#public-documentation}

Public Documentation은 서비스의 [OpenAPI (Swagger) 문서 페이지](/refguide8/published-rest-services/#interactive-documentation)에서 사용됩니다. 서식 있는 텍스트를 위해 [GitHub-flavored Markdown](/refguide8/gfm-syntax/)을 사용할 수 있습니다.
