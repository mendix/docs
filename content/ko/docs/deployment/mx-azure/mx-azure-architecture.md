---
title: "아키텍처"
url: /developerportal/deploy/mendix-on-azure/architecture/
weight: 6
description: "Mendix on Azure에서 실행되는 앱의 보안 및 규정 준수 고려 사항을 설명합니다."
---
## Architecture

Mendix on Azure provides a managed service to host Mendix apps in an Azure subscription you own.

Mendix operates all services and components within the scope of the Mendix on Azure service for you. The service leverages several underlying Azure services that are preconfigured to optimally host your Mendix apps.

### High-level Architecture Diagram

The diagram in this section presents the high-level architecture of the Mendix for Azure solution.

{{< figure src="/attachments/deployment/mx-azure/architecture.png" class="no-border" >}}

### Components Used in Mendix on Azure

Mendix deploys, operates and is responsible for overall service functionality of the following components as part of Mendix on Azure:

* Azure Kubernetes Service with Managed NGINX Ingress Controller (app routing add-on)
* Azure PostgreSQL Flexible Server
* Azure Container Registry
* Azure Blob Storage
* Azure Managed Grafana
* Azure Managed Prometheus
* Azure Virtual Network with private endpoints and private DNS zones
* [Mendix Runtime](/refguide/runtime/)
* [Mendix Operator](/developerportal/deploy/private-cloud-cluster/)
* [Mendix Agent](/developerportal/deploy/private-cloud-cluster/)

You cannot alter these managed components yourself beyond what is offered in the Mendix on Azure and Mendix on Kubernetes self-service portals. Mendix limits customization to ensure a consistent, predictable, and scalable customer experience.
