import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

const Card = ({fores}) => {
    const {weather} = useContext(WeatherContext) 
    const today = new Date()
    const day = today.getDate()
    const mes = today.getMonth() + 1
    const year = today.getFullYear()
    const date = day + "/" + mes + "/" + year
    const temp_redonded = Math.round(weather.main.temp)
    
    const url = "http://openweathermap.org/img/w/"
    const iconUrl = url + weather.weather[0].icon + ".png"

    const img1 = url + fores.list[1].weather[0].icon + ".png"
    const img2 = url + fores.list[2].weather[0].icon + ".png"
    const img3 = url + fores.list[3].weather[0].icon + ".png"
 
  return (
    <div className='card'>
        <div className='uno'>
            <img className='card__img' src={require("../img/ciudad.jpg")} alt="img de ciudad" />
       
            <div className='more__info'>
                <h1 className='data'>{weather.name}</h1>
                <h2 className='data'>{date}</h2>
                <h2 className='data'>{temp_redonded} C°</h2>
            </div>
            <div className='more__infoo'>
                <div className='img_descrip'>
                    <img src={iconUrl} className="icono__img" alt="icono del clima" />
                    <p className='descrp'>{weather.weather[0].description}</p>
                </div>
            </div>
       </div>
       <div className='dos'>
            <div className='card__info'>
                <h2 className='info__data'>Temperatura min: {weather.main.temp_min} C°</h2>
                <h2 className='info__data'>Temperatura max: {weather.main.temp_max} C°</h2>
                <h2 className='info__data'>Humedad: {weather.main.humidity} %</h2>
                <h2 className='info__data'>velocidad del viento: {weather.wind.speed} km</h2>
            </div>
              <div className='more__details'>
              <div className='details'>
                  <p className='fecha'>{fores.list[1].dt_txt}</p>
                  <img src={img1} alt="icono de clima" />
                  <p>{fores.list[1].weather[0].description}</p>
              </div>
              <div className='details'>
                <p className='fecha'>{fores.list[2].dt_txt}</p>
                <img src={img2} alt="icono de clima" />
                <p>{fores.list[2].weather[0].description}</p>
              </div>
              <div className='details'>
                 <p className='fecha'>{fores.list[3].dt_txt}</p>
                 <img src={img3} alt="icono de clima" />
                 <p>{fores.list[3].weather[0].description}</p>
              </div> 

             </div>  
       </div> 

    </div>
  )
}

export default Card