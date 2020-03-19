---
title: "Break Event"
parent: "events"
menu_order: 5
tags: ["studio pro", "break event", "event", "loop"]
---

## 1 Introduction

{{% alert type="warning" %}}
Break events can only be used inside [loops](loop).
{{% /alert %}}

A break event is used to stop iterating over the list of objects and continue with the rest of the flow.

## 2 Example

If you have you want to notify the user of any unpaid order lines you can use a break event. First, you retrieve all objects of the *OrderLine* entity that are associated with the order. You check whether each order line is paid or not. If the order line is paid, the microflow continues to the next order line. However, if an unpaid order line is found, the user is notified and the loop stops; the microflow breaks from the loop and continues with the rest of the microflow.

![](attachments/819203/917951.png)

## 3 Read More

* [Loop](loop)
* [Continue Event](continue-event)