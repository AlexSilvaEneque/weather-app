const days = (data) => {
    const arreglo = data.list.filter(item => item.dt_txt.includes("00:00:00"))
    return arreglo
}

export default days