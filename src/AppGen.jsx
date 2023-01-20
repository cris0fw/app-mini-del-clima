import React, { useContext } from 'react'
import Card from './components/Card'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import WeatherForm from './components/WeatherForm'
import WeatherContext from './context/WeatherContext'

const AppGen = () => {
const {form, inputOnReset, getOpenWeather,loading, getOpenForecast,forecast,weather} = useContext(WeatherContext)
const APIKEY = "4e427316a9c7cd34b4660fba8fbba272"

const onInputSubmit = async (e) => {
  e.preventDefault()
  const {city, country} = form

  getOpenWeather(city, country, APIKEY)
  getOpenForecast(city, country, APIKEY)
 
  inputOnReset()
}

  return (
    <div>
        <Navbar />

        <div className='contenedor__print'>
            <WeatherForm onInputSubmit={onInputSubmit} />

            <div className='separador'>
               {
                loading ? (
                  <Loader />
                ) : weather && forecast ? (
                  <>
                    {
                      forecast.map((fores) => {
                        return <Card fores={fores} key={fores.city.id} />
                      })
                    }
                  </>
                ) : (
                  <h2>Sin datos</h2>
                )
                    
                    
              }
            </div>
        </div>
    </div>
  )
}

export default AppGen