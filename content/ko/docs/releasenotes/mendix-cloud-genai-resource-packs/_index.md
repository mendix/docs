---
title: "Mendix Cloud GenAI Resource Packs 릴리스 노트"
linktitle: "Mendix GenAI Resources"
url: /releasenotes/genai-resource-packs/
description: "Mendix Cloud GenAI Resource Packs에 대한 릴리스 노트"
weight: 25
numberless_headings: true
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

이 릴리스 노트는 [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/)에 적용된 변경 사항을 다루고 있습니다.

## 2025

### September 1, 2025

#### New Features

* [Mendix GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/)가 정식 출시되었습니다. GenAI Models와 Knowledge Bases를 활용하여 Mendix 에코시스템에 GenAI를 원활하게 통합할 수 있습니다. 이 팩을 사용하면 Retrieval-Augmented Generation(RAG) 및 Agentic AI와 같은 고급 사용 사례를 가속화할 수 있습니다.
[Mendix Cloud GenAI Portal](https://genai.home.mendix.com/)을 통해 접근할 수 있습니다.

#### Improvements

* Mendix Cloud GenAI Portal에 새로운 랜딩 페이지를 도입하여 GenAI 리소스를 찾고 접근하는 데 보다 직관적이고 간소화된 경험을 제공합니다.

#### Fixes

* Mendix Cloud GenAI Portal에서 새 컬렉션을 생성할 때 **Knowledge Base**에 파일을 업로드하는 것이 실패하던 문제를 수정했습니다.

### October 9, 2025

#### New Features

* Admin이 이제 **Configuration Key Overview** 페이지에서 모든 구성 키의 **Last Used Date**를 확인할 수 있습니다.

#### Improvements

* 사용자가 이제 **Keys Management** 페이지에서 열을 정렬할 수 있어 구성 키를 더 쉽게 찾고 관리할 수 있습니다.
* **Content** 페이지에 활동 로그를 추가하여 업데이트 및 변경 사항의 추적성을 개선했습니다.
* 텍스트가 포함되지 않은 파일을 Knowledge Base에 업로드하려고 할 때 알림을 받을 수 있어 혼란과 업로드 오류를 줄입니다.
* 구독 기간별 토큰 소비를 추적할 수 있어 사용 패턴에 대한 가시성이 향상됩니다.
* 새 개발자 랜딩 페이지의 리소스 정렬이 일반 리소스 개요와 일치하도록 변경하여 보다 일관된 사용자 경험을 보장합니다.

### October 28, 2025

#### New Features

* Company Admin이 Control Center 내에서 GenAI 리소스를 직접 관리할 수 있는 새로운 기능을 도입했습니다. 프로비저닝, 디프로비저닝 및 모든 GenAI 리소스의 개요를 포함합니다.

### November 5, 2025

#### Improvements

* 사용자가 이제 Control Center에서 GenAI 리소스를 새 탭에서 직접 열어 더 쉽게 접근할 수 있습니다.
* 텍스트 생성 리소스를 생성할 때 기본 **Cross Region Inference**(CRI) 설정이 이제 활성화됩니다.
* Knowledge Base 리소스를 생성할 때 데이터 손실을 방지하기 위해 **Create Embeddings Resource**를 새 탭에서 열 수 있습니다.

### December 11, 2025

#### New Features

* 사용자가 이제 Text Generation Resources의 모델을 변경할 수 있으며, 동일한 리전에서 사용 가능하고 구독 플랜에서 지원하는 모델만 선택할 수 있습니다.

#### Fixes

* 일부 경우에 소비 페이지가 로드되지 않던 문제를 수정했습니다.

### January 15, 2026

#### New Features

* 이제 Control Center에서 셀프 서비스를 통해 GenAI 리소스의 플랜을 직접 업그레이드할 수 있습니다. 자세한 내용은 *GenAI Resources*의 [Upgrading GenAI Resource Plan Size](/control-center/genai-resources-self-service/#upgrading-genai-resource-plan-size) 섹션을 참조하세요.

#### Fixes

* Control Center **Entitlements**의 **Cloud Tokens** 개요에서 **Cloud Resource Pack** 열의 GenAI 리소스 트랜잭션 항목이 표시되지 않던 문제를 수정했습니다.
* 셀프 서비스를 통한 새 리소스 프로비저닝 중 사용자 조회가 예상대로 작동하지 않던 문제를 수정했습니다.

### January 22, 2026

#### New Features

* 이제 Control Center에서 셀프 서비스를 통해 GenAI 리소스의 플랜을 직접 다운그레이드할 수 있습니다. 자세한 내용은 *GenAI Resources*의 [Downgrading GenAI Resource Plan Size](/control-center/genai-resources-self-service/#downgrading-genai-resource-plan-size) 섹션을 참조하세요.

#### Fixes

* [Mendix Cloud GenAI portal](https://genai.home.mendix.com/)의 왼쪽 네비게이션에서 활성 메뉴 항목이 선택 시 회색으로 강조 표시되지 않던 문제를 수정했습니다.
