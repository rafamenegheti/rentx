# To run this project

- Clone this repository
- Install depencencies:
```code
yarn 
```
- Run the docker-composer(you may want to change the ports of the services at the "docker-compose.yml" file) :
```code 
docker-compose up 
```
- Run typeorm migrations:
```code 
yarn typeorm migration:run
```

A documentation (under construction 🚧) of the API can be accessed at: http://localhost:3333/api-docs/
