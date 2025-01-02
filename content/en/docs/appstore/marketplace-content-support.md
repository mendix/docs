---
title: "Support Marketplace Content "
url: /appstore/marketplace-content-support/
weight: 4
no_list: false
description_list: true
description: "Presents information on the Marketplace content support."
aliases:
    - /appstore/general/use-content-support/
    - /appstore/general/app-store-content-support/
    - /community/use-content-support/
    - /developerportal/app-store/use-content-support/
---

## Introduction

Support for Marketplace content is determined by the content support category and the service level agreement (SLA) the user possesses.

The content support category for a component is indicated by the label on the [header](/appstore/component-details/#header) in its component details page. The label can be **Platform Supported**, **Partner Supported**, or **Siemens Supported**. If there is no label indicating the content support category, then the component is community-supported.

{{< figure src="/attachments/appstore/marketplace-content-support/content-support-label.png" >}}

## Content Support Categories {#category}

Support for Marketplace content is determined by the content support category and the service level agreement (SLA) the user possesses. We distinguish the following content support categories:

| Category       | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| **Platform Supported**   | Mendix supports all the content in this category as-is when you are equipped with an SLA (**Platform**, **Standard**, or **Premium**) with Mendix. Content in this category is proactively incorporated into Mendix R&D test cycles as part of our platform release management. Please note that this category replaces the former **Extended** category, which has been deprecated. |
| **Deprecated** | The content in this category is considered end-of-life and will be dropped to the **Community support** status in the next major release of Mendix. Content is provided as-is by Mendix R&D, and support depends on the severity of the reported issue and the effort required to resolve it. |
| **Community Supported**  | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. Mendix Support is not responsible for any content in this category, even if the content is owned by developers who work or previously worked at Mendix. |
| **Partner Supported**    | The content in this category is provided and supported by a partner. The partner supports this content as-is when you are equipped with an SLA with the partner. For more information, see [Mendix Component Partner Program](/appstore/partner-program/). |
| **Siemens Supported**    | The content in this category is provided and supported by the Siemens team. Siemens supports this content as-is when you are equipped with an SLA with Siemens. |

## Feedback Process Details

We are always curious about and grateful for your feedback. The way you communicate your feedback to us depends on the support category of the content.

### Platform Category

The applicable level of service for Mendix-supported Marketplace content is equal to the Mendix SLA you have acquired. In other words, the same SLA conditions apply to support on Marketplace content. This means that equal response and resolve times are applicable, and the standard support process using the [Mendix Support Portal](https://support.mendix.com) has to be followed.

{{% alert color="warning" %}}
Content in this support category is supported as-is. If you change the content of the module, the module will no longer be platform-supported.
{{% /alert %}}

### Deprecated Category {#deprecated}

Mendix moves platform-supported content into this category when the content is considered end-of-life. These decisions factor in popularity, the availability of improved alternatives, and industry standards.

{{% alert color="info" %}}
Support for content in this category is limited and is decided by Mendix on a case-by-case basis. You can still follow the standard support process using the [Mendix Support Portal](https://support.mendix.com). However, the Mendix SLA no longer applies. 
{{% /alert %}}

### Community Category {#community-category}

Support on content in this category is up to the user or organization providing the content. Mendix recommends contacting the owner of the content in case of questions or issues via the following methods:

* Open an issue on the GitHub repository associated with the content (for details on GitHub issues, see [Mastering Issues](https://guides.github.com/features/issues/))
* Contact the owner of the content via the contact details available on the Marketplace component's detail pages
* Ask a question in the [Mendix Community](https://community.mendix.com/)
* Contribute 

{{% alert color="warning" %}}
Mendix Support is not responsible for any community-supported content, since every Mendix user can create and publish community-supported content in the Mendix Marketplace, including developers who work or previously worked at Mendix.

The level of support for the community-supported content totally depends on the availability and effort of the content developer and the Mendix community.
{{% /alert %}}

### Partner Category

Partner-supported content is created and maintained by partners as part of the [Mendix Component Partner program](/appstore/partner-program/). Partners in the program commit to providing support to paying customers under an SLA (meaning, under terms specified by the partner). Customers can rely on this SLA for support from the partner if something goes wrong. A partner-supported Marketplace [component details page](/appstore/component-details/) contains a reference to the partner's support portal or the partner's support contact email.

## Feedback Process Summary

### Mendix-Supplied Content

| Support Category | Standard/Premium SLA                                         | Platform SLA                                                 | No SLA                    | Notes                                                        |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------ |
| **Platform**     | [Mendix Support](https://support.mendix.com/)                | [Mendix Support](https://support.mendix.com/)                | Mendix community supports | Mendix supports all the content in this category as-is when you are equipped with a Mendix SLA (Platform, Standard, or Premium). Content in this category is proactively incorporated into Mendix R&D test cycles as part of our platform release management. This category replaces the former Extended category, which has been deprecated. |
| **Deprecated**   | [Mendix Support (limited)](https://support.mendix.com/) (for more information, see the [Deprecated Support Category](#deprecated) section above) | [Mendix Support (limited)](https://support.mendix.com/) (for more information, see the [Deprecated Support Category](#deprecated) section above) | Mendix community supports | Content in this category is considered end-of-life and will be dropped to the Community support category in the next major Mendix release. Content is provided as-is by Mendix R&D, and support depends on the severity of the reported issue and the effort required to resolve it. |
| **Community**    | Mendix community supports                                    | Mendix community supports                                    | Mendix community supports | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. |

### Community-Supplied Content

| Support Category | Supplied by Individual Developer | Supplied by Partner Organization                             | Notes                                                        |
| ---------------- | -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Community**    | Mendix community supports        | Options: No support from partner, or Mendix community supports | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. |
| **Partner**      | N/A                              | Partner supports premium customers (allowed after Mendix Component Partner agreement is signed) | Content in this category is provided and supported by a Mendix partner. The partner supports this content as-is when you are equipped with an SLA with the partner. For more information, see [Mendix Component Partner Program](/appstore/partner-program/). |

### Siemens-Supplied Content

| Support Category | Supplied by Individual Developer | Supplied by Segment Team or Other Org Level                  | Notes                                                        |
| ---------------- | -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Siemens**      | N/A                              | Siemens supports.                                            | Content in this category is provided and supported by the Siemens team. Siemens supports this content as-is when you are equipped with an SLA with Siemens. |
| **Community**    | Mendix community supports        | Options: No support from partner, or Mendix community supports | Content is provided as-is by members of the Mendix community, and support depends on the availability and effort of the owner. |
