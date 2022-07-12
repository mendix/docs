---
title: "WebSockets"
url: /refguide8/websockets-in-runtime/
category: "Mendix Runtime"
description: "A description of how to use websockets in the Mendix Runtime"
tags: ["runtime", "web socket", "endpoint", "java"]
---

## 1 Introduction

The Mendix Runtime supports registering custom web socket endpoints using the `javax.websocket` API.

All you need to do is to use the method `Core.addWebSocketEndpoint(String path, Endpoint endpoint)` to register an instance of `javax.websocket.Endpoint` to respond to web socket requests on the given path.

{{% alert color="info" %}}
As with `Core#addRequestHandler`, adding a web socket end point only happens on the current cluster node. It is therefore a good practice to call it in an **After Startup** microflow.
{{% /alert %}}

Below is an example of how to register a websocket in your Mendix app.

## 2 Example

A simple implementation of an endpoint is shown below.

```java
import javax.websocket.CloseReason;
import javax.websocket.Endpoint;
import javax.websocket.EndpointConfig;
import javax.websocket.MessageHandler;
import javax.websocket.Session;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class TestEndpoint extends Endpoint {
  Set<Session> sessions = new HashSet<>();

  @Override
  public void onOpen(Session session, EndpointConfig config) {
    sessions.add(session);
    session.addMessageHandler(new MessageHandler.Whole<String>() {
      @Override
      public void onMessage(String message) {
        if ("test message".equals(message)) {
          try {
            session.getBasicRemote().sendText("test response");
            session.close();
          } catch (IOException e) {
            e.printStackTrace();
          }
        }
      }
    });

    try {
      session.getBasicRemote().sendText("socket opened");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  @Override
  public void onClose(Session session, CloseReason closeReason) {
    System.out.println("Received onClose call with reason: " + closeReason);
    sessions.remove(session);
  }
}
```

If this endpoint is registered by calling `Core.addWebSocketEndpoint("/my-endpoint", new websockets.TestEndpoint());` then the following functionality is available at `ws://.../my-endpoint`:

* When a connection is established, the server will send the message `socket opened`
* If the client sends the message `test message`, the server responds with `test response` and closes the web socket
