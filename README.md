# Tracker - tracks everything

## MySQL Container up command

```bash
docker run --name tracker-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=tadmin -e MYSQL_DATABASE=tracker_db -e MYSQL_USER=trackeradmin -e MYSQL_PASSWORD=trackeradmin -d mysql:latest
```
