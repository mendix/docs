---
title: "Docker"
url: /developerportal/deploy/docker/
weight: 60
description: "Describes how to deploy your Mendix app to a Docker environment."
no_list: false 
description_list: true
---

## Introduction

This section describes how to deploy your Mendix app to a Docker environment.

## Docker Deployment Options

Mendix offers two options for Docker deployments: Portable App Distribution or the Docker Buildpack.

### Portable App Distribution

[Portable App Distribution](/developerportal/deploy/portable-app-distribution-deploy/) allows users to generate their portable app with a single MxBuild command. It requires fewer manual steps than the Docker Buildpack, simpler environment configuration, and no `rootfs` preparation. Running Portable App Distribution can take as little as 3-6 minutes (the time may vary based on the application's size and complexity).

### Docker Buildpack

The Docker Buildpack offers custom `rootfs` configuration, but requires multiple build steps, a more complex setup process, and a longer total build time (at least 14-25 minutes).

## Documents in This Section
