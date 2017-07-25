---
title: "Single Sign-On API"
category: "API Documentation"
---


## Connecting to Mendix OpenID

The Mendix Single Sign-On system is based on the [OpenID 2.0 protocol](http://openid.net/specs/openid-authentication-2_0.html) and any AppCloud-Powered Mendix application will automatically use this single sign-on system. Non-Mendix apps can be integrated with the Mendix Single Sign-On server as well by using one of the many available implementations. An extensive list of existing implementations can be found [here](http://openid.net/developers/libraries/obsolete/). The OP Endpoint to connect to is [https://mxid2.mendixcloud.com/mxid2/discover](https://mxid2.mendixcloud.com/mxid2/discover). Note that all Mendix OpenIDs (OP Identifiers) start with `https://mxid2.mendixcloud.com/mxid2/`.

## Realm Verification

Realm verification is required from all Relying parties (clients), as [recommended](http://openid.net/specs/openid-authentication-2_0.html#rp_discovery), so your application needs to be accessible by the Mendix OpenID server on a verified HTTPS domain while offering valid [discovery information](http://openid.net/specs/openid-authentication-2_0.html#rp_discovery). Realm verification errors (`"Realm verification failed (9)"`) will occur if this is not the case.

## Extensions

Currently no OpenID extensions (like OpenID AX) are supported to retrieve profile data.

## Optional arguments

The following optional query parameters can be sent as part of the authentication requests:

*   _mxid2.continuation_ : The URL the user should be redirected to after the user has successfully been authenticated.
*   _mxid2.logoffcallback_ : If provided, this URL will be invoked once using a GET request by the Mendix Single Sign-On server to indicate that the user has logged out globally. This request will be invoked with query parameters: The _fingerprint_ containing the base64 encoding of the user-agent string of the browser, and the _openid_ of the user that has logged out. His/her session could be destroyed locally if desired.
