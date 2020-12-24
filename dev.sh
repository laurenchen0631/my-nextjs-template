ip=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)
DATE=`date +%Y.%m.%d.%H.%M`

function cleanup {
  echo "Remove container and image"
  docker stop example-dev
  docker rm example-dev
  docker rmi example-dev:$DATE 
}

trap cleanup EXIT;
docker build -f Dockerfile.dev -t example-dev:$DATE .
docker run --add-host="host:${ip}" -p 2000:80 -p 4000:443 -d --name example-dev example-dev:$DATE;
yarn next dev;