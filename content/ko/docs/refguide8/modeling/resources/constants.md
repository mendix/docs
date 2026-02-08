---
title: "상수"
url: /refguide8/constants/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Constant는 설정 값을 정의하는 데 사용됩니다. 이러한 값은 환경마다 다를 수 있습니다.

라이선스가 부여된 Mendix Cloud 환경, SAP BTP 또는 Mendix on Kubernetes에서 애플리케이션을 실행하는 경우, **Environment Details** 페이지의 [Model Options](/developerportal/deploy/environments-details/#model-options) 탭을 사용하여 각 환경별로 Constant 값을 별도로 구성할 수 있습니다.

기타 클라우드 환경(예: [Insights Hub](/partners/siemens/mindsphere/))의 경우, Constant는 Cloud Foundry 등에서 **Environment Variables**로 접근할 수 있습니다. Constant는 **module** + **.** + **constant** 이름으로 노출됩니다(예: `mymodule.myconstant`).

애플리케이션을 로컬로 또는 Free App 환경에서 실행하는 경우, Studio Pro에서 정의된 값이 사용됩니다.

{{% alert color="info" %}}
Constant 값은 [configuration](/refguide8/configuration/)에서 재정의할 수도 있습니다. 이를 통해 매번 Constant의 기본값을 변경하지 않고도 하나 이상의 Constant에 대해 다른 값을 사용하여 로컬에서 실행할 수 있습니다.
{{% /alert %}}

Constant는 다음에서 사용할 수 있습니다:

* [표현식(Expression)](/refguide8/expressions/) – Constant의 전체 이름 앞에 `@`를 붙여 사용합니다
* [Consumed Web Service](/refguide8/consumed-web-services/) – 이 경우 Constant는 웹 서비스의 위치를 지정하는 URL입니다. 이 값은 애플리케이션이 실행되는 환경에 따라 달라질 수 있으므로, 예를 들어 개발과 프로덕션에서 서로 다른 웹 서비스를 사용할 수 있습니다

## 공통 속성

### 이름

Constant의 이름입니다. 이 이름은 Constant를 참조하는 데 사용됩니다.

### 문서화

이 필드는 문서화 목적으로만 사용됩니다. 최종 사용자에게는 표시되지 않으며 애플리케이션의 동작에 영향을 주지 않습니다.

## 타입 속성

### 타입

Constant의 [데이터 타입](/refguide8/data-types/)입니다. 이는 Constant가 보유할 수 있는 값의 종류를 결정합니다. 지원되는 데이터 타입은 문자열(String), Boolean, 날짜 및 시간(Date and Time), 소수(Decimal), 정수/Long(Integer/Long)입니다.

## 값 속성

### 기본값

이 속성은 Constant의 기본값입니다. 이 값은 로컬로 또는 Free App 환경에서 실행할 때 사용됩니다. 로컬에서 실행할 때는 현재 선택된 [configuration](/refguide8/configuration/)에서 값을 재정의할 수 있습니다.

### 클라이언트에 노출

이 속성은 Constant가 클라이언트 측 표현식([Nanoflow](/refguide8/nanoflows/) 및 [페이지](/refguide8/pages/)의 표현식)에서 접근 가능한지 여부를 정의합니다.

| 옵션 | 설명 |
| --- | --- |
| Yes | Constant가 클라이언트로 전송되어 클라이언트 측 표현식에서 접근할 수 있습니다 |
| No *(기본값)* | Constant가 클라이언트로 전송되지 않으며 [Microflow](/refguide8/microflows/) 표현식에서만 접근할 수 있습니다 |

{{% alert color="warning" %}}
Constant가 클라이언트에 노출되면 Mendix Runtime이 해당 값을 클라이언트로 전송하므로, Microflow 표현식 외에도 Nanoflow 및 페이지 표현식에서도 접근할 수 있게 됩니다. 따라서 Constant가 클라이언트에 노출될 때는 비밀번호와 같은 민감한 데이터나 비밀 정보를 사용하지 마십시오.

웹 또는 하이브리드 온라인 앱의 경우, Constant 값의 변경 사항은 사용자가 브라우저를 새로고침하거나 앱을 다시 시작할 때 반영됩니다. 오프라인 우선 애플리케이션의 경우, 앱은 오프라인 사용을 위해 Constant 값을 저장합니다. 다음 경우에 앱이 Constant 값을 업데이트합니다:

* 사용자가 앱에서 로그인하거나 로그아웃할 때.
* 오프라인 우선 앱에서 사용되는 Domain Model 변경 사항이 포함된 새 버전의 앱을 배포할 때.
{{% /alert %}}
