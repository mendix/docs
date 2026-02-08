---
title: "로그인 동작"
url: /refguide10/login-behavior/
description: "Mendix Runtime의 기본 및 사용자 지정 로그인 동작을 설명합니다."
---

## 기본 로그인 동작

사용자는 로그인 시도 사이의 시간에 관계없이 3회 연속 잘못된 로그인 시도 후 차단됩니다. 실패한 로그인 횟수는 성공적인 로그인 시도 후 또는 차단된 사용자가 차단 해제될 때 재설정됩니다. 사용자 차단은 앱 보안 수준이 **Production**으로 설정된 경우에만 발생합니다.

최소 5분 이상 차단된 사용자는 Cluster Manager가 실행될 때마다 차단이 해제되며, 이 시점에서 실패한 로그인 횟수가 0으로 재설정됩니다. 기본적으로 Cluster Manager는 5분마다 실행됩니다. 이 간격은 [런타임 사용자 지정](/refguide10/custom-settings/)을 사용하여 `ClusterManagerActionInterval` 설정을 변경하여 조정할 수 있습니다.

{{% alert color="warning" %}}
Cluster Manager는 사용자 차단 해제 외에도 다른 작업을 수행합니다. 예를 들어, 만료된 세션도 제거합니다. 따라서 이 간격을 변경하면 더 넓은 영향이 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
현재 Cluster Manager 동작은 변경할 수 없습니다.
{{% /alert %}}

## 로그인 동작 사용자 지정

사용자 지정 Java Action을 구현하고 기본 로그인 액션 대신 사용하도록 등록하여 로그인 동작을 사용자 지정할 수 있습니다. 이를 위해 다음 단계를 수행하고 업데이트된 Java를 앱의 `javasource` 폴더에 저장해야 합니다.

1. 다음과 유사한 `UserAction<ISession>`의 하위 클래스를 생성합니다:

    ```Java
    public class CustomLoginAction extends UserAction<ISession> {
      private final Map<String, ?> params;

      public CustomLoginAction(IContext context, java.util.Map<String, ? extends Object> params) {
        super(context);
        this.params = params;
      }

      @Override
      public ISession executeAction() throws Exception {
        // perform custom login steps using info received in param
        ...
      }
    }
    ```

1. `LoginAction`을 사용자 지정 액션으로 교체하는 새 Java Action을 생성합니다:

    ```Java
    public java.lang.Void executeAction() throws Exception
    {
    Core.addUserAction(CustomLoginAction.class);
    
    UserActionListener<LoginAction> loginActionListener = new UserActionListener<>(LoginAction.class) {
        @Override
        public boolean check(LoginAction loginAction) {
        return true;
        }
    };
    
    loginActionListener.addReplaceEvent(CustomLoginAction.class.getName());
    Core.getListenersRegistry().addListener(loginActionListener);
    }
    ```

1. `LoginAction`을 교체하는 Java Action을 호출하도록 [After Startup](/refguide10/app-settings/#after-startup) Microflow를 업데이트합니다.
