---
title: "Configuring CI/CD on Kubernetes"
url: /private-mendix-platform/configure-k8s/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
aliases:
    - /private-mendix-platform-configure-k8s/
---
## 1 Introduction

This document explains the configuration options available when configuring a Continuous Integration and Delivery (CI/CD) solution for Private Mendix Platform on a Kubernetes Cluster.

### 1.1 Prerequisites

To configure the CI/CD pipeline, prepare the following:

* A namespace where you want to deploy the Mendix app.
* An S3-compatible endpoint where you can store an MDA file.

## 2 Configuring the CI/CD Pipeline

If you have a Kubernetes cluster, you can set Kubernetes as your CI System in **Settings** > **DevOps** > **CI/CD**. You need to first obtain and configure a [CA certificate](#ca-certificate), and then configure the followings settings:

* [Build Cluster Setting](#build-cluster)
* [Build Images Setting](#build-images)
* [S3 Bucket Setting](#s3-bucket)

Finally, you must also [register your Kubernetes cluster](#register-cluster).

{{< figure src="/attachments/private-platform/pmp-cicd1.png" class="no-border" >}}

### 2.1 Obtaining and Configuring the CA Certificate {#ca-certificate}

Most Kubernetes cluster API servers use self-signed certificates. In order to access the API server from Private Mendix Platform, you must add its CA certificate to the operator configuration of the namespace where Private Mendix Platform is installed. For more information, see [Creating a Private Cloud Cluster: Custom TLS](/developerportal/deploy/standard-operator/#custom-tls).

You can obtain the CA certificate by running the following commands:

```text
export context=`kubectl config current-context`
export cluster=`kubectl config view -o jsonpath="{.contexts[?(@.name == \"$context\")].context.cluster}"`
kubectl config view --raw -o jsonpath="{.clusters[?(@.name == \"$cluster\")].cluster.certificate-authority-data}" | base64 -d > custom.crt
```

If you are configuring a custom CA certificate for the first time, you must also update the Mendix Operator configuration for Private Mendix Platform by running the following command:

```text
# update operator configuration
# please switch kubeconfig file if PMP cluster is different with app cluster.
export namespace=YOUR_PMP_NAMESPACE
kubectl -n ${namespace} create secret generic mendix-custom-ca --from-file=custom.crt=custom.crt
echo -e "spec:\n  trust:\n    customCASecretName: mendix-custom-ca" > patchfile
kubectl -n ${namespace} patch operatorconfiguration mendix-operator-configuration --type merge --patch-file patchfile
```

If you have already configured a custom CA certificate, you must only add your new CA certificate to the secret and restart Private Mendix Platform.

### 2.2 Configuring Build Cluster Setting {#build-cluster}

The settings in this section configure the Kubernetes cluster.

**API Server** - Your Kubernetes API server.

**Namespace** - The namespace used to create the Kubernetes pod.

**Token** - You must create a service account, role, and role binding in the above namespace, and then get the service account’s token. For reference, see the following shell script:

```text
# create ServiceAccount, Role, and RoleBinding
export NAMESPACE=default
kubectl create namespace $NAMESPACE || true
kubectl apply -f << EOF -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
---
apiVersion: v1
kind: Secret
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
  annotations:
    kubernetes.io/service-account.name: mxplatform-cicd
type: kubernetes.io/service-account-token
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
rules:
- apiGroups:
  - ""
  resources:
  - pods
  - pods/log
  verbs:
  - create
  - get
  - delete
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: mxplatform-cicd
  namespace: $NAMESPACE
subjects:
- kind: ServiceAccount
  name: mxplatform-cicd
  namespace: $NAMESPACE
roleRef:
  kind: Role
  name: mxplatform-cicd
  apiGroup: rbac.authorization.k8s.io
EOF

# get service account token:
kubectl get secret mxplatform-cicd -n$NAMESPACE -o jsonpath='{.data.token}'|base64 -d
# for openshift cluster
kubectl get secret mxplatform-cicd -n$NAMESPACE -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
```

### 2.3 Configuring Build Images Setting {#build-images}

The settings in this section configure the images.

**Auto Detect Mx Version** - Selecting this check box allows you to build any runtime version project. The CI pipeline will detect the Mendix runtime version of your project, and download the corresponding build package. If this setting is not selected, you must specify the Mendix runtime version before creating MDA package for the first time. Private Mendix Platform will then remember the version number, so that you do not need to specify it again for the next build.

**Keep Build Pod** - Select this checkbox to keep the build pod after the build is completed. This is useful for troubleshooting if the build failed due to pod creation failure or build failure. You can describe the pod to see its status, or check the logs of the pod.

**Run As User** - The default value is *1001110000*. For an OpenShift cluster, you must check the user ID range by using the below command, and check the annotations. For example, for `openshift.io/sa.scc.uid-range: 1001190000/10000`, you can choose one ID from the *1001190000 - 1001199999* range.

```text
export NAMESPACE=default
kubectl get ns $NAMESPACE -oyaml
```

**Git Registry** - The default value is `bitnami/git`. If you want to build your own image, you must make sure that the `git`, `curl`, and `tar` commands are included. The downloaded build package will reuse this image.

**Mx Version Detect Image** - This setting is only applicable if you selected the Auto Detect Mx Version check box. The default value is `private-cloud.registry.mendix.com/mxpc-pipeline-tools-cli:0.0.8`. This image is used to detect the Mendix runtime version for your project.

**Mono Build Image** - This setting is only applicable if you selected the Auto Detect Mx Version check box. The default value is `public.ecr.aws/p2w4x6l6/mono520-jdk11-ubi8-1`.

**Build Package Path** - This setting is only applicable if you selected the Auto Detect Mx Version check box. The default value is `https://cdn.mendix.com/runtime`. If you have your own file server, you must download the package from the Mendix Content Delivery Network, and then upload it to your file server. You can also use an S3 bucket for this purpose. The file name format is `mxbuild-9.24.1.4658.tar.gz`.

**Mxbuild Image** - This setting is only applicable if you selected the Auto Detect Mx Version check box. The default value is `private-cloud.registry.mendix.com/mxbuild`. The full image is `private-cloud.registry.mendix.com/mxbuild:x.xx.x.xxxx`, where `x.xx.x.xxxx` is the Mendix runtime version for your project, for example, 9.24.1.4658. 

**Upload Image** - The default value is `amazon/aws-cli`. With this image, the AWS CLI will be used to upload the MDA file and metadata.json to an S3 bucket.

### 2.4 Configuring S3 Bucket Setting {#s3-bucket}

The settings in this section configure the S3 bucket.

**S3 Endpoint** - For example, `https://s3.ap-southeast-1.amazonaws.com`.

**No Verify SSL** - Select this checkbox if you use your own bucket server, and its certificate is self-signed. Selecting this option adds --no-verify-ssl to the AWS CLI command to avoid failure.

**S3 Bucket Name** - Your S3 bucket name, for example, *mybucket*.

**Mda Location** - Your S3 bucket name's domain, for example, `https://mybucket.s3.ap-southeast-1.amazonaws.com`. This URL is used to access build artifacts, the whole path is: `Mda Location + Appid + Mda/Meta file`. Please make sure it is publicly accessible without any authentication.

**Region** - For example, `ap-southeast-1`.

**Use K8S Secret** - Select whether you want to input the **Access Key ID** and **Secret Access Key**, or set them in a Kubernetes secret. Enable this setting to avoid showing sensitive credentials in a build pod.

**Secret Name** - This setting is only applicable if you selected the **Use K8S Secret** check box. This is the secret name where you want to store the **Access Key ID** and **Secret Access Key**. Use the following command to create this secret, where your-namespace is the namespace that you specified in **Build Cluster Setting** > **Namespace**.

```text
kubectl create secret generic mxplatform-awssecret -n your-namespace --from-literal=aws_access_key_id=your-aws-access-key-id --from-literal=aws_secret_access_key=your-aws-secret-access-key
```

**Access Key ID** - This setting is only applicable if you did not select the Use K8S Secret check box. This value is used to access the S3 bucket.

**Secret Access Key** - This setting is only applicable if you did not select the Use K8S Secret check box. This value is used to access the S3 bucket.

### 2.5 Registering a Kubernetes Cluster {#register-cluster}

Before creating any environments, you must register your Kubernetes clusters by doing the following steps:

1. Click **Register New Cluster**.
2. Configure the following values:
    
    * **Cluster Name** - Specify a name for the cluster.
    * **API Server** - Specify your Kubernetes API server.
    * **Token** - You must first create a service account, cluster role, and cluster role binding in the cluster, and  then get the service account's token. For reference, see the following shell script:

        ```text
        # create ServiceAccount, ClusterRole, and ClusterRoleBinding
        kubectl apply -f << EOF -
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: mxplatform-cicd
          namespace: kube-system
        ---
        apiVersion: v1
        kind: Secret
        metadata:
          name: mxplatform-cicd
          namespace: kube-system
          annotations:
            kubernetes.io/service-account.name: mxplatform-cicd
        type: kubernetes.io/service-account-token
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: mxplatform-cicd
        rules:
        - apiGroups:
          - ""
          resources:
          - namespaces
          verbs:
          - list
        - apiGroups:
          - privatecloud.mendix.com
          resources:
          - storageplans
          verbs:
          - list
        - apiGroups:
          - privatecloud.mendix.com
          resources:
          - mendixapps
          verbs:
          - '*'
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: mxplatform-cicd
        subjects:
        - kind: ServiceAccount
          name: mxplatform-cicd
          namespace: kube-system
        roleRef:
          kind: ClusterRole
          name: mxplatform-cicd
          apiGroup: rbac.authorization.k8s.io
        EOF

        # get service account token:
        kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
        # for openshift cluster
        kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
        ```

3. Optionally, enable the **Help Me** feature. For reference, see the following shell script:

    ```text
    # create ServiceAccount, ClusterRole, and ClusterRoleBinding
    kubectl apply -f << EOF -
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: mxplatform-cicd
      namespace: kube-system
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: mxplatform-cicd
      namespace: kube-system
      annotations:
        kubernetes.io/service-account.name: mxplatform-cicd
    type: kubernetes.io/service-account-token
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
        name: mxplatform-cicd
    rules:
    - apiGroups:
        - ""
        resources:
        - namespaces
        verbs:
        - list
    - apiGroups:
        - ""
        resources:
        - deployments
        verbs:
        - get
        - list
        - watch
    - apiGroups:
        - ""
        resources:
        - pods
        verbs:
        - get
        - list
    - apiGroups:
        - ""
        resources:
        - pods/log
        verbs:
        - get
    - apiGroups:
        - ""
        resources:
        - events
        verbs:
        - get
        - list
    - apiGroups:
        - privatecloud.mendix.com
        resources:
        - storageplans
        verbs:
        - list
    - apiGroups:
        - privatecloud.mendix.com
        resources:
        - mendixapps
        verbs:
        - '*'
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
        name: mxplatform-cicd
    subjects:
    - kind: ServiceAccount
        name: mxplatform-cicd
        namespace: kube-system
    roleRef:
        kind: ClusterRole
        name: mxplatform-cicd
        apiGroup: rbac.authorization.k8s.io
    EOF

    # get service account token:
    kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
    # for openshift cluster
    kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
    ```

4. Click **Save**.

5. Click the newly created cluster and expand it, and then click **Retrieve Namespace(s)** to retrieve all the namespace and storage plans. 
    
    Namespaces without any storage plan are skipped. This step requires the Mendix Operator to be installed and configured. You can repeat this step as required to retrieve additional namespaces.

6. After the cluster is registered, create environments with the cluster, namespace and plans.

## 3 Architecture of the CI/CD Pipeline

The diagrams in this section present the architecture and components of the pipeline. The architecture is different depending on whether you enabled the Auto Detect Mx Version build image setting.

### 3.1 Architecture with the Auto Detect Mx Version Setting Enabled

The following diagram shows the architecture of the pipeline if you enable the **Auto Detect Mx Version** setting. For more information, see [Build Images Setting](#build-images) above.

{{< figure src="/attachments/private-platform/pmp-cicd2.png" alt="Auto Detect Mx Runtime Version" class="no-border" >}}

### 3.2 Architecture with the Auto Detect Mx Version Setting Disabled

The following diagram shows the architecture of the pipeline if you disable the **Auto Detect Mx Version** setting. For more information, see [Build Images Setting](#build-images) above.

{{< figure src="/attachments/private-platform/pmp-cicd3.png" alt="User Input Mx Runtime Version" class="no-border" >}}
