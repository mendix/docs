---
title: "Solution 설정"
url: /appstore/creating-content/sol-set-up
linktitle: "Solution 설정"
weight: 8
description: "향후 업그레이드와 호환되도록 Mendix Solution을 올바르게 초기화하는 방법을 설명합니다."
---

## 소개

Mendix Solution 설정은 Solution 패키지에서 앱을 만들고 향후 업그레이드와 호환되도록 구성하는 프로세스입니다.

## 사전 요구 사항

Mendix Solution을 설정하려면 다음 사전 요구 사항이 충족되어야 합니다:

* 올바른 Studio Pro 버전을 사용하고 있는지 확인하십시오.    
  Solution은 이를 만드는 데 사용된 Studio Pro 버전과 정확히 일치하는 버전으로만 설정할 수 있습니다. 예를 들어 Studio Pro 10.0을 사용하여 Solution을 만든 경우 해당 버전만 사용하여 Solution을 설정할 수 있습니다.
* 업그레이드와 호환되도록 Solution은 Git으로 버전 관리되어야 합니다.
* 리포지토리가 비어 있는지 확인하십시오. 비어 있지 않은 리포지토리에서는 Solution을 초기화할 수 없습니다.

## 설정 프로세스

Solution을 설정하려면 다음 단계를 따르십시오:

1. Studio Pro를 열고 *.mxsolution* 패키지를 [가져옵니다](/refguide/import-and-export/).

    {{< figure src="/attachments/appstore/create-content/implement-solutions/solution-import.png" alt="Import Solution" class="no-border" >}}

2. Solution의 대상 디렉토리를 선택하고 **OK**를 클릭합니다.
3. Solution이 초기화되면 특별한 **solution-releases** 브랜치가 생성됩니다. 이 브랜치에는 ISV가 제공한 변경되지 않은 버전의 Solution이 포함됩니다. 이 브랜치에서는 변경을 수행할 수 없으며, 그렇게 하면 Solution이 업그레이드와 호환되지 않거나 업그레이드 중 예측할 수 없는 오류가 발생합니다.

### 더 읽어보기

* [Solution 업그레이드](/appstore/creating-content/sol-upgrade/) 
