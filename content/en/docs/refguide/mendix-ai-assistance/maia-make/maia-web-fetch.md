---
title: "Maia Web Fetch"
linktitle: "Web Fetch"
url: /refguide/maia-web-fetch/
weight: 90
description: "Describes Maia's web fetch capability for retrieving content from public websites and APIs."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This feature is available in Studio Pro 11.10 and above. 

To use Maia Web Fetch, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia can fetch and read content from public websites and APIs. It can retrieve documentation, access API endpoints, read configuration files, and gather information from the web to assist with your development tasks.

When Maia wants to fetch content from the web, it asks for your permission first. You can approve or deny each request. The permission dialog looks like this:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-web-fetch/maia-web-fetch-permission-dialog.png" alt="Maia Web Fetch permission dialog" max-width=80% >}}

## What Maia Can Fetch

Maia can retrieve the following types of content:

* Public web pages and documentation
* JSON, XML, and other text-based data formats
* Plain text files and code samples
* Feeds and structured data endpoints

## Limitations

Maia cannot access the following:

* **Internal or private addresses** — Maia does not fetch from localhost, private IP ranges (like 192.168.x.x or 10.0.0.x), or your local machine's internal services.
* **Binary content** — Images, videos, PDFs, and archives cannot be fetched. If a URL serves binary content, Maia is not able to read it.
* **Very large responses** — Responses larger than 1 MB are rejected.
* **Non-HTTPS URLs** — Only secure HTTPS connections are supported.

## Troubleshooting {#troubleshooting}

If Maia says it cannot fetch a URL, check the following:

* **Is it a public URL?** — The URL must be accessible without authentication and must point to a public server, not an internal service.
* **Does the server block automated access?** — Some servers reject requests from automated clients. Maia may not be able to bypass these restrictions.
* **Is it binary content?** — If the URL returns images, PDFs, or other non-text formats, Maia cannot process it.
* **Is the response too large?** — Very large pages or files may exceed the size limit.

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
