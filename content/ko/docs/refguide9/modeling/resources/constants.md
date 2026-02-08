---
title: "Constant"
url: /refguide9/constants/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Constant는 구성 값을 정의하는 데 사용됩니다. 이러한 값은 환경에 따라 다를 수 있습니다.

라이선스가 부여된 Mendix Cloud 환경, SAP BTP 또는 Mendix on Kubernetes에서 애플리케이션을 실행하는 경우 **Environment Details** 페이지의 [Model Options](/developerportal/deploy/environments-details/#model-options) 탭을 사용하여 각 환경별로 Constant 값을 별도로 구성할 수 있습니다.

다른 클라우드 환경(예: Siemens [Insights Hub](/partners/siemens/mindsphere/))의 경우 Constant는 Cloud Foundry 등에서 **Environment Variables**로 접근할 수 있습니다. Constant는 **module** + **.** + **constant** 이름으로 노출됩니다(예: `mymodule.myconstant`).

애플리케이션을 로컬로 또는 Free App 환경에서 실행하는 경우 Studio Pro에서 정의된 값이 사용됩니다.

{{% alert color="info" %}}
Constant의 값은 [구성](/refguide9/configuration/)에서도 재정의할 수 있습니다. 이를 통해 매번 Constant의 기본값을 변경하지 않고도 하나 이상의 Constant에 대해 다른 값을 사용하여 로컬에서 실행할 수 있습니다.
{{% /alert %}}

Constant는 다음에서 사용할 수 있습니다:

* [표현식](/refguide9/expressions/) – Constant의 전체 이름 앞에 `@`를 붙여 사용
* [사용된 웹 서비스](/refguide9/consumed-web-services/) – 이 경우 Constant는 웹 서비스의 위치를 지정하는 URL입니다. 이는 애플리케이션이 실행되는 환경에 따라 달라질 수 있으므로 예를 들어 개발 및 프로덕션에서 서로 다른 웹 서비스를 사용할 수 있습니다

## 공통 속성

### 이름

Constant의 이름입니다. 이 이름은 참조하는 데 사용됩니다.

### Export Level 

{{% alert color="info" %}}

이 속성은 애드온 및 솔루션 모듈에서만 사용할 수 있습니다. 모듈 유형에 대한 자세한 내용은 *Modules*의 [Module Types](/refguide9/modules/#module-types) 섹션을 참조하십시오. 

{{% /alert %}}

**Export level**을 사용하면 애드온 모듈 또는 솔루션을 개발할 때 소비자(고객) 측에서 이 문서에 대한 접근 수준을 정의할 수 있습니다. 

| 값              | 설명                                             |
| ------------------ | ------------------------------------------------------- |
| Hidden *(기본값)* | 문서/요소 콘텐츠가 소비자에게 숨겨집니다. |
| Usable             | 소비자가 Constant를 보고 앱에서 사용할 수 있습니다. |

### 문서화

이 필드는 문서화 목적으로만 사용됩니다. 최종 사용자는 이를 볼 수 없으며 애플리케이션의 동작에 영향을 미치지 않습니다.

## 유형 속성

### 유형

Constant의 [데이터 유형](/refguide9/data-types/)입니다. 이는 Constant가 보유할 수 있는 값의 종류를 결정합니다. 지원되는 데이터 유형은 string, Boolean, date and time, decimal, integer/long입니다.

## 값 속성

### 기본값

이 속성은 Constant의 기본값입니다. 이 값은 로컬로 또는 Free App 환경에서 실행할 때 사용됩니다. 로컬에서 실행할 때 현재 선택된 [구성](/refguide9/configuration/)에서 값을 재정의할 수 있습니다.

### 클라이언트에 노출

이 속성은 Constant가 클라이언트 측 표현식([Nanoflow](/refguide9/nanoflows/) 및 [페이지](/refguide9/pages/)의 표현식)에서 접근 가능한지 여부를 정의합니다.

| 옵션 | 설명 |
| --- | --- |
| Yes | Constant가 클라이언트로 전송되며 클라이언트 측 표현식에서 접근할 수 있습니다 |
| No *(기본값)* | Constant가 클라이언트로 전송되지 않으며 [Microflow](/refguide9/microflows/) 표현식에서만 접근할 수 있습니다 |

{{% alert color="warning" %}}
Constant가 클라이언트에 노출되면, Mendix Runtime은 해당 값을 클라이언트에 전송하여 Microflow 표현식 외에 Nanoflow 및 페이지 표현식에서도 접근할 수 있게 됩니다. 이는 Constant가 클라이언트에 노출될 때 비밀번호와 같은 민감한 데이터나 비밀을 사용해서는 안 된다는 것을 의미합니다.

웹 앱의 경우, Constant 값의 변경 사항은 최종 사용자가 브라우저를 새로 고치거나 앱을 다시 시작할 때 반영됩니다. 오프라인 우선 PWA 또는 네이티브 애플리케이션의 경우, 앱은 오프라인 사용을 위해 Constant 값을 저장합니다. 앱은 다음 경우에 Constant 값을 업데이트합니다:

* 최종 사용자가 앱에서 로그인하거나 로그아웃할 때
* 오프라인 우선 앱에서 사용되는 Domain Model 변경이 포함된 새 버전의 앱을 배포할 때
{{% /alert %}}
