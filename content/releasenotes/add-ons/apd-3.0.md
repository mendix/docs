---
title: "3.0"
parent: "apd-3"
---

## 3.0.0

### Renamed to Application Performance Diagnostics (APD)
APM has been renamed to APD since that better covers the functionality and since APD can work side-by-side with other APM solutions.

### SMART Digital Factory API's
* APD is a part of Mansystems SMART Digital Factory and therefore APD has an API, so the SMART Digital Factory can use APD functions like statistics snapshots and recording.
* Also, for SMART Digital Factory users APD can now run your unit tests from our CI/CD via the APD runtime agent 

### Scalability
With the growth of our customer base we felt the need to work on the architecture and scalability of APD:
* The APD browser agent has been redesigned to communicate through the runtime agent instead of directly to the APM manager. Even if customer apps have 10 users on average this reduces the connections to the APM manager tenfold.
* The APD manager has an improved queuing mechanism to handle higher loads
* The APD data cleanup has improved performance
* The APD runtime agent also has several small improvements

### Support
* Off course we keep adding support for the latest Mendix releases
* Improved safeguards in the APD agent. The safeguards are there to make sure the APD agent does not use too much resources and does not affect the system too much.
* The safeguard for memory usage used to clear buffer and stop the agent. This was not wanted on occasional memory spikes, so we enhanced this feature to not stop, but pause on a memory spike. The APD then resumes collecting statistics after 10 minutes and thus both giving the system a chance to recover from whatever was causing the memory use and after that continuing doing its invaluable work.
