---
title: "Reference Guide for Docker Deployment"
url: /developerportal/deploy/docker-deploy-pad/
weight: 40
description: "Describes how to deploy using a Docker image by using Mendix Portable Runtime."
---

## Introduction

This guide provides a walkthrough for deploying your Mendix application using [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/) with Docker. This approach is particularly useful for containerized environments, and can significantly ease your CI/CD setup.

{{% alert color="info" %}}
This document is not an official Mendix implementation, or a substitute for recommended production deployment strategies. For more features, such as app management or governance, we suggest using [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) or [Mendix on Azure](/developerportal/deploy/mendix-on-azure/), which offer a structured, tested experience with cloud infrastructure. 

For information about the scope of support, see [Support for Different Deployment Strategies](/support/deployment-strategy-support/).
{{% /alert %}}

## Benefits of Mendix Portable Runtime

Mendix Portable Runtime revolutionizes the way in which Mendix applications are packaged and delivered. This innovative approach bundles your application code with all its necessary dependencies into a single, self-contained, and runnable artifact. This greatly simplifies the deployment of Mendix applications, whether you are targeting on-premise infrastructure or modern containerized environments like Docker, making the entire process more efficient and seamless.

The ability to generate a Mendix Portable Runtime with a single build command means that creating a Docker-ready artifact becomes a streamlined process, making the overall integration into existing Docker-based CI/CD pipelines more efficient and less prone to errors.

The Mendix Portable Runtime feature allows you to package and deploy Mendix apps without relying on the Mendix Cloud or a Mendix Operator. This is particularly useful for the following use cases:

* Air-gapped environments where internet access is restricted or unavailable
* Private cloud deployments where you manage your own infrastructure
* Full control scenarios where you need complete ownership of the deployment pipeline

Docker provides a consistent and reproducible environment for running Mendix apps, making it ideal for cloud-native and containerized deployments.

Mendix Portable Runtime offers a more agile, user-centric, and efficient deployment ecosystem, empowering customers with greater control over their Docker deployments and simplifying the internal deployment processes.

## Prerequisites

Before you begin, ensure you have the following:

* Mendix Studio Pro version 10.24.19, 11.19, 11.6.5, or above
* A Mendix app that you want to deploy
* Docker installed on your system (for building and running Docker images)
* Access to a container registry (for pushing and pulling Docker images)

## Deploying an App with Mendix Portable Runtime

The Mendix Portable Runtime feature in Mendix Studio Pro provides you with the necessary application files to build a Docker image. It packages your Mendix application as a self-contained distribution, ready for integration into your Docker environment.

To deploy your app to Docker, you must create a Mendix Portable Runtime Package, build a Docker image, and then deploy the Docker image (including optionally pushing it to a container registry). For more information, refer to the sections below.

### Creating a Mendix Portable Runtime Package

To create a Portable Package from your Mendix app, perform the following steps:

1. Open your app in Studio Pro.
2. Go to **App** > **Create Deployment Package**.
3. In the **Create Deployment Package** dialog, select **Portable package**.
4. Click **OK**.

The Portable Package is saved to the following location: `<your-project-folder>/releases/<XYZ_portable_YYYYMMDD_hhmm>.zip`.

For more information about Portable Packages, see [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/). Files included in the Portable Package are the core of your Mendix application and are ready to be included in a Docker image.
   
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

    You must create this Dockerfile yourself and place it alongside the application files generated by the Mendix Portable Runtime. The `COPY` commands in the example above assume that the `app`, `bin`, `etc`, and `lib` directories are in the same location as your Dockerfile.

3. Build the Docker image by using the following command: `docker build -t <your-image-name>:<tag> -f build/docker/Dockerfile`, where:

   * `<your-image-name>` and `<tag>` - Indicate your required image name and version tag (for example, `my-mendix-app:1.0.0`).
   * `-f build/docker/Dockerfile` - Specifies the path to your Dockerfile.

### Optional: Pushing the Docker Image

To push the Docker image to a container registry, perform the following steps:

1. Log in to your container registry by running the following command: `docker login <your-registry>`.
2. Tag the Docker image with the registry URL by running the following command: `docker tag <your-image-name>:<tag> <your-registry>/<your-image-name>:<tag>`.
3. Push the Docker image to the registry by running the following command: `docker push <your-registry>/<your-image-name>:<tag>`.

### Deploying the Docker Image {#deploy}

Once the Docker image is available in your container registry, you can deploy it to your target environment by performing the following steps:

1. Pull the Docker image from your container registry by running the following command: `docker pull <your-registry>/<your-image-name>:<tag>`, replacing `<your-registry>`, `<your-image-name>`, and `<tag>` with the appropriate values for your Docker image.
2. Optional: Configure the container.

    The Mendix Portable Runtime container can be configured to suit your deployment environment and requirements. You can do this in the `etc` [configuration folder](/developerportal/deploy/portable-apps-distribution/reference/#folder-structure). You can also apply the configuration through environment variables or a configuration file, giving you flexibility depending on your setup and preferences. Both approaches support the same set of runtime settings, so you can choose whichever method best fits your workflow.

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

The following is an example of a *docker-compose.yaml* file that sets up your Mendix application with an HSQLDB for local testing. This example assumes you have the Mendix Portable Runtime files (`app`, `bin`, `etc`, `lib`) in a parent directory relative to your *docker-compose.yaml* file.

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
| `RUNTIME_PARAMS_DATABASE_TYPE` | The type of the database (for example, PostgreSQL, MySQL)|
| `RUNTIME_PARAMS_DATABASE_HOST` | The host name and port of the database server |
| `RUNTIME_PARAMS_DATABASE_NAME` |The name of the database |

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
```

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

## Reverse Proxy

This section serves as a reference guide and starting point for configuring a reverse proxy on Docker. The configurations provided are intended for illustrative purposes only, as the required settings vary depending on your specific network environment and infrastructure setup.

{{% alert color="info" %}}
This example implementation is provided as-is, and is not covered under official support. Support requests related to this specific configuration cannot be addressed.
{{% /alert %}}

### Configuring Nginx

To configure Nginx, perform the following steps:

1. Define services for the app and Nginx reverse proxy:

    ```text
    services:
      app:
        build: .
        ports:
          - "127.0.0.1:8080:8080"  # Bind only localhost
        environment:
          - SPRING_PROFILES_ACTIVE=docker
      nginx:
        image: nginx:alpine
        ports:
          - "80:80"
        volumes:
          - ./nginx.conf:/etc/nginx/nginx.conf:ro
        depends_on:
          - app
    ```

2. Run the following command: `docker-compose up --build`.​
3. Create the following `nginx.conf` file to proxy requests to the app:

    ```text
    events {}
    http {
      server {
        listen 80;
        location / {
          proxy_pass http://app:8080;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
        }
      }
    }
    ```

This configuration exposes only port 80 publicly while acting as a proxy to your app on the internal port 8080.

### Configuring Traefik

To simplify setting up Traefik as a reverse proxy for your app running in a Docker container, use Docker Compose. This configuration exposes Traefik on ports `80/8080`, automatically discovers your app container through labels, and routes traffic to it.

Traefik uses two networks: *frontend* (public) and *backend* (internal). 

1. Add Traefik labels to the app service:

    ```text
    services:
      traefik:
        image: traefik:v3.0
        ports:
          - "80:80"
          - "8080:8080"  # Traefik dashboard
        volumes:
          - /var/run/docker.sock:/var/run/docker.sock:ro
        command:
          - --api.dashboard=true
          - --providers.docker=true
          - --providers.docker.exposedbydefault=false
          - --entrypoints.web.address=:80
        networks:
          - frontend
          - backend
        restart: unless-stopped
      app:
        build: .
        networks:
          - backend
        labels:
          - traefik.enable=true
          - traefik.docker.network=backend
          - traefik.http.routers.app.rule=Host(`localhost`) || PathPrefix(`/api`)
          - traefik.http.routers.app.entrypoints=web
          - traefik.http.services.app.loadbalancer.server.port=8080
        restart: unless-stopped
    networks:
      frontend:
        external: false
      backend:
        external: false
    ```

2. Run the following command:  `docker compose up -d --build`. 

You can now access your app at `http://localhost`. Traefik proxies to `app:8080` internally.

#### Key Traefik Labels Explained

This section explains the main labels used by Traefik.

* `traefik.enable=true` - Enables Traefik for this container.
* `traefik.http.routers.java-app.rule=Host(yourapp.example.com)` - Routes requests matching the host to this service.
* `traefik.http.services.java-app.loadbalancer.server.port=8080` - Forwards to your app's internal port.

Traefik automatically detects changes through a Docker socket. You do not need to restart it to update the labels.

#### Main Differences between Traefik and Nginx

This section explains how Traefik proxies differ from Nginx.

* Traefik does not use static config files. Instead, the configuration is automatic through the use of labels.
* A dashboard available at `http://localhost:8080` shows the routes.
* You can easily scale by duplicating the `app service` with unique router rules (for example, `Host(app2.local)`).​

## Example High Availability Implementation

High availability (HA) requires redundancy, health checks, and restarts to handle failures. Scale for HA with Docker Compose (for local or development environments) or Kubernetes.

This section serves as a reference guide and starting point for configuring high availability on Docker. The configurations provided are intended for illustrative purposes only, as the settings will vary depending on your specific network environment and infrastructure setup.

{{% alert color="info" %}}
This example implementation is provided as-is, and is not covered under official support. Support requests related to this specific configuration cannot be addressed.
{{% /alert %}}

1. Configure the *docker-compose.yml* as in the following example:

    ```text
    services:
      myapp:
        image: myapp
        ports:
          - "8080:8080"
        deploy:
          replicas: 3  # Run 3 instances
        healthcheck:
          test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8080/actuator/health"]
          interval: 30s
          timeout: 10s
          retries: 3
    ```

2. Start the process by running the following command: `docker-compose up --scale myapp=3`. 
3. Add a load balancer like Traefik or an NGINX reverse proxy in the front:

    ``` text
    services:
      traefik:
        image: traefik:v3.0
        command: --providers.docker --entrypoints.web.address=:80
        ports: ["80:80"]
      myapp:
        # No ports exposed; Traefik load balances
    ```

    This creates a redundancy—kill container, and traffic shifts automatically.

4. Build and run manually by running the following script:

    ``` text
    # Build image 
    docker build -t myapp:latest .
    # Test single instance
    docker run -p 8080:8080 myapp:latest
    # For HA: Run 3 replicas (use docker-compose.yml for production)
    docker run -d -p 8081:8080 --name app1 myapp:latest
    docker run -d -p 8082:8080 --name app2 myapp:latest  
    docker run -d -p 8083:8080 --name app3 myapp:latest
    ``` 
