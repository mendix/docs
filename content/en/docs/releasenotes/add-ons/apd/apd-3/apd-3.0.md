---
title: "3.0"
url: /releasenotes/add-ons/apd-3.0/
---

## 3.0.0

**Release date: March 9th, 2020**

### APM Renamed to Application Performance Diagnostics (APD)

APM has been renamed to [Application Performance Diagnostics (APD)](/addons/apd-addon/rg-three-apd/), since that better covers the functionality and since APD can work side-by-side with other APM solutions.

### SMART Digital Factory APIs

* Because APD is a part of the CLEVR SMART Digital Factory, APD has an API so that the SMART Digital Factory can use APD functions like statistics snapshots and recording.
* For SMART Digital Factory users, APD can now run your unit tests from our CI/CD via the APD runtime agent.

### Scalability

With the growth of our customer base, we felt the need to work on the architecture and scalability of APD, so we made the following improvements:

* The APD browser agent has been redesigned to communicate through the runtime agent instead of directly to the APM manager. Even if customer apps have 10 users on average, this reduces the connections to the APM manager tenfold.
* The [APD Manager](https://apd.mendix.com/) has an improved queuing mechanism to handle higher loads.
* The APD data cleanup has improved performance.
* The APD runtime agent has several small improvements.

### Support

* We keep adding support for the latest Mendix releases.
* We improved the safeguards in the APD agent. These safeguards are there to make sure the APD agent does not use too many resources and does not affect the system too much.
* We improved the she safeguard for memory usage used to clear the buffer and stop the agent. This was not wanted on occasional memory spikes, so we enhanced this feature to pause and not stop on a memory spike. APD then resumes collecting statistics after 10 minutes, thus giving the system a chance to recover from whatever was causing the memory use and to continue doing its invaluable work.
