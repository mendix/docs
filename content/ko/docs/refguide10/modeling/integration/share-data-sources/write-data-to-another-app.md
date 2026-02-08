---
title: "다른 앱에 데이터 쓰기"
url: /refguide10/write-data/
description: "Mendix Studio Pro에서 OData 서비스에 어노테이션을 추가하고, Catalog에서 이러한 기능이 포함된 외부 엔티티(Entity)를 확인하며, 이를 사용하여 앱을 구축하는 방법을 설명합니다."
weight: 20
aliases:
    - /data-hub/write-data/
    - /catalog/write-data/
    - /howto10/integration/write-data/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# SB: The images on this page are created using the Lato-LandscapeDemoApp (https://sprintr.home.mendix.com/link/project/1b515494-d818-4358-8c91-6c3d54e9cae5)
---

## 소개

이 사용 방법 문서는 [앱 간 데이터 공유](/howto10/integration/share-data/)에서 제공된 정보를 기반으로 하며, OData 어노테이션이 데이터를 생성, 업데이트 및 삭제할 수 있는 기능을 어떻게 제공하는지 보여줍니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* Mendix Studio Pro에서 업데이트 가능한 OData 엔티티(Entity), 속성 및 연관(Association)을 노출하기
* [Catalog](https://catalog.mendix.com/)에서 특정 엔티티(Entity), 속성 또는 연관(Association)이 가진 기능 확인하기
* Mendix 앱에서 업데이트 가능한 OData 리소스 사용하기

OData 프로토콜을 사용하면 데이터를 읽기, 생성, 업데이트 및 삭제할 수 있습니다. Studio Pro는 이러한 기능 중 일부를 활용합니다. Catalog는 이러한 기능에 대해 개발자에게 친숙한 약어를 사용하고, Studio Pro는 OData 정의를 사용합니다.

아래 표에 설명된 용어 차이점에 유의하세요:

| Catalog | Studio Pro |
| -------- | ---------- |
| Create   | Insertable |
| Read     | Readable   |
| Update   | Updatable  |
| Delete   | Deletable  |

## 사전 요구 사항

이 사용 방법 문서를 시작하기 전에 다음 사전 요구 사항을 완료하십시오:

* 최신 버전의 [Studio Pro](https://marketplace.mendix.com/link/studiopro/) 설치
* [앱 간 데이터 공유](/howto10/integration/share-data/)를 읽고 읽기 전용 외부 엔티티의 동작 이해하기

## Mendix Studio Pro에서 OData 계약 노출하기

게시된 OData 서비스에서 엔티티(Entity)를 게시하면 클라이언트는 기본적으로 데이터를 읽을 수 있습니다. 클라이언트가 데이터를 업데이트, 삽입 또는 삭제할 수 있도록 하려면 다음을 수행하세요:

1. **MyFirstModule** > **APIs** > **{yourname}CustomerODataService**에서 게시된 OData 서비스를 여세요.
2. **Customer** 엔티티(Entity)를 선택하고 **Edit**을 클릭하세요.
3. 엔티티(Entity)가 **Insertable**, **Readable**, **Updatable** 및/또는 **Deletable**이어야 하는지 나타내는 체크박스를 선택하세요.

## Catalog에서 OData 기능 보기 {#view-capabilities}

업데이트 가능한 OData 기능은 앱의 데이터와 관련됩니다. Catalog는 앱의 메타데이터 인벤토리를 제공합니다. Catalog에서 엔티티(Entity), 속성 및 연관(Association) 기능을 볼 수 있습니다. 데이터 자체의 변경은 Catalog가 아닌 Mendix 앱에서 발생합니다.

특정 OData 엔티티의 기능을 보려면 다음을 수행하세요:

1. [Catalog](https://catalog.mendix.com/)로 이동하여 노출된 OData 서비스 엔드포인트, 엔티티(Entity), 속성 또는 연관(Association)의 이름을 검색하세요. 자세한 내용은 *앱 간 데이터 공유*의 [Catalog 사용 및 서비스 큐레이션](/refguide10/share-data/#use-and-curate) 섹션을 참조하세요.
2. 왼쪽 검색 결과 창에서 엔티티(Entity)를 선택하세요. 결과가 많지 않으면 검색에서 **Production** 필터를 제거해 보세요.

검색 패널과 중앙의 상세 정보에서 엔티티(Entity) 이름 옆에 강조 표시된 **CRUD** 문자를 확인하세요. 보라색 문자는 지원되는 작업을 나타내고, 회색 문자는 지원되지 않는 작업을 나타냅니다. 문자 위에 마우스를 올려 어떤 작업이 지원되는지 확인하세요. 여기에서 OData 제한 사항도 확인할 수 있습니다.

## Mendix 앱에서 OData 리소스 사용하기

Catalog와 마찬가지로 Studio Pro의 [Integration pane](/refguide10/integration-pane/)에서 엔티티(Entity), 속성 및 연관(Association)의 **CRUD** 기능을 확인할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/write-data/crud-capabilities.png" alt="crud capabilities" class="no-border" >}}

OData 엔티티를 사용하려면 다음을 수행하세요:

1. **Integration** pane에서 검색 필드에 용어를 입력하세요.
2. **Integration** pane에서 엔티티(Entity)를 선택하세요. 기본적으로 이 pane은 프로덕션 환경에 게시된 결과만 표시합니다. 다른 환경의 결과도 보려면 필터 아이콘을 클릭하고 **Show development environments** 체크박스를 선택하세요.
3. 엔티티(Entity)를 도메인 모델로 드래그하세요.

이제 도메인 모델에 외부 엔티티(Entity)가 있습니다. 기능에 따라 외부 엔티티를 사용하여 평소처럼 앱을 모델링할 수 있지만, 일부 제한 사항이 있습니다. 제한 사항에 대한 자세한 정보는 *External Entities*의 [External Entities Limitations](/refguide10/external-entities/#limitations) 섹션을 참조하세요.

## 데이터 유효성 검사 및 오류 처리 {#data-validation}

앱 간에 삽입되거나 업데이트된 데이터를 확인하기 위해 [데이터 유효성 검사를 설정](/refguide10/setting-up-data-validation/)할 수 있습니다. 클라이언트 애플리케이션의 도메인 모델에 있는 삽입 유효성 검사 마이크로플로우(Microflow)가 삽입되거나 업데이트된 데이터를 확인할 수 있습니다.

게시된 서비스는 삽입이 실패했음을 어떻게 알 수 있을까요? 게시 앱에서 유효성 검사 메시지 액션을 사용하여 오류를 보고할 수 있습니다. 클라이언트 앱은 [Send External Object](/refguide10/send-external-object/) 액티비티에 커스텀 오류 핸들러를 포함하여 오류를 처리할 수 있습니다.

게시 앱의 유효성 검사 메시지에 대한 도메인 모델은 다음과 같습니다:

{{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/write-data/validate-data-publishing-app.png" alt="publishing app validation" class="no-border" >}}

클라이언트 앱에서 오류 핸들러는 다음과 같습니다:

{{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/write-data/validate-data-client-app.png" alt="client app validation" class="no-border" >}}
