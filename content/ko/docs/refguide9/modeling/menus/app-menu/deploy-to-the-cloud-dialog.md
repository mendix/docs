---
title: "클라우드에 배포"
url: /refguide9/deploy-to-the-cloud-dialog/
---

## 소개

이 메뉴 옵션 대화 상자는 버전이 지정된 배포 패키지를 생성하고 Mendix Cloud 환경에 배포합니다.

{{< figure src="/attachments/refguide9/modeling/menus/app-menu/deploy-to-the-cloud-dialog/deploy-to-the-cloud.png" alt="Deploy to the Cloud dialog" class="no-border" >}}

## Development Line

배포 패키지를 생성할 **Development line**을 선택하십시오. 메인 라인 또는 모든 Branch Line을 선택할 수 있습니다. 예를 들어 유지보수 Branch Line에서 구현한 수정 사항을 온라인에 적용하려면 해당 Branch Line에서 패키지를 생성합니다. 또는 앱의 다음 주요 버전을 배포할 준비가 되었기 때문에 메인 라인에서 배포 패키지를 생성합니다.

## Revision

배포 패키지를 생성할 선택된 Development Line의 **Revision**을 선택하십시오. 최근에 개발한 기능을 제외하려는 경우 최신 리비전을 원하지 않을 수 있습니다.

## New Version

배포 패키지의 **New version**을 선택하십시오. 버전은 4개의 숫자로 구성됩니다: 주 버전, 부 버전, 패치 및 리비전. 리비전은 고정되며 **Revision**에서 선택한 리비전에 의해 결정됩니다.

다른 숫자는 자유롭게 선택할 수 있지만 번호 매기기에 규칙을 사용하는 것이 좋습니다. 주 버전에는 일반적으로 주요 새 기능 또는 기존 기능의 재작성이 포함됩니다. 부 버전에는 작은 새 기능과 수정이 포함됩니다. 패치는 사소한 문제를 해결하며 앱의 데이터 모델을 변경해서는 안 됩니다. 패치 릴리스는 데이터 변경 없이 다른 패치 릴리스와 상호 교환 가능해야 합니다.

Studio Pro는 패키지를 생성한 최신 버전(있는 경우)을 표시합니다. 사용하는 규칙에 따라 주, 부 또는 패치를 증가시킬 수 있습니다.

## Description

이 배포 패키지에 대한 사용자 정의 **Description**을 입력할 수 있습니다. 패키지를 빠르게 인식할 수 있도록 하는 참조용입니다. Mendix Portal에서 버전 번호와 함께 이 설명이 표시됩니다.

## App

배포 패키지가 배포될 Mendix Cloud의 **App**을 표시합니다. 이것은 정보 목적이며 여기서 대상을 변경할 수 없습니다.

## Licensee

이 라이선스 노드의 **Licensee**를 표시합니다.
