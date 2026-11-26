---
title: "Guardrails for Mendix Cloud GenAI Resources"
url: /agents/mx-cloud-genai/guardrails/
linktitle: "Guardrails"
description: "Describes how to configure and manage guardrails that filter prompts and responses for Mendix Cloud GenAI text generation resources."
weight: 40
---

## Introduction

A guardrail filters the prompts sent to a Mendix Cloud GenAI text generation resource and the responses that the model returns. You can use a guardrail to block prompt attacks and to block or mask personally identifiable information (PII).

Each text generation resource can have one guardrail. While the guardrail is active, it applies to every request made to the resource. You do not need to change your app to use a guardrail. Knowledge base and embeddings resources do not support guardrails.

{{% alert color="info" %}}
Guardrails consume additional GenAI Units. For more information, see [Guardrail GenAI Unit Rates](/agents/mx-cloud-genai/resource-packs/#guardrail-genai-unit-rates).
{{% /alert %}}

## Roles and Responsibilities

Guardrail tasks are split between two roles:

* **Company Admin** – Enables or disables guardrails for a resource in the Control Center, because guardrails consume additional GenAI Units. For more information, see the [Enabling or Disabling Guardrails](/control-center/genai-resources-self-service/#enabling-or-disabling-guardrails) section of *GenAI Resources*.
* **Resource member** – After guardrails are enabled, any member of the resource team can configure, edit, activate, and deactivate the guardrail on the **Guardrails** tab of the resource in the [Mendix Cloud GenAI Portal](https://genai.home.mendix.com/).

## Guardrails Tab

The **Guardrails** tab is available for text generation resources only. It shows one of the following, depending on the state of the guardrail:

* **Not enabled** – A message says that guardrails are not enabled for the resource. Contact your Company Admin to enable them.
* **Not configured** – The tab shows **Guardrails Not Configured**. To configure the guardrail, click **Configure Guardrails**. For more information, see [Configuring a Guardrail](#configuring-a-guardrail).
* **Configured** – The tab shows the guardrail name, its status, and its configuration. For more information, see [Managing a Guardrail](#managing-a-guardrail).

{{< figure src="/attachments/genai/guardrails/guardrails-not-configured.png" alt="Guardrails tab of a text generation resource showing the Guardrails Not Configured message and the Configure Guardrails button" >}}

## What a Guardrail Evaluates {#what-a-guardrail-evaluates}

A guardrail does not evaluate every part of a request. The following table shows which content the guardrail evaluates:

| Content | Evaluated |
| --- | --- |
| User messages, including earlier messages in the conversation history | Yes |
| Model responses | Yes |
| System prompts | No |
| Tool definitions, such as tool descriptions and input schemas | No |
| Tool call arguments that the model generates | No |
| Tool results that your app returns to the model | No |

Because tool content is not evaluated, a guardrail does not block or mask sensitive information that the model passes to a tool or that a tool returns.

## Configuring a Guardrail {#configuring-a-guardrail}

To configure a guardrail, do the following:

1. On the **Guardrails** tab of a resource that has guardrails enabled, click **Configure Guardrails**.
2. In **Filter Details**, enter the following information, then click **Next**:
    * **Guardrail name** – The name of the guardrail, up to 50 characters. This name is shown in the Portal only. This field is required.
    * **Description** – An optional description of the guardrail, up to 200 characters.
3. In **Message for Blocked Prompts**, enter the following information, then click **Next**:
    * **Message for blocked prompts** – The message returned when the guardrail blocks a prompt, up to 500 characters. This field is required.
    * **Message for blocked responses** – The message returned when the guardrail blocks a model response, up to 500 characters. This field is required.
4. In **Guardrail Configuration**, configure at least one of the filters described in [Guardrail Filters](#guardrail-filters).
5. Click **Done** to save the guardrail.

You can use **Previous** to go back to an earlier step without losing your input.

When you save a guardrail for the first time, it is activated automatically. Later changes keep the current status of the guardrail.

{{< figure src="/attachments/genai/guardrails/guardrail-configuration.png" alt="Guardrail Configuration step of the Configure Guardrail wizard with the prompt attacks filter set to High and two PII types, Email set to Anonymize and IP address set to Block" max-width="80%" >}}

## Guardrail Filters {#guardrail-filters}

A guardrail supports the following filters.

### Prompt Attacks {#prompt-attacks}

The prompt attacks filter detects and blocks user prompts that try to override the system instructions, such as jailbreaks and prompt injections. To use it, turn on **Prompt attacks filter** and select a strength:

* **None** – The filter is on but does not block any prompts.
* **Low** – Blocks only prompts that are clearly prompt attacks.
* **Medium** – Blocks prompts that are likely to be prompt attacks.
* **High** – Blocks any prompt that may be a prompt attack. This is the strictest setting, and it can also block some harmless prompts.

### Sensitive Information Filters {#sensitive-information-filters}

Sensitive information filters detect personally identifiable information (PII) in prompts and responses. To use them, turn on **PII Type Filter**, click **Add PII type**, and select a PII type, for example, **Email** or **IP address**. You can add each PII type once. For each PII type, select one of the following **Guardrail Behaviour** options:

* **Block** – The guardrail blocks the prompt or response and returns the configured blocked message.
* **Anonymize** – The guardrail replaces the detected information with the name of the PII type, for example, `{EMAIL}`.
* **None** – The guardrail detects the information but does not block or mask it.

The following PII types are supported:

* **General** – Address, age, name, email, phone, username, password, driver ID, license plate, vehicle identification number
* **Finance** – Credit or debit card CVV, credit or debit card expiration, credit or debit card number, PIN, IBAN, SWIFT code
* **IT** – IP address, MAC address, URL, AWS access key, AWS secret key
* **US-specific** – US bank account number, US bank routing number, US individual taxpayer identification number, US passport number, US Social Security number
* **Canada-specific** – Canadian health number, Canadian social insurance number
* **UK-specific** – UK National Health Service (NHS) number, UK national insurance number, UK unique taxpayer reference number

## Managing a Guardrail {#managing-a-guardrail}

After a guardrail is configured, the **Guardrails** tab shows the guardrail name with an **Activated** or **Deactivated** status. The tab also shows the message for blocked prompts, the prompt attacks filter strength, and the configured PII types with their guardrail behavior.

{{< figure src="/attachments/genai/guardrails/guardrail-configured.png" alt="Guardrails tab showing an activated guardrail with its message for blocked prompts, the prompt attacks filter set to high strength, and a PII filters table" >}}

You can manage the guardrail as follows:

* To change the configuration, click **Configure Guardrail**. Saved changes apply to every request on the resource immediately.
* To stop applying the guardrail without removing its configuration, click **Deactivate Guardrail**. To apply it again, click **Activate Guardrail**.

To remove the guardrail and its configuration, a Company Admin must disable guardrails for the resource. For more information, see the [Enabling or Disabling Guardrails](/control-center/genai-resources-self-service/#enabling-or-disabling-guardrails) section of *GenAI Resources*.

## Monitoring Guardrail Consumption

The **Consumption** tab of the resource shows guardrail consumption together with model consumption. For more information, see the [Guardrail Consumption](/agents/mx-cloud-genai/Navigate-MxGenAI/#guardrail-consumption) section of *Navigate Through the Mendix Cloud GenAI Portal*.
