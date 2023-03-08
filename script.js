//accessing the elememts
const inputEle=document.getElementById('location-input')
const tempEle=document.getElementById('temp')
const weatherEle=document.getElementById('weather-info')
const locationEle=document.getElementById('location-info')
const iconEle=document.getElementById('icon')
const btnEle=document.getElementById('btn')
//storing the api key
const apikey='c27f164917a2d0dd25b9c3a5e7090ffe'
//functionality
btnEle.onclick=function(){
    if(inputEle.value=='')
    {
        alert('please enter the location')
    }
    else
    {
        let loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        //fetchingthe datafrom api and converted into json format
        fetch(url).then(res=>res.json())
        //this is i resolve state
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            const{icon}=data.weather[0]
            locationEle.innerText=name
            tempEle.innerText=Math.floor(feels_like-273)
            iconEle.innerHTML=icon
            weatherEle.innerText=description

        })
        //reject state
        .catch(()=>{
            alert('invalid location')
        })
        inputEle.value==''
    }
}