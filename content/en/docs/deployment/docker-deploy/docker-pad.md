---
title: "Portable App Distribution for Docker"
url: /developerportal/deploy/docker-deploy-pad/
weight: 20
description: "Describes how to deploy using a Docker image by using Portable App Distribution."
---

## Introduction

This guide provides a walkthrough for deploying your Mendix application using [Portable App Distribution](/developerportal/deploy/portable-app-distribution-deploy/) with Docker. This approach is particularly useful for containerized environments, and can significantly ease your CI/CD setup.

{{% alert color="info" %}}
This document is not an official Mendix implementation, or a substitute for recommended production deployment strategies. For more features, such as app management or governance, we suggest using [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) or [Mendix on Azure](/developerportal/deploy/mendix-on-azure/), which offer a structured, tested experience with cloud infrastructure. 

For information about the scope of support, see [Support for Different Deployment Strategies](/support/deployment-strategy-support/).
{{% /alert %}}

## Benefits of Portable App Distribution

Portable App Distribution revolutionizes the way in which Mendix applications are packaged and delivered. This innovative approach bundles your application code with all its necessary dependencies into a single, self-contained, and runnable artifact. This greatly simplifies the deployment of Mendix applications, whether you are targeting on-premise infrastructure or modern containerized environments like Docker, making the entire process more efficient and seamless.

The ability to generate a Portable App Distribution with a single build command means that creating a Docker-ready artifact becomes a streamlined process, making the overall integration into existing Docker-based CI/CD pipelines more efficient and less prone to errors.

The Portable App Distribution feature allows you to package and deploy Mendix apps without relying on the Mendix Cloud or a Mendix Operator. This is particularly useful for the following use cases:

* Air-gapped environments where internet access is restricted or unavailable
* Private cloud deployments where you manage your own infrastructure
* Full control scenarios where you need complete ownership of the deployment pipeline

Docker provides a consistent and reproducible environment for running Mendix apps, making it ideal for cloud-native and containerized deployments.

Portable App Distribution offers a more agile, user-centric, and efficient deployment ecosystem, empowering customers with greater control over their Docker deployments and simplifying the internal deployment processes.

## Prerequisites

Before you begin, ensure you have the following:

* Mendix Studio Pro version 11.19, 11.6.5, or above
* A Mendix app that you want to deploy
* Docker installed on your system (for building and running Docker images)
* Access to a container registry (for pushing and pulling Docker images)

## Deploying an App with Portable App Distribution

The Portable App Distribution feature in Mendix Studio Pro provides you with the necessary application files to build a Docker image. It packages your Mendix application as a self-contained distribution, ready for integration into your Docker environment.

To deploy your app to Docker, you must create a Portable App Distribution Package, build a Docker image, and then deploy the Docker image (including optionally pushing it to a container registry. For more information, refer to the sections below.

### Creating a Portable App Distribution Package

To create a Portable Package from your Mendix app, perform the following steps:

1. Open your app in Studio Pro.
2. Go to **App** > **Create Deployment Package**.
3. In the **Create Deployment Package** dialog, select **Portable package**.
4. Click **OK**.

The Portable Package is saved to the following location: `<your-project-folder>/releases/<XYZ_portable_YYYYMMDD_hhmm>.zip`.

For more information about Portable Packages, see [Portable App Distribution](/developerportal/deploy/portable-app-distribution-deploy/). Files included in the Portable Package are the core of your Mendix application and are ready to be included in a Docker image.
   
### Building a Docker Image

To build a Docker image from the Portable Package, perform the following steps:

1. Extract the Portable Package to a directory of your choice.
2. Create a Dockerfile in the extracted directory with contents like the following.

    ```text
    # This file provides an example on how to start the runtime in Docker.
    # It is based on the configuration named Default.

    # Start from an JAVA base image, as the Portable Package contains all necessary dependencies
    FROM eclipse-temurin:21-jdk

    # Set the working directory to /app
    WORKDIR /mendix

    # Copy the contents of the Portable Package to the /app directory in the image
    COPY ./app ./app
    COPY ./bin ./bin
    COPY ./etc ./etc
    COPY ./lib ./lib

    # Set environment variables (optional)
    ENV MX_LOG_LEVEL=info
    ENV M2EE_ADMIN_PASS=${M2EE_ADMIN_PASS}

    # Expose port 8080 for the Mendix Runtime and port 8090 for the Mendix Runtime admin interface
    EXPOSE 8090
    EXPOSE 8080

    # Set the start script to the Mendix Runtime execute command
    CMD ["./bin/start", "etc/Default"]
    ```
    You must create this Dockerfile yourself and place it alongside the application files generated by the Portable App Distribution. The `COPY` commands in the example above assume that the `app`, `bin`, `etc`, and `lib` directories are in the same location as your Dockerfile.

3. Build the Docker image by using the following command: `docker build -t <your-image-name>:<tag> -f build/docker/Dockerfile`, where:

   * `<your-image-name>` and `<tag>` - Indicate your required image name and version tag (for example, my-mendix-app:1.0.0).
   * `-f build/docker/Dockerfile` - Specifies the path to your Dockerfile.

### Optional: Pushing the Docker Image

To push the Docker image to a container registry, perform the following steps:

1. Log in to your container registry by running the following command: `docker login <your-registry>`.
2. Tag the Docker image with the registry URL by running the following command: `docker tag <your-image-name>:<tag> <your-registry>/<your-image-name>:<tag>`.
3. Push the Docker image to the registry by running the following command: `docker push <your-registry>/<your-image-name>:<tag>`.

### Deploying the Docker Image

Once the Docker image is available in your container registry, you can deploy it to your target environment by performing the following steps:

1. Pull the Docker image from your container registry by running the following command: `docker pull <your-registry>/<your-image-name>:<tag>`, replacing `<your-registry>`, `<your-image-name>`, and `<tag>` with the appropriate values for your Docker image.
2. Optional: Configure the container.

    The Portable App Distribution container can be configured to suit your deployment environment and requirements. You can do this in the `etc` [configuration folder](/developerportal/deploy/portable-apps-distribution/reference/#folder-structure). You can also apply the configuration through environment variables or a configuration file, giving you flexibility depending on your setup and preferences. Both approaches support the same set of runtime settings, so you can choose whichever method best fits your workflow.

    For more information, see the [Environment Variables](#env-variables) and [Configuration File](#config-file) sections below.

3. Run the container by using the command `docker run --rm -it -p 8080:8080 -e M2EE_ADMIN_PASS=<your password> <your-registry>/<your-image-name>:<tag>`, where:

    * `--rm` - Automatically removes the container when it exits.
    * `-it` - Runs the container in interactive mode and allocates a pseudo-TTY.
    * `-p 8080:8080` - Maps port 8080 on your host machine to port 8080 inside the container, allowing you to access your app.
    * `-e M2EE_ADMIN_PASS=<yourPassword>` - Ensure that you set your admin password here.
    * `<your-registry>/<your-image-name>:<tag>` - Refers to the image that you built.

You can view your running Mendix application at `localhost:8080`. To stop the application, press **Ctrl+C** in your terminal.

## Docker Compose for Multi-Container Setups

For more complex setups involving multiple Docker containers, or for simpler local testing purposes, you can use Docker Compose. It allows you to define and run multi-container Docker applications.

The following is an example of a *docker-compose.yaml* file that sets up your Mendix application with an HSQLDB for local testing. This example assumes you have the Portable App Distribution files (`app`, `bin`, `etc`, `lib`) in a parent directory relative to your *docker-compose.yaml* file.

```yaml
# This file provides an example on how to start the runtime with HSQLDB.
# This setup is intended for local testing only.
# It is based on the configuration named Default.

services:
  mendix-app:
    image: eclipse-temurin:21-jdk
    container_name: mendix-app
    working_dir: /mendix
    volumes:
      - ../app:/mendix/app
      - ../bin:/mendix/bin
      - ../etc:/mendix/etc
      - ../lib:/mendix/lib
    environment:
      - MX_LOG_LEVEL=info
      - M2EE_ADMIN_PASS=${M2EE_ADMIN_PASS}
    ports:
      - "8090:8090"
      - "8080:8080"
    command: ["./bin/start", "etc/Default"]
```

### Running with Docker Compose

To use this Docker Compose configuration, perform the following steps:

1. Set your admin port password in the **M2EE_ADMIN_PASS** variable within your environment, or directly in the *docker-compose.yaml* file.
2. Navigate to the directory containing your *docker-compose.yaml* file
3. Run a command like the following: `docker compose -f docker_compose/Default.yaml up`

This example assumes that your configuration is named Default.

## Environment Variables {#env-variables}

You can configure the Mendix Runtime by using environment variables. For example, the following environment variables are supported:

| Environment Variable | Description |
| --- | --- |
| `DATABASE_TYPE` | The type of the database (for example, PostgreSQL, MySQL)|
| `DATABASE_HOST` | The host name and port of the database server |
| `DATABASE_NAME` |The name of the database |

For more information, see [Runtime Customization](/refguide/custom-settings/#introduction).

## Configuration File {#config-file}

Alternatively, you can configure the Mendix Runtime by using a configuration file. The configuration file is a JSON file that contains the same settings as the environment variables.

### Example Configuration File

```json
{
  "DatabaseType": "PostgreSQL",
  "DatabaseHost": "localhost:5432",
  "DatabaseName": "mendix",
  "DatabaseUserName": "mendix",
  "DatabasePassword": "mendix",
  "AdminPassword": "Admin1234!",
  "RuntimePort": 8080,
  "RuntimeAdminPort": 8090
}
````

### Using the Configuration File

To use the configuration file, you can upload the configuration file to the configuration path:

`docker run --rm -it -p 8080:8080 -e M2EE_ADMIN_PASS=<your password> <your-registry>/<your-image-name>:<tag> \ -v host_path/config.conf:container_path/config.conf`
 
You must also mount the volume so that Docker can find it.

## Logging

The Mendix Runtime logs to a standard output by default. You can configure the log level using the `MX_LOG_LEVEL` environment variable.

The following log levels are supported (in order of verbosity):

| Log Level | Description |
| --------- | ----------- |
| `TRACE` | Most verbose — logs all internal operations |
| `DEBUG` | Detailed diagnostic information |
| `INFO` | General operational messages (default) |
| `WARNING` | Potentially harmful situations |
| `ERROR` | Error events that may still allow the app to continue |
| `CRITICAL` | Severe errors that may cause the app to stop |

## Health Checks

The Mendix Runtime exposes health check endpoints that can be used to monitor the status of your app:

| EndPoint | Description |
| -------- | ----------- |
| `/health` | Returns the overall health status of the app |
| `/health/live` | Returns the liveness status — indicates if the app is running |
| `/health/ready` | Returns the readiness status — indicates if the app is ready to serve traffic |

These endpoints are especially useful when integrating with orchestration platforms such as Kubernetes, which rely on liveness and readiness probes to manage container lifecycle.
