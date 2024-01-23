---
title: "Widget CSP Overview"
url: /appstore/widgets/security/content-security-policy/
weight: 20
description: "By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context."
tags: ["security", "headers", "widgets"]
aliases:
    - /howto/front-end/content-security-policy/
---

## 1 Introduction

Currently, certain Mendix pluggable widgets are not fully compliant with strict content security policy (CSP). Some of these widgets require access to third party domains. By allowing access to these domains, these widgets can still follow allowlist CSP.

## 2 Setup

For information on setting up your application's CSP, see the [Content Security Policy](/howto/security/csp/) guide.

## 3 Widgets

The following widgets are not fully compliant with strict CSP. See the widgets' documents below for additional information and setup instructions to enable CSP:

* [Map widget content security policy document](/appstore/widgets/security/content-security-policy/maps-csp)

