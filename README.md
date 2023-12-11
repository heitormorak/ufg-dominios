# Sistema de visualização 3D - GynViewer

## Objetivo
Esse sistema permite uma nova abordagem para visualização de dados públicos do município de Goiânia. Atualmente são exibidos dados sobre nível do solo e áreas de risco.
A visualização é feita através de um mapa interativo em 3D, onde blocos são construídos com altura, localização e cores correspondentes aos dados cadastrados.
Como MVP o projeto foi aprovado pelos envolvidos. A próxima etapa é tornar a seleção de dados flexível, de forma que, se houver uma API enviando JSON no formato que a aplicação aceita, qualquer tipo de dados poderá ser exibida no mapa.

## Tecnologias
- NodeJS
- Vite
- ReactJS
- MySQL (AWS RDS)

## Caminhos
- Quadro do projeto: https://github.com/users/heitormorak/projects/2
- Frontend: .\frontend
- Backend: .\backend

## Ambiente
- Importar dados do script ./recente.sql para banco MySQL.
- Renomear o arquivo example.env para .env
- Preencher os dados de acesso ao banco de dados MySQL.

## Start Frontend
- Entrar na pasta 'frontend' do projeto pelo terminal

Pode ser executado com yarn ou npm:
```
yarn install
```
```
yarn run dev
```
ou 
```
npm install
```
```
npm run dev
```

## Start Backend
- Entrar na pasta 'backend' do projeto pelo terminal
```
npm install
```
```
node api.js
```
ou
```
npm run start
```