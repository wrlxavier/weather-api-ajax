const btnSearch = document.querySelector('#btn')
const table = document.querySelector('#table-data')

function kelvinToCelcius(temp){
    return (Math.ceil(temp - 273.15))
}

function createTableItem(data){
    const item = document.createElement('tr')
    const itemContent = [
        data.name,
        `${kelvinToCelcius(data.main.temp)}°C`, 
        `${kelvinToCelcius(data.main.temp_min)}°C`, 
        `${kelvinToCelcius(data.main.temp_max)}°C`, 
        `${data.main.humidity}%`, 
        data.weather[0].description
    ]
    for(index in itemContent){
       let tdElement = document.createElement('td')
       tdElement.innerHTML = itemContent[index]
       item.appendChild(tdElement)
    }
    table.appendChild(item)
    table.classList.remove('hidden')
    document.querySelector('#text-input').value = ''
}

btnSearch.addEventListener("click", (e) => {
    const citys = document.querySelector('#text-input').value.split(', ')
    console.log(citys)
    const countryCode = 'BR'
    const lang = 'pt_br'
    const OPENWEATHER_KEY = '2aaaf5b482bc88808250d0c30cb13957'
    let errorSearch = false
    
    for(index in citys){
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${citys[index]},${countryCode}&appid=${OPENWEATHER_KEY}&lang=${lang}`
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        fetch(url, options)
        .then(response => {response.json()
            .then(data => createTableItem(data))
            .catch( (e) => {
                if (e.message == 'data.main is undefined' && !errorSearch){
                    alert('Erro ao pesquisar cidades:\n\n(1) Nenhuma cidade foi informada,\n(2) Algum nome não foi escrito corretamente.\n\nApenas os resultados válidos serão retornados!')
                    errorSearch = true
                }
            })
        })
        .catch( e => alert('Error: '+e.message))
    }

})
