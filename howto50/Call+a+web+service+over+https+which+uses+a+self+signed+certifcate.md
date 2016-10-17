---
title: "Call a web service over https which uses a self signed certifcate"
category: "howto50"
space: "Mendix 5 How-to's"
---
## Description

This section describes how to configure your deployment server such that a web service can be called over https which uses a self signed certificate, or a certificate signed by an internal Certificate Authority of e.g. another company you call web services at.

## Instructions

Calling a web service over https which uses a self signed certificate does not automatically work in Java. Java only trusts Certificate Authorities (CAs) which are present in its trust store. To solve this problem one can make a copy of the Java trust store and add the self signed certificate, or the certificate of the internal CA to this trust store.

The following example imports a self signed Mendix certificate into a copy of the Java trust store (default password is 'changeit'). Replace "type a description here" with a short description of the certificate you're importing.

```bash
exampleusr@servername:~ 4-$ cd ~/.m2ee
exampleusr@servername:~ 4-$ cp /usr/lib/jvm/java-6-sun/jre/lib/security/cacerts ./truststore
exampleusr@servername:~ 4-$ keytool -import -alias "type a description here" -keystore truststore  -file cert_to_import.crt
Enter keystore password:
Trust this certificate? [no]:  yes
Certificate was added to keystore

```

This custom trust store should be referenced in the m2ee.yaml file (located in the .m2ee directory of the home dir of your user) by adding the following line to the javaopts:

```bash
-Djavax.net.ssl.trustStore=/home/exampleusr/.m2ee/truststore

```

After restarting the application it will be ready to call the web service.