# App Payment React UI

A modern React-based user interface for payment processing applications.

## Deployment Guide

Follow these steps to deploy the app:

1. **Clone the repository**
    ```bash
    git clone https://github.com/blitznihar/app-payment-react-ui.git
    cd app-payment-react-ui
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Build the app**
    ```bash
    npm run build
    ```

4. **Deploy the build**
    - Upload the contents of the `build` directory to your preferred hosting service (e.g., Vercel, Netlify, AWS S3, or your own server).

5. **Start the app (for local development)**
    ```bash
    npm start
    ```

## Deploying with Docker

1. **Build and run the Docker container**
    - Use the provided `dockerrun.sh` script to build and run the Docker container:
    ```bash
    ./dockerrun.sh
    ```
    - This script will build the Docker image and start the container locally using Docker Desktop.

2. **Access the app**
    - Open your browser and go to `http://localhost:5176` (or the port specified in your Docker setup).

## Deploying to Kubernetes (Local Docker Desktop)

1. **Ensure Docker Desktop Kubernetes is enabled**
    - In Docker Desktop, go to Settings > Kubernetes and enable Kubernetes.

2. **Build the Docker image**
    ```bash
    ./dockerrun.sh build
    ```

3. **Load the image into Kubernetes**
    - Tag and load the image as needed for your local Kubernetes cluster.

4. **Apply Kubernetes manifests**
    - Use the provided Kubernetes YAML files (e.g., `deployment.yaml`, `service.yaml`):
    ```bash
    kubectl apply -f k8s/deployment.yaml
    kubectl apply -f k8s/service.yaml
    ```

5. **Access the app**
    - Use `kubectl get svc` to find the service URL or use port forwarding:
    ```bash
    kubectl port-forward svc/app-payment-react-ui 3000:3000
    ```
    - Then open `http://localhost:3000` in your browser.

## Requirements

- Node.js (v14 or higher)
- npm
- Docker (for containerization)
- Docker Desktop with Kubernetes enabled (for local Kubernetes deployment)

## Notes

- Configure environment variables as needed in a `.env` file.
- Refer to the documentation of your hosting provider for specific deployment instructions.
- For Docker and Kubernetes deployments, ensure your environment variables are set appropriately in your Docker and Kubernetes configs.