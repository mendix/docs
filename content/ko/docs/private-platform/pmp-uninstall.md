---
title: "Private Mendix Platform 설치 제거"
url: /private-mendix-platform/uninstallation/
description: "Private Mendix Platform의 설치 제거 프로세스에 대해 설명합니다."
weight: 70
---

## 소개

필요한 경우 다음 단계를 수행하여 Private Mendix Platform을 설치 제거할 수 있습니다:

1. 선택 사항: 다음 명령을 실행하여 Private Mendix Platform이 설치되어 있는지 확인하십시오: `helm status mxplatform -n=<Private Mendix Platform namespace>`.
2. 다음 명령을 실행하여 Private Mendix Platform 리소스를 삭제하십시오: `helm uninstall mxplatform -n=<Private Mendix Platform namespace>`.
3. 선택 사항: 다음 명령을 실행하여 Svix가 설치되어 있는지 확인하십시오: `helm status svix-server -n=<Private Mendix Platform namespace>`.
4. 다음 명령을 실행하여 Svix 리소스를 삭제하십시오: `helm uninstall svix-server -n=<Private Mendix Platform namespace>`.
5. 다음 명령을 실행하여 PCLM을 설치 제거하십시오:

    ```text
    kubectl delete   svc/mx-privatecloud-license-manager -n=<ns> 
    kubectl   delete deployments/mendix-pclm  -n=<ns> 
    kubectl delete secret/mendix-pclm   mendix-operator-pclm  pclm-admin -n=<ns>
    ```

6. [Private Cloud Cluster: 네임스페이스 관리](/developerportal/deploy/private-cloud-cluster/#namespace-management)에 설명된 대로 Mendix Operator를 설치 제거하십시오.
7. Private Mendix Platform 네임스페이스도 삭제하려면 다음 명령을 실행하십시오: `kubectl delete namespace <Private Mendix Platform namespace>`.
