---
title: "Troubleshooting"
category: "refguide5"
space: "Reference Guide 5"
---


## JAR Compatibility List

There are some known compatibility issues regarding JAR files in the <projectpath>/userlib directory. This page lists the problematic JAR files and the known workarounds.

<table><thead><tr><th class="confluenceTh">JAR file</th><th class="confluenceTh">Exception in the log</th><th class="confluenceTh">Workaround</th></tr></thead><tbody><tr><td class="confluenceTd"><strong>xml-apis.jar</strong></td><td class="confluenceTd"><em>java.util.concurrent.ExecutionException: Boxed Error or java.lang.NoClassDefFoundError: org/w3c/dom/Document</em></td><td class="confluenceTd">Use an alternative xml-apis.jar. <a href="attachments/4522375/4751467.jar">Download it here</a>.</td></tr><tr><td class="confluenceTd"><strong>servlet-api.jar</strong></td><td class="confluenceTd"><em>java.lang.LinkageError: javax/servlet/http/HttpServletRequest</em></td><td class="confluenceTd">Remove servlet-api.jar from the userlib directory.</td></tr></tbody></table>