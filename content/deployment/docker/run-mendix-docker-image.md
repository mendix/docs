---
title: "Run a Mendix Docker Image"
category: "Docker"
#parent: ""
description: "Describes running a Mendix Docker image."
tags: ["Docker", "Cloud", "container", "CI/CD"]
---

## 1 Introduction

Docker is an open source container technology that is used broadly in the market in highly scalable solutions and automated delivery pipelines (CI/CD).

This how-to explains how to run a Mendix Docker image created using the Mendix Docker Buildpack. A Mendix Docker image is uniquely created for each release of a project using this buildpack. To run such a docker image, you need access to one of the following Docker container services:

* Kubernetes
* DC/OS
* Docker
* Docker Swarm
* Azure Container Services
* IBM Kubernetes
* AWS Beanstalk
* Google Container Engine
* Docker Enterprise
* Redhat Openshift

**This how-to will teach you how to do the following:**

* Check for compatability
* Run the Mendix Docker image

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Build an image with the Mendix buildpack (for details, see [Build a Docker Image from a Mendix App Project](build-docker-image-from-mendix-project))

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

## 5 Related Content

* [How to Build a Docker Image from a Mendix App Project](build-docker-image-from-mendix-project)
* [Mendix Docker Buildpack ](https://github.com/mendix/docker-mendix-buildpack)
* [Mendix Azure ACS Kubernetes Reference Implementation](https://github.com/mendix/docker-mendix-buildpack)