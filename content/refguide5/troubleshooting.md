---
title: "Troubleshooting"
category: "Java Programming"
---


## JAR Compatibility List

There are some known compatibility issues regarding JAR files in the <projectpath>/userlib directory. This page lists the problematic JAR files and the known workarounds.

JAR file            | Exception in the log                                                                                           | Workaround
------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------
**xml-apis.jar**    | _java.util.concurrent.ExecutionException: Boxed Error or java.lang.NoClassDefFoundError: org/w3c/dom/Document_ | Use an alternative xml-apis.jar. [Download it here](attachments/4522375/4751467.jar).
**servlet-api.jar** | _java.lang.LinkageError: javax/servlet/http/HttpServletRequest_                                                | Remove servlet-api.jar from the userlib directory.
