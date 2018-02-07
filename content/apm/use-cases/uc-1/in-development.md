---
title: "In development"
parent: "use-cases-1"
---
During the development the performance tool is used when a function is seen as slow. Also it can be used to verify the expected flow/path is followed.

Instead of debugging with breakpoint you can just record everything and analyse afterwards. This is especially helpful in complex modules with web service interfaces and scheduled events were you cannot simply follow a flow.

The trap tool is saving time because logging from an error is immediately stored and you can even run the microflow logging through the performance tool. In development the trap tool records a longer period of time, so trap memory can be used to send to the performance tool and see what is happening.

The statistics tool snapshots are stored also on shutdown of the Mendix application, so during development also an interesting comparing analyses can be done.

The query tool can be used to do an explain plan of long running queries.
