---
title: "Run Mendix on Kubernetes"
url: /developerportal/deploy/run-mendix-on-kubernetes/
weight: 20
tags: ["Kubernetes", "cloud", "deployment"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

This how-to describes what is needed to deploy your Mendix app to [Kubernetes](https://kubernetes.io/). Kubernetes is the standard Docker orchestration platform supported by Mendix. If possible, we suggest you use [Mendix for Private Cloud](/developerportal/deploy/private-cloud/) to deploy Mendix apps to Kubernetes as this provides you with integration with the Developer Portal and takes away some of the heavy lifting. For details on supported version of Kubernetes see [Mendix System Requirements](/refguide/system-requirements/).

{{% alert color="warning" %}}
Do not use these instructions if you are using Mendix for Private Cloud — many of the steps here are not needed. For deploying using Mendix for Private Cloud, follow the instructions in the [Mendix for Private Cloud](/developerportal/deploy/private-cloud/) documentation.
{{% /alert %}}

A Mendix application needs, as a minimum, a database to run. In this example you provision a PostgreSQL database within the Kubernetes cluster. In production scenarios, the database is usually provided as a service by the cloud provider, like AWS RDS or Azure SQL. For supported databases see [Mendix System Requirements](/refguide/system-requirements/). 

If the application makes use of FileDocument or FileImage entities, a storage service needs to be attached as well. See [Mendix System Requirements](/refguide/system-requirements/) for supported external storage services. In this how-to you use a node-bound storage volume as an example. For more information, see [Architecture Overview](#architecture), below.

This how-to uses [Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/), which is a way to run Kubernetes locally. Many of the operations you perform on Minikube are the same as those on a hosted environment and it provides a low-level entry to Kubernetes. For more information, see [Installing Kubernetes with Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/) on the Kubernetes documentation site.

For more details on Kubernetes, see the [Kubernetes Documentation](https://kubernetes.io/docs/home/) site.

All the configuration files used in this how-to are also available on GitHub.

This how-to will teach you how to do the following:

* Deploy and run a Mendix app on Kubernetes using Minikube
* Separate the database deployment from your app
* Attach persistence storage to the app container

## 2 Prerequisites

To follow this how-to, having a basic knowledge of Docker and Kubernetes is recommended. For more information to get started, see [Docker Overview](https://docs.docker.com/engine/docker-overview/) and [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/). Although all the commands and examples will be executable as provided, some experience will help to understand the how-to better.

Before starting this how-to, make sure you have completed the following prerequisites:

* Install kubectl
    * The kubectl CLI is the default tool to access and manage your Kubernetes cluster
    * Install kubectl based on the instructions provided in [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl)
* Install Minikube
    * With Minikube, a local cluster can be created that is convenient for exploring Kubernetes (if you have an account for one of the cloud providers and you choose to use that, this step can be skipped)
    * Install Minikube based on the instructions provided in [Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

The how-to is based on working with a Unix-like system. The commands for Windows may be slightly different.

## 3 Architecture Overview{#architecture}

This section explains the components needed for Mendix app deployment. This architecture overview shows all the components in the deployment:

{{< figure src="/attachments/developerportal/deploy/docker-deploy/run-mendix-on-kubernetes/kubernetes.png" >}}

The deployment of your Mendix app needs the following Kubernetes components:

* [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
* [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
* [Services](https://kubernetes.io/docs/concepts/services-networking/service/)
* [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)
* [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod/)

The database is deployed as a **deployment**. Deployment covers control over the pods and the ReplicaSets for these pods. **Pods** are not bound to a specific node in the cluster unless set with selector labels. A deployment can scale pods on one or mode nodes, and it recovers pods when they crash.

The Mendix application is deployed using a **StatefulSet**. The StatefulSet generally provides the same control options as a deployment, but it will provide a stable index number to the pod as well as network ID and storage. The StatefulSet is used for the application to get the unique pod index number to identify which of the instances is allowed to run scheduled events.

Data storage should be externalized as much as possible, given how pods can be created, destroyed, or moved around. Destroying a pod will also destroy any data stored inside the containers started by the pod. When scaling the app, all instances should be able to retrieve the same data. This how-to uses node-bound **volume** mounts, but please check the list of available [clustered storage](https://kubernetes.io/docs/concepts/storage/volumes/) options.

To access your Mendix applications inside a pod from outside of the Kubernetes, a **service** must be created exposing the port. Services deal with pod discovery and pod lifecycles, so the consumer of a particular service doesn't need to know where a pod is or what IP is needed to access it.

## 4 Deploying the Components

### 4.1 Deploying the PostgreSQL Database

Once Minikube is running you'll need to configure your local environment to use the Docker daemon using the following command:

```bash
minikube docker-env
```

You'll need to build your image in Minikube if you haven't done so yet. See [Docker](/developerportal/deploy/docker-deploy/) for the steps to do this.

The first step is deploying our database. For Minikube, an external folder to persist the data outside of the database pod is used.

{{% alert color="info" %}}

For simplicity and compatibility with `minikube`, we mount a folder from the `minikube node`. This approach is not recommended for production.

{{% /alert %}}

Here is the definition of the `postgres-deployment.yaml` database component:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:11
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_DB
              value: db0
            - name: POSTGRES_USER
              value: mendix
            - name: POSTGRES_PASSWORD
              value: mendix
          volumeMounts:
            - mountPath: "/var/lib/postgresql/data"
              name: "mendix-pgdata"
      volumes:
        - hostPath:
            path: "/home/docker/pgdata"
          name: mendix-pgdata
```

To create the PostgreSQL database, we use the provided [postgres](https://hub.docker.com/_/postgres/) image. The environment variables provided in `env` are needed to configure the default database. Instead of setting the password in the *yaml* file directly, you can choose to use [secrets](https://kubernetes.io/docs/concepts/configuration/secret/).

And finally, it is necessary to expose the database as a service and make it available to the application. This is the definition of such a service:

(`postgres-service.yaml`):

```yml
apiVersion: v1
kind: Service
metadata:
  name: postgres-service
spec:
  type: ClusterIP
  ports:
    - port: 5432
  selector:
    app: postgres
```

To create all the mentioned components, use the following:

```bash
kubectl create -f postgres-deployment.yaml
kubectl create -f postgres-service.yaml
```

The database is now created. To verify the installation, check out the logs:

```bash
kubectl logs $(kubectl get pods -lapp=postgres -o name)
```

This is the expected output:

```
2017-09-14 08:34:37.538 UTC [1] LOG:  database system is ready to accept connections
```

The host and port values will be needed to deploy the application. To get these we execute the following command:

```bash
kubectl get service postgres-service
```

Windows users need to execute these inline commands first to get the pod name

```bash
kubectl get pods -lapp=postgres -o name
```

and use the pod name to retrieve the logs:

```bash
kubectl logs <name>
```

### 4.2 Deploying the Application{#deploy}

With the database running, we can deploy our application. We'll be using a sample Docker container with a Mendix app published in [hub.docker.com](https://hub.docker.com/r/mendix/sample-app-kubernetes/). To create a new Docker container for your Mendix app, see the description on the [docker-mendix-buildpack](https://github.com/mendix/docker-mendix-buildpack).

Before deploying the app, we'll create some secrets so that sensitive information for the application doesn't need to be in our *yaml* file. The secrets file has to be applied only once to the cluster, and the values will be kept there. For information on all of the options, see [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/). 

{{% alert color="info" %}}
The Secret values in the secrets file must be base64 encoded.
{{% /alert %}}

`mendix-app-secrets.yaml`:

```yml
apiVersion: v1
kind: Secret
metadata:
  name: mendix-app-secrets
type: Opaque
data:
  admin-password: YOUR_ADMIN_PASSWORD
  db-endpoint: YOUR_DATABASE_ENDPOINT
  license-key: YOUR_LICENSE_KEY
  license-id: YOUR_LICENSE_ID
```

YOUR-DATABASE-ENDPOINT will be in the form `postgres://mendix:mendix@255.255.255.255:5432/db0` (for example, `postgres://mendix:mendix@172.17.0.3:5432/db0`). You can find the correct IP address and port for your database endpoint using the command:

```bash
kubectl get ep postgres-service
```

See [Run a Mendix Docker Image](/developerportal/deploy/run-mendix-docker-image/) for expected value formats.

To create the secrets in Kubernetes we execute the following command:

```bash
kubectl create -f mendix-app-secrets.yaml
```

Once the database service and the secrets are created, you can create the application, which is defined in the file below.

`mendix-app.yaml`:

```yml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mendix-k8s-stateful
  labels:
    app: mendix-k8s
spec:
  serviceName: mendix-app-service
  replicas: 2
  selector:
    matchLabels:
      app: mendix-k8s
  template:
    metadata:
      labels:
        app: mendix-k8s
    spec:
      containers:
        - name: mendix-app
          image: <hub-user>/<repo-name>:<tag>
          imagePullPolicy: Always
          ports:
            - containerPort: 8080 
          volumeMounts:
            - mountPath: "/build/data/files"
              name: mendix-data
          env:
            - name: ADMIN_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: admin-password
            - name: DATABASE_ENDPOINT
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: db-endpoint
            - name: LICENSE_ID
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: license-id
            - name: LICENSE_KEY
              valueFrom:
                secretKeyRef:
                  name: mendix-app-secrets
                  key: license-key      
      volumes:
        - hostPath:
            path: "/home/docker/mendix-files"
          name: mendix-data
```

Replace `<hub-user>/<repo-name>:<tag>` with the Docker image of your app, for example, `mendix/sample-app-kubernetes:v3`.

Create a Docker image of your Mendix app using the instructions in the [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack) on GitHub.

Once you have created the Docker image, push it to the Docker hub using the following command:

```bash
docker push <hub-user>/<repo-name>:<tag>
```

Where `<hub-user>/<repo-name>:<tag>` is the Docker image of your app identified in *mendix-app.yaml*. For the example above, this is again `mendix/sample-app-kubernetes:v3`.

{{% alert color="info" %}}
In this example, we use a local storage folder on the node to show how to externalize the data stored for your app from the Docker container. For production systems, we recommend using the storage provided on the selected cloud platform.
{{% /alert %}}

Deploy the application to Kubernetes:

```bash
kubectl create -f mendix-app.yaml
```

#### 4.2.1 Some Notes on Scaling{#scaling}

The Mendix 7 Runtime is stateless, meaning that a client can talk to any server instance. However, scheduled events and database migrations should be handled by only one instance. For this, we use a container index count. The pod with index 0 will always trigger the schedule events and deal with database updates in case of an upgrade version.

To get a container index on Kubernetes, a StatefulSet can be used, which will append the instance index to the container's hostname. A deployment does not do this.

It should be noted that using a StatefulSet versus a deployment involves some difference in behavior. For example, a pod won't move to a different node when it crashes, and when the node is not reachable, the pod is not recreated on another system.

### 4.3 Making the App Available

To make the app available from the browser, it needs to be accessible outside of the cluster. For this, we use a service of the LoadBalancer or NodePort type. For Minikube we can use both, which exposes the app via an IP address.

If you deploy to a cloud provider, the method for publishing your app may be different (for example, some cloud providers can automatically update the load balancer to forward a URL request to the cluster). For more information, see [Create an External Load Balancer](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/).

The definition of publishing the Mendix app as a NodePort service is described in the following file:

`mendix-app-service.yaml`:

```yml
apiVersion: v1
kind: Service
metadata:
  name: mendix-app-service
  labels:
    app: mendix-k8s
spec:
  ports:
  - port: 8080
    protocol: TCP
  selector:
    app: mendix-k8s
  type: NodePort
```

Deploy the service:

```bash
kubectl create -f mendix-app-service.yaml
```

Check if the application is running using the command:

```bash
minikube service mendix-app-service
```

To get the URL to the application on Minikube, execute this command and open the link in your browser:

```bash
minikube service mendix-app-service --url
```

Congratulations! You have deployed your first Mendix app in Kubernetes.

## 5 Read More

* [Docker: Deploy](/developerportal/deploy/docker-deploy/)
* [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack)

