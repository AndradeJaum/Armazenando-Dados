export const removeDatasRepetidas = (tarefas) =>{

    const datasUnicas = []
    tarefas.forEach ((data =>{
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada)
            console.log(datasUnicas)
        }
    }))
    return datasUnicas
}


export const ordenaDatas = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return primeiraData - segundaData
    })
}