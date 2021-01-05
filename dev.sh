ip=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)
if [ -z "$ip" ]
then
  ip=$(ipconfig | grep -E -i "IPv4 Address" | grep -E -o "[0-9][0-9.]+" | head -1)
fi

DATE=`date +%Y.%m.%d.%H.%M`

function cleanup {
  echo "Remove container and image"
  docker stop example-dev
  docker rm example-dev
  docker rmi example-dev:$DATE 
  echo ""
}

PORT=$(grep PORT .env.local | xargs)
PORT=${PORT#*=}
PORT=${PORT:-3000}
HTTP_PORT=$(($PORT - 1000))
HTTPS_PORT=$(($PORT + 1000))

trap cleanup EXIT;

docker build --build-arg PORT=${PORT} -f Dockerfile.dev -t example-dev:$DATE .
docker run --add-host="host:${ip}" -p ${HTTP_PORT}:80 -p ${HTTPS_PORT}:443 -d --name example-dev example-dev:$DATE
yarn next dev -p ${PORT}