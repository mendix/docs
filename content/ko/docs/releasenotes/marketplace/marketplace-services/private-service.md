---
title: "Private PDF Document Generation Service 릴리스 노트"
linktitle: "Private PDF Document Generation Service"
url: /releasenotes/marketplace/private-service/
description: "새로운 기능, 버그 수정 및 알려진 문제에 대한 세부 사항을 포함한 Private PDF Document Generation Service 릴리스 노트"
weight: 20
numberless_headings: true
---

## 1.0.2 (`latest`)

**Release date: September 04, 2025**

문서 페이지를 열 때 네트워크 요청이 실패하면 `wait for content` 예외로 문서 생성이 실패하는 문제를 수정했습니다.

## 1.0.1

**Release date: August 08, 2025**

이 버전의 Private PDF Document Generation 서비스에서는 다음을 개선했습니다:

* 요청 유효성 검사
* 오류 처리

## 1.0.0

**Release date: June 27, 2025**

### Private PDF Document Generation Service

[PDF Document Generation](/appstore/modules/document-generation/) 모듈은 이제 [Private PDF Document Generation 서비스 인스턴스](/appstore/services/private-document-generation-service/)의 사용을 지원합니다. 이 유연한 솔루션은 Docker를 기반으로 하며 사용자가 직접 호스팅하고 관리합니다. 추가적인 제어 및 구성 옵션과 함께 자체 버전의 PDF Document Generation 서비스를 실행할 수 있으며, 특히 에어갭 앱이나 맞춤형 성능 및 데이터 공유 요구 사항을 대상으로 합니다.
