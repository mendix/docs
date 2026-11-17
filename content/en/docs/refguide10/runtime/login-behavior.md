---
title: "Login Behavior"
url: /refguide10/login-behavior/
description: "Describes default and customized login behavior in the Mendix Runtime."
---

## Default Login Behavior

A user is blocked after three consecutive bad login attempts, regardless of the time between the login attempts. The failed login count is reset after a successful login attempt or when a blocked user is unblocked. Blocking users only occurs when the app security level is set to **Production**.

Users that have been blocked for at least five minutes are unblocked each time the cluster manager runs and, at that point, the failed login count is reset to 0. By default, the cluster manager runs every five minutes. This interval can be changed using [Runtime customization](/refguide10/custom-settings/) to change the `ClusterManagerActionInterval` setting.

{{% alert color="warning" %}}
The cluster manager does more than just unblocking users. For example, it also removes expired sessions. So changing this interval has a broader impact.
{{% /alert %}}

{{% alert color="info" %}}
Cluster manager behavior currently cannot be changed.
{{% /alert %}}

## Blocked and Inactive Users and Existing Sessions

Blocking a user, either automatically after failed login attempts or manually by setting the **Blocked** attribute of the user, only prevents that user from signing in again. It does not end sessions the user already has. This is deliberate: otherwise anyone could sign another user out by entering a wrong password for their account three times.

Setting the **Active** attribute of a user to false does end their existing sessions. The session is ended on the user's next request, on every node of the cluster.

If you block a user manually because they should lose access immediately, also set them to inactive or delete their sessions (`System.Session` objects associated with the user).

{{% alert color="info" %}}
Ending the sessions of inactive users was introduced in Mendix 10.24.30. In earlier versions, an inactive user could keep using an existing session for as long as it was kept alive.
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

1. Update the [After Startup](/refguide10/app-settings/#after-startup) microflow to invoke the Java action which replaces the `LoginAction`.
