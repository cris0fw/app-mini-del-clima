import {createContext, useState} from 'react'
import { FormWeather } from '../hook/useForm'

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
const {form, inputOnChange, inputOnReset} = FormWeather({city: "", country: ""})

const [loading, setLoading] = useState(false)
const [show, setShow] = useState(false)
const [weather, setWeather] = useState("")
const [forecast, setForecast] = useState([])

const getOpenWeather = async (city, country, apikey) => {
    try{
        setLoading(true)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`

        const res = await fetch(url)
        const data = await res.json()
        
        if(data.cod >= 400){
            setWeather(false)
            setLoading(false)
        }
        else{    
            setLoading(false)
            setWeather(data)       
        }

    }catch(error){
        console.log("Hubo un error" + error)
    }
}

const getOpenForecast = async (city,pais, apikey) => {
    try{
        setLoading(true)
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${pais}&appid=${apikey}`

        const res = await fetch(url)
        const data = await res.json()
        
        if(data.cod >= 400){
            setWeather(false)
            setLoading(false)
        }
        else{    
            setLoading(false)
            setForecast([data])       
        }

    }catch(error){
        console.log("Hubo un error" + error)
        setShow(false)
        setLoading(true)
    }
}

    return <>
        <WeatherContext.Provider value={
        {form,
         inputOnChange,
         inputOnReset,
         loading,
         show,
         weather,
         getOpenWeather,
         getOpenForecast,
         forecast
        }
        
        }>

            {children}
         </WeatherContext.Provider>
    </>
}


export default WeatherContext