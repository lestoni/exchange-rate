DOCKER_PATH=$(which docker)
SERVICE_NAME=exchange-rate-api
IMAGE_TAG=taxfix/$SERVICE_NAME
EXPOSE_PORT=8090

HOST_IP=0.0.0.0

# Stop running container
$DOCKER_PATH stop $SERVICE_NAME

# Remove container
$DOCKER_PATH rm $SERVICE_NAME

# Remove previous image
$DOCKER_PATH rmi $IMAGE_TAG

# Build image
$DOCKER_PATH build -t $IMAGE_TAG .

# Build the container
$DOCKER_PATH run -d \
  --name $SERVICE_NAME \
  -p $HOST_IP:$EXPOSE_PORT:$EXPOSE_PORT \
  -e HOST_IP=$HOST_IP \
  --restart=always \
  $IMAGE_TAG
