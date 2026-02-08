---
title: "문제 해결"
url: /refguide9/troubleshooting/
weight: 1
description: "문제가 있는 JAR 파일과 알려진 해결 방법을 나열합니다."
# See Jira issue IDS-807, compatibility list might need update
---

## JAR 호환성 목록

`<app path>/userlib` 디렉터리의 JAR 파일에 관해 알려진 호환성 제한이 있습니다. 이 페이지에서는 문제가 있는 JAR 파일과 알려진 해결 방법을 나열합니다.

| JAR 파일 | 로그의 예외 | 해결 방법 |
| --- | --- | --- |
| *xml-apis.jar* | *java.util.concurrent.ExecutionException: Boxed Error or java.lang.NoClassDefFoundError: org/w3c/dom/Document* | 대체 *xml-apis.jar*을 사용하십시오. [여기에서 다운로드](/attachments/refguide9/java-programming/troubleshooting/16844051.jar)할 수 있습니다. |
| *servlet-api.jar* | *java.lang.LinkageError: javax/servlet/http/HttpServletRequest* | *userlib* 디렉터리에서 *servlet-api.jar*을 제거하십시오. |
