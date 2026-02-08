---
title: "구성"
url: /appstore/creating-content/best-practices/configuration/
weight: 10
---

## 소개

모듈 자체를 변경하지 않고도 다양한 설정에서 커넥터를 사용할 수 있도록 구성을 설정해야 합니다. 이는 배포 시 또는 배포 후에 커넥터를 관련 서비스에 연결하도록 구성할 수 있음을 의미합니다. 

상수를 사용하는 것이 [12 요소 아키텍처](https://www.mendix.com/evaluation-guide/enterprise-capabilities/twelve-factor-architecture/) 클라우드 네이티브 접근 방식에 맞는 구성을 처리하는 방법입니다.

## 단순 구성

URL, 사용자 이름 또는 비밀번호와 같은 단순 구성을 찾고 있다면 [상수(constants)](/refguide/constants/)를 사용할 수 있습니다. 상수는 단순한 플랫 구성에 이상적입니다.

### Free App 환경에서의 단순 구성

Free App과 함께 상수를 사용하는 경우, 설정 프로필을 사용하여 다양한 구성을 허용할 수 있습니다. 다음 단계를 따르십시오:

1. 상수를 만듭니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-constant.png">}}

2. 상수의 값을 무료 클라우드 노드에서 사용하려는 값으로 설정합니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-value.png" >}}

3. 애플리케이션 **Settings**를 엽니다. 

4. **Duplicate** 또는 **New**를 클릭하여 로컬 사용을 위한 새 구성을 만듭니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-settings.png">}}

5. 구성에서 **Constants** 탭을 열고 **New**를 클릭합니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-new-constants.png">}}

6. 상수를 찾아 선택합니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-select-constant.png">}}

7. 상수의 구성 값을 로컬 환경에서 사용하려는 값으로 변경합니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/simple-config-change-value.png">}}

8. 구성을 저장하고 무료 노드에 애플리케이션을 게시합니다. 로컬에서 실행하면 Studio Pro가 **Active** 구성을 사용하고, 무료 클라우드 노드는 **App Explorer**에서 지정한 값을 계속 사용합니다.

## 복잡한 구성

외부 시스템에 연결하기 위해 더 정교한 구성이 필요할 수 있습니다. 수십 개의 상수가 필요하거나 상수를 매번 복제하지 않고도 여러 엔드포인트에 연결하고 싶을 수 있기 때문입니다. 구성 테이블을 통해 이를 유지 관리해야 합니다.

### 복잡한 구성의 단점

복잡한 구성의 단점은 다음과 같습니다:

* 데이터베이스 또는 코드베이스의 구성은 새 환경에 커넥터/앱을 배포하기 어렵게 만듭니다.
* 수동 구성은 더 많은 실수를 유발할 수 있습니다.
* 구성이 데이터베이스에 저장된 경우 데이터베이스를 다른 환경으로 복원하면 원치 않는 동작이 발생할 수 있습니다.
* 데이터베이스를 사용하여 구성을 저장하는 큰 위험 중 하나는 테스트 데이터가 프로덕션 사용자에게 전달되는 것입니다.

### 복잡한 구성의 장점

복잡한 구성의 장점은 다음과 같습니다: 

* 상수보다 더 많은 복잡성을 제공합니다.
* 런타임에 구성을 쉽게 변경할 수 있습니다.
* 사용자를 안내하는 위저드/도우미 플로우를 추가할 수 있습니다.

### 복잡한 구성 설정

복잡한 구성을 설정하려면 다음 단계를 따르십시오: 

1. **Configuration** Entity를 설정합니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-entity.png">}}

2. Microflow를 만듭니다.  
   **DS_GetOrCreateSettings**라는 단일 Microflow를 만드십시오. 데이터베이스에서 설정을 검색하고, 존재하지 않는 경우 적절한 기본값으로 만듭니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-create-microflow.png">}}

3. Entity 및 Microflow에 보안을 설정합니다.

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-security.png" >}}

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/complex-config-security-2.png" >}}

4. 관리자 페이지를 설정합니다.  
   구성을 관리하기 위한 관리 페이지를 만드십시오. 최대 재사용성을 위해 모든 구성 설정을 단일 스니펫에서 사용할 수 있도록 하여 소비자가 애플리케이션의 단일 영역에 모든 컴포넌트의 모든 관리 섹션을 결합할 수 있도록 합니다.

5. 비밀번호 및 기타 민감한 정보를 암호화합니다.

#### 추가 고려 사항

가능하면 소비자를 위한 기본 또는 시작 구성을 설정하는 Microflow를 만드십시오. 

코드베이스에서 구성을 쉽게 설정할 수 있는 로직을 추가하는 것을 고려하십시오.

가능하면 환경 간에 구성을 안전하게 이동하기 위한 내보내기/가져오기 옵션을 추가하십시오. 이는 구성 데이터의 JSON 내보내기/가져오기를 통해 달성할 수 있습니다.
