---
title: "AWS Authentication"
url: /appstore/modules/aws/aws-authentication/
description: "Use the AWS Authentication connector to securely authenticate your Mendix app with an AWS service. This connector is required for all platform-supported AWS connectors. You can also use it if you want to build your own AWS connectors."
weight: 10
aliases:
    - /appstore/connectors/aws-authentication/
    - /appstore/connectors/aws/aws-authentication/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [AWS Authentication](https://marketplace.mendix.com/link/component/120333) connector provides a way to authenticate on AWS for other compatible AWS connectors. This includes [connectors supported by Mendix](/appstore/aws-modules/), as well as connectors developed by members of the Mendix community. If you want to develop your own AWS connector, you can use the AWS Authentication connector as a ready and reliable way to authenticate with AWS services, instead of developing an authentication method from scratch.

{{% alert color="info" %}}
This document describes the process of configuring the AWS Authentication connector from the perspective of a developer building their own community-supported connector. If you use a [platform-supported AWS connector](/appstore/aws-modules/), some aspects of the process are simplified. The following sections make a note of those differences where relevant.
{{% /alert %}}

### Typical Use Cases

AWS Authentication gives you the tools needed to authenticate your app with AWS services. It is a prerequisite for platform-supported AWS connectors, and may be required by community-supported connectors as well.

The AWS Authentication connector gives your app the ability to use the following types of AWS credentials:

* [Temporary credentials](https://aws.amazon.com/blogs/security/extend-aws-iam-roles-to-workloads-outside-of-aws-with-iam-roles-anywhere/) - This type of credentials is valid for a limited time, for example, 1 hour. Because they are temporary, they are the recommended secure solution for most use cases. As a best practice, use temporary credentials to authenticate.
* [Static credentials](https://docs.aws.amazon.com/general/latest/gr/root-vs-iam.html) - These are static IAM credentials that are valid indefinitely. As a best practice, it is recommended to use temporary credentials. However, you may want to use them to quickly test your connector, create a demo, or in cases where you are not able to set up and configure temporary credentials.
* [Signature version 4 headers](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) - These credentials represent an advanced use case. You may use them together with temporary or static credentials to sign your request, for example, while calling the API without using AWS SDK. Some compatible AWS connectors may explicitly require this type of authentication.

You can implement the above authentication types by means of adding a corresponding activity to the microflow that requires AWS authentication (for example, in order to connect to Amazon Dynamo DB and retrieve specific information from a table). Each activity returns a Credentials object, which is then used for authentication.

{{% alert color="info" %}}
If you plan to use AWS Authentication with a [platform-supported AWS connector](/appstore/aws-modules/), refer to the documentation provided with the connector for more information about the required authentication type.
{{% /alert %}}

### Example

{{< youtube b3uQONB3yoY >}}

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace. While obtaining temporary and static credentials through this connector is free, using these credentials with other AWS Mendix Marketplace modules may incur usage costs. For more information, refer to the AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Prerequisites {#prerequisites}

Before you can use the AWS Authentication connector, you must first configure the required setting in AWS. Depending on the authentication type that you plan to use, you may need to prepare the following items:

| Item | Required for | Notes |
| --- | --- | --- |
| [IAM access key ID, secret access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey) | Static credentials, signature version 4 headers | |
| [IAM Roles Anywhere](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html) | Temporary credentials, signature version 4 headers | When configuring IAM Roles Anywhere, you must provide a certificate that acts as a trust anchor. The same certificate is later used as the client certificate in the Mendix Portal. The certificate must use either RSA or EC as the algorithm. The type of the certificate must be PKCS12. |

{{% alert color="info" %}}
To configure the above prerequisites, you must have an IAM user with specific permissions. Those permissions may vary depending on the connector with which you want to use AWS Authentication. In general, the user should have the minimum access required to perform the functions of the connector.

If you plan to use AWS Authentication with a [platform-supported AWS connector](/appstore/marketplace-content-support/#category), refer to the documentation provided with the connector for more information about the required permissions.
{{% /alert %}}

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the AWS Authentication connector into your app.

## Usage

After you install the connector, you can find it in the **App Explorer**, in the **AWSAuthentication** section. The connector provides the required domain model, activities, and constants that you can use to authenticate your app in AWS. There are three microflow operations: **GetStaticCredentials** and **GetTemporaryCredentials** for the two basic authentication methods, and **GetSigV4Headers** for signature version 4 headers. For more information about implementing each authentication mechanism, refer to the following sections:

* [Temporary credentials](#session)
* [Static credentials](#static)
* [Signature version 4 headers](#signature-v4-headers)

{{% alert color="info" %}}
In general, temporary credentials are the recommended authentication method for use with your production app. Static credentials are recommended for test or demo environments. Signature version 4 headers cover more advanced use cases. For example, you can use them to supplement temporary or static credentials with custom code.
{{% /alert %}}

### Implementing Temporary Credentials {#session}

Temporary credentials use Amazon IAM Roles Anywhere to assume an AWS Role. IAM Roles Anywhere is used to create a session token valid for a specific duration. The default duration is one hour. This is the recommended authentication method for most use cases.

You can implement temporary credentials in one of the following ways:

* By using the **GetTemporaryCredentials** microflow in Studio Pro. For more information, see [Generating AWS Credentials in Studio Pro](#credentials-studio-pro).
* By using credentials generated outside of Studio Pro, for example, through the AWS command-line interface. For more information, see [Using Credentials Generated Outside of Studio Pro](#credentials-cli).

#### Generating AWS Credentials in Studio Pro {#credentials-studio-pro}

To generate temporary credentials for your app directly from Mendix Studio Pro, first add a client certificate in the Deployment Portal or to a local configuration, and then add the **GetTemporaryCredentials** microflow to a microflow in Studio Pro.

##### Adding a Client Certificate in the Mendix Portal

When creating a trust anchor in Amazon IAM Roles Anywhere, you must provide a [certificate](#prerequisites) that acts as the trust anchor. You must then add the same certificate as the client certificate in the Mendix Portal.

To add the certificate, perform the following steps:

1. Log in to [Apps](https://sprintr.home.mendix.com/), and then select your app.
2. Click **Environments**, and then click **Details** by the specific environment to open the [Environment Details](/developerportal/deploy/environments-details/#network-tab) page.
3. In the **Network** tab, in the **Outgoing Connections Certificates** section, add the client certificate that you used to create a trust anchor in Roles Anywhere.
4. From the list, select the certificate that you added, and then click **Details**.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/ongoing-connections-certificate.png" class="no-border" >}}

5. Click **New**.
6. In the **Details** dialog box, in the **Web Service Call name** field, enter an identifier for the certificate, for example, *MY_S3*.
    The client certificate identifier is used as input when you create the temporary credentials.
   {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/identifier.png" class="no-border" >}}

The client certificate that you added now shows as **Currently enabled**.

{{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/certificate-currently-enabled.png" class="no-border" >}}

#### Configuring the Temporary Credentials Connection Details in the Mendix Portal {#configure-credentials}

1. Log in to [Apps](https://sprintr.home.mendix.com/), and then select your app.
2. Click **Environments**, and then click **Details** by the specific environment to open the [Environment Details](/developerportal/deploy/environments-details/#network-tab) page.
3. In the **Model Options** tab, in the **Constants** section, select the constant from the table below and click **Edit**.
   
   | Parameter | Value |
   | --- | --- |
   | **AWSAuthentication.ClientCertificateID** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
   | **AWSAuthentication.Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the temporary credentials expires |
   | **AWSAuthentication.ProfileARN** | ARN of the profile [created in IAM Roles Anywhere](#prerequisites) |
   | **AWSAuthentication.RoleARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
   | **AWSAuthentication.SessionName** | An identifier for the session |
   | **AWSAuthentication.TrustAnchorARN** | ARN of the trust anchor [created in IAM Roles Anywhere](#prerequisites) |

   The image below shows an example:

   {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/devportal-edit-constant.png" class="no-border" >}}

4. Fill out the **New Value** field and click **Save**.
5. After setting all constants, restart the environment in order to apply the new constant values.

##### Using the GetTemporaryCredentials Microflow in Studio Pro

After enabling the certificate, you can now configure the microflow that authenticates your session in AWS. You can do this by adding the **GetTemporaryCredentials** microflow to a microflow.

1. Open your app in Studio Pro.
2. Create or edit the microflow that requires AWS authentication.
3. Drag a **GetTemporaryCredentials** activity from the **Toolbox** into the work area of the microflow.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/toolbox-temporary.png" class="no-border" >}}

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/microflow-temporary.png" class="no-border" >}}

4. Select the **AWSRegion** parameter and click **Edit parameter value**.
5. Select **Expression** and enter the corresponding AWS region from the enumeration **ENUM_Region**. Then click **OK**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/set-awsregion-param.png" class="no-border" >}}

6. Click **OK**. The activity returns a **TemporaryCredentials** object that provides the required AWS authentication credentials for your microflow.
7. Continue the configuration by adding more activities to your microflow, as required by your specific use case.

##### Configuring the Local Setup

To run the AWS Authentication connector locally using Studio Pro, you must add the client certificate as a runtime configuration in Studio Pro.

1. In Studio Pro, open the **App Settings** dialog box, and then go to the **Configurations** tab.
2. Create a new configuration or edit an existing configuration.
3. Go to the **Custom** tab for the configuration, and add the **ClientCertificates** and **ClientCertificatePasswords** runtime settings.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/custom-settings.png" class="no-border" >}}

   {{% alert color="info" %}}For more information, see [Runtime Customization](/refguide/custom-settings/).{{% /alert %}}

4. In the **Constants** tab, configure the constants of the temporary credentials' connection details.
5. Make sure that the value of **Client certificate ID** correctly indicates the position of the certificate in the runtime setting. For example, if three certificates have been added in the runtime setting, and the client certificate that you want to use is the second one, then set **Client certificate ID** to *2*. 
6. Click **OK**.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/local-config-session-credentials-constants.png" class="no-border" >}}

#### Using Credentials Generated Outside of Studio Pro {#credentials-cli}

If you have credentials that have been generated without the help of the **GetTemporaryCredentials** action, for example through the AWS command line interface, you can use them in your app in the following manner:

1. Create a **TemporaryCredentials** object with the following parameters:
    * **AccessKeyId** - your IAM access key 
    * **SecretAccesskey** - your secret access key
    * **Token** - your token
    * **Expiration** - the date and time when the credentials expire. When using credentials generated outside of Studio-Pro, the AWS Authentication Connector cannot assume the IAM Role again after expiration.

You can then use the above as a valid set of credentials.

### Implementing Static Credentials {#static}

Static credentials use a mechanism with an access key and a secret. The credentials do not have a specific validity duration, so they do not expire automatically. This authentication method is recommended for test and demo apps, or in cases where you are not able to set up and configure temporary credentials.

To create static credentials with the **GetStaticCredentials** activity in your app, perform the following steps:

1. Open your app in Studio Pro.
2. Create or edit the microflow that requires AWS authentication.
3. Drag the **GetStaticCredentials** microflow from the **Toolbox** into the work area of the microflow.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/toolbox-static.png" class="no-border" >}}

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/microflow-static.png" class="no-border" >}}

4. Create a new **Configuration** in the **Settings** of your app.
5. In the **Constants** tab, add the **Access key ID** and **Secret access key** that you [obtained from the AWS Console](#prerequisites) as **AWSAuthentication.AccessKey** and **AWSAuthentication.SecretAccessKey** respectively. You can decide how to provide them securely in your app.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/local-config-static-credentials-constants.png" class="no-border" >}}

    The activity returns a **Credentials** object that provides the required AWS authentication credentials for your microflow.

6. Continue the configuration by adding more activities to your microflow.

### Implementing Signature Version 4 Headers {#signature-v4-headers}

Using signature version 4 headers grants you full control over the contents of the request that you send to AWS. You may want to use this method to authenticate a temporary or static credentials request without using the AWS console or SDK, for example, if the language you are using does not have SDK yet. For more information about signature version 4 headers, see [Signing AWS API requests](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) in the AWS documentation.

This authentication method is suitable for advanced use cases. If your use case can be fulfilled with temporary credentials authentication alone, consider using that method instead.

To help you work with signature version 4 headers, the following sections of this document contains a description of the [domain model](#domain-model) and [microflow action](#getsigv4headers) that you can use, as well as an [example microflow](#microflow) configuration.

#### Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

You can view the domain model in the **App Explorer** in the **AWS Authentication** > **Domain model** section. The following entities are relevant for signature version 4 headers authentication:

* `SigV4Builder` - This entity contains the parameters required to sign the request. It has a one-to-one association with the `Credentials` entity, which contains the parameters corresponding to the [access key ID and secret access key](#prerequisites).
    
    | Name | Description |
    | --- | --- |
    | `ServiceName` | The service that you want to connect to, for example, S3 |
    | `HTTPMethod` | HTTP methods, for example, `GET` |
    | `URIPrefix` | Optional prefix for services that require a prefix in their endpoint URL; leave blank if your service does not require a prefix |
    | `Region` | The AWS region where your service resides |
    | `Path` | URI from domain to query; enter `\` to leave blank |
    | `RequestBody` | The body of your request; signature version 4 headers require that the request body as part of the signing process, before you make the actual call. |
    | `EndpointURL` | The URL of the top-level domain. For many services that would be amazonaws.com. For Lambda this can also be `on.aws`. If not specified will default to `amazonaws.com`. |
    | `SubDomain` | Services use a sub-domain in their host. The sub-domain name varies by service; for example, for Amazon S3, it is the same as the service name, while for Lambda it is `lambda-url`. Leave empty if it is the same as the **ServiceName**. |
    
* `SigV4Parameter` - This entity contains the key-value pairs which you can use as REST headers, or as `QueryParameters`. The key-value pairs can be used to create the headers, for example, `Content-JSON`, or to define the contents of the query, for example, the `Action` parameter in EC2 calls.
* `SigV4Headers` - This entity is the output of the GetSigV4Headers Java action. It is used to create request headers in the custom HTTP REST call which you make towards AWS.

#### `GetSigV4Headers` Microflow Action {#getsigv4headers}

The `GetSigV4Headers` microflow action computes and provides the signed headers. It takes the following parameters as input:

* A `SigV4Builder` object
* A `Credentials` object
* Optional: `SigV4HeaderParameterList` - list of type `SigV4Parameter` that provides a list of request headers
* Optional: `SigV4QueryParameterList` - list of type `SigV4Parameter` that provides a list of query parameters

The output of the action is a `SigV4Headers` object.

{{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/sigv4action.png" class="no-border" >}}

#### Example Microflow {#microflow}

The following microflow shows an example implementation of signature version 4 headers authentication.

{{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/sigv4microflow.png" class="no-border" >}}

In this example, a `SigV4Builder` object and a `Credentials` object are passed as input parameters. In the microflow, two lists of the type `SigV4Parameter` are created, one for the request headers, and one for the query parameters.

These entities are used as input for the `GetSigV4Headers` microflow action, which returns a response in the form of a `SigV4Header` entity.

The values set in the response entity are used as request headers in the REST call to AWS.

### Customizing HTTP Client Configuration {#customize-client-config}

The platform-supported AWS connectors have been developed using the AWS Software Development Kit (SDK) instead of the native Mendix Call REST service activity. This approach prioritizes efficiency in handling AWS integrations. It eliminates the complexity of customizing HTTP headers and signing requests, as the SDK automates these tasks. Additionally, it offers built-in features like retry logic and throttling management.

The AWS Authentication Connector offers the ability to customize HTTP client configurations and supports the following use cases:

* Extending the timeout settings to accommodate operations that might run longer, such as AWS Lambda functions.
* Customizing the retry mechanism to alter the behavior for how the client recovers from failed AWS service requests.
* Overriding invocation endpoints (required for use cases such as testing locally), integrating with a self-hosted instance of AWS service, and invoking VPC endpoints (private cloud).

#### Overriding the Default HTTP Configuration

All platform-supported AWS Connectors have request entities that inherit from the **AbstractRequest** entity from AWS Authentication. To override the default HTTP configuration, perform the following steps:

1. Create a **BasicClientConfig** (or a specialization) object.
2. Set the attributes in the objects that you created.
3. Associate the object with the request. 
4. Invoke the connector action.

##### Domain Model Entities

The following are the relevant entities in the domain model for customizing HTTP client configurations:

* `AbstractRequest` - This entity is the generalization of all request entities of platform-supported AWS connectors.
* `BasicClientConfig` - This entity provides basic client customization settings: `APITimeOutInMs` and `EndpointUrl`. To use these settings, associate a `BasicClientConfig` object to your request object.
* `SDKClientConfig` - This entity is required when adding advanced client customization settings. It points to the `AbstractRetryPolicy` and `AbstractHttpConfig` entities, whose specializations can be used to add advanced settings. `APITimeOutInMs` can be set directly on this entity. 
* `AbstractRetryPolicy` - Use one of this entities specializations to specify a retry policy.
* `NumberOfRetryPolicy` - This entity can be used to configure the number of retries.
* `NoRetryPolicy` - Including this entity sets the retry behavior to *never retry*.
* `AbstractHttpConfig` - Use one of this entities to override the values of a specific HttpClient.
* `ApacheHttpClient` - This entity can be used to override the settings of the ApacheHttpClient. More Information: [Apache based HTTP Client](https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/http-configuration-apache.html).
* `UrlHttpClient` - This entity can be used to use the URL-Connection based HttpClient and override it's settings. More Information: [URL-Connection based HTTP Client](https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/http-configuration-url.html).

#### Example Microflow

The following figure shows a microflow which demonstrates how a **BasicClientConfig** object can be added to a InvokeLambda request to customize the Timeout Setting:

{{< figure src="/attachments/appstore/platform-supported-content/modules/aws-authentication/Auth-basic-client-config.png" class="no-border" >}}

### Validating Credentials {#validate-credentials}

To confirm that an application has been configured correctly with a valid set of credentials, the `Validate Credentials` microflow action can be used. It performs a [GetCallerIdentity](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity.html) call to check if the provided credentials are valid AWS credentials.

It takes the following parameters as input:

* A `Credentials` object
* A `ENUM_Region` enumeration value

The output is a boolean indicating whether the credentials are valid. 

## Read More

* [Securely Connect with the AWS Authentication Connector](https://www.mendix.com/blog/securely-connect-with-the-aws-authentication-connector/)
* [AWS Authentication: New Features in the Connector Suite](https://www.mendix.com/blog/aws-authentication-new-features-in-the-connector-suite/)
