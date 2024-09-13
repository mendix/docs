---
title: "User Management API"
url: /apidocs-mxsdk/apidocs/user-management-api/
description: "This API is deprecated. Use this API to integrate your company's user management systems with the Mendix Platform. You can then create and manage user accounts and groups as well as define group policies for your apps."
weight: 115
deprecated: true
---

## Introduction

{{% alert color="warning" %}}
This API is deprecated. If you are currently using this API or intend to start using it, please look at, and contribute to, [this idea in the Mendix Community](https://community.mendix.com/link/space/user-experience/ideas/3962). This will allow us to understand your use case and will help us to prioritize a new API that is fit for purpose. 
{{% /alert %}}

The User Management API allows your company's user management systems to integrate with the Mendix Platform. Through this API, you can create and manage user accounts in your company. Additionally you can create and manage groups. In the Mendix Platform, you can define group policies for groups which grant access to your company's applications to their members.

{{% alert color="warning" %}}
The Group management functions of this API apply only to apps which are using the [Mendix SSO](/appstore/modules/mendix-sso/) module to authenticate end-users. This allows end-users to use their Mendix account to sign in to your app (or apps).
{{% /alert %}}

## Authentication

The User Management API requires authentication via API keys that are bound to your Mendix account.

### Obtaining an API Key

To obtain a Mendix API key, follow the instructions in the [API Keys](/community-tools/mendix-profile/user-settings/#profile-api-keys) section of *Mendix Profile*.

### Using Authentication Headers

Use the following request headers to authenticate an API call:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

### Configuring Permissions

To perform an action via the User Management API, you need **API Rights** permissions. This can be configured from the [Permissions tab](/developerportal/deploy/node-permissions/#permissions-tab) of your app's **Environments** page.

## Error Handling

If an error occurs while performing a REST request, the server will always return a JSON object with error information. For example:

```json
{
    "errorMessage": "Authentication failed. The HTTP headers 'Mendix-Username' and 'Mendix-ApiKey' should contain valid credentials to authenticate for this request.",
    "errorCode": "UNAUTHORIZED"
}

```

The **errorCode** attribute describes the error in a machine-readable form, which may provide additional details on the nature of the error in addition to the HTTP status. The **errorMessage** attribute is the human-readable representation of the error, intended to give the developer further insight in the cause of the error.

The following errors might be returned by the service. In general, 4xx errors indicate that something was wrong with the client's request, and 5xx errors indicate that something went wrong at the server.

| Status code | Description |
| --- | --- |
| 400 (Bad Request) | The requester made an incorrect call. Either the JSON was not well formed or the request arguments were invalid. The "message" field will elaborate on the error. |
| 401 (Unauthorized) | The credentials are not valid or not applicable |
| 403 (Forbidden) | The credentials are valid, but are not authorized to perform this request. |
| 404 (Not Found) | This service or resource does not exist. Please verify the URL you are using. |
| 405 (Method Not allowed) | A service exists for this URL, but not in combination with the used HTTP method. |
| 409 (Conflict) | There was a conflict with respect to the resource; for example, the resource which was attempted to be created already exists. |
| 500 (Internal Server Error) / 560 (Internal Server Error) | The request is valid, but we failed to serve it. Please contact Support. |
| 502 (Bad Gateway) / 503 (Service Unavailable) | The server is currently offline. Please contact Support if this problem persists. |
| 504 (Gateway timeout) | Your request is being processed but the server aborted the response because the request took too long. Note that the request might have been applied still. Please contact Support if this happens. |

### Error Codes

On errors (4xx and 5xx responses), the response can contain an errorCode. This is a request-specific code that describes the error in a machine-readable form. The API documentation describes possible error codes per request.

#### Authentication and Authorization Error Codes

The following error codes can be returned on authentication and authorization errors.

| Error code | Description |
| --- | --- |
| UNAUTHORIZED 401 | Authentication failed. Credentials provided with the request are either invalid or incomplete. |
| FORBIDDEN 403 | Authentication succeeded, but user is not authorized to execute this request. |

#### General Error Codes

##### Client Errors (4xx)

| Error code | Description |
| --- | --- |
| PARAMETER_MISSING 400 | One of the required parameters for the request is missing or does not contain a value. |
| BAD_PARAMETER 400 | One of the parameters included with the request has an illegal value. |
| RESOURCE_NOT_FOUND 404 | The requested resource cannot be found on the server. |
| RESOURCE_ALREADY_EXISTS 409 | The resource cannot be created on the server because it already exists. |

##### Server Errors (5xx)

| Error code | Description |
| --- | --- |
| SERVICE_UNAVAILABLE 503 | Service is unavailable. Please try again later. |

## API Calls

### Concepts

The following concepts are used within this API.

#### User Account {#user-account}

Users that are able to sign in to the Mendix Platform with their credentials are identified by their login name (an email address) or OpenID (an identifier generated by Mendix to uniquely identify a user). Both values are unique within the Mendix Platform and cannot change over time. Every user is a member of (exactly) one Company.

#### Company (Account) {#company-account}

A group of users that work for the same legal entity. Companies can own email domains (for example "@acme.org"), which means that every new user that signs up with an email address within this domain will become part of the domain owning company. (Additional) email domains for a company can be requested through [Control Center](/control-center/) or[Mendix Support](https://support.mendix.com/).

#### Groups

A group of users within the same company. Automated security policies can be assigned to groups. These groups typically reflect your organization's structure.

### Get OpenID of User Account

Retrieves a user account's OpenID based on its email address.

```http
 HTTP Method: GET
 URL: https://usermanagement.mendix.com/legacy-api/1/users/by-email/<emailAddress>
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Parameter

* *emailAddress* : The email address of the user account you are trying to retrieve. Please note that this address should be URL-encoded.

##### Example

```http
GET /legacy-api/1/users/by-email/johndoe3%40example.com HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

JSON object with a single key-value pair containing key *openId* containing the OpenID for the requested user account. HTTP status 200.

##### Example

```json
{
    "openId": "https://mxid2.mendixcloud.com/mxid2/id?id=bdddd12c-cc93-4600-82e4-88baa5314y79"
}

```

### Get All User Accounts in Your Company

Retrieves the OpenIDs of all users in your company.

```http
HTTP Method: GET
URL: https://usermanagement.mendix.com/legacy-api/1/users
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Optional Parameters

* *search* : Search string to find groups by name. Defaults to empty.
* *offset* : Offset within the dataset. Defaults to zero.
* *limit* : Maximum amount of objects to be retrieved. Defaults to '-1' for unlimited.

##### Example

```http
GET /legacy-api/1/users HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

A JSON object with two key-value pairs; *count* indicating the total number of users in the company satisfying the search parameters (Note that depending on the chosen values for *limit* and *offset*, the number of results in the response may be lower than the *count*.) and *users* containing an array of objects with a single key-value pair *openId* containing the OpenID of a user from the company. HTTP Status 200.

```json
{
    "users": [
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=daba46fc-692c-4622-adb4-981fcfb0dec9"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=c8101ad7-bdfb-48b1-b212-99fa86f8cdb0"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=f3ecda3f-1cd4-4571-92d9-5c53bd80c542"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=344a8193-bbe0-4b31-b7ae-de701eccf030"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=51b54074-a66c-4337-8488-aac89bf47a2d"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=6043d3ed-517f-43fc-bfb5-1062afe24858"
        }
    ],
    "count": 6
}
```

### Update Active Status of User Account

Activate/deactivate a user account in your company. Deactivating a user means that the user can no longer access the Mendix Platform. However, all data of this user is retained.

```http
 HTTP Method: PUT
 URL: https://usermanagement.mendix.com/legacy-api/1/users/<openId>
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Parameter

* *openId* : The OpenID of the user account you are trying to retrieve. Please note that since the OpenID is a URL itself, it should be URL-encoded.

##### Payload

A JSON object with keys:

* *activeStatus* (Boolean, optional) : The value to which the active status of the user should be changed. Default value: true

##### Example

```http
POST /legacy-api/1/users/https%3A%2F%2Fmxid2.mendix.dev%2Fmxid2%2Fid%3Fid%3D51b54074-a66c-4337-8488-aac89bf47a2d HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
   "activeStatus": false
}

```

#### Output

None when successful, with HTTP status 200.

### Get Security Group by UUID

Retrieves a security group based on its UUID.

```http
HTTP Method: GET
URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Parameter

* *securityGroupUuid* : The UUID of the security group you want to retrieve.

##### Example

```http
GET /legacy-api/1/groups/86a2558b-b63b-4c76-a056-018d9eb8f1b9 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

A JSON object with the following key value pairs:

* *name* : The name of the security group
* *description* : Description of the security group.
* *uuid* : UUID of the security group.
* *memberCount* : Number of users in the security group.
* *userGroupLocked* : This value determines whether the user group can be removed and whether users can be added/removed through the Mendix Platform Portal. True means that the user group cannot be removed and users cannot be added/removed through the Mendix Platform Portal.

If the call is successful, it should return HTTP status 200.

##### Example

```json
{
    "name": "RnD",
    "description": "Research and Development",
    "uuid": "86a2558b-b63b-4c76-a056-018d9eb8f1b9",
    "memberCount": 57,
    "userGroupLocked": true
}
```

### Get Security Group by Name

Retrieves a security group based on its name.

```http
 HTTP Method: GET
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/by-name/<securityGroupName>
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Parameter

* *securityGroupName* : The name of the security group you want to retrieve.

##### Example

```http

GET /legacy-api/1/groups/RnD HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

A JSON object with the following key value pairs:

* *name* : The name of the security group
* *description* : Description of the security group.
* *uuid* : UUID of the security group.
* *memberCount* : Number of users in the security group.
* *userGroupLocked* : This value determines whether the user group can be removed and whether users can be added/removed through the Mendix Platform Portal. True means that the user group cannot be removed and users cannot be added/removed through the Mendix Platform Portal.

If the call is successful, it should return HTTP status 200.

##### Example

```json
{
    "name": "RnD",
    "description": "Research and Development",
    "uuid": "86a2558b-b63b-4c76-a056-018d9eb8f1b9",
    "memberCount": 57,
    "userGroupLocked": true
}
```

### Get All Security Groups in Your Company

Retrieves all security groups which exist in a company.

```http
HTTP Method: GET
URL: https://usermanagement.mendix.com/legacy-api/1/groups
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Optional Parameters

* *search* : Search string to find groups by name. Defaults to empty.
* *offset* : Offset within the dataset. Defaults to zero.
* *limit* : Maximum amount of objects to be retrieved. Defaults to '-1' for unlimited.

##### Example

```http
GET /legacy-api/1/groups?limit=2 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

JSON object with two key-value pairs; *count* indicating the total number of security groups in the company satisfying the request (Note that depending on the chosen values for *limit* and *offset*, the number of results in the response may be lower than the *count*.) and *group* containing an array of objects with the following key-value pairs:

* *name* : The name of the security group
* *description* : Description of the security group.
* *uuid* : UUID of the security group.
* *memberCount* : Number of users in the security group.
* *userGroupLocked* : If this is set to true, this security group cannot be changed from the user interface in the Mendix Platform.

If the call is successful, it should return HTTP status 200.

##### Example

```json
{
    "groups": [
        {
            "name": "Test group",
            "description": "This is a test group.",
            "uuid": "86a2558b-b63b-4c76-a056-018d9eb8f1b9",
            "memberCount": 1,
            "userGroupLocked": true
        } ,
        {
            "name": "Another new group",
            "description": "",
            "uuid": "74e34c92-c2a2-461d-84eb-2c5f0b7c700a",
            "memberCount": 0,
            "userGroupLocked": false
        }
    ],
    "count": 6
}

```

### Get All User Accounts of a Security Group

Retrieves all users that are a member of a certain security group.

```http
HTTP Method: GET
URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>/users
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Parameter

* *securityGroupUuid* : The UUID of the security group of which you want to retrieve the members.

##### Optional Parameters

* *search* : Search string to filter members by name. Defaults to empty. Not supported yet.
* *offset* : Offset within the dataset. Defaults to zero.
* *limit* : Maximum amount of objects to be retrieved. Defaults to '-1' for unlimited.

##### Example

```http

GET /legacy-api/1/groups/86a2558b-b63b-4c76-a056-018d9eb8f1b9/users?limit=10 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

A JSON object with two key-value pairs; *count* indicating the total number of users in the security group satisfying the search parameters (Note that depending on the chosen values for *limit* and *offset*, the number of results in the response may be lower than the *count*.) and *users* containing an array of objects with a single key-value pair *openId* containing the OpenID of a user from the security group. HTTP Status 200.

##### Example

```json
{
    "users": [
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=6043d3ed-517f-43fc-bfb5-1062afe24858"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=daba46fc-692c-4622-adb4-981fcfb0dec9"
        }
    ],
    "count": 2
}

```

### Create Security Group

Creates a security group in your company.

```http
 HTTP Method: POST
 URL: https://usermanagement.mendix.com/legacy-api/1/groups
```

#### Can Be Invoked By

Company Manager

#### Request

##### Payload

A JSON object with the following keys:

* *name* (String, required) : The name of the security group.
* *description* (String, optional) : A description for the security group.
* *userGroupLocked* (Boolean, optional) : This value determines whether the user group can be removed and whether users can be added/removed through the Mendix Platform Portal. True means that the user group cannot be removed and users cannot be added/removed through the Mendix Platform Portal. Default value: false.

##### Example

```http
POST /legacy-api/1/groups HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
   "name": "RnD",
   "description": "Research and Development"
}

```

#### Output

JSON object with two key-value pairs; *uuid* containing the UUID of the security group and *getUrl* containing the URL at which the group can be retrieved. HTTP status 201.

##### Example

```json
{
    "uuid": "a552a41b-5b30-41000-bab7-ad102eacd653",
    "getUrl" : "https://usermanagement.mendix.com/legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653"
}
```

### Update Security Group

Updates a security group in your company.

```http
 HTTP Method: PUT
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>
```

#### Can Be Invoked By

Company Manager

#### Request

##### Parameter

* *securityGroupUuid* : The UUID of the security group you want to update.

##### Payload

A JSON object with the following keys:

* *name* (String, optional) : The name of the security group.
* *description* (String, optional) : A description for the security group.
* *userGroupLocked* (Boolean, optional) : This value determines whether the user group can be removed and whether users can be added/removed through the Mendix Platform Portal. True means that the user group cannot be removed and users cannot be added/removed through the Mendix Platform Portal. Default value: false.

##### Example

```http
PUT /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
   "name": "RnD",
   "description": "Research and Development"
}

```

#### Output

None if successful, with HTTP status 200.

### Delete Security Group

Deletes a security group from your company.

```http
 HTTP Method: DELETE
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>
```

#### Can Be Invoked By

Company Manager

#### Request

##### Parameter

* *securityGroupUuid* : The UUID of the security group you want to delete.

##### Example

```http

DELETE /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

None if successful, with HTTP status 200.

### Add User Account to Security Group

Adds a user account from your company to the specified security group.

```http
HTTP Method: POST
URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>/users
```

#### Can Be Invoked By

Company Manager, Member Manager

#### Request

##### Parameter

* *securityGroupUuid* : The UUID of the security group to which you want to add a user account.

##### Payload

A JSON object with one key:
"openId" (String, required) : The OpenID of the user account that should be added to the group.

##### Example

```http
POST /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653/users HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
"openId" : "https://mxid2.mendix.dev/mxid2/id?id=daba46fc-692c-4622-adb4-981fcfb0dec9"
}

```

#### Output

None if successful, HTTP status 200.

### Remove User Account from Security Group

Remove the specified user account from the security group.

```http
 HTTP Method: DELETE
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>/users/<openId>
```

#### Can Be Invoked By

Company Manager, Members Manager

#### Request

##### Parameters

* *securityGroupUuid* : The UUID of the security group from which you want to remove a user account.
* *openId* : The OpenID of the user account you want to remove from the security group. Please note that since the OpenID is a URL itself, it should be URL-encoded.

##### Example

```http

DELETE /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653/users/https%3A%2F%2Fmxid2.mendix.dev%2Fmxid2%2Fid%3Fid%3Ddaba46fc-692c-4622-adb4-981fcfb0dec9 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### Output

None if successful, HTTP status 200.
