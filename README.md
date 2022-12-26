# Docker Tutorial for SoC microservices

## Docker

### Docker Basic

- To check Docker vesrion

```
docker version
```

- To check all the available images

```bash
docker images
```

- Pull/Downlaod the image from the Docker registry to local machine.

```bash
docker pull <image name>
//Eg: docker run mongo
```

- To run an container (It will 1st pull the image if not present in the local sytem)
  - NOTE: When we just provide the name of the image it will pull the lastest one, i.e `mongo:latest`. We can also specify the version `mongo:x.yz`
  - Additioanly we can use flags

    - `--name <name> `- To give a name to the container.
    - `-p <Host port:container port>`- To fowrad the port.
    - `-d` - To run in detached mode
    - `-it` - For interactive envirnoment used when there is variables to add or replace (update)
    - `-e` - For environment variable

```bash
docker run <image name>
//Eg: docker run mongo
```

### Docker Container

- To stop a running container

```bash
docker stop <container ID/name>
```

- To resume a stopped container

```bash
docker start <container ID/name>
```

- To check the running processes inside a container.

```bash
docker top <container name/id>
```

- To check stats of running container.

```bash
docker stats <container name/id>
```

- Check the config and info of a container.

```bash
docker stats <container name/id>
//Eg: docker inspect mynginx
```

- Check all the container running.

```bash
docker ps
or
docker container ls
```

- To start and interactive session and get inside the container.

  - NOTE: every image does not support `bash` so we use `sh`

```
docker exec -it <container ID/name> bash/sh
```

- To check which ports has been exposed and forwarded

```bash
docker port <image name>
```

- To check all the stopped container

```bash
docker ps -a
```

- Check logs of a container

```bash
docker logs <container ID/name>
```

- Delete all the stopped container

```bash
docker container prune -f
```

- Auto cleanup when t

```bash
 docker container run —rm
```

### Docker Network

- Check list of avilable networks.

```bash
docker network ls
```

- Inspect a network components, like which container are attached to that network.

```bash
docker network inspect <network name>
```

- Run a container on a certian network/own careted network

```
docker run --network <network-name> <image-name>
```

```
docker inspect --format "{{.NetworkSettings.IPAddress}}" <container-name>
```

### Docker Images

- Remove an image

```bash
docker rmi <image name> -f
```

- Remove all the images at once

```bash
docker rmi $(docker images -q)
```

- To inspect an image layers and other info

```bash
docker inspect  <image name/id>
```

- Check the image layers formation

```bash
docker history <image-name>
```

### Docker Compose

- Run docker compose file.
  Note: By default it finds for the file name `docker-compose.yaml`, to give file with other naming use `-f <file-name.yaml>` command

```bash
docker compose up -d
```

```bash
docker compose down
```

- To rebuilt the new Image with thew new changes

```bash
docker compose up --build
```

- Override the existing of compose file

```bash
docker compose -f docker-compose.yaml  -f docker-compose.dev.yaml
```

### Tips and Short hands

- Run the command with the container creation

```bash
doc run <image-name> <command>
// Eg: `doc run ubuntu:16.04 echo hey`
```

- Creating our Own image and container.

```
Step 1 - create Dockerfile
Step 2 - docker build -t myimage:1.0 <location> (-t for tag)
Step 3 - docker run
```
