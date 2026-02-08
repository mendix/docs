---
title: "Mendix Runtime의 통신 패턴"
linktitle: "통신 패턴"
url: /refguide8/communication-patterns/
---

## 소개

이 문서에서는 일반적인 애플리케이션 사용 사례에 대해 Mendix Runtime 환경에서 사용하는 통신 패턴을 설명합니다.

이 문서의 목표는 다음 정보를 제공하는 것입니다:

* 통신 효율성과 관련한 Mendix Runtime의 품질 평가
* 설계 결정이 통신 효율성 및 성능에 미치는 영향 파악

## Mendix Runtime 내 통신 개요

Mendix 플랫폼은 다음 구성 요소로 구성됩니다:

* Mendix Platform – 앱 설계, 빌드, 배포 및 관리를 위한 완전히 통합된 aPaaS(application platform-as-a-service)
* Apps – 앱 설계, 개발, 배포, 사용자 및 환경 관리, 클릭 한 번으로 클라우드에 앱 배포, 성능 관리 및 모니터링을 위한 웹 기반 협업 환경
* Marketplace – 앱 개발 속도를 높이기 위한 수백 개의 공개 빌딩 블록이 있는 포털
* Mendix Studio Pro – Mendix 플랫폼의 다중 사용자 모델링 스튜디오
* Team Server – 애플리케이션 모델 버전을 관리하기 위한 중앙 리포지토리
* Mendix Runtime – 서버 파트([Runtime Server](/refguide8/runtime-server/))와 클라이언트 파트([Mendix Client](/refguide8/mendix-client/))를 사용하여 애플리케이션을 실행
* Build – 모델, 스타일시트, 커스텀 Java 클래스와 같은 아티팩트에서 배포 패키지를 생성하는 프로세스
* MxID – OpenID 표준을 적용하는 사용자 관리 및 프로비저닝 서비스

이 문서의 초점은 Mendix Runtime, 특히 다음 구성 요소 간의 협업에 있습니다:

* [Mendix Client](/refguide8/mendix-client/) – 사용자의 디바이스에서 실행되는 React, React Native 또는 JavaScript 클라이언트
* [Runtime Server](/refguide8/runtime-server/) – Microflow 로직, 비즈니스 규칙 실행 및 객체 영속화를 담당하는 Java/Scala Runtime
* RDBMS – 데이터가 영속화되는 곳

이러한 구성 요소 간의 통신은 다음과 같이 작동합니다:

* Mendix Client는 두 가지 유형의 요청을 발행합니다:
    * 페이지, 스타일시트, 위젯, 이미지 등과 같은 정적 리소스
    * CRUD 명령과 데이터가 필요할 수 있는 로직을 포함하는 애플리케이션 데이터 관련 통신
* Runtime Server는 JDBC 라이브러리에서 처리하는 SQL 문을 사용하여 다양한 RDBMS와 통신합니다
    * 애플리케이션 데이터는 RDBMS의 ER 모델에 저장됩니다

## 기본 CRUD 통신 패턴

대부분의 Mendix 애플리케이션의 핵심은 Mendix Entity에 저장된 데이터에 대한 CRUD(생성, 읽기, 업데이트, 삭제) 패턴의 변형입니다.

*Employee* Entity를 사용하는 기본 시나리오는 Mendix에서 다음 두 페이지를 사용하여 모델링할 수 있습니다:

* 특정 Entity의 데이터 테이블을 표시하는 개요 페이지:
    {{< figure src="/attachments/refguide8/runtime/communication-patterns/19399028.png" class="no-border" >}}
* Entity의 특정 객체를 편집할 수 있는 상세 페이지:
    {{< figure src="/attachments/refguide8/runtime/communication-patterns/19399029.png" class="no-border" >}}
    * 이 상세 페이지는 첫 번째 페이지의 New 및 Edit 버튼을 통해 접근할 수 있습니다

다음 섹션에서는 이러한 페이지를 처리할 때 관련된 작업을 설명합니다. 앞에서 언급했듯이 이 패턴은 많은 Mendix 애플리케이션에서 볼 수 있지만, 정확한 Runtime 결과는 애플리케이션을 빌드하는 동안 내린 많은 세부 사항과 설계 결정에 따라 달라집니다. 더 고급 데이터 모델과 페이지는 더 많은(그리고 더 복잡한) 쿼리를 발생시킵니다.

### 객체 테이블을 표시하기 위해 필요한 객체 읽기

객체 테이블을 표시하는 것은 다음 단계로 구성됩니다:

1. 페이지 정의 가져오기(이미 캐시되어 있을 수 있음).
2. 페이지에 표시할 데이터 가져오기.
3. 페이지 업데이트.

기본 시퀀스 다이어그램은 다음과 같습니다:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399030.png" class="no-border" >}}

Mendix Client는 Runtime Server에서 데이터를 요청하기 위해 REST와 유사한 프로토콜을 사용합니다. 다음 예시는 Employee Entity에서 객체를 요청할 때의 모습을 보여줍니다:

```json
{
   "action":"retrieve_by_xpath",
   "params":{
      "xpath":"//MyFirstModule.Employee",
      "schema":{
         "id":"a2916c7c-af2f-4267-a8e9-99604f045861",
         "offset":0,
         "sort":[
            [
               "Firstname",
               "asc"
            ]
         ],
         "amount":20
      },
      "count":true,
      "aggregates":false
   },
   "context":[],
   "profiledata":{
      "204ee5ad0c056a0":15
   }
}
```

XPath 표현식은 필요한 데이터를 명시합니다. 이것은 Entity의 데이터를 포함하는 객체 또는 애플리케이션에서 요구하는 객체의 일부 Attribute만 포함할 수 있습니다.

schema 섹션은 필요한 데이터에 대한 추가 제한(어떤 Attribute와 몇 개의 객체)을 지정하는 데 사용할 수 있습니다. 이 접근 방식은 Runtime Server와 Mendix Client 간에 전송되는 데이터 양을 최소화합니다.

이 retrieve 작업은 두 개의 SQL 쿼리를 발생시킵니다 – 하나는 데이터를 검색하고 다른 하나는 총 객체 수를 검색합니다.

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 ORDER BY "myfirstmodule$employee"."firstname" ASC,
 "myfirstmodule$employee"."id" ASC LIMIT 20
 SELECT COUNT(*)
 FROM "myfirstmodule$employee"
```

표시되는 데이터와 Domain Model(예: 객체 또는 Attribute에 적용된 보안, 또는 일반화 및 특수화를 지원하는 상속 사용)에 따라 retrieve는 더 많은 쿼리나 추가 WHERE 절을 생성할 수 있습니다.

Runtime Server에서 Mendix Client로의 응답은 다음과 같습니다:

```json
{
   "count":2,
   "mxobjects":[
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710757",
         "attributes":{
            "Firstname":{"value":"peter1"},
            "DateOfBirth":{"value":-315622800000},
            "Jobtitle":{"value":"sales"},
            "Department":{"value":"sales"},
            "Lastname":{"value":"jones"}
         }
      },
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710657",
         "attributes":{
            "Firstname":{"value":"piet"},
            "DateOfBirth":{"value":476406000000},
            "Jobtitle":{"value":"consultant"},
            "Department":{"value":"expert services"},
            "Lastname":{"value":"jansen"}
         }
      }
   ]
}
```

### 새 객체 생성

일반적인 새 객체 생성 흐름은 다음 단계로 구성됩니다:

1. 새 객체 인스턴스화(기본 키는 데이터베이스에서 생성되며, Runtime Server는 PKS의 캐시를 유지).
2. Edit/New 페이지 표시(이미 캐시되어 있을 수 있음).
3. 업데이트된 객체를 Runtime Server에 저장.
4. 업데이트된 객체를 데이터베이스에 커밋.

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399031.png" class="no-border" >}}

새 객체 생성:

```json
{
   "action":"instantiate",
   "params":{
      "objecttype":"MyFirstModule.Employee",
      "preventCache":1455032246146
   },
   "context":[],
   "profiledata":{
      "204ee68c92aea60":27
   }
}
```

객체를 데이터베이스에 저장:

```json
{
   "action":"change",
   "params":{
      "281474976710757":{
         "Firstname":"peter",
         "Lastname":"jones",
         "Jobtitle":"sales",
         "Department":"sales",
         "DateOfBirth":-315622800000
      }
   },
   "context":[],
   "profiledata":{
      "204ee6970d53960":18
   }
}
```

업데이트를 데이터베이스에 커밋:

```json
{
   "action":"commit",
   "params":{
      "guid":"281474976710757"
   },
   "context":[],
   "profiledata":{
      "204ee6e9b5eddc0":25
   }
}
```

커밋하면 Runtime Server가 객체를 RDBMS에 저장합니다. 커밋 전에 데이터는 성능을 최적화하고 데이터베이스에 대한 영향을 최소화하기 위해 Runtime Server에만 유지됩니다.

```sql
 INSERT INTO "myfirstmodule$employee" ("id",
 "firstname",
 "dateofbirth",
 "jobtitle",
 "department",
 "lastname")
 VALUES (?,
 ?,
 ?,
 ?,
 ?,
 ?)
```

### 기존 객체 편집

일반적인 기존 객체 편집 흐름은 다음 단계로 구성됩니다:

1. 객체 테이블 페이지(개요 페이지)에서 객체 선택.
2. Edit/New 페이지 표시(이미 캐시되어 있을 수 있음).
3. 브라우저에 표시된 페이지에서 이미 사용 가능한 객체 값 표시.
4. 변경된 객체의 Attribute를 Runtime Server에 저장.
5. 데이터베이스에서 객체 검색.
6. 객체 변경 사항 검증.
7. 데이터베이스에 변경 사항 커밋.

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399032.png" class="no-border" >}}

데이터베이스에 변경 사항 저장:

```json
{
   "action":"change",
   "params":{
      "281474976710757":{
         "Firstname":"peter1"
      }
   },
   "context":[],
   "profiledata":{
      "204ee8bb633f9a0":25
   }
}
```

이것은 데이터베이스에서 다음 작업을 트리거합니다:

* 데이터베이스에서 원본 객체 가져오기
* Runtime에서 사용자가 변경한 Attribute 업데이트

첫 번째 단계는 Entity에 정의된 모든 데이터 비즈니스 로직과 유효성 검사를 결정하는 데 필요합니다.

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 WHERE "myfirstmodule$employee"."id" = (281474976710857)
```

모든 유효성 검사가 올바르게 실행되면 클라이언트는 변경 사항을 데이터베이스에 커밋할 수 있습니다:

```json
{
   "action":"commit",
   "params":{
      "guid":"281474976710757"
   },
   "context":[],
   "profiledata":{
      "204ee8ca8f775a0":20
   }
}
```

이것은 실제 데이터베이스 업데이트 및 커밋을 트리거합니다.

```sql
 UPDATE "myfirstmodule$employee"
 SET "dateofbirth" = ?
 WHERE "id" = ?
```

### 기존 객체 삭제

일반적인 삭제 흐름은 다음 단계로 구성됩니다:

1. 객체 테이블(개요 페이지)에서 객체 선택.
2. Runtime Server에 삭제 요청 전송.
3. Runtime Server가 삭제 요청 검증.
4. Runtime Server가 데이터베이스에서 객체 삭제.
5. 데이터베이스에 변경 사항 커밋.
6. 클라이언트에 삭제 성공 알림.
7. 데이터 새로 고침 및 페이지 업데이트.

다음 시퀀스 다이어그램은 일반적인 삭제 시나리오를 보여줍니다:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399033.png" class="no-border" >}}

객체 삭제:

```json
{
   "action":"delete",
   "params":{
      "guids":["281474976710757"]
   },
   "context":[],
   "profiledata":{
      "204eeae128284c0":323
   }
}
```

실제 데이터 삭제 전에 비즈니스 로직, 규칙 및 이벤트를 실행할 수 있도록 객체 가져오기:

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 WHERE "myfirstmodule$employee"."id" = (281474976710857)
```

데이터베이스에서 객체 삭제:

```sql
DELETE FROM "myfirstmodule$employee"
WHERE "id" = ?
```

데이터 그리드 새로 고침:

```json
{
   "action":"retrieve_by_xpath",
   "params":{
      "xpath":"//MyFirstModule.Employee",
      "schema":{
         "id":"a2916c7c-af2f-4267-a8e9-99604f045861",
         "offset":0,
         "sort":[["Firstname","asc"]],
         "amount":20
      },
      "count":true,
      "aggregates":false
   },
   "context":[],
   "releaseids":["281474976710757"],
   "profiledata":{
      "204eeb2972550c0":28
   }
}
```
 
## 비즈니스 로직 실행

비즈니스 로직은 Mendix에서 Microflow를 사용하여 모델링됩니다. 다음 섹션에서는 Microflow와 관련된 일반적인 흐름을 소개합니다.

### Microflow로 검색한 데이터의 그리드 표시

페이지의 데이터 그리드는 종종 Domain Model의 Entity에 직접 연결됩니다. 대안적인 접근 방식은 Microflow를 사용하여 데이터 그리드에 표시할 객체 목록을 만드는 것입니다.

Entity에서 모든 객체를 검색하는 Microflow는 다음과 같이 모델링할 수 있습니다:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399034.png" class="no-border" >}} 

이 경우 모든 객체가 한 번의 요청으로 브라우저에 전송됩니다. 사용자는 Runtime Server에 대한 통신을 트리거하지 않고 모든 객체를 페이징할 수 있습니다.

이 시나리오에 대한 상위 수준 시퀀스 다이어그램은 다음과 같습니다:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399035.png" class="no-border" >}}

Mendix Client에서 Runtime Server로 실행된 JSON 작업:

```json
{
   "action":"executeaction",
   "params":{
      "actionname":"MyFirstModule.GetAllEmployees",
      "applyto":"none"
   },
   "context":[],
   "profiledata":{
      "204f418ba05e7c0":55
   }
}
```

데이터베이스에서 실행된 SQL 문:

```sql
SELECT "myfirstmodule$employee"."id",
"myfirstmodule$employee"."firstname",
"myfirstmodule$employee"."dateofbirth",
"myfirstmodule$employee"."jobtitle",
"myfirstmodule$employee"."department",
"myfirstmodule$employee"."lastname"
FROM "myfirstmodule$employee"
```

Runtime Server에서 Mendix Client로의 응답:

```json
{
   "actionResult":[
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710657",
         "attributes":{
            "Firstname":{"value":"piet"},
            "DateOfBirth":{"value":476406000000},
            "Jobtitle":{"value":"consultant"},
            "Department":{"value":"expert services"},
            "Lastname":{"value":"jansen"}
         }
      },
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710957",
         "attributes":{
            "Firstname":{"value":"wee"},
            "DateOfBirth":{"value":1454886000000},
            "Jobtitle":{"value":"ewji"},
            "Department":{"value":"wew"},
            "Lastname":{"value":"ewfeew"}
         }
      },
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710958"
         …
      }
      …
   ]
}
```

## Mendix Runtime 내부 동작

CRUD 시나리오 설명에서 볼 수 있듯이, Mendix 플랫폼은 여러 방법으로 애플리케이션 실행 시 효율성을 보장합니다:

* 사용자 작업에 필요한 데이터만 통신 및 처리에 관여
* 서로 다른 프로세스 간 통신 시 효율적인 전송 프로토콜 사용
    * Mendix Client와 Runtime Server 간의 간결한 JSON 형식
    * RDBMS 통신을 위한 네이티브 SQL 프로토콜
* Mendix Client에서 이미 사용 가능한 데이터는 가능한 경우 재사용(데이터 그리드에서 가져온 데이터가 Edit/New 페이지에서 재사용되는 편집 시나리오 참조)

### 데이터 변환

데이터는 필요에 따라 Mendix Client와 데이터베이스 간에 전송됩니다. Mendix Client에서 데이터베이스로, 다시 돌아오는 전체 과정에서 다음 변환이 적용됩니다:

* 페이지에서 사용자가 입력한 데이터는 JavaScript 객체에 저장됩니다
* Runtime Server로의 통신을 위해 JavaScript 객체가 JSON으로 직렬화됩니다
* Runtime Server가 JSON 객체를 Java MxObject로 변환합니다
* SQL 쿼리에 필요한 대로 MxObject 속성이 SQL 문 매개변수에 바인딩됩니다
* JDBC 결과 집합 데이터가 MxObject로 변환됩니다
* MxObject가 Mendix Client로 전송될 때 JSON으로 직렬화됩니다

### 상태

(수평) 확장성을 용이하게 하기 위해 Mendix Runtime은 요청 간에 상태를 유지하지 않습니다. 전체 전략은 요청 중에만 더티(dirty) 객체를 메모리에 보관하는 것입니다. 객체는 변경되었지만 변경 사항이 RDBMS에 아직 영속화되지 않은 경우 더티(dirty)로 간주됩니다.

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399036.png" class="no-border" >}}

### 영속성

Mendix는 애플리케이션별 Entity 모델(Domain Model)을 기술적 RDBMS 특정 ER 모델로 자동 변환합니다. CRUD 시나리오의 읽기 부분에서 설명된 것처럼, 데이터 검색은 이해하기 쉬운 XPath 구문으로 표현됩니다. 예를 들어, 모든 employee 객체를 검색하려면 다음 XPath를 사용할 수 있습니다:

`//MyFirstModule.Employee`

이 XPath 표현식은 여러 단계를 거쳐 데이터베이스 쿼리로 변환됩니다:

1. XPath가 내부 OQL 구문으로 변환됩니다. OQL은 SQL과 유사하지만 실제 RDBMS 테이블 대신 애플리케이션 Domain Model Entity로 데이터를 표현합니다.
2. Domain Model에 지정된 대로 추가 필요한 표현식이 OQL 문에 추가됩니다(예: 상위 클래스 Entity의 정보 추가).
3. Domain Model 보안 제약이 OQL 문에 적용됩니다.
4. OQL이 SQL로 변환되고 구성된 RDBMS에서 JDBC를 통해 실행됩니다.

### 확장성

Runtime Server는 단일 프로세스로 실행하거나 더 많은 동시 사용자를 수용하고 가용성을 향상시키기 위해 수평으로 확장할 수 있습니다. 이 시나리오에서는 여러 Mendix Studio Pro 인스턴스가 실행됩니다. 이러한 인스턴스는 독립적으로 실행되며 프로세스 간 통신은 없습니다.

#### 단일 인스턴스

단일 인스턴스 내에서 Scala Akka 액터 모델은 Runtime Server의 모든 처리를 효율적으로 처리하는 데 사용됩니다. 동시성을 위한 액터 모델 사용의 이점은 다음과 같습니다: 처리할 수 있는 동시 사용자 수가 사용 가능한 스레드 수에 제한되지 않습니다. 스레드는 요청별이 아닌 처리 책임별로 할당되기 때문입니다.

Runtime Server가 수신한 Mendix Client 요청을 처리하기 위해, 필요한 작업은 Akka 액터에 디스패치됩니다. 이 액터는 전용 스레드 풀을 가지고 있습니다. 모든 (Microflow) 작업은 액션 디스패처 액터에 대한 별도의 메시지로 처리됩니다. 이것은 차단 작업에 대한 스레드 사용을 최적화합니다. 예를 들어, Microflow의 작업 부분이 외부 웹 서비스를 호출하고 응답을 기다리며 차단된 경우, 이는 HTTP 요청 핸들러가 아닌 액션 디스패처의 스레드풀에만 영향을 미칩니다.

#### 다중 인스턴스

Mendix Runtime 상태는 Mendix Client에 저장됩니다. 즉, 수평 확장 시나리오에서 실행할 때 모든 인스턴스는 로드 밸런서 뒤에서 실행되며 요청은 가장 적절한 인스턴스로 전송됩니다.
