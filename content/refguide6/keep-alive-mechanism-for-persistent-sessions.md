---
title: "Keep alive mechanism for Persistent Sessions"
category: "Runtime"
---
## Keep alive mechanism for Persistent Sessions

Persistent Sessions used to store a 'last active' date upon each request. This is a known performance bottleneck. To improve this particular aspect of the performance, the 'last active' date attribute of a session is no longer committed to the database immediately on each request. Instead, this information is remembered until the time the ClusterManagerAction runs. This action verifies whether the session has not been logged out by another instance and whether the last active date is more recent than the one in the database.

{{% alert type="warning" %}}

Overriding the default values for SessionTimeout and ClusterManagerActionInterval custom settings can impact the behaviour of keep alive and results in unexpected session logout. In particular, the best practice is to set the ClusterManagerActionInterval to half of the SessionTimeout so that ClusterManager on each node gets the chance to run at least once before another instance attempts to delete a session.

{{% /alert %}}
