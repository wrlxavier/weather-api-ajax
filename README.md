# Consultando API de Clima - Fetch API | Front-end | HTML - CSS - JavaScript
Um exemplo simples que obtem informações sobre o clima da cidade brasileira que o usuário informa.

## Como funciona?

A aplicação conta com uma função para tratar os dados recebidos de uma api da [OpenWeather](https://openweathermap.org/) e gerar elementos em uma tabela. Utilizando o Fetch API podemos tratar erros que podem surgir durante a requisição, incluindo erros de digitação do usuário ou omissão de dados para a pesquisa.

## A API da OpenWeather:

Na página oficial da OpenWeather os desenvolvedores encontrarão as documentações referentes aos serviços de api que a organização oferece. A estratégia utilizada neste exemplo basea-se na montagem de um template string que organiza as informações e é armazenado em uma constante (url). Abaixo, é possível conferir os parâmetros de pesquisa, direto da documentação, que foram utilizados:

[API-DOC](https://openweathermap.org/current)

By city name

You can call by city name or city name, state code and country code. Please note that searching by states available only for the USA locations.

API call

api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}<br>
api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}<br>
api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}<br>

### Dicas, dúvidas ou interesse profissional:

Warley Xavier

[Linkedin](https://www.linkedin.com/in/warley-xavier-a8b8811b7) – warleyxavier.fernandes@gmail.com - 
[Perfil Github](https://github.com/wrlxavier)



