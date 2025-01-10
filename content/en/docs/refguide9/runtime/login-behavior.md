---
title: "Login Behavior"
url: /refguide9/login-behavior/
description: "Describes default and customized login behavior in the Mendix Runtime."
---

## Default Login Behavior

A user is blocked after three consecutive bad login attempts, regardless of the time between the login attempts. The failed login count is reset after a successful login attempt or when a blocked user is unblocked. Blocking users only occurs when the app security level is set to **Production**.

Users that have been blocked for at least five minutes are unblocked each time the cluster manager runs and, at that point, the failed login count is reset to 0. By default, the cluster manager runs every five minutes. This interval can be changed using [Runtime customization](/refguide9/custom-settings/) to change the `ClusterManagerActionInterval` setting.

{{% alert color="warning" %}}
The cluster manager does more than just unblocking users. For example, it also removes expired sessions. So changing this interval has a broader impact.
{{% /alert %}}

{{% alert color="info" %}}
In versions of Mendix below 9.11.0, the cluster manager will unblock *all* blocked users when it runs, even if they have been blocked for less than five minutes.
{{% /alert %}}

{{% alert color="info" %}}
Cluster manager behavior currently cannot be changed.
{{% /alert %}}

## Customizing Login Behavior

Login behavior can be customized by implementing a custom Java action and registering it to be used instead of the default login action. To do this you need to perform the following steps, saving the updated Java in the `javasource` folder of your app.

1. Create a subclass of `UserAction<ISession>` similar to following:

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

1. Create a new Java action that replaces the `LoginAction` with our custom one:

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

1. Update the [After Startup](/refguide9/app-settings/#after-startup) microflow to invoke the Java action which replaces the `LoginAction`.
