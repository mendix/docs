---
title: "Troubleshoot OData Connector for SAP Solutions"
url: /partners/sap/sap-troubleshoot-odata-connector/
category: "SAP"
menu_order: 16
description: "Describes issues you may face using the OData Connector for SAP solutions, and offers areas to investigate."
tags: ["SAP", "integration", "OData", "Troubleshoot", "destination", "401", "404", "500", "503"]
---

## 1 Introduction

There are some common issues which occur when using the OData Connector for SAP Solutions module from the Marketplace. This document lists some of these issues and the possible causes.

## 2 Getting Destination Failed

If you cannot fetch the destination, it could be for one of the following reasons.

### 2.1 XSUAA token failed

The JWT token for the currently signed-in user is not valid. You can resolve this by getting a valid token for the user.

Firstly, refresh the token to fetch a valid token for the user.

If refreshing the token does not work, check that the user is a valid SAP Business Technology Platform (SAP BTP) user.

### 2.2 Destination name not found

The destination name is provided in the ‘GetDestination’ Java action. Check that a valid destination is provided in a ‘GetDestination’ Java action in the microflow.

### 2.3 Unauthorized error

This might happen if the client ID and secret pair is invalid. The client ID and secret are fetched from SAP Cloud Portal using the VCAP environment details.

## 3 HTTP 401 Error While Running OData Function 

If you receive a 401 error code from your OData call, it could be for one of the following reasons.

### 3.1 Invalid credentials while using Basic Authentication with request params

Check that the correct username and password are set on the ‘Add basic authentication’ activity when using request params in the microflow.

### 3.2 Destination service is not setup correctly

Destination services are defined in SAP BTP. Check that the destination service is running correctly and you can establish a connection with the credentials provided.

### 3.3 Invalid bearer token sent

In case of OAuth authentication, the bearer token received with the destination might be invalid or expired. Retry or check the destination service created.

### 3.4 User permissions not provided

The role given to the user on SAP BTP might not allow them to access the destination service or the database.

## 4 HTTP 500 Error While Running OData Function 

If you receive a 500 error code from your OData call, check the issue below.

### 4.1 Database is not running 

The Database exposed using OData might not be running as expected. Check the database connection.

## 5 HTTP 503 Error While Running OData Function 

If you receive a 503 error code from your OData call, check the issue below.

### 5.1 OData application is down

The OData application which is exposing the service is not running as expected. Check the application status.

## 6 HTTP 404 Error While Running OData Function 

If you receive a 404 error code from your OData call, it could be for one of the following reasons.

### 6.1 Destination service is not running

Destination services are defined in SAP Cloud Portal. Check that the destination service is running correctly.

### 6.2 Invalid Query

Check the base URL (while using Request Params) and parameters inside the Query text in any OData function Java action.

## 7 Further Investigation

The following techniques can help in identifying issues which are causing your OData connector to fail.

### 7.1 Setting Application Log level

You can get more information from your app by setting the log level. For this you will need to have the Marketplace module [SAP Logging Connector](https://marketplace.mendix.com/link/component/110219/) set up in your app. For more information see the [SAP Logging Connector](sap-logger) documentation.

To set log level for an application deployed to SAP BTP, go to ‘Model Options’ in the environment and set ‘SapApplicationLogs.SapLogLevel’ to the required level. (Debug, Info, Error, Warn, or Trace).

### 7.2 Remote Debugging

To perform Java debugging, you must do the following:

1. Set the following environment properties.
    ```yml
    DEVELOPMENT_MODE= true
    JAVA_OPTS : ["-agentlib:jdwp=transport=dt_socket,address=8000,server=y,suspend=n"]
    ```

    This can be done through directly in SAP BTP or manifest.yml.

    1. In SAP BTP, the options can be set as shown below:

        ![](attachments/sap-troubleshoot-odata-connector/image1.png)

    2. In the manifest file, you need to set the options as shown below:

        ![](attachments/sap-troubleshoot-odata-connector/image2.png)

2. Restart the application to apply the changes.

    The logs will indicate whether the application is started in debug mode, as shown below:

    ![](attachments/sap-troubleshoot-odata-connector/image3.png)

3. Enable SSH for the application using the Cloud Foundry command

    `cf enable-ssh \<application-name\>`

4. Restart the app using the following command to activate the enabled ssh statement. 

    `cf restart \<application-name\>`

    This needs to be done before you can go over to the actual port forwarding.

5. Open an SSH tunnel for remote connection using the following command.

    `cf ssh \<application-name\> -N -T -L 8000:localhost:8000`

6. Set up remote Debugging in the Eclipse IDE as shown in the image below:

    ![Debug configuration screen in Eclipse](attachments/sap-troubleshoot-odata-connector/image4.png)
