import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

const WeatherForm = ({onInputSubmit}) => {
const {inputOnChange} = useContext(WeatherContext)

  return (
    <form className='form' onSubmit={onInputSubmit}>
        <input 
            type="text" 
            placeholder='enter the city'
            name='city'
            className='input__weather'
            onChange={inputOnChange}
        />
        <input 
            type="text" 
            placeholder='enter the country'
            name='country'
            className='input__weather'
            onChange={inputOnChange}
        />
        <button type='submit' className='button__weather'>
            Get Weather
        </button>
    </form>
  )
}

export default WeatherForm