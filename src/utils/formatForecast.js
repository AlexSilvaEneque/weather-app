const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

export const convertKm = ( param  ) => {
    let arr = String(param).split('').map((num) => {
        return Number(num)
    })

    return arr.length > 4 ? `${arr[0]}${arr[1]}.${arr[2]}` : `${arr[0]}.${arr[1]}`

}

export const getListForecast = ( arreglo ) => {
    return arreglo.list.filter( ( item ) => {
        return item.dt_txt.includes("00:00:00")
    } )
}

export const dayName = ( date ) => {
    let nroDay = new Date(date).getDay()
    return days[nroDay]
}

export const monthName = ( date ) => {
    let nroMonth = new Date(date).getMonth()
    return months[nroMonth]
}

export const dayMonth = ( date ) => {
    return new Date(date).getDate()
}