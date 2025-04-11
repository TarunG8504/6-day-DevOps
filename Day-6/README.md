Session 6:

Only one cluster, different applications,
What is namespace?
Dividing cluster into isolated environments. For deploying multiple applications on same cluster, we use concept of namespace.

kubectl get namespace

default namespace : It is created automatically by Kubernetes to create resource in default namespace.
kube-node-lease : To check the health of the node, Kubernetes master node use this object.
kube-public : Anyone can able to access resources in this namespace.
kube-system : 

kubectl get all -n kube-system

At the time of cluster creation, all the services like metric server, cli, core-dns all resources will be created in this namespace

When you deploy application in the production servers, we will never deploy any application in the default namespace.

How to create a custom namespace?
kubectl create ns tarun-ns
kubectl get ns
kubectl get pods
kubectl run test-pod --image nginx --port 80 -n tarun-ns
kubectl get pods -n tarun-ns
kubectl delete pod test-pod -n tarun-ns

If pod goes down, there are 3 problems we have to face. 
1. We are going to get application-downtime - To overcome this problem, we have to attach controllers to the pod.
2. Every pod has own ip address, if pod goes down, the ip address will change - To overcome this problem, we have to create services on kubernetes(static urls)
3. If pod goes down, along with the pod, we going to lose data - To overcome this problem, we have to implement volumes in Kubernetes.


Replica Set:
Replica Set is a Kubernetes object. It is going to maintain minimum number of nodes 24/7 (Replica set is always maintain desired state is equal to the actual state).

git clone https://github.com/TarunG8504/tarun-k86-manifestfiles.git
ls
cd tarun-k86-manifestfiles
kubectl apply -f rs.yaml
kubectl get pods -n tarun-ns
kubectl get rs -n tarun-ns

kubectl describe pod cart-page-rs-c2t8t -n tarun-ns


Clusters -> tarun-cluster -> Add node group -> test-linux-2 -> IAM role(name) -> launch template -> next -> Instance type (2 cpu, 4gb ram) ->  desired node(3) -> maximum node (5) -> enable auto-repair -> next -> next -> create 

Replica-Set problems
In real-time applications, we don't recommend to use replica sets, because we cant able to perform rollout, rollback operations.
Deployments: In Kubernetes, we are deploying applications using deployment objects or deployment controller. Deployment will manage the replica set, replica set will manage the pods.

kubectl get rs -n tarun-ns
kubectl delete rs cart-page-rs -n tarun-ns
kubectl apply -f deployment.yaml -n tarun-ns
kubectl get deployments -n tarun-ns
kubectl get pods -o wide -n tarun-ns

If you want to expose application through the web browser, Kubernetes will introduce object called services, there are 3 types of services:
ClusterIP Service
NodePort Service
LoadBalancer Service

We are going to implement load-balancer service now,
service.yaml
git pull
kubectl apply -f service.yaml -n tarun-ns

kubectl get svc -n tarun-ns

Monitoring:
To understand what's going inside the application, we are implementing monitoring dashboards. With the help of monitoring dashboards, we can recognise if something goes wrong in the application and also we can able to identify how much cpu, how much memory consuming by pods, nodes, cluster health.

SRE (monitoring)

Monitoring tools like Promotheus, Grafana
Promotheus : Promotheus is a metric server where it is going to collect time-series of data (TSDB). Its sends data to Grafana dashboards.
Grafana : With help of Grafana, we can set up monitoring dashboards where we can see your data in the form of pie charts or graphs,

snap install helm --classic

kubectl get pods -n monitoring

Ansible:
Ansible is a configuration management tool, system admin tasks

eksctl delete cluster --name tarun-cluster

Add new connection -> Promotheus
Data sources -> url (promotheus)
Dashboards -> import -> id (15661)

kubectl cluster-info
kubectl get cluster
cd /root/.kube
vi config