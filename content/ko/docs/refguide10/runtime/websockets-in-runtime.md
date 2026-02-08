---
title: "WebSockets"
url: /refguide10/websockets-in-runtime/
description: "Mendix Runtime에서 WebSocket을 사용하는 방법을 설명합니다."
---

## 소개

Mendix Runtime은 `javax.websocket` API를 사용하여 사용자 지정 웹 소켓 엔드포인트 등록을 지원합니다.

`Core.addWebSocketEndpoint(String path, Endpoint endpoint)` 메서드를 사용하여 지정된 경로에서 웹 소켓 요청에 응답하는 `javax.websocket.Endpoint` 인스턴스를 등록하기만 하면 됩니다. 클라이언트의 Session ID는 `Endpoint`의 `onOpen` 메서드에서 제공되는 `EndpointConfig`에서 가져올 수 있습니다.

{{% alert color="info" %}}
`Core#addRequestHandler`와 마찬가지로, 웹 소켓 엔드포인트 추가는 현재 클러스터 노드에서만 이루어집니다. 따라서 **After Startup** Microflow에서 호출하는 것이 좋습니다.
{{% /alert %}}

아래는 Mendix 앱에서 WebSocket을 등록하는 방법의 예입니다.

## 예제

간단한 엔드포인트 구현은 아래와 같습니다.

```java
import javax.websocket.CloseReason;
import javax.websocket.Endpoint;
import javax.websocket.EndpointConfig;
import javax.websocket.MessageHandler;
import javax.websocket.Session;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import com.mendix.core.Core;

public class TestEndpoint extends Endpoint {
  Set<Session> sessions = new HashSet<>();

  @Override
  public void onOpen(Session session, EndpointConfig config) {
    String sessionId = (String) config.getUserProperties().get("mxSessionId");
    ISession mxSession = Core.getSessionById(UUID.fromString(sessionId));
    String username = mxSession.getUserName();
    sessions.add(session);
    session.addMessageHandler(new MessageHandler.Whole<String>() {
      @Override
      public void onMessage(String message) {
        if ("test message".equals(message)) {
          try {
            session.getBasicRemote().sendText("test response:" + username);
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

이 엔드포인트를 `Core.addWebSocketEndpoint("/my-endpoint", new websockets.TestEndpoint());`로 등록하면 `ws://.../my-endpoint`에서 다음 기능을 사용할 수 있습니다:

* 연결이 설정되면 서버가 `socket opened` 메시지를 전송합니다
* 클라이언트가 `test message` 메시지를 보내면 서버는 `test response: USERNAME`으로 응답하고 웹 소켓을 닫습니다
