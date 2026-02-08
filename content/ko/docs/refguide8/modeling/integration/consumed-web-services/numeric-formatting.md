---
title: "숫자 형식"
url: /refguide8/numeric-formatting/
---

## Mendix 애플리케이션에서의 동작

숫자는 후행 0이 제거되고 표현이 항상 비과학적 표기법으로 표시되는 것을 제외하고는 그대로 XML로 변환됩니다. 사용되는 반올림 모드는 [Project Settings](/refguide8/project-settings/)에서 구성됩니다.

## XML 스키마 Facet

XML에서 숫자를 어떻게 표현해야 하는지는 스키마 Facet을 사용하여 XSD(또는 WSDL)에서 지정할 수 있습니다.

Mendix는 현재 숫자 요소에 대해 `totalDigits` 및 `fractionDigits`를 지원합니다:

* `totalDigits` - 숫자의 최대 자릿수를 정의합니다(점 및 마이너스 기호 제외)
* `fractionDigits` - 소수점 뒤의 최대 자릿수를 정의합니다

이는 필요한 출력 형식과 일치하지 않는 숫자가 발견되면 일치하도록 반올림됨을 의미합니다. 숫자를 올바르게 형식화하여 표현할 수 없는 경우 그대로 XML에 넣습니다. 예를 들어, XSD에서 최대 자릿수를 3으로 지정했지만 숫자가 1000인 경우입니다.

Mendix는 웹 서비스 호출에서 **Validate against WSDL**이 활성화되거나 XML 내보내기 액션에서 **Validate against schema**가 활성화되지 않는 한 이러한 제한에 대한 준수를 강제하지 않습니다.

| 원래 값 | Total Digits | Fraction Digits | 형식화된 값 | 설명 |
| --- | --- | --- | --- | --- |
| 20.0055 | 3 | Undefined | 20 |   |
| 20.0055 | Undefined | 3 | 20.006 |   |
| 0.0 | Undefined | Undefined | 0 |   |
| 110.9555 | 5 | 3 | 110.96 |   |
| -110.9555 | 5 | 3 | -110.96 |   |
| 0.0000001 | Undefined | 6 | 0 |   |
| 99.99 | 3 | Undefined | 100 |   |
| 99.99 | 2 | Undefined | 99.99 | 올바르게 형식화할 수 없어 그대로 유지됨 |
| 999.99 | 2 | 1 | 999.99 | 올바르게 형식화할 수 없어 그대로 유지됨 |
| 1.19E-17 | Undefined | Undefined | 0.0000000000000000119 |   |
