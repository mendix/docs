---
title: "Mendix Cloud 소개"
url: /developerportal/deploy/mxcloudv4/
weight: 90
description: "Mendix Cloud에 대한 자주 묻는 질문"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Mendix Cloud란 무엇인가요?

Mendix Cloud는 라이선스가 부여된 Mendix 애플리케이션이 확장 가능한 엔터프라이즈급 클라우드 플랫폼에 배포되는 곳입니다.

Mendix Cloud에 배포된 앱은 고가용성 Amazon Web Services(AWS) 리전에 호스팅된 Kubernetes 클러스터에서 실행됩니다. Mendix Studio Pro, Mendix Portal 또는 [Mendix API](/apidocs-mxsdk/apidocs/deploy-api/)를 통해 앱을 배포하고 전 세계 여러 리전에서 실행할 수 있습니다.

## 데이터는 어디에 호스팅되나요?{#cloud-data-regions}

주요 호스팅 위치는 다음과 같습니다:

* Mendix Cloud 아프리카: 케이프타운
* Mendix Cloud 호주: 시드니
* Mendix Cloud 아시아 태평양: 뭄바이
* Mendix Cloud 아시아 태평양: 싱가포르
* Mendix Cloud 아시아 태평양: 도쿄
* Mendix Cloud 아시아 태평양: 오사카
* Mendix Cloud 아시아 태평양: 서울
* Mendix Cloud 아시아 태평양: 자카르타
* Mendix Cloud 캐나다: 중부
* Mendix Cloud 유럽: 아일랜드
* Mendix Cloud 유럽: 프랑크푸르트
* Mendix Cloud 중동: 바레인
* Mendix Cloud 중동: UAE
* Mendix Cloud 영국: 런던
* Mendix Cloud 미국 동부: 버지니아 북부
* Mendix Cloud 미국 서부: 오레곤
* Mendix Cloud 남미: 상파울루

## Mendix는 기본 컨테이너 플랫폼 API를 노출하나요?

아니요, 노출하지 않습니다. 컨테이너 플랫폼 API는 Mendix의 배포 옵션, 인증 모델 또는 클라우드 리소스 사용량과 일대일로 매핑되지 않습니다. 그러나 [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/)를 사용하여 Mendix Cloud에 대한 배포를 자동화할 수 있습니다.

## 기본 AWS 리소스에 어떻게 접근하나요?

Mendix Cloud는 Mendix 자체 AWS 계정에서 실행됩니다. Mendix 자격 증명을 통해 AWS API와 직접 상호작용할 수 없습니다. Mendix Cloud는 [VPC 피어링](https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html)이나 VPC 연결을 제공하지 않습니다. Mendix에서 호스팅하는 AWS 리소스(EC2, RDS, S3 등)에 대한 모든 접근은 Runtime의 [Database API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) 및 [FileDocument API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#storeFileDocumentContent(com.mendix.systemwideinterfaces.core.IContext,com.mendix.systemwideinterfaces.core.IMendixObject,java.io.InputStream)), 클라우드 리소스를 위한 [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) 등 Mendix API를 통해 이루어집니다.

기본 AWS 서비스에 접근해야 하는 경우 Mendix 앱을 자체 AWS 계정에 배포하도록 선택할 수 있습니다.

## 자체 AWS 계정에 어떻게 배포할 수 있나요?

Mendix는 [Mendix for Amazon EKS](https://aws.amazon.com/solutions/partners/terraform-modules/mendix-eks/)를 사용하여 자체 AWS 계정에 앱을 직접 배포하는 효율적인 방법을 제공합니다. AWS 환경 내에서 Mendix 애플리케이션을 실행하면 런타임 환경에 대한 완전한 제어권을 가질 수 있으며, 사용자와 같은 리전에 배포할 때 지연 시간을 줄일 수 있습니다. 또한 앱에서 커넥터를 통해 AWS 서비스에 직접 접근할 수 있습니다.

자체 AWS 계정에 배포할 때는 관련 AWS 리소스의 보안 및 관리에 대한 책임이 사용자에게 있다는 점에 유의하십시오.

## 원하는 AWS 리전에 배포가 없는 경우, Mendix는 언제 해당 리전을 출시하나요?

Mendix는 고객 수요에 따라 리전을 추가합니다. 다른 리전을 원하시면 Mendix Customer Success Manager에게 문의하여 Mendix가 제공할 수 있는 사항을 확인하십시오. 모든 요청은 백업 서비스, 모니터링 등을 포함한 완전한 Mendix Cloud 클러스터를 출시하는 비용을 고려해야 합니다.
