---
title: "SC-23 (03) System and Communications Protection - Session Authenticity - Unique Session Identifiers with Randomness"
linktitle: "SC-23 (03)"
url: /private-mendix-platform/nist-controls/sc-2303/
description: "Documents the Private Mendix Platform's compliance with the SC-23 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-23 (03) control.

| Control ID | SC-23 (03) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime |

## Control

The information system generates a unique session identifier for each session with organization-defined randomness requirements and recognizes only session identifiers that are system-generated.

### Supplemental Guidance

This control enhancement curtails the ability of adversaries from reusing previously valid session IDs. Employing the concept of randomness in the generation of unique session identifiers helps to protect against brute-force attacks to determine future session identifiers.

The following controls are related to this control:

* SC-13

## Responsibility

### Mendix Responsibility

This is a Mendix responsibility. The control is implemented by the Mendix Runtime.

## Guidance

### Mendix Responsibility

Unique session identifier generation with randomness is built into the Mendix Runtime session management implementation, and is therefore automatic for both Private Mendix Platform and Mendix applications.

The Mendix Runtime ensures:

* Each session receives a unique, cryptographically random session identifier
* Session identifiers are generated using strong randomness to prevent prediction and brute-force attacks
* Only system-generated session identifiers are recognized and accepted by the runtime
* User-supplied or externally-provided session identifiers are rejected
* The randomness and uniqueness of session identifiers meet industry best practices

This behavior is automatic and requires no customer configuration. It prevents adversaries from reusing previously valid session identifiers or predicting future session identifiers through brute-force attacks.

## Proof and Remarks

The following is a screenshot of an active Private Mendix Platform database session table representing unique and random session identifiers:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2303-1.png" class="no-border" >}}

### XASSESSIONID: HttpOnly, Server-Generated Session Cookie

* Documentation: [Mendix Client](https://docs.mendix.com/refguide/mendix-client/)
* Location: **Mendix Client Startup > Launching Mendix Client in a Browser > Cookies**
* Anchor: `#cookies` (within the Mendix Client page)

The cookie table explicitly documents XASSESSIONID as:

* Source: Runtime (that is, generated server-side by the Mendix Runtime, not by the client)
* HttpOnly: true — inaccessible to JavaScript, preventing client-side session ID theft or
manipulation
* Purpose: "Holds the ID of the user's session"
* Duration: Session timeout (standard) or 1 year (offline sessions)

The fact that XASSESSIONID is Runtime-sourced and HttpOnly is direct evidence that only the system generates session identifiers — clients cannot inject or manipulate session ID values. This
satisfies the NIST requirement that "only session identifiers that are system-generated" are
recognized.

### Session Identifier Naming Configuration (No External Assignment)

* Documentation: [commendixcoreSessionIdCookieName](/refguide/custom-settings/#commendixcoreSessionIdCookieName)
* Location: **General Runtime Settings > com.mendix.core.SessionIdCookieName**

The setting only controls the cookie name (default: XASSESSIONID), not the session ID value. There is no setting that allows external parties to specify, seed, or influence the session identifier
value. The runtime generates the session ID value internally — the cookie name is the only
configurable element. This architectural constraint enforces system-only session ID generation.

### Session Persistence and Cluster-Wide Uniqueness

* Documentation: [Clustered Mendix Runtime](/refguide/clustered-mendix-runtime/)
* Section: Session Handling in Clustered Environments

Sessions are always persisted in the database. In a clustered Private Mendix Platform deployment (multiple runtime pods), sessions are stored in the shared PostgreSQL database. This architecture requires each session identifier to be globally unique across all pods — any collision would result in a session conflict visible at the database level. The caching behavior (`SessionValidationTimeout`, default 30 seconds) confirms that session IDs are validated against the authoritative database store, not just local node memory. This design enforces uniqueness as a hard database constraint.

### FIPS 140-2 Mode: Cryptographic Randomness for Session ID Generation

[SC-13](/private-mendix-platform/nist-controls/sc-13/) confirms that `fips_enabled: 1` across all Mendix components including the Mendix Runtime. When FIPS 140-2 mode is active in the JVM, Java's SecureRandom is automatically bound to a FIPS-validated Deterministic Random Bit Generator (DRBG). Any session ID generated by the Runtime under FIPS mode is therefore produced using FIPS-validated cryptographic randomness. This directly satisfies the NIST SC-23(3) requirement for organization-defined randomness requirements — in a FedRAMP Moderate context, FIPS 140-2 validated randomness is the required standard.

SC-13 lists the Runtime as FIPS-capable: *Mendix Runtime – Executes applications with
FIPS-compliant cryptography for data at rest, data in transit, and digital signatures.*

### Session Deletion and Lifecycle (Only System-Generated IDs Accepted)

* Documentation: [Session Deletion](/refguide/session-management/#session-deletion)
* Location: **Session Management > Session Deletion**

Sessions are tracked server-side and deleted by the runtime. The server-side tracking model means the runtime is the sole authority on which session IDs exist and are valid. When a session is deleted (logout, timeout, explicit deletion), that session ID becomes immediately invalid. There is no mechanism by which a client could present a self-generated or recycled session ID and have it accepted, because validity is checked against the server-side session store.

### Session Timeout Controls Enforce Temporal Uniqueness

* Documentation: [Session Timeout](/refguide/custom-settings/#SessionTimeout)
* Location: **General Runtime Settings > SessionTimeout, AbsoluteSessionTimeout,
SessionValidationTimeout**

* `SessionTimeout` (default 10 min): Sessions expire after inactivity. Expired session IDs are
invalidated and cannot be reused.
* `AbsoluteSessionTimeout` (introduced Mendix 11.4.0): Regardless of activity, sessions are
invalidated after a hard time limit — preventing indefinite reuse of any session identifier.
* `SessionValidationTimeout` (default 30 sec): Cross-node session cache lifetime. Limits the
window in which an invalidated session ID could still be served from a node cache.
Together these settings prevent session ID reuse — a previously valid identifier becomes
permanently invalid after expiry, satisfying the supplemental guidance goal to curtail
adversaries from reusing previously valid session IDs.

### Admin: Concurrent Session Enforcement per User

* Documentation: [Private Mendix Platform - System Admin](https://docs.mendix.com/private-mendix-platform/reference-guide/admin/system/#preferences-1)
* Location: Admin Reference Guide → System → Preferences

Private Mendix Platform adds an admin-configurable layer on top of Runtime session management:

* `Maximum Concurrent Sessions Per User Account` — "if set to 0, logging in while another session is running ends the previous session and logs the user off" This setting, when configured, actively invalidates existing session IDs when a new session is created — ensuring that old session identifiers cannot persist alongside new ones. This is a PMP-specific control that augments the Runtime's uniqueness guarantee.

### Authentication Token: Additional HttpOnly Cryptographic Token

* Documentation: [Mendix Client](https://docs.mendix.com/refguide/mendix-client/)
* Section: Cookies table > `authtoken` cookie

In addition to `XASSESSIONID`, the Runtime issues a separate `authtoken` cookie:

* Source: Runtime
* HttpOnly: `true`
* Duration: Token expiration period

This is a second server-generated cryptographic identifier stored separately from the session ID, used for long-lived authentication persistence. Both tokens are Runtime-generated, HttpOnly, and serve independent purposes — XASSESSIONID for the current session, authtoken for persistent authentication. This layered, server-generated approach is consistent with the SC-23(3) requirement for system-generated identifiers.
