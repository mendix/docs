---
title: "일반"
url: /developerportal/deploy/general/
weight: 5
description: "여러 플랫폼에 관련된 배포 주제의 개요를 제공합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

Mendix 앱은 다양한 플랫폼에 배포할 수 있습니다. Mendix 앱의 배포 및 관리의 대부분은 배포되는 플랫폼에 따라 달라집니다. 해당 플랫폼에 대한 배포에 초점을 맞춘 문서 섹션에서 각 플랫폼에 대한 정보를 찾을 수 있습니다.

그러나 여러 주제는 여러 플랫폼과 관련이 있습니다. 이러한 주제는 플랫폼별 섹션 대신 이 문서 섹션에서 다룹니다.

이 문서 섹션에서 다루는 주제는 다음과 같습니다:

* [앱 라이선싱](/developerportal/deploy/licensing-apps-outside-mxcloud/)
* [애플리케이션의 안전한 아웃바운드 연결](/developerportal/deploy/securing-outgoing-connections-from-your-application/)
* [2단계 인증](/developerportal/deploy/two-factor-authentication/)
* [버전 다운그레이드 보호](/developerportal/deploy/version-downgrade-prevention/)
* [Iframe 및 실행 중인 앱](/developerportal/deploy/running-in-iframe/)
* [배포 위치](/developerportal/deploy/deployment-location/)
* [Webhooks](/developerportal/deploy/webhooks/)
* [소프트웨어 구성](/developerportal/deploy/software-composition/)
* [Siemens Advanced License Technology](/developerportal/deploy/salt/)

## 모델 빌드

앱을 클라우드에 배포하려면 먼저 프로젝트 모델(MDA)을 빌드해야 합니다. 런타임 배포에 대한 자세한 내용은 [Runtime Deployment](/refguide/runtime-deployment/)에 설명되어 있습니다. 이것은 독립적으로 또는 배포 파이프라인의 일부로 수행할 수 있습니다.

모델을 빌드하는 데 걸리는 시간은 모델의 복잡성과 모델을 빌드하는 데 사용되는 Team Server 리포지토리에 보관된 파일의 수 및 크기에 따라 달라집니다.

{{% alert color="info" %}}
2024년 9월 1일부터 Mendix 플랫폼에서 배포 패키지를 빌드하려면 앱이 Mendix 버전 8 이상에서 실행되어야 합니다. 이것은 Mendix Cloud, Mendix Cloud Dedicated, Mendix on Kubernetes 및 SAP Cloud를 포함한 모든 클라우드 배포 모델에 적용됩니다.

앱이 버전 7 이하에서 실행되는 경우 Studio Pro에서 로컬 배포 패키지를 빌드할 수 있지만 이 패키지를 Mendix 플랫폼에 업로드할 수 없습니다.
{{% /alert %}}
