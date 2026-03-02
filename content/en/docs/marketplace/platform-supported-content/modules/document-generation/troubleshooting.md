---
title: "PDF Document Generation Troubleshooting"
linktitle: "Troubleshooting"
url: /appstore/modules/document-generation/troubleshooting/
weight: 4
---

## App Environment Registration Issues

If you encounter any issues while registering your app environment, refer to the following table for more details and suggestions on how to resolve them.

| Error | Error message | Description | Suggestion |
|-------|------------------|-------------|------------|
| **Invalid Developer Credentials** | "Invalid developer credentials" | The developer information as provided in the **Email** and **API key** fields is incorrect. | Verify that the provided email address in the **Email** field matches the username in your Mendix developer profile, and also that the API key that is being used is correct and still active. |
| **Invalid App** | <ul><li>"Invalid app"</li></ul><ul><li>"App not found for the given user"</li></ul> | The provided App ID is either incorrect or the developer (based on the **Email** and **API key** fields) does not have access to this app. | Verify that the **App ID** field is correct, and also that the developer account corresponding to the details entered in the **Email** and **API key** fields has access to the given app. |
| **Invalid Application URL** | "Application URL does not match any of the environment URLs" | The app corresponding to the **App ID** field does not contain any environment that matches the URL given in the **Application URL** field. | Verify that the **App ID** and **Application URL** fields are correct. |
| **Invalid Deployment Type** | <ul><li>"Application should be deployed on Mendix Cloud"</li></ul><ul><li>"Deployment type should be Mendix Cloud"</li></ul> | The provided **Application URL** is either incorrect or the chosen **Deployment type** is incorrect for this app. | Verify that the entered **Application URL** is correct and that you have chosen the correct **Deployment type**. |
| **Unable to Reach App** | <ul><li>"Domain verification failed, unable to reach app"</li></ul><ul><li>"Domain verification failed, unable to reach verification endpoint"</li></ul><ul><li>"Domain verification failed, verification endpoint inactive" </li></ul>| The cloud service was unable to reach your app. | Verify that you enabled the `ASu_DocumentGeneration_Initialize` after startup microflow and also allowed access to the DocGen request handler. For more information, refer to the [Enabling the DocGen Request Handler](/appstore/modules/document-generation/installation-configuration/#enable-docgen) section in *PDF Document Generation Installation and Configuration*. |
| **Invalid Token** | "Domain verification failed, invalid token" | The cloud service was able to reach your app, but could not verify that this app is currently trying to register. | Verify that the application URL matches the current environment. |
| **Other Errors** |<ul><li>"Project verification failed"</li></ul><ul><li>"Domain verification failed, invalid response from verification endpoint"</li></ul><ul><li>"Domain verification failed for unknown reason"</li></ul> | An unexpected error occurred. | Verify that your app was not restarted by someone else during the registration process. If not, submit a ticket in the Mendix Support Portal. |

## Module Usage and Runtime Issues {#module-usage-runtime-issues}

In general, we recommend that you perform the following steps if you get any issues during runtime:

1. Temporarily set the log level of `DocumentGeneration` log node to [trace](/refguide/log-levels/#level). This should give more insight at what stage the action fails.
2. Temporarily add the page microflow that is configured in the action to the app navigation, or make it accessible via a button. This can help to verify that the page itself loads correctly, and can for example outline misconfiguration of entity access, widgets, etc. Make sure that you access the page with the same user you provided to the `Generate as user` parameter in the action.

### Exceptions

{{% alert color="info" %}}For module version 1.8.0 and above, errors that occur during the document generation process in the cloud and local service are now sent back to the module. If any error is received, this will cause the module to throw Document Generation specific exceptions.{{% /alert %}}

The following sections contain the exceptions that can possibly occur during the document generation process and the suggested steps to verify the reason.

#### Wait for Content Exception

If you encounter a `DocGenWaitForContentException` exception with error code `DOCGEN_WAIT_FOR_CONTENT_ERROR` while generating a document, refer to the following table for more details and suggestions on how to resolve them.

| Error message                            | Potential reasons                                            |
| ---------------------------------------- | ------------------------------------------------------------ |
| "Failed while waiting for page content." | <ul><li>The required `Enable PDF export` design property is not set to *Yes* for the page you are trying to export to PDF.</li></ul><ul><li>Loading the page failed or took too much time. When this occurs, verify that the page loads successfully within the fixed timeout of 30 seconds and does not trigger any client errors. To verify this, we recommend temporarily adding the page to, for example, the app navigation.</li></ul><ul><li>A widget or add-on is being used in the `index.html` file that performs long polling network requests. This is not supported, since the document generation service waits until there are no more pending network requests.</li></ul> |

#### Navigation Exception

If you encounter a `DocGenNavigationException` exception with error code `DOCGEN_NAVIGATION_ERROR` while generating a document, refer to the following table for more details and suggestions on how to resolve them.

| Error message                                                | Potential reasons                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| "Failed to generate document due to an external redirect to: `https://example.com`." | An external redirect implemented in the `index.html` or a redirect widget, for example, for SSO purposes. Verify and change your implementation accordingly. |
| "Failed to generate document. Access denied and redirected to login page." | A failure occurred when a user logs into the application. Make sure that the module role `User` is assigned to the user who is passed in the `Generate as user` property of the `Generate PDF from page` action. |
| "Failed to generate document. Page microflow could not be executed, check if the configured document user has the applicable access rights." | The configured document user does not have the applicable access rights to run the page microflow. In this case, you can find a warning in the logs mentioning User `<username>` attempted to run the microflow with action name `<page microflow>`, but does not have the required permissions. |
| "Failed to navigate to page due to an error: `<error message>`." | The service was unable to reach the app, for example due to the following reasons: <ul><li>Your app is configured to [restrict access for incoming requests](/developerportal/deploy/access-restrictions/). This is not supported. Also refer to the [Limitations](/appstore/modules/document-generation/#limitations) section in *PDF Document Generation*.</li><li>A timeout or network error occurred. Try again.</li></ul> |
| "Failed to navigate to page due to an invalid response code: `<code>`." | The module rejected the request from the service. Verify the application logs. |

#### Runtime Exception

If you encounter a `DocGenRuntimeException` exception with error code `DOCGEN_RUNTIME_ERROR` while generating a document, refer to the following table for more details and suggestions on how to resolve them.

| Error message                                                | Potential reasons                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| "Failed to export to PDF due to an error: `<error message>`." | The service was unable to export the PDF due to a timeout or memory limitation. This can happen for large or complex documents. Try to reduce the number of widgets inside repeatable widgets as much as possible. |
| "Failed to send result back: `<error message>`."             | The service was unable to send the resulting PDF. This can happen if your document exceeds the maximum file size limit. If this is the case, we recommend compressing high-resolution images to reduce their file size. |

If you encounter a `DocGenRuntimeException` exception with a message that is not mentioned in the table above, we recommend you [submit a support request](/support/submit-support-request/).

#### Polling Exception

If you encounter a `DocGenPollingException` exception while generating a document, this means that the module timed out while waiting for the service to send the resulting PDF. Verify if the application logs contain any other errors and try again.

#### Default Exception

If you encounter a `DocGenException` exception with error code `DOCGEN_UNKNOWN_ERROR` while generating a document, we recommend you [submit a support request](/support/submit-support-request/).

### Rendering/Styling Issues

In case of issues regarding styling, Mendix recommends temporarily adding the page microflow to your app navigation (for details, see step 2 in the [Module Usage and Runtime Issues](#module-usage-runtime-issues) section). This allows you to preview the page in your browser and inspect the applied styles. Mendix recommends using Chrome or Chromium and the [Chrome DevTools](https://developer.chrome.com/docs/devtools/css/) for this, since Chromium is the browser that is used by the document generation service.

If the resulting PDF document only contains a part of the expected content, verify that the layout used for the page does not include a scroll container. Layouts that do include a scroll container, such as **Atlas_Default**, will not work properly.

If the resulting PDF document contains an additional blank page at the end of the document, try to wrap the content in a layout grid.

{{% alert color="warning" %}}
When testing the PDF Document Generation module locally using Chrome or Chromium version 117 or 118, the scaling of your PDF document might be different compared to the document generated from the PDF document generation service in Mendix Cloud. This issue has been fixed in Chrome version 119, we recommend that you update your Chrome version to the latest release if you run into this issue. To guarantee the same result locally as when using our PDF document generation service, we advise using the Chromium version cited in the [Chromium](/appstore/modules/document-generation/installation-configuration/#chromium) section in *PDF Document Generation Installation and Configuration*.
{{% /alert %}}

### Local Service Errors

If you encounter the message "Local service exited with error" in your runtime logs, for example:

```
com.mendix.modules.microflowengine.MicroflowException: com.mendix.systemwideinterfaces.MendixRuntimeException: java.lang.RuntimeException: Local service exited with error
    at DocumentGenerationTest.ACT_TestDocument_WrongLayout (JavaAction : 'Generate PDF from page')
```

We recommend that you temporarily set the log level of the `DocumentGeneration` log node to [trace](/refguide/log-levels/#level). This should give more insight at what stage the action fails.

### Cloud Service Errors

If you encounter the message "Unable to generate document for request `<requestId>`, service response code: 401" in the logs of your cloud environment, the request was rejected by the document generation service. This could be caused by the following reasons:

* The scheduled event **SE_AccessToken_Refresh** is not enabled, which caused the registration to expire. Enable the scheduled event and register the affected app environment again.
* The URL of the app environment does not match the URL that was provided during registration. This could be the case when you requested a change to the URL of your app, or after restoring a database backup from one environment to another. Register the affected app environment (or environments) again.

If you encounter the message "Unable to generate PDF document. Failed to refresh expired access token", the app registration expired and the automatic attempt to refresh the tokens failed. Verify that the scheduled event **SE_AccessToken_Refresh** is enabled and make sure to register the affected app environment(s) again.

If you encounter the message "No configuration object available. For use in Mendix Cloud, your app environment needs to be registered first" or "Unable to generate PDF document. For use in Mendix Cloud, your app environment needs to be registered first", follow the steps for [registering your app environments](/appstore/modules/document-generation/installation-configuration/#register-app).

For details on registering app environments, refer to the [Registering Your App Environments](/appstore/modules/document-generation/installation-configuration/#register-app) section in *PDF Document Generation Installation and Configuration*.

### Timeout Errors

If you encounter the message "Failed to load page: TimeoutError: waiting for selector `#content .document-content` failed: timeout 30000ms exceeded" in your runtime logs, this means that a timeout occurred while the browser was waiting for the configured page to finish loading. This could be caused by the following reasons:

* The required **Enable PDF export** design property is not set to **Yes** for the page you are trying to export to PDF.
* Loading the page failed or took too much time. When this occurs, verify that the page loads successfully within the fixed timeout of 30 seconds and does not trigger any client errors. To verify this, we recommend temporarily adding the page to, for example, the app navigation.
* A widget or add-on is being used in the `index.html` file that performs long polling network requests. This is not supported, since the document generation service waits until there are no more pending network requests.
* The configured service user does not have the applicable access rights to run the page microflow. In this case, there should be a warning in the logs mentioning User `<username>` attempted to run the microflow with action name `<page microflow>`, but does not have the required permissions.
* Make sure that the module role `User` is assigned to the user who is passed in the `Generate as user` property of the `Generate PDF from page` action.
