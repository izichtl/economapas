/*
* - Algoritimo para cálculo de juros simples ao mês.  
* - Autor: Ivan Zichtl
* - Data: 13/10/2021
* - Inputs Types: capital => INTERGER OR FLOAT
*                 taxa    => INTEGER
*                 periodo => INTEGER
*/

//Capital inicial. 
let capital = 23000;

//Taxa de juros em porcentagem.
let taxa = 7;

//Período do empréstimo em meses. 
let periodo = 6;

//Array para teste do algoritimo
let jurosArray = [[800, 5, 24, 960], [23000, 7, 6, 9660], [1000, 10, 12, 1200]]

const jurosSimples = (capital, taxa, periodo) => {
    let taxaReal = taxa/100
    let juros = (capital * taxaReal * periodo)
    if(!Number.isInteger(juros)) return parseFloat(juros.toFixed(2))
    return juros
}


//Execução em fita para teste do algoritimo:
console.log('Teste do algoritimo / Resposta:')
jurosArray.forEach(elemento => {
    let jurosCalculado = jurosSimples(elemento[0], elemento[1], elemento[2])
    console.log(`Valor do Juros: ${jurosCalculado}`)
    console.log(`Valor esperado: ${elemento[3]}`)
    console.log('  ')
})


//Execução unitária:
let jurosCalculado = jurosSimples(capital, taxa, periodo)
console.log('____________________________')
console.info('Execução Unitária / Resposta:')
console.log('____________________________')
console.log(`Capital Inicial: ${capital}`)
console.log(`Taxa de juros: ${taxa}%`)
console.log(`Periodo em meses: ${periodo}%`)
console.log(`Valor do Juros: ${jurosCalculado}`)
console.log(`Valor Total Final: ${(capital + jurosCalculado)}`)
console.log('____________________________')
