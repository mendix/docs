---
title: "클라우드 토큰"
url: /control-center/cloud-tokens/
description: "Mendix Control Center의 클라우드 토큰 페이지에 대해 설명합니다."
weight: 20
no_list: false 

#This page contains the Cloud Tokens equivalence of all Cloud Resource Packs. It is referenced in the legal documentation and in the Order Forms that customers sign. Any changes to this page must be validated by Peter Koemans and Satyam Singh.
---

## 소개

**클라우드 토큰** 페이지에는 회사의 Mendix Cloud 토큰 잔액(사용 가능, 사용됨, 총 토큰 수)이 표시됩니다. 이 페이지에는 Mendix Cloud 토큰을 사용하는 거래 목록도 포함되어 있습니다.

## 클라우드 토큰 세부 정보

Mendix Cloud 토큰을 사용하는 각 거래에 대해 사용 가능한 세부 정보는 다음과 같습니다:

* **날짜** – 거래가 발생한 날짜입니다.
* **앱** – 거래를 트리거한 앱입니다.
* **거래** – 거래의 유형입니다.
* **Cloud Resource Pack** – 거래에 해당하는 Cloud Resource Pack입니다. 자세한 내용은 [Cloud Resource Packs](#crps)를 참조하십시오.
* **클라우드 토큰** – 거래에 의해 소비된 Mendix Cloud 토큰의 수입니다.
* **남은 토큰** – 거래가 완료된 후 남은 Mendix Cloud 토큰의 수입니다.

## Mendix Cloud 토큰 {#cloud-tokens}

Mendix Cloud 토큰은 Mendix 플랫폼 내에서 Mendix Cloud 배포를 위한 [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack)(CRP)과 같은 Cloud 리소스를 사용하는 데 사용할 수 있는 토큰 유형입니다. 토큰 및 Mendix Cloud 토큰의 계약상 정의는 [주문서 정의](https://www.mendix.com/legal/platform-usage/order-form-definitions/#section-9) 페이지에서 찾을 수 있습니다.

## Cloud Resource Packs {#crps}

{{% alert color="info" %}}
각 Cloud Resource Pack(CRP)의 기술적 세부 사항은 *Mendix Cloud*의 [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) 섹션을 참조하십시오.
{{% /alert %}}

모든 현재 CRP는 해당하는 Mendix Cloud 토큰으로 변환되어 다른 Mendix Cloud 토큰과 합산됩니다. 그런 다음 이를 사용하여 계약에 명시된 대로 모든 유형 및 크기의 Cloud 리소스를 프로비저닝할 수 있습니다.

**권한** 페이지에서 사용 가능한 및 사용된 Mendix Cloud 토큰을 볼 수 있습니다. 볼 수 없는 경우 Customer Success Manager(CSM)에게 문의하십시오.

다음 표는 각 CRP에 필요한 Mendix Cloud 토큰 수를 보여줍니다:

| Standard Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XS21 | 10 |
| S21 | 20 |
| M21 | 40 |
| L21 | 80 |
| XL21 | 160 |
| 2XL21 | 320 |
| 3XL21 | 640 |
| 4XL21 | 1280 |
| 4XL-5XLDB | 2240 |

|Premium Resource Packs | Mendix Cloud Tokens |
| --- | --- |
| S21 | 30 |
| M21 | 60 |
| L21 | 120 |
| XL21 | 240 |
| 2XL21 | 480 |
| 3XL21 | 960 |
| 4XL21 | 1920 |
| 4XL-5XLDB | 3360 |

|Premium Plus Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XL21 | 400 |
| 2XL21 | 800 |
| 3XL21 | 1600 |
| 4XL21 | 3200 |
| 4XL-5XLDB | 5600 |

| Legacy Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XS20 | 10 |
| S20 | 20 |
| M20 | 40 |
| L20 | 80 |
| XL20 | 160 |
| 2XL20 | 320 |
| Strato | 12 |
| Meso | 47 |
| Iono | 67 |
| Magneto | 147 |
| S | 8 |
| M | 16 |
| L | 37 |
| XL | 73 |
| 2XL | 167 |
| 3XL | 640 |

{{% alert color="info" %}} 

* 더 이상 레거시 CRP를 구매할 수 없습니다. 이제 Standard, Premium 및 Premium Plus CRP만 구매하고 프로비저닝할 수 있습니다. 이미 구매한 레거시 CRP는 디프로비저닝되면 Mendix Cloud 토큰으로 변환됩니다. 이전 표에 명시된 요율이 사용되며 Mendix Cloud 토큰이 토큰 풀에 추가됩니다.
* 셀프 서비스 클라우드 소비 기능은 Standard, Premium 및 Premium Plus CRP에만 사용할 수 있습니다. 폴백과 함께 레거시 CRP를 사용하는 경우 셀프 서비스 도구에서 소비 부정확성이 발생할 수 있습니다. 최신 기능에 액세스하려면 Mendix는 Customer Success Manager에게 문의하여 Standard, Premium 또는 Premium Plus CRP로 전환할 것을 권장합니다.

{{% /alert %}}

## GenAI Resource Packs {#grps}

GenAI Resource Packs는 Mendix Cloud를 통해 제공되는 생성형 AI 기술에 대한 턴키 액세스를 제공합니다. 각 GenAI Resource Pack(GRP)의 기술적 세부 사항은 [GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/)를 참조하십시오.

| GenAI Model Resource Pack – Anthropic Claude Sonnet | Mendix Cloud Tokens |
| --- | --: |
| S | 30 |
| M | 60 |
| L | 120 |

| GenAI Model Resource Pack – Cohere Embed | Mendix Cloud Tokens |
| --- | --: |
| S | 6 |
| M | 12 |
| L | 24 |

| GenAI Knowledge Base Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| Standard | 48 |

## 핵심 요약

* Mendix Cloud 토큰은 Mendix 플랫폼에서 Cloud 리소스에 액세스하는 데 사용되는 특정 유형의 토큰입니다.
* 필요한 Mendix Cloud 토큰의 수는 원하는 CRP에 따라 다릅니다.
* 토큰을 미리 구매하여 CRP를 얻는 데 사용할 수 있습니다.
* 해당 리소스가 더 이상 필요하지 않은 경우 토큰을 재사용하여 다른 CRP를 얻거나 나중에 사용할 수 있도록 보관할 수 있습니다.
* Mendix Cloud 토큰은 관련 계약의 종료 날짜에 만료됩니다. 지속적인 액세스를 보장하려면 만료 전에 계약을 갱신하십시오.
* 폴백이 있는 레거시 CRP를 여전히 사용하는 경우 Mendix Cloud 토큰 잔액이 부정확할 수 있습니다.
