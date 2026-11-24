---
title: "Login Behavior"
url: /refguide/login-behavior/
description: "Describes default and customized login behavior in the Mendix Runtime."
---

## Default Login Behavior

A user is blocked after three consecutive bad login attempts, regardless of the time between the login attempts. The failed login count is reset after a successful login attempt or when a blocked user is unblocked. Blocking users only occurs when the app security level is set to **Production**.

Users that have been blocked for at least five minutes are unblocked each time the cluster manager runs and, at that point, the failed login count is reset to 0. By default, the cluster manager runs every five minutes. This interval can be changed using [Runtime customization](/refguide/custom-settings/) to change the `ClusterManagerActionInterval` setting.

{{% alert color="warning" %}}
The cluster manager does more than just unblocking users. For example, it also removes expired sessions. So changing this interval has a broader impact.
{{% /alert %}}

{{% alert color="info" %}}
Cluster manager behavior currently cannot be changed.
{{% /alert %}}

## Blocked and Inactive Users and Existing Sessions {#blocked-inactive}

Blocking a user, either automatically after failed login attempts or manually by setting the `Blocked` attribute of the user, only prevents that user from signing in again. It does not end sessions the user already has. This is a deliberate design decision to prevent a bad actor from entering a wrong password for a user's account three times and the system signing them out.

To sign a user out, set their `Active` attribute to `false` to end their existing sessions. The session ends on each node of the cluster once that node's cached copy of the session expires. By default, this takes up to 30 seconds, so requests during that time may still succeed. You can change this time with the [`SessionValidationTimeout`](/refguide/custom-settings/#SessionValidationTimeout) setting.

If you block a user manually and you want them to lose access immediately, either set their `Active` attribute to `false` or delete their sessions (that is, `System.Session` objects associated with the user). If you are on an older version of Mendix than the ones which introduced ending sessions which were not active, you must use the deleting sessions method.

{{% alert color="info" %}}
Ending the sessions of a user marked as not active was introduced in Mendix 11.17.0 and LTS/MTS versions 11.12.9 and 11.6.14.
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

1. Update the [After Startup](/refguide/runtime-tab/#after-startup) microflow to invoke the Java action which replaces the `LoginAction`.
