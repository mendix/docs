---
title: "네트워크 타임아웃"
url: /refguide/mobile/building-efficient-mobile-apps/network-timeout/
weight: 81
description: "느린 네트워크 환경을 처리하기 위해 Mendix 모바일 앱에서 네트워크 요청 타임아웃을 구성하는 방법을 설명합니다."
aliases:
    - /refguide/mobile/network-timeout/
---

## Introduction

Network request timeout is a crucial configuration parameter for mobile applications that helps handle slow or unreliable network conditions. Setting appropriate timeout values ensures the following:

* Better app responsiveness
* Enhanced user experience
* Proper error handling during network issues

## Default Timeout

The default timeout value for network requests in Mendix mobile applications is 60000 milliseconds (60 seconds).

## Excluded Network Requests

Exclusions ensure that complex operations (like data synchronization and server-side processing) can complete without interference from the general timeout settings.

The following operations are excluded from the configured timeout settings:

* **Data Synchronization Operations** — all `synchronize_objects` calls
* **Microflow Runtime Operations** — all `runtimeOperation` calls
