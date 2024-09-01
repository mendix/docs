---
title: "Configuring CI/CD on Kubernetes"
url: /private-mendix-platform/configure-k8s/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
aliases:
    - /private-mendix-platform-configure-k8s/
---
## Introduction

This document explains the configuration options available when configuring a Continuous Integration and Delivery (CI/CD) solution for Private Mendix Platform on a Kubernetes Cluster.

### Prerequisites

To configure the CI/CD pipeline, prepare the following:

* A namespace where you want to deploy the Mendix app.
* An S3-compatible endpoint where you can store an MDA file.

## Configuring the CI/CD Pipeline

If you have a Kubernetes cluster, you can set Kubernetes as your CI System in **Settings** > **DevOps** > **CI/CD**. You need to first obtain and configure a [CA certificate](#ca-certificate), and then configure the followings settings:

* [Build Cluster Setting](#build-cluster)
* [Build Images Setting](#build-images)
* [S3 Bucket Setting](#s3-bucket)

Finally, you must also [register your Kubernetes cluster](#register-cluster).

{{< figure src="/attachments/private-platform/pmp-cicd1.png" class="no-border" >}}

### Obtaining and Configuring the CA Certificate {#ca-certificate}

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
echo -e "spec:\n trust:\n    customCASecretName: mendix-custom-ca" > patchfile
kubectl -n ${namespace} patch operatorconfiguration mendix-operator-configuration --type merge --patch-file patchfile
```

If you have already configured a custom CA certificate, you must only add your new CA certificate to the secret and restart Private Mendix Platform.

### Configuring Build Cluster Setting {#build-cluster}

The settings in this section configure the Kubernetes cluster.

**API Server** - Your Kubernetes API server.

**Namespace** - The namespace used to create the Kubernetes pod.

**Token** - You must create a service account, role, and role binding in the above namespace, and then get the service account's token. For reference, see the following shell script:

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

### Configuring Build Images Setting {#build-images}

The settings in this section configure the images.

**Keep Build Pod** - Select this checkbox to keep the build pod after the build is completed. This is useful for troubleshooting if the build failed due to pod creation failure or build failure. You can describe the pod to see its status, or check the logs of the pod.

**Run As User** - The default value is *1001110000*. For an OpenShift cluster, you must check the user ID range by using the below command, and check the annotations. For example, for `openshift.io/sa.scc.uid-range: 1001190000/10000`, you can choose one ID from the *1001190000 - 1001199999* range.

```text
export NAMESPACE=default
kubectl get ns $NAMESPACE -oyaml
```

**Build Image** - The default value is private-cloud.registry.mendix.com/privateplatform/pmp-pipeline-tools. This image is used to build MDA package and OCI image.

**Build Package Path** - The default value is https://cdn.mendix.com/runtime. If you have your own file server, you must download the package from the Mendix Content Delivery Network, and then upload it to your file server. You can also use an S3 bucket for this purpose. The file name format is mxbuild-9.24.1.4658.tar.gz.

**Build OCI Image** - Select this check box to build the OCI image besides the MDA file. Only OCI image can be used for deployment if this is checked.

**Runtime Base Image** - This setting is only applicable if you selected the **Build OCI Image** check box. The default value is `private-cloud.registry.mendix.com/app-building-blocks`. If you are in an air gap environment, sync tag `ubi9-1-jre{XX}-entrypoint` and `runtime-{YYYYY}`, where `{XX}` is java version in your app, and `{YYYYY}` is your app runtime version. For example: `app-building-blocks:ubi9-1-jre21-entrypoint` and `app-building-blocks:runtime-10.12.1.39914`.

**Allow Anonymous Access** - Select this checkbox if above Runtime Base Image is accessible without authentication.

**Runtime Base Registry User** - This setting is only applicable if you did not select the **Allow Anonymous Access** check box. User name for the registry authentication.

**Runtime Base Registry Password** - This setting is only applicable if you did not select the **Allow Anonymous Access** check box. Password for the registry authentication.

**OCI Registry** - This setting is only applicable if you selected the **Build OCI Image** check box. This registry is used to store OCI image, also repository name should be appended to the registry, quay.io/pmp as an example. 

**OCI Registry User** - This setting is only applicable if you selected the **Build OCI Image** check box. User name for the registry authentication.

**OCI Registry Password** - This setting is only applicable if you selected the **Build OCI Image** check box. Password for the registry authentication.

### Configuring S3 Bucket Setting {#s3-bucket}

The settings in this section configure the S3 bucket.

**S3 Endpoint** - For example, `https://s3.ap-southeast-1.amazonaws.com`.

**No Verify SSL** - Select this checkbox if you use your own bucket server, and its certificate is self-signed. Selecting this option adds --no-verify-ssl to the AWS CLI command to avoid failure.

**S3 Bucket Name** - Your S3 bucket name, for example, *mybucket*.

**Mda Location** - Your S3 bucket name's domain, for example, `https://mybucket.s3.ap-southeast-1.amazonaws.com`. This URL is used to access build artifacts, the whole path is: `Mda Location + Appid + Mda/Meta file`. Make sure it is publicly accessible without any authentication.

**Region** - For example, `ap-southeast-1`.

**Use K8S Secret** - Select whether you want to input the **Access Key ID** and **Secret Access Key**, or set them in a Kubernetes secret. Enable this setting to avoid showing sensitive credentials in a build pod.

**Secret Name** - This setting is only applicable if you selected the **Use K8S Secret** check box. This is the secret name where you want to store the **Access Key ID** and **Secret Access Key**. Use the following command to create this secret, where your-namespace is the namespace that you specified in **Build Cluster Setting** > **Namespace**.

```text
kubectl create secret generic mxplatform-awssecret -n your-namespace --from-literal=aws_access_key_id=your-aws-access-key-id --from-literal=aws_secret_access_key=your-aws-secret-access-key
```

**Access Key ID** - This setting is only applicable if you did not select the Use K8S Secret check box. This value is used to access the S3 bucket.

**Secret Access Key** - This setting is only applicable if you did not select the Use K8S Secret check box. This value is used to access the S3 bucket.

### Registering a Kubernetes Cluster {#register-cluster}

Before creating any environments, you must register your Kubernetes clusters by doing the following steps:

1. Click **Register New Cluster**.
2. Configure the following values:
    
    * **Cluster Name** - Specify a name for the cluster.
    * **API Server** - Specify your Kubernetes API server.
    * **Token** - You must first create a service account, cluster role, and cluster role binding in the cluster, and then get the service account's token. For reference, see the following shell script:

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

## Architecture of the CI/CD Pipeline

The diagrams in this section present the architecture and components of the pipeline. For more information, see [Build Images Setting](#build-images) above.

{{< figure src="/attachments/private-platform/pmp-cicd2.png" alt="Auto Detect Mx Runtime Version" class="no-border" >}}
