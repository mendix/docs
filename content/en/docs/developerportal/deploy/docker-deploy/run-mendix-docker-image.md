---
title: "Run a Mendix Docker Image"
url: /developerportal/deploy/run-mendix-docker-image/
weight: 10
description: "Describes running a Mendix Docker image."
tags: ["Docker", "Cloud", "container", "CI/CD"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Docker is an open source container technology that is used broadly in the market in highly scalable solutions and automated delivery pipelines (CI/CD).

This how-to explains how to run a Mendix Docker image created using the Mendix Docker Buildpack. A Mendix Docker image is uniquely created for each release of a project using this buildpack. To run the Docker image, you need access to a Docker orchestration platform. See [System Requirements](/refguide/system-requirements/) for official supported orchestration platforms. 

This how-to will teach you how to do the following:

* Check for compatibility
* Run the Mendix Docker image

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Build an image with the Mendix buildpack (for details, see [Docker: Deploy](/developerportal/deploy/docker-deploy/))

## 3 Compatibility

Mendix is compatible with the above Docker hosts as long as there are compatible database services like PostgreSQL, RDS, or Azure SQL. External file store support can be set up with Amazon S3, Swift, or Azure Blob store.

## 4 Running the Mendix Docker Image

To start the container, you must provide the container with the password in order to create an administrative account for your Mendix application's `ADMIN_PASSWORD`
and `DATABASE_ENDPOINT`, as you can see in this example:

```
docker run -it \
  -e ADMIN_PASSWORD=Password1! \
  -e DATABASE_ENDPOINT=postgres://username:password@host:port/mendix \
  mendix/mendix-buildpack:v1.2  
```

This is an example for Microsoft SQL Server:

```
docker run -it \
  -e ADMIN_PASSWORD=Password1! \
  -e DATABASE_ENDPOINT=sqlserver://username:password@host:port/mendix \
  mendix/mendix-buildpack:v1.2  
```

## 5 Read More

* [Docker: Deploy](/developerportal/deploy/docker-deploy/)
* [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack)
