---
title: "Solution 업그레이드"
url: /appstore/creating-content/sol-upgrade
linktitle: "Solution 업그레이드"
weight: 10
description: "ISV가 제공하는 새 버전으로 올바르게 설정된 Solution을 업그레이드하는 방법을 설명합니다."
---

## 소개

Solution 업그레이드는 ISV가 적응 가능한 Solution의 새 버전으로 제공한 변경 사항을 병합하는 프로세스입니다.

## 사전 요구 사항

Mendix Solution을 업그레이드하려면 다음 사전 요구 사항이 충족되어야 합니다:

* 올바른 Studio Pro 버전을 사용하고 있는지 확인하십시오.    
  Solution은 이를 만드는 데 사용된 Studio Pro 버전과 정확히 일치하는 버전으로만 설정할 수 있습니다. 예를 들어 Studio Pro 10.0을 사용하여 Solution을 만든 경우 해당 버전만 사용하여 Solution을 설정할 수 있습니다.
* 버전 관리 시스템이 Git입니다.
* 앱이 현재 **main** 브랜치에 있습니다.
* **solution-releases** 브랜치가 존재합니다.
* 앱에 커밋되지 않은 변경 사항이나 해결되지 않은 충돌이 없습니다.
* Solution 패키지에 MPR 파일이 하나만 있습니다.
* 앱의 MPR 파일 이름이 Solution 패키지의 MPR 파일 이름과 동일합니다.
* 업그레이드하려는 Solution은 적응 가능한 Solution을 설정하는 데 사용된 것과 동일한 Solution입니다.

{{% alert color="info" %}}업그레이드 시 버전을 건너뛸 수 있습니다. 예를 들어, v1로 Solution을 설정하고 ISV가 v2와 v3를 릴리스한 경우, 버전을 하나씩 업그레이드할 필요가 없습니다. v2에 데이터 마이그레이션 변경이 없었다면 v1에서 v3으로 직접 이동할 수 있습니다.{{% /alert %}}

## 업그레이드 프로세스

Solution을 업그레이드하려면 다음 단계를 따르십시오:

1. Studio Pro를 열고 **File** > **Upgrade Solution**을 클릭합니다.

    {{< figure src="/attachments/appstore/create-content/implement-solutions/solution-upgrade.png" alt="Upgrade Solution" class="no-border" >}}

    {{% alert color="info" %}}Studio Pro 9 이하에서는 기능 플래그를 설정하여 이 옵션을 활성화해야 합니다. Studio Pro 10부터는 일반 사용이 가능하며, 더 이상 플래그 뒤에 숨겨져 있지 않습니다.{{% /alert %}}

2. ISV가 제공한 Solution 패키지 파일(*.mxsolution*)을 선택하고 **OK**를 클릭합니다.
3. Solution 업그레이드가 완료되면 **solution-releases** 브랜치에 새 커밋이 생성됩니다. 이 커밋에는 ISV가 제공한 변경되지 않은 새 버전의 Solution이 포함됩니다. 이 브랜치에서는 변경을 수행할 수 없으며, 그렇게 하면 Solution이 업그레이드와 호환되지 않거나 업그레이드 중 예측할 수 없는 오류가 발생합니다.

### 더 읽어보기

* [Solution 설정](/appstore/creating-content/sol-set-up/) 
