---
title: "Portable App Distribution for Kubernetes"
url: /developerportal/deploy/docker-deploy-k8s/
weight: 20
description: "Describes how to use Portable App Distribution to deploy on Kubernetes without installing the Mendix Operator."
---

## Introduction

This guide provides a walkthrough for deploying your Mendix application using [Portable App Distribution](/developerportal/deploy/portable-app-distribution-deploy/) with Kubernetes, but without relying on the Mendix Operator. This is particularly useful for air-gapped environments, private cloud deployments, or scenarios where you need full control over the deployment process.

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

* A Portable Package [created from your Mendix app](/developerportal/deploy/portable-app-distribution-deploy/#creating-a-portable-app-distribution-file)
* Docker installed on your system
* Access to a container registry
* Kubernetes cluster (if deploying to Kubernetes)
* `kubectl` configured to connect to your Kubernetes cluster

## Deploying an App with Portable App Distribution

The Portable App Distribution feature in Mendix Studio Pro provides you with the necessary application files to build a Docker image. It packages your Mendix application as a self-contained distribution, ready for integration into your Docker environment.

To deploy your app to Docker, you must [create a Portable App Distribution Package](/developerportal/deploy/portable-app-distribution-deploy/#creating-a-portable-app-distribution-file), build a Docker image, and then deploy the Docker image (including pushing it to a container registry). For more information, refer to the sections below.

### Building a Docker Image

To build a Docker image from the Portable Package, perform the following steps:

1. Extract the Portable Package to a directory of your choice.
2. Create a Dockerfile in the extracted directory. For more information, see [Building a Docker Image](/developerportal/deploy/docker-deploy-pad/#building-a-docker-image).
3. Build the Docker image by using the following command: `docker build -t <your-image-name>:<tag> .`, where `<your-image-name>` and `<tag>` indicate your required image name and version tag (for example, `my-mendix-app:1.0.0`).

### Pushing the Docker Image

To push the Docker image to a container registry, perform the following steps:

1. Log in to your container registry by running the following command: `docker login <your-registry>`.
2. Tag the Docker image with the registry URL by running the following command: `docker tag <your-image-name>:<tag> <your-registry>/<your-image-name>:<tag>`.
3. Push the Docker image to the registry by running the following command: `docker push <your-registry>/<your-image-name>:<tag>`.

### Deploying the Docker Image

Once the Docker image is available in your container registry, you can deploy it to Kubernetes by applying the following .yaml files. The .yaml files must be organized in a folder, for example, *k8s/*. You must apply them in the same order as below.

#### Creating a Namespace

Create a namespace by performing the following steps:

1. Create a file named, for example, *namespace.yaml*, with contents like the following:

    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
        name: mendix-app
    ```

2. Apply the file by running the following command: `kubectl apply -f namespace.yaml`.

    Replace the name and path of the file as required.

#### Creating a Kubernetes Secret

Store all sensitive values in a Kubernetes Secret by performing the following steps:

1. Create a file named, for example, *secret.yaml*, with the contents like the following:

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: mendix-secret
      namespace: mendix-app
    type: Opaque
    stringData:
      RUNTIME_PARAMS_DATABASEJDBCURL: "postgresql://mendix:mendix@postgres:5432/mendix" # Defines the JDBC URL to use for the database connection (which overrides the other database connection settings).
      RUNTIME_PARAMS_DATABASE_TYPE: "PostgreSQL"
      RUNTIME_PARAMS_DATABASE_HOST: "postgresEndpointURL" #This will be overridden if you supply DatabaseJdbcUrl.
      RUNTIME_PARAMS_DATABASE_PORT: "5432"
      RUNTIME_PARAMS_DATABASE_NAME: "<your-database-name>"
      RUNTIME_PARAMS_DATABASE_USERNAME: "<your-database-username>"
      RUNTIME_PARAMS_DATABASE_PASSWORD: "<your-database-password>"
      RUNTIME_PARAMS_ADMIN_PASSWORD: "<your-admin-password>"
      RUNTIME_PARAMS_LICENSE_LICENSE_ID: "<your-license-id>"
      RUNTIME_PARAMS_LICENSE_LICENSE_KEY: "<your-license-key>"
    ```

2. Apply the file by running the following command: `kubectl apply -f secret.yaml`.

    Replace the name and path of the file as required.

#### Using a ConfigMap

The previous section showed how to load secrets as environment variables. For other properties that need to be changed and are not defined in a secret, you can pass constants and variables using a ConfigMap by mounting them as files (similar to mounting files in Docker) and by passing them directly as environment variables.

The following is a sample command to create a ConfigMap: `kubectl create configmap my-config --from-file=default.conf --from-file=custom.conf --from-file=variables.conf -n mendix-app`.

Configuration values such as the admin user password, license key, and custom runtime settings are provided in the *custom.conf* and *variables.conf* files. These files must be included in the [Configuration File](/developerportal/deploy/portable-app-distribution-deploy/best-practices/).

#### Configuring Deployment

Create a Kubernetes Deployment for your Mendix app by performing the following steps:

1. Create a file named, for example, *deployment.yaml*, with the contents like the following:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mendix-app
      namespace: mendix-app
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: mendix-app
      template:
        metadata:
          labels:
            app: mendix-app
        spec:
          containers:
            - name: mendix-app
              image: <your-registry>/<your-image-name>:<tag>
              ports:
                - containerPort: 8080
                - containerPort: 8090
              envFrom:
                - secretRef:
                    name: mendix-secret            
              resources:
                requests:
                  memory: "512Mi"
                  cpu: "250m"
                limits:
                  memory: "1Gi"
                  cpu: "500m"
              #    Use this if you have health checks enabled.
              # livenessProbe:             
              #  httpGet:
              #    path: /health/live
              #    port: 8080
              #  initialDelaySeconds: 60
              #  periodSeconds: 10
              #readinessProbe:
              #  httpGet:
              #    path: /health/ready
              #    port: 8080
              #  initialDelaySeconds: 30
              # periodSeconds: 10            

    # If passing a ConfigMap
    #        volumeMounts:                        
    #           - name: config-volume            
    #              mountPath: /opt/app/etc/              
    #              readOnly: true                         
    #      volumes:                               
    #        - name: config-volume                
    #          configMap:                         
    #            name: my-config                  
    ```

2. Apply the file by running the following command: `kubectl apply -f deployment.yaml`.

    Replace the name and path of the file as required.

#### Configuring the Service

Create a Kubernetes Service to expose your Mendix app by performing the following steps:

1. Create a file named, for example, *service.yaml*, with the contents like the following:

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: mendix-app-service
      namespace: mendix-app
    spec:
      selector:
        app: mendix-app
      ports:
        - name: http
          protocol: TCP
          port: 80
          targetPort: 8080
        - name: admin
          protocol: TCP
          port: 8090
          targetPort: 8090
      type: ClusterIP
    ```

2. Apply the file by running the following command: `kubectl apply -f service.yaml`.

    Replace the name and path of the file as required.

#### Configuring the Ingress

Create a Kubernetes Ingress to expose your Mendix app to the outside world by performing the following steps:

1. Create a file named, for example, *ingress.yaml*, with the contents like the following:

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: mendix-app-ingress
      namespace: mendix-app
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
    spec:
      rules:
        - host: <your-domain>
          http:
            paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: mendix-app-service
                    port:
                      number: 80
    ```

2. Apply the file by running the following command: `kubectl apply -f ingress.yaml`.

    Replace the name and path of the file as required.

### Configuring Storage

The following sections explain how to configure storage for your Mendix app on Kubernetes.

#### Local Storage

By default, the Mendix Runtime uses local storage. However, in a Kubernetes environment, local storage is not persistent. To use persistent storage, you can use a Persistent Volume Claim (PVC).

1. Create a file named, for example, *k8s/pvc.yaml*, with the contents like the following:

    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: mendix-storage
      namespace: mendix-app
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 10Gi
    ```

2. Apply the file by running the following command: `kubectl apply -f k8s/pvc.yaml`.

    Replace the name and path of the file as required.

3. Update the Deployment to mount the PVC:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mendix-app
      namespace: mendix-app
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: mendix-app
      template:
        metadata:
          labels:
            app: mendix-app
        spec:
          containers:
            - name: mendix-app
              image: <your-registry>/<your-image-name>:<tag>
              ports:
                - containerPort: 8080
                - containerPort: 8090
              envFrom:
                - secretRef:
                    name: mendix-secret
              env:
                - name: MENDIX_STORAGE_TYPE
                  value: "local"
                - name: MENDIX_STORAGE_PATH
                  value: "/data"
              volumeMounts:
                - name: mendix-storage
                  mountPath: /data
              resources:
                requests:
                  memory: "512Mi"
                  cpu: "250m"
                limits:
                  memory: "1Gi"
                  cpu: "500m"
              livenessProbe:
                httpGet:
                  path: /health/live
                  port: 8080
                initialDelaySeconds: 60
                periodSeconds: 10
              readinessProbe:
                httpGet:
                  path: /health/ready
                  port: 8080
                initialDelaySeconds: 30
                periodSeconds: 10
          volumes:
            - name: mendix-storage
              persistentVolumeClaim:
                claimName: mendix-storage
    ```

#### S3 Storage

To use S3-compatible storage, set the following environment variables:

```text
env:
  - name: RUNTIME_PARAMS_MENDIX_CORE_STORAGESERVICE
    value: "com.mendix.storage.s3"
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_S3_ENDPOINT
    value: "<your-s3-endpoint>"
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_S3_BUCKETNAME
    value: "<your-s3-bucket>"
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_S3_REGION
    value: "<your-s3-region>" 
    ...
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_S3_ACCESS_KEYID
    valueFrom:
      secretKeyRef:
        name: mendix-secret
        key: RUNTIME_PARAMS_MENDIX_STORAGE_S3_ACCESS_KEYID
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_S3_SECRETACCESSKEY
    valueFrom:
      secretKeyRef:
        name: mendix-secret
        key: RUNTIME_PARAMS_MENDIX_STORAGE_S3_SECRETACCESSKEY
```

#### Azure Blob Storage

To use Azure BlobStorage, set the following environment variables:

```text
env:
  - name: RUNTIME_PARAMS_MENDIX_CORE_STORAGESERVICE
    value: "com.mendix.storage.azure"
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_AZURE_BLOBENDPOINT
    value: "<your-s3-endpoint>"
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_AZURE_CONTAINER
    value: "<your-s3-bucket>"
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_S3_REGION
    value: "<your-s3-region>" 
    ...
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_AZURE_ACCOUNT
    valueFrom:
      secretKeyRef:
        name: mendix-secret
        key: RUNTIME_PARAMS_MENDIX_STORAGE_AZURE_ACCOUNT
  - name: RUNTIME_PARAMS_MENDIX_STORAGE_AZURE_ACCOUNTKEY
    valueFrom:
      secretKeyRef:
        name: mendix-secret
        key: RUNTIME_PARAMS_MENDIX_STORAGE_AZURE_ACCOUNTKEY
```

## Troubleshooting

If you encounter issues, use the following troubleshooting tips to help you solve them.

### App Does Not Start

If the app does not start, check the logs of the pod:

```text
kubectl logs <pod-name> -n mendix-app
```

### App Is Not Accessible

If the app is not accessible, check the status of the pod, service, and ingress:

```text
kubectl get pods -n mendix-app
kubectl get services -n mendix-app
kubectl get ingress -n mendix-app
```

### Database Connection Issues

If the app cannot connect to the database, check the database credentials in the secret:

```text
kubectl get secret mendix-secret -n mendix-app -o yaml
```
