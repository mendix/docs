---
title: "WebSocket"
url: /refguide8/websockets-in-runtime/
description: "Mendix Runtime에서 WebSocket을 사용하는 방법을 설명합니다."
---

## 소개

Mendix Runtime은 `javax.websocket` API를 사용한 커스텀 웹 소켓 엔드포인트 등록을 지원합니다.

`Core.addWebSocketEndpoint(String path, Endpoint endpoint)` 메서드를 사용하여 지정된 경로의 웹 소켓 요청에 응답할 `javax.websocket.Endpoint` 인스턴스를 등록하기만 하면 됩니다.

{{% alert color="info" %}}
`Core#addRequestHandler`와 마찬가지로 웹 소켓 엔드포인트 추가는 현재 클러스터 노드에서만 발생합니다. 따라서 **After Startup** Microflow에서 호출하는 것이 좋습니다.
{{% /alert %}}

아래는 Mendix 앱에서 웹 소켓을 등록하는 방법의 예시입니다.

## 예시

엔드포인트의 간단한 구현은 아래와 같습니다.

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

이 엔드포인트를 `Core.addWebSocketEndpoint("/my-endpoint", new websockets.TestEndpoint());`를 호출하여 등록하면 `ws://.../my-endpoint`에서 다음 기능을 사용할 수 있습니다:

* 연결이 설정되면 서버가 `socket opened` 메시지를 보냅니다
* 클라이언트가 `test message` 메시지를 보내면 서버가 `test response`로 응답하고 웹 소켓을 닫습니다
