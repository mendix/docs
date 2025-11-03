---
title: "Security and Compliance for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/security-and-compliance/
weight: 20
description: "Describes the security & compliance considerations for apps running on Mendix on Azure."
---

## Security and Compliance

### Compliance Frameworks

Every release of Mendix on Azure is automatically assessed against selected compliance frameworks using Azure Policy. Currently this asssessment is limited to SOC2, but this will be extended in future versions based on customer demand.

#### SOC 2 Type 2 Compliance {#soc2}

The automatic SOC2 assessment currently has identified the following compliance deviations which are accepted:

| Policy | Acceptance Rationale |
| --- | --- |
| Azure Container Registry: [Container registries should be encrypted with a customer-managed key](https://www.azadvertizer.net/azpolicyadvertizer/5b9159ae-1701-4a6f-9a7a-aa9c8ddd0580.html) | The standard Microsoft key is used instead to ease adoption of the product. |
| AKS - cluster resource: [Azure Policy Add-on for Kubernetes service (AKS) should be installed and enabled on your clusters](https://www.azadvertizer.net/azpolicyadvertizer/0a15ec92-a229-4763-bb14-0ea34a568f8d.html) | The cluster is deployed and managed by Mendix, so this policy is not needed. |
| AKS - cluster resource: [Azure Kubernetes Service clusters should have Defender profile enabled](https://www.azadvertizer.net/azpolicyadvertizer/a1840de2-8088-4ea8-b153-b4c723e9cb01.html) | This is not automated for cost-saving reasons. |
| AKS - cluster VNET: [All Internet traffic should be routed via your deployed Azure Firewall](https://www.azadvertizer.net/azpolicyadvertizer/fc5e4038-4584-4632-8c85-c0448d374b2c.html) | This is not automated, but customers can deploy their own Firewall if required. |
| Storage Account: [Storage accounts should use customer-managed key for encryption](https://www.azadvertizer.net/azpolicyadvertizer/6fac406b-40ca-413b-bf8e-0bf964659c25.html) | The cluster is deployed and managed by Mendix, so this is not needed. |


### Access to Customer Environments by Mendix

Mendix accesses customer environments securely by leveraging native Azure capabilities and adhering to Microsoft's best practices:

* Access is provided through [cross-tenant access](https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview), a secure Azure-native mechanism.
* The majority of access operations are automated and performed programmatically at scale using infrastructure as code, limiting manual human intervention to exceptional cases.
* All network connectivity between Mendix and customer environments utilizes private links, ensuring communication is not exposed to the public internet.
