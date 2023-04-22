# SearchMusic - Projeto Angular - Clima e Música :partly_sunny: :notes: :sparkles:

Este projeto tem como objetivo demonstrar como consumir APIs externas para obter informações sobre o clima e recomendar músicas com base na temperatura de uma determinada localização.

## Tecnologias

![Angular badge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![Typescript badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Jasmine badge](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=Jasmine&logoColor=white) ![SASS badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Como utilizar

Você pode rodar o projeto localmente ou acessar a [página](https://desafio-front-end-vert.vercel.app/home).

Para rodar o projeto localmente:

1. Clone este repositório em sua máquina local
2. Execute `npm install` para instalar todas as dependências
2. Execute `ng serve` para iniciar a aplicação
3. Navegue até `http://localhost:4200/` em seu navegador

_OBS: é necessário ter o Node.js e o Angular CLI instalados para rodar localmente_

## Resultados

![GIF da aplicação](/src/assets/gifs/Peek%2022-04-2023%2016-17.gif)

## Funcionalidades

A aplicação permite que o usuário:

- Insira uma cidade ou coordenadas geográficas (latitude e longitude) para obter informações sobre o clima e recomendações musicais com base na temperatura atual.

- Visualize uma lista de músicas recomendadas, com informações sobre a temperatura, cidade e categoria das músicas.

- Salve uma lista de músicas no storage do navegador, com informações sobre a temperatura, cidade, país, data da pesquisa e categoria das músicas
Visualize uma lista de músicas salvas com suas respectivas informações e a opção de excluí-las

## APIs utilizadas
Para este projeto, foram utilizadas as seguintes APIs:

- [Geocoding API](https://openweathermap.org/api/geocoding-api) - obter as cordenadas geográficas da cidade informada
- [Current weather data](https://openweathermap.org/current) - obter informações sobre o clima a partir de coordenadas geográficas
- [Deezer API](https://developers.deezer.com/api) - listas de músicas



## Diferenciais

- Deploy da aplicação
- Início da implementação de testes unitários
- Design responsivo
- Validações nos inputs
- Não foi utilizada nenhuma biblioteca de estilos, os componentes foram feitos do zero
- Loading entre as chamadas dos serviços
- Modal de erro em casos de erro nos serviços

## Mais resultados

- **Usuário deletando as listas:**

![GIF página listagem das recomendações](/src/assets/gifs/Peek%2022-04-2023%2016-18.gif)

- **Algumas validações:**
    - Nome da cidade não pode conter números
    - Se latitude for preenchida, longitude também deve ser preenchida e vice e versa
    - Latitude precisa ser um valor válido entre -90 e +90
    - Longitude precisa ser um valor válido entre -180 e +180
    - Quando há algum erro ou os campos estão vazios, o botão fica bloqueado

![GIF validações de input](/src/assets/gifs/Peek%2022-04-2023%2016-19.gif)

- **Nome de cidade inválida:**
    - Caso o usuário fornecça um nome de cidade inválido, o fluxo da aplicação é interrompido e um erro é setado no input.

![GIF nome de cidade inválido](/src/assets/gifs/Peek%2022-04-2023%2016-20.gif)

- **Responsividade:**

![GIF alterando a largura da aplicação](/src/assets/gifs/Peek%2022-04-2023%2016-42.gif)

<br>

<hr>

<div align="center">
    Made with ☕ & &#128156; by <i>eirene</>
</div>


