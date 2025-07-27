#!/bin/bash

read -p "Enter app name [app-payment-react-ui]: " APP_NAME
APP_NAME=${APP_NAME:-app-payment-react-ui}

IMAGE_TAG="$APP_NAME:latest"
DOCKERHUB_USER="blitznihar"
DOCKERHUB_IMAGE="$DOCKERHUB_USER/$APP_NAME:latest"
KUBE_YAML="kube-deployment.yaml"

echo "Choose an action:"
echo "1) Deploy Docker"
echo "2) Deploy Kubernetes"
echo "3) Delete Kubernetes"
echo "4) Delete Docker image"
read -p "Enter choice [1-4]: " ACTION

case $ACTION in
    1)
        docker build -t $IMAGE_TAG .
        docker run -d -p 3176:5176 $IMAGE_TAG
        docker tag $IMAGE_TAG $DOCKERHUB_IMAGE
        docker push $DOCKERHUB_IMAGE
        ;;
    2)
        kubectl get all
        kubectl apply -f $KUBE_YAML
        ;;
    3)
        kubectl delete -f $KUBE_YAML
        ;;
    4)
        docker rm -f $(docker ps -a --filter ancestor=$APP_NAME -q) 2>/dev/null
        docker rmi -f $IMAGE_TAG 2>/dev/null
        docker rmi $DOCKERHUB_IMAGE 2>/dev/null
        ;;
    *)
        echo "Invalid choice."
        ;;
esac