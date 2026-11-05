//Seleção dos elementos.
let visor = document.getElementById("visor");
let teclado = document.querySelector(".teclado");



// verifica se o caractere é operador.
function Operador(caractere) {
  return caractere === "+" || caractere === "-" || caractere === "*" || caractere === "/";
}

//Recebe o que foi clicado e adiciona ao visor da calculadora.
function adicionar(valor) {
  let atual = visor.value;

  //Lê o texto do visor.
  if (atual === "Erro") {
    atual = "";
  }

/*
Se ocorre erro, retorna do zero.
Slice (-1) pega o ultimo valor digitado, se Atual for 10+, O ultimo vira +
Isso impede que a operação comece com um operador.
*/

  let ultimo = atual.slice(-1);

  //Se o que foi digitado é um operador, A calculadora retorna ao ponto inicial.
  if (Operador(valor)) {
    if (atual === "") {
      return;
    }
    
//Se o ultimo caractere era operador, troca ele por um novo. 20+ pode se tornar 20*.
    if (Operador(ultimo)) {
      visor.value = atual.slice(0, -1) + valor;
      return;
    }
  }
  visor.value = atual + valor;
}

// CE, esvazia o visor da calculadora.
function limpar() {
  visor.value = "";
}

/*
DEL, apaga um caractere do visor da calculadora.
Se um erro ocorre, tudo é limpado, ou então remove o ultimo caractere, usando o slice(0, -1).
*/
function apagar() {
  if (visor.value === "Erro") {
    visor.value = "";
  } else {
    visor.value = visor.value.slice(0, -1);
  }
}


// Calcula o resultado.
function calcular() {
  let conta = visor.value;

//Se não há o que calcular, sai da função.
  if (conta === "" || conta === "Erro") {
    return;
  }
//Se termina com operador, ele é removido antes do cálculo, para que não ocorra erro de sintaxe.
  if (Operador(conta.slice(-1))) {
    conta = conta.slice(0, -1);
  }

/*
O eval respeita a ordem das operações, Porém não é tão indicado, por deixar o funcionamento mais lento.
Além disso, o eval é certamente um perigo em relação a segurança dos dados do usuário(não utilizar mais).
*/
let resultado = eval(conta);


/*
Infinity vai nos conduzir quando tentarmos dividir por zero. Mostrará "Erro".
isNaN significa is not a number, ou seja, detecta erros.
*/
  if (resultado === Infinity || resultado === -Infinity || isNaN(resultado)) {
    visor.value = "Erro";
/*toFixed vai limitar a quantidade de casas decimais, o que é necessário.
Number vai garantir que tudo seja lido como número, o que remove zeros desnecessários.
toString transforma em texto para o visor.
*/    
  } else {
    visor.value = Number(resultado.toFixed(8)).toString();
  }
}

//Diz ao navegador para entrar na função caso haja clique em algum botão.
teclado.addEventListener("click", function (evento) {

//Target é o botão que foi clicado.
  let botao = evento.target;

//Se o clique foi nas divs vazias, o clique é ignorado.
//classList.contains verifica se o elemento tem a classe btn.
//o ! inverte.
  if (!botao.classList.contains("btn")) {
    return;
  }

//Pega o valor que foi escrito no html.
  let valor = botao.value;

//Decide o que fazer.
//limpa todas as valores.
  if (valor === "CE") {
    limpar();
  } 
  //Apaga o último valor.
  else if (valor === "DEL") {
    apagar();
  } 
  //Calcula o valor.
  else if (valor === "=") {
    calcular();
  } 
  //O que ficou vai para adicionar.
  else {
    adicionar(valor);
  }
});

//Fim do Código ;)