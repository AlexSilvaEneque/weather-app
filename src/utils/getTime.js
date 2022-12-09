const date = new Date()

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

const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
]

const aux = () => {

}

export const getDayOfWeek = () => {
    let posDay = date.getDay()-1
    return days[posDay]
}

export const getDay = () => {
    return date.getDate()
}

export const getMonth = () => {
    let pos = date.getMonth()
    return months[pos]
}

export const getYear = () => {
    return date.getFullYear()
}


export const onlyDate = (datetime) => {
    const [year, month, day] = datetime.split(' ')[0].split('-')
    return `${day}-${month}-${year}`
}
