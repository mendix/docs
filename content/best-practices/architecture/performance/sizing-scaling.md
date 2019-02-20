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

The other factor is the size of the infrastructure. Sizing an App is similar to
the levels of attention in the table seen previously.

In the beginning of the project a first assumption is done. When the
functionality is built out this assumption is tested, and sizing may be adapted,
and/or tuning be required. Small-Medium Apps are verified with normal functional
testing, while critical Apps are tested with professional tools in a production
like environment.

The table below gives a basic overview for sizing of a single Mendix App
instance. Higher load can be handled with additional measures such as horizontal
scaling, geo-scaling, functional scaling or microservice scaling

| **Sizing of Infra**      | **S - M**    | **M - L**     | **L - XL**    | **XL - XXL**   | **XXL - Custom Load balanced** |
| ------------------------ | ------------ | ------------- | ------------- | -------------- | ------------------------------ |
| *\# Records in DB*       | \< 100k      | \< 1m         | \< 5m         | \< 50m         | 500m or more                   |
| *\# Concurrent Users*    | \< 20 users  | \< 100 users  | \< 500 users  | \< 5k users    | 200k users or more             |
| *\# Service calls / sec* | \< 5 calls/s | \< 10 calls/s | \< 50 calls/s | \< 500 calls/s | 2k calls/s or more             |

### Redundancy for Availability

For more critical systems one often chooses an environment that is larger than
the volume requires. This decreases the risk for production disturbances due to
volume. But to also cope for other issues, up-time can be improved by
redundancy.

E.g. critical low volume Apps can use small size environments, with additional
App instances behind a Load-balancer (LB) to increase availability.

| *Redundancy for System Criticality:* | **Low**     | **Medium**  | **High**        | **Core**    | **Business Critical** |
| ------------------------------------ | ----------- | ----------- | --------------- | ----------- | --------------------- |
| *Support Level*                      | Gold        | Gold        | Gold - Platinum | Platinum    | Platinum              |
| *Up time*                            | 95% Biz hrs | 98% Biz hrs | 99.5% Biz hrs   | 99.5% 24/7  | 99.95% 24/7           |
| *Horizontal Scaling*                 | No          | No          | Recommended     | Yes         | Yes                   |
| *Fall-back*                          | No          | No          | No              | Recommended | Yes                   |

For very critical systems a Fall-back (FB) database is added to cover for
un-responsive databases. That DB will be in the same Availability zone, 5 km
away. Rule of thumb is to also add an additional App instance when adding an FB
DB configuration.

### Scaling

Any system may need to scale over time. Performance testing is often done
testing at a volume level expected 3-5 years in the future. That ensures the
infrastructure can handle growth for the next 2-3 years.

A Static scaling plan can be made for the years afterwards, and if this is the
Mendix cloud it is very easy to increase the size.

Dynamic scaling is possible using cloud specific configurations, e.g. Beanstalk
on AWS and K8S on Azure. Dynamic scaling comes at a cost that makes it useful
only in cases where traffic fluctuates a lot and in a non-predictable way.

Static windows with larger capacity can also be set up. E.g. double capacity
over black Friday and Christmas. This is cheaper that dynamic scaling. It can
also be used in a non-standard Mendix set-up.

In general cloud was supposed to allow paying for resources only when needed,
but the standard AWS pricelist promotes stable long-term contracts, so this is
the way Mendix operates by default, and for most cases this is the most
cost-efficient option.

### Custom Sizing 

But there are some situations where very specific scaling is needed. A custom
infra package can be required, to optimize on cost and performance.

E.g. if running an MDM system with little user interaction but huge amounts of
data, a normal sized cloud environment can be used with additional DB space.

Another example is an external web-site with relatively lightweight
functionality but many concurrent users, then a normal sized cloud DB server may
be possible, while scaling out to have more and larger App instances, while
optimizing the App to minimize traffic to the DB.

For non-global Apps the limiting factor in Mendix Apps is often the processing
in the DB, so the size of Mendix environments relate to how large the DB node
is. Often scaling App instances only makes a noticeable difference up to \~4 App
nodes. Then special tuning is needed, or the environment is sized up with a
larger DB node.

The other limiting factor can be the traffic from the Browser to the App
instance. This can be particularly noticeable for global Apps, since Mendix out
of the box needs the App server quite a lot while navigating functionality. Some
tuning can be made here, but another very attractive option is to scale
geographically, see next section.

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
