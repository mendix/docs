---
title: "Sizing & Scaling"
parent: "mendix-performance"
description: ""
menu_order: 2
tags: [ ]
draft: true
---

Sizing and Scaling is the exercise of determining which infrastructure is
adequate for a certain situation. It is done in several stages:

1.  *Initial Sizing* is done at the beginning to gauge the cost and decide which
    infrastructure to test with.

2.  *Production Sizing* is done after all functionality is implemented, a good
    data set available and realistic performance testing can be done.

3.  *Continuous Sizing and Scaling* is done in production based on production
    performance metrics and trends over time

### Initial Sizing 

The other factor is the size of the infrastructure. Sizing an app is similar to the levels of attention in the table above in [The Right Level of Attention](#right-level).

In the beginning of an app project, a first size assumption is made. When the functionality is built out and this assumption is tested, the sizing may be adapted and/or tuning be required. Small to medium-sized apps are verified with normal functional testing, while critical apps are tested with professional tools in a production-like environment.

This table presents a basic overview for infrastructure sizing for a single Mendix app instance:

|  | S – M | M – L | L – XL | XL – XXL | XXL – Custom Load Balanced |
| --- | --- | --- | --- | --- | --- |
| **Number of Records in Database** | < 100k | < 1m | < 5m | < 50m | 500m or more |
| **Number of Concurrent Users** | < 20 | < 100 | < 500 | < 5k | 200k or more |
| **Number of Service Calls (per Second)** | < 5 | < 10 | < 50 | < 500 | 2k or more |          |

### Redundancy for Availability

For more critical systems, users often choose an environment that is larger than the volume requires. This decreases the risk for production disturbances due to volume. But to cope with other issues, uptime can be improved by redundancy.

For example, critical low-volume apps can use small-size environments, with additional app instances behind a load-balancer (LB) to increase availability.

This table illustrates redundancy for system criticality:

|  | Low | Medium | High| Core | Business Critical |
| --- | --- | --- | --- | --- | --- |
| **Support Level** | Gold | Gold | Gold–Platinum | Platinum    | Platinum              |
| **Uptime (in Business Hours)**|  95% | 98% | 99.5% | 99.5% 24/7  | 99.95% 24/7 |
| **Horizontal Scaling** | No | No | Recommended | Yes | Yes |
| **Fallback** | No | No | No | Recommended | Yes |

For very critical systems, a fallback (FB) database is added to cover for unresponsive databases. That database should be in the same availability zone, no more than 5 km away. The rule of thumb is to also add an additional app instance when adding an FB database configuration.

### Scaling

Any system may need to scale over time. Performance testing is often done testing at a volume level expected 3–5 years in the future. That ensures the infrastructure can handle growth for the next 2–3 years. A static scaling plan can be made for the years afterwards, and if this involves deploying to the Mendix Cloud, it is very easy to increase the size.

Dynamic scaling is possible using cloud-specific configurations (for example, Beanstalk on AWS and K8S on Azure). Dynamic scaling comes at a cost that makes it useful only in cases where traffic fluctuates a lot and in a non-predictable way.

Static windows with a larger capacity can also be set up (for example, double-capacity over "Black Friday" and Christmas). This is cheaper than dynamic scaling and can also be used in a non-standard Mendix setup.

In general, cloud deployment was supposed to enable paying for resources only when needed, but the standard AWS pricelist promotes stable long-term contracts. Accordingly, this is the way Mendix operates by default, and for most cases, this is the most cost-effective option.

### Custom Sizing

There are some situations where very specific scaling is needed. A custom infrastructure package can be required to optimize on cost and performance. For example, if you are running an MDM system with little user interaction but a huge amount of data, a normal-sized cloud environment can be used with additional database space.

Another example is an external website with relatively lightweight functionality but many concurrent users. Then, a normal-sized cloud database server may be possible as you scale out to handle more and larger app instances and optimize the app to minimize traffic to the database.

For non-global Mendix apps, the limiting factor is often the processing in the database. So, the size of Mendix environments relates to how large the database node is. Often, scaling app instances only makes a noticeable difference up to ~4 app nodes. After that, special tuning is needed, or the environment needs to be sized up with a larger database node.

Another limiting factor can be the traffic from the browser to the app instance. This can be particularly noticeable for global apps, since Mendix out-of-the-box needs the app server quite a lot while navigating functionality. Some tuning can be made here, but another attractive option is to scale geographically.

### Production Sizing 

Once work starts on building the App, it is possible to start the *Performance
Testing and Tuning* exercise \<link\>.

At the end of implementing the full functionality, final the Performance test is
done under realistic circumstances – simulating massive amounts of users or
service call, trying to use production data or very similar data.

This will verify the initial sizing and scaling was correct or allow fine-tuning
of the infrastructure. CPU of DB server and App server should not be above 70%
at the peak load sustained over the estimated peak periods, often \~1 hour.

For high availability the fail-over is also tested under full load, to see that
even with a failing App Server, the remaining App servers stay below 70% of CPU
and behave in a healthy way.

Naturally – for critical Apps – it often makes sense to over-size environments a
bit to be rather safe than sorry, but this can also be worked out and optimized
in the *Continuous Sizing and Scaling.*

### Continuous Sizing and Scaling

As the name suggests, this happens continuously based on input from *production
level monitoring* \<link for later\>. In most cases however, a 5 year plan is
made in the beginning, and is updated annually, so sizing and scaling is well
planned ahead of time.
