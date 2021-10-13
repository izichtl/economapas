/*
* - Algoritimo para classificação de jogadores de acordo com sua idade. 
* - Autor: Ivan Zichtl
* - Data: 12/10/2021
* - Inputs Types: playerName => STRING
*                 playerAge  => INTEGER
*/

//Declaração das variáveis de entrada. 
let playerName = 'Ivan';
let playerAge  = 18;

//Declaração de array de jogadores para teste do algoritimo.
let playerArray = [['Ivan', 3], ['Bruno', 9], ['Diego', 10], ['Thiago', 14], ['Lucas', 15], ['Mario', 18], ['José', 19], ['Ian', 30], ['João', 2], ['Pedro', 31]]

//Declaração do algoritimo. 
const categoryPlayer = (playerName, playerAge) => {
    let category;
    //Verifica a consistência dos dados. 
    if((playerName == null || playerAge == null)) return 'Por favor, informe todos os dados!';

    //Verifica se a idade está dentro do espectro de categorias possíveis. 
    if((playerAge < 3) || (playerAge > 30) ) return 'Não existe categoria para classificar este jogador';

    //Classifica o jogador de acordo com a idade. 
    if((playerAge >= 3) && (playerAge <= 9) ) category = "Chupeta";
    if((playerAge >= 10) && (playerAge <= 14) ) category = "Junior";
    if((playerAge >= 15) && (playerAge <= 18) ) category = "Amador";
    if((playerAge >= 19) && (playerAge <= 30) ) category = "Pro";

    return `O jogador ${playerName} está classificado na categoria: ${category}`
}

//Execução unitária do algoritimo.
console.log('Execução Unitária / Resposta:')
console.log(categoryPlayer(playerName, playerAge))
console.log('  ')

//Execução em fita para teste do algoritimo.
console.log('Teste de execução / Respostas:')
playerArray.forEach(jogador => {
    console.log(categoryPlayer(jogador[0], jogador[1]))
})


