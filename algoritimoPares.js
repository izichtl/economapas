/*
* - Algoritimo para que filtra todos numeros pares não divisíveis por 8 em determinado
* - intervalo.
* - Autor: Ivan Zichtl
* - Data: 13/10/2021
* - Inputs Types: first ( primeiro número do intervalo ) => INTEGER
*                 last  ( segundo  número do intervalo ) => INTEGER
*/

//Declaração do algoritimo. 
const isPair = (first, last) => {
    while (first <= last) {
        if((first % 2 == 0) && (first % 8 != 0)) console.log(first)
        first++;
      }
}

//Execução do algoritimo. 
isPair(1,100)