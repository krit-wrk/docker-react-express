# Docker react+express+mongo

run all service

```zsh
cd backend
docker-compose -f full-compose.yml up
```

run backend dev

```zsh
cd backend
docker-compose up
```

run react dev

```zsh
cd frontend
yarn server
yarn start
```

## backend dev

- add mock in `./backend/mock/import.sh`
