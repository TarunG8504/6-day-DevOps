This Project Perfect example for Docker and Kuberetes
# To chekc the mongodb server data commands
kubectl exec -it db_pod_name -- mongosh

use myDatabase

db.users.find().pretty()
