---
title: "Troubleshooting"
category: "Java Programming"
tags: ["studio pro"]
---

## JAR Compatibility List

There are some known compatibility issues regarding JAR files in the `<project path>/userlib` directory. This page lists the problematic JAR files and the known workarounds.

| JAR File | Exception in the Log | Workaround |
| --- | --- | --- |
| *xml-apis.jar* | _java.util.concurrent.ExecutionException: Boxed Error or java.lang.NoClassDefFoundError: org/w3c/dom/Document_ | Use an alternative *xml-apis.jar*, which you can [download here](attachments/16714056/16844051.jar). |
| *servlet-api.jar* | _java.lang.LinkageError: javax/servlet/http/HttpServletRequest_ | Remove *servlet-api.jar* from the *userlib* directory. |
