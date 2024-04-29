---
title: "OPC-UA connector"
#url: Set the relative URL of the document; after the name of the main directory/product the document is in, use the document title; example for document titled my-new-page.md, in refguide directory: /refguide/my-new-page/
#linktitle: Enter a short title to be used in the left side menu; increases readability and navigation through the menu
#weight: Enter the position of the document compared to other 'child' documents at the same level; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document, and make sure the tag is used as a word in the actual content (will will function best for SEO as a word in a heading); each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
#draft: Set to true if page should not appear in production
---

## 1 Introduction

The OPC-UA connector is a Mendix Module to connect to your OPC-UA server.

## 1.1 Typical Use Case

The OPC-UA connector should be used ...

## 1.2 License

The OPC-UA connector is licensed under the GPL2.0 License.

## Pre-requisites
Mendix Studio Pro version 9.24.3+

## 1.4 Dependencies {#dependencies}

You must have these Marketplace modules installed:
* [Community Commons](https://marketplace.mendix.com/link/component/170)

## 2 Installation
* Install all dependencies.
* Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the OPC-UA connector into your app.
* Add NAV_StartConfiguration to your navigation
* Add the CanConfigure module role to a user role that will configure the connections to your server.

## 3 Usage

### 3.1 Discovery Services
#### 3.1.1 Find Servers
#### 3.1.2 Get Endpoints
#### 3.1.3 Get Endpoints create certificate

### 3.2 Session Services
#### 3.2.1 Test Connection
#### 3.2.2 Trust Server Certificate
#### 3.2.3 Untrust Server Certificate

### 3.3 View Services
#### 3.3.1 Browse
#### 3.3.2 Get Roots
#### 3.3.3 Get Children
#### 3.3.4 Get Parent

### 3.4 Attribute Services
#### 3.4.1 Get Node Details
#### 3.4.2 Read Node
#### 3.4.3 Read Single Node Value
#### 3.4.4 Write Node
#### 3.4.5 Write Single Node Value

### 3.5 Subscriptions
#### 3.5.1 Initialize Commit Subscription
#### 3.5.2 De-Initialize Delete Subscription

### 3.6 Monitored Items
#### 3.6.1 Monitored Item Commit
#### 3.6.2 Monitored Item List Commit
#### 3.6.3 Monitored Item Delete
#### 3.6.4 Monitored Item List Delete

### 3.7 Mendix Specific
#### 3.7.1 Update App Certificate
#### 3.7.2 Force Refresh Connection
#### 3.7.3 ASU Subscription
#### 3.7.4 BSD Subscription
