"use strict";
// Usando "var" a variável nome estará acessível em qualquer escopo
// Usando "let" a variável estará acessível apenas no escopo onde esta localizada
// Pelo controle maior do "let" é recomendado dar preferência a ele
// É possível alterar uma variável let com um tipo de valor diferente
// "Const" garante que o valor atribuído seja o mesmo o programa todo, impossibilitando alterações em seu conteúdo.

let nome = "Lucas";
nome = "CFB Cursos";
nome = 10;

const curso = "Javascript";
// curso = "html"; Não é possivel realizar isso

console.log(nome);