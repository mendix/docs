---
title: "Troubleshooting"
url: /refguide/troubleshooting/
weight: 10
category: "Java Programming"
description: "Lists the problematic JAR files and the known workarounds."
tags: ["studio pro"]
# See Jira issue IDS-807, compatibility list might need update
---

## JAR Compatibility List

There are known compatibility limitations regarding JAR files in the `<app path>/userlib` directory. This page lists the problematic JAR files and the known workarounds.

| JAR File | Exception in the Log | Workaround |
| --- | --- | --- |
| *xml-apis.jar* | *java.util.concurrent.ExecutionException: Boxed Error or java.lang.NoClassDefFoundError: org/w3c/dom/Document* | Use an alternative *xml-apis.jar*, which you can [download here](/attachments/refguide/java-programming/troubleshooting/16844051.jar). |
| *servlet-api.jar* | *java.lang.LinkageError: javax/servlet/http/HttpServletRequest* | Remove *servlet-api.jar* from the *userlib* directory. |
