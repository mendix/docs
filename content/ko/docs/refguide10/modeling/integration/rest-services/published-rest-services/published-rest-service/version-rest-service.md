---
title: "REST Service 버전 관리"
url: /refguide10/version-rest-service/
weight: 10
description: "Mendix에서 REST 서비스 버전 관리에 대한 모범 사례를 설명합니다."
aliases:
    - /howto10/integration/version-rest-service/
---

## 소개

동일한 REST 서비스의 여러 버전을 동시에 게시할 수 있습니다.

이 문서에서는 다음을 배우게 됩니다:

* 동일한 REST 서비스의 여러 버전을 동시에 게시할 때의 모범 사례 활용
* 이전 버전 더 이상 사용하지 않음(deprecation) 처리

## 버전 번호 지정

각 서비스에 `MAJOR.MINOR.PATCH` 형식의 버전 번호를 부여하세요:

* 호환되지 않는 API 변경(예: 오퍼레이션 제거)을 할 때 서비스는 새로운 `MAJOR` 버전을 가져야 합니다.
* 하위 호환되는 기능(예: 오퍼레이션 추가)을 추가할 때 서비스는 새로운 `MINOR` 버전을 가져야 합니다.
* 하위 호환되는 버그 수정을 할 때 서비스는 새로운 `PATCH` 버전을 가질 수 있습니다.

모델에서 버전 관리를 더 명확하게 하려면 각 서비스에 대해 *ServiceName_Version*이라는 폴더를 만드는 것이 좋습니다. 서비스에서 사용되는 모든 Microflow, 매핑, Message Definition을 이 폴더에 저장하세요.

서비스를 게시하고 사용자가 사용하고 있다면, 더 이상 변경하지 않는 것이 좋습니다.

사용자가 변경해야 하는 방식으로 서비스를 변경하면 호환성이 깨지는 변경을 도입하게 되어 사용자가 아무것도 다르게 하지 않았는데도 오류를 받게 됩니다.

게시된 서비스를 변경하는 대신, 서비스를 복제하고 새로운 주요 버전을 부여해야 합니다. Microflow, 매핑 또는 Message Definition을 변경하려면 마찬가지로 복제한 후 복제본을 변경하세요.

새 버전의 위치를 새 버전을 포함하도록 변경하세요 (예: **rest/myservice/v1.1**). URL에서 **.0** 또는 **.0.0**은 생략하는 것이 관례입니다.

새 버전의 서비스는 새 버전에서 변경되지 않은 이전 버전의 모든 Microflow, 매핑, Message Definition을 재사용합니다.

## 예제

아래는 일반적으로 발생하는 변경 사항과 해당 경우 서비스의 버전 관리를 처리하는 방법에 대한 예제입니다.

### Microflow의 버그 수정

#### 시나리오

프로덕션에 Petstore 버전 1.0.0의 REST 서비스가 있습니다. GetPet Microflow에 작은 변경이 필요하다는 것을 발견했습니다. 수신 `pet_id`가 비어 있으면 **500 Internal Server Error**가 발생하는 오류가 있지만, **400 Bad Request**여야 합니다.

#### 해결 방법

이것은 호환성이 깨지지 않는 변경이므로 두 가지 해결 방법이 있습니다: 별도의 패치 버전을 만들거나 현재 버전에서 버그를 수정하는 것입니다.

패치 버전을 만들려면 다음을 수행하세요:

1. *PetStore_1_0_1*이라는 새 폴더를 만듭니다.
2. PetStore 서비스를 복제하고 이름을 *PetStore_1_0_1*로 지정한 다음 **PetStore_1_0_1** 폴더로 이동합니다.
3. GetPet Microflow를 복제하고 이름을 *GetPet_1_0_1*로 지정한 다음 **PetStore_1_0_1** 폴더로 이동합니다.
4. **PetStore_1_0_1** 서비스를 업데이트하여 GET 오퍼레이션이 **GetPet_1_0_1**을 참조하도록 합니다.
5. **GetPet_1_0_1** Microflow를 변경하여 동작을 수정합니다.

### 리소스에 오퍼레이션 추가

#### 시나리오

프로덕션에 Petstore 버전 1.0.0의 REST 서비스가 있습니다. 상태별로 반려동물을 검색하는 오퍼레이션을 추가하려 합니다.

#### 해결 방법

이 변경은 하위 호환되므로 두 가지 해결 방법이 있습니다: 새 마이너 버전을 만들거나 현재 버전에 오퍼레이션을 추가하는 것입니다.

새 마이너 버전을 만들려면 다음을 수행하세요:

1. **PetStore_1_1_0**이라는 새 폴더를 만듭니다.
2. PetStore 서비스를 복제합니다. **PetStore_1_1_0**이라 하고 **PetStore_1_1_0** 폴더로 이동합니다.
3. **PetStore_1_1_0** 서비스에 **GetPetByStatus** 오퍼레이션을 추가합니다.

### 속성 유형 변경

#### 시나리오

프로덕션에 Petstore 버전 1.0.0의 REST 서비스가 있습니다. **GET /pet** 오퍼레이션은 반려동물의 출생 연도를 정수로 반환합니다. **Pet** Entity를 기반으로 한 **Pet**이라는 Message Definition이 있습니다. **ExportPet** Export Mapping은 Entity를 Message Definition에 매핑합니다.

출생 연도를 생년월일로 변경하려 합니다.

#### 해결 방법

이것은 호환성이 깨지는 변경(하위 호환되지 않음)이므로 서비스의 새 버전을 만들어야 합니다.

1. **Pet** Entity에 새 속성 **DateOfBirth**를 추가합니다.
2. *PetStore_2_0_0*이라는 새 폴더를 만듭니다.
3. 새 Message Definition을 복제합니다. **PetStoreMessages_2_0_0**이라 하고 **PetStore_2_0_0** 폴더로 이동합니다. 변경하지 않을 Message Definition은 제거합니다.
4. **PetStore_2_0_0** 폴더에 *ExportPet_2_0_0*이라는 새 Export Mapping을 만듭니다. **Pet** Entity를 기반으로 하되, 이전과 같은 속성을 선택하고 **YearOfBirth** 대신 **DateOfBirth**를 선택합니다.
5. **PetStore** 서비스를 복제합니다. *PetStore_2_0_0*이라 하고 **PetStore_2_0_0** 폴더로 이동합니다.
6. **PetStore_2_0_0** 서비스의 **GET /pet** 오퍼레이션을 업데이트하여 **ExportPet_2_0_0** Export Mapping을 선택합니다.

## Deprecation

서비스의 새 버전을 만든 후 이전 버전을 더 이상 사용하지 않음(deprecated)으로 표시하세요.

서비스 이름에 **(deprecated)**를 추가하세요. 서비스의 **Public documentation**에 더 이상 사용하지 않는 이유와 새 버전 번호를 작성하세요. 또한 변경된 모든 오퍼레이션을 deprecated로 표시하여 사용자가 한 버전에서 다음 버전으로 어떤 오퍼레이션이 변경되었는지 알 수 있도록 해야 합니다.

사용자에게 이 버전이 deprecated되었음을 알려야 합니다 (예: 릴리스 노트를 게시하여).

버전이 충분히 오랫동안 deprecated된 후에는 제거할 수 있습니다.
