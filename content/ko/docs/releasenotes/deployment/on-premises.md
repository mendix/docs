---
title: "기타 배포 옵션 릴리스 노트"
linktitle: "기타 배포 옵션"
url: /releasenotes/developer-portal/on-premises/
weight: 40
description: "Virtual Machine(Windows 및 Linux) 기반 온프레미스 배포 및 Buildpack(Cloud Foundry 및 Docker)에 대한 릴리스 노트"
---

이 릴리스 노트는 Virtual Machine(Windows 및 Linux) 기반 온프레미스 배포, IBM Cloud Portal 배포 및 Buildpack의 주요 고객 대면 변경 사항을 다룹니다. Buildpack의 전체 릴리스 노트는 GitHub의 [Cloud Foundry](https://github.com/mendix/cf-mendix-buildpack/releases) 및 [Docker](https://github.com/mendix/docker-mendix-buildpack/releases) Buildpack 릴리스 노트를 참조하세요. 다른 배포 대상에 대한 별도의 릴리스 노트가 있습니다. 자세한 내용은 [Deployment](/releasenotes/developer-portal/deployment/) 릴리스 노트 페이지를 참조하세요.

Mendix 배포의 현재 상태에 대한 정보는 [Mendix Status](https://status.mendix.com/)를 참조하세요.

## 2023

### September 15, 2023

* 각 Mendix 버전에 대해 지원되는 Buildpack 버전 목록을 포함하도록 제품 문서를 업데이트했습니다. 자세한 내용은 [Supported Mendix Versions](https://github.com/mendix/cf-mendix-buildpack#supported-mendix-versions)를 참조하세요.

## 2022

### December 12, 2022

#### IBM Cloud Portal 배포

* IBM Cloud Portal에서의 배포는 더 이상 Mendix에서 공식적으로 지원되지 않습니다. 이에 따라 제품 문서를 업데이트했습니다.

## 2020

### October 26, 2020

#### Buildpack

* HTTP 헤더가 성공한 요청에 대해서만 반환되는 문제를 해결했습니다. 이 수정 사항을 적용하려면 앱을 재배포해야 합니다. (Ticket 94915 및 107140). 자세한 내용은 *GitHub*의 [Mendix Buildpack Releases](https://github.com/mendix/cf-mendix-buildpack/releases)를 참조하세요.

## 2019

### November 26, 2019

#### IBM Cloud Portal 배포

* IBM Cloud Portal에 배포하는 프로세스를 업데이트했습니다.
* Mendix Developer Portal 내에서 IBM Cloud Portal Cloud Foundry 서비스를 관리하는 기능도 추가했습니다.

## 2018

### October 29, 2018

#### IBM Cloud Portal 배포

* Mendix 내에서 IBM Cloud에 배포할 수 있습니다. 앱 템플릿으로 시작하면 IBM Cloud에서 배포 환경을 생성하는 과정을 안내받게 됩니다. 이후 Desktop Modeler 또는 Mendix Developer Portal 내에서 IBM Cloud로 앱을 배포할 수 있습니다.
