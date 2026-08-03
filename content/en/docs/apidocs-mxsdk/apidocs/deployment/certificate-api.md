---
title: "Certificate API"
linktitle: "Certificate API"
url: /apidocs-mxsdk/apidocs/certificate-api/
weight: 50
description: "Describes how company admins can manage central certificates programmatically using the Certificate API, including listing, creating, updating, replacing, and deleting certificates."
restapi: true
---

## Introduction

The Certificate API allows company admins to manage [landscape-wide (central) certificates](/developerportal/deploy/certificates/centralized-certificates/) via API. These certificates are used to configure custom domains on Mendix Cloud and can also be managed via [Certificate Management](/control-center/certificate-management/) in Control Center.

{{% alert color="info" %}}
The Certificate API does not manage local or app-level certificates. [App-level certificates](/developerportal/deploy/application-level-certificates/) are configured via Cloud Portal.
{{% /alert %}}

## Prerequisites

To use the Certificate API, you must:

* Be a company admin
* Have a Mendix Personal Access Token (PAT) with the `mx:deployment:write` scope

For information on creating a PAT, refer to [Personal Access Tokens](/portal/user-settings/#pat).

## Capabilities

The Certificate API lets you manage the central certificates owned by your company:

| Capability | Method and Path |
| --- | --- |
| List certificates | `GET /v1/certificates` |
| Create a certificate | `POST /v1/certificates` |
| Update a certificate | `PATCH /v1/certificates/{certificateId}` |
| Replace a certificate | `PUT /v1/certificates/{certificateId}/replacement` |
| Delete a certificate | `DELETE /v1/certificates/{certificateId}` |

All endpoints operate only on central certificates. Private key material, certificate PEM data, and internal identifiers are never returned in any response.

## Base URL

```
https://api.home.mendix.com/
```

## Authentication

All requests must include your PAT in the `Authorization` header:

```
Authorization: mxToken <PAT>
```

The company that a request operates on is derived automatically from the authenticated token and you do not pass a company identifier. Every operation is scoped to and restricted to the certificates owned by that company.

## Certificate Object

Successful responses return a certificate object with the following structure:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "description": "Wildcard cert for example.com",
  "validFrom": "2026-01-01T00:00:00Z",
  "validTill": "2027-01-01T00:00:00Z",
  "createdAt": "2026-01-02T09:15:00Z",
  "updatedAt": "2026-01-02T09:15:00Z",
  "status": "VALID",
  "inUse": true,
  "linkedFqdnsCount": 2
}
```

| Field | Type | Description |
| --- | --- | --- |
| `id` | String (UUID) | Unique certificate identifier |
| `description` | String | Free-text description (auto-generated from the certificate's subject/SAN if not supplied) |
| `validFrom` | String (RFC3339) | Certificate validity start |
| `validTill` | String (RFC3339) | Certificate validity end |
| `createdAt` | String (RFC3339) | When the certificate was created |
| `updatedAt` | String (RFC3339) | When the certificate was last modified |
| `status` | String enum | One of `UPCOMING`, `VALID`, `EXPIRES SOON`, `EXPIRED`. Computed from validity dates; `EXPIRES SOON` applies within 15 days of expiry |
| `inUse` | Boolean | `true` if the certificate is linked to one or more custom domains |
| `linkedFqdnsCount` | Integer | Number of custom domains currently linked to this certificate |

## Errors

All errors use a standard envelope:

```json
{
  "error": {
    "message": "certificate not found",
    "code": 404,
    "detail": "optional additional context"
  }
}
```

| Status | Meaning |
| --- | --- |
| 400 | Malformed request – invalid certificate or key, certificate/key mismatch, invalid chain, invalid query parameter, or the certificate has linked domains and cannot be deleted |
| 401 | Missing or invalid authentication |
| 404 | Certificate not found, or not owned by your company |
| 409 | Conflict – a certificate with the same key material already exists |
| 500 | Internal server error |

## Endpoints

### List Certificates {#list-certificates}

```
GET /v1/certificates
```

Returns the central certificates owned by your company, most recently updated first. Supports filtering and pagination.

#### Query Parameters

| Parameter | Type | Default | Notes |
| :---: | :---: | :---: | --- |
| `domain` | String | – | Filter to certificates linked to this domain |
| `status` | String | – | Filter by status: `UPCOMING`, `VALID`, `EXPIRES SOON`, `EXPIRED` |
| `page` | integer | 1 | 1-based page number |
| `limit` | integer | 10 | Page size, 1–100 |

**Response 200:**

```json
{
  "certificates": [ { "...": "certificate object" } ],
  "page": 1,
  "limit": 10,
  "totalCount": 3
}
```

### Create a Certificate {#create-certificate}

```
POST /v1/certificates
```

#### Request Body

```json
{
  "certificate": "-----BEGIN CERTIFICATE-----...",
  "privateKey": "-----BEGIN PRIVATE KEY-----...",
  "intermediateChain": "-----BEGIN CERTIFICATE-----...",
  "description": "Wildcard cert for example.com"
}
```

| Field | Required | Notes |
| --- | :---: | --- |
| `certificate` | Yes | PEM-encoded leaf certificate |
| `privateKey` | Yes | PEM-encoded private key matching the certificate |
| `intermediateChain` | No | PEM-encoded intermediate chain |
| `description` | No | Auto-generated from the certificate if omitted |

{{% alert color="info" %}}
Certificates generated from a Mendix-issued CSR are not supported by this endpoint.
{{% /alert %}}

**Response:** 201 with the created certificate object.

### Update a Certificate {#update-certificate}

```
PATCH /v1/certificates/{certificateId}
```

Partially updates a certificate's material or description. Any combination of fields may be supplied.

#### Request Body

```json
{
  "certificate": "-----BEGIN CERTIFICATE-----...",
  "intermediateChain": "-----BEGIN CERTIFICATE-----...",
  "description": "Renewed cert"
}
```

**Response:** 200 with the updated certificate object.

### Replace a Certificate {#replace-certificate}

```
PUT /v1/certificates/{certificateId}/replacement
```

Rotates a certificate – transfers all custom domains linked to `{certificateId}` onto another certificate you own, without downtime for the linked domains. Both certificates must be central certificates owned by your company.

#### Request Body

```json
{"newCertificateId": "8f14e45f-ceea-467e-8459-b17dc4536f43"}
```

**Response:** 200 with the new certificate's object (now carrying the transferred domain links).

### Delete a Certificate {#delete-certificate}

Deletes a central certificate.

```
DELETE /v1/certificates/{certificateId}
```

{{% alert color="warning" %}}
A certificate that is still linked to one or more custom domains cannot be deleted. Replace or unlink it first.
{{% /alert %}}

**Response:** 204 No Content
