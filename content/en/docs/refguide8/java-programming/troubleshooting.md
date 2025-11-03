---
title: "Troubleshooting"
url: /refguide8/troubleshooting/
---

## JAR Compatibility List

There are some known compatibility issues regarding JAR files in the `<project path>/userlib` directory. This page lists the problematic JAR files and the known workarounds.

| JAR File | Exception in the Log | Workaround |
| --- | --- | --- |
| *xml-apis.jar* | *java.util.concurrent.ExecutionException: Boxed Error or java.lang.NoClassDefFoundError: org/w3c/dom/Document* | Use an alternative *xml-apis.jar*, which you can [download here](/attachments/refguide8/java-programming/troubleshooting/16844051.jar). |
| *servlet-api.jar* | *java.lang.LinkageError: javax/servlet/http/HttpServletRequest* | Remove *servlet-api.jar* from the *userlib* directory. |
