export const useWeather = () => {
    const apikey = 'c0a3c8fa7315cdd88959351bb622f220'
    const getCities = async ( search ) => {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apikey}`)
        return res
    }

    const getWeather = async ( param ) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=${apikey}`)
        return res
    }

    const getForecast = async ( param ) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${param}&units=metric&appid=${apikey}`)
        return res
    }

    return {
        getCities,
        getWeather,
        getForecast
    }
}