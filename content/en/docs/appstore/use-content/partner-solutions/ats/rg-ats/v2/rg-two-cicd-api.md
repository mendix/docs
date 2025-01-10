---
title: "CI/CD API"
url: /appstore/partner-solutions/ats/rg-two-cicd-api/
---

## CI/CD API

With the CI/CD API, you can easily integrate ATS into your automated deployment workflow. You can run a test according to predefined templates and then query its status and result. Additionally, you can rerun the test cases that were not passed for a failed test suite. For more information on how to integrate ATS into your CI/CD workflow, see the [How-To ATS CI/CD](/appstore/partner-solutions/ats/ht-two-ats-and-ci-cd/).

{{% alert color="warning" %}}
**For on-premises implementations** – to use the CI/CD API, you need a special web service user, which ATS uses for authentication. Please contact [CLEVR Support](https://www.CLEVR.com/contact/) if you are having problems with this.
{{% /alert %}}

## CI/CD Templates

CI/CD Templates are predefined configurations for a remote job run. The remote job run is triggered via the run job web service. Every CI/CD Template consists of the job configuration, an associated test case or test suite, and a generated unique ID. This ID identifies the CI/CD template. An overview of all the existing CI/CD Templates is found on the **CI/CD Templates tab** on the Test Runs page.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-cicd-api/CICD_JobTemplateOverview.png" class="no-border" >}}

| Name | Description |
|------|-------------|
| Type Icon | Test case, test suite. |
| Name | Test case name, test suite name, or custom name. |
| Browser | Firefox, Chrome. |
| UID | The ID that identifies the CI/CD Template. |

You can add new CI/CD Templates by clicking **Add Testcase** or **Add Testsuite**. A dialog box will open where you select the test case or test suite for the CI/CD Template. After that, the **New CI/CD Template** dialog box opens.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-cicd-api/CICD_JobTemplateNewEdit.png" class="no-border" >}}

Configure the following options in the **New CI/CD Template** dialog box:

| Name | Description |
|------|-------------|
| Name | By default, the name of the test case/test suite. Customizable. |
| Environment | The environment to test. |
| Selenium Hub | The Selenium hub where the test is completed. |
| Browser | The browser that is used for the test: Firefox or Chrome.|

For supported Selenium hubs, like BrowserStack, further options are available. For more details, see [Supported Selenium Hub Provider](/appstore/partner-solutions/ats/rg-two-supported-selenium-hub-provider/).

## API {#api}

The ATS CI/CD API is based on the SOAP web service protocol. Currently there are three services available: **Run Job**, **Get Job Status**, and **RerunNotPassed**. The following sections show the structures of the request-and-response messages of these services.

{{% alert color="info" %}}
SOAP is an ordered protocol, so all the fields must appear in the exact order as they are given here.
{{% /alert %}}

{{% alert color="warning" %}}
SOAP is an ordered protocol, so all the fields must appear in the exact order as they are given here.
{{% /alert %}}

### Run Job

Starts a new job based on a CI/CD template and returns the UUID of the job which can be used to query the result.

#### URL

```text
https://ats100.mendixcloud.com/ws/RunJob
```

#### Request

You must include the following information in the request:

| Name | Description |
| --- | --- |
| username | ATSAPIUser |
| password | ATSAPIUser |
| AppAPIToken | The key for the CI/CD API. Generated on the **App Settings** page. |
| AppID | The ID of your Mendix app. |
| JobTemplateID | The unique ID of the CI/CD Template. |

##### Example

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Header>
    <tns:authentication>
      <username>ATSAPIUser</username>
      <password>ATSAPIUser</password>
    </tns:authentication>
  </soap:Header>
  <soap:Body>
    <tns:RunJob>
      <TestRun>
        <AppAPIToken>exampleString</AppAPIToken>
        <AppID>exampleString</AppID>
        <JobTemplateID>exampleString</JobTemplateID>
      </TestRun>
    </tns:RunJob>
  </soap:Body>
</soap:Envelope>
```

#### Response {#response}

The following table shows the data contained in the response of the Run Job service:

| Name | Description |
| --- | --- |
| Started | True if the test has already started. Otherwise, false.  |
| ErrorMessage | Contains the error message if the test failed to start. Empty if the test started successfully. |
| JobID | The unique ID of the job. This ID is used to retrieve the result of the test with the **Get Job Status** service. |

##### Example

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Body>
    <tns:RunJobResponse>
      <RunJob>
        <Started>false</Started>
        <ErrorMessage>exampleString</ErrorMessage>
        <JobID>exampleString</JobID>
      </RunJob>
    </tns:RunJobResponse>
  </soap:Body>
</soap:Envelope>
```

### Get Job Status

#### URL

```text
https://ats100.mendixcloud.com/ws/GetJobStatus
```

#### Request

You must include the following information in the request:

| Name | Description |
| --- | --- |
| username | The user name of the web service user. |
| password | The password of the web service user. |
| AppAPIToken | The key for the CI/CD API. Generated on the **App Settings** page. |
| JobID | The unique ID of the job returned by the Run Job service. |
| AppID | The ID of your Mendix app. |
| IncludeExecutionFlags¹| Indicates whether to include execution flags (canceled, warning) in the response. |
| IncludeExecutionResultBreakdown¹ | Indicates whether to include the number of passed/failed/not run test cases in the response. |
| IncludeDetailsPerTestCase¹ | Indicates whether to include details (for example, name, result, duration) for each test case that was run in the response. |

¹ Optional. If left out, defaults to `false`.

##### Example 1

Basic example, only returns the status and result (and error message if there is one):

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Header>
    <tns:authentication>
      <username>exampleUser</username>
      <password>examplePassword</password>
    </tns:authentication>
  </soap:Header>
  <soap:Body>
    <tns:GetTestRun>
      <TestRun>
        <AppAPIToken>exampleString</AppAPIToken>
        <JobID>exampleString</JobID>
        <AppID>exampleString</AppID>
      </TestRun>
    </tns:GetTestRun>
  </soap:Body>
</soap:Envelope>
```

##### Example 2

Example which also returns the number of passed/failed/not run test cases:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Header>
    <tns:authentication>
      <username>exampleUser</username>
      <password>examplePassword</password>
    </tns:authentication>
  </soap:Header>
  <soap:Body>
    <tns:GetTestRun>
      <TestRun>
        <AppAPIToken>exampleString</AppAPIToken>
        <JobID>exampleString</JobID>
        <AppID>exampleString</AppID>
        <IncludeExecutionResultBreakdown>true</IncludeExecutionResultBreakdown>
      </TestRun>
    </tns:GetTestRun>
  </soap:Body>
</soap:Envelope>
```

##### Example 3

Example which returns the status of the execution flags and details for each test case.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Header>
    <tns:authentication>
      <username>exampleUser</username>
      <password>examplePassword</password>
    </tns:authentication>
  </soap:Header>
  <soap:Body>
    <tns:GetTestRun>
      <TestRun>
        <AppAPIToken>exampleString</AppAPIToken>
        <JobID>exampleString</JobID>
        <AppID>exampleString</AppID>
        <IncludeExecutionFlags>true</IncludeExecutionFlags>
        <IncludeDetailsPerTestCase>true</IncludeDetailsPerTestCase>
      </TestRun>
    </tns:GetTestRun>
  </soap:Body>
</soap:Envelope>
```

#### Response

The following table shows the data contained in the response of the **Get Job Status** service:

| Name | Description |
| --- | --- |
| ExecutionStatus| Status of the execution: **Running** or **Queued**. |
| ErrorMessage | Contains the error message if the test failed to start. Empty if the test started successfully. |
| ExecutionResult | Result of the execution: **Passed** or **Failed**. |
| ExecutionFlags¹ | Status of the canceled and warning flags for the job. |
| ExecutionResultBreakdown¹ | Number of test cases in this job that passed, failed, and were not run. |
| ExecutionDetailsPerTestCase¹ | Name, result (**Passed**,**Failed**,**Not_Executed**), duration, and error message² for each completed test case. |

¹ Optional, only returned if the corresponding **Include** statement was set to true in the request.  
² Error messages are only included for not passed testcases where a simple and short error message can be generated.  

##### Example 1

Basic example, only returns the status and result (and error message if there is one):

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Body>
    <tns:GetTestRunResponse>
      <TestRun>
        <ExecutionStatus>[key]</ExecutionStatus>
        <ExecutionResult>[key]</ExecutionResult>
        <ErrorMessage>exampleString</ErrorMessage>
      </TestRun>
    </tns:GetTestRunResponse>
  </soap:Body>
</soap:Envelope>
```

##### Example 2

Example which also returns the number of passed, failed, and not-executed test cases:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Body>
    <tns:GetTestRunResponse>
      <TestRun>
        <ExecutionStatus>[key]</ExecutionStatus>
        <ExecutionResult>[key]</ExecutionResult>
        <ErrorMessage>exampleString</ErrorMessage>
        <ExecutionResultBreakdown>
            <ResultBreakdown>
                <CountPassed>5</CountPassed>
                <CountNotExecuted>1</CountNotExecuted>
                <CountFailed>1</CountFailed>
            </ResultBreakdown>
        </ExecutionResultBreakdown>
      </TestRun>
    </tns:GetTestRunResponse>
  </soap:Body>
</soap:Envelope>
```

##### Example 3

Example which returns the status of the execution flags and details for each test case.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Body>
    <tns:GetTestRunResponse>
      <TestRun>
        <ExecutionStatus>[key]</ExecutionStatus>
        <ExecutionResult>[key]</ExecutionResult>
        <ErrorMessage>exampleString</ErrorMessage>
        <ExecutionFlags>
            <Flags>
                <Canceled>true</Canceled>
                <Warning>false</Warning>
            </Flags>
        </ExecutionFlags>
        <ExecutionDetailsPerTestCase>
          <ExecutionDetailsTestCase>
            <Name>exampleString</Name>
            <Result>[key]</Result>
            <Duration>00:00:04</Duration>
          </ExecutionDetailsTestCase>
          <ExecutionDetailsTestCase>
            <Name>exampleString</Name>
            <Result>[key]</Result>
            <Duration>00:01:37</Duration>
            <ErrorMessage>exampleString</ErrorMessage>
          </ExecutionDetailsTestCase>
        </ExecutionDetailsPerTestCase>
      </TestRun>
    </tns:GetTestRunResponse>
  </soap:Body>
</soap:Envelope>
```

### Rerun Not Passed

Reruns all the failed or not-executed test cases for a finished job. Returns the UUID of the new job which can be used to query the result.

#### URL

```text
https://ats100.mendixcloud.com/ws/RerunNotPassed
```

#### Request

You must include the following information in the request:

| Name | Description |
| --- | --- |
| username | ATSAPIUser |
| password | ATSAPIUser |
| AppAPIToken | The key for the CI/CD API. Generated on the **App Settings** page. |
| AppID | The ID of your Mendix app. |
| FinishedJobID | The unique UUID of a finished job that was started with **Run Job**. |

##### Example

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.mendix.com/">
  <soap:Header>
    <tns:authentication>
      <username>ATSAPIUser</username>
      <password>ATSAPIUser</password>
    </tns:authentication>
  </soap:Header>
  <soap:Body>
    <tns:RerunNotPassed>
      <RerunNotPassed>
        <AppAPIToken>exampleString</AppAPIToken>
        <AppID>exampleString</AppID>
        <FinishedJobID>exampleString</FinishedJobID>
      </RerunNotPassed>
    </tns:RerunNotPassed>
  </soap:Body>
</soap:Envelope>
```

#### Response

The response for **Rerun Not Passed** is identical with the response for **Run Job** in the [3.1.3 Response](#response) section above.
