//Guarda principais variáveis e constantes que sejam compartilhafas para os demais scripts em outros arquivos.

const TokenCesium = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODZjMmYzNi0xOWY1LTQ3MTUtYWUyZi0xN2JiNzAzYzBiZmEiLCJpZCI6NDExOTAyLCJpYXQiOjE3NzY5MDYzMjd9.xn_gQkIubaTFM3Jkxr3f6qVwDrKBmcS2pXm2VX-JBDw';

//variáveis globais 

export { TokenCesium };

export let varPontoSelecionado = {
    varLongitude: -41.932416,
    varLatitude: -22.479147,
    varAltura: 300
};

export let CotaSoleiraAtual; //armazena a cota da soleira depois de ser alterada, para que a função de alterar a cota de soleira possa usar esse valor atualizado para calcular a nova altura do edifício, caso o usuário queira alterar a cota de soleira mais de uma vez.
export let tanTan;