---
title: "Use a Client Certificate"
url: /howto8/integration/use-a-client-certificate/
---

## Introduction

Some services require you to authenticate using a client certificate. This how-to describes how to configure your app to do this.

Let's assume that you already have an app that calls a service. For details on how to configure this, have a look at [How to Consume a REST Service](/howto8/integration/consume-a-rest-service/) or [How to Consume a Simple Web Service](/howto8/integration/consume-a-simple-web-service/).

This how-to teaches you how to do the following:

* Configure to run locally
* Configure in the Mendix Cloud

## Prerequisites

* A PKCS12 certificate file that contains a private key — these files typically have the *.pfx* or *.p12* file extension
* The password to open that file

## Running Locally

To configure the custom settings that are only used when you run your app locally, follow these steps:

1. Open your app in the Modeler and go to **Project** > **Settings**.
2. Click **Edit** to open the **Edit Configuration** dialog box, and select the **Custom** tab.
3. Add two custom settings to specify the paths to the certificates (ClientCertificates) and matching passwords (ClientCertificatePasswords). Also, add a third setting (ClientCertificateUsages) to specify which service should use which certificate if you use more than one certificate in your app.

    Name | Value | Notes
    --- | --- | ---
    ClientCertificates | The paths to the certificate files. | Separate with commas if you have more than one file. Backslashes in the paths should not be doubled.
    ClientCertificatePasswords | The password for each certificate file.  | In the same order as the **ClientCertificates**.
    ClientCertificateUsages **(Optional)** | The description of which files to use for which service, in the format `"ModuleName.WebserviceName": "path"` (for web services) or `"www.server-to-contact.com": "path"` (for REST services). | If you have more than one service to configure, you can separate them with commas. Enclose the whole setting value in braces (`{ }`). Backslashes in the paths must be doubled. In addition, the paths you specify here should all appear in **ClientCertificates**.

This is an example:

```text
{ "Module.WebService1": "D:\\App\\Mx1.pfx", "www.server-to-contact.com": "D:\\App\\Mx2.pfx" }
```

A complete configuration may look like this:

{{< figure src="/attachments/howto8/integration/use-a-client-certificate/example-custom-settings.png" class="no-border" >}}

You can use an empty path for `ClientCertificateUsages` to specify that you do not want to use a client certificate, even when the server accepts one. To do this, you need to add the **Value** `{"<endpoint>":""}` (replace `<endpoint>` with the actual endpoint).

{{% alert color="info" %}}

Be sure to drop `https://` from a URL endpoint.

{{% /alert %}}

The following sample uses client certificate `Mx1.pfx` for `WebService1` and no client certificate for `WebService2`:

```text
{ "Module.WebService1": "D:\\App\\Mx1.pfx", "Module.WebService2": "" }
```

## Running in the Cloud

{{% alert color="info" %}}

You will only be able to follow the steps below if you have the correct access rights for the client certificates.

{{% /alert %}}

To configure client certificates in the Mendix Cloud, follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com/) and go to the **Environments** page for your app.
2. Each environment has its own configuration. Click **Details** next one of the environments.
3. Click **Network** and scroll down to **Certificates for outgoing connections**.
4. Click **Add client certificate**. Upload the certificate files.
5. Only follow these steps if you are using more than one client certificate in your app:<br>
    1. After the files have been uploaded, they appear in the list. Double-click an item in the list.<br>
    1. In the **Pin Client Certificate to Web Services** section of the **Details** screen, you can specify which client certificate belongs to which service:<br>
        * For web services, enter the name of the web service (for example,*ModuleName.WebServiceName*)<br>
        * For REST services, enter the host name of the endpoint (for example, *example.com*)<br>
    1. Close the **Details** screen.<br>

6. Click **Stop application** and then **Start application**.
