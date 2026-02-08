---
title: "SDK 사용 사례"
url: /apidocs-mxsdk/mxsdk/sdk-use-cases/
weight: 2
---

## 소개

Mendix SDK는 앱 모델의 모든 측면에 대한 전체 접근 권한을 제공하므로, 이를 활용하여 할 수 있는 것은 거의 무한합니다. 그러나 네 가지 기본 범주를 구분할 수 있습니다: 분석, 내보내기, 수정 및 가져오기. 자체 스크립트와 도구를 구축하는 데 영감을 주기 위해 각 범주에 대한 예제를 아래에서 확인할 수 있습니다.

## 레거시 코드 가져오기 {#importing}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844116.png" class="no-border" >}}

조직이 오래될수록 레거시 소프트웨어의 설치 기반이 커집니다. 이 레거시 소프트웨어를 유지 보수하는 것은 비용이 많이 들고 오류가 발생하기 쉬우며, 오래된 기술에 대한 전문 지식도 필요합니다. Mendix SDK를 사용하면 레거시 소프트웨어 변환 도구를 만들어 레거시 애플리케이션을 클라우드 기반 Mendix 앱으로 변환할 수 있습니다.

가능한 작업의 일부:

* 새 앱을 부트스트랩하고 기존 앱을 수정
* 엔티티(Entity)에 대한 CRUD 페이지를 자동으로 생성
* 레거시 비즈니스 로직을 마이크로플로우(Microflow)로 변환

## 앱 분석하기 {#analyzing}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844117.png" class="no-border" >}}

기존 Mendix 앱 모델을 개선하려는 경우 어디서부터 시작해야 할지 파악하기 어려울 수 있습니다. 특히 기존 앱에서 작업해야 하는 프로젝트에 참여하는 경우, 앱의 복잡성이 어디에 있는지 파악하는 데 많은 노력이 필요합니다. Mendix 모델은 완전히 개방적이고 접근 가능하므로 모델 품질 분석을 자동화할 수 있습니다. Mendix SDK를 사용하면 모델의 모든 부분에 접근할 수 있어 앱 모델을 분석하고 복잡한 영역이 어디에 있는지 파악할 수 있습니다.

가능한 작업의 일부:

* 앱의 구성 요소를 계산하고 나열
* 앱의 "데스 스타(Death Star)" 아키텍처 다이어그램 생성
* 마이크로플로우(Microflow)의 [순환 복잡도](https://en.wikipedia.org/wiki/Cyclomatic_complexity) 및 [팬인/팬아웃](https://en.wikipedia.org/wiki/Fan-out_%28software%29) 같은 산업 표준 소프트웨어 메트릭 계산

## 앱 내보내기 {#exporting}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844114.png" class="no-border" >}} 

SDK를 사용하면 Mendix 앱 모델을 내보내고 기본적으로 어디든 가져갈 수 있습니다. 모든 모델 엘리먼트(페이지, 마이크로플로우(Microflow), 엔티티(Entity) 등)와 그 속성은 Mendix SDK를 통해 개방적이고 접근 가능합니다. 따라서 이 중 일부(또는 전부)를 가져와 앱 모델의 완전히 새로운 표현을 생성할 수 있습니다.

가능한 작업의 일부:

* 문서 생성
* 마이크로플로우(Microflow)를 Java 메서드로 변환
* Selenium 페이지 객체를 위한 스캐폴딩 설정

## 앱 수정하기 {#modifying}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844115.png" class="no-border" >}} 

기존 Mendix 앱은 업데이트와 변경이 필요할 가능성이 높습니다. 이러한 변경 중 일부는 수동으로 수행하기 지루할 수 있으며, 그룹 박스를 div 컨테이너로 교체하거나, 마이크로플로우(Microflow)의 시각적 레이아웃을 개선하거나, 마이크로플로우(Microflow)를 웹 서비스 운영으로 게시하는 것 등이 있습니다. Model SDK를 사용하면 이러한 작업을 대신 수행하는 스크립트를 만들 수 있으므로, 앱의 창의적이고 재미있는 부분에 집중할 수 있습니다.

가능한 작업의 일부:

* 페이지 엘리먼트와 레이블 일괄 업데이트
* 순식간에 앱 모델의 레이아웃 재구성
* 마이크로플로우(Microflow)를 웹 서비스로, 엔티티(Entity)를 OData 리소스로 노출
